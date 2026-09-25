# v3 report

Eleven reference_to_video calls, two at a time.
Prompts are the spec text, sent verbatim.
No HTTP 429.
YAVG is the mean of lavfi.signalstats.YAVG across frames.
Every mean is above 40, so no shot was retried.
Error for every shot: none.

## maett3 A

Arguments:

```json
{
  "prompt": "Dawn at a quiet building site: the dark sky brightens to morning blue and the sun rises straight up in the upper right corner and stays there. The blue van slides in from the left along the road, seen from the front the whole time (it never turns sideways), and stops in front of the house, settling gently; the hard hat and the toolbox, already waiting at the site, look at the van and smile with open eyes. Flat 2D vector animation, exactly the art style of the pinned frames: solid flat colours, no outlines, no texture, no 3D, no depth of field, no film grain. The characters are <IMAGE_1> the blue work van, <IMAGE_2> the orange hard hat and <IMAGE_3> the graphite toolbox with an orange handle; there is also a small house with a thin grey ladder, which has no face. The toolbox's face is always visible under its lid. Keep shapes, colours and proportions identical to the references and the pinned frames. They have round white eyes with black pupils, eyelids and small simple mouths; eyes never turn into slits or angry shapes, expressions stay soft and friendly with wide open eyes; eyes are always two full round white circles with a black pupil, never dented, grey or half covered; a blink is rare and brief, and the van does not blink. Characters never touch, overlap or merge; each keeps exactly two eyes and one mouth. No arms, no legs, no hands, no new characters, no people, no text, no letters, no numbers, no logos, no signs. Static camera: no pan, no zoom, no cut. The ground stays flat and still. Apart from what this prompt describes, nothing appears or disappears: no new objects, no carts, no trolleys, no extra doors, no other vehicles, no scaffolding, no props; the buildings keep exactly the shapes of the pinned frames. Characters stay standing on the ground: no jumping, no floating. Audio: clear, well-recorded, clearly audible sound design, all sources off screen, with no music and no speech: a van engine approaching and idling down, tyres on gravel, a soft handbrake creak, early birds, light morning wind",
  "aspect_ratio": "9:16",
  "duration": 7,
  "resolution_name": "720p",
  "images": [
    "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/refs/model-van.png",
    "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/refs/model-hat.png",
    "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/refs/model-box.png"
  ],
  "first_frame": "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/v2/maett3/maett-t0.0.png",
  "last_frame": "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/v2/maett3/maett-t7.0.png",
  "keyframes": [
    {
      "image": "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/v2/maett3/maett-t3.5.png",
      "timestamp_s": 3.5
    }
  ]
}
```

Returned path: `/home/pk/.grok/sessions/%2Fhome%2Fpk%2Fgit%2Fpostiz-app/01a0d7d5-58fb-77b1-9700-1e063d455661/videos/31.mp4`
Saved as: `/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/v2/maett3/shot-A.mp4`
Duration: 7.041667 s.
YAVG mean: 122.667 over 169 frames (min 63.393, max 151.932).
YAVG check: pass, mean above 40.
Error: none.

## maett3 B

Arguments:

```json
{
  "prompt": "Morning at the site: the van, the hard hat and the toolbox smile with open eyes; the hard hat and the toolbox look down a little, bob lightly as if humming, and glance at each other. The sun stays in the upper right corner. Flat 2D vector animation, exactly the art style of the pinned frames: solid flat colours, no outlines, no texture, no 3D, no depth of field, no film grain. The characters are <IMAGE_1> the blue work van, <IMAGE_2> the orange hard hat and <IMAGE_3> the graphite toolbox with an orange handle; there is also a small house with a thin grey ladder, which has no face. The toolbox's face is always visible under its lid. Keep shapes, colours and proportions identical to the references and the pinned frames. They have round white eyes with black pupils, eyelids and small simple mouths; eyes never turn into slits or angry shapes, expressions stay soft and friendly with wide open eyes; eyes are always two full round white circles with a black pupil, never dented, grey or half covered; a blink is rare and brief, and the van does not blink. Characters never touch, overlap or merge; each keeps exactly two eyes and one mouth. No arms, no legs, no hands, no new characters, no people, no text, no letters, no numbers, no logos, no signs. Static camera: no pan, no zoom, no cut. The ground stays flat and still. Apart from what this prompt describes, nothing appears or disappears: no new objects, no carts, no trolleys, no extra doors, no other vehicles, no scaffolding, no props; the buildings keep exactly the shapes of the pinned frames. Characters stay standing on the ground: no jumping, no floating. Audio: clear, well-recorded, clearly audible sound design, all sources off screen, with no music and no speech: distant hammering and a drill in short bursts, birdsong, a light breeze",
  "aspect_ratio": "9:16",
  "duration": 7,
  "resolution_name": "720p",
  "images": [
    "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/refs/model-van.png",
    "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/refs/model-hat.png",
    "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/refs/model-box.png"
  ],
  "first_frame": "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/v2/maett3/maett-t7.0.png",
  "last_frame": "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/v2/maett3/maett-t14.0.png",
  "keyframes": [
    {
      "image": "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/v2/maett3/maett-t10.5.png",
      "timestamp_s": 3.5
    }
  ]
}
```

Returned path: `/home/pk/.grok/sessions/%2Fhome%2Fpk%2Fgit%2Fpostiz-app/01a0d7d5-58fb-77b1-9700-1e063d455661/videos/30.mp4`
Saved as: `/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/v2/maett3/shot-B.mp4`
Duration: 7.041667 s.
YAVG mean: 152.134 over 169 frames (min 151.189, max 152.551).
YAVG check: pass, mean above 40.
Error: none.

## maett3 C

Arguments:

```json
{
  "prompt": "Late morning at the site: all three look up with proud, happy, open-eyed faces; the bodies do not move. The sun stays in the upper right corner. Flat 2D vector animation, exactly the art style of the pinned frames: solid flat colours, no outlines, no texture, no 3D, no depth of field, no film grain. The characters are <IMAGE_1> the blue work van, <IMAGE_2> the orange hard hat and <IMAGE_3> the graphite toolbox with an orange handle; there is also a small house with a thin grey ladder, which has no face. The toolbox's face is always visible under its lid. Keep shapes, colours and proportions identical to the references and the pinned frames. They have round white eyes with black pupils, eyelids and small simple mouths; eyes never turn into slits or angry shapes, expressions stay soft and friendly with wide open eyes; eyes are always two full round white circles with a black pupil, never dented, grey or half covered; a blink is rare and brief, and the van does not blink. Characters never touch, overlap or merge; each keeps exactly two eyes and one mouth. No arms, no legs, no hands, no new characters, no people, no text, no letters, no numbers, no logos, no signs. Static camera: no pan, no zoom, no cut. The ground stays flat and still. Apart from what this prompt describes, nothing appears or disappears: no new objects, no carts, no trolleys, no extra doors, no other vehicles, no scaffolding, no props; the buildings keep exactly the shapes of the pinned frames. Characters stay standing on the ground: no jumping, no floating. Audio: clear, well-recorded, clearly audible sound design, all sources off screen, with no music and no speech: birdsong, a distant hammer tap, calm outdoor ambience",
  "aspect_ratio": "9:16",
  "duration": 6,
  "resolution_name": "720p",
  "images": [
    "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/refs/model-van.png",
    "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/refs/model-hat.png",
    "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/refs/model-box.png"
  ],
  "first_frame": "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/v2/maett3/maett-t14.0.png",
  "last_frame": "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/v2/maett3/maett-t20.0.png",
  "keyframes": [
    {
      "image": "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/v2/maett3/maett-t17.0.png",
      "timestamp_s": 3
    }
  ]
}
```

Returned path: `/home/pk/.grok/sessions/%2Fhome%2Fpk%2Fgit%2Fpostiz-app/01a0d7d5-58fb-77b1-9700-1e063d455661/videos/32.mp4`
Saved as: `/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/v2/maett3/shot-C.mp4`
Duration: 6.041667 s.
YAVG mean: 155.291 over 145 frames (min 153.861, max 158.106).
YAVG check: pass, mean above 40.
Error: none.

## nota3 A

Arguments:

```json
{
  "prompt": "Outside a builders' merchant on a clear day: the van is parked at the left, and a small paper receipt stands still on the pavement by the shop, looking around with gentle curiosity, then up. Flat 2D vector animation, exactly the art style of the pinned frames: solid flat colours, no outlines, no texture, no 3D, no depth of field, no film grain. The characters are <IMAGE_1> the blue work van and <IMAGE_2> the small paper receipt; there is also a low shop building with an orange stripe, which has no face. Keep shapes, colours and proportions identical to the references and the pinned frames. They have round white eyes with black pupils, eyelids and small simple mouths; eyes never turn into slits or angry shapes, expressions stay soft and friendly with wide open eyes; eyes are always two full round white circles with a black pupil, never dented, grey or half covered; a blink is rare and brief, and the van does not blink. Characters never touch, overlap or merge; each keeps exactly two eyes and one mouth. No arms, no legs, no hands, no new characters, no people, no text, no letters, no numbers, no logos, no signs. Static camera: no pan, no zoom, no cut. The ground stays flat and still. Apart from what this prompt describes, nothing appears or disappears: no new objects, no carts, no trolleys, no extra doors, no other vehicles, no scaffolding, no props; the buildings keep exactly the shapes of the pinned frames. Characters stay standing on the ground: no jumping, no floating. Audio: clear, well-recorded, clearly audible sound design, all sources off screen, with no music and no speech: car park ambience, a soft shop door chime, paper rustle",
  "aspect_ratio": "9:16",
  "duration": 7,
  "resolution_name": "720p",
  "images": [
    "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/refs/model-van.png",
    "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/refs/model-note.png"
  ],
  "first_frame": "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/v2/nota3/nota-t0.0.png",
  "last_frame": "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/v2/nota3/nota-t7.0.png",
  "keyframes": [
    {
      "image": "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/v2/nota3/nota-t3.5.png",
      "timestamp_s": 3.5
    }
  ]
}
```

Returned path: `/home/pk/.grok/sessions/%2Fhome%2Fpk%2Fgit%2Fpostiz-app/01a0d7d5-58fb-77b1-9700-1e063d455661/videos/33.mp4`
Saved as: `/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/v2/nota3/shot-A.mp4`
Duration: 7.041667 s.
YAVG mean: 163.495 over 169 frames (min 163.056, max 163.722).
YAVG check: pass, mean above 40.
Error: none.

## nota3 B

Arguments:

```json
{
  "prompt": "The receipt looks up attentively, then breaks into a happy open-eyed smile; the van beside it smiles too. Both stay in place. Flat 2D vector animation, exactly the art style of the pinned frames: solid flat colours, no outlines, no texture, no 3D, no depth of field, no film grain. The characters are <IMAGE_1> the blue work van and <IMAGE_2> the small paper receipt; there is also a low shop building with an orange stripe, which has no face. Keep shapes, colours and proportions identical to the references and the pinned frames. They have round white eyes with black pupils, eyelids and small simple mouths; eyes never turn into slits or angry shapes, expressions stay soft and friendly with wide open eyes; eyes are always two full round white circles with a black pupil, never dented, grey or half covered; a blink is rare and brief, and the van does not blink. Characters never touch, overlap or merge; each keeps exactly two eyes and one mouth. No arms, no legs, no hands, no new characters, no people, no text, no letters, no numbers, no logos, no signs. Static camera: no pan, no zoom, no cut. The ground stays flat and still. Apart from what this prompt describes, nothing appears or disappears: no new objects, no carts, no trolleys, no extra doors, no other vehicles, no scaffolding, no props; the buildings keep exactly the shapes of the pinned frames. Characters stay standing on the ground: no jumping, no floating. Audio: clear, well-recorded, clearly audible sound design, all sources off screen, with no music and no speech: a soft camera shutter click, a gentle paper flutter, car park ambience",
  "aspect_ratio": "9:16",
  "duration": 7,
  "resolution_name": "720p",
  "images": [
    "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/refs/model-van.png",
    "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/refs/model-note.png"
  ],
  "first_frame": "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/v2/nota3/nota-t7.0.png",
  "last_frame": "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/v2/nota3/nota-t14.0.png",
  "keyframes": [
    {
      "image": "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/v2/nota3/nota-t10.5.png",
      "timestamp_s": 3.5
    }
  ]
}
```

Returned path: `/home/pk/.grok/sessions/%2Fhome%2Fpk%2Fgit%2Fpostiz-app/01a0d7d5-58fb-77b1-9700-1e063d455661/videos/35.mp4`
Saved as: `/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/v2/nota3/shot-B.mp4`
Duration: 7.041667 s.
YAVG mean: 163.182 over 169 frames (min 162.148, max 163.727).
YAVG check: pass, mean above 40.
Error: none.

## nota3 C

Arguments:

```json
{
  "prompt": "The receipt smiles happily with open eyes and stands proud; the van looks on happily. Both stay in place, feet on the ground. Flat 2D vector animation, exactly the art style of the pinned frames: solid flat colours, no outlines, no texture, no 3D, no depth of field, no film grain. The characters are <IMAGE_1> the blue work van and <IMAGE_2> the small paper receipt; there is also a low shop building with an orange stripe, which has no face. Keep shapes, colours and proportions identical to the references and the pinned frames. They have round white eyes with black pupils, eyelids and small simple mouths; eyes never turn into slits or angry shapes, expressions stay soft and friendly with wide open eyes; eyes are always two full round white circles with a black pupil, never dented, grey or half covered; a blink is rare and brief, and the van does not blink. Characters never touch, overlap or merge; each keeps exactly two eyes and one mouth. No arms, no legs, no hands, no new characters, no people, no text, no letters, no numbers, no logos, no signs. Static camera: no pan, no zoom, no cut. The ground stays flat and still. Apart from what this prompt describes, nothing appears or disappears: no new objects, no carts, no trolleys, no extra doors, no other vehicles, no scaffolding, no props; the buildings keep exactly the shapes of the pinned frames. Characters stay standing on the ground: no jumping, no floating. Audio: clear, well-recorded, clearly audible sound design, all sources off screen, with no music and no speech: a light happy paper flutter, a soft positive click, car park ambience",
  "aspect_ratio": "9:16",
  "duration": 6,
  "resolution_name": "720p",
  "images": [
    "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/refs/model-van.png",
    "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/refs/model-note.png"
  ],
  "first_frame": "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/v2/nota3/nota-t14.0.png",
  "last_frame": "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/v2/nota3/nota-t20.0.png",
  "keyframes": [
    {
      "image": "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/v2/nota3/nota-t17.0.png",
      "timestamp_s": 3
    }
  ]
}
```

Returned path: `/home/pk/.grok/sessions/%2Fhome%2Fpk%2Fgit%2Fpostiz-app/01a0d7d5-58fb-77b1-9700-1e063d455661/videos/34.mp4`
Saved as: `/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/v2/nota3/shot-C.mp4`
Duration: 6.041667 s.
YAVG mean: 163.271 over 145 frames (min 163.082, max 163.784).
YAVG check: pass, mean above 40.
Error: none.

## drog3 A

Arguments:

```json
{
  "prompt": "End of the job at a building site: the toolbox, the hard hat and the receipt stand calm and content, then all three look up at the sky with curiosity. The toolbox's lid stays open and its face stays visible. Flat 2D vector animation, exactly the art style of the pinned frames: solid flat colours, no outlines, no texture, no 3D, no depth of field, no film grain. The characters are <IMAGE_1> the graphite toolbox with an orange handle, <IMAGE_2> the orange hard hat and <IMAGE_3> the small paper receipt; there is also a small house with a thin grey ladder, which has no face. The toolbox's face is always visible under its lid; the lid never closes over the face. Keep shapes, colours and proportions identical to the references and the pinned frames. They have round white eyes with black pupils, eyelids and small simple mouths; eyes never turn into slits or angry shapes, expressions stay soft and friendly with wide open eyes; eyes are always two full round white circles with a black pupil, never dented, grey or half covered; a blink is rare and brief, and the van does not blink. Characters never touch, overlap or merge; each keeps exactly two eyes and one mouth. No arms, no legs, no hands, no new characters, no people, no text, no letters, no numbers, no logos, no signs. Static camera: no pan, no zoom, no cut. The ground stays flat and still. Apart from what this prompt describes, nothing appears or disappears: no new objects, no carts, no trolleys, no extra doors, no other vehicles, no scaffolding, no props; the buildings keep exactly the shapes of the pinned frames. Characters stay standing on the ground: no jumping, no floating. Audio: clear, well-recorded, clearly audible sound design, all sources off screen, with no music and no speech: a metal latch click, birdsong, light wind",
  "aspect_ratio": "9:16",
  "duration": 7,
  "resolution_name": "720p",
  "images": [
    "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/refs/model-box.png",
    "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/refs/model-hat.png",
    "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/refs/model-note.png"
  ],
  "first_frame": "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/v2/drog3/drog-t0.0.png",
  "last_frame": "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/v2/drog3/drog-t7.0.png",
  "keyframes": [
    {
      "image": "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/v2/drog3/drog-t3.5.png",
      "timestamp_s": 3.5
    }
  ]
}
```

Returned path: `/home/pk/.grok/sessions/%2Fhome%2Fpk%2Fgit%2Fpostiz-app/01a0d7d5-58fb-77b1-9700-1e063d455661/videos/37.mp4`
Saved as: `/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/v2/drog3/shot-A.mp4`
Duration: 7.041667 s.
YAVG mean: 185.241 over 169 frames (min 184.652, max 185.825).
YAVG check: pass, mean above 40.
Error: none.

## drog3 B

Arguments:

```json
{
  "prompt": "The hard hat, the receipt and the toolbox smile happily with open eyes while looking up, bobbing lightly in place. Flat 2D vector animation, exactly the art style of the pinned frames: solid flat colours, no outlines, no texture, no 3D, no depth of field, no film grain. The characters are <IMAGE_1> the graphite toolbox with an orange handle, <IMAGE_2> the orange hard hat and <IMAGE_3> the small paper receipt; there is also a small house with a thin grey ladder, which has no face. The toolbox's face is always visible under its lid; the lid never closes over the face. Keep shapes, colours and proportions identical to the references and the pinned frames. They have round white eyes with black pupils, eyelids and small simple mouths; eyes never turn into slits or angry shapes, expressions stay soft and friendly with wide open eyes; eyes are always two full round white circles with a black pupil, never dented, grey or half covered; a blink is rare and brief, and the van does not blink. Characters never touch, overlap or merge; each keeps exactly two eyes and one mouth. No arms, no legs, no hands, no new characters, no people, no text, no letters, no numbers, no logos, no signs. Static camera: no pan, no zoom, no cut. The ground stays flat and still. Apart from what this prompt describes, nothing appears or disappears: no new objects, no carts, no trolleys, no extra doors, no other vehicles, no scaffolding, no props; the buildings keep exactly the shapes of the pinned frames. Characters stay standing on the ground: no jumping, no floating. Audio: clear, well-recorded, clearly audible sound design, all sources off screen, with no music and no speech: soft paper shuffling, a pen scratch, birdsong",
  "aspect_ratio": "9:16",
  "duration": 7,
  "resolution_name": "720p",
  "images": [
    "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/refs/model-box.png",
    "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/refs/model-hat.png",
    "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/refs/model-note.png"
  ],
  "first_frame": "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/v2/drog3/drog-t7.0.png",
  "last_frame": "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/v2/drog3/drog-t14.0.png",
  "keyframes": [
    {
      "image": "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/v2/drog3/drog-t10.5.png",
      "timestamp_s": 3.5
    }
  ]
}
```

Returned path: `/home/pk/.grok/sessions/%2Fhome%2Fpk%2Fgit%2Fpostiz-app/01a0d7d5-58fb-77b1-9700-1e063d455661/videos/36.mp4`
Saved as: `/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/v2/drog3/shot-B.mp4`
Duration: 7.041667 s.
YAVG mean: 185.027 over 169 frames (min 184.406, max 185.915).
YAVG check: pass, mean above 40.
Error: none.

## drog3 C

Arguments:

```json
{
  "prompt": "All three look ahead proudly and happily with open eyes; nobody moves from their place. Flat 2D vector animation, exactly the art style of the pinned frames: solid flat colours, no outlines, no texture, no 3D, no depth of field, no film grain. The characters are <IMAGE_1> the graphite toolbox with an orange handle, <IMAGE_2> the orange hard hat and <IMAGE_3> the small paper receipt; there is also a small house with a thin grey ladder, which has no face. The toolbox's face is always visible under its lid; the lid never closes over the face. Keep shapes, colours and proportions identical to the references and the pinned frames. They have round white eyes with black pupils, eyelids and small simple mouths; eyes never turn into slits or angry shapes, expressions stay soft and friendly with wide open eyes; eyes are always two full round white circles with a black pupil, never dented, grey or half covered; a blink is rare and brief, and the van does not blink. Characters never touch, overlap or merge; each keeps exactly two eyes and one mouth. No arms, no legs, no hands, no new characters, no people, no text, no letters, no numbers, no logos, no signs. Static camera: no pan, no zoom, no cut. The ground stays flat and still. Apart from what this prompt describes, nothing appears or disappears: no new objects, no carts, no trolleys, no extra doors, no other vehicles, no scaffolding, no props; the buildings keep exactly the shapes of the pinned frames. Characters stay standing on the ground: no jumping, no floating. Audio: clear, well-recorded, clearly audible sound design, all sources off screen, with no music and no speech: a soft satisfied wooden tap, birdsong, calm ambience",
  "aspect_ratio": "9:16",
  "duration": 6,
  "resolution_name": "720p",
  "images": [
    "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/refs/model-box.png",
    "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/refs/model-hat.png",
    "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/refs/model-note.png"
  ],
  "first_frame": "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/v2/drog3/drog-t14.0.png",
  "last_frame": "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/v2/drog3/drog-t20.0.png",
  "keyframes": [
    {
      "image": "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/v2/drog3/drog-t17.0.png",
      "timestamp_s": 3
    }
  ]
}
```

Returned path: `/home/pk/.grok/sessions/%2Fhome%2Fpk%2Fgit%2Fpostiz-app/01a0d7d5-58fb-77b1-9700-1e063d455661/videos/38.mp4`
Saved as: `/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/v2/drog3/shot-C.mp4`
Duration: 6.041667 s.
YAVG mean: 185.192 over 145 frames (min 184.685, max 185.965).
YAVG check: pass, mean above 40.
Error: none.

## fri23 B

Arguments:

```json
{
  "prompt": "Evening at a small home with one warm lit window: the dusk sky darkens to deep night blue and a bright crescent moon rises and stays clearly visible in the upper right; the van and the hard hat look content, then close their eyes and fall asleep. Once an eye has closed it never opens again. The home keeps its warm lit window. Flat 2D vector animation, exactly the art style of the pinned frames: solid flat colours, no outlines, no texture, no 3D, no depth of field, no film grain. The characters are <IMAGE_1> the blue work van and <IMAGE_2> the orange hard hat; there is also a small home with one warm lit window, which has no face. Keep shapes, colours and proportions identical to the references and the pinned frames. They have round white eyes with black pupils, eyelids and small simple mouths; eyes never turn into slits or angry shapes, expressions stay soft and friendly with wide open eyes; eyes are always two full round white circles with a black pupil, never dented, grey or half covered; a blink is rare and brief, and the van does not blink. Characters never touch, overlap or merge; each keeps exactly two eyes and one mouth. No arms, no legs, no hands, no new characters, no people, no text, no letters, no numbers, no logos, no signs. Static camera: no pan, no zoom, no cut. The ground stays flat and still. Apart from what this prompt describes, nothing appears or disappears: no new objects, no carts, no trolleys, no extra doors, no other vehicles, no scaffolding, no props; the buildings keep exactly the shapes of the pinned frames. Characters stay standing on the ground: no jumping, no floating. Audio: clear, well-recorded, clearly audible sound design, all sources off screen, with no music and no speech: quiet night ambience, a car engine switching off, a soft door closing in the distance, crickets",
  "aspect_ratio": "9:16",
  "duration": 7,
  "resolution_name": "720p",
  "images": [
    "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/refs/model-van.png",
    "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/refs/model-hat.png"
  ],
  "first_frame": "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/v2/fri23/fri2-t7.0.png",
  "last_frame": "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/v2/fri23/fri2-t14.0.png",
  "keyframes": [
    {
      "image": "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/v2/fri23/fri2-t10.5.png",
      "timestamp_s": 3.5
    }
  ]
}
```

Returned path: `/home/pk/.grok/sessions/%2Fhome%2Fpk%2Fgit%2Fpostiz-app/01a0d7d5-58fb-77b1-9700-1e063d455661/videos/39.mp4`
Saved as: `/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/v2/fri23/shot-B.mp4`
Duration: 7.041667 s.
YAVG mean: 60.244 over 169 frames (min 50.317, max 83.931).
YAVG check: pass, mean above 40.
Error: none.

## fri23 C

Arguments:

```json
{
  "prompt": "A peaceful, almost still night: the van and the hard hat are fast asleep in front of the home, eyes closed as curved lines, calm smiles, breathing slowly; a small z drifts up above each of them. Nobody wakes up: every frame shows both characters with closed eyes. The van's headlights stay dark. The home keeps its warm lit window, and nothing else appears in the sky except the moon and the small z letters. Flat 2D vector animation, exactly the art style of the pinned frames: solid flat colours, no outlines, no texture, no 3D, no depth of field, no film grain. The characters are <IMAGE_1> the blue work van and <IMAGE_2> the orange hard hat; there is also a small home with one warm lit window, which has no face. Keep shapes, colours and proportions identical to the references and the pinned frames. They have round white eyes with black pupils, eyelids and small simple mouths; eyes never turn into slits or angry shapes, expressions stay soft and friendly with wide open eyes; eyes are always two full round white circles with a black pupil, never dented, grey or half covered; a blink is rare and brief, and the van does not blink. Characters never touch, overlap or merge; each keeps exactly two eyes and one mouth. No arms, no legs, no hands, no new characters, no people, no text, no letters, no numbers, no logos, no signs. Static camera: no pan, no zoom, no cut. The ground stays flat and still. Apart from what this prompt describes, nothing appears or disappears: no new objects, no carts, no trolleys, no extra doors, no other vehicles, no scaffolding, no props; the buildings keep exactly the shapes of the pinned frames. Characters stay standing on the ground: no jumping, no floating. Audio: clear, well-recorded, clearly audible sound design, all sources off screen, with no music and no speech: crickets, soft night wind, very calm",
  "aspect_ratio": "9:16",
  "duration": 6,
  "resolution_name": "720p",
  "images": [
    "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/refs/model-van.png",
    "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/refs/model-hat.png"
  ],
  "first_frame": "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/v2/fri23/fri2-t14.0.png",
  "last_frame": "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/v2/fri23/fri2-t20.0.png",
  "keyframes": [
    {
      "image": "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/v2/fri23/fri2-t17.0.png",
      "timestamp_s": 3
    }
  ]
}
```

Returned path: `/home/pk/.grok/sessions/%2Fhome%2Fpk%2Fgit%2Fpostiz-app/01a0d7d5-58fb-77b1-9700-1e063d455661/videos/40.mp4`
Saved as: `/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/v2/fri23/shot-C.mp4`
Duration: 6.041667 s.
YAVG mean: 47.964 over 145 frames (min 47.283, max 48.252).
YAVG check: pass, mean above 40.
Error: none.

# v3b takes

Two reference_to_video calls, in parallel.
Both prompts are the spec text, sent verbatim.
No HTTP 429.
YAVG is the mean of lavfi.signalstats.YAVG across frames.
Both means are above 40, so neither take was retried.

## maett3 B2

Arguments:

```json
{
  "prompt": "Morning at the site: the van looks straight ahead at the viewer with wide open, perfectly round eyes and a small smile for the whole shot; its eyes never narrow, never droop and never look sideways. The hard hat and the toolbox smile with open eyes; the hard hat and the toolbox look down a little, bob lightly as if humming, and glance at each other. The sun stays in the upper right corner. Flat 2D vector animation, exactly the art style of the pinned frames: solid flat colours, no outlines, no texture, no 3D, no depth of field, no film grain. The characters are <IMAGE_1> the blue work van, <IMAGE_2> the orange hard hat and <IMAGE_3> the graphite toolbox with an orange handle; there is also a small house with a thin grey ladder, which has no face. The toolbox's face is always visible under its lid. Keep shapes, colours and proportions identical to the references and the pinned frames. They have round white eyes with black pupils, eyelids and small simple mouths; eyes never turn into slits or angry shapes, expressions stay soft and friendly with wide open eyes; eyes are always two full round white circles with a black pupil, never dented, grey or half covered; a blink is rare and brief, and the van does not blink. Characters never touch, overlap or merge; each keeps exactly two eyes and one mouth. No arms, no legs, no hands, no new characters, no people, no text, no letters, no numbers, no logos, no signs. Static camera: no pan, no zoom, no cut. The ground stays flat and still. Apart from what this prompt describes, nothing appears or disappears: no new objects, no carts, no trolleys, no extra doors, no other vehicles, no scaffolding, no props; the buildings keep exactly the shapes of the pinned frames. Characters stay standing on the ground: no jumping, no floating. Audio: clear, well-recorded, clearly audible sound design, all sources off screen, with no music and no speech: distant hammering and a drill in short bursts, birdsong, a light breeze",
  "aspect_ratio": "9:16",
  "duration": 7,
  "resolution_name": "720p",
  "images": [
    "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/refs/model-van.png",
    "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/refs/model-hat.png",
    "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/refs/model-box.png"
  ],
  "first_frame": "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/v2/maett3/maett-t7.0.png",
  "last_frame": "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/v2/maett3/maett-t14.0.png",
  "keyframes": [
    {
      "image": "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/v2/maett3/maett-t10.5.png",
      "timestamp_s": 3.5
    }
  ]
}
```

Returned path: `/home/pk/.grok/sessions/%2Fhome%2Fpk%2Fgit%2Fpostiz-app/01a0d7d5-58fb-77b1-9700-1e063d455661/videos/42.mp4`
Saved as: `/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/v2/maett3/shot-B2.mp4`
Duration: 7.041667 s.
YAVG mean: 151.970 over 169 frames (min 151.042, max 152.539).
YAVG check: pass, mean above 40.
Error: none.

## maett3 B3

Arguments:

```json
{
  "prompt": "Morning at the site: the van looks straight ahead at the viewer with wide open, perfectly round eyes and a small smile for the whole shot; its eyes never narrow, never droop and never look sideways. The hard hat and the toolbox smile with open eyes; the hard hat and the toolbox look down a little, bob lightly as if humming, and glance at each other. The sun stays in the upper right corner. Flat 2D vector animation, exactly the art style of the pinned frames: solid flat colours, no outlines, no texture, no 3D, no depth of field, no film grain. The characters are <IMAGE_1> the blue work van, <IMAGE_2> the orange hard hat and <IMAGE_3> the graphite toolbox with an orange handle; there is also a small house with a thin grey ladder, which has no face. The toolbox's face is always visible under its lid. Keep shapes, colours and proportions identical to the references and the pinned frames. They have round white eyes with black pupils, eyelids and small simple mouths; eyes never turn into slits or angry shapes, expressions stay soft and friendly with wide open eyes; eyes are always two full round white circles with a black pupil, never dented, grey or half covered; a blink is rare and brief, and the van does not blink. Characters never touch, overlap or merge; each keeps exactly two eyes and one mouth. No arms, no legs, no hands, no new characters, no people, no text, no letters, no numbers, no logos, no signs. Static camera: no pan, no zoom, no cut. The ground stays flat and still. Apart from what this prompt describes, nothing appears or disappears: no new objects, no carts, no trolleys, no extra doors, no other vehicles, no scaffolding, no props; the buildings keep exactly the shapes of the pinned frames. Characters stay standing on the ground: no jumping, no floating. Audio: clear, well-recorded, clearly audible sound design, all sources off screen, with no music and no speech: distant hammering and a drill in short bursts, birdsong, a light breeze",
  "aspect_ratio": "9:16",
  "duration": 7,
  "resolution_name": "720p",
  "images": [
    "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/refs/model-van.png",
    "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/refs/model-hat.png",
    "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/refs/model-box.png"
  ],
  "first_frame": "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/v2/maett3/maett-t7.0.png",
  "last_frame": "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/v2/maett3/maett-t14.0.png",
  "keyframes": [
    {
      "image": "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/v2/maett3/maett-t10.5.png",
      "timestamp_s": 3.5
    }
  ]
}
```

Returned path: `/home/pk/.grok/sessions/%2Fhome%2Fpk%2Fgit%2Fpostiz-app/01a0d7d5-58fb-77b1-9700-1e063d455661/videos/41.mp4`
Saved as: `/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/v2/maett3/shot-B3.mp4`
Duration: 7.041667 s.
YAVG mean: 152.003 over 169 frames (min 151.150, max 152.564).
YAVG check: pass, mean above 40.
Error: none.
