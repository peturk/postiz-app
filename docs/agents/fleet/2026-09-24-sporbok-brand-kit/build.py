import base64
s=open('index.src.html').read()
icon=base64.b64encode(open('/home/pk/git/available/public/brand/sporbok-icon.png','rb').read()).decode()
s=s.replace("__ICON__","data:image/png;base64,"+icon).replace("/*CAST*/",open('cast.js').read())
assert "__ICON__" not in s
open('index.html','w').write(s)
open('preview.html','w').write('<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head><body>'+s+'</body></html>')
print(len(s))
