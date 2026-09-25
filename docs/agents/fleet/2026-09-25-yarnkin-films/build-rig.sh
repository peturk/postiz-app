#!/bin/sh
# Bundles the real Yarnkin <Mascot> (unchanged source, copied from the yarnkin
# repo at build time) with a two-function film harness: rig/yk-rig.js.
# Two app modules are stubbed: the theme hook (the timeline sets day or night)
# and cn (class joining). Needs a yarnkin checkout with web/node_modules.
set -e
YK="${YARNKIN:-$HOME/git/yarnkin}"
cd "$(dirname "$0")"
mkdir -p rig/src/web/components rig/src/web/hooks rig/src/web/lib
rm -rf rig/src/web/components/creatures
cp -r "$YK/web/src/web/components/creatures" rig/src/web/components/
cp "$YK/web/src/web/styles/creatures.css" rig/
ln -sfn "$YK/web/node_modules" rig/node_modules
cp harness/use-theme.ts rig/src/web/hooks/use-theme.ts
cp harness/utils.ts rig/src/web/lib/utils.ts
cp harness/entry.tsx harness/tsconfig.json rig/
cd rig && bun build entry.tsx --outfile yk-rig.js --target browser --minify --define 'process.env.NODE_ENV="production"'
