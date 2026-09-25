# Feature-film pipeline: mascot rig, Grok image-to-video, our UI, scored sound

How the Sporbók v2 films were made, written so any brand with a mascot rig can make the same kind of film again.
Built 2026-09-24/25 for Sporbók; reused for Yarnkin in `../2026-09-25-yarnkin-films/`, where the brand forbids generated mascots, so the rig renders every frame (`render-scene.cjs` drives the product's own React component under Playwright's fake clock) and `cue_edit.py` automates the music edit.
Everything named here lives in this folder unless a path says otherwise.

## What a film is

A 24-second vertical film (1080 × 1920 Reels, plus a 1080 × 1350 feed cut) that shows one real product feature through the brand's mascots.
20 s of story in three shots (7 + 7 + 6 s), then a dark end card with logo, tagline and URL.
The picture is generated; every letter, number, app screen and sound is ours.
Claude directs, Grok 4.7 animates, Gemini listens and speaks, Lyria scores.

## The layers

| Layer | Source | Tool |
|---|---|---|
| Timeline and keyframes | our rig in `video.html` (`VIDEOS.<film>`) | `keyframes.cjs` |
| Motion between keyframes | Grok `reference_to_video` | Herdr helper tab running Grok 4.7 |
| Fallback motion | the rig itself | `render-rig.cjs` |
| App UI, text, end card | `ui.html` (`FILMS.<film>`) | rendered to an alpha layer by `assemble2.cjs` |
| UI sounds | `sfx/*.wav` at event times the UI layer reports | `assemble2.cjs` |
| Music | Lyria on the paid Gemini key | `lyria.mjs`, `listen.mjs` |
| Voice | Gemini TTS | `vo.mjs`, `tts.mjs`, `listen.mjs` |
| Mix and master | two-pass, -14 LUFS, limiter -2.0 dB | `assemble2.cjs` |
| QA | contact sheets, jumps, loudness, blink runs | `qa.sh`, `blinks.py`, zoom crops with ffmpeg |

## Hard rule: Gemini access (PK, 2026-09-25)

The paid Gemini key (`GEMINI_TTS_API_KEY`) is for TTS commands only.
Every other Gemini task (copy, listening, judging, music) runs through a Herdr client: an `agy` helper tab on Gemini 3.8 Flash.
Never Gemini 3.1.
Steps 7 and 9 below describe direct API calls from the first run; redo them through a Herdr client.

## Step by step

### 1. Facts before story

Collect the product's true features and exact user-facing wording in the product's language from its current copy, and the list of claims that were removed as untrue.
Every chip, card and line of voiceover must be a real screen or a real sentence from the product.
Keep numbers consistent within a film: clock times, durations, totals and summaries must add up (a reviewer caught 199.400 kr. for 4,5 hours and a 7 h summary for a 9 h 38 min day).

### 2. Direct the timeline

Write `VIDEOS.<film>` in `video.html`: background, set pieces, cast with explicit moods at every beat, tweens for light and movement.
Beats change only between the keyframe grid 0, 3.5, 7, 10.5, 14, 17, 20 s and are settled on it.
Characters never overlap in a frame.
Moods that survived generation: `neutral`, `glad` (open-eyed smile), `happy`, `proud`, `curious`, `alert`, `asleep`.
Avoid on paper-like or lid-cropped characters: raised lower lids (`content`, `relieved`, `joy`), which turn into ghost eyes or a smug squint.
Never pin a half-closed eye.
Sky objects: a self-lit crescent moon with a glow (a moon painted in sky colour disappears), and a sun that sets behind the ground layer; both stay in the right column, away from text.

### 3. Keyframes

`node keyframes.cjs <film> <outdir> 0.0 3.5 7.0 10.5 14.0 17.0 20.0` renders text-free, blink-free frames (`?clean=1`, `noBlink`).
`node keyframes.cjs --sheets <outdir>` renders one model sheet per character for the generator's `images`.
Look at every keyframe before sending anything to Grok (`strip.py` makes a strip).

### 4. Generate with Grok

Start a helper tab: `herdr agent start <name> --kind grok --pane <p> -- -m grok-4.7`, wait for idle, then brief it with a spec file (`i2v/specs/shots-v3.md` is the model).
Per shot: `reference_to_video`, `first_frame`, one `keyframes` entry at the middle, `last_frame`, model sheets as `images`, `duration` 6 or 7, `aspect_ratio` 9:16, 720p.
Write every prompt complete in the spec and tell Grok to send it verbatim: a prompt Grok assembles itself can break (one run sent the style lock as the two characters "Fl").
The style lock (end of every prompt) says: flat 2D vector, exact references, round white eyes with black pupils that never turn into slits, characters never touch or merge, no text, no people, static camera, ground flat and still, nothing appears or disappears beyond what the prompt says, characters stay on the ground, and all sounds are off screen.
At most 2 calls at a time (xAI: 2 requests per second); retry a 429 after 20 s.
Check every returned file for black (mean luma above 40): one call returned an all-black video with no error.
`image_to_video` accepts only 6 or 10 s; `reference_to_video` accepts up to 15 s.

What Grok gets wrong, and the rule for each:

- Sound words become picture: "a trolley rolling past" drew a trolley. Describe sounds as off screen.
- Literal verbs: "the lid closes" shut the toolbox's face away; "a hop" made the receipt jump. Never ask for them.
- It anticipates the next shot: a sunset grew the evening home early, three takes in a row. Cut to the next set at a shot boundary instead of dissolving.
- Narrowing or grey eyes and half-lids in its in-betweens. Ask for wide open eyes and no blinks for characters that suffer it; if takes keep failing, use the rig for that stretch.
- Its own audio is near-silent (-40 to -60 LUFS). Do not use it.

### 5. Rig fallback

`node render-rig.cjs <film> <t0> <t1> out.mp4` renders a stretch straight from the rig at 30 fps.
Because generated shots are pinned to rig keyframes at both ends, a rig stretch cuts in without a visible join; a 0.4 s crossfade covers a mid-shot switch.
The rig blink is binary (shut for 0.1 s): a ramped blink at 30 fps landed on half-shut frames that read as a glare.

### 6. UI layer

`ui.html` draws the app over the picture: clock or kicker (y 330-480), one headline (y 505, left column only), cards and chips (y 720+, 90 px from the edge, where the picture is free).
All of it sits inside the 4:5 window (y 285-1635 of the master), so one layout serves both cuts.
Ink colour follows the measured brightness behind the headline.
Helpers: `head`, `kick`, `clock`, `chip`, `card` via `show`, `notif`, `tap`, `ring`, `counter`, `rows`; each UI event also registers a sound (`pop`, `tap`, `notif`, `chime`).
Pace: something new every 1.5 to 3 s; a line stays at least 1.5 s per 5 words.
Measure where the picture's sun, moon and characters are (ffmpeg crops, colour masks) before placing a card.

### 7. Music

Needs the paid key: `pk secrets get wtd GEMINI_API_KEY` (AI Studio project `analyze`); the `content` project key is free tier and gets Lyria 0.
Write one brief per film plus a shared series palette and a signature (`music/prompts.json`).
`node lyria.mjs lyria-3-clip-preview out.mp3 "<prompt>"`: 3 takes per film, about $0.04 each.
Lyria ignores requested length and ending (clips run about 30 s; Lyria 3.5 ran 46 and 128 s), so plan to edit.
Pick takes with `listen.mjs` in two blind passes with the order reversed: the first pass ranked whatever played first as best in 3 of 4 films.
Edit each chosen take so its own final cadence lands at about 20.25 s: find the bar grid (tempo from onset autocorrelation, downbeat phase), trim at most a second of intro, change tempo by at most 6%, or splice the body to the take's last bars on downbeats with a 30 ms crossfade; then ring out to the end (`music/edit.json` records every decision).
Confirm each edit with a listening pass that asks for the final resolution time, audible splices and artefacts.

### 8. Voice (parked; revisit)

PK did not like the narration in this round; revisit with the newest Gemini 3.8 Flash TTS release before voicing another film.
The mechanics work: `vo/script.json` holds the lines with start times; `node vo.mjs <film|all> <takes>` makes takes, transcribes each back, keeps the closest match, and fits it to its slot.
Transcript checks catch real problems ("Engin" said as "Hengur") and also mishear proper nouns; confirm a fix with two transcription models.
A brand line must be one chosen take shared by every film.
Brand names are hard for TTS: "Sporbók man söguna" was heard as "mannsögunnar" in 5 of 6 takes.
Films can run without voice: every beat is on screen.

### 9. Assemble, master, check

`node assemble2.cjs <film> clipA clipB clipC [--feed]`.
It composites the UI layer, places UI sounds (5 ms fade-in each), adds voice and music (music ducks under voice by sidechain), and masters in two passes to -14 LUFS under a -2.0 dB limiter (a -1.5 ceiling overshot after AAC by up to 0.7 dB).
QA every film: `qa.sh` (4 fps sheets, scene jumps, loudness), zoomed crops of every face at full frame rate around joins and blinks, `blinks.py` for eye drop-outs, both cuts.
Then an independent reviewer (a fresh agent with no context) reviews every frame and the numbers; the first one found real defects in all four films.

### 10. Publish for review

A private Artifact page with both cuts per film (`films-v2-page.html` is the model).
Download links do not work in the Artifact viewer; leave them out.

## Costs and limits (2026-09-25)

Grok image-to-video: session auth, 2 requests per second.
Lyria clip about $0.04, Lyria 3.5 song about $0.08; Gemini TTS and the listening passes cost cents.
The paid project has prepaid credits (Paid 1); the content project is free tier (TTS 10 requests per day, Lyria 0).
Gemini output is SynthID-watermarked; keep the generation logs (`music/edit.json`, `judge-*.json`, `i2v/reports/`) as evidence of origin.

## Files

`video.html`, `cast.js` (rig), `keyframes.cjs`, `render-rig.cjs`, `ui.html`, `assemble2.cjs`, `sfx/`, `lyria.mjs`, `listen.mjs`, `judge.mjs`, `tts.mjs`, `vo.mjs`, `vo/script.json`, `music/`, `qa.sh`, `strip.py`, `blinks.py`, `i2v/specs/`, `i2v/reports/`, `i2v/README.md` (the Sporbók run in detail).
