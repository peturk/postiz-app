# Yarnkin films v6: plan

Source: the critique of v5 (`critique-page.html`, postiz-app 3f432173), which measured whisper in the voice and ranked every other flaw.
v6 solves each item below; every change is tested against v5 with the same checks, and nothing is claimed that has not been measured or looked at.

## Decisions taken

- Tagline voice: `narrator-bedtime` with a calm direction ("calm, full voice, not whispered, not breathy"). It measured 45.6% voiced and 7% breath, against 26.5% and 56% for the whispered v5 take. PK can overrule it on the critique page.
- Whisper is an effect, not the brand voice. It may only appear inside Góða nótt after the lamp goes out, and v6 uses none.
- Father voice: a calm male narrator is requested from WTD's Voice Bank (wtd-16), because voices are never designed in postiz. Until it lands, "Lesið saman" is recast to `narrator-bedtime` (calm), the only other voice that measures calm without breath. When the catalogue voice arrives it is a one-command swap.

## Workstreams

### 1. One world, one device (high)

Problem: Bangsi holds a paper book while a screen reader floats in the air.
Solution: the product is a tablet that exists in the room. It stands on a wooden reading stand at the cast's eye level, and the cast looks at it. No mascot holds a paper book.
- In "Saga fyrir kvöldið" the same tablet first shows the library (the three open books as a readable list with 30 px titles), a book is tapped, and the reader opens in the same device. One continuous product moment.
- In "Lesið saman" and "Á íslensku og ensku" the tablet shows the reader.
- In "Góða nótt" the tablet on its stand shows the last page. When the lamp goes out, the screen dims to black with the room: the product respects sleep. The glowing paper book and the mid-sleep chip are removed.

### 2. The voice adds something (high)

Problem: the voice reads exactly the words on screen.
Solution: the screen carries the headline, and the voice carries a short spoken layer written for the ear, never repeating the headline. That is 2-3 spoken lines per film, leaving room for the music and the page sounds.
- Rule, from the brand: nothing may imply that the app reads these books aloud (the three open books have no narration). The voice is a person in the room, not app narration.
- Written by a Gemini 3.8 Flash writer and checked by a separate Gemini 3.8 Flash critic acting as a native editor, both through Herdr agy clients (never the API key). Same pass: re-check "orðin verða ensk" and "tvö mál".
- Every take is measured with `whisper.py` and must be at least 40% voiced. A take that fails is re-recorded with the calm direction.

### 3. The cast acts (medium)

Problem: nobody reacts when a page turns or the language switches.
Solution: every event in the UI layer (page turn, language switch, tap) triggers a reaction in the listeners: a brief alert cue (a double take), then back to a warm open face, eyes on the tablet.
Problem: Kanína shows only a head over the sofa back.
Solution: seat the small mascots on top of the seat cushions (their seat line raised to the cushion top), so the body is visible.

### 4. Reels safe zone (medium)

Problem: the cast sits in the bottom 35% of the 9:16 frame, which Reels covers with captions and buttons.
Solution: lift the whole room about 100 px, and lay each scene out around the stand so every face sits above y 1248 in the 1920 master. The 4:5 feed cut is re-checked after the lift.

### 5. Mix and end card (low)

- Loudness lands at -14 LUFS after the limiter: the static gain targets -13.2 so the voice peaks the limiter trims do not pull it under.
- End card 4.2 s, not 5.8 s. The calm tagline is shorter, and its pauses are held to 0.45 s.

## Verification

- Frame sheets at 1 fps plus zooms on every event and face, for all four films in both cuts.
- `whisper.py` on every voice take, and loudness plus true peak on every master.
- Independent scoring of v5 and v6 on `copy/rubric.md` by the same two scorers (me, and Gemini 3.8 Flash via agy), then a comparison page.
