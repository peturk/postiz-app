---
name: social-type-this-or-that
description: Post shape with two options. Use when the Ticket type is this-or-that, when composing a two-choice social post, or when a Flow Step lists social-type-this-or-that.
---

# This-or-that type

Shape only.
Brand, move, and channel rules live in other Skills.

## Instructions

### Step 1: Slots

Fill:

- `HOOK`: the choice, as the post body
- `A` and `B`: the two options named in the hook
- `FLAVOR`: optional first comment - context, warmth, or a follow-up thought

### Step 2: Post body

One short choice.
Name both options.
No third option.
The question itself carries the whole game; people answer in their own words.

### Step 3: First comment

Optional.
Flavor, context, or the brand's own answer to the question.
Never an instruction to comment a number, word, or emoji - that is engagement bait and Meta demotes it (see `social-move-engage` Step 2).
Do not repeat a sales pitch.

## Examples

`HOOK`: `Dreki eða hafmeyja í kvöld?`
`FLAVOR`: `Garnhnykillinn heldur með drekanum í kvöld.`

## Troubleshooting

Issue: hook is a paragraph
Cause: extra setup
Solution: cut to the two options

Issue: first comment says how to vote
Cause: pre-2026-08-31 template
Solution: drop the instruction; keep flavor or nothing
