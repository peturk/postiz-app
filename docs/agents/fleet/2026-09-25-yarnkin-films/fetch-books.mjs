// The films' books from the live Yarnkin catalogue: page texts (Icelandic and
// English) into books.json, the Icelandic cover and page previews into art/.
// ui-yk.html reads the texts from books.json (injected by assemble-yk.cjs), so
// a film always shows the catalogue's current words.
// Usage: node fetch-books.mjs [base-url]   (default https://yarnkin.com; public books only)
import { writeFileSync, mkdirSync } from "node:fs";

const BASE = process.argv[2] || "https://yarnkin.com";
// Which book each film shows (PK, 2026-09-28): a different book per film.
const BOOKS = {
  sb_1782954251371_li5zk8: "kvold: opened from the shelf (Forvitna stúlkan)",
  sb_1781550938747_pshsk9: "saman (Edda gerir við flautuna); on the kvold shelf",
  sb_factory_9cc00516ff9f0c: "raddir: one book, several narrators (Dísa); on the kvold shelf",
  sb_factory_ca46a0f07d97f3: "tunga: short lines in both languages (Tindra horfir vel)",
  sb_factory_721fd4722f0db3: "nott: the last page, Góða nótt (Óskar telur ræturnar)",
};

async function trpc(route, input) {
  const r = await fetch(`${BASE}/api/trpc/${route}?input=${encodeURIComponent(JSON.stringify({ json: input }))}`);
  if (!r.ok) throw new Error(`${route} ${r.status}`);
  return (await r.json()).result.data.json;
}
async function download(path, out) {
  const r = await fetch(`${BASE}/content/stories/${path}`);
  if (!r.ok) throw new Error(`${path} ${r.status}`);
  writeFileSync(out, Buffer.from(await r.arrayBuffer()));
}

mkdirSync("art", { recursive: true });
const books = {};
for (const [id, use] of Object.entries(BOOKS)) {
  const s = await trpc("stories.getById", { id });
  if (s.pages.length !== s.pageCount || s.pages.some(p => !p.pagePreviewPath || !p.text_is?.trim() || !p.text?.trim())) throw new Error(`${id} is not complete in both languages`);
  const cover = s.coverImagePathByLang?.is;
  if (!cover) throw new Error(`${id} has no Icelandic cover`);
  const files = { cover: `${id}-cover.png` };
  await download(cover, `art/${files.cover}`);
  for (const p of s.pages) { files[`p${p.pageNumber}`] = `${id}-p${p.pageNumber}.webp`; await download(p.pagePreviewPath, `art/${files[`p${p.pageNumber}`]}`); }
  books[id] = { use, title_is: s.title_is, title: s.title, pageCount: s.pageCount,
    pages: s.pages.map(p => ({ n: p.pageNumber, is: p.text_is.trim(), en: p.text.trim(), layout: p.layout })), files };
  console.log(id, s.title_is, s.pageCount, "pages");
}
writeFileSync("books.json", JSON.stringify(books, null, 1) + "\n");
