# PLAN-0001: Social post Flow

**Plan ID:** PLAN-0001
**Status:** draft (Skills committed on `origin/main`; Flow `social-post` v1 registered on prod OutOfCow, never run; nothing published)
**Last Updated:** 2026-09-24
**Authors:** operator conversation in postiz-app session 01a02f9d, continued 2026-08-24
**Home checkout:** `/home/pk/git/postiz-app`
**Runtime home:** OutOfCow Flow system
**Sink:** Postiz public API

This file is the historical and operational brief for later LLMs.
Do not invent a second factory.
Read this before writing Skills, Flows, or Postiz automation for Yarnkin or Sporbok.

Related OutOfCow ledger, not duplicated here:

- ADR-0001 Flow is canonical, Runs execute it
- ADR-0002 Skill Optimization grades by re-execution
- ADR-0004 one Flow system, five node types
- ADR-0005 Goal Loop is the autonomous pattern
- ADR-0010 Flow Execution Owner owns fleet parallelism
- PLAN-0062 capability authoring and Flow composition
- PLAN-0064 Flow and Skill outcome metrics
- PLAN-0070 graph hardening, including Postiz changelog-draft connector candidate
- `docs/plans/postiz-social-media-hub-goal.md` for instance wiring
- Yarnkin and Sporbók cover recipes (`src/scripts/social-cover-image-prompts.ts`) are no longer on outofcow `main`; they survive only in archive commit `53375080d` - restore them deliberately with the media branch, do not cite them as live

Do not write this plan into `/home/pk/git/outofcow` while that working tree is dirty and claimed.
When that checkout is clean, copy this file as the next free `PLAN-NNNN-social-post-flow.md` and add a row to `docs/plans/INDEX.md`.

---

## Problem

Yarnkin and Sporbok need social posts that stay on-brand, look like a system, and can be improved over time.
The first instinct is a pile of captions, templates, and a mega marketing prompt.
That does not compose, does not version, and does not learn.

We already have the pieces:

- Yarnkin brand system in `git/yarnkin/DESIGN.md`
- Sporbók brand assets served at `https://sporbok.is/brand/` (source `git/available/public/brand/`, rules in its `README.md`)
- Facebook pages connected in Postiz
- Postiz public API at `/public/v1`
- OutOfCow Flows that puzzle Skills, prompts, HTTP, and waitpoints

What is missing is one named path from "I want a Yarnkin this-or-that on Facebook" to a drafted Postiz post, then later to evidence about what worked.

---

## Solution

One OutOfCow **Flow**.
One **Run** per post.
**Skills** are the approachable cards.
The Ticket message is this week's topic.
Postiz is the last **HTTP Request**, drafts only until a **Waitpoint**.

A later harvest loop reads Postiz analytics back into OutOfCow lessons.
That loop does not invent a second orchestrator.
It extends PLAN-0064 outcomes and PLAN-0070 fleet memory.

---

## Vocabulary

Use OutOfCow language in code, Tickets, and later plans.
"Card" is only a human nickname for a Skill.

| Casual name | Canonical name | Meaning |
|---|---|---|
| Card | **Skill** | Versioned prompt layer. Brand, move, type, or channel. |
| Recipe | **Flow** | The graph that puzzles Skills together. |
| One post | **Run** | One execution of that Flow, ticket-backed. |
| This week's idea | **Ticket** | Topic plus which Skills apply. Not baked into a Skill. |
| Printer | **HTTP Request** | Postiz `/public/v1` |
| Looks good? | **Waitpoint** | Human gate before anything leaves draft. |
| Improve a card | **Skill Optimization** | New Skill version, never an in-place edit. |
| Learn what worked | **Lesson** then Skill-opt | Harvested evidence, not a live likes grader. |

Avoid as product objects: pipeline, recipe engine, campaign factory, bot flow, mega prompt, Postiz-specific node type.

---

## Hard rules

1. One Flow named `social-post`.
   Many Runs.
   Not a new Flow per post.
2. Five node types only: AI Step, Run Command, HTTP Request, If-Else, Loop.
   No sixth node for Postiz.
3. Every AI Step declares Skills.
   Every declared Skill must affect the prompt or tool contract and appear in the Run capability proof (PLAN-0064).
4. COMPOSE emits JSON that matches the Postiz draft contract.
   Not chat prose.
5. Drafts until Waitpoint.
   No auto-publish.
6. Media is uploaded first via `POST /public/v1/upload`.
   Never inline base64 (PLAN-0070).
7. One home per fact.
   Facebook's 130-character color-post cap lives in `social-channel-facebook`, never in the Yarnkin brand Skill.
8. Skills version by supersede.
   Never edit a live Skill in place (ADR-0002, PLAN-0064).
9. Two Postiz organizations or two API keys.
   Yarnkin and Sporbok channels never share a key.
   The brand Skill does not pick credentials.
   The HTTP Step does.
10. Do not overload OutOfCow `connectors`.
    That table is scrapers.
11. Do not use `prompts/build/marketing-asset-factory.md`.
    A 47-asset dump is the anti-pattern.
12. Skill Optimization v1 grades the compose path with writes disabled.
    Live comment counts are lessons, not the grader (ADR-0002).
13. OutOfCow cannot nest Flows as subflows (PLAN-0062 item C).
    Yarnkin plus Sporbok in parallel is a Flow Execution Owner dispatching child Runs (ADR-0010).

---

## The puzzle

```
Ticket
  brand + move + type + channel + topic + when
        |
        v
  AI Step COMPOSE
    skills: brand, move, type, channel, social-compose
    output_contract: Postiz draft JSON
        |
        v
  If-Else NEEDS MEDIA?
    yes -> make art (AI Step or Run Command)
           HTTP POST /public/v1/upload
    no  -> skip
        |
        v
  HTTP POST /public/v1/posts   type=draft
        |
        v
  Waitpoint APPROVE?
    no  -> stop, draft remains
    yes -> HTTP PUT /public/v1/posts/:id/status
        |
        v
  Run evidence = post id, permalink, Skill versions, weekday, hour
```

That graph is the factory.

---

## Skills (the cards)

Each Skill is a short Anthropic-format `SKILL.md`.
One home per fact.

Written (2026-09-24): `social-compose`, both brands, moves `engage` and `proof`, types `this-or-that`, `favorite`, `finish-the-line`, `moment`, and channel `facebook`.
Everything else below is planned; `social-compose` refuses a Ticket value until its Skill exists.

### Brand

**`social-brand-yarnkin`**

- Audience: parents of young children, Iceland plus later international.
- Voice: warm, bedtime, storybook, Reykjavik.
- Talk to parents, not to children on Facebook.
- Visuals: official wordmark and the four-mascot cast (Refur, Bangsi, Ugla, Kanína) from yarnkin `mascot-art.ts`; the yarnball is retired (2026-09-24).
- Never redraw the mascot or wordmark.
- Palette and chrome: Yarnkin `DESIGN.md` Cream and Starlight.
- Forbidden: plum chrome, hard sell in the hook, Christmas cues unless the Ticket says so.
- Signature: none on Icelandic posts; `Yarnkin · bedtime stories from Reykjavik` is reserved for English-market posts (brand Skill Step 4 owns this).

**`social-brand-sporbok`**

- Audience: Icelandic field-service operators and SMBs.
- Voice: quiet, competent, real weather, real work.
- Visuals: official icon, stacked lockup, and wordmark from `https://sporbok.is/brand/`; the horizontal lockup was removed 2026-08-10 and must never be reused (icon plus live text instead).
- Photo is the trust layer.
- Type and logo are composites, never generated glyphs.
- Forbidden: tourism Iceland, aurora, puffins, Yarnkin storybook or mascot energy.
- Signature: none on Icelandic posts; `Sporbók · field work, without the chaos` is reserved for English-market posts (brand Skill Step 4 owns this).

### Moves (marketing skills)

**`social-move-engage`**

- Ask.
- Get a comment.
- No CTA in the first line.

**`social-move-proof`**

- Show real work or a real story still.
- Trust, not a question.

**`social-move-seasonal`**

- Refresh covers and seasonal stills.
- Yarnkin four-season Reykjavik system already researched in `docs/agents/fleet/2026-08-10-sporbok-fieldwork/`.

**`social-move-launch`**

- One CTA.
- Rare.
- Never the default.

### Types (the shape)

**`social-type-this-or-that`**

- Two options.
- First comment is optional flavor or the brand's own answer, never how to play (engagement bait).

**`social-type-favorite`**

- Open question.
- First comment is optional: the brand answers its own question first.

**`social-type-finish-the-line`**

- Incomplete sentence.
- Comments complete it.

**`social-type-cover`**

- Seasonal or campaign cover art.
- Needs media.
- Reuse `social-cover-image-prompts.ts` as the visual contract, not as a second runner.

**`social-type-moment`** (added 2026-08-31, battle test)

- Text-only value beat: story detail, ritual, tip, or quiet win.
- No question, no ask; the no-media sibling of `still`.
- Pairs with move `proof`.

**`social-type-still`**

- One image, short caption.

**`social-type-clip`**

- Short video for Reels, Shorts, TikTok later.
- Build long-form on YouTube.
- Clip down.

### Channel

**`social-channel-facebook`**

- Color text post: no media, at most 130 characters, `text_format_preset_id` from the brand Skill's locked presets (a subset of `FACEBOOK_PRESETS` in `libraries/nestjs-libraries/src/dtos/posts/providers-settings/facebook.dto.ts`).
- Photo or video post: no background preset.
- First comment is the next item in Postiz `value[]`.
- Postiz Facebook provider already supports `comment()`.
- Native Facebook polls are out of scope.
- The engagement mechanism (revised 2026-08-31, evidence in `docs/agents/fleet/2026-08-31-fb-social-research/research-fb-mechanics.md`): a genuine two-option question in a native color post, an optional non-bait first comment, and the Page replying within the first hour or two. "Comment 1 or 2" style comment-bait is demoted by Meta, including inside first comments, and at Page level when habitual - it is forbidden.

**`social-channel-instagram`**

- Reels and carousels.
- Parents.
- Not in v1 of the Flow unless the channel is already connected.

**`social-channel-youtube`**

- Long-form home for Yarnkin video.
- Shorts are the same channel.
- Not in v1.

**`social-channel-linkedin`**

- Sporbok B2B.
- Company page plus founder profile later.
- Not in v1.

### Path skill

**`social-compose`**

This is the only path instruction.
It tells the model: fill the type's slots with the brand's voice, under the channel's rules, for the Ticket topic, and emit the output contract.
It does not contain Yarnkin facts or Facebook limits.

---

## Ticket contract

Every Run starts from a Ticket with these fields in the description or structured intake:

```
brand: yarnkin | sporbok
move: engage | proof
type: this-or-that | favorite | finish-the-line | moment
channel: facebook
topic: free text, this week only
when: ISO datetime, Atlantic/Reykjavik, in the future
```

Live values only; `social-compose` Step 1 owns the list and the move-type pairing.
Planned values (moves `seasonal`, `launch`; types `cover`, `still`, `clip`; channels `instagram`, `youtube`, `linkedin`) join when their Skills land.

Example:

```
brand: yarnkin
move: engage
type: this-or-that
channel: facebook
topic: Dragon or mermaid tonight?
when: 2026-08-25T19:00:00Z
```

The weekly idea stays on the Ticket.
If you bake "dragon or mermaid" into a Skill, the Skill cannot be reused.

---

## COMPOSE output contract

The COMPOSE AI Step `output_contract` must parse to this shape, then the HTTP Step sends it.

Corrected 2026-08-31 to the exact Postiz `CreatePostDto` wire shape (`libraries/nestjs-libraries/src/dtos/posts/create.post.dto.ts`); the earlier flat `integrationId`/`posts[].content` shape would fail validation.

```
{
  "type": "draft",
  "shortLink": false,
  "date": "ISO-8601",
  "tags": [],
  "posts": [
    {
      "integration": { "id": "postiz-integration-id" },
      "value": [
        { "content": "Dreki eða hafmeyja í kvöld?", "image": [] },
        { "content": "Refur heldur með drekanum í kvöld.", "image": [] }
      ],
      "settings": {
        "__type": "facebook",
        "post_type": "post",
        "text_format_preset_id": "175493843120364"
      }
    }
  ],
  "meta": {
    "brand": "yarnkin",
    "move": "engage",
    "type": "this-or-that",
    "channel": "facebook",
    "weekday": "Tue",
    "hourLocal": 19,
    "timezone": "Atlantic/Reykjavik"
  }
}
```

Held-out checks for compose, with HTTP disabled:

- JSON parses
- caption length respects the channel Skill
- Facebook color posts have empty `image` and a preset id
- Facebook photo posts have no preset
- first comment exists when the type Skill requires it
- forbidden brand tokens are absent
- integrationId belongs to the Ticket's brand

A fail is `NEEDS_WORK`.
That is the Skill Optimization grader for these Skills.

---

## Postiz access from OutOfCow

No Facebook Graph MCP is required.
Postiz is the connector.

Instance notes, verified 2026-08-31:

- Prod: `https://postiz.peturk.com`, API base `https://postiz.peturk.com/api/public/v1` (the `/api` prefix is the ingress mount; controllers register `/public/v1`).
- Dev `https://dev-postiz.peturk.com` sits behind Cloudflare Access and is not reachable with the API key alone.
- One org today: the single `postiz` scope API key sees both `Yarnkin` (facebook, `cmsng2l070001ho7cyp8tfrtd`) and `Sporbók` (facebook, `cmsnf6shm0001mk7nhrf52ohl`). Hard rule 9 (separate keys per brand) is an open operator action; splitting requires reconnecting a Facebook page under a second org.
- Secrets: git/env postiz scope, never in Skills
- Rate limit assumed 90 requests per hour.
  A normal Yarnkin plus Sporbok week is about six drafts.

Public API already in this repo:

| Method | Path | Use |
|---|---|---|
| GET | `/public/v1/integrations` | Resolve Yarnkin Facebook vs Sporbok Facebook ids |
| POST | `/public/v1/upload` | Media first |
| POST | `/public/v1/posts` | Create, including `type: "draft"` |
| PUT | `/public/v1/posts/:id/status` | Publish after waitpoint |
| GET | `/public/v1/analytics/:integration` | Channel analytics harvest |
| GET | `/public/v1/analytics/post/:postId` | Per-post harvest |

SDK: `apps/sdk/src/index.ts`.
Controller: `apps/backend/src/public-api/routes/v1/public.integrations.controller.ts`.

Facebook in Postiz already supports post, story, color backgrounds, and first comments.
Facebook has no Plugs in this codebase.
X, LinkedIn Page, Threads, and Bluesky do.
Do not wait for Facebook Plugs to ship engage posts.

---

## Cadence without a second system

| Want | Mechanism |
|---|---|
| One post | one Ticket, one Run of `social-post` |
| Yarnkin week | Loop over four Tickets, or owner dispatches four child Runs |
| Yarnkin and Sporbok same morning | Flow Execution Owner, two child Runs, two brand Skills |
| Seasonal cover | `move=seasonal`, `type=cover`, media branch |
| Week button | OutOfCow campaigns already launch canonical Flow Runs |

v1 cadence, priors only, not yet evidence.
Revised 2026-08-31 after the compose battle test (`docs/agents/fleet/2026-08-31-compose-battle-test/report.md`): a question-only week is a pollster, not a brand - each brand's week mixes engage with at least one no-ask value post (move `proof`, type `moment`).

Yarnkin, Atlantic/Reykjavik:

- Monday this-or-that (engage)
- Wednesday moment - story beat or stealable ritual (proof)
- Friday finish-the-line (engage)
- Fourth slot reactive only: real weather, news, or community moment, else nothing (Sunday demoted to experiment - 2026 timing studies call it weak)

Sporbok:

- Tuesday moment - field tip or quiet win (proof)
- Thursday this-or-that (engage)

Parent-window priors from 2026 children's-book practice, to be replaced by harvest:

- weekday 07:00-09:00
- weekday 19:00-21:00
- weekend 09:00-11:00

Iceland context for later agents:

- Facebook is still the national square (NapoleonCat July 2026: about 85 percent)
- Instagram is the parent discovery gap for Yarnkin
- LinkedIn is the buyer gap for Sporbok
- Snapchat is person-to-person, and Postiz cannot post there
- X is weak in Iceland and is not v1

---

## Learning loop (same plan, later phase)

The operator asked to keep track of:

- best day to post
- best hour to post
- which type gets the most engagement
- whether comments are positive or negative

This is not a separate product.
It is harvest plus lessons plus Skill Optimization.

### What to store on every Run

Immutable, on the Run, not in chat:

- Skill versions used
- brand, move, type, channel
- local weekday and hour
- timezone `Atlantic/Reykjavik`
- Postiz post id
- draft vs published
- waitpoint accepted or rejected

### What to harvest after publish

HTTP GET Postiz analytics, joined to that Run.

Minimum fields:

- impressions or views
- engagements
- comments count
- reactions by type if the provider returns them

Facebook provider already exposes page and post insight metrics in `facebook.provider.ts`.
Use those.
Do not scrape the Facebook UI.

### Sentiment

A later read-only AI Step classifies comments as positive, negative, mixed, or off-topic.
Store the distribution on the Run.
Do not let the compose Skill learn to chase outrage.
Engage Skills may be constrained: Yarnkin stays warm.
A high negative rate on Yarnkin is a regression, not a win.

### How learning is allowed to change behavior

Allowed:

- a Lesson that says Yarnkin Facebook this-or-that at 19:00 local outperforms 09:00 in the last 60 days, with n at least 20
- Ticket defaults and cadence tables read that Lesson
- Skill-opt of `social-compose` or `social-type-this-or-that` against frozen Tickets if first-pass contract approval rises

Forbidden:

- live likes as the Skill Optimization grader
- rewriting the Yarnkin brand Skill because one post popped
- auto-moving publish time inside the HTTP Step without a Lesson that has a sample size
- optimizing Sporbok with Yarnkin numbers

This matches PLAN-0070 fleet memory: evidence-gated lessons, no hot-path vector recall, Skill-opt remains the promotion path.
This matches PLAN-0064: version-aware live rate versus replay rate, decay is a fall against a baseline, not a vibes dashboard.

### Sample size

Do not trust a "best hour" until n is declared.
v1 rule: no timing Lesson with n under 20 published posts for that brand, channel, and type.
Until then, use the priors above and say they are priors.

---

## Brands and channels in scope

### Yarnkin now

Connected: Facebook, YouTube.
v1 Flow channel: Facebook.
YouTube is the video home when clips exist, not the first compose target.

Claim later, still Postiz-managed: Instagram, TikTok, Threads, Pinterest, X, Bluesky, Telegram.

### Sporbok now

Connected: Facebook.
v1 Flow channel: Facebook.
Claim later: LinkedIn Page, YouTube, Instagram, Google Business, Telegram.

### Do not open

VK, Kick, Twitch, Discord, Slack, Skool, Lemmy, Nostr, Farcaster, MeWe, Moltbook, Dribbble, Whop, Mastodon as brand broadcast.
Snapchat cannot be posted by Postiz.

---

## Implementation phases

### Phase 0 - this document

Done. This file exists.

### Phase 1 - cards and compose, no publish

Skills written in this checkout:

- `.claude/skills/social-brand-yarnkin/SKILL.md`
- `.claude/skills/social-brand-sporbok/SKILL.md`
- `.claude/skills/social-move-engage/SKILL.md`
- `.claude/skills/social-type-this-or-that/SKILL.md`
- `.claude/skills/social-channel-facebook/SKILL.md`
- `.claude/skills/social-compose/SKILL.md`
- added 2026-08-31: `social-move-proof`, `social-type-favorite`, `social-type-finish-the-line`, `social-type-moment`

Flow graph written as `docs/plans/social-post.flow.json`.

**Registered 2026-08-31**: Flow `social-post` v1 (dbId 4213) was saved to prod OutOfCow (`https://outofcow.com`) at runtime via tRPC `flow.save` with the machine bearer - no code land, visible at `/flows/social-post`.
Registration facts learned from the OutOfCow source (commit `44f002440`):

- `flow.save` takes an editor graph (`{nodes, edges}`), not a raw `FlowTemplate`; the compiler emits `category: custom`, `is_builtin: false`.
- An AI step's JSON output variable is `{{<stepId>.json}}` (requires `expects_json: true`), not `{{<stepId>.payload}}`; the registered HTTP step sends `body_json: "{{compose.json}}"`.
- The declarative `skills: []` array on steps does NOT persist through a runtime save (no DB column).
  Superseded 2026-09-24: steps now carry `skill_bindings` (stored in `flow_steps.skill_bindings`, outofcow `src/server/db/schema/flow.ts:63`), each resolving to one active Skill row whose version is pinned on the Run - that pin is this plan's "Skill versions used" record.
  Skills reach the DB through tRPC `skills.create` with a `project_id`; the MCP global skill sync can remove rows and is unsafe for this.
- `config.*` comes from the Ticket's `metadata.flow_config` (or a recurring-flow schedule's `config`), not from a per-Flow store.
- Ticket fields reach the compose prompt via `user_prompt_template` rendered against `{{config.*}}`; `system_prompt` is verbatim.

Remaining wiring before a Flow-driven Run works:

1. The Skills are committed (`f2a997cb`, on Forgejo `origin/main`); they reach OutOfCow as Skill rows via `skills.create` and `skill_bindings`, not as a worktree clone.
   Local `main` now tracks `origin/main` (it tracked the public gitroomhq upstream until 2026-09-24, which made a bare `git push` aim private brand material at upstream).
2. `config.postiz_api_key` in `metadata.flow_config` is returned to logged-in UI clients (`recurring-flow-dispatch.ts` documents config as non-secret). Options: accept the exposure on a single-operator instance, or land an env-backed credential in OutOfCow (precedent: `OUTOFCOW_CONNECTOR_AUTH_*`). Decide before the first Flow-driven Run.
3. `config.postiz_url` must be the origin plus `/api`, e.g. `https://postiz.peturk.com/api`.
4. `config.integration_id` carries the brand's Postiz integration id so COMPOSE never calls the API.

Compose-path evidence, 2026-08-31 (hand-run by claude-code walking the Skills exactly as the compose Step would, then POSTing the payload):

- Yarnkin draft `cmth9vii40000oa7jm7fodm3w`, state DRAFT, publishDate 2026-09-01T19:00Z, hook `Dragon or mermaid tonight?`, first comment present, preset `175493843120364` (warm gradient, not violet).
- Sporbok draft `cmth9vilc0002oa7jfsn00mle`, state DRAFT, publishDate 2026-09-03T08:00Z, hook `Paper on the dash, or the tablet in the rain?`, first comment present, preset `1654916007940525` (light grey).

That proves verification items 3 and 4.
Phase 1 is still **not** done until OutOfCow registers the Flow, injects `postiz_url` (must be `<origin>/api`) and `postiz_api_key`, and a Ticket produces a draft through the Flow itself.

### Phase 2 - waitpoint and first live posts

Add Waitpoint and status HTTP.
Operator approves.
Ship one Yarnkin week and one Sporbok week by hand-started Tickets.
Record Run meta.

### Phase 3 - remaining types and media branch

Add favorite, finish-the-line, cover, still.
Media branch uses official assets and, for covers, `social-cover-image-prompts.ts`.
Seasonal Yarnkin covers already have research and render scripts under `docs/agents/fleet/2026-08-10-sporbok-fieldwork/`.

### Phase 4 - harvest and lessons

Poll Postiz analytics on a schedule.
Join to Runs.
Emit Lessons for day, hour, type, and sentiment.
Cadence table becomes Lesson-backed.
Skill-opt stays on frozen compose Tickets.

### Phase 5 - more channels

Instagram for Yarnkin.
LinkedIn for Sporbok.
YouTube when video production is real.
New channel Skill each time.
Same Flow.

---

## Review 2026-09-24 - open backlog

A three-lane review (Skills, OutOfCow capabilities, live state) found the gaps below.
The Skill and checker fixes landed with this revision; everything here is still open.

Live state on 2026-09-24:

- Nothing has ever been published; all seven Postiz posts are DRAFTs dated in the past (2026-08-11 and 2026-09-07..11).
- Only the two Facebook Pages are connected; both show zero reach for 30 days.
- Flow `social-post` has never run; one API key still sees both brands (hard rule 9).

OutOfCow build order (reuse primitives, no second system):

1. Connector credential on the HTTP Request node (`auth.connector_id`, one connector per brand, header injected only for the connector's origin and redacted) - closes the browser-visible `postiz_api_key` decision.
2. Load the Skills as rows and bind them; one If-Else on `config.brand` so a brand never loads the other's voice.
3. A generic Approval node (trusted operation that finishes `NEEDS_WORK`, like `approve_deploy`), then `PUT /posts/:id/status`; define what happens when approval lands after `when`.
4. A weekly `social-plan-week` recurring Flow that creates the week's Tickets; needs `OUTOFCOW_RECURRING_FLOWS_MODE` on in prod (interval-only, no cron).
5. A media step: brand HTML templates rendered to PNG (official assets, real fonts, fixed sizes), optional generated backgrounds, uploaded via Postiz `POST /upload`.
6. `social-harvest` Flow over `GET /analytics/post/:postId`, joined to Runs by the stored Postiz post id.
7. A Social Ticket Inspector view (preview, image, Postiz ids); Postiz keeps the calendar.

The draft checker (`docs/agents/fleet/2026-08-31-compose-battle-test/check-draft.mjs`) becomes a Run Command step between compose and the HTTP post, because Postiz skips validation for drafts and on status change.

Skill and rule gaps with no owner yet:

- Media: `social-type-still` and `social-type-cover`, per-channel sizes and safe zones, alt text (Postiz `MediaDto.alt` exists; the Facebook provider does not send it).
- Community ops: owner and alerting for the 1-2 hour reply duty; adopt the moderation and crisis-pause runbook from `research-takeover-ops.md`.
- Legal: AI-image disclosure and Meta AI labels, photo rights and consent (crews, customers, children), children's-marketing rules for Yarnkin.
- Sporbók launch sequence (`social-move-launch`).
- Icelandic holiday and quiet-day calendar, content pillars (`meta.pillar` is used but undefined), evergreen library, UTM rule for links.
- Instagram and LinkedIn channel Skills; type Skills assume Facebook's first comment.
- Resolved 2026-09-24: the seven stale drafts were deleted; the Yarnkin yarnball is retired in favor of the four-mascot cast (Refur, Bangsi, Ugla, Kanína).
- Sporbók has no brand kit; building one (logo usage, palette, type, photo direction, social templates) is in progress and feeds the media step.

## Decisions against

| Rejected | Why |
|---|---|
| Mega marketing prompt | No composition, no versions, no held-out check |
| Postiz Generator as the brand kit | It only knows personal/company and short/long |
| New Flow per post | Flow is the artifact, Run is the instance |
| Facebook MCP in Grok | Not connected. Postiz HTTP is enough |
| Auto-publish | Waitpoint is the gate (PLAN-0070) |
| Facebook Plugs | They do not exist. Genuine questions do (comment-bait retired 2026-08-31, see fb-mechanics research) |
| Native Facebook polls | Not in the Postiz Facebook provider |
| Subflows | PLAN-0062, not built |
| Sixth node type | ADR-0004 |
| Connectors table for Postiz | Scrapers only |
| Live likes as grader | ADR-0002 confounding |
| Mixing Yarnkin and Sporbok API keys | Brand leak |
| Writing this plan into dirty outofcow main | Concurrent claims and a conflicted tree |

---

## Verification

Phase 1 is done only when all of these are true:

1. The Skills exist as files a scanner can see (ten as of 2026-09-24).
2. Flow `social-post` is openable on `/flows/:id`.
3. A Ticket with the contract above produces JSON that passes the output contract.
4. Postiz shows a **draft** on the Yarnkin Facebook integration.
5. No post is public until Phase 2.

Phase 4 is done only when a Lesson names brand, channel, type, weekday or hour, sample size, and window, and a later Ticket default reads it.

---

## Historical notes for later agents

Conversation 2026-08-23 to 2026-08-24, postiz-app:

1. Operator asked which socials Yarnkin and Sporbok still need.
   Yarnkin had Facebook and YouTube.
   Sporbok had Facebook.
   Video was called important for Yarnkin.
2. Then: maximize reach because Postiz would automate posting.
3. Then: control Facebook tone, auto posts, open questions, games.
   Grok had no Facebook MCP.
   Facebook is connected inside Postiz.
   Colored Facebook posts under 130 characters plus a first comment are the engage mechanism.
4. Then: brand plus marketing skills plus post types should merge into a post.
   Approach A, recipe cards, was chosen as the approachable surface.
5. Then: cards must be what an LLM walks, Skills must be improvable, everything is an OutOfCow Flow, Postiz must be reachable from OutOfCow.
6. Then: also track best day, best hour, best type, positive vs negative.
   Put the whole thing in one plan for history.

Prior research already in this repo:

- Yarnkin four-season Facebook covers: `docs/agents/fleet/2026-08-10-sporbok-fieldwork/research-yarnkin-grok.md`
- Sporbok field-service covers: `docs/agents/fleet/2026-08-10-sporbok-fieldwork/research-grok-a2.md`

Iceland audience priors used in the channel advice, retrieved 2026-08-23:

- NapoleonCat July 2026 Facebook, Instagram, Messenger, LinkedIn counts for Iceland
- Store norske leksikon Iceland media page: Facebook first, then YouTube, Snapchat, Instagram

Those priors are not harvest.
Replace them in Phase 4.

---

## First Ticket to run, when someone implements

```
brand: yarnkin
move: engage
type: this-or-that
channel: facebook
topic: Dreki eða hafmeyja í kvöld?
when: next weekday 19:00 Atlantic/Reykjavik
```

Expected compose (revised 2026-08-31: Icelandic per Marketing Act 44/2026 art. 14, no bait per fb-mechanics research):

- Post: `Dreki eða hafmeyja í kvöld?`
- First comment: optional flavor, e.g. `Refur heldur með drekanum í kvöld.` - never a voting instruction
- No media
- A warm Facebook background preset
- No signature until an Icelandic variant is approved (brand Skill rule)
- `type: draft`

Stop there until a human hits the waitpoint.
