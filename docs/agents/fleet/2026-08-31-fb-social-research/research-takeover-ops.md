# Research: AI social-takeover operations (lane ops)

**Date:** 2026-08-31
**Brief:** `brief-takeover-ops.md` in this directory
**Plan context:** `docs/plans/PLAN-0001-social-post-flow.md` (read in full before this file)
**Method:** web research retrieved 2026-08-31; facts are dated and cited per section, design is this lane's proposal.
**Recency window:** 2025-2026 preferred; older material is labeled BACKGROUND.

---

## 1. Operations playbook: the weekly loop beyond publishing

### FACTS

- Consumers expect fast replies: roughly three-quarters of social users expect a brand response within 24 hours or sooner, and 73% say they will buy from a competitor if a brand does not respond on social ([Sprout Social customer service statistics](https://sproutsocial.com/insights/social-media-customer-service-statistics/), updated for 2025, retrieved 2026-08-31).
- Emplifi's 2025 Social Pulse research found 32% of consumers expect a DM response within one hour and about two-thirds expect a same-day reply to social inquiries ([Emplifi 2025 infographic](https://emplifi.io/resources/blog/blog-what-todays-consumers-expect-from-social-customer-service-in-2025-infographic/), 2025, retrieved 2026-08-31).
- Standard practitioner cadence splits work into daily (inbox, replies, spam removal, yesterday's numbers), weekly (plan and schedule content, prep visuals, analyze performance, adjust schedule), and monthly (report, audit, set goals) blocks ([NapoleonCat social media checklist](https://napoleoncat.com/blog/social-media-checklist/), 2024-10-22 - BACKGROUND, corroborated by the 2026 guides below).
- 2026 moderation guidance says a moderation policy must state when to hide, delete, respond, or escalate, and who gets looped in for sensitive cases ([Sprout Social moderation guide](https://sproutsocial.com/insights/social-media-moderation-tools/), 2026 edition, retrieved 2026-08-31; [Respondology moderation guidelines](https://respondology.com/blog/how-to-create-social-media-comment-moderation-guidelines/), retrieved 2026-08-31).
- Hiding or deleting ordinary negative comments reads as secretive and can escalate a situation; deletion is reserved for content that clearly violates community standards, and crisis guides recommend tiering incidents with a decision tree for escalation ([Hootsuite crisis management guide](https://blog.hootsuite.com/social-media-crisis-management/), 2026 edition, retrieved 2026-08-31).

### DESIGN

The weekly operating loop for Yarnkin plus Sporbok at ~3 posts/week each, Facebook only, is small enough for one operator plus the Flow.

Daily (operator, ~10 minutes, Meta Business Suite for both Pages):

- Check comments and DMs once in the morning and once in the evening.
- Reply to every genuine comment on an engage post; the engage move creates a reply obligation, not just a post.
- Hide spam and abuse; delete only community-standards violations; never hide or delete ordinary criticism.

Weekly (operator plus Flow):

- One waitpoint session: approve or reject the week's drafts in Postiz.
- One ticket session: confirm next week's Tickets against the cadence table.
- One glance at last week's reach and comments (no conclusions, just anomalies).

Monthly: the measurement review in section 4.

SLAs, sized to the evidence above:

- Comments on own posts: reply within 24 hours, target same day.
- DMs: acknowledge within 24 hours; product or order questions get a real answer or a handoff, not a bot.
- Crisis-tier items: acknowledge within 2 hours during waking hours Atlantic/Reykjavik.

Hide/delete/escalate policy (one page, per brand, same skeleton):

- Tier 0 - spam, scams, slurs: hide immediately, delete if it violates Meta community standards, no reply.
- Tier 1 - negative but genuine (complaint, disappointment): reply publicly with empathy, move detail to DM; never hide.
- Tier 2 - factual claim of harm, safety, or legal exposure: do not improvise a reply; escalate to the operator, acknowledge publicly within 2 hours, pause the brand's scheduled queue in Postiz until resolved.
- Tier 2 also freezes waitpoint approvals for that brand until the operator stands down the freeze.

DM handling is explicitly outside the Flow: Postiz publishes, it does not read inboxes, so DMs stay a human task in Meta Business Suite.

This playbook is a runbook document, not a Skill, because it governs human operations rather than compose behavior; the compose layer only touches it where a move Skill creates a reply obligation.

---

## 2. AI-run accounts: best practice and cautionary tales

### FACTS

- 2025 produced a documented cluster of AI brand failures: McDonald's pulled an AI holiday ad after 3 days, Coca-Cola's AI "Holidays Are Coming" reboot was panned for glitch artifacts, Meta's Advantage+ swapped an AI-generated woman into a top ad against advertiser intent, H&M's AI "digital twins" and Vogue/Guess's AI models drew ethics backlash, and Valentino's AI campaign was called "cheap" ([DesignRush, 7 worst AI advertising backfires of 2025](https://news.designrush.com/7-worst-ai-advertising-backfires-2025), 2025-12-31, updated 2026-01-02).
- The recurring failure mode is not AI use but undisclosed or emotionally hollow AI in high-trust moments; the lessons drawn are human oversight on everything shipped, harsher scrutiny for heritage and trust-heavy categories, and reputation cost exceeding production savings (same DesignRush source).
- A 2025 Edelman Trust Barometer supplemental survey, as reported in 2025-2026 coverage, found 63% of consumers are less likely to trust a brand after discovering undisclosed AI-generated advertising, rising to 71% among 25-44 year olds ([Breef, The AI Marketing Backlash](https://www.breef.com/breefingroom/articles/the-ai-marketing-backlash-why-ai-first-brands-are-starting-to-fall-flat), retrieved 2026-08-31; secondary reporting, treat the exact figure as reported-not-verified).
- Meta labels photorealistic AI-generated or AI-manipulated media ("Made with AI" / "AI info") via industry-standard indicators and self-disclosure; text posts are not labeled, and AI-assisted edits like color grading carry no label ([Meta newsroom](https://about.fb.com/news/2024/04/metas-approach-to-labeling-ai-generated-content-and-manipulated-media/), 2024-04 - BACKGROUND for the policy origin; [Meta Transparency Center](https://transparency.meta.com/governance/tracking-impact/labeling-ai-content), retrieved 2026-08-31).
- By 2026 the ads side hardened: creative containing AI-generated or manipulated content requires the disclosure control in Meta Ads Manager ([AuditSocials Meta AI label policy 2026](https://www.auditsocials.com/blog/meta-ai-generated-content-label-policy-2026), retrieved 2026-08-31; secondary source, verify in Ads Manager before ever boosting).

### DESIGN

PLAN-0001 already encodes the single most-recommended guardrail: a human waitpoint before anything publishes (hard rule 5), so the "fully AI-run account" here is really AI-drafted, human-gated - keep it that way.

Proposed guardrails, ordered by what burned brands in 2025:

1. **No photorealistic AI imagery presented as real.**
   Sporbok's "photo is the trust layer" rule already forbids this for Sporbok; extend the same prohibition to Yarnkin - illustrated/stylized AI art is fine, fake photographs are not.
   This is one fact with one home: it belongs in each brand Skill (superseded versions, per hard rule 8).
2. **Disclosure stance is an operator decision, made once, before Phase 2.**
   For text posts and stylized illustration there is no platform obligation; the evidence says undisclosed AI hurts only when it is discovered and looks like deception.
   A low-cost stance: a standing note on each Page's About/intro ("posts drafted with AI assistance, approved by a human") rather than per-post labels.
   Record the decision in the plan; do not leave it implicit.
3. **Self-disclose AI media to Meta when uploading photorealistic AI images**, and use the Ads Manager AI disclosure control if a post is ever boosted.
4. **Tone drift review, monthly.**
   Compare the month's published posts against the brand Skill; recurring off-brand edits at the waitpoint are the drift signal (a rejected draft is data).
   Fix drift by superseding the brand or compose Skill, never by in-place edits (hard rule 8) and never because one post popped (PLAN-0001 forbidden list).
5. **No AI replies to comments in v1.**
   Replies are the human trust surface and the cheapest place to get burned; the planned sentiment AI Step stays read-only (PLAN-0001 learning loop).
6. **Crisis freeze.**
   During a Tier 2 incident or a sensitive national news moment, the operator holds all waitpoint approvals for that brand; drafts queue harmlessly because nothing auto-publishes.
7. **Emotional-moment rule.**
   Holiday and heritage moments drew the harshest 2025 backlash; seasonal-move posts get the strictest waitpoint scrutiny, not the loosest.

None of this conflicts with PLAN-0001 hard rules; items 1 and 4 use the existing supersede mechanism, items 2, 3, 6, 7 are runbook and operator policy.

---

## 3. Content pipeline: pillars, themes, and the Ticket backlog

### FACTS

- Practitioner guidance converges on 3-5 stable content pillars per brand, chosen from customer questions, business priorities, and available expertise; pillars stay stable while topics under them rotate ([Sprout Social content pillars](https://sproutsocial.com/insights/social-media-content-pillars/), retrieved 2026-08-31; [Planable, content pillars in 2026](https://planable.io/blog/social-media-content-pillars/), 2025-10-10).
- Small-business guidance recommends weighting roughly 80% evergreen against 20% timely/reactive content, keeping an always-relevant core while leaving room to react ([Charelle Griffith, evergreen vs timely](https://www.charellegriffith.com/evergreen-vs-timely-content-small-business/), retrieved 2026-08-31, undated living page).
- A weekly rotation through pillars, planned on a calendar with formats and dates, is the standard mechanism for keeping a small feed balanced without weekly scrambling ([Planable](https://planable.io/blog/social-media-content-pillars/), 2025-10-10; [Sked Social pillar-based weekly ideas](https://skedsocial.com/blog/15-content-ideas-you-can-plan-and-execute-this-week-by-content-pillar), retrieved 2026-08-31).

### DESIGN

Pillars, 4 per brand, mapped to what PLAN-0001 already has:

Yarnkin (parents of young children):

- Bedtime rituals (evergreen; feeds engage/this-or-that and favorite).
- Story worlds - dragons, mermaids, the yarnball (evergreen; feeds finish-the-line and this-or-that).
- Parent life, gently (evergreen; feeds favorite and still).
- Reykjavik seasons (seasonal; feeds cover and still; the four-season system already exists in `docs/agents/fleet/2026-08-10-sporbok-fieldwork/`).

Sporbok (Icelandic field-service operators):

- Field reality - weather, sites, hands (evergreen; feeds proof and still).
- Paper vs tool - the workflow question (evergreen; feeds this-or-that and favorite).
- Quiet wins - a job that went right (evergreen; feeds proof).
- Season and daylight rhythm (seasonal; feeds still and cover).

Ticket-backlog generation practice, compatible with the existing Ticket contract:

- **Monthly batch session**: once a month, generate ~13 Tickets per brand (3/week) in one sitting, each Ticket a full `brand/move/type/channel/topic/when` record; the pillar drives the `topic`, the cadence table drives `move`, `type`, and `when`.
- **Rotation rule**: each week touches at least 3 of the brand's 4 pillars; no pillar goes dark for two consecutive weeks except out-of-season seasonal pillars.
- **Evergreen/reactive split**: ~80% of Tickets are written in the batch session from evergreen pillars; one slot per brand per week is left unwritten as the reactive slot, filled (or dropped) mid-week from real weather, news, or community moments - an empty reactive slot posts nothing rather than filler.
- **Pillar traceability**: prefix the pillar into the topic (e.g. `topic: [story-worlds] Dragon or mermaid tonight?`) rather than changing the Ticket contract; if the operator wants clean data for Phase 4, adding an optional `pillar:` field to the Ticket contract is a small additive plan change, flagged in the implications section below.
- The batch session is itself a candidate for the Flow system later (a Ticket-generating Run), but v1 keeps it a human session so the topic quality is a known baseline before automating it.

The weekly idea stays on the Ticket and never gets baked into a Skill, exactly as PLAN-0001 requires.

---

## 4. Measurement: what predicts growth for small Pages

### FACTS

- Socialinsider's 2026 guidance for small pages prioritizes reach (unique viewers), engagement rate by reach, follower growth rate, and net new followers, arguing net follows show whether content was valuable enough to keep someone connected ([Socialinsider, Facebook metrics that matter in 2026](https://www.socialinsider.io/blog/facebook-metrics/), 2026-07-01).
- 2026 organic benchmarks: for Pages under 1,000 followers the median post reaches about 21 people; median Page engagement rate sits near 0.15% with 0.3%+ in the top quartile; the median Page earns ~1.5 interactions per post per 1,000 followers ([Socialinsider Facebook benchmarks](https://www.socialinsider.io/social-media-benchmarks/facebook), living page, retrieved 2026-08-31).
- Format matters by size: status/text posts consistently drive the most conversation across page sizes, and albums pull the most shares, with albums strongest for smaller pages (same Socialinsider benchmarks, retrieved 2026-08-31).
- Smaller accounts outperform larger ones on engagement rate on every platform because their audiences are more personally connected ([Picmim SMB benchmark report 2026](https://blog.picmim.com/blog/social-media-benchmark-report-2026), retrieved 2026-08-31).

### DESIGN

What to track per post (all available through the existing Postiz harvest path, PLAN-0001 Phase 4; verify exact field names in `facebook.provider.ts` insights before building the review):

- Reach (unique viewers) - the denominator for everything.
- Comments count - the primary success metric for engage-move posts, since comment-bait is the stated mechanism.
- Reactions and shares - secondary.
- Engagement rate by reach - the resonance signal.
- Net new Page follows per month - the growth signal (Page-level, from the channel analytics endpoint).

Realistic first-quarter targets for Pages under 1,000 followers, framed as "beat the median", not vanity numbers:

- Median post reach above 21 (the published small-page median) within the first month, trending up.
- Engagement rate at or above 0.3% (top quartile) - plausible because comment-bait formats are engagement-optimized and text/status posts over-index on conversation.
- At least 2 genuine comments per engage post (excluding the brand's own first comment and operator replies).
- Positive net follows every month; any absolute follow number would be invented, so the target is the sign, not a count.

Monthly review agenda (one page, per brand):

1. Reach trend per post, flagged outliers up and down.
2. Comments per engage post vs the 2-comment floor.
3. Engagement rate by reach vs the 0.15%/0.3% benchmark lines.
4. Net follows.
5. Waitpoint rejection rate and why (feeds the tone-drift review in section 2).
6. Sentiment distribution once the read-only classifier exists (Phase 4).
7. Observations only - no timing or type Lessons until n >= 20 for that brand+channel+type, per PLAN-0001.

Sample-size honesty: at ~13 posts/month/brand spread over 4-6 types, per-type n >= 20 takes many months; the monthly review therefore reports **observations** for a long time before it may emit **Lessons**, and the cadence table keeps saying "priors" until then.
This is the n >= 20 rule working as designed, not a defect.

---

## 5. Channel-expansion research path

### DESIGN - the reusable one-page template

Copy this template into `docs/agents/fleet/<date>-<channel>-research/` when opening any new channel; a channel opens only when every evidence gate passes.

```markdown
# Open-a-channel research: <channel> for <brand>

## Questions to research (all answers dated and cited)
1. Audience: is the brand's audience on this channel, in this market? What is the dated evidence?
2. Formats: which post formats exist, which does the audience reward, and what are the hard limits (chars, media specs, first-comment support)?
3. Engagement mechanism: what is this channel's equivalent of Facebook comment-bait? What do 2025-2026 practitioners say works for small accounts?
4. Postiz capability: does the Postiz provider for this channel support the formats we need (check the provider file and DTOs in this repo, plus Plugs/comment support)? What settings does its DTO expose?
5. Analytics: which metrics does the Postiz analytics endpoint return for this channel, and do they cover the monthly review basics (reach, comments, engagement rate, net follows)?
6. Cadence priors: what posting frequency and time-of-day priors do current sources give for small accounts, pending harvest?
7. Moderation surface: what does this channel add to the ops runbook (new comment/DM surfaces, new abuse patterns)?
8. AI-content rules: what are this platform's current AI-content labeling and disclosure rules?
9. Credentials: which Postiz org/API key owns this integration (hard rule 9), and is the integration already connected?

## Evidence gates before opening
- [ ] Channel is connected in Postiz under the correct brand credentials.
- [ ] The needed formats are supported by the Postiz provider (verified in code, not assumed).
- [ ] At least 3 dated 2025-2026 sources support the audience and engagement answers.
- [ ] Cadence priors are written down and labeled priors.
- [ ] The ops runbook has a section for the channel's moderation surface.

## Skill files to write (supersede-only after first version)
- `social-channel-<name>/SKILL.md` - one home for every channel fact (limits, presets, first-comment rule, format constraints).
- New type Skills ONLY if the channel demands a shape no existing type covers (e.g. carousel, long-form video); reuse existing types first.
- No brand Skill changes; brand facts stay in brand Skills, channel facts in the channel Skill (hard rule 7).

## Ticket changes
- None; the Ticket contract already carries `channel:`. New channels extend the enum, same Flow, one new channel Skill (PLAN-0001 Phase 5).
```

### Instantiation A: Instagram for Yarnkin (question list only)

1. Audience: how many Icelandic parents of young children are reachable on Instagram in 2026, and is it still the "parent discovery gap" PLAN-0001 assumed (re-verify the NapoleonCat Iceland numbers)?
2. Formats: current specs and limits for Reels, carousels, and single images; caption length and hashtag norms for 2026; does a "first comment" convention exist and does it still matter?
3. Engagement mechanism: what replaces color-text comment-bait, since Instagram has no text-only post - carousel this-or-that? Reel with a question caption? What do 2025-2026 small-account sources say?
4. Postiz capability: what do the Instagram provider and DTO in this repo support (Reels, carousels, first comment, collaborators), and are there Plugs?
5. Analytics: which Instagram metrics does the Postiz analytics endpoint return, and can the section-4 review run unchanged?
6. Cadence priors: posts/week and time-of-day priors for small parent-audience accounts, Atlantic/Reykjavik.
7. Moderation: DM volume expectations and comment norms; does Instagram add a Tier the runbook lacks?
8. AI rules: current Meta AI-label behavior on Instagram for stylized illustration vs photorealistic media.
9. Credentials: connect under the Yarnkin org/key; hard rule 9 unresolved key-split applies here too.
10. Type gap check: does carousel need a new `social-type-carousel` Skill, or does `still` plus `this-or-that` cover v1?

### Instantiation B: LinkedIn for Sporbok (question list only)

1. Audience: are Icelandic field-service SMB buyers and operators active on LinkedIn in 2026, and at what volume (re-verify NapoleonCat Iceland LinkedIn counts)?
2. Formats: text post, document/carousel, image, and video limits in 2026; what does the algorithm currently reward for company pages vs personal profiles?
3. Company page vs founder profile: PLAN-0001 says "company page plus founder profile later" - what does current evidence say about small company-page organic reach, and does the founder profile change the plan?
4. Engagement mechanism: what is comment-bait's B2B equivalent that stays inside Sporbok's quiet, competent voice - open questions? Field-photo-plus-question? What do 2025-2026 B2B small-page sources say?
5. Postiz capability: what do the LinkedIn Page provider and DTO support, and note that LinkedIn Page has Plugs in this codebase - what do they enable?
6. Analytics: which LinkedIn metrics does the Postiz analytics endpoint return for pages?
7. Cadence priors: posts/week and best-window priors for B2B pages under 1,000 followers, Icelandic business hours.
8. Moderation: comment and InMail/DM surface for pages; escalation differences for B2B (a complaint here is from an identifiable buyer).
9. AI rules: LinkedIn's current AI-content policy and labeling behavior.
10. Credentials: connect under the Sporbok org/key (hard rule 9).
11. Type gap check: does a document-carousel type Skill need to exist, or do `still`, `proof`-moved `favorite`, and `this-or-that` cover v1?

---

## Implications for PLAN-0001

All items below are suggestions for the plan's author, not edits; none conflict with the hard rules (one Flow, five node types, drafts until Waitpoint, supersede-only Skills) - conflicts would be flagged inline.

- **Phase 2 addition**: before the first live posts, write the ops runbook (section 1) - daily inbox loop, SLAs, the Tier 0/1/2 hide-delete-escalate policy, and the rule that an engage post creates a 24-hour reply obligation. DM handling is documented as outside the Flow.
- **Phase 2 addition**: the crisis freeze rule - a Tier 2 incident holds waitpoint approvals and pauses the brand's scheduled Postiz queue; this strengthens hard rule 5 rather than changing it.
- **Phase 2 decision**: the AI disclosure stance (section 2, item 2) is an operator decision to record before the first publish; suggested default is a standing Page-level note, not per-post labels.
- **Brand Skill supersede candidate**: extend the "no photorealistic AI imagery presented as real" rule from Sporbok to Yarnkin via a superseded `social-brand-yarnkin` version (hard rules 7 and 8 respected).
- **Ticket practice, no contract change required**: the monthly batch session with pillar-prefixed topics and one reactive slot per brand per week (section 3); optionally add a `pillar:` field to the Ticket contract later as an additive change if Phase 4 wants clean pillar-level harvest.
- **Phase 4 refinement**: the monthly review agenda (section 4) with beat-the-median targets (reach > 21, engagement rate >= 0.3%, >= 2 genuine comments per engage post, positive net follows) as priors; net Page follows should join the harvest field list, verified against what `facebook.provider.ts` insights actually expose.
- **Phase 4 confirmation**: the n >= 20 rule means months of observations before the first timing Lesson at brand+channel+type granularity; the review reports observations explicitly labeled as such, which is the rule working, not a gap.
- **Phase 4 tie-in**: waitpoint rejection rate becomes a tracked number because it doubles as the tone-drift signal feeding Skill supersede decisions.
- **Phase 5 mechanism**: adopt the open-a-channel template (section 5) as the required artifact before any new channel Skill is written; Instagram-for-Yarnkin and LinkedIn-for-Sporbok question lists are ready to run.
- **Phase 5 watch item**: both instantiations include a type-gap check (carousel, document-carousel) so any new type Skill is evidence-driven, not speculative.
