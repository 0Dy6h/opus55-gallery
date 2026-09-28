// 螃蟹的 Opus 5.5 作品集 —— 数据文件
// 新增作品:复制一条记录改字段即可,页面自动重渲染。字段说明见 README.md
// cat 可选值:video(视频·动画) / game(游戏·互动) / art(视觉艺术) /
//            research(研究实验) / build(实战应用) / article(评测文章) / official(官方·讨论)
// pts/cmt = Hacker News 帖子热度;discuss = HN 讨论帖链接(没有就留 null)
// video(可选)= 本地视频相对路径(如 "media/xxx.mp4"),填了就在卡片内出现可点播的视频;文件放 media/ 目录

window.WORKS = [
  // ── 官方·讨论 ──────────────────────────────────────────────
  {
    id: "official-release",
    title: "Claude Opus 5.5 官方发布页",
    cat: "official", url: "https://www.anthropic.com/claude-opus-5-5",
    discuss: "https://news.ycombinator.com/item?id=49803892",
    date: "2026-09-22", source: "anthropic.com", pts: 1802, cmt: 1129,
    desc: "Anthropic 官方发布:多数工作达到 Fable 5.1 水平、运行成本比 Opus 5 低 40%,发布即成为付费档默认模型。",
    tags: ["发布", "benchmark", "定价"]
  },
  {
    id: "official-thread",
    title: "官方「早期探索」作品串",
    cat: "official", url: "https://twitter.com/claudeai/status/2102471866635919731",
    discuss: null,
    date: "2026-09-23", source: "twitter.com", pts: null, cmt: null,
    desc: "Anthropic 官方账号汇总的第一波 5.5 探索作品帖,评论区本身就是一部迷你作品集。",
    tags: ["官方", "合集", "推特"]
  },
  {
    id: "official-docs",
    title: "官方模型文档:Opus 5.5 Overview",
    cat: "official", url: "https://platform.claude.com/docs/en/models/opus-5-5/overview",
    discuss: null,
    date: "2026-09-22", source: "platform.claude.com", pts: null, cmt: null,
    desc: "平台文档:模型规格、thinking 模式说明(不可关闭)、用法与限额。",
    tags: ["文档", "API"]
  },
  {
    id: "official-blog",
    title: "Getting the most out of Opus 5.5(官方上手指南)",
    cat: "official", url: "https://claude.dev/blog/getting-the-most-out-of-opus-5-5/",
    discuss: "https://news.ycombinator.com/item?id=49807462",
    date: "2026-09-22", source: "claude.dev", pts: 3, cmt: 0,
    desc: "官方博客教你在 Claude 与 Claude Code 里把 5.5 用到位:提示词与工作流建议。",
    tags: ["指南", "Claude Code"]
  },
  {
    id: "askhn-stepchange",
    title: "Ask HN:Opus 5.5 是又一次台阶式跃升吗?",
    cat: "official", url: "https://news.ycombinator.com/item?id=49850798",
    discuss: "https://news.ycombinator.com/item?id=49850798",
    date: "2026-09-25", source: "news.ycombinator.com", pts: 14, cmt: 17,
    desc: "社区大讨论:用了一周之后,大家认为 5.5 到底是不是代际跃升。",
    tags: ["讨论", "社区"]
  },
  {
    id: "official-prompting",
    title: "官方提示词指南:Prompting Claude Opus 5.5",
    cat: "official", url: "https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/prompting-claude-opus-5-5",
    discuss: "https://news.ycombinator.com/item?id=49874728",
    date: "2026-09-28", source: "platform.claude.com", pts: 91, cmt: 83,
    desc: "官方提示词工程指南:thinking 常开时怎么写提示、effort 档位怎么选,发布当天冲上 HN 前排。",
    tags: ["提示词", "官方", "指南"]
  },

  // ── 视频·动画 ──────────────────────────────────────────────
  {
    id: "explainer-videos",
    title: "Opus 5.5 is good at explainer videos",
    cat: "video", url: "https://launchvideo.io",
    discuss: "https://news.ycombinator.com/item?id=49836374",
    date: "2026-09-24", source: "launchvideo.io", pts: 423, cmt: 221,
    desc: "5.5 一条龙生成讲解视频:脚本、画面、配音全包。发布一周内 HN 最火的 5.5 作品帖。",
    tags: ["视频", "讲解视频", "爆款"]
  },
  {
    id: "clippy-revenge",
    title: "《Clippy 的复仇》短片",
    cat: "video", url: "https://www.youtube.com/watch?v=qUaBObmpYTI",
    discuss: "https://news.ycombinator.com/item?id=49839100",
    video: "media/clippy-revenge.mp4",
    date: "2026-09-25", source: "youtube.com", pts: 1, cmt: 1,
    desc: "Show HN:完全由 Opus 5.5 制作的短片,大眼夹复仇记。",
    tags: ["视频", "短片", "YouTube"]
  },
  {
    id: "pokemon-trailer",
    title: "2 小时做出宝可梦同人预告片",
    cat: "video", url: "https://gist.github.com/f-trycua/611526d75a4fd2fd5f80e630e2116239",
    discuss: "https://news.ycombinator.com/item?id=49859211",
    date: "2026-09-26", source: "gist.github.com", pts: 2, cmt: 2,
    desc: "全流程记录:用 5.5 在两小时内产出宝可梦同人预告片。",
    tags: ["视频", "预告片", "教程向"]
  },
  {
    id: "side-hustle-ad",
    title: "给副业做的一条怪趣广告片",
    cat: "video", url: "https://www.reddit.com/r/ClaudeAI/comments/1wptwrk/",
    discuss: "https://news.ycombinator.com/item?id=49843290",
    date: "2026-09-25", source: "reddit.com", pts: 2, cmt: 0,
    desc: "r/ClaudeAI 网友用 5.5 给自己的 side hustle 制作的 whimsical 风格视频广告。",
    tags: ["视频", "广告", "副业"]
  },
  {
    id: "ozymandias",
    title: "《奥兹曼迪亚斯》电影级浏览器动画",
    cat: "video", url: "https://www.echohive.ai/ozymandias",
    discuss: "https://news.ycombinator.com/item?id=49812002",
    date: "2026-09-23", source: "echohive.ai", pts: 1, cmt: 0,
    desc: "把雪莱名诗《Ozymandias》变成可直接在浏览器播放的电影化动画。",
    tags: ["动画", "诗歌", "浏览器"]
  },
  {
    id: "parallax-battle",
    title: "2.5D 视差互动战斗场景《The Golden Ford》",
    cat: "video", url: "https://www.echohive.ai/experiments/the-golden-ford",
    discuss: "https://news.ycombinator.com/item?id=49835099",
    date: "2026-09-24", source: "echohive.ai", pts: 2, cmt: 0,
    desc: "5.5 生成的 2.5D 视差滚动互动战斗场景实验。",
    tags: ["动画", "2.5D", "互动"]
  },
  {
    id: "sand-history",
    title: "沙动画:两分钟讲完美国 250 年",
    cat: "video", url: "https://twitter.com/Michaelzsguo/status/2102592355165782312",
    discuss: null,
    date: "2026-09-23", source: "twitter.com", pts: null, cmt: null,
    desc: "Michael Guo 用 5.5 制作的 2 分钟沙画动画,从 1776 年一口气推到 2026 年的烟火,配乐音效齐全。",
    tags: ["沙画", "动画", "历史"]
  },
  {
    id: "mosaic-film",
    title: "单 HTML 文件的 WebGL2 马赛克动画短片",
    cat: "video", url: "https://twitter.com/LCSlates/status/2102503027340988559",
    discuss: null,
    date: "2026-09-23", source: "twitter.com", pts: null, cmt: null,
    desc: "80 秒短片纯靠一页 HTML + WebGL2 实现:玻璃与金箔马赛克聚成鱼、鹤与鸽,含昼夜与星座转场,零外部资源。",
    tags: ["WebGL", "短片", "生成艺术"]
  },

  // ── 游戏·互动 ──────────────────────────────────────────────
  {
    id: "pelican-game",
    title: "Pelican 小游戏(社区传统测试项目)",
    cat: "game", url: "https://claude-opus-5-5.riba2534.cn/",
    discuss: "https://news.ycombinator.com/item?id=49812241",
    date: "2026-09-23", source: "riba2534.cn", pts: 7, cmt: 4,
    desc: "发布次日出品、可以直接玩的鹈鹕小游戏——鹈鹕是 Claude 社区的吉祥物梗。",
    tags: ["游戏", "鹈鹕", "可玩"]
  },
  {
    id: "tokken",
    title: "Tokken:AI 大模型乱斗格斗游戏",
    cat: "game", url: "https://tokken.win/",
    discuss: "https://news.ycombinator.com/item?id=49858875",
    date: "2026-09-26", source: "tokken.win", pts: 5, cmt: 2,
    desc: "浏览器格斗游戏:让各家 AI 模型互相打架、掉血、对战,看谁笑到最后。",
    tags: ["游戏", "格斗", "浏览器"]
  },
  {
    id: "starskirmish",
    title: "星际争霸 BW:LLM 写代码对战竞技场",
    cat: "game", url: "https://starskirmish.com/bench/",
    discuss: "https://news.ycombinator.com/item?id=49858284",
    date: "2026-09-26", source: "starskirmish.com", pts: 4, cmt: 1,
    desc: "LLM 通过写代码操控《星际争霸:母巢之战》互掐的竞技场。",
    tags: ["游戏", "RTS", "竞技场"]
  },
  {
    id: "lumen-vale",
    title: "Lumen Vale:97 分钟做成的浏览器 Minecraft",
    cat: "game", url: "https://twitter.com/noahwachnik/status/2102470200415166699",
    discuss: null,
    date: "2026-09-23", source: "twitter.com", pts: null, cmt: null,
    desc: "Noah Wachnik 用 5.5 在 1 小时 37 分里做出的可玩 Minecraft 克隆:涟漪水面、昼夜光照、地形生成全都齐活。",
    tags: ["游戏", "Minecraft", "可玩"]
  },

  // ── 视觉艺术 ───────────────────────────────────────────────
  {
    id: "bosphore-1819",
    title: "Bosphore 1819:复活 200 年前的伊斯坦布尔地图",
    cat: "art", url: "https://twitter.com/cahidarda/status/2103218970115678497",
    discuss: "https://news.ycombinator.com/item?id=49836367",
    date: "2026-09-24", source: "twitter.com", pts: 1, cmt: 1,
    desc: "用 5.5 修复并动态化 1819 年的博斯普鲁斯海峡古地图。",
    tags: ["地图", "修复", "历史"]
  },
  {
    id: "tsp-art",
    title: "旅行商问题画肖像(TSP Art)",
    cat: "art", url: "https://www.echohive.ai/tsp-art",
    discuss: "https://news.ycombinator.com/item?id=49824578",
    date: "2026-09-24", source: "echohive.ai", pts: 1, cmt: 0,
    desc: "让 5.5 用一条不间断的 TSP 路线画出人像。",
    tags: ["生成艺术", "TSP", "算法"]
  },
  {
    id: "living-paintings",
    title: "「可以走进去的十五幅名画」",
    cat: "art", url: "https://www.echohive.ai/how-we-made-living-paintings",
    discuss: null,
    date: "2026-09-27", source: "echohive.ai", pts: null, cmt: null,
    desc: "把十五幅历史名画做成可步入的动态画:随节拍喷发的火山、十万盏灯笼点亮的小镇,5.5 出品。",
    tags: ["名画", "动态化", "生成艺术"]
  },
  {
    id: "slaughterhouse-4d",
    title: "《五号屠场》4D 时空点云可视化",
    cat: "art", url: "https://twitter.com/bilawalsidhu/status/2102598907817587141",
    discuss: null,
    date: "2026-09-23", source: "twitter.com", pts: null, cmt: null,
    desc: "前 Google PM Bilawal Sidhu 用 5.5 把 2D 视频转成钉在时空里的 3D 高斯点云,致敬冯内古特笔下的时间观。",
    tags: ["可视化", "4D", "点云"]
  },
  {
    id: "pixel-wizard",
    title: "像素魔法师:单文件 60fps 精灵动画",
    cat: "art", url: "https://twitter.com/majidmanzarpour/status/2102476258948927543",
    discuss: null,
    date: "2026-09-23", source: "twitter.com", pts: null, cmt: null,
    desc: "Majid 用 5.5 产出的自包含 HTML 像素魔法师:128×96、固定 24 色调色板、状态机驱动,60fps 主循环零内存分配。",
    tags: ["像素画", "动画", "工程洁癖"]
  },

  // ── 研究实验 ───────────────────────────────────────────────
  {
    id: "kimi-pokemon",
    title: "Kimi K3 vs Opus 5.5:谁做的宝可梦『蠕虫』更强",
    cat: "research", url: "https://www.runsybil.com/blog/kimi-k3-vs-claude-opus-5-5-how-two-flagship-llms-built-pokemon-emerald-worms",
    discuss: "https://news.ycombinator.com/item?id=49868056",
    date: "2026-09-27", source: "runsybil.com", pts: 3, cmt: 0,
    desc: "两家旗舰模型各自在《宝可梦:绿宝石》里造蠕虫的硬核对比。",
    tags: ["对比评测", "游戏AI"]
  },
  {
    id: "satoshi",
    title: "让 Opus 5.5 查中本聪的新线索",
    cat: "research", url: "https://notesbylex.com/can-claude-opus-5-5-find-any-new-leads-on-satoshi-nakamoto",
    discuss: "https://news.ycombinator.com/item?id=49860574",
    date: "2026-09-26", source: "notesbylex.com", pts: 3, cmt: 0,
    desc: "把多年中本聪悬案材料喂给 5.5,看能否挖出新线索。",
    tags: ["考古", "长上下文"]
  },
  {
    id: "cad-harness",
    title: "Sol 6 vs Opus 5.5:agentic CAD 实测",
    cat: "research", url: "https://www.partforge.ai/blog/2026-09-23-new-model-day",
    discuss: "https://news.ycombinator.com/item?id=49824471",
    date: "2026-09-24", source: "partforge.ai", pts: 6, cmt: 1,
    desc: "新模型日:在 agentic CAD 工作流上对比 GPT-6 Sol 6 与 5.5。",
    tags: ["CAD", "agentic", "对比评测"]
  },
  {
    id: "partcatalog",
    title: "Part Catalog Bench 拿下 75.6%",
    cat: "research", url: "https://partcatalogbench.adamjohnson.site",
    discuss: "https://news.ycombinator.com/item?id=49823138",
    date: "2026-09-23", source: "adamjohnson.site", pts: 1, cmt: 0,
    desc: "5.5 在零件目录基准上得分 75.6%,页面附完整跑分细节。",
    tags: ["benchmark", "工程"]
  },
  {
    id: "livenerf",
    title: "Livenerf:实时监测 5.5 有没有被『削弱』",
    cat: "research", url: "https://github.com/ninjahawk/livenerf",
    discuss: "https://news.ycombinator.com/item?id=49809555",
    date: "2026-09-22", source: "github.com", pts: 4, cmt: 2,
    desc: "发布当天就有人做了开源基准,每天探测模型是否被静默降智。",
    tags: ["benchmark", "开源", "监控"]
  },
  {
    id: "chess-olympiad",
    title: "用 5.5 + Stockfish 复盘国象奥赛",
    cat: "research", url: "https://olympiad2026.unremarkable.info/",
    discuss: "https://news.ycombinator.com/item?id=49812616",
    date: "2026-09-23", source: "unremarkable.info", pts: 1, cmt: 0,
    desc: "对 2026 国际象棋奥林匹克团体赛对局做模型辅助分析。",
    tags: ["国际象棋", "分析"]
  },
  {
    id: "biology-refusal",
    title: "5.5 拒答基础分子生物学问题",
    cat: "research", url: "https://bede.im/2026/09/24/open-models-biology.html",
    discuss: "https://news.ycombinator.com/item?id=49835889",
    date: "2026-09-24", source: "bede.im", pts: 2, cmt: 2,
    desc: "记录 5.5 更严格的护栏:生物类问题大面积拒答,与官方说法互证。",
    tags: ["安全", "护栏"]
  },
  {
    id: "ppsspp-vfpu",
    title: "PPSSPP 作者用 5.5 逆向 PSP 的 VFPU 数学指令",
    cat: "research", url: "https://www.ppsspp.org/blog/vfpu-math-re/",
    discuss: "https://news.ycombinator.com/item?id=49836164",
    date: "2026-09-24", source: "ppsspp.org", pts: 3, cmt: 1,
    desc: "PPSSPP 之父 Henrik Rydgård:5.5 一小时位精确逆向 PSP 的 rcp/sqrt/sin 等指令,4.9 MB 校正表换成 10 KB 系数。",
    tags: ["逆向", "模拟器", "工程"]
  },

  // ── 实战应用 ───────────────────────────────────────────────
  {
    id: "flstudio-rust",
    title: "1 小时用 Rust 复刻 FL Studio",
    cat: "build", url: "https://twitter.com/skewbed/status/2104272573613867373",
    discuss: "https://news.ycombinator.com/item?id=49869251",
    date: "2026-09-27", source: "twitter.com", pts: 2, cmt: 1,
    desc: "单次会话让 5.5 用 Rust 写出一个能跑的 FL Studio 复刻。",
    tags: ["复刻", "Rust", "音频"]
  },
  {
    id: "parkournote",
    title: "ParkourNote:一人一月的研究工作台",
    cat: "build", url: "https://note.parkourlabs.io/",
    discuss: "https://news.ycombinator.com/item?id=49872233",
    date: "2026-09-28", source: "parkourlabs.io", pts: 2, cmt: 0,
    desc: "Show HN:独自一人靠 5.5 一个月做出的研究笔记工作台。",
    tags: ["产品", "独立开发"]
  },
  {
    id: "saas-24h",
    title: "24 小时从零到 SaaS",
    cat: "build", url: "https://lorentz.app/blog-item.html?id=slivingdoc-hosted-in-a-day",
    discuss: "https://news.ycombinator.com/item?id=49868199",
    date: "2026-09-27", source: "lorentz.app", pts: 2, cmt: 0,
    desc: "用 Claude Projects + 5.5 在一天内上线一个托管 SaaS 的全过程。",
    tags: ["SaaS", "24小时"]
  },
  {
    id: "haproxy-rust",
    title: "HAProxy C→Rust 迁移(Anthropic 内部演示)",
    cat: "build", url: "https://www.anthropic.com/claude-opus-5-5",
    discuss: "https://news.ycombinator.com/item?id=49803892",
    date: "2026-09-22", source: "anthropic.com", pts: null, cmt: null,
    desc: "官方案例:9.5 小时完成 HAProxy 的 C 到 Rust 翻译,成本比 Fable 5.1 低 51%。",
    tags: ["官方案例", "迁移", "Rust"]
  },
  {
    id: "trebuchet-sketch",
    title: "铅笔草图一键变 3D 投石机物理模拟",
    cat: "build", url: "https://twitter.com/poolio/status/2102445641205248145",
    discuss: null,
    date: "2026-09-23", source: "twitter.com", pts: null, cmt: null,
    desc: "前 Google Brain/DeepMind 工程师 Ben Poole:一张手绘草图让 5.5 直接生成带真实弹道、可调配重与角度的 3D 投石机。",
    tags: ["物理", "草图", "模拟器"]
  },

  // ── 评测文章 ───────────────────────────────────────────────
  {
    id: "artificialanalysis",
    title: "Artificial Analysis:5.5 智能与价格分析",
    cat: "article", url: "https://artificialanalysis.ai/models/claude-opus-5-5",
    discuss: "https://news.ycombinator.com/item?id=49804316",
    date: "2026-09-22", source: "artificialanalysis.ai", pts: 333, cmt: 106,
    desc: "第三方基准机构对 5.5(Max 档)的智能/速度/价格横评。",
    tags: ["评测", "跑分", "价格"]
  },
  {
    id: "simonwillison",
    title: "Simon Willison:Opus 5.5、GPT-6 Sol/Luna 与新价格战",
    cat: "article", url: "https://simonwillison.net/2026/Sep/22/opus-and-sol-and-luna/",
    discuss: "https://news.ycombinator.com/item?id=49812887",
    date: "2026-09-23", source: "simonwillison.net", pts: 3, cmt: 0,
    desc: "老牌观察者对三款新模型定价与能力的首日点评。",
    tags: ["点评", "价格战"]
  },
  {
    id: "zvi-ambitions",
    title: "Zvi:Opus 5.5 应当抬高你的野心",
    cat: "article", url: "https://thezvi.substack.com/p/claude-opus-55-should-raise-your",
    discuss: "https://news.ycombinator.com/item?id=49855670",
    date: "2026-09-26", source: "thezvi.substack.com", pts: 10, cmt: 5,
    desc: "长文评述:5.5 的发布意味着什么,该把预期抬到哪。",
    tags: ["长文", "评论"]
  },
  {
    id: "favtutor-collection",
    title: "Opus 5.5: Things People Created(作品合集)",
    cat: "article", url: "https://favtutor.com/claude-opus-5-5-real-examples/",
    discuss: "https://news.ycombinator.com/item?id=49823070",
    date: "2026-09-23", source: "favtutor.com", pts: 2, cmt: 0,
    desc: "媒体整理的 5.5 真实作品合集——和本站定位最像,可交叉浏览补漏。",
    tags: ["合集", "媒体"]
  },
  {
    id: "verge-cyber",
    title: "The Verge:5.5 带来更严的网络安全护栏",
    cat: "article", url: "https://www.theverge.com/ai-artificial-intelligence/998868/anthropic-claude-opus-5-5-cyber",
    discuss: "https://news.ycombinator.com/item?id=49804516",
    date: "2026-09-22", source: "theverge.com", pts: 2, cmt: 1,
    desc: "报道 5.5 把大部分网络攻防类任务改由 Opus 4.8 处理的新安全策略。",
    tags: ["安全", "报道"]
  },
  {
    id: "coderabbit-review",
    title: "CodeRabbit:5.5 做代码评审——抓得更多,漏得不同",
    cat: "article", url: "https://www.coderabbit.ai/blog/opus-5-5-model-review",
    discuss: "https://news.ycombinator.com/item?id=49804509",
    date: "2026-09-22", source: "coderabbit.ai", pts: 2, cmt: 0,
    desc: "代码评审视角的实测:发现更多问题,但盲区分布也变了。",
    tags: ["代码评审", "实测"]
  },
  {
    id: "emdash",
    title: "5.5 破折号用量骤降 95%,但回答变长了",
    cat: "article", url: "https://www.bleepingcomputer.com/news/artificial-intelligence/",
    discuss: "https://news.ycombinator.com/item?id=49867097",
    date: "2026-09-27", source: "bleepingcomputer.com", pts: 2, cmt: 0,
    desc: "趣闻向统计:5.5 几乎戒掉了 em dash,输出却变得更啰嗦。",
    tags: ["趣闻", "统计"]
  },
  {
    id: "newstack-migration",
    title: "5.5 降价了,但弄坏了 agent 的四件事",
    cat: "article", url: "https://thenewstack.io/claude-opus-agent-migration/",
    discuss: "https://news.ycombinator.com/item?id=49817871",
    date: "2026-09-23", source: "thenewstack.io", pts: 1, cmt: 0,
    desc: "升级迁移指南:agent 工程里被 5.5 静默改变的行为清单。",
    tags: ["迁移", "agent"]
  },
  {
    id: "why-cheaper",
    title: "为什么 5.5 和 GPT-6 Sol 更便宜?",
    cat: "article", url: "https://www.claudecodecamp.com/p/why-new-models-get-cheaper",
    discuss: "https://news.ycombinator.com/item?id=49817419",
    date: "2026-09-23", source: "claudecodecamp.com", pts: 1, cmt: 0,
    desc: "解析新一代旗舰模型降价的供给侧原因。",
    tags: ["定价", "分析"]
  }
];
