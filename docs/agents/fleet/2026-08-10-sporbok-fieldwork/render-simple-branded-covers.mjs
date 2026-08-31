import { createRequire } from "node:module";
import { readFileSync } from "node:fs";

const require = createRequire(import.meta.url);
const { chromium } = require("/home/pk/git/available/node_modules/playwright");

const root = "/home/pk/.codex/generated_images/019fe7f3-a10c-71a0-811b-cc14a36f2b85";
const dataUrl = (path, mime) => `data:${mime};base64,${readFileSync(path).toString("base64")}`;

const browser = await chromium.launch({ args: ["--no-sandbox", "--disable-setuid-sandbox"] });

{
  const page = await browser.newPage({ viewport: { width: 2030, height: 776 }, deviceScaleFactor: 1 });
  const background = dataUrl(`${root}/exec-431057b1-00f8-4960-9b6e-ea611ec0f09e.png`, "image/png");
  const wordmark = dataUrl("/home/pk/git/yarnkin/web/src/web/assets/brand/yarnkin-wordmark.png", "image/png");
  const displayFont = dataUrl("/home/pk/git/yarnkin/native/android/designsystem/src/main/res/font/fraunces.ttf", "font/ttf");
  const bodyFont = dataUrl("/home/pk/git/yarnkin/native/android/designsystem/src/main/res/font/nunito.ttf", "font/ttf");

  await page.setContent(`<!doctype html>
  <html>
    <head>
      <meta charset="utf-8">
      <style>
        @font-face { font-family: Fraunces; src: url("${displayFont}") format("truetype"); font-weight: 100 900; }
        @font-face { font-family: Nunito; src: url("${bodyFont}") format("truetype"); font-weight: 100 900; }
        * { box-sizing: border-box; }
        html, body { margin: 0; width: 2030px; height: 776px; overflow: hidden; }
        body { background: url("${background}") center / cover no-repeat; }
        .message {
          position: absolute;
          left: 68px;
          top: 38px;
          width: 570px;
          padding: 20px 28px 22px;
          color: #49362f;
          background: rgba(255, 248, 229, .82);
          border: 2px solid rgba(85, 57, 46, .14);
          border-radius: 34px;
          box-shadow: 0 18px 48px rgba(75, 49, 40, .16);
          backdrop-filter: blur(8px) saturate(.9);
        }
        .wordmark { display: block; width: 300px; height: auto; }
        .tagline { margin-top: 8px; font-family: Fraunces, Georgia, serif; font-size: 30px; font-weight: 650; line-height: 1.06; letter-spacing: -.025em; }
        .site { margin-top: 10px; font-family: Nunito, sans-serif; font-size: 16px; font-weight: 800; letter-spacing: .04em; }
      </style>
    </head>
    <body>
      <section class="message">
        <img class="wordmark" src="${wordmark}" alt="Yarnkin">
        <div class="tagline">Notalegar sögur. Hlý hjörtu. Stórir draumar.</div>
        <div class="site">yarnkin.com</div>
      </section>
    </body>
  </html>`, { waitUntil: "networkidle" });

  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: `${root}/yarnkin-summer-branded-v2.png`, type: "png" });
  await page.close();
}

{
  const page = await browser.newPage({ viewport: { width: 2030, height: 776 }, deviceScaleFactor: 1 });
  const background = dataUrl(`${root}/exec-8de44826-7206-43fa-b2df-bdbc2407c264.png`, "image/png");
  const icon = dataUrl("/home/pk/git/available/public/brand/sporbok-icon.png", "image/png");
  const font = dataUrl("/home/pk/git/available/public/sporbok-bento/fonts/Archivo.woff2", "font/woff2");

  await page.setContent(`<!doctype html>
  <html>
    <head>
      <meta charset="utf-8">
      <style>
        @font-face { font-family: Archivo; src: url("${font}") format("woff2"); font-weight: 100 900; }
        * { box-sizing: border-box; }
        html, body { margin: 0; width: 2030px; height: 776px; overflow: hidden; }
        body { background: url("${background}") center / cover no-repeat; font-family: Archivo, sans-serif; }
        .message {
          position: absolute;
          left: 48px;
          top: 52px;
          width: 470px;
          padding: 28px 30px 30px;
          color: #fff;
          background: rgba(5, 6, 9, .76);
          border: 1px solid rgba(255, 255, 255, .20);
          border-radius: 24px;
          box-shadow: 0 20px 54px rgba(0, 0, 0, .20);
          backdrop-filter: blur(9px);
        }
        .brand { display: flex; align-items: center; gap: 16px; }
        .brand img { display: block; width: 66px; height: 66px; border-radius: 15px; }
        .brand span { font-size: 45px; font-weight: 820; letter-spacing: -.05em; }
        .tagline { margin-top: 24px; font-size: 39px; font-weight: 760; line-height: 1.02; letter-spacing: -.04em; }
        .site { margin-top: 18px; color: rgba(255,255,255,.76); font-size: 17px; font-weight: 700; letter-spacing: .08em; }
        .patch { position: absolute; width: 27px; height: 27px; border-radius: 6px; opacity: .88; }
        .patch-left { left: 627px; top: 380px; transform: rotate(4deg); }
        .patch-right { left: 1334px; top: 249px; transform: rotate(-3deg); }
      </style>
    </head>
    <body>
      <section class="message">
        <div class="brand"><img src="${icon}" alt=""><span>Sporbók</span></div>
        <div class="tagline">Verkið skráð.<br>Reikningurinn tilbúinn.</div>
        <div class="site">sporbok.is</div>
      </section>
      <img class="patch patch-left" src="${icon}" alt="">
      <img class="patch patch-right" src="${icon}" alt="">
    </body>
  </html>`, { waitUntil: "networkidle" });

  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: `${root}/sporbok-harbor-branded-v2.png`, type: "png" });
  await page.close();
}

await browser.close();
