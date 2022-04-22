---
layout: post
title: 小程序鼻祖 —— 在国内逐渐消亡的 PWA 可以带给我们哪些启示？
categories: JavaScript
description: PWA的消亡及启示
keywords: JS, 前端, JavaScript, PWA, Service Worker
hot: true
---

&emsp;&emsp;如果我说，我们要讨论一个 2016 年被提出、2017 年落地、至今在国内仍可算籍籍无名的概念，你是不是会觉得这没有什么意义？

&emsp;&emsp;互联网发展了这么久，我们记住了“Native App”、“小程序”、“快应用”、“App clips”、“Hybrid App”、“Web App”，似乎独独没有 PWA，但 **PWA 及其理念却一直在推动着前端领域前进**。

> 从严格意义上来说，百度和奇虎 360 在 2013 年提出的[轻应用](https://wiki.mbalib.com/wiki/%E8%BD%BB%E5%BA%94%E7%94%A8){:target='\_blank'}概念，和小程序有更多一致性。

## PWA 是什么？

&emsp;&emsp;似乎 PWA 对很多人来说是如此陌生，PWA 对前端开发者来说却又是无处不在。

### 身边的 PWA

#### Lighthouse

&emsp;&emsp;对前端开发者来说，Lighthouse 是一个很熟悉的网站性能诊断工具，在这里，我们总是可以看到 PWA（Progressive Web App）的身影：

![pwa_opt](https://king-hcj.github.io/images/posts/pwa/pwa_opt.png?raw=true)

#### PWA 书籍

&emsp;&emsp;又或者，你曾无意间看到这些书籍或者资料：

- [![pwa_book](https://king-hcj.github.io/images/posts/pwa/pwa_book.webp?raw=true)](https://github.com/SangKa/PWA-Book-CN){:target='\_blank'}

- [《PWA 应用实战》](https://gitee.com/hbche/pwa-book){:target='\_blank'}

#### 开发者相关

&emsp;&emsp;啊哈，这些，都没看到过？那你总是访问过[Google Developers](https://developers.google.com/){:target='\_blank'}吧，或者总看见过这样一个图标：

![google_dev](https://king-hcj.github.io/images/posts/pwa/google_dev.png?raw=true)

&emsp;&emsp;可以认为这个图标在哪里，一个 PWA 应用就在哪里，点击这个按钮，可以**将 PWA 应用安装到桌面**。于是，在线 IDE [StackBlitz.com](https://stackblitz.com/){:target='\_blank'}出现了，字节内部使用的[Goofy Studio PWA](https://studio.bytedance.net/){:target='\_blank'}出现了：

![stackblitz](https://king-hcj.github.io/images/posts/pwa/stackblitz.png?raw=true)

#### 谷歌的探索

&emsp;&emsp;但是，**动不动就讲开发，真的太卷了**，说说那些更有意思的 PWA 应用吧。

&emsp;&emsp;2018 Google Chrome 开发者峰会上，Google 发布了[Squoosh](https://squoosh.app/){:target='\_blank'}，这是一个开源的图片压缩渐进式 Web 应用（PWA），它同时也是现代 Web 技术的一个实际展示，[谷歌实验室发布 Squoosh](https://www.infoq.com/news/2018/11/google-squoosh-pwa-webassembly/){:target='\_blank'} 的主要目标是演示高级 web 应用程序如何利用现代技术在 web 浏览器中提供高性能的体验。

![squoosh](https://king-hcj.github.io/images/posts/pwa/squoosh.png?raw=true)

&emsp;&emsp;[PROXX](https://proxx.app/){:target='\_blank'}是谷歌 Chrome 团队推出的一款 JavaScript 游戏。该项目展示了如何开发快速平滑的 Web 应用，这些应用在多种平台和输入设备上提供了相近的用户体验。Proxx 项目的独到之处在于它主要针对的是**智能功能机**。

> 智能功能机是低价智能机替代设备，在印度和非洲广为使用。相对于智能机，智能功能机的硬件非常简单。它不支持触控，屏幕相对较小，大多采用 240x320 分辨率的 QVGA 屏，CPU 的处理能力也相对较弱。

![proxx](https://king-hcj.github.io/images/posts/pwa/proxx.png?raw=true)

&emsp;&emsp;这是一款 JavaScript 游戏扫雷游戏，**摸鱼时可以玩儿玩儿，如果不幸被老板撞见，你就说在研究 PWA 嘛**。

#### 微博 Lite

&emsp;&emsp;[微博 Lite](https://m.weibo.cn){:target='\_blank'}，我相信，这，应该是 PWA 离你最近的一次：

![weibo](https://king-hcj.github.io/images/posts/pwa/weibo.png?raw=true)

&emsp;&emsp;**我猜你一定不会问**：既然 PWA 应用还是蛮广泛的，那，它一定很强大吧？

&emsp;&emsp;蒽，强不强大看看数据就知道了。

#### 强大的生产力

- 2017 年的[一篇技术博文](https://medium.com/dev-channel/a-pinterest-progressive-web-app-performance-case-study-3bd6ed2e6154){:target='\_blank'}显示，堪称图片版的 Twitter 的 Pinterest 将他们的移动网站重建为 PWA，核心参与度增加了 60%，用户产生的广告收入增加了 44%，花费的时间也增加了 40%；

![compare_mobile_web](https://king-hcj.github.io/images/posts/pwa/compare_mobile_web.png?raw=true)

![compare_pwa_app](https://king-hcj.github.io/images/posts/pwa/compare_pwa_app.png?raw=true)

- 2016 年初 AliExpress 开始与 Google 团队合作，推动 PWA 技术在 AliExpress 上的落地；结果是非常令人惊奇和满意的。AliExpress 发现[新用户的转换率增加了 104％](https://zhuanlan.zhihu.com/p/26445223){:target='\_blank'}。在 Safari 的转化率也上升了 82％。现在用户每次访问的页面数量是原先的两倍，也大大提升了用户浏览页面的时间；

- 类似这样的成功案例数不胜数，为了方便你直接丢到老板脸上，我梳理了这个图 😂：

![pwa_productivity](https://king-hcj.github.io/images/posts/pwa/pwa_productivity.png?raw=true)

&emsp;&emsp;我觉得你可以告诉他：**这些不仅仅是数字，这些都是 PWA 的成功案例**。

&emsp;&emsp;老板说：**这些和墙内的你我，距离能有多近？**
&emsp;&emsp;没事，离我们最近的 PWA 应用将在你的手上诞生。

### PWA 诞生的条件

&emsp;&emsp;我们应该都深有体会，Native app 体验确实很好，下载到手机上之后入口也方便。但它的优缺点很明显:

![native_app](https://king-hcj.github.io/images/posts/pwa/native_app.png?raw=true)

&emsp;&emsp;而 web 网页开发成本低，网站更新时上传最新的资源到服务器即可，用手机带的浏览器打开就可以使用。但是除了体验上比 Native app 还是差一些，还有一些明显的缺点：

![web_app](https://king-hcj.github.io/images/posts/pwa/web_app.png?raw=true)

&emsp;&emsp;在这些因素的推动下，**Web 应用渐进式接近原生 App**的概念 —— PWA 诞生了。

### PWA 简介

#### 什么是渐进式

&emsp;&emsp;PWA 全称为 Progressive Web App，中文译为渐进式 Web APP，那么，什么是渐进式呢？我觉得渐进式有两个层面的意思：

&emsp;&emsp;一是通过各种 Web 技术实现与原生 App 相近的用户体验，即**Web 应用渐进式接近原生 App**。

&emsp;&emsp;二是由于在当时的背景下，一些浏览器暂时不支持，可以利用 PWA 相关技术，**给支持 PWA 的浏览器用户带来更好的体验**。

&emsp;&emsp;另外，也许你听过**渐进增强**（Progressive Enhancement）和**优雅降级**（Graceful Degradation）这两个概念。

&emsp;&emsp;渐进增强：针对低版本浏览器进行构建页面，完成基本的功能，然后再针对高级浏览器进行效果、交互、追加功能以达到更好的体验。

&emsp;&emsp;优雅降级：构建站点的完整功能，然后针对浏览器测试和修复。比如一开始使用 CSS3 的特性构建了一个应用，然后逐步针对各大浏览器进行 hack 使其可以在低版本浏览器上正常浏览。

&emsp;&emsp;PWA 本质上是 WEB 应用，所以，我觉得这种“渐进式”其实是一种渐进增强的理念。

#### PWA 的概念

> 中文官网解释：采用所有正确组成要素的网站。

![pwa](https://king-hcj.github.io/images/posts/pwa/pwa.png?raw=true)

&emsp;&emsp;PWA 是 Google 于 2016 年提出的概念，于 2017 年正式落地，于 2018 年迎来重大突破，**全球顶级的浏览器厂商，Google、Microsoft、Apple 已经全数宣布支持 PWA 技术**。

&emsp;&emsp;纵观现有 Web 应用与原生应用的对比差距，如离线缓存、沉浸式体验等等，可以通过已经实现的 Web 技术去弥补这些差距，最终达到与原生应用相近的用户体验效果。

&emsp;&emsp;**一个 PWA 应用首先是一个网页, 可以通过 Web 技术编写出一个网页应用. 随后添加上 App Manifest 实现添加至主屏幕， 通过 Service Worker 来实现离线缓存和消息推送等功能**。

&emsp;&emsp;[Web Application Manifest](https://w3c.github.io/manifest/){:target='\_blank'}，即通过一个清单文件向浏览器暴露 web 应用的元数据，包括名称、icon 的 URL 等，以备浏览器使用，比如在添加至主屏或推送通知时暴露给操作系统，从而增强 web 应用与操作系统的集成能力。

&emsp;&emsp;我们**原有的整个 Web 应用模型，都是构建在「用户能上网」的前提之下的**，所以一离线就只能玩小恐龙了。其实，对于「让 web 应用离线执行」这件事，最早可以追溯到 2007 年的 Google Gears：为了让自家的 Gmail、Youtube、Google Reader 等 web 应用可以在本地存储数据与离线执行，Google 开发了一个浏览器拓展来增强 web 应用。Google Gears 支持 IE 6、Safari 3、Firefox 1.5 等浏览器；要知道，那一年 Chrome 都还没出生呢。

> Gears，前身为 Google Gears，是由 Google 提供的已停产的实用软件，用于通过向 Web 浏览器添加离线存储和其他附加功能来创建更强大的 Web 应用程序。Gears 是在没有可比替代品的时候构思的，后来，Gears 被终止，取而代之的是最终流行 的标准化 HTML5 方法。在 Gears API 中，我们通过向 LocalServer 模块提交一个缓存文件清单来实现离线支持。

&emsp;&emsp;Service Worker 是一个可编程的 Web Worker，它就像一个位于浏览器与网络之间的客户端代理，可以拦截、处理、响应流经的 HTTP 请求；配合随之引入 Cache Storage API，你可以自由管理 HTTP 请求文件粒度的缓存，这使得 Service Worker 可以从缓存中向 web 应用提供资源，即使是在离线的环境下。

### PWA 实现

![sw_img](https://king-hcj.github.io/images/posts/pwa/sw_img.gif?raw=true)

#### 实现

&emsp;&emsp;一个简单的 PWA demo 很简单，新建项目目录，然后：

```sh
touch index.html
touch sw.js
npm install serve -g
```

&emsp;&emsp;之后进行简单的 html 和 sw.js 文件的编写，最后通过 manifest.json 实现添加到桌面功能，完整代码可以查看[这里](https://stackblitz.com/edit/web-platform-x4trmv){:target='\_blank'}。

```json
// manifest.json
{
  "name": "Progressive Web App",
  "short_name": "PWA",
  "description": "Progressive Web App.",
  "icons": [
    {
      "src": "/icon.png",
      "sizes": "288x288", // 这里需要格外注意图片的尺寸，如果图片有问题，调试页面Manifest里会给你提示
      "type": "image/png"
    }
  ],
  "start_url": "/",
  "display": "standalone",
  "theme_color": "#B12A34",
  "background_color": "#B12A34"
}
```

&emsp;&emsp;示例 demo：

![pwa_demo](https://king-hcj.github.io/images/posts/pwa/pwa_demo.png?raw=true)

&emsp;&emsp;通过对 manifest.json 进行相应配置，可以实现以下功能：

![manifest](https://king-hcj.github.io/images/posts/pwa/manifest.png?raw=true)

#### App Shell 模型

&emsp;&emsp;另外，我觉得有必要介绍一下的是 App Shell 模型。

&emsp;&emsp;[App Shell 架构](https://www.wenjiangs.com/doc/o6rquebe){:target='\_blank'}是构建 Progressive Web App 的一种方式，这种应用能可靠且即时地加载到您的用户屏幕上，与本机应用相似。

&emsp;&emsp;App“shell”是**支持用户界面所需的最小的 HTML、CSS 和 JavaScript**，如果离线缓存，可确保在用户重复访问时提供即时、可靠的良好性能。这意味着并不是每次用户访问时都要从网络加载 App Shell，只需要从网络中加载必要的内容。

&emsp;&emsp;对于使用包含大量 JavaScript 的架构的单页应用来说，App Shell 是一种常用方法。这种方法依赖渐进式缓存 Shell（使用 Service Worker 线程）让应用运行，接下来，为使用 JavaScript 的每个页面加载动态内容。App Shell 非常适合用于在没有网络的情况下将一些初始 HTML 快速加载到屏幕上。

![appshell](https://king-hcj.github.io/images/posts/pwa/appshell.png?raw=true)

#### 从微博 Lite 看 PWA

&emsp;&emsp;安装 PWA：

![weibo_install](https://king-hcj.github.io/images/posts/pwa/weibo_install.png?raw=true)

&emsp;&emsp;安装后，PWA 应用就会出现在桌面/Chrome 应用里面：

![weibo_icon](https://king-hcj.github.io/images/posts/pwa/weibo_icon.png?raw=true)

&emsp;&emsp;从下图可以看出，点击桌面图标打开后，我们可以选择卸载 PWA，图标将会从桌面移除；同时，我们还可以发现，微博 Lite 除了缓存图片、JS、CSS 等静态资源外，也会缓存接口：

![weibo_detail](https://king-hcj.github.io/images/posts/pwa/weibo_detail.png?raw=true)

&emsp;&emsp;当我们将网络设置成离线时，刷新页面，依然可以继续浏览页面上上次加载过的信息，提升用户体验：

![weibo_offline](https://king-hcj.github.io/images/posts/pwa/weibo_offline.png?raw=true)

### PWA 的优势与劣势

![pwa_processon](https://king-hcj.github.io/images/posts/pwa/pwa_processon.png?raw=true)

&emsp;&emsp;在这些存在的问题里面，简单介绍一下摩尔定律。

&emsp;&emsp;个人认为，**摩尔定律是芯片领域的 OKR**。摩尔在 1965 年文章中指出，芯片中的晶体管和电阻器的数量每年会翻番，原因是工程师可以不断缩小晶体管的体积。这就意味着，半导体的性能与容量将以指数级增长，并且这种增长趋势将继续延续下去。1975 年，摩尔又修正了摩尔定律，他认为，每隔 24 个月，晶体管的数量将翻番。

&emsp;&emsp;晶体管数量翻倍带来的好处可以总结为：**更快，更小，更便宜**。根据摩尔定律，芯片设计师的主要任务便是缩小晶体管的大小，然后让芯片能够容纳越多的晶体管。晶体管的增加可以让设计师为芯片添加更多的功能，比如 3D 显卡，从而节约成本。

&emsp;&emsp;可以看出，摩尔定律是和我们书本上看到的公式、定理存在很大区别的，**它更多的是一个经验总结，是芯片领域自驱的 OKR**。

&emsp;&emsp;如果说一开始人们埋怨手机内存和流量资费的限制，而不想安装太多的 App，根据摩尔定律，现在的手机内存与硬件都在提升，运营商资费下调。这**使得 PWA 最初得以出现的根基开始动摇**。所以，PWA 现在国内面临的处境即：用户不知道，也不会用，开发者不见得支持，也不如小程序友好。

&emsp;&emsp;尽管有上述的一些缺点，PWA 技术仍然有很多可以借鉴和使用的点：

- Service Worker 技术实现离线缓存，可以将一些不经常更改的静态文件放到缓存中，提升用户体验。
- Service Worker 实现消息推送，使用浏览器推送功能，吸引用户
- 渐进式开发，尽管一些浏览器暂时不支持，可以利用上述技术**给使用支持浏览器的用户带来更好的体验**。

> 当然，在通知这一块儿，抛开 PWA 不谈，[浏览器通知 API Notification](https://zhuanlan.zhihu.com/p/346800213){:target='\_blank'}也是一个不错的选择。

## Javascript Workers

&emsp;&emsp;我们知道，JavaScript 是围绕单线程的概念设计的，缺乏实现像原生 App 那样的多线程模型所需的功能，比如共享内存。

&emsp;&emsp;浏览器使用单个线程（主线程）来运行网页中的所有 JavaScript、执行渲染页面和执行垃圾收集等任务。运行过多的 JavaScript 代码会阻塞主线程，延迟浏览器执行这些任务并导致糟糕的用户体验。

&emsp;&emsp;在 Web 中可以通过使用 Workers 在后台线程中运行脚本来实现类似多线程的模式，允许它们执行任务而不干扰主线程。Workers 是运行在单独线程上的整个 JavaScript 作用域，没有任何共享内存。

&emsp;&emsp;一般来说，Worker 可以让脚本在浏览器主线程之外的单独的线程上运行。如果你想要在 HTML 文档中引用一个`<script>`标签的典型的 JavaScript 文件，它会运行在主线程上。如果主线程上有太多的计算，会拖慢网站的速度，造成交互卡顿和响应延迟。Web worker，Service worker 和 Worklet 都是让脚步运行在单独的线程上的。

![workers](https://king-hcj.github.io/images/posts/pwa/workers.png?raw=true)

> 参考资料：[Web workers vs Service workers vs Worklets](https://bitsofco.de/web-workers-vs-service-workers-vs-worklets/){:target='\_blank'}

### Web worker

&emsp;&emsp;Web workers 是最常用的 worker 类型。它不像另外两种，它们除了运行在主线程外的特性外，没有一个特殊的应用场景。所以，Web worker 可以用于减少主线程上大量的线程活动。

![web-worker](https://king-hcj.github.io/images/posts/pwa/web-worker.jpeg?raw=true)

> 推荐阅读：[Workers overview](https://web.dev/workers-overview/){:target='\_blank'}。

&emsp;&emsp;一个很好的例子是前文提到的图像处理 Web 应用程序[Squoosh](https://squoosh.app/){:target='\_blank'}，它**使用 Web Worker 来进行图像处理任务，让主线程可供用户与应用程序进行不中断的交互**。

&emsp;&emsp;[PROXX](https://proxx.app/){:target='\_blank'}也使用了 Web worker 和 Service Worker 相关技术，具体可参考[Proxx: Building Fast Web Applications](https://www.infoq.com/news/2019/06/proxx-fast-web-apps/){:target='\_blank'}。

&emsp;&emsp;Web Worker 有以下几个使用注意点：

- 同源限制：分配给 Worker 线程运行的脚本文件，必须与主线程的脚本文件同源。
- DOM 限制：Worker 线程所在的全局对象，与主线程不一样，无法读取主线程所在网页的 DOM 对象，也无法使用 document、window、parent 这些对象。但是，Worker 线程可以使用 navigator 对象和 location 对象。
- 通信联系：Worker 线程和主线程不在同一个上下文环境，它们不能直接通信，必须通过消息（postMessage）完成。
- 脚本限制：Worker 线程不能执行 alert()方法和 confirm()方法，但可以使用 XMLHttpRequest 对象发出 AJAX 请求。
- 文件限制：Worker 线程无法读取本地文件，即不能打开本机的文件系统（file://），它所加载的脚本，必须来自网络。

> 更多使用细节可参考阮一峰的[Web Worker 使用教程](https://www.ruanyifeng.com/blog/2018/07/web-worker.html){:target='\_blank'}

### Service worker

&emsp;&emsp;Service workers 主要是提供详细的**浏览器和网络/缓存间的代理服务**，如下图所以：

![service-worker](https://king-hcj.github.io/images/posts/pwa/service-worker.jpeg?raw=true)

&emsp;&emsp;2014 年，W3C（万维网联盟）公布了 Service Worker 的相关草案，但真正在生产环境被 Chrome 支持是在 2015 年，比微信小程序要早两年。

&emsp;&emsp;下图展示了 Service workers 的生命周期：

![sw-lifecycle](https://king-hcj.github.io/images/posts/pwa/sw-lifecycle.gif?raw=true)

&emsp;&emsp;而下面这张图则**几乎涵盖了 Service workers 所有最重要的知识点**：

> 原图来自 GitHub：[service-workers-101](https://github.com/delapuente/service-workers-101){:target='\_blank'}

![sw-lifecycle](https://king-hcj.github.io/images/posts/pwa/sw-lifecycle.webp?raw=true)

#### HTTP 缓存与 Service Worker 缓存

&emsp;&emsp;可能你会好奇，**用 Service Workers 来做缓存？HTTP 缓存它不香吗？**我们可以简单看看这两者的区别：

- HTTP 缓存中，Web 服务器可以使用 Expires 首部来通知 Web 客户端，它可以使用资源的当前副本，直到指定的“过期时间”。反过来，浏览器可以缓存此资源，并且只有在有效期满后才会再次检查新版本。
  使用 HTTP 缓存意味着你要依赖服务器来告诉你何时缓存资源和何时过期（当然，HTTP 缓存控制还包括 cache-control,last-modified,etag 等字段）。

- Service Workers 的强大在于它们**拦截 HTTP 请求**的能力，接受任何传入的 HTTP 请求，并决定想要如何响应。在你的 Service Worker 中，可以编写逻辑来决定想要缓存的资源，以及需要满足什么条件和资源需要缓存多久。一切尽归你掌控！（所以，出于安全考虑，Service Workers 要求只能由 Https 承载）

#### 注意事项

- Service worker 运行在 worker 上下文（self） --> 不能访问 DOM（这里其实和 Web Worker 是一样的）；
- 它设计为完全异步，同步 API（如 XHR 和 localStorage）不能在 service worker 中使用；
- 出于安全考量，Service workers 只能由 HTTPS 承载；
- 某些浏览器的用户隐私模式，Service Worker 不可用；
- 其生命周期与页面无关（关联页面未关闭时，它也可以退出，没有关联页面时，它也可以启动）。

#### 离线缓存

&emsp;&emsp;由于 Service Worker 的出现，我们不再尝试离线解决问题，而是让**开发人员自己动手解决缓存问题**。通过它可以控制缓存以及如何处理请求。这意味着您可以创建自己的模式。

&emsp;&emsp;缓存的模式有很多中，在[离线指南](https://web.dev/offline-cookbook/){:target='\_blank'}中，全面介绍了各种缓存的模式，在实践中，你可能需要根据 URL 和上下文同时使用多种模式。

&emsp;&emsp;当然，无论您做了多少缓存， Service Worker 进程都不会使用缓存，除非你告诉它何时以及如何使用。下图展示的是缓存优先的示意图：

![cache_prior](https://king-hcj.github.io/images/posts/pwa/cache_prior.png?raw=true)

&emsp;&emsp;其他一些缓存模式简单梳理如下：

![cache](https://king-hcj.github.io/images/posts/pwa/cache.png?raw=true)

#### 调试

![service_debug](https://king-hcj.github.io/images/posts/pwa/service_debug.png?raw=true)

#### 兼容性

- [Service Worker](https://caniuse.com/?search=Service%20Worker){:target='\_blank'}

![can_i_use_sw](https://king-hcj.github.io/images/posts/pwa/can_i_use_sw.png?raw=true)

- [manifest](https://caniuse.com/?search=manifest){:target='\_blank'}

![can_i_use_manifest](https://king-hcj.github.io/images/posts/pwa/can_i_use_manifest.png?raw=true)

&emsp;&emsp;可以看出，兼容性问题最大的其实还是在 manifest.json 的支持上。

### Worklet

&emsp;&emsp;Worklet 是一个非常轻量级、高度具体的 worker。它。它们使我们作为开发人员能够连接到浏览器渲染过程的各个部分（钩子），让开发人员可以访问渲染管道的底层部分。

&emsp;&emsp;当一个 web 页面正在被渲染，浏览器经过很多步骤。在这里我们需要关注的有四步：Style，Layout，Paint 和 Composite。

&emsp;&emsp;在展示网页时，浏览器会执行多个步骤。在这里我们主要关注四个步骤：Style，Layout，Paint 和 Composite（合成）。

![frame-full](https://king-hcj.github.io/images/posts/pwa/frame-full.jpeg?raw=true)

&emsp;&emsp;Paint 是浏览器将样式应用于每个元素的地方。与此渲染阶段挂钩的 Worklet 是 Paint Worklet。Paint Worklet 允许我们创建自定义图片，这个图片可以应用任何 CSS，比如 background-image 属性的值。

&emsp;&emsp;要创建一个 Worklet，就像所有 Worker 一样，我们在我们的主 javascript 文件中注册它，引用专用的 Worklet 文件。

```js
/* main.js */
CSS.paintWorklet.addModule('myWorklet.js');
```

&emsp;&emsp;在我们的 Worklet 文件中，我们可以创建自定义图像。该 paint 方法的工作方式与 Canvas API 非常相似。这是一个简单的黑白渐变示例。

```js
/* myWorklet.js */

registerPaint(
  'myGradient',
  class {
    paint(ctx, size, properties) {
      var gradient = ctx.createLinearGradient(0, 0, 0, size.height / 3);
      gradient.addColorStop(0, 'black');
      gradient.addColorStop(0.7, 'rgb(210, 210, 210)');
      gradient.addColorStop(0.8, 'rgb(230, 230, 230)');
      gradient.addColorStop(1, 'white');

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, size.width, size.height / 3);
    }
  }
);
```

&emsp;&emsp;最后，我们可以在 CSS 中使用这个新的 Worklet，我们创建的自定义图像将像任何其他背景图像一样应用。

```css
div {
  background-image: paint(myGradient);
}
```

&emsp;&emsp;除了 Paint Worklet，还有其他的 worklet 可以连接到渲染过程的其他阶段。Animation Worklet 连接到 Composite 阶段，而 Layout Worklet 连接到 Layout 阶段。

### 总结

&emsp;&emsp;Web worker，Service worker 和 worklet 都是将脚本运行在浏览器主线程之外单独的线程中，它们之间的区别是它们所应用的场景和他们的特性。

- Worklet 是浏览器渲染流中的钩子，可以让我们有浏览器渲染线程中底层的权限，比如样式和布局；
- Service worker 是浏览器和网络间的代理。通过拦截文档中发出的请求，service worker 可以直接请求缓存中的数据，达到离线运行的目的。
- Web worker 的通常目的是让我们减轻主线程中的密集处理工作。

## PWA 发展与现状

### PWA in China

&emsp;&emsp;看看 Google 官方宣传较多的 PWA 案例就会发现，FlipKart、Housing.com 来自印度；Lyft、华盛顿邮报来自北美；唯一来自中国的 AliExpress 主要开展的则是海外业务。

由于中国的特殊性，PWA 的前景在一定程度上比较悲观：

- 国内较重视 iOS，而 iOS 目前还不支持 PWA。
- 国内的 Android 实为「安卓」，不自带 Chrome 是一，可能还会有其他兼容问题。
- 国内厂商可能并不会像三星那样对推动自家浏览器支持 PWA 那么感兴趣。
- 依赖 GCM 推送的通知不可用，Web Push Protocol 还没有国内的推送服务实现。
- 国内 webview 环境较为复杂（比如微信），黑科技比较多。

&emsp;&emsp;反观印度，由于 Google 服务健全、标配 Chrome 的 Android 手机市占率非常高，PWA 的用户达到率简直直逼 100%，也难免获得无数好评与支持了。

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

![Microsoft](https://king-hcj.github.io/images/posts/pwa/microsoft.png?raw=true)

## 总结：App、小程序、快应用与 App Clips

[![App](https://king-hcj.github.io/images/posts/pwa/App.png?raw=true)](https://www.biaodianfu.com/app-next.html){:target='\_blank'}

> 高清大图可点击[这里](https://king-hcj.github.io/images/posts/pwa/App.png?raw=true){:target='\_blank'}查看。

## 推荐参考资料

- [Learn PWA](https://web.dev/learn/pwa/){:target='\_blank'}
- [渐进式 Web 应用](https://web.dev/progressive-web-apps/){:target='\_blank'}
- [讲讲 PWA](https://segmentfault.com/a/1190000012353473){:target='\_blank'}
- [6 myths of Progressive Web Apps](https://medium.com/samsung-internet-dev/6-myths-of-progressive-web-apps-81e28ca9d2b1){:target='\_blank'}
- [PWA 文档](https://www.wenjiangs.com/docs/pwa-docs){:target='\_blank'}
- [网站渐进式增强体验(PWA)改造：Service Worker 应用详解](https://lzw.me/a/pwa-service-worker.html){:target='\_blank'}
- [Web 离线应用解决方案——ServiceWorker](https://www.cnblogs.com/dojo-lzz/p/8047336.html){:target='\_blank'}
- [What self.skipWaiting() does to the service worker lifecycle](https://bitsofco.de/what-self-skipwaiting-does-to-the-service-worker-lifecycle/){:target='\_blank'}
- [ServiceWorker 工作原理、生命周期和使用场景](https://xie.infoq.cn/article/d6db2099c0064563a403c51ec){:target='\_blank'}

&emsp;&emsp;本文首发于[个人博客](https://king-hcj.github.io/2022/04/10/pwa-and-service-worker/){:target='\_blank'}，欢迎[指正和 star](https://github.com/king-hcj/king-hcj.github.io){:target='\_blank'}。
