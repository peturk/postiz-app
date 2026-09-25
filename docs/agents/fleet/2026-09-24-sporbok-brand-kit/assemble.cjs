// Assembles an image-to-video film: conformed generated clips + our text layers
// (captions, clock, card lettering, end card) + foley, as a 9:16 master or 4:5 feed cut.
// Usage: node assemble.cjs <film> <clip1.mp4> [clip2.mp4 ...] [--feed]
//
// Stages
//   0. measure brightness behind the text, per frame (legible ink, see overlay.html)
//   1. render the text layer and, if the film has job cards, the card-lettering layer
//   2. composite: picture, then card lettering masked out wherever a character passes
//      in front of a card (difference against a clean reference frame), then text
const { chromium } = require("/home/pk/git/available/node_modules/playwright");
const { spawn, execFileSync } = require("child_process");
const fs = require("fs");
const path = require("path");
const BIN = path.join(process.env.HOME, ".local/bin");
const FPS = 30;

const probe = (args) => execFileSync(path.join(BIN, "ffprobe"), args).toString().trim();
const hasAudio = (f) => probe(["-v", "error", "-select_streams", "a", "-show_entries", "stream=index", "-of", "csv=p=0", f]).length > 0;
const durationOf = (f) => parseFloat(probe(["-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", f]));

function run(args) {
  return new Promise((resolve, reject) => {
    const ff = spawn(path.join(BIN, "ffmpeg"), ["-y", "-loglevel", "error", ...args]);
    ff.stderr.on("data", d => process.stderr.write(d));
    ff.on("close", code => code === 0 ? resolve() : reject(new Error("ffmpeg exit " + code)));
  });
}

(async () => {
  const args = process.argv.slice(2);
  const feed = args.includes("--feed");
  const [film, ...clips] = args.filter(a => !a.startsWith("--"));
  const W = 1080, H = feed ? 1350 : 1920;
  const tag = feed ? "feed" : "reel";
  const icon = "data:image/png;base64," + fs.readFileSync("/home/pk/git/available/public/brand/sporbok-icon.png").toString("base64");
  fs.writeFileSync("overlay.build.html", fs.readFileSync("overlay.html", "utf8").replace("__ICON__", icon));
  fs.mkdirSync("i2v-out", { recursive: true });

  const pictureLen = clips.reduce((s, c) => s + durationOf(c), 0);
  const b = await chromium.launch();
  const page = await b.newPage({ viewport: { width: W, height: H } });
  const url = (layer) => "file://" + process.cwd() + "/overlay.build.html?v=" + film + (feed ? "&fmt=feed" : "") + "&layer=" + layer;
  await page.goto(url("text"));
  await page.evaluate(() => document.fonts.ready);
  const total = await page.evaluate(() => window.__duration);
  const cardRef = await page.evaluate(() => window.__cardRef);
  const hasCards = (await page.evaluate(() => window.__cardRects.length)) > 0;
  const feedY = await page.evaluate(() => window.__feedY);

  // The picture chain, shared by every stage so all of them see the same frames.
  const pad = Math.max(0, total - pictureLen + 0.5).toFixed(2);
  const pictureChain = clips.map((c, i) => `[${i}:v]scale=1080:1920:flags=lanczos,fps=${FPS},setsar=1[m${i}];`).join("")
    + clips.map((c, i) => `[m${i}]`).join("") + `concat=n=${clips.length}:v=1:a=0,`
    + `tpad=stop_mode=clone:stop_duration=${pad},trim=0:${total},setpts=PTS-STARTPTS`
    + (feed ? `,crop=1080:1350:0:${feedY}` : ``);
  const clipInputs = clips.flatMap(c => ["-i", c]);

  // Stage 0: brightness behind the text.
  const lumRaw = execFileSync(path.join(BIN, "ffmpeg"), ["-loglevel", "error", ...clipInputs, "-filter_complex",
    pictureChain + `,crop=1000:${feed ? 440 : 520}:40:${feed ? 30 : 90},signalstats,metadata=print:key=lavfi.signalstats.YAVG:file=-`,
    "-f", "null", "-"], { maxBuffer: 64 * 1024 * 1024 }).toString();
  const lum = [...lumRaw.matchAll(/YAVG=([0-9.]+)/g)].map(m => parseFloat(m[1]));

  // Stage 1: layers to alpha files.
  async function renderLayer(layer, withLum) {
    await page.goto(url(layer));
    await page.evaluate(() => document.fonts.ready);
    if (withLum) await page.evaluate(arr => window.__setLum(arr), lum);
    const file = `i2v-out/.layer-${film}-${tag}-${layer}.mov`;
    const ff = spawn(path.join(BIN, "ffmpeg"), ["-y", "-loglevel", "error", "-f", "image2pipe", "-framerate", String(FPS), "-c:v", "png", "-i", "-", "-c:v", "qtrle", file]);
    ff.stderr.on("data", d => process.stderr.write(d));
    const frames = Math.round(total * FPS);
    for (let i = 0; i < frames; i++) {
      await page.evaluate(t => window.__frame(t), i / FPS);
      const buf = await page.screenshot({ type: "png", omitBackground: true, clip: { x: 0, y: 0, width: W, height: H } });
      if (!ff.stdin.write(buf)) await new Promise(r => ff.stdin.once("drain", r));
    }
    ff.stdin.end();
    await new Promise(r => ff.on("close", r));
    return file;
  }
  const textLayer = await renderLayer("text", true);
  const cardLayer = hasCards ? await renderLayer("cards", false) : null;
  await b.close();

  // A clean reference frame for the occlusion mask: the picture at `cardRef`,
  // when the cards are known to be clear of characters.
  let refPng = null;
  if (hasCards) {
    refPng = `i2v-out/.ref-${film}-${tag}.png`;
    await run([...clipInputs, "-filter_complex", pictureChain + `,trim=start=${cardRef}:duration=0.1,setpts=PTS-STARTPTS`, "-frames:v", "1", refPng]);
  }

  // Stage 2: composite.
  const n = clips.length;
  const inputs = [...clipInputs, "-i", textLayer];
  if (hasCards) inputs.push("-i", cardLayer, "-loop", "1", "-framerate", String(FPS), "-i", refPng);
  let fc = "";
  clips.forEach((c, i) => {
    fc += `[${i}:v]scale=1080:1920:flags=lanczos,fps=${FPS},setsar=1[v${i}];`;
    fc += hasAudio(c)
      ? `[${i}:a]aresample=48000,aformat=channel_layouts=stereo[a${i}];`
      : `anullsrc=r=48000:cl=stereo,atrim=0:${durationOf(c)}[a${i}];`;
  });
  fc += clips.map((c, i) => `[v${i}][a${i}]`).join("") + `concat=n=${n}:v=1:a=1[pv][pa];`;
  fc += `[pv]tpad=stop_mode=clone:stop_duration=${pad},trim=0:${total},setpts=PTS-STARTPTS`;
  fc += feed ? `,crop=1080:1350:0:${feedY},format=yuv420p[base];` : `,format=yuv420p[base];`;
  if (hasCards) {
    // keep = 255 where the picture matches the clean reference (card unoccluded).
    fc += `[base]split[b1][b2];`;
    fc += `[b2]format=gray[g];[${n + 2}:v]format=gray,trim=0:${total}[r];`;
    fc += `[g][r]blend=all_mode=difference,lutyuv=y='if(gt(val,18),255,0)',${"dilation,".repeat(14)}negate[keep];`;
    fc += `[${n + 1}:v]format=rgba,split[c1][c2];[c2]alphaextract[ca];[ca][keep]blend=all_mode=multiply[cam];[c1][cam]alphamerge[cm];`;
    fc += `[b1][cm]overlay=0:0:format=auto[withcards];`;
    fc += `[withcards][${n}:v]overlay=0:0:format=auto,format=yuv420p[outv];`;
  } else {
    fc += `[base][${n}:v]overlay=0:0:format=auto,format=yuv420p[outv];`;
  }
  fc += `[pa]apad,atrim=0:${total},loudnorm=I=-18:TP=-2:LRA=9,afade=t=out:st=${(total - 1.2).toFixed(2)}:d=1.2[outa]`;

  const out = `i2v-out/sporbok-${film}-ai-${feed ? "1080x1350" : "1080x1920"}.mp4`;
  await run([...inputs, "-filter_complex", fc, "-map", "[outv]", "-map", "[outa]", "-r", String(FPS),
    "-c:v", "libx264", "-preset", "slow", "-crf", "18", "-c:a", "aac", "-b:a", "160k", "-movflags", "+faststart", "-t", String(total), out]);
  [textLayer, cardLayer, refPng].filter(Boolean).forEach(f => fs.unlinkSync(f));
  console.log(out, "ok", Math.round(total * FPS), "frames", hasCards ? "(cards masked)" : "");
})().catch(e => { console.error(e.message); process.exit(1); });
