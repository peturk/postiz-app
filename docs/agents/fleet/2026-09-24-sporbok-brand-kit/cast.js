/*
 * Sporbók cast: four work objects on the Yarnkin mascot rig.
 *
 * Lineage: the rig is a vanilla port of yarnkin/web/src/web/components/creatures
 * (Mascot.tsx, expressions.ts, behaviour.ts, useCreatureLoop.ts), which ports the
 * OutOfCow creature engine (@outofcow/creatures). That engine carries GrokBot's
 * state-pool model and blink curve (nasawz, BSD-3-Clause) and Moodie's expression
 * numbers (MIT). The drawings below are original Sporbók art.
 *
 * v3 (2026-09-24, operator: "more expressive and happier, like the animals"):
 * - Structural mouths. Each mouth is a part the object already has: the van's
 *   grille bends into a smile, the toolbox smiles from the dark gap under its
 *   lid, the hard hat above its reflective strip, the receipt under its header.
 *   Mouths are asymmetric (Duolingo's rule): a lopsided smile reads alive, a
 *   symmetric one reads printed.
 * - Smiling shut eyes. An eye closed from BELOW draws its seam as an upward arc
 *   (^^, the Duchenne squeeze); an eye closed from above keeps the sleepy "u".
 * - A friendly resting face: pupils sit a touch high and off-centre, the lower
 *   lid is slightly up, the mouth is a soft smile.
 * - Body acting: one-shot body cues (hop with anticipation, hum, nod, wiggle,
 *   jolt), scaled by each object's material so a van never bounces like a ball.
 * - A second glint ("sparkle") on warm expressions.
 * - Á vakt is content concentration: eyes on the work, a small eye-smile, a
 *   quiet hum. The v2 version, lowered lids over a downward stare, read as
 *   misery.
 */
(function (root) {
  "use strict";

  var INK = "#111418";
  var VIEWBOX = "0 0 240 300";

  /* ---------------------------------------------------------------- art -- */

  var ART = {
    van: {
      name: "Bíllinn",
      /* Weight: a van rocks on its suspension, it does not tip or bounce. */
      rotateScale: 0.3,
      material: { squash: 0.35, lift: 0.45 },
      eye: { cx: 120, cy: 135, gap: 33, r: 21 },
      lidFill: "#16222C",
      lashInk: "#6B7785",
      smileInk: "#C5CBD2",
      /* The grille is the mouth: a flat bar at rest, a smile when pleased. */
      mouth: { at: [120, 227], s: 1.25, ink: "#0E1B24", width: 8 },
      poseOrigin: [120, 262],
      accentOrigin: [120, 150],
      fx: { spark: [206, 70], drop: [198, 104], z: [200, 62] },
      ground:
        '<rect x="22" y="284" width="196" height="10" rx="5" fill="var(--cast-shadow, #C9CFD6)"/>'
        + '<rect x="42" y="236" width="46" height="54" rx="15" fill="' + INK + '"/>'
        + '<rect x="152" y="236" width="46" height="54" rx="15" fill="' + INK + '"/>',
      /* Mirrors sit low on short arms at the windscreen's corners. Up at
         mid-height they were ears, and the van read as a robot. */
      accent:
        '<rect x="14" y="166" width="14" height="6" rx="3" fill="#1B3A4E"/>'
        + '<rect x="2" y="150" width="16" height="30" rx="6" fill="#234C66"/>'
        + '<rect x="212" y="166" width="14" height="6" rx="3" fill="#1B3A4E"/>'
        + '<rect x="222" y="150" width="16" height="30" rx="6" fill="#234C66"/>',
      below:
        '<rect x="66" y="56" width="108" height="14" rx="7" fill="#1B3A4E"/>'
        + '<rect x="24" y="68" width="192" height="194" rx="46" fill="#2C5F7F"/>'
        + '<rect x="24" y="190" width="192" height="18" fill="#FF5A1F"/>'
        + '<rect x="24" y="197" width="192" height="5" fill="#C5CBD2"/>'
        + '<rect x="44" y="88" width="152" height="90" rx="30" fill="#16222C"/>',
      above:
        /* Cool white lamps: gold belongs to Oddur. */
        '<circle class="lamp-glow" cx="60" cy="229" r="19" fill="#EEF3F6" opacity=".35"/>'
        + '<circle class="lamp-glow" cx="180" cy="229" r="19" fill="#EEF3F6" opacity=".35"/>'
        + '<circle class="lamp" cx="60" cy="229" r="12" fill="#EEF3F6"/>'
        + '<circle class="lamp" cx="180" cy="229" r="12" fill="#EEF3F6"/>'
        + '<rect x="30" y="248" width="180" height="11" rx="5.5" fill="#1B3A4E"/>'
    },

    box: {
      name: "Kassinn",
      rotateScale: 0.5,
      material: { squash: 0.5, lift: 0.7 },
      eye: { cx: 120, cy: 166, gap: 30, r: 17 },
      lidFill: "#0E1114",
      lashInk: "#6B7785",
      smileInk: "#C5CBD2",
      /* It smiles from inside: the mouth sits in the dark gap under the lid. */
      mouth: { at: [120, 197], s: 1.2, ink: "#C5CBD2", fillInk: "#2A3038", width: 4.5 },
      poseOrigin: [120, 280],
      accentOrigin: [120, 280],
      fx: { spark: [206, 84], drop: [200, 118], z: [204, 88] },
      /* The lid drops by `travel` as the upper lid closes: a blink is a tiny
         clack, and off duty the box is simply shut. */
      hinge: { travel: 44, rest: 0.1 },
      ground: '<rect x="30" y="284" width="180" height="10" rx="5" fill="var(--cast-shadow, #C9CFD6)"/>',
      below:
        '<rect x="28" y="160" width="184" height="122" rx="22" fill="#3B434D"/>'
        + '<rect x="28" y="248" width="184" height="7" fill="#2E353E"/>'
        + '<rect x="28" y="264" width="184" height="8" fill="#FF5A1F"/>'
        + '<rect x="38" y="144" width="164" height="64" rx="18" fill="#0E1114"/>',
      /* A toolbox, not a briefcase: a low, wide handle and a latch at each
         end. One tall handle over a centre clasp is office luggage. */
      above:
        '<g class="hinge">'
        + '<rect x="64" y="72" width="14" height="36" rx="7" fill="#FF5A1F"/>'
        + '<rect x="162" y="72" width="14" height="36" rx="7" fill="#FF5A1F"/>'
        + '<rect x="64" y="70" width="112" height="15" rx="7.5" fill="#FF5A1F"/>'
        + '<rect x="22" y="98" width="196" height="56" rx="18" fill="#4B5460"/>'
        + '<rect x="40" y="98" width="160" height="3" rx="1.5" fill="#C5CBD2"/>'
        + '<rect x="22" y="136" width="196" height="8" fill="#3F4852"/>'
        + '<rect x="38" y="140" width="28" height="16" rx="5" fill="#C5CBD2"/>'
        + '<rect x="174" y="140" width="28" height="16" rx="5" fill="#C5CBD2"/>'
        + "</g>"
    },

    hat: {
      name: "Hjálmurinn",
      material: { squash: 0.6, lift: 0.8 },
      eye: { cx: 120, cy: 170, gap: 32, r: 18 },
      lidFill: "#FF5A1F",
      mouth: { at: [120, 200], s: 1, ink: INK, width: 5.5 },
      poseOrigin: [120, 250],
      accentOrigin: [120, 250],
      fx: { spark: [200, 100], drop: [196, 134], z: [198, 96] },
      /* Option: the reflective strip itself bends into the smile. */
      band: { x1: 34, x2: 206, y: 219, ink: "#C5CBD2", width: 10 },
      ground: '<rect x="30" y="284" width="180" height="10" rx="5" fill="var(--cast-shadow, #C9CFD6)"/>',
      below:
        '<path d="M34 176 A86 86 0 0 1 206 176 L206 238 L34 238 Z" fill="#FF5A1F"/>'
        + '<rect x="108" y="80" width="24" height="62" rx="12" fill="#E24D14"/>'
        /* Side ribs are meridians that lean in toward the crown, high on the
           dome. Low and leaning out they sat exactly where angry brows go. */
        + '<rect x="72" y="98" width="12" height="32" rx="6" fill="#E24D14" transform="rotate(24 78 114)"/>'
        + '<rect x="156" y="98" width="12" height="32" rx="6" fill="#E24D14" transform="rotate(-24 162 114)"/>'
        + '<rect x="34" y="214" width="172" height="10" fill="#C5CBD2"/>',
      above:
        '<rect x="10" y="228" width="220" height="26" rx="13" fill="#D8460F"/>'
    },

    note: {
      name: "Nótan",
      rotateScale: 1.3,
      material: { squash: 1.2, lift: 1.1 },
      eye: { cx: 120, cy: 88, gap: 27, r: 17 },
      lidFill: "#D5DAE0",
      mouth: { at: [120, 121], s: 0.95, ink: INK, width: 4.5 },
      poseOrigin: [120, 280],
      accentOrigin: [120, 226],
      accentScale: 0.45,
      lean: -4,
      fx: { spark: [184, 40], drop: [180, 70], z: [184, 32] },
      ground: '<rect x="62" y="284" width="116" height="10" rx="5" fill="var(--cast-shadow, #C9CFD6)"/>',
      below:
        '<rect x="66" y="36" width="108" height="206" rx="14" fill="#F7F8FA"/>'
        + '<rect x="66" y="36" width="108" height="10" rx="5" fill="#E3E7EB"/>'
        + '<path d="M152 36 L174 36 L174 58 Z" fill="#E6E9EC"/>'
        /* Sockets: white eyes on white paper read as two black dots. */
        + '<circle cx="93" cy="88" r="20" fill="#D5DAE0"/>'
        + '<circle cx="147" cy="88" r="20" fill="#D5DAE0"/>'
        + '<path d="M152 36 L174 58 L158 58 Q152 58 152 52 Z" fill="#D5DAE0"/>'
        + '<rect x="84" y="142" width="72" height="7" rx="3.5" fill="#C5CBD2"/>'
        + '<rect x="84" y="158" width="50" height="7" rx="3.5" fill="#C5CBD2"/>'
        + '<rect x="84" y="174" width="62" height="7" rx="3.5" fill="#C5CBD2"/>'
        + '<rect x="84" y="190" width="40" height="7" rx="3.5" fill="#C5CBD2"/>'
        + '<rect x="84" y="210" width="72" height="11" rx="5.5" fill="#FF5A1F"/>',
      /* The torn tail: rounded triangles on a spring, so paper follows through. */
      accent:
        '<path d="M66 236 L174 236 L174 262 L162 274 L148 262 L134 274 L120 262 L106 274 L92 262 L78 274 L66 262 Z" fill="#F7F8FA" stroke="#F7F8FA" stroke-width="3" stroke-linejoin="round"/>'
        + '<rect x="66" y="232" width="108" height="10" fill="#F7F8FA"/>'
    }
  };

  /* ------------------------------------------------------------ mouths -- */

  /* Drawn around (0,0), 1 unit = 1 viewBox unit before the art's scale.
     Every open curve leans to one side on purpose. */
  var MOUTHS = {
    flat: { d: "M-12 1 L12 0" },
    soft: { d: "M-11 -1 Q0 6.5 11.5 -1.5" },
    small: { d: "M-6 0 Q-1 5 6 -1" },
    grin: { d: "M-15 -3 Q0 12 15.5 -3.5" },
    /* A filled, open smile: the one shape allowed to leave the line. */
    beam: { d: "M-12 -2.5 Q0 -0.5 12.5 -3 Q11.5 9.5 0.5 10.5 Q-10.5 9.5 -12 -2.5 Z", fill: true },
    o: { d: "M-5 1 a5 6 0 1 0 10 0 a5 6 0 1 0 -10 0", fill: true },
    wavy: { d: "M-12 2 Q-6 -3 0 2 Q6 7 12 1" },
    frown: { d: "M-11 5 Q1 -4 12 4" },
    side: { d: "M-9 1 Q2 3 11 -3" },
    /* A wobbly half-smile: embarrassed, not guilty. */
    sheepish: { d: "M-10 1 Q-3 4.5 2 1.5 Q6 -0.5 10 1.5" }
  };

  /* How far the hard hat's reflective strip bows for each mouth (+ = smile). */
  var BAND = { flat: 0, soft: 7, small: 4, grin: 12, beam: 16, o: 1, wavy: "wave", frown: -6, side: "side", sheepish: 3 };

  /* ------------------------------------------------------- expressions -- */

  function lids(u, ua, d, da) { return { u: u, ua: ua || 0, d: d || 0, da: da || 0 }; }

  /*
   * lids: upper travel, upper angle (+ = inner corner down), lower travel,
   * lower angle. gaze in eye radii (- up). mouth from MOUTHS. sparkle: second
   * glint. body: a one-shot body cue played on arrival.
   */
  var EXPRESSIONS = {
    /* Resting face, warm: a touch of lower lid with the outer corners up, the
       pupils a touch high, a soft smile. Friendly before anything happens. */
    neutral: { eye: 1, gaze: [0.08, -0.12], lids: lids(0.05, -3, 0.15, 8), pupil: 1.05, mouth: "soft", pose: {} },
    calm: { eye: 1, gaze: [-0.08, -0.04], lids: lids(0.08, -3, 0.2, 8), pupil: 1.02, mouth: "soft", pose: { rotate: -1 } },
    /* On duty, content: the eye narrows from BELOW (a working eye-smile), the
       upper lid stays up, the gaze is on the job but never at the bottom of the
       socket, and the body leans in. Rule: in working states u <= 0.15 and
       d >= 0.1, or it turns into the v2 misery. */
    content: { eye: 1, gaze: [0.1, -0.14], lids: lids(0.02, -3, 0.34, 10), pupil: 1.08, mouth: "soft", pose: { rotate: 3 } },
    /* On duty, checking: open, scanning, a small intent angle, still smiling. */
    busy: { eye: 1.02, gaze: [-0.26, 0.34], lids: lids(0.05, -2, 0.26, 8), lidsRight: lids(0.03, -2, 0.28, 8), pupil: 1.04, mouth: "small", pose: { rotate: -2 } },
    curious: { cue: "notice", eye: 1.06, gaze: [0.34, -0.12], lids: lids(0.08, -6, 0.06), lidsRight: lids(0, 0, 0.06), pupil: 1.12, mouth: "small", pose: { rotate: 6 } },
    alert: { cue: "doubleTake", eye: 1.07, gaze: [0, -0.1], lids: lids(0, 0, 0.08, 4), pupil: 1.06, mouth: "small", pose: { scaleY: 1.015, y: -3 } },
    happy: { eye: 1.03, gaze: [0, -0.1], lids: lids(0, -5, 0.4, 12), pupil: 1.1, mouth: "grin", sparkle: true, bright: 0.12, pose: { rotate: 3, y: -4 } },
    /* An open-eyed smile. Raised lower lids read as a smile on the van and
       the hat, but on the receipt (grey lids on white paper) and the toolbox
       (the lid already crops the eyes) they read as ghost eyes or a smug
       squint, and generated in-betweens turn them into half-lids. */
    glad: { eye: 1.05, gaze: [0, -0.12], lids: lids(0, -3, 0.1, 8), pupil: 1.12, mouth: "grin", sparkle: true, bright: 0.14, pose: { rotate: 3, y: -4 } },
    proud: { eye: 1.05, gaze: [0.1, -0.34], lids: lids(0, -2, 0.36, 12), pupil: 1.1, mouth: "grin", mouthScale: 1.1, sparkle: true, bright: 0.12, pose: { rotate: -5, scaleY: 1.03, y: -6 } },
    /* Joy: shut from below into ^^, the upper lid stays open. A hop and
       sparkles. The one place the open smile is allowed. */
    joy: { eye: 1.02, gaze: [0, -0.1], lids: lids(0.04, -5, 1, 12), pupil: 1.1, mouth: "beam", sparkle: true, bright: 0.22, body: "hop", spark: true, pose: { scaleY: 1.02, y: -5 } },
    /* Thanks / fondness: a soft squeeze from below, a lean in. */
    fond: { eye: 1, gaze: [0, -0.3], lids: lids(0, -4, 0.44, 12), pupil: 1.12, mouth: "soft", sparkle: true, bright: 0.1, body: "nod", pose: { rotate: 4, y: -2 } },
    thinking: { eye: 1.02, gaze: [0.46, -0.18], lids: lids(0.1, -4, 0.1), lidsRight: lids(0.16, -7, 0.08), pupil: 1.06, mouth: "side", pose: { rotate: -5 } },
    surprised: { cue: "recoil", eye: 1.12, gaze: [0, -0.04], lids: lids(0, -4), pupil: 0.84, mouth: "o", body: "jolt", pose: { scaleY: 1.03, y: -4 } },
    /* Oops: sheepish, not sad. A look away, a flat mouth, one sweat drop. */
    oops: { eye: 1, gaze: [0.46, -0.06], lids: lids(0.08, -3, 0.36, 10), pupil: 1.02, mouth: "sheepish", drop: true, body: "wiggle", pose: { rotate: 5, scaleY: 0.98 } },
    worried: { eye: 1.01, gaze: [0.22, 0.18], lids: lids(0.14, -14, 0.08), pupil: 1.04, mouth: "wavy", drop: true, pose: { scaleY: 0.985, y: 2 } },
    sad: { eye: 1.01, gaze: [0, 0.3], lids: lids(0.3, -12, 0.04), pupil: 1.08, mouth: "frown", pose: { rotate: -3, scaleY: 0.985, y: 5 } },
    /* Drowsy: heavy LEVEL lids, a little lower lid, a soft smile. For films,
       where a generator interpolates from open eyes: any lid angle on the way
       down tips into a V scowl in the in-betweens, so falling asleep uses this. */
    drowsy: { eye: 0.98, gaze: [0, 0.04], lids: lids(0.42, 0, 0.02), pupil: 1.02, mouth: "soft", pose: { rotate: -1, y: 2 } },
    sleepy: { cue: "droop", eye: 0.96, gaze: [0, 0.3], lids: lids(0.62, -8, 0.04), pupil: 0.95, mouth: "small", pose: { rotate: -2, y: 3 } },
    /* Relieved: shut from above with a smile, no z. The job is done. */
    relieved: { eye: 0.98, gaze: [0, 0.2], lids: lids(0.9, -8, 0.3, -2), pupil: 1, mouth: "soft", pose: { rotate: 2, y: 1 } },
    /* Off duty, the only "u": shut from above, a small content smile, a z. */
    asleep: { eye: 0.96, gaze: [0, 0.3], lids: lids(0.9, -8, 0.3, -2), pupil: 0.95, mouth: "small", zzz: true, pose: { rotate: -2, scaleY: 0.985, y: 4 } }
  };

  var CUES = {
    doubleTake: { d: 0.76, o: [1, 1, 1, 1, 1, 1], r: [0, 2, 1, -2, 0.5, 0], sy: [1, 1.08, 1.02, 0.98, 1.01, 1], t: [0, 0.14, 0.3, 0.52, 0.75, 1], x: [0, 7, 7, -4, 1, 0], y: [0, -1, -1, 0.5, -0.2, 0] },
    droop: { d: 0.92, o: [1, 0.9, 0.76, 0.8, 0.95, 1], r: [0, 1, 2, 1.5, 0.5, 0], sy: [1, 0.78, 0.68, 0.72, 0.92, 1], t: [0, 0.2, 0.42, 0.62, 0.82, 1], x: [0, 0, 0, 0, 0, 0], y: [0, 3.5, 5, 4, 1, 0] },
    glance: { d: 0.62, o: [1, 1, 1, 1], r: [0, -1.2, 0.8, 0], sy: [1, 1.03, 1.01, 1], t: [0, 0.22, 0.62, 1], x: [0, -6, 4, 0], y: [0, -0.8, 0.4, 0] },
    notice: { d: 0.48, o: [1, 1, 1, 1], r: [0, -1.5, 0.7, 0], sy: [1, 1.18, 1.1, 1], t: [0, 0.28, 0.64, 1], x: [0, 0, 0, 0], y: [0, -2.8, -1.2, 0] },
    recoil: { d: 0.56, o: [1, 1, 1, 1, 1], r: [0, 0, 0, 0, 0], sy: [1, 1.22, 0.9, 1.04, 1], t: [0, 0.16, 0.38, 0.68, 1], x: [0, 0, 0, 0, 0], y: [0, 2, 4, -1, 0] },
    squint: { d: 0.46, o: [1, 1, 1, 1], r: [0, 0.8, -0.4, 0], sy: [1, 0.68, 0.82, 1], t: [0, 0.32, 0.68, 1], x: [0, 0, 0, 0], y: [0, 1.6, 0.6, 0] }
  };

  /* Body cues: y in viewBox units, r in degrees, sx/sy as scale. Scaled per
     object by `material` (squash for sx/sy, lift for y and r). */
  var BODY_CUES = {
    /* Anticipation dip, lift, land with a small squash, settle. */
    hop: { d: 0.72, t: [0, 0.16, 0.4, 0.62, 0.8, 1], y: [0, 5, -18, 0, 2, 0], r: [0, 0, -2, 1, 0, 0], sx: [1, 1.05, 0.96, 1.05, 0.99, 1], sy: [1, 0.93, 1.06, 0.94, 1.02, 1] },
    /* A quiet working hum: lean one way, then the other, then home. */
    /* Humming while working: three quick bobs (about 1.8 Hz) with a slight
       rock, the stand-in for whistling at the job. */
    hum: { d: 1.65, t: [0, 0.17, 0.33, 0.5, 0.67, 0.83, 1], y: [0, -4, 0, -4, 0, -4, 0], r: [0, 1.5, 0, -1.5, 0, 1.5, 0], sx: [1, 0.99, 1.01, 0.99, 1.01, 0.99, 1], sy: [1, 1.02, 0.985, 1.02, 0.985, 1.02, 1] },
    nod: { d: 0.5, t: [0, 0.35, 0.7, 1], y: [0, 4, -1, 0], r: [0, 1.5, -0.5, 0], sx: [1, 1.02, 1, 1], sy: [1, 0.97, 1.01, 1] },
    wiggle: { d: 0.7, t: [0, 0.15, 0.35, 0.55, 0.75, 1], y: [0, -2, -3, -2, -1, 0], r: [0, -5, 5, -3, 1.5, 0], sx: [1, 1, 1, 1, 1, 1], sy: [1, 1.02, 1.02, 1.01, 1, 1] },
    jolt: { d: 0.5, t: [0, 0.18, 0.5, 1], y: [0, -8, 1, 0], r: [0, 0, 0, 0], sx: [1, 0.96, 1.02, 1], sy: [1, 1.06, 0.98, 1] }
  };

  function sampleCue(track, key, u) {
    var t = track.t, v = track[key];
    for (var i = 0; i < t.length - 1; i++) {
      if (u <= t[i + 1]) {
        var k = (u - t[i]) / Math.max(1e-6, t[i + 1] - t[i]);
        k = k * k * (3 - 2 * k);
        return v[i] + (v[i + 1] - v[i]) * k;
      }
    }
    return v[v.length - 1];
  }

  /* -------------------------------------------------------- behaviours -- */

  /* Sporbók's vocabulary: a working day. `bodyBeat` plays on some mood
     changes (`bodyChance`), so a state has rhythm without a loop. */
  var BEHAVIOURS = {
    idle: { blink: 1.15, cadence: [6, 11], moods: ["neutral", "calm", "curious", "content"], label: "Í biðstöðu" },
    /* Mostly content, sometimes checking, and a glance up at you that smiles. */
    avakt: { blink: 1, cadence: [3, 5.5], moods: ["content", "busy", "content", "happy"], bodyBeat: "hum", bodyChance: 0.55, label: "Á vakt" },
    skrad: { blink: 0.9, cadence: [2.2, 4], moods: ["joy", "happy", "proud", "fond"], bodyBeat: "nod", bodyChance: 0.35, label: "Skráð" },
    bidur: { beat: "glance", blink: 1, cadence: [2.4, 4.2], moods: ["curious", "thinking", "neutral"], label: "Bíður" },
    hissa: { blink: 0.8, cadence: [1.8, 3], moods: ["surprised", "alert", "curious", "happy"], label: "Hissa" },
    ahyggjur: { blink: 1.1, cadence: [3.6, 6], moods: ["worried", "oops", "thinking"], label: "Úps" },
    fagnar: { blink: 0.8, cadence: [1.6, 2.6], moods: ["joy", "happy", "joy", "proud"], bodyBeat: "wiggle", bodyChance: 0.5, label: "Fagnar" },
    fri: { blink: 9, cadence: [60, 90], moods: ["asleep"], label: "Frí" }
  };

  var RHYTHMS = {
    van: { blink: [3.6, 8], breath: 1.4, pace: 1.3 },
    box: { blink: [2.6, 6], breath: 0.6, pace: 1 },
    hat: { blink: [3, 7], breath: 0.9, pace: 1.1 },
    note: { blink: [1.8, 4.2], breath: 2.2, pace: 0.8 }
  };

  var IDLE_CUES = ["glance", "notice"];

  /* ------------------------------------------------------------ loop -- */

  var subs = [];
  var raf = 0, last = 0, clock = 0;
  /* Manual mode: a renderer owns time. No rAF, no pointer; `step(dt)` advances
     every live cast member by exactly dt, so a video frame is reproducible. */
  var manual = false;
  function frame(ms) {
    var now = ms / 1000;
    var dt = last ? Math.min(0.05, now - last) : 1 / 60;
    last = now; clock += dt;
    for (var i = 0; i < subs.length; i++) subs[i](clock, dt);
    raf = subs.length ? requestAnimationFrame(frame) : 0;
  }
  function start() {
    if (manual) return;
    if (!raf && subs.length && typeof document !== "undefined" && !document.hidden) { last = 0; raf = requestAnimationFrame(frame); }
  }
  function stop() { if (raf) { cancelAnimationFrame(raf); raf = 0; } }
  if (typeof document !== "undefined") {
    document.addEventListener("visibilitychange", function () { if (document.hidden) stop(); else start(); });
  }

  var pointer = { speed: 0, x: -9999, y: -9999 };
  var bound = false;
  function bindPointer() {
    if (bound || typeof window === "undefined") return;
    bound = true;
    var lx = -9999, ly = -9999;
    window.addEventListener("pointermove", function (e) {
      var dx = e.clientX - lx, dy = e.clientY - ly;
      pointer.speed = Math.sqrt(dx * dx + dy * dy) * 60;
      lx = e.clientX; ly = e.clientY; pointer.x = e.clientX; pointer.y = e.clientY;
    }, { passive: true });
  }
  function reducedMotion() {
    try { return window.matchMedia("(prefers-reduced-motion: reduce)").matches; } catch (e) { return false; }
  }

  /* ------------------------------------------------------------- rig -- */

  var uidSeq = 0;
  function lerp(a, b, f) { return a + (b - a) * f; }
  function rand(a, b) { return a + Math.random() * (b - a); }
  function clamp01(v) { return v < 0 ? 0 : v > 1 ? 1 : v; }
  function setAttrs(el, attrs) { if (!el) return; for (var k in attrs) el.setAttribute(k, attrs[k].toFixed(2)); }

  function markup(kind, uid) {
    var art = ART[kind];
    var eyes = ["L", "R"].map(function (side) {
      return '<g class="sb-eye" data-side="' + side + '">'
        + '<defs><clipPath id="sb-' + uid + "-" + side + '"><circle class="ball" cx="0" cy="0" r="10"/></clipPath></defs>'
        + '<circle class="white" cx="0" cy="0" r="10" fill="#fff"/>'
        + '<g clip-path="url(#sb-' + uid + "-" + side + ')">'
        + '<ellipse class="pupil" cx="0" cy="0" rx="9" ry="9" fill="' + INK + '"/>'
        + '<ellipse class="glint" cx="0" cy="0" rx="3" ry="3" fill="#fff"/>'
        + '<ellipse class="glint2" cx="0" cy="0" rx="1.5" ry="1.5" fill="#fff" opacity="0"/>'
        + '<circle class="lidU" cx="0" cy="0" r="10" fill="' + art.lidFill + '"/>'
        + '<circle class="lidD" cx="0" cy="0" r="10" fill="' + art.lidFill + '"/>'
        + "</g>"
        + '<path class="lash" d="" fill="none" stroke="' + (art.lashInk || INK) + '" stroke-linecap="round" opacity="0"/>'
        + "</g>";
    }).join("");
    var m = art.mouth;
    var useBand = art.band && root.SporbokCast && root.SporbokCast.options.hatBand;
    var mouth = useBand
      ? '<path class="sb-band" d="" fill="none" stroke="' + art.band.ink + '" stroke-width="' + art.band.width + '" stroke-linecap="butt"/>'
      : m
      ? '<g class="sb-mouth" transform="translate(' + m.at[0] + " " + m.at[1] + ") scale(" + m.s + ')">'
        + '<path d="" fill="none" stroke="' + m.ink + '" stroke-width="' + (m.width / m.s).toFixed(2) + '" stroke-linecap="round" stroke-linejoin="round"/></g>'
      : "";
    return (art.ground || "")
      + '<g class="sb-body" style="transform-origin:' + art.poseOrigin[0] + "px " + art.poseOrigin[1] + 'px">'
      + (art.accent && kind !== "note" ? '<g class="sb-accent">' + art.accent + "</g>" : "")
      + art.below
      + (kind === "note" ? '<g class="sb-accent">' + art.accent + "</g>" : "")
      + eyes + mouth + (art.above || "")
      + fxMarkup(art)
      + "</g>";
  }

  /* Emanata: one element per cue, shown only at peaks. A four-point sparkle
     pair, a sweat drop, a z. Hidden unless the expression asks. */
  function fxMarkup(art) {
    if (!art.fx) return "";
    var sp = art.fx.spark, dr = art.fx.drop, z = art.fx.z;
    function star(x, y, r2) {
      return '<path d="M' + x + " " + (y - r2) + " Q" + (x + r2 * 0.18) + " " + (y - r2 * 0.18) + " " + (x + r2) + " " + y
        + " Q" + (x + r2 * 0.18) + " " + (y + r2 * 0.18) + " " + x + " " + (y + r2)
        + " Q" + (x - r2 * 0.18) + " " + (y + r2 * 0.18) + " " + (x - r2) + " " + y
        + " Q" + (x - r2 * 0.18) + " " + (y - r2 * 0.18) + " " + x + " " + (y - r2) + ' Z" fill="#FF5A1F"/>';
    }
    return '<g class="sb-fx-spark" opacity="0" style="transform-origin:' + sp[0] + "px " + sp[1] + 'px">'
      + star(sp[0], sp[1], 11) + star(sp[0] + 18, sp[1] + 18, 6) + "</g>"
      + '<path class="sb-fx-drop" opacity="0" d="M' + dr[0] + " " + (dr[1] - 10) + " Q" + (dr[0] + 8) + " " + (dr[1] + 2) + " " + dr[0] + " " + (dr[1] + 6)
      + " Q" + (dr[0] - 8) + " " + (dr[1] + 2) + " " + dr[0] + " " + (dr[1] - 10) + ' Z" fill="#8FB6CF"/>'
      + '<path class="sb-fx-z" opacity="0" d="M' + (z[0] - 7) + " " + (z[1] - 7) + " L" + (z[0] + 7) + " " + (z[1] - 7) + " L" + (z[0] - 7) + " " + (z[1] + 7) + " L" + (z[0] + 7) + " " + (z[1] + 7)
      + '" fill="none" stroke="#8A96A3" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>';
  }

  function makeState(mood) {
    return {
      accRot: 0, accVel: 0, attention: "wander", attentionReady: 0, attentionUntil: 0,
      blinkAt: 0, blinkStart: -9, cue: null, cueAt: -1, body: null, bodyAt: -1,
      eyes: [{ d: 0, da: 0, es: 1, p: 1, u: 0.1, ua: 0 }, { d: 0, da: 0, es: 1, p: 1, u: 0.1, ua: 0 }],
      gazeX: 0, gazeY: 0, idleCueAt: 0, lookX: 0, lookY: 0,
      mood: mood, moodGazeX: 0, moodGazeY: 0, next: 0, sparkle: 0, bright: 0, fxSpark: 0, fxDrop: 0, fxZ: 0,
      phase: Math.random() * Math.PI * 2,
      pose: { rotate: 0, scaleX: 1, scaleY: 1, y: 0 }, started: false
    };
  }

  function blinkAmount(s, t, atRest) {
    /* Keyframes for generated video never catch a blink: a pinned mid-blink
       frame forces slit eyes into the clip. */
    if (atRest || (root.SporbokCast && root.SporbokCast.options.noBlink)) return 0;
    /* A blink is open, then shut for 0.1 s, then open: no in-betweens. At
       30 fps a ramped blink landed on half-shut frames, and a half lid under
       a mood's tilted lids reads as a glare. */
    var bt = t - s.blinkStart;
    return bt >= 0 && bt < 0.1 ? 1 : 0;
  }

  function drawFrame(svg, kind, s, t, dt, breathAmp, atRest) {
    var art = ART[kind];
    var preset = EXPRESSIONS[s.mood];
    var targets = [preset.lids, preset.lidsRight || preset.lids];
    var f = atRest ? 1 : Math.min(1, dt * 7.5);
    /* A sideways glance under a lower-lid smile reads as smug side-eye, so a
       strong sideways look caps the lower lid. Like the eye-roll guard below,
       this is a rule of the rig, not a choice any timeline has to remember. */
    var sideways = Math.abs(s.lookX) > 0.35 && !(preset.lids.u > 0.5);
    for (var i = 0; i < 2; i++) {
      var c = s.eyes[i], g = targets[i];
      var gd = sideways ? Math.min(g.d, 0.14) : g.d;
      c.u = lerp(c.u, g.u, f); c.ua = lerp(c.ua, g.ua, f);
      c.d = lerp(c.d, gd, f); c.da = lerp(c.da, g.da, f);
      c.p = lerp(c.p, preset.pupil, f); c.es = lerp(c.es, preset.eye, f);
    }
    s.moodGazeX = lerp(s.moodGazeX, preset.gaze[0], f);
    s.moodGazeY = lerp(s.moodGazeY, preset.gaze[1], f);
    s.sparkle = lerp(s.sparkle, preset.sparkle ? 1 : 0, f);
    s.bright = lerp(s.bright, preset.bright || 0, f);
    s.fxSpark = lerp(s.fxSpark, preset.spark ? 1 : 0, atRest ? 1 : Math.min(1, dt * 5));
    s.fxDrop = lerp(s.fxDrop, preset.drop ? 1 : 0, atRest ? 1 : Math.min(1, dt * 5));
    /* A z drifts in slowly while falling asleep, and is gone the moment the
       eyes open: a z over open eyes contradicts the face. */
    s.fxZ = lerp(s.fxZ, preset.zzz ? 1 : 0, atRest ? 1 : Math.min(1, dt * (preset.zzz ? 2 : 12)));

    var lookScale = art.eye.r;
    if (!atRest && manual) {
      s.gazeX += (s.lookX * lookScale + Math.cos(t * 0.5 + s.phase) * 3 - s.gazeX) * Math.min(1, dt * 6);
      s.gazeY += (s.lookY * lookScale + Math.sin(t * 0.37 + s.phase * 1.7) * 2 - s.gazeY) * Math.min(1, dt * 6);
    } else if (!atRest) {
      var box = svg.getBoundingClientRect();
      var cx0 = box.left + box.width / 2, cy0 = box.top + box.height * 0.42;
      pointer.speed *= 0.86;
      if (pointer.speed > 40 && t > s.attentionReady && s.mood !== "asleep") {
        var pdx = pointer.x - cx0, pdy = pointer.y - cy0;
        if (Math.sqrt(pdx * pdx + pdy * pdy) < 260) { s.attention = "pointer"; s.attentionUntil = t + rand(1.5, 2.5); }
      }
      if (s.attention === "pointer" && t > s.attentionUntil) { s.attention = "wander"; s.attentionReady = t + rand(1.4, 3.4); }
      var tx = s.attention === "pointer"
        ? Math.max(-1, Math.min(1, (pointer.x - cx0) / 260)) * 4.5
        : s.lookX * lookScale + Math.cos(t * 0.5 + s.phase) * 3;
      var ty = s.attention === "pointer"
        ? Math.max(-1, Math.min(1, (pointer.y - cy0) / 260)) * 3.5
        : s.lookY * lookScale + Math.sin(t * 0.37 + s.phase * 1.7) * 2;
      s.gazeX += (tx - s.gazeX) * Math.min(1, dt * 6);
      s.gazeY += (ty - s.gazeY) * Math.min(1, dt * 6);
    } else {
      /* Stills honour `look`, so a composed post can aim the cast at its headline.
         A raised lower lid under an upward look is an eye-roll, so a still that
         smiles with its lids keeps its gaze level. */
      s.gazeX = s.lookX * lookScale;
      s.gazeY = (preset.lids.d > 0.2 ? Math.max(0, s.lookY) : s.lookY) * lookScale;
    }

    var blink = blinkAmount(s, t, atRest);
    var wraps = svg.querySelectorAll(".sb-eye");
    var baseR = art.eye.r;
    var uSum = 0;

    for (var k = 0; k < wraps.length && k < 2; k++) {
      var wrap = wraps[k], e = s.eyes[k];
      var cueX = 0, cueY = 0, cueLid = 0, cueO = 1;
      if (s.cue && !atRest) {
        var track = CUES[s.cue];
        var el = t - s.cueAt - (k === 1 ? 0.022 : 0);
        if (el >= 0 && el <= track.d) {
          var uu = el / track.d;
          cueX = sampleCue(track, "x", uu); cueY = sampleCue(track, "y", uu);
          cueLid = (1 - sampleCue(track, "sy", uu)) * 0.85; cueO = sampleCue(track, "o", uu);
        } else if (el > track.d && k === 1) { s.cue = null; }
      }
      var side = k === 0 ? -1 : 1, lidSide = -side;
      var R = baseR * e.es, LR = R * 2.05;
      var cx = art.eye.cx + side * art.eye.gap, cy = art.eye.cy;
      var gazeDown = Math.max(0, s.gazeY) / baseR, gazeUp = Math.max(0, -s.gazeY) / baseR;
      var upper = clamp01(e.u + cueLid + Math.min(0.2, gazeDown * 0.95) - Math.min(0.1, gazeUp * 0.5));
      var u = Math.max(upper, blink);
      var d = clamp01(e.d + Math.min(0.08, gazeUp * 0.25));
      /* A heavy upper lid never meets a raised lower lid: squeezed from both
         sides a round eye becomes pointed slits, a glare, which is what every
         drowsy or calm look turned into once it also looked down. Shut eyes
         (both lids past the middle) are exempt: that is a closed eye, not a slit. */
      if (u > 0.22 && u < 0.8) d = Math.min(d, 0.06);
      var drop = u * R * 0.26 - d * R * 0.24;
      var pr = R * 0.46 * e.p;
      var px = cx + s.gazeX + s.moodGazeX * R + cueX * 0.55;
      var py = cy + s.gazeY + s.moodGazeY * R + drop + cueY * 0.55;
      /* An open eye never hides the top of its pupil under the lid: that is an
         eye-roll, and it read as sarcasm in every still that looked up. */
      if (u < 0.6) {
        var lidEdge = cy - R + u * (2 * R + LR * 0.06);
        py = Math.max(py, lidEdge + pr + R * 0.1);
      }
      setAttrs(wrap.querySelector(".pupil"), { cx: px, cy: py, rx: pr, ry: pr });
      setAttrs(wrap.querySelector(".glint"), { cx: px - pr * 0.32, cy: py - pr * 0.34, rx: pr * 0.33, ry: pr * 0.33 });
      var g2 = wrap.querySelector(".glint2");
      setAttrs(g2, { cx: px + pr * 0.4, cy: py + pr * 0.4, rx: pr * 0.12, ry: pr * 0.12 });
      g2.setAttribute("opacity", s.sparkle.toFixed(3));
      setAttrs(wrap.querySelector(".ball"), { cx: cx, cy: cy, r: R });
      var shut = clamp01((u + d - 0.9) / 0.14);
      var white = wrap.querySelector(".white");
      setAttrs(white, { cx: cx, cy: cy, r: Math.max(0, R - 0.9) });
      white.setAttribute("opacity", (1 - shut).toFixed(3));
      var lidU = wrap.querySelector(".lidU");
      /* A heavy lid flattens: a small steep arc over half an eye leaves a
         pointed bowl that reads as a glare; a flatter edge reads as sleep. */
      var LRu = u > 0.45 && u < 0.85 ? LR * (1 + 2.2 * Math.min(1, (u - 0.45) / 0.25)) : LR;
      setAttrs(lidU, { cx: cx, cy: cy - R - LRu + u * (2 * R + LRu * 0.06), r: LRu });
      lidU.setAttribute("transform", "rotate(" + (e.ua * lidSide * Math.min(1, u / 0.18)).toFixed(2) + " " + cx + " " + cy + ")");
      var lidD = wrap.querySelector(".lidD");
      setAttrs(lidD, { cx: cx, cy: cy + R + LR - d * (2 * R + LR * 0.06), r: LR });
      lidD.setAttribute("transform", "rotate(" + (e.da * lidSide * Math.min(1, d / 0.18)).toFixed(2) + " " + cx + " " + cy + ")");
      var lash = wrap.querySelector(".lash");
      if (shut <= 0) { lash.setAttribute("opacity", "0"); }
      else {
        var travel = 2 * R + LR * 0.06;
        var ye = ((cy - R + u * travel) + (cy + R - d * travel)) / 2;
        var sag = LR - Math.sqrt(Math.max(0, LR * LR - R * R));
        /* Shut from below is a smile (^^): the seam is the top of the lower
           lid, so it arcs up. Shut from above is sleep: it sags down. */
        var smile = d > u;
        if (smile) { sag = -sag * 1.6; ye += R * 0.12; }
        var w = R * 0.86;
        lash.setAttribute("d", "M" + (cx - w).toFixed(2) + " " + (ye - sag).toFixed(2) + " Q" + cx.toFixed(2) + " " + (ye + sag).toFixed(2) + " " + (cx + w).toFixed(2) + " " + (ye - sag).toFixed(2));
        lash.setAttribute("stroke-width", (R * (smile ? 0.2 : 0.16)).toFixed(2));
        lash.setAttribute("stroke", smile ? (art.smileInk || INK) : (art.lashInk || INK));
        lash.setAttribute("opacity", (shut * 0.95).toFixed(3));
        lash.setAttribute("transform", "rotate(" + (e.ua * lidSide * Math.min(1, u / 0.18)).toFixed(2) + " " + cx + " " + cy + ")");
      }
      wrap.setAttribute("opacity", cueO.toFixed(3));
      uSum += u;
    }

    /* Mouth. */
    var band = svg.querySelector(".sb-band");
    if (band) {
      var bm = BAND[preset.mouth || "soft"], B = art.band, mid = (B.x1 + B.x2) / 2, dPath;
      if (bm === "wave") {
        dPath = "M" + B.x1 + " " + B.y + " C" + (mid - 40) + " " + (B.y - 6) + " " + (mid - 20) + " " + (B.y + 6) + " " + mid + " " + B.y
          + " S" + (mid + 60) + " " + (B.y - 6) + " " + B.x2 + " " + B.y;
      } else if (bm === "side") {
        dPath = "M" + B.x1 + " " + B.y + " Q" + (mid + 30) + " " + (B.y + 9) + " " + B.x2 + " " + (B.y - 2);
      } else {
        dPath = "M" + B.x1 + " " + B.y + " Q" + mid + " " + (B.y + bm * 2) + " " + B.x2 + " " + B.y;
      }
      band.setAttribute("d", dPath);
    }
    var mouthG = svg.querySelector(".sb-mouth path");
    if (mouthG) {
      var shape = MOUTHS[preset.mouth || "soft"];
      var ms = art.mouth.s * (preset.mouthScale || 1);
      mouthG.parentNode.setAttribute("transform", "translate(" + art.mouth.at[0] + " " + art.mouth.at[1] + ") scale(" + ms + ")");
      mouthG.setAttribute("stroke-width", (art.mouth.width / ms).toFixed(2));
      mouthG.setAttribute("d", shape.d);
      /* Light-on-dark mouths draw an open mouth as a dark hole with a light
         rim; a solid light fill read as a tooth. */
      mouthG.setAttribute("fill", shape.fill ? (art.mouth.fillInk || art.mouth.ink) : "none");
    }

    /* Object hooks. */
    var uAvg = uSum / 2;
    if (art.hinge) {
      var hinge = svg.querySelector(".hinge");
      var drop2 = Math.max(0, uAvg - art.hinge.rest) / (1 - art.hinge.rest) * art.hinge.travel;
      hinge.setAttribute("transform", "translate(0 " + drop2.toFixed(2) + ")");
    }
    /* Lamps follow the UPPER lid only: a happy squint from below keeps them on. */
    var lampOn = 1 - clamp01((uAvg - 0.6) / 0.28);
    var fxS = svg.querySelector(".sb-fx-spark");
    if (fxS) {
      var tw = atRest ? 1 : 0.85 + 0.15 * Math.sin(t * 9);
      fxS.setAttribute("opacity", s.fxSpark.toFixed(3));
      fxS.style.transform = "scale(" + (0.6 + 0.4 * s.fxSpark * tw).toFixed(3) + ")";
      svg.querySelector(".sb-fx-drop").setAttribute("opacity", (s.fxDrop * 0.95).toFixed(3));
      var zEl = svg.querySelector(".sb-fx-z");
      zEl.setAttribute("opacity", (s.fxZ * (atRest ? 0.9 : 0.55 + 0.35 * Math.sin(t * 1.2))).toFixed(3));
    }
    var lamps = svg.querySelectorAll(".lamp, .lamp-glow");
    for (var m = 0; m < lamps.length; m++) {
      var isGlow = lamps[m].getAttribute("class") === "lamp-glow";
      lamps[m].setAttribute("opacity", (isGlow ? Math.min(1, (0.35 + s.bright * 2.4) * lampOn) : 0.14 + 0.86 * lampOn).toFixed(3));
    }

    var pose = preset.pose;
    s.pose.rotate = lerp(s.pose.rotate, pose.rotate || 0, f);
    s.pose.scaleX = lerp(s.pose.scaleX, pose.scaleX || 1, f);
    s.pose.scaleY = lerp(s.pose.scaleY, pose.scaleY || 1, f);
    s.pose.y = lerp(s.pose.y, pose.y || 0, f);
    var breath = atRest ? 0 : Math.sin(t * (s.mood === "asleep" ? 0.7 : 1.2) + s.phase) * breathAmp;

    /* Body cue, scaled by material. */
    var by = 0, br = 0, bsx = 1, bsy = 1;
    var mat = art.material || { squash: 1, lift: 1 };
    if (s.body && !atRest) {
      var bc = BODY_CUES[s.body], be = t - s.bodyAt;
      if (be >= 0 && be <= bc.d) {
        var bu = be / bc.d;
        by = sampleCue(bc, "y", bu) * mat.lift;
        br = sampleCue(bc, "r", bu) * mat.lift;
        bsx = 1 + (sampleCue(bc, "sx", bu) - 1) * mat.squash;
        bsy = 1 + (sampleCue(bc, "sy", bu) - 1) * mat.squash;
      } else if (be > bc.d) { s.body = null; }
    }

    var body = svg.querySelector(".sb-body");
    body.style.transform = "translateY(" + (s.pose.y + breath + by).toFixed(2) + "px) rotate(" + ((s.pose.rotate + br) * (art.rotateScale || 1) + (art.lean || 0)).toFixed(2) + "deg) scale(" + (s.pose.scaleX * bsx).toFixed(3) + "," + (s.pose.scaleY * bsy).toFixed(3) + ")";

    var accents = svg.querySelectorAll(".sb-accent");
    if (accents.length) {
      var target = (-(s.pose.rotate + br) * 1.6 - (s.pose.y + breath + by) * 0.5) * (art.accentScale || 1);
      if (atRest) { s.accRot = target; s.accVel = 0; }
      else {
        var step = Math.min(dt, 0.033);
        var accel = (58 * (target - s.accRot) - 5.4 * s.accVel) / 1.2;
        s.accVel += accel * step; s.accRot += s.accVel * step;
      }
      for (var a = 0; a < accents.length; a++) {
        accents[a].style.transformOrigin = art.accentOrigin[0] + "px " + art.accentOrigin[1] + "px";
        accents[a].style.transform = "rotate(" + s.accRot.toFixed(2) + "deg)";
      }
    }
  }

  function enterMood(s, mood, score, t) {
    s.mood = mood;
    var ex = EXPRESSIONS[mood];
    var entry = ex.cue || (score && score.beat);
    if (entry) { s.cue = entry; s.cueAt = t; }
    var bodyCue = ex.body || (score && score.bodyBeat && Math.random() < (score.bodyChance || 0) ? score.bodyBeat : null);
    if (bodyCue) { s.body = bodyCue; s.bodyAt = t; }
  }

  /**
   * Mount a cast member into `host`.
   * opts: { behaviour, mood, look: {x,y}, live }
   * Returns a handle: { set(behaviour), setMood(mood), look(x,y), play(bodyCue), destroy() }.
   */
  function mount(host, kind, opts) {
    opts = opts || {};
    bindPointer();
    var uid = ++uidSeq;
    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", VIEWBOX);
    svg.setAttribute("aria-hidden", "true");
    svg.setAttribute("class", "sb-cast sb-" + kind + (opts.className ? " " + opts.className : ""));
    svg.style.overflow = "visible";
    svg.innerHTML = markup(kind, uid);
    host.appendChild(svg);

    var rhythm = RHYTHMS[kind];
    var behaviour = opts.behaviour || null;
    var s = makeState(opts.mood || (behaviour ? BEHAVIOURS[behaviour].moods[0] : "neutral"));
    if (opts.look) { s.lookX = opts.look.x; s.lookY = opts.look.y; }
    drawFrame(svg, kind, s, 0, 1 / 60, rhythm.breath, true);

    var live = opts.live !== false && (manual || !reducedMotion());
    function tick(t, dt) {
      var score = behaviour ? BEHAVIOURS[behaviour] : null;
      if (!s.started) {
        s.started = true;
        s.next = t + (score ? rand(score.cadence[0], score.cadence[1]) * rhythm.pace : 1e9);
        s.blinkAt = t + rand(rhythm.blink[0], rhythm.blink[1]);
        s.idleCueAt = t + rand(3, 7);
      }
      if (score) {
        if (t > s.next) {
          var pool = score.moods, pick = pool[Math.floor(Math.random() * pool.length)];
          while (pool.length > 1 && pick === s.mood) pick = pool[Math.floor(Math.random() * pool.length)];
          enterMood(s, pick, score, t);
          s.next = t + rand(score.cadence[0], score.cadence[1]) * rhythm.pace;
        }
        if (t > s.blinkAt) { s.blinkStart = t; s.blinkAt = t + rand(rhythm.blink[0], rhythm.blink[1]) * score.blink; }
        if (t > s.idleCueAt && behaviour !== "fri") {
          s.cue = IDLE_CUES[Math.floor(Math.random() * IDLE_CUES.length)]; s.cueAt = t; s.idleCueAt = t + rand(4, 9);
        }
      } else if (t > s.blinkAt) {
        s.blinkStart = t; s.blinkAt = t + rand(rhythm.blink[0], rhythm.blink[1]);
      }
      drawFrame(svg, kind, s, t, dt, rhythm.breath, false);
    }
    if (live) { subs.push(tick); start(); }

    function redraw() { if (!live) drawFrame(svg, kind, s, 0, 1 / 60, rhythm.breath, true); }
    return {
      svg: svg,
      set: function (b) {
        behaviour = b;
        var score = BEHAVIOURS[b];
        enterMood(s, score.moods[0], score, clock);
        s.next = clock + rand(score.cadence[0], score.cadence[1]) * rhythm.pace;
        redraw();
      },
      setMood: function (m) { behaviour = null; enterMood(s, m, null, clock); redraw(); },
      look: function (x, y) { s.lookX = x; s.lookY = y; redraw(); },
      play: function (cue) { s.body = cue; s.bodyAt = clock; },
      destroy: function () { var i = subs.indexOf(tick); if (i >= 0) subs.splice(i, 1); svg.remove(); }
    };
  }

  root.SporbokCast = {
    ART: ART, EXPRESSIONS: EXPRESSIONS, BEHAVIOURS: BEHAVIOURS, RHYTHMS: RHYTHMS, MOUTHS: MOUTHS,
    KINDS: ["van", "box", "hat", "note"], mount: mount, reducedMotion: reducedMotion,
    options: { hatBand: false, noBlink: false },
    manual: function (on) { manual = !!on; if (manual) stop(); },
    step: function (dt) { clock += dt; for (var i = 0; i < subs.length; i++) subs[i](clock, dt); },
    now: function () { return clock; }
  };
})(typeof window !== "undefined" ? window : this);
