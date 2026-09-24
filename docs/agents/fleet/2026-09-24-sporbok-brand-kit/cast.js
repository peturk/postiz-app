/*
 * Sporbók cast: four work objects on the Yarnkin mascot rig.
 *
 * Lineage: the rig is a vanilla port of yarnkin/web/src/web/components/creatures
 * (Mascot.tsx, expressions.ts, behaviour.ts, useCreatureLoop.ts), which ports the
 * OutOfCow creature engine (@outofcow/creatures). That engine carries GrokBot's
 * state-pool model and blink curve (nasawz, BSD-3-Clause) and Moodie's expression
 * numbers (MIT). The drawings below are original Sporbók art.
 *
 * Differences from Yarnkin, all deliberate (research brief 2026-09-24):
 * - No mouths and no limbs. Adults read competence from eyes, lids and posture;
 *   a mouth is what tips an object character into a toy.
 * - Pupils are smaller (0.46 of the eye radius instead of 0.52): big pupils
 *   read young.
 * - Eyes sit where the object's own structure allows: in the van's windscreen,
 *   in the gap under the toolbox lid, above the hard hat's brim, in the
 *   receipt's header. Never a sticker on a flat side.
 * - Object hooks: the toolbox lid IS its upper eyelid (`hinge`), the van's
 *   lamps go dark as its eyes close (`lamp`), the receipt's torn tail lags on a
 *   spring (`accent`).
 * - `fri` (off duty) shuts every eye. The product promise "virkt á vakt, dautt í
 *   frítíma" performed by the cast.
 */
(function (root) {
  "use strict";

  var INK = "#111418";
  var VIEWBOX = "0 0 240 300";

  /* ---------------------------------------------------------------- art -- */

  var ART = {
    van: {
      name: "Bíllinn",
      /* Weight: a van rocks on its suspension, it does not tip. */
      rotateScale: 0.3,
      eye: { cx: 120, cy: 137, gap: 33, r: 21 },
      lidFill: "#16222C",
      poseOrigin: [120, 262],
      accentOrigin: [120, 150],
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
        '<circle class="lamp-glow" cx="62" cy="230" r="19" fill="#EEF3F6" opacity=".35"/>'
        + '<circle class="lamp-glow" cx="178" cy="230" r="19" fill="#EEF3F6" opacity=".35"/>'
        + '<circle class="lamp" cx="62" cy="230" r="12" fill="#EEF3F6"/>'
        + '<circle class="lamp" cx="178" cy="230" r="12" fill="#EEF3F6"/>'
        + '<rect x="96" y="223" width="48" height="13" rx="6.5" fill="#1B3A4E"/>'
        + '<rect x="30" y="246" width="180" height="12" rx="6" fill="#1B3A4E"/>'
    },

    box: {
      name: "Kassinn",
      rotateScale: 0.5,
      eye: { cx: 120, cy: 172, gap: 30, r: 18 },
      lidFill: "#0E1114",
      poseOrigin: [120, 280],
      accentOrigin: [120, 280],
      /* The lid drops by `travel` as the upper lid closes: a blink is a tiny
         clack, and off duty the box is simply shut. */
      hinge: { travel: 38, rest: 0.1 },
      ground: '<rect x="30" y="284" width="180" height="10" rx="5" fill="var(--cast-shadow, #C9CFD6)"/>',
      below:
        '<rect x="28" y="160" width="184" height="122" rx="22" fill="#3B434D"/>'
        + '<rect x="28" y="244" width="184" height="7" fill="#2E353E"/>'
        + '<rect x="28" y="262" width="184" height="8" fill="#FF5A1F"/>'
        + '<rect x="38" y="146" width="164" height="54" rx="16" fill="#0E1114"/>',
      above:
        /* A toolbox, not a briefcase: a low, wide handle and a latch at each
           end. One tall handle over a centre clasp is office luggage. */
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
      eye: { cx: 120, cy: 184, gap: 32, r: 19 },
      lidFill: "#FF5A1F",
      poseOrigin: [120, 250],
      accentOrigin: [120, 250],
      ground: '<rect x="30" y="284" width="180" height="10" rx="5" fill="var(--cast-shadow, #C9CFD6)"/>',
      below:
        '<path d="M34 182 A86 86 0 0 1 206 182 L206 238 L34 238 Z" fill="#FF5A1F"/>'
        + '<rect x="108" y="86" width="24" height="68" rx="12" fill="#E24D14"/>'
        /* Side ribs are meridians that lean in toward the crown, high on the
           dome. Low and leaning out they sat exactly where angry brows go. */
        + '<rect x="72" y="102" width="12" height="34" rx="6" fill="#E24D14" transform="rotate(24 78 119)"/>'
        + '<rect x="156" y="102" width="12" height="34" rx="6" fill="#E24D14" transform="rotate(-24 162 119)"/>'
        + '<rect x="34" y="212" width="172" height="11" fill="#C5CBD2"/>',
      above:
        '<rect x="10" y="228" width="220" height="26" rx="13" fill="#D8460F"/>'
    },

    note: {
      name: "Nótan",
      rotateScale: 1.3,
      eye: { cx: 120, cy: 92, gap: 27, r: 18 },
      lidFill: "#D5DAE0",
      poseOrigin: [120, 280],
      accentOrigin: [120, 226],
      accentScale: 0.45,
      lean: -4,
      ground: '<rect x="62" y="284" width="116" height="10" rx="5" fill="var(--cast-shadow, #C9CFD6)"/>',
      below:
        '<rect x="66" y="36" width="108" height="206" rx="14" fill="#F7F8FA"/>'
        + '<rect x="66" y="36" width="108" height="10" rx="5" fill="#E3E7EB"/>'
        + '<path d="M152 36 L174 36 L174 58 Z" fill="#E6E9EC"/>'
        /* Sockets: white eyes on white paper read as two black dots. */
        + '<circle cx="93" cy="92" r="21" fill="#D5DAE0"/>'
        + '<circle cx="147" cy="92" r="21" fill="#D5DAE0"/>'
        + '<path d="M152 36 L174 58 L158 58 Q152 58 152 52 Z" fill="#D5DAE0"/>'
        + '<rect x="84" y="128" width="72" height="7" rx="3.5" fill="#C5CBD2"/>'
        + '<rect x="84" y="146" width="50" height="7" rx="3.5" fill="#C5CBD2"/>'
        + '<rect x="84" y="164" width="62" height="7" rx="3.5" fill="#C5CBD2"/>'
        + '<rect x="84" y="182" width="40" height="7" rx="3.5" fill="#C5CBD2"/>'
        + '<rect x="84" y="206" width="72" height="11" rx="5.5" fill="#FF5A1F"/>',
      /* The torn tail: rounded triangles on a spring, so paper follows through. */
      accent:
        '<path d="M66 236 L174 236 L174 262 L162 274 L148 262 L134 274 L120 262 L106 274 L92 262 L78 274 L66 262 Z" fill="#F7F8FA" stroke="#F7F8FA" stroke-width="3" stroke-linejoin="round"/>'
        + '<rect x="66" y="232" width="108" height="10" fill="#F7F8FA"/>',
      edge: true
    }
  };

  /* ------------------------------------------------------- expressions -- */

  function lids(u, ua, d, da) { return { u: u, ua: ua || 0, d: d || 0, da: da || 0 }; }

  /* Yarnkin's numbers (from the engine, from Moodie), minus mouths, plus
     `asleep`. Poses are gentler: these are objects with weight. */
  var EXPRESSIONS = {
    alert: { cue: "doubleTake", eye: 1.06, gaze: [0, -0.06], lids: lids(0, 0), pupil: 1.06, pose: { scaleY: 1.015, y: -3 } },
    calm: { eye: 1, gaze: [0, 0.06], lids: lids(0.16, -3, 0.18), pupil: 0.98, pose: {} },
    curious: { eye: 1.04, gaze: [0.34, -0.18], lids: lids(0.12, 2), lidsRight: lids(0.02, -5), pupil: 1.08, pose: { rotate: 4 } },
    /* Concentration is a level, lowered lid with the gaze on the work. The
       engine's focused tilts the inner corners down, which on these big round
       eyes is a scowl at whoever is looking. */
    focused: { eye: 0.99, gaze: [0.12, 0.26], lids: lids(0.18, -3, 0.1), pupil: 0.98, pose: { rotate: -1 } },
    happy: { eye: 1.02, gaze: [0, -0.04], lids: lids(0.06, 0, 0.34), pupil: 1.02, pose: { y: -2 } },
    proud: { eye: 1.02, gaze: [0, -0.12], lids: lids(0.1, -2, 0.3), pupil: 1, pose: { scaleY: 1.02, y: -3 } },
    neutral: { eye: 1, gaze: [0, -0.08], lids: lids(0.08, 0, 0.08), pupil: 1, pose: {} },
    sad: { eye: 1.01, gaze: [0, 0.34], lids: lids(0.28, -18), pupil: 1.06, pose: { rotate: -3, scaleY: 0.985, y: 5 } },
    sleepy: { cue: "droop", eye: 0.96, gaze: [0, 0.5], lids: lids(0.62, -9, 0.44, -6), pupil: 0.95, pose: { rotate: -2, y: 3 } },
    asleep: { eye: 0.96, gaze: [0, 0.4], lids: lids(0.72, -6, 0.52, -4), pupil: 0.95, pose: { rotate: -2, scaleY: 0.985, y: 4 } },
    surprised: { cue: "recoil", eye: 1.14, gaze: [0, 0], lids: lids(0, 0), pupil: 0.74, pose: { scaleY: 1.03, y: -4 } },
    suspicious: { eye: 1, gaze: [-0.46, 0.02], lids: lids(0.3, 4, 0.14), lidsRight: lids(0.12, -4, 0.1), pupil: 0.98, pose: { rotate: -3 } },
    thinking: { eye: 1.02, gaze: [0.46, -0.18], lids: lids(0.14, -4), lidsRight: lids(0.2, -7), pupil: 1.06, pose: { rotate: -4 } },
    worried: { eye: 1, gaze: [0.22, 0.2], lids: lids(0.18, -14), pupil: 1.02, pose: { scaleY: 0.985, y: 2 } }
  };

  var CUES = {
    doubleTake: { d: 0.76, o: [1, 1, 1, 1, 1, 1], r: [0, 2, 1, -2, 0.5, 0], sy: [1, 1.08, 1.02, 0.98, 1.01, 1], t: [0, 0.14, 0.3, 0.52, 0.75, 1], x: [0, 7, 7, -4, 1, 0], y: [0, -1, -1, 0.5, -0.2, 0] },
    droop: { d: 0.92, o: [1, 0.9, 0.76, 0.8, 0.95, 1], r: [0, 1, 2, 1.5, 0.5, 0], sy: [1, 0.78, 0.68, 0.72, 0.92, 1], t: [0, 0.2, 0.42, 0.62, 0.82, 1], x: [0, 0, 0, 0, 0, 0], y: [0, 3.5, 5, 4, 1, 0] },
    glance: { d: 0.62, o: [1, 1, 1, 1], r: [0, -1.2, 0.8, 0], sy: [1, 1.03, 1.01, 1], t: [0, 0.22, 0.62, 1], x: [0, -6, 4, 0], y: [0, -0.8, 0.4, 0] },
    notice: { d: 0.48, o: [1, 1, 1, 1], r: [0, -1.5, 0.7, 0], sy: [1, 1.18, 1.1, 1], t: [0, 0.28, 0.64, 1], x: [0, 0, 0, 0], y: [0, -2.8, -1.2, 0] },
    recoil: { d: 0.56, o: [1, 1, 1, 1, 1], r: [0, 0, 0, 0, 0], sy: [1, 1.22, 0.9, 1.04, 1], t: [0, 0.16, 0.38, 0.68, 1], x: [0, 0, 0, 0, 0], y: [0, 2, 4, -1, 0] },
    squint: { d: 0.46, o: [1, 1, 1, 1], r: [0, 0.8, -0.4, 0], sy: [1, 0.68, 0.82, 1], t: [0, 0.32, 0.68, 1], x: [0, 0, 0, 0], y: [0, 1.6, 0.6, 0] }
  };

  function sampleCue(track, key, u) {
    var t = track.t, v = track[key];
    for (var i = 0; i < t.length - 1; i++) {
      if (u <= t[i + 1]) return v[i] + (v[i + 1] - v[i]) * ((u - t[i]) / Math.max(1e-6, t[i + 1] - t[i]));
    }
    return v[v.length - 1];
  }

  /* -------------------------------------------------------- behaviours -- */

  /* Sporbók's vocabulary: a working day, not a bedtime story. */
  var BEHAVIOURS = {
    idle: { blink: 1.15, cadence: [6, 11], moods: ["neutral", "calm", "curious"], label: "Í biðstöðu" },
    avakt: { blink: 1, cadence: [3, 6], moods: ["focused", "neutral", "alert"], label: "Á vakt" },
    skrad: { beat: "notice", blink: 0.9, cadence: [2.4, 4.4], moods: ["proud", "happy", "calm"], label: "Skráð" },
    bidur: { beat: "glance", blink: 1, cadence: [2.4, 4.2], moods: ["curious", "thinking", "alert"], label: "Bíður" },
    hissa: { blink: 0.8, cadence: [1.8, 3], moods: ["surprised", "alert", "curious"], label: "Hissa" },
    ahyggjur: { blink: 1.1, cadence: [3.6, 6], moods: ["worried", "sad", "thinking"], label: "Áhyggjur" },
    fri: { blink: 9, cadence: [60, 90], moods: ["asleep"], label: "Frí" }
  };

  var RHYTHMS = {
    van: { blink: [3.6, 8], breath: 1.4, pace: 1.3 },
    box: { blink: [2.6, 6], breath: 0.5, pace: 1 },
    hat: { blink: [3, 7], breath: 0.8, pace: 1.1 },
    note: { blink: [1.8, 4.2], breath: 2.2, pace: 0.8 }
  };

  var IDLE_CUES = ["glance", "squint"];

  /* ------------------------------------------------------------ loop -- */

  var subs = [];
  var raf = 0, last = 0, clock = 0;
  function frame(ms) {
    var now = ms / 1000;
    var dt = last ? Math.min(0.05, now - last) : 1 / 60;
    last = now; clock += dt;
    for (var i = 0; i < subs.length; i++) subs[i](clock, dt);
    raf = subs.length ? requestAnimationFrame(frame) : 0;
  }
  function start() {
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
        + '<circle class="lidU" cx="0" cy="0" r="10" fill="' + art.lidFill + '"/>'
        + '<circle class="lidD" cx="0" cy="0" r="10" fill="' + art.lidFill + '"/>'
        + "</g>"
        + '<path class="lash" d="" fill="none" stroke="' + (art.lidFill === "#0E1114" || art.lidFill === "#16222C" ? "#5B6773" : INK) + '" stroke-linecap="round" opacity="0"/>'
        + "</g>";
    }).join("");
    return (art.ground || "")
      + '<g class="sb-body" style="transform-origin:' + art.poseOrigin[0] + "px " + art.poseOrigin[1] + 'px">'
      + (art.accent && kind !== "note" ? '<g class="sb-accent">' + art.accent + "</g>" : "")
      + art.below
      + (kind === "note" ? '<g class="sb-accent">' + art.accent + "</g>" : "")
      + eyes + (art.above || "")
      + "</g>";
  }

  function makeState(mood) {
    return {
      accRot: 0, accVel: 0, attention: "wander", attentionReady: 0, attentionUntil: 0,
      blinkAt: 0, blinkStart: -9, cue: null, cueAt: -1,
      eyes: [{ d: 0, da: 0, es: 1, p: 1, u: 0.1, ua: 0 }, { d: 0, da: 0, es: 1, p: 1, u: 0.1, ua: 0 }],
      gazeX: 0, gazeY: 0, idleCueAt: 0, lookX: 0, lookY: 0,
      mood: mood, moodGazeX: 0, moodGazeY: 0, next: 0,
      phase: Math.random() * Math.PI * 2,
      pose: { rotate: 0, scaleX: 1, scaleY: 1, y: 0 }, started: false
    };
  }

  function blinkAmount(s, t, atRest) {
    if (atRest) return 0;
    var bt = t - s.blinkStart;
    if (bt < 0 || bt >= 0.2) return 0;
    return clamp01(bt < 0.07 ? bt / 0.07 : (bt < 0.09 ? 1 : 1 - (bt - 0.09) / 0.11));
  }

  function drawFrame(svg, kind, s, t, dt, breathAmp, atRest) {
    var art = ART[kind];
    var preset = EXPRESSIONS[s.mood];
    var targets = [preset.lids, preset.lidsRight || preset.lids];
    var f = atRest ? 1 : Math.min(1, dt * 7.5);
    for (var i = 0; i < 2; i++) {
      var c = s.eyes[i], g = targets[i];
      c.u = lerp(c.u, g.u, f); c.ua = lerp(c.ua, g.ua, f);
      c.d = lerp(c.d, g.d, f); c.da = lerp(c.da, g.da, f);
      c.p = lerp(c.p, preset.pupil, f); c.es = lerp(c.es, preset.eye, f);
    }
    s.moodGazeX = lerp(s.moodGazeX, preset.gaze[0], f);
    s.moodGazeY = lerp(s.moodGazeY, preset.gaze[1], f);

    var lookScale = art.eye.r;
    if (!atRest) {
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
    var uSum = 0, shutSum = 0;

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
      setAttrs(wrap.querySelector(".glint"), { cx: px - pr * 0.32, cy: py - pr * 0.34, rx: pr * 0.32, ry: pr * 0.32 });
      setAttrs(wrap.querySelector(".ball"), { cx: cx, cy: cy, r: R });
      var shut = clamp01((u + d - 0.9) / 0.14);
      var white = wrap.querySelector(".white");
      setAttrs(white, { cx: cx, cy: cy, r: Math.max(0, R - 0.9) });
      white.setAttribute("opacity", (1 - shut).toFixed(3));
      var lidU = wrap.querySelector(".lidU");
      setAttrs(lidU, { cx: cx, cy: cy - R - LR + u * (2 * R + LR * 0.06), r: LR });
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
        var w = R * 0.86;
        lash.setAttribute("d", "M" + (cx - w).toFixed(2) + " " + (ye - sag).toFixed(2) + " Q" + cx.toFixed(2) + " " + (ye + sag).toFixed(2) + " " + (cx + w).toFixed(2) + " " + (ye - sag).toFixed(2));
        lash.setAttribute("stroke-width", (R * 0.16).toFixed(2));
        lash.setAttribute("opacity", (shut * 0.92).toFixed(3));
        lash.setAttribute("transform", "rotate(" + (e.ua * lidSide * Math.min(1, u / 0.18)).toFixed(2) + " " + cx + " " + cy + ")");
      }
      wrap.setAttribute("opacity", cueO.toFixed(3));
      uSum += u; shutSum += shut;
    }

    /* Object hooks. */
    var uAvg = uSum / 2, shutAvg = shutSum / 2;
    if (art.hinge) {
      var hinge = svg.querySelector(".hinge");
      var drop2 = Math.max(0, uAvg - art.hinge.rest) / (1 - art.hinge.rest) * art.hinge.travel;
      hinge.setAttribute("transform", "translate(0 " + drop2.toFixed(2) + ")");
    }
    var lamps = svg.querySelectorAll(".lamp, .lamp-glow");
    for (var m = 0; m < lamps.length; m++) {
      var on = 1 - shutAvg;
      var isGlow = lamps[m].getAttribute("class") === "lamp-glow";
      lamps[m].setAttribute("opacity", (isGlow ? 0.35 * on : 0.28 + 0.72 * on).toFixed(3));
    }

    var pose = preset.pose;
    s.pose.rotate = lerp(s.pose.rotate, pose.rotate || 0, f);
    s.pose.scaleX = lerp(s.pose.scaleX, pose.scaleX || 1, f);
    s.pose.scaleY = lerp(s.pose.scaleY, pose.scaleY || 1, f);
    s.pose.y = lerp(s.pose.y, pose.y || 0, f);
    var breath = atRest ? 0 : Math.sin(t * (s.mood === "asleep" ? 0.7 : 1.2) + s.phase) * breathAmp;
    var body = svg.querySelector(".sb-body");
    body.style.transform = "translateY(" + (s.pose.y + breath).toFixed(2) + "px) rotate(" + (s.pose.rotate * (art.rotateScale || 1) + (art.lean || 0)).toFixed(2) + "deg) scale(" + s.pose.scaleX.toFixed(3) + "," + s.pose.scaleY.toFixed(3) + ")";

    var accents = svg.querySelectorAll(".sb-accent");
    if (accents.length) {
      var target = (-s.pose.rotate * 1.6 - (s.pose.y + breath) * 0.5) * (art.accentScale || 1);
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

  /**
   * Mount a cast member into `host`.
   * opts: { behaviour, mood, look: {x,y}, live }
   * Returns a handle: { set(behaviour), setMood(mood), look(x,y), cue(name), destroy() }.
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

    var live = opts.live !== false && !reducedMotion();
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
          s.mood = pick;
          s.next = t + rand(score.cadence[0], score.cadence[1]) * rhythm.pace;
          var entry = EXPRESSIONS[pick].cue || score.beat;
          if (entry) { s.cue = entry; s.cueAt = t; }
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

    return {
      svg: svg,
      set: function (b) {
        behaviour = b;
        var first = BEHAVIOURS[b].moods[0];
        s.mood = first; s.next = clock + rand(BEHAVIOURS[b].cadence[0], BEHAVIOURS[b].cadence[1]) * rhythm.pace;
        var entry = EXPRESSIONS[first].cue || BEHAVIOURS[b].beat;
        if (entry) { s.cue = entry; s.cueAt = clock; }
        if (!live) drawFrame(svg, kind, s, 0, 1 / 60, rhythm.breath, true);
      },
      setMood: function (m) { behaviour = null; s.mood = m; if (!live) drawFrame(svg, kind, s, 0, 1 / 60, rhythm.breath, true); },
      look: function (x, y) { s.lookX = x; s.lookY = y; if (!live) drawFrame(svg, kind, s, 0, 1 / 60, rhythm.breath, true); },
      destroy: function () { var i = subs.indexOf(tick); if (i >= 0) subs.splice(i, 1); svg.remove(); }
    };
  }

  root.SporbokCast = {
    ART: ART, EXPRESSIONS: EXPRESSIONS, BEHAVIOURS: BEHAVIOURS, RHYTHMS: RHYTHMS,
    KINDS: ["van", "box", "hat", "note"], mount: mount, reducedMotion: reducedMotion
  };
})(typeof window !== "undefined" ? window : this);
