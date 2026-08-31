# Brief: Facebook mechanics research (lane fb-mech)

## Context

Read first: `docs/plans/PLAN-0001-social-post-flow.md` and `.claude/skills/social-channel-facebook/SKILL.md`, `.claude/skills/social-move-engage/SKILL.md`, `.claude/skills/social-type-this-or-that/SKILL.md` in this repo.
Two small Icelandic brands (Yarnkin: bedtime-story app for parents; Sporbok: field-service software for operators) post to Facebook Pages via Postiz.
The current mechanism: text-only background ("color") posts under 130 chars, with the how-to-play rules as an auto-posted first comment ("Comment 1 or 2...").

## Objective

Internet research, current as of 2026 - use the last30days skill if you have it, otherwise search with explicit date filters and prefer sources from the last 12 months.
Answer with dated citations:

1. Does Facebook's algorithm demote "engagement bait" (vote-baiting, "comment X" prompts) in 2026, and where is the line between penalized bait and a genuine question? This can invalidate our core engage move - be precise.
2. Organic reach mechanics for small Pages in 2026: what formats does the algorithm currently favor (text/background posts, photo, video/Reels, links)? Do background/color text posts still get preferential or at least decent reach?
3. First-comment mechanics: does putting content in the first comment (vs the post body) help or hurt? Any evidence pages get penalized for self-commenting immediately?
4. Posting cadence and timing for small Pages: current evidence on frequency (posts/week) and whether per-page timing matters vs content quality.
5. Comment response behavior: does a Page replying to comments quickly measurably boost distribution? Recommended response windows.
6. Anything from the last 30-90 days (Meta announcements, algorithm changes, new Page features) that should change our plan.

Separate FACTS (dated, cited) from INFERENCE (your judgment), per section.

## Write surface

Write EXACTLY ONE file: `docs/agents/fleet/2026-08-31-fb-social-research/research-fb-mechanics.md`.
Do not modify any other file, any skill, or any plan.

## Deliverable shape

Markdown, each sentence on its own line, sections matching questions 1-6, every fact with source name + URL + publication date, and a final `## Implications for PLAN-0001` section listing concrete recommended changes (or "no change") to the engage move, the this-or-that type, and the Facebook channel Skill.

## Acceptance criteria

- Every one of the 6 questions answered or explicitly marked unanswerable.
- Minimum 8 distinct dated sources; nothing older than 2024 presented as current.
- Facts and inference visibly separated.
- The Implications section addresses the engagement-bait risk head-on.

## Verification

Leader will check the file exists, spot-check 3 citations resolve and say what you claim, and reject undated claims.

End your final reply with `FLEET: done` or `FLEET: blocked <reason>`.
