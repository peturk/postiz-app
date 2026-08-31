# Brief: AI social-takeover operations research (lane ops)

## Context

Read first: `docs/plans/PLAN-0001-social-post-flow.md` in this repo (the whole file - vocabulary, hard rules, phases).
An agent-driven Flow (OutOfCow) composes posts from versioned Skills and creates Postiz DRAFTS; a human waitpoint approves publishing.
The goal now: prepare this system to fully take over the social media of two small brands (Yarnkin: consumer/parents; Sporbok: B2B field-service), Facebook first, other channels later via a repeatable research path.

## Objective

Part research (internet, current 2026 sources - use the last30days skill if you have it), part design.
Answer:

1. Operations playbook: what does a complete weekly operating loop for a brand Page look like beyond publishing - comment moderation, response SLAs, hiding/deleting policy, crisis escalation, DM handling? What do social-media-management best practices (2025-2026) say a small brand must cover?
2. AI-run accounts: current best practice and cautionary tales (2025-2026) for AI-drafted brand social - disclosure norms, quality gates, tone drift, failure modes that burned brands. What guardrails do practitioners recommend?
3. Content pipeline: how do small teams plan topics (content pillars, weekly themes, evergreen vs reactive)? Recommend a Ticket-backlog generation practice for two brands with about 3 posts/week each, compatible with PLAN-0001's Ticket contract (brand/move/type/channel/topic/when).
4. Measurement: which Facebook Page metrics actually predict growth for small pages in 2026 (reach? follows? comments? shares?), what targets are realistic for pages under 1000 followers, and what a monthly review should look at. Must stay compatible with PLAN-0001 Phase 4 (harvest, Lessons, n>=20 rule).
5. Channel-expansion research path: design a REUSABLE template (one page) for "open a new channel" - the questions to research, the evidence needed before opening, and the Skill files to write (channel Skill + any new type Skills). Instantiate it briefly for the two known next channels: Instagram (Yarnkin) and LinkedIn (Sporbok) - just the filled-in question list, not the full research.

Separate FACTS (dated, cited) from DESIGN (your proposal), per section.

## Write surface

Write EXACTLY ONE file: `docs/agents/fleet/2026-08-31-fb-social-research/research-takeover-ops.md`.
Do not modify any other file, any skill, or any plan.

## Deliverable shape

Markdown, each sentence on its own line, sections matching questions 1-5, dated citations for factual claims, and a final `## Implications for PLAN-0001` section listing which phases/rules the findings would add or change - as suggestions, not edits.

## Acceptance criteria

- All 5 questions answered; question 5 produces the reusable one-page template plus the two instantiations.
- Minimum 6 distinct dated sources across questions 1-4.
- Every proposal is compatible with PLAN-0001 hard rules (one Flow, drafts until Waitpoint, Skills version by supersede) or explicitly flags the conflict.

## Verification

Leader will check the file exists, the template stands alone, and proposals do not contradict PLAN-0001 hard rules silently.

End your final reply with `FLEET: done` or `FLEET: blocked <reason>`.
