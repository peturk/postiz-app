import { createRequire } from "node:module";
import { readFileSync } from "node:fs";

const require = createRequire(import.meta.url);
const { chromium } = require("/home/pk/git/available/node_modules/playwright");

const generatedRoot = "/home/pk/.codex/generated_images/019fe7f3-a10c-71a0-811b-cc14a36f2b85";
const brandRoot = "/home/pk/git/available/public";

const dataUrl = (path, mimeType) =>
  `data:${mimeType};base64,${readFileSync(path).toString("base64")}`;

const variants = [
  {
    name: "sporbok-spring-inter-v3",
    background: `${generatedRoot}/exec-42eef555-5c0c-4977-b3fc-80fc33607bfb.png`,
    fontName: "Inter",
    fontPath: `${brandRoot}/sporbok-bento/fonts/Inter.woff2`,
    side: "left",
    panel: "light",
    eyebrow: "VOR · VETTVANGSVINNA",
  },
  {
    name: "sporbok-summer-archivo-v3",
    background: `${generatedRoot}/exec-50c75f61-c52e-4bba-92eb-50cd7a42ae9b.png`,
    fontName: "Archivo",
    fontPath: `${brandRoot}/sporbok-bento/fonts/Archivo.woff2`,
    side: "left",
    panel: "light",
    eyebrow: "SUMAR · TEYMIÐ Á EINUM STAÐ",
  },
  {
    name: "sporbok-autumn-plex-v3",
    background: `${generatedRoot}/exec-4f3b74ee-8399-4334-9eb7-3d3df386240f.png`,
    fontName: "IBM Plex Sans",
    fontPath: `${brandRoot}/sporbok-bento/fonts/IBMPlexSans.woff2`,
    side: "right",
    panel: "light",
    eyebrow: "HAUST · VERKIÐ SKRÁÐ STRAX",
  },
  {
    name: "sporbok-winter-source-v3",
    background: `${generatedRoot}/exec-061938e4-5056-49cf-8d0f-ded3d4165bf4.png`,
    fontName: "Source Sans 3",
    fontPath: `${brandRoot}/sporbok-bento/fonts/SourceSans3.woff2`,
    side: "left",
    panel: "dark",
    eyebrow: "VETUR · RAUNTÍMAYFIRSÝN",
  },
];

const browser = await chromium.launch({ args: ["--no-sandbox", "--disable-setuid-sandbox"] });

for (const variant of variants) {
  const page = await browser.newPage({ viewport: { width: 2031, height: 774 }, deviceScaleFactor: 1 });
  const backgroundUrl = dataUrl(variant.background, "image/png");
  const fontUrl = dataUrl(variant.fontPath, "font/woff2");
  const iconUrl = dataUrl(`${brandRoot}/brand/sporbok-icon.png`, "image/png");
  const isDark = variant.panel === "dark";
  const panelBackground = isDark ? "rgba(10, 15, 22, 0.86)" : "rgba(250, 249, 245, 0.88)";
  const ink = isDark ? "#f8f8f5" : "#111315";
  const muted = isDark ? "#d5d9de" : "#485057";
  const left = variant.side === "left" ? 350 : 995;

  await page.setContent(`<!doctype html>
  <html>
    <head>
      <meta charset="utf-8">
      <style>
        @font-face {
          font-family: "${variant.fontName}";
          src: url("${fontUrl}") format("woff2");
          font-weight: 100 900;
          font-display: block;
        }
        * { box-sizing: border-box; }
        html, body { margin: 0; width: 2031px; height: 774px; overflow: hidden; }
        body {
          background: url("${backgroundUrl}") center center / cover no-repeat;
          font-family: "${variant.fontName}", sans-serif;
        }
        .panel {
          position: absolute;
          left: ${left}px;
          top: 92px;
          width: 700px;
          min-height: 590px;
          padding: 48px 52px 44px;
          color: ${ink};
          background: ${panelBackground};
          border: 1px solid ${isDark ? "rgba(255,255,255,.22)" : "rgba(17,19,21,.18)"};
          border-top: 7px solid ${isDark ? "#f8f8f5" : "#111315"};
          box-shadow: 0 22px 70px rgba(0,0,0,.18);
          backdrop-filter: blur(10px);
        }
        .lockup-wrap {
          display: inline-flex;
          align-items: center;
          gap: 20px;
          padding: ${isDark ? "12px 18px" : "0"};
          background: ${isDark ? "#f8f8f5" : "transparent"};
        }
        .brand-icon { display: block; width: 88px; height: 88px; }
        .brand-name { color: #050609; font-size: 58px; font-weight: 800; letter-spacing: -.045em; }
        .eyebrow {
          margin-top: 54px;
          color: ${muted};
          font-size: 20px;
          font-weight: 700;
          letter-spacing: .14em;
          line-height: 1.2;
        }
        h1 {
          margin: 20px 0 0;
          max-width: 590px;
          font-size: 58px;
          font-weight: 740;
          letter-spacing: -.045em;
          line-height: 1.04;
        }
        p {
          margin: 30px 0 0;
          max-width: 560px;
          color: ${muted};
          font-size: 26px;
          font-weight: 460;
          letter-spacing: -.012em;
          line-height: 1.3;
        }
        .rule {
          width: 84px;
          height: 5px;
          margin-top: 34px;
          background: ${isDark ? "#f8f8f5" : "#111315"};
        }
      </style>
    </head>
    <body>
      <main class="panel">
        <div class="lockup-wrap"><img class="brand-icon" src="${iconUrl}" alt=""><span class="brand-name">Sporbók</span></div>
        <div class="eyebrow">${variant.eyebrow}</div>
        <h1>Sjáðu hver er á staðnum.<br>Sendu reikninga hraðar.</h1>
        <div class="rule"></div>
        <p>Mæting, virk verk og reikningsdrög á einum stað.</p>
      </main>
    </body>
  </html>`, { waitUntil: "networkidle" });

  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: `${generatedRoot}/${variant.name}.png`, type: "png" });
  await page.close();
}

await browser.close();
