// Renders every template and the pose library from the same rig the page runs.
// Usage: node export.cjs  ->  out/templates/*.png, out/poses/<kind>-<mood>.png
const { chromium } = require("/home/pk/git/available/node_modules/playwright");
const fs = require("fs");
(async () => {
  fs.mkdirSync("out/templates", { recursive: true });
  fs.mkdirSync("out/poses", { recursive: true });
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1800, height: 1400 }, deviceScaleFactor: 1, reducedMotion: "reduce" });
  await p.goto("file://" + process.cwd() + "/preview.html");
  await p.evaluate(() => document.fonts.ready);
  await p.waitForTimeout(800);
  const names = ["post-offduty-1080x1350", "post-this-or-that-1080x1350", "post-proof-1080x1080", "cover-1640x624", "avatar-720", "share-card-1200x630"];
  const widths = [1080, 1080, 1080, 1640, 720, 1200];
  const heights = [1350, 1350, 1080, 624, 720, 630];
  const n = await p.$$eval(".canvas", els => els.length);
  for (let i = 0; i < n; i++) {
    await p.evaluate(([i, w, h]) => {
      let stage = document.getElementById("export-stage");
      if (!stage) {
        stage = document.createElement("div");
        stage.id = "export-stage";
        stage.className = "brand";
        stage.setAttribute("data-font", document.getElementById("brand").getAttribute("data-font"));
        stage.style.cssText = "position:fixed;left:0;top:0;z-index:99999;margin:0;padding:0";
        document.body.appendChild(stage);
      }
      stage.innerHTML = "";
      const el = document.querySelectorAll("main .canvas")[i].cloneNode(true);
      el.style.cssText += ";width:" + w + "px;height:" + h + "px;aspect-ratio:auto;max-width:none;box-shadow:none";
      const safe = el.querySelector(".safe"); if (safe) safe.remove();
      const circle = el.querySelector(".circle"); if (circle) circle.remove();
      stage.appendChild(el);
      window.scrollTo(0, 0);
    }, [i, widths[i], heights[i]]);
    await p.screenshot({ path: `out/templates/${names[i]}.png`, clip: { x: 0, y: 0, width: widths[i], height: heights[i] } });
  }
  // Pose library: transparent PNGs, one per kind x mood, 960 x 1200.
  await p.setContent('<!doctype html><meta charset="utf-8"><body style="margin:0;background:transparent"><div id="h" style="width:960px"></div></body>');
  await p.addScriptTag({ path: "cast.js" });
  const kinds = ["van", "box", "hat", "note"];
  const moods = ["neutral", "calm", "focused", "proud", "happy", "curious", "thinking", "surprised", "worried", "asleep"];
  for (const k of kinds) for (const m of moods) {
    await p.evaluate(([k, m]) => { const h = document.getElementById("h"); h.innerHTML = ""; SporbokCast.mount(h, k, { mood: m, live: false }); h.firstChild.style.width = "960px"; h.firstChild.style.height = "1200px"; }, [k, m]);
    await (await p.$("#h svg")).screenshot({ path: `out/poses/${k}-${m}.png`, omitBackground: true });
  }
  await b.close();
  console.log("templates", n, "poses", kinds.length * moods.length);
})();
