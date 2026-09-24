# Sporbók cast - making eyes-first object characters read happy

Researched 2026-09-24.
Sources are at the end.
Anything tagged **[INF]** is my own inference or craft judgement, not a finding from a source.

## Conventions used below (map them to the rig's signs)

- **u**: upper lid travel. 0 = open, 1 = fully closed from above.
- **d**: lower lid travel. 0 = rest, 1 = fully closed from below.
- **ua**: upper lid tilt. Positive = the inner end (nose side) is lower, which reads angry or intent. Negative = the outer end is lower, which reads soft, sad or pleading.
- **da**: lower lid tilt. Positive = the outer end is higher, which is the cheek-raise joy shape. Negative = the inner end is higher, which reads as a smug squint.
- **gaze**: x and y from -1 to 1, with +y meaning up. Sizes are given as multipliers.

## 1. How eyes-only characters read happy

**The main rule: in joy the lower lid rises; the upper lid does not fall.**
In a real (Duchenne) smile the cheek raiser (orbicularis oculi) pushes the cheeks and the lower lids up and narrows the eye from below.
Ozel (2025) separates two actions.
The cheek raiser squeezes the outer corners and reads as genuine.
The lid tightener pushes the lower lid up and in toward the inner corner, and overdoing it gives an insincere "smize".
**[INF] For the rig:** joy is **d 0.25-0.5 with da +8° to +15°**, meaning the outer corners are pushed higher.
Smugness is the same lid lift with **da negative**, the inner corners higher.

**Which lid wins decides what a closed eye means.**
The eyeballs never change shape, so the visible sliver of a nearly closed eye is set by which lid dominates:
- **Closing from below** (d at 0.8 or more, u at 0.1 or less) leaves the top of the eyeball as a crescent that bulges upward: **"^ ^" = bliss or laughter.**
  - Cozmo, whose animation was led by Pixar's Carlos Baena, shows happiness by squashing its eyes into slits in exactly this cartoon way.
- **Closing from above** (u at 0.8 or more, d near 0) leaves the bottom of the eyeball as a crescent that bulges downward: **"u u" = sleep, calm or relief** (the 😌 emoji's reading).
- To keep a "^^" from reading as a flinch **[INF]**:
  - Hold it at most about 600 ms.
  - Pair it with an upward pose (translate y -3%, a small tilt).
  - Open it on an overshoot.
  - "u u" held with a slow sink and slow breath reads as sleep.

**Reading the in-between states [INF, drawn from craft convention and the FACS splits above]**
| Read | u | ua | d | da | Tell |
|---|---|---|---|---|---|
| Warm or content | 0-0.1 | -3° | 0.15-0.25 | +8° | gaze on the viewer or the task, soft breath |
| Joy | 0 | -5° | 0.35-0.5 | +12° | pose lifts up |
| Smug | 0.35-0.45 | 0 to +5° | 0.2-0.3 | -8° | gaze to the side, head tilt, **asymmetric** |
| Sarcastic or unimpressed | 0.45-0.55, flat | 0 | 0 | 0 | pupils centered or rolled up, no motion |
| Sleepy | 0.55-0.9 | -8° | 0-0.05 | 0 | slow blinks, pose sinks |
| Sad | 0.3-0.5 | **-12°** | 0 | 0 | **gaze down, head down** |

What reads as joy is the **upper lid staying open while the lower lid lifts**.
Most of what reads as bad feelings starts with the **upper lid coming down**.

**Prior art**
- **Cars:** Lasseter put the eyes in the windscreen because eyes down by the grille "feels more like a snake." The windscreen gave a human point of view and let the whole car act. This validates our van as designed. (BACKGROUND)
- **Baymax:** has no mouth by design. Lasseter's comment was "you don't need that. You can express without it." (BACKGROUND)
- **WALL-E:** his eyes came from binoculars, and tilting the lenses carries most of his acting. His "factory reset" scene shows that **still, fully open eyes read as empty**, so motion itself is part of the emotion. (BACKGROUND)
- **Duolingo:** runs mouths and body acting as **two separate layered state machines** in Rive, with 20+ mouth shapes per character. That is the architecture to copy if mouths are added.

## 2. Should they have mouths?

**Evidence**
- **Mishra et al. 2025**, 305 participants: emotion recognition drops for both human and robot faces when only the eye region is visible.
  - Eyes alone are measurably less legible, and that is the gap the operator is feeling.
- **Song & Luximon 2024**, 211 participants:
  - Round eyes were rated more trustworthy than narrow eyes.
  - An upturned or a neutral mouth beat a downturned mouth for trust and attitude, with **no difference between upturned and neutral**.
  - A small calm mouth does the trust work, and a big grin adds nothing measurable.
- An earlier survey of rendered robot faces found that faces with **no pupils and no mouth** were ranked unfriendly and machine-like. (BACKGROUND)
  - Our rig has pupils, which already moves the cast away from that case.
- **Wang et al., Feb 2026:**
  - Baby-schema cuteness (round shapes, big eyes) works for brands seen as **warm**.
  - Whimsical cuteness (wit, incongruity) works for brands seen as **competent**.
  - A tradesperson tool is a competence brand, so **[INF]** Sporbók should get its charm from wit (a hard hat whose reflective strip is its mouth) rather than from more baby features.
- **Su et al. 2025:** baby-schema mascots raise warmth mainly for charity or care contexts.
- **Chen & Lin 2026**, 290 young adults: large eyes won on both attention and preference (6.0/7 vs 2.0/7 for small eyes). Eye size is our cheapest warmth lever, and the cast already uses it.

**Recommendation [INF]:** give each character **a structural mouth made from one of its own parts**, drawn as **a single stroke with no teeth or tongue**.
Keep it **hidden or neutral by default** and bring it in at emotional peaks.
- **Hard hat:** the reflective strip bows into a smile, from 0 to 6% of the strip width. This is the best of the four because it is already where a mouth would be.
- **Van:** the bumper or grille line curves, as in Cars (the bumper sits under the windscreen eyes, so the snake problem does not arise).
- **Receipt:** the orange total bar arcs, or a short smile appears between two line items.
- **Toolbox:** the front latch plate tilts or curves. The lid gap is already taken by the eyes.

Size and shape limits:
- Mouth width no more than **0.5-0.6× the distance between the eye centers**.
- Shapes limited to **soft smile, small "o", flat, and a small grin arc**.
- A frown only for "oops", and never held.

This matches the sibling animals' mouth set (grin, soft, small, o, frown) without looking like it.
It also avoids a childish read, because **[INF]** childishness comes from open mouths, teeth, tongues and big squash, not from a curved line.

## 3. Why "on duty" reads miserable, and the fix

The current pool (lowered lids + downward gaze + neutral) stacks the documented **sadness markers**:
- a lowered or still head and a contracted posture;
- in Tärning et al. 2025, dimmer eye light pushed viewers toward "sadness" and "disgust".

A lowered upper lid over a downward gaze is the "u" family from section 1.
Nothing in the pose says "I'm enjoying this."

**Show concentration as narrowing from below plus forward energy, not drooping from above [INF]:**
- **Lids:** u 0.08-0.15 (only a small lid overlap), ua +3° (a slight intent angle, not angry), **d 0.15-0.25, da +6°** (a faint eye-smile the whole time).
- **Gaze:** at the work, but only **y -0.35 to -0.5**, never -1. Lower the whole pose toward the work instead of dropping the eyes to the bottom of the socket.
- **Pose:** lean *toward* the work (rotate 3-5° forward, translate x 2%) with the top staying up, rather than sinking.
- **Rhythm (the stand-in for humming or a tongue out while concentrating):**
  - a small **bob of 1.5-2.5% in y at 1.6-2 Hz** (about 100-120 bpm), in bursts of 2-4 s;
  - or a 2° side-to-side "hum sway".
  - The lagging spring accent (van aerial, receipt curl) takes the follow-through.
- **Pupil 1.05-1.1**: slightly dilated reads as interested.
- **Check-in:** every 5-9 s (randomised), glance at the viewer for 350-600 ms with a d +0.1 lid bump ("still here, all good"), then back to the work.
  - This one beat carries most of the "happy while working" read.
- **Micro-progress cue:** every so often a tiny nod (a 3° dip and return in 250 ms) as if a line item was ticked.
- **Brightness:** full, never dimmed while on duty. The van's headlights can sit at 100% while working.

## 4. Body acting for joy without limbs

Anchors from sources:
- Material-style UI motion runs 150-300 ms, and micro-interactions stay at or under about 400 ms.
- Comeau (2026) gives spring stiffness 300 / damping 12 and 25-50% squash for a ball, but says he uses "much more subtle values" in practice.
- Deformation during motion is what makes an object feel alive.

**Numbers for "joyful, not childish" [INF, calibrated to those anchors]:**
| Move | Timing | Amplitude |
|---|---|---|
| Anticipation squash | 90-130 ms | scaleY 0.92, scaleX 1.05 |
| Hop up (stretch) | 160-220 ms | scaleY 1.06-1.08, translate y -6 to -10% of height |
| Hang at the top | 60-100 ms | eyes do a d-lift "^^" here |
| Land squash | 80-110 ms | scaleY 0.90-0.93 |
| Settle | spring, 1 overshoot | about 3% overshoot, 250-350 ms |
| **Total happy hop** | **500-700 ms** | at most 2 hops back to back |
| Happy wiggle | 3 cycles, 450-600 ms | rotate ±4-6°, decaying |
| Head tilt (fondness, curiosity) | 200-280 ms in, hold | 6-10°, eyes tilt with the body |
| Happy sway (idle joy) | 0.8-1.2 Hz | rotate ±2-3°, translate x ±1% |

Limits:
- Keep squash within **±8-10%** and rotation within **±6°** except in one-shot celebrations.
- Past about 15% or with repeated bouncing, the cast reads as a kids' app.
- Use the lagging spring accent on every hop. Secondary motion is where the fun comes from without the main body looking silly.

## 5. Extra expressive channels for flat vector

- **Pupil size:**
  - Cartoon pupils are 2-3× real size and read as cute (Rozema 2022, BACKGROUND).
  - Studies of real faces disagree: constricted pupils were rated most attractive in one study, while dilated pupils with bright irises raised friendliness and cuteness in another.
  - **[INF] Use:** 1.05-1.15 for interest and affection; 0.75-0.85 inside wide eyes only for shock or alarm.
  - Change it slowly (300-600 ms). Small pupils in a warm state read as cold.
- **Glints:**
  - A second, smaller glint (40-50% size, opposite quadrant) = "sparkle eyes" for delight or pride.
  - Glint scale 1.2 on joy.
  - Hide the glints for "oops" or blankness.
  - It is cheap and grown-up if used only on peaks. **[INF]**
- **Eye scale:** 1.06-1.12 with a 120 ms pop and spring return for interest or surprise. The eyeball stays round, as the rig already requires.
- **Brightness:**
  - Dimming reads sad or disgusted (Tärning 2025), so **only brighten**.
  - Van headlights up 15-25% on joy, the hard-hat reflective strip flashes, the receipt's total bar goes a saturated orange on "done".
- **Blush:**
  - Pros: an instant, unmistakable read of warmth.
  - Cons: codes as childlike or flirtatious and pushes toward baby-schema cuteness, which is a weaker fit for a competence brand (Wang 2026).
  - **[INF] At most one or two states** ("thanks"), at low opacity (20-30%), as simple rounded shapes. Do not show it on duty.
- **Emanata, one element per cue:**
  - 2-3 sparkles for "done" or "paid";
  - a single sweat drop for "oops";
  - 2 short motion arcs on a hop;
  - "z" only in sleep.
  - Give each a 400-700 ms lifetime and never show them in idle.

## 6. Recommended palette (10 states)

Blanks mean the rig's resting value.
Mouth is either hidden or one of s = soft smile, g = small grin arc, o, f = flat, fr = frown.

| # | State | u | ua | d | da | gaze (x,y) | eye | pupil | pose | cue / extras | mouth |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 1 | **Idle-warm** (default) | 0.05 | -3° | 0.15 | +8° | 0, 0 viewer | 1.0 | 1.05 | upright, breath 1.5% | blinks every 3-6 s, sway ±2° | hidden or s (small) |
| 2 | **On duty - content** | 0.1 | +3° | 0.2 | +6° | ±0.2, -0.4 | 1.0 | 1.08 | forward lean 4° | hum bob 2% at 1.8 Hz; viewer check-in every 5-9 s | hidden |
| 3 | **On duty - alert/checking** | 0 | +2° | 0.1 | +4° | scanning ±0.5, -0.2 | 1.04 | 1.0 | upright, x-drift | quick saccades 120 ms, 3° nod on "ticked" | hidden |
| 4 | **Happy** | 0 | -5° | 0.4 | +12° | 0, +0.1 | 1.03 | 1.1 | lift y -3%, tilt 5° | glint 1.2, sway | s |
| 5 | **Delighted / "^^"** | 0 | -5° | 0.9 | +12° | - | 1.0 | - | hop (section 4) | double glint on reopen, 2 sparkles, headlights +20% | g |
| 6 | **Proud / done** | 0 | -2° | 0.3 | +10° | 0, +0.2 | 1.05 | 1.1 | puff scale 1.04, chest-up tilt back 3° | total bar flashes, 1 sparkle | g |
| 7 | **Curious / interested** | 0 | -6° one eye only | 0.05 | 0 | at target, +0.1 | 1.08 | 1.15 | head tilt 8° | eye-scale pop 120 ms | o (small) |
| 8 | **Surprised / heads-up** | 0 | -4° | 0 | 0 | at target | 1.12 | 0.85 | stretch 1.06, back 2% | anticipation squash first; glint hidden 150 ms | o |
| 9 | **Oops / sheepish** | 0.2 | -10° | 0.25 | +6° | x ±0.5, -0.2 (away), then back | 1.0 | 1.0 | shrink 0.97, tilt 6° | 1 sweat drop, wiggle ±3° | f then s |
| 10 | **Thanks / affection** | 0 | -6° | 0.6 | +14° | viewer | 1.0 | 1.12 | slow lean-in 3°, sway | faint blush (optional, 25%), headlight glow | s |
| 11 | **Off-hours sleepy** (the only "u") | 0.85 | -8° | 0 | 0 | 0, -0.3 | 1.0 | 1.0 | sink y +2%, breath 3% slow (0.25 Hz) | single "z", slow blink-open if poked | hidden |

Rules that keep it from looking miserable:
- **Across the working states (1-3), the lower lid never falls below d 0.1 and the upper lid never exceeds u 0.15.**
- Gaze y stays at -0.5 or above unless the state is sleepy.
- The head never drops.
- Brightness never dims.
- The "u" shape is only for sleep, and "^^" is only for peaks.

## Sources

- Ozel, M. "Animation Tips for Smiles," Face the FACS, updated 2025-02-20. https://melindaozel.com/animation-tips-for-smiles/
- Mishra, Skantze, Hagoort, Verdonschot. "Perception of Emotions in Human and Robot Faces: Is the Eye Region Enough?" ICSR 2024 proceedings, published 2025 (arXiv 2410.14337). https://arxiv.org/abs/2410.14337
- Song, Y. & Luximon, Y. "When Trustworthiness Meets Face: Facial Design for Social Robots," Sensors 24(13):4215, 2024. BACKGROUND. https://pmc.ncbi.nlm.nih.gov/articles/PMC11244564/
- Tärning, Tjøstheim, Mirström, Johansson. "Expressing Robot Emotion Using Eye Colors, Pupil Sizes, Eye Direction and Head Postures," Int. J. Social Robotics, 2025-04-12. https://portal.research.lu.se/en/publications/expressing-robot-emotion-using-eye-colors-pupil-sizes-eye-directi/
- Wang, Zhou, Shen, Wang. "Cuteness conquest…," Frontiers in Psychology, 2026-02-27. https://www.frontiersin.org/articles/10.3389/fpsyg.2026.1730776
- Chen, C. & Lin, Y. "Visual attention and subjective preference in mascot design," Frontiers in Psychology, 2026-07-16. https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2026.1748647/xml
- Su, Wang, Chen. "The Power of Cute…," Sport Marketing Quarterly/SAGE, 2025. https://journals.sagepub.com/doi/10.1177/10616934251391646
- Comeau, J. "Squash and Stretch," published 2026-04-13, updated 2026-05-05. https://www.joshwcomeau.com/animation/squash-and-stretch/
- Duolingo x Rive mascot architecture (third-party write-up, 2025). https://dev.to/uianimation/how-duolingo-uses-rive-for-their-character-animation-and-how-you-can-build-a-similar-rive-mascot-5d19
- Pupil studies:
  - Pupil size × iris brightness, Cognition & Emotion, 2024. BACKGROUND. https://www.tandfonline.com/doi/full/10.1080/02699931.2024.2427340
  - PsyPost summary of the constricted-pupil finding. https://www.psypost.org/surprising-influence-of-pupil-size-on-attractiveness-unveiled-in-new-research/
- Rozema, Zakaria, Ní Dhubhghaill. "A deep look into animated eyes," J. Optometry, 2022. BACKGROUND. https://pmc.ncbi.nlm.nih.gov/articles/PMC9068580/
- Cars windscreen-eyes decision (SlashFilm retrospective). BACKGROUND. https://www.slashfilm.com/573226/cars-revisited/
- Baymax no-mouth decision. BACKGROUND. https://en.wikipedia.org/wiki/Baymax and https://themainstreetmouse.com/2015/03/02/getting-to-the-heart-and-soul-of-a-robot-the-story-of-baymax/
- WALL-E binocular eyes. BACKGROUND. https://en.wikipedia.org/wiki/WALL-E and https://bennysmovies.movie.blog/2018/09/19/wall-e-show-dont-tell/
- Cozmo slit-eye happiness, Baena. BACKGROUND. https://www.fastcompany.com/3061276/meet-cozmo-the-pixar-inspired-ai-powered-robot-that-feels and https://www.designboom.com/technology/anki-cozmo-07-07-2016/
- Posture and sadness (lowered head, contracted posture), survey 2025. https://arxiv.org/pdf/2507.18026
- Relieved-face emoji reading. https://emojis.wiki/relieved-face/

Not verified directly (from search snippets only): the "no pupils and no mouth = unfriendly" robot-face survey (likely Kalegina et al., HRI 2018, BACKGROUND), and the specific pupil-size results of Tärning 2025 Experiment 2 (the paper was paywalled, and only the abstract was read).
