# Fleet Plan

## Objective

- **Outcome:** Produce several premium, authentic Icelandic fieldwork Facebook cover directions for Sporbók without regenerating its logo or typography.
- **User-facing success:** The user can compare photographic art directions with exact, mechanically composited brand assets.
- **Non-goals:** Publishing, scheduling, changing Facebook settings, or modifying application code.
- **Constraints:** Research must cover the last 30 days; generated backgrounds contain no logo or text; exact brand assets come from `/home/pk/git/available`.
- **Assumptions:** Facebook cover artwork should reserve a mobile-safe copy zone and work with a separate exact logo overlay.
- **Graph revision:** G2
- **Source revision or digest:** `83271a3bb863a625a5949c5b873757cbfdfbfc29`
- **Environment identity:** `/home/pk/git/postiz-app`, Atlantic/Reykjavik, 2026-08-10
- **Maximum active helpers:** 1

## Capability Inventory

| Capability | Available | Intended role | Evidence |
| --- | --- | --- | --- |
| Grok 1.0.0 | yes | Last-30-days web research | `grok --version`
| Built-in image generation | yes | Photorealistic background variants | Prior successful generation in this thread |
| Exact local brand assets | yes | Deterministic logo and text compositing | `/home/pk/git/available/public/brand/` |

## Work Graph

| ID | Attempt | Role | Objective | Dependencies | Input revision | Ownership | Deliverable | Success evidence | Retry ceiling | Consumer | Status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| N1 | A1 | Leader | Establish visual and brand ground truth | None | repository assets | Plan and inspection only | Baseline | Existing logo and failed generated concept inspected | 0 | N2 | accepted |
| N2 | A1 | Grok researcher | Research current premium field-service campaign art | N1 | G1 | Research report only | `research-grok.md` | First-run trust UI polluted output | 2 | N3 | rejected |
| N2 | A2 | Grok researcher | Repeat the same research after explicit folder trust | N1 | G1 | Research report only | `research-grok-a2.md` | Dated sources, URLs, facts and inferences | 1 | N3 | accepted |
| N3 | A1 | Leader | Convert research into bounded image specifications | N2 | G1 | Prompts only | Accepted prompt set | Evidence-backed visual decisions | 0 | N4 | accepted |
| N4 | A1 | Leader | Generate photographic backgrounds and composite exact branding | N3 | G1 | Generated preview assets | Preview images | Visual inspection and crop checks | 1 | N5 | accepted |
| N5 | A1 | Leader | Verify logos, text and Facebook crop safety | N4 | G1 | Review only | `review.md` | Pixel comparison and dimensions | 0 | User | accepted |
| N2Y | A1 | Grok researcher | Research a four-season Yarnkin Reykjavík system and mascot treatment | N1 | G2 | Research report only | `research-yarnkin-grok.md` | Dated sources, seasonal art system, mascot invariants | 2 | N3Y | accepted |
| N3Y | A1 | Leader | Convert Yarnkin research into four seasonal background specifications | N2Y | G2 | Prompts only | Accepted prompt set | Evidence-backed visual decisions | 0 | N4Y | accepted |
| N4Y | A1 | Leader | Generate seasonal backgrounds and composite exact Yarnkin branding | N3Y | G2 | Generated preview assets | Four seasonal previews | Visual inspection and crop checks | 1 | N5Y | accepted |
| N5Y | A1 | Leader | Verify mascot, wordmark and seasonal family resemblance | N4Y | G2 | Review only | `review.md` | Exact-asset comparison and dimensions | 0 | User | accepted |

## Shared-State Rules

- **Authoritative plan:** This file.
- **Writable surfaces by owner:** Grok may write only the named research report through its final response capture.
- **Read-only shared surfaces:** `/home/pk/git/available` and repository files.
- **Isolation strategy:** One task-owned Herdr tab and one helper.
- **Claim owner and expiry:** `codex/019fe7f3-a10c-71a0-811b-cc14a36f2b85`, twelve hours.
- **Runtime and port ownership:** None.
- **Cleanup owner:** Leader.

## Decision Log

| Decision | Evidence | Accepted option | Rejected options | Owner |
| --- | --- | --- | --- | --- |
| Preserve brand mechanically | Generated cover visibly altered the mark | Generate photo only, then composite exact logo and copy | Ask image model to recreate logo or text | Leader |
| Seasonal Yarnkin family | User prefers storybook collage, Reykjavík landscape, Hallgrímskirkja and the mascot | One shared layout with four seasonal scenes and exact mascot/wordmark overlays | Unrelated one-off covers | Leader |

## Final Checklist

- [x] Every required node is accepted.
- [x] Every helper deliverable received a line-by-line leader review.
- [x] Every accepted finding is repaired or explicitly dispositioned.
- [x] The owner session ran the real quality gate.
- [x] The user-aligned end-to-end check passed.
- [x] Actual providers and capabilities are recorded.
- [x] Task-owned tabs, sessions, worktrees, servers, and claims are closed.
