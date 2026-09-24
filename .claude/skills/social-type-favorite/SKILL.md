---
name: social-type-favorite
description: Post shape with one open question. Use when the Ticket type is favorite, when composing an open-question social post, or when a Flow Step lists social-type-favorite.
---

# Favorite type

Shape only.
Brand, move, and channel rules live in other Skills.

## Instructions

### Step 1: Slots

Fill:

- `HOOK`: one open question people answer from their own life
- `FLAVOR`: optional first comment - the brand's own answer, or a warm follow-up

### Step 2: Post body

One question.
It must be answerable in a phrase, from memory, without research.
Asking for favorites, habits, advice, or recommendations is the explicitly bait-safe class (see `social-move-engage` Step 2).

### Step 3: First comment

Optional.
The brand answers its own question first, or adds one warm detail.
Answering first lowers the threshold for the next person.
Never an instruction on how to answer.

## Examples

`HOOK`: `Hvaða saga á alltaf að vera síðust á kvöldin hjá ykkur?`
`FLAVOR`: `Hjá Bangsa er það alltaf sagan um tunglið.`

## Troubleshooting

Issue: nobody can answer without thinking hard
Cause: the question is abstract or two questions at once
Solution: ask about one concrete habit or favorite

Issue: the question interrogates instead of invites
Cause: "why" phrasing or a quiz tone
Solution: ask "which" or "what", never "why do you not"
