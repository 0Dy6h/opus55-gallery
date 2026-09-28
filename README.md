# 螃蟹的 Opus 5.5 作品集

一个纯本地静态页面,收集网上散落的 **Claude Opus 5.5**(Anthropic,2026-09-22 发布)作品:
视频、游戏、视觉艺术、研究实验、实战应用、评测文章与官方材料,目前共 47 件。

## 怎么打开

双击 `index.html` 即可(不需要服务器、不需要联网依赖,纯本地文件,所有动效为原生 Canvas/CSS 3D 实现)。

功能:3D 粒子星域背景 / 旋转 3D 立方体 / 卡片 3D 倾斜跟随 + 流光 / 分类筛选 /
关键词搜索(按 `/` 聚焦、`Esc` 清空)/ 按「最新发布」或「热度最高」排序 /
点 ☆ 收藏爆彩蛋(存浏览器 localStorage,可只看收藏)/ video 字段作品在卡片内点播本地 mp4 /
顶部滚动进度条。
系统开了「减少动态效果」时自动降级为静态版。

## 怎么新增作品

编辑 `works.js`,复制任意一条记录、改字段,保存后刷新页面即可:

```js
{
  id: "唯一英文id",                    // 不能和已有的重复
  title: "作品标题",
  cat: "video",                       // video / game / art / research / build / article / official
  url: "https://作品地址",
  discuss: "https://news.ycombinator.com/item?id=…",  // HN/社区讨论帖,没有填 null
  video: "media/xxx.mp4",             // 可选:本地视频路径,文件放 media/ 目录,卡片内可直接点播
  date: "2026-09-28",                 // YYYY-MM-DD
  source: "域名",                      // 如 launchvideo.io
  pts: 423,                           // HN 分数,没有填 null
  cmt: 221,                           // HN 评论数,没有填 null
  desc: "一句话中文介绍",
  tags: ["标签1", "标签2"]
}
```

分类补全在 `index.html` 顶部的 `CATS` 表里,想加新分类先去那里登记颜色。

## 数据来源与更新

- Hacker News(Algolia API,检索词 `opus 5.5`,按热度人工筛选)
- Anthropic 官方发布页 https://www.anthropic.com/claude-opus-5-5
- bilibili(检索「Opus 5.5」按作品人工筛选;9-27 新增 2 件,见视频分类)
- 收录截至 **2026-09-28**(模型发布后第 6 天;从 HN「opus 5.5」相关 40 帖、官方早期探索作品与 bilibili 中筛得 47 件)
- 官方也维护过一个「早期探索」作品串:https://twitter.com/claudeai/status/2102471866635919731
- `media/` 目录存放作品的本地视频(抓取自原作者公开发布页),仅供本地个人浏览,请勿二次分发;页面点击播放、不自动播放。

## 文件结构

```
螃蟹的opus5.5作品集/
├── index.html   # 页面本体(样式、逻辑都在这一个文件里)
├── works.js     # 作品数据(45 条),日常维护只动这个文件
├── media/       # 作品本地视频(works.js 的 video 字段引用,可选)
├── .tools/      # 下载/转码工具(yt-dlp、ffmpeg),非站点本体,可整目录删除
└── README.md
```
