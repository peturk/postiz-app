# Re-shoot v2c (2 shots, run in parallel)

Same rules as shots-v2b.md: send each prompt verbatim. An earlier attempt came back as an all-black video; after each call check the file is not black (ffmpeg signalstats YAVG above 40) and retry once if it is.

### fri24 A: 7 s
- images: refs/model-van.png, refs/model-hat.png
- first_frame: v2/fri22/fri2-t0.0.png
- keyframes: [{ image: v2/fri22/fri2-t3.5.png, timestamp_s: 3.5 }]
- last_frame: v2/fri22/fri2-t7.0.png
- duration: 7
- prompt: "Sunset at the building site: the warm orange sky slowly turns to dusk blue as the sun sinks straight down behind the ground; the van and the hard hat stand calm and content, watching the sunset. There is exactly one house for the whole shot, the same house as in the pinned frames; no second house appears behind or beside it. Flat 2D vector animation, exactly the art style of the pinned frames: solid flat colours, no outlines, no texture, no 3D, no depth of field, no film grain. The characters are <IMAGE_1> the blue work van and <IMAGE_2> the orange hard hat; there is also a small house with a thin grey ladder, and later a small home, which have no faces. Keep shapes, colours and proportions identical to the references and the pinned frames. They have round white eyes with black pupils, eyelids and small simple mouths; eyes never turn into slits or angry shapes, expressions stay soft and friendly, and a blink goes straight from open to closed and back. Characters never touch, overlap or merge; each keeps exactly two eyes and one mouth. No arms, no legs, no hands, no new characters, no people, no text, no letters, no numbers, no logos, no signs. Static camera: no pan, no zoom, no cut. The ground stays flat and still. Apart from what this prompt describes, nothing appears or disappears: no new objects, no carts, no trolleys, no extra doors, no other vehicles, no scaffolding, no props; the buildings keep exactly the shapes of the pinned frames. Characters stay standing on the ground: no jumping, no floating. Audio: clear, well-recorded, clearly audible sound design, all sources off screen, with no music and no speech: evening wind, distant traffic, a few evening birds, a soft click of a phone tap"
- save as: v2/fri22/shot-A3.mp4

### fri24 C: 6 s
- images: refs/model-van.png, refs/model-hat.png
- first_frame: v2/fri22/fri2-t14.0.png
- keyframes: [{ image: v2/fri22/fri2-t17.0.png, timestamp_s: 3.0 }]
- last_frame: v2/fri22/fri2-t20.0.png
- duration: 6
- prompt: "A peaceful, almost still night: the van and the hard hat are fast asleep in front of the home, eyes closed as curved lines, calm smiles, breathing slowly; a small z drifts up above each of them. The van's headlights stay dark the whole time. There is exactly one small home, standing on the ground behind the hard hat; nothing else appears in the sky except the moon and the small z letters. Nobody wakes up: every frame of this shot shows both characters with closed eyes, exactly as in all three pinned frames. The crescent moon glows steadily and stays fully visible. Flat 2D vector animation, exactly the art style of the pinned frames: solid flat colours, no outlines, no texture, no 3D, no depth of field, no film grain. The characters are <IMAGE_1> the blue work van and <IMAGE_2> the orange hard hat; there is also a small house with a thin grey ladder, and later a small home, which have no faces. Keep shapes, colours and proportions identical to the references and the pinned frames. They have round white eyes with black pupils, eyelids and small simple mouths; eyes never turn into slits or angry shapes, expressions stay soft and friendly, and a blink goes straight from open to closed and back. Characters never touch, overlap or merge; each keeps exactly two eyes and one mouth. No arms, no legs, no hands, no new characters, no people, no text, no letters, no numbers, no logos, no signs. Static camera: no pan, no zoom, no cut. The ground stays flat and still. Apart from what this prompt describes, nothing appears or disappears: no new objects, no carts, no trolleys, no extra doors, no other vehicles, no scaffolding, no props; the buildings keep exactly the shapes of the pinned frames. Characters stay standing on the ground: no jumping, no floating. Audio: clear, well-recorded, clearly audible sound design, all sources off screen, with no music and no speech: crickets, soft night wind, very calm"
- save as: v2/fri22/shot-C3.mp4

Write v2/report-b.md with, per shot, the exact arguments, returned path, duration, resolution, whether the file has an audio stream, and any error verbatim. Then stop.
Append the arguments, returned paths, the YAVG check and any error to v2/report-b.md, then stop.
