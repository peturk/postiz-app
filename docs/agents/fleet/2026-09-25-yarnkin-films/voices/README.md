# Yarnkin voices

The voices live in WTD's Voice Bank, the one voice catalogue: `web/src/data/narration/voice-bank.json` in the wtd repo (procedure: `docs/reference/voice-bank.md`; MCP tool `storybook_voice_bank`; tRPC `storybooks.voiceBank`).
Each entry pins its Google voice id, prompt, model, expiry and a reference audition sample.

The Yarnkin films use these catalogue voices (designed 2026-09-25 for these films, adopted unchanged at WTD main 7fbf21e80):

| Catalogue id | Designed as |
|---|---|
| `narrator-bedtime` | yk-bedtime |
| `narrator-mother` | yk-mother |
| `narrator-grandmother` | yk-grandmother |
| `narrator-father` | yk-father |

Rules:
- Do not design voices here. A new voice is a catalogue entry in WTD, auditioned with `bun run voice-bank audition` in `wtd/web`.
- Synthesis uses the paid Gemini key for TTS only (`pk secrets get wtd GEMINI_TTS_API_KEY`); nothing billed runs without PK's go.
- A designed voice exists only in the Google project that designed it (`analyze`) and expires a year after design.
