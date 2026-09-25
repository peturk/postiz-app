# Production spec: feature films v2 (12 shots)

Base: /tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v (absolute paths to the tool). Tool: reference_to_video, aspect_ratio "9:16", resolution_name "720p". At most 2 calls at a time (xAI limit 2 requests per second; on HTTP 429 wait 20 s and retry once). Keyframe PNGs are in v2/<film>/. Prompt = shot prompt + space + the film's style lock below, verbatim, with {SFX} replaced by the shot's sound design.

## Film maett
images: refs/model-van.png, refs/model-hat.png, refs/model-box.png
Style lock: Fl

### maett A: 7 s
- first_frame: v2/maett/maett-t0.0.png
- keyframes: [{ image: v2/maett/maett-t3.5.png, timestamp_s: 3.5 }]
- last_frame: v2/maett/maett-t7.0.png
- duration: 7
- prompt: "Dawn at a quiet building site: the dark sky brightens to morning blue and the sun rises. The blue van drives in from the left along the road and stops in front of the house, rocking gently on its suspension as it parks; the hard hat and the toolbox, already waiting at the site, look at the van and smile."
- sound design ({SFX}): "a van engine approaching and idling down, tyres on gravel, a soft handbrake creak, early birds, light morning wind"
- save as: v2/maett/shot-A.mp4

### maett B: 7 s
- first_frame: v2/maett/maett-t7.0.png
- keyframes: [{ image: v2/maett/maett-t10.5.png, timestamp_s: 3.5 }]
- last_frame: v2/maett/maett-t14.0.png
- duration: 7
- prompt: "Morning at the site: the van, the hard hat and the toolbox work contentedly; the hard hat and the toolbox look down at their work, bob lightly as if humming, and glance up at each other with small smiles. The sun climbs slowly."
- sound design ({SFX}): "distant hammering and a drill in short bursts, birdsong, a light breeze"
- save as: v2/maett/shot-B.mp4

### maett C: 6 s
- first_frame: v2/maett/maett-t14.0.png
- keyframes: [{ image: v2/maett/maett-t17.0.png, timestamp_s: 3.0 }]
- last_frame: v2/maett/maett-t20.0.png
- duration: 6
- prompt: "Midday at the site: all three look up with proud, happy faces, a small satisfied nod, the sun high in the sky."
- sound design ({SFX}): "birdsong, a distant hammer tap, calm outdoor ambience"
- save as: v2/maett/shot-C.mp4

## Film maett2 (re-shoot: sun path moved to the upper right)
Same images and style lock as Film maett.

### maett2 A: 7 s
- first_frame: v2/maett2/maett-t0.0.png
- keyframes: [{ image: v2/maett2/maett-t3.5.png, timestamp_s: 3.5 }]
- last_frame: v2/maett2/maett-t7.0.png
- duration: 7
- prompt: "Dawn at a quiet building site: the dark sky brightens to morning blue and the sun rises straight up in the upper right corner and stays there. The blue van drives in from the left along the road and stops in front of the house, rocking gently on its suspension as it parks; the hard hat and the toolbox, already waiting at the site, look at the van and smile."
- sound design ({SFX}): "a van engine approaching and idling down, tyres on gravel, a soft handbrake creak, early birds, light morning wind"
- save as: v2/maett2/shot-A.mp4

### maett2 B: 7 s
- first_frame: v2/maett2/maett-t7.0.png
- keyframes: [{ image: v2/maett2/maett-t10.5.png, timestamp_s: 3.5 }]
- last_frame: v2/maett2/maett-t14.0.png
- duration: 7
- prompt: "Morning at the site: the van, the hard hat and the toolbox work contentedly; the hard hat and the toolbox look down at their work, bob lightly as if humming, and glance up at each other with small smiles. The sun stays in the upper right corner."
- sound design ({SFX}): "distant hammering and a drill in short bursts, birdsong, a light breeze"
- save as: v2/maett2/shot-B.mp4

### maett2 C: 6 s
- first_frame: v2/maett2/maett-t14.0.png
- keyframes: [{ image: v2/maett2/maett-t17.0.png, timestamp_s: 3.0 }]
- last_frame: v2/maett2/maett-t20.0.png
- duration: 6
- prompt: "Midday at the site: all three look up with proud, happy faces, a small satisfied nod, the sun stays in the upper right corner."
- sound design ({SFX}): "birdsong, a distant hammer tap, calm outdoor ambience"
- save as: v2/maett2/shot-C.mp4

## Film nota
images: refs/model-van.png, refs/model-note.png
Style lock: Fl

### nota A: 7 s
- first_frame: v2/nota/nota-t0.0.png
- keyframes: [{ image: v2/nota/nota-t3.5.png, timestamp_s: 3.5 }]
- last_frame: v2/nota/nota-t7.0.png
- duration: 7
- prompt: "Outside a builders' merchant on a clear day: the van is parked at the left, and a small paper receipt stands on the pavement by the shop door, first a little worried, then looking up with curiosity."
- sound design ({SFX}): "a car park ambience, a shop door chime, a trolley rolling past in the distance, paper rustle"
- save as: v2/nota/shot-A.mp4

### nota B: 7 s
- first_frame: v2/nota/nota-t7.0.png
- keyframes: [{ image: v2/nota/nota-t10.5.png, timestamp_s: 3.5 }]
- last_frame: v2/nota/nota-t14.0.png
- duration: 7
- prompt: "The receipt looks up with a surprised little start, then breaks into a relieved, happy smile; the van beside it smiles too."
- sound design ({SFX}): "a soft camera shutter click, a gentle paper flutter, car park ambience"
- save as: v2/nota/shot-B.mp4

### nota C: 6 s
- first_frame: v2/nota/nota-t14.0.png
- keyframes: [{ image: v2/nota/nota-t17.0.png, timestamp_s: 3.0 }]
- last_frame: v2/nota/nota-t20.0.png
- duration: 6
- prompt: "The receipt closes its eyes in a big happy smile with a small hop and two tiny orange sparkles, then stands proud; the van looks on proudly."
- sound design ({SFX}): "a light happy paper flutter, a soft positive click, car park ambience"
- save as: v2/nota/shot-C.mp4

## Film drog
images: refs/model-box.png, refs/model-hat.png, refs/model-note.png
Style lock: Fl

### drog A: 7 s
- first_frame: v2/drog/drog-t0.0.png
- keyframes: [{ image: v2/drog/drog-t3.5.png, timestamp_s: 3.5 }]
- last_frame: v2/drog/drog-t7.0.png
- duration: 7
- prompt: "End of the job at a building site: the toolbox slowly lowers its lid until it shuts with a small satisfied settle; the hard hat and the receipt look up at the sky with curiosity."
- sound design ({SFX}): "a metal toolbox lid closing with a solid clack, a latch click, birdsong, light wind"
- save as: v2/drog/shot-A.mp4

### drog B: 7 s
- first_frame: v2/drog/drog-t7.0.png
- keyframes: [{ image: v2/drog/drog-t10.5.png, timestamp_s: 3.5 }]
- last_frame: v2/drog/drog-t14.0.png
- duration: 7
- prompt: "The hard hat and the receipt smile happily while looking up; the toolbox opens its lid a little and peeks up with a content smile."
- sound design ({SFX}): "soft paper shuffling, a pen scratch, birdsong"
- save as: v2/drog/shot-B.mp4

### drog C: 6 s
- first_frame: v2/drog/drog-t14.0.png
- keyframes: [{ image: v2/drog/drog-t17.0.png, timestamp_s: 3.0 }]
- last_frame: v2/drog/drog-t20.0.png
- duration: 6
- prompt: "All three look ahead proudly and happily, the receipt closes its eyes in a joyful smile with a tiny hop."
- sound design ({SFX}): "a soft satisfied chime-like tap of wood, birdsong, calm ambience"
- save as: v2/drog/shot-C.mp4

## Film fri2
images: refs/model-van.png, refs/model-hat.png
Style lock: Fl

### fri2 A: 7 s
- first_frame: v2/fri2/fri2-t0.0.png
- keyframes: [{ image: v2/fri2/fri2-t3.5.png, timestamp_s: 3.5 }]
- last_frame: v2/fri2/fri2-t7.0.png
- duration: 7
- prompt: "Sunset at the building site: the warm orange sky slowly turns to dusk blue as the sun sinks down behind the ground; the van and the hard hat stand calm and content, watching the sunset."
- sound design ({SFX}): "evening wind, distant traffic, a few evening birds, a soft click of a phone tap"
- save as: v2/fri2/shot-A.mp4

### fri2 B: 7 s
- first_frame: v2/fri2/fri2-t7.0.png
- keyframes: [{ image: v2/fri2/fri2-t10.5.png, timestamp_s: 3.5 }]
- last_frame: v2/fri2/fri2-t14.0.png
- duration: 7
- prompt: "The scene softly dissolves from the building site to a small home at night with one warm lit window; the sky becomes deep night blue and a bright crescent moon rises and stays clearly visible in the upper right; the van and the hard hat look content, then close their eyes and fall asleep."
- sound design ({SFX}): "a quiet night ambience, a car engine switching off, a soft door close in the distance, crickets"
- save as: v2/fri2/shot-B.mp4

### fri2 C: 6 s
- first_frame: v2/fri2/fri2-t14.0.png
- keyframes: [{ image: v2/fri2/fri2-t17.0.png, timestamp_s: 3.0 }]
- last_frame: v2/fri2/fri2-t20.0.png
- duration: 6
- prompt: "A peaceful night: the van and the hard hat sleep with calm smiles in front of the home, breathing slowly; the crescent moon glows steadily in the sky and stays fully visible."
- sound design ({SFX}): "crickets, soft night wind, very calm"
- save as: v2/fri2/shot-C.mp4

Write v2/report.md with, per shot, the exact arguments, returned path, duration, resolution, whether the file has an audio stream, and any error verbatim. Then stop.