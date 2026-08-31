import { createRequire } from "node:module";
import { readFileSync } from "node:fs";

const require = createRequire(import.meta.url);
const { chromium } = require("/home/pk/git/available/node_modules/playwright");

const generatedRoot = "/home/pk/.codex/generated_images/019fe7f3-a10c-71a0-811b-cc14a36f2b85";
const sporbokPublic = "/home/pk/git/available/public";
const yarnkinRoot = "/home/pk/git/yarnkin";

const dataUrl = (path, mimeType) =>
  `data:${mimeType};base64,${readFileSync(path).toString("base64")}`;

const browser = await chromium.launch({ args: ["--no-sandbox", "--disable-setuid-sandbox"] });

const sporbokVariants = [
  {
    name: "sporbok-summer-utility-clean",
    background: `${generatedRoot}/exec-d20a60de-f3af-4a80-acac-fc07208c6518.png`,
    eyebrow: "SUMAR · YFIRSÝN Á VETTVANGI",
    headline: "Sjáðu stöðuna.<br>Kláraðu verkið.",
    detail: "Mæting, verk og reikningsdrög á einum stað.",
  },
  {
    name: "sporbok-summer-service-van-clean",
    background: `${generatedRoot}/exec-41489bf5-f0fc-434b-8c43-d5e9896509a5.png`,
    eyebrow: "SUMAR · VINNUDAGURINN Í SÍMANUM",
    headline: "Minna vesen.<br>Meira klárað.",
    detail: "Teymið sér það sama, hvort sem það er úti eða inni.",
  },
  {
    name: "sporbok-summer-harbor-clean",
    background: `${generatedRoot}/exec-224813f5-b41d-4c7e-a1e6-51588224f887.png`,
    eyebrow: "SUMAR · TEYMIÐ Á EINUM STAÐ",
    headline: "Verkið skráð.<br>Reikningurinn tilbúinn.",
    detail: "Haltu utan um daginn án pappíra og eftirvinnu.",
  },
];

for (const variant of sporbokVariants) {
  const page = await browser.newPage({ viewport: { width: 2030, height: 776 }, deviceScaleFactor: 1 });
  const backgroundUrl = dataUrl(variant.background, "image/png");
  const iconUrl = dataUrl(`${sporbokPublic}/brand/sporbok-icon.png`, "image/png");
  const fontUrl = dataUrl(`${sporbokPublic}/sporbok-bento/fonts/Archivo.woff2`, "font/woff2");

  await page.setContent(`<!doctype html>
  <html>
    <head>
      <meta charset="utf-8">
      <style>
        @font-face { font-family: Archivo; src: url("${fontUrl}") format("woff2"); font-weight: 100 900; font-display: block; }
        * { box-sizing: border-box; }
        html, body { margin: 0; width: 2030px; height: 776px; overflow: hidden; }
        body { background: url("${backgroundUrl}") center / cover no-repeat; font-family: Archivo, sans-serif; }
        .panel {
          position: absolute;
          left: 104px;
          top: 70px;
          width: 760px;
          min-height: 636px;
          padding: 46px 52px 42px;
          color: #fff;
          background: rgba(7, 10, 13, .76);
          border: 1px solid rgba(255, 255, 255, .22);
          box-shadow: 0 26px 80px rgba(0, 0, 0, .24);
          backdrop-filter: blur(12px) saturate(.86);
        }
        .brand { display: flex; align-items: center; gap: 20px; }
        .brand img { display: block; width: 92px; height: 92px; border-radius: 20px; }
        .brand span { font-size: 58px; font-weight: 820; letter-spacing: -.052em; }
        .eyebrow { margin-top: 46px; color: rgba(255,255,255,.72); font-size: 19px; font-weight: 700; letter-spacing: .14em; }
        h1 { margin: 20px 0 0; max-width: 650px; font-size: 61px; font-weight: 760; letter-spacing: -.048em; line-height: 1.02; }
        .rule { width: 86px; height: 5px; margin-top: 32px; background: #fff; }
        p { margin: 26px 0 0; max-width: 590px; color: rgba(255,255,255,.82); font-size: 25px; font-weight: 470; letter-spacing: -.012em; line-height: 1.28; }
      </style>
    </head>
    <body>
      <main class="panel">
        <div class="brand"><img src="${iconUrl}" alt=""><span>Sporbók</span></div>
        <div class="eyebrow">${variant.eyebrow}</div>
        <h1>${variant.headline}</h1>
        <div class="rule"></div>
        <p>${variant.detail}</p>
      </main>
    </body>
  </html>`, { waitUntil: "networkidle" });

  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: `${generatedRoot}/${variant.name}.png`, type: "png" });
  await page.close();
}

const yarnkinBackground = dataUrl(`${generatedRoot}/exec-056bf4a6-9e29-4c62-82b2-c44e10487835.png`, "image/png");
const yarnkinWordmark = dataUrl(`${yarnkinRoot}/web/src/web/assets/brand/yarnkin-wordmark.png`, "image/png");
const yarnkinMascot = dataUrl(`${generatedRoot}/yarnkin-mascot-standalone.png`, "image/png");
const yarnkinVariants = [
  {
    name: "yarnkin-summer-city-free-account",
    headline: "Rólegar myndabækur<br>frá Reykjavík.",
    action: "Stofna ókeypis aðgang",
  },
  {
    name: "yarnkin-summer-city-tonight",
    headline: "Ein ókeypis saga.<br>Í kvöld.",
    action: "Byrja að lesa á yarnkin.com",
  },
  {
    name: "yarnkin-summer-city-kind-hearts",
    headline: "Notalegar sögur.<br>Hlý hjörtu. Stórir draumar.",
    action: "Skoða opnar sögur",
  },
];

for (const variant of yarnkinVariants) {
  const page = await browser.newPage({ viewport: { width: 2027, height: 776 }, deviceScaleFactor: 1 });
  await page.setContent(`<!doctype html>
  <html>
    <head>
      <meta charset="utf-8">
      <style>
        * { box-sizing: border-box; }
        html, body { margin: 0; width: 2027px; height: 776px; overflow: hidden; }
        body { background: url("${yarnkinBackground}") center / cover no-repeat; }
        .message {
          position: absolute;
          z-index: 4;
          left: 1010px;
          top: 62px;
          width: 650px;
          padding: 28px 40px 30px;
          color: #44312b;
          background: rgba(255, 247, 224, .74);
          border: 1px solid rgba(111, 79, 65, .20);
          border-radius: 30px;
          box-shadow: 0 20px 54px rgba(86, 56, 44, .13);
          backdrop-filter: blur(10px) saturate(.92);
        }
        .wordmark { display: block; width: 390px; height: auto; }
        h1 { margin: 14px 0 0; font-family: Georgia, "Times New Roman", serif; font-size: 42px; font-weight: 700; letter-spacing: -.035em; line-height: 1.02; }
        .action { display: inline-block; margin-top: 22px; padding: 12px 20px 13px; color: #fffaf0; background: #62463c; border-radius: 999px; font-family: Arial, sans-serif; font-size: 20px; font-weight: 700; letter-spacing: .005em; }
        .mascot-shadow { position: absolute; z-index: 1; left: 1490px; top: 640px; width: 300px; height: 54px; border-radius: 50%; background: rgba(71, 51, 37, .20); filter: blur(14px); }
        .mascot { position: absolute; z-index: 2; left: 1430px; top: 390px; width: 400px; height: 400px; object-fit: contain; filter: drop-shadow(0 18px 18px rgba(76, 48, 32, .23)); }
        .foreground { position: absolute; z-index: 3; inset: 0; background: url("${yarnkinBackground}") center / cover no-repeat; clip-path: inset(650px 0 0 0); }
      </style>
    </head>
    <body>
      <section class="message">
        <img class="wordmark" src="${yarnkinWordmark}" alt="Yarnkin">
        <h1>${variant.headline}</h1>
        <div class="action">${variant.action}</div>
      </section>
      <div class="mascot-shadow"></div>
      <img class="mascot" src="${yarnkinMascot}" alt="">
      <div class="foreground"></div>
    </body>
  </html>`, { waitUntil: "networkidle" });

  await page.screenshot({ path: `${generatedRoot}/${variant.name}.png`, type: "png" });
  await page.close();
}

await browser.close();
