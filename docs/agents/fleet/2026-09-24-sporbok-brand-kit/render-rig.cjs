// Renders a stretch of a film straight from the rig (text-free, 30 fps), as a
// fallback for generated shots with defects. The rig keeps its own life
// (breathing, blinks, z); only the timeline clock is stepped.
// Usage: node render-rig.cjs <film> <t0> <t1> <out.mp4>
const { chromium } = require("/home/pk/git/available/node_modules/playwright");
const { spawn } = require("child_process");
const fs = require("fs");
const path = require("path");
(async () => {
  const [film, a, b, out] = process.argv.slice(2);
  const t0 = Number(a), t1 = Number(b), FPS = 30;
  const icon = "data:image/png;base64," + fs.readFileSync("/home/pk/git/available/public/brand/sporbok-icon.png").toString("base64");
  fs.writeFileSync("video.build.html", fs.readFileSync("video.html", "utf8").replace("__ICON__", icon));
  const br = await chromium.launch();
  const p = await br.newPage({ viewport: { width: 1080, height: 1920 } });
  await p.goto("file://" + process.cwd() + "/video.build.html?v=" + film + "&clean=1");
  await p.evaluate(() => document.fonts.ready);
  await p.evaluate(() => window.SporbokCast.manual(true));
  // Run up to t0 so every tween and mood change before it has happened.
  await p.evaluate(t => { for (let i = 0; i <= Math.round(t * 30); i++) { window.__frame(i / 30); window.SporbokCast.step(1 / 30); } }, t0);
  const ff = spawn(path.join(process.env.HOME, ".local/bin/ffmpeg"), ["-y", "-loglevel", "error", "-f", "image2pipe", "-framerate", String(FPS), "-c:v", "png", "-i", "-",
    "-c:v", "libx264", "-crf", "14", "-pix_fmt", "yuv420p", out]);
  const n = Math.round((t1 - t0) * FPS);
  for (let i = 1; i <= n; i++) {
    await p.evaluate(t => { window.__frame(t); window.SporbokCast.step(1 / 30); }, t0 + i / FPS);
    const buf = await p.screenshot({ type: "png", clip: { x: 0, y: 0, width: 1080, height: 1920 } });
    if (!ff.stdin.write(buf)) await new Promise(r => ff.stdin.once("drain", r));
  }
  ff.stdin.end(); await new Promise(r => ff.on("close", r)); await br.close();
  console.log(out, n, "frames");
})().catch(e => { console.error(e); process.exit(1); });
