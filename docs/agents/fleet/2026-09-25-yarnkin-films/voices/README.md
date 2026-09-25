# Yarnkin voices

Four narrator voices designed 2026-09-25 with Gemini 3.8 Flash TTS voice design, plus two stock voices for comparison.
`voices.json` holds each voice's id, its design prompt, the model and when it expires; the `aud-*.mp3` files are the audition takes.

## Where a voice lives

A designed voice is created by Google from its text prompt (`POST /v1beta/voices`, `store: true`) and stored in the Google AI Studio project that designed it: here the paid `analyze` project.
The voice id works only with a key from that project; any other project answers 404.
It expires a year after design (2027-09-25), after which it must be designed again from the same prompt, which gives a similar but not identical voice.
Nothing is cloned: the prompt is the only input.
Synthesis uses the id: `generation_config.speech_config[{voice: <id>}]` on `POST /v1beta/interactions` with `gemini-3.8-flash-tts`.

These four are separate from WTD's Voice Bank (`web/src/data/narration/voice-bank.ts` in the wtd repo), which keeps its prompts in code and binds each to a designed id in WTD's storage backend; two prompts here were copied from that bank (mother, grandmother).
