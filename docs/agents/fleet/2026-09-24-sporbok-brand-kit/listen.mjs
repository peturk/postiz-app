// listen.mjs "<question>" a.wav [b.wav ...]: ask a Gemini audio model about clips (JSON answer)
import { readFileSync } from "node:fs";
const [q, ...files] = process.argv.slice(2);
const parts = [{ text: q }];
files.forEach((f, i) => { parts.push({ text: `CLIP_${i + 1} (${f}):` }); parts.push({ inline_data: { mime_type: "audio/wav", data: readFileSync(f).toString("base64") } }); });
for (const w of [0, 5000, 20000]) {
  if (w) await new Promise(r => setTimeout(r, w));
  const r = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${process.env.JUDGE_MODEL || "gemini-3.5-flash"}:generateContent`, {
    method: "POST", headers: { "x-goog-api-key": process.env.GEMINI_API_KEY, "content-type": "application/json" },
    body: JSON.stringify({ contents: [{ role: "user", parts }], generationConfig: { temperature: 0 } }) });
  if (r.ok) { const j = await r.json(); console.log((j.candidates?.[0]?.content?.parts || []).map(p => p.text || "").join("")); process.exit(0); }
  const b = await r.text(); if (![429, 500, 503].includes(r.status)) { console.error(r.status, b.slice(0, 300)); process.exit(1); }
}
console.error("retries exhausted"); process.exit(1);
