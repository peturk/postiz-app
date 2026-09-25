#!/usr/bin/env python3
# strip.py out.png [--crop y0:y1] img1 img2 ...  -> images side by side, each 300 px wide
import sys
from PIL import Image
args = sys.argv[1:]; out = args.pop(0); crop = None
if args and args[0] == "--crop":
    args.pop(0); y0, y1 = map(int, args.pop(0).split(":")); crop = (y0, y1)
ims = []
for f in args:
    im = Image.open(f).convert("RGB")
    if crop: im = im.crop((0, crop[0], im.width, crop[1]))
    ims.append(im.resize((300, int(im.height * 300 / im.width))))
W = sum(i.width for i in ims) + 6 * (len(ims) - 1); H = max(i.height for i in ims)
c = Image.new("RGB", (W, H), "white"); x = 0
for i in ims: c.paste(i, (x, 0)); x += i.width + 6
c.save(out)
