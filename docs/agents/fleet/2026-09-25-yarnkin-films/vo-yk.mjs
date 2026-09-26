// Voiceover for the Yarnkin films: the on-screen headlines (copy/final.json)
// read by a voice from WTD's Voice Bank, the one voice catalogue. The voice
// id, model and direction come from the catalogue, never from a local copy.
// TTS only: the paid key speaks and nothing else (no transcription, no
// judging; a take is checked by ear).
// Usage: GEMINI_API_KEY=... node vo-yk.mjs <catalogue-voice-id> [film ...]
// Writes vo/<film>/NN.wav, vo/tagline.wav and vo/<film>/lines.json for assemble-yk.cjs.
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { execFileSync } from "node:child_process";

const BIN = process.env.HOME + "/.local/bin";
const WTD = process.env.WTD_REPO || process.env.HOME + "/git/wtd";
const [voiceName, ...only] = process.argv.slice(2);
const bank = JSON.parse(execFileSync("git", ["-C", WTD, "show", "origin/main:web/src/data/narration/voice-bank.json"]).toString());
const voice = (Array.isArray(bank) ? bank : bank.voices).find(v => v.id === voiceName);
if (!voice?.chosen?.voiceId) { console.error(`${voiceName} has no chosen voice in the WTD Voice Bank`); process.exit(2); }
const { voiceId, model, sample } = voice.chosen;
const direction = sample.direction;
const TAGLINE = { t: 20.1, text: "Lesum saman. Hlustum saman. Dreymum saman." };
const copy = JSON.parse(readFileSync("copy/final.json", "utf8"));
const films = only.length ? only : Object.keys(copy);
const dur = f => parseFloat(execFileSync(BIN + "/ffprobe", ["-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", f]).toString());

function speak(text, out) {
  if (!existsSync(out)) execFileSync("node", ["tts.mjs", "speak", voiceId, out, direction, text], { stdio: ["ignore", "ignore", "inherit"], env: { ...process.env, GEMINI_TTS_MODEL: model } });
  const trimmed = out.replace(".wav", "-trim.wav");
  execFileSync(BIN + "/ffmpeg", ["-y", "-loglevel", "error", "-i", out, "-af",
    "silenceremove=start_periods=1:start_threshold=-45dB:start_silence=0.05,areverse,silenceremove=start_periods=1:start_threshold=-45dB:start_silence=0.08,areverse", trimmed]);
  return trimmed;
}
function fit(file, slot) {
  const len = dur(file);
  if (len <= slot) return { file, len };
  const f = Math.min(1.12, len / slot), out = file.replace("-trim.wav", "-fit.wav");
  execFileSync(BIN + "/ffmpeg", ["-y", "-loglevel", "error", "-i", file, "-af", `atempo=${f.toFixed(3)}`, out]);
  return { file: out, len: dur(out) };
}

mkdirSync("vo", { recursive: true });
// The bedtime direction leaves long pauses; the tagline's pauses are held to
// 0.45 s so it fits the end card (7.4 s -> 5.2 s for narrator-bedtime).
const tag = "vo/tagline-tight.wav";
execFileSync(BIN + "/ffmpeg", ["-y", "-loglevel", "error", "-i", speak(TAGLINE.text, "vo/tagline.wav"), "-af",
  "silenceremove=stop_periods=-1:stop_duration=0.45:stop_threshold=-40dB", tag]);
for (const film of films) {
  mkdirSync(`vo/${film}`, { recursive: true });
  const lines = copy[film];
  const out = [];
  lines.forEach(([text, from, to], k) => {
    // A line may run past its headline, but must end 0.3 s before the next
    // spoken line (or the end card).
    const t = from + 0.25, slot = (k + 1 < lines.length ? lines[k + 1][1] + 0.25 : 20.0) - t - 0.3;
    const f = fit(speak(text, `vo/${film}/${String(k).padStart(2, "0")}.wav`), slot);
    out.push({ t, file: f.file, text, len: +f.len.toFixed(2), slot: +slot.toFixed(2), fits: f.len <= slot + 0.01 });
  });
  out.push({ t: TAGLINE.t, file: tag, text: TAGLINE.text, tag: true });
  writeFileSync(`vo/${film}/lines.json`, JSON.stringify({ voice: voiceName, voiceId, model, lines: out }, null, 1));
  console.log(film, out.map(l => `${l.len ?? ""}/${l.slot ?? ""}${l.fits === false ? " TOO LONG" : ""}`).join("  "));
}
