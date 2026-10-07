// FSRS v4.5 簡化版排程器
// 評分：1 忘記 / 2 困難 / 3 記得 / 4 簡單
// 卡片狀態：new → learning → review（忘記後進 relearning）
(function () {
  const W = [0.4072, 1.1829, 3.1262, 15.4722, 7.2102, 0.5316, 1.0651, 0.0234, 1.616,
    0.1544, 1.0824, 1.9813, 0.0953, 0.2975, 2.2042, 0.2407, 2.9466];
  const DECAY = -0.5;
  const FACTOR = 19 / 81;
  const RETENTION = 0.9; // 目標記憶率
  const DAY = 86400000;
  const MIN = 60000;
  const MAX_INTERVAL = 365 * 3;

  const clamp = (x, lo, hi) => Math.min(hi, Math.max(lo, x));

  function retrievability(elapsedDays, s) {
    return Math.pow(1 + FACTOR * elapsedDays / s, DECAY);
  }

  function intervalDays(s) {
    const i = (s / FACTOR) * (Math.pow(RETENTION, 1 / DECAY) - 1);
    return clamp(Math.round(i), 1, MAX_INTERVAL);
  }

  const initStability = (g) => W[g - 1];
  const initDifficulty = (g) => clamp(W[4] - (g - 3) * W[5], 1, 10);

  function nextDifficulty(d, g) {
    const next = d - W[6] * (g - 3);
    return clamp(W[7] * initDifficulty(3) + (1 - W[7]) * next, 1, 10);
  }

  function recallStability(d, s, r, g) {
    const hard = g === 2 ? W[15] : 1;
    const easy = g === 4 ? W[16] : 1;
    return s * (1 + Math.exp(W[8]) * (11 - d) * Math.pow(s, -W[9]) *
      (Math.exp(W[10] * (1 - r)) - 1) * hard * easy);
  }

  function forgetStability(d, s, r) {
    const f = W[11] * Math.pow(d, -W[12]) * (Math.pow(s + 1, W[13]) - 1) *
      Math.exp(W[14] * (1 - r));
    return Math.min(f, s);
  }

  function newCard() {
    return { state: "new", due: 0, s: 0, d: 0, reps: 0, lapses: 0, last: 0 };
  }

  // 回傳評分後的新卡片狀態（不修改原物件）
  function review(card, g, now = Date.now()) {
    const c = { ...card, reps: card.reps + 1, last: now };

    if (card.state === "new") {
      c.s = initStability(g);
      c.d = initDifficulty(g);
      if (g === 1) { c.state = "learning"; c.due = now + MIN; }
      else if (g === 2) { c.state = "learning"; c.due = now + 5 * MIN; }
      else { c.state = "review"; c.due = now + intervalDays(c.s) * DAY; }
      return c;
    }

    if (card.state === "learning" || card.state === "relearning") {
      // 當天內的短期複習：不重算記憶穩定度，只決定是否畢業
      if (g === 1) { c.due = now + MIN; c.s = Math.max(0.1, c.s * 0.8); }
      else if (g === 2) { c.due = now + 5 * MIN; }
      else {
        if (g === 4) c.s = c.s * 1.5;
        c.d = nextDifficulty(c.d, g);
        c.state = "review";
        c.due = now + intervalDays(c.s) * DAY;
      }
      return c;
    }

    const elapsed = Math.max(0, (now - card.last) / DAY);
    const r = retrievability(elapsed, card.s);
    c.d = nextDifficulty(card.d, g);
    if (g === 1) {
      c.s = forgetStability(card.d, card.s, r);
      c.lapses = card.lapses + 1;
      c.state = "relearning";
      c.due = now + 5 * MIN;
    } else {
      c.s = recallStability(card.d, card.s, r, g);
      c.due = now + intervalDays(c.s) * DAY;
    }
    return c;
  }

  // 按鈕上顯示的「下次複習」時間
  function preview(card, now = Date.now()) {
    const out = {};
    for (const g of [1, 2, 3, 4]) out[g] = review(card, g, now).due - now;
    return out;
  }

  function formatInterval(ms) {
    const min = Math.round(ms / MIN);
    if (min < 60) return `${Math.max(1, min)} 分`;
    const h = Math.round(min / 60);
    if (h < 24) return `${h} 小時`;
    const d = Math.round(ms / DAY);
    if (d < 31) return `${d} 天`;
    if (d < 365) return `${Math.round(d / 30)} 個月`;
    return `${(d / 365).toFixed(1)} 年`;
  }

  window.FSRS = { newCard, review, preview, formatInterval };
})();
