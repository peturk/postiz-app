# Sporbók brand kit and Áhöfnin, 2026-09-24

The Sporbók brand kit, published as a private artifact: https://claude.ai/artifact/AmSWmAMMrMcDYEQAQTqFYD
Status: third proposal.
Decided by the operator 2026-09-24: Source Sans 3 as the one typeface, and the tagline "Þú vinnur verkið. Sporbók man söguna."
Waiting on approval of the Vinnugalli palette and the v3 cast.

## What is here

- `cast.js`: the Áhöfnin cast (Bíllinn, Kassinn, Hjálmurinn, Nótan) as art data plus a vanilla port of the Yarnkin mascot rig.
  Lineage and licences are in its header comment.
- `index.src.html`: the brand-kit page source; `build.py` inlines `cast.js` and the official icon into `index.html` and `preview.html`.
- `export.cjs`: renders the six social templates at full size and a transparent pose library (every cast member × every expression) from the same rig, into `out/`.
- `sheet.html` and `sheetshot.cjs`: the character × state test sheet with the silhouette column.
- `moods-big2.html` and `bigshot2.cjs`: large expression sheets (`?m=mood,mood,...`) used for the v3 review rounds.
- `research-expression.md`: the dated research brief on how eyes-first and object characters read happy, which v3 is calibrated against.
- `research-object-mascots.md`: the dated prior-art brief the cast rules come from.
- `PLAN-0083-data-driven-mascot-rig.md`: draft plan for folding this rig into `@outofcow/creatures` so Yarnkin and Sporbók stop carrying forks; it lands in outofcow once the cast is approved.

## Reproduce

```bash
python3 build.py
node export.cjs
```

Outputs (`index.html`, `preview.html`, `out/`) are build products and are not committed.
The scripts load Playwright from `/home/pk/git/available/node_modules`, like the 2026-08-10 cover scripts; the rig itself has no dependencies.

## Design review

An independent design critique ran on the first render and all eight of its fixes were applied.
The main ones were a toolbox that read as a briefcase, hard-hat ribs that sat like angry brows, receipt eyes that vanished on paper, and upward looks that read as eye-rolls.
The rig now refuses the eye-roll: an open eye never hides the top of its pupil under the upper lid.

## v3: happier and more expressive

The operator asked for the cast to be "more expressive and happier, like the animals", and said the on-duty state looked miserable.
The fix, calibrated against `research-expression.md` and two independent critique rounds:

- Structural mouths: the van's grille, the dark gap under the toolbox lid, the band above the hard hat's strip, the space under the receipt's header.
  Single asymmetric strokes; the open smile only at joy.
- Shut from below draws a smile (^^); shut from above draws sleep (u).
- Joy lifts the lower lid and keeps the upper lid up; misery starts when the upper lid comes down, so working states keep u at or below 0.15 with a small eye-smile.
- A warm resting face, a small second glint on warm expressions, one emanata at a time (sparkles, a sweat drop, a z), and body cues (hop, hum, nod, wiggle, jolt) scaled by each object's material.
- The exporter reads the mood list from the rig, so a renamed expression cannot silently break the pose library.

## Shorts: Áhöfnin on video

Five silent shorts (17:00, Undir sætinu, 07:40, Sunnudagskvöld, Tvö verk), 10 to 13 seconds each, in Reels 9:16 and feed 4:5.
Review page: https://claude.ai/artifact/2bH17gBGUDf945rPtrPpe9 (private until shared).

- `video.html`: the stage and one timeline per film (`VIDEOS.*`); `cast.js` runs in manual-clock mode with a seeded `Math.random`, so every render is identical.
- `render-video.cjs`: steps each film at 30 fps and pipes the frames straight into ffmpeg (no frame files), H.264 `yuv420p` with `+faststart`.
  Needs a static ffmpeg at `~/.local/bin/ffmpeg`; `node render-video.cjs [name...] [--feed]`.
- `contact.sh`: a one-row contact sheet of frames at given times, for review.
- `grok-video-pitches.md` and `grok-video-review.md`: Grok 4.7's independent pitches and its review of the first renders.
  Its review caught two bugs (a finished tween kept overwriting later ones; the end card faded in over the scene) and a caption that read as worker scoring.
- `shorts-page.html`: the review page source; the MP4s are build products and are not committed.

Direction: object theatre.
The company stays serious; the cast is the kit, it never speaks, and the joke is a day the viewer has already had.
