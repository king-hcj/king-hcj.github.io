---
layout: post
title: 知识与经验，探索和发现（壹）
categories: 知识与经验，探索和发现
description: 知识与经验，探索和发现
keywords: Knowledge and Experience、Exploration and Discovery
---

<!-- 二十四个节气:立春、雨水、惊蛰、春分、清明、谷雨、立夏、小满、芒种、夏至、小暑、大暑、立秋、处暑、白露、秋分、寒露、霜降、立冬、小雪、大雪、冬至、小寒、大寒。 -->

## 缘起

### ARTS 的终止

&emsp;&emsp;前端领域飞速发展，世界风云波谲云诡。学习资料堆积如山难以选择；计划总是跟不上变化。那么，作为前端浪潮中的弄潮儿，我们该如何选择，才能适应时代的变化呢？我想，我们也许可以做如下思考：

- **哪些事情做起来一定有益于个人的发展**，如此，可避免总是在变化中无序选择；
- 只要一直**做正确的事情**，一直有经验的沉淀与思考，多年后的某一天，你会惊异地发现自己已经获得了超出预期的成长；
- **定点捕捞**比广撒网更能获取你想要的知识。

&emsp;&emsp;同时，我认为，ARTS 打卡计划：

- 是职业生涯特定阶段的产物，比如它重算法、力求提升个人技术影响力；
- 以前的 ARTS 打卡，主要坚持的可能也只是 ATS，R 很少，实际上在某种程度上也难以发挥它的最大价值；
- 需要用这些时间系统性的干一些更重要的事儿，不仅仅是现阶段更重要的事儿；
- 知识积累过于宽泛，难有特定领域的深入探索和沉淀、产出；
- 我**希望能一直做正确的事情，一直有经验的沉淀与思考，获得更多有深度的沉淀**。

### 新的开始

- 周期：两周 ～ 两个月为一个周期
- 主题：知识与经验，探索和发现；
- 形式：
  - Knowledge and Experience【阅读、识见、思考，不仅仅局限于专业知识，也包括生活、人生等】
    - 最近两周学会的技术、小技巧和收获（可以含以前的算法）
    - 技术文章阅读学习
    - 格局、价值观、成长、人生类
    - 财经、理财类
    - 生活、运动健康等
    - 不定期的实践增补
  - Exploration and Discovery【探索与发现】
    - 特定领域的技术和知识沉淀【定点捕捞】
    - 技术文章输出，建议两周一篇
    - 领悟与收获
    - 不定期的实践增补

&emsp;&emsp;两年为期，遇见更好的自己！ —— 2021.05.24 By Cheney。

## 立春

### Knowledge and Experience

- `background-image`问题

```css
.body {
  overflow: hidden; /* 这个可以禁止下拉和左右滑动 */
  /* overflow-x: hidden; // 限制左右滑动位移 */
  background: #201d32; /* 不设置background的话，会有白边，下拉会漏出白底 */
  background-image: linear-gradient(to bottom, #201d32, #000000 100%);
}
```

- 移动端 web 禁止长按选择文字以及弹出菜单

```css
/*如果是禁用长按选择文字功能，用css*/
* {
  user-select: none;
}
```

```js
// 如果是想禁用长按弹出菜单, 用js
window.addEventListener('contextmenu', function (e) {
  e.preventDefault();
});
```

- `pointer-events`是 css3 的一个属性，指定在什么情况下元素可以成为鼠标事件的`target`（包括鼠标的样式）。`pointer-events`属性有很多值，但是对于浏览器来说，只有`auto`（默认值）和`none`两个值可用，其它的几个是针对 SVG 的(本身这个属性就来自于 SVG 技术)。`none`值时，元素永远不会成为鼠标事件的`target`（目标）。
- [不要过度使用 React.useCallback()](https://segmentfault.com/a/1190000022651514){:target='\_blank'}
- [git 对比两个分支差异](https://www.jianshu.com/p/bb97fabb475e){:target='\_blank'}

```js
  git diff branch1 branch2 --stat // 显示出branch1和branch2中差异的部分
  git diff branch1 branch2 具体文件路径 // 显示指定文件的详细差异
  git diff branch1 branch2 // 显示出所有有差异的文件的详细差异
  git log branch1 ^branch2 // 查看branch1分支有，而branch2中没有的log
  git log branch1..branch2 // 查看branch2中比branch1中多提交了哪些内容。注意，列出来的是两个点后边（此处即dev）多提交的内容。
  git log branch1...branch2 // 不知道谁提交的多谁提交的少，单纯想知道有什么不一样
  git log -left-right branch1...branch2 // 在上述情况下，在显示出每个提交是在哪个分支上。注意 commit 后面的箭头，根据我们在 –left-right branch1…branch2 的顺序，左箭头 < 表示是 branch1 的，右箭头 > 表示是branch2的。
```

### Exploration and Discovery

#### 前端性能优化

- [x] [前端性能优化方法与实战](https://kaiwu.lagou.com/course/courseInfo.htm?courseId=638#/content){:target='\_blank'}

#### JavaScript Visualized Series' Articles

- [JavaScript Visualized Series' Articles](https://dev.to/lydiahallie/series/3341){:target='\_blank'} &#124; [译文](https://segmentfault.com/u/savokiss/articles){:target='\_blank'} &#124; [译文](https://juejin.cn/post/6844904050165563406){:target='\_blank'}
