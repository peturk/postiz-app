# Brief: Iceland audience and language research (lane is-brands)

## Context

Read first: `docs/plans/PLAN-0001-social-post-flow.md`, `.claude/skills/social-brand-yarnkin/SKILL.md`, `.claude/skills/social-brand-sporbok/SKILL.md` in this repo.
Yarnkin: bedtime-story app, audience Icelandic parents of young children, later international.
Sporbok: field-service operations software, audience Icelandic field-service operators and SMB dispatch.
Both post to Facebook Pages only, for now.
Current drafts are written in English - it is an open question whether that is right.

## Objective

Internet research, current as of 2026 - use the last30days skill if you have it, otherwise search with explicit date filters.
Answer with dated citations:

1. Language: do Icelandic consumer and B2B brand Pages post in Icelandic, English, or both? What do successful Icelandic SMB pages actually do? What is the evidence-based recommendation per brand (Yarnkin parents vs Sporbok operators)? Consider bilingual patterns (Icelandic post + English in comment, or separate posts).
2. Facebook in Iceland 2026: current user share, demographics of parents 25-45 and tradespeople/SMB operators, and whether groups (e.g. parenting groups, trade groups) matter more than Page reach in Iceland.
3. Concrete exemplars: find 3-5 Icelandic brand Pages doing engagement well (any of: children's products, apps, B2B/trade software, local services). Describe what they post, language, cadence, what gets comments.
4. Cultural tone: what reads as authentic vs annoying to an Icelandic audience on Facebook (humor norms, formality, use of weather, hard-sell tolerance).
5. Anything Iceland-specific from the last 30-90 days that matters (platform shifts, local news about Facebook usage).

Separate FACTS (dated, cited) from INFERENCE (your judgment), per section.

## Write surface

Write EXACTLY ONE file: `docs/agents/fleet/2026-08-31-fb-social-research/research-iceland-brands.md`.
Do not modify any other file, any skill, or any plan.

## Deliverable shape

Markdown, each sentence on its own line, sections matching questions 1-5, every fact with source name + URL + date, and a final `## Implications for the brand Skills` section with a concrete language recommendation per brand and any tone additions for `social-brand-yarnkin` and `social-brand-sporbok`.

## Acceptance criteria

- Language question answered with a clear per-brand recommendation and reasoning.
- Minimum 6 distinct dated sources.
- At least 3 real exemplar Pages named with observations.
- Facts and inference visibly separated.

## Verification

Leader will check the file exists, spot-check citations, and reject undated or invented exemplars.

End your final reply with `FLEET: done` or `FLEET: blocked <reason>`.
