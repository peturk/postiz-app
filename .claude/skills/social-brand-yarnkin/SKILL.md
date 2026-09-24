---
name: social-brand-yarnkin
description: Yarnkin brand voice and locked visual assets for social compose. Use when the Ticket brand is yarnkin, when composing a Yarnkin social post, or when a Flow Step lists social-brand-yarnkin.
---

# Yarnkin brand

Voice and assets only.
Facebook length, post shape, and marketing moves live in other Skills.

Authoritative product design: `DESIGN.md` in the yarnkin repo (Cream and Starlight).
Asset paths below are relative to the yarnkin repo root; a Flow worktree of this repo does not contain them.

## Instructions

### Step 1: Audience and language

Write for parents of young children.
Do not write as if the child is the Facebook account holder.
Posts for the Icelandic audience are written in natural, correctly edited Icelandic - hook, body, image text, everything.
This is law, not preference: Icelandic Marketing Act no. 44/2026 art. 14 requires advertisements in Icelandic unless directed only at foreign consumers (see PLAN-0001 and `docs/agents/fleet/2026-08-31-fb-social-research/research-iceland-brands.md`).
English-market posts come later as separate posts, never as routine bilingual duplication.

### Step 2: Voice

Warm, bedtime, storybook, Reykjavik.
Quiet. Not a hard sell.
Speak parent to parent, like a capable local adult, not a toy commercial or a translated slogan.

### Step 3: Visuals

Use only official assets:

- wordmark: `web/src/web/assets/brand/yarnkin-wordmark.png`
- the cast: four mascots drawn as flat shape data in `web/src/web/components/creatures/mascot-art.ts` - Refur (fox), Bangsi (bear), Ugla (owl), Kanína (rabbit)
- story art: the existing catalog under `web/public/character-assets` (yarnkin skill `brand-art-direction`: character and story art is never generated)

The yarnball is retired; never use it or any Icelandic word for it as a character.

Facebook color backgrounds (locked; any other preset fails the checker):

- `175493843120364` Pink and yellow gradient
- `1679248482160767` Light blue illustration
- `323371698179784` Sunset red illustration

Never redraw, restyle, or generate the mascots or the wordmark; render them from the source shapes.
In copy the mascots go by their names exactly as `mascot-art.ts` spells them, inflected as normal Icelandic nouns (Bangsi, Bangsa; Refur, Ref).
Never generate letterforms.
Never present photorealistic AI imagery as a real photograph; illustrated or stylized art only.

### Step 4: Signature

No signature on Icelandic posts until an approved Icelandic variant exists.
The English signature `Yarnkin · bedtime stories from Reykjavik` is reserved for future English-market posts.
When a signature exists, append in one place only (Postiz signature or compose), never both.

### Step 5: Forbidden

- plum or violet chrome
- app-download CTA in the hook
- Christmas cues unless the Ticket says so
- parental guilt, child-inadequacy framing, developmental claims, sleep guarantees
- pressure dressed up as family care

## Examples

Ticket `brand: yarnkin`, topic `Dreki eða hafmeyja í kvöld?`
Result: parent-facing bedtime choice in Icelandic, a mascot from the cast mentioned by name at most once, no download pitch.

## Troubleshooting

Issue: copy sounds like a toy commercial
Cause: talking to kids or selling the app
Solution: rewrite to a parent at bedtime

Issue: copy is grammatical Icelandic but sounds translated
Cause: composing in English and converting
Solution: compose in Icelandic from the start; a native editorial pass gates approval
