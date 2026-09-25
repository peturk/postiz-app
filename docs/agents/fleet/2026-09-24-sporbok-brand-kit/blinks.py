# blinks.py <video> <x> <y> <w> <h> [from_s]: runs of frames where the eye region has no white (eyes gone)
import subprocess, sys, os, numpy as np
v,x,y,w,h=sys.argv[1],*map(int,sys.argv[2:6]); t0=float(sys.argv[6]) if len(sys.argv)>6 else 0
raw=subprocess.run([os.path.expanduser("~/.local/bin/ffmpeg"),"-loglevel","error","-i",v,"-vf",f"crop={w}:{h}:{x}:{y}","-f","rawvideo","-pix_fmt","gray","-"],capture_output=True).stdout
f=np.frombuffer(raw,np.uint8).reshape(-1,h,w); n=(f>200).sum(axis=(1,2))
base=np.median(n[int(t0*30):]); runs=[]; s=None
for i,c in enumerate(n):
  if i<t0*30: continue
  low=c<base*0.15
  if low and s is None: s=i
  if not low and s is not None: runs.append((round(s/30,2),i-s)); s=None
print("median white",int(base),"runs(t,frames):",runs)
