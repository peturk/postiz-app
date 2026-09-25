// Exports text-free keyframes from a film's timeline at given times, plus
// character model sheets, for image-to-video.
// Usage: node keyframes.cjs <film> <outdir> t1 t2 ...   |   node keyframes.cjs --sheets <outdir>
const { chromium } = require("/home/pk/git/available/node_modules/playwright");
const fs = require("fs");
(async () => {
  const args = process.argv.slice(2);
  const icon = "data:image/png;base64," + fs.readFileSync("/home/pk/git/available/public/brand/sporbok-icon.png").toString("base64");
  fs.writeFileSync("video.build.html", fs.readFileSync("video.html", "utf8").replace("__ICON__", icon));
  const b = await chromium.launch();
  if (args[0] === "--sheets") {
    const out = args[1]; fs.mkdirSync(out, { recursive: true });
    const p = await b.newPage({ viewport: { width: 1024, height: 1024 } });
    await p.setContent('<!doctype html><meta charset="utf-8"><body style="margin:0;background:#E6E9EC"><div id="h" style="width:1024px;height:1024px;display:grid;place-items:center"></div></body>');
    await p.addScriptTag({ path: "cast.js" });
    for (const k of ["van", "box", "hat", "note"]) {
      await p.evaluate(k => { const h = document.getElementById("h"); h.innerHTML = ""; SporbokCast.mount(h, k, { mood: "neutral", live: false }); h.firstChild.style.width = "620px"; }, k);
      await p.screenshot({ path: `${out}/model-${k}.png` });
    }
    console.log("sheets ->", out);
  } else {
    // Times may carry pose overrides: 5.0@van=sleepy,hat=asleep
    const [film, out, ...times] = args; fs.mkdirSync(out, { recursive: true });
    const p = await b.newPage({ viewport: { width: 1080, height: 1920 } });
    for (const spec of times) {
      const [ts, pose] = spec.split("@");
      const t = Number(ts);
      await p.goto("file://" + process.cwd() + "/video.build.html?v=" + film + "&clean=1");
      await p.evaluate(() => { window.SporbokCast.options.noBlink = true; return document.fonts.ready; });
      await p.evaluate(t => { for (let i = 0; i <= Math.round(t * 30); i++) window.__frame(i / 30); }, t);
      if (pose) {
        await p.evaluate(pose => {
          pose.split(",").forEach(kv => { const [k, m] = kv.split("="); window.__cast[k].setMood(m); });
          // Settle the rig only; the timeline (lighting, moves) stays at t.
          for (let i = 0; i < 30; i++) window.SporbokCast.step(1 / 30);
        }, pose);
      }
      const name = `${film}-t${t.toFixed(1)}${pose ? "-" + pose.replace(/[=,]/g, "-") : ""}.png`;
      await p.screenshot({ path: `${out}/${name}`, clip: { x: 0, y: 0, width: 1080, height: 1920 } });
    }
    console.log(film, times.length, "keyframes ->", out);
  }
  await b.close();
})();
