---
layout: post
title: 小程序的现在与未来
categories: JavaScript
description: 小程序发展史
keywords: JS, 前端, JavaScript, 小程序
---

![Jump]({{site.url}}{{site.baseurl}}/images/posts/mini_program/Jump.gif?raw=true)

&emsp;&emsp;2017 年 12 月 28 日，一款叫做《跳一跳》的微信小游戏横空出世，跳出一片繁华；2018 年 5 月，研究公司 QuestMobile 发布了微信小游戏《跳一跳》的数据，这款只有 4MB 大小的游戏截至 2018 年 3 月份已经积累了 3.9 亿玩家。

&emsp;&emsp;而跳一跳发布的这一天，距离微信声势浩大的提出“小程序”的概念已经很久了，“小程序”却一直不温不火，并没有广泛的被普通用户使用，跳一跳让普通用户、商业开发者嗅到了真正的商机。

![小程序]({{site.url}}{{site.baseurl}}/images/posts/mini_program/mini.png?raw=true)

## 人尽道、当年此日，诞生豪杰 —— 小程序的诞生

&emsp;&emsp;如果我们将时间拨回到 2017 年 1 月 9 日 0 点：万众瞩目的微信第一批微信小程序正式低调上线，用户可以体验到各种各样微信小程序提供的服务。

&emsp;&emsp;小程序类似传统的 Hybrid 架构，对渲染性能要求较高的组件，通过 Native 组件来实现，以弥补传统 Web 页面性能上的不足。而小程序主要有以下一些优势和特点：

![小程序的特点]({{site.url}}{{site.baseurl}}/images/posts/mini_program/mini_feature.png?raw=true)

&emsp;&emsp;而这，从某种意义上来说，并不算是小程序理念的第一次提出。

&emsp;&emsp;2013 年 8 月 22 日，百度 CEO 李彦宏在百度世界大会上正式宣布推出轻应用开放平台，提出“移动搜索+轻应用”是满足海量**中长尾**应用开发者需求的最佳模式。当时的轻应用主要有以下特点：

- 第一，无需下载，即搜即用：以往，开发者付出高昂成本拉动用户下载应用，每隔十天半月还要推送更新版本，一不小心就遭用户卸载，通过轻应用，开发者后端的每一处更新在前端都自动呈现，无需骚扰用户；
- 第二，破壳检索，智能分发：开发者开发的应用不再是信息孤岛，里面的内容都可以被索引，这跟原生应用形成明显的差别。在应用商店里，只有用户输入明确的 App 名称，例如“滴滴打车”，这个应用才能够被分发。而现在，移动搜索中自然表达的所有与打车有关的需求，比如“我要打车”、“从国贸到雍和宫”等，都将导向开发者开发的打车类应用，大大增加应用的曝光量和使用率，从源头解决分发难题；
- 第三，功能强大，全能体验：轻应用能够帮应用调起语音、摄像头、定位、存储等手机本地或云端的多种能力，让应用的功能更强大；
- 第四，订阅推送，沉淀用户：轻应用不仅支持用户搜索时实现调用，还支持用户主动订阅。如果用户有订阅需求并添加应用，相关开发者就能够将用户沉淀下来，并对用户进行持续、精准的信息和服务推送。

&emsp;&emsp;2016 年 Google 提出的 PWA 的概念，于 2017 年正式落地，2018 年迎来重大突破，全球顶级的浏览器厂商，Google、Microsoft、Apple 已经全数宣布支持 PWA 技术，但是由于国内技术环境的特殊性，PWA 可算籍籍无名。

&emsp;&emsp;小程序界的先行者 —— 轻应用、PWA 的结局，想必你已经清楚，最终成功的，只有微信推出的小程序，不禁使人感叹：赤兔无人用，当须吕布骑。

## 莫看江面平如镜，要看水底万丈深 —— 小程序的技术原理

### 小程序的运行环境

![Operating environment]({{site.url}}{{site.baseurl}}/images/posts/mini_program/operating_environment.png?raw=true)

### 双线程模型

&emsp;&emsp;我们都知道，微信小程序采用双线程模型，将逻辑层与渲染层分开，如下图所示：

![小程序]({{site.url}}{{site.baseurl}}/images/posts/mini_program/mini_program.png?raw=true)

#### 逻辑层与渲染层

&emsp;&emsp;小程序的运行环境分成渲染层和逻辑层，其中 WXML 模板和 WXSS 样式工作在渲染层，JS 脚本工作在逻辑层。

&emsp;&emsp;小程序开发框架的逻辑层使用 JavaScript 引擎为小程序提供开发者 JavaScript 代码的运行环境以及微信小程序的特有功能。**逻辑层将数据进行处理后发送给视图层，同时接受视图层的事件反馈**。开发者写的所有代码最终将会打包成一份 JavaScript 文件，并在小程序启动的时候运行，直到小程序销毁。这一行为类似 ServiceWorker，所以逻辑层也称之为 App Service。

![逻辑层与渲染层]({{site.url}}{{site.baseurl}}/images/posts/mini_program/app_rendering.png?raw=true)

#### 双线程的优势与不足

![双线程]({{site.url}}{{site.baseurl}}/images/posts/mini_program/Thread.png?raw=true)

#### 双线层交互的生命周期

&emsp;&emsp;双线程交互的什么周期，一图胜千言：

![双线程生命周期]({{site.url}}{{site.baseurl}}/images/posts/mini_program/page-lifecycle.png?raw=true)

#### 小程序运行机制

![小程序运行机制]({{site.url}}{{site.baseurl}}/images/posts/mini_program/mini_run.png?raw=true)

### 页面生命周期

![页面生命周期]({{site.url}}{{site.baseurl}}/images/posts/mini_program/life-cycle.png?raw=true)

### 页面路由

- 在小程序中所有页面的路由全部由框架进行管理；
- 框架以**栈的形式**维护了当前的所有页面，开发者可以使用 getCurrentPages() 函数获取当前页面栈；
- 小程序不允许打开超过五个层级的页面。

### API

&emsp;&emsp;小程序开发框架提供丰富的微信原生 API，可以方便的调起微信提供的能力，如获取用户信息，本地存储，支付功能等，类别上主要可以分为：

- 事件监听 API；
- 同步 API；
- 异步 API，异步 API 支持 callback & promise 两种调用方式；
- 开通并使用微信云开发，即可使用云开发 API，在小程序端直接调用服务端的云函数。

### 云开发

&emsp;&emsp;微信云开发是微信团队联合腾讯云推出的专业的小程序开发服务。开发者可以使用云开发快速开发小程序、小游戏、公众号网页等，并且原生打通微信开放能力。开发者无需搭建服务器，可免鉴权直接使用平台提供的 API 进行业务开发。

![cloud]({{site.url}}{{site.baseurl}}/images/posts/mini_program/cloud.png?raw=true)

<!-- - [小程序原理科普](https://zhuanlan.zhihu.com/p/142381013){:target='\_blank'}
- [小程序原理初探](https://www.jianshu.com/p/36c7a52ab6a0){:target='\_blank'}
- [浅谈小程序运行机制](https://segmentfault.com/a/1190000019131399){:target='\_blank'}

- [聊聊 JavaScript 与浏览器的那些事 - 引擎与线程](https://hijiangtao.github.io/2018/01/08/JavaScript-and-Browser-Engines-with-Threads/){:target='\_blank'}
- [一起脱去小程序的外套 - 微信小程序架构解析](https://juejin.cn/post/6844903461528535048){:target='\_blank'}
- [微信小程序底层的实现原理是怎样的？](https://www.zhihu.com/question/50920642){:target='\_blank'}
- [小程序底层实现原理及一些思考](https://zhuanlan.zhihu.com/p/81775922){:target='\_blank'}
- [微信小程序架构原理](http://eux.baidu.com/blog/fe/%E5%BE%AE%E4%BF%A1%E5%B0%8F%E7%A8%8B%E5%BA%8F%E6%9E%B6%E6%9E%84%E5%8E%9F%E7%90%86){:target='\_blank'}
- [微信小程序架构分析 (上)](https://zhuanlan.zhihu.com/p/22754296){:target='\_blank'} -->

<!-- 小程序的底层原理是什么，为什么只有微信、支付宝等超级 app 才有小程序

- [小程序不仅仅是微信，很多平台都有小程序！](https://baijiahao.baidu.com/s?id=1725245019860014705){:target='\_blank'} -->

## 若待上林花似锦，出门俱是看花人 —— 小程序前景

<!-- 便觉眼前生意满，东风吹水绿参差 -->

&emsp;&emsp;为什么要做小程序？用张小龙的话说是因为越来越多的人通过微信公众号来宣传、推广和销售产品，因为公众号的开发、获取用户和传播成本更低，并且为了更好的服务客户，拆分出来的服务号却没能提供更好的服务，所以微信有必要再研究出一个新的形态，来满足商家直接通过微信服务顾客的需求。这也是一些自带场景属性的平台化 app 涉足小程序的一个重要原因。

&emsp;&emsp;随着微信小程序的推出，一些的**大厂**也搭起了小程序的平台，一时间，小程序百花齐放。

![百花齐放的小程序]({{site.url}}{{site.baseurl}}/images/posts/mini_program/mini_other.png?raw=true)

&emsp;&emsp;从上图不难发现，目前主流 App 利用他们的高流量，在自己的生态下提供一种开放能力，每种 App 都有相应的优势和政策，帮助开发者更有效的宣传和营销。比如：

- QQ 小程序，连接年轻用户的新方式，覆盖 8 亿新生代活跃网民；
- 百度智能小程序，智能连接人与信息、人与服务、人与万物的开放生态，依托以百度 App 为代表的全域流量，通过百度 AI 开放式赋能， 精准连接用户，无需下载安装便可享受智慧超前的使用体验；
- 支付宝小程序是一种全新的开放模式,让合作伙伴有机会分享支付宝及阿里集团多端流量和商业能力,为用户提供更好的体验,助力商家经营升级；
- 字节跳动系小程序（抖音+头条新闻+西瓜视频）是依托程序生态内的开放能力。

&emsp;&emsp;据 「中研网数据」 显示，2021 年**微信小程序日活超过 4.5 亿**，**全网小程序数量突破 700 万个**，小程序**开发者突破 300 万**，微信为开发者支付的**广告分成接近百亿**，小程序服务在加速普及。

![小程序行业前景]({{site.url}}{{site.baseurl}}/images/posts/mini_program/mini_foreground.png?raw=true)

&emsp;&emsp;综上，小程序看起来市场广阔，前景无限，但是似乎有能力提供开放平台的都是一些超级 App。在当前**传统大型企业转型、互联网生态逐渐趋于政策性开放**的背景下，普通 App 难道就没法分一杯羹，获得运行小程序的能力吗？

## 旧时王谢堂前燕,飞入寻常百姓家

&emsp;&emsp;也许大家潜意识里一直觉得，只有那些超级 APP 才具备运行小程序的能力，而且日常生活中使用小程序场景最多的无非就是微信、支付宝、头条、百度这几个 APP，那你们有没有想过「自己的 APP 也可以具备小程序的运行能力」呢？

&emsp;&emsp;虽然互联网大厂并未将这部分小程序运行能力开放出来，但是我们也不必望而生羡，因为小程序技术不再是 BAT 的专属，市面上早就推出了类似技术能力，我们一般称之为**小程序容器技术**。

&emsp;&emsp;今天要给大家推荐的也正是目前在 Github 很热门的前端容器技术 —— FinClip。
&emsp;&emsp;FinClip 是凡泰极客推出的小程序容器技术，一个**可以让任何 APP 都能具备小程序运行能力的前端容器技术**，只需简单集成 FinClip SDK
,即可在 iPhone、Android、Windows、Linux、macOS、统信等平台下的应用中运行你的小程序，这意味着，移动端、PC 端、车载设备、智能电视、智能手表都能运行小程序了。同时，它还提供一个后台管理系统，**统一管理小程序的上架和下架**。

<!-- 小程序容器技术可以带来什么，为什么值得接入（综合包体积、用户体验等） -->

&emsp;&emsp;FinClip 小程序容器技术主要有以下几点技术优势：

- **多平台终端兼容**：自带多终端小程序 SDK，简单集成后即可在 iPhone，Android，Windows，Linux，macOS 平台下的应用中运行你的小程序。

![Cross Platform]({{site.url}}{{site.baseurl}}/images/posts/mini_program/cross_platform.png?raw=true)

- **SDK 体积小**：移动 App 集成 FinClip SDK 后，安装包的体积仅仅增大了不到 3MB;

- **FinClip 完全遵循兼容微信小程序的开发标准与规范**：如果你有现成的微信小程序，可以不改一行代码直接放进你的 App 里面，运行效果和在微信上面保持一致，不必额外二次开发和改造，大大节省了人力成本。此外，在 FinClip 上架的小程序不需要修改一行代码也能具备用 微信登录 能力，可基于微信生态建立对应的用户登录体系。

![Adaptation]({{site.url}}{{site.baseurl}}/images/posts/mini_program/Adaptation.png?raw=true)

- 支持灰度发布功能：FinClip 提供了面向业务与运营的灰度发布功能，您可以针对不同人群、不同地域设置不同条件，具备超级 APP 才拥有的“千人千面”灵活效果

- 提供小程序 IDE 开发工具 —— FIDE：界面与微信小程序的开发工具类似，自带调试和真机预览，简单易上手，同时**支持小程序生成 APP**，可以将已有小程序代码导出为 IOS 与 Android 中可用的工程文件（也是近期开发者最喜欢的功能）。

![Generate app]({{site.url}}{{site.baseurl}}/images/posts/mini_program/generate_app.png?raw=true)

&emsp;&emsp;你可以在这个 FIDE 里面，对现有项目进行二次开发，扩展功能和接口，同时它们还支持「小程序一键转换成 APP」，可以将已有小程序代码导出为 IOS 与 Android 中可用的工程文件，由于导出的工程文件已经集成了 FinClip SDK ，所以直接拥有小程序的运行能力，后续可在这个 APP 上继续上架更多小程序，自建自己的小程序生态。

&emsp;&emsp;并且 FIDE 中还包含各类扩展插件和接口（支付、人脸识别、音视频、OCR 等），开发者可自主勾选所需的支持插件，从而增强所生成 App 原生能力。

&emsp;&emsp;最后，通过一个脑图简单总结一下：

![FinClip]({{site.url}}{{site.baseurl}}/images/posts/mini_program/FinClip.png?raw=true)

<!-- 强调功能点：小程序转 APP [What? 从小程序反向生成 App?!](https://www.finclip.com/blog/miniapp-to-app/){:target='\_blank'} -->

<!-- 附产品资料和技术文章
1：https://www.finclip.com/blog/miniapp-framework-platform/
2、https://www.finclip.com/blog/wei-shi-yao-yao-shi-yong-xiao-cheng-xu/
3、视频介绍：https://www.bilibili.com/video/BV11F411B7aa?spm_id_from=333.999.0.0
4、视频介绍：https://www.bilibili.com/video/BV12Y41177dN?spm_id_from=333.337.search-card.all.click

- [原来微信小程序已经可以在自己的 APP 上架运行了](https://mp.weixin.qq.com/s/HW0EUCAecgudlc-4J9aV0A){:target='\_blank'} -->
<!-- - [十大小程序开放平台](https://www.maigoo.com/top/424551.html){:target='\_blank'}
- [即速应用发布《小程序 2020 年中研究分析报告》：全网小程序数量超 550 万 日活超 4.4 亿](https://www.donews.com/news/detail/2/3106427.html){:target='\_blank'} -->

## 参考资料

- 中研网数据
- 微信官方文档
- [小程序不仅仅是微信，很多平台都有小程序！](https://baijiahao.baidu.com/s?id=1725245019860014705){:target='\_blank'}
- [FinClip 简介](https://www.yuque.com/docs/share/b876b1f1-982f-43a7-a0ca-e6b8392689b6){:target='\_blank'}
- [小程序鼻祖 —— 在国内逐渐消亡的 PWA 可以带给我们哪些启示？](https://segmentfault.com/a/1190000041729491){:target='\_blank'}
