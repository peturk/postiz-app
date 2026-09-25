# Production spec: batch 4 (four re-shoots after independent QA)

Base: /tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v (absolute paths to the tool).
Tool: reference_to_video, aspect_ratio "9:16", resolution_name "720p". Up to 4 in parallel.
The keyframe PNGs were re-exported; use them as they are now.
Prompt = shot prompt + space + that film's style lock (the Style lock v3 text in batch3's spec, shots-batch3.md, with {CHARACTERS} filled as below), verbatim.

## sunnudagur A3: 6 s
images: refs/model-note.png
{CHARACTERS} = "The characters are exactly four separate copies of <IMAGE_1>, small white paper receipts with torn zigzag bottom edges, each standing apart with space between them and each with exactly two eyes and one mouth; they never touch, overlap or merge. There is also a plain white mug with no face."
- first_frame: sunnudagur/sunnudagur-t0.0.png
- keyframes: [{ image: sunnudagur/sunnudagur-t2.2.png, timestamp_s: 3.0 }]
- last_frame: sunnudagur/sunnudagur-t4.6.png
- prompt: "Late Sunday evening at a wooden kitchen table under a warm, steady lamp light that does not flicker or pulse. Four tired paper receipts stand in a row beside a mug, each in its own place, blinking slowly and swaying very slightly, one of them fidgeting with a small sweat drop. Foley: a quiet wall clock ticking, a soft paper rustle."
- save as: sunnudagur/shot-A3.mp4

## sunnudagur B3: 5 s
images: refs/model-note.png
{CHARACTERS} = "The character is <IMAGE_1>, a single small white paper receipt with a torn zigzag bottom edge; there is also a plain white mug with no face."
- first_frame: sunnudagur/sunnudagur-t5.2.png
- keyframes: [{ image: sunnudagur/sunnudagur-t6.2.png, timestamp_s: 2.0 }]
- last_frame: sunnudagur/sunnudagur-t7.5.png
- prompt: "The same kitchen table, now calm and nearly empty under a warm, steady lamp: a single paper receipt stands beside the mug, relieved, then settles into a quiet, content smile, breathing slowly. Foley: the clock ticking, a soft exhale of relief."
- save as: sunnudagur/shot-B3.mp4

## fimm A5: 6 s
images: refs/model-van.png, refs/model-hat.png, refs/model-box.png
{CHARACTERS} = "The three characters are <IMAGE_1> the blue work van, <IMAGE_2> the orange hard hat and <IMAGE_3> the graphite toolbox with an orange handle."
- first_frame: fimm/fimm-t0.0.png
- keyframes: [{ image: fimm/fimm-t3.0.png, timestamp_s: 3.0 }]
- last_frame: fimm/fimm-t4.2.png
- prompt: "Late Friday afternoon on a quiet concrete work site. The van, the hard hat and the toolbox stand side by side, breathing softly and blinking once or twice, content at the end of a working day, their eyes open, round and friendly and looking mostly straight ahead. The toolbox peers out from under its lid, then slowly lowers its lid until it shuts with a small satisfied settle. Foley: a light breeze, one soft metal click as the lid shuts."
- save as: fimm/shot-A5.mp4

## morgunn A3: 6 s
images: refs/model-van.png, refs/model-hat.png
{CHARACTERS} = "The characters are <IMAGE_1> the blue work van and <IMAGE_2> the orange hard hat."
- first_frame: morgunn/morgunn-t0.0.png
- keyframes: [{ image: morgunn/morgunn-t1.0.png, timestamp_s: 1.3 }, { image: morgunn/morgunn-t1.8.png, timestamp_s: 2.3 }, { image: morgunn/morgunn-t2.6.png, timestamp_s: 3.7 }]
- last_frame: morgunn/morgunn-t4.5.png
- prompt: "A dark, frosty early morning on a work site, a small moon in the sky. The van and the hard hat are asleep. The van's eyes open, round and friendly, and its round headlights switch on; the hard hat wakes the same gentle way beside it, and they give each other one small friendly nod, then look ahead with round, open eyes. The sky slowly lightens to a cold blue dawn and the moon fades away. Foley: a cold wind, one headlight relay click, then quiet morning air."
- save as: morgunn/shot-A3.mp4

Write batch4-report.md in the base folder (arguments, returned paths, durations, resolutions, errors; retry a failed call once), then stop.
