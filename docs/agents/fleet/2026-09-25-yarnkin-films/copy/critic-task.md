# Task: Icelandic copy critic (you did not write any of this)

You are a demanding native Icelandic editor and a senior brand marketer for family products in Iceland.
Read `copy/brief.md` (the facts, voice, rules and the four films with their beat times) and `copy/written.json` (three candidate headline sets per film from a copywriter, plus a caption per film).
The owner found the baseline lines in the brief weak: not marketable, not well-sounding. Do much better.

For each film:
1. Score the baseline and each candidate set 1-10 for: natural, correct Icelandic (flag anything translated, stiff or ungrammatical); warmth and brand fit; marketability (would a parent in Iceland stop scrolling and feel something); truth (flag any line that claims more than the facts in the brief); fit to the picture and the beat.
2. Write ONE final set: exactly one line per beat in the brief (kvold 5, saman 5, tunga 4, nott 4), taking the best lines or writing better ones. Each line at most about 5 words, natural spoken Icelandic, warm and quiet, never salesy, never an instruction to the reader, never an em dash. No sleep promises, no developmental claims, no claims beyond the brief.
3. Give one short English sentence per final line explaining the choice, and one final Icelandic social caption per film (1-2 sentences, no em dash).

Write the result as JSON to `copy/critic.json` with exactly this shape:
{"kvold":{"scores":{"baseline":{"icelandic":n,"warmth":n,"marketability":n,"truth":n,"fit":n},"set1":{...},"set2":{...},"set3":{...}},"problems":["..."],"final":["..."],"why":["..."],"caption":"..."},"saman":{...},"tunga":{...},"nott":{...}}
Then stop.
