---
layout: post
title: 关于React Fiber的五个问题
categories: JavaScript
description: React Fiber
keywords: React Fiber, JS, 前端, JavaScript
---

## React 的哲学 —— 构建快速响应的大型 Web 应用程序

&emsp;&emsp;React官网上说：我们认为，React 是用 JavaScript 构建**快速响应**的大型 Web 应用程序的首选方式。它在 Facebook 和 Instagram 上表现优秀。React 最棒的部分之一是引导我们思考如何构建一个应用。

制约快速响应的场景：

  - CPU的瓶颈：当当项目变得庞大、组件数量繁多、遇到大计算量的操作或者设备性能不足使页面掉帧，导致卡顿。
  - IO的瓶颈：发送网络请求后，由于需要等待数据返回才能进一步操作导致不能快速响应。

fiber 架构主要还是用来对 cpu 和网络的问题，这两个问题一直也是最影响前端开发体验的地方，一个会造成卡顿，一个会造成白屏。为此 react 为前端引入了两个新概念：Time Slicing 时间分片；Suspense

## React 15的痛点 与 后续版本的优化

### React 15 架构

React15架构可以分为两层：

- Reconciler（协调器）—— 负责找出变化的组件：在React15中Reconciler是递归处理虚拟DOM的。
- Renderer（渲染器）—— 负责将变化的组件渲染到页面上

由于递归执行，所以更新一旦开始，中途就无法中断。当层级很深时，递归更新时间超过了16ms，用户交互就会卡顿。

### React 16 架构

React16架构可以分为三层：

- Scheduler（调度器）—— 调度任务的优先级，高优任务优先进入Reconciler
- Reconciler（协调器）—— 负责找出变化的组件：更新工作从递归变成了可以中断的循环过程。Reconciler内部采用了Fiber的架构。
- Renderer（渲染器）—— 负责将变化的组件渲染到页面上

&emsp;&emsp;在React15及以前，Reconciler采用递归的方式创建虚拟DOM，递归过程是不能中断的。如果组件树的层级很深，递归会占用线程很多时间，造成卡顿。
&emsp;&emsp;为了解决这个问题，React16将递归的无法中断的更新重构为异步的可中断更新，由于曾经用于递归的虚拟DOM数据结构已经无法满足需要。于是，全新的Fiber架构应运而生。

&emsp;&emsp;在运行时优化方面，React一直在努力。比如，React15实现了batchedUpdates（批量更新）。即同一事件回调函数上下文中的多次setState只会触发一次更新。

&emsp;&emsp;但是，如果单次更新就很耗时，页面还是会卡顿（这在一个维护时间很长的大应用中是很常见的）。这是因为React15的更新流程是同步执行的，一旦开始更新直到页面渲染前都不能中断。

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

## Vue 3.0 动静结合的 Dom diff 与 React的“先天不足”

- [以 React 为例，说说框架和性能（下）](https://gitbook.cn/m/mazi/columns/5c91c813968b1d64b1e08fde/topics/5cbbf49bbbbba80861a35c64){:target='_blank'}

## requestIdleCallback的启示

我们以浏览器是否有剩余时间作为任务中断的标准，那么我们需要一种机制，当浏览器有剩余时间时通知我们。

其实部分浏览器已经实现了这个API，这就是requestIdleCallback。但是由于以下因素，React放弃使用：

- 浏览器兼容性
- 触发频率不稳定，受很多因素影响。比如当我们的浏览器切换tab后，之前tab注册的requestIdleCallback触发的频率会变得很低

&emsp;&emsp;基于以上原因，React实现了功能更完备的requestIdleCallbackpolyfill，这就是Scheduler。除了在空闲时触发回调的功能外，Scheduler还提供了多种调度优先级供任务设置。

- [你应该知道的requestIdleCallback](https://segmentfault.com/a/1190000014457824){:target='_blank'}
- [requestIdleCallback-后台任务调度](http://www.zhangyunling.com/702.html){:target='_blank'}

## 

## React 性能的飞跃 —— Fiber

<!--  -->

- [React Fiber Architecture](https://github.com/acdlite/react-fiber-architecture){:target='_blank'}
- [React Fiber架构](https://zhuanlan.zhihu.com/p/37095662){:target='_blank'}
- [React Fiber 原理介绍](https://segmentfault.com/a/1190000018250127){:target='_blank'}
- [前端工程师的自我修养：React Fiber 是如何实现更新过程可控的](https://www.zoo.team/article/about-react-fiber){:target='_blank'}
- [React Fiber是什么](https://zhuanlan.zhihu.com/p/26027085){:target='_blank'}
- [A deep dive into React Fiber internals](https://blog.logrocket.com/deep-dive-into-react-fiber-internals/){:target='_blank'}
- [React的新引擎—React Fiber是什么？](https://www.infoq.cn/article/what-the-new-engine-of-react/)

## Fiber架构思想对前端生态的影响

- [Facebook 将对 React 的优化实现到了浏览器！](https://mp.weixin.qq.com/s/Lbcu1aa2LQZlddAwIIExqA){:target='_blank'}

## Svelte 对固有模式的冲击

- [新兴前端框架 Svelte 从入门到原理](https://mp.weixin.qq.com/s/7GTTAYNf28IvIe2bpfVHuQ){:target='_blank'}

## 参考资料

- [React技术揭秘](https://react.iamkasong.com/){:target='_blank'}