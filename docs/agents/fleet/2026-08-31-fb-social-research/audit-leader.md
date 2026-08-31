# Leader audit: social-post factory, 2026-08-31

Scope: everything built for Yarnkin/Sporbok social posting as of today - PLAN-0001, six Skills, registered Flow `social-post` v1, two proven Postiz drafts.
Facebook-only lens, per operator direction.

## What is sound (keep, do not redesign)

- The factory model itself: one Flow, one Run per post, Skills as versioned cards, Ticket carries the weekly idea, drafts until Waitpoint. This composes and can learn; nothing found that argues for changing it.
- The corrected compose contract now matches the real `CreatePostDto`; proven with drafts `cmth9vii40000oa7jm7fodm3w` (Yarnkin) and `cmth9vilc0002oa7jfsn00mle` (Sporbok).
- One-home-per-fact held in practice: rereading all six Skills found no leaks (no Facebook limits in brands, no brand facts in the channel).
- Facebook-first is the right single direction: both brands' audiences are on Facebook, both integrations are connected, the provider supports color posts + first comments.

## Gaps, ordered by how much they block "take over the social media"

### 1. Nothing runs without a human driving it end to end

The Flow exists but has never produced a Run: Skills are uncommitted, no `postiz-app` project on prod OutOfCow, api-key injection undecided.
Until one Ticket goes Ticket -> Flow -> draft untouched, every post is really hand-made.

### 2. The engage mechanism may be algorithmically penalized

Facebook has demoted "engagement bait" (explicit "comment 1 or 2" style vote-baiting) since 2017; whether our exact first-comment phrasing trips it in 2026 is the single highest-value research question (lane fb-mech).
If it does, the fix is cheap - the hook stays a genuine question, the first comment stops instructing - but it must be decided before cadence starts.

### 3. Language was never decided

Both current drafts are English; Sporbok's audience is Icelandic operators, Yarnkin's is Icelandic parents (international later).
Neither brand Skill states a language. This is a brand-Skill fact with one home, currently missing (lane is-brands).

### 4. Skill coverage is 2 of 10

Moves: engage only (proof, seasonal, launch missing). Types: this-or-that only (favorite, finish-the-line, cover, still missing).
The v1 cadence table in PLAN-0001 needs favorite and finish-the-line to run a real Yarnkin week, so those two types are the actual blockers; cover/still/clip and the other moves can wait for the media branch.

### 5. No one answers the comments the engage move asks for

The whole move solicits replies; nothing watches or answers them. An abandoned comment section on a page that asks questions reads worse than not asking (lane ops designs the loop).

### 6. Ticket generation is manual and undefined

Nothing produces the weekly topics. Cadence table exists; a topic backlog practice does not (lane ops).

### 7. Harvest is designed but entirely unbuilt

Phase 4 (analytics -> Run evidence -> Lessons) has endpoints available and nothing calling them. Acceptable to defer, but the `meta` coupon must keep flowing on every draft so the data exists when harvest lands.

## Smaller findings

- Registered Flow v1 stops at draft creation; Phase 2 Waitpoint + `PUT /posts/:id/status` publish step not yet in the graph. Fine while approval happens in the Postiz UI, needed before "approve inside OutOfCow" is real.
- Signature policy ("one place only") is stated but not decided; neither draft carried a signature. Decide: compose appends it, or nobody does.
- `FACEBOOK_PRESETS` ids are hardcoded from Publer's list and may drift on Facebook's side; the code comment already accepts this; no action beyond noticing failures in harvest.
- Hard rule 9 (per-brand API keys) open; operator action; low urgency while everything is drafts.
- Yarnkin brand Skill forbids violet chrome, and the compose example in `social-compose` still says "purple preset" - cosmetic contradiction to clean when Skills are next edited.

## Sequencing recommendation (Facebook only)

1. Fold research findings into Skill v2s (engage phrasing, language, tone) - one edit round, before anything is published.
2. Land Skills + docs to origin (private Forgejo), register `postiz-app` project on prod OutOfCow, settle key injection, prove one Flow-driven Run.
3. Write `social-type-favorite` and `social-type-finish-the-line` (unblocks the full Yarnkin week), plus the comment-response routine from lane ops.
4. Start the weekly cadence with human waitpoint in Postiz UI; every draft carries `meta`.
5. Phase 2 (publish step in Flow) and Phase 4 (harvest) after two clean weeks.
6. Other channels only via the research-path template (lane ops), gated on 4+ weeks of Facebook harvest.
