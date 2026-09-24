# Sporbók work-object cast - research brief

Researched 2026-09-24.
Sources are dated; older ones are labelled BACKGROUND.
"Inference" marks my reasoning as distinct from what a source says.

## TL;DR

- **Object mascots are almost unclaimed in B2B.** A June 2026 census found 105 mascots across ~30k B2B software companies, 61% animals and only 2 objects.
  A van, a toolbox, a hard hat and a receipt would therefore stand out, but only if each object ties back to what Sporbók is for.
- **Positioning comes first and the character second.** "If you could swap the animal for a different animal and nothing about the company's argument would change, it was never an asset" (STFO).
  Each of our objects maps to a real part of the job (driving to site, tools, safety, materials cost), so the cast passes this test.
- **Personified helpers fail when they have personality without a purpose or user control.** Microsoft launched Mico in Oct 2025 as the "lesson-learned Clippy" and pulled it from Copilot in Aug 2026, saying a mascot on a general assistant "creates friction rather than engagement once novelty wears off."
  So Sporbók characters should react to the user's own events (a job closed, a receipt logged) and never interrupt.
- **Act with the body, not the face.** Luxo Jr. has no eyes, and viewers read emotion from its lean and slump alone.
  Use **eyes and eyelids only: no mouths, no limbs.** That keeps the cast adult and understated, which suits Icelandic dry humour.
- **Engine:** keep the existing **code-driven SVG springs**. Rive is the leading tool for animator-authored state machines (Duolingo), but its roughly 200KB WASM runtime and separate authoring tool gain us little for a cast built from 3 primitives whose parameters must also render as stills.

## 1. Prior art

- **Duolingo + Rive:** the character is built as a set of states rather than as clips.
  Duolingo combined 8 head and 8 body animations into 64+ neutral variations in a file under 1MB, with idle blinks and nods and success or failure reactions driven by app state.
  Lesson: combine a small set of layered parts and you get a lot of variety without it feeling repetitive.
  ([Duolingo blog, world-character visemes](https://blog.duolingo.com/world-character-visemes) BACKGROUND; [dev.to analysis, 2026](https://dev.to/uianimation/how-duolingo-uses-rive-for-their-character-animation-and-how-you-can-build-a-similar-rive-mascot-5d19))
- **Duolingo "Death of Duo" (Feb 2025):** 1.7B impressions in two weeks.
  This works for a consumer brand with years of accumulated character equity, and it is the wrong register for trades B2B.
  Take the idea of recurring storylines, not the volume.
  ([Axios 2025-02-15](https://www.axios.com/2025/02/15/duolingo-mascot-dead-duo-owl-social-media-marketing), [Meltwater](https://www.meltwater.com/en/blog/duolingo-dead-mascot-campaign))
- **Mailchimp Freddie (2018 Collins rebrand):** simplified to a strong silhouette and used under strict rules in loading, error and empty states, as "a friendly guide, never a gimmick."
  ([Canny brand breakdown](https://canny-creative.com/brand-breakdown/brand/mailchimp-a-brand-breakdown), BACKGROUND)
- **Microsoft Mico (Oct 2025 to Aug 2026):** avoided a human face on purpose to escape the uncanny valley, and appeared only in voice mode (context plus control).
  It was still retired from general Copilot and moved into tutoring, where it has "more to react to."
  ([Dataconomy 2025-10-24](https://dataconomy.com/2025/10/24/meet-mico-microsofts-friendly-blob-shaped-evolution-of-clippy/), [AI Chat Daily 2026-08-13](https://www.aichatdaily.com/ai-news/microsoft-retires-mico-copilot-avatar-launched-10-months))
  - Inference: a character earns its place only where there is a real event to react to.
- **B2B distinctiveness 2026:** character assets average 0.73/3, and only 14% of companies score as distinctive.
  The brands that win repeat their hooks "across the whole surface, not one hero shot... with a discipline that feels boring from the inside."
  ([STFO distinctiveness report](https://www.stfo.io/research/b2b-brand-distinctiveness-2026/); the page shows a date of 2026-10-06, which is later than today, so treat the date as unverified.)
- **Trades SaaS (Jobber, Housecall Pro, ServiceTitan):** I found no mascot and no recent rebrand in any source.
  All three brand themselves with photography of real tradespeople plus a flat UI.
  Inference: an object cast has no direct competitor in field-service software.
- **Luxo Jr., Cars, The Brave Little Toaster (BACKGROUND):** Luxo reads as alive through leaning in when curious, shrinking back when surprised and slumping when disappointed ([Wikipedia](https://en.wikipedia.org/wiki/Luxo_Jr._(character))).
  Cars puts the eyes in the windscreen, which is the accepted convention for a vehicle face.
  The headlight-eyes alternative reads as more aggressive and more mechanical.
  - A 2025 Apple research lamp robot applied the same principle (posture expressing intent) to a physical product ([TechXplore 2025-02](https://techxplore.com/news/2025-02-apple-pixar-table-lamp-ai.html)).

### What makes an object character credible to adults

1. **Weight:** it moves the way the real object would.
   A van rocks on its suspension; it does not bounce like a ball.
2. **One place for the face.** The eyes sit where the object's own structure allows (a windscreen, the gap under a lid, below a brim), not pasted onto a flat side.
   Most "face on object" failures are stickers on a surface.
3. **Restraint:** no mouth, no teeth, no hands.
   Eyelids and gaze alone carry roughly 80% of the emotion, and understatement reads as competent.
4. **Material honesty:** squash and stretch only where the material allows (see §3).

## 2. Character-sheet craft

- **Shape language:** square reads as stable and dependable, circle as friendly, triangle as energetic or sharp.
  Mix a dominant shape with an accent shape.
  ([CGWire 2026](https://blog.cg-wire.com/character-shape-language/))
- **Silhouette test:** fill each character solid ink and check two things.
  - Is it identifiable at 48px?
  - Can someone who has never seen it guess its personality?
  ([CGWire 2026](https://blog.cg-wire.com/character-shape-language/))
- **Cast size ratios:** clear steps in scale, so that any pair reads as a hierarchy.
  Proposed ratio: van 1.0 : toolbox 0.45 : hat 0.3 : receipt 0.25 in height.
- **One signature feature each**, and everything else shared: the same eye construction, stroke-free flat fill and corner radius across the cast, so they read as a family.
- **Colour coding (one dominant colour each):**
  - **Bíllinn: rain blue #2C5F7F**
  - **Kassinn: ink #111418** with an orange handle
  - **Hjálmurinn: hi-vis orange #FF5A1F**
  - **Nótan: concrete #E6E9EC** with ink line-items
  - Eye whites are shared, and pupils are ink everywhere.
  - Check that the eyes on Kassinn (ink body) still read, and that Nótan still reads against a concrete background (add a subtle shadow or outline token).
- **Minimal expression set (8 poses from eyelid, gaze and posture parameters):**

  | State | Eyelids | Gaze | Body |
  |---|---|---|---|
  | idle | 20% closed, blinks | forward | still, slow breathe |
  | attentive | open | toward the target | small lean in |
  | content or proud | lower lids up (an "eye smile") | forward | tiny rise |
  | thinking | half | up and to the side | still |
  | off-duty | 70-100% closed | down | settled low |
  | surprised | wide, pupils small | forward | recoil back |
  | worried or error | inner corners raised | down or aside | shrink |
  | celebrating | eye smile | up | a single hop or nod |

- **Acting beats for social posts:** one beat per image.
  A still should look like a single frame from a longer scene: before, reaction, or after.
  Good beats include:
  - the van waiting in the dark at 07:40
  - the receipt peeking out of a jacket pocket
  - the hat hung on its nail at 17:00

## 3. Animation for UI mascots

- **Rive vs Lottie in 2026:**
  - **Rive:** a WebGL renderer, files 3-5x smaller than Lottie, and a state machine.
    Scripting went GA on 2026-01-13, and data binding is now in the web runtime.
    The web runtime is ~200KB gzipped (WASM).
  - **Lottie:** ~60KB, playback only.
    Its SVG renderer drives up CPU with 5+ concurrent animations.
  - Sources: [Unicorn Icons 2026](https://unicornicons.com/blog/lottie-vs-rive-performance), [Rive scripting blog](https://rive.app/blog/scripting-is-live-in-rive), [Rive data binding](https://community.rive.app/c/announcements/data-binding-now-available-in-web-runtime)
- **Code-driven SVG springs** ([Motion](https://motion.dev/docs/svg-animation) can spring any SVG attribute and cut spring retargeting cost by 80% in its 2026 release).
  - Recommendation: **keep the in-house spring engine.** The cast is parametric: eyelid 0-1, gaze x/y, lean, squash.
    - The same parameter object renders a web frame and a still PNG deterministically, so social stills and product animation cannot drift apart.
    - Springs retarget smoothly when state changes mid-motion, which a timeline-based Lottie cannot do.
    - Revisit Rive only if a non-coding animator joins.
- **Reduced motion:** under `prefers-reduced-motion: reduce`, snap straight to the end pose.
  Eyelid and gaze changes stay because they carry state, while hops, recoils and breathing go.
  WCAG 2.2.2 (Pause, Stop, Hide, level A) covers auto-moving content that runs longer than 5s next to other content, and 2.3.3 covers motion triggered by interaction.
  ([W3C C39](https://www.w3.org/WAI/WCAG22/Techniques/css/C39), [Pope Tech 2025-12-08](https://blog.pope.tech/2025/12/08/design-accessible-animation-and-movement/))
- **Idle loops that do not annoy:**
  - Randomised blinks every 3-8s, with occasional double blinks.
  - A gaze shift about every 10-20s.
  - No continuous bobbing.
  - After ~5s with no event, the character settles to fully still apart from blinks.
  - After ~60s idle, go to off-duty (lids down).
  - Pause entirely when the tab is hidden or the character is off-screen (IntersectionObserver).
- **The 12 principles applied to UI mascots:**
  - **Squash and stretch, capped by material:**
    - van: 3-5% (suspension only)
    - toolbox: 0%, it acts through the lid hinge instead
    - hat: 0-2%, it tilts on the brim
    - receipt: up to 15%, plus a bend (paper)
  - **Anticipation:** a small dip before any hop.
  - **Follow-through:** the receipt's torn tail lags, and the van rocks once after stopping.
  - **Slow in and slow out:** comes free with springs; use critically damped springs for "calm" and a single overshoot for "happy", never several wobbles.
  - **Secondary action:** blinks.
  - **Staging:** gaze leads the viewer's eye toward the UI element that matters.
  - **Timing:** keep reactions under 600ms so they never block the task.

## 4. Pitfalls for a B2B trades audience

- **Childish vs charming:**
  - Childish: big pupils, blush, mouths, bouncing.
  - Charming: competence plus one quirk.
  - Keep the eyes small relative to the body (Luxo's big-head proportions read as a child, so do the opposite).
- **Clippy effect:** a character that interrupts or offers help nobody asked for.
  Rule: the cast **reacts, never initiates**, and never appears in a modal or a nag.
- **Expectation gap:** research finds human-like cues raise trust at first, but lower it over time when capability does not match ([Frontiers in Computer Science 2025](https://www.frontiersin.org/journals/computer-science/articles/10.3389/fcomp.2025.1531976/full)).
  Inference: never give a character the job of explaining errors or money.
  Nótan must not appear when an invoice total is wrong; show the plain message.
- **Mascot fatigue:** Mico is the 2026 example.
  Limit how often characters appear on product surfaces: empty states, a finished job, onboarding, off-hours.
  Keep them away from core data screens.
- **Trust surfaces:** no character on billing, payment, legal or error-recovery screens.
- **Surveillance framing:** do not give Hjálmurinn a watching or inspecting role.
  Eyes watching workers is exactly the wrong reading, so the hat looks after the wearer and never at them.
- **Iceland fit:** the humour is deadpan and dry, with understatement and comfortable gallows humour ([Iceland Unwrapped](https://icelandunwrapped.com/the-unique-humor-of-icelanders-dry-dark-and-delightfully-quirky/), undated, BACKGROUND).
  Weather, darkness, gravel roads and "þetta reddast" are shared ground.
  Avoid exclamation marks, confetti and American cheer.

## 5. Concrete recommendations

### Bíllinn (van)
- **Personality:** first on site, last to leave, never complains; the quiet one who has seen everything.
- **Construction:** a large rounded rectangle with a smaller rounded rectangle for the cab; wheels are circles.
  **Eyes in the windscreen.**
- **Signature pose:** parked at three-quarter view, slightly nose-down, as if settled in.
- **Signature behaviour:** a suspension "exhale" (a 4% squash plus one rock) on arrival.
  Headlights come on as an eye blink in darkness.
- **States:** idle, attentive, off-duty, content, and a "cold morning" variant (lids low plus frost).

### Kassinn (toolbox)
- **Personality:** meticulous and ready; everything has its place.
- **Construction:** a rounded-rectangle body, a rounded-triangle lid and a handle arc.
  **The eyes peek from the gap under the lid**, so **the lid is the eyelid.**
- **Signature pose:** lid cracked open about 15%, eyes just visible.
- **Signature behaviour:** a lid-lift peek when a job starts, and the lid clicks shut with a tiny settle when the job closes.
- **States:** attentive, thinking, content, surprised (lid pops).

### Hjálmurinn (hard hat)
- **Personality:** the steady one; says "go home in one piece" without ever preaching.
- **Construction:** a circle dome and a rounded-rectangle brim.
  **The brim works as the brow**, and the eyes sit just under it.
- **Signature pose:** hung on a nail at day's end, tilted.
- **Signature behaviour:** a brim tilt as a nod of acknowledgement.
- **States:** idle, content, worried (brim down), off-duty.
- **Do not:** point, scold, or inspect anyone.

### Nótan (supplier receipt)
- **Personality:** remembers every screw; mildly anxious about getting lost, and relieved once it is logged.
  This is the product's value proposition in character form.
- **Construction:** a tall narrow rounded rectangle with a **torn zigzag bottom** made of small triangles.
  Line-items are ink bars, and the eyes sit in the header.
- **Signature pose:** curled at one corner.
- **Signature behaviour:** flutters when found, then flattens smooth when logged (the most squash-and-stretch in the cast).
- **States:** worried (crumpled), surprised, content (flat), celebrating (a single flap).

### On social

- **Frequency:** a character in about 1 of 3-4 posts.
  Use a single character in most posts, and the full cast only for milestones such as season change or year-end.
- **Composition:**
  - The character sits at the frame edge or bottom third at a consistent scale, with its gaze leading toward the headline.
  - Leave the ink or concrete background mostly empty, and use orange sparingly as the single accent.
- **Recurring situations:** 07:40 dark mornings, rain, the last job before Christmas, lost receipts in the glovebox.
  Each post is one beat with one dry line.
- **Consistency:** stills render from the same parameter poses as the web engine.
  Keep a locked pose library and never redraw a character freehand.

### Don't list

- No mouths, teeth, arms, hands, thumbs-up, winks or blush.
- No speech bubbles that deliver sales copy (the character is not a spokesperson).
- No characters watching, counting or timing a person.
- No characters on money, errors, legal or payment screens.
- No continuous idle motion, bouncy multi-wobble springs or confetti.
- No new characters without a job-role reason and a silhouette test.
- No human workers turned into cartoons; the people stay real, in photos.
- No off-palette colours, gradients or outlines per character.
