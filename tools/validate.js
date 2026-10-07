// 檢查單字資料
//   node tools/validate.js                 檢查 data/words.js
//   node tools/validate.js a.json b.json   檢查 JSON 陣列檔
// 錯誤（ERROR）一定要修；警告（WARN）是 KK 和參考 IPA 不一致，需要人工確認
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const POS = new Set(["n.", "v.", "adj.", "adv.", "prep.", "conj.", "pron.", "phr."]);
const KK_CHARS = /^[a-zæɑɔəɚɝɛɪʊʌʃʒθðŋḷṇˋˌ ]+$/;

function loadWords(files) {
  if (!files.length) {
    global.window = {};
    require(path.join(ROOT, "data/words.js"));
    return window.WORDS;
  }
  return files.flatMap((f) => JSON.parse(fs.readFileSync(f, "utf8")));
}

// 比較用：把 KK 和 IPA 轉成同一種寫法
function normalize(s, keepStress) {
  s = s.replace(/[\[\]\/.]/g, "").replace(/ˈ/g, "ˋ").replace(/ː/g, "")
    .replace(/ɹ/g, "r").replace(/ɡ/g, "g")
    .replace(/eɪ/g, "e").replace(/oʊ/g, "o").replace(/əʊ/g, "o")
    .replace(/[ɝɚ]/g, "ər").replace(/ʌr/g, "ər").replace(/ɜr?/g, "ər")
    .replace(/ḷ/g, "əl").replace(/ṇ/g, "ən")
    .replace(/ɔr/g, "or").replace(/i$/, "ɪ").replace(/i(?=[ˋˌ]?$)/, "ɪ");
  if (!keepStress) s = s.replace(/[ˋˌ]/g, "");
  return s;
}

function check(words, ref) {
  const errors = [];
  const warns = [];
  const seen = new Set();
  const err = (w, msg) => errors.push(`${w}: ${msg}`);

  for (const w of words) {
    const id = w.word || "(no word)";
    if (seen.has(w.id)) err(id, `重複的 id ${w.id}`);
    seen.add(w.id);
    if (w.id !== w.word) err(id, "id 要和 word 相同");
    for (const k of ["word", "kk", "topic"]) if (typeof w[k] !== "string" || !w[k]) err(id, `缺少 ${k}`);
    if (![1, 2, 3].includes(w.tier)) err(id, "tier 要是 1/2/3");
    if (!/^\[.+\]$/.test(w.kk || "")) err(id, "kk 要用 [ ] 包起來");

    const kk = (w.kk || "").slice(1, -1);
    if (!KK_CHARS.test(kk)) err(id, `kk 有不允許的字元：${kk}`);
    const bare = kk.replace(/[ˋˌ]/g, "");

    // chunks
    if (!Array.isArray(w.chunks) || !w.chunks.length) { err(id, "缺少 chunks"); continue; }
    const letters = w.chunks.map((c) => c.t).join("");
    if (letters !== w.word) err(id, `chunks 字母拼起來是「${letters}」，不等於 word`);
    const strip = (s) => s.replace(/[ˋˌ]/g, "");
    const sounds = w.chunks.map((c) => strip(c.k)).join("");
    if (sounds !== bare) err(id, `chunks 發音拼起來是 [${sounds}]，不等於 kk [${bare}]`);

    // 重音位置：標 s 的 chunk 開頭；若重音落在 chunk 中間（如 expand 的 x [kˋs]），可直接把記號寫在 k 裡
    let offset = 0;
    const marks = { 1: [], 2: [] };
    for (const c of w.chunks) {
      if (c.silent && c.k) err(id, `不發音的「${c.t}」k 要是空字串`);
      if (!c.silent && !c.k) err(id, `「${c.t}」沒有發音，要加 silent: true`);
      let i = 0, inline = false;
      for (const ch of c.k) {
        if (ch === "ˋ" || ch === "ˌ") { marks[ch === "ˋ" ? 1 : 2].push(offset + i); inline = true; }
        else i++;
      }
      if (c.s && !inline) marks[c.s].push(offset);
      offset += i;
    }
    const markAt = (mark) => {
      const pos = [];
      let i = 0;
      for (const ch of kk) { if (ch === mark) pos.push(i); else if (ch !== "ˋ" && ch !== "ˌ") i++; }
      return pos;
    };
    for (const [mark, s] of [["ˋ", 1], ["ˌ", 2]]) {
      const want = markAt(mark);
      const have = marks[s];
      if (JSON.stringify(want) !== JSON.stringify(have)) {
        err(id, `${s === 1 ? "主" : "次"}重音位置不對：kk 在 ${JSON.stringify(want)}，chunks 標在 ${JSON.stringify(have)}（重音要切在 chunk 開頭）`);
      }
    }

    // 內容
    if (!Array.isArray(w.senses) || !w.senses.length) err(id, "缺少 senses");
    for (const s of w.senses || []) {
      if (!POS.has(s.pos)) err(id, `詞性 ${s.pos} 不在允許清單`);
      if (!Array.isArray(s.zh) || !s.zh.length) err(id, "sense 缺少 zh");
      if (!s.ex || !s.exZh) err(id, "sense 缺少例句或翻譯");
    }
    for (const k of ["family", "collocations", "synonyms"]) if (!Array.isArray(w[k])) err(id, `${k} 要是陣列`);
    for (const c of w.collocations || []) if (!c.en || !c.zh) err(id, "collocation 缺少 en/zh");
    for (const f of w.family || []) if (!POS.has(f.pos) || !f.w || !f.zh) err(id, "family 格式不對");
    if (w.pattern && (!w.pattern.rule || !Array.isArray(w.pattern.words))) err(id, "pattern 格式不對");

    // 和參考 IPA 比對
    const r = ref[w.word];
    if (r) {
      const a = normalize(kk, false), b = normalize(r.ipa, false);
      if (a !== b) warns.push(`${id}: 音素不同  KK [${kk}]  參考 IPA ${r.ipa}`);
      else {
        const pa = normalize(kk, true).replace(/ˌ/g, "").indexOf("ˋ");
        const pb = normalize(r.ipa, true).replace(/ˌ/g, "").indexOf("ˋ");
        if (pa !== pb && !(pa === -1 && pb === -1)) warns.push(`${id}: 重音位置可能不同  KK [${kk}]  參考 IPA ${r.ipa}`);
      }
    }
  }
  return { errors, warns };
}

const files = process.argv.slice(2);
const words = loadWords(files);
const refPath = path.join(__dirname, "ref_ipa.json");
const ref = fs.existsSync(refPath) ? JSON.parse(fs.readFileSync(refPath, "utf8")) : {};
const { errors, warns } = check(words, ref);
for (const e of errors) console.log("ERROR " + e);
for (const w of warns) console.log("WARN  " + w);
console.log(`${words.length} 字，${errors.length} 個錯誤，${warns.length} 個警告`);
process.exit(errors.length ? 1 : 0);
