# Production spec: batch 5 (three re-shoots)

Same base, tool, aspect, resolution and style lock rules as shots-batch4.md (read it). Run at most 2 calls at a time (xAI rate limit is 2 requests per second; on HTTP 429 wait 20 s and retry).
Add this sentence to the end of every style lock in this batch: "The ground is flat, empty and perfectly still: no shadows, shapes or stains move across it."

## fimm A6: 6 s
Identical to fimm A5 in shots-batch4.md (same frames, images, characters and prompt), saved as fimm/shot-A6.mp4.

## morgunn A4: 6 s
Identical to morgunn A3 in shots-batch4.md, except the prompt is:
"A dark, frosty early morning on a work site, a small moon in the sky. The van and the hard hat are asleep. The van's eyes open, round and friendly, and its round headlights switch on; the hard hat's eyes open the same gentle way beside it. Neither of them tilts, rocks, nods or moves its body; only the eyes and the headlights change. They look ahead with round, open, friendly eyes. The sky slowly lightens to a cold blue dawn and the moon fades away. Foley: a cold wind, one headlight relay click, then quiet morning air."
Save as morgunn/shot-A4.mp4.

## morgunn B3: 4 s (hold)
images: refs/model-van.png, refs/model-hat.png; characters as morgunn A4.
- first_frame: morgunn/morgunn-t4.5.png
- last_frame: morgunn/morgunn-t4.5.png
- prompt: "A calm hold at dawn: the van and the hard hat stand side by side, awake and content, eyes round, open and friendly and looking straight ahead, breathing slowly. They do not tilt, lean, blink or change expression. Frost glints faintly on the ground. Foley: quiet morning air."
- save as: morgunn/shot-B3.mp4

Write batch5-report.md (arguments, returned paths, durations, resolutions, errors), then stop.
