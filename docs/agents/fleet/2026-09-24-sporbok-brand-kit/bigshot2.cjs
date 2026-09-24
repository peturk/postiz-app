const { chromium } = require("/home/pk/git/available/node_modules/playwright");
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1400, height: 900 } });
  const errs=[]; p.on("pageerror", e => errs.push(e.message));
  const jobs = [["?m=neutral,content,busy,happy,joy,proud","","c1.png"],["?m=fond,curious,thinking,surprised,oops,asleep","","c2.png"]];
  for (const [q, hash, out] of jobs) {
    await p.goto("file://" + process.cwd() + "/moods-big2.html" + q); await p.waitForTimeout(400);
    await p.screenshot({ path: out, fullPage: true });
  }
  console.log(JSON.stringify(errs));
  await b.close();
})();
