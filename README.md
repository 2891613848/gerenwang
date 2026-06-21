# 小熊的个人网站

> 用好奇心建造，用代码创造

## ✨ 特性

- 🎨 **粒子动画背景** — Canvas 轻量粒子系统，鼠标跟随交互
- ⌨️ **打字机效果** — Hero 区文案逐字循环打印
- 🫗 **毛玻璃卡片** — 全局 backdrop-filter 玻璃态设计
- 🌈 **多色渐变** — 分区主题色（紫→蓝→青→绿→橙→粉）
- 📱 **响应式** — 手机/平板/桌面全适配
- ⚡ **零依赖构建** — Vue 3 CDN，无 Webpack/Node 构建
- 🧪 **内置 UBTI 测试** — 48 题 → 16 种大学适配类型

## 🛠 技术栈

- **Vue 3** — 渐进式框架（CDN 全局构建）
- **纯 CSS** — CSS 变量 + 动画 + 响应式
- **Canvas** — 粒子背景引擎
- **GitHub Pages** — 静态托管

## 📁 目录结构

```
├── index.html          # SPA 入口
├── css/main.css        # 全局样式
└── js/
    ├── app.js           # Vue 应用 + Hash Router
    ├── effects.js       # 粒子/打字机/滚动动画
    ├── vue.global.prod.js
    ├── components/      # 导航栏、页脚
    ├── pages/           # 首页/关于/项目/博客/产品
    └── data/            # 数据文件
```

## 🚀 本地运行

```bash
npx serve -l 3000 .
# 打开 http://localhost:3000
```

## 📝 License

MIT
