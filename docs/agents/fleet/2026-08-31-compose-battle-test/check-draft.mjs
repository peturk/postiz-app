#!/usr/bin/env node
// Held-out contract checker for social-post compose output (PLAN-0001 grader, v1).
// Usage: node check-draft.mjs <draft.json> [...more]
// Exit 0 when every file passes, 1 otherwise. HTTP stays disabled by design.

import { readFileSync } from "node:fs";

const BRAND_INTEGRATIONS = {
  yarnkin: "cmsng2l070001ho7cyp8tfrtd",
  sporbok: "cmsnf6shm0001mk7nhrf52ohl",
};

// Engagement-bait heuristics (en + is). The classifier reads the ask, not a
// keyword, so these catch the instruction shapes we must never emit.
const BAIT_PATTERNS = [
  /comment\s+(1|2|yes|no|below)\b/i,
  /\b(like|share|tag)\s+(this|if|a friend)/i,
  /settu\s+(1|2|já|nei)\b/i,
  /skrifaðu\s+(1|2|já|nei)\b/i,
  /kommentaðu/i,
  /svaraðu\s+með\s+(1|2|tölu|emoji)/i,
  /deildu\s+(þessu|ef)/i,
  /læka(ðu)?\s+(þetta|ef)/i,
  /merktu\s+(vin|einhvern)/i,
];

const ICELANDIC_CHARS = /[ðþæöáéíóúý]/i;
const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function checkDraft(raw, name) {
  const errors = [];
  let d;
  try {
    d = JSON.parse(raw);
  } catch (e) {
    return [`${name}: JSON does not parse: ${e.message}`];
  }

  if (d.type !== "draft") errors.push("type must be 'draft'");
  if (d.shortLink !== false) errors.push("shortLink must be false");
  if (!Array.isArray(d.tags)) errors.push("tags must be an array");
  if (!d.date || Number.isNaN(Date.parse(d.date))) errors.push("date must be ISO-8601");
  if (!Array.isArray(d.posts) || d.posts.length < 1) {
    errors.push("posts must be a non-empty array");
    return errors.map((e) => `${name}: ${e}`);
  }

  const meta = d.meta ?? {};
  for (const key of ["brand", "move", "type", "channel", "weekday", "hourLocal"]) {
    if (meta[key] === undefined) errors.push(`meta.${key} missing (the coupon)`);
  }

  const expectedIntegration = BRAND_INTEGRATIONS[meta.brand];
  const when = new Date(d.date);
  if (meta.weekday && WEEKDAYS[when.getUTCDay()] !== meta.weekday) {
    errors.push(`meta.weekday ${meta.weekday} does not match date ${d.date} (${WEEKDAYS[when.getUTCDay()]})`);
  }
  if (meta.hourLocal !== undefined && when.getUTCHours() !== meta.hourLocal) {
    errors.push(`meta.hourLocal ${meta.hourLocal} does not match date hour ${when.getUTCHours()} (Reykjavik is UTC)`);
  }

  for (const post of d.posts) {
    const id = post.integration?.id;
    if (!id) errors.push("posts[].integration.id missing");
    else if (expectedIntegration && id !== expectedIntegration) {
      errors.push(`integration ${id} does not belong to brand ${meta.brand}`);
    }
    if (!Array.isArray(post.value) || post.value.length < 1) {
      errors.push("posts[].value must be non-empty");
      continue;
    }
    const settings = post.settings ?? {};
    if (settings.__type !== "facebook") errors.push("settings.__type must be 'facebook'");
    const hasPreset = Boolean(settings.text_format_preset_id);
    const hook = post.value[0];
    const anyImages = post.value.some((v) => (v.image ?? []).length > 0);
    if (hasPreset && anyImages) errors.push("color post must have empty image everywhere");
    if (hasPreset && hook.content.length > 130) {
      errors.push(`color-post hook is ${hook.content.length} chars (max 130)`);
    }
    if (!hasPreset && !anyImages && settings.post_type === "post") {
      errors.push("text post without preset and without media - pick one");
    }
    for (const [i, v] of post.value.entries()) {
      for (const p of BAIT_PATTERNS) {
        if (p.test(v.content)) errors.push(`value[${i}] matches bait pattern ${p}: "${v.content}"`);
      }
      if (!ICELANDIC_CHARS.test(v.content)) {
        errors.push(`value[${i}] has no Icelandic characters - language rule (Marketing Act 44/2026): "${v.content}"`);
      }
    }
  }

  return errors.map((e) => `${name}: ${e}`);
}

const files = process.argv.slice(2);
if (files.length === 0) {
  console.error("usage: check-draft.mjs <draft.json> [...more]");
  process.exit(2);
}
let failed = false;
for (const f of files) {
  const errors = checkDraft(readFileSync(f, "utf8"), f);
  if (errors.length) {
    failed = true;
    console.log(`FAIL ${f}`);
    for (const e of errors) console.log(`  - ${e}`);
  } else {
    console.log(`PASS ${f}`);
  }
}
process.exit(failed ? 1 : 0);
