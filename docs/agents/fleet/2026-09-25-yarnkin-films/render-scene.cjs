// Renders a Yarnkin film's picture layer at 30 fps. The real <Mascot> runs on
// requestAnimationFrame and Math.random, so Playwright's fake clock drives
// time and a seeded Math.random makes every render identical.
// Usage: node render-scene.cjs <film> <out.mp4> [t0 t1]   |   --stills <film> <outdir> t1 t2 ...
const { chromium } = require("/home/pk/git/available/node_modules/playwright");
const { spawn } = require("child_process");
const path = require("path");
const FPS = 30, STEP = 1000 / FPS;

async function open(film) {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1080, height: 1920 } });
  await p.addInitScript(() => { let s = 20260925; Math.random = () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296); });
  await p.clock.install({ time: 0 });
  await p.goto("file://" + process.cwd() + "/scene.html?v=" + film);
  await p.clock.runFor(STEP);
  return { b, p };
}
async function frameAt(p, i) { await p.evaluate(t => window.__frame(t), i / FPS); await p.clock.runFor(STEP); }

(async () => {
  const a = process.argv.slice(2);
  if (a[0] === "--stills") {
    const [, film, out, ...ts] = a; const { b, p } = await open(film);
    const want = ts.map(Number).sort((x, y) => x - y); let i = 0;
    for (const t of want) { while (i / FPS < t - 1e-6) await frameAt(p, i++); await p.screenshot({ path: path.join(out, `${film}-t${t.toFixed(1)}.png`) }); }
    await b.close(); return;
  }
  const [film, out, s0, s1] = a; const { b, p } = await open(film);
  const dur = await p.evaluate(() => window.__duration);
  const t0 = Number(s0 || 0), t1 = Number(s1 || dur);
  const ff = spawn(path.join(process.env.HOME, ".local/bin/ffmpeg"), ["-y", "-loglevel", "error", "-f", "image2pipe", "-framerate", String(FPS), "-c:v", "png", "-i", "-", "-c:v", "libx264", "-crf", "14", "-pix_fmt", "yuv420p", out]);
  for (let i = 0; i < Math.round(t1 * FPS); i++) {
    await frameAt(p, i);
    if (i >= Math.round(t0 * FPS)) {
      const buf = await p.screenshot({ type: "png" });
      if (!ff.stdin.write(buf)) await new Promise(r => ff.stdin.once("drain", r));
    }
  }
  ff.stdin.end(); await new Promise(r => ff.on("close", r)); await b.close();
  console.log(out, Math.round((t1 - t0) * FPS), "frames");
})().catch(e => { console.error(e); process.exit(1); });
