(function () {
  const WORDS = window.WORDS;
  const BY_ID = Object.fromEntries(WORDS.map((w) => [w.id, w]));
  const MODES = { recog: "看字回想", dict: "聽音拼字" };
  const STORE_KEY = "toeic-app/v1";

  const $app = document.getElementById("app");
  const $title = document.getElementById("title");
  const $progress = document.getElementById("progress-label");
  const $back = document.getElementById("back-btn");
  const $sheet = document.getElementById("sheet");
  const $sheetBody = document.getElementById("sheet-body");

  // ---------- 儲存 ----------
  const today = () => new Date().toLocaleDateString("sv"); // YYYY-MM-DD（本地時間）

  function loadStore() {
    let data = null;
    try { data = JSON.parse(localStorage.getItem(STORE_KEY)); } catch (e) { /* 無法讀取就用預設值 */ }
    data = data || {};
    data.cards = data.cards || {};
    data.settings = Object.assign({ newPerDay: 10, voice: "" }, data.settings);
    if (!data.daily || data.daily.date !== today()) data.daily = { date: today(), newCount: 0 };
    return data;
  }
  let store = loadStore();
  function save() {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(store)); } catch (e) { /* 空間不足或被封鎖 */ }
  }

  const cardId = (wordId, mode) => `${wordId}|${mode}`;
  const getCard = (id) => store.cards[id] || FSRS.newCard();

  // ---------- 發音 ----------
  const synth = window.speechSynthesis;
  let voices = [];
  const PREFERRED = [/Aria|Jenny|Guy|Ava|Andrew|Emma/i, /Google US English/i, /Samantha|Alex/i];
  function loadVoices() {
    if (!synth) return;
    voices = synth.getVoices().filter((v) => /^en[-_]US/i.test(v.lang));
    if (!voices.length) voices = synth.getVoices().filter((v) => /^en/i.test(v.lang));
  }
  function pickVoice() {
    if (store.settings.voice) {
      const v = voices.find((x) => x.name === store.settings.voice);
      if (v) return v;
    }
    for (const re of PREFERRED) {
      const v = voices.find((x) => re.test(x.name));
      if (v) return v;
    }
    return voices[0];
  }
  function speak(text, rate = 0.95) {
    if (!synth) return;
    synth.cancel();
    const u = new SpeechSynthesisUtterance(text);
    const v = pickVoice();
    if (v) u.voice = v;
    u.lang = v ? v.lang : "en-US";
    u.rate = rate;
    synth.speak(u);
  }
  if (synth) {
    loadVoices();
    synth.addEventListener?.("voiceschanged", () => { loadVoices(); if (view === "home") renderHome(); });
  }

  // ---------- 小工具 ----------
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const speakerSvg = (size = 18) => `<svg viewBox="0 0 24 24" width="${size}" height="${size}" aria-hidden="true"><path d="M4 9v6h4l5 4V5L8 9H4z" fill="currentColor"/><path d="M16 8.5a5 5 0 010 7M18.5 6a8.5 8.5 0 010 12" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`;
  const posList = (w) => [...new Set(w.senses.map((s) => s.pos))];
  const shortZh = (w) => w.senses.map((s) => `${s.pos} ${s.zh.join("、")}`).join("；");

  function wordStatus(w) {
    const r = store.cards[cardId(w.id, "recog")];
    if (!r || r.state === "new") return { key: "new", label: "未學" };
    const now = Date.now();
    const anyDue = Object.keys(MODES).some((m) => {
      const c = store.cards[cardId(w.id, m)];
      return c && c.state !== "new" && c.due <= now;
    });
    if (anyDue) return { key: "due", label: "待複習" };
    if (r.state === "review") return { key: "review", label: "已學會" };
    return { key: "learning", label: "學習中" };
  }

  // ---------- 拼音拆解與詳細內容 ----------
  function renderChunks(w) {
    let color = 0;
    const boxes = w.chunks.map((c) => {
      const cls = c.silent ? "silent" : `c${color++ % 3}`;
      const inline = /[ˋˌ]/.test(c.k); // 重音記號落在 chunk 中間，例如 expand 的 x [kˋs]
      const mark = inline ? "" : c.s === 1 ? '<span class="stress-mark">ˋ</span>' : c.s === 2 ? "ˌ" : "";
      const kk = c.silent ? "不發音" : `${mark}${esc(c.k).replace("ˋ", '<span class="stress-mark">ˋ</span>')}`;
      return `<div class="chunk ${cls} ${c.s === 1 ? "s1" : ""}">
        <span class="letters">${esc(c.t)}</span><span class="kk kk-font">${kk}</span></div>`;
    }).join("");

    color = 0;
    const notes = w.chunks.map((c) => {
      const cls = c.silent ? "silent" : `c${color++ % 3}`;
      if (!c.n) return "";
      return `<li><span class="tag chunk ${cls}" style="display:inline-block;padding:0 6px;min-width:48px">${esc(c.t)}</span><span>${esc(c.n)}</span></li>`;
    }).join("");

    return `<div class="chunks">${boxes}</div>
      <p class="chunk-legend">框線＝重音所在　虛線＝不發音</p>
      ${w.stressNote ? `<div class="stress-note">${esc(w.stressNote)}</div>` : ""}
      ${notes ? `<ul class="notes">${notes}</ul>` : ""}`;
  }

  function renderDetail(w) {
    const senses = w.senses.map((s, i) => `
      <div class="sense">
        <div class="sense-head"><span class="pos">${esc(s.pos)}</span><span class="sense-zh">${esc(s.zh.join("、"))}</span></div>
        <div class="example">
          <button class="mini-play" data-say="${esc(s.ex)}" aria-label="播放例句">${speakerSvg(14)}</button>
          <div><p class="en">${esc(s.ex)}</p><p class="zh">${esc(s.exZh)}</p></div>
        </div>
      </div>`).join("");

    const family = w.family.length ? `<div class="section"><h3>詞類變化</h3><div class="kv">
      ${w.family.map((f) => `<span class="k">${esc(f.pos)}</span><span><b>${esc(f.w)}</b>　${esc(f.zh)}</span>`).join("")}
      </div></div>` : "";

    const coll = w.collocations.length ? `<div class="section"><h3>常見搭配</h3><div class="kv">
      ${w.collocations.map((c) => `<span><b>${esc(c.en)}</b></span><span class="muted">${esc(c.zh)}</span>`).join("")}
      </div></div>` : "";

    const syn = w.synonyms.length ? `<div class="section"><h3>同義改寫（Part 7 常用）</h3>
      <div class="chips">${w.synonyms.map((s) => `<span class="chip">${esc(s)}</span>`).join("")}</div></div>` : "";

    const pattern = w.pattern ? `<div class="section"><h3>同樣發音規則的字</h3>
      <p style="margin:0 0 8px">${esc(w.pattern.rule)}</p>
      <div class="chips">${w.pattern.words.map((x) => `<button class="chip" data-say="${esc(x)}" style="border:0">${speakerSvg(12)} ${esc(x)}</button>`).join("")}</div></div>` : "";

    const callouts = (w.root || w.tip) ? `<div class="section">
      ${w.root ? `<div class="callout root"><b>字根記憶　</b>${esc(w.root)}</div>` : ""}
      ${w.tip ? `<div class="callout tip"><b>多益提醒　</b>${esc(w.tip)}</div>` : ""}
      </div>` : "";

    return `
      ${renderChunks(w)}
      <div class="section"><h3>中文意思與例句</h3>${senses}</div>
      ${family}${coll}${syn}${pattern}${callouts}`;
  }

  function audioRow(w) {
    return `<div class="audio-row">
      <button class="audio-btn" data-say="${esc(w.word)}">${speakerSvg()} 發音</button>
      <button class="audio-btn" data-say="${esc(w.word)}" data-rate="0.55">${speakerSvg()} 慢速</button>
    </div>`;
  }

  // ---------- 畫面切換 ----------
  let view = "home";
  function setView(name, title) {
    view = name;
    $title.textContent = title;
    $back.hidden = name === "home";
    $progress.textContent = "";
    window.scrollTo(0, 0);
  }
  $back.addEventListener("click", () => renderHome());

  // ---------- 首頁 ----------
  function counts() {
    const now = Date.now();
    const dueCards = Object.values(store.cards).filter((c) => c.state !== "new" && c.due <= now).length;
    // 已學過的字還沒做過的聽寫題，也算在待複習裡
    const dictPending = WORDS.filter((w) => getCard(cardId(w.id, "recog")).state !== "new" &&
      getCard(cardId(w.id, "dict")).state === "new").length;
    const newLeft = Math.max(0, store.settings.newPerDay - store.daily.newCount);
    const unseen = WORDS.filter((w) => getCard(cardId(w.id, "recog")).state === "new").length;
    const learned = WORDS.filter((w) => getCard(cardId(w.id, "recog")).state === "review").length;
    return { due: dueCards + dictPending, newToday: Math.min(newLeft, unseen), learned };
  }

  function renderHome() {
    setView("home", "多益單字");
    if (store.daily.date !== today()) store.daily = { date: today(), newCount: 0 };
    const c = counts();
    const total = c.due + c.newToday;
    const voiceOpts = voices.map((v) =>
      `<option value="${esc(v.name)}" ${v.name === (pickVoice() || {}).name ? "selected" : ""}>${esc(v.name.replace(/^Microsoft /, ""))}</option>`).join("");

    $app.innerHTML = `
      <div class="stats">
        <div class="stat"><b>${c.due}</b><span>待複習</span></div>
        <div class="stat"><b>${c.newToday}</b><span>今日新字</span></div>
        <div class="stat"><b>${c.learned}<small class="muted" style="font-size:15px">/${WORDS.length}</small></b><span>已學會</span></div>
      </div>
      <button class="btn primary" id="start" ${total ? "" : "disabled"}>${total ? `開始學習（${total}）` : "今天的進度完成了！"}</button>
      <button class="btn" id="list">單字列表</button>

      <div class="panel">
        <h2>設定</h2>
        <div class="setting"><span>每日新字數</span>
          <select id="new-per-day">${[5, 10, 15, 20, 30].map((n) => `<option ${n === store.settings.newPerDay ? "selected" : ""}>${n}</option>`).join("")}</select>
        </div>
        <div class="setting"><span>發音聲音</span>
          ${voices.length ? `<select id="voice">${voiceOpts}</select>` : `<span class="muted">此瀏覽器沒有英文語音</span>`}
        </div>
        <button class="link-btn" id="reset">清除所有學習進度</button>
        <p class="hint">每個字會練兩種題型：「看字回想」練看到字就念得出來、知道意思；「聽音拼字」練聽到發音就拼得出來。複習時間由 FSRS 演算法安排，目標記憶率 90%。</p>
      </div>`;

    document.getElementById("start").onclick = startSession;
    document.getElementById("list").onclick = renderList;
    document.getElementById("new-per-day").onchange = (e) => { store.settings.newPerDay = +e.target.value; save(); renderHome(); };
    const $voice = document.getElementById("voice");
    if ($voice) $voice.onchange = (e) => { store.settings.voice = e.target.value; save(); speak("schedule"); };
    document.getElementById("reset").onclick = () => {
      if (confirm("確定要清除所有學習進度嗎？這個動作無法復原。")) {
        store.cards = {};
        store.daily = { date: today(), newCount: 0 };
        save();
        renderHome();
      }
    };
  }

  // ---------- 學習流程 ----------
  let queue = [];
  let sessionDone = 0;

  function buildQueue() {
    const now = Date.now();
    const due = Object.entries(store.cards)
      .filter(([, c]) => c.state !== "new" && c.due <= now)
      .sort((a, b) => a[1].due - b[1].due)
      .map(([id]) => id);

    const newLeft = Math.max(0, store.settings.newPerDay - store.daily.newCount);
    const fresh = WORDS.filter((w) => getCard(cardId(w.id, "recog")).state === "new")
      .slice(0, newLeft).map((w) => cardId(w.id, "recog"));

    // 已經學過「看字回想」的字，才開放「聽音拼字」
    const dictNew = WORDS.filter((w) => getCard(cardId(w.id, "recog")).state !== "new" &&
      getCard(cardId(w.id, "dict")).state === "new").map((w) => cardId(w.id, "dict"));

    // 新字與複習穿插，避免一次塞太多新字
    const out = [];
    const rest = [...dictNew];
    while (due.length || fresh.length) {
      if (due.length) out.push(due.shift());
      if (due.length) out.push(due.shift());
      if (fresh.length) out.push(fresh.shift());
    }
    return out.concat(rest);
  }

  function startSession() {
    queue = buildQueue();
    sessionDone = 0;
    nextCard();
  }

  function nextCard() {
    if (!queue.length) return renderDone();
    const id = queue[0];
    const [wordId, mode] = id.split("|");
    const w = BY_ID[wordId];
    if (!w) { queue.shift(); return nextCard(); }
    setView("study", MODES[mode]);
    $progress.textContent = `剩 ${queue.length}`;
    if (mode === "recog") renderRecogFront(w, id);
    else renderDictFront(w, id);
  }

  function rate(id, g) {
    const before = getCard(id);
    if (before.state === "new" && id.endsWith("|recog")) store.daily.newCount++;
    const after = FSRS.review(before, g);
    store.cards[id] = after;
    save();
    queue.shift();
    sessionDone++;
    // 當天內要再看一次的卡片，放回佇列後面一點
    if (after.due - Date.now() < 30 * 60000) {
      queue.splice(Math.min(queue.length, 3), 0, id);
    }
    // 新字第一次學完後，加入它的聽寫題
    const [wordId, mode] = id.split("|");
    const dictId = cardId(wordId, "dict");
    if (mode === "recog" && before.state === "new" && !queue.includes(dictId) && getCard(dictId).state === "new") {
      queue.push(dictId);
    }
    nextCard();
  }

  function rateButtons(id, grades = [1, 2, 3, 4]) {
    const p = FSRS.preview(getCard(id));
    const labels = { 1: "忘記", 2: "困難", 3: "記得", 4: "簡單" };
    return `<div class="actions"><div class="rate-row ${grades.length === 3 ? "three" : ""}">
      ${grades.map((g) => `<button class="rate" data-g="${g}">${labels[g]}<small>${FSRS.formatInterval(p[g])}</small></button>`).join("")}
    </div></div>`;
  }

  function bindRate(id) {
    $app.querySelectorAll(".rate").forEach((b) => (b.onclick = () => rate(id, +b.dataset.g)));
  }

  // 看字回想：先自己唸、想意思 → 看答案 → 自評
  function renderRecogFront(w, id) {
    const isNew = getCard(id).state === "new";
    $app.innerHTML = `
      <div class="card">
        <span class="mode-tag">${isNew ? "新單字" : "複習"}</span>
        <div class="front">
          <div class="word-big">${esc(w.word)}</div>
          <div class="kk-big kk-font">${esc(w.kk)}</div>
          <div class="pos-row">${posList(w).map((p) => `<span class="pos">${esc(p)}</span>`).join("")}</div>
          ${audioRow(w)}
          <p class="prompt">先看 KK 自己唸一次，想想是什麼意思，再按播放或看答案確認</p>
        </div>
      </div>
      <div class="actions"><button class="btn primary" id="reveal">看答案 <kbd>空白鍵</kbd></button></div>`;
    document.getElementById("reveal").onclick = () => renderRecogBack(w, id);
  }

  function renderRecogBack(w, id) {
    $app.innerHTML = `
      <div class="card">
        <div class="front" style="padding:4px 0 0">
          <div class="kk-big kk-font">${esc(w.kk)}</div>
        </div>
        ${renderDetail(w)}
        ${audioRow(w)}
      </div>
      ${rateButtons(id)}`;
    bindRate(id);
    speak(w.word);
  }

  // 聽音拼字：播放發音 → 拼出單字 → 自動判斷
  function renderDictFront(w, id) {
    $app.innerHTML = `
      <div class="card">
        <span class="mode-tag">聽寫</span>
        <div class="front">
          ${audioRow(w)}
          <div class="dict-meaning">${esc(shortZh(w))}</div>
          <input class="dict-input" id="dict-input" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" placeholder="聽到什麼就拼出來" aria-label="拼出單字">
        </div>
      </div>
      <div class="actions"><button class="btn primary" id="check">對答案 <kbd>Enter</kbd></button></div>`;
    const $in = document.getElementById("dict-input");
    $in.focus();
    $in.addEventListener("keydown", (e) => { if (e.key === "Enter") { e.preventDefault(); check(); } });
    document.getElementById("check").onclick = check;
    speak(w.word);

    function check() {
      const ans = $in.value.trim().toLowerCase();
      if (!ans) { $in.focus(); return; }
      renderDictResult(w, id, ans);
    }
  }

  // 用最長共同子序列找出正確拼字中「有拼到」的字母，少打或多打一個字母時不會整段標紅
  function matchedLetters(word, ans) {
    const m = word.length, n = ans.length;
    const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
    for (let i = m - 1; i >= 0; i--)
      for (let j = n - 1; j >= 0; j--)
        dp[i][j] = word[i] === ans[j] ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1]);
    const hit = new Array(m).fill(false);
    let i = 0, j = 0;
    while (i < m && j < n) {
      if (word[i] === ans[j]) { hit[i] = true; i++; j++; }
      else if (dp[i + 1][j] >= dp[i][j + 1]) i++;
      else j++;
    }
    return hit;
  }

  function renderDictResult(w, id, ans) {
    const ok = ans === w.word.toLowerCase();
    const hit = matchedLetters(w.word.toLowerCase(), ans);
    const diff = [...w.word].map((ch, i) => (hit[i] ? esc(ch) : `<span class="x">${esc(ch)}</span>`)).join("");
    $app.innerHTML = `
      <div class="card">
        <div class="result ${ok ? "ok" : "bad"}">${ok ? "拼對了！" : "再接再厲"}</div>
        ${ok ? "" : `<div class="diff">${diff}</div><div class="yours">你拼的：${esc(ans)}</div>`}
        <div class="front" style="padding:8px 0 0"><div class="kk-big kk-font">${esc(w.kk)}</div></div>
        ${renderDetail(w)}
        ${audioRow(w)}
      </div>
      ${ok ? rateButtons(id, [2, 3, 4]) : `<div class="actions"><button class="btn primary" id="next">下一個 <kbd>Enter</kbd></button></div>`}`;
    if (ok) bindRate(id);
    else document.getElementById("next").onclick = () => rate(id, 1);
    speak(w.word);
  }

  function renderDone() {
    setView("done", "完成");
    $app.innerHTML = `
      <div class="card done">
        <h2>今天的學習完成了</h2>
        <p class="muted">這次練習了 ${sessionDone} 張卡片。明天記得回來複習，複習時間到的字會自動出現。</p>
        <button class="btn primary" id="home" style="margin-top:18px">回首頁</button>
      </div>`;
    document.getElementById("home").onclick = renderHome;
  }

  // ---------- 單字列表 ----------
  function renderList() {
    setView("list", "單字列表");
    const topics = [...new Set(WORDS.map((w) => w.topic))];
    let topic = "";
    $app.innerHTML = `
      <input class="search" id="search" type="search" placeholder="搜尋英文或中文" aria-label="搜尋單字">
      <div class="filters" id="filters">
        ${["", ...topics].map((t) => `<button class="filter ${t ? "" : "on"}" data-topic="${esc(t)}">${esc(t || "全部")}</button>`).join("")}
      </div>
      <p class="muted list-count" id="list-count"></p>
      <ul class="word-list" id="word-list"></ul>`;
    const $list = document.getElementById("word-list");
    const $search = document.getElementById("search");
    const draw = () => {
      const q = $search.value.trim().toLowerCase();
      const items = WORDS.filter((w) => (!topic || w.topic === topic) &&
        (!q || w.word.includes(q) || shortZh(w).includes(q)));
      document.getElementById("list-count").textContent = `${items.length} 個字`;
      $list.innerHTML = items.map((w) => {
        const st = wordStatus(w);
        return `<li><button class="word-row" data-id="${w.id}">
          <div class="main"><div><span class="w">${esc(w.word)}</span> <span class="kk kk-font">${esc(w.kk)}</span></div>
          <div class="zh">${esc(shortZh(w))}</div></div>
          <span class="status ${st.key}">${st.label}</span></button></li>`;
      }).join("") || `<li class="muted" style="text-align:center;padding:20px">找不到符合的單字</li>`;
    };
    draw();
    $search.addEventListener("input", draw);
    document.getElementById("filters").addEventListener("click", (e) => {
      const b = e.target.closest(".filter");
      if (!b) return;
      topic = b.dataset.topic;
      document.querySelectorAll(".filter").forEach((x) => x.classList.toggle("on", x === b));
      draw();
    });
    $list.addEventListener("click", (e) => {
      const row = e.target.closest(".word-row");
      if (row) openSheet(BY_ID[row.dataset.id]);
    });
  }

  function openSheet(w) {
    $sheetBody.innerHTML = `
      <div class="front" style="padding:8px 0 0">
        <div class="word-big">${esc(w.word)}</div>
        <div class="kk-big kk-font">${esc(w.kk)}</div>
        ${audioRow(w)}
      </div>
      ${renderDetail(w)}`;
    $sheet.hidden = false;
    document.body.style.overflow = "hidden";
    speak(w.word);
  }
  function closeSheet() {
    $sheet.hidden = true;
    document.body.style.overflow = "";
  }
  $sheet.addEventListener("click", (e) => { if (e.target.closest("[data-close]")) closeSheet(); });

  // ---------- 全域事件 ----------
  document.addEventListener("click", (e) => {
    const b = e.target.closest("[data-say]");
    if (b) speak(b.dataset.say, b.dataset.rate ? +b.dataset.rate : 0.95);
  });

  document.addEventListener("keydown", (e) => {
    if (e.target.matches("input, select, textarea")) return;
    if (e.key === "Escape" && !$sheet.hidden) return closeSheet();
    if (view !== "study") return;
    const reveal = document.getElementById("reveal");
    const next = document.getElementById("next");
    if (e.key === " " && reveal) { e.preventDefault(); reveal.click(); }
    else if (e.key === "Enter" && next) { e.preventDefault(); next.click(); }
    else if (/^[1-4]$/.test(e.key)) {
      const b = $app.querySelector(`.rate[data-g="${e.key}"]`);
      if (b) b.click();
    }
  });

  if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  }

  renderHome();
})();
