// Gemini TTS for Sporbók voiceover (request shape from WTD's gemini-tts-client.ts).
// Usage:
//   GEMINI_API_KEY=... node tts.mjs speak <voice> <out.wav> "<style>" "<text>"
//   GEMINI_API_KEY=... node tts.mjs design <out-prefix> "<english description>"   -> prints voice id, writes sample
// Output: WAV 24 kHz mono s16le, as returned by the API.
import { writeFileSync } from "node:fs";

const BASE = "https://generativelanguage.googleapis.com/v1beta";
const MODEL = process.env.GEMINI_TTS_MODEL || "gemini-3.8-flash-tts";
const KEY = process.env.GEMINI_API_KEY;
if (!KEY) { console.error("GEMINI_API_KEY missing"); process.exit(2); }

async function call(path, body) {
  const waits = [0, 5000, 15000, 45000];
  let last;
  for (const w of waits) {
    if (w) await new Promise(r => setTimeout(r, w));
    const r = await fetch(`${BASE}${path}`, {
      method: "POST",
      headers: { "x-goog-api-key": KEY, "content-type": "application/json" },
      body: JSON.stringify(body),
      signal: AbortSignal.timeout(120000),
    });
    if (r.ok) return r.json();
    last = `${r.status} ${(await r.text()).slice(0, 400)}`;
    if (![429, 500, 503].includes(r.status)) break;
  }
  throw new Error(last);
}

const [mode, ...rest] = process.argv.slice(2);
if (mode === "speak") {
  const [voice, out, style, text] = rest;
  const j = await call("/interactions", {
    model: MODEL,
    input: [{ type: "user_input", content: [{ type: "text", text, annotations: [{ type: "speech_metadata", style }] }] }],
    response_format: { type: "audio" },
    generation_config: { speech_config: [{ voice }] },
  });
  const part = (j.steps || []).flatMap(s => s.content || []).find(p => p.type === "audio");
  if (!part) { console.error(JSON.stringify(j).slice(0, 600)); process.exit(1); }
  writeFileSync(out, Buffer.from(part.data, "base64"));
  console.log(out);
} else if (mode === "design") {
  const [prefix, description, gender = "male"] = rest;
  const j = await call("/voices", {
    store: true,
    voice: { type: "prompted", display_name: prefix.split("/").pop(), language_code: "is-IS", gender, model: MODEL, prompted: { input: description } },
  });
  if (j.sample_audio?.data) writeFileSync(`${prefix}-sample.wav`, Buffer.from(j.sample_audio.data, "base64"));
  console.log(JSON.stringify({ id: j.id || j.name, expire_time: j.expire_time }));
} else {
  console.error("usage: tts.mjs speak|design ...");
  process.exit(2);
}
