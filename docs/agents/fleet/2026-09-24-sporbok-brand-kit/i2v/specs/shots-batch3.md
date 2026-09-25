# Production spec: batch 3 (four re-shoots)

Base: /tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v (absolute paths to the tool).
Tool: reference_to_video, aspect_ratio "9:16", resolution_name "720p". Up to 4 in parallel.
Prompt = shot prompt + space + that film's style lock, verbatim. Overwrite the save paths.

## Style lock (with {CHARACTERS} filled per film)

Flat 2D vector animation, exactly the art style of the pinned frames: solid flat colours, no gradients, no outlines, no texture, no 3D, no depth of field, no film grain. {CHARACTERS} Keep shapes, colours and proportions identical to the references and the pinned frames. They have round white eyes with black pupils, eyelids and small simple mouths. A blink is the eyelids closing over the round eye and opening again; eyes never vanish, never shrink, and never turn into narrow slits or angry shapes. Expressions stay soft and friendly. The white job cards are blank: never draw any letters, numbers or marks on them. No arms, no legs, no hands, no new characters, no people, no text anywhere, no logos. Static camera: no pan, no zoom, no cut. Gentle, weighty, understated motion. Audio: quiet foley only, no music, no voices, no speech.

## notan B2: 6 s
images: refs/model-note.png
{CHARACTERS} = "The character is <IMAGE_1>, a small white paper receipt with a torn zigzag bottom edge, grey line items and an orange total bar."
- first_frame: notan/notan-t2.5.png
- keyframes: [{ image: notan/notan-t3.4.png, timestamp_s: 1.3 }, { image: notan/notan-t4.2.png, timestamp_s: 2.3 }, { image: notan/notan-t5.6.png, timestamp_s: 4.0 }]
- last_frame: notan/notan-t6.6.png
- prompt: "The seat lifts up and away out of frame and daylight comes in: the dark space becomes a pale grey work site. The receipt steps back into the open, then a blank white card slides in from the right and stops. The receipt walks over and steps up onto the top edge of the card, squeezes its eyes shut in a happy smile with a small hop and two tiny orange sparkles, and the card's small bar turns orange; then it settles, content, standing on the card's top edge. Foley: a soft whoosh as the seat lifts, a paper slide, one small happy tap."
- save as: notan/shot-B2.mp4

## tvo A2: 8 s
images: refs/model-note.png
{CHARACTERS} = "The character is <IMAGE_1>, a small white paper receipt with a torn zigzag bottom edge."
- first_frame: tvo/tvo-t0.0.png
- keyframes: [{ image: tvo/tvo-t1.4.png, timestamp_s: 1.3 }, { image: tvo/tvo-t2.5.png, timestamp_s: 2.7 }, { image: tvo/tvo-t3.4.png, timestamp_s: 3.7 }, { image: tvo/tvo-t5.0.png, timestamp_s: 6.0 }]
- last_frame: tvo/tvo-t6.0.png
- duration: 8
- prompt: "At a builders' merchant, a paper receipt stands on the floor between two blank white cards, thinking, looking from one card to the other and back. It gives a small start as it decides, then steps up onto the top edge of the left card; that card's small grey bar turns orange, and the receipt gives one relieved nod and stays there, content. Foley: quiet shop ambience, footsteps of paper, one soft click."
- save as: tvo/shot-A2.mp4

## morgunn A2: 6 s
images: refs/model-van.png, refs/model-hat.png
{CHARACTERS} = "The characters are <IMAGE_1> the blue work van and <IMAGE_2> the orange hard hat."
- first_frame: morgunn/morgunn-t0.0.png
- keyframes: [{ image: morgunn/morgunn-t1.0.png, timestamp_s: 1.3 }, { image: morgunn/morgunn-t1.8.png, timestamp_s: 2.3 }, { image: morgunn/morgunn-t2.6.png, timestamp_s: 3.7 }]
- last_frame: morgunn/morgunn-t4.5.png
- prompt: "A dark, frosty early morning on a work site, a small moon in the sky. The van and the hard hat are asleep. The van stirs, its eyelids lift slowly and drowsily, then its eyes open fully and its round headlights switch on; the hard hat wakes the same gentle way beside it, and they give each other one small friendly nod. The sky slowly lightens to a cold blue dawn and the moon fades away. Foley: a cold wind, one headlight relay click, then quiet morning air."
- save as: morgunn/shot-A2.mp4

## morgunn B2: 4 s (loop hold)
images: refs/model-van.png, refs/model-hat.png
{CHARACTERS} = same as morgunn A2.
- first_frame: morgunn/morgunn-t4.5.png
- last_frame: morgunn/morgunn-t4.5.png
- prompt: "A calm hold at dawn: the van and the hard hat stand side by side, awake and content, breathing slowly. They do not tilt, lean or change expression; at most one soft blink each. Frost glints faintly on the ground. Foley: quiet morning air."
- save as: morgunn/shot-B2.mp4

Write batch3-report.md in the base folder (arguments, returned paths, durations, resolutions, errors; retry a failed call once), then stop.
