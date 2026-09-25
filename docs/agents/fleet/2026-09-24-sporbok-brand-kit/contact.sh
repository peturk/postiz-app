#!/bin/sh
# contact.sh video.mp4 out.png "t1 t2 ..."  -> one row of frames at those times
F=$HOME/.local/bin/ffmpeg; v=$1; o=$2; shift 2; i=0; list=""
for t in $1; do $F -loglevel error -y -ss $t -i "$v" -frames:v 1 -vf scale=270:-1 "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/cs_$i.png"; list="$list -i /tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/cs_$i.png"; i=$((i+1)); done
$F -loglevel error -y $list -filter_complex "hstack=inputs=$i" "$o"; rm -f /tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/cs_*.png
