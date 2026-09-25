# Batch 4 report

Four shots were requested in one parallel wave.
Two calls returned videos.
Two calls failed with HTTP 429.
Each failed call was retried once, alone, and the retry succeeded.

ffprobe: `$HOME/.local/bin/ffprobe`.
Every saved file is `720x1280`, video frame rate `24/1`.

First-attempt error text, identical for sunnudagur A3 and sunnudagur B3.
The tool message had an em dash between "is" and "Requests".
This file stores that character as a hyphen.

```
Video generation failed with HTTP 429 Too Many Requests: {"code":"resource-exhausted","error":"Too many requests for team 85197e12-e721-4e1b-a85e-4a02a561cde9 and model grok-imagine-video-1.5. Your team's rate limit is - Requests per Second (actual/limit): 2/2. Your rate limit tier is determined based on your historical API spend. To learn how to increase your rate limit tier, please visit https://console.x.ai/team/default/rate-limits."}
```

## sunnudagur A3

Saved as: `/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/sunnudagur/shot-A3.mp4`

First attempt: the 429 error above.
Retry returned path: `/home/pk/.grok/sessions/%2Fhome%2Fpk%2Fgit%2Fpostiz-app/01a0d5ec-5d7d-7d90-bee5-319582c44abc/videos/23.mp4`

Duration: `6.041667` seconds (format and video stream).
Resolution: `720x1280`.
Audio stream duration: `6.000000` seconds.

```json
{
  "prompt": "Late Sunday evening at a wooden kitchen table under a warm, steady lamp light that does not flicker or pulse. Four tired paper receipts stand in a row beside a mug, each in its own place, blinking slowly and swaying very slightly, one of them fidgeting with a small sweat drop. Foley: a quiet wall clock ticking, a soft paper rustle. Flat 2D vector animation, exactly the art style of the pinned frames: solid flat colours, no gradients, no outlines, no texture, no 3D, no depth of field, no film grain. The characters are exactly four separate copies of <IMAGE_1>, small white paper receipts with torn zigzag bottom edges, each standing apart with space between them and each with exactly two eyes and one mouth; they never touch, overlap or merge. There is also a plain white mug with no face. Keep shapes, colours and proportions identical to the references and the pinned frames. They have round white eyes with black pupils, eyelids and small simple mouths. A blink is the eyelids closing over the round eye and opening again; eyes never vanish, never shrink, and never turn into narrow slits or angry shapes. Expressions stay soft and friendly. The white job cards are blank: never draw any letters, numbers or marks on them. No arms, no legs, no hands, no new characters, no people, no text anywhere, no logos. Static camera: no pan, no zoom, no cut. Gentle, weighty, understated motion. Audio: quiet foley only, no music, no voices, no speech.",
  "aspect_ratio": "9:16",
  "resolution_name": "720p",
  "duration": 6,
  "images": [
    "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/refs/model-note.png"
  ],
  "first_frame": "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/sunnudagur/sunnudagur-t0.0.png",
  "keyframes": [
    {
      "image": "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/sunnudagur/sunnudagur-t2.2.png",
      "timestamp_s": 3.0
    }
  ],
  "last_frame": "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/sunnudagur/sunnudagur-t4.6.png"
}
```

## sunnudagur B3

Saved as: `/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/sunnudagur/shot-B3.mp4`

First attempt: the 429 error above.
Retry returned path: `/home/pk/.grok/sessions/%2Fhome%2Fpk%2Fgit%2Fpostiz-app/01a0d5ec-5d7d-7d90-bee5-319582c44abc/videos/24.mp4`

Duration: `5.041667` seconds (format and video stream).
Resolution: `720x1280`.
Audio stream duration: `5.000000` seconds.

```json
{
  "prompt": "The same kitchen table, now calm and nearly empty under a warm, steady lamp: a single paper receipt stands beside the mug, relieved, then settles into a quiet, content smile, breathing slowly. Foley: the clock ticking, a soft exhale of relief. Flat 2D vector animation, exactly the art style of the pinned frames: solid flat colours, no gradients, no outlines, no texture, no 3D, no depth of field, no film grain. The character is <IMAGE_1>, a single small white paper receipt with a torn zigzag bottom edge; there is also a plain white mug with no face. Keep shapes, colours and proportions identical to the references and the pinned frames. They have round white eyes with black pupils, eyelids and small simple mouths. A blink is the eyelids closing over the round eye and opening again; eyes never vanish, never shrink, and never turn into narrow slits or angry shapes. Expressions stay soft and friendly. The white job cards are blank: never draw any letters, numbers or marks on them. No arms, no legs, no hands, no new characters, no people, no text anywhere, no logos. Static camera: no pan, no zoom, no cut. Gentle, weighty, understated motion. Audio: quiet foley only, no music, no voices, no speech.",
  "aspect_ratio": "9:16",
  "resolution_name": "720p",
  "duration": 5,
  "images": [
    "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/refs/model-note.png"
  ],
  "first_frame": "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/sunnudagur/sunnudagur-t5.2.png",
  "keyframes": [
    {
      "image": "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/sunnudagur/sunnudagur-t6.2.png",
      "timestamp_s": 2.0
    }
  ],
  "last_frame": "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/sunnudagur/sunnudagur-t7.5.png"
}
```

## fimm A5

Saved as: `/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/fimm/shot-A5.mp4`

Tool returned path: `/home/pk/.grok/sessions/%2Fhome%2Fpk%2Fgit%2Fpostiz-app/01a0d5ec-5d7d-7d90-bee5-319582c44abc/videos/21.mp4`

Duration: `6.041667` seconds (format and video stream).
Resolution: `720x1280`.
Audio stream duration: `6.000000` seconds.

Error text: none.

```json
{
  "prompt": "Late Friday afternoon on a quiet concrete work site. The van, the hard hat and the toolbox stand side by side, breathing softly and blinking once or twice, content at the end of a working day, their eyes open, round and friendly and looking mostly straight ahead. The toolbox peers out from under its lid, then slowly lowers its lid until it shuts with a small satisfied settle. Foley: a light breeze, one soft metal click as the lid shuts. Flat 2D vector animation, exactly the art style of the pinned frames: solid flat colours, no gradients, no outlines, no texture, no 3D, no depth of field, no film grain. The three characters are <IMAGE_1> the blue work van, <IMAGE_2> the orange hard hat and <IMAGE_3> the graphite toolbox with an orange handle. Keep shapes, colours and proportions identical to the references and the pinned frames. They have round white eyes with black pupils, eyelids and small simple mouths. A blink is the eyelids closing over the round eye and opening again; eyes never vanish, never shrink, and never turn into narrow slits or angry shapes. Expressions stay soft and friendly. The white job cards are blank: never draw any letters, numbers or marks on them. No arms, no legs, no hands, no new characters, no people, no text anywhere, no logos. Static camera: no pan, no zoom, no cut. Gentle, weighty, understated motion. Audio: quiet foley only, no music, no voices, no speech.",
  "aspect_ratio": "9:16",
  "resolution_name": "720p",
  "duration": 6,
  "images": [
    "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/refs/model-van.png",
    "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/refs/model-hat.png",
    "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/refs/model-box.png"
  ],
  "first_frame": "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/fimm/fimm-t0.0.png",
  "keyframes": [
    {
      "image": "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/fimm/fimm-t3.0.png",
      "timestamp_s": 3.0
    }
  ],
  "last_frame": "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/fimm/fimm-t4.2.png"
}
```

## morgunn A3

Saved as: `/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/morgunn/shot-A3.mp4`

Tool returned path: `/home/pk/.grok/sessions/%2Fhome%2Fpk%2Fgit%2Fpostiz-app/01a0d5ec-5d7d-7d90-bee5-319582c44abc/videos/22.mp4`

Duration: `6.041667` seconds (format and video stream).
Resolution: `720x1280`.
Audio stream duration: `6.000000` seconds.

Error text: none.

```json
{
  "prompt": "A dark, frosty early morning on a work site, a small moon in the sky. The van and the hard hat are asleep. The van's eyes open, round and friendly, and its round headlights switch on; the hard hat wakes the same gentle way beside it, and they give each other one small friendly nod, then look ahead with round, open eyes. The sky slowly lightens to a cold blue dawn and the moon fades away. Foley: a cold wind, one headlight relay click, then quiet morning air. Flat 2D vector animation, exactly the art style of the pinned frames: solid flat colours, no gradients, no outlines, no texture, no 3D, no depth of field, no film grain. The characters are <IMAGE_1> the blue work van and <IMAGE_2> the orange hard hat. Keep shapes, colours and proportions identical to the references and the pinned frames. They have round white eyes with black pupils, eyelids and small simple mouths. A blink is the eyelids closing over the round eye and opening again; eyes never vanish, never shrink, and never turn into narrow slits or angry shapes. Expressions stay soft and friendly. The white job cards are blank: never draw any letters, numbers or marks on them. No arms, no legs, no hands, no new characters, no people, no text anywhere, no logos. Static camera: no pan, no zoom, no cut. Gentle, weighty, understated motion. Audio: quiet foley only, no music, no voices, no speech.",
  "aspect_ratio": "9:16",
  "resolution_name": "720p",
  "duration": 6,
  "images": [
    "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/refs/model-van.png",
    "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/refs/model-hat.png"
  ],
  "first_frame": "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/morgunn/morgunn-t0.0.png",
  "keyframes": [
    {
      "image": "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/morgunn/morgunn-t1.0.png",
      "timestamp_s": 1.3
    },
    {
      "image": "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/morgunn/morgunn-t1.8.png",
      "timestamp_s": 2.3
    },
    {
      "image": "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/morgunn/morgunn-t2.6.png",
      "timestamp_s": 3.7
    }
  ],
  "last_frame": "/tmp/claude-1001/-home-pk-git-postiz-app/780cc2b3-f7d0-4b9b-aa4a-2ab13f6d1703/scratchpad/i2v/morgunn/morgunn-t4.5.png"
}
```
