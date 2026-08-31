import { createRequire } from "node:module";
import { readFileSync } from "node:fs";

const require = createRequire(import.meta.url);
const { chromium } = require("/home/pk/git/available/node_modules/playwright");

const root = "/home/pk/.codex/generated_images/019fe7f3-a10c-71a0-811b-cc14a36f2b85";
const dataUrl = (path, mime) => `data:${mime};base64,${readFileSync(path).toString("base64")}`;
const browser = await chromium.launch({ args: ["--no-sandbox", "--disable-setuid-sandbox"] });

{
  const page = await browser.newPage({ viewport: { width: 2030, height: 776 }, deviceScaleFactor: 1 });
  const background = dataUrl(`${root}/exec-e308dc0f-6cab-4b65-a661-c6f6c01420b5.png`, "image/png");
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
          right: 72px;
          top: 52px;
          width: 630px;
          padding: 30px 38px 34px;
          color: #263b46;
          isolation: isolate;
        }
        .message::before {
          content: "";
          position: absolute;
          inset: -28px -42px -38px -54px;
          z-index: -1;
          background: radial-gradient(ellipse at center, rgba(255, 252, 239, .92) 0%, rgba(255, 252, 239, .70) 49%, rgba(255, 252, 239, 0) 76%);
          filter: blur(7px);
        }
        .wordmark {
          display: block;
          width: 386px;
          height: auto;
          filter: drop-shadow(0 3px 1px rgba(255,255,255,.90)) drop-shadow(0 8px 14px rgba(44,54,62,.12));
        }
        .tagline {
          max-width: 560px;
          margin-top: 15px;
          font-family: Fraunces, Georgia, serif;
          font-size: 42px;
          font-weight: 720;
          line-height: 1.04;
          letter-spacing: -.035em;
          text-wrap: balance;
          text-shadow: 0 2px 2px rgba(255,255,255,.86), 0 7px 24px rgba(255,255,255,.72);
        }
        .cta {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: 17px;
          font-family: Nunito, sans-serif;
          font-size: 17px;
          font-weight: 850;
          letter-spacing: .01em;
        }
        .cta::before {
          content: "";
          width: 34px;
          height: 3px;
          border-radius: 999px;
          background: #e79b8d;
        }
        .site { color: #6c5c75; }
      </style>
    </head>
    <body>
      <section class="message">
        <img class="wordmark" src="${wordmark}" alt="Yarnkin">
        <div class="tagline">Þar sem barnið þitt verður hetjan.</div>
        <div class="cta">Búðu til ykkar eigin sögu <span class="site">yarnkin.com</span></div>
      </section>
    </body>
  </html>`, { waitUntil: "networkidle" });

  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: `${root}/yarnkin-puppet-show-refined.png`, type: "png" });
  await page.close();
}

{
  const page = await browser.newPage({ viewport: { width: 2030, height: 776 }, deviceScaleFactor: 1 });
  const background = dataUrl(`${root}/exec-47acd77e-2f70-48d7-b0d0-84660ac12cf5.png`, "image/png");
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
          top: 36px;
          width: 820px;
          height: 124px;
          padding: 22px 28px;
          display: flex;
          align-items: center;
          gap: 34px;
          color: #fff;
          background: rgba(5, 6, 9, .78);
          border: 1px solid rgba(255, 255, 255, .20);
          border-radius: 24px;
          box-shadow: 0 18px 50px rgba(0, 0, 0, .20);
          backdrop-filter: blur(9px);
        }
        .brand { display: flex; align-items: center; gap: 15px; flex: 0 0 auto; }
        .brand img { display: block; width: 64px; height: 64px; border-radius: 14px; }
        .brand span { font-size: 44px; font-weight: 820; letter-spacing: -.05em; }
        .divider { width: 1px; height: 66px; background: rgba(255,255,255,.24); }
        .copy { min-width: 0; }
        .tagline { display: flex; gap: 11px; font-size: 31px; font-weight: 760; line-height: 1.02; letter-spacing: -.035em; }
        .site { margin-top: 7px; color: rgba(255,255,255,.72); font-size: 14px; font-weight: 700; letter-spacing: .08em; }
      </style>
    </head>
    <body>
      <section class="message">
        <div class="brand"><img src="${icon}" alt=""><span>Sporbók</span></div>
        <div class="divider"></div>
        <div class="copy">
          <div class="tagline"><span>Sjáðu stöðuna.</span><span>Kláraðu verkið.</span></div>
          <div class="site">sporbok.is</div>
        </div>
      </section>
    </body>
  </html>`, { waitUntil: "networkidle" });

  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: `${root}/sporbok-boat-repair-clean.png`, type: "png" });
  await page.close();
}

await browser.close();
