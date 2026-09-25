// Renders the directed shorts frame by frame from the rig and pipes the frames
// straight into ffmpeg (no frame files). Usage: node render-video.cjs [name...] [--feed]
const { chromium } = require("/home/pk/git/available/node_modules/playwright");
const { spawn } = require("child_process");
const fs = require("fs");
const path = require("path");
const FFMPEG = path.join(process.env.HOME, ".local/bin/ffmpeg");
const FPS = 30;
(async () => {
  const args = process.argv.slice(2);
  const feed = args.includes("--feed");
  const names = args.filter(a => !a.startsWith("--"));
  const list = names.length ? names : ["fimm", "notan", "morgunn", "sunnudagur", "tvo"];
  const icon = "data:image/png;base64," + fs.readFileSync("/home/pk/git/available/public/brand/sporbok-icon.png").toString("base64");
  fs.writeFileSync("video.build.html", fs.readFileSync("video.html", "utf8").replace("__ICON__", icon));
  fs.mkdirSync("videos", { recursive: true });
  const H = feed ? 1350 : 1920;
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1080, height: H }, deviceScaleFactor: 1 });
  const errs = []; p.on("pageerror", e => errs.push(e.message));
  for (const name of list) {
    await p.goto("file://" + process.cwd() + "/video.build.html?v=" + name + (feed ? "&fmt=feed" : ""));
    await p.evaluate(() => document.fonts.ready);
    await p.waitForTimeout(300);
    const duration = await p.evaluate(() => window.__duration);
    const out = `videos/sporbok-${name}-${feed ? "1080x1350" : "1080x1920"}.mp4`;
    const ff = spawn(FFMPEG, ["-y", "-loglevel", "error", "-f", "image2pipe", "-framerate", String(FPS), "-i", "-",
      "-c:v", "libx264", "-preset", "slow", "-crf", "18", "-pix_fmt", "yuv420p", "-movflags", "+faststart", out]);
    ff.stderr.on("data", d => process.stderr.write(d));
    const frames = Math.round(duration * FPS);
    for (let i = 0; i < frames; i++) {
      await p.evaluate(t => window.__frame(t), i / FPS);
      const buf = await p.screenshot({ type: "jpeg", quality: 95, clip: { x: 0, y: 0, width: 1080, height: H } });
      if (!ff.stdin.write(buf)) await new Promise(r => ff.stdin.once("drain", r));
    }
    ff.stdin.end();
    await new Promise(r => ff.on("close", r));
    console.log(out, frames, "frames", (fs.statSync(out).size / 1e6).toFixed(1) + " MB");
  }
  if (errs.length) console.log("page errors:", JSON.stringify(errs));
  await b.close();
})();
