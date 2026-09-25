# Sporbók feature inventory for social films

Source: `/home/pk/git/available` at `5848493cb` (2026-09-20), plus live https://sporbok.is fetched 2026-09-25.
Paths below are relative to that repo.
Quotes that contain an em dash in the source are shown here with " - ", per the no-em-dash rule.

## 0. Headline corrections (read first)

- **There is no email receipt intake.** `kvittanir.sporbok.is` and `kvittanir@` appear nowhere in the repo or in postiz-app. Receipts come in as **a photo or PDF that the system reads** (`src/web/i18n/is/receipts.ts:73-77` "Sjálfvirk lesning", "Les kvittun…").
- **"Nóta sótt" is landing-page wording, not a real supplier feed.** The real mechanism is a detected supplier visit, then a one-tap stop prompt, then a photographed receipt that gets read and linked to a job.
- **Only Reiknís is live.** Payday and DK are shown as "Í undirbúningi" (`src/web/pages/landing/landing-content.ts:83-105`, and on the live site). The landing showcase animation still shows "Senda í Payday" and "Senda í DK" (`src/web/pages/showcase/cards/ConnectCard.tsx:63,103`). Films must not show a Payday or DK send as working.
- **"Reikningsdrög á 30 sekúndum" is not claimed anywhere public.** It appears only as an example in `docs/brand/tone-of-voice.md` §3. Don't use it.
- **The shipped app UI uses banned words:** "rakning", "Verkstjórar sjá staðsetningu þína", "fylgist með", "Vaktaður" and "Starfsfólk" (`mobile/androidApp/src/main/res/values-is/strings.xml:111,152,460-468`; `src/web/i18n/is/today.ts:907-917`; `src/web/i18n/is/nav.ts:17`). Never copy UI text into a film without checking it against §4.

## 1. A tradesperson's day, as the code implements it

1. **Shift start.** The worker taps "Hefja vakt" (strings.xml:110-112). A shift can also start automatically: while the app is open, a location fix at a job site where "sjálfvirk vaktbyrjun" is on starts the scheduled shift (strings.xml:18). The server decides this from the schedule, assignment and job zone (`src/server/application/shifts/automaticShiftEligibilityService.ts:40-44`).
2. **Arrival at a job site.** Each job has a zone (a circle or polygon, "Stofna verk hér", `src/web/pages/today/CLAUDE.md`). During a shift the phone sends location pings, and the **server decides** arrival and departure (`.claude/skills/load-bearing-decisions/SKILL.md`, "Server-side geofencing is authoritative"). The UI shows "Mætt 07:52" / "Mætt með GPS" / "Mætti í verk" / "Fór úr verki" (`src/web/i18n/is/today.ts:30-34,412,418`), plus the notification "Mætt á verkstað" (strings.xml:559).
3. **Time recorded.** Time on site at a job becomes a suggested time entry after 20 minutes of dwell, matched within 175 m (`src/server/application/field-evidence/fieldEvidenceSuggestionEngine.ts:11-15,97-99`). Hours are reviewed per day under "Yfirferð eftir dögum" (`src/web/i18n/is/shifts.ts:103`). The landing demo summary reads "2 klst. 10 mín. á staðnum · 22 mín. hjá birgja" (`src/web/components/showcase/living-worksite/LivingWorksiteShowcase.tsx:154`).
4. **Supplier visit.** There is a central catalogue of supplier stores (companies choose which ones to show). A visit longer than 5 minutes is detected. The code names **BYKO, Húsasmiðjan and Múrbúðin** (`fieldEvidenceSuggestionEngine.ts:80-83`), and receipt matching adds **Bauhaus and Slippfélagið** (`src/server/application/receipts/purchaseRelevanceService.ts:17`). The dock shows "Hjá BYKO · síðan 07:40" (`today.ts:897-900`). The worker gets a stop prompt: "Þú komst við hjá birgja - hvert var erindið?" with the choices "Sótti efni" / "Ekkert til að sækja" and "Kvittunarnúmer (valfrjálst)" (strings.xml:521-534). A materials line is suggested for that day's job.
5. **Receipt.** On "Ný kvittun" the worker takes or uploads a photo, and the system reads the supplier, amount and date. A match against the job's quote lines gives "Passar við verk" / "Ekki á verk" / "Yfirferð" (`receipts.ts:1-25`, `purchaseRelevanceService.ts:19-100`). Tabs are "Allar" / "Óreikningsfært". Receipts can be pushed to Reiknís (`src/services/AccountingClient.ts:272`, `ingestPurchaseDocument`).
6. **Invoice draft.** "Nýr reikningur" has four steps: "Velja verk → Velja viðskiptavin → Yfirfara línur → Senda" (`src/web/i18n/is/invoices.ts:122-127`). Line groups are labour from finished jobs, "Efni & kvittanir", and "Akstur" (built from GPS trip segments), plus "Aðrar línur / afsláttur" (`invoices.ts:79-111`, `src/server/application/invoices/billingSegmentsService.ts:19-23`). Invoices carry the "Drög" / "DRÖG" badge. The send is checked first, including kennitala and VAT (`invoiceReadiness.ts:1-9`).
7. **Accounting.** Reiknís write is enabled. DK and Payday writes are gated (`docs/roadmaps/2026-09-10-feature-completion-plan.md:74,113`).
8. **End of day and privacy.** The worker taps "Ljúka vakt", and the app says "Staðsetningarrakning stöðvast" (strings.xml:113-115). Off shift, the app shows "Utan vaktar" (strings.xml:107,460). The worker is notified "Vakt lokið með samantekt dagsins" (strings.xml:570). Any work outside the schedule becomes a question for the worker, "Yfirferð utan vinnutíma", answered "Ég var að vinna" / "Ég var ekki að vinna". It never creates hours automatically (strings.xml:515-519; `docs/adr/0017-after-hours-attendance-evidence.md`). The worker is notified "Einhver skoðaði staðsetningu þína" when someone views their location (strings.xml:551). Raw GPS points are deleted after 90 days (`src/server/application/privacy/locationRetentionPolicy.ts:3`). I found **no automatic shift end**.
9. **Equipment ("Búnaður", not "tæki").** Three types: "BLE merki", which phones on shift pick up so the item appears on the map automatically; "AirTag", entered by serial number with position set by hand; and "Handvirkt" (`today.ts:66-102`, strings.xml:481-499).
10. **Oddur.** Oddur is an assistant chat ("Láta Odd hjálpa", "Oddur aðstoðar við skráningu"). It drafts receipts and invoice lines, and nothing is written until the user confirms ("Staðfesta breytingu", "Bíður eftir staðfestingu þinni") (`src/web/i18n/is/ai.ts:29-47`). It needs a paid assistant seat.

## 2. Features: status, UI words and one visual

| Feature | Status | Icelandic UI words | Visual |
|---|---|---|---|
| Arrival at job site | Live on web and server. Native app is beta 0.1.11, still held for device acceptance (`docs/mobile-store-release-runbook.md:9-24`) | "Mætt 07:52", "Á vakt", "Mætti í verk" | Van enters a dashed circle, pin chip reads "Mætt 07:52" |
| Shift start/end | Live, beta app | "Hefja vakt", "Ljúka vakt", "Utan vaktar" | Toggle flips, a moon appears, the pin fades to grey |
| Supplier visit + stop prompt | Live | "Hjá BYKO", "Sótti efni" | Van at a store icon, one-tap chip "Sótti efni" |
| Receipt reading | Live. How accurate the reading is has not been verified | "Ný kvittun", "Les kvittun…", "Passar við verk" | Receipt character scanned by a line, fields fill in, flies onto the job card |
| Photos + checklist | Live | "2 verkmyndir", "Gátlisti 3/3" | Three checkmarks tick |
| Daily summary | Live | "Dagskrá tilbúin", "Yfirfara" | Timeline card assembles |
| Invoice draft | Live | "Drög", "Efni & kvittanir", "Akstur" | Three lines stack, and a total counts up |
| Reiknís send | Live, but the full finance journey has not been accepted end to end | "Senda í Reiknís", "Reikningur tilbúinn!" | Draft slides into a Reiknís-labelled tray |
| Payday / DK | Planned ("Í undirbúningi") | Show only the chip | Two greyed chips with a small clock |
| After-hours question | Live (ADR 0017 accepted) | "Ég var að vinna" | Two buttons, and the worker picks one |
| Equipment | Live on web. Beacon behaviour not verified on a physical device | "Búnaður", "BLE merki" | Toolbox pings, and a map dot appears |
| Oddur | Beta. The 2026-09-12 acceptance run failed and the fix is not deployed (`feature-completion-plan.md:110`) | "Láta Odd hjálpa", "Staðfesta breytingu" | Chat bubble, a proposed card, a confirm tap |
| Quotes with e-signature | Live | "Nýtt tilboð", "Senda tilboð til undirritunar?" | Quote with a signature squiggle |
| Works offline | Live | "Virkar án nets" | Cloud with a slash, a queue badge, then a sync tick |

## 3. Landing copy (repo and live site match)

- **H1:** "Frá mætingu til uppgjörs." (`hero-section.tsx:38-44`)
- **Subhead:** "Sporbók skráir viðveru og unnin verk. Reikningsdrög eru tilbúin við verklok." (`:48-51`)
- **Meta description:** "Mætingaskráning á verkstað og tilbúin reikningsdrög við verklok."
- **Chapters** (`landing-content.ts:25-41`):
  - "Hver verkstaður geymir sína vinnusögu." / "Sporbók man mætingar, birgjaferðir og nótur fyrir þig - engin skriffinnska eftir langan vinnudag."
  - "Oddur aðstoðar á verkstað" / "Oddur tekur saman tíma, sækir nótur og undirbýr reikningsdrög sjálfkrafa."
  - "Sjálfvirk reikningsgerð í bókhaldið" / "…í Reiknís, Payday og DK - tilbúið til uppgjörs." Note: this line contradicts the integration statuses on the same page.
- **Capabilities:** "Virkar án nets", "Gátlistar", "Myndir", "Kvittanir", "Tilboð", "Aðgangsstýring".
- **FAQ:** "Staðsetning er aðeins virk á vinnutíma og slekkur sjálfkrafa við vaktarlok. Frítíminn er algjörlega þinn."
- **CTA:** "Sækja um 14 daga prufu". Risk bullets: "Ekkert greiðslukort · Aðstoð við uppsetningu · Engar skuldbindingar" (`src/web/lib/conversion-contract.ts:53-55`).
- **Numbers claimed:** 14-day trial, and a reply within one working day. The demo figures (14.820 kr., 199.400 kr., "2 klst. 10 mín.") are illustrative and are not claims.

## 4. Words to avoid, and what to say instead (`docs/brand/tone-of-voice.md` §3)

| Avoid | Use instead |
|---|---|
| "rakning", "GPS rakning" | "sjálfvirk mæting", "staðfesting á viðveru", "vinnuminni" |
| "eftirlit", "fylgjast með" | "vinnusaga verkstaðar", "örugg sönnun unninna verka" |
| "starfsmaður/-menn" | "fólkið á verkstað", "teymið", "smiðurinn" |
| "stjórnandi", "verkstjóri", "verkstjórn" | "meistarinn", "skrifstofan", "utanumhald" |
| "flæði/vinnuflæði" | "vinnulag", "dagurinn gengur upp" |
| "byltingarkennt/ótrúlegt" | concrete facts |

- **Also avoid:** "Nóta sótt sjálfkrafa" as a literal claim, and any Payday or DK send.
- **Approved framing:** "Virkt á vakt - dautt í frítíma", "Þú vinnur verkið. Sporbók man söguna.", "Frítíminn er þinn."

## 5. Four film concepts (20 s each, new beat every ~2 s)

### A. "Mætt" (arrival and time)

| s | We see | On screen | Voiceover |
|---|---|---|---|
| 0-2 | Blue van drives at dawn | 07:48 | "Klukkan er tíu í átta." |
| 2-4 | Dashed circle around a house | Hafnarstræti 12 | "Verkstaðurinn bíður." |
| 4-6 | Van rolls inside the circle | Mætt 07:52 | "Þú mætir - Sporbók man það." |
| 6-8 | Orange hard hat pops on | Á vakt | "Enginn stimpill, engin skrifblokk." |
| 8-10 | Camera flash, three ticks | Gátlisti 3/3 | "Myndir og gátlisti á verkið." |
| 10-12 | Van leaves the circle | Fór 12:02 | "Þú ferð - það skráist líka." |
| 12-15 | Timeline card assembles | 4 klst. á staðnum | "Vinnusagan skrifar sig sjálf." |
| 15-18 | Hard hat nods at the card | Yfirfara | "Þú lítur yfir og staðfestir." |
| 18-20 | Logo | sporbok.is | "Frá mætingu til uppgjörs." |

### B. "Nótan" (supplier and receipt)

| s | We see | On screen | Voiceover |
|---|---|---|---|
| 0-2 | Receipt character crumples, scared, under a seat | - | "Þekkirðu krumpuðu nótuna?" |
| 2-4 | Van at a flat store icon | Hjá BYKO | "Þú kemur við hjá birgja." |
| 4-6 | Phone chip | Sótti efni | "Einn smellur: sótti efni." |
| 6-8 | Phone snaps the receipt | Ný kvittun | "Þú tekur mynd af nótunni." |
| 8-10 | Scan line, fields fill | Les kvittun… | "Sporbók les birgi og upphæð." |
| 10-13 | Receipt flies onto a job card | Passar við verk | "Og tengir hana réttu verki." |
| 13-16 | Receipt smiles, card shows | 14.820 kr. | "Ekkert efni gleymist að rukka." |
| 16-18 | Tab chip | Óreikningsfært: 0 | "Allt á sínum stað." |
| 18-20 | Logo | sporbok.is | "Þú vinnur verkið. Sporbók man söguna." |

### C. "Drögin" (invoice and Reiknís)

| s | We see | On screen | Voiceover |
|---|---|---|---|
| 0-2 | Toolbox lid closes | Verklok | "Verkinu er lokið." |
| 2-4 | Blank draft card | Drög | "Reikningsdrögin eru þegar byrjuð." |
| 4-6 | Line drops in | Vinna · 4,5 klst. | "Tíminn úr vinnusögunni." |
| 6-8 | Receipt drops in | Efni & kvittanir | "Efnið af nótunum." |
| 8-10 | Route line becomes a row | Akstur | "Aksturinn líka." |
| 10-13 | Total counts up | 199.400 kr. | "Þú ferð yfir línurnar." |
| 13-16 | Draft slides into a tray | Senda í Reiknís | "Beint í Reiknís." |
| 16-18 | Payday and DK chips, greyed | Í undirbúningi | "Payday og DK eru á leiðinni." |
| 18-20 | Logo | sporbok.is | "Engin kvöld við eldhúsborðið." |

### D. "Frítíminn er þinn" (privacy boundary)

| s | We see | On screen | Voiceover |
|---|---|---|---|
| 0-2 | Sunset, van leaves the job | 17:30 | "Vinnudegi lýkur." |
| 2-4 | Thumb taps a toggle | Ljúka vakt | "Þú lýkur vaktinni." |
| 4-6 | Pin fades to grey | Utan vaktar | "Staðsetning slokknar." |
| 6-8 | Summary card | Samantekt dagsins | "Dagurinn er skráður." |
| 8-11 | Van parks at home, moon | Frítíminn er þinn | "Kvöldið kemur vinnunni ekkert við." |
| 11-14 | Hard hat on a hook, zzz | Ótengt | "Engin saga utan vaktar." |
| 14-17 | Morning question card | Ég var að vinna? | "Unnið seint? Þú svarar sjálfur." |
| 17-20 | Logo | sporbok.is | "Virkt á vakt - dautt í frítíma." |

**Optional fifth film:** equipment. The toolbox pings, a map dot appears, and the on-screen text reads "Búnaður fundinn". Use it only with a "beta" framing, because beacon behaviour is not yet verified on a physical device.
