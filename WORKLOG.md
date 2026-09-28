# 工作记录

## 2026-09-28 · /review 整改(视频功能加固 + esc 补齐)

**背景**:对上两轮变更做 /review,产出 🟠×2、🟡×2、⚪×2;用户拍板「开始整改优化」。逐项落实如下。

**已整改**:
1. 🟠 视频加载失败兜底(降低 file:// 未实测项的影响面):渲染时给 `<video>` 写入 `data-fallback`(原址链接,esc 过);`$grid` 上用**捕获**监听 `error`(media error 不冒泡),失败时把播放器替换为「本地视频加载失败,去原址观看 ↗」链接(新窗口 + noopener),CSS `.video-fallback` 与播放器同尺寸同圆角。无动画/无 transition → 不涉及 reduceMotion 双守卫。首版按 src 反查 WORKS 找链接,浏览器实测暴露缺陷(改 src 后反查落空、href 为空),已改为 data-fallback 直读并删掉反查循环。
2. 🟠 AGENTS.md 回归验证清单插入第 3 项:视频可点播、无自动播放、改错路径应出兜底链接;原 3-5 顺延为 4-6。
3. 🟡 esc 补齐:`render()` 里 `w.source`、`w.date` 拼 innerHTML 前过 `esc()`(此前裸拼接,与硬性约束表述不一致;`cat.name` 为代码常量未动)。
4. 🟡 README 功能行补「video 字段作品在卡片内点播本地 mp4」;⚪ 文件树补 `.tools/` 行(注明非站点本体、可删)。
5. ⚪ translateZ 表述、⚪ schema 校验脚本保留与否:按审查意见不改/不保留(与「无测试」定位一致)。

**未整改(非代码项)**:🟠 file:// 主路径仍需**用户双击 index.html 实测点播**(浏览器自动化无法导航 file:);6 条 X 源条目复核需可达网络。

**验证**(http://127.0.0.1:8123 实测):正常路径 45 卡/页脚 45/视频在位、esc 后日期与来源显示无变化;兜底路径——src 改指不存在文件后播放器被替换为兜底链接,href 精确指向 YouTube 原址、target=_blank、rel=noopener;改后复测 720p 播放正常(1.8s 推进 1.9s)。服务器与临时文件已清理。

**收工快照(2026-09-28 晚)**:作品 45 件,`works.js`/`index.html`/`README.md`/`AGENTS.md` 全部同步;`media/` 1 个视频(720p,15.2MB);`.tools/` 留 ffmpeg + yt_dlp(330MB,可整体删除)。环境已清理(无临时脚本、无残留进程、localStorage 无测试数据)。**留给用户**:双击 `index.html` 人工确认视频点播。**跨会话经验已存档**:本机 python/网络/yt-dlp 配方、内置浏览器自动化三坑已写入 AGENTS.md 与记忆。

---

## 2026-09-28 · 质量复查 + 内嵌本地 mp4(45 件后追加)

**背景**:用户指示「复查质量,如果能直接嵌入mp4视频文件更好」。两件事:①复查上轮 9 条新增;②对 WORKLOG 待定项「页内视频」给出变体拍板——不做 YouTube iframe(违背纯本地),做**真本地 mp4 点播**,用户已同意。

**质量复查结果(9 条新增)**:
- prompting-guide / ppsspp-vfpu / living-paintings 三条非 X 链接全部 HTTP 200;ppsspp 与 echohive 页面正文实测点名 Opus 5.5,与描述一致。
- 6 条 X 源条目:本机到 twitter.com/x.com 完全不可达(fetch failed),无法直接核验,维持上轮 favtutor 交叉采信;gist、reddit 同样不可达。

**内嵌视频功能**:works.js 新增可选字段 `video`(相对路径,文件放 `media/`);index.html 渲染 `<video class="card-video" controls preload="metadata" playsinline>`(desc 与 meta 之间)。纯点播无自动播放 → 不涉及 reduceMotion 双守卫(CSS 已注释说明);`translateZ(12px)` 跟随卡片 3D 倾斜层级;路径过 `esc()`。

**mp4 获取(唯一成功:clippy-revenge)**:
- 可行路径(记牢):本机旧 yt-dlp(2026.06.09)的 `android_vr` 客户端 403、`android` 客户端只有 360p 预合并;**PyPI 拉 yt_dlp-2026.8.19 wheel + 系统 python.exe(`C:\Users\12035\AppData\Local\Programs\Python\Python312\python.exe`,不在 PATH)+ `PYTHONPATH=.tools/ytdlp` 跑新版** → 720p DASH(136+140)+ ffmpeg 合并成功。ffmpeg 为便携版(gyan 9.0.2 essentials),在 `.tools/ffmpeg-9.0.2-essentials_build/bin/`。
- 最终文件:media/clippy-revenge.mp4,1280×720 H.264+AAC,89.8s,15.2MB。
- 拿不到 mp4 的:ozymandias / golden-ford(交互网页,本质非视频文件)、launchvideo.io(无可提取直链)、pokemon-trailer(原始视频在不可达 gist)、side-hustle-ad(reddit 不可达)、sand-history / mosaic-film(X 不可达)。GitHub releases CDN(objects.githubusercontent.com)本机超时,故未用 yt-dlp.exe 独立版。
- 版权注记(README 已写):media/ 抓自原作者公开发布页,仅限本地个人浏览,勿二次分发。

**验证**:`node --check` + 扩展 schema(含 video 字段格式与文件存在性)通过;浏览器实测:video 元素全页唯一、属性正确(controls/preload=metadata/无 autoplay)、720p 解码(readyState 4、1280×720)、play() 实时推进、截图确认画面真实渲染(0:10/1:29)且卡片布局无错位;45 卡/页脚 45 复查通过。服务器、临时脚本、压缩包均已清理;.tools/ 保留 ffmpeg 与 yt_dlp 包(共 330MB,可整体删除,不影响站点)。

**遗留/待定方向**(用户未拍板,勿擅自推进):
- 收紧收录标准:旧低热条目仍在(两轮均只增未删)。
- file:// 直开时的 `<video>` 相对路径加载属浏览器标准行为,本轮以 http 实测播放;建议用户双击 index.html 时顺手确认一遍视频可播。
- 若后续想给更多视频类作品补 mp4,X/reddit 需在可达网络环境操作;交互网页类(echohive 等)没有 mp4 可补。

---

## 2026-09-28 · 内容集扩充:36 → 45 件(质量优先)

**背景**:用户指示「扩展内容集,要求质量」。未动「收紧收录标准」待定项(旧条目一条未删),只做**高质量新增**。

**数据源**:HN Algolia 全量复查(`"opus 5.5"` 精确短语 40 帖 + 放宽 `claude/anthropic` 自 9-22 起 pts≥3 共 121 帖)、favtutor 作品合集文内嵌的原始推文链接、echohive 官网索引、WebSearch。注:X/Twitter 在本机网络不可达,6 条推文作品经 favtutor 文章 + status ID 与官方探索串同段位(21024xxx)交叉采信。

**新增 9 条**:
- official:官方提示词指南 Prompting Claude Opus 5.5(HN 91 分/83 评,当日热帖)
- research:PPSSPP 作者 Henrik Rydgård 用 5.5 位精确逆向 PSP VFPU 指令(正文点名 5.5)
- art:「可以走进去的十五幅名画」(echohive 9-27 新作,站方标注 5.5)、《五号屠场》4D 时空点云(前 Google PM Bilawal Sidhu)、像素魔法师单文件 60fps 精灵
- game:Lumen Vale 浏览器 Minecraft(1h37m,可玩带着色器)
- build:手绘草图→3D 投石机物理模拟(前 Google Brain/DeepMind 工程师 Ben Poole)
- video:沙动画美国 250 年史(Michael Guo)、单 HTML WebGL2 马赛克短片(零外部资源)

**收录质量线**(本次执行,供后续参考):官方且 HN 前排(≥50 分)/ 可验证点名 5.5 且成果硬核或作者权威 / 官方早期探索波次中有实名作者、原创链、可玩或高观感者。**已核实并拒绝**:「Claude 发现新酶系统」(780 分但全文只说 Claude agents 未点名 5.5)、「nine loops」(103 分但用的是 Fable 5.1)、Nokia 6300 客户端(未点名 5.5)、Gigantua 黑洞(无法验证 5.5)、aipricing 与 AA-High(低热重复/变体)、Ann Nong 手账、Stefan Blender 渲染、watch 站与旅行规划器(无原创链或惊艳度不足)。

**联动**:README「共 45 件」+ 数据来源括注重写;AGENTS.md 联动示例与回归清单同步(45 张、游戏分类 4 条、页脚 45);works.js 按 cat 分区尾插。

**验证**:`node --check` 通过;临时 schema 校验脚本(45 条、id 唯一、url 全 https、date/discuss/pts 格式、分类分布 6/8/4/5/8/5/9)全过;node 静态服务器 + 内置浏览器实测:45 卡渲染、chips 计数全对、页脚 45、9 条新卡在列、搜索「宝可梦」=2、Esc 合成事件验证逻辑正确(清值+失焦+恢复 45)、热度排序首位=官方发布页、游戏分类=4、收藏 ☆→★ 就地更新(data-probe 标记节点未重建)、取消恢复、localStorage 已清。服务器与临时脚本已清理。

**环境备注**:本内置浏览器不把原生鼠标/键盘事件送达页面(cua/press 均无效;fill/selectOption/合成事件正常)。chip 筛选与收藏用 DOM click() 驱动页面真实处理函数验证;Esc 的真实按键路径无法在自动化中覆盖,代码路径本次未动、逻辑已验证,建议人工双击打开时顺手按一次 Esc。

**遗留/待定方向**(用户未拍板,勿擅自推进):
- 收紧收录标准:现 45 件仍含旧低热条目(本次只增不删),用户嫌「跳转过去质量不高」的问题在旧条目上仍存在。
- 视频类卡片页内 YouTube 内嵌:可做但违背「纯本地」定位,需改 README。
- 真本地视频库:已明确不建议(版权/抓取/多数作品非视频)。

---

## 2026-09-28 · 交互修复 + 性能整改(首日整改)

**背景**:用户反馈「视频没下载到本地、跳转过去质量不高、UI 一坨到处 bug」。评估结论:视频本地化=换项目定位(暂不做)、内容质量=收录策展问题(待定)、代码问题属实但集中在交互细节。按方案 A(保持目录定位、修 bug、保视觉)执行。

**修复(index.html)**:
1. 点 ☆ 收藏改为**就地更新**(原整页 `render()` 导致全部卡片重播入场动画);「只看收藏」模式下取消收藏改为单卡缩退(`.card.out` + `OUT_MS`),其余卡片不动。
2. 卡片显形检查(`checkCards`)补上 `window.resize` 与 `needsCheck` 双触发,窗口缩放后不再出现一直透明的卡片。
3. 触屏滚动不再触发卡片 3D 倾斜(`pointerType === "touch"` 守卫)。
4. `url`/`discuss` 拼 href 补 `esc()`;热度排序比较函数在分数、日期都相同时的返回值修正;星标按钮补 `aria-pressed`。
5. 星域 canvas 按「透明度分档 × 颜色」批量绘制,每帧几百次 draw call 压到最多二十几次。

**代码审查(/review)后追加**:
- `.card.out` 补 `animation: none`——否则入场动画关键帧会盖掉退场样式,快速取消收藏时卡片原地闪断(审查唯一 🟠)。
- `syncFavView()` 补 `needsCheck = true`,堵住单卡移除后网格回流导致的同类隐形卡片。
- 退场期间星标 `disabled`,消除键盘重收藏的存储/列表不一致竞态。
- 退场时长抽为 `OUT_MS` 常量,与 CSS `.28s` 互指注释。

**验证**:两个 JS 文件 `node --check` 通过;`python -m http.server` 起本地服务器后浏览器实测:36 卡渲染、搜索「宝可梦」=2 条、热度排序首位=官方发布页(1802 分)、游戏分类=3 条、收藏就地更新(DOM 节点未重建)、单卡退场落空态、入场动画播放中退场 `animationName === "none"`、多收藏移除后视口卡片全部显形、resize 显形、`aria-pressed` 正确。测试数据与服务器已清理。

**文档**:README 未动(功能与条数无变化);AGENTS.md 同步实现约束 + 新增回归验证清单;新增本工作记录。

**遗留/待定方向**(用户未拍板,勿擅自推进):
- 收紧收录标准:现 36 件含多条 pts≤2 的低热作品,用户嫌「跳转过去质量不高」。
- 视频类卡片页内 YouTube 内嵌:可做但违背「纯本地」定位,需改 README。
- 真本地视频库:已明确不建议(版权/抓取/多数作品非视频)。
