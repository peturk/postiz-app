# Production spec: batch 2 (four films, seven shots)

Director: claude-opus-5.5. Tool operator: Grok 4.7. Execute exactly; do not rewrite prompts, add shots, or generate any other media. You may run up to 4 video calls in parallel.

Base for every relative path: /tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v (pass absolute paths to the tool).

Every shot uses `reference_to_video` with aspect_ratio "9:16" and resolution_name "720p".
The `images` list and the <IMAGE_n> names in the style lock are per film, below.
Prompt = the shot prompt + a space + that film's style lock, verbatim.

## Common style lock (the part after the character line is identical for every film)

Flat 2D vector animation, exactly the art style of the pinned frames: solid flat colours, no gradients except the soft lamp glow already in the frames, no outlines, no texture, no 3D, no depth of field, no film grain. {CHARACTERS} Keep their shapes, colours and proportions identical to the references and the pinned frames. They have round white eyes with black pupils, eyelids and small simple mouths; nothing else on their faces changes shape. No arms, no legs, no hands, no new characters, no people, no new text, no letters or numbers except those already printed in the pinned frames, no logos. Static camera: no pan, no zoom, no cut. Gentle, weighty, understated motion. Audio: quiet foley only, no music, no voices, no speech.

## Film: notan (Undir sætinu)

images: refs/model-note.png
{CHARACTERS} = "The character is <IMAGE_1>, a small white paper receipt with a torn zigzag bottom edge, grey line items and an orange total bar."

### notan A: 6 s
- first_frame: notan/notan-t0.0.png
- keyframes: [{ image: notan/notan-t1.3.png, timestamp_s: 3.0 }]
- last_frame: notan/notan-t2.5.png
- prompt: "In the dim space under a van seat, a small anxious paper receipt is wedged against the floor; it fidgets and wiggles nervously, a single sweat drop at its side, glancing up and around. Near the end a little light reaches it and its eyes widen in surprise. Foley: muffled road rumble, a faint paper rustle."
- save as: notan/shot-A.mp4

### notan B: 6 s
- first_frame: notan/notan-t2.5.png
- keyframes: [{ image: notan/notan-t3.4.png, timestamp_s: 1.3 }, { image: notan/notan-t4.2.png, timestamp_s: 2.3 }, { image: notan/notan-t5.6.png, timestamp_s: 4.0 }]
- last_frame: notan/notan-t6.6.png
- prompt: "The seat lifts up and away out of frame and daylight comes in: the dark space becomes a pale grey work site. The receipt steps back into the open, then a white job card slides in from the right and stops. The receipt crosses and steps up onto the job card, squeezes its eyes shut in a happy smile with a small hop and two tiny orange sparkles, and the card's orange bar lights up; then it settles, content. Foley: a soft whoosh as the seat lifts, a paper slide, one small happy tap."
- save as: notan/shot-B.mp4

## Film: morgunn (07:40)

images: refs/model-van.png, refs/model-hat.png
{CHARACTERS} = "The characters are <IMAGE_1> the blue work van and <IMAGE_2> the orange hard hat."

### morgunn A: 6 s
- first_frame: morgunn/morgunn-t0.0.png
- keyframes: [{ image: morgunn/morgunn-t1.8.png, timestamp_s: 2.0 }, { image: morgunn/morgunn-t2.6.png, timestamp_s: 3.3 }]
- last_frame: morgunn/morgunn-t4.5.png
- prompt: "A dark, frosty early morning on a work site, a small moon in the sky. The van and the hard hat are asleep. The van wakes with a small start, its eyes open and its round headlights switch on; the hard hat wakes beside it, and they give each other one small nod. The sky slowly lightens to a cold blue dawn and the moon fades away. Foley: a cold wind, one headlight relay click, then quiet morning air."
- save as: morgunn/shot-A.mp4

### morgunn B: 4 s (a loop hold)
- first_frame: morgunn/morgunn-t4.5.png
- last_frame: morgunn/morgunn-t4.5.png
- prompt: "A calm hold at dawn: the van and the hard hat stand side by side, awake and content, breathing slowly and blinking once; frost glints faintly on the ground. Nothing else moves. Foley: quiet morning air."
- save as: morgunn/shot-B.mp4

## Film: sunnudagur (Sunnudagskvöld)

images: refs/model-note.png
{CHARACTERS} = "The characters are copies of <IMAGE_1>, small white paper receipts with torn zigzag bottom edges, and a plain white mug with no face."

### sunnudagur A: 6 s
- first_frame: sunnudagur/sunnudagur-t0.0.png
- keyframes: [{ image: sunnudagur/sunnudagur-t2.2.png, timestamp_s: 3.0 }]
- last_frame: sunnudagur/sunnudagur-t4.6.png
- prompt: "Late Sunday evening at a wooden kitchen table under a warm lamp. A pile of tired paper receipts leans and slumps beside a mug, blinking slowly, one of them fidgeting with a small sweat drop. The lamp light flickers very gently. Foley: a quiet wall clock ticking, a soft paper rustle."
- save as: sunnudagur/shot-A.mp4

### sunnudagur B: 5 s
- first_frame: sunnudagur/sunnudagur-t5.2.png
- keyframes: [{ image: sunnudagur/sunnudagur-t6.2.png, timestamp_s: 2.0 }]
- last_frame: sunnudagur/sunnudagur-t7.5.png
- prompt: "The same kitchen table, now calm and nearly empty: a single paper receipt stands beside the mug, relieved, then settles into a quiet, content smile, breathing slowly under the warm lamp. Foley: the clock ticking, a soft exhale of relief."
- save as: sunnudagur/shot-B.mp4

## Film: tvo (Tvö verk)

images: refs/model-note.png
{CHARACTERS} = "The character is <IMAGE_1>, a small white paper receipt with a torn zigzag bottom edge; the two white job cards and their printed text stay exactly as in the pinned frames."

### tvo A: 8 s
- first_frame: tvo/tvo-t0.0.png
- keyframes: [{ image: tvo/tvo-t1.4.png, timestamp_s: 1.3 }, { image: tvo/tvo-t2.5.png, timestamp_s: 2.7 }, { image: tvo/tvo-t3.4.png, timestamp_s: 3.7 }, { image: tvo/tvo-t5.0.png, timestamp_s: 6.0 }]
- last_frame: tvo/tvo-t6.0.png
- duration: 8
- prompt: "At a builders' merchant, a paper receipt stands between two white job cards, thinking, looking from one card to the other and back. It gives a small start as it decides, then slides up onto the left job card; that card's grey bar turns orange, and the receipt gives one relieved nod and stays there, content. Foley: quiet shop ambience, a paper slide, one soft click."
- save as: tvo/shot-A.mp4

## Durations

Use the duration in each shot heading (6, 6, 6, 4, 6, 5, 8).

## After all shots

Copy each generated video from your session's videos/ folder to its "save as" path.
Write batch2-report.md in the base folder: for each shot the exact arguments, the returned path, duration and resolution (ffprobe at $HOME/.local/bin/ffprobe), and any error verbatim.
If a call fails, retry it once and record both attempts. Then stop.
