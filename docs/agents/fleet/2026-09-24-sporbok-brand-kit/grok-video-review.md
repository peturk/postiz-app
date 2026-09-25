# Director's pass on the five renders

Watched every reel at half-second steps, the matching 1080x1350 cuts, and close frames on the turns.
Feed crops hold.
Captions, cards, the cup and the lineup all sit inside the 4:5 frame.
The shared fault is the end card.
`endCard()` (line 102) fades the whole card, background included, over 0.5s, so around endCard-time plus 0.2s the tagline is doubled on top of the characters.
Seen at 9.6s in fimm: "Þú vinnur verkið" sits across the van's windscreen.
Give the opaque card 3s.
Set each `return` to `endCard` time plus 3.5, and fade only after the scene has gone, or cut.
A second shared trap: a tween keeps writing its final value forever, and the later entry in the list wins.
That is why Nótan never reaches the job.

## VIDEOS.fimm (12s)

The beat lands late.
16:58 to 17:00 is the right clock, and the dark at 7s is the right button.
"Eitt enn." (line 165, 0.4-3.0s) dies a second before anyone sleeps, into an empty caption from 3.0s to 5.2s.
At 4.6s the box is already asleep with a Z, and the van and the hat are still awake and smiling.
The goodnight then cascades: box 4.3s, hat fond 4.8s, hat asleep 5.6s, van relieved 6.4s, van asleep 7.1s.
That fond look is the children's beat.
From 7.0s to 9.2s two lines are on screen at once.
"Vinnudegi lokið." is grammatical headline Icelandic, and it sounds like a poster.
"Sporbók slekkur á sér." is natural spoken Icelandic, and it is a product pitch in the scene.
At 7.4s all three sleep, which reads, and the van's headlights stay white under the Z.
Asleep in the rig does not kill the lamps, so the picture does not yet say "slokknar".
The clean card is only about 2s (9.9-12s).

1. Line 184, delete the caption "Sporbók slekkur á sér."
   Change line 183 to `caption(4.4, 9.2, "Slokknar eftir vakt.")` so one spoken line covers the snap and the dark hold.
2. Lines 169-174, collapse the goodnight into one cut at 4.3s: box, hat and van `setMood("asleep")` together.
   Delete the fond at 4.8s and the relieved van at 6.4s.
   Start the dark tween (line 175) at 4.3s, and hold the still sleep from 4.6s to 9.0s.
3. Line 165, extend "Eitt enn." to 4.2s so it is still up while the lid is open, and it leaves as the snap happens.
   Move line 187 to `endCard(9.2)` and line 188 to `return 12.7` so the opaque card holds 3s.

## VIDEOS.notan (11.5s)

"Undir sætinu aftur." is the best line in the set, and the seat geography at 1.2s is right.
The face under the seat is too small to read the worry on a phone (line 200, width 250).
The turn does not happen.
At 6.2s, with "Komin á rétt verk." and the joy sparkles up, the receipt is still on the floor to the left and Hafnarstræti 12 is floating on the right.
Line 227 is registered after the hop on lines 222-225, so every frame after 3.4s it pins the note back to `(300, FLOOR)` and the arc never sticks.
"Komin á rétt verk." is correct Icelandic (feminine, accusative of motion) and a little bookish.
The picture makes it untrue, so leave the words until the landing is real.
The kicker "Í bílnum · 07:52" is still up in the daylight at 4.8s and 6.2s, after the seat has gone.
Joy at 5.4s adds sparkles and a beam, and happy at 7.1s keeps the celebration through a 3.6s hold.
That is the kids' button, on a miss.

1. Delete the tween on line 227.
   That is the line that pins her to the floor and makes the payoff false from 5.5s to 8.8s.
2. Lines 222-225, replace the sine hop with a slide from 4.2s to 5.4s: x from 300 to 800, y from `FLOOR` to `FLOOR - 420`, rotation under 4 degrees, so she ends standing on the card the way tvo already does.
   Line 228, `setMood("relieved")`.
   Line 230, `setMood("content")`.
3. Line 200, raise the width from 250 to 420 so the oops face reads under the seat at 1s.
   At the 3.4s mark (line 226), set the kicker to "Hafnarstræti 12" so it stops saying "Í bílnum" once the seat lifts.

## VIDEOS.morgunn (10s)

The opening is the best thing in the film.
Asleep van, 07:39, frost line, moon, then the eyes open at 07:40 (1.3-2.3s).
Hold that.
The rest fights the brand.
"Mætt á verkstað." (line 254, from 2.2s) does not agree with the van.
The van is masculine, so a participle for the van would be "mættur", and "mætt" reads as a person texting that they clocked in.
"Enginn stimplaði sig inn." (line 261, from 4.6s) is natural Icelandic and it is worker scoring.
At 5.2s the van and the hat are smiling at each other under that sentence.
The hat enters from off the right edge: at 3.4s half of it is cut off (lines 256-259, the sine hop from x 1300).
Line 262 then calls `set("avakt")` at 5.4s.
In cast.js that behaviour cycles content, busy, happy and a hum, so the hold keeps performing.
Two caption lines sit together from 4.6s to 7.4s.
Do not post this cut.

1. Delete line 261.
   Change line 254 to `caption(2.2, 7.2, "Á staðnum 07:40.")`.
2. Delete the hop on lines 257-259.
   Place the hat at x 850, on the floor, from the first frame, mood content, eyes down.
   Delete the happy pair on line 260.
   At 2.6s the van goes to content and one nod.
3. Delete line 262.
   A still content hold from 3s to `endCard(7.6)` is the dawn.
   Move the card to 7.2s and `return 10.7` if you want the 3s opaque hold.

## VIDEOS.sunnudagur (12s)

The room is right.
Lamp colour, table, cup with no face, 22:14.
"Reikningurinn er tilbúinn." is natural and it is the right payoff.
The setup names the wrong document.
"Sunnudagskvöld. Tímaskýrslan." (line 274, 0.4-4.6s) is a timesheet, and the payoff is an invoice.
A bookkeeper will feel the mismatch.
"Tímaskýrslan" is real payroll Icelandic, used for the wrong noun.
At 2.4s five sweating, worried receipts fidget on the table, one of them jolting (lines 285-287).
That chorus belittles the paper pile, and it is the most childish frame in the set.
The cup is doing the adult work beside them.
From 4.7s to 5.5s an orange tape bar covers the frame.
At 5.05s the picture is the bar and a corner of the table.
Four receipts then vanish with `display: none` (line 291), and the kicker becomes "Sunnudagur · 22:14 · með Sporbók" (line 293).
The accent survives the uppercase, and the product name is in the scene anyway.
At 7.2s the surviving receipt is asleep with a Z under the invoice line.
Sleep plays the payoff as a faint.
Content is the button here.
Sleep belongs to fimm.

1. Line 274, change the caption to "Sunnudagskvöld." and keep the 0.4-4.6s window.
2. Delete the wipe tween on line 289 and the `display: none` loop on line 291.
   Open with one faced receipt and the cup.
   Drop the wiggle and jolt calls on lines 285-287.
   On line 293, stop at "Sunnudagur · 22:14".
3. Line 296, `setMood("content")` instead of asleep, and hold that face from 6.2s to the card at 9.1s.
   Move `endCard` to 9.0s and `return 12.5`.

## VIDEOS.tvo (11.5s)

This is the one cut where the beat lands in the picture.
She looks left, looks right, jolts, and by 6.4s she is standing on Hafnarstræti 12 with the orange bar, Laugavegur 88 left grey.
Both cards are fully inside the feed frame at 2.0s.
"Tvö verk. Ein nóta." is the right register for a builders' merchant.
"Nóta" belongs at that counter.
"Rétt verk. Sjálfkrafa." (line 328, 5.2-8.6s) is grammatical and it is the feature claim.
The smile upgrade at 6.0s (line 327) is the kids' button on an otherwise adult frame.
The nod at 5.0s is enough.
The arc on line 323 is a real hop: at 4.4s she is tilted up on the card rather than sliding onto it.
Pípulögn against Rafmagn splits the audience.
One crew does not carry both trades on one nóta.
The thinking hold from 0s to 3.4s is the right length.
The result hold to 8.8s can lose a second.

1. Line 328, change the caption to "Þetta verkið." and start it at 5.2s.
2. Delete line 327 so she stays on relieved after the nod at 5.0s.
   On line 323, drop the `Math.sin` term so y only eases from the floor up onto the card between 3.9s and 4.9s.
3. Line 316, change the Laugavegur subtitle from "Rafmagn" to "Pípulögn · eldhús" so both cards are the same trade.
   Move `endCard(8.8)` to 8.2s and `return 11.7`.

## Posting order

Post the current files in this order, and hold any film until its first change is in.

1. **tvo.** First post.
   The picture already tells the truth, both crops are safe, and a merchant counter is a Tuesday someone will send on.
   Change line 328 before it goes up.
2. **fimm.** Second, on a Friday.
   17:00 and the dark are the privacy promise without a lecture, once the second caption and the fond look are gone.
3. **notan.** Third, and only after line 227 is deleted.
   "Undir sætinu aftur." is the line people will forward.
   The current cut shows her missing the job while the caption says she arrived.
4. **sunnudagur.** Fourth, scheduled for a Sunday evening, after the chorus, the wipe and "Tímaskýrslan" are gone.
   The cup and 22:14 are already the right room.
5. **morgunn.** Last, and not at all while "Enginn stimplaði sig inn." is in the file.
   The dawn opening is worth keeping.
   The clock-in joke is the one frame that can cost trust.
