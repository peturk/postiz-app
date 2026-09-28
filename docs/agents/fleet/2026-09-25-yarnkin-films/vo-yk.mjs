// Voiceover for the Yarnkin films: the spoken layer (copy/spoken.json, never
// the on-screen headlines) read by a voice from WTD's Voice Bank, the one voice catalogue. The voice
// id, model and direction come from the catalogue, never from a local copy.
// TTS only: the paid key speaks and nothing else (no transcription, no
// judging; a take is checked by ear).
// Casting (which catalogue voice reads which film, with what direction, and
// why) lives in copy/casting.json; the tagline is always its tagline_voice.
// Usage: GEMINI_API_KEY=... node vo-yk.mjs [film ...]
// Writes vo/<film>/<voice>-v6/NN.wav, vo/tagline-<voice>-held.wav and vo/<film>/lines.json for assemble-yk.cjs.
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { execFileSync, spawnSync } from "node:child_process";

const BIN = process.env.HOME + "/.local/bin";
const WTD = process.env.WTD_REPO || process.env.HOME + "/git/wtd";
const only = process.argv.slice(2);
const casting = JSON.parse(readFileSync("copy/casting.json", "utf8"));
const bank = JSON.parse(execFileSync("git", ["-C", WTD, "show", "origin/main:web/src/data/narration/voice-bank.json"]).toString());
// The Voice Bank is per language (wtd 9d8f4c6b2): the films are Icelandic.
function catalogue(name) {
  const chosen = bank.voices.find(x => x.id === name)?.languages?.is?.chosen;
  if (!chosen?.voiceId) { console.error(`${name} has no chosen Icelandic voice in the WTD Voice Bank`); process.exit(2); }
  return { name, voiceId: chosen.voiceId, model: chosen.model, direction: chosen.sample.direction, scenarios: chosen.scenarios || [] };
}
// WTD decision E35 (wtd 7380da6a4): each chosen voice carries its measured
// character and scenarios in voice-bank.json; films and ads cast only voices
// whose scenarios include "film".
function filmVoice(name) {
  const v = catalogue(name);
  if (!v.scenarios.includes("film")) { console.error(`${name} is not a film voice in the WTD Voice Bank (E35); cast one whose scenarios include "film"`); process.exit(2); }
  return v;
}
const TAGLINE = { text: "Lesum saman. Hlustum saman. Dreymum saman." };
const copy = JSON.parse(readFileSync("copy/spoken.json", "utf8"));  // v6: the spoken layer, not the headlines
const films = only.length ? only : Object.keys(copy);
const dur = f => parseFloat(execFileSync(BIN + "/ffprobe", ["-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", f]).toString());

function speak(v, direction, text, out) {
  if (!existsSync(out)) execFileSync("node", ["tts.mjs", "speak", v.voiceId, out, direction, text], { stdio: ["ignore", "ignore", "inherit"], env: { ...process.env, GEMINI_TTS_MODEL: v.model } });
  const trimmed = out.replace(".wav", "-trim.wav");
  execFileSync(BIN + "/ffmpeg", ["-y", "-loglevel", "error", "-i", out, "-af",
    "silenceremove=start_periods=1:start_threshold=-45dB:start_silence=0.05,areverse,silenceremove=start_periods=1:start_threshold=-45dB:start_silence=0.08,areverse", trimmed]);
  return trimmed;
}
// Whisper gate: a take under 40% voiced is re-recorded once (calm is the brand voice).
function voiced(file) { return parseFloat(execFileSync("python3", ["whisper.py", file]).toString().match(/voiced\s+([0-9.]+)%/)[1]); }
function speakCalm(v, direction, text, out) {
  let f = speak(v, direction, text, out), vp = voiced(f);
  if (vp < 40) { const r = out.replace(".wav", "-r1.wav"); const f2 = speak(v, direction, text, r), v2 = voiced(f2); if (v2 > vp) { f = f2; vp = v2; } }
  return { file: f, voiced: vp };
}
function fit(file, slot) {
  const len = dur(file);
  if (len <= slot) return { file, len };
  const f = Math.min(1.12, len / slot), out = file.replace("-trim.wav", "-fit.wav");
  execFileSync(BIN + "/ffmpeg", ["-y", "-loglevel", "error", "-i", file, "-af", `atempo=${f.toFixed(3)}`, out]);
  return { file: out, len: dur(out) };
}

// Pauses longer than maxPause are cut down to it (half kept at each edge); the voice
// itself is never sped up (PK approved the tagline take at its own pace).
function holdPauses(file, maxPause, out) {
  const log = spawnSync(BIN + "/ffmpeg", ["-i", file, "-af", "silencedetect=n=-40dB:d=" + maxPause, "-f", "null", "-"]).stderr.toString();
  const starts = [...log.matchAll(/silence_start: ([0-9.]+)/g)].map(m => +m[1]), ends = [...log.matchAll(/silence_end: ([0-9.]+)/g)].map(m => +m[1]);
  const keep = [];
  let from = 0;
  starts.forEach((s, i) => { if (ends[i] === undefined) return; keep.push([from, s + maxPause / 2]); from = ends[i] - maxPause / 2; });
  keep.push([from, dur(file)]);
  const fc = keep.map(([a, b], i) => `[0:a]atrim=${a.toFixed(3)}:${b.toFixed(3)},asetpts=PTS-STARTPTS,afade=t=in:d=0.01,afade=t=out:st=${(b - a - 0.01).toFixed(3)}:d=0.01[p${i}];`).join("")
    + keep.map((_, i) => `[p${i}]`).join("") + `concat=n=${keep.length}:v=0:a=1[out]`;
  execFileSync(BIN + "/ffmpeg", ["-y", "-loglevel", "error", "-i", file, "-filter_complex", fc, "-map", "[out]", out]);
  return out;
}

mkdirSync("vo", { recursive: true });
// The tagline is spoken once per voice and its pauses held to 0.4 s; the end
// card (ui-yk.html) is sized to it.
const tagVoice = filmVoice(casting.tagline_voice);
const tag = holdPauses(speak(tagVoice, casting.tagline_direction || tagVoice.direction, TAGLINE.text, `vo/tagline-${tagVoice.name}.wav`), 0.4, `vo/tagline-${tagVoice.name}-held.wav`);
for (const film of films) {
  const cast = casting.films[film], v = filmVoice(cast.voice), direction = cast.direction || v.direction;
  mkdirSync(`vo/${film}/${v.name}-v6`, { recursive: true });
  const lines = copy[film];
  const out = [];
  lines.forEach(({ t: from, text }, k) => {
    // A line may run past its headline, but must end 0.3 s before the next
    // spoken line (or the film's end card, casting.json films.<film>.end).
    const t = from, slot = (k + 1 < lines.length ? lines[k + 1].t : cast.end) - t - 0.3;
    const sp = speakCalm(v, direction, text, `vo/${film}/${v.name}-v6/${String(k).padStart(2, "0")}.wav`);
    const f = fit(sp.file, slot);
    out.push({ t, file: f.file, text, voiced: sp.voiced, len: +f.len.toFixed(2), slot: +slot.toFixed(2), fits: f.len <= slot + 0.01 });
  });
  out.push({ t: cast.end + 0.1, file: tag, text: TAGLINE.text, tag: true });
  writeFileSync(`vo/${film}/lines.json`, JSON.stringify({ voice: v.name, voiceId: v.voiceId, model: v.model, direction, tagline_voice: tagVoice.name, lines: out }, null, 1));
  console.log(film, v.name, out.map(l => `${l.len ?? ""}/${l.slot ?? ""} ${l.voiced ?? ""}%${l.fits === false ? " TOO LONG" : ""}`).join("  "));
}
