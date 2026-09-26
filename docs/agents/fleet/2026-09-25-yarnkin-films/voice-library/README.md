# Voice library

Every voice take recorded for the Sporbók and Yarnkin films (144 takes, 2026-09-24 to 2026-09-26), numbered S001-S079 (Sporbók) and Y080-Y144 (Yarnkin).
`index.html` is the listening page (open it in a browser from this folder; filters by brand and delivery, stars kept per browser); hosted copy: https://claude.ai/artifact/W9syQcJZbSni5aJLyMbxeF.
`catalog.json` has each take's voice, text, direction, note, and measured delivery (voiced and breath share, and the WTD E35 character: full, soft, breathy, whisper).
The MP3s are normalised to -18 LUFS for comparing; the original TTS outputs were scratch files.
`build.py` regenerates the library from a scratch tree of takes.
