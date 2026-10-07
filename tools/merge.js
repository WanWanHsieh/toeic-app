// 把 JSON 批次檔合併進 data/words.js（以 id 去重，已存在的字會被新版本取代）
//   node tools/merge.js tools/batches/batch1.json tools/batches/batch2.json ...
const fs = require("fs");
const path = require("path");

const target = path.join(__dirname, "..", "data", "words.js");
global.window = {};
require(target);
const words = window.WORDS;
const index = new Map(words.map((w, i) => [w.id, i]));

let added = 0, replaced = 0;
for (const f of process.argv.slice(2)) {
  for (const w of JSON.parse(fs.readFileSync(f, "utf8"))) {
    if (index.has(w.id)) { words[index.get(w.id)] = w; replaced++; }
    else { index.set(w.id, words.length); words.push(w); added++; }
  }
}

const header = `// 多益單字資料
// chunks：把單字拆成「字母 → KK 發音」的小段，所有 t 串起來必須等於 word
//   t: 字母  k: KK 發音  s: 1 主重音 / 2 次重音  silent: 不發音  n: 提示
// 修改後請執行 node tools/validate.js 檢查
`;
fs.writeFileSync(target, `${header}window.WORDS = ${JSON.stringify(words, null, 2)};\n`);
console.log(`新增 ${added} 字，更新 ${replaced} 字，共 ${words.length} 字`);
