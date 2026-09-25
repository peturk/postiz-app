# Production spec: 17:00 (pilot)

Director: claude-opus-5.5. Operator of the tools: Grok 4.7. Execute exactly; do not rewrite prompts, do not add shots, do not generate any other media.

All paths are absolute. Base: /tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v

Every shot uses the tool `reference_to_video` with:
- aspect_ratio: "9:16"
- resolution_name: "720p"
- images (style references, in this order): refs/model-van.png, refs/model-hat.png, refs/model-box.png

## Style lock (append verbatim to every prompt)

Flat 2D vector animation, exactly the art style of the pinned frames: solid flat colours, no gradients, no outlines, no texture, no 3D, no depth of field, no film grain. The three characters are <IMAGE_1> the blue work van, <IMAGE_2> the orange hard hat and <IMAGE_3> the graphite toolbox with an orange handle; keep their shapes, colours and proportions identical to the references and the pinned frames. They have round white eyes with black pupils, eyelids and small simple mouths; nothing else on their faces changes shape. No arms, no legs, no hands, no new characters, no people, no text, no letters, no numbers, no logos. Static camera: no pan, no zoom, no cut. Gentle, weighty, understated motion; nothing bounces. Audio: quiet foley only, no music, no voices, no speech.

## Shot A: 6 seconds

- first_frame: fimm/fimm-t0.0.png
- keyframes: [{ image: fimm/fimm-t3.0.png, timestamp_s: 3.0 }]
- last_frame: fimm/fimm-t4.2.png
- duration: 6
- prompt: "Late Friday afternoon on a quiet concrete work site. The van, the hard hat and the toolbox stand side by side, breathing softly and blinking now and then, content at the end of a working day. The toolbox peers out from under its lid, glances at the others, then slowly lowers its lid until it shuts with a small satisfied settle. The hard hat and the van turn their eyes toward the toolbox as it closes. Foley: a light breeze, one soft metal click as the lid shuts." + Style lock
- save as: fimm/shot-A.mp4

## Shot B: 6 seconds

- first_frame: fimm/fimm-t4.2.png
- keyframes: [{ image: fimm/fimm-t5.4.png, timestamp_s: 2.0 }]
- last_frame: fimm/fimm-t7.5.png
- duration: 6
- prompt: "Dusk falls over the site: the pale grey sky and ground darken smoothly to a deep blue-black night and a small moon fades in at the top right. The hard hat's eyes close slowly and it settles, then the van's eyes close and its two round headlights dim and go dark. Everything becomes still and peaceful, the characters breathing slowly in their sleep. Foley: the breeze fades, one quiet electrical click as the headlights switch off, then near silence." + Style lock
- save as: fimm/shot-B.mp4

## After both shots

Copy each generated video from your session's videos/ folder to the "save as" path above (overwrite if present).
Write fimm/report.md: for each shot the exact tool arguments you sent, the tool's returned path, the duration and resolution of the file (use $HOME/.local/bin/ffprobe), and any error text verbatim.
Then stop.
