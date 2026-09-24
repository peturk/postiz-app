---
name: social-channel-facebook
description: Facebook Page publish rules for Postiz. Use when the Ticket channel is facebook, when composing a Facebook Page post, or when a Flow Step lists social-channel-facebook.
---

# Facebook channel

Channel limits only.
Brand, move, and type live in other Skills.

Postiz Facebook provider: post or story.
Color backgrounds: `FACEBOOK_PRESETS` in `libraries/nestjs-libraries/src/dtos/posts/providers-settings/facebook.dto.ts`.
First comment: next item in Postiz `value[]` (`facebook.provider.ts` `comment()`).
2026 evidence base: `docs/agents/fleet/2026-08-31-fb-social-research/research-fb-mechanics.md`.

## Instructions

### Step 1: Color text post

Use this when the type has no media (this-or-that, favorite, finish-the-line).

- `settings.post_type`: `post`
- `settings.text_format_preset_id`: one of the brand Skill's locked presets (a subset of `FACEBOOK_PRESETS`)
- `image`: empty
- post body: at most 130 characters
- first comment: allowed, and not counted in the 130

Color posts are a supported native format (still live per 2026-05-25 API docs) and a large in-feed card, but they carry no documented reach bonus and compete only in follower Feed, not Reels discovery.
Do not claim or chase preferential reach for backgrounds.

### Step 2: No engagement bait, anywhere

Meta demotes posts AND comments that instruct reactions, shares, or token comments; Page-level demotion applies when it is a habit.
The first comment is a comment - bait there is still bait.
First comment is for flavor, context, a link, or a signature; links belong in the first comment rather than the body (keeps the post native).

### Step 3: Photo or video post

Use this when the type needs media (cover, still, clip).

- no `text_format_preset_id`
- upload media first via `POST /public/v1/upload`
- never inline base64

Video must be Page-original: Meta's 2026-03-13 originality rules deprioritize re-uploads and watermarked reposts, and Reels/original video is the only format Meta actively boosts in 2026.

### Step 4: Out of scope

Native Facebook polls.
Facebook Plugs (none exist in this repo).
Scraping the Facebook UI.
Buying engagement or comment pods.

## Examples

Color post: 28-character hook, a locked brand preset, empty image, optional non-bait flavor comment.

## Troubleshooting

Issue: background dropped
Cause: media attached, or body longer than 130 characters
Solution: remove media and cut the hook

Issue: color post unreadable when expanded on Android
Cause: known Facebook app bug (reported 2026-03-11)
Solution: keep hooks short enough to render fully in preview; watch harvest for anomalies
