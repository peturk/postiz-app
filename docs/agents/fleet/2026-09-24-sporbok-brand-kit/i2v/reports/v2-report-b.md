# v2b report

Eleven reference_to_video calls, two at a time.
No HTTP 429, so no retry.
Each prompt is the spec text, sent verbatim.
Error for every shot: none.

## maett2 A

Arguments:

```json
{
  "prompt": "Dawn at a quiet building site: the dark sky brightens to morning blue and the sun rises straight up in the upper right corner and stays there. The blue van drives in from the left along the road and stops in front of the house, rocking gently on its suspension as it parks; the hard hat and the toolbox, already waiting at the site, look at the van and smile. Flat 2D vector animation, exactly the art style of the pinned frames: solid flat colours, no outlines, no texture, no 3D, no depth of field, no film grain. The characters are <IMAGE_1> the blue work van, <IMAGE_2> the orange hard hat and <IMAGE_3> the graphite toolbox with an orange handle; there is also a small house with a thin grey ladder, which has no face. Keep shapes, colours and proportions identical to the references and the pinned frames. They have round white eyes with black pupils, eyelids and small simple mouths; eyes never turn into slits or angry shapes, expressions stay soft and friendly, and a blink goes straight from open to closed and back. Characters never touch, overlap or merge; each keeps exactly two eyes and one mouth. No arms, no legs, no hands, no new characters, no people, no text, no letters, no numbers, no logos, no signs. Static camera: no pan, no zoom, no cut. The ground stays flat and still. Apart from what this prompt describes, nothing appears or disappears: no new objects, no carts, no trolleys, no extra doors, no other vehicles, no scaffolding, no props; the buildings keep exactly the shapes of the pinned frames. Characters stay standing on the ground: no jumping, no floating. Audio: clear, well-recorded, clearly audible sound design, all sources off screen, with no music and no speech: a van engine approaching and idling down, tyres on gravel, a soft handbrake creak, early birds, light morning wind",
  "aspect_ratio": "9:16",
  "duration": 7,
  "resolution_name": "720p",
  "images": [
    "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/refs/model-van.png",
    "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/refs/model-hat.png",
    "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/refs/model-box.png"
  ],
  "first_frame": "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/v2/maett2/maett-t0.0.png",
  "last_frame": "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/v2/maett2/maett-t7.0.png",
  "keyframes": [
    {
      "image": "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/v2/maett2/maett-t3.5.png",
      "timestamp_s": 3.5
    }
  ]
}
```

Returned path: `/home/pk/.grok/sessions/%2Fhome%2Fpk%2Fgit%2Fpostiz-app/01a0d7d5-58fb-77b1-9700-1e063d455661/videos/13.mp4`
Saved as: `/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/v2/maett2/shot-A.mp4`
Format duration: 7.041667 s.
Video duration: 7.041667 s at 24/1 fps.
Resolution: 720x1280.
Audio stream: yes, duration 7.000000 s.
Attached picture stream: yes, 720x1280.
Error: none.

## maett2 B

Arguments:

```json
{
  "prompt": "Morning at the site: the van, the hard hat and the toolbox are content; the hard hat and the toolbox look down, bob lightly as if humming, and glance up at each other with small smiles. The sun stays in the upper right corner. Flat 2D vector animation, exactly the art style of the pinned frames: solid flat colours, no outlines, no texture, no 3D, no depth of field, no film grain. The characters are <IMAGE_1> the blue work van, <IMAGE_2> the orange hard hat and <IMAGE_3> the graphite toolbox with an orange handle; there is also a small house with a thin grey ladder, which has no face. Keep shapes, colours and proportions identical to the references and the pinned frames. They have round white eyes with black pupils, eyelids and small simple mouths; eyes never turn into slits or angry shapes, expressions stay soft and friendly, and a blink goes straight from open to closed and back. Characters never touch, overlap or merge; each keeps exactly two eyes and one mouth. No arms, no legs, no hands, no new characters, no people, no text, no letters, no numbers, no logos, no signs. Static camera: no pan, no zoom, no cut. The ground stays flat and still. Apart from what this prompt describes, nothing appears or disappears: no new objects, no carts, no trolleys, no extra doors, no other vehicles, no scaffolding, no props; the buildings keep exactly the shapes of the pinned frames. Characters stay standing on the ground: no jumping, no floating. Audio: clear, well-recorded, clearly audible sound design, all sources off screen, with no music and no speech: distant hammering and a drill in short bursts, birdsong, a light breeze",
  "aspect_ratio": "9:16",
  "duration": 7,
  "resolution_name": "720p",
  "images": [
    "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/refs/model-van.png",
    "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/refs/model-hat.png",
    "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/refs/model-box.png"
  ],
  "first_frame": "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/v2/maett2/maett-t7.0.png",
  "last_frame": "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/v2/maett2/maett-t14.0.png",
  "keyframes": [
    {
      "image": "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/v2/maett2/maett-t10.5.png",
      "timestamp_s": 3.5
    }
  ]
}
```

Returned path: `/home/pk/.grok/sessions/%2Fhome%2Fpk%2Fgit%2Fpostiz-app/01a0d7d5-58fb-77b1-9700-1e063d455661/videos/14.mp4`
Saved as: `/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/v2/maett2/shot-B.mp4`
Format duration: 7.041667 s.
Video duration: 7.041667 s at 24/1 fps.
Resolution: 720x1280.
Audio stream: yes, duration 7.000000 s.
Attached picture stream: yes, 720x1280.
Error: none.

## maett2 C

Arguments:

```json
{
  "prompt": "Late morning at the site: all three look up with proud, happy faces; the bodies do not move. The sun stays in the upper right corner. Flat 2D vector animation, exactly the art style of the pinned frames: solid flat colours, no outlines, no texture, no 3D, no depth of field, no film grain. The characters are <IMAGE_1> the blue work van, <IMAGE_2> the orange hard hat and <IMAGE_3> the graphite toolbox with an orange handle; there is also a small house with a thin grey ladder, which has no face. Keep shapes, colours and proportions identical to the references and the pinned frames. They have round white eyes with black pupils, eyelids and small simple mouths; eyes never turn into slits or angry shapes, expressions stay soft and friendly, and a blink goes straight from open to closed and back. Characters never touch, overlap or merge; each keeps exactly two eyes and one mouth. No arms, no legs, no hands, no new characters, no people, no text, no letters, no numbers, no logos, no signs. Static camera: no pan, no zoom, no cut. The ground stays flat and still. Apart from what this prompt describes, nothing appears or disappears: no new objects, no carts, no trolleys, no extra doors, no other vehicles, no scaffolding, no props; the buildings keep exactly the shapes of the pinned frames. Characters stay standing on the ground: no jumping, no floating. Audio: clear, well-recorded, clearly audible sound design, all sources off screen, with no music and no speech: birdsong, a distant hammer tap, calm outdoor ambience",
  "aspect_ratio": "9:16",
  "duration": 6,
  "resolution_name": "720p",
  "images": [
    "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/refs/model-van.png",
    "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/refs/model-hat.png",
    "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/refs/model-box.png"
  ],
  "first_frame": "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/v2/maett2/maett-t14.0.png",
  "last_frame": "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/v2/maett2/maett-t20.0.png",
  "keyframes": [
    {
      "image": "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/v2/maett2/maett-t17.0.png",
      "timestamp_s": 3
    }
  ]
}
```

Returned path: `/home/pk/.grok/sessions/%2Fhome%2Fpk%2Fgit%2Fpostiz-app/01a0d7d5-58fb-77b1-9700-1e063d455661/videos/16.mp4`
Saved as: `/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/v2/maett2/shot-C.mp4`
Format duration: 6.041667 s.
Video duration: 6.041667 s at 24/1 fps.
Resolution: 720x1280.
Audio stream: yes, duration 6.000000 s.
Attached picture stream: yes, 720x1280.
Error: none.

## nota2 A

Arguments:

```json
{
  "prompt": "Outside a builders' merchant on a clear day: the van is parked at the left, and a small paper receipt stands still on the pavement by the shop, looking around with gentle curiosity, then up. Flat 2D vector animation, exactly the art style of the pinned frames: solid flat colours, no outlines, no texture, no 3D, no depth of field, no film grain. The characters are <IMAGE_1> the blue work van and <IMAGE_2> the small paper receipt; there is also a low shop building with an orange stripe, which has no face. Keep shapes, colours and proportions identical to the references and the pinned frames. They have round white eyes with black pupils, eyelids and small simple mouths; eyes never turn into slits or angry shapes, expressions stay soft and friendly, and a blink goes straight from open to closed and back. Characters never touch, overlap or merge; each keeps exactly two eyes and one mouth. No arms, no legs, no hands, no new characters, no people, no text, no letters, no numbers, no logos, no signs. Static camera: no pan, no zoom, no cut. The ground stays flat and still. Apart from what this prompt describes, nothing appears or disappears: no new objects, no carts, no trolleys, no extra doors, no other vehicles, no scaffolding, no props; the buildings keep exactly the shapes of the pinned frames. Characters stay standing on the ground: no jumping, no floating. Audio: clear, well-recorded, clearly audible sound design, all sources off screen, with no music and no speech: car park ambience, a soft shop door chime, paper rustle",
  "aspect_ratio": "9:16",
  "duration": 7,
  "resolution_name": "720p",
  "images": [
    "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/refs/model-van.png",
    "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/refs/model-note.png"
  ],
  "first_frame": "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/v2/nota2/nota-t0.0.png",
  "last_frame": "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/v2/nota2/nota-t7.0.png",
  "keyframes": [
    {
      "image": "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/v2/nota2/nota-t3.5.png",
      "timestamp_s": 3.5
    }
  ]
}
```

Returned path: `/home/pk/.grok/sessions/%2Fhome%2Fpk%2Fgit%2Fpostiz-app/01a0d7d5-58fb-77b1-9700-1e063d455661/videos/15.mp4`
Saved as: `/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/v2/nota2/shot-A.mp4`
Format duration: 7.041667 s.
Video duration: 7.041667 s at 24/1 fps.
Resolution: 720x1280.
Audio stream: yes, duration 7.000000 s.
Attached picture stream: yes, 720x1280.
Error: none.

## nota2 C

Arguments:

```json
{
  "prompt": "The receipt beams with a big happy smile and sways gently in place, feet on the ground, then stands proud; the van looks on proudly. Flat 2D vector animation, exactly the art style of the pinned frames: solid flat colours, no outlines, no texture, no 3D, no depth of field, no film grain. The characters are <IMAGE_1> the blue work van and <IMAGE_2> the small paper receipt; there is also a low shop building with an orange stripe, which has no face. Keep shapes, colours and proportions identical to the references and the pinned frames. They have round white eyes with black pupils, eyelids and small simple mouths; eyes never turn into slits or angry shapes, expressions stay soft and friendly, and a blink goes straight from open to closed and back. Characters never touch, overlap or merge; each keeps exactly two eyes and one mouth. No arms, no legs, no hands, no new characters, no people, no text, no letters, no numbers, no logos, no signs. Static camera: no pan, no zoom, no cut. The ground stays flat and still. Apart from what this prompt describes, nothing appears or disappears: no new objects, no carts, no trolleys, no extra doors, no other vehicles, no scaffolding, no props; the buildings keep exactly the shapes of the pinned frames. Characters stay standing on the ground: no jumping, no floating. Audio: clear, well-recorded, clearly audible sound design, all sources off screen, with no music and no speech: a light happy paper flutter, a soft positive click, car park ambience",
  "aspect_ratio": "9:16",
  "duration": 6,
  "resolution_name": "720p",
  "images": [
    "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/refs/model-van.png",
    "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/refs/model-note.png"
  ],
  "first_frame": "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/v2/nota2/nota-t14.0.png",
  "last_frame": "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/v2/nota2/nota-t20.0.png",
  "keyframes": [
    {
      "image": "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/v2/nota2/nota-t17.0.png",
      "timestamp_s": 3
    }
  ]
}
```

Returned path: `/home/pk/.grok/sessions/%2Fhome%2Fpk%2Fgit%2Fpostiz-app/01a0d7d5-58fb-77b1-9700-1e063d455661/videos/17.mp4`
Saved as: `/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/v2/nota2/shot-C.mp4`
Format duration: 6.041667 s.
Video duration: 6.041667 s at 24/1 fps.
Resolution: 720x1280.
Audio stream: yes, duration 6.000000 s.
Attached picture stream: yes, 720x1280.
Error: none.

## drog2 A

Arguments:

```json
{
  "prompt": "End of the job at a building site: the toolbox, the hard hat and the receipt stand content and relieved, then all three look up at the sky with curiosity. The toolbox's lid stays open and its face stays visible. Flat 2D vector animation, exactly the art style of the pinned frames: solid flat colours, no outlines, no texture, no 3D, no depth of field, no film grain. The characters are <IMAGE_1> the graphite toolbox with an orange handle, <IMAGE_2> the orange hard hat and <IMAGE_3> the small paper receipt; there is also a small house with a thin grey ladder, which has no face. The toolbox's face is always visible under its lid; the lid never closes over the face. Keep shapes, colours and proportions identical to the references and the pinned frames. They have round white eyes with black pupils, eyelids and small simple mouths; eyes never turn into slits or angry shapes, expressions stay soft and friendly, and a blink goes straight from open to closed and back. Characters never touch, overlap or merge; each keeps exactly two eyes and one mouth. No arms, no legs, no hands, no new characters, no people, no text, no letters, no numbers, no logos, no signs. Static camera: no pan, no zoom, no cut. The ground stays flat and still. Apart from what this prompt describes, nothing appears or disappears: no new objects, no carts, no trolleys, no extra doors, no other vehicles, no scaffolding, no props; the buildings keep exactly the shapes of the pinned frames. Characters stay standing on the ground: no jumping, no floating. Audio: clear, well-recorded, clearly audible sound design, all sources off screen, with no music and no speech: a metal latch click, birdsong, light wind",
  "aspect_ratio": "9:16",
  "duration": 7,
  "resolution_name": "720p",
  "images": [
    "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/refs/model-box.png",
    "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/refs/model-hat.png",
    "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/refs/model-note.png"
  ],
  "first_frame": "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/v2/drog2/drog-t0.0.png",
  "last_frame": "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/v2/drog2/drog-t7.0.png",
  "keyframes": [
    {
      "image": "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/v2/drog2/drog-t3.5.png",
      "timestamp_s": 3.5
    }
  ]
}
```

Returned path: `/home/pk/.grok/sessions/%2Fhome%2Fpk%2Fgit%2Fpostiz-app/01a0d7d5-58fb-77b1-9700-1e063d455661/videos/18.mp4`
Saved as: `/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/v2/drog2/shot-A.mp4`
Format duration: 7.041667 s.
Video duration: 7.041667 s at 24/1 fps.
Resolution: 720x1280.
Audio stream: yes, duration 7.000000 s.
Attached picture stream: yes, 720x1280.
Error: none.

## drog2 B

Arguments:

```json
{
  "prompt": "The hard hat, the receipt and the toolbox smile happily while looking up, bobbing lightly in place. Flat 2D vector animation, exactly the art style of the pinned frames: solid flat colours, no outlines, no texture, no 3D, no depth of field, no film grain. The characters are <IMAGE_1> the graphite toolbox with an orange handle, <IMAGE_2> the orange hard hat and <IMAGE_3> the small paper receipt; there is also a small house with a thin grey ladder, which has no face. The toolbox's face is always visible under its lid; the lid never closes over the face. Keep shapes, colours and proportions identical to the references and the pinned frames. They have round white eyes with black pupils, eyelids and small simple mouths; eyes never turn into slits or angry shapes, expressions stay soft and friendly, and a blink goes straight from open to closed and back. Characters never touch, overlap or merge; each keeps exactly two eyes and one mouth. No arms, no legs, no hands, no new characters, no people, no text, no letters, no numbers, no logos, no signs. Static camera: no pan, no zoom, no cut. The ground stays flat and still. Apart from what this prompt describes, nothing appears or disappears: no new objects, no carts, no trolleys, no extra doors, no other vehicles, no scaffolding, no props; the buildings keep exactly the shapes of the pinned frames. Characters stay standing on the ground: no jumping, no floating. Audio: clear, well-recorded, clearly audible sound design, all sources off screen, with no music and no speech: soft paper shuffling, a pen scratch, birdsong",
  "aspect_ratio": "9:16",
  "duration": 7,
  "resolution_name": "720p",
  "images": [
    "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/refs/model-box.png",
    "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/refs/model-hat.png",
    "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/refs/model-note.png"
  ],
  "first_frame": "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/v2/drog2/drog-t7.0.png",
  "last_frame": "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/v2/drog2/drog-t14.0.png",
  "keyframes": [
    {
      "image": "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/v2/drog2/drog-t10.5.png",
      "timestamp_s": 3.5
    }
  ]
}
```

Returned path: `/home/pk/.grok/sessions/%2Fhome%2Fpk%2Fgit%2Fpostiz-app/01a0d7d5-58fb-77b1-9700-1e063d455661/videos/19.mp4`
Saved as: `/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/v2/drog2/shot-B.mp4`
Format duration: 7.041667 s.
Video duration: 7.041667 s at 24/1 fps.
Resolution: 720x1280.
Audio stream: yes, duration 7.000000 s.
Attached picture stream: yes, 720x1280.
Error: none.

## drog2 C

Arguments:

```json
{
  "prompt": "All three look ahead proudly and happily; the receipt closes its eyes in a joyful smile and sways in place, feet on the ground. Flat 2D vector animation, exactly the art style of the pinned frames: solid flat colours, no outlines, no texture, no 3D, no depth of field, no film grain. The characters are <IMAGE_1> the graphite toolbox with an orange handle, <IMAGE_2> the orange hard hat and <IMAGE_3> the small paper receipt; there is also a small house with a thin grey ladder, which has no face. The toolbox's face is always visible under its lid; the lid never closes over the face. Keep shapes, colours and proportions identical to the references and the pinned frames. They have round white eyes with black pupils, eyelids and small simple mouths; eyes never turn into slits or angry shapes, expressions stay soft and friendly, and a blink goes straight from open to closed and back. Characters never touch, overlap or merge; each keeps exactly two eyes and one mouth. No arms, no legs, no hands, no new characters, no people, no text, no letters, no numbers, no logos, no signs. Static camera: no pan, no zoom, no cut. The ground stays flat and still. Apart from what this prompt describes, nothing appears or disappears: no new objects, no carts, no trolleys, no extra doors, no other vehicles, no scaffolding, no props; the buildings keep exactly the shapes of the pinned frames. Characters stay standing on the ground: no jumping, no floating. Audio: clear, well-recorded, clearly audible sound design, all sources off screen, with no music and no speech: a soft satisfied wooden tap, birdsong, calm ambience",
  "aspect_ratio": "9:16",
  "duration": 6,
  "resolution_name": "720p",
  "images": [
    "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/refs/model-box.png",
    "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/refs/model-hat.png",
    "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/refs/model-note.png"
  ],
  "first_frame": "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/v2/drog2/drog-t14.0.png",
  "last_frame": "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/v2/drog2/drog-t20.0.png",
  "keyframes": [
    {
      "image": "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/v2/drog2/drog-t17.0.png",
      "timestamp_s": 3
    }
  ]
}
```

Returned path: `/home/pk/.grok/sessions/%2Fhome%2Fpk%2Fgit%2Fpostiz-app/01a0d7d5-58fb-77b1-9700-1e063d455661/videos/20.mp4`
Saved as: `/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/v2/drog2/shot-C.mp4`
Format duration: 6.041667 s.
Video duration: 6.041667 s at 24/1 fps.
Resolution: 720x1280.
Audio stream: yes, duration 6.000000 s.
Attached picture stream: yes, 720x1280.
Error: none.

## fri22 A

Arguments:

```json
{
  "prompt": "Sunset at the building site: the warm orange sky slowly turns to dusk blue as the sun sinks straight down behind the ground; the van and the hard hat stand calm and content, watching the sunset. Flat 2D vector animation, exactly the art style of the pinned frames: solid flat colours, no outlines, no texture, no 3D, no depth of field, no film grain. The characters are <IMAGE_1> the blue work van and <IMAGE_2> the orange hard hat; there is also a small house with a thin grey ladder, and later a small home, which have no faces. Keep shapes, colours and proportions identical to the references and the pinned frames. They have round white eyes with black pupils, eyelids and small simple mouths; eyes never turn into slits or angry shapes, expressions stay soft and friendly, and a blink goes straight from open to closed and back. Characters never touch, overlap or merge; each keeps exactly two eyes and one mouth. No arms, no legs, no hands, no new characters, no people, no text, no letters, no numbers, no logos, no signs. Static camera: no pan, no zoom, no cut. The ground stays flat and still. Apart from what this prompt describes, nothing appears or disappears: no new objects, no carts, no trolleys, no extra doors, no other vehicles, no scaffolding, no props; the buildings keep exactly the shapes of the pinned frames. Characters stay standing on the ground: no jumping, no floating. Audio: clear, well-recorded, clearly audible sound design, all sources off screen, with no music and no speech: evening wind, distant traffic, a few evening birds, a soft click of a phone tap",
  "aspect_ratio": "9:16",
  "duration": 7,
  "resolution_name": "720p",
  "images": [
    "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/refs/model-van.png",
    "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/refs/model-hat.png"
  ],
  "first_frame": "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/v2/fri22/fri2-t0.0.png",
  "last_frame": "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/v2/fri22/fri2-t7.0.png",
  "keyframes": [
    {
      "image": "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/v2/fri22/fri2-t3.5.png",
      "timestamp_s": 3.5
    }
  ]
}
```

Returned path: `/home/pk/.grok/sessions/%2Fhome%2Fpk%2Fgit%2Fpostiz-app/01a0d7d5-58fb-77b1-9700-1e063d455661/videos/21.mp4`
Saved as: `/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/v2/fri22/shot-A.mp4`
Format duration: 7.041667 s.
Video duration: 7.041667 s at 24/1 fps.
Resolution: 720x1280.
Audio stream: yes, duration 7.000000 s.
Attached picture stream: yes, 720x1280.
Error: none.

## fri22 B

Arguments:

```json
{
  "prompt": "The scene softly dissolves from the building site to a small home at night with one warm lit window; the sky becomes deep night blue and a bright crescent moon rises and stays clearly visible in the upper right; the van and the hard hat look content, then close their eyes and fall asleep. Once an eye has closed it never opens again. Flat 2D vector animation, exactly the art style of the pinned frames: solid flat colours, no outlines, no texture, no 3D, no depth of field, no film grain. The characters are <IMAGE_1> the blue work van and <IMAGE_2> the orange hard hat; there is also a small house with a thin grey ladder, and later a small home, which have no faces. Keep shapes, colours and proportions identical to the references and the pinned frames. They have round white eyes with black pupils, eyelids and small simple mouths; eyes never turn into slits or angry shapes, expressions stay soft and friendly, and a blink goes straight from open to closed and back. Characters never touch, overlap or merge; each keeps exactly two eyes and one mouth. No arms, no legs, no hands, no new characters, no people, no text, no letters, no numbers, no logos, no signs. Static camera: no pan, no zoom, no cut. The ground stays flat and still. Apart from what this prompt describes, nothing appears or disappears: no new objects, no carts, no trolleys, no extra doors, no other vehicles, no scaffolding, no props; the buildings keep exactly the shapes of the pinned frames. Characters stay standing on the ground: no jumping, no floating. Audio: clear, well-recorded, clearly audible sound design, all sources off screen, with no music and no speech: quiet night ambience, a car engine switching off, a soft door closing in the distance, crickets",
  "aspect_ratio": "9:16",
  "duration": 7,
  "resolution_name": "720p",
  "images": [
    "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/refs/model-van.png",
    "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/refs/model-hat.png"
  ],
  "first_frame": "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/v2/fri22/fri2-t7.0.png",
  "last_frame": "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/v2/fri22/fri2-t14.0.png",
  "keyframes": [
    {
      "image": "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/v2/fri22/fri2-t10.5.png",
      "timestamp_s": 3.5
    }
  ]
}
```

Returned path: `/home/pk/.grok/sessions/%2Fhome%2Fpk%2Fgit%2Fpostiz-app/01a0d7d5-58fb-77b1-9700-1e063d455661/videos/22.mp4`
Saved as: `/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/v2/fri22/shot-B.mp4`
Format duration: 7.041667 s.
Video duration: 7.041667 s at 24/1 fps.
Resolution: 720x1280.
Audio stream: yes, duration 7.000000 s.
Attached picture stream: yes, 720x1280.
Error: none.

## fri22 C

Arguments:

```json
{
  "prompt": "A peaceful night: the van and the hard hat sleep with calm smiles in front of the home, breathing slowly. Their eyes stay closed for the whole shot and never open. The crescent moon glows steadily and stays fully visible. Flat 2D vector animation, exactly the art style of the pinned frames: solid flat colours, no outlines, no texture, no 3D, no depth of field, no film grain. The characters are <IMAGE_1> the blue work van and <IMAGE_2> the orange hard hat; there is also a small house with a thin grey ladder, and later a small home, which have no faces. Keep shapes, colours and proportions identical to the references and the pinned frames. They have round white eyes with black pupils, eyelids and small simple mouths; eyes never turn into slits or angry shapes, expressions stay soft and friendly, and a blink goes straight from open to closed and back. Characters never touch, overlap or merge; each keeps exactly two eyes and one mouth. No arms, no legs, no hands, no new characters, no people, no text, no letters, no numbers, no logos, no signs. Static camera: no pan, no zoom, no cut. The ground stays flat and still. Apart from what this prompt describes, nothing appears or disappears: no new objects, no carts, no trolleys, no extra doors, no other vehicles, no scaffolding, no props; the buildings keep exactly the shapes of the pinned frames. Characters stay standing on the ground: no jumping, no floating. Audio: clear, well-recorded, clearly audible sound design, all sources off screen, with no music and no speech: crickets, soft night wind, very calm",
  "aspect_ratio": "9:16",
  "duration": 6,
  "resolution_name": "720p",
  "images": [
    "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/refs/model-van.png",
    "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/refs/model-hat.png"
  ],
  "first_frame": "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/v2/fri22/fri2-t14.0.png",
  "last_frame": "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/v2/fri22/fri2-t20.0.png",
  "keyframes": [
    {
      "image": "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/v2/fri22/fri2-t17.0.png",
      "timestamp_s": 3
    }
  ]
}
```

Returned path: `/home/pk/.grok/sessions/%2Fhome%2Fpk%2Fgit%2Fpostiz-app/01a0d7d5-58fb-77b1-9700-1e063d455661/videos/23.mp4`
Saved as: `/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/v2/fri22/shot-C.mp4`
Format duration: 6.041667 s.
Video duration: 6.041667 s at 24/1 fps.
Resolution: 720x1280.
Audio stream: yes, duration 6.000000 s.
Attached picture stream: yes, 720x1280.
Error: none.

# Music beds

Tool: image_to_video.
Both calls ran in parallel.
image_to_video accepts duration 6 or 10 only, and it has no aspect_ratio argument.
The still is 720x1280.
Both calls were rejected before a file was returned.

## bed-1

Arguments:

```json
{
  "image": "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/refs/plain-dark.png",
  "prompt": "A still, plain dark screen; nothing moves. Soundtrack: an instrumental music bed only, no voices, no singing, no sound effects: warm, light, modern acoustic track at a steady 96 bpm in a major key, muted nylon-guitar plucks, soft marimba, gentle brushed percussion and a round bass; calm, positive, understated and confident, like a friendly product film for tradespeople; constant level from start to end with no intro build, no drop and no ending.",
  "duration": 15,
  "resolution_name": "720p"
}
```

Returned path: none.
Duration: none.
Error: `duration` must be either 6 or 10 seconds. Got 15.

## bed-2

Arguments:

```json
{
  "image": "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/refs/plain-dark.png",
  "prompt": "A still, plain dark screen; nothing moves. Soundtrack: an instrumental music bed only, no voices, no singing, no sound effects: warm, light, modern acoustic track at a steady 96 bpm in a major key, clean electric-guitar arpeggios, soft felt piano, light shaker and kick, a round bass; relaxed, positive and understated, like a friendly product film for tradespeople; constant level from start to end with no intro build, no drop and no ending.",
  "duration": 15,
  "resolution_name": "720p"
}
```

Returned path: none.
Duration: none.
Error: `duration` must be either 6 or 10 seconds. Got 15.

# v2c shots

Two reference_to_video calls, in parallel.
Prompts are the spec text, sent verbatim.
No HTTP 429.
YAVG is the mean of lavfi.signalstats.YAVG across frames.
Both means are above 40, so neither shot was retried.

## fri23 A

Arguments:

```json
{
  "prompt": "Sunset at the building site: the warm orange sky slowly turns to dusk blue as the sun sinks straight down behind the ground; the van and the hard hat stand calm and content, watching the sunset. Flat 2D vector animation, exactly the art style of the pinned frames: solid flat colours, no outlines, no texture, no 3D, no depth of field, no film grain. The characters are <IMAGE_1> the blue work van and <IMAGE_2> the orange hard hat; there is also a small house with a thin grey ladder, and later a small home, which have no faces. Keep shapes, colours and proportions identical to the references and the pinned frames. They have round white eyes with black pupils, eyelids and small simple mouths; eyes never turn into slits or angry shapes, expressions stay soft and friendly, and a blink goes straight from open to closed and back. Characters never touch, overlap or merge; each keeps exactly two eyes and one mouth. No arms, no legs, no hands, no new characters, no people, no text, no letters, no numbers, no logos, no signs. Static camera: no pan, no zoom, no cut. The ground stays flat and still. Apart from what this prompt describes, nothing appears or disappears: no new objects, no carts, no trolleys, no extra doors, no other vehicles, no scaffolding, no props; the buildings keep exactly the shapes of the pinned frames. Characters stay standing on the ground: no jumping, no floating. Audio: clear, well-recorded, clearly audible sound design, all sources off screen, with no music and no speech: evening wind, distant traffic, a few evening birds, a soft click of a phone tap",
  "aspect_ratio": "9:16",
  "duration": 7,
  "resolution_name": "720p",
  "images": [
    "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/refs/model-van.png",
    "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/refs/model-hat.png"
  ],
  "first_frame": "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/v2/fri22/fri2-t0.0.png",
  "last_frame": "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/v2/fri22/fri2-t7.0.png",
  "keyframes": [
    {
      "image": "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/v2/fri22/fri2-t3.5.png",
      "timestamp_s": 3.5
    }
  ]
}
```

Returned path: `/home/pk/.grok/sessions/%2Fhome%2Fpk%2Fgit%2Fpostiz-app/01a0d7d5-58fb-77b1-9700-1e063d455661/videos/25.mp4`
Saved as: `/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/v2/fri22/shot-A2.mp4`
Format duration: 7.041667 s.
Video duration: 7.041667 s at 24/1 fps.
Resolution: 720x1280.
Audio stream: yes, duration 7.000000 s.
YAVG mean: 121.780 over 169 frames (min 83.594, max 160.578).
YAVG check: pass, mean above 40.
Error: none.

## fri23 C

Arguments:

```json
{
  "prompt": "A peaceful, almost still night: the van and the hard hat are fast asleep in front of the home, eyes closed as curved lines, calm smiles, breathing slowly; a small z drifts up above each of them. Nobody wakes up: every frame of this shot shows both characters with closed eyes, exactly as in all three pinned frames. The crescent moon glows steadily and stays fully visible. Flat 2D vector animation, exactly the art style of the pinned frames: solid flat colours, no outlines, no texture, no 3D, no depth of field, no film grain. The characters are <IMAGE_1> the blue work van and <IMAGE_2> the orange hard hat; there is also a small house with a thin grey ladder, and later a small home, which have no faces. Keep shapes, colours and proportions identical to the references and the pinned frames. They have round white eyes with black pupils, eyelids and small simple mouths; eyes never turn into slits or angry shapes, expressions stay soft and friendly, and a blink goes straight from open to closed and back. Characters never touch, overlap or merge; each keeps exactly two eyes and one mouth. No arms, no legs, no hands, no new characters, no people, no text, no letters, no numbers, no logos, no signs. Static camera: no pan, no zoom, no cut. The ground stays flat and still. Apart from what this prompt describes, nothing appears or disappears: no new objects, no carts, no trolleys, no extra doors, no other vehicles, no scaffolding, no props; the buildings keep exactly the shapes of the pinned frames. Characters stay standing on the ground: no jumping, no floating. Audio: clear, well-recorded, clearly audible sound design, all sources off screen, with no music and no speech: crickets, soft night wind, very calm",
  "aspect_ratio": "9:16",
  "duration": 6,
  "resolution_name": "720p",
  "images": [
    "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/refs/model-van.png",
    "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/refs/model-hat.png"
  ],
  "first_frame": "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/v2/fri22/fri2-t14.0.png",
  "last_frame": "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/v2/fri22/fri2-t20.0.png",
  "keyframes": [
    {
      "image": "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/v2/fri22/fri2-t17.0.png",
      "timestamp_s": 3
    }
  ]
}
```

Returned path: `/home/pk/.grok/sessions/%2Fhome%2Fpk%2Fgit%2Fpostiz-app/01a0d7d5-58fb-77b1-9700-1e063d455661/videos/24.mp4`
Saved as: `/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/v2/fri22/shot-C2.mp4`
Format duration: 6.041667 s.
Video duration: 6.041667 s at 24/1 fps.
Resolution: 720x1280.
Audio stream: yes, duration 6.000000 s.
YAVG mean: 47.267 over 145 frames (min 46.326, max 47.797).
YAVG check: pass, mean above 40.
Error: none.

# Music beds

Two reference_to_video calls, in parallel, after the shots.
Prompts are the spec text, sent verbatim.
No HTTP 429.

## bed-1

Arguments:

```json
{
  "prompt": "A still, plain dark screen; nothing moves. Soundtrack: an instrumental music bed only, no voices, no singing, no sound effects: warm, light, modern acoustic track at a steady 96 bpm in a major key, muted nylon-guitar plucks, soft marimba, gentle brushed percussion and a round bass; calm, positive, understated and confident, like a friendly product film for tradespeople; constant level from start to end with no intro build, no drop and no ending.",
  "aspect_ratio": "9:16",
  "duration": 15,
  "resolution_name": "720p",
  "first_frame": "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/refs/plain-dark.png",
  "last_frame": "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/refs/plain-dark.png"
}
```

Returned path: `/home/pk/.grok/sessions/%2Fhome%2Fpk%2Fgit%2Fpostiz-app/01a0d7d5-58fb-77b1-9700-1e063d455661/videos/26.mp4`
Saved as: `/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/v2/music/bed-1.mp4`
Format duration: 15.041667 s.
Video duration: 15.041667 s.
Audio stream: yes, duration 15.000000 s.
Resolution: 720x1280.
Error: none.

## bed-2

Arguments:

```json
{
  "prompt": "A still, plain dark screen; nothing moves. Soundtrack: an instrumental music bed only, no voices, no singing, no sound effects: warm, light, modern acoustic track at a steady 96 bpm in a major key, clean electric-guitar arpeggios, soft felt piano, light shaker and kick, a round bass; relaxed, positive and understated, like a friendly product film for tradespeople; constant level from start to end with no intro build, no drop and no ending.",
  "aspect_ratio": "9:16",
  "duration": 15,
  "resolution_name": "720p",
  "first_frame": "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/refs/plain-dark.png",
  "last_frame": "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/refs/plain-dark.png"
}
```

Returned path: `/home/pk/.grok/sessions/%2Fhome%2Fpk%2Fgit%2Fpostiz-app/01a0d7d5-58fb-77b1-9700-1e063d455661/videos/27.mp4`
Saved as: `/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/v2/music/bed-2.mp4`
Format duration: 15.041667 s.
Video duration: 15.041667 s.
Audio stream: yes, duration 15.000000 s.
Resolution: 720x1280.
Error: none.

# v2d shots

Two reference_to_video calls, in parallel.
Prompts are the spec text, sent verbatim.
No HTTP 429.
YAVG is the mean of lavfi.signalstats.YAVG across frames.
Both means are above 40, so neither shot was retried.

## fri24 A

Arguments:

```json
{
  "prompt": "Sunset at the building site: the warm orange sky slowly turns to dusk blue as the sun sinks straight down behind the ground; the van and the hard hat stand calm and content, watching the sunset. There is exactly one house for the whole shot, the same house as in the pinned frames; no second house appears behind or beside it. Flat 2D vector animation, exactly the art style of the pinned frames: solid flat colours, no outlines, no texture, no 3D, no depth of field, no film grain. The characters are <IMAGE_1> the blue work van and <IMAGE_2> the orange hard hat; there is also a small house with a thin grey ladder, and later a small home, which have no faces. Keep shapes, colours and proportions identical to the references and the pinned frames. They have round white eyes with black pupils, eyelids and small simple mouths; eyes never turn into slits or angry shapes, expressions stay soft and friendly, and a blink goes straight from open to closed and back. Characters never touch, overlap or merge; each keeps exactly two eyes and one mouth. No arms, no legs, no hands, no new characters, no people, no text, no letters, no numbers, no logos, no signs. Static camera: no pan, no zoom, no cut. The ground stays flat and still. Apart from what this prompt describes, nothing appears or disappears: no new objects, no carts, no trolleys, no extra doors, no other vehicles, no scaffolding, no props; the buildings keep exactly the shapes of the pinned frames. Characters stay standing on the ground: no jumping, no floating. Audio: clear, well-recorded, clearly audible sound design, all sources off screen, with no music and no speech: evening wind, distant traffic, a few evening birds, a soft click of a phone tap",
  "aspect_ratio": "9:16",
  "duration": 7,
  "resolution_name": "720p",
  "images": [
    "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/refs/model-van.png",
    "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/refs/model-hat.png"
  ],
  "first_frame": "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/v2/fri22/fri2-t0.0.png",
  "last_frame": "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/v2/fri22/fri2-t7.0.png",
  "keyframes": [
    {
      "image": "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/v2/fri22/fri2-t3.5.png",
      "timestamp_s": 3.5
    }
  ]
}
```

Returned path: `/home/pk/.grok/sessions/%2Fhome%2Fpk%2Fgit%2Fpostiz-app/01a0d7d5-58fb-77b1-9700-1e063d455661/videos/29.mp4`
Saved as: `/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/v2/fri22/shot-A3.mp4`
Format duration: 7.041667 s.
Video duration: 7.041667 s at 24/1 fps.
Resolution: 720x1280.
Audio stream: yes, duration 7.000000 s.
YAVG mean: 120.409 over 169 frames (min 86.588, max 160.341).
YAVG check: pass, mean above 40.
Error: none.

## fri24 C

Arguments:

```json
{
  "prompt": "A peaceful, almost still night: the van and the hard hat are fast asleep in front of the home, eyes closed as curved lines, calm smiles, breathing slowly; a small z drifts up above each of them. The van's headlights stay dark the whole time. There is exactly one small home, standing on the ground behind the hard hat; nothing else appears in the sky except the moon and the small z letters. Nobody wakes up: every frame of this shot shows both characters with closed eyes, exactly as in all three pinned frames. The crescent moon glows steadily and stays fully visible. Flat 2D vector animation, exactly the art style of the pinned frames: solid flat colours, no outlines, no texture, no 3D, no depth of field, no film grain. The characters are <IMAGE_1> the blue work van and <IMAGE_2> the orange hard hat; there is also a small house with a thin grey ladder, and later a small home, which have no faces. Keep shapes, colours and proportions identical to the references and the pinned frames. They have round white eyes with black pupils, eyelids and small simple mouths; eyes never turn into slits or angry shapes, expressions stay soft and friendly, and a blink goes straight from open to closed and back. Characters never touch, overlap or merge; each keeps exactly two eyes and one mouth. No arms, no legs, no hands, no new characters, no people, no text, no letters, no numbers, no logos, no signs. Static camera: no pan, no zoom, no cut. The ground stays flat and still. Apart from what this prompt describes, nothing appears or disappears: no new objects, no carts, no trolleys, no extra doors, no other vehicles, no scaffolding, no props; the buildings keep exactly the shapes of the pinned frames. Characters stay standing on the ground: no jumping, no floating. Audio: clear, well-recorded, clearly audible sound design, all sources off screen, with no music and no speech: crickets, soft night wind, very calm",
  "aspect_ratio": "9:16",
  "duration": 6,
  "resolution_name": "720p",
  "images": [
    "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/refs/model-van.png",
    "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/refs/model-hat.png"
  ],
  "first_frame": "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/v2/fri22/fri2-t14.0.png",
  "last_frame": "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/v2/fri22/fri2-t20.0.png",
  "keyframes": [
    {
      "image": "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/v2/fri22/fri2-t17.0.png",
      "timestamp_s": 3
    }
  ]
}
```

Returned path: `/home/pk/.grok/sessions/%2Fhome%2Fpk%2Fgit%2Fpostiz-app/01a0d7d5-58fb-77b1-9700-1e063d455661/videos/28.mp4`
Saved as: `/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/v2/fri22/shot-C3.mp4`
Format duration: 6.041667 s.
Video duration: 6.041667 s at 24/1 fps.
Resolution: 720x1280.
Audio stream: yes, duration 6.000000 s.
YAVG mean: 47.204 over 145 frames (min 46.569, max 47.727).
YAVG check: pass, mean above 40.
Error: none.
