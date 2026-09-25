"""Edit a generated music cue so its own final cadence lands on the end card.

Lyria ignores requested lengths and endings, so every cue is edited:
  1. estimate the beat period (onset-flux autocorrelation) and the downbeat
     phase (comb over bar positions),
  2. snap the judged cadence time to the nearest downbeat,
  3. land that downbeat at TARGET by trimming at most one bar of intro (on a
     downbeat) and changing tempo by at most MAX_TEMPO,
  4. ring out to the end.
Usage: python3 cue_edit.py <in.mp3> <out.wav> <cadence_s> [--target 20.25] [--end 23.4]
Prints the plan as JSON (recorded in music/edit.json).
"""
import json, os, subprocess, sys
import numpy as np

FF = os.path.expanduser("~/.local/bin/ffmpeg")
MAX_TEMPO = 0.06  # tempo change; the intro trim is at most one bar (on a downbeat)


def load(path, sr=22050):
    raw = subprocess.run([FF, "-loglevel", "error", "-i", path, "-f", "s16le", "-ac", "1", "-ar", str(sr), "-"], capture_output=True, check=True).stdout
    return np.frombuffer(raw, np.int16).astype(float) / 32768, sr


def grid(x, sr):
    hop = sr // 100  # 10 ms
    e = np.array([np.sqrt((x[i:i + 2 * hop] ** 2).mean()) for i in range(0, len(x) - 2 * hop, hop)])
    flux = np.convolve(np.maximum(0, np.diff(np.log(e + 1e-6))), np.ones(3) / 3, "same")
    seg = flux[200:2400] - flux[200:2400].mean()
    ac = np.correlate(seg, seg, "full")[len(seg) - 1:]
    lags = np.arange(len(ac))
    bpm = 6000 / np.maximum(lags, 1)
    ok = (bpm > 60) & (bpm < 140)
    beat = lags[ok][np.argmax(ac[ok])] / 100
    bar = 4 * beat
    step = int(round(bar * 100))
    phase = max(range(step), key=lambda p: flux[p::step][:12].sum()) / 100
    return beat, bar, phase


def main():
    a = sys.argv[1:]
    src, out, cad = a[0], a[1], float(a[2])
    target = float(a[a.index("--target") + 1]) if "--target" in a else 20.25
    end = float(a[a.index("--end") + 1]) if "--end" in a else 23.4
    x, sr = load(src)
    beat, bar, phase = grid(x, sr)
    n = round((cad - phase) / bar)
    cad_snap = phase + n * bar
    best = None
    for trim in (0.0, phase, phase + bar):
        if trim < 0:
            continue
        f = (cad_snap - trim) / target
        if abs(f - 1) <= MAX_TEMPO and (best is None or abs(f - 1) < abs(best[1] - 1)):
            best = (trim, f)
    if best is None:
        print(json.dumps({"error": "no trim/tempo within limits", "bpm": round(60 / beat, 1), "bar": round(bar, 3), "phase": round(phase, 2), "cadence": round(cad_snap, 2)}))
        sys.exit(2)
    trim, f = best
    fade_st = target + 0.9
    af = (f"atrim=start={trim:.3f},asetpts=PTS-STARTPTS,atempo={f:.4f},afade=t=in:d=0.02,"
          f"afade=t=out:st={fade_st:.2f}:d={end - fade_st:.2f}:curve=qsin,apad,atrim=0:{end + 0.3:.2f}")
    subprocess.run([FF, "-loglevel", "error", "-y", "-i", src, "-af", af, "-ar", "48000", "-ac", "2", out], check=True)
    print(json.dumps({"src": os.path.basename(src), "bpm": round(60 / beat, 1), "bar": round(bar, 3), "phase": round(phase, 2),
                      "cadence_judged": cad, "cadence_snapped": round(cad_snap, 2), "trim": round(trim, 3), "tempo": round(f, 4), "lands": target}))


if __name__ == "__main__":
    main()
