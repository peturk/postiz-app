# Task: write the spoken layer for four Yarnkin films (Icelandic)

Read `brief.md` (facts, rules, voice), `final.json` (the on-screen headlines per film, [text, from, to] in seconds) and `casting.json` (each film's job, audience and voice).

The films are silent-first: the headline is on screen. Until now a voice read the headline word for word, which adds nothing. Write a SPOKEN layer that complements the screen and never repeats a headline's words.

Scenes (v6): the product is a tablet on a wooden reading stand in the room; the mascots (Bangsi bear, Refur fox, Ugla owl, Kanína rabbit) sit around it and look at it.
- kvold (story ends 20.0 s): dusk on the sofa; the tablet shows three open books; the lamp comes on at 3.5; covers light up 7.8-9.5; one is tapped at 11; the book opens 12.2 (pages 1-2).
- saman (20.0 s): Bangsi in the armchair, Ugla and Kanína on cushions; pages turn at 2, 6, 10, 14.
- tunga (20.0 s): Refur and Kanína on the sofa; the page switches to English at 2.8, page 5 at 5.6, back to Icelandic at 8.6, page 6 at 13.2.
- nott (17.2 s): everyone in bed; the last page on the tablet by the bed; the lamp and the screen go dark 11.8-13.6; all asleep by 14.6.

Rules:
- 2 or 3 spoken lines per film, each at most about 7 words, each with a start time; at least 1.5 s of silence between lines; the last line must end by the film's story end (assume about 2.5 words per second).
- The voice is a person in the room (a grandparent, a parent), talking to the family or to the viewer, warm and calm. It must NOT sound like the app reading the book aloud, and must not read the book's page text (the books shown have no narration; never imply that the app reads them).
- Never repeat a headline's words. Say the feeling, the moment, or a gentle invitation around it.
- No sales pressure, no sleep promises, no learning claims, no app-download call to action, no em dash. Natural spoken Icelandic, written in Icelandic from the start.
- Also: the tunga headlines "Einn smellur, orðin verða ensk." and "Sama sagan, tvö mál." were flagged ("ensk" for words reads odd; "mál" is ambiguous). Propose better on-screen replacements (same length, same timing) or argue for keeping them.

Give 2 alternative spoken sets per film.
Write JSON to written.json: {"kvold":{"sets":[[{"t":n,"text":"..."}],[...]]},"saman":{...},"tunga":{...,"headline_fixes":{"line2":"...","line4":"...","why":"..."}},"nott":{...}}
Then stop.
