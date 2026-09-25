#!/bin/sh
# qa.sh <video.mp4> <outdir>
# Frame-by-frame review material for one film:
#   - grid sheets: every frame at 4 fps (8 per row, 3 rows = 6 s per sheet)
#   - jumps.txt: frames whose scene-change score exceeds 0.06 (glitches, hard seams)
#   - stats.txt: resolution, fps, duration per stream, integrated loudness
set -e
F="$HOME/.local/bin/ffmpeg"; P="$HOME/.local/bin/ffprobe"
v="$1"; out="$2"; mkdir -p "$out"; rm -f "$out"/sheet-*.png
"$F" -loglevel error -y -i "$v" -vf "fps=4,scale=240:-1,drawtext=text='%{pts\:hms}':x=6:y=6:fontsize=18:fontcolor=white:box=1:boxcolor=black@0.6,tile=8x3:padding=4:color=white" "$out/sheet-%02d.png" 2>/dev/null \
  || "$F" -loglevel error -y -i "$v" -vf "fps=4,scale=240:-1,tile=8x3:padding=4:color=white" "$out/sheet-%02d.png"
"$F" -hide_banner -i "$v" -vf "select='gt(scene,0.06)',metadata=print:file=$out/jumps.raw" -an -f null - 2>/dev/null || true
grep -o "pts_time:[0-9.]*\|scene_score=[0-9.]*" "$out/jumps.raw" 2>/dev/null | paste - - > "$out/jumps.txt" || true
rm -f "$out/jumps.raw"
{
  "$P" -v error -show_entries stream=codec_type,width,height,r_frame_rate,duration -of compact "$v"
  "$F" -hide_banner -nostats -i "$v" -af ebur128 -f null - 2>&1 | grep -E "^\s+I:" | tail -1 | sed 's/^ */loudness /'
} > "$out/stats.txt"
echo "$v -> $out: $(ls "$out"/sheet-*.png | wc -l) sheets, $(wc -l < "$out/jumps.txt") jumps"
