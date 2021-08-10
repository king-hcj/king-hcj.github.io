---
layout: post
title: CSS 揭秘
categories: CSS
description: CSS Secrets，Better Solutions to Everyday Web Design Problems
keywords: CSS, 前端, JavaScript
---

## 关于本书

&emsp;&emsp;本书是一本注重实践的教程，作者为我们揭示了 47 个鲜为人知的 CSS 技巧，主要内容包括背景与边框、形状、 视觉效果、字体排印、用户体验、结构与布局、过渡与动画等。本书将带领读者循序渐进地探寻更优雅的解决方案， 攻克每天都会遇到的各种网页样式难题。

&emsp;&emsp;`$$()`，可以让我们更容 易地获取和遍历所有匹配特定 CSS 选择符的 DOM 元素，这个函数的定 义如下:

```js
function $$(selector, context) {
context = context || document;
var elements = context.querySelectorAll(selector); return Array.prototype.slice.call(elements);
}
```

&emsp;&emsp;每篇攻略至少会附上一个在线示例，URL 都在 `play.csssecrets.io` 域名下。如果把参考链接都放在全书末尾的“参考资料”中，查起来会很不方便，因此我们将采用就近注解的方式。