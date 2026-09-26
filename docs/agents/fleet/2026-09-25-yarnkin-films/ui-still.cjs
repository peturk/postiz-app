// Renders the UI layer at given times over the matching scene stills, for
// layout checks without a full assemble. Usage: node ui-still.cjs <film> <dir> t1 t2 ...
const { chromium } = require("/home/pk/git/available/node_modules/playwright");
const fs = require("fs");
(async () => {
  const [film, dir, ...ts] = process.argv.slice(2);
  const icon = "data:image/png;base64," + fs.readFileSync("art/yarnkin-wordmark.png").toString("base64");
  fs.writeFileSync("ui.still.html", fs.readFileSync("ui-yk.html", "utf8").replace(/__ICON__/g, icon).replace("__COPY__", fs.readFileSync("copy/final.json", "utf8")));
  const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1080, height: 1920 } });
  await p.goto("file://" + process.cwd() + "/ui.still.html?v=" + film); await p.evaluate(() => document.fonts.ready);
  for (const t of ts) { await p.evaluate(t => window.__frame(t), Number(t)); await p.screenshot({ path: `${dir}/${film}-ui-t${Number(t).toFixed(1)}.png`, omitBackground: true }); }
  await b.close();
})();
