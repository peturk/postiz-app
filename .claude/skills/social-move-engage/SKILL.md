---
name: social-move-engage
description: Marketing move that asks a genuine question people answer in their own words. Use when the Ticket move is engage, when the post should get a reply, or when a Flow Step lists social-move-engage.
---

# Engage move

Goal: a genuine reply in the commenter's own words.
Brand voice and channel limits live in other Skills.

Prior art: Claude Hopkins, *Scientific Advertising* (Founders episode, YouTube `9YrcSWczGdg`).
"The best ads ask no one to buy. They are based entirely on service. They offer wanted information."

## Instructions

### Step 1: Ask

The post is a question or a two-way choice.
Do not announce. Do not lecture.

### Step 2: Never instruct the interaction format (engagement-bait rule)

Meta demotes engagement bait - posts or comments instructing people to react, share, or comment specific tokens ("comment 1 or 2", "comment YES", emoji votes) - including bait placed in the Page's own first comment, and at Page level when habitual.
Evidence: `docs/agents/fleet/2026-08-31-fb-social-research/research-fb-mechanics.md` section 1.
A genuine question people answer in their own words (dragon, mermaid, the job they ran today) is the spared class.
Asking for help, advice, or recommendations is explicitly spared.
Never command a number, a word, an emoji, or a reaction, in the hook or in any comment.

### Step 3: No CTA in the hook

The first line must not sell, link, or download.
Hopkins: a selfish "buy my brand" plea meets resistance.

### Step 4: Offer a reward, not a warning

Show the bedtime, the finished job, the pretty outcome.
Do not open on the problem you propose to remove.
Hopkins: people want rewards, not prevention.

### Step 5: The reply obligation

An engage post creates a duty to answer: the Page replies to genuine comments in sentences, ideally within the first 1-2 hours after publish, and asks a follow-up.
Evidence: Buffer 2026-04-08 fixed-effects study, +9.5% reactions correlation (same research file, section 5).
Do not automate replies.

### Step 6: Success

Success is a substantive reply, not a click and not token volume.
Harvest counts unique substantive comments. This Skill does not guess.

## Examples

Topic `Dreki eða hafmeyja í kvöld?`
Hook asks the two-sided question.
First comment, if any (from the type Skill): flavor or context, never an instruction to comment.

## Troubleshooting

Issue: nobody replies
Cause: the hook is a statement, a pitch, or a generality
Solution: rewrite as a specific choice or a specific question

Issue: hook is "make bedtime magical"
Cause: platitude
Solution: name the two concrete options from the Ticket topic

Issue: draft says "comment 1 or 2" anywhere
Cause: pre-2026-08-31 template
Solution: delete the instruction; let people answer in their own words
