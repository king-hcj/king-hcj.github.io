---
layout: post
title: 前端应该知道的：开放图谱协议（The Open Graph protocol）
categories: JavaScript
description: The Open Graph protocol
keywords: JS, 前端, JavaScript
---

> Open Graph 是一种互联网协议，最初由 Facebook 创建，用于标准化网页中元数据的使用，以表示页面的内容。

&emsp;&emsp;看到这个标题，也许你会陷入疑惑，什么是开放图谱协议（The Open Graph protocol）？我为什么好像很少见到它？它到底有什么用呢？确实，对于很多前端开发来说，开放图谱协议（The Open Graph protocol）是一个比较陌生的概念。

## 什么是 Open Graph Protocol（开放图谱协议）

&emsp;&emsp;Open Graph Protocol（开放图谱协议），简称 OG 协议。它是 Facebook 在 2010 年 F8 开发者大会公布的一种网页元信息（Meta Information）标记协议，属于 Meta Tag （Meta 标签）的范畴，是一种为社交分享而生的 Meta 标签，**用于标准化网页中元数据的使用，以表示页面的内容**。它允许在 Facebook 上，其他网站能像 Facebook 内容一样具有丰富的“图形”对象，进而促进 Facebook 和其他网站之间的集成。

&emsp;&emsp;简单来说，该协议就是用来标注页面的类型和描述页面的内容。其灵感来自 [Dublin Core](https://www.ruanyifeng.com/blog/2007/03/dublin_core.html){:target='\_blank'}、link-rel canonical、Microformats 和 RDFa（可自行百度）。虽然存在许多不同的技术和模式并且可以组合在一起，但**没有一种技术可以提供足够的信息来丰富地表示社交图中的任何网页**。Open Graph 协议建立在这些现有技术的基础上，并为开发人员提供了一个实施方案。开发人员的简单性是 Open Graph 协议的一个关键目标，它为许多技术设计决策提供了信息。

&emsp;&emsp;看了这么多，好像还是不理解什么是开发图谱协议？

&emsp;&emsp;举个简单的例子，当我们分享一个链接（URL）到给朋友时，在有的 App 上它只是一个链接，而在有的 APP 上，他却可以包含图片，如下图所示：

![extensions](https://i.stack.imgur.com/ERx58.jpg)

&emsp;&emsp;像飞书、WhatsApp、Twitter、Facebook 等社交软件，都会根据链接去抓取您给定 URL 的内容，以确定要包含哪些属性以进行共享。您可以通过在页面的头部代码中包含 `og:tags` 来显式定义属性；如果没有这些显示定义的信息，这些社交软件将在完成对给定 URL 的页面抓取后推断属性，然后使用这些属性为所选服务组装共享框并进行展示。

&emsp;&emsp;其实这一切也是依赖于具体 app 的实现的，对于同一 URL，我们可以看看在飞书和微信上的不同形态：

微信：
![extensions](https://king-hcj.github.io/images/posts/javascript/og_wx.png?raw=true)

飞书：
![extensions](https://king-hcj.github.io/images/posts/javascript/og_fs.png?raw=true)

## 为什么需要使用 OG 协议？

&emsp;&emsp;构建内容和维护网站可能需要大量时间。我们如何确保我们的内容在互联网上的社交提要上共享时脱颖而出？先来看下有没有 OG 协议是同一个链接被解析的差别：

&emsp;&emsp;没有开放图谱协议时：此时社交软件正确地获取了页面的标题和描述，但它看起来并不诱人，所含有的信息也有限。

![simple-twitter-card](https://king-hcj.github.io/images/posts/javascript/simple-twitter-card.jpeg?raw=true)

&emsp;&emsp;有开放图谱协议时：

![large-image-twitter-card](https://king-hcj.github.io/images/posts/javascript/large-image-twitter-card.jpeg?raw=true)

&emsp;&emsp;互联网上的内容通常至少有一个目标——与他人分享。如果您只是将它发送给一个朋友，这可能不一定重要，但是如果您想分享它或希望它在任何使用丰富预览的社交网络或应用程序上共享，您会希望该预览同样尽可能有效。像下面这样丰富而有效的信息将有助于鼓励人们点击查看您的内容。

&emsp;&emsp;如果您没有开放谱图协议标签会怎样？也许对于网站内容来说不会有什么影响，但你的内容将很难从互联网上大量其他内容中脱颖而出。

![吸引眼球的OG协议](https://king-hcj.github.io/images/posts/javascript/og_em.png?raw=true)

## 如何给网站添加 OG 协议

### 基础属性

&emsp;&emsp;要将您的网页转换为图形对象，您需要向页面添加**基本元数据**。四个基本开放图形标签是：

- `og:title` - 指定您想要共享的标题。这通常与您网页的`<title>`标签相同，例如“The Rock”。
- `og:type`- 对象的类型，例如“video.movi​​e”。根据您指定的类型，可能还需要其他属性。
- `og:image` - 一个图片 URL。
- `og:url` - 指定您想要共享的 URL/当前页面的 URL（可以是缩短的 URL），例如，“https://www.imdb.com/title/tt0117500/”。

![OG](https://king-hcj.github.io/images/posts/javascript/og_base.png?raw=true)

&emsp;&emsp;在您的网站上放置标签时，您应该将其`<head>`与任何其他元数据一起放置。使用的标签将是一个`<meta>`标签，应该看起来像这样的模式：

```html
<meta property="“[NAME]”" content="“[VALUE]”" />
```

&emsp;&emsp;例如，以下是 IMDB 上 The Rock 的 Open Graph 协议标记：

```html
<html prefix="og: https://ogp.me/ns#">
  <head>
    <title>The Rock (1996)</title>
    <meta property="og:title" content="The Rock" />
    <meta property="og:type" content="video.movie" />
    <meta property="og:url" content="https://www.imdb.com/title/tt0117500/" />
    <meta
      property="og:image"
      content="https://ia.media-imdb.com/images/rock.jpg"
    />
    ...
  </head>
  ...
</html>
```

### `og: type`

&emsp;&emsp;开放图谱协议有一些它支持的网站“type”，包括网站、文章或视频等类型。

&emsp;&emsp;设置开放图标签时，您需要了解哪种类型对您的网站更有意义。如果您的页面专注于单个视频，则使用“video”类型可能是有意义的。如果它是一个没有特定垂直行业的一般网站，您可能更适合使用“website”类型。

### 其他一些值得添加的开放图标签

&emsp;&emsp;这里还有一些值得添加的内容：

- `og:description`：您的页面的描述。类似 `og:title`，这通常应该和您网站的`<meta type=“description”>`标签相同，当然，你也可以使其不同。
- `og:locale`：如果你想本地化你的标签，包含 `locale` 可能是有意义的。格式为 `language_TERRITORY`，其中默认为 `en_US`.
- `og:site_name`：您的内容所在的整个网站的名称。如果您在博客文章页面上，您可能会使用该博客文章的标题作为 `title`，其中 `site_name` 将是您博客的名称。
- `og:video`：有支持您的内容的视频吗？这是包含它的机会。使用此标签为您的视频添加链接。

&emsp;&emsp;这些标签将以与以前相同的模式添加：

```html
<meta property="“[NAME]”" content="“[VALUE]”" />
```

### 开放图中的图像

&emsp;&emsp;虽然添加您的图像`og:image`通常就足够了，但有时让您的图像正确显示可能具有挑战性。如果您似乎遇到了麻烦，开放图标准包括一些图像标签，例如`og:image:url`vs`og:image:secure_url`以及`og:image:width`和`og:image:height`。

&emsp;&emsp;尽量确保您遵循[开放图形文档](https://ogp.me/#structured){:target='\_blank'}中的所有注释和示例。此外，一些社交网络有图像要求。例如，[Twitter 要求](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/summary-card-with-large-image){:target='\_blank'}比例为 2:1，最小尺寸为 300x157，最大尺寸为 4096x4096，小于 5MB，JPG、PNG、WEBP 或 GIF 格式。

### Twitter 和其他使用开放图的社交媒体网络

&emsp;&emsp;大多数社交网络都遵循开放图标准的基础，但其中一些还包括自己的扩展，以帮助自定义其生态系统中的外观。

&emsp;&emsp;例如，Twitter 允许您指定`twitter:card`，这是您在展示您的网站时可以使用的“卡 ​​ 片”类型。此时，他们的卡类型包括：

- summary
- summary_large_image
- app
- player

&emsp;&emsp;这将帮助您选择如何在其 Feed 中使用您的链接。`summary_large_image` 例如，如果您选择，只要您在 `og:image` 标签中提供链接，Twitter 就会显示带有高分辨率大图片的链接。

&emsp;&emsp;以下是有关如何在某些社交媒体网站上使用开放图标签的文档的一些快速参考：

- [Twitter](https://developer.twitter.com/en/docs/tweets/optimize-with-cards/guides/getting-started){:target='\_blank'}
- [Facebook](https://developers.facebook.com/docs/sharing/webmasters/){:target='\_blank'}
- [Pinterest](https://developers.pinterest.com/docs/rich-pins/overview/?){:target='\_blank'}
- [LinkedIn](https://www.linkedin.com/help/linkedin/answer/46687/making-your-website-shareable-on-linkedin?lang=en){:target='\_blank'}

### 测试您的开放图标签

&emsp;&emsp;如果您遇到困难，请使用社交媒体网络的工具测试您的标签，看看您是否能找到问题。一些社交网络也提供了帮助我们调试标签的工具。一旦您确定您的标签实际显示在您网站的源代码中，您就可以预览您的网站在 Feed 中的外观。

- [Twitter](https://cards-dev.twitter.com/validator){:target='\_blank'}
- [Facebook](https://developers.facebook.com/tools/debug/){:target='\_blank'}
- [Pinterest](https://developers.pinterest.com/tools/url-debugger/){:target='\_blank'}

### 进一步探究开放图标签

&emsp;&emsp;虽然其中大部分应该涵盖一个基本网站，但还有一些标签可能会帮助您和您的企业在整个社交网络中被发现。如果您有兴趣深入研究，[The Open Graph protocol](https://ogp.me/){:target='\_blank'}文档在提供所有可用标签的列表供您使用方面做得很好。

### 示例

&emsp;&emsp;如果您只是在寻找入门示例，那么在为博客文章设置标签时，您应该最终得到以下结果：

```html
<meta property="og:site_name" content="Colby Fayock" />
<meta
  property="og:title"
  content="Anyone Can Map! Inspiration and an
introduction to the world of mapping - Colby Fayock"
/>
<meta
  property="og:description"
  content="Chef Gusteau was a visionary who created food experiences for the world to enjoy. How can we take his lessons and apply them to the world of…"
/>
<meta
  property="og:url"
  content="https://www.colbyfayock.com/2020/03/anyone-can-map-inspiration-and-an-introduction-to-the-world-of-mapping/"
/>
<meta property="og:type" content="article" />
<meta property="article:publisher" content="https://www.colbyfayock.com" />
<meta property="article:section" content="Coding" />
<meta property="article:tag" content="Coding" />
<meta
  property="og:image"
  content="https://res.cloudinary.com/fay/image/upload/w_1280,h_640,c_fill,q_auto,f_auto/w_860,c_fit,co_rgb:232129,g_west,x_80,y_-60,l_text:Source%20Sans%20Pro_70_line_spacing_-10_semibold:Anyone%20Can%20Map!%20Inspiration%20and%20an%20introduction%20to%20the%20world%20of%20mapping/blog-social-card-1.1"
/>
<meta
  property="og:image:secure_url"
  content="https://res.cloudinary.com/fay/image/upload/w_1280,h_640,c_fill,q_auto,f_auto/w_860,c_fit,co_rgb:232129,g_west,x_80,y_-60,l_text:Source%20Sans%20Pro_70_line_spacing_-10_semibold:Anyone%20Can%20Map!%20Inspiration%20and%20an%20introduction%20to%20the%20world%20of%20mapping/blog-social-card-1.1"
/>
<meta property="og:image:width" content="1280" />
<meta property="og:image:height" content="640" />
<meta property="twitter:card" content="summary_large_image" />
<meta
  property="twitter:image"
  content="https://res.cloudinary.com/fay/image/upload/w_1280,h_640,c_fill,q_auto,f_auto/w_860,c_fit,co_rgb:232129,g_west,x_80,y_-60,l_text:Source%20Sans%20Pro_70_line_spacing_-10_semibold:Anyone%20Can%20Map!%20Inspiration%20and%20an%20introduction%20to%20the%20world%20of%20mapping/blog-social-card-1.1"
/>
<meta property="twitter:site" content="@colbyfayock" />
```

### 正在寻找其他方法来优化和分析您的内容？

- [如何将社交媒体图像添加到您的 Github 项目存储库](https://www.freecodecamp.org/news/how-to-add-a-social-media-image-to-your-github-project/){:target='\_blank'}
- [如何理解 Google Analytics 和您网站的流量](https://www.freecodecamp.org/news/making-sense-of-google-analytics-and-the-traffic-to-your-website/){:target='\_blank'}
- [如何使用 Google Analytics（分析）设置和跟踪 YouTube 频道的表现](https://www.freecodecamp.org/news/how-to-set-up-and-track-youtube-channel-performance-with-google-analytics/){:target='\_blank'}

## OG 协议的其他说明

&emsp;&emsp;不同公司的许多技术审计结果表明，使用 Open Graph 标签不会帮助您获得更好的 SEO 排名，它们仅适用于社交媒体。

## 参考资料

- [The Open Graph protocol](https://ogp.me/){:target='\_blank'}
- [What is Open Graph and how can I use it for my website?](https://www.freecodecamp.org/news/what-is-open-graph-and-how-can-i-use-it-for-my-website/){:target='\_blank'}
- [Provide an image for WhatsApp link sharing](https://stackoverflow.com/questions/19778620/provide-an-image-for-whatsapp-link-sharing){:target='\_blank'}
<!-- - [How to Customize which URL, Text and IMG to Share](https://sharethis.com/support/legacy/how-to-customize-which-url-text-and-img-to-share/){:target='\_blank'} -->
