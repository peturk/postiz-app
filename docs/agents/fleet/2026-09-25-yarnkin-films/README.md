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
2. Books: `node fetch-books.mjs` pulls each film's book from the live catalogue (https://yarnkin.com, public books): page texts in both languages into `books.json`, the Icelandic cover and page previews into `art/`; `ui-yk.html` reads the texts from `books.json`, so a film always quotes the catalogue word for word. `art/yarnkin-wordmark.png` is the official wordmark.
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

## Voice (test version, 2026-09-26)

`node vo-yk.mjs <catalogue-voice-id>` reads the voice id, model and direction from WTD's Voice Bank (`web/src/data/narration/voice-bank.json` on wtd origin/main) and speaks each film's headlines (`copy/final.json`) plus the tagline "Lesum saman. Hlustum saman. Dreymum saman." over the end card; `tts.mjs` is the TTS call.
TTS only: no transcription or judging on the paid key, so takes are checked by ear.
A line may run past its headline but ends 0.3 s before the next spoken line; the bedtime direction's pauses stretched the tagline to 7.4 s, so its pauses are held to 0.45 s (5.2 s) and the films run 25.8 s.
First test voice: `narrator-bedtime` (19 TTS requests).

## Casting rule (WTD decision E35, 2026-09-26)

Voices come from WTD's Voice Bank only, and a film casts only voices whose scenarios include "film". WTD measures each voice and writes its character and scenarios into voice-bank.json (chosen.character, chosen.scenarios; wtd 7380da6a4); vo-yk.mjs reads them as written.
`vo-yk.mjs` refuses any other voice. The films use narrator-grandmother (full) and narrator-bedtime (soft) with the calm direction; narrator-mother (breathy) and narrator-father (whisper) are not film voices, so "Á íslensku og ensku" moved from the Mother to the Grandmother voice.

## v7: one voice, the Grandmother (PK, 2026-09-28)

PK chose the Grandmother storyteller (`narrator-grandmother`) as the voice of the series after the calm-vs-whisper A/B on the critique page (https://claude.ai/artifact/3J8Ukq485yb7jxvSa2JX9g).
She now reads all four films and the tagline; `copy/casting.json` records why per film.
The tagline is the exact take PK approved (voice library Y139, 64.6% voiced after the trim, 2% breath), never re-generated.
Its long pauses are held to 0.4 s by `holdPauses` in `vo-yk.mjs`, and it is not sped up, so it runs 5.4 s.
The end card grows to fit it: the films run 26.0 s (`nott` 23.2 s).
New takes: `saman` (3 lines) and `nott` (2 lines), 5 TTS requests; every body take measures 48-69% voiced.
`vo-yk.mjs` reads the per-language Voice Bank (`voices[].languages.is.chosen`, wtd 9d8f4c6b2).
Review page: https://claude.ai/artifact/H13EzusFoR3MyAjg7S9Wn8 (`films-v7-page.html` is its source); all 8 masters measure -14.0 to -14.3 LUFS, true peak at most -1.8 dB.

## v8: a different book in every film (PK, 2026-09-28)

| Film | Book |
|---|---|
| `kvold` | shelf of Forvitna stúlkan, Edda gerir við flautuna, Dísa og flautan úr árgrjóti undir rótunum; Forvitna stúlkan opens |
| `saman` | Edda gerir við flautuna, pages 1-5 |
| `tunga` | Tindra horfir vel, pages 1, 2 and 4 (short lines in both languages) |
| `nott` | Óskar telur ræturnar, pages 11-12 |

- The shelf highlight is one highlight that moves (book 1, 2, 3, back to 1 for the tap); in v7 the first book stayed lit while the others lit up.
- The reader fits long page text (40 to 24 px) into a fixed box, so the new books' 120-175 character pages fit above the cast.
- „Þrjár bækur standa opnar.“ and the chip „3 bækur opnar“ were no longer true (21 public books); the headline is now „Bækurnar bíða á hillunni.“ (Gemini 3.8 Flash critic through a Herdr agy client) and the chip uses the product's own „Fleiri sögur“.
- The Óskar page now reads „Góða nótt, björtu stjörnur.“ in the catalogue; the headline quotes it (the critic confirmed the weak vocative form).
- Lesið saman: PK heard „Tað“ for „Það“ in v7. Machine checks cannot hear it (the Icelandic Whisper model writes „það“ even for a take recorded on purpose with a T), so PK chose by ear from new takes recorded with a pronunciation note ('Þ' as the th in "think"): take C for „Það liggur ekkert á.“ and take G for „Ljúft að eiga svona kvöld.“ (the v7 take was heard as „líft“).
- Catalogue defects found on the way (for WTD): six books show English covers in Icelandic; Loki og luktastígurinn has truncated Icelandic pages 2, 3 and 5; Súpan sem lagaði allt (5, 6, 11) and Týndi lykillinn (5, 7, 8) too; Edda page 5 lacks a sentence in English; cover titles differ from catalogue titles for Forvitna stúlkan („Sú forvitna“), Mosi og ljóskerstígurinn („Nóri…“) and Höfn Birtu breytist („…höfnin hennar Míku“).
