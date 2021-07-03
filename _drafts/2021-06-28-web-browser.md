---
layout: post
title: Web浏览器面面观
categories: Chrome
description: Web 浏览器面面观
keywords: Chrome, Chrome V8, JavaScriptCore, JS, 前端, JavaScript
---

&emsp;&emsp;浏览器的主要功能就是向服务器发出请求，在浏览器窗口中展示HTML文档、PDF、图片、视频等网络内容。这些网络资源的位置由用户使用 URI（统一资源标示符）来指定指定。

&emsp;&emsp;获取在大多数人眼中，浏览器是这样的：

![大多数人眼中的浏览器](https://king-hcj.github.io/images/browser/black-box.png?raw=true)

&emsp;&emsp;一个展示前端，一个未知的中间层连接着网络世界；甚至，网络世界也可以省略：一台显示器，一个神秘的幕后黑盒。

&emsp;&emsp;如果你是一个前端开发者，甚至每天浏览器陪伴你度过的时光比女朋友陪伴你的都要久，想想那每一个令人“不是那么期待”的早晨，每一个争分夺秒完成任务的黄昏，只有浏览器和编辑器一直是你忠实的伙伴。而就连你一直离不开的VS Code编辑器，甚至也与浏览器有着莫大的渊源。
&emsp;&emsp;屏幕前的朋友，你熟悉自己身边的那些人吗，熟悉那些与你朝夕相伴的朋友吗？也许熟悉，也许补，那么，你是否愿意花些时间来熟悉一下这个在大量时间里与你有着莫大交集的浏览器的内心世界呢？

&emsp;&emsp;今天，我们就来一探究竟，走进这个我们与网络连接最紧密的中间地带。

## 浏览器发展史

### 浏览器的诞生与发展

&emsp;&emsp;第一款浏览器诞生于1990年，但是现代浏览器的雏形却出现在1980s年代。

&emsp;&emsp;一位名叫蒂姆·伯纳斯-李的英国科学家在 1980 年代初期创建了一个名为 Inquire 的计算机程序，当时他在总部位于瑞士的欧洲核研究组织（CERN，以其法文字母表示）工作。该计划旨在使在 CERN 工作的许多不同个人更容易共享信息。

&emsp;&emsp;1990年，第一款浏览器问世于Tim Berners-Lee 在 CERN 工作期间。您可能想知道 Web 浏览器到底是什么，简而言之，它是一个计算机程序，其目的是显示和检索数据。使用分配给存储在网络服务器上的每个数据集（网页）的 URL，它可以做到这一点。所以这意味着当您在浏览器中输入内容时，您实际上是在输入地址，浏览器将使用该地址来获取您想要查看的信息。浏览器的另一个关键功能是以易于理解的方式向您解释和呈现计算机代码。

&emsp;&emsp;浏览器简史：

![Timeline_of_the_Web_Browsers](https://king-hcj.github.io/images/browser/Timeline_of_the_Web_Browsers.jpg?raw=true)

&emsp;&emsp;早起的浏览器：

![The-Early-Browsers](https://king-hcj.github.io/images/browser/The-Early-Browsers.jpeg?raw=true)

&emsp;&emsp;浏览器诞生之后的故事，想必您已经早有耳闻：

- NCSA Mosaic，或简称Mosaic，是互联网历史上第一个获普遍使用和能够显示图片的网页浏览器。它是由伊利诺伊大学厄巴纳-香槟分校的NCSA组织在1993年所发表，并于1997年1月7日正式终止开发和支持。在当时人气爆发的大受欢迎。Mosaic的出现，算是点燃了后期互联网热潮的火种之一。后来网景导航者浏览器的开发工作，聘用了许多原有的Mosaic浏览器工程师，但是没有采用Mosaic网页浏览器的任何代码。传承网景浏览器代码的后裔为Firefox浏览器。

- Marc Andreesen 与同事 Jim Clark 于 1994 年成立了一家公司，当时 Mosaic 还是最流行的浏览器，它们计划打造出一个比 Mosaic 更好的浏览器，占领市场，让他们变得富有，并改变历史。他们的第一个浏览器被称为 Mosaic Netscape 0.9，不久更名 Netscape。得益于 JavaScript 和“partial-screen loading”（即使页面未完全加载，用户也可以开始阅读页面上的详细信息，这一个新概念极大地丰富了在线体验）等功能，它很快成为市场领导者，占据了浏览器市场上一半的份额，Netscape 的 IPO 也助长了日益增长的网络泡沫。

- Netscape 最初的成功向那些在计算机和互联网领域工作的人证明了时代已经永远改变了，这让当时业内最强大的参与者感到震惊。一家名为 Microsoft 的西雅图公司就是这样一家公司。Netscape 对微软来说是一个挑战，微软在 1990 年代后期创建了自己的浏览器 Internet Explorer，但它通常被视为劣质产品。由于其跨平台特性，人们可以在 Windows PC 或 Mac 或任何其他系统上使用 Netscape，这导致许多人猜测**操作系统的时代已经结束**。计算机将通过浏览器运行，浏览器可以在任何机器上运行，从而使软件行业民主化并降低其相当大的进入壁垒。**微软已经建立了销售其专有操作系统 Windows 的帝国**，因此将这种由 Netscape 等公司带头的发展视为一种威胁。微软通过对其产品的大量投资，成功地迅速扭转了浏览器行业的局面，使其与 Netscape 一样好。Windows 计算机在发布时已经安装了 Internet Explorer（Microsoft 的浏览器），这使其能够在市场上占据一席之地并不断发展壮大，最终在浏览器领域取得了胜利。

![Market_Share_During_the_Browser_Wars](https://king-hcj.github.io/images/browser/Market_Share_During_the_Browser_Wars.jpg?raw=true)

&emsp;&emsp;市场份额的快速下滑导致 Netscape 在 2000 年卖给了 AOL，2008 年Netscape最终灭绝。
&emsp;&emsp;到 2003 年，微软的 Internet Explorer 控制了 92% 以上的市场，完全扭转了 1995 年的局面。然而，虽然微软在不到十年的时间里成功地完全接管了浏览器市场，但很快就会出现其他竞争，再次重塑网络浏览器的历史。

- 在微软在 1990 年代后期崛起并让 Netscape 等公司屈服之后，浏览器的历史似乎已经走到了尽头。然而，正如最初发布后的情况一样，Internet Explorer 正在成为劣质产品。谷歌于 2008 年推出了其专有浏览器——Chrome。到 2012 年底，即推出仅四年后，谷歌 Chrome 浏览器凭借其易用性、跨平台功能、速度以及与标签和书签相关的特殊功能，取代 Internet Explorer 成为最受欢迎的浏览器。

- 在 2000 年代初期，可能是在微软将浏览器附加到其操作系统之后，Apple 发布了 Safari，一种专为 Mac 设计的浏览器，并成为目前市场上第二大浏览器。

- Internet Explorer 的流行度在 2000 年代后期逐渐减少，主要是因为它变得缓慢和过时，而 Microsoft 发现自己现在似乎已经是在外面观察浏览器世界。该公司不想继续错过，于是着手解决这个问题，但发现一个关键问题是“Internet Explorer”这个名字已经成为劣质浏览器的同义词。因此，为了尝试重新进入游戏，微软不得不重新命名，它通过发布 Edge 来实现，这是微软浏览器的最新版本，它收到了很多好评，但对于 Microsoft 来说，作为 Edge 可能为时已晚。

- IE浏览器终成时代之泪，Microsoft Edge成为Windows 11的默认浏览器。这是Windows系统更新20年来，IE的首次缺席，也是最后一次。早在Win10更新时微软就表示，将放弃更新IE转向开发新的浏览器Microsoft Edge。如今是彻底要和桌面上的IE说再见了。 —— IE 浏览器将在 2022 年安息，它也将从 Windows 11 中消失。

### 浏览器市场份额

&emsp;&emsp;截止2021年7月初，浏览器市场份额如下：

&emsp;&emsp;浏览器使用趋势：

![Web_Browser_Usage_Trends](https://king-hcj.github.io/images/browser/Web_Browser_Usage_Trends.png?raw=true)

&emsp;&emsp;浏览器市场份额：

![Web_Browser_Market_Share](https://king-hcj.github.io/images/browser/Web_Browser_Market_Share.png?raw=true)


&emsp;&emsp;国内浏览器市场份额：

![Web_Browser_Market_Share_CHN](https://king-hcj.github.io/images/browser/Web_Browser_Market_Share_CHN.png?raw=true)

如何查看浏览器市场份额：

- 国内浏览器市场份额
  - [浏览器市场份额](https://tongji.baidu.com/research/site){:target='\_blank'}
- 全球浏览器市场份额
  - [全球浏览器市场份额](https://gs.statcounter.com/){:target='\_blank'}
  - [w3counter](https://www.w3counter.com/globalstats.php){:target='\_blank'}


### 参考资料

- [The Story of the Web: A History Of Internet Browsers](https://www.internetadvisor.com/the-story-of-the-web-a-history-of-internet-browsers){:target='_blank'}
- [THE HISTORY OF THE WEB BROWSER](https://minimalistwpthemes.com/history-of-the-web-browser/){:target='_blank'}
- [浏览器简史](http://www.cnw.com.cn/zhuanti/2009-ie/){:target='_blank'}

## 浏览器架构

&emsp;&emsp;实际的浏览器是这样的：
![浏览器架构](https://king-hcj.github.io/images/browser/browser-diagram-full.png?raw=true)

&emsp;&emsp;而浏览器通用架构，通常是这样的：
![浏览器架构](https://king-hcj.github.io/images/browser/BROWSER_ARCHITECTURE.png?raw=true)


&emsp;&emsp;下面分别介绍浏览器的这几个部分：

- USER INTERFACE
- BROWSER ENGINE
- RENDERING ENGINE
&emsp;&emsp;所谓浏览器内核就是指浏览器最重要或者说核心的部分"Rendering Engine"，译为"渲染引擎"。负责对网页语法的解析，比如HTML、JavaScript，并渲染到网页上。所以浏览器内核也就是浏览器所采用的渲染引擎，渲染引擎决定这浏览器如何显示页面的内容和页面的格式信息。不同的浏览器内核对语法的解释也不相同，因此同一的网页在不同内核的浏览器显示的效果也会有差异。这也就是网页编写者在不同内核的浏览器中测试网页显示效果的原因。
![RENDERING ENGINE](https://king-hcj.github.io/images/browser/rendering_engines.png?raw=true)
- NETWORKING
- JAVASCRIPT INTERPRETER
- DISPLAY BACKEND
- DATA PERSISTENCE

&emsp;&emsp;各浏览器架构
![FIREFOX架构](https://king-hcj.github.io/images/browser/FIREFOX_ARCHITECTURE.png?raw=true)

![CHROME架构](https://king-hcj.github.io/images/browser/CHROME_ARCHITECTURE.png?raw=true)

![IE架构](https://king-hcj.github.io/images/browser/IE_ARCHITECTURE.png?raw=true)

![CPU](https://king-hcj.github.io/images/browser/CPU.png?raw=true)
![CPU](https://king-hcj.github.io/images/browser/memory.svg?raw=true)

- [Chrome 浏览器架构](https://xie.infoq.cn/article/5d36d123bfd1c56688e125ad3){:target='_blank'}
  - [Inside look at modern web browser (part 1)](https://developers.google.com/web/updates/2018/09/inside-browser-part1){:target='_blank'}
  - [Inside look at modern web browser (part 2)](https://developers.google.com/web/updates/2018/09/inside-browser-part2){:target='_blank'}
  - [Inside look at modern web browser (part 3)](https://developers.google.com/web/updates/2018/09/inside-browser-part3){:target='_blank'}
  - [Inside look at modern web browser (part 4)](https://developers.google.com/web/updates/2018/09/inside-browser-part4){:target='_blank'}
  - [图解浏览器的基本工作原理](https://zhuanlan.zhihu.com/p/47407398){:target='\_blank'}
  - [现代浏览器内部揭秘（第一部分）](https://github.com/xitu/gold-miner/blob/master/TODO1/inside-look-at-modern-web-browser-part1.md){:target='_blank'}
- [一文看透浏览器架构](https://segmentfault.com/a/1190000018277184){:target='_blank'}
- [PPT - Browser Architecture](https://sangbui.com/sb-files/BrowserArchitecture_ClientSide.pdf){:target='_blank'}
- [现代浏览器工作原理（一）](http://chuquan.me/2018/01/21/browser-architecture-overview/){:target='_blank'}
- [Web 浏览器相关的一些概念](https://keqingrong.cn/blog/2019-11-24-concepts-related-to-web-browsers){:target='_blank'}

- [THE BASIC FLOW OF RENDERING ENGINE](https://www.google.com.hk/search?newwindow=1&safe=strict&source=univ&tbm=isch&q=THE+BASIC+FLOW+OF+RENDERING+ENGINE&sa=X&ved=2ahUKEwjNopKj2b7xAhXP7XMBHcUyCs8Q7Al6BAgnEFM&biw=1536&bih=694&dpr=2#imgrc=BOuUFmUelYNhYM){:target='_blank'}

图片很精美：
- [Quantum Up Close: What is a browser engine?](https://hacks.mozilla.org/2017/05/quantum-up-close-what-is-a-browser-engine/){:target='_blank'}
  - [解密 Quantum：现代浏览器引擎的构建之道](https://github.com/xitu/gold-miner/blob/master/TODO/quantum-up-close-what-is-a-browser-engine.md){:target='_blank'}

- [掘金翻译计划](https://github.com/xitu/gold-miner/search?q=web+browser){:target='_blank'}


浏览器的内核引擎，基本上是四分天下：
Trident: IE 以Trident 作为内核引擎;
Gecko: Firefox 是基于 Gecko 开发;
WebKit: Safari, Google Chrome,傲游3,猎豹浏览器,百度浏览器 opera浏览器 基于 Webkit 开发。
Presto: Opera的内核，但由于市场选择问题，主要应用在手机平台--Opera mini
注：2013年2月Opera宣布转向WebKit引擎
注：2013年4月Opera宣布放弃WEBKIT，跟随GOOGLE的新开发的blink引擎

IE: Trident Engine
Firefox: Gecko Engine
Safari & Chrome: WebKit (Note: Chrome uses Blink after version 27)
Opera: Presto

- [Internet Explorer Architecture](https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/platform-apis/aa741312(v=vs.85)){:target='_blank'}

CHECK SUPPORTED CODE
http://fmbip.com/
http://www.browseemall.com/Compatibility/ValidateHTML
https://www.browseemall.com/Resources
https://html5test.com/
https://html5test.com/compare/browser/index.html

## 浏览器内核


## 浏览器基本原理

- [Design Documents](https://www.chromium.org/developers/design-documents){:target='_blank'}
- [浏览器运行原理】全程高能动画解析浏览器运行机制！](https://www.zhihu.com/zvideo/1318938663649800192){:target='_blank'}
  - https://www.zhihu.com/people/li-ming-44-11/zvideos
  - [Chromium_doc_zh](https://ahangchen.gitbooks.io/chromium_doc_zh/content/zh/){:target='_blank'}
- [万字详文：深入理解浏览器原理](https://zhuanlan.zhihu.com/p/96986818){:target='_blank'}

## 浏览器与JavaScript

## Chrome V8

- [JavaScript 引擎 V8 执行流程概述](http://blog.itpub.net/69912579/viewspace-2668277/){:target='_blank'}
- [V8 Ignition：JS 引擎与字节码的不解之缘](https://cnodejs.org/topic/59084a9cbbaf2f3f569be482){:target='_blank'}
- [认识 V8 引擎](https://zhuanlan.zhihu.com/p/27628685){:target='_blank'}
- [V8引擎详解（一）——概述](https://juejin.cn/post/6844904137792962567){:target='_blank'}

- [Chrome 为什么多进程而不是多线程？](https://www.zhihu.com/question/368712837){:target='_blank'}

## JavaScriptCore

- [深入剖析 JavaScriptCore](https://ming1016.github.io/2018/04/21/deeply-analyse-javascriptcore/){:target='\_blank'}
- [深入理解 JSCore](https://tech.meituan.com/2018/08/23/deep-understanding-of-jscore.html){:target='\_blank'}【关注一下参考资料】
- [JavaScriptCore 全面解析](https://juejin.cn/post/6844903765582053384){:target='\_blank'}
- [深入浅出 JavaScriptCore](https://www.jianshu.com/p/ac534f508fb0){:target='\_blank'}

## WebView

- [理解 WebView](https://github.com/xitu/gold-miner/blob/ec8862f2993f7eea977af6929d0b0785a86fd4e3/TODO1/understanding-webviews.md){:target='_blank'}

- [Android WebView基本使用](https://blog.csdn.net/lowprofile_coding/article/details/77928614){:target='_blank'}
- [7.5.1 WebView(网页视图)基本用法](https://www.runoob.com/w3cnote/android-tutorial-webview.html){:target='_blank'}
- [你真的了解webview么？](https://zhuanlan.zhihu.com/p/58691238){:target='_blank'}
- [Android：这是一份全面 & 详细的Webview使用攻略](https://www.jianshu.com/p/3c94ae673e2a/){:target='_blank'}
- [WebView你真的熟悉吗？看了才知道](https://www.jianshu.com/p/d2f5ae6b4927){:target='_blank'}
- [WebView](http://www.androidchina.net/tag/webview){:target='_blank'}

## Headless browser

- [什么是「无头浏览器」 （Headless browser），它有什么应用场景？](https://www.zhihu.com/question/314668782/answer/620975831){:target='_blank'}
- [啥是无头浏览器，都能干啥？一文说清楚](https://zhuanlan.zhihu.com/p/137843898){:target='_blank'}
- [Headless Chrome architecture](https://www.cnblogs.com/bigben0123/p/13880254.html){:target='_blank'}
- [What is a Headless Browser?](https://oxylabs.io/blog/what-is-headless-browser){:target='_blank'}
- [6 Popular Headless Browsers for Web Testing](https://www.keycdn.com/blog/headless-browsers){:target='_blank'}

- [Headless Chrome architecture](https://www.google.com.hk/search?q=Headless+Chrome+architecture&newwindow=1&safe=strict&tbm=isch&source=iu&ictx=1&fir=W9qdIOjuXPFz5M%252C1zvWEtXccmOnlM%252C_&vet=1&usg=AI4_-kRn8Gc3dK1IDfgodMG38_HcVuPoeQ&sa=X&ved=2ahUKEwiTvdzvuMPxAhW583MBHZnTA7wQ9QF6BAgiEAE#imgrc=W9qdIOjuXPFz5M){:target='_blank'}

&emsp;&emsp;Puppeteer 是一个 node 库，他提供了一组用来操纵 Chrome 的 API, 通俗来说就是一个 headless chrome 浏览器 (当然你也可以配置成有 UI 的，默认是没有的)。既然是浏览器，那么我们手工可以在浏览器上做的事情 Puppeteer 都能胜任, 另外，Puppeteer 翻译成中文是”木偶”意思，所以听名字就知道，操纵起来很方便，你可以很方便的操纵她去实现：

1） 生成网页截图或者 PDF
2） 高级爬虫，可以爬取大量异步渲染内容的网页
3） 模拟键盘输入、表单自动提交、登录网页等，实现 UI 自动化测试
4） 捕获站点的时间线，以便追踪你的网站，帮助分析网站性能问题

&emsp;&emsp;Puppeteer 跟 webdriver 以及 PhantomJS 最大的 的不同就是它是站在用户浏览的角度，而 webdriver 和 PhantomJS 最初设计就是用来做自动化测试的，所以它是站在机器浏览的角度来设计的，所以它们 使用的是不同的设计哲学。

### 坑点

- Cannot find module ‘puppeteer/DeviceDescriptors‘

  - [解决：Error: Cannot find module ‘puppeteer/DeviceDescriptors‘ 问题](https://blog.csdn.net/weixin_38190633/article/details/108663172){:target='\_blank'}
  - [DeviceDescriptors.ts](https://github.com/puppeteer/puppeteer/blob/main/src/common/DeviceDescriptors.ts){:target='\_blank'}
  - 解决：`await page.emulate(puppeteer.devices['iPhone 6']);`

- Page.printToPDF 操作一定要在无头模式下进行，有头模式无法调用。
- Puppeteer 浏览器窗口大小 window size 设置方法：

  - 通过 browser 对象参数的 defaultViewport 设置无法改变浏览器窗口大小
  - 使用 page 的 page.setViewport()方法也无效
  - 只能使用 browser 对象的 args: [`--window-size=800,800`]参数设置

- [puppeteer](https://github.com/puppeteer/puppeteer/){:target='\_blank'}
- [Puppeteer 入门教程](https://www.r9it.com/20171106/puppeteer.html){:target='\_blank'}
- [API 文档](https://github.com/puppeteer/puppeteer/blob/main/docs/api.md){:target='\_blank'}

- [网站性能测试利器:Puppeteer](https://cloud.tencent.com/developer/article/1086109){:target='\_blank'}
- [结合项目来谈谈 Puppeteer](https://zhuanlan.zhihu.com/p/76237595){:target='\_blank'}

## 相伴日久 —— 浏览器

&emsp;&emsp;作为一名前端开发人员，学习浏览器的内部工作原理将有助于我们在开发中作出更明智的决策，并理解那些最佳开发实践的个中缘由。在前端面试中，也有一道经典的面试题 ——【从您在地址栏输入 google.com 直到您在浏览器屏幕上看到 Google 首页的整个过程中都发生了些什么】。

- [浏览器是如何工作的：Chrome V8 让你更懂 JavaScript](https://segmentfault.com/a/1190000037435824){:target='\_blank'}
- [浏览器的工作原理：新式网络浏览器幕后揭秘](https://www.html5rocks.com/zh/tutorials/internals/howbrowserswork/){:target='\_blank'}
- [从浏览器多进程到 JS 单线程，JS 运行机制最全面的一次梳理](https://segmentfault.com/a/1190000012925872){:target='\_blank'}
- [🤔 移动端 JS 引擎哪家强？美国硅谷找......](https://mp.weixin.qq.com/s/cV3RH72YKd6jRYBFhjJ-5w){:target='\_blank'}
- [Page Lifecycle API](https://developers.google.com/web/updates/2018/07/page-lifecycle-api#overview_of_page_lifecycle_states_and_events){:target='\_blank'}
- [从 V8 角度揭秘你不知道的面试八股文](https://mp.weixin.qq.com/s/NkaGseRlLKcERx6rpouCFA){:target='_blank'}
- [高性能 JavaScript 引擎 V8 - 垃圾回收](https://mp.weixin.qq.com/s/TnaQRMpJaxxIUIZS2MK9-g){:target='_blank'}

- [自主研发一款浏览器内核的难度到底有多大？](https://www.zhihu.com/question/290564335/answer/474202037){:target='\_blank'}


- [QQ浏览器是基于chrome内核开发的吗？](https://zhidao.baidu.com/question/2058022048028049667.html){:target='_blank'}
- [新版Microsoft Edge（Chromium内核）介绍](https://baijiahao.baidu.com/s?id=1654951353372013675){:target='_blank'}
  - Microsoft Edge (EdgeHTML)
  - Chromium


- [浏览器市场占有率分析](https://zhuanlan.zhihu.com/p/187066428){:target='\_blank'}
