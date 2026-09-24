# Sporbók brand kit and Áhöfnin, 2026-09-24

Second proposal for the Sporbók brand kit, published as a private artifact: https://claude.ai/artifact/AmSWmAMMrMcDYEQAQTqFYD
Status: proposal, waiting on the operator's picks (typeface, tagline, approval of the Vinnugalli palette and the cast).

## What is here

- `cast.js`: the Áhöfnin cast (Bíllinn, Kassinn, Hjálmurinn, Nótan) as art data plus a vanilla port of the Yarnkin mascot rig.
  Lineage and licences are in its header comment.
- `index.src.html`: the brand-kit page source; `build.py` inlines `cast.js` and the official icon into `index.html` and `preview.html`.
- `export.cjs`: renders the six social templates at full size and a 4 × 10 transparent pose library from the same rig, into `out/`.
- `sheet.html` and `sheetshot.cjs`: the character × state test sheet with the silhouette column.
- `research-object-mascots.md`: the dated prior-art brief the cast rules come from.
- `PLAN-0083-data-driven-mascot-rig.md`: draft plan for folding this rig into `@outofcow/creatures` so Yarnkin and Sporbók stop carrying forks; it lands in outofcow once the cast is approved.

## Reproduce

```bash
python3 build.py
node export.cjs
```

Outputs (`index.html`, `preview.html`, `out/`) are build products and are not committed.
The scripts load Playwright from `/home/pk/git/available/node_modules`, like the 2026-08-10 cover scripts; the rig itself has no dependencies.

## Design review

An independent design critique ran on the first render and all eight of its fixes were applied.
The main ones were a toolbox that read as a briefcase, hard-hat ribs that sat like angry brows, receipt eyes that vanished on paper, and upward looks that read as eye-rolls.
The rig now refuses the eye-roll: an open eye never hides the top of its pupil under the upper lid.
