# PLAN-0083: One mascot rig, art as data

- **Status:** proposed
- **Date:** 2026-09-24
- **Origin:** PK 2026-09-24, on the Sporbók cast: "use the same package as we are doing inside git/yarnkin and also for oddur ... to give the characters more life".
  PLAN-0078 made the creature engine single-source; a second character family has since been built outside it.

## Problem

There are now two creature engines and a third on the way.

- `@outofcow/creatures` (2.0.1) runs Oddur and the model crew.
  Its eleven creatures are drawn per kind in code: the `CreatureKind` union, JSX branches in `CreatureRestPose.tsx`, per-kind accents in `accents.ts`, and `.fc-kind-*` colours.
  A new character means editing the package.
- Yarnkin could not add its fox, bear, owl and rabbit as data, so it re-implemented the rig in `yarnkin/web/src/web/components/creatures/` (commit `abe5195d`).
  That port is a better fit for brand casts: art is SVG layers in a 240 × 300 viewBox, eyes are a round ball with wrapping lids and a lash, and a new mascot is pure data (`mascot-art.ts`).
- Sporbók now has a four-object cast (Bíllinn, Kassinn, Hjálmurinn, Nótan) drawn on that same data model.
  The brand-kit proposal runs it on a vanilla copy of the Yarnkin rig, which is exactly the fork PLAN-0078 exists to prevent.

The drift is the same shape PLAN-0078 found: one lineage in three repos, each fix made three times, and the lineage credits (GrokBot BSD-3-Clause, Moodie MIT) present in one copy and missing in another.

## Goal

`@outofcow/creatures` 3.0 carries two faces of one engine:

- `Creature` stays as it is: Oddur and the crew, drawn per kind, curved-surface eyes.
- A new `Mascot` takes its art as data: `<Mascot art={ART} behaviour="skrad" look={{ x, y }} />`.
  Yarnkin and Sporbók keep their drawings, behaviour vocabularies and rhythms in their own repos and import the rig.

Both share one frame loop, one pointer and attention scheduler, one reduced-motion watcher, and one visibility pause.

## Design

1. **Art type.** `MascotArt` from Yarnkin (`ground`, `accent`, `accentFront`, `below`, `above`, `overlay`, `eye`, `lidFill`, `mouth?`, `poseOrigin`, `accentOrigin`), extended with what the Sporbók cast needed:
   - `mouth` optional (Sporbók has none),
   - `hinge` (a layer that follows upper-lid travel; the toolbox lid),
   - `lamp` elements that dim as the eyes shut (the van),
   - `rotateScale` and `lean` (weight: a van rocks, it does not tip).
2. **Expressions and behaviours are inputs, not package constants.**
   The package exports the shared expression table and cues; a consumer passes its own behaviour pools and per-character rhythm.
   Yarnkin's `bedtime` and Sporbók's `fri` both stay in their repos.
3. **Rules the rig enforces, learned in Yarnkin and Sporbók:**
   - the eyeball never changes shape,
   - the lower lid never follows a downward gaze,
   - lid coupling is normalised by eye radius and capped,
   - a raised lower lid never pairs with an upward look (an eye-roll),
   - the white sits 0.9 units inside the clip,
   - a shut eye draws a lash.
4. **A pure rest renderer.** `renderMascot(art, { mood, look }) -> string` returns the SVG for a still.
   The OutOfCow media step and any brand-kit page render social artwork from it, so a post and the product cannot drift.
5. **SSR safety.** Fix the Yarnkin port's gaps on the way in: no `window` read during render, eyes positioned in the server markup, and the 2.0.1 reduced-motion watcher.
6. **Attribution.** Add `NOTICE` with the GrokBot BSD-3-Clause and Moodie MIT notices; the package README lineage section already names both.

## Steps

1. Land `Mascot` in `packages/creatures` with Yarnkin's four animals as the test fixture, plus rig tests (lid geometry, the eye-roll guard, reduced motion holds the pose).
2. Publish 3.0.0; Yarnkin deletes its port and imports the package.
3. Sporbók (`available`) adds its cast art under `src/web/brand/cast/` and uses `Mascot` on empty states, onboarding, a finished job and the off-duty screen.
4. The OutOfCow social media step renders posts with `renderMascot` and uploads them to Postiz (PLAN-0001 in postiz-app, backlog item 5).

## Not in scope

- Redrawing Oddur or the crew as data.
- Rive or Lottie. The 2026-09-24 research brief and Yarnkin's own study both keep hand-built SVG plus springs: one parameter set drives the web frame and the still.

## Rollback

`Creature` is untouched, so reverting 3.0 in a consumer is a dependency pin back to 2.0.1 plus restoring that consumer's previous component.
