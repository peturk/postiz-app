---
name: social-compose
description: Path skill that merges brand, move, type, and channel into one Postiz draft JSON. Use when running Flow social-post, when a compose Step lists social-compose, or when assembling a Yarnkin or Sporbók social post from Ticket fields.
---

# Social compose

This is the path.
It does not own brand facts, Facebook limits, or type slots.
Load those Skills. Fill slots. Emit JSON.

## Instructions

### Step 1: Read the Ticket

Required fields:

- `brand`: yarnkin | sporbok
- `move`: engage | proof
- `type`: this-or-that | favorite | finish-the-line | moment
- `channel`: facebook
- `topic`: this week only
- `when`: ISO datetime, Atlantic/Reykjavik, in the future

Refuse if a field is missing, if `when` is in the past, or if a value has no Skill named `social-brand-<brand>`, `social-move-<move>`, `social-type-<type>`, `social-channel-<channel>`.
A value becomes valid only when its Skill exists; add it to this list in the same change.
All four current types are text-only color posts; media types (still, cover, clip) and other channels wait for their Skills.

Pairing: `moment` goes with `proof`; `this-or-that`, `favorite`, and `finish-the-line` go with `engage`.
Refuse any other pairing - a question under `proof` or a no-ask moment under `engage` contradicts the move.

### Step 2: Load only the named Skills

Brand Skill, move Skill, type Skill, channel Skill.
Do not mix Yarnkin facts into Sporbók.

### Step 3: Fill the type slots under brand voice and channel limits

Topic stays on the Ticket.
Do not invent a new marketing move.

The hook is the headline.
Hopkins (*Scientific Advertising*, Founders `9YrcSWczGdg`): a headline change can multiply returns five to ten times.
Spend the characters on picking the right reader, not on setup.

Be specific.
"78-second shave" beats "quick shave".
Name the two options. Name the weather. Name the story.
Platitudes are a fail.

### Step 4: Emit this JSON and nothing else

This is the exact Postiz `CreatePostDto` wire shape (verified against `libraries/nestjs-libraries/src/dtos/posts/create.post.dto.ts`).
`value[0]` is the post, `value[1]` is the first comment.
Include `value[1]` only when the type Skill's comment slot (FLAVOR or PAYOFF) is filled.
When it is empty, `value` has exactly one item: Postiz rejects empty content even on a draft.

```
{
  "type": "draft",
  "shortLink": false,
  "date": "<Ticket when, ISO-8601>",
  "tags": [],
  "posts": [
    {
      "integration": { "id": "<postiz integration id for this brand+channel>" },
      "value": [
        { "content": "<HOOK>", "image": [] },
        { "content": "<FLAVOR or PAYOFF; omit this item when empty>", "image": [] }
      ],
      "settings": {
        "__type": "facebook",
        "post_type": "post",
        "text_format_preset_id": "<id or omit>"
      }
    }
  ],
  "meta": {
    "brand": "<brand>",
    "move": "<move>",
    "type": "<type>",
    "channel": "<channel>",
    "weekday": "<local weekday>",
    "hourLocal": <number>,
    "timezone": "Atlantic/Reykjavik"
  }
}
```

`meta` is ignored by Postiz; the Run stores it as the coupon.
The integration id comes from Postiz `GET /api/public/v1/integrations`, not from a Skill.
The deployed API base is `<postiz origin>/api/public/v1`; the `/api` prefix is the ingress mount, the controllers register `/public/v1`.
Credentials are not in this Skill.

### Step 5: Self-check before return

- JSON parses
- channel limits hold
- language matches the brand Skill's audience rule (Icelandic for the Icelandic Pages)
- no engagement bait anywhere: no instruction to comment a token, react, or share, in the hook or any comment
- first comment, when present, follows the type Skill (flavor or context, never voting instructions), and is never empty
- no signature on Icelandic posts (brand Skill Step 4)
- no forbidden brand tokens
- `type` is `draft`
- hook would work if said to one parent or one operator in person (Hopkins salesperson test)
- hook names a specific, not a generality
- `meta` still keys brand, move, type, channel, weekday, hour (that is the coupon)

On failure, return `NEEDS_WORK` with the failing check. Do not post.

## Examples

Ticket: yarnkin, engage, this-or-that, facebook, `Dragon or mermaid tonight?`
Result draft: hook in `posts[0].value[0]`, optional flavor in `posts[0].value[1]`, empty image, a locked Yarnkin preset, `type: draft`.

## Troubleshooting

Issue: 131-character Facebook color hook
Cause: extra setup in the hook
Solution: cut the hook.
Move context to the first comment.

Issue: Yarnkin copy on a Sporbók integrationId
Cause: brand and credentials mixed
Solution: refuse. Brand Skill does not pick the API key.
