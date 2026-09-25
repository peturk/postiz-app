# Yarnkin films: the real rig, real books, scored

Four 23-second films (1080 × 1920 Reels and a 1080 × 1350 feed cut) that show what Yarnkin does, made with the pipeline in `../2026-09-24-sporbok-brand-kit/PIPELINE.md` and adapted to Yarnkin's brand rules.

| Film | Shows | Book |
|---|---|---|
| `kvold` Saga fyrir kvöldið | the three open books, "Opna bókina", the reader | Óskar telur ræturnar, pages 1-2 |
| `saman` Lesum saman | page turns, then "Halda áfram á síðu 4?" | pages 1-4 |
| `tunga` Á íslensku og ensku | "Skipta um tungumál", Icelandic to English and back | pages 4-6 |
| `nott` Góða nótt | the last page, "Endir · Lesa aftur · Fleiri sögur", lights down | page 12 |

## Why no generated picture

The Yarnkin social skill (`.claude/skills/social-brand-yarnkin`) forbids generating or redrawing the mascots, and the story art is never generated.
So there is no Grok step: every frame of the cast comes from the product's own `<Mascot>` component (`web/src/web/components/creatures` in the yarnkin repo), unchanged.
The book art is the real catalog: the three open books and their pages, fetched from the dev instance (`books.json` lists every file and its text).
Set dressing (wall, window, moon, lamp, shelf) is flat shapes in the brand palette, drawn in `scene.html`.

## Pipeline

1. `sh build-rig.sh` copies the creature sources from the yarnkin repo and bundles them with a two-function harness (`harness/entry.tsx`) into `rig/yk-rig.js`; only the theme hook and `cn` are stubbed.
2. Art: fetch covers and page previews from `http://yarnkin/api/trpc/stories.list` and `stories.getById` into `art/` (paths in `books.json`); `art/yarnkin-wordmark.png` is the official wordmark.
3. `scene.html` directs each film (`FILMS.<film>`): set, cast with held moods, light changes.
   Use held moods (`mood` with `live`), not behaviours: behaviours pick random moods and can land on `suspicious` or `cheeky`.
   Cast faces from a grid of real rig poses before directing: `love` with a level gaze is the warm, open state for all four; `neutral` is rest; `curious` and `excited` only briefly (`excited` holds an open "o" mouth); `happy` and `calm` squint; Bangsi's `neutral` with a downward look frowns.
   The harness clamps upward gaze to -0.25 (eye-roll) and sideways gaze to 0.45 (side-eye).
4. `node render-scene.cjs <film> clips/<film>.mp4` renders the picture at 30 fps: Playwright's fake clock drives the component's `requestAnimationFrame` loop and `Math.random` is seeded, so every render is identical; `--stills <film> <dir> t1 t2 ...` renders check frames.
5. `ui-yk.html` draws the app over the picture: headline (Source Serif 4, left column), one product screen (the reader in its night navy, cards in parchment, gold only for buttons), end card with the wordmark and "Lesum saman. Hlustum saman. Dreymum saman.".
   Every string on a screen is the product's own (`web/src/web/locales/is.ts`, `HeroSection.tsx`); headlines are ours and must be true.
   Read-aloud is not shown: none of the three open books has narration.
6. Music: `music/prompts.json` (a bedtime palette: felt piano, celesta, nylon guitar, pizzicato, clarinet, music box; a falling four-note lullaby signature), three Lyria takes per film with `lyria.mjs`, picked by two blind `listen.mjs` passes with the order reversed (`music/judge-*.json`).
   `python3 cue_edit.py <take.mp3> music/<film>.wav <cadence_s>` finds the bar grid and lands the take's own final cadence at 20.25 s with at most one bar of intro trimmed and at most 6% tempo change (`music/edit.json`); every edit was confirmed with a listening pass.
7. `node assemble-yk.cjs <film> clips/<film>.mp4 [--feed]` composites the UI layer, places UI sounds (`sfx/`, including a page turn), adds the music, and masters to -14 LUFS under a 4x-oversampled -2.0 dB limiter (the plain limiter let celesta transients reach -0.5 dBTP).
8. QA: `qa.sh` sheets, then an independent reviewer; voice is parked (see the pipeline playbook).
9. Night: a flat dim over parchment reads as grey; lights-down is deep navy with a warm pool of light where the cast sleeps, and the window repeated above it so the moon stays lit.
10. Music under sleep: a -7 dB dip from 12 to 16 s in `nott` so the score settles as the cast falls asleep.

The independent review of round 1 found: Bangsi weary while reading, side-eye and eye-roll poses, cropped covers, micro-text too small, a grey lights-down, and one translated-sounding line ("Enginn endalaus straumur."); all fixed in round 2.

Review page: https://claude.ai/artifact/KKzyiTGLX8v8xwSeqpnSPT (private until shared); `films-page.html` is its source.

## Round 3 (PK feedback: no popups, better copy, no immersion breaks)

- No dialogs or tap circles: the reader and the covers carry the story.
- The cast lives in the room: sofa (kvold), armchair and floor cushions (saman), daybed (tunga), in bed under a blanket with Ugla on the bedhead (nott). `mascot(name, x, w, props, base)` seats a mascot at a seat or mattress line; furniture has a back (z 2) and a front (z 8) around the cast (z 5).
- Copy: `copy/brief.md` holds the facts, rules and beats; `copy/written.json` has three candidate sets per film; `copy/critic.json` is a separate critic pass (native Icelandic editor and brand marketer) that scored every set and wrote the final lines, `copy/final.json` feeds `ui-yk.html` through `assemble-yk.cjs`.

Gemini rule (PK, 2026-09-25, hard): the paid Gemini key (`GEMINI_TTS_API_KEY`) is for TTS commands only.
All other Gemini work goes through a Herdr client: the critic ran in an `agy` helper tab on Gemini 3.8 Flash (High) from `copy/critic-task.md`.
Never Gemini 3.1.
The writer pass and the round 1-2 music and listening passes predate this rule and called the key directly; `lyria.mjs` and `listen.mjs` are therefore not kept here, and new music or listening work must run through a Herdr client.
