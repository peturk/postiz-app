"""Whisper meter: how much of a speech take is actually voiced.

Whispered speech has no vocal-fold vibration, so it has no pitch; a calm but
full voice keeps its pitch through most vowels. Per 40 ms frame (10 ms hop):
  - speech frame: energy within 35 dB of the take's loudest frames,
  - voiced: normalised autocorrelation peak in the 70-400 Hz pitch range > 0.5.
Reports, over speech frames:
  voiced%   share of speech that is voiced (full voice ~60-80%, whisper < 25%)
  period    mean periodicity strength of speech frames (0-1)
  f0        median pitch of voiced frames (Hz)
  breath    share of energy above 4 kHz (breath and hiss raise it)
Usage: python3 whisper.py a.wav [b.wav ...]
"""
import os, subprocess, sys
import numpy as np

FF = os.path.expanduser("~/.local/bin/ffmpeg")
SR = 16000


def load(p):
    raw = subprocess.run([FF, "-loglevel", "error", "-i", p, "-f", "s16le", "-ac", "1", "-ar", str(SR), "-"], capture_output=True, check=True).stdout
    return np.frombuffer(raw, np.int16).astype(float) / 32768


def measure(x):
    n, h = int(0.04 * SR), int(0.01 * SR)
    lo, hi = int(SR / 400), int(SR / 70)
    frames = [x[i:i + n] for i in range(0, len(x) - n, h)]
    e = np.array([10 * np.log10((f ** 2).mean() + 1e-12) for f in frames])
    speech = e > np.percentile(e, 95) - 35
    per, f0 = [], []
    for f, s in zip(frames, speech):
        if not s:
            continue
        f = (f - f.mean()) * np.hanning(n)
        ac = np.correlate(f, f, "full")[n - 1:]
        if ac[0] <= 0:
            per.append(0.0); continue
        ac = ac / ac[0]
        k = lo + int(np.argmax(ac[lo:hi]))
        per.append(float(ac[k]))
        if ac[k] > 0.5:
            f0.append(SR / k)
    per = np.array(per)
    spec = np.abs(np.fft.rfft(x)) ** 2
    freqs = np.fft.rfftfreq(len(x), 1 / SR)
    return {
        "voiced%": round(100 * float((per > 0.5).mean()), 1),
        "period": round(float(per.mean()), 3),
        "f0": round(float(np.median(f0)), 0) if f0 else 0,
        "breath": round(100 * float(spec[freqs > 4000].sum() / spec.sum()), 2),
    }


if __name__ == "__main__":
    for p in sys.argv[1:]:
        m = measure(load(p))
        print(f"{os.path.relpath(p):60s} voiced {m['voiced%']:5.1f}%  period {m['period']:.3f}  f0 {m['f0']:4.0f} Hz  breath {m['breath']:5.2f}%")
