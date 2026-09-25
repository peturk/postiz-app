// v2 feature films: generated picture + UI layer (ui.html) + a real audio mix.
// Usage: node assemble2.cjs <film> <clip1.mp4> [clip2.mp4 ...] [--feed]
//   optional: vo/<film>/lines.json  [{ "t": 0.4, "file": "vo/<film>/01.wav" }, ...]
//   optional: music/<film>.mp3 or music/bed.mp3
//
// Audio rules, learned the hard way:
// - Generated clip audio is not used. Even when asked for clear sound design it
//   came back at -40 to -60 LUFS: boosting it made hiss, gating it per shot made
//   a 5-6 dB drop at the joins, and its hard cuts at the joins clicked.
// - UI sounds come from sfx/*.wav at the event times ui.html reports, each with
//   a 5 ms fade-in so a non-zero first sample cannot click.
// - Music ducks under the voiceover (sidechain).
// - Mastering is two-pass: the premix is measured, then one static gain brings
//   it to -14 LUFS integrated under a -1.5 dBTP limiter (the common target for
//   Reels and Facebook). Single-pass loudnorm pumped like an AGC.
const { chromium } = require("/home/pk/git/available/node_modules/playwright");
const { spawn, execFileSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const BIN = path.join(process.env.HOME, ".local/bin");
const FPS = 30;

const probe = (a) => execFileSync(path.join(BIN, "ffprobe"), a).toString().trim();
const durationOf = (f) => parseFloat(probe(["-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", f]));
function lufs(f) {
  try {
    const r = require("child_process").spawnSync(path.join(BIN, "ffmpeg"), ["-hide_banner", "-nostats", "-i", f, "-af", "ebur128", "-f", "null", "-"], { encoding: "utf8" });
    const m = [...r.stderr.matchAll(/I:\s+(-?[0-9.]+|-inf) LUFS/g)].pop();
    return m ? parseFloat(m[1]) : -99;
  } catch { return -99; }
}
function run(args) {
  return new Promise((resolve, reject) => {
    const ff = spawn(path.join(BIN, "ffmpeg"), ["-y", "-loglevel", "error", ...args]);
    ff.stderr.on("data", d => process.stderr.write(d));
    ff.on("close", c => c === 0 ? resolve() : reject(new Error("ffmpeg exit " + c)));
  });
}

(async () => {
  const args = process.argv.slice(2);
  const feed = args.includes("--feed");
  const [film, ...clips] = args.filter(a => !a.startsWith("--"));
  const W = 1080, H = feed ? 1350 : 1920, tag = feed ? "feed" : "reel";
  const icon = "data:image/png;base64," + fs.readFileSync("/home/pk/git/available/public/brand/sporbok-icon.png").toString("base64");
  fs.writeFileSync("ui.build.html", fs.readFileSync("ui.html", "utf8").replace(/__ICON__/g, icon));
  fs.mkdirSync("i2v-out", { recursive: true });

  const b = await chromium.launch();
  const page = await b.newPage({ viewport: { width: W, height: H } });
  await page.goto("file://" + process.cwd() + "/ui.build.html?v=" + film + (feed ? "&fmt=feed" : ""));
  await page.evaluate(() => document.fonts.ready);
  const total = await page.evaluate(() => window.__duration);
  const feedY = await page.evaluate(() => window.__feedY);
  const events = await page.evaluate(() => window.__sfx);

  const pictureLen = clips.reduce((s, c) => s + durationOf(c), 0);
  const pad = Math.max(0, total - pictureLen + 0.5).toFixed(2);
  const clipIn = clips.flatMap(c => ["-i", c]);
  const chain = clips.map((c, i) => `[${i}:v]scale=1080:1920:flags=lanczos,fps=${FPS},setsar=1[m${i}];`).join("")
    + clips.map((c, i) => `[m${i}]`).join("") + `concat=n=${clips.length}:v=1:a=0,`
    + `tpad=stop_mode=clone:stop_duration=${pad},trim=0:${total},setpts=PTS-STARTPTS` + (feed ? `,crop=1080:1350:0:${feedY}` : ``);

  // Brightness behind the headline band, for legible ink.
  const lumRaw = execFileSync(path.join(BIN, "ffmpeg"), ["-loglevel", "error", ...clipIn, "-filter_complex",
    chain + `,crop=1000:420:40:${feed ? 60 : 345},signalstats,metadata=print:key=lavfi.signalstats.YAVG:file=-`, "-f", "null", "-"],
    { maxBuffer: 64 * 1024 * 1024 }).toString();
  await page.evaluate(arr => window.__setLum(arr), [...lumRaw.matchAll(/YAVG=([0-9.]+)/g)].map(m => parseFloat(m[1])));

  // UI layer to an alpha file.
  const layer = `i2v-out/.ui-${film}-${tag}.mov`;
  const ffl = spawn(path.join(BIN, "ffmpeg"), ["-y", "-loglevel", "error", "-f", "image2pipe", "-framerate", String(FPS), "-c:v", "png", "-i", "-", "-c:v", "qtrle", layer]);
  const frames = Math.round(total * FPS);
  for (let i = 0; i < frames; i++) {
    await page.evaluate(t => window.__frame(t), i / FPS);
    const buf = await page.screenshot({ type: "png", omitBackground: true, clip: { x: 0, y: 0, width: W, height: H } });
    if (!ffl.stdin.write(buf)) await new Promise(r => ffl.stdin.once("drain", r));
  }
  ffl.stdin.end(); await new Promise(r => ffl.on("close", r)); await b.close();

  // ---- audio graph ----
  const inputs = [...clipIn, "-i", layer];
  let n = clips.length + 1;
  let fc = "";
  const mixIn = [];
  // A silent bed fixes the mix length and format.
  fc += `anullsrc=r=48000:cl=stereo,atrim=0:${total}[bed];`;
  mixIn.push("[bed]");
  // UI sounds.
  const sfxLevel = { pop: -14, tap: -12, notif: -10, chime: -14 };
  events.filter(e => e.t < total).forEach((e, k) => {
    inputs.push("-i", `sfx/${e.k}.wav`);
    fc += `[${n}:a]aresample=48000,aformat=channel_layouts=stereo,afade=t=in:d=0.005,volume=${sfxLevel[e.k]}dB,adelay=${Math.round(e.t * 1000)}|${Math.round(e.t * 1000)}[s${k}];`;
    mixIn.push(`[s${k}]`); n++;
  });
  // Voiceover (optional).
  const voPath = `vo/${film}/lines.json`;
  const vo = fs.existsSync(voPath) ? JSON.parse(fs.readFileSync(voPath, "utf8")) : [];
  if (vo.length) {
    const labels = [];
    vo.forEach((l, k) => {
      inputs.push("-i", l.file);
      fc += `[${n}:a]aresample=48000,aformat=channel_layouts=stereo,loudnorm=I=-16:TP=-2:LRA=7,adelay=${Math.round(l.t * 1000)}|${Math.round(l.t * 1000)}[v${k}];`;
      labels.push(`[v${k}]`); n++;
    });
    fc += labels.join("") + `amix=inputs=${labels.length}:normalize=0,apad,atrim=0:${total},asplit[vo][vokey];`;
    mixIn.push("[vo]");
  }
  // Music (optional), ducked under the voice.
  const musicFile = [`music/${film}.mp3`, `music/${film}.wav`, "music/bed.mp3", "music/bed.wav"].find(f => fs.existsSync(f));
  if (musicFile) {
    inputs.push("-i", musicFile);
    fc += `[${n}:a]aresample=48000,aformat=channel_layouts=stereo,loudnorm=I=-26:TP=-3,atrim=0:${total},afade=t=out:st=${(total - 1.5).toFixed(2)}:d=1.5[mus0];`;
    if (vo.length) fc += `[mus0][vokey]sidechaincompress=threshold=0.03:ratio=6:attack=40:release=400[mus];`;
    else fc += `[mus0]anull[mus];`;
    mixIn.push("[mus]"); n++;
  } else if (vo.length) {
    fc += `[vokey]anullsink;`;
  }
  fc += `${mixIn.join("")}amix=inputs=${mixIn.length}:normalize=0,atrim=0:${total},afade=t=out:st=${(total - 1.0).toFixed(2)}:d=1.0[outa];`;
  // ---- video ----
  fc += clips.map((c, i) => `[${i}:v]scale=1080:1920:flags=lanczos,fps=${FPS},setsar=1[v${i}x];`).join("")
    + clips.map((c, i) => `[v${i}x]`).join("") + `concat=n=${clips.length}:v=1:a=0,tpad=stop_mode=clone:stop_duration=${pad},trim=0:${total},setpts=PTS-STARTPTS`
    + (feed ? `,crop=1080:1350:0:${feedY}` : ``) + `,format=yuv420p[base];[base][${clips.length}:v]overlay=0:0:format=auto,format=yuv420p[outv]`;

  const out = `i2v-out/sporbok-${film}-v2-${feed ? "1080x1350" : "1080x1920"}.mp4`;
  // Pass 1: picture plus the unmastered mix (lossless).
  const pre = `i2v-out/.pre-${film}-${tag}.mkv`;
  await run([...inputs, "-filter_complex", fc, "-map", "[outv]", "-map", "[outa]", "-r", String(FPS),
    "-c:v", "libx264", "-preset", "slow", "-crf", "18", "-c:a", "pcm_s24le", "-t", String(total), pre]);
  // Pass 2: one static gain to -14 LUFS, then a true-peak limiter.
  const gain = -14 - lufs(pre);
  await run(["-i", pre, "-map", "0:v", "-map", "0:a", "-c:v", "copy",
    "-af", `volume=${gain.toFixed(2)}dB,alimiter=limit=${Math.pow(10, -1.5 / 20).toFixed(4)}:attack=2:release=60:level=disabled`,
    "-c:a", "aac", "-b:a", "192k", "-ar", "48000", "-movflags", "+faststart", out]);
  fs.unlinkSync(layer); fs.unlinkSync(pre);
  console.log(out, "ok", frames, "frames", `sfx=${events.length} vo=${vo.length} music=${musicFile || "none"}`);
})().catch(e => { console.error(e.message); process.exit(1); });
