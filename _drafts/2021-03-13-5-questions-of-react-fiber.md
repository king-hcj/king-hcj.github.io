---
layout: post
title: 关于React Fiber的五个问题
categories: JavaScript
description: React Fiber
keywords: React Fiber, JS, 前端, JavaScript
---

## React 的设计理念是什么？

&emsp;&emsp;React官网在[React哲学](https://zh-hans.reactjs.org/docs/thinking-in-react.html){:target='_blank'}一节开篇提到：我们认为，React 是用 JavaScript 构建**快速响应**的大型 Web 应用程序的首选方式。它在 Facebook 和 Instagram 上表现优秀。React 最棒的部分之一是引导我们思考如何构建一个应用。

&emsp;&emsp;由此可见，React 追求的是 “快速响应”，那么，“快速响应“的制约因素都有什么呢？

  - CPU的瓶颈：当项目变得庞大、组件数量繁多、遇到大计算量的操作或者设备性能不足使得页面掉帧，导致卡顿。
  - IO的瓶颈：发送网络请求后，由于需要等待数据返回才能进一步操作导致不能快速响应。

&emsp;&emsp;fiber 架构主要还是用来解决 cpu 和网络的问题，这两个问题一直也是最影响前端开发体验的地方，一个会造成卡顿，一个会造成白屏。为此 react 为前端引入了两个新概念：Time Slicing 时间分片和Suspense。

## React的“先天不足” —— 听说 Vue 3.0 采用了动静结合的 Dom diff，React 为何不跟进？

### Vue 3.0 动静结合的 Dom diff

&emsp;&emsp;Vue3.0 提出动静结合的 DOM diff 思想，之所以能够做到动静结合的 DOM diff，或者把这个问题放得更大：之所以能够做到**预编译优化**，是因为 Vue core 可以静态分析 template，在解析模版时，整个 parse 的过程是利用正则表达式顺序解析模板，当解析到开始标签、闭合标签和文本的时候都会分别执行对应的回调函数，来达到构造 AST 树的目的。

&emsp;&emsp;借助预编译过程，Vue 可以做到的预编译优化就很强大了。比如在预编译时标记出模版中可能变化的组件节点，再次进行渲染前 diff 时就可以**跳过“永远不会变化的节点”**，而只需要对比“可能会变化的动态节点”。这也就是动静结合的 DOM diff 将 diff 成本与模版大小正相关优化到与动态节点正相关的理论依据。

### React 能否像 Vue 那样进行预编译优化？

&emsp;&emsp;Vue 需要做数据双向绑定，需要进行数据拦截或代理，那它就需要在预编译阶段静态分析模版，分析出视图依赖了哪些数据，进行响应式处理。而 React 就是局部重新渲染，React 拿到的或者说掌管的，所负责的就是一堆递归 React.createElement 的执行调用，它无法从模版层面进行静态分析。因此 React JSX 过度的灵活性导致运行时可以用于优化的信息不足。

- [以 React 为例，说说框架和性能（下）](https://gitbook.cn/m/mazi/columns/5c91c813968b1d64b1e08fde/topics/5cbbf49bbbbba80861a35c64){:target='_blank'}

## 从架构看不断进击的 React 都做过哪些优化？

&emsp;&emsp;既然存在以上编译时先天不足，在运行时优化方面，React一直在努力。比如，React15实现了batchedUpdates（批量更新）。即同一事件回调函数上下文中的多次setState只会触发一次更新。

&emsp;&emsp;但是，如果单次更新就很耗时，页面还是会卡顿（这在一个维护时间很长的大应用中是很常见的）。这是因为React15的更新流程是同步执行的，一旦开始更新直到页面渲染前都不能中断。

### React 15 架构

React15架构可以分为两层：

- Reconciler（协调器）—— 负责找出变化的组件：在React15中Reconciler是递归处理虚拟DOM的。
- Renderer（渲染器）—— 负责将变化的组件渲染到页面上

&emsp;&emsp;在React15及以前，Reconciler采用递归的方式创建虚拟DOM，**递归过程是不能中断的**。如果组件树的层级很深，递归会占用线程很多时间，递归更新时间超过了16ms，用户交互就会卡顿。

&emsp;&emsp;为了解决这个问题，React16将递归的无法中断的更新重构为**异步的可中断更新**，由于曾经用于递归的虚拟DOM数据结构已经无法满足需要。于是，全新的Fiber架构应运而生。

### React 16 架构

React16架构可以分为三层：

- Scheduler（调度器）—— 调度任务的优先级，高优任务优先进入Reconciler
- Reconciler（协调器）—— 负责找出变化的组件：更新工作从递归变成了可以中断的循环过程。Reconciler内部采用了Fiber的架构。
- Renderer（渲染器）—— 负责将变化的组件渲染到页面上

&emsp;&emsp;为了解决同步更新长时间占用线程导致页面卡顿的问题，也为了探索运行时优化的更多可能，React开始重构并一直持续至今。重构的目标是实现Concurrent Mode（并发模式）。

从v15到v16，React团队花了两年时间将源码架构中的Stack Reconciler重构为Fiber Reconciler。

- React15的痛点 与 Concurrent Mode（并发模式）
  - Concurrent Mode的目的是实现一套可中断/恢复的更新机制。其由两部分组成：
    - 一套协程架构：Fiber Reconciler
    - 基于协程架构的启发式更新算法：控制协程架构工作方式的算法
- requestIdleCallback
- React16的启发式更新算法
- React17启发式更新算法
  > React16的expirationTimes模型只能区分是否>=expirationTimes决定节点是否更新。React17的lanes模型可以选定一个更新区间，并且动态的向区间中增减优先级，可以处理更细粒度的更新。

- [React17新特性：启发式更新算法](https://zhuanlan.zhihu.com/p/182411298){:target='_blank'}

## requestIdleCallback的启示

&emsp;&emsp;我们以浏览器是否有剩余时间作为任务中断的标准，那么我们需要一种机制，当浏览器有剩余时间时通知我们。

&emsp;&emsp;其实部分浏览器已经实现了这个API，这就是requestIdleCallback。但是由于以下因素，React放弃使用：

- 浏览器兼容性
- 触发频率不稳定，受很多因素影响。比如当我们的浏览器切换tab后，之前tab注册的requestIdleCallback触发的频率会变得很低

&emsp;&emsp;基于以上原因，React实现了功能更完备的requestIdleCallbackpolyfill，这就是Scheduler。除了在空闲时触发回调的功能外，Scheduler还提供了多种调度优先级供任务设置。

- [你应该知道的requestIdleCallback](https://segmentfault.com/a/1190000014457824){:target='_blank'}
- [requestIdleCallback-后台任务调度](http://www.zhangyunling.com/702.html){:target='_blank'}

## React 性能的飞跃 —— Fiber

- [React Fiber Architecture](https://github.com/acdlite/react-fiber-architecture){:target='_blank'}
- [React Fiber架构](https://zhuanlan.zhihu.com/p/37095662){:target='_blank'}
- [React Fiber 原理介绍](https://segmentfault.com/a/1190000018250127){:target='_blank'}
- [前端工程师的自我修养：React Fiber 是如何实现更新过程可控的](https://www.zoo.team/article/about-react-fiber){:target='_blank'}
- [React Fiber是什么](https://zhuanlan.zhihu.com/p/26027085){:target='_blank'}
- [A deep dive into React Fiber internals](https://blog.logrocket.com/deep-dive-into-react-fiber-internals/){:target='_blank'}
- [React的新引擎—React Fiber是什么？](https://www.infoq.cn/article/what-the-new-engine-of-react/)

## 未来可期

&emsp;&emsp;既然任务可拆分（只要最终得到完整effect list就行），那就允许并行执行

## isInputPending —— Fiber架构思想对前端生态的影响

- [Facebook 将对 React 的优化实现到了浏览器！](https://mp.weixin.qq.com/s/Lbcu1aa2LQZlddAwIIExqA){:target='_blank'}

## Svelte 对固有模式的冲击

- [新兴前端框架 Svelte 从入门到原理](https://mp.weixin.qq.com/s/7GTTAYNf28IvIe2bpfVHuQ){:target='_blank'}

## 参考资料

- [React技术揭秘](https://react.iamkasong.com/){:target='_blank'}
- [源码概览](https://zh-hans.reactjs.org/docs/codebase-overview.html#reconcilers){:target='_blank'}
- [实现说明](https://zh-hans.reactjs.org/docs/implementation-notes.html){:target='_blank'}
- [Concurrent 模式介绍 (实验性)](https://zh-hans.reactjs.org/docs/concurrent-mode-intro.html){:target='_blank'}
- [【第1945期】彻底搞懂React源码调度原理（Concurrent模式）](https://mp.weixin.qq.com/s/xHfhMqa5Nsw_5i6MkK2X0A){:target='_blank'}