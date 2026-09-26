"""Builds the voice library: every take recorded for the Sporbók and Yarnkin
films, as numbered MP3s with voice, direction, text and a delivery measurement,
plus catalog.json and index.html for listening.
Run from the scratchpad: python3 voice-library/build.py
"""
import glob, json, os, re, subprocess, sys

S = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(S, "voice-library")
sys.path.insert(0, os.path.join(S, "yarnkin-films"))
from whisper import load, measure  # noqa: E402

FF = os.path.expanduser("~/.local/bin/ffmpeg")
SB, YK = os.path.join(S, "sporbok-brand"), os.path.join(S, "yarnkin-films")
TAG_YK, TAG_SB = "Lesum saman. Hlustum saman. Dreymum saman.", "Þú vinnur verkið. Sporbók man söguna."
HUSHED_YK = "Read softly at bedtime to a small child: hushed, warm, unhurried, a smile in the voice, natural Icelandic phrasing with a small pause between sentences."
CALM = "Speak in a calm, warm, full voice at a normal conversational level, close to the microphone: relaxed and unhurried, a smile in the voice. Not whispered, not breathy, not hushed; every vowel clearly voiced. Natural Icelandic phrasing with a small pause between sentences."
FILMS_SB = {"maett": "Mætt", "nota": "Nótan", "drog": "Drögin", "fri2": "Frítíminn"}
FILMS_YK = {"kvold": "Saga fyrir kvöldið", "saman": "Lesið saman", "tunga": "Á íslensku og ensku", "nott": "Góða nótt"}
VOICE_IDS = {"voice_jtnwvo8ifsu2": "narrator-grandmother (Grandmother)", "voice_lmddvudxk4ka": "narrator-mother (Mother)",
             "voice_tqsqzyipueqm": "narrator-bedtime (Bedtime reader)", "voice_zjlzjb82ag8d": "narrator-father (Father)"}

items = []


def add(group, src, voice, text, direction="", note=""):
    trimmed = src.replace(".wav", "-trim.wav")
    items.append({"group": group, "src": trimmed if os.path.exists(trimmed) else src, "voice": voice, "text": text, "direction": direction, "note": note})


def sporbok():
    script = json.load(open(os.path.join(SB, "vo/script.json")))
    style = script.get("style", "")
    for f in sorted(glob.glob(os.path.join(SB, "vo/cast/*.wav"))):
        n = os.path.basename(f)[:-4]
        if n.endswith("-trim") or n.endswith("-t"):
            continue
        add("Sporbók · casting (Gemini TTS, 2026-09-24)", f, n.replace("r2-", "").split("-")[0] if not n.startswith("designed") else "designed voice (whispery)", "Casting line", "", "round 2" if n.startswith("r2-") else "")
    for film, title in FILMS_SB.items():
        lines = script["films"][film]
        for f in sorted(glob.glob(os.path.join(SB, f"vo/{film}/*-take*.wav"))):
            m = re.match(r".*/(\d\d)-take(\d)\.wav$", f)
            if not m:
                continue  # trimmed or speed-fitted variants of a take
            k, t = m.groups()
            text = lines[int(k)]["text"] if int(k) < len(lines) else TAG_SB
            add(f"Sporbók · {title} (Alnilam)", f, "Alnilam", text, style, f"line {int(k) + 1}, take {int(t) + 1}")
    for f in sorted(glob.glob(os.path.join(SB, "vo/fix/k?.wav"))):
        add("Sporbók · Nótan retakes (Alnilam)", f, "Alnilam", "Komið við hjá birgja?", "", "retake for 'við'")
    for f in sorted(glob.glob(os.path.join(SB, "vo/tag/t?.wav"))):
        add("Sporbók · tagline takes (Alnilam)", f, "Alnilam", TAG_SB, "", "take " + os.path.basename(f)[1])


def yarnkin():
    for f in sorted(glob.glob(os.path.join(YK, "vo/cast/yk-*-sample.wav"))):
        n = os.path.basename(f).replace("-sample.wav", "")
        add("Yarnkin · voice design samples (2026-09-25)", f, n, "Design sample (Google's own line)", "", "returned with the voice design")
    for f in sorted(glob.glob(os.path.join(YK, "vo/cast/aud-*.wav"))):
        if f.endswith("-t.wav"):
            continue
        n = os.path.basename(f)[4:-4]
        add("Yarnkin · casting auditions (hushed direction)", f, n, "Rökkrið læðist inn. Allir komnir undir hlýja sæng. Draumarnir geta byrjað.", HUSHED_YK)
    v5 = json.load(open(os.path.join(YK, "versions/v5src/final.json")))
    for film in FILMS_YK:
        for f in sorted(glob.glob(os.path.join(YK, f"vo/{film}/0?.wav"))):
            k = int(os.path.basename(f)[:2])
            add("Yarnkin · first voiced test (Bedtime reader, hushed)", f, "narrator-bedtime", v5[film][k][0], HUSHED_YK, f"{FILMS_YK[film]}: reads the headline")
    for film, title in FILMS_YK.items():
        for d in sorted(glob.glob(os.path.join(YK, f"vo/{film}/narrator-*"))):
            voice = os.path.basename(d)
            v6 = voice.endswith("-v6")
            for f in sorted(glob.glob(os.path.join(d, "0?.wav")) + glob.glob(os.path.join(d, "0?-r1.wav"))):
                k = int(os.path.basename(f)[:2])
                if v6:
                    spoken = json.load(open(os.path.join(YK, "copy/spoken.json")))[film]
                    add(f"Yarnkin v6 · {title} (spoken layer, calm)", f, voice[:-3], spoken[k]["text"] if k < len(spoken) else "", "calm (see casting.json)", "retake" if "-r1" in f else "")
                else:
                    add(f"Yarnkin v4-v5 · {title} (reads the headline)", f, voice, v5[film][k][0], "cast direction (v4-v5)")
    add("Yarnkin · tagline", os.path.join(YK, "vo/tagline.wav"), "narrator-bedtime", TAG_YK, HUSHED_YK, "v4-v5 tagline (whisper)")
    for f in sorted(glob.glob(os.path.join(YK, "vo/ab/tag-narrator-*-calm.wav"))):
        add("Yarnkin · tagline", f, os.path.basename(f)[4:-9], TAG_YK, CALM, "calm test")
    add("Yarnkin · tagline", os.path.join(YK, "vo/tagline-calm.wav"), "narrator-bedtime", TAG_YK, CALM, "v6 tagline (calm)")
    add("Yarnkin · tagline", os.path.join(YK, "vo/cast/tag-Sulafat.wav"), "Sulafat", TAG_YK, HUSHED_YK, "stock voice")
    for f in sorted(glob.glob(os.path.join(YK, "vo/ab/saman0?-father-calm.wav"))):
        add("Yarnkin · Father, calm test", f, "narrator-father", "Einn les, aðrir hlusta." if "00" in f else "Tíminn fær að bíða.", CALM, "still whispers: the design")


sporbok(); yarnkin()
items = [i for i in items if os.path.exists(i["src"])]
os.makedirs(os.path.join(OUT, "audio"), exist_ok=True)
for n, it in enumerate(items, 1):
    it["id"] = f"{'S' if it['group'].startswith('Sporbók') else 'Y'}{n:03d}"
    it["file"] = f"audio/{it['id']}.mp3"
    out = os.path.join(OUT, it["file"])
    if not os.path.exists(out):
        subprocess.run([FF, "-loglevel", "error", "-y", "-i", it["src"], "-af", "loudnorm=I=-18:TP=-2", "-ar", "44100", "-b:a", "128k", out], check=True)
    m = measure(load(it["src"]))
    it["voiced"], it["breath"] = m["voiced%"], m["breath"]
    it["character"] = "whisper" if m["voiced%"] < 30 else "breathy" if m["breath"] >= 20 else "full" if m["voiced%"] >= 50 else "soft"
    it["src"] = os.path.relpath(it["src"], S)
json.dump(items, open(os.path.join(OUT, "catalog.json"), "w"), ensure_ascii=False, indent=1)
print(len(items), "takes")
