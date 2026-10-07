// 多益單字資料
// chunks：把單字拆成「字母 → KK 發音」的小段，所有 t 串起來必須等於 word
//   t: 字母  k: KK 發音  s: 1 主重音 / 2 次重音  silent: 不發音  n: 提示
// 修改後請執行 node tools/validate.js 檢查
window.WORDS = [
  {
    "id": "negotiate",
    "word": "negotiate",
    "tier": 1,
    "topic": "商務談判",
    "kk": "[nɪˋgoʃɪˌet]",
    "chunks": [
      {
        "t": "ne",
        "k": "nɪ"
      },
      {
        "t": "go",
        "k": "go",
        "s": 1
      },
      {
        "t": "ti",
        "k": "ʃɪ",
        "n": "ti 在這裡念 [ʃɪ]"
      },
      {
        "t": "ate",
        "k": "et",
        "s": 2,
        "n": "動詞字尾 -ate 念 [et]"
      }
    ],
    "senses": [
      {
        "pos": "v.",
        "zh": [
          "談判",
          "協商"
        ],
        "ex": "We negotiated a lower price with the supplier.",
        "exZh": "我們和供應商談到了較低的價格。"
      },
      {
        "pos": "v.",
        "zh": [
          "商定",
          "談妥"
        ],
        "ex": "The two companies negotiated a new contract.",
        "exZh": "兩家公司談妥了新合約。"
      }
    ],
    "family": [
      {
        "pos": "n.",
        "w": "negotiation",
        "zh": "談判、協商"
      },
      {
        "pos": "n.",
        "w": "negotiator",
        "zh": "談判者"
      },
      {
        "pos": "adj.",
        "w": "negotiable",
        "zh": "可協商的"
      }
    ],
    "collocations": [
      {
        "en": "negotiate a contract",
        "zh": "談合約"
      },
      {
        "en": "negotiate with",
        "zh": "與…談判"
      },
      {
        "en": "The salary is negotiable.",
        "zh": "薪資可議。"
      }
    ],
    "synonyms": [
      "discuss terms",
      "bargain",
      "work out"
    ],
    "pattern": {
      "rule": "ti 在 -tiate / -tion / -tial 裡念 [ʃ]",
      "words": [
        "initiate",
        "negotiation",
        "essential"
      ]
    },
    "root": "neg（不）+ otium（閒暇）→ 不得閒 → 忙著做生意、談條件",
    "tip": "Part 5 常考詞性：negotiation（名詞）vs. negotiable（形容詞）"
  },
  {
    "id": "receipt",
    "word": "receipt",
    "tier": 1,
    "topic": "購物財務",
    "kk": "[rɪˋsit]",
    "chunks": [
      {
        "t": "re",
        "k": "rɪ"
      },
      {
        "t": "cei",
        "k": "si",
        "s": 1,
        "n": "c 後面的 ei 念 [i]"
      },
      {
        "t": "p",
        "k": "",
        "silent": true,
        "n": "p 不發音！"
      },
      {
        "t": "t",
        "k": "t"
      }
    ],
    "senses": [
      {
        "pos": "n.",
        "zh": [
          "收據"
        ],
        "ex": "Please keep your receipt in case you need to return the item.",
        "exZh": "請保留收據，以便需要退貨時使用。"
      },
      {
        "pos": "n.",
        "zh": [
          "收到",
          "接收（正式）"
        ],
        "ex": "Please confirm receipt of this e-mail.",
        "exZh": "請確認已收到這封電子郵件。"
      }
    ],
    "family": [
      {
        "pos": "v.",
        "w": "receive",
        "zh": "收到"
      },
      {
        "pos": "n.",
        "w": "recipient",
        "zh": "收件人"
      },
      {
        "pos": "n.",
        "w": "reception",
        "zh": "接待處；接收"
      }
    ],
    "collocations": [
      {
        "en": "upon receipt of",
        "zh": "一收到…就"
      },
      {
        "en": "acknowledge receipt",
        "zh": "確認收到"
      },
      {
        "en": "original receipt",
        "zh": "收據正本"
      }
    ],
    "synonyms": [
      "proof of purchase",
      "sales slip"
    ],
    "pattern": {
      "rule": "c 後面接 ei 念 [si]",
      "words": [
        "receive",
        "ceiling",
        "deceive"
      ]
    },
    "root": "re（回）+ ceive（拿）→ 拿回來 → 收到；receipt 是「收到」的證明",
    "tip": "upon receipt of 是多益書信的常見片語"
  },
  {
    "id": "postpone",
    "word": "postpone",
    "tier": 1,
    "topic": "會議行程",
    "kk": "[postˋpon]",
    "chunks": [
      {
        "t": "post",
        "k": "post",
        "n": "o 念長音 [o]"
      },
      {
        "t": "pon",
        "k": "pon",
        "s": 1
      },
      {
        "t": "e",
        "k": "",
        "silent": true,
        "n": "字尾 e 不發音，讓前面的 o 念長音 [o]"
      }
    ],
    "senses": [
      {
        "pos": "v.",
        "zh": [
          "延期",
          "延後"
        ],
        "ex": "The meeting has been postponed until next Monday.",
        "exZh": "會議延到下週一。"
      }
    ],
    "family": [
      {
        "pos": "n.",
        "w": "postponement",
        "zh": "延期"
      }
    ],
    "collocations": [
      {
        "en": "postpone a meeting",
        "zh": "延後會議"
      },
      {
        "en": "postpone until",
        "zh": "延到…"
      },
      {
        "en": "postpone + V-ing",
        "zh": "延後做某事"
      }
    ],
    "synonyms": [
      "put off",
      "delay",
      "reschedule"
    ],
    "pattern": {
      "rule": "母音 + 子音 + 字尾 e → 母音念長音、e 不發音",
      "words": [
        "phone",
        "home",
        "tone"
      ]
    },
    "root": "post（之後）+ pone（放）→ 放到後面",
    "tip": "後面接動名詞：postpone signing the contract（不是 to sign）。Part 7 常改寫成 put off"
  },
  {
    "id": "invoice",
    "word": "invoice",
    "tier": 1,
    "topic": "購物財務",
    "kk": "[ˋɪnvɔɪs]",
    "chunks": [
      {
        "t": "in",
        "k": "ɪn",
        "s": 1
      },
      {
        "t": "v",
        "k": "v"
      },
      {
        "t": "oi",
        "k": "ɔɪ",
        "n": "oi 念 [ɔɪ]"
      },
      {
        "t": "ce",
        "k": "s",
        "n": "c 後面接 e 念 [s]，e 不發音"
      }
    ],
    "senses": [
      {
        "pos": "n.",
        "zh": [
          "發票",
          "請款單"
        ],
        "ex": "We will send the invoice at the end of the month.",
        "exZh": "我們會在月底寄出請款單。"
      },
      {
        "pos": "v.",
        "zh": [
          "開請款單給（某人）"
        ],
        "ex": "The supplier invoiced us for the extra parts.",
        "exZh": "供應商針對額外的零件向我們請款。"
      }
    ],
    "family": [],
    "collocations": [
      {
        "en": "issue an invoice",
        "zh": "開立發票"
      },
      {
        "en": "pay an invoice",
        "zh": "支付帳單"
      },
      {
        "en": "overdue invoice",
        "zh": "逾期未付的帳單"
      }
    ],
    "synonyms": [
      "bill",
      "statement"
    ],
    "pattern": {
      "rule": "oi / oy 念 [ɔɪ]",
      "words": [
        "voice",
        "choice",
        "employ"
      ]
    },
    "root": null,
    "tip": "財務情境常一起出現：overdue（逾期）、payment terms（付款條件）"
  },
  {
    "id": "schedule",
    "word": "schedule",
    "tier": 1,
    "topic": "會議行程",
    "kk": "[ˋskɛdʒʊl]",
    "chunks": [
      {
        "t": "sche",
        "k": "skɛ",
        "s": 1,
        "n": "sch 念 [sk]"
      },
      {
        "t": "dule",
        "k": "dʒʊl",
        "n": "d 遇到 u 念 [dʒ]"
      }
    ],
    "senses": [
      {
        "pos": "n.",
        "zh": [
          "時間表",
          "行程",
          "進度"
        ],
        "ex": "The project is behind schedule.",
        "exZh": "專案進度落後。"
      },
      {
        "pos": "v.",
        "zh": [
          "安排",
          "預定"
        ],
        "ex": "The interview is scheduled for 3 p.m.",
        "exZh": "面試安排在下午三點。"
      }
    ],
    "family": [
      {
        "pos": "v.",
        "w": "reschedule",
        "zh": "重新安排時間"
      }
    ],
    "collocations": [
      {
        "en": "ahead of schedule",
        "zh": "進度超前"
      },
      {
        "en": "behind schedule",
        "zh": "進度落後"
      },
      {
        "en": "be scheduled to V",
        "zh": "預定要…"
      }
    ],
    "synonyms": [
      "timetable",
      "agenda",
      "arrange"
    ],
    "pattern": {
      "rule": "sch 念 [sk]",
      "words": [
        "school",
        "scheme",
        "scholar"
      ]
    },
    "root": null,
    "tip": "英式念 [ˋʃɛdjul]，多益聽力兩種口音都會出現"
  },
  {
    "id": "reservation",
    "word": "reservation",
    "tier": 1,
    "topic": "旅遊餐飲",
    "kk": "[ˌrɛzɚˋveʃən]",
    "chunks": [
      {
        "t": "re",
        "k": "rɛ",
        "s": 2
      },
      {
        "t": "s",
        "k": "z",
        "n": "s 夾在兩個母音中間常念 [z]"
      },
      {
        "t": "er",
        "k": "ɚ"
      },
      {
        "t": "va",
        "k": "ve",
        "s": 1,
        "n": "重音節的 a 念 [e]"
      },
      {
        "t": "tion",
        "k": "ʃən",
        "n": "-tion 念 [ʃən]"
      }
    ],
    "senses": [
      {
        "pos": "n.",
        "zh": [
          "預約",
          "預訂"
        ],
        "ex": "I'd like to make a reservation for two at 7 p.m.",
        "exZh": "我想預訂晚上七點兩位。"
      },
      {
        "pos": "n.",
        "zh": [
          "疑慮",
          "保留意見"
        ],
        "ex": "Some board members have reservations about the plan.",
        "exZh": "有些董事對這個計畫有疑慮。"
      }
    ],
    "family": [
      {
        "pos": "v.",
        "w": "reserve",
        "zh": "預訂；保留"
      },
      {
        "pos": "adj.",
        "w": "reserved",
        "zh": "預訂的；含蓄的"
      }
    ],
    "collocations": [
      {
        "en": "make a reservation",
        "zh": "預訂"
      },
      {
        "en": "confirm a reservation",
        "zh": "確認預訂"
      },
      {
        "en": "have reservations about",
        "zh": "對…有疑慮"
      }
    ],
    "synonyms": [
      "booking",
      "doubt",
      "concern"
    ],
    "pattern": {
      "rule": "-tion 念 [ʃən]",
      "words": [
        "promotion",
        "location",
        "application"
      ]
    },
    "root": "re（回、保留）+ serve（保存）→ 先保留起來 → 預訂",
    "tip": "第二個意思「疑慮」常出現在 Part 7，不要只記預訂"
  },
  {
    "id": "promotion",
    "word": "promotion",
    "tier": 1,
    "topic": "人事職場",
    "kk": "[prəˋmoʃən]",
    "chunks": [
      {
        "t": "pro",
        "k": "prə",
        "n": "非重音的 o 弱化成 [ə]"
      },
      {
        "t": "mo",
        "k": "mo",
        "s": 1
      },
      {
        "t": "tion",
        "k": "ʃən",
        "n": "-tion 念 [ʃən]"
      }
    ],
    "senses": [
      {
        "pos": "n.",
        "zh": [
          "升遷",
          "晉升"
        ],
        "ex": "She received a promotion to sales manager.",
        "exZh": "她升任業務經理。"
      },
      {
        "pos": "n.",
        "zh": [
          "促銷",
          "宣傳"
        ],
        "ex": "The store is running a holiday promotion.",
        "exZh": "這家店正在做節日促銷。"
      }
    ],
    "family": [
      {
        "pos": "v.",
        "w": "promote",
        "zh": "使升遷；促銷"
      },
      {
        "pos": "adj.",
        "w": "promotional",
        "zh": "宣傳的"
      }
    ],
    "collocations": [
      {
        "en": "get a promotion",
        "zh": "獲得升遷"
      },
      {
        "en": "be promoted to",
        "zh": "被升為…"
      },
      {
        "en": "promotional materials",
        "zh": "宣傳資料"
      }
    ],
    "synonyms": [
      "advancement",
      "advertising campaign"
    ],
    "pattern": {
      "rule": "-tion 念 [ʃən]",
      "words": [
        "reservation",
        "location",
        "position"
      ]
    },
    "root": "pro（向前）+ mote（移動）→ 往前移 → 升遷、推廣",
    "tip": "兩個意思都常考：人事情境＝升遷，行銷情境＝促銷"
  },
  {
    "id": "available",
    "word": "available",
    "tier": 1,
    "topic": "辦公日常",
    "kk": "[əˋveləbḷ]",
    "chunks": [
      {
        "t": "a",
        "k": "ə",
        "n": "開頭非重音的 a 弱化成 [ə]"
      },
      {
        "t": "vai",
        "k": "ve",
        "s": 1,
        "n": "ai 念 [e]"
      },
      {
        "t": "la",
        "k": "lə"
      },
      {
        "t": "ble",
        "k": "bḷ",
        "n": "字尾 -ble 念 [bḷ]"
      }
    ],
    "senses": [
      {
        "pos": "adj.",
        "zh": [
          "可取得的",
          "可用的"
        ],
        "ex": "The new model is available in three colors.",
        "exZh": "新款有三種顏色可選。"
      },
      {
        "pos": "adj.",
        "zh": [
          "（人）有空的"
        ],
        "ex": "Is Ms. Chen available for a meeting this afternoon?",
        "exZh": "陳小姐今天下午有空開會嗎？"
      }
    ],
    "family": [
      {
        "pos": "n.",
        "w": "availability",
        "zh": "可用性；有空的時間"
      },
      {
        "pos": "adj.",
        "w": "unavailable",
        "zh": "無法取得的；沒空的"
      }
    ],
    "collocations": [
      {
        "en": "available for",
        "zh": "可供…；有空…"
      },
      {
        "en": "readily available",
        "zh": "隨時可取得"
      },
      {
        "en": "available upon request",
        "zh": "可應要求提供"
      }
    ],
    "synonyms": [
      "accessible",
      "obtainable",
      "free"
    ],
    "pattern": {
      "rule": "ai 念 [e]",
      "words": [
        "maintain",
        "mail",
        "wait"
      ]
    },
    "root": "a（向）+ vail（有用、有價值）+ able（可以）→ 可以派上用場",
    "tip": "Part 5 常考名詞 availability：check the availability of rooms"
  },
  {
    "id": "colleague",
    "word": "colleague",
    "tier": 1,
    "topic": "人事職場",
    "kk": "[ˋkɑlig]",
    "chunks": [
      {
        "t": "co",
        "k": "kɑ",
        "s": 1,
        "n": "o 念 [ɑ]"
      },
      {
        "t": "ll",
        "k": "l",
        "n": "雙 l 只念一個 [l]"
      },
      {
        "t": "ea",
        "k": "i",
        "n": "ea 念 [i]"
      },
      {
        "t": "g",
        "k": "g"
      },
      {
        "t": "ue",
        "k": "",
        "silent": true,
        "n": "字尾 ue 不發音"
      }
    ],
    "senses": [
      {
        "pos": "n.",
        "zh": [
          "同事"
        ],
        "ex": "I'm having lunch with a colleague from the marketing department.",
        "exZh": "我要和行銷部的一位同事吃午餐。"
      }
    ],
    "family": [],
    "collocations": [
      {
        "en": "a former colleague",
        "zh": "前同事"
      },
      {
        "en": "consult with colleagues",
        "zh": "和同事討論"
      }
    ],
    "synonyms": [
      "coworker",
      "associate",
      "peer"
    ],
    "pattern": {
      "rule": "字尾 -gue 的 ue 不發音",
      "words": [
        "league",
        "fatigue",
        "dialogue"
      ]
    },
    "root": "col（一起）+ leg（被選派）→ 一起被派任的人",
    "tip": "Part 7 常把 colleague 改寫成 coworker"
  },
  {
    "id": "deadline",
    "word": "deadline",
    "tier": 1,
    "topic": "辦公日常",
    "kk": "[ˋdɛdˌlaɪn]",
    "chunks": [
      {
        "t": "dead",
        "k": "dɛd",
        "s": 1,
        "n": "ea 在這裡念短音 [ɛ]"
      },
      {
        "t": "line",
        "k": "laɪn",
        "s": 2,
        "n": "i + 子音 + e → i 念 [aɪ]，e 不發音"
      }
    ],
    "senses": [
      {
        "pos": "n.",
        "zh": [
          "截止期限"
        ],
        "ex": "The deadline for applications is March 31.",
        "exZh": "申請截止日是三月三十一日。"
      }
    ],
    "family": [],
    "collocations": [
      {
        "en": "meet a deadline",
        "zh": "趕上期限"
      },
      {
        "en": "miss a deadline",
        "zh": "錯過期限"
      },
      {
        "en": "extend the deadline",
        "zh": "延長期限"
      },
      {
        "en": "tight deadline",
        "zh": "緊迫的期限"
      }
    ],
    "synonyms": [
      "due date",
      "time limit"
    ],
    "pattern": {
      "rule": "ea 念短音 [ɛ]",
      "words": [
        "head",
        "ready",
        "headquarters"
      ]
    },
    "root": "dead（死）+ line（線）→ 過了就「死」的線",
    "tip": "meet a deadline 的 meet 是「趕上、達成」，不是「見面」"
  },
  {
    "id": "budget",
    "word": "budget",
    "tier": 1,
    "topic": "購物財務",
    "kk": "[ˋbʌdʒɪt]",
    "chunks": [
      {
        "t": "bu",
        "k": "bʌ",
        "s": 1
      },
      {
        "t": "dg",
        "k": "dʒ",
        "n": "dg 合起來念 [dʒ]"
      },
      {
        "t": "et",
        "k": "ɪt",
        "n": "非重音的 e 念 [ɪ]"
      }
    ],
    "senses": [
      {
        "pos": "n.",
        "zh": [
          "預算"
        ],
        "ex": "The project went over budget.",
        "exZh": "這個專案超出預算。"
      },
      {
        "pos": "v.",
        "zh": [
          "編列預算"
        ],
        "ex": "We budgeted $5,000 for advertising.",
        "exZh": "我們編了五千美元的廣告預算。"
      },
      {
        "pos": "adj.",
        "zh": [
          "便宜的",
          "平價的"
        ],
        "ex": "We stayed at a budget hotel near the station.",
        "exZh": "我們住在車站附近的平價旅館。"
      }
    ],
    "family": [
      {
        "pos": "adj.",
        "w": "budgetary",
        "zh": "預算的"
      }
    ],
    "collocations": [
      {
        "en": "over budget",
        "zh": "超出預算"
      },
      {
        "en": "under budget",
        "zh": "低於預算"
      },
      {
        "en": "budget cut",
        "zh": "預算刪減"
      },
      {
        "en": "on a tight budget",
        "zh": "預算有限"
      }
    ],
    "synonyms": [
      "funds",
      "allocate",
      "economical"
    ],
    "pattern": {
      "rule": "dg / dge 念 [dʒ]",
      "words": [
        "bridge",
        "knowledge",
        "judgment"
      ]
    },
    "root": null,
    "tip": "當形容詞＝便宜的：budget airline 廉價航空"
  },
  {
    "id": "applicant",
    "word": "applicant",
    "tier": 1,
    "topic": "人事職場",
    "kk": "[ˋæpləkənt]",
    "chunks": [
      {
        "t": "a",
        "k": "æ",
        "s": 1
      },
      {
        "t": "ppli",
        "k": "plə",
        "n": "雙 p 只念一個 [p]；非重音的 i 弱化成 [ə]"
      },
      {
        "t": "cant",
        "k": "kənt",
        "n": "非重音的 a 弱化成 [ə]"
      }
    ],
    "senses": [
      {
        "pos": "n.",
        "zh": [
          "申請人",
          "應徵者"
        ],
        "ex": "All applicants must submit a résumé.",
        "exZh": "所有應徵者都必須繳交履歷。"
      }
    ],
    "family": [
      {
        "pos": "v.",
        "w": "apply",
        "zh": "申請"
      },
      {
        "pos": "n.",
        "w": "application",
        "zh": "申請；應用程式"
      },
      {
        "pos": "adj.",
        "w": "applicable",
        "zh": "適用的"
      }
    ],
    "collocations": [
      {
        "en": "job applicant",
        "zh": "求職者"
      },
      {
        "en": "successful applicant",
        "zh": "錄取者"
      },
      {
        "en": "qualified applicant",
        "zh": "符合資格的應徵者"
      }
    ],
    "synonyms": [
      "candidate",
      "job seeker"
    ],
    "pattern": {
      "rule": "非重音節的母音常弱化成 [ə]",
      "words": [
        "company",
        "hospital",
        "important"
      ]
    },
    "root": "apply（申請）+ -ant（…的人）→ 申請的人",
    "tip": "Part 5 常考：applicant（人）/ application（申請）/ apply（動詞）"
  },
  {
    "id": "qualified",
    "word": "qualified",
    "tier": 1,
    "topic": "人事職場",
    "kk": "[ˋkwɑləˌfaɪd]",
    "chunks": [
      {
        "t": "qua",
        "k": "kwɑ",
        "s": 1,
        "n": "qu 念 [kw]，a 念 [ɑ]"
      },
      {
        "t": "li",
        "k": "lə"
      },
      {
        "t": "fied",
        "k": "faɪd",
        "s": 2,
        "n": "qualify 的 y 變 i 加 ed；ie 念 [aɪ]，ed 念 [d]"
      }
    ],
    "senses": [
      {
        "pos": "adj.",
        "zh": [
          "有資格的",
          "合格的",
          "能勝任的"
        ],
        "ex": "We are looking for qualified engineers.",
        "exZh": "我們在找具備資格的工程師。"
      }
    ],
    "family": [
      {
        "pos": "v.",
        "w": "qualify",
        "zh": "使有資格；取得資格"
      },
      {
        "pos": "n.",
        "w": "qualification",
        "zh": "資格、條件"
      }
    ],
    "collocations": [
      {
        "en": "be qualified for",
        "zh": "有資格擔任…"
      },
      {
        "en": "highly qualified",
        "zh": "非常符合資格"
      },
      {
        "en": "qualified candidate",
        "zh": "合格人選"
      }
    ],
    "synonyms": [
      "eligible",
      "competent",
      "certified"
    ],
    "pattern": {
      "rule": "qu 念 [kw]",
      "words": [
        "quality",
        "quarter",
        "request"
      ]
    },
    "root": "qual（性質）+ fy（使）→ 使具備某種條件",
    "tip": "be qualified for + 職位 / be qualified to + 原形動詞"
  },
  {
    "id": "confidential",
    "word": "confidential",
    "tier": 1,
    "topic": "辦公日常",
    "kk": "[ˌkɑnfəˋdɛnʃəl]",
    "chunks": [
      {
        "t": "con",
        "k": "kɑn",
        "s": 2
      },
      {
        "t": "fi",
        "k": "fə"
      },
      {
        "t": "den",
        "k": "dɛn",
        "s": 1
      },
      {
        "t": "tial",
        "k": "ʃəl",
        "n": "-tial 念 [ʃəl]"
      }
    ],
    "senses": [
      {
        "pos": "adj.",
        "zh": [
          "機密的",
          "保密的"
        ],
        "ex": "This information is strictly confidential.",
        "exZh": "這項資訊是極機密。"
      }
    ],
    "family": [
      {
        "pos": "n.",
        "w": "confidentiality",
        "zh": "保密"
      },
      {
        "pos": "adv.",
        "w": "confidentially",
        "zh": "秘密地"
      },
      {
        "pos": "n.",
        "w": "confidence",
        "zh": "信心；信任"
      }
    ],
    "collocations": [
      {
        "en": "strictly confidential",
        "zh": "極機密"
      },
      {
        "en": "confidential documents",
        "zh": "機密文件"
      },
      {
        "en": "keep … confidential",
        "zh": "將…保密"
      }
    ],
    "synonyms": [
      "private",
      "classified",
      "secret"
    ],
    "pattern": {
      "rule": "-tial / -cial 念 [ʃəl]",
      "words": [
        "essential",
        "financial",
        "official"
      ]
    },
    "root": "con（加強）+ fid（信任）→ 只告訴信任的人",
    "tip": "不要和 confident（有信心的）搞混"
  },
  {
    "id": "merchandise",
    "word": "merchandise",
    "tier": 1,
    "topic": "購物財務",
    "kk": "[ˋmɝtʃənˌdaɪz]",
    "chunks": [
      {
        "t": "mer",
        "k": "mɝ",
        "s": 1,
        "n": "er 在重音節念 [ɝ]"
      },
      {
        "t": "chan",
        "k": "tʃən",
        "n": "ch 念 [tʃ]"
      },
      {
        "t": "dise",
        "k": "daɪz",
        "s": 2,
        "n": "s 念 [z]，字尾 e 不發音"
      }
    ],
    "senses": [
      {
        "pos": "n.",
        "zh": [
          "商品",
          "貨物（不可數）"
        ],
        "ex": "All merchandise is 20% off this week.",
        "exZh": "本週所有商品打八折。"
      }
    ],
    "family": [
      {
        "pos": "n.",
        "w": "merchant",
        "zh": "商人"
      },
      {
        "pos": "n.",
        "w": "merchandising",
        "zh": "商品行銷"
      }
    ],
    "collocations": [
      {
        "en": "return merchandise",
        "zh": "退貨"
      },
      {
        "en": "damaged merchandise",
        "zh": "損壞的商品"
      },
      {
        "en": "a wide range of merchandise",
        "zh": "種類繁多的商品"
      }
    ],
    "synonyms": [
      "goods",
      "products",
      "items"
    ],
    "pattern": {
      "rule": "er / ir / ur 在重音節念 [ɝ]",
      "words": [
        "purchase",
        "service",
        "firm"
      ]
    },
    "root": "merc（交易）→ merchant 商人 → 商人賣的東西",
    "tip": "不可數名詞：不能說 a merchandise 或 merchandises"
  },
  {
    "id": "warehouse",
    "word": "warehouse",
    "tier": 1,
    "topic": "物流製造",
    "kk": "[ˋwɛrˌhaʊs]",
    "chunks": [
      {
        "t": "ware",
        "k": "wɛr",
        "s": 1,
        "n": "are 念 [ɛr]"
      },
      {
        "t": "house",
        "k": "haʊs",
        "s": 2,
        "n": "ou 念 [aʊ]，字尾 e 不發音"
      }
    ],
    "senses": [
      {
        "pos": "n.",
        "zh": [
          "倉庫"
        ],
        "ex": "The goods are stored in a warehouse near the port.",
        "exZh": "貨物存放在港口附近的倉庫。"
      }
    ],
    "family": [],
    "collocations": [
      {
        "en": "warehouse manager",
        "zh": "倉庫經理"
      },
      {
        "en": "warehouse staff",
        "zh": "倉儲人員"
      },
      {
        "en": "in stock at the warehouse",
        "zh": "倉庫有庫存"
      }
    ],
    "synonyms": [
      "storehouse",
      "storage facility",
      "distribution center"
    ],
    "pattern": {
      "rule": "are 念 [ɛr]",
      "words": [
        "share",
        "software",
        "aware"
      ]
    },
    "root": "ware（貨物）+ house（房子）→ 放貨物的房子",
    "tip": "software、hardware 的 ware 也是「貨品」的意思"
  },
  {
    "id": "itinerary",
    "word": "itinerary",
    "tier": 1,
    "topic": "旅遊餐飲",
    "kk": "[aɪˋtɪnəˌrɛrɪ]",
    "chunks": [
      {
        "t": "i",
        "k": "aɪ",
        "n": "開頭的 i 念 [aɪ]"
      },
      {
        "t": "ti",
        "k": "tɪ",
        "s": 1
      },
      {
        "t": "ne",
        "k": "nə"
      },
      {
        "t": "ra",
        "k": "rɛ",
        "s": 2,
        "n": "美式的 -ary 念 [ˌɛrɪ]"
      },
      {
        "t": "ry",
        "k": "rɪ"
      }
    ],
    "senses": [
      {
        "pos": "n.",
        "zh": [
          "行程表",
          "旅行路線"
        ],
        "ex": "Your travel itinerary has been sent to your e-mail.",
        "exZh": "你的旅遊行程表已經寄到你的電子郵件。"
      }
    ],
    "family": [],
    "collocations": [
      {
        "en": "travel itinerary",
        "zh": "旅遊行程"
      },
      {
        "en": "detailed itinerary",
        "zh": "詳細行程"
      },
      {
        "en": "revise the itinerary",
        "zh": "修改行程"
      }
    ],
    "synonyms": [
      "schedule",
      "travel plan",
      "route"
    ],
    "pattern": {
      "rule": "美式的 -ary 念 [ˌɛrɪ]",
      "words": [
        "necessary",
        "secretary",
        "temporary"
      ]
    },
    "root": "iter（走、旅行）→ 要走的路線 → 行程",
    "tip": "差旅情境必考，Part 3/4 常聽到 Let me check my itinerary."
  },
  {
    "id": "reimburse",
    "word": "reimburse",
    "tier": 1,
    "topic": "購物財務",
    "kk": "[ˌriɪmˋbɝs]",
    "chunks": [
      {
        "t": "re",
        "k": "ri",
        "s": 2
      },
      {
        "t": "im",
        "k": "ɪm"
      },
      {
        "t": "bur",
        "k": "bɝ",
        "s": 1,
        "n": "ur 念 [ɝ]"
      },
      {
        "t": "se",
        "k": "s",
        "n": "字尾 se 念 [s]"
      }
    ],
    "senses": [
      {
        "pos": "v.",
        "zh": [
          "退還（費用）",
          "報銷",
          "償還"
        ],
        "ex": "The company will reimburse you for travel expenses.",
        "exZh": "公司會報銷你的差旅費。"
      }
    ],
    "family": [
      {
        "pos": "n.",
        "w": "reimbursement",
        "zh": "報銷、償還"
      }
    ],
    "collocations": [
      {
        "en": "reimburse sb. for sth.",
        "zh": "為某事償還某人"
      },
      {
        "en": "travel reimbursement",
        "zh": "差旅費報銷"
      },
      {
        "en": "submit a reimbursement form",
        "zh": "提交報銷單"
      }
    ],
    "synonyms": [
      "pay back",
      "refund",
      "compensate"
    ],
    "pattern": {
      "rule": "ur 念 [ɝ]",
      "words": [
        "purchase",
        "turn",
        "nurse"
      ]
    },
    "root": "re（回）+ im（進入）+ burse（錢包）→ 把錢放回錢包",
    "tip": "報帳要附收據 (receipt)，這兩個字常一起出現"
  },
  {
    "id": "refund",
    "word": "refund",
    "tier": 1,
    "topic": "購物財務",
    "kk": "[ˋriˌfʌnd]",
    "stressNote": "名詞重音在前 [ˋriˌfʌnd]，動詞重音在後 [rɪˋfʌnd]（名前動後）",
    "chunks": [
      {
        "t": "re",
        "k": "ri",
        "s": 1,
        "n": "名詞念 [ˋri]；動詞念 [rɪ]，重音移到後面"
      },
      {
        "t": "fund",
        "k": "fʌnd",
        "s": 2
      }
    ],
    "senses": [
      {
        "pos": "n.",
        "zh": [
          "退款"
        ],
        "ex": "You can get a full refund within 30 days.",
        "exZh": "三十天內可以全額退款。"
      },
      {
        "pos": "v.",
        "zh": [
          "退款",
          "退還"
        ],
        "ex": "We will refund the full amount.",
        "exZh": "我們會退還全額。"
      }
    ],
    "family": [
      {
        "pos": "adj.",
        "w": "refundable",
        "zh": "可退款的"
      },
      {
        "pos": "adj.",
        "w": "non-refundable",
        "zh": "不可退款的"
      }
    ],
    "collocations": [
      {
        "en": "full refund",
        "zh": "全額退款"
      },
      {
        "en": "request a refund",
        "zh": "要求退款"
      },
      {
        "en": "non-refundable deposit",
        "zh": "不可退的訂金"
      }
    ],
    "synonyms": [
      "reimbursement",
      "repayment",
      "pay back"
    ],
    "pattern": {
      "rule": "名前動後：當名詞重音在前，當動詞重音在後",
      "words": [
        "record",
        "increase",
        "present"
      ]
    },
    "root": "re（回）+ fund（資金）→ 錢回來",
    "tip": "non-refundable 常出現在訂房、票券的規定裡"
  },
  {
    "id": "estimate",
    "word": "estimate",
    "tier": 1,
    "topic": "購物財務",
    "kk": "[ˋɛstəˌmet]",
    "stressNote": "動詞念 [ˋɛstəˌmet]；名詞念 [ˋɛstəmɪt]，字尾念 [mɪt]",
    "chunks": [
      {
        "t": "es",
        "k": "ɛs",
        "s": 1
      },
      {
        "t": "ti",
        "k": "tə"
      },
      {
        "t": "mate",
        "k": "met",
        "s": 2,
        "n": "動詞的 -ate 念 [et]，名詞念 [ɪt]"
      }
    ],
    "senses": [
      {
        "pos": "v.",
        "zh": [
          "估計",
          "估算"
        ],
        "ex": "We estimate that sales will rise by 10%.",
        "exZh": "我們估計銷售額會成長 10%。"
      },
      {
        "pos": "n.",
        "zh": [
          "估計",
          "估價單"
        ],
        "ex": "Please send us a cost estimate before starting the work.",
        "exZh": "開工前請寄估價單給我們。"
      }
    ],
    "family": [
      {
        "pos": "n.",
        "w": "estimation",
        "zh": "估計"
      },
      {
        "pos": "adj.",
        "w": "estimated",
        "zh": "估計的"
      }
    ],
    "collocations": [
      {
        "en": "rough estimate",
        "zh": "粗略估計"
      },
      {
        "en": "cost estimate",
        "zh": "成本估算"
      },
      {
        "en": "estimated delivery date",
        "zh": "預估到貨日"
      }
    ],
    "synonyms": [
      "calculate",
      "assess",
      "quote"
    ],
    "pattern": {
      "rule": "-ate 當動詞念 [et]，當名詞／形容詞念 [ɪt]",
      "words": [
        "separate",
        "graduate",
        "alternate"
      ]
    },
    "root": "拉丁文 aestimare（評估價值），esteem（尊重）也是同源字",
    "tip": "Part 7 常見：estimated delivery date 預估到貨日"
  },
  {
    "id": "agenda",
    "word": "agenda",
    "tier": 1,
    "topic": "會議行程",
    "kk": "[əˋdʒɛndə]",
    "chunks": [
      {
        "t": "a",
        "k": "ə",
        "n": "開頭非重音的 a 弱化成 [ə]"
      },
      {
        "t": "gen",
        "k": "dʒɛn",
        "s": 1,
        "n": "g 後面接 e 念 [dʒ]"
      },
      {
        "t": "da",
        "k": "də",
        "n": "字尾非重音的 a 念 [ə]"
      }
    ],
    "senses": [
      {
        "pos": "n.",
        "zh": [
          "議程",
          "議事日程"
        ],
        "ex": "The budget review is the first item on the agenda.",
        "exZh": "預算檢討是議程上的第一項。"
      },
      {
        "pos": "n.",
        "zh": [
          "待辦事項",
          "優先要務"
        ],
        "ex": "Hiring more engineers is high on our agenda this year.",
        "exZh": "今年多聘工程師是我們的優先要務。"
      }
    ],
    "family": [],
    "collocations": [
      {
        "en": "on the agenda",
        "zh": "列在議程上"
      },
      {
        "en": "the next item on the agenda",
        "zh": "議程的下一項"
      },
      {
        "en": "set the agenda",
        "zh": "訂定議程"
      },
      {
        "en": "meeting agenda",
        "zh": "會議議程"
      }
    ],
    "synonyms": [
      "schedule",
      "program",
      "list of topics"
    ],
    "pattern": {
      "rule": "g 後面接 e / i / y 常念 [dʒ]",
      "words": [
        "general",
        "manager",
        "original"
      ]
    },
    "root": "拉丁文 agenda（應該做的事），來自 agere（做）",
    "tip": "Part 3/4 常聽到 Let's move on to the next item on the agenda."
  },
  {
    "id": "attend",
    "word": "attend",
    "tier": 1,
    "topic": "會議行程",
    "kk": "[əˋtɛnd]",
    "chunks": [
      {
        "t": "a",
        "k": "ə",
        "n": "開頭非重音的 a 弱化成 [ə]"
      },
      {
        "t": "ttend",
        "k": "tɛnd",
        "s": 1,
        "n": "雙 t 只念一個 [t]"
      }
    ],
    "senses": [
      {
        "pos": "v.",
        "zh": [
          "出席",
          "參加"
        ],
        "ex": "All staff are required to attend the safety training.",
        "exZh": "全體員工都必須參加安全訓練。"
      },
      {
        "pos": "v.",
        "zh": [
          "處理",
          "照料（attend to）"
        ],
        "ex": "A sales associate will attend to you shortly.",
        "exZh": "店員馬上就會來為您服務。"
      }
    ],
    "family": [
      {
        "pos": "n.",
        "w": "attendance",
        "zh": "出席；出席人數"
      },
      {
        "pos": "n.",
        "w": "attendee",
        "zh": "出席者、與會者"
      },
      {
        "pos": "n.",
        "w": "attendant",
        "zh": "服務員（如 flight attendant 空服員）"
      },
      {
        "pos": "n.",
        "w": "attention",
        "zh": "注意"
      }
    ],
    "collocations": [
      {
        "en": "attend a meeting",
        "zh": "出席會議"
      },
      {
        "en": "attend to",
        "zh": "處理；照料"
      },
      {
        "en": "well-attended",
        "zh": "出席踴躍的"
      }
    ],
    "synonyms": [
      "participate in",
      "take part in",
      "be present at"
    ],
    "pattern": {
      "rule": "雙子音只念一個音",
      "words": [
        "attach",
        "office",
        "account"
      ]
    },
    "root": "at（ad，向）+ tend（伸展）→ 把心思伸向某處 → 留意、照料、出席",
    "tip": "attend 是及物動詞：attend the meeting（不是 attend to the meeting）；attend to 是「處理」。Part 5 常考 attendance / attendee"
  },
  {
    "id": "conference",
    "word": "conference",
    "tier": 1,
    "topic": "會議行程",
    "kk": "[ˋkɑnfərəns]",
    "chunks": [
      {
        "t": "con",
        "k": "kɑn",
        "s": 1,
        "n": "重音節的 o 念 [ɑ]"
      },
      {
        "t": "fer",
        "k": "fər",
        "n": "非重音的 e 弱化成 [ə]"
      },
      {
        "t": "ence",
        "k": "əns",
        "n": "字尾 -ence 念 [əns]"
      }
    ],
    "senses": [
      {
        "pos": "n.",
        "zh": [
          "會議",
          "研討會"
        ],
        "ex": "She will present her research at the annual sales conference.",
        "exZh": "她將在年度業務大會上發表她的研究。"
      },
      {
        "pos": "n.",
        "zh": [
          "商討",
          "協商"
        ],
        "ex": "Mr. Lee is in conference with a client and can't take your call.",
        "exZh": "李先生正在和客戶開會，無法接聽您的電話。"
      }
    ],
    "family": [
      {
        "pos": "v.",
        "w": "confer",
        "zh": "商議；授予"
      }
    ],
    "collocations": [
      {
        "en": "conference call",
        "zh": "電話會議"
      },
      {
        "en": "conference room",
        "zh": "會議室"
      },
      {
        "en": "hold a conference",
        "zh": "舉行會議"
      },
      {
        "en": "press conference",
        "zh": "記者會"
      }
    ],
    "synonyms": [
      "meeting",
      "convention",
      "seminar"
    ],
    "pattern": {
      "rule": "字尾 -ence / -ance 念 [əns]",
      "words": [
        "experience",
        "difference",
        "assistance"
      ]
    },
    "root": "con（一起）+ fer（帶來）→ 把大家的意見帶到一起 → 會議",
    "tip": "conference call＝電話會議；Part 3 常見情境：預訂 conference room、報名參加 conference"
  },
  {
    "id": "minutes",
    "word": "minutes",
    "tier": 1,
    "topic": "會議行程",
    "kk": "[ˋmɪnɪts]",
    "chunks": [
      {
        "t": "mi",
        "k": "mɪ",
        "s": 1
      },
      {
        "t": "nu",
        "k": "nɪ",
        "n": "非重音的 u 弱化成 [ɪ]"
      },
      {
        "t": "tes",
        "k": "ts",
        "n": "e 不發音，t + s 連成 [ts]"
      }
    ],
    "senses": [
      {
        "pos": "n.",
        "zh": [
          "會議記錄（用複數）"
        ],
        "ex": "Could you take the minutes at today's meeting?",
        "exZh": "你可以幫忙做今天的會議記錄嗎？"
      },
      {
        "pos": "n.",
        "zh": [
          "分鐘"
        ],
        "ex": "The shuttle bus leaves every fifteen minutes.",
        "exZh": "接駁車每十五分鐘發一班。"
      }
    ],
    "family": [
      {
        "pos": "n.",
        "w": "minute",
        "zh": "分鐘；片刻"
      },
      {
        "pos": "adj.",
        "w": "minute",
        "zh": "微小的（念 [maɪˋnjut]，發音不同）"
      }
    ],
    "collocations": [
      {
        "en": "take the minutes",
        "zh": "做會議記錄"
      },
      {
        "en": "the minutes of the meeting",
        "zh": "會議記錄"
      },
      {
        "en": "approve the minutes",
        "zh": "通過會議記錄"
      },
      {
        "en": "in a few minutes",
        "zh": "幾分鐘後"
      }
    ],
    "synonyms": [
      "meeting notes",
      "record of the meeting",
      "summary"
    ],
    "pattern": {
      "rule": "重音節 i + 子音 → i 念短音 [ɪ]",
      "words": [
        "finish",
        "visit",
        "limit"
      ]
    },
    "root": "拉丁文 minutus（細小的）→ 一小時切成的小段＝分鐘；會議記錄一般認為源自「用小字寫的草稿」",
    "tip": "「會議記錄」一定用複數 the minutes，take the minutes＝做會議記錄；不要只記「分鐘」"
  },
  {
    "id": "inventory",
    "word": "inventory",
    "tier": 1,
    "topic": "物流製造",
    "kk": "[ˋɪnvənˌtɔrɪ]",
    "chunks": [
      {
        "t": "in",
        "k": "ɪn",
        "s": 1
      },
      {
        "t": "ven",
        "k": "vən",
        "n": "非重音的 e 弱化成 [ə]"
      },
      {
        "t": "to",
        "k": "tɔ",
        "s": 2,
        "n": "美式的 -ory 念 [ˌɔrɪ]"
      },
      {
        "t": "ry",
        "k": "rɪ"
      }
    ],
    "senses": [
      {
        "pos": "n.",
        "zh": [
          "庫存",
          "存貨"
        ],
        "ex": "We need to reduce our inventory before the new models arrive.",
        "exZh": "新款到貨前我們需要減少庫存。"
      },
      {
        "pos": "n.",
        "zh": [
          "存貨清單",
          "盤點"
        ],
        "ex": "The store will close early on Friday to take inventory.",
        "exZh": "這家店週五會提早打烊進行盤點。"
      }
    ],
    "family": [],
    "collocations": [
      {
        "en": "take inventory",
        "zh": "盤點存貨"
      },
      {
        "en": "inventory control",
        "zh": "庫存管理"
      },
      {
        "en": "excess inventory",
        "zh": "過剩庫存"
      }
    ],
    "synonyms": [
      "stock",
      "goods on hand",
      "itemized list"
    ],
    "pattern": {
      "rule": "美式的 -ory 念 [ˌɔrɪ]",
      "words": [
        "category",
        "territory",
        "laboratory"
      ]
    },
    "root": "拉丁文 invenire（找到）：in（進入）+ ven（來）→ 把找到的東西列成清單",
    "tip": "take inventory＝盤點；Part 7 常和 in stock / out of stock 一起出現，inventory 常被改寫成 stock"
  },
  {
    "id": "maintenance",
    "word": "maintenance",
    "tier": 1,
    "topic": "辦公日常",
    "kk": "[ˋmentənəns]",
    "chunks": [
      {
        "t": "main",
        "k": "men",
        "s": 1,
        "n": "ai 念 [e]"
      },
      {
        "t": "te",
        "k": "tə",
        "n": "非重音的 e 弱化成 [ə]"
      },
      {
        "t": "nance",
        "k": "nəns",
        "n": "字尾 -ance 念 [əns]"
      }
    ],
    "senses": [
      {
        "pos": "n.",
        "zh": [
          "維修",
          "保養"
        ],
        "ex": "The elevator will be closed for maintenance on Saturday.",
        "exZh": "電梯週六因保養暫停使用。"
      },
      {
        "pos": "n.",
        "zh": [
          "維持",
          "保持"
        ],
        "ex": "Regular training is essential for the maintenance of quality standards.",
        "exZh": "定期訓練對維持品質標準非常重要。"
      }
    ],
    "family": [
      {
        "pos": "v.",
        "w": "maintain",
        "zh": "維持；維修、保養"
      }
    ],
    "collocations": [
      {
        "en": "routine maintenance",
        "zh": "例行保養"
      },
      {
        "en": "maintenance work",
        "zh": "維修工程"
      },
      {
        "en": "maintenance department",
        "zh": "維修部門"
      },
      {
        "en": "scheduled maintenance",
        "zh": "定期維修"
      }
    ],
    "synonyms": [
      "upkeep",
      "repair",
      "servicing"
    ],
    "pattern": {
      "rule": "ai 念 [e]",
      "words": [
        "explain",
        "train",
        "paint"
      ]
    },
    "root": "main（手，拉丁文 manus）+ ten（握住）→ 用手握住 → 維持、保養",
    "tip": "拼字陷阱：maintain → maintenance（ai 變成 e，不是 maintainance）；發音也從 [menˋten] 變成 [ˋmentənəns]，重音移到前面"
  },
  {
    "id": "renovation",
    "word": "renovation",
    "tier": 1,
    "topic": "辦公日常",
    "kk": "[ˌrɛnəˋveʃən]",
    "chunks": [
      {
        "t": "re",
        "k": "rɛ",
        "s": 2
      },
      {
        "t": "no",
        "k": "nə",
        "n": "非重音的 o 弱化成 [ə]"
      },
      {
        "t": "va",
        "k": "ve",
        "s": 1,
        "n": "重音節的 a 念 [e]"
      },
      {
        "t": "tion",
        "k": "ʃən",
        "n": "-tion 念 [ʃən]"
      }
    ],
    "senses": [
      {
        "pos": "n.",
        "zh": [
          "整修",
          "翻新"
        ],
        "ex": "The lobby is closed for renovation until the end of May.",
        "exZh": "大廳整修中，關閉到五月底。"
      }
    ],
    "family": [
      {
        "pos": "v.",
        "w": "renovate",
        "zh": "整修、翻新"
      },
      {
        "pos": "adj.",
        "w": "renovated",
        "zh": "整修過的"
      }
    ],
    "collocations": [
      {
        "en": "under renovation",
        "zh": "整修中"
      },
      {
        "en": "closed for renovation",
        "zh": "因整修暫停開放"
      },
      {
        "en": "renovation work",
        "zh": "整修工程"
      },
      {
        "en": "extensive renovation",
        "zh": "大規模整修"
      }
    ],
    "synonyms": [
      "remodeling",
      "refurbishment",
      "upgrade"
    ],
    "pattern": {
      "rule": "重音節結尾的 a（後面沒有子音）念 [e]",
      "words": [
        "nation",
        "station",
        "vacation"
      ]
    },
    "root": "re（再）+ nov（新）→ 使再變新 → 翻新",
    "tip": "under renovation＝整修中，Part 7 公告常見；動詞常用被動 The office is being renovated."
  },
  {
    "id": "facility",
    "word": "facility",
    "tier": 1,
    "topic": "物流製造",
    "kk": "[fəˋsɪlətɪ]",
    "chunks": [
      {
        "t": "fa",
        "k": "fə",
        "n": "非重音的 a 弱化成 [ə]"
      },
      {
        "t": "ci",
        "k": "sɪ",
        "s": 1,
        "n": "c 後面接 i 念 [s]"
      },
      {
        "t": "li",
        "k": "lə",
        "n": "非重音的 i 弱化成 [ə]"
      },
      {
        "t": "ty",
        "k": "tɪ",
        "n": "字尾 y 念 [ɪ]"
      }
    ],
    "senses": [
      {
        "pos": "n.",
        "zh": [
          "設施",
          "設備（常用複數）"
        ],
        "ex": "The hotel's facilities include a gym and a business center.",
        "exZh": "飯店的設施包括健身房和商務中心。"
      },
      {
        "pos": "n.",
        "zh": [
          "（特定用途的）場所",
          "廠房"
        ],
        "ex": "The company is opening a new manufacturing facility in Vietnam.",
        "exZh": "公司將在越南開設新的製造廠。"
      }
    ],
    "family": [
      {
        "pos": "v.",
        "w": "facilitate",
        "zh": "促進、使容易"
      },
      {
        "pos": "n.",
        "w": "facilitator",
        "zh": "協調人、主持人"
      }
    ],
    "collocations": [
      {
        "en": "manufacturing facility",
        "zh": "製造廠"
      },
      {
        "en": "storage facility",
        "zh": "倉儲設施"
      },
      {
        "en": "sports facilities",
        "zh": "運動設施"
      },
      {
        "en": "state-of-the-art facility",
        "zh": "最先進的設施"
      }
    ],
    "synonyms": [
      "plant",
      "site",
      "amenities"
    ],
    "pattern": {
      "rule": "c 後面接 e / i / y 念 [s]",
      "words": [
        "city",
        "office",
        "policy"
      ]
    },
    "root": "拉丁文 facilis（容易的）→ 讓事情變容易的東西 → 設施",
    "tip": "Part 7 常把 plant / factory 改寫成 facility；Part 5 詞性：facility（名詞）vs. facilitate（動詞＝促進）"
  },
  {
    "id": "procedure",
    "word": "procedure",
    "tier": 1,
    "topic": "辦公日常",
    "kk": "[prəˋsidʒɚ]",
    "chunks": [
      {
        "t": "pro",
        "k": "prə",
        "n": "非重音的 o 弱化成 [ə]"
      },
      {
        "t": "ce",
        "k": "si",
        "s": 1,
        "n": "c 後面接 e 念 [s]；重音節的 e 念 [i]"
      },
      {
        "t": "dure",
        "k": "dʒɚ",
        "n": "d 遇到 u 念 [dʒ]，-ure 念 [ɚ]"
      }
    ],
    "senses": [
      {
        "pos": "n.",
        "zh": [
          "程序",
          "步驟",
          "手續"
        ],
        "ex": "Please follow the standard procedure when submitting expense reports.",
        "exZh": "提交費用報告時請遵循標準程序。"
      }
    ],
    "family": [
      {
        "pos": "v.",
        "w": "proceed",
        "zh": "繼續進行；前往"
      },
      {
        "pos": "adj.",
        "w": "procedural",
        "zh": "程序上的"
      }
    ],
    "collocations": [
      {
        "en": "follow the procedure",
        "zh": "遵循程序"
      },
      {
        "en": "safety procedures",
        "zh": "安全程序"
      },
      {
        "en": "standard operating procedure",
        "zh": "標準作業程序（SOP）"
      },
      {
        "en": "emergency procedures",
        "zh": "緊急應變程序"
      }
    ],
    "synonyms": [
      "process",
      "steps",
      "protocol"
    ],
    "pattern": {
      "rule": "d 遇到非重音的 u 常念 [dʒ]",
      "words": [
        "schedule",
        "individual",
        "gradual"
      ]
    },
    "root": "pro（向前）+ ced（走）→ 一步一步往前走 → 程序",
    "tip": "Part 5 常考詞性：procedure（名詞）vs. proceed（動詞）；proceed to＝前往（Please proceed to Gate 5.）"
  },
  {
    "id": "efficient",
    "word": "efficient",
    "tier": 1,
    "topic": "辦公日常",
    "kk": "[ɪˋfɪʃənt]",
    "chunks": [
      {
        "t": "e",
        "k": "ɪ",
        "n": "開頭非重音的 e 念 [ɪ]"
      },
      {
        "t": "ffi",
        "k": "fɪ",
        "s": 1,
        "n": "雙 f 只念一個 [f]"
      },
      {
        "t": "cient",
        "k": "ʃənt",
        "n": "-cient 念 [ʃənt]"
      }
    ],
    "senses": [
      {
        "pos": "adj.",
        "zh": [
          "有效率的",
          "能幹的"
        ],
        "ex": "The new software makes the ordering process more efficient.",
        "exZh": "新軟體讓訂購流程更有效率。"
      },
      {
        "pos": "adj.",
        "zh": [
          "（機器）節能的",
          "不浪費的"
        ],
        "ex": "These air conditioners are very energy-efficient.",
        "exZh": "這些冷氣非常節能。"
      }
    ],
    "family": [
      {
        "pos": "n.",
        "w": "efficiency",
        "zh": "效率"
      },
      {
        "pos": "adv.",
        "w": "efficiently",
        "zh": "有效率地"
      },
      {
        "pos": "adj.",
        "w": "inefficient",
        "zh": "沒效率的"
      }
    ],
    "collocations": [
      {
        "en": "energy-efficient",
        "zh": "節能的"
      },
      {
        "en": "cost-efficient",
        "zh": "符合成本效益的"
      },
      {
        "en": "efficient use of",
        "zh": "有效利用…"
      },
      {
        "en": "highly efficient",
        "zh": "非常有效率的"
      }
    ],
    "synonyms": [
      "productive",
      "well-organized",
      "streamlined"
    ],
    "pattern": {
      "rule": "ci + 母音念 [ʃ]",
      "words": [
        "special",
        "official",
        "sufficient"
      ]
    },
    "root": "ef（ex，出）+ fic（做）→ 做出成果 → 有效率的",
    "tip": "efficient（有效率、不浪費）≠ effective（有效果的）；Part 5 常考副詞 efficiently 修飾動詞"
  },
  {
    "id": "distribute",
    "word": "distribute",
    "tier": 1,
    "topic": "物流製造",
    "kk": "[dɪˋstrɪbjut]",
    "chunks": [
      {
        "t": "di",
        "k": "dɪ"
      },
      {
        "t": "stri",
        "k": "strɪ",
        "s": 1
      },
      {
        "t": "bute",
        "k": "bjut",
        "n": "u + 子音 + e → u 念 [ju]，e 不發音"
      }
    ],
    "senses": [
      {
        "pos": "v.",
        "zh": [
          "分發",
          "分配"
        ],
        "ex": "Please distribute these handouts before the presentation begins.",
        "exZh": "請在簡報開始前發這些講義。"
      },
      {
        "pos": "v.",
        "zh": [
          "經銷",
          "配送"
        ],
        "ex": "Our products are distributed to stores across Asia.",
        "exZh": "我們的產品配送到全亞洲的商店。"
      }
    ],
    "family": [
      {
        "pos": "n.",
        "w": "distribution",
        "zh": "分配；配送、經銷"
      },
      {
        "pos": "n.",
        "w": "distributor",
        "zh": "經銷商"
      }
    ],
    "collocations": [
      {
        "en": "distribute handouts",
        "zh": "發講義"
      },
      {
        "en": "distribute evenly",
        "zh": "平均分配"
      },
      {
        "en": "distribution center",
        "zh": "配送中心"
      },
      {
        "en": "exclusive distributor",
        "zh": "獨家經銷商"
      }
    ],
    "synonyms": [
      "hand out",
      "give out",
      "deliver"
    ],
    "pattern": {
      "rule": "u + 子音 + e → u 念 [ju]",
      "words": [
        "contribute",
        "use",
        "compute"
      ]
    },
    "root": "dis（分開）+ tribute（給予）→ 分開給 → 分配",
    "tip": "Part 7 常把 hand out 改寫成 distribute；distributor＝經銷商，Part 5 注意人 vs. 事（distribution）"
  },
  {
    "id": "assignment",
    "word": "assignment",
    "tier": 1,
    "topic": "人事職場",
    "kk": "[əˋsaɪnmənt]",
    "chunks": [
      {
        "t": "a",
        "k": "ə",
        "n": "開頭非重音的 a 弱化成 [ə]"
      },
      {
        "t": "ssi",
        "k": "saɪ",
        "s": 1,
        "n": "雙 s 只念一個 [s]；i 念 [aɪ]"
      },
      {
        "t": "g",
        "k": "",
        "silent": true,
        "n": "gn 的 g 不發音！"
      },
      {
        "t": "n",
        "k": "n"
      },
      {
        "t": "ment",
        "k": "mənt",
        "n": "-ment 念 [mənt]"
      }
    ],
    "senses": [
      {
        "pos": "n.",
        "zh": [
          "任務",
          "指派的工作"
        ],
        "ex": "Her first assignment was to organize the product launch.",
        "exZh": "她的第一個任務是籌辦產品發表會。"
      },
      {
        "pos": "n.",
        "zh": [
          "分派",
          "指派"
        ],
        "ex": "Seat assignments will be sent by e-mail before the event.",
        "exZh": "座位分配會在活動前以電子郵件寄出。"
      }
    ],
    "family": [
      {
        "pos": "v.",
        "w": "assign",
        "zh": "指派、分配"
      }
    ],
    "collocations": [
      {
        "en": "on assignment",
        "zh": "（外派）執行任務中"
      },
      {
        "en": "complete an assignment",
        "zh": "完成任務"
      },
      {
        "en": "overseas assignment",
        "zh": "海外派任"
      },
      {
        "en": "temporary assignment",
        "zh": "臨時任務"
      }
    ],
    "synonyms": [
      "task",
      "project",
      "duty"
    ],
    "pattern": {
      "rule": "gn 的 g 不發音",
      "words": [
        "sign",
        "design",
        "foreign"
      ]
    },
    "root": "as（ad，向）+ sign（記號）→ 做記號分給某人 → 指派",
    "tip": "assign A to B＝把 A 指派給 B；常見被動 be assigned to the project"
  },
  {
    "id": "confirm",
    "word": "confirm",
    "tier": 1,
    "topic": "辦公日常",
    "kk": "[kənˋfɝm]",
    "chunks": [
      {
        "t": "con",
        "k": "kən",
        "n": "非重音的 o 弱化成 [ə]"
      },
      {
        "t": "firm",
        "k": "fɝm",
        "s": 1,
        "n": "ir 在重音節念 [ɝ]"
      }
    ],
    "senses": [
      {
        "pos": "v.",
        "zh": [
          "確認",
          "證實"
        ],
        "ex": "Please call the hotel to confirm your reservation.",
        "exZh": "請打電話給飯店確認你的訂房。"
      }
    ],
    "family": [
      {
        "pos": "n.",
        "w": "confirmation",
        "zh": "確認；確認函"
      },
      {
        "pos": "adj.",
        "w": "confirmed",
        "zh": "已確認的"
      }
    ],
    "collocations": [
      {
        "en": "confirm a reservation",
        "zh": "確認預訂"
      },
      {
        "en": "confirm receipt of",
        "zh": "確認收到…"
      },
      {
        "en": "confirmation number",
        "zh": "確認編號、訂位代號"
      },
      {
        "en": "confirmation e-mail",
        "zh": "確認信"
      }
    ],
    "synonyms": [
      "verify",
      "make sure",
      "check"
    ],
    "pattern": {
      "rule": "er / ir / ur 在重音節念 [ɝ]",
      "words": [
        "first",
        "third",
        "circle"
      ]
    },
    "root": "con（加強）+ firm（堅固）→ 使更穩固 → 確認",
    "tip": "Part 5 常考名詞 confirmation；Part 7 常把 confirm 改寫成 verify"
  },
  {
    "id": "cancellation",
    "word": "cancellation",
    "tier": 1,
    "topic": "旅遊餐飲",
    "kk": "[ˌkænsəˋleʃən]",
    "chunks": [
      {
        "t": "can",
        "k": "kæn",
        "s": 2
      },
      {
        "t": "ce",
        "k": "sə",
        "n": "c 後面接 e 念 [s]；非重音的 e 弱化成 [ə]"
      },
      {
        "t": "lla",
        "k": "le",
        "s": 1,
        "n": "雙 l 只念一個 [l]；重音節的 a 念 [e]"
      },
      {
        "t": "tion",
        "k": "ʃən",
        "n": "-tion 念 [ʃən]"
      }
    ],
    "senses": [
      {
        "pos": "n.",
        "zh": [
          "取消"
        ],
        "ex": "Due to a cancellation, we have one room available tonight.",
        "exZh": "因為有人取消，我們今晚有一間空房。"
      }
    ],
    "family": [
      {
        "pos": "v.",
        "w": "cancel",
        "zh": "取消"
      }
    ],
    "collocations": [
      {
        "en": "cancellation fee",
        "zh": "取消費用"
      },
      {
        "en": "cancellation policy",
        "zh": "取消規定"
      },
      {
        "en": "last-minute cancellation",
        "zh": "臨時取消"
      }
    ],
    "synonyms": [
      "calling off",
      "termination",
      "withdrawal"
    ],
    "pattern": {
      "rule": "名詞字尾 -ation 的 a 念 [e]，而且是重音節",
      "words": [
        "information",
        "presentation",
        "registration"
      ]
    },
    "root": "拉丁文 cancelli（格子）→ 在文件上畫格子狀的交叉線劃掉 → 取消",
    "tip": "拼字：美式 canceled 一個 l，但 cancellation 一定兩個 l；cancellation fee / policy 常出現在訂房、票券規定"
  },
  {
    "id": "attachment",
    "word": "attachment",
    "tier": 1,
    "topic": "辦公日常",
    "kk": "[əˋtætʃmənt]",
    "chunks": [
      {
        "t": "a",
        "k": "ə",
        "n": "開頭非重音的 a 弱化成 [ə]"
      },
      {
        "t": "tta",
        "k": "tæ",
        "s": 1,
        "n": "雙 t 只念一個 [t]"
      },
      {
        "t": "ch",
        "k": "tʃ",
        "n": "ch 念 [tʃ]（拼字是 attach，不是 attatch）"
      },
      {
        "t": "ment",
        "k": "mənt",
        "n": "-ment 念 [mənt]"
      }
    ],
    "senses": [
      {
        "pos": "n.",
        "zh": [
          "（電子郵件）附件"
        ],
        "ex": "Please review the contract in the attachment and sign it by Friday.",
        "exZh": "請檢閱附件中的合約，並在週五前簽名。"
      },
      {
        "pos": "n.",
        "zh": [
          "（機器的）配件",
          "附加裝置"
        ],
        "ex": "The vacuum cleaner comes with three attachments.",
        "exZh": "這台吸塵器附三個配件。"
      }
    ],
    "family": [
      {
        "pos": "v.",
        "w": "attach",
        "zh": "附上；貼上"
      },
      {
        "pos": "adj.",
        "w": "attached",
        "zh": "附上的"
      }
    ],
    "collocations": [
      {
        "en": "open the attachment",
        "zh": "打開附件"
      },
      {
        "en": "as an attachment",
        "zh": "以附件方式"
      },
      {
        "en": "Please find attached …",
        "zh": "隨信附上…"
      }
    ],
    "synonyms": [
      "attached file",
      "enclosure",
      "accessory"
    ],
    "pattern": {
      "rule": "ch 念 [tʃ]",
      "words": [
        "check",
        "chair",
        "purchase"
      ]
    },
    "root": null,
    "tip": "書信常見倒裝：Attached is… / Please find attached…，Part 6 常考 attached 的位置與詞性"
  },
  {
    "id": "inquiry",
    "word": "inquiry",
    "tier": 1,
    "topic": "辦公日常",
    "kk": "[ɪnˋkwaɪrɪ]",
    "chunks": [
      {
        "t": "in",
        "k": "ɪn"
      },
      {
        "t": "qui",
        "k": "kwaɪ",
        "s": 1,
        "n": "qu 念 [kw]；i 念 [aɪ]"
      },
      {
        "t": "ry",
        "k": "rɪ",
        "n": "字尾 y 念 [ɪ]"
      }
    ],
    "senses": [
      {
        "pos": "n.",
        "zh": [
          "詢問",
          "查詢"
        ],
        "ex": "Thank you for your inquiry about our catering services.",
        "exZh": "感謝您詢問我們的外燴服務。"
      },
      {
        "pos": "n.",
        "zh": [
          "調查"
        ],
        "ex": "The board has launched an inquiry into the accounting errors.",
        "exZh": "董事會已針對會計錯誤展開調查。"
      }
    ],
    "family": [
      {
        "pos": "v.",
        "w": "inquire",
        "zh": "詢問；調查"
      }
    ],
    "collocations": [
      {
        "en": "make an inquiry",
        "zh": "詢問"
      },
      {
        "en": "in response to your inquiry",
        "zh": "回覆您的詢問"
      },
      {
        "en": "customer inquiries",
        "zh": "顧客詢問"
      },
      {
        "en": "an inquiry into",
        "zh": "對…的調查"
      }
    ],
    "synonyms": [
      "question",
      "request for information",
      "investigation"
    ],
    "pattern": {
      "rule": "qu 念 [kw]",
      "words": [
        "quick",
        "quote",
        "require"
      ]
    },
    "root": "in（進入）+ quir（尋求，拉丁文 quaerere）→ 深入尋找 → 詢問、調查",
    "tip": "Thank you for your inquiry. 是回覆客戶信的固定開頭；英式拼法 enquiry 意思相同。美式也有人念 [ˋɪnkwərɪ]"
  },
  {
    "id": "regarding",
    "word": "regarding",
    "tier": 1,
    "topic": "辦公日常",
    "kk": "[rɪˋgɑrdɪŋ]",
    "chunks": [
      {
        "t": "re",
        "k": "rɪ",
        "n": "非重音的 re 念 [rɪ]"
      },
      {
        "t": "gar",
        "k": "gɑr",
        "s": 1,
        "n": "ar 念 [ɑr]"
      },
      {
        "t": "ding",
        "k": "dɪŋ",
        "n": "-ing 念 [ɪŋ]"
      }
    ],
    "senses": [
      {
        "pos": "prep.",
        "zh": [
          "關於",
          "就…而言"
        ],
        "ex": "I am writing regarding the job opening on your website.",
        "exZh": "我來信是關於貴公司網站上的職缺。"
      }
    ],
    "family": [
      {
        "pos": "v.",
        "w": "regard",
        "zh": "把…視為"
      },
      {
        "pos": "n.",
        "w": "regards",
        "zh": "問候（Best regards）"
      },
      {
        "pos": "adv.",
        "w": "regardless",
        "zh": "不管怎樣（regardless of 不論）"
      }
    ],
    "collocations": [
      {
        "en": "regarding your inquiry",
        "zh": "關於您的詢問"
      },
      {
        "en": "questions regarding",
        "zh": "關於…的問題"
      },
      {
        "en": "with regard to",
        "zh": "關於"
      },
      {
        "en": "Best regards",
        "zh": "（信末）敬祝安好"
      }
    ],
    "synonyms": [
      "about",
      "concerning",
      "with respect to"
    ],
    "pattern": {
      "rule": "ar 念 [ɑr]",
      "words": [
        "market",
        "card",
        "department"
      ]
    },
    "root": "re + garder（古法文，看、注視）→ 留意、看待；regarding＝就…來看 → 關於",
    "tip": "regarding＝about＝concerning＝with regard to，Part 7 常換句話說；regardless of＝不論，別搞混"
  },
  {
    "id": "urgent",
    "word": "urgent",
    "tier": 1,
    "topic": "辦公日常",
    "kk": "[ˋɝdʒənt]",
    "chunks": [
      {
        "t": "ur",
        "k": "ɝ",
        "s": 1,
        "n": "ur 在重音節念 [ɝ]"
      },
      {
        "t": "gent",
        "k": "dʒənt",
        "n": "g 後面接 e 念 [dʒ]；非重音的 e 弱化成 [ə]"
      }
    ],
    "senses": [
      {
        "pos": "adj.",
        "zh": [
          "緊急的",
          "急迫的"
        ],
        "ex": "Please call me back as soon as possible. It's urgent.",
        "exZh": "請盡快回電給我，事情很緊急。"
      }
    ],
    "family": [
      {
        "pos": "n.",
        "w": "urgency",
        "zh": "緊急、急迫"
      },
      {
        "pos": "adv.",
        "w": "urgently",
        "zh": "緊急地"
      },
      {
        "pos": "v.",
        "w": "urge",
        "zh": "力勸、催促"
      }
    ],
    "collocations": [
      {
        "en": "urgent matter",
        "zh": "急事"
      },
      {
        "en": "urgently needed",
        "zh": "急需的"
      },
      {
        "en": "a sense of urgency",
        "zh": "急迫感"
      },
      {
        "en": "in urgent need of",
        "zh": "急需…"
      }
    ],
    "synonyms": [
      "pressing",
      "immediate",
      "time-sensitive"
    ],
    "pattern": {
      "rule": "er / ir / ur 在重音節念 [ɝ]",
      "words": [
        "purchase",
        "turn",
        "surface"
      ]
    },
    "root": "拉丁文 urgere（催促、逼迫）→ 被催著的 → 緊急的",
    "tip": "Part 5 詞性：urgent（形）/ urgently（副）/ urgency（名）；urge sb. to V＝力勸某人去做"
  },
  {
    "id": "reminder",
    "word": "reminder",
    "tier": 1,
    "topic": "辦公日常",
    "kk": "[rɪˋmaɪndɚ]",
    "chunks": [
      {
        "t": "re",
        "k": "rɪ",
        "n": "非重音的 re 念 [rɪ]"
      },
      {
        "t": "min",
        "k": "maɪn",
        "s": 1,
        "n": "-ind 的 i 念 [aɪ]"
      },
      {
        "t": "der",
        "k": "dɚ",
        "n": "非重音的 er 念 [ɚ]"
      }
    ],
    "senses": [
      {
        "pos": "n.",
        "zh": [
          "提醒",
          "提醒通知"
        ],
        "ex": "This is a reminder that the office will be closed on Monday.",
        "exZh": "提醒您，辦公室週一休息。"
      },
      {
        "pos": "n.",
        "zh": [
          "催繳通知"
        ],
        "ex": "We sent a payment reminder to the client last week.",
        "exZh": "我們上週寄了付款催繳通知給客戶。"
      }
    ],
    "family": [
      {
        "pos": "v.",
        "w": "remind",
        "zh": "提醒"
      }
    ],
    "collocations": [
      {
        "en": "send a reminder",
        "zh": "寄提醒通知"
      },
      {
        "en": "a friendly reminder",
        "zh": "溫馨提醒"
      },
      {
        "en": "payment reminder",
        "zh": "付款催繳通知"
      }
    ],
    "synonyms": [
      "notice",
      "notification",
      "prompt"
    ],
    "pattern": {
      "rule": "-ind 的 i 念 [aɪ]",
      "words": [
        "kind",
        "find",
        "behind"
      ]
    },
    "root": "re（再）+ mind（心思）→ 再放進心裡 → 提醒",
    "tip": "remind A of B（使 A 想起 B）／remind A to V（提醒 A 去做）；This is a reminder that… 是 Part 4 公告常見開頭"
  },
  {
    "id": "signature",
    "word": "signature",
    "tier": 1,
    "topic": "合約法務",
    "kk": "[ˋsɪgnətʃɚ]",
    "chunks": [
      {
        "t": "sig",
        "k": "sɪg",
        "s": 1,
        "n": "這裡的 g 要念出來！和 sign [saɪn] 不同"
      },
      {
        "t": "na",
        "k": "nə",
        "n": "非重音的 a 弱化成 [ə]"
      },
      {
        "t": "ture",
        "k": "tʃɚ",
        "n": "-ture 念 [tʃɚ]"
      }
    ],
    "senses": [
      {
        "pos": "n.",
        "zh": [
          "簽名",
          "簽署"
        ],
        "ex": "The contract is not valid without your signature.",
        "exZh": "沒有你的簽名，這份合約就無效。"
      },
      {
        "pos": "adj.",
        "zh": [
          "招牌的",
          "代表性的"
        ],
        "ex": "Try the chef's signature dish, grilled salmon with lemon sauce.",
        "exZh": "試試主廚的招牌菜：檸檬醬烤鮭魚。"
      }
    ],
    "family": [
      {
        "pos": "v.",
        "w": "sign",
        "zh": "簽名、簽署"
      },
      {
        "pos": "n.",
        "w": "signatory",
        "zh": "簽署者、簽約方"
      }
    ],
    "collocations": [
      {
        "en": "signature required",
        "zh": "需要簽名"
      },
      {
        "en": "electronic signature",
        "zh": "電子簽名"
      },
      {
        "en": "collect signatures",
        "zh": "收集連署簽名"
      },
      {
        "en": "signature dish",
        "zh": "招牌菜"
      }
    ],
    "synonyms": [
      "autograph",
      "endorsement",
      "specialty"
    ],
    "pattern": {
      "rule": "-ture 念 [tʃɚ]",
      "words": [
        "picture",
        "future",
        "furniture"
      ]
    },
    "root": "sign（記號，拉丁文 signum）→ 做記號 → 簽名",
    "tip": "sign [saɪn] 的 g 不發音，但 signature [ˋsɪgnətʃɚ] 的 g 要念；signature dish / product＝招牌菜、招牌商品"
  },
  {
    "id": "recruit",
    "word": "recruit",
    "tier": 1,
    "topic": "人事職場",
    "kk": "[rɪˋkrut]",
    "chunks": [
      {
        "t": "re",
        "k": "rɪ",
        "n": "非重音的 re 念 [rɪ]"
      },
      {
        "t": "cr",
        "k": "kr",
        "s": 1
      },
      {
        "t": "ui",
        "k": "u",
        "n": "ui 念 [u]，i 不發音"
      },
      {
        "t": "t",
        "k": "t"
      }
    ],
    "senses": [
      {
        "pos": "v.",
        "zh": [
          "招募",
          "徵聘"
        ],
        "ex": "We are recruiting experienced sales representatives.",
        "exZh": "我們正在招募有經驗的業務代表。"
      },
      {
        "pos": "n.",
        "zh": [
          "新進人員",
          "新成員"
        ],
        "ex": "All new recruits must attend a two-day orientation.",
        "exZh": "所有新進人員都必須參加兩天的新人訓練。"
      }
    ],
    "family": [
      {
        "pos": "n.",
        "w": "recruitment",
        "zh": "招募、徵才"
      },
      {
        "pos": "n.",
        "w": "recruiter",
        "zh": "招募人員、獵才顧問"
      }
    ],
    "collocations": [
      {
        "en": "recruit new staff",
        "zh": "招募新員工"
      },
      {
        "en": "recruitment agency",
        "zh": "人力仲介公司"
      },
      {
        "en": "new recruits",
        "zh": "新進員工"
      }
    ],
    "synonyms": [
      "hire",
      "take on",
      "enlist"
    ],
    "pattern": {
      "rule": "ui 念 [u]",
      "words": [
        "fruit",
        "juice",
        "suit"
      ]
    },
    "root": "法文 recruter，源自 re（再）+ croître（生長，同 increase 的 crease）→ 補上新長出來的生力軍",
    "tip": "Part 5 常考名詞 recruitment：a recruitment drive（徵才活動）；Part 7 常改寫成 hire"
  },
  {
    "id": "candidate",
    "word": "candidate",
    "tier": 1,
    "topic": "人事職場",
    "kk": "[ˋkændəˌdet]",
    "chunks": [
      {
        "t": "can",
        "k": "kæn",
        "s": 1,
        "n": "重音閉音節的 a 念 [æ]"
      },
      {
        "t": "di",
        "k": "də",
        "n": "非重音的 i 弱化成 [ə]"
      },
      {
        "t": "date",
        "k": "det",
        "s": 2,
        "n": "-ate 念 [et]，字尾 e 不發音"
      }
    ],
    "senses": [
      {
        "pos": "n.",
        "zh": [
          "應徵者",
          "人選"
        ],
        "ex": "We interviewed five candidates for the marketing position.",
        "exZh": "我們為行銷職位面試了五位應徵者。"
      },
      {
        "pos": "n.",
        "zh": [
          "候選人"
        ],
        "ex": "She is a strong candidate for the board election.",
        "exZh": "她是董事選舉的熱門候選人。"
      }
    ],
    "family": [
      {
        "pos": "n.",
        "w": "candidacy",
        "zh": "候選資格、參選"
      }
    ],
    "collocations": [
      {
        "en": "ideal candidate",
        "zh": "理想人選"
      },
      {
        "en": "qualified candidate",
        "zh": "符合資格的人選"
      },
      {
        "en": "shortlist candidates",
        "zh": "篩選出入圍名單"
      }
    ],
    "synonyms": [
      "applicant",
      "nominee",
      "contender"
    ],
    "pattern": {
      "rule": "重音閉音節的 a 念 [æ]",
      "words": [
        "plan",
        "cancel",
        "manager"
      ]
    },
    "root": "拉丁文 candidatus（穿白袍的人）：古羅馬參選公職的人穿白袍；candid（坦白的）同源",
    "tip": "candidate 是可數的「人」；Part 7 常和 applicant 互換"
  },
  {
    "id": "qualification",
    "word": "qualification",
    "tier": 1,
    "topic": "人事職場",
    "kk": "[ˌkwɑləfəˋkeʃən]",
    "chunks": [
      {
        "t": "qua",
        "k": "kwɑ",
        "s": 2,
        "n": "qu 念 [kw]，a 念 [ɑ]"
      },
      {
        "t": "li",
        "k": "lə"
      },
      {
        "t": "fi",
        "k": "fə",
        "n": "非重音的 i 弱化成 [ə]"
      },
      {
        "t": "ca",
        "k": "ke",
        "s": 1,
        "n": "重音落在 -ation 的 a，念 [e]"
      },
      {
        "t": "tion",
        "k": "ʃən",
        "n": "-tion 念 [ʃən]"
      }
    ],
    "senses": [
      {
        "pos": "n.",
        "zh": [
          "資格",
          "條件（常用複數）"
        ],
        "ex": "Applicants must meet the following qualifications.",
        "exZh": "應徵者必須符合以下資格條件。"
      },
      {
        "pos": "n.",
        "zh": [
          "學經歷",
          "資格證書"
        ],
        "ex": "He has a qualification in accounting.",
        "exZh": "他擁有會計的資格證照。"
      }
    ],
    "family": [
      {
        "pos": "v.",
        "w": "qualify",
        "zh": "使有資格；取得資格"
      },
      {
        "pos": "adj.",
        "w": "qualified",
        "zh": "有資格的、能勝任的"
      },
      {
        "pos": "adj.",
        "w": "unqualified",
        "zh": "不合格的"
      }
    ],
    "collocations": [
      {
        "en": "meet the qualifications",
        "zh": "符合資格"
      },
      {
        "en": "minimum qualifications",
        "zh": "最低資格要求"
      },
      {
        "en": "academic qualifications",
        "zh": "學歷"
      },
      {
        "en": "professional qualifications",
        "zh": "專業資格證照"
      }
    ],
    "synonyms": [
      "requirement",
      "credential",
      "certification"
    ],
    "pattern": {
      "rule": "-ification 念 [əfəˋkeʃən]，重音在 ca",
      "words": [
        "notification",
        "certification",
        "modification"
      ]
    },
    "root": "qual（什麼樣的性質）+ fic（做）+ ation → 使具備某種條件",
    "tip": "Part 5 詞性題：qualification（名詞）/ qualified（形容詞）/ qualify（動詞），徵才廣告必出"
  },
  {
    "id": "supervisor",
    "word": "supervisor",
    "tier": 1,
    "topic": "人事職場",
    "kk": "[ˋsupɚˌvaɪzɚ]",
    "chunks": [
      {
        "t": "su",
        "k": "su",
        "s": 1,
        "n": "u 念 [u]"
      },
      {
        "t": "per",
        "k": "pɚ",
        "n": "非重音的 er 念 [ɚ]"
      },
      {
        "t": "vi",
        "k": "vaɪ",
        "s": 2,
        "n": "i 念 [aɪ]"
      },
      {
        "t": "s",
        "k": "z",
        "n": "s 夾在兩個母音中間常念 [z]"
      },
      {
        "t": "or",
        "k": "ɚ",
        "n": "字尾 -or 念 [ɚ]"
      }
    ],
    "senses": [
      {
        "pos": "n.",
        "zh": [
          "主管",
          "上司",
          "監督者"
        ],
        "ex": "Please submit your vacation request to your supervisor.",
        "exZh": "請把休假申請交給你的主管。"
      }
    ],
    "family": [
      {
        "pos": "v.",
        "w": "supervise",
        "zh": "監督、管理"
      },
      {
        "pos": "n.",
        "w": "supervision",
        "zh": "監督、管理"
      },
      {
        "pos": "adj.",
        "w": "supervisory",
        "zh": "監督的、管理的"
      }
    ],
    "collocations": [
      {
        "en": "immediate supervisor",
        "zh": "直屬主管"
      },
      {
        "en": "report to a supervisor",
        "zh": "向主管報告"
      },
      {
        "en": "under the supervision of",
        "zh": "在…的監督下"
      }
    ],
    "synonyms": [
      "manager",
      "boss",
      "superior"
    ],
    "pattern": {
      "rule": "字尾 -or 念 [ɚ]",
      "words": [
        "director",
        "visitor",
        "operator"
      ]
    },
    "root": "super（在上面）+ vis（看）+ or（人）→ 在上面看著的人",
    "tip": "Part 5 常考人與事：supervisor（人）vs. supervision（監督）；under the supervision of 是固定用法"
  },
  {
    "id": "personnel",
    "word": "personnel",
    "tier": 1,
    "topic": "人事職場",
    "kk": "[ˌpɝsəˋnɛl]",
    "chunks": [
      {
        "t": "per",
        "k": "pɝ",
        "s": 2,
        "n": "er 在重音節念 [ɝ]"
      },
      {
        "t": "so",
        "k": "sə",
        "n": "非重音的 o 弱化成 [ə]"
      },
      {
        "t": "nnel",
        "k": "nɛl",
        "s": 1,
        "n": "雙 n 只念一個 [n]；重音在最後的 -nel！"
      }
    ],
    "senses": [
      {
        "pos": "n.",
        "zh": [
          "人員",
          "員工（集合名詞，配複數動詞）"
        ],
        "ex": "All personnel are required to wear ID badges.",
        "exZh": "所有人員都必須配戴識別證。"
      },
      {
        "pos": "n.",
        "zh": [
          "人事部門"
        ],
        "ex": "Please send your application to the personnel department.",
        "exZh": "請將申請書寄到人事部。"
      }
    ],
    "family": [],
    "collocations": [
      {
        "en": "personnel department",
        "zh": "人事部"
      },
      {
        "en": "authorized personnel only",
        "zh": "非請勿入（限授權人員）"
      },
      {
        "en": "key personnel",
        "zh": "關鍵人員"
      }
    ],
    "synonyms": [
      "staff",
      "employees",
      "human resources"
    ],
    "pattern": {
      "rule": "法文來源的字尾 -el 帶重音，念 [ˋɛl]",
      "words": [
        "hotel",
        "motel",
        "carousel"
      ]
    },
    "root": "法文 personnel（人員），源自拉丁文 persona（人）",
    "tip": "別和 personal [ˋpɝsṇḷ]（個人的）搞混：拼字差一個 n，重音也不同"
  },
  {
    "id": "compensation",
    "word": "compensation",
    "tier": 1,
    "topic": "人事職場",
    "kk": "[ˌkɑmpənˋseʃən]",
    "chunks": [
      {
        "t": "com",
        "k": "kɑm",
        "s": 2,
        "n": "o 念 [ɑ]"
      },
      {
        "t": "pen",
        "k": "pən",
        "n": "非重音的 e 弱化成 [ə]"
      },
      {
        "t": "sa",
        "k": "se",
        "s": 1,
        "n": "重音節的 a 念 [e]"
      },
      {
        "t": "tion",
        "k": "ʃən",
        "n": "-tion 念 [ʃən]"
      }
    ],
    "senses": [
      {
        "pos": "n.",
        "zh": [
          "薪酬",
          "報酬"
        ],
        "ex": "The position offers competitive compensation and benefits.",
        "exZh": "這個職位提供有競爭力的薪酬和福利。"
      },
      {
        "pos": "n.",
        "zh": [
          "賠償",
          "補償（金）"
        ],
        "ex": "Passengers received compensation for the delayed flight.",
        "exZh": "乘客因班機延誤獲得了賠償。"
      }
    ],
    "family": [
      {
        "pos": "v.",
        "w": "compensate",
        "zh": "補償、賠償"
      },
      {
        "pos": "adj.",
        "w": "compensatory",
        "zh": "補償性的"
      }
    ],
    "collocations": [
      {
        "en": "compensation package",
        "zh": "整體薪酬方案"
      },
      {
        "en": "in compensation for",
        "zh": "作為…的補償"
      },
      {
        "en": "claim compensation",
        "zh": "要求賠償"
      }
    ],
    "synonyms": [
      "pay",
      "remuneration",
      "reimbursement"
    ],
    "pattern": {
      "rule": "-ation 的 a 帶重音，念 [ˋeʃən]",
      "words": [
        "vacation",
        "location",
        "information"
      ]
    },
    "root": "com（一起）+ pens（秤、付錢）→ 放在秤上秤平 → 補償；expense 的 pens 同源",
    "tip": "動詞 compensate 後面接 for：compensate customers for the inconvenience"
  },
  {
    "id": "performance",
    "word": "performance",
    "tier": 1,
    "topic": "人事職場",
    "kk": "[pɚˋfɔrməns]",
    "chunks": [
      {
        "t": "per",
        "k": "pɚ",
        "n": "非重音的 er 念 [ɚ]"
      },
      {
        "t": "for",
        "k": "fɔr",
        "s": 1,
        "n": "or 念 [ɔr]"
      },
      {
        "t": "man",
        "k": "mən",
        "n": "非重音的 a 弱化成 [ə]"
      },
      {
        "t": "ce",
        "k": "s",
        "n": "c 後面接 e 念 [s]，e 不發音"
      }
    ],
    "senses": [
      {
        "pos": "n.",
        "zh": [
          "表現",
          "績效"
        ],
        "ex": "Employees receive a bonus based on their performance.",
        "exZh": "員工依照績效領取獎金。"
      },
      {
        "pos": "n.",
        "zh": [
          "表演",
          "演出"
        ],
        "ex": "Tonight's performance starts at 8 p.m.",
        "exZh": "今晚的演出晚上八點開始。"
      },
      {
        "pos": "n.",
        "zh": [
          "（機器、產品的）性能"
        ],
        "ex": "The new laptop offers better performance at a lower price.",
        "exZh": "新款筆電價格更低、性能更好。"
      }
    ],
    "family": [
      {
        "pos": "v.",
        "w": "perform",
        "zh": "執行；表演；表現"
      },
      {
        "pos": "n.",
        "w": "performer",
        "zh": "表演者"
      }
    ],
    "collocations": [
      {
        "en": "performance review",
        "zh": "績效考核"
      },
      {
        "en": "job performance",
        "zh": "工作表現"
      },
      {
        "en": "outstanding performance",
        "zh": "傑出表現"
      }
    ],
    "synonyms": [
      "achievement",
      "results",
      "show"
    ],
    "pattern": {
      "rule": "or 念 [ɔr]",
      "words": [
        "inform",
        "support",
        "order"
      ]
    },
    "root": "古法文 parfournir：par（完全）+ fournir（提供、完成，同 furnish）→ 完整做完",
    "tip": "人事情境＝績效，娛樂情境＝演出；performance review / evaluation 是 Part 7 常客"
  },
  {
    "id": "vacancy",
    "word": "vacancy",
    "tier": 1,
    "topic": "人事職場",
    "kk": "[ˋvekənsɪ]",
    "chunks": [
      {
        "t": "va",
        "k": "ve",
        "s": 1,
        "n": "重音開音節的 a 念 [e]"
      },
      {
        "t": "can",
        "k": "kən",
        "n": "非重音的 a 弱化成 [ə]"
      },
      {
        "t": "cy",
        "k": "sɪ",
        "n": "c 後面接 y 念 [s]；字尾 y 念 [ɪ]"
      }
    ],
    "senses": [
      {
        "pos": "n.",
        "zh": [
          "職缺",
          "空缺"
        ],
        "ex": "We have a vacancy for an accountant.",
        "exZh": "我們有一個會計的職缺。"
      },
      {
        "pos": "n.",
        "zh": [
          "（旅館的）空房"
        ],
        "ex": "The hotel has no vacancies this weekend.",
        "exZh": "那家旅館這個週末沒有空房。"
      }
    ],
    "family": [
      {
        "pos": "adj.",
        "w": "vacant",
        "zh": "空的；（職位）空缺的"
      },
      {
        "pos": "v.",
        "w": "vacate",
        "zh": "空出、搬離"
      }
    ],
    "collocations": [
      {
        "en": "fill a vacancy",
        "zh": "填補職缺"
      },
      {
        "en": "job vacancy",
        "zh": "職缺"
      },
      {
        "en": "No Vacancy",
        "zh": "客滿（旅館告示）"
      }
    ],
    "synonyms": [
      "opening",
      "position",
      "available room"
    ],
    "pattern": {
      "rule": "c 後面接 e / i / y 念 [s]",
      "words": [
        "agency",
        "policy",
        "city"
      ]
    },
    "root": "vac（空的）→ vacant 空的、vacation 假期（工作空下來）、vacuum 真空",
    "tip": "徵才情境 vacancy ＝ opening；飯店招牌 No Vacancy 是「客滿」，不是「沒有假期」"
  },
  {
    "id": "overtime",
    "word": "overtime",
    "tier": 1,
    "topic": "人事職場",
    "kk": "[ˋovɚˌtaɪm]",
    "chunks": [
      {
        "t": "o",
        "k": "o",
        "s": 1,
        "n": "o 念長音 [o]"
      },
      {
        "t": "ver",
        "k": "vɚ",
        "n": "非重音的 er 念 [ɚ]"
      },
      {
        "t": "time",
        "k": "taɪm",
        "s": 2,
        "n": "i + 子音 + e → i 念 [aɪ]，e 不發音"
      }
    ],
    "senses": [
      {
        "pos": "n.",
        "zh": [
          "加班",
          "加班時數"
        ],
        "ex": "Overtime must be approved by your manager in advance.",
        "exZh": "加班必須事先經過主管核准。"
      },
      {
        "pos": "n.",
        "zh": [
          "加班費"
        ],
        "ex": "Staff who work on holidays are paid overtime.",
        "exZh": "假日上班的員工可以領加班費。"
      },
      {
        "pos": "adv.",
        "zh": [
          "超時地",
          "加班地"
        ],
        "ex": "We had to work overtime to finish the report.",
        "exZh": "我們必須加班才能完成報告。"
      }
    ],
    "family": [],
    "collocations": [
      {
        "en": "work overtime",
        "zh": "加班"
      },
      {
        "en": "overtime pay",
        "zh": "加班費"
      },
      {
        "en": "overtime hours",
        "zh": "加班時數"
      }
    ],
    "synonyms": [
      "extra hours",
      "extra time"
    ],
    "pattern": {
      "rule": "i + 子音 + 字尾 e → i 念 [aɪ]、e 不發音",
      "words": [
        "file",
        "hire",
        "price"
      ]
    },
    "root": "over（超過）+ time（時間）→ 超出正常工時",
    "tip": "work overtime 的 overtime 是副詞，前面不加介系詞（不說 work in overtime）"
  },
  {
    "id": "responsibility",
    "word": "responsibility",
    "tier": 1,
    "topic": "人事職場",
    "kk": "[rɪˌspɑnsəˋbɪlətɪ]",
    "chunks": [
      {
        "t": "re",
        "k": "rɪ"
      },
      {
        "t": "spon",
        "k": "spɑn",
        "s": 2,
        "n": "o 念 [ɑ]"
      },
      {
        "t": "si",
        "k": "sə",
        "n": "非重音的 i 弱化成 [ə]"
      },
      {
        "t": "bi",
        "k": "bɪ",
        "s": 1,
        "n": "-ility 的重音落在 bi"
      },
      {
        "t": "li",
        "k": "lə"
      },
      {
        "t": "ty",
        "k": "tɪ",
        "n": "字尾 y 念 [ɪ]"
      }
    ],
    "senses": [
      {
        "pos": "n.",
        "zh": [
          "責任"
        ],
        "ex": "The manager took full responsibility for the error.",
        "exZh": "經理為這個錯誤負起全部責任。"
      },
      {
        "pos": "n.",
        "zh": [
          "職責",
          "工作內容（常用複數）"
        ],
        "ex": "Responsibilities include managing client accounts.",
        "exZh": "工作職責包括管理客戶帳戶。"
      }
    ],
    "family": [
      {
        "pos": "adj.",
        "w": "responsible",
        "zh": "負責的"
      },
      {
        "pos": "adv.",
        "w": "responsibly",
        "zh": "負責任地"
      },
      {
        "pos": "adj.",
        "w": "irresponsible",
        "zh": "不負責任的"
      }
    ],
    "collocations": [
      {
        "en": "take responsibility for",
        "zh": "為…負責"
      },
      {
        "en": "job responsibilities",
        "zh": "工作職責"
      },
      {
        "en": "sense of responsibility",
        "zh": "責任感"
      }
    ],
    "synonyms": [
      "duty",
      "obligation",
      "accountability"
    ],
    "pattern": {
      "rule": "-ity 結尾的字，重音落在 -ity 前一個音節",
      "words": [
        "ability",
        "possibility",
        "facility"
      ]
    },
    "root": "respons（回應，同 respond）+ ibility（能夠）→ 能夠回應、交代 → 責任",
    "tip": "Part 5 常考：be responsible for + N / V-ing（負責…）；徵才廣告的 Responsibilities ＝ 職務內容"
  },
  {
    "id": "benefit",
    "word": "benefit",
    "tier": 1,
    "topic": "人事職場",
    "kk": "[ˋbɛnəfɪt]",
    "chunks": [
      {
        "t": "be",
        "k": "bɛ",
        "s": 1,
        "n": "重音節的 e 念 [ɛ]"
      },
      {
        "t": "ne",
        "k": "nə",
        "n": "非重音的 e 弱化成 [ə]"
      },
      {
        "t": "fit",
        "k": "fɪt"
      }
    ],
    "senses": [
      {
        "pos": "n.",
        "zh": [
          "福利（常用複數）"
        ],
        "ex": "Full-time employees receive health and dental benefits.",
        "exZh": "全職員工享有醫療和牙科福利。"
      },
      {
        "pos": "n.",
        "zh": [
          "好處",
          "利益"
        ],
        "ex": "One benefit of the new system is that it saves time.",
        "exZh": "新系統的好處之一是節省時間。"
      },
      {
        "pos": "v.",
        "zh": [
          "受益",
          "有益於"
        ],
        "ex": "Small businesses will benefit from the tax cut.",
        "exZh": "小型企業將從減稅中受益。"
      }
    ],
    "family": [
      {
        "pos": "adj.",
        "w": "beneficial",
        "zh": "有益的"
      },
      {
        "pos": "n.",
        "w": "beneficiary",
        "zh": "受益人"
      }
    ],
    "collocations": [
      {
        "en": "benefits package",
        "zh": "福利方案"
      },
      {
        "en": "benefit from",
        "zh": "從…獲益"
      },
      {
        "en": "employee benefits",
        "zh": "員工福利"
      }
    ],
    "synonyms": [
      "perk",
      "advantage",
      "gain"
    ],
    "pattern": {
      "rule": "重音閉音節的 e 念 [ɛ]",
      "words": [
        "credit",
        "method",
        "member"
      ]
    },
    "root": "bene（好）+ fit（做，源自拉丁文 facere）→ 做好事 → 好處",
    "tip": "Part 5 常考：benefit from（受益於）、be beneficial to（對…有益）；徵才廣告的 benefits ＝ 福利"
  },
  {
    "id": "revenue",
    "word": "revenue",
    "tier": 1,
    "topic": "購物財務",
    "kk": "[ˋrɛvəˌnu]",
    "chunks": [
      {
        "t": "re",
        "k": "rɛ",
        "s": 1,
        "n": "重音節的 e 念 [ɛ]"
      },
      {
        "t": "ve",
        "k": "və",
        "n": "非重音的 e 弱化成 [ə]"
      },
      {
        "t": "nue",
        "k": "nu",
        "s": 2,
        "n": "ue 念 [u]（美式 n 後面通常不加 [j]）"
      }
    ],
    "senses": [
      {
        "pos": "n.",
        "zh": [
          "營收",
          "收入"
        ],
        "ex": "The company's revenue rose by 15% last year.",
        "exZh": "公司去年營收成長了 15%。"
      },
      {
        "pos": "n.",
        "zh": [
          "（政府的）稅收"
        ],
        "ex": "Tourism generates significant tax revenue for the city.",
        "exZh": "觀光業為這座城市帶來大量稅收。"
      }
    ],
    "family": [],
    "collocations": [
      {
        "en": "generate revenue",
        "zh": "創造營收"
      },
      {
        "en": "annual revenue",
        "zh": "年營收"
      },
      {
        "en": "revenue growth",
        "zh": "營收成長"
      },
      {
        "en": "tax revenue",
        "zh": "稅收"
      }
    ],
    "synonyms": [
      "income",
      "earnings",
      "sales"
    ],
    "pattern": {
      "rule": "ue 念 [u]",
      "words": [
        "avenue",
        "due",
        "true"
      ]
    },
    "root": "re（回）+ ven（來）→ 回來的錢 → 收入；源自法文 revenir（回來）",
    "tip": "revenue（營收，賣了多少）≠ profit（利潤，扣掉成本後賺多少），圖表題常考"
  },
  {
    "id": "expense",
    "word": "expense",
    "tier": 1,
    "topic": "購物財務",
    "kk": "[ɪkˋspɛns]",
    "chunks": [
      {
        "t": "e",
        "k": "ɪ"
      },
      {
        "t": "x",
        "k": "kˋs",
        "s": 1,
        "n": "x 念 [ks]；重音落在 [k] 和 [s] 之間，聽起來像 ik-SPEN"
      },
      {
        "t": "pen",
        "k": "pɛn"
      },
      {
        "t": "se",
        "k": "s",
        "n": "字尾 se 念 [s]，e 不發音"
      }
    ],
    "senses": [
      {
        "pos": "n.",
        "zh": [
          "費用",
          "支出"
        ],
        "ex": "Rent is our largest monthly expense.",
        "exZh": "房租是我們每月最大的支出。"
      },
      {
        "pos": "n.",
        "zh": [
          "（公務）開銷、經費（常用複數）"
        ],
        "ex": "Please submit your travel expenses by Friday.",
        "exZh": "請在週五前提交差旅費用。"
      }
    ],
    "family": [
      {
        "pos": "adj.",
        "w": "expensive",
        "zh": "昂貴的"
      },
      {
        "pos": "v.",
        "w": "expend",
        "zh": "花費、消耗"
      },
      {
        "pos": "n.",
        "w": "expenditure",
        "zh": "支出、經費"
      }
    ],
    "collocations": [
      {
        "en": "travel expenses",
        "zh": "差旅費"
      },
      {
        "en": "at the company's expense",
        "zh": "由公司負擔費用"
      },
      {
        "en": "cover the expenses",
        "zh": "支付費用"
      },
      {
        "en": "expense report",
        "zh": "費用報告、報帳單"
      }
    ],
    "synonyms": [
      "cost",
      "expenditure",
      "spending"
    ],
    "pattern": {
      "rule": "x 念 [ks]",
      "words": [
        "tax",
        "fax",
        "next"
      ]
    },
    "root": "ex（出）+ pens（秤、付錢）→ 付出去的錢；compensation 的 pens 同源",
    "tip": "at the expense of 也有「以…為代價」的意思；Part 5 分辨 expense（名詞）/ expensive（形容詞）"
  },
  {
    "id": "asset",
    "word": "asset",
    "tier": 1,
    "topic": "銀行金融",
    "kk": "[ˋæsɛt]",
    "chunks": [
      {
        "t": "a",
        "k": "æ",
        "s": 1,
        "n": "重音閉音節的 a 念 [æ]"
      },
      {
        "t": "ss",
        "k": "s",
        "n": "雙 s 只念一個 [s]"
      },
      {
        "t": "et",
        "k": "ɛt"
      }
    ],
    "senses": [
      {
        "pos": "n.",
        "zh": [
          "資產",
          "財產（常用複數）"
        ],
        "ex": "The company's total assets are worth $50 million.",
        "exZh": "公司的總資產價值五千萬美元。"
      },
      {
        "pos": "n.",
        "zh": [
          "有價值的人或物",
          "寶貴人才"
        ],
        "ex": "Her language skills would be a great asset to our team.",
        "exZh": "她的語言能力會是我們團隊的一大助力。"
      }
    ],
    "family": [],
    "collocations": [
      {
        "en": "assets and liabilities",
        "zh": "資產與負債"
      },
      {
        "en": "a valuable asset",
        "zh": "寶貴的資產／人才"
      },
      {
        "en": "fixed assets",
        "zh": "固定資產"
      }
    ],
    "synonyms": [
      "resource",
      "property",
      "strength"
    ],
    "pattern": {
      "rule": "重音閉音節的 a 念 [æ]",
      "words": [
        "happy",
        "matter",
        "passenger"
      ]
    },
    "root": "古法文 asez（足夠），源自拉丁文 ad satis（達到足夠）→ 足以還債的財產",
    "tip": "推薦信、徵才情境常見：be an asset to the company ＝ 對公司很有價值的人"
  },
  {
    "id": "profit",
    "word": "profit",
    "tier": 1,
    "topic": "購物財務",
    "kk": "[ˋprɑfɪt]",
    "chunks": [
      {
        "t": "pro",
        "k": "prɑ",
        "s": 1,
        "n": "重音閉音節的 o 念 [ɑ]"
      },
      {
        "t": "fit",
        "k": "fɪt"
      }
    ],
    "senses": [
      {
        "pos": "n.",
        "zh": [
          "利潤",
          "獲利"
        ],
        "ex": "The company made a profit of $2 million this quarter.",
        "exZh": "公司本季獲利兩百萬美元。"
      },
      {
        "pos": "v.",
        "zh": [
          "獲益",
          "得利"
        ],
        "ex": "Investors profited from the merger.",
        "exZh": "投資人從這次合併中獲利。"
      }
    ],
    "family": [
      {
        "pos": "adj.",
        "w": "profitable",
        "zh": "有利潤的、賺錢的"
      },
      {
        "pos": "n.",
        "w": "profitability",
        "zh": "獲利能力"
      },
      {
        "pos": "adj.",
        "w": "nonprofit",
        "zh": "非營利的"
      }
    ],
    "collocations": [
      {
        "en": "make a profit",
        "zh": "獲利"
      },
      {
        "en": "net profit",
        "zh": "淨利"
      },
      {
        "en": "profit margin",
        "zh": "利潤率"
      },
      {
        "en": "nonprofit organization",
        "zh": "非營利組織"
      }
    ],
    "synonyms": [
      "earnings",
      "gain",
      "return"
    ],
    "pattern": {
      "rule": "重音閉音節的 o 念 [ɑ]",
      "words": [
        "product",
        "problem",
        "contract"
      ]
    },
    "root": "拉丁文 proficere（進展、有用）：pro（向前）+ ficere（做）→ 往前推進 → 得到好處",
    "tip": "Part 5 常考形容詞 profitable；和同音字 prophet（先知）別搞混"
  },
  {
    "id": "balance",
    "word": "balance",
    "tier": 1,
    "topic": "銀行金融",
    "kk": "[ˋbæləns]",
    "chunks": [
      {
        "t": "ba",
        "k": "bæ",
        "s": 1,
        "n": "a 念 [æ]"
      },
      {
        "t": "lan",
        "k": "lən",
        "n": "非重音的 a 弱化成 [ə]"
      },
      {
        "t": "ce",
        "k": "s",
        "n": "c 後面接 e 念 [s]，e 不發音"
      }
    ],
    "senses": [
      {
        "pos": "n.",
        "zh": [
          "（帳戶）餘額"
        ],
        "ex": "You can check your account balance online.",
        "exZh": "你可以上網查詢帳戶餘額。"
      },
      {
        "pos": "n.",
        "zh": [
          "尾款",
          "未付差額"
        ],
        "ex": "The balance is due upon delivery.",
        "exZh": "尾款於交貨時支付。"
      },
      {
        "pos": "n.",
        "zh": [
          "平衡"
        ],
        "ex": "Many employees want a better work-life balance.",
        "exZh": "許多員工希望工作與生活更平衡。"
      },
      {
        "pos": "v.",
        "zh": [
          "使平衡",
          "結算（帳目）"
        ],
        "ex": "The city council is trying to balance the budget.",
        "exZh": "市議會正努力讓預算收支平衡。"
      }
    ],
    "family": [
      {
        "pos": "adj.",
        "w": "balanced",
        "zh": "平衡的、均衡的"
      },
      {
        "pos": "n.",
        "w": "imbalance",
        "zh": "不平衡"
      }
    ],
    "collocations": [
      {
        "en": "account balance",
        "zh": "帳戶餘額"
      },
      {
        "en": "outstanding balance",
        "zh": "未付餘額"
      },
      {
        "en": "work-life balance",
        "zh": "工作與生活的平衡"
      },
      {
        "en": "balance the budget",
        "zh": "使預算平衡"
      }
    ],
    "synonyms": [
      "remainder",
      "remaining amount",
      "equilibrium"
    ],
    "pattern": {
      "rule": "非重音的 -ance 念 [əns]",
      "words": [
        "distance",
        "allowance",
        "maintenance"
      ]
    },
    "root": "拉丁文 bilanx：bi（兩個）+ lanx（秤盤）→ 有兩個秤盤的天平",
    "tip": "outstanding balance 的 outstanding 是「未付清的」，不是「傑出的」"
  },
  {
    "id": "deposit",
    "word": "deposit",
    "tier": 1,
    "topic": "銀行金融",
    "kk": "[dɪˋpɑzɪt]",
    "chunks": [
      {
        "t": "de",
        "k": "dɪ",
        "n": "非重音的 de 念 [dɪ]"
      },
      {
        "t": "po",
        "k": "pɑ",
        "s": 1,
        "n": "o 念 [ɑ]"
      },
      {
        "t": "s",
        "k": "z",
        "n": "s 夾在兩個母音中間常念 [z]"
      },
      {
        "t": "it",
        "k": "ɪt"
      }
    ],
    "senses": [
      {
        "pos": "n.",
        "zh": [
          "存款"
        ],
        "ex": "I'd like to make a deposit into my savings account.",
        "exZh": "我想存一筆錢到我的儲蓄帳戶。"
      },
      {
        "pos": "n.",
        "zh": [
          "訂金",
          "押金",
          "保證金"
        ],
        "ex": "A 20% deposit is required to confirm the booking.",
        "exZh": "需支付兩成訂金才能確認預訂。"
      },
      {
        "pos": "v.",
        "zh": [
          "存（錢）",
          "存入"
        ],
        "ex": "Your salary will be deposited directly into your account.",
        "exZh": "你的薪水會直接存入你的帳戶。"
      }
    ],
    "family": [
      {
        "pos": "n.",
        "w": "depositor",
        "zh": "存款人"
      }
    ],
    "collocations": [
      {
        "en": "make a deposit",
        "zh": "存款"
      },
      {
        "en": "security deposit",
        "zh": "押金、保證金"
      },
      {
        "en": "direct deposit",
        "zh": "（薪資）直接匯入帳戶"
      },
      {
        "en": "non-refundable deposit",
        "zh": "不可退的訂金"
      }
    ],
    "synonyms": [
      "down payment",
      "advance payment",
      "put in"
    ],
    "pattern": {
      "rule": "s 夾在兩個母音中間常念 [z]",
      "words": [
        "visit",
        "music",
        "president"
      ]
    },
    "root": "de（向下）+ pos（放）→ 放下 → 存放",
    "tip": "反義字 withdraw（提款）；Part 7 租屋、訂房情境的 deposit 多是「押金／訂金」"
  },
  {
    "id": "withdraw",
    "word": "withdraw",
    "tier": 1,
    "topic": "銀行金融",
    "kk": "[wɪðˋdrɔ]",
    "chunks": [
      {
        "t": "wi",
        "k": "wɪ"
      },
      {
        "t": "th",
        "k": "ð",
        "n": "th 念有聲的 [ð]，也常聽到無聲的 [θ]"
      },
      {
        "t": "draw",
        "k": "drɔ",
        "s": 1,
        "n": "aw 念 [ɔ]"
      }
    ],
    "senses": [
      {
        "pos": "v.",
        "zh": [
          "提（款）",
          "領（錢）"
        ],
        "ex": "You can withdraw cash from any of our ATMs.",
        "exZh": "您可以從我們任何一台提款機領取現金。"
      },
      {
        "pos": "v.",
        "zh": [
          "撤回",
          "撤銷"
        ],
        "ex": "The company withdrew its offer after the negotiations failed.",
        "exZh": "談判破裂後，公司撤回了提案。"
      },
      {
        "pos": "v.",
        "zh": [
          "退出"
        ],
        "ex": "Two firms have withdrawn from the bidding process.",
        "exZh": "有兩家公司退出了競標。"
      }
    ],
    "family": [
      {
        "pos": "n.",
        "w": "withdrawal",
        "zh": "提款；撤回；退出"
      }
    ],
    "collocations": [
      {
        "en": "withdraw money from",
        "zh": "從…提款"
      },
      {
        "en": "withdraw an offer",
        "zh": "撤回提議"
      },
      {
        "en": "withdraw from",
        "zh": "退出…"
      },
      {
        "en": "make a withdrawal",
        "zh": "提款"
      }
    ],
    "synonyms": [
      "take out",
      "retract",
      "pull out"
    ],
    "pattern": {
      "rule": "aw 念 [ɔ]",
      "words": [
        "law",
        "saw",
        "awful"
      ]
    },
    "root": "with（古英文：向後、離開）+ draw（拉）→ 往回拉 → 撤回、提款",
    "tip": "三態 withdraw / withdrew / withdrawn；名詞 withdrawal 是 Part 5 常考詞性"
  },
  {
    "id": "interest",
    "word": "interest",
    "tier": 1,
    "topic": "銀行金融",
    "kk": "[ˋɪntrəst]",
    "chunks": [
      {
        "t": "in",
        "k": "ɪn",
        "s": 1,
        "n": "重音在第一音節"
      },
      {
        "t": "t",
        "k": "t"
      },
      {
        "t": "e",
        "k": "",
        "silent": true,
        "n": "這個 e 美式常省略，interest 念成兩個音節"
      },
      {
        "t": "r",
        "k": "r"
      },
      {
        "t": "est",
        "k": "əst",
        "n": "非重音的 e 弱化成 [ə]"
      }
    ],
    "senses": [
      {
        "pos": "n.",
        "zh": [
          "興趣",
          "關注"
        ],
        "ex": "Thank you for your interest in our products.",
        "exZh": "感謝您對我們產品的關注。"
      },
      {
        "pos": "n.",
        "zh": [
          "利息"
        ],
        "ex": "The loan has an interest rate of 4%.",
        "exZh": "這筆貸款的利率是 4%。"
      },
      {
        "pos": "n.",
        "zh": [
          "股份",
          "權益"
        ],
        "ex": "The firm bought a 30% interest in the hotel chain.",
        "exZh": "該公司買下這家連鎖飯店 30% 的股權。"
      },
      {
        "pos": "n.",
        "zh": [
          "利益"
        ],
        "ex": "It is in the best interest of our clients to act quickly.",
        "exZh": "儘快行動最符合客戶的利益。"
      },
      {
        "pos": "v.",
        "zh": [
          "使感興趣"
        ],
        "ex": "This position may interest you.",
        "exZh": "這個職位您可能會有興趣。"
      }
    ],
    "family": [
      {
        "pos": "adj.",
        "w": "interested",
        "zh": "（人）感興趣的"
      },
      {
        "pos": "adj.",
        "w": "interesting",
        "zh": "（事物）有趣的"
      }
    ],
    "collocations": [
      {
        "en": "interest rate",
        "zh": "利率"
      },
      {
        "en": "earn interest",
        "zh": "賺取利息"
      },
      {
        "en": "express interest in",
        "zh": "表示對…有興趣"
      },
      {
        "en": "in the best interest of",
        "zh": "最符合…的利益"
      }
    ],
    "synonyms": [
      "curiosity",
      "stake",
      "concern"
    ],
    "pattern": {
      "rule": "重音後面的非重音 e 常被省略不念",
      "words": [
        "every",
        "different",
        "favorite"
      ]
    },
    "root": "拉丁文 interesse：inter（在…之間）+ esse（存在）→ 和自己有關係 → 關心、利益",
    "tip": "Part 5 常考 interested（人感興趣）vs. interesting（事物有趣）；銀行情境的 interest 是「利息」"
  },
  {
    "id": "loan",
    "word": "loan",
    "tier": 1,
    "topic": "銀行金融",
    "kk": "[lon]",
    "chunks": [
      {
        "t": "l",
        "k": "l"
      },
      {
        "t": "oa",
        "k": "o",
        "n": "oa 念 [o]"
      },
      {
        "t": "n",
        "k": "n"
      }
    ],
    "senses": [
      {
        "pos": "n.",
        "zh": [
          "貸款",
          "借款"
        ],
        "ex": "The bank approved our loan to expand the factory.",
        "exZh": "銀行核准了我們擴建工廠的貸款。"
      },
      {
        "pos": "n.",
        "zh": [
          "出借",
          "借出的東西"
        ],
        "ex": "The painting is on loan from a private collector.",
        "exZh": "這幅畫是向私人收藏家借來展出的。"
      },
      {
        "pos": "v.",
        "zh": [
          "借出（美式）"
        ],
        "ex": "The museum loaned several pieces to the exhibition.",
        "exZh": "博物館借出了幾件作品給這次展覽。"
      }
    ],
    "family": [],
    "collocations": [
      {
        "en": "apply for a loan",
        "zh": "申請貸款"
      },
      {
        "en": "take out a loan",
        "zh": "貸款、借錢"
      },
      {
        "en": "pay off a loan",
        "zh": "還清貸款"
      },
      {
        "en": "on loan",
        "zh": "借出中、借來的"
      }
    ],
    "synonyms": [
      "credit",
      "advance",
      "lend"
    ],
    "pattern": {
      "rule": "oa 念 [o]",
      "words": [
        "road",
        "coat",
        "boat"
      ]
    },
    "root": "源自古北歐語 lán（借出之物），和 lend 同源",
    "tip": "borrow（借入）vs. lend / loan（借出）方向別搞反；take out a loan ＝ 向銀行貸款"
  },
  {
    "id": "mortgage",
    "word": "mortgage",
    "tier": 1,
    "topic": "銀行金融",
    "kk": "[ˋmɔrgɪdʒ]",
    "chunks": [
      {
        "t": "mor",
        "k": "mɔr",
        "s": 1,
        "n": "or 念 [ɔr]"
      },
      {
        "t": "t",
        "k": "",
        "silent": true,
        "n": "t 不發音！"
      },
      {
        "t": "g",
        "k": "g"
      },
      {
        "t": "age",
        "k": "ɪdʒ",
        "n": "非重音的 -age 念 [ɪdʒ]"
      }
    ],
    "senses": [
      {
        "pos": "n.",
        "zh": [
          "房屋貸款",
          "抵押貸款"
        ],
        "ex": "They took out a 30-year mortgage to buy their first home.",
        "exZh": "他們申請了三十年期的房貸來買第一間房子。"
      },
      {
        "pos": "v.",
        "zh": [
          "抵押（房地產）"
        ],
        "ex": "The owner mortgaged the building to finance the expansion.",
        "exZh": "業主把大樓拿去抵押，籌措擴張的資金。"
      }
    ],
    "family": [],
    "collocations": [
      {
        "en": "take out a mortgage",
        "zh": "申請房貸"
      },
      {
        "en": "mortgage payment",
        "zh": "房貸還款"
      },
      {
        "en": "mortgage rate",
        "zh": "房貸利率"
      },
      {
        "en": "pay off a mortgage",
        "zh": "還清房貸"
      }
    ],
    "synonyms": [
      "home loan",
      "housing loan"
    ],
    "pattern": {
      "rule": "非重音節的 -age 念 [ɪdʒ]",
      "words": [
        "package",
        "message",
        "village"
      ]
    },
    "root": "古法文 mort（死）+ gage（抵押品）→「死的抵押」：還清後抵押就失效，還不出來土地就歸對方",
    "tip": "t 不發音，聽力念 [ˋmɔrgɪdʒ]；銀行情境常和 interest rate（利率）、loan（貸款）一起出現"
  },
  {
    "id": "currency",
    "word": "currency",
    "tier": 1,
    "topic": "銀行金融",
    "kk": "[ˋkɝənsɪ]",
    "chunks": [
      {
        "t": "curr",
        "k": "kɝ",
        "s": 1,
        "n": "ur 念 [ɝ]，雙 r 只念一次"
      },
      {
        "t": "en",
        "k": "ən",
        "n": "非重音的 e 弱化成 [ə]"
      },
      {
        "t": "cy",
        "k": "sɪ",
        "n": "c 後面接 y 念 [s]"
      }
    ],
    "senses": [
      {
        "pos": "n.",
        "zh": [
          "貨幣",
          "通貨"
        ],
        "ex": "You can exchange foreign currency at the airport.",
        "exZh": "你可以在機場兌換外幣。"
      },
      {
        "pos": "n.",
        "zh": [
          "流通",
          "普及"
        ],
        "ex": "The idea of a four-day workweek is gaining currency.",
        "exZh": "一週上班四天的想法越來越普遍。"
      }
    ],
    "family": [],
    "collocations": [
      {
        "en": "foreign currency",
        "zh": "外幣"
      },
      {
        "en": "currency exchange",
        "zh": "貨幣兌換"
      },
      {
        "en": "local currency",
        "zh": "當地貨幣"
      },
      {
        "en": "exchange rate",
        "zh": "匯率"
      }
    ],
    "synonyms": [
      "money",
      "cash",
      "legal tender"
    ],
    "pattern": {
      "rule": "c 後面接 e / i / y 念 [s]",
      "words": [
        "agency",
        "policy",
        "fancy"
      ]
    },
    "root": "拉丁文 currere（跑、流動）→ 在市場上流通的東西 → 貨幣；current（水流；目前的）也同源",
    "tip": "不要和 current（目前的）搞混；Part 7 外幣兌換常寫 exchange currency"
  },
  {
    "id": "transaction",
    "word": "transaction",
    "tier": 1,
    "topic": "銀行金融",
    "kk": "[trænˋzækʃən]",
    "chunks": [
      {
        "t": "tran",
        "k": "træn"
      },
      {
        "t": "sac",
        "k": "zæk",
        "s": 1,
        "n": "trans- 的 s 在這裡念 [z]"
      },
      {
        "t": "tion",
        "k": "ʃən",
        "n": "-tion 念 [ʃən]"
      }
    ],
    "senses": [
      {
        "pos": "n.",
        "zh": [
          "交易",
          "（一筆）買賣"
        ],
        "ex": "All credit card transactions are processed securely.",
        "exZh": "所有信用卡交易都經過安全處理。"
      },
      {
        "pos": "n.",
        "zh": [
          "（業務的）處理、辦理"
        ],
        "ex": "The bank charges a fee for each transaction at the counter.",
        "exZh": "銀行每辦理一筆臨櫃業務都會收取手續費。"
      }
    ],
    "family": [
      {
        "pos": "v.",
        "w": "transact",
        "zh": "進行交易、辦理"
      },
      {
        "pos": "adj.",
        "w": "transactional",
        "zh": "交易的"
      }
    ],
    "collocations": [
      {
        "en": "complete a transaction",
        "zh": "完成交易"
      },
      {
        "en": "online transaction",
        "zh": "線上交易"
      },
      {
        "en": "transaction fee",
        "zh": "交易手續費"
      },
      {
        "en": "transaction record",
        "zh": "交易紀錄"
      }
    ],
    "synonyms": [
      "deal",
      "purchase",
      "business deal"
    ],
    "pattern": {
      "rule": "重音閉音節的 a 念 [æ]",
      "words": [
        "action",
        "practice",
        "factor"
      ]
    },
    "root": "trans（穿越）+ act（做）→ 雙方之間來回把事情辦完 → 交易",
    "tip": "可數名詞：a transaction / transactions；銀行對帳單上逐筆列出的就是 transactions"
  },
  {
    "id": "investment",
    "word": "investment",
    "tier": 1,
    "topic": "銀行金融",
    "kk": "[ɪnˋvɛstmənt]",
    "chunks": [
      {
        "t": "in",
        "k": "ɪn"
      },
      {
        "t": "vest",
        "k": "vɛst",
        "s": 1
      },
      {
        "t": "ment",
        "k": "mənt",
        "n": "名詞字尾 -ment 弱化成 [mənt]"
      }
    ],
    "senses": [
      {
        "pos": "n.",
        "zh": [
          "投資",
          "投資額"
        ],
        "ex": "The company made a large investment in new equipment.",
        "exZh": "公司在新設備上投入了大筆投資。"
      },
      {
        "pos": "n.",
        "zh": [
          "（時間、心力的）投入"
        ],
        "ex": "Training new staff is a worthwhile investment of time.",
        "exZh": "訓練新員工是值得投入時間的事。"
      }
    ],
    "family": [
      {
        "pos": "v.",
        "w": "invest",
        "zh": "投資；投入"
      },
      {
        "pos": "n.",
        "w": "investor",
        "zh": "投資人"
      }
    ],
    "collocations": [
      {
        "en": "make an investment in",
        "zh": "投資於…"
      },
      {
        "en": "return on investment (ROI)",
        "zh": "投資報酬率"
      },
      {
        "en": "invest in",
        "zh": "投資…"
      },
      {
        "en": "foreign investment",
        "zh": "外國投資"
      }
    ],
    "synonyms": [
      "funding",
      "capital",
      "stake"
    ],
    "pattern": {
      "rule": "名詞字尾 -ment 念 [mənt]",
      "words": [
        "payment",
        "equipment",
        "department"
      ]
    },
    "root": "in（進入）+ vest（衣服）→ 原意「穿上」，後來引申為把資金投入（換上新形式）→ 投資",
    "tip": "介系詞固定用 in：invest in / investment in。Part 5 常考 investor（人）vs. investment（事）"
  },
  {
    "id": "statement",
    "word": "statement",
    "tier": 1,
    "topic": "銀行金融",
    "kk": "[ˋstetmənt]",
    "chunks": [
      {
        "t": "sta",
        "k": "ste",
        "s": 1,
        "n": "a + 子音 + e → a 念 [e]"
      },
      {
        "t": "t",
        "k": "t"
      },
      {
        "t": "e",
        "k": "",
        "silent": true,
        "n": "state 的 e 不發音"
      },
      {
        "t": "ment",
        "k": "mənt",
        "n": "-ment 弱化成 [mənt]"
      }
    ],
    "senses": [
      {
        "pos": "n.",
        "zh": [
          "聲明",
          "陳述"
        ],
        "ex": "The CEO issued a statement about the merger.",
        "exZh": "執行長針對合併案發表了聲明。"
      },
      {
        "pos": "n.",
        "zh": [
          "對帳單",
          "結帳單"
        ],
        "ex": "Your monthly bank statement is available online.",
        "exZh": "你每個月的銀行對帳單可以在網路上查看。"
      },
      {
        "pos": "n.",
        "zh": [
          "（財務）報表"
        ],
        "ex": "The accountant is preparing the year-end financial statements.",
        "exZh": "會計師正在準備年終財務報表。"
      }
    ],
    "family": [
      {
        "pos": "v.",
        "w": "state",
        "zh": "陳述、說明"
      }
    ],
    "collocations": [
      {
        "en": "bank statement",
        "zh": "銀行對帳單"
      },
      {
        "en": "financial statement",
        "zh": "財務報表"
      },
      {
        "en": "issue a statement",
        "zh": "發表聲明"
      },
      {
        "en": "billing statement",
        "zh": "帳單明細"
      }
    ],
    "synonyms": [
      "announcement",
      "declaration",
      "account summary"
    ],
    "pattern": {
      "rule": "a + 子音 + 字尾 e → a 念 [e]，e 不發音",
      "words": [
        "rate",
        "date",
        "estate"
      ]
    },
    "root": "state（陳述）+ -ment（名詞字尾）→ 陳述出來的東西",
    "tip": "銀行、信用卡情境的 statement 幾乎都是「對帳單」，不要只想到「聲明」"
  },
  {
    "id": "quarter",
    "word": "quarter",
    "tier": 1,
    "topic": "購物財務",
    "kk": "[ˋkwɔrtɚ]",
    "chunks": [
      {
        "t": "qu",
        "k": "kw",
        "s": 1,
        "n": "qu 念 [kw]"
      },
      {
        "t": "ar",
        "k": "ɔr",
        "n": "[w] 後面的 ar 念 [ɔr]，不是 [ɑr]"
      },
      {
        "t": "ter",
        "k": "tɚ",
        "n": "字尾非重音的 er 念 [ɚ]"
      }
    ],
    "senses": [
      {
        "pos": "n.",
        "zh": [
          "季度",
          "一季（三個月）"
        ],
        "ex": "Sales rose by 8% in the third quarter.",
        "exZh": "第三季的銷售額成長了 8%。"
      },
      {
        "pos": "n.",
        "zh": [
          "四分之一",
          "十五分鐘"
        ],
        "ex": "The train leaves at a quarter past nine.",
        "exZh": "火車九點十五分開。"
      },
      {
        "pos": "n.",
        "zh": [
          "25 分硬幣"
        ],
        "ex": "The parking meter only accepts quarters.",
        "exZh": "這個停車計時器只收 25 分硬幣。"
      }
    ],
    "family": [
      {
        "pos": "adj.",
        "w": "quarterly",
        "zh": "每季的"
      },
      {
        "pos": "n.",
        "w": "headquarters",
        "zh": "總部"
      }
    ],
    "collocations": [
      {
        "en": "the first / second quarter",
        "zh": "第一／二季"
      },
      {
        "en": "quarterly report",
        "zh": "季報"
      },
      {
        "en": "quarterly earnings",
        "zh": "季度盈餘"
      },
      {
        "en": "a quarter of",
        "zh": "…的四分之一"
      }
    ],
    "synonyms": [
      "three-month period",
      "one-fourth",
      "fiscal period"
    ],
    "pattern": {
      "rule": "[w] 後面的 ar 念 [ɔr]",
      "words": [
        "warm",
        "warn",
        "award"
      ]
    },
    "root": "拉丁文 quartus（第四）→ 四分之一 → 一年的四分之一 ＝ 一季",
    "tip": "財報情境常縮寫成 Q1、Q2；quarterly 可當形容詞或副詞（每季地）"
  },
  {
    "id": "analysis",
    "word": "analysis",
    "tier": 1,
    "topic": "辦公日常",
    "kk": "[əˋnæləsɪs]",
    "chunks": [
      {
        "t": "a",
        "k": "ə",
        "n": "開頭非重音的 a 弱化成 [ə]"
      },
      {
        "t": "na",
        "k": "næ",
        "s": 1
      },
      {
        "t": "ly",
        "k": "lə",
        "n": "非重音的 y 弱化成 [ə]"
      },
      {
        "t": "sis",
        "k": "sɪs",
        "n": "名詞字尾 -sis 念 [sɪs]"
      }
    ],
    "senses": [
      {
        "pos": "n.",
        "zh": [
          "分析",
          "分析報告"
        ],
        "ex": "Our team conducted a detailed analysis of customer feedback.",
        "exZh": "我們團隊針對顧客意見做了詳細分析。"
      }
    ],
    "family": [
      {
        "pos": "v.",
        "w": "analyze",
        "zh": "分析"
      },
      {
        "pos": "n.",
        "w": "analyst",
        "zh": "分析師"
      },
      {
        "pos": "adj.",
        "w": "analytical",
        "zh": "分析的"
      }
    ],
    "collocations": [
      {
        "en": "market analysis",
        "zh": "市場分析"
      },
      {
        "en": "conduct an analysis",
        "zh": "進行分析"
      },
      {
        "en": "data analysis",
        "zh": "資料分析"
      },
      {
        "en": "cost-benefit analysis",
        "zh": "成本效益分析"
      }
    ],
    "synonyms": [
      "examination",
      "evaluation",
      "study"
    ],
    "pattern": {
      "rule": "名詞字尾 -sis 念 [sɪs]",
      "words": [
        "crisis",
        "basis",
        "emphasis"
      ]
    },
    "root": "希臘文 ana（完全）+ lysis（鬆開）→ 完全拆解開來 → 分析",
    "tip": "複數是 analyses [əˋnæləˌsiz]；Part 5 常考 analysis（事）/ analyst（人）/ analyze（動詞）"
  },
  {
    "id": "branch",
    "word": "branch",
    "tier": 1,
    "topic": "銀行金融",
    "kk": "[bræntʃ]",
    "chunks": [
      {
        "t": "bra",
        "k": "bræ",
        "n": "a 念 [æ]"
      },
      {
        "t": "n",
        "k": "n"
      },
      {
        "t": "ch",
        "k": "tʃ",
        "n": "ch 念 [tʃ]"
      }
    ],
    "senses": [
      {
        "pos": "n.",
        "zh": [
          "分行",
          "分店",
          "分公司"
        ],
        "ex": "The bank is opening a new branch downtown.",
        "exZh": "這家銀行要在市中心開一家新分行。"
      },
      {
        "pos": "n.",
        "zh": [
          "分支",
          "部門"
        ],
        "ex": "She works in the research branch of the company.",
        "exZh": "她在公司的研究部門工作。"
      },
      {
        "pos": "v.",
        "zh": [
          "拓展（業務）"
        ],
        "ex": "The bakery plans to branch out into catering.",
        "exZh": "這家麵包店打算把業務拓展到外燴。"
      }
    ],
    "family": [],
    "collocations": [
      {
        "en": "branch office",
        "zh": "分公司、分處"
      },
      {
        "en": "branch manager",
        "zh": "分行經理、分店經理"
      },
      {
        "en": "local branch",
        "zh": "當地分行"
      },
      {
        "en": "branch out into",
        "zh": "拓展到（新領域）"
      }
    ],
    "synonyms": [
      "office",
      "outlet",
      "division"
    ],
    "pattern": {
      "rule": "ch 念 [tʃ]",
      "words": [
        "lunch",
        "launch",
        "purchase"
      ]
    },
    "root": null,
    "tip": "Part 7 常把 branch 改寫成 location 或 office；branch out 是「拓展新業務」"
  },
  {
    "id": "consumer",
    "word": "consumer",
    "tier": 1,
    "topic": "行銷廣告",
    "kk": "[kənˋsumɚ]",
    "chunks": [
      {
        "t": "con",
        "k": "kən",
        "n": "非重音的 o 弱化成 [ə]"
      },
      {
        "t": "su",
        "k": "su",
        "s": 1,
        "n": "美式 u 念 [u]"
      },
      {
        "t": "mer",
        "k": "mɚ",
        "n": "字尾 -er 念 [ɚ]"
      }
    ],
    "senses": [
      {
        "pos": "n.",
        "zh": [
          "消費者"
        ],
        "ex": "Consumers are spending more on online shopping.",
        "exZh": "消費者在網路購物上花得更多了。"
      }
    ],
    "family": [
      {
        "pos": "v.",
        "w": "consume",
        "zh": "消耗；消費"
      },
      {
        "pos": "n.",
        "w": "consumption",
        "zh": "消耗量；消費"
      }
    ],
    "collocations": [
      {
        "en": "consumer demand",
        "zh": "消費需求"
      },
      {
        "en": "consumer survey",
        "zh": "消費者調查"
      },
      {
        "en": "consumer goods",
        "zh": "消費品"
      },
      {
        "en": "energy consumption",
        "zh": "能源消耗"
      }
    ],
    "synonyms": [
      "customer",
      "buyer",
      "shopper"
    ],
    "pattern": {
      "rule": "非重音的 con- 念 [kən]",
      "words": [
        "contain",
        "consider",
        "condition"
      ]
    },
    "root": "con（完全）+ sume（拿取）→ 全部拿去用掉 → 消耗、消費",
    "tip": "Part 5 常考 consumption（名詞）；consumer 是人，consumption 是消耗的量"
  },
  {
    "id": "competitor",
    "word": "competitor",
    "tier": 1,
    "topic": "行銷廣告",
    "kk": "[kəmˋpɛtətɚ]",
    "chunks": [
      {
        "t": "com",
        "k": "kəm",
        "n": "非重音的 o 弱化成 [ə]"
      },
      {
        "t": "pe",
        "k": "pɛ",
        "s": 1
      },
      {
        "t": "ti",
        "k": "tə",
        "n": "非重音的 i 弱化成 [ə]"
      },
      {
        "t": "tor",
        "k": "tɚ",
        "n": "字尾 -or 念 [ɚ]"
      }
    ],
    "senses": [
      {
        "pos": "n.",
        "zh": [
          "競爭對手",
          "同業"
        ],
        "ex": "Our prices are lower than those of our main competitor.",
        "exZh": "我們的價格比主要競爭對手低。"
      },
      {
        "pos": "n.",
        "zh": [
          "參賽者"
        ],
        "ex": "Each competitor must submit a design by Friday.",
        "exZh": "每位參賽者都必須在週五前提交設計。"
      }
    ],
    "family": [
      {
        "pos": "v.",
        "w": "compete",
        "zh": "競爭"
      },
      {
        "pos": "n.",
        "w": "competition",
        "zh": "競爭；比賽"
      },
      {
        "pos": "adj.",
        "w": "competitive",
        "zh": "有競爭力的；競爭激烈的"
      }
    ],
    "collocations": [
      {
        "en": "main competitor",
        "zh": "主要競爭對手"
      },
      {
        "en": "compete with",
        "zh": "與…競爭"
      },
      {
        "en": "competitive price",
        "zh": "有競爭力的價格"
      },
      {
        "en": "stay ahead of competitors",
        "zh": "保持領先對手"
      }
    ],
    "synonyms": [
      "rival",
      "rival company",
      "competition"
    ],
    "pattern": {
      "rule": "表示「人」的字尾 -or 念 [ɚ]",
      "words": [
        "visitor",
        "director",
        "editor"
      ]
    },
    "root": "com（一起）+ pet（追求）→ 一起追求同一個目標的人",
    "tip": "Part 5 詞性必考：competitive price（形容詞）、fierce competition（名詞）、competitor（人）"
  },
  {
    "id": "strategy",
    "word": "strategy",
    "tier": 1,
    "topic": "行銷廣告",
    "kk": "[ˋstrætədʒɪ]",
    "chunks": [
      {
        "t": "stra",
        "k": "stræ",
        "s": 1,
        "n": "a 念 [æ]"
      },
      {
        "t": "te",
        "k": "tə",
        "n": "非重音的 e 弱化成 [ə]"
      },
      {
        "t": "gy",
        "k": "dʒɪ",
        "n": "g 後面接 y 念 [dʒ]"
      }
    ],
    "senses": [
      {
        "pos": "n.",
        "zh": [
          "策略",
          "戰略"
        ],
        "ex": "We need a new marketing strategy to attract younger customers.",
        "exZh": "我們需要新的行銷策略來吸引年輕顧客。"
      }
    ],
    "family": [
      {
        "pos": "adj.",
        "w": "strategic",
        "zh": "策略性的"
      },
      {
        "pos": "adv.",
        "w": "strategically",
        "zh": "策略性地"
      }
    ],
    "collocations": [
      {
        "en": "marketing strategy",
        "zh": "行銷策略"
      },
      {
        "en": "develop a strategy",
        "zh": "擬定策略"
      },
      {
        "en": "business strategy",
        "zh": "經營策略"
      },
      {
        "en": "strategic plan",
        "zh": "策略計畫"
      }
    ],
    "synonyms": [
      "plan",
      "approach",
      "tactic"
    ],
    "pattern": {
      "rule": "g 後面接 e / i / y 念 [dʒ]",
      "words": [
        "energy",
        "technology",
        "agency"
      ]
    },
    "root": "希臘文 strategos（將軍）→ 將軍的用兵之道 → 策略",
    "tip": "形容詞 strategic 重音移到後面 [strəˋtidʒɪk]，聽力要注意；strategically located（地點絕佳）常見於 Part 7"
  },
  {
    "id": "campaign",
    "word": "campaign",
    "tier": 1,
    "topic": "行銷廣告",
    "kk": "[kæmˋpen]",
    "chunks": [
      {
        "t": "cam",
        "k": "kæm"
      },
      {
        "t": "pai",
        "k": "pe",
        "s": 1,
        "n": "ai 念 [e]"
      },
      {
        "t": "g",
        "k": "",
        "silent": true,
        "n": "gn 的 g 不發音！"
      },
      {
        "t": "n",
        "k": "n"
      }
    ],
    "senses": [
      {
        "pos": "n.",
        "zh": [
          "（行銷、宣傳）活動"
        ],
        "ex": "The advertising campaign will run for six weeks.",
        "exZh": "這波廣告活動會持續六週。"
      },
      {
        "pos": "n.",
        "zh": [
          "競選活動",
          "運動"
        ],
        "ex": "The city launched a campaign to reduce plastic waste.",
        "exZh": "市政府發起了減少塑膠垃圾的運動。"
      },
      {
        "pos": "v.",
        "zh": [
          "發起運動",
          "爭取"
        ],
        "ex": "Local residents campaigned for a new bus route.",
        "exZh": "當地居民爭取開設新的公車路線。"
      }
    ],
    "family": [],
    "collocations": [
      {
        "en": "advertising campaign",
        "zh": "廣告活動"
      },
      {
        "en": "marketing campaign",
        "zh": "行銷活動"
      },
      {
        "en": "launch a campaign",
        "zh": "發起活動"
      },
      {
        "en": "campaign for",
        "zh": "為…發起運動、爭取…"
      }
    ],
    "synonyms": [
      "promotion",
      "drive",
      "push"
    ],
    "pattern": {
      "rule": "gn 的 g 不發音",
      "words": [
        "sign",
        "design",
        "foreign"
      ]
    },
    "root": "拉丁文 campania（平原、野外）→ 軍隊在野外作戰 → 一連串有目標的行動",
    "tip": "常和 launch 搭配：launch an advertising campaign；Part 7 常改寫成 promotion"
  },
  {
    "id": "launch",
    "word": "launch",
    "tier": 1,
    "topic": "行銷廣告",
    "kk": "[lɔntʃ]",
    "chunks": [
      {
        "t": "lau",
        "k": "lɔ",
        "n": "au 念 [ɔ]（美國也有人念 [ɑ]）"
      },
      {
        "t": "n",
        "k": "n"
      },
      {
        "t": "ch",
        "k": "tʃ",
        "n": "ch 念 [tʃ]"
      }
    ],
    "senses": [
      {
        "pos": "v.",
        "zh": [
          "推出（新產品）",
          "上市"
        ],
        "ex": "The company will launch its new smartphone next month.",
        "exZh": "這家公司下個月將推出新款智慧型手機。"
      },
      {
        "pos": "v.",
        "zh": [
          "發起",
          "展開"
        ],
        "ex": "Management launched an investigation into the delay.",
        "exZh": "管理階層針對延誤展開調查。"
      },
      {
        "pos": "n.",
        "zh": [
          "（產品）上市",
          "發表會"
        ],
        "ex": "Journalists were invited to the product launch.",
        "exZh": "記者們受邀參加產品發表會。"
      }
    ],
    "family": [],
    "collocations": [
      {
        "en": "launch a new product",
        "zh": "推出新產品"
      },
      {
        "en": "product launch",
        "zh": "產品上市、發表"
      },
      {
        "en": "launch event",
        "zh": "發表會"
      },
      {
        "en": "launch date",
        "zh": "上市日期"
      }
    ],
    "synonyms": [
      "release",
      "introduce",
      "roll out"
    ],
    "pattern": {
      "rule": "au 念 [ɔ]",
      "words": [
        "author",
        "pause",
        "audit"
      ]
    },
    "root": null,
    "tip": "Part 7 常把 launch 改寫成 release、introduce、unveil 或 roll out"
  },
  {
    "id": "survey",
    "word": "survey",
    "tier": 1,
    "topic": "行銷廣告",
    "kk": "[ˋsɝve]",
    "stressNote": "名詞重音在前 [ˋsɝve]，動詞重音在後 [sɚˋve]（名前動後）",
    "chunks": [
      {
        "t": "sur",
        "k": "sɝ",
        "s": 1,
        "n": "名詞念 [ˋsɝ]；動詞念 [sɚ]，重音移到後面"
      },
      {
        "t": "vey",
        "k": "ve",
        "n": "ey 念 [e]"
      }
    ],
    "senses": [
      {
        "pos": "n.",
        "zh": [
          "（問卷）調查",
          "民調"
        ],
        "ex": "Please take a few minutes to complete our customer survey.",
        "exZh": "請花幾分鐘填寫我們的顧客問卷。"
      },
      {
        "pos": "v.",
        "zh": [
          "對…做問卷調查"
        ],
        "ex": "We surveyed 500 customers about the new menu.",
        "exZh": "我們針對新菜單調查了五百位顧客。"
      },
      {
        "pos": "v.",
        "zh": [
          "勘察",
          "審視"
        ],
        "ex": "Engineers surveyed the site before construction began.",
        "exZh": "工程師在動工前先勘察了工地。"
      }
    ],
    "family": [
      {
        "pos": "n.",
        "w": "surveyor",
        "zh": "測量員；鑑定人"
      }
    ],
    "collocations": [
      {
        "en": "conduct a survey",
        "zh": "進行調查"
      },
      {
        "en": "complete / fill out a survey",
        "zh": "填寫問卷"
      },
      {
        "en": "customer satisfaction survey",
        "zh": "顧客滿意度調查"
      },
      {
        "en": "survey results",
        "zh": "調查結果"
      }
    ],
    "synonyms": [
      "questionnaire",
      "poll",
      "study"
    ],
    "pattern": {
      "rule": "ey 念 [e]",
      "words": [
        "they",
        "obey",
        "convey"
      ]
    },
    "root": "sur（在上）+ vey（看，源自拉丁文 videre）→ 從上往下看 → 全面審視、調查",
    "tip": "Part 7 常見：問卷常改寫成 questionnaire；according to the survey 後面通常是考點"
  },
  {
    "id": "discount",
    "word": "discount",
    "tier": 1,
    "topic": "購物財務",
    "kk": "[ˋdɪskaʊnt]",
    "stressNote": "名詞念 [ˋdɪskaʊnt]；動詞美式多半也念 [ˋdɪskaʊnt]，但也常聽到 [dɪsˋkaʊnt]",
    "chunks": [
      {
        "t": "dis",
        "k": "dɪs",
        "s": 1
      },
      {
        "t": "count",
        "k": "kaʊnt",
        "n": "ou 念 [aʊ]"
      }
    ],
    "senses": [
      {
        "pos": "n.",
        "zh": [
          "折扣"
        ],
        "ex": "Members receive a 15% discount on all purchases.",
        "exZh": "會員購物一律享八五折。"
      },
      {
        "pos": "v.",
        "zh": [
          "打折",
          "降價"
        ],
        "ex": "Winter coats have been discounted by 30%.",
        "exZh": "冬季大衣已經打七折。"
      },
      {
        "pos": "v.",
        "zh": [
          "不予採信",
          "忽視"
        ],
        "ex": "We cannot discount the possibility of further delays.",
        "exZh": "我們不能排除進一步延誤的可能性。"
      }
    ],
    "family": [
      {
        "pos": "adj.",
        "w": "discounted",
        "zh": "打折的"
      }
    ],
    "collocations": [
      {
        "en": "offer a discount",
        "zh": "提供折扣"
      },
      {
        "en": "a 20% discount on",
        "zh": "…打八折"
      },
      {
        "en": "discount coupon / voucher",
        "zh": "折價券"
      },
      {
        "en": "at a discounted price",
        "zh": "以折扣價"
      }
    ],
    "synonyms": [
      "price reduction",
      "markdown",
      "money off"
    ],
    "pattern": {
      "rule": "ou 念 [aʊ]",
      "words": [
        "account",
        "amount",
        "about"
      ]
    },
    "root": "dis（去除）+ count（計算）→ 從算好的價錢裡扣掉 → 折扣",
    "tip": "英文的 20% discount ＝ 中文「打八折」，數字別看反；介系詞用 on：a discount on shoes"
  },
  {
    "id": "subscription",
    "word": "subscription",
    "tier": 1,
    "topic": "購物財務",
    "kk": "[səbˋskrɪpʃən]",
    "chunks": [
      {
        "t": "sub",
        "k": "səb",
        "n": "非重音的 u 弱化成 [ə]"
      },
      {
        "t": "scrip",
        "k": "skrɪp",
        "s": 1,
        "n": "subscribe 的 scribe 變成 script，i 改念短音 [ɪ]"
      },
      {
        "t": "tion",
        "k": "ʃən",
        "n": "-tion 念 [ʃən]"
      }
    ],
    "senses": [
      {
        "pos": "n.",
        "zh": [
          "訂閱",
          "訂購（費）"
        ],
        "ex": "Your magazine subscription will expire next month.",
        "exZh": "你的雜誌訂閱下個月到期。"
      },
      {
        "pos": "n.",
        "zh": [
          "會費",
          "（服務的）定期付費"
        ],
        "ex": "The software is available for a monthly subscription of $10.",
        "exZh": "這套軟體月費十美元即可使用。"
      }
    ],
    "family": [
      {
        "pos": "v.",
        "w": "subscribe",
        "zh": "訂閱"
      },
      {
        "pos": "n.",
        "w": "subscriber",
        "zh": "訂閱者、訂戶"
      }
    ],
    "collocations": [
      {
        "en": "renew a subscription",
        "zh": "續訂"
      },
      {
        "en": "cancel a subscription",
        "zh": "取消訂閱"
      },
      {
        "en": "subscribe to",
        "zh": "訂閱…"
      },
      {
        "en": "annual subscription",
        "zh": "年費訂閱"
      }
    ],
    "synonyms": [
      "membership",
      "registration",
      "regular payment"
    ],
    "pattern": {
      "rule": "-ption 念 [pʃən]",
      "words": [
        "description",
        "prescription",
        "option"
      ]
    },
    "root": "sub（在下面）+ script（寫）→ 在文件下面簽名 → 簽名認購 → 訂閱",
    "tip": "動詞要加 to：subscribe to a newsletter；renew（續訂）、expire（到期）常一起出現"
  },
  {
    "id": "retailer",
    "word": "retailer",
    "tier": 1,
    "topic": "購物財務",
    "kk": "[ˋritelɚ]",
    "chunks": [
      {
        "t": "re",
        "k": "ri",
        "s": 1,
        "n": "重音的 re 念 [ri]"
      },
      {
        "t": "tai",
        "k": "te",
        "n": "ai 念 [e]"
      },
      {
        "t": "ler",
        "k": "lɚ",
        "n": "字尾 -er 念 [ɚ]"
      }
    ],
    "senses": [
      {
        "pos": "n.",
        "zh": [
          "零售商",
          "零售店"
        ],
        "ex": "The product is sold through major online retailers.",
        "exZh": "這項產品透過大型網路零售商販售。"
      }
    ],
    "family": [
      {
        "pos": "n.",
        "w": "retail",
        "zh": "零售"
      },
      {
        "pos": "adj.",
        "w": "retail",
        "zh": "零售的"
      }
    ],
    "collocations": [
      {
        "en": "online retailer",
        "zh": "網路零售商"
      },
      {
        "en": "retail price",
        "zh": "零售價"
      },
      {
        "en": "retail store / outlet",
        "zh": "零售店"
      },
      {
        "en": "leading retailer",
        "zh": "龍頭零售商"
      }
    ],
    "synonyms": [
      "store",
      "seller",
      "dealer"
    ],
    "pattern": {
      "rule": "ai 念 [e]",
      "words": [
        "contain",
        "detail",
        "email"
      ]
    },
    "root": "re（再）+ tail（切，古法文 taillier）→ 把大批貨切成小份再賣 → 零售",
    "tip": "retailer（零售商）vs. wholesaler（批發商）；Part 5 常考 retail（名詞／形容詞）vs. retailer（人、店家）"
  },
  {
    "id": "expand",
    "word": "expand",
    "tier": 1,
    "topic": "行銷廣告",
    "kk": "[ɪkˋspænd]",
    "chunks": [
      {
        "t": "e",
        "k": "ɪ"
      },
      {
        "t": "x",
        "k": "kˋs",
        "s": 1,
        "n": "x 念 [ks]；重音落在 [k] 和 [s] 之間，聽起來像 ik-SPAND"
      },
      {
        "t": "pand",
        "k": "pænd",
        "n": "重音節的 a 念 [æ]"
      }
    ],
    "senses": [
      {
        "pos": "v.",
        "zh": [
          "擴大",
          "擴展",
          "擴張"
        ],
        "ex": "The company plans to expand into Southeast Asia next year.",
        "exZh": "公司計劃明年拓展到東南亞市場。"
      },
      {
        "pos": "v.",
        "zh": [
          "詳述"
        ],
        "ex": "Could you expand on your proposal at the next meeting?",
        "exZh": "你能在下次會議上詳細說明你的提案嗎？"
      }
    ],
    "family": [
      {
        "pos": "n.",
        "w": "expansion",
        "zh": "擴張、擴展"
      },
      {
        "pos": "adj.",
        "w": "expansive",
        "zh": "廣闊的；擴張性的"
      }
    ],
    "collocations": [
      {
        "en": "expand into",
        "zh": "拓展到（新市場）"
      },
      {
        "en": "expand the business",
        "zh": "擴大事業"
      },
      {
        "en": "expand on",
        "zh": "詳述"
      },
      {
        "en": "expansion plan",
        "zh": "擴張計畫"
      }
    ],
    "synonyms": [
      "grow",
      "extend",
      "enlarge"
    ],
    "pattern": {
      "rule": "ex- 後面接子音念 [ɪks]",
      "words": [
        "explain",
        "expense",
        "extend"
      ]
    },
    "root": "ex（向外）+ pand（展開）→ 向外展開 → 擴大",
    "tip": "Part 5 常考名詞 expansion：the expansion of the factory；expand into + 新市場／新地區"
  },
  {
    "id": "brochure",
    "word": "brochure",
    "tier": 1,
    "topic": "行銷廣告",
    "kk": "[broˋʃʊr]",
    "chunks": [
      {
        "t": "bro",
        "k": "bro",
        "n": "o 念 [o]"
      },
      {
        "t": "chu",
        "k": "ʃʊ",
        "s": 1,
        "n": "法文來的 ch 念 [ʃ]，不是 [tʃ]"
      },
      {
        "t": "re",
        "k": "r",
        "n": "字尾 e 不發音"
      }
    ],
    "senses": [
      {
        "pos": "n.",
        "zh": [
          "宣傳手冊",
          "小冊子",
          "簡介"
        ],
        "ex": "Please pick up a brochure at the front desk for more information.",
        "exZh": "欲知詳情，請到櫃台索取簡介手冊。"
      }
    ],
    "family": [],
    "collocations": [
      {
        "en": "travel brochure",
        "zh": "旅遊手冊"
      },
      {
        "en": "product brochure",
        "zh": "產品型錄"
      },
      {
        "en": "company brochure",
        "zh": "公司簡介"
      },
      {
        "en": "distribute brochures",
        "zh": "發放手冊"
      }
    ],
    "synonyms": [
      "pamphlet",
      "booklet",
      "leaflet"
    ],
    "pattern": {
      "rule": "法文借字的 ch 念 [ʃ]",
      "words": [
        "machine",
        "chef",
        "parachute"
      ]
    },
    "root": "法文 brocher（裝訂、縫合）→ 縫訂起來的小冊子",
    "tip": "Part 7 常改寫成 pamphlet、booklet；重音在後面 [broˋʃʊr]，也有人念 [broˋʃjʊr]"
  },
  {
    "id": "demonstrate",
    "word": "demonstrate",
    "tier": 1,
    "topic": "行銷廣告",
    "kk": "[ˋdɛmənˌstret]",
    "chunks": [
      {
        "t": "de",
        "k": "dɛ",
        "s": 1
      },
      {
        "t": "mon",
        "k": "mən",
        "n": "非重音的 o 弱化成 [ə]"
      },
      {
        "t": "strate",
        "k": "stret",
        "s": 2,
        "n": "動詞字尾 -ate 念 [et]"
      }
    ],
    "senses": [
      {
        "pos": "v.",
        "zh": [
          "示範（操作）",
          "展示"
        ],
        "ex": "The sales representative demonstrated how to use the new printer.",
        "exZh": "業務代表示範了新印表機的使用方法。"
      },
      {
        "pos": "v.",
        "zh": [
          "證明",
          "展現（能力）"
        ],
        "ex": "The results demonstrate that the strategy is working.",
        "exZh": "結果證明這個策略奏效了。"
      },
      {
        "pos": "v.",
        "zh": [
          "示威",
          "遊行抗議"
        ],
        "ex": "Workers demonstrated outside the factory.",
        "exZh": "工人在工廠外示威抗議。"
      }
    ],
    "family": [
      {
        "pos": "n.",
        "w": "demonstration",
        "zh": "示範；示威"
      },
      {
        "pos": "n.",
        "w": "demonstrator",
        "zh": "示範者；示威者"
      }
    ],
    "collocations": [
      {
        "en": "demonstrate a product",
        "zh": "示範產品"
      },
      {
        "en": "product demonstration (demo)",
        "zh": "產品展示"
      },
      {
        "en": "demonstrate the ability to",
        "zh": "展現…的能力"
      },
      {
        "en": "give a demonstration",
        "zh": "做示範"
      }
    ],
    "synonyms": [
      "show",
      "present",
      "prove"
    ],
    "pattern": {
      "rule": "動詞字尾 -ate 念 [et]",
      "words": [
        "operate",
        "celebrate",
        "indicate"
      ]
    },
    "root": "de（加強）+ monstr（顯示）→ 清楚地顯示出來 → 示範、證明",
    "tip": "徵才廣告常見 demonstrated ability / experience（具備實證的能力）；demo 是 demonstration 的口語縮寫"
  },
  {
    "id": "manufacture",
    "word": "manufacture",
    "tier": 1,
    "topic": "物流製造",
    "kk": "[ˌmænjəˋfæktʃɚ]",
    "chunks": [
      {
        "t": "ma",
        "k": "mæ",
        "s": 2
      },
      {
        "t": "nu",
        "k": "njə",
        "n": "u 在這裡念 [jə]，前面多一個 [j] 的音"
      },
      {
        "t": "fac",
        "k": "fæk",
        "s": 1,
        "n": "c 後面接子音念 [k]"
      },
      {
        "t": "ture",
        "k": "tʃɚ",
        "n": "字尾 -ture 念 [tʃɚ]"
      }
    ],
    "senses": [
      {
        "pos": "v.",
        "zh": [
          "製造",
          "（大量）生產"
        ],
        "ex": "Our factory manufactures auto parts for several car makers.",
        "exZh": "我們的工廠為好幾家車廠製造汽車零件。"
      },
      {
        "pos": "n.",
        "zh": [
          "製造",
          "生產"
        ],
        "ex": "The plant specializes in the manufacture of medical equipment.",
        "exZh": "這座工廠專門生產醫療設備。"
      }
    ],
    "family": [
      {
        "pos": "n.",
        "w": "manufacturer",
        "zh": "製造商、廠商"
      },
      {
        "pos": "n.",
        "w": "manufacturing",
        "zh": "製造業；製造"
      }
    ],
    "collocations": [
      {
        "en": "manufacturing plant",
        "zh": "製造工廠"
      },
      {
        "en": "be manufactured in",
        "zh": "在…製造"
      },
      {
        "en": "manufacturer's warranty",
        "zh": "原廠保固"
      },
      {
        "en": "manufacturing costs",
        "zh": "製造成本"
      }
    ],
    "synonyms": [
      "produce",
      "make",
      "fabricate"
    ],
    "pattern": {
      "rule": "字尾 -ture 念 [tʃɚ]",
      "words": [
        "future",
        "feature",
        "furniture"
      ]
    },
    "root": "manu（手）+ fact（做）→ 用手做出來 → 製造",
    "tip": "Part 5 常考詞性：manufacturer（製造商，指公司）/ manufacturing（製造業）/ manufacture（動詞）"
  },
  {
    "id": "component",
    "word": "component",
    "tier": 1,
    "topic": "物流製造",
    "kk": "[kəmˋponənt]",
    "chunks": [
      {
        "t": "com",
        "k": "kəm",
        "n": "非重音的 o 弱化成 [ə]"
      },
      {
        "t": "po",
        "k": "po",
        "s": 1,
        "n": "重音節的 o 後面只接一個子音，念長音 [o]"
      },
      {
        "t": "nent",
        "k": "nənt",
        "n": "非重音的 e 弱化成 [ə]"
      }
    ],
    "senses": [
      {
        "pos": "n.",
        "zh": [
          "零件",
          "元件"
        ],
        "ex": "We import most of the electronic components from Japan.",
        "exZh": "我們大部分的電子零件從日本進口。"
      },
      {
        "pos": "n.",
        "zh": [
          "組成部分",
          "要素"
        ],
        "ex": "Customer service is a key component of our business strategy.",
        "exZh": "客戶服務是我們經營策略的關鍵要素。"
      }
    ],
    "family": [],
    "collocations": [
      {
        "en": "electronic components",
        "zh": "電子零件"
      },
      {
        "en": "key component",
        "zh": "關鍵要素"
      },
      {
        "en": "component supplier",
        "zh": "零件供應商"
      }
    ],
    "synonyms": [
      "part",
      "element",
      "piece"
    ],
    "pattern": {
      "rule": "重音節的 o 後面只接一個子音再接母音 → 念長音 [o]",
      "words": [
        "moment",
        "total",
        "local"
      ]
    },
    "root": "com（一起）+ pon（放）→ 放在一起組成整體的東西",
    "tip": "Part 7 常把 component 改寫成 part；是可數名詞，常用複數 components"
  },
  {
    "id": "defective",
    "word": "defective",
    "tier": 1,
    "topic": "物流製造",
    "kk": "[dɪˋfɛktɪv]",
    "chunks": [
      {
        "t": "de",
        "k": "dɪ",
        "n": "非重音的 de 念 [dɪ]"
      },
      {
        "t": "fec",
        "k": "fɛk",
        "s": 1
      },
      {
        "t": "tive",
        "k": "tɪv",
        "n": "字尾 -ive 念 [ɪv]，e 不發音"
      }
    ],
    "senses": [
      {
        "pos": "adj.",
        "zh": [
          "有瑕疵的",
          "有缺陷的",
          "故障的"
        ],
        "ex": "Customers may return defective products within 14 days.",
        "exZh": "顧客可在十四天內退回有瑕疵的產品。"
      }
    ],
    "family": [
      {
        "pos": "n.",
        "w": "defect",
        "zh": "瑕疵、缺陷"
      }
    ],
    "collocations": [
      {
        "en": "defective product",
        "zh": "瑕疵品"
      },
      {
        "en": "replace a defective part",
        "zh": "更換故障零件"
      },
      {
        "en": "be found defective",
        "zh": "被發現有瑕疵"
      }
    ],
    "synonyms": [
      "faulty",
      "flawed",
      "damaged"
    ],
    "pattern": {
      "rule": "字尾 -ive 念 [ɪv]，e 不發音",
      "words": [
        "active",
        "expensive",
        "effective"
      ]
    },
    "root": "de（離開）+ fect（做）→ 沒做到位 → 有缺陷",
    "tip": "名詞 defect 重音在前 [ˋdifɛkt]，形容詞 defective 重音在 fec；Part 7 常改寫成 faulty"
  },
  {
    "id": "inspect",
    "word": "inspect",
    "tier": 1,
    "topic": "物流製造",
    "kk": "[ɪnˋspɛkt]",
    "chunks": [
      {
        "t": "in",
        "k": "ɪn"
      },
      {
        "t": "spect",
        "k": "spɛkt",
        "s": 1,
        "n": "s 後面的 p 不送氣，聽起來像 [b]"
      }
    ],
    "senses": [
      {
        "pos": "v.",
        "zh": [
          "檢查",
          "檢驗"
        ],
        "ex": "Every unit is carefully inspected before it leaves the factory.",
        "exZh": "每一件產品出廠前都經過仔細檢驗。"
      },
      {
        "pos": "v.",
        "zh": [
          "視察",
          "稽查"
        ],
        "ex": "Health officials will inspect the restaurant next week.",
        "exZh": "衛生官員下週會來稽查這家餐廳。"
      }
    ],
    "family": [
      {
        "pos": "n.",
        "w": "inspection",
        "zh": "檢查、檢驗"
      },
      {
        "pos": "n.",
        "w": "inspector",
        "zh": "檢查員、稽查員"
      }
    ],
    "collocations": [
      {
        "en": "inspect the equipment",
        "zh": "檢查設備"
      },
      {
        "en": "safety inspection",
        "zh": "安全檢查"
      },
      {
        "en": "pass an inspection",
        "zh": "通過檢驗"
      }
    ],
    "synonyms": [
      "examine",
      "check",
      "look over"
    ],
    "pattern": {
      "rule": "子音結尾的閉音節，e 念短音 [ɛ]",
      "words": [
        "expect",
        "respect",
        "select"
      ]
    },
    "root": "in（往內）+ spect（看）→ 往裡面仔細看 → 檢查",
    "tip": "Part 5 常考：inspector（人）/ inspection（名詞）/ inspect（動詞）"
  },
  {
    "id": "durable",
    "word": "durable",
    "tier": 1,
    "topic": "購物財務",
    "kk": "[ˋdʊrəbḷ]",
    "chunks": [
      {
        "t": "du",
        "k": "dʊ",
        "s": 1,
        "n": "美式 du 常念 [dʊ]；也有人念 [djʊ]"
      },
      {
        "t": "ra",
        "k": "rə",
        "n": "非重音的 a 弱化成 [ə]"
      },
      {
        "t": "ble",
        "k": "bḷ",
        "n": "字尾 -ble 念 [bḷ]"
      }
    ],
    "senses": [
      {
        "pos": "adj.",
        "zh": [
          "耐用的",
          "持久的"
        ],
        "ex": "These work boots are made from durable materials.",
        "exZh": "這款工作靴是用耐用的材料製成的。"
      }
    ],
    "family": [
      {
        "pos": "n.",
        "w": "durability",
        "zh": "耐用性"
      },
      {
        "pos": "n.",
        "w": "duration",
        "zh": "持續期間"
      }
    ],
    "collocations": [
      {
        "en": "durable materials",
        "zh": "耐用的材料"
      },
      {
        "en": "highly durable",
        "zh": "非常耐用"
      },
      {
        "en": "durable goods",
        "zh": "耐久財（如家電、汽車）"
      }
    ],
    "synonyms": [
      "long-lasting",
      "sturdy",
      "hard-wearing"
    ],
    "pattern": {
      "rule": "字尾 -ble 念 [bḷ]",
      "words": [
        "available",
        "possible",
        "table"
      ]
    },
    "root": "dur（持久）+ able（能夠）→ 能撐很久",
    "tip": "Part 7 常改寫成 long-lasting；duration（期間）也是同一個字根 dur"
  },
  {
    "id": "supplier",
    "word": "supplier",
    "tier": 1,
    "topic": "物流製造",
    "kk": "[səˋplaɪɚ]",
    "chunks": [
      {
        "t": "su",
        "k": "sə",
        "n": "非重音的 u 弱化成 [ə]"
      },
      {
        "t": "ppli",
        "k": "plaɪ",
        "s": 1,
        "n": "雙 p 只念一個 [p]；supply 的 y 變 i，仍念 [aɪ]"
      },
      {
        "t": "er",
        "k": "ɚ"
      }
    ],
    "senses": [
      {
        "pos": "n.",
        "zh": [
          "供應商",
          "供貨商"
        ],
        "ex": "We are looking for a new supplier of packaging materials.",
        "exZh": "我們正在找新的包材供應商。"
      }
    ],
    "family": [
      {
        "pos": "v.",
        "w": "supply",
        "zh": "供應、提供"
      },
      {
        "pos": "n.",
        "w": "supplies",
        "zh": "用品、補給品"
      }
    ],
    "collocations": [
      {
        "en": "a leading supplier of",
        "zh": "…的主要供應商"
      },
      {
        "en": "switch suppliers",
        "zh": "更換供應商"
      },
      {
        "en": "office supplies",
        "zh": "辦公用品"
      }
    ],
    "synonyms": [
      "vendor",
      "provider",
      "distributor"
    ],
    "pattern": {
      "rule": "重音在字尾的 -ply 念 [plaɪ]",
      "words": [
        "apply",
        "reply",
        "comply"
      ]
    },
    "root": "sub（在下）+ plere（填滿）→ 從下面補滿 → 供應",
    "tip": "supply A with B = supply B to A（提供 B 給 A）；supplies 複數常指「用品」"
  },
  {
    "id": "warranty",
    "word": "warranty",
    "tier": 1,
    "topic": "購物財務",
    "kk": "[ˋwɔrəntɪ]",
    "chunks": [
      {
        "t": "wa",
        "k": "wɔ",
        "s": 1,
        "n": "w 後面的 a 常念 [ɔ]（不是 [æ]）"
      },
      {
        "t": "rran",
        "k": "rən",
        "n": "雙 r 只念一個 [r]；非重音的 a 弱化成 [ə]"
      },
      {
        "t": "ty",
        "k": "tɪ",
        "n": "字尾非重音的 y 念 [ɪ]"
      }
    ],
    "senses": [
      {
        "pos": "n.",
        "zh": [
          "保固",
          "保證（書）"
        ],
        "ex": "The laptop comes with a two-year warranty.",
        "exZh": "這台筆電附兩年保固。"
      }
    ],
    "family": [
      {
        "pos": "v.",
        "w": "warrant",
        "zh": "保證；使有正當理由"
      }
    ],
    "collocations": [
      {
        "en": "under warranty",
        "zh": "在保固期內"
      },
      {
        "en": "extended warranty",
        "zh": "延長保固"
      },
      {
        "en": "warranty period",
        "zh": "保固期"
      },
      {
        "en": "The warranty covers …",
        "zh": "保固涵蓋…"
      }
    ],
    "synonyms": [
      "guarantee",
      "coverage"
    ],
    "pattern": {
      "rule": "w 後面的 ar 念 [ɔr]",
      "words": [
        "war",
        "warm",
        "award"
      ]
    },
    "root": "和 guarantee 同源：古法語北部方言的 w- 開頭，在中部方言變成 gu-",
    "tip": "Part 7 常考保固條件：The warranty does not cover damage caused by misuse.（不當使用不在保固範圍）"
  },
  {
    "id": "shipment",
    "word": "shipment",
    "tier": 1,
    "topic": "物流製造",
    "kk": "[ˋʃɪpmənt]",
    "chunks": [
      {
        "t": "ship",
        "k": "ʃɪp",
        "s": 1,
        "n": "sh 念 [ʃ]"
      },
      {
        "t": "ment",
        "k": "mənt",
        "n": "字尾 -ment 念 [mənt]"
      }
    ],
    "senses": [
      {
        "pos": "n.",
        "zh": [
          "（一批）貨物"
        ],
        "ex": "The shipment of printer paper arrived this morning.",
        "exZh": "那批印表機用紙今天早上到了。"
      },
      {
        "pos": "n.",
        "zh": [
          "運送",
          "出貨"
        ],
        "ex": "The items will be ready for shipment by Friday.",
        "exZh": "這些商品週五前可以出貨。"
      }
    ],
    "family": [
      {
        "pos": "v.",
        "w": "ship",
        "zh": "運送、寄送"
      },
      {
        "pos": "n.",
        "w": "shipping",
        "zh": "運送；運費"
      }
    ],
    "collocations": [
      {
        "en": "track a shipment",
        "zh": "追蹤貨件"
      },
      {
        "en": "delay a shipment",
        "zh": "延遲出貨"
      },
      {
        "en": "ready for shipment",
        "zh": "準備出貨"
      }
    ],
    "synonyms": [
      "delivery",
      "consignment",
      "cargo"
    ],
    "pattern": {
      "rule": "字尾 -ment 念 [mənt]",
      "words": [
        "payment",
        "equipment",
        "agreement"
      ]
    },
    "root": "ship（運送）+ -ment（名詞字尾）",
    "tip": "ship 在多益常指「寄送」，不一定用船：The order will ship within 24 hours."
  },
  {
    "id": "customs",
    "word": "customs",
    "tier": 1,
    "topic": "旅遊餐飲",
    "kk": "[ˋkʌstəmz]",
    "chunks": [
      {
        "t": "cus",
        "k": "kʌs",
        "s": 1,
        "n": "重音閉音節的 u 念 [ʌ]"
      },
      {
        "t": "toms",
        "k": "təmz",
        "n": "非重音的 o 弱化成 [ə]；s 接在有聲子音 [m] 後念 [z]"
      }
    ],
    "senses": [
      {
        "pos": "n.",
        "zh": [
          "海關",
          "通關手續"
        ],
        "ex": "It took us an hour to get through customs at the airport.",
        "exZh": "我們在機場花了一個小時才通過海關。"
      },
      {
        "pos": "n.",
        "zh": [
          "（custom）習俗",
          "慣例"
        ],
        "ex": "It is a local custom to exchange business cards with both hands.",
        "exZh": "用雙手交換名片是當地的習俗。"
      },
      {
        "pos": "adj.",
        "zh": [
          "（custom）訂製的"
        ],
        "ex": "We offer custom furniture for hotels and offices.",
        "exZh": "我們為飯店和辦公室提供訂製家具。"
      }
    ],
    "family": [
      {
        "pos": "adj.",
        "w": "customary",
        "zh": "慣例的、習慣上的"
      },
      {
        "pos": "v.",
        "w": "customize",
        "zh": "客製化"
      }
    ],
    "collocations": [
      {
        "en": "go through customs",
        "zh": "通關"
      },
      {
        "en": "customs declaration form",
        "zh": "海關申報單"
      },
      {
        "en": "customs duties",
        "zh": "關稅"
      },
      {
        "en": "be held at customs",
        "zh": "被海關扣留"
      }
    ],
    "synonyms": [
      "border control",
      "tradition",
      "convention"
    ],
    "pattern": {
      "rule": "重音閉音節的 u 念 [ʌ]",
      "words": [
        "budget",
        "public",
        "number"
      ]
    },
    "root": "源自拉丁文 consuetudo（習慣）；customs 原指「依慣例收取的稅」→ 關稅、海關",
    "tip": "「海關」一定要加 s（customs）；單數 custom 是「習俗」，當形容詞是「訂製的」"
  },
  {
    "id": "destination",
    "word": "destination",
    "tier": 1,
    "topic": "旅遊餐飲",
    "kk": "[ˌdɛstəˋneʃən]",
    "chunks": [
      {
        "t": "des",
        "k": "dɛs",
        "s": 2
      },
      {
        "t": "ti",
        "k": "tə",
        "n": "非重音的 i 弱化成 [ə]"
      },
      {
        "t": "na",
        "k": "ne",
        "s": 1,
        "n": "重音節的 a 念 [e]"
      },
      {
        "t": "tion",
        "k": "ʃən",
        "n": "-tion 念 [ʃən]"
      }
    ],
    "senses": [
      {
        "pos": "n.",
        "zh": [
          "目的地"
        ],
        "ex": "Please check that your luggage is tagged with your final destination.",
        "exZh": "請確認你的行李標籤寫的是最終目的地。"
      },
      {
        "pos": "n.",
        "zh": [
          "（旅遊）勝地",
          "熱門去處"
        ],
        "ex": "Kyoto is a popular destination for foreign tourists.",
        "exZh": "京都是外國觀光客的熱門旅遊地。"
      }
    ],
    "family": [
      {
        "pos": "adj.",
        "w": "destined",
        "zh": "前往…的；注定的"
      }
    ],
    "collocations": [
      {
        "en": "final destination",
        "zh": "最終目的地"
      },
      {
        "en": "popular tourist destination",
        "zh": "熱門觀光地"
      },
      {
        "en": "reach one's destination",
        "zh": "抵達目的地"
      }
    ],
    "synonyms": [
      "final stop",
      "tourist spot",
      "location"
    ],
    "pattern": {
      "rule": "-ation 念 [ˋeʃən]，重音落在 a",
      "words": [
        "location",
        "vacation",
        "information"
      ]
    },
    "root": "拉丁文 destinare（決定、指定）→ 指定要去的地方",
    "tip": "be destined for + 地點＝開往…；Part 4 機場廣播常出現 passengers traveling to the following destinations"
  },
  {
    "id": "departure",
    "word": "departure",
    "tier": 1,
    "topic": "旅遊餐飲",
    "kk": "[dɪˋpɑrtʃɚ]",
    "chunks": [
      {
        "t": "de",
        "k": "dɪ",
        "n": "非重音的 de 念 [dɪ]"
      },
      {
        "t": "par",
        "k": "pɑr",
        "s": 1,
        "n": "ar 念 [ɑr]"
      },
      {
        "t": "ture",
        "k": "tʃɚ",
        "n": "字尾 -ture 念 [tʃɚ]"
      }
    ],
    "senses": [
      {
        "pos": "n.",
        "zh": [
          "出發",
          "離境",
          "起飛"
        ],
        "ex": "Please arrive at the gate 30 minutes before departure.",
        "exZh": "請在起飛前三十分鐘抵達登機門。"
      },
      {
        "pos": "n.",
        "zh": [
          "離職",
          "離開"
        ],
        "ex": "Mr. Lee's departure from the company was announced on Monday.",
        "exZh": "公司週一宣布了李先生離職的消息。"
      },
      {
        "pos": "n.",
        "zh": [
          "偏離",
          "背離（常規）"
        ],
        "ex": "The new design is a major departure from our previous models.",
        "exZh": "新設計和我們之前的款式大不相同。"
      }
    ],
    "family": [
      {
        "pos": "v.",
        "w": "depart",
        "zh": "出發、離開"
      }
    ],
    "collocations": [
      {
        "en": "departure time",
        "zh": "出發時間"
      },
      {
        "en": "departure gate",
        "zh": "登機門"
      },
      {
        "en": "departure lounge",
        "zh": "候機室"
      },
      {
        "en": "a departure from",
        "zh": "偏離…、和…不同"
      }
    ],
    "synonyms": [
      "leaving",
      "exit",
      "resignation"
    ],
    "pattern": {
      "rule": "ar 念 [ɑr]",
      "words": [
        "market",
        "park",
        "start"
      ]
    },
    "root": "de（離開）+ part（分開）→ 分開離去 → 出發",
    "tip": "departure（出發）↔ arrival（抵達）；Part 7 的 departure 也可能指人事「離職」"
  },
  {
    "id": "passenger",
    "word": "passenger",
    "tier": 1,
    "topic": "旅遊餐飲",
    "kk": "[ˋpæsṇdʒɚ]",
    "chunks": [
      {
        "t": "pa",
        "k": "pæ",
        "s": 1,
        "n": "重音閉音節的 a 念 [æ]"
      },
      {
        "t": "ss",
        "k": "s",
        "n": "雙 s 只念一個 [s]"
      },
      {
        "t": "en",
        "k": "ṇ",
        "n": "非重音的 en 弱化成 [ṇ]（像很短的 [ən]）"
      },
      {
        "t": "ger",
        "k": "dʒɚ",
        "n": "g 後面接 e 念 [dʒ]"
      }
    ],
    "senses": [
      {
        "pos": "n.",
        "zh": [
          "乘客",
          "旅客"
        ],
        "ex": "Passengers are reminded to keep their belongings with them at all times.",
        "exZh": "提醒各位乘客隨時看好隨身物品。"
      }
    ],
    "family": [],
    "collocations": [
      {
        "en": "Attention, all passengers.",
        "zh": "各位旅客請注意。"
      },
      {
        "en": "passenger seat",
        "zh": "副駕駛座；乘客座位"
      },
      {
        "en": "boarding passengers",
        "zh": "登機中的旅客"
      }
    ],
    "synonyms": [
      "traveler",
      "rider",
      "commuter"
    ],
    "pattern": {
      "rule": "g 後面接 e / i / y 常念 [dʒ]",
      "words": [
        "manager",
        "engineer",
        "energy"
      ]
    },
    "root": "古法語 passager（路過的人），來自 passage；中間的 n 是後來才加進去的（messenger 也一樣）",
    "tip": "Part 4 機場、車站廣播必考開頭：Attention, all passengers…"
  },
  {
    "id": "attraction",
    "word": "attraction",
    "tier": 1,
    "topic": "旅遊餐飲",
    "kk": "[əˋtrækʃən]",
    "chunks": [
      {
        "t": "a",
        "k": "ə",
        "n": "開頭非重音的 a 弱化成 [ə]"
      },
      {
        "t": "ttrac",
        "k": "træk",
        "s": 1,
        "n": "雙 t 只念一個 [t]；c 在這裡念 [k]"
      },
      {
        "t": "tion",
        "k": "ʃən",
        "n": "-tion 念 [ʃən]"
      }
    ],
    "senses": [
      {
        "pos": "n.",
        "zh": [
          "觀光景點",
          "吸引人的事物"
        ],
        "ex": "The museum is one of the city's main tourist attractions.",
        "exZh": "這間博物館是該市主要的觀光景點之一。"
      },
      {
        "pos": "n.",
        "zh": [
          "吸引力"
        ],
        "ex": "Flexible working hours are a major attraction of the job.",
        "exZh": "彈性工時是這份工作的一大吸引力。"
      }
    ],
    "family": [
      {
        "pos": "v.",
        "w": "attract",
        "zh": "吸引"
      },
      {
        "pos": "adj.",
        "w": "attractive",
        "zh": "有吸引力的"
      }
    ],
    "collocations": [
      {
        "en": "tourist attraction",
        "zh": "觀光景點"
      },
      {
        "en": "main attraction",
        "zh": "主要賣點、最大看點"
      },
      {
        "en": "local attractions",
        "zh": "當地景點"
      }
    ],
    "synonyms": [
      "sight",
      "landmark",
      "appeal"
    ],
    "pattern": {
      "rule": "-ction 念 [kʃən]",
      "words": [
        "action",
        "collection",
        "production"
      ]
    },
    "root": "at（朝向）+ tract（拉）→ 把人拉過來 → 吸引",
    "tip": "Part 5 常考詞性：attract（動詞）/ attractive（形容詞）/ attraction（名詞）"
  },
  {
    "id": "quotation",
    "word": "quotation",
    "tier": 1,
    "topic": "商務談判",
    "kk": "[kwoˋteʃən]",
    "chunks": [
      {
        "t": "quo",
        "k": "kwo",
        "n": "qu 念 [kw]，o 念 [o]"
      },
      {
        "t": "ta",
        "k": "te",
        "s": 1,
        "n": "重音節的 a 念 [e]"
      },
      {
        "t": "tion",
        "k": "ʃən",
        "n": "-tion 念 [ʃən]"
      }
    ],
    "senses": [
      {
        "pos": "n.",
        "zh": [
          "報價",
          "報價單"
        ],
        "ex": "Could you send us a quotation for 500 units?",
        "exZh": "可以給我們五百件的報價單嗎？"
      },
      {
        "pos": "n.",
        "zh": [
          "引文",
          "引用的話"
        ],
        "ex": "The report opens with a quotation from the company's founder.",
        "exZh": "這份報告以公司創辦人的一句話開頭。"
      }
    ],
    "family": [
      {
        "pos": "v.",
        "w": "quote",
        "zh": "報價；引用"
      },
      {
        "pos": "n.",
        "w": "quote",
        "zh": "報價（口語）；引言"
      }
    ],
    "collocations": [
      {
        "en": "request a quotation",
        "zh": "索取報價"
      },
      {
        "en": "price quotation",
        "zh": "報價單"
      },
      {
        "en": "get a quote",
        "zh": "取得報價"
      }
    ],
    "synonyms": [
      "quote",
      "estimate",
      "bid"
    ],
    "pattern": {
      "rule": "qu 念 [kw]",
      "words": [
        "quality",
        "require",
        "quick"
      ]
    },
    "root": "中古拉丁文 quotare（標上編號），來自 quot（多少）",
    "tip": "口語和 Part 7 書信常縮成 quote：We'd like a quote for the renovation."
  },
  {
    "id": "contract",
    "word": "contract",
    "tier": 1,
    "topic": "合約法務",
    "kk": "[ˋkɑntrækt]",
    "stressNote": "名詞念 [ˋkɑntrækt]，重音在前；動詞（收縮、感染）念 [kənˋtrækt]，重音在後（名前動後）",
    "chunks": [
      {
        "t": "con",
        "k": "kɑn",
        "s": 1,
        "n": "名詞重音在 con，o 念 [ɑ]；動詞弱化成 [kən]"
      },
      {
        "t": "tract",
        "k": "trækt"
      }
    ],
    "senses": [
      {
        "pos": "n.",
        "zh": [
          "合約",
          "契約"
        ],
        "ex": "Both parties signed the contract yesterday.",
        "exZh": "雙方昨天簽了合約。"
      },
      {
        "pos": "v.",
        "zh": [
          "（以合約）委託、承包"
        ],
        "ex": "The city contracted a local firm to repair the bridge.",
        "exZh": "市政府委託一家當地公司修橋。"
      },
      {
        "pos": "v.",
        "zh": [
          "收縮",
          "縮小"
        ],
        "ex": "The market contracted sharply during the recession.",
        "exZh": "經濟衰退期間市場大幅萎縮。"
      }
    ],
    "family": [
      {
        "pos": "n.",
        "w": "contractor",
        "zh": "承包商、包商"
      },
      {
        "pos": "adj.",
        "w": "contractual",
        "zh": "合約上的"
      }
    ],
    "collocations": [
      {
        "en": "sign a contract",
        "zh": "簽合約"
      },
      {
        "en": "renew a contract",
        "zh": "續約"
      },
      {
        "en": "terms of the contract",
        "zh": "合約條款"
      },
      {
        "en": "breach of contract",
        "zh": "違約"
      }
    ],
    "synonyms": [
      "agreement",
      "deal",
      "outsource"
    ],
    "pattern": {
      "rule": "名前動後：當名詞重音在前，當動詞重音在後",
      "words": [
        "object",
        "conduct",
        "project"
      ]
    },
    "root": "con（一起）+ tract（拉）→ 把雙方拉在一起 → 合約；把東西拉緊 → 收縮",
    "tip": "Part 5 常考 contractor（承包商，人）；under contract＝依合約、簽約中"
  },
  {
    "id": "renew",
    "word": "renew",
    "tier": 1,
    "topic": "合約法務",
    "kk": "[rɪˋnu]",
    "chunks": [
      {
        "t": "re",
        "k": "rɪ",
        "n": "非重音的 re 念 [rɪ]"
      },
      {
        "t": "new",
        "k": "nu",
        "s": 1,
        "n": "美式 n 後面的 ew 念 [u]；英式念 [ju]"
      }
    ],
    "senses": [
      {
        "pos": "v.",
        "zh": [
          "續約",
          "更新（證件、會員）",
          "展延"
        ],
        "ex": "Please renew your membership before it expires.",
        "exZh": "請在會員資格到期前續約。"
      },
      {
        "pos": "v.",
        "zh": [
          "重新開始",
          "再次投入"
        ],
        "ex": "The success of the product renewed interest in the brand.",
        "exZh": "這項產品的成功讓大家重新關注這個品牌。"
      }
    ],
    "family": [
      {
        "pos": "n.",
        "w": "renewal",
        "zh": "續約；更新"
      },
      {
        "pos": "adj.",
        "w": "renewable",
        "zh": "可續約的；可再生的"
      }
    ],
    "collocations": [
      {
        "en": "renew a contract",
        "zh": "續約"
      },
      {
        "en": "renew a subscription",
        "zh": "續訂"
      },
      {
        "en": "renew one's passport",
        "zh": "換發護照"
      },
      {
        "en": "be up for renewal",
        "zh": "即將到期需續約"
      }
    ],
    "synonyms": [
      "extend",
      "update",
      "resume"
    ],
    "pattern": {
      "rule": "美式 n / t / d 後面的 ew 念 [u]",
      "words": [
        "news",
        "stew",
        "dew"
      ]
    },
    "root": "re（再）+ new（新）→ 再變新一次",
    "tip": "Part 5 常考名詞 renewal：membership renewal、contract renewal；renewable energy 是「再生能源」"
  },
  {
    "id": "regulation",
    "word": "regulation",
    "tier": 1,
    "topic": "合約法務",
    "kk": "[ˌrɛgjəˋleʃən]",
    "chunks": [
      {
        "t": "re",
        "k": "rɛ",
        "s": 2
      },
      {
        "t": "gu",
        "k": "gjə",
        "n": "u 在這裡念 [jə]，前面多一個 [j] 的音"
      },
      {
        "t": "la",
        "k": "le",
        "s": 1,
        "n": "重音節的 a 念 [e]"
      },
      {
        "t": "tion",
        "k": "ʃən",
        "n": "-tion 念 [ʃən]"
      }
    ],
    "senses": [
      {
        "pos": "n.",
        "zh": [
          "規定",
          "法規",
          "條例"
        ],
        "ex": "All employees must follow the safety regulations.",
        "exZh": "所有員工都必須遵守安全規定。"
      },
      {
        "pos": "n.",
        "zh": [
          "管理",
          "管制"
        ],
        "ex": "The government is calling for stricter regulation of the banking industry.",
        "exZh": "政府呼籲對銀行業實施更嚴格的管制。"
      }
    ],
    "family": [
      {
        "pos": "v.",
        "w": "regulate",
        "zh": "管理、管制；調節"
      },
      {
        "pos": "adj.",
        "w": "regulatory",
        "zh": "監管的"
      },
      {
        "pos": "n.",
        "w": "regulator",
        "zh": "監管機構"
      }
    ],
    "collocations": [
      {
        "en": "safety regulations",
        "zh": "安全規定"
      },
      {
        "en": "comply with regulations",
        "zh": "遵守法規"
      },
      {
        "en": "under the new regulations",
        "zh": "根據新規定"
      }
    ],
    "synonyms": [
      "rule",
      "policy",
      "guideline"
    ],
    "pattern": {
      "rule": "-ation 念 [ˋeʃən]，重音落在 a",
      "words": [
        "location",
        "vacation",
        "information"
      ]
    },
    "root": "拉丁文 regula（尺規、規則），來自 regere（統治、引導）",
    "tip": "Part 5 常考搭配 comply with / adhere to regulations；regulatory agency＝監管機關"
  },
  {
    "id": "penalty",
    "word": "penalty",
    "tier": 1,
    "topic": "合約法務",
    "kk": "[ˋpɛnḷtɪ]",
    "chunks": [
      {
        "t": "pe",
        "k": "pɛ",
        "s": 1,
        "n": "重音節的 e 念 [ɛ]"
      },
      {
        "t": "nal",
        "k": "nḷ",
        "n": "非重音的 al 念 [ḷ]（像很短的 [əl]）"
      },
      {
        "t": "ty",
        "k": "tɪ",
        "n": "字尾非重音的 y 念 [ɪ]"
      }
    ],
    "senses": [
      {
        "pos": "n.",
        "zh": [
          "罰款",
          "罰金",
          "違約金"
        ],
        "ex": "A penalty of $50 will be charged for late payment.",
        "exZh": "逾期付款將收取五十美元的罰金。"
      },
      {
        "pos": "n.",
        "zh": [
          "處罰",
          "刑罰"
        ],
        "ex": "There are heavy penalties for violating the regulations.",
        "exZh": "違反規定會受到嚴厲處罰。"
      }
    ],
    "family": [
      {
        "pos": "v.",
        "w": "penalize",
        "zh": "處罰"
      },
      {
        "pos": "adj.",
        "w": "penal",
        "zh": "刑罰的"
      }
    ],
    "collocations": [
      {
        "en": "late payment penalty",
        "zh": "逾期付款罰金"
      },
      {
        "en": "early termination penalty",
        "zh": "提前解約違約金"
      },
      {
        "en": "impose a penalty",
        "zh": "處以罰款"
      }
    ],
    "synonyms": [
      "fine",
      "charge",
      "punishment"
    ],
    "pattern": {
      "rule": "字尾非重音的 -al 念 [ḷ]",
      "words": [
        "total",
        "rental",
        "final"
      ]
    },
    "root": "拉丁文 poena（懲罰），pain（痛苦）也是同源字",
    "tip": "Part 7 常把 penalty 改寫成 fine 或 fee；合約常見 penalty for early cancellation"
  },
  {
    "id": "valid",
    "word": "valid",
    "tier": 1,
    "topic": "合約法務",
    "kk": "[ˋvælɪd]",
    "chunks": [
      {
        "t": "va",
        "k": "væ",
        "s": 1,
        "n": "重音閉音節的 a 念 [æ]"
      },
      {
        "t": "lid",
        "k": "lɪd",
        "n": "非重音的 i 念 [ɪ]"
      }
    ],
    "senses": [
      {
        "pos": "adj.",
        "zh": [
          "有效的（證件、票券）"
        ],
        "ex": "This coupon is valid until the end of June.",
        "exZh": "這張折價券到六月底前有效。"
      },
      {
        "pos": "adj.",
        "zh": [
          "合理的",
          "站得住腳的"
        ],
        "ex": "She raised a valid point about the budget.",
        "exZh": "她針對預算提出了一個合理的論點。"
      }
    ],
    "family": [
      {
        "pos": "v.",
        "w": "validate",
        "zh": "使生效；確認"
      },
      {
        "pos": "n.",
        "w": "validity",
        "zh": "有效性"
      },
      {
        "pos": "adj.",
        "w": "invalid",
        "zh": "無效的"
      }
    ],
    "collocations": [
      {
        "en": "valid passport",
        "zh": "有效護照"
      },
      {
        "en": "valid until / through",
        "zh": "有效期限到…"
      },
      {
        "en": "valid for 30 days",
        "zh": "三十天內有效"
      },
      {
        "en": "a valid point",
        "zh": "合理的論點"
      }
    ],
    "synonyms": [
      "effective",
      "in effect",
      "legitimate"
    ],
    "pattern": {
      "rule": "重音閉音節的 a 念 [æ]",
      "words": [
        "travel",
        "plan",
        "family"
      ]
    },
    "root": "拉丁文 validus（強壯的、有力的）→ 有效力的",
    "tip": "Part 7 常考有效期限：valid until / expires on；invalid 是「無效的」"
  },
  {
    "id": "resolve",
    "word": "resolve",
    "tier": 1,
    "topic": "商務談判",
    "kk": "[rɪˋzɑlv]",
    "chunks": [
      {
        "t": "re",
        "k": "rɪ",
        "n": "非重音的 re 念 [rɪ]"
      },
      {
        "t": "sol",
        "k": "zɑl",
        "s": 1,
        "n": "s 在這裡念 [z]，不是 [s]；o 念 [ɑ]"
      },
      {
        "t": "v",
        "k": "v"
      },
      {
        "t": "e",
        "k": "",
        "silent": true,
        "n": "字尾 e 不發音（英文字不以 v 結尾）"
      }
    ],
    "senses": [
      {
        "pos": "v.",
        "zh": [
          "解決"
        ],
        "ex": "Our technician resolved the network problem within an hour.",
        "exZh": "我們的技術人員在一小時內解決了網路問題。"
      },
      {
        "pos": "v.",
        "zh": [
          "下決心",
          "決定"
        ],
        "ex": "The team resolved to finish the project ahead of schedule.",
        "exZh": "團隊下定決心要提前完成專案。"
      },
      {
        "pos": "n.",
        "zh": [
          "決心"
        ],
        "ex": "The CEO showed great resolve during the crisis.",
        "exZh": "執行長在危機中展現了堅定的決心。"
      }
    ],
    "family": [
      {
        "pos": "n.",
        "w": "resolution",
        "zh": "解決；決議；決心"
      },
      {
        "pos": "adj.",
        "w": "resolved",
        "zh": "已解決的；下定決心的"
      }
    ],
    "collocations": [
      {
        "en": "resolve an issue",
        "zh": "解決問題"
      },
      {
        "en": "resolve a dispute",
        "zh": "解決糾紛"
      },
      {
        "en": "resolve to V",
        "zh": "下決心做…"
      }
    ],
    "synonyms": [
      "settle",
      "solve",
      "sort out"
    ],
    "pattern": {
      "rule": "re- 後面接 s + 母音時，s 常念 [z]",
      "words": [
        "result",
        "resign",
        "reserve"
      ]
    },
    "root": "re（加強）+ solve（鬆開）→ 把結解開 → 解決",
    "tip": "客服情境常見 resolve a complaint；名詞 resolution 也指會議的「決議」"
  }
];
