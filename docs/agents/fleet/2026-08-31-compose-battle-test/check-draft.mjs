#!/usr/bin/env node
// Held-out contract checker for social-post compose output (PLAN-0001 grader, v1).
// Usage: node check-draft.mjs [--allow-past] <draft.json> [...more]
// --allow-past re-grades archived evidence whose date has already gone by.
// Exit 0 when every file passes, 1 otherwise. HTTP stays disabled by design.

import { readFileSync } from "node:fs";

// Mirrors the brand Skills; a brand, preset, or token lands there first.
const BRANDS = {
  yarnkin: {
    integration: "cmsng2l070001ho7cyp8tfrtd",
    presets: ["175493843120364", "1679248482160767", "323371698179784"],
    forbidden: [/(?<!\p{L})jól/iu, /\bchristmas/i, /(?<!\p{L})sækja\s+app/iu, /\bdownload/i, /garnhnyk/iu, /yarnball/i],
  },
  sporbok: {
    integration: "cmsnf6shm0001mk7nhrf52ohl",
    presets: ["1654916007940525", "218067308976029"],
    // JS \b is ASCII-only, so Icelandic word edges use \p{L} lookarounds.
    // Puffin forms skip lundi/lundar, which are also grove/temper.
    forbidden: [
      /norðurljós/iu,
      /\baurora/i,
      /(?<!\p{L})lund(inn|ann|ana|arnir|a(?!r)(?=\p{L}))/iu,
      /\bpuffin/i,
      /foss(inn|inum|ins|ar|arnir|a|ana|um)?(?!\p{L})/iu,
      /hringveg/iu,
      /(?<![\p{L}\/.])sporbok(?![\p{L}.])/iu,
    ],
  },
};

// Move -> allowed types (social-compose Step 1 pairing).
const PAIRINGS = {
  engage: ["this-or-that", "favorite", "finish-the-line"],
  proof: ["moment"],
};
const CHANNELS = ["facebook"];

// Reserved English signatures (brand Skills Step 4): never on Icelandic posts.
const SIGNATURES = [/field work, without the chaos/i, /bedtime stories from reykjavik/i];

// Engagement-bait heuristics (en + is). The classifier reads the ask, not a
// keyword, so these catch the instruction shapes we must never emit.
const END = "(?![\\p{L}\\d])";
const BAIT_PATTERNS = [
  /comment\s+(1|2|yes|no|below)\b/i,
  /\b(like|share|tag)\s+(this|if|a friend)/i,
  new RegExp(`settu\\s+(1|2|já|nei)${END}`, "iu"),
  new RegExp(`skrifaðu\\s+(1|2|já|nei)${END}`, "iu"),
  /kommentaðu/iu,
  /svaraðu\s+með\s+(1|2|tölu|emoji)/iu,
  /deildu\s+(þessu|ef)/iu,
  /læka(ðu)?\s+(þetta|ef)/iu,
  /merktu\s+(vin|einhvern)/iu,
  /segðu\s+okkur\s+(í|með)\s+(athugasemd|kommenti)/iu,
  /smelltu\s+á/iu,
  /\p{Extended_Pictographic}\s*=\s*\S/u,
];

// A post is Icelandic when it has Icelandic letters and more Icelandic than
// English function words; one accented name alone or in English prose fails.
const ICELANDIC_CHARS = /[ðþæöáéíóúý]/i;
const IS_WORDS = new Set(["og", "í", "á", "er", "að", "eða", "það", "við", "með", "ekki", "sem", "hjá", "þegar", "fyrir", "um", "en", "til", "af", "þú", "hvað", "hvaða", "kvöld", "þetta", "alltaf", "svo", "líka"]);
const EN_WORDS = new Set(["the", "and", "or", "is", "you", "your", "with", "tonight", "this", "that", "what", "for", "of", "to", "in", "on", "it", "we", "our"]);
const LINK = /https?:\/\/|www\./i;
const ISO_DATETIME = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}(:\d{2}(\.\d+)?)?(Z|[+-]\d{2}:\d{2})$/;

function isIcelandic(text) {
  const words = text.toLowerCase().match(/[\p{L}]+/gu) ?? [];
  const is = words.filter((w) => IS_WORDS.has(w)).length;
  const en = words.filter((w) => EN_WORDS.has(w)).length;
  return ICELANDIC_CHARS.test(text) && is >= 1 && is > en;
}
const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function checkDraft(raw, name, allowPast) {
  const errors = [];
  let d;
  try {
    d = JSON.parse(raw);
  } catch (e) {
    return [`${name}: JSON does not parse: ${e.message}`];
  }
  if (!d || typeof d !== "object") return [`${name}: draft must be a JSON object`];

  if (d.type !== "draft") errors.push("type must be 'draft'");
  if (d.shortLink !== false) errors.push("shortLink must be false");
  if (!Array.isArray(d.tags)) errors.push("tags must be an array");
  if (!ISO_DATETIME.test(d.date ?? "") || Number.isNaN(Date.parse(d.date))) {
    errors.push("date must be an ISO-8601 datetime with an offset");
  }
  if (!Array.isArray(d.posts) || d.posts.length < 1) {
    errors.push("posts must be a non-empty array");
    return errors.map((e) => `${name}: ${e}`);
  }

  const meta = d.meta ?? {};
  for (const key of ["brand", "move", "type", "channel", "weekday", "hourLocal"]) {
    if (meta[key] === undefined) errors.push(`meta.${key} missing (the coupon)`);
  }

  const brand = BRANDS[meta.brand];
  if (!brand) errors.push(`meta.brand ${meta.brand} has no brand Skill (${Object.keys(BRANDS).join(", ")})`);
  if (!PAIRINGS[meta.move]) errors.push(`meta.move ${meta.move} has no move Skill`);
  else if (!PAIRINGS[meta.move].includes(meta.type)) {
    errors.push(`meta.type ${meta.type} does not pair with move ${meta.move} (allowed: ${PAIRINGS[meta.move].join(", ")})`);
  }
  if (!CHANNELS.includes(meta.channel)) errors.push(`meta.channel ${meta.channel} has no channel Skill`);

  const when = new Date(d.date);
  if (!allowPast && when.getTime() <= Date.now()) errors.push(`date ${d.date} is not in the future`);
  if (meta.weekday && WEEKDAYS[when.getUTCDay()] !== meta.weekday) {
    errors.push(`meta.weekday ${meta.weekday} does not match date ${d.date} (${WEEKDAYS[when.getUTCDay()]})`);
  }
  if (meta.hourLocal !== undefined && when.getUTCHours() !== meta.hourLocal) {
    errors.push(`meta.hourLocal ${meta.hourLocal} does not match date hour ${when.getUTCHours()} (Reykjavik is UTC)`);
  }

  for (const post of d.posts) {
    if (!post || typeof post !== "object") {
      errors.push("posts[] entries must be objects");
      continue;
    }
    const id = post.integration?.id;
    if (!id) errors.push("posts[].integration.id missing");
    else if (brand && id !== brand.integration) {
      errors.push(`integration ${id} does not belong to brand ${meta.brand}`);
    }
    if (!Array.isArray(post.value) || post.value.length < 1) {
      errors.push("posts[].value must be non-empty");
      continue;
    }
    const settings = post.settings ?? {};
    if (settings.__type !== "facebook") errors.push("settings.__type must be 'facebook'");
    const hasPreset = Boolean(settings.text_format_preset_id);
    if (settings.post_type !== "post") errors.push(`settings.post_type ${settings.post_type} is not 'post'`);
    if (hasPreset && typeof settings.text_format_preset_id !== "string") {
      errors.push("text_format_preset_id must be a string");
    } else if (hasPreset && brand && !brand.presets.includes(settings.text_format_preset_id)) {
      errors.push(`preset ${settings.text_format_preset_id} is not locked for ${meta.brand} (${brand.presets.join(", ")})`);
    }
    const hook = post.value[0];
    const hookText = typeof hook?.content === "string" ? hook.content : "";
    const anyImages = post.value.some((v) => (v?.image ?? []).length > 0);
    if (hasPreset && anyImages) errors.push("color post must have empty image everywhere");
    if (hasPreset && hookText.length > 130) {
      errors.push(`color-post hook is ${hookText.length} chars (max 130)`);
    }
    if (LINK.test(hookText)) errors.push("link in the post body - links belong in the first comment");
    if (meta.type === "moment" && hookText.includes("?")) errors.push("moment type never asks a question");
    // Every live type is a text-only color post (social-compose Step 1).
    if (!hasPreset) errors.push("text_format_preset_id missing - every live type is a color post");
    for (const [i, v] of post.value.entries()) {
      if (typeof v?.content !== "string" || v.content.trim() === "") {
        errors.push(`value[${i}] content is empty (Postiz rejects it; omit an empty first comment)`);
        continue;
      }
      for (const p of BAIT_PATTERNS) {
        if (p.test(v.content)) errors.push(`value[${i}] matches bait pattern ${p}: "${v.content}"`);
      }
      if (!isIcelandic(v.content)) {
        errors.push(`value[${i}] does not read as Icelandic - language rule (Marketing Act 44/2026): "${v.content}"`);
      }
      for (const p of [...(brand?.forbidden ?? []), ...SIGNATURES]) {
        if (p.test(v.content)) errors.push(`value[${i}] matches forbidden token ${p}: "${v.content}"`);
      }
    }
  }

  return errors.map((e) => `${name}: ${e}`);
}

const args = process.argv.slice(2);
const allowPast = args.includes("--allow-past");
const files = args.filter((a) => a !== "--allow-past");
if (files.length === 0) {
  console.error("usage: check-draft.mjs [--allow-past] <draft.json> [...more]");
  process.exit(2);
}
let failed = false;
for (const f of files) {
  const errors = checkDraft(readFileSync(f, "utf8"), f, allowPast);
  if (errors.length) {
    failed = true;
    console.log(`FAIL ${f}`);
    for (const e of errors) console.log(`  - ${e}`);
  } else {
    console.log(`PASS ${f}`);
  }
}
process.exit(failed ? 1 : 0);
