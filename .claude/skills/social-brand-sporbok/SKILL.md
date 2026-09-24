---
name: social-brand-sporbok
description: Sporbók brand voice and locked visual assets for social compose. Use when the Ticket brand is sporbok, when composing a Sporbók social post, or when a Flow Step lists social-brand-sporbok.
---

# Sporbók brand

Voice and assets only.
Facebook length, post shape, and marketing moves live in other Skills.

The brand name is written `Sporbók` (with the accent) in every post, image, and alt text.
The Ticket and Postiz key `sporbok` stays unaccented; that is an identifier, not the name.

Authoritative assets: `https://sporbok.is/brand/` (rules in `https://sporbok.is/brand/README.md`).
Fetch assets by URL; a Flow worktree has no local brand checkout.

## Instructions

### Step 1: Audience and language

Write for Icelandic field-service operators and SMB dispatch.
Not tourists. Not parents.
Posts for the Icelandic audience are written in natural, correctly edited Icelandic, using real field-service vocabulary - never software marketing translated into Icelandic.
This is law, not preference: Icelandic Marketing Act no. 44/2026 art. 14 requires advertisements in Icelandic unless directed only at foreign consumers (see PLAN-0001 and `docs/agents/fleet/2026-08-31-fb-social-research/research-iceland-brands.md`).

### Step 2: Voice

Quiet, competent, real weather, real work.
Icelandic seriousness without souvenir language.
Weather appears only when it changes the job, the route, the schedule, or the gear.
Restrained situational humor is allowed only when it grows from a real task and leaves the operator's competence intact.

### Step 3: Visuals

Use only official assets:

- `sporbok-icon.png`
- `sporbok-lockup-stacked.png` (light surfaces only)
- `sporbok-wordmark.png` (light surfaces only)

There is no horizontal lockup.
The horizontal raster was removed 2026-08-10 for a defective underline; never recreate or reuse it.
When a horizontal treatment is needed, compose `sporbok-icon.png` with live `Sporbók` text in the brand font.

Facebook color backgrounds (locked; any other preset fails the checker):

- `1654916007940525` Light grey illustration
- `218067308976029` Light grey illustration

Photo is the trust layer.
Type and logo are composites.
Never generate glyphs or a fake lockup.
Never present photorealistic AI imagery as a real photograph.

### Step 4: Signature

No signature on Icelandic posts until an approved Icelandic variant exists.
The English signature `Sporbók · field work, without the chaos` is reserved for future English-market posts.
When a signature exists, append in one place only.

### Step 5: Forbidden

- aurora, puffins, waterfalls, Ring Road
- yarnball energy
- generic happy-clipboard stock
- surveillance framing or worker scoring
- belittling paper or phone workflows, dispatchers, or crews

## Examples

Ticket `brand: sporbok`, topic `Blað á mælaborðinu eða spjaldtölva í rigningunni?`
Result: operator-facing, weather-honest, in Icelandic, no tourism.

## Troubleshooting

Issue: it looks like a travel ad
Cause: landmark Iceland
Solution: drop landmarks. Keep weather, vans, sites, tools.

Issue: copy is grammatical Icelandic but sounds like translated SaaS marketing
Cause: composing in English and converting
Solution: compose in Icelandic from the work itself; a native editorial pass gates approval
