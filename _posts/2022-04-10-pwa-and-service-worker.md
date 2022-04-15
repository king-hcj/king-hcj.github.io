---
layout: post
title: 在国内逐渐消亡的 PWA 可以带给我们哪些启示？
categories: JavaScript
description: PWA的消亡及启示
keywords: JS, 前端, JavaScript, PWA, Service Worker
---

## PWA 是什么？

&emsp;&emsp;如果我说，我们要讨论一个 2016 年被提出、2017 年落地、至今在国内仍可算籍籍无名的概念，你是不是会觉得这没有什么意义？

&emsp;&emsp;互联网发展了这么久，我们记住了“Native App”、“小程序”、“快应用”、“App clips”、“Hybrid App”、“Web App”，似乎独独没有 PWA，我们为什么要讨论一个在国内压根儿没怎么火起来的东西呢？

### 身边的 PWA

#### Lighthouse

&emsp;&emsp;有一个事实是，我们在用 Lighthouse 做网站性能诊断的时候，经常会看到 PWA 的身影：

![pwa_opt]({{site.url}}{{site.baseurl}}/images/posts/pwa/pwa_opt.png?raw=true)

#### 强大的生产力

&emsp;&emsp;同时，国内外也有不少案例昭示着 PWA 强大的生产力：

- PWA 的概念已经出来很久了，2017 年的[一篇技术博文](https://medium.com/dev-channel/a-pinterest-progressive-web-app-performance-case-study-3bd6ed2e6154){:target='\_blank'}显示，堪称图片版的 Twitter 的 Pinterest 将他们的移动网站重建为 PWA，核心参与度增加了 60%，用户产生的广告收入增加了 44%，花费的时间也增加了 40%；

![compare_mobile_web]({{site.url}}{{site.baseurl}}/images/posts/pwa/compare_mobile_web.png?raw=true)

![compare_pwa_app]({{site.url}}{{site.baseurl}}/images/posts/pwa/compare_pwa_app.png?raw=true)

- 2016 年初 AliExpress 开始与 Google 团队合作，推动 PWA 技术在 AliExpress 上的落地；结果是非常令人惊奇和满意的。AliExpress 发现[新用户的转换率增加了 104％](https://zhuanlan.zhihu.com/p/26445223){:target='\_blank'}。在 Safari 的转化率也上升了 82％。现在用户每次访问的页面数量是原先的两倍，也大大提升了用户浏览页面的时间；

- 类似这样的成功案例数不胜数：

![pwa_productivity]({{site.url}}{{site.baseurl}}/images/posts/pwa/pwa_productivity.png?raw=true)

&emsp;&emsp;**这些不仅仅是数字，这些都是 PWA 的成功案例**。

&emsp;&emsp;**也许，这些和墙内的你我，距离还不够近？**

#### Squoosh、PROXX 与 微博 Lite

<!-- 微博可以用来演示PWA -->

&emsp;&emsp;在 2018 Google Chrome 开发者峰会上，Google 发布了[Squoosh](https://squoosh.app/){:target='\_blank'}，这是一个开源的图片压缩渐进式 Web 应用（PWA），它同时也是现代 Web 技术的一个实际展示，[谷歌实验室发布 Squoosh](https://www.infoq.com/news/2018/11/google-squoosh-pwa-webassembly/){:target='\_blank'} 的主要目标是演示高级 web 应用程序如何利用现代技术在 web 浏览器中提供高性能的体验。

&emsp;&emsp;[PROXX](https://proxx.app/){:target='\_blank'}是谷歌 Chrome 团队推出的一款 JavaScript 游戏。该项目展示了如何开发快速平滑的 Web 应用，这些应用在多种平台和输入设备上提供了相近的用户体验。Proxx 项目的独到之处在于它主要针对的是**智能功能机**。

> 智能功能机是低价智能机替代设备，在印度和非洲广为使用。相对于智能机，智能功能机的硬件非常简单。它不支持触控，屏幕相对较小，大多采用 240x320 分辨率的 QVGA 屏，CPU 的处理能力也相对较弱。

&emsp;&emsp;[微博 Lite](https://m.weibo.cn){:target='\_blank'}，也许这是 PWA 离你更近的一次。

#### 开发者相关

&emsp;&emsp;再比如[Google Developers](https://developers.google.com/){:target='\_blank'}，在线 IDE[StackBlitz.com](https://stackblitz.com/){:target='\_blank'} 或者字节内部使用的[Goofy Studio PWA](https://studio.bytedance.net/){:target='\_blank'}等。

#### 书籍

&emsp;&emsp;同时，网上也有不少关于 PWA 的书籍：

- [![pwa_book]({{site.url}}{{site.baseurl}}/images/posts/pwa/pwa_book.webp?raw=true)](https://github.com/SangKa/PWA-Book-CN){:target='\_blank'}

- [《PWA 应用实战》](https://gitee.com/hbche/pwa-book){:target='\_blank'}

### 现实因素

&emsp;&emsp;Native app 体验确实很好，下载到手机上之后入口也方便，但它的优缺点很明显:

![native_app]({{site.url}}{{site.baseurl}}/images/posts/pwa/native_app.png?raw=true)

&emsp;&emsp;而 web 网页开发成本低，网站更新时上传最新的资源到服务器即可，用手机带的浏览器打开就可以使用。但是除了体验上比 Native app 还是差一些，还有一些明显的缺点：

![web_app]({{site.url}}{{site.baseurl}}/images/posts/pwa/web_app.png?raw=true)

&emsp;&emsp;在这些因素的推动下，**Web 应用渐进式接近原生 App**的概念 —— PWA 诞生了。

### PWA 简介

> 官方：采用所有正确组成要素的网站。

![pwa]({{site.url}}{{site.baseurl}}/images/posts/pwa/pwa.png?raw=true)

&emsp;&emsp;PWA 是 Google 于 2016 年提出的概念，于 2017 年正式落地，于 2018 年迎来重大突破，全球顶级的浏览器厂商，Google、Microsoft、Apple 已经全数宣布支持 PWA 技术。

&emsp;&emsp;PWA 全称为 Progressive Web App，中文译为渐进式 Web APP，**其目的是通过各种 Web 技术实现与原生 App 相近的用户体验**。

&emsp;&emsp;纵观现有 Web 应用与原生应用的对比差距，如离线缓存、沉浸式体验等等，可以通过已经实现的 Web 技术去弥补这些差距，最终达到与原生应用相近的用户体验效果。

&emsp;&emsp;一个 PWA 应用首先是一个网页, 可以通过 Web 技术编写出一个网页应用. 随后添加上 App Manifest 实现添加至主屏幕， 通过 Service Worker 来实现离线缓存和消息推送等功能。

&emsp;&emsp;[Web Application Manifest](https://w3c.github.io/manifest/){:target='\_blank'}，即通过一个清单文件向浏览器暴露 web 应用的元数据，包括名称、icon 的 URL 等，以备浏览器使用，比如在添加至主屏或推送通知时暴露给操作系统，从而增强 web 应用与操作系统的集成能力。

&emsp;&emsp;我们**原有的整个 Web 应用模型，都是构建在「用户能上网」的前提之下的**，所以一离线就只能玩小恐龙了。其实，对于「让 web 应用离线执行」这件事，Service Worker 至少是 web 社区的第三次尝试了。

&emsp;&emsp;故事可以追溯到 2007 年的 Google Gears：为了让自家的 Gmail、Youtube、Google Reader 等 web 应用可以在本地存储数据与离线执行，Google 开发了一个浏览器拓展来增强 web 应用。Google Gears 支持 IE 6、Safari 3、Firefox 1.5 等浏览器；要知道，那一年 Chrome 都还没出生呢。

> Gears，前身为 Google Gears，是由 Google 提供的已停产的实用软件，用于通过向 Web 浏览器添加离线存储和其他附加功能来创建更强大的 Web 应用程序。Gears 是在没有可比替代品的时候构思的，后来，Gears 被终止，取而代之的是最终流行 的标准化 HTML5 方法。在 Gears API 中，我们通过向 LocalServer 模块提交一个缓存文件清单来实现离线支持。

&emsp;&emsp;Service Worker 是一个可编程的 Web Worker，它就像一个位于浏览器与网络之间的客户端代理，可以拦截、处理、响应流经的 HTTP 请求；配合随之引入 Cache Storage API，你可以自由管理 HTTP 请求文件粒度的缓存，这使得 Service Worker 可以从缓存中向 web 应用提供资源，即使是在离线的环境下。

&emsp;&emsp;PWA 解决了上述提到的问题，这些特性将使得 Web 应用渐进式接近原生 App。

### PWA 实现

![pwa_and_stand_app]({{site.url}}{{site.baseurl}}/images/posts/pwa/pwa_and_stand_app.jpeg?raw=true)

#### 实现

&emsp;&emsp;一个简单的 PWA demo 很简单，新建项目目录，然后：

```sh
touch index.html
touch sw.js
npm install serve -g
```

&emsp;&emsp;之后进行简单的 html 和 sw.js 文件的编写，最后通过 manifest.json 实现添加到桌面功能。

```json
// manifest.json
{
  "name": "Progressive Web App",
  "short_name": "PWA",
  "description": "Progressive Web App.",
  "icons": [
    {
      "src": "/icon.png",
      "sizes": "288x288",
      "type": "image/png"
    }
  ],
  "start_url": "/",
  "display": "standalone",
  "theme_color": "#B12A34",
  "background_color": "#B12A34"
}
```

&emsp;&emsp;通过对 manifest.json 进行相应配置，可以实现以下功能：

![manifest]({{site.url}}{{site.baseurl}}/images/posts/pwa/manifest.png?raw=true)

#### App Shell 模型

&emsp;&emsp;[App Shell 架构](https://www.wenjiangs.com/doc/o6rquebe){:target='\_blank'}是构建 Progressive Web App 的一种方式，这种应用能可靠且即时地加载到您的用户屏幕上，与本机应用相似。

&emsp;&emsp;App“shell”是**支持用户界面所需的最小的 HTML、CSS 和 JavaScript**，如果离线缓存，可确保在用户重复访问时提供即时、可靠的良好性能。这意味着并不是每次用户访问时都要从网络加载 App Shell，只需要从网络中加载必要的内容。

&emsp;&emsp;对于使用包含大量 JavaScript 的架构的单页应用来说，App Shell 是一种常用方法。这种方法依赖渐进式缓存 Shell（使用服务工作线程）让应用运行。接下来，为使用 JavaScript 的每个页面加载动态内容。App Shell 非常适合用于在没有网络的情况下将一些初始 HTML 快速加载到屏幕上。

![appshell]({{site.url}}{{site.baseurl}}/images/posts/pwa/appshell.png?raw=true)

### PWA 的优势与劣势

![pwa_processon]({{site.url}}{{site.baseurl}}/images/posts/pwa/pwa_processon.png?raw=true)

> 摩尔定律，芯片领域的 OKR。摩尔在 1965 年文章中指出，芯片中的晶体管和电阻器的数量每年会翻番，原因是工程师可以不断缩小晶体管的体积。这就意味着，半导体的性能与容量将以指数级增长，并且这种增长趋势将继续延续下去。1975 年，摩尔又修正了摩尔定律，他认为，每隔 24 个月，晶体管的数量将翻番。

> 晶体管数量翻倍带来的好处可以总结为：**更快，更小，更便宜**。根据摩尔定律，芯片设计师的主要任务便是缩小晶体管的大小，然后让芯片能够容纳越多的晶体管。晶体管的增加可以让设计师为芯片添加更多的功能，比如 3D 显卡，从而节约成本。

&emsp;&emsp;尽管有上述的一些缺点，PWA 技术仍然有很多可以使用的点。

- Service Worker 技术实现离线缓存，可以将一些不经常更改的静态文件放到缓存中，提升用户体验。
- Service Worker 实现消息推送，使用浏览器推送功能，吸引用户
- 渐进式开发，尽管一些浏览器暂时不支持，可以利用上述技术**给使用支持浏览器的用户带来更好的体验**。

> 当然，在通知这一块儿，[浅谈浏览器通知 API Notification](https://zhuanlan.zhihu.com/p/346800213){:target='\_blank'}也是一个选择。

## Javascript Workers

&emsp;&emsp;浏览器使用单个线程（主线程）来运行网页中的所有 JavaScript，以及执行渲染页面和执行垃圾收集等任务。运行过多的 JavaScript 代码会阻塞主线程，延迟浏览器执行这些任务并导致糟糕的用户体验。

&emsp;&emsp;在 Web 上，JavaScript 是围绕单线程的概念设计的，缺乏实现像应用程序那样的多线程模型所需的功能，比如共享内存。

&emsp;&emsp;尽管有这些限制，但在 Web 中可以通过使用 Workers 在后台线程中运行脚本来实现类似的模式，允许它们执行任务而不干扰主线程。Workers 是运行在单独线程上的整个 JavaScript 作用域，没有任何共享内存。

&emsp;&emsp;一般来说，一个 worker 是一个脚本在浏览器主线程之外的单独的线程上运行。如果你想要在 HTML 文档中引用一个`<script>`标签的典型的 JavaScript 文件，它会运行在主线程上。如果主线程上有太多的计算，会拖慢网站的速度，造成交互卡顿和响应延迟。Web worker，service worker 和 worklet 都是让脚步运行在单独的线程上的。

![workers]({{site.url}}{{site.baseurl}}/images/posts/pwa/workers.png?raw=true)

- [Web workers vs Service workers vs Worklets](https://bitsofco.de/web-workers-vs-service-workers-vs-worklets/){:target='\_blank'} &#124; [译文](https://tinyshare.cn/post/HpDVBvTWbUD){:target='\_blank'}

### Web worker

&emsp;&emsp;Web workers 是最常用的 worker 类型。它不像另外两种，它们除了运行在主线程外的特性外，没有一个特殊的应用场景。所以，web worker 可以用于减少主线程上大量的线程活动。

![web-worker]({{site.url}}{{site.baseurl}}/images/posts/pwa/web-worker.jpeg?raw=true)

> 参考：[Workers overview](https://web.dev/workers-overview/){:target='\_blank'}。

&emsp;&emsp;一个很好的例子是图像处理 Web 应用程序[Squoosh](https://squoosh.app/){:target='\_blank'}，它使用 Web Worker 来进行图像处理任务，让主线程可供用户与应用程序进行不中断的交互。

&emsp;&emsp;[PROXX](https://proxx.app/){:target='\_blank'}也使用了 Web worker 相关技术，具体可参考[Proxx: Building Fast Web Applications](https://www.infoq.com/news/2019/06/proxx-fast-web-apps/){:target='\_blank'}。

&emsp;&emsp;Web Worker 有以下几个使用注意点：

- 同源限制：分配给 Worker 线程运行的脚本文件，必须与主线程的脚本文件同源。
- DOM 限制：Worker 线程所在的全局对象，与主线程不一样，无法读取主线程所在网页的 DOM 对象，也无法使用 document、window、parent 这些对象。但是，Worker 线程可以 navigator 对象和 location 对象。
- 通信联系：Worker 线程和主线程不在同一个上下文环境，它们不能直接通信，必须通过消息（postMessage）完成。
- 脚本限制：Worker 线程不能执行 alert()方法和 confirm()方法，但可以使用 XMLHttpRequest 对象发出 AJAX 请求。
- 文件限制：Worker 线程无法读取本地文件，即不能打开本机的文件系统（file://），它所加载的脚本，必须来自网络。

> 更多使用细节可参考阮一峰的[Web Worker 使用教程](https://www.ruanyifeng.com/blog/2018/07/web-worker.html){:target='\_blank'}

### Service worker

&emsp;&emsp;Service workers 是一种提供详细的作为浏览器和网络或缓存间的代理的服务。

![service-worker]({{site.url}}{{site.baseurl}}/images/posts/pwa/service-worker.jpeg?raw=true)

&emsp;&emsp;2014 年，W3C（万维网联盟）公布了 Service Worker 的相关草案，但真正在生产环境被 Chrome 支持是在 2015 年，要比微信小程序还要早两年。

![sw-lifecycle]({{site.url}}{{site.baseurl}}/images/posts/pwa/sw-lifecycle.png?raw=true)

<!-- 拆图 -->

![sw-lifecycle]({{site.url}}{{site.baseurl}}/images/posts/pwa/sw-lifecycle.webp?raw=true)

#### HTTP 缓存与 Service Worker 缓存

- HTTP 缓存中，Web 服务器可以使用 Expires 首部来通知 Web 客户端，它可以使用资源的当前副本，直到指定的“过期时间”。反过来，浏览器可以缓存此资源，并且只有在有效期满后才会再次检查新版本。
  使用 HTTP 缓存意味着你要依赖服务器来告诉你何时缓存资源和何时过期。

- Service Workers 的强大在于它们拦截 HTTP 请求的能力，进入任何传入的 HTTP 请求，并决定想要如何响应。在你的 Service Worker 中，可以编写逻辑来决定想要缓存的资源，以及需要满足什么条件和资源需要缓存多久。一切尽归你掌控！

#### 注意事项

- Service worker 运行在 worker 上下文（self） --> 不能访问 DOM
- 它设计为完全异步，同步 API（如 XHR 和 localStorage）不能在 service worker 中使用
- 出于安全考量，Service workers 只能由 HTTPS 承载
- 某些浏览器的用户隐私模式，Service Worker 不可用
- 其生命周期与页面无关（关联页面未关闭时，它也可以退出，没有关联页面时，它也可以启动）

#### 离线缓存

&emsp;&emsp;由于 Service Worker 的出现，我们不再尝试离线解决问题，而是让开发人员自己动手解决。通过它可以控制缓存以及如何处理请求。这意味着您可以创建自己的模式。让我们分别了解几种可能的模式，但在实践中，您可能会根据 URL 和上下文同时使用多种模式。

&emsp;&emsp;在[离线指南](https://web.dev/offline-cookbook/){:target='\_blank'}中，全面介绍了各种缓存的模式。无论您做了多少缓存，服务工作进程都不会使用缓存，除非您告诉它何时以及如何使用。下图展示的是缓存优先的示意图：

![cache_prior]({{site.url}}{{site.baseurl}}/images/posts/pwa/cache_prior.png?raw=true)

![cache]({{site.url}}{{site.baseurl}}/images/posts/pwa/cache.png?raw=true)

#### 调试

![service_debug]({{site.url}}{{site.baseurl}}/images/posts/pwa/service_debug.png?raw=true)

#### 兼容性

- [Service Worker](https://caniuse.com/?search=Service%20Worker){:target='\_blank'}
- [manifest](https://caniuse.com/?search=manifest){:target='\_blank'}

#### 参考资料

- [网站渐进式增强体验(PWA)改造：Service Worker 应用详解](https://lzw.me/a/pwa-service-worker.html){:target='\_blank'} &#124; [图](https://github.com/delapuente/service-workers-101){:target='\_blank'}
- [Web 离线应用解决方案——ServiceWorker](https://www.cnblogs.com/dojo-lzz/p/8047336.html){:target='\_blank'}
- [What self.skipWaiting() does to the service worker lifecycle](https://bitsofco.de/what-self-skipwaiting-does-to-the-service-worker-lifecycle/){:target='\_blank'}

### Worklet

&emsp;&emsp;Worklet 是一个非常轻量且高度特别的 worker。它可以让开发者在浏览器渲染线程中的多个部分做钩子。

&emsp;&emsp;Worklet 接口是 Worker 的轻量级版本，让开发人员可以访问渲染管道的底层部分。通过 Worklets，您可以运行 JavaScript 和 WebAssembly 代码来执行需要高性能的图形渲染或音频处理。

&emsp;&emsp;当一个 web 页面正在被渲染，浏览器经过很多步骤。在这里我们需要关注的有四步：Style，Layout，Paint 和 Composite。

&emsp;&emsp;Paint 这一步，浏览器应用每个元素的样式。在这一步做钩子的 worklet 是 Paint Worklet。Paint Worklet 允许我们创建自定义图片，这个图片可以应用任何 CSS，比如 background-image 属性的值。

&emsp;&emsp;除了 Paint Worklet 之外，还有其他的 worklet 可以向渲染线程的其他阶段做钩子。Animation Worklet 在 Composite 阶段做钩子，Layout Worklet 在 Layout 阶段做钩子。

![frame-full]({{site.url}}{{site.baseurl}}/images/posts/pwa/frame-full.jpeg?raw=true)

### 总结

&emsp;&emsp;Web worker，Service worker 和 worklet 都是将脚本运行在浏览器主线程之外单独的线程中，它们之间的区别是它们所应用的场景和他们的特性。

- Worklet 是浏览器渲染流中的钩子，可以让我们有浏览器渲染线程中底层的权限，比如样式和布局；
- Service worker 是浏览器和网络间的代理。通过拦截文档中发出的请求，service worker 可以直接请求缓存中的数据，达到离线运行的目的。
- Web worker 是通常目的是让我们减轻主线程中的密集处理工作的脚本。

## App、小程序、快应用与 App Clips

[![App]({{site.url}}{{site.baseurl}}/images/posts/pwa/App.png?raw=true)](https://www.biaodianfu.com/app-next.html){:target='\_blank'}

## PWA 发展与现状

### PWA in China

&emsp;&emsp;看看 Google 官方宣传较多的 PWA 案例就会发现，FlipKart、Housing.com 来自印度；Lyft、华盛顿邮报来自北美；唯一来自中国的 AliExpress 主要开展的则是海外业务。

由于中国的特殊性，PWA 的前景在一定程度上比较悲观：

- 国内较重视 iOS，而 iOS 目前还不支持 PWA。
- 国内的 Android 实为「安卓」，不自带 Chrome 是一，可能还会有其他兼容问题。
- 国内厂商可能并不会像三星那样对推动自家浏览器支持 PWA 那么感兴趣。
- 依赖 GCM 推送的通知不可用，Web Push Protocol 还没有国内的推送服务实现。
- 国内 webview 环境较为复杂（比如微信），黑科技比较多。

&emsp;&emsp;反观印度，由于 Google 服务健全、标配 Chrome 的 Android 手机市占率非常高，PWA 的用户达到率简直直逼 100%，也难免获得无数好评与支持了。笔者奢望着本文能对推动 PWA 的国内环境有一定的贡献。不过无论如何，PWA 在国内的春天可能的确会来得稍微晚一点了。

> 参考资料： [下一代 Web 应用模型 —— Progressive Web App](https://huangxuan.me/2017/02/09/nextgen-web-pwa/){:target='\_blank'} &#124; [小程序的老祖宗 PWA 为什么没有火起来？](https://blog.csdn.net/qq_37860930/article/details/97236557){:target='\_blank'}

### 百度

&emsp;&emsp;在 2017 年 7 月 5 日“百度 AI 开发者大会”（Baidu Create2017）——Web 生态分论坛上，百度开发者介绍了百度 Lavas 解决方案，帮助开发者快速搭建 PWA 应用。

&emsp;&emsp;lavas 不是一个框架，而是一个基于 vue 的 PWA 解决方案，通过 lavas 导出的模板帮助开发者解决了接入 PWA 过程中遇到的问题：

- Service Worker 生成
- Service Worker 更新，以及 sw 更新后的操作
- App Skeleton，页面渲染完成之前的页面框架
- 页面切换前进后退过渡动画
- App Shell，集成了 vuetify 组件库
- 主题切换
- vue 的图标解决方案...

&emsp;&emsp;而现在 lavas 官网已经无法访问，这在很大程度上可以反应 PWA 在国内业务的一个现状。

### 微软

&emsp;&emsp;Microsoft 依然在维护着相关文档：[Get started with Progressive Web Apps](https://docs.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/how-to/){:target='\_blank'}，时间显示，最近更新时 2022 年 3 月 1。

![Microsoft]({{site.url}}{{site.baseurl}}/images/posts/pwa/microsoft.png?raw=true)

&emsp;&emsp;PWA（Progressive Web App）是一种理念，使用多种技术来增强 web app 的功能，可以让网站的体验变得更好，能够模拟一些原生功能，比如通知推送。在移动端利用标准化框架，让网页应用呈现和原生应用相似的体验。

&emsp;&emsp;PWA 不能包含原生 OS 相关代码。PWA 仍然是网站，只是在缓存、通知、后台功能等方面表现更好。Electron 程序相当于包裹 OS 原生启动器（Launcher）的网站，未来，许多 Electron 程序可能转化为 PWA。

![App]({{site.url}}{{site.baseurl}}/images/posts/pwa/mini_program_and_pwa.png?raw=true)

&emsp;&emsp;小程序类似传统的 Hybrid 架构，对渲染性能要求较高的组件,通过 Native 组件来实现，以弥补传统 Web 页面性能上的不足。另外传统 Web 无法访问的本地能力，需要通过 JSSDK 来实现。而 PWA 是 Web 能力的增强，通过提供更多的接口和规范可以让 Web 应用更接近 Native 应用。

## 推荐参考

- [Learn PWA](https://web.dev/learn/pwa/){:target='\_blank'}
- [渐进式 Web 应用](https://web.dev/progressive-web-apps/){:target='\_blank'}
- [讲讲 PWA](https://segmentfault.com/a/1190000012353473){:target='\_blank'}
- [6 myths of Progressive Web Apps](https://medium.com/samsung-internet-dev/6-myths-of-progressive-web-apps-81e28ca9d2b1){:target='\_blank'}
- [PWA 文档](https://www.wenjiangs.com/docs/pwa-docs){:target='\_blank'}
