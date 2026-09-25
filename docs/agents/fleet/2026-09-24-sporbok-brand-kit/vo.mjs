// Voiceover for the v2 films from vo/script.json.
// Per line: N takes with Gemini TTS (voice and style from the script), each
// transcribed back by a Gemini audio model; the take whose transcript matches
// the text best wins, and a take too long for its slot is sped up (max 1.12x)
// or rejected. Writes vo/<film>/NN.wav and vo/<film>/lines.json for assemble2.
// Usage: GEMINI_API_KEY=... node vo.mjs <film|all> [takes=2]
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { execFileSync } from "node:child_process";

const KEY = process.env.GEMINI_API_KEY;
const BIN = process.env.HOME + "/.local/bin";
const S = JSON.parse(readFileSync("vo/script.json", "utf8"));
const [which = "all", takesArg = "2"] = process.argv.slice(2);
const TAKES = parseInt(takesArg, 10);
const SLOT_END = 20.0; // lines before the end card must end by then

const norm = s => s.toLowerCase().normalize("NFC").replace(/[^a-záðéíóúýþæö0-9 ]/g, " ").replace(/\s+/g, " ").trim();
function dist(a, b) {
  const d = Array.from({ length: a.length + 1 }, (_, i) => [i]);
  for (let j = 1; j <= b.length; j++) d[0][j] = j;
  for (let i = 1; i <= a.length; i++) for (let j = 1; j <= b.length; j++)
    d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
  return d[a.length][b.length] / Math.max(a.length, b.length, 1);
}
const dur = f => parseFloat(execFileSync(BIN + "/ffprobe", ["-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", f]).toString());

async function transcribe(f) {
  for (const w of [0, 5000, 20000]) {
    if (w) await new Promise(r => setTimeout(r, w));
    const r = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${process.env.JUDGE_MODEL || "gemini-3.5-flash"}:generateContent`, {
      method: "POST", headers: { "x-goog-api-key": KEY, "content-type": "application/json" },
      body: JSON.stringify({ contents: [{ role: "user", parts: [
        { text: "Transcribe this Icelandic speech exactly as spoken, in Icelandic. Output only the transcript." },
        { inline_data: { mime_type: "audio/wav", data: readFileSync(f).toString("base64") } }] }], generationConfig: { temperature: 0 } }),
    });
    if (r.ok) { const j = await r.json(); return (j.candidates?.[0]?.content?.parts || []).map(p => p.text || "").join("").trim(); }
    if (![429, 500, 503].includes(r.status)) return "";
  }
  return "";
}

async function line(film, k, l, slot) {
  const takes = [];
  for (let n = 0; n < TAKES; n++) {
    const raw = `vo/${film}/${String(k).padStart(2, "0")}-take${n}.wav`;
    if (!existsSync(raw)) execFileSync("node", ["tts.mjs", "speak", S.voice, raw, S.style, l.text], { stdio: "inherit", env: process.env });
    // Trim leading and trailing silence so the cue time is the first syllable.
    const trimmed = raw.replace(".wav", "-trim.wav");
    execFileSync(BIN + "/ffmpeg", ["-y", "-loglevel", "error", "-i", raw, "-af",
      "silenceremove=start_periods=1:start_threshold=-45dB:start_silence=0.05,areverse,silenceremove=start_periods=1:start_threshold=-45dB:start_silence=0.08,areverse", trimmed]);
    const heard = await transcribe(trimmed);
    takes.push({ file: trimmed, heard, d: dist(norm(heard), norm(l.text)), len: dur(trimmed) });
  }
  takes.sort((a, b) => a.d - b.d || a.len - b.len);
  const best = takes[0];
  let file = best.file, len = best.len;
  if (len > slot) {
    const f = Math.min(1.12, len / slot);
    file = best.file.replace("-trim.wav", "-fit.wav");
    execFileSync(BIN + "/ffmpeg", ["-y", "-loglevel", "error", "-i", best.file, "-af", `atempo=${f.toFixed(3)}`, file]);
    len = dur(file);
  }
  const final = `vo/${film}/${String(k).padStart(2, "0")}.wav`;
  execFileSync("cp", [file, final]);
  return { t: l.t, file: final, text: l.text, heard: best.heard, match: +(1 - best.d).toFixed(3), len: +len.toFixed(2), slot: +slot.toFixed(2), fits: len <= slot + 0.01, takes: takes.map(t => ({ heard: t.heard, match: +(1 - t.d).toFixed(3), len: +t.len.toFixed(2) })) };
}

for (const film of which === "all" ? Object.keys(S.films) : [which]) {
  mkdirSync(`vo/${film}`, { recursive: true });
  // The tagline is one chosen take shared by every film (vo/script.json
  // tagline.file), so the brand line sounds identical everywhere.
  const ls = S.films[film];
  const out = [];
  for (let k = 0; k < ls.length; k++) {
    const next = k + 1 < ls.length ? ls[k + 1].t : SLOT_END;
    const slot = Math.min(next, SLOT_END) - ls[k].t - 0.25;
    out.push(await line(film, k, ls[k], slot));
    console.log(film, k, JSON.stringify(out[k]));
  }
  out.push({ t: S.tagline.t, file: S.tagline.file, text: S.tagline.text, tag: true });
  writeFileSync(`vo/${film}/lines.json`, JSON.stringify(out, null, 1));
}
