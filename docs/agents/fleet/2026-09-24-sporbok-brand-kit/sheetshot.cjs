const { chromium } = require("/home/pk/git/available/node_modules/playwright");
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1500, height: 900 }, deviceScaleFactor: 1 });
  const errs = []; p.on("pageerror", e => errs.push(e.message));
  await p.goto("file://" + process.cwd() + "/" + (process.argv[2]||"sheet.html"));
  await p.waitForTimeout(500);
  await p.screenshot({ path: process.argv[3]||"sheet.png", fullPage: true });
  console.log("errors:", JSON.stringify(errs));
  await b.close();
})();
