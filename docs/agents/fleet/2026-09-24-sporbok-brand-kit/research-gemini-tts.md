# Gemini TTS for Sporbók Icelandic voiceover - research (2026-09-25)

## 1. Credentials
- **Scope `wtd`, key `GEMINI_API_KEY`** (`projects/.env.wtd`, linked `../wtd/.env`). Read with `pk secrets get wtd GEMINI_API_KEY`.
- git/env/SECRETS.md:43-54: stored 2026-09-24 for WTD narration (Gemini 3.8 Flash TTS + voice design), on the AI Studio project "that carries the narration credits".
  **The value was pasted into an agent chat, so rotation is still owed.** Also copied to the petur-dev Secret `wtd-dev-narration`.
- No `google` Gemini key, and **no xAI key** (`pk secrets where xai` finds nothing).
- Inference: using a WTD-scoped key for Sporbók mixes billing and quota. Consider giving Sporbók its own key/project.

## 2. Existing usage in PK repos
**WTD (current, Gemini 3.8)**: `~/git/wtd-voice-casting-20260924` (the main `~/git/wtd` checkout is stale, last commit 2026-09-18).
- `web/src/server/services/ai/gemini-tts-client.ts:13-14`: base `https://generativelanguage.googleapis.com/v1beta`, model `gemini-3.8-flash-tts` (overridable with `GEMINI_TTS_MODEL`, :79-83).
- Speech `:86-110`: `POST /interactions`. Headers are `x-goog-api-key` and `content-type: application/json` (:160). Body: `model`, `input[{type:"user_input", content[{type:"text", text, annotations[{type:"speech_metadata", style}]}]}]`, `response_format:{type:"audio"}`, `generation_config.speech_config:[{voice}]`.
- Audio comes back as base64 at `steps[].content[]` with `type:"audio"` (:190-205). It is already **WAV, 24 kHz mono 16-bit** (:85), so no conversion is needed.
- Voice design `:113-143`: `POST /voices` with `store:true` (required for prompted voices), `voice:{type:"prompted", display_name, language_code:"is-IS", gender, model, prompted:{input}}`. It returns `id`, a `sample_audio.data` WAV and `expire_time`.
- Retries `:21-25`: **429 and 503 were both seen on launch day (2026-09-24)**. Backoff is 5s/15s/45s; 120 s timeout per line.
- Lessons: `docs/plans/PLAN-0064-voice-casting-and-told-performance.md:50-69` and `docs/narration-quality/DECISION-LOG.md:335-346` (E28/E29):
  - Designing a voice from an **English description + `language_code:"is-IS"` works**.
  - Word error rate was 6-7% on narrator lines. UNVERIFIED, because the transcriber was also Gemini.
  - Inline tags (`<chuckle>`, `<gasp>`) are performed, not read aloud. **Whispering hurt intelligibility.**
  - **None of the 2,095 library voices is Icelandic.** Designed voices must be stored, last 1 year, and are capped at 200 per project.
  - Two-speaker mode takes only stock voices.
  - About 31 output tokens per second of audio.
  - PK's verdict: Gemini beat OmniVoice ("100% crap").
  - Terms blocker: the under-18 clause (see section 4). It was settled for WTD because parents author the books.
  - Voice casting was per character (safety filters refused child ages), not a fixed list of named voices.
- WTD decision log line 79: Gemini 3.8 Flash TTS on the **paid API is "owner-approved 2026-09-24"** as the sellable engine.

**Yarnkin (legacy, Gemini 2.5)**: `~/git/yarnkin/web/src/server/tts/gemini-tts.ts`.
- `:55-60`: `gemini-2.5-flash-preview-tts`, default voice **Aoede**, 24 kHz / mono / 16-bit.
- `:82-95`: `@google/genai` `generateContent` with `responseModalities:["AUDIO"]` and `speechConfig.voiceConfig.prebuiltVoiceConfig.voiceName`.
- The style is a natural-language preamble in the prompt (`buildTtsPrompt` :62-76). Raw PCM goes through `encodePcmToWav` in `tts/wav.ts:1`.
- This is the older shape. Use the WTD shape.

**OutOfCow**: only plan docs mention it, no TTS code.

## 3. Current facts (ai.google.dev, pages updated 2026-09-24)
- **Models** ([speech-generation](https://ai.google.dev/gemini-api/docs/speech-generation), updated 2026-09-24; [launch blog](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-8-text-to-speech/), 2026-09-23):
  - `gemini-3.8-flash-tts` **GA**
  - `gemini-3.8-flash-lite-tts` GA
  - `gemini-3.1-flash-tts-preview`
  - `gemini-2.5-pro-preview-tts`
- The model uses the **Interactions API** (`/v1beta/interactions`).
- **Icelandic is explicitly listed** for both 3.8 Flash models (130+ languages on Flash).
- **30 stock voices**: Zephyr Bright, Puck Upbeat, Charon Informative, Kore Firm, Fenrir Excitable, Leda Youthful, Orus Firm, Aoede Breezy, Callirrhoe Easy-going, Autonoe Bright, Enceladus Breathy, Iapetus Clear, Umbriel Easy-going, Algieba Smooth, Despina Smooth, Erinome Clear, Algenib Gravelly, Rasalgethi Informative, Laomedeia Upbeat, Achernar Soft, Alnilam Firm, Schedar Even, Gacrux Mature, Pulcherrima Forward, Achird Friendly, Zubenelgenubi Casual, Vindemiatrix Gentle, Sadachbia Lively, Sadaltager Knowledgeable, Sulafat Warm.
  - The genders are from my prior knowledge of the Cloud TTS voice list (INFERENCE): Charon, Algenib, Alnilam, Schedar and Iapetus are male; Kore, Gacrux and Vindemiatrix are female.
  - There is also a 2,000+ extended library, plus voice design and voice replication from a 30 s sample with consent checks ([voice-design](https://ai.google.dev/gemini-api/docs/voice-design), 2026-09-24).
- **Style**: set with `speech_metadata.style` (free text, the turn-level delivery), plus inline tags such as `<short pause>`, `<long pause>`, `<breath>` and `<sigh>`.
- **Multi-speaker**: up to 2 speakers, stock voices only.
- **Output**: unary returns WAV 24 kHz mono s16le. Streaming returns `audio/l16`, and the sample rate can be configured.
- **All output is SynthID-watermarked.**
- **Price, paid tier**, per 1M tokens ([pricing](https://ai.google.dev/gemini-api/docs/pricing), 2026-09-24):
  - 3.8 Flash TTS: $0.50 text in / $9.00 audio out
  - 3.8 Flash-Lite TTS: $0.50 in / $6.00 out
  - **Prices double from 2027-01-01.**
  - At about 31 tokens/s, 30 s of audio costs roughly $0.01.

## 4. Commercial terms
**Facts** ([Gemini API Additional Terms](https://ai.google.dev/gemini-api/terms), page updated 2026-04-28):
- "Google won't claim ownership over that content". Google may generate similar output for others, so **output is not exclusive**. You must follow the Prohibited Use Policy and applicable law.
- **"You may use only Paid Services when making API Clients available to users in the EEA, Switzerland, or the UK."**
- Unpaid tier: inputs and outputs are used to improve Google products, and humans may review them.
  Paid tier: not used for training, logged only for abuse detection and legal reasons.
- There is an 18+ clause and a "not directed at under-18s" clause. Sporbók is for adult tradespeople, so this is fine.
- There is **no clause banning advertising use and no disclosure clause** in these terms.

**Inference**:
- Commercial ads and social use are permitted. **Use a paid-tier key.** Iceland is EEA, and paid is the clean data-use posture anyway.
- Do not use voice replication on a real person without their consent.

**EU AI Act Art. 50** ([artificialintelligenceact.eu guide](https://artificialintelligenceact.eu/transparency-rules-article-50/), 2026-05-14):
- Fact: the article has applied since **2026-08-02**.
- Fact: the Omnibus gives systems already on the market until **2026-12-02** for machine-readable marking under 50(2). That is a provider duty, and Google's SynthID covers it.
- Fact: 50(4) requires deployers to disclose **deepfakes**, including audio.
- Inference: a generic synthetic narrator who imitates no real person is likely **not a deepfake**, so no mandatory on-air label. It is still worth a small "AI rödd" note in the caption, which is cheap insurance.

**Iceland**:
- Fact ([EFTA factsheet 32024R1689](https://www.efta.int/eea-lex/32024r1689)): the AI Act is **not yet incorporated into the EEA Agreement**, so it is not yet binding in Iceland.
- Inference: Sporbók ads served into EU member states are in scope. Icelandic consumer and marketing law (misleading ads) still applies.
- Platforms (Meta and TikTok) run their own AI-content labelling rules. These are UNVERIFIED for voice-only content.

## 5. Recommendation for Sporbók
**Engine**: `gemini-3.8-flash-tts`, paid key, one line per call, WAV at 24 kHz.

**Voices**:
1. **Male: Charon** (Informative).
   Style: `Talaðu á íslensku. Rólegur, öruggur iðnaðarmaður um fimmtugt sem talar við kollega á verkstæðinu. Jafn taktur, lágstemmdur, þurr húmor, engin sölurödd, ekkert upphrópunarmerki í röddinni. Skýr framburður á þ, ð og löngum sérhljóðum.`
2. **Female: Kore** (Firm).
   Style: `Talaðu á íslensku. Róleg, fagleg kona um fertugt, reyndur verkstjóri. Hlý en beinskeytt, eins og hún sé að útskýra eitthvað fyrir samstarfsmanni. Hófstilltur hraði, stuttar þagnir milli setninga, engin auglýsingatónn.`
3. **Alternative: designed is-IS voice** (`POST /voices`, `language_code:"is-IS"`).
   - `prompted.input`: `A calm, competent Icelandic tradesman in his fifties, low and slightly gravelly, unhurried, dry understated humour, speaks to a peer, never salesy.`
   - This gives a native accent, which the stock voices lack. Store its `voice_...` id; it lasts 1 year.
   - Fallback stock alternatives: **Algenib** (Gravelly, male) or **Gacrux** (Mature, female).

**Test plan** (each voice, 2 takes, blind listen with PK):
- A. Tagline: "Sporbók. Verkið skráð, eins og það var unnið."
- B. Hook, 8 s: "Þú manst hvað þú gerðir í gær. En í mars á næsta ári?"
- C. Phonetic stress: "Þröstur þéttir þakið, Guðríður mælir rafmagnstöfluna og hvort tveggja fer beint í dagbókina."
- D. Numbers and abbreviations: "Kl. 7:30, 3,5 klst., 12.400 kr. með vsk." Compare raw text against pre-normalized text; WTD ported an Icelandic text frontend, O6.3.
- E. Dry humour and pause: "Pappírinn týndist. <short pause> Aftur."
- Check each take for:
  - þ/ð and edge-word loss
  - English accent bleed
  - pace against a 15 s cut
  - loudness to -14 LUFS after mixing
- Optionally, transcribe back with a non-Google ASR to get word error rate.

**Request (curl)**:
```bash
export GEMINI_API_KEY="$(pk secrets get wtd GEMINI_API_KEY)"   # never echo it
curl -sS -X POST https://generativelanguage.googleapis.com/v1beta/interactions \
  -H "x-goog-api-key: $GEMINI_API_KEY" -H "Content-Type: application/json" \
  -d '{"model":"gemini-3.8-flash-tts",
       "input":[{"type":"user_input","content":[{"type":"text",
         "text":"Sporbók. Verkið skráð, eins og það var unnið.",
         "annotations":[{"type":"speech_metadata","style":"Talaðu á íslensku. Rólegur, öruggur iðnaðarmaður, þurr, engin sölurödd."}]}]}],
       "response_format":{"type":"audio"},
       "generation_config":{"speech_config":[{"voice":"Charon"}]}}' \
| jq -r '.steps[].content[]? | select(.type=="audio") | .data' | base64 -d > line.wav
```
The same request as a Node sketch:
```js
const r = await fetch(`https://generativelanguage.googleapis.com/v1beta/interactions`, {method:"POST",
  headers:{"x-goog-api-key":process.env.GEMINI_API_KEY,"content-type":"application/json"},
  body:JSON.stringify({model:"gemini-3.8-flash-tts",response_format:{type:"audio"},
    generation_config:{speech_config:[{voice:"Kore"}]},
    input:[{type:"user_input",content:[{type:"text",text,annotations:[{type:"speech_metadata",style}]}]}]})});
const j = await r.json();
const b64 = j.steps.flatMap(s=>s.content??[]).find(p=>p.type==="audio").data;
await Bun.write("line.wav", Buffer.from(b64,"base64")); // already WAV 24k mono
```
Retry on 429, 500 and 503 with a 5/15/45 s backoff, as the WTD client does.

## 6. Quick checks
- **xAI/Grok TTS** ([docs.x.ai TTS](https://docs.x.ai/developers/model-capabilities/audio/text-to-speech); [21 new voices, 2026-07-06](https://x.ai/news/new-flagship-voices)):
  - Endpoint is `POST https://api.x.ai/v1/tts`. Voices are Ara, Eve, Leo, Rex and Sal, plus 21 more and cloning.
  - Output formats: MP3, WAV and PCM at 8-48 kHz.
  - **Icelandic is not a listed language.** The docs only say "additional languages ... varying accuracy".
  - There is also no XAI key in env. Not recommended for Icelandic.
- **Lyria via the Gemini API** ([music-generation](https://ai.google.dev/gemini-api/docs/music-generation), 2026-09-23):
  - `lyria-3-clip-preview` makes fixed 30 s clips. `lyria-3.5` makes full songs.
  - Output is MP3 44.1 kHz stereo (WAV on 3.5). Ask for "instrumental only, no vocals".
  - Output is SynthID-watermarked. Prompts naming artists or copyrighted lyrics are blocked.
  - Price: $0.04 per clip or $0.08 per song (paid).
  - Terms: the same Gemini API terms apply, so you own nothing exclusive and Google won't claim ownership (fact).
  - Inference: fine as a short ad bed. There is **no Content-ID or exclusivity guarantee**, so keep generation logs as evidence of origin.
