# Battle-test report: one full compose week, 2026-08-31

## What was tested

The complete compose path, end to end, five times: Ticket fields -> skill stack -> contract checker -> Postiz draft.
Two new type Skills (`favorite`, `finish-the-line`) and, after critique, a value-delivery pair (`social-move-proof`, `social-type-moment`) were written to cover the v1 cadence.
`check-draft.mjs` in this directory is the held-out grader (PLAN-0001/PLAN-0064 pattern): wire shape, draft type, 130-char color limit, empty-image rule, bait patterns (en+is), Icelandic-language heuristic, brand-integration binding, weekday/hour-vs-date consistency.
Negative controls proved every check can fail: a bait comment, an English hook, and a combined oversize/wrong-integration/wrong-weekday draft were all rejected.

## Bugs the battle test caught

1. **Weekday drift**: the first Yarnkin draft was labeled Mon but dated 2026-09-01, a Tuesday. The checker now catches this class.
2. **Question-only week** (grok content critique): five engage posts in a row is a pollster, not a brand - a follower who never comments got nothing. Fixed by replacing Wed (Yarnkin) and Tue (Sporbok) with value posts.
3. **Translated Icelandic** (grok + codex): several lines were grammatical but non-native ("verri veður", "þitt teymi", "fingur virka áfram", sloganized Fri hook). All rewritten; codex verified the final five as native (one fix applied).
4. **First comments doing no work**: the Thu comment stacked a second question; now the brand takes a side with dry humor instead.

## The shipped week (all DRAFT in Postiz, awaiting waitpoint)

| When | Brand | Move/type | Post |
|---|---|---|---|
| Mon 19:00 | Yarnkin | engage/this-or-that | Dreki eða hafmeyja í kvöld? (+ yarnball picks dragon) |
| Tue 08:00 | Sporbok | proof/moment | Rain tip: tablet in a bag keeps working; the paper on the dash soaks first |
| Wed 19:00 | Yarnkin | proof/moment | Story beat: the yarnball looking for the moon hiding behind a cloud |
| Thu 08:00 | Sporbok | engage/this-or-that | Paper on the dash or tablet in the rain? (+ brand picks the tablet, paper keeps the glovebox) |
| Fri 19:00 | Yarnkin | engage/finish-the-line | Best þegar sagan er búin og ... (+ ... the yarnball long asleep) |

Post ids: cmthdduza0008oa7jnsky9eik, cmthddv4b000aoa7j1dnvinmw, cmthddv8e000boa7jrsyhorrm, cmthddvc8000coa7jj67p3ask, cmthddvgn000eoa7jvp727wb1.
Mix per brand: Yarnkin 2 engage + 1 value (fourth slot deliberately reactive/empty); Sporbok 1 engage + 1 value.
No links yet: link policy (app store, website) is an operator decision; when decided, links go in first comments per the channel Skill.

## What the brands are sharing (the answer to "books? images? links? features?")

- **Words on color cards** for now: questions people answer in their own words, story beats, and field tips. No images until the media branch (Phase 3) exists - covers and stills have research and render scripts already; clips/Reels are the real 2026 reach lever.
- **Not features**: neither brand pitches features in organic posts; Sporbok shows the work reality its product lives in, Yarnkin shows the story world. The launch move (rare, one CTA) exists in the plan for actual releases.
- **Not links yet**: pending the operator's link/disclosure decision.

## The improvement harness (how outcomes get better from here)

1. **Compose-time**: every draft passes `check-draft.mjs` before it reaches Postiz; new failure classes get a new check (weekday drift did).
2. **Waitpoint**: PK's approve/reject is data - rejection reasons feed Skill supersedes (tone drift signal, per ops research).
3. **Peer critique per batch**: each composed batch gets one harsh content review (different model) before drafts land; today's round changed 3 of 5 posts.
4. **Harvest (Phase 4)**: the `meta` coupon (brand/move/type/pillar/weekday/hour) rides every draft, so once analytics polling exists, Lessons can compare engage vs proof, weekday, and hour with the n>=20 rule.
5. **Skill supersede**: once Skills are live in OutOfCow, improvements become new versions graded by re-running frozen Tickets through the checker (ADR-0002), never in-place edits.
