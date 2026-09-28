# AGENTS.md — 螃蟹的 Opus 5.5 作品集

## 项目是什么

纯本地静态单页(简体中文 UI):收集 Claude Opus 5.5(2026-09-22 发布)的网上作品。
**没有构建、没有依赖、没有 package.json、没有 git、没有任何测试/lint 命令**——不要去找,
验证方式就是浏览器打开 `index.html` 人工检查。

## 文件结构与边界

- `works.js` — 纯数据文件:给 `window.WORKS` 挂一个对象数组。日常新增/修改作品只动这里,保存后刷新页面自动重渲染。
- `index.html` — 页面本体:全部 CSS(一个 `<style>`)和全部 JS(一个内联 `<script>` IIFE)都在这一个文件里。
- `README.md` — works.js 字段说明、数据来源(HN Algolia API + Anthropic 官网)。改字段结构前先读它。
- `WORKLOG.md` — 按日期的工作记录(修了什么、验证结果、遗留待定项)。动手前先读最新一节:其中「遗留/待定方向」是用户未拍板的事,勿擅自推进。
- `media/` — 作品的本地 mp4(works.js `video` 字段引用);`.tools/` — 下载/转码工具(yt-dlp、ffmpeg 便携版),**不属于站点本体**,整体删除不影响页面。

## 硬性约束

- **必须保持 file:// 协议可用**(用户双击打开):禁止 ES modules、fetch/XHR、外部 CDN、任何需要本地服务器的特性。`works.js` 只能是普通 `<script>` 挂全局。
- **JS 风格**:现有代码是 ES5 风格(`var`、function 表达式,无箭头函数/模板字符串/解构),改动请保持一致。
- **文案语言**:所有界面文案为简体中文;`lang="zh-CN"`,字体栈 Microsoft YaHei / PingFang SC。
- **减少动态效果降级**:每个动画/动效必须同时处理两处——JS 里的 `reduceMotion` 守卫和 CSS 的 `@media (prefers-reduced-motion: reduce)` 块。新增动效漏掉任意一处都算回归。
- **XSS**:任何数据拼进 `innerHTML` 前一律过 `esc()`(index.html 底部工具函数)。
- **链接协议**:`works.js` 的 `url`/`discuss` 只允许 http(s) 链接——`esc()` 只防 HTML 注入,不校验 scheme。

## 新增作品 / 新增分类

- 新增作品:`works.js` 里复制一条记录改字段。字段:id(唯一英文)、cat、url、discuss(HN 链接或 null)、video(可选,本地 mp4 相对路径,文件放 `media/`)、date(YYYY-MM-DD)、source、pts/cmt(数字或 null)、desc(一句中文)、tags。
- 新增分类要改**两处**:`index.html` 内联脚本顶部的 `CATS` 表(name + color 引用),以及 `:root` 里的 CSS 颜色变量(如 `--art: #c084fc`)。分类色贯穿卡片圆点、边框光晕等视觉。

## 改动时的联动与坑

- 作品总条数变化后,README 里的「共 45 件」「收录截至 2026-09-28」要手动同步(页脚计数 `#footCount` 和分类 chips 上的数字是自动算的,不用管)。
- 卡片列表的筛选/搜索/排序走全量 innerHTML 重绘(`render()`),末尾置 `needsCheck = true` 触发下一帧可见性检查,改渲染逻辑别丢;但**收藏点击走的是就地更新**(换 ★/☆,仅在「只看收藏」模式下让单卡退场 + `syncFavView()`),不要退回整页 `render()`——那会让所有卡片重播入场动画。
- 卡片可见性检查(`checkCards`)由三个条件触发:滚动位移变化、`window.resize`、`needsCheck` 标志(见 `tick()`),别把检查重新挂回单一条件。
- 收藏存 localStorage,key 为 `opus55-favs`(JSON 数组),读取有 try/catch 兜底。
- 主逻辑依赖脚本加载顺序:`works.js` 必须在内联脚本之前加载(目前写在 `<head>` 里)。
- 星域背景按「透明度分档 × 颜色」批量绘制(每帧最多二十几次 draw call),改视觉效果时保持这个批量结构,别退回逐粒子/逐线段 stroke。绘制层级是连线在下、粒子在上,透明度量化为 3 档属设计如此,不是回归。
- 「只看收藏」的单卡退场:JS 侧 `OUT_MS` 与 CSS `.card.out` 的 `.28s` 必须同步改;`.card.out` 里的 `animation: none` 不能删,否则入场动画关键帧会盖掉退场的 opacity/transform,卡片会原地闪断消失。
- `video` 字段指向 `media/` 里的本地 mp4,渲染为 `<video preload="metadata">` 点击播放。**别改成 autoplay**——自动播放属于动效,会同时触发 reduceMotion 双守卫回归;现在是纯点播,所以两处守卫都不用加。媒体走相对路径,file:// 直开可用,严禁改 fetch/流式加载。`.card-video` 的 `translateZ(12px)` 与卡片 3D 倾斜层级配套,别删。

## 回归验证清单(无自动化测试,改动手测按此走)

双击打开 `index.html`,依次检查:

1. 首屏:45 张卡片渲染、分类 chips 计数正确、星域背景在动。
2. 搜索「宝可梦」剩 2 条;排序切「热度最高」首位是官方发布页;「游戏·互动」分类剩 4 条。
3. 《Clippy 的复仇》卡内视频可点播、无自动播放;把 works.js 的 `video` 路径临时改错刷新,应出现「本地视频加载失败,去原址观看 ↗」兜底链接而非黑屏(测完改回)。
4. 点 ☆:星星就地变 ★、整页**不**重播入场动画;开「只看收藏」后取消收藏,该卡平滑缩退、其余卡片不动,清空后出现空态提示。
5. 不滚动直接拉伸/缩小窗口:视口内不应有一直透明的卡片;滚到页底再回顶部,沿途卡片正常显形。
6. `/` 聚焦搜索、`Esc` 清空;页脚计数仍为 45;系统开「减少动态效果」时页面为静态版且内容完整。

要用浏览器自动化工具验证时,`file://` 无法被直接导航,先起本地静态服务器再访问 `http://127.0.0.1:8123/index.html`(注意:`python` 在本机 Git Bash 不在 PATH,起服务器用 node 写十行静态脚本即可),测完记得清 `opus55-favs` 并关服务器。本机内置浏览器自动化还有三个实测坑:原生鼠标/键盘事件(cua/press)不送达页面,用 `fill`/`selectOption`/`evaluate` 合成事件驱动、DOM `click()` 验证处理函数;持续动画页面(星域 canvas)上 locator `click` 的 actionability 会超时;`Esc` 等真实按键无法自动化覆盖,留人工测。纯语法层面可先跑 `node --check works.js` 自检(index.html 的内联脚本无法直接用 node 检查,以浏览器实测为准)。
