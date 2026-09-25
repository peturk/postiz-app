// Lyria music for the films via the Gemini API (paid key).
// Usage: GEMINI_API_KEY=... node lyria.mjs <model> <out.mp3> "<prompt>"
// Writes the audio and, next to it, <out>.txt with the model's structure notes.
import { writeFileSync } from "node:fs";
const [model, out, prompt] = process.argv.slice(2);
for (const w of [0, 10000, 30000]) {
  if (w) await new Promise(r => setTimeout(r, w));
  const r = await fetch("https://generativelanguage.googleapis.com/v1beta/interactions", {
    method: "POST", headers: { "x-goog-api-key": process.env.GEMINI_API_KEY, "content-type": "application/json" },
    body: JSON.stringify({ model, input: prompt }), signal: AbortSignal.timeout(600000),
  });
  if (!r.ok) { const b = await r.text(); if (![429, 500, 503].includes(r.status)) { console.error(r.status, b.slice(0, 300)); process.exit(1); } continue; }
  const j = await r.json();
  const parts = (j.steps || []).flatMap(s => s.content || []);
  const audio = parts.find(p => p.type === "audio");
  if (!audio) { console.error("no audio", JSON.stringify(j).slice(0, 300)); process.exit(1); }
  writeFileSync(out, Buffer.from(audio.data, "base64"));
  writeFileSync(out.replace(/\.\w+$/, ".txt"), parts.filter(p => p.type === "text").map(p => p.text).join("\n"));
  console.log(out); process.exit(0);
}
console.error("retries exhausted"); process.exit(1);
