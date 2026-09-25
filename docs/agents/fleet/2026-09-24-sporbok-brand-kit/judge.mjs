// Blind comparative voice casting. All clips go to a Gemini audio model in ONE
// request under neutral labels; it must rank them (absolute 1-10 scores alone
// came back as 10/10 for everything). Each clip is also transcribed back, as a
// same-vendor intelligibility check.
// Usage: GEMINI_API_KEY=... node judge.mjs "<reference text>" a.wav b.wav ...
import { readFileSync } from "node:fs";

const KEY = process.env.GEMINI_API_KEY;
const BASE = "https://generativelanguage.googleapis.com/v1beta/models";
const MODEL = process.env.JUDGE_MODEL || "gemini-3.8-flash";
const [ref, ...files] = process.argv.slice(2);

async function gen(parts, temperature = 0) {
  for (const w of [0, 5000, 15000, 45000]) {
    if (w) await new Promise(r => setTimeout(r, w));
    const r = await fetch(`${BASE}/${MODEL}:generateContent`, {
      method: "POST", headers: { "x-goog-api-key": KEY, "content-type": "application/json" },
      body: JSON.stringify({ contents: [{ role: "user", parts }], generationConfig: { temperature } }),
    });
    if (r.ok) { const j = await r.json(); return (j.candidates?.[0]?.content?.parts || []).map(p => p.text || "").join(""); }
    const body = await r.text();
    if (![429, 500, 503].includes(r.status)) throw new Error(`${r.status} ${body.slice(0, 300)}`);
  }
  throw new Error("retries exhausted");
}

const labels = files.map((f, i) => `CLIP_${String.fromCharCode(65 + i)}`);
const parts = [{ text: `You are a demanding native Icelandic casting director choosing ONE narrator for Icelandic social-media ads for Sporbók, a work app for tradespeople. Brand voice: calm, competent, peer-to-peer, dry understatement, adult, never salesy. Every clip reads: "${ref}". Listen to all clips, compare them against each other, and be discriminating: they must not all score the same.` }];
files.forEach((f, i) => {
  parts.push({ text: `${labels[i]}:` });
  parts.push({ inline_data: { mime_type: "audio/wav", data: readFileSync(f).toString("base64") } });
});
parts.push({ text: `For each clip give scores 1-10 for native_accent (sounds like a born Icelander), pronunciation (þ, ð, long vowels, first-syllable stress, numbers), tone_fit (the brand voice above), naturalness, and list concrete problems (specific words, foreign accent traits, odd pauses, sales tone). Then give a strict ranking best to worst with one sentence why the winner wins. Output JSON only: {"clips":{"CLIP_A":{"native_accent":n,"pronunciation":n,"tone_fit":n,"naturalness":n,"problems":["..."]},...},"ranking":["CLIP_?",...],"why":"..."}` });

const verdict = JSON.parse((await gen(parts)).replace(/```json|```/g, "").trim());
const heard = [];
for (const f of files) {
  heard.push((await gen([{ text: "Transcribe this Icelandic speech exactly as spoken, in Icelandic. Output only the transcript." },
    { inline_data: { mime_type: "audio/wav", data: readFileSync(f).toString("base64") } }])).trim());
}
console.log(JSON.stringify({ model: MODEL, key: Object.fromEntries(labels.map((l, i) => [l, files[i]])), verdict, heard }, null, 1));
