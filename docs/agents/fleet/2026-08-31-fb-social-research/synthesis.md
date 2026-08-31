# Synthesis: Facebook-first takeover plan for Yarnkin and Sporbok

Date: 2026-08-31.
Leader synthesis of `audit-leader.md` plus three verified research lanes (`research-fb-mechanics.md`, `research-iceland-brands.md`, `research-takeover-ops.md`).
Every lane passed a happiness check; leader spot-checked citations, including the Marketing Act text directly against Alþingi.

## The three findings that changed the plan today (already applied)

1. **Comment-bait was our mechanism and Meta demotes it.**
   "Comment 1 or 2" sits inside Meta's comment/vote-baiting definitions; demotion applies inside first comments and at Page level when habitual.
   The genuine two-option question is the spared class.
   Applied: `social-move-engage`, `social-type-this-or-that`, `social-channel-facebook`, `social-compose`, and PLAN-0001 rewritten; the two live drafts recomposed without bait.
2. **Icelandic is required by law, not just tone.**
   Marketing Act no. 44/2026 art. 14 (in force 2026-05-07, verified against the Alþingi text): advertisements in Icelandic unless directed only at foreign consumers; art. 2 defines advertising broadly enough to cover organic brand posts.
   Applied: both brand Skills now require natural Icelandic; English signatures suspended until an Icelandic variant is approved; both live drafts recomposed in Icelandic.
3. **An engage post creates a reply obligation.**
   The Page must answer genuine comments in sentences, ideally within 1-2 hours of publish (Buffer 2026 fixed-effects data, +9.5% reactions correlation, no causation claim).
   Applied: written into the engage Skill; full ops runbook is a recommended next artifact.

## Standing recommendation (the answer to "what is the best approach")

**Lean fully into Facebook until harvest data exists; open no other channel until the loop has run for 4+ weeks.**
The factory design (Flow, Skills, Tickets, drafts-until-waitpoint) survived the audit untouched - the corrections were all content-level, which is exactly what the Skill layer is for.

Sequenced next steps:

1. **Land and wire (the plumbing)**: commit Skills + docs to origin (private Forgejo), register a `postiz-app` project on prod OutOfCow, settle API-key injection (recommended: small env-backed credential in OutOfCow, precedent `OUTOFCOW_CONNECTOR_AUTH_*`), then prove one Flow-driven Run end to end.
2. **Complete the v1 card deck**: write `social-type-favorite` and `social-type-finish-the-line` (blockers for the full Yarnkin week); other types/moves wait for the media branch.
3. **Adopt the ops runbook** from `research-takeover-ops.md` section 1: daily 10-minute inbox loop, reply SLAs, Tier 0/1/2 hide-delete-escalate policy, crisis freeze of waitpoint approvals, DMs stay human.
4. **Ticket practice**: monthly batch session, ~13 Tickets per brand, 4 content pillars each (defined in the ops research), one reactive slot per week that may post nothing, pillar prefixed into the topic.
5. **Cadence**: keep Yarnkin 4/week and Sporbok 2/week as priors; demote the Sunday slot to an experiment (both 2026 timing studies call Sunday weak); add weekday-morning as a second prior; no timing Lessons until n >= 20.
6. **Native editorial pass**: PK reviews every draft's Icelandic at the waitpoint - this is now a stated quality gate, not a formality.
7. **Phase 2/4 later**: publish step + waitpoint in the Flow after two clean manual-approval weeks; harvest after that; the `meta` coupon already flows on every draft.
8. **Channel expansion only via the template** in `research-takeover-ops.md` section 5 (question lists for Instagram-Yarnkin and LinkedIn-Sporbok are pre-filled); an expansion starts as one research Ticket, not as code.

## Deliberate decisions recorded

- The 2026 reach lever is original Reels/video; we accept lower reach for now and treat `type=clip` (Phase 3) as the growth move when video production is real.
- Color text posts stay: supported, native, good for conversation among followers, no reach claim made.
- AI disclosure stance still an operator decision (suggested: standing Page-level note); photorealistic-AI-as-photo is now forbidden in both brand Skills.
- Facebook Groups are listening posts, never seeding targets - especially parenting groups.
- Rule 9 (per-brand API keys) remains open; low urgency while everything is drafts.

## Open operator decisions

1. Where the API key lives for Flow-driven runs (flow_config exposure vs OutOfCow env credential land).
2. AI disclosure stance per Page.
3. Icelandic signature variants for both brands (until then: no signature).
4. Splitting the Postiz orgs/keys per brand (needs Facebook reconnection).
