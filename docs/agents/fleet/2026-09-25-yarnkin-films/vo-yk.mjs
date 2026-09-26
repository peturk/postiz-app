// Voiceover for the Yarnkin films: the on-screen headlines (copy/final.json)
// read by a voice from WTD's Voice Bank, the one voice catalogue. The voice
// id, model and direction come from the catalogue, never from a local copy.
// TTS only: the paid key speaks and nothing else (no transcription, no
// judging; a take is checked by ear).
// Casting (which catalogue voice reads which film, with what direction, and
// why) lives in copy/casting.json; the tagline is always its tagline_voice.
// Usage: GEMINI_API_KEY=... node vo-yk.mjs [film ...]
// Writes vo/<film>/NN.wav, vo/tagline.wav and vo/<film>/lines.json for assemble-yk.cjs.
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { execFileSync } from "node:child_process";

const BIN = process.env.HOME + "/.local/bin";
const WTD = process.env.WTD_REPO || process.env.HOME + "/git/wtd";
const only = process.argv.slice(2);
const casting = JSON.parse(readFileSync("copy/casting.json", "utf8"));
const bank = JSON.parse(execFileSync("git", ["-C", WTD, "show", "origin/main:web/src/data/narration/voice-bank.json"]).toString());
function catalogue(name) {
  const v = (Array.isArray(bank) ? bank : bank.voices).find(x => x.id === name);
  if (!v?.chosen?.voiceId) { console.error(`${name} has no chosen voice in the WTD Voice Bank`); process.exit(2); }
  return { name, voiceId: v.chosen.voiceId, model: v.chosen.model, direction: v.chosen.sample.direction };
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

mkdirSync("vo", { recursive: true });
// The tagline's pauses are held to 0.3 s and it is played 8% faster so the calm
// take (5.5 s) fits a 4.9 s end card (about 4.5 s).
const tag = "vo/tagline-calm-tight.wav";
const tagVoice = catalogue(casting.tagline_voice);
execFileSync(BIN + "/ffmpeg", ["-y", "-loglevel", "error", "-i", speak(tagVoice, casting.tagline_direction || tagVoice.direction, TAGLINE.text, "vo/tagline-calm.wav"), "-af",
  "silenceremove=stop_periods=-1:stop_duration=0.3:stop_threshold=-40dB,atempo=1.08", tag]);
for (const film of films) {
  const cast = casting.films[film], v = catalogue(cast.voice), direction = cast.direction || v.direction;
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
