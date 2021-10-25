---
layout: post
title: 前端应该知道的：开放图谱协议（The Open Graph protocol）
categories: JavaScript
description: The Open Graph protocol
keywords: JS, 前端, JavaScript
---

> Open Graph 是一种互联网协议，最初由 Facebook 创建，用于标准化网页中元数据的使用，使得社交媒体得以以丰富的“图形”对象来表示共享的页面内容。

&emsp;&emsp;看到这个标题，也许你会陷入疑惑，什么是开放图谱协议（The Open Graph protocol）？我为什么好像很少见到它？它到底有什么用呢？确实，对于很多前端开发来说，开放图谱协议（The Open Graph protocol）是一个比较陌生的概念。

## 什么是 Open Graph Protocol（开放图谱协议）

&emsp;&emsp;Open Graph Protocol（开放图谱协议），简称 OG 协议。它是 Facebook 在 2010 年 F8 开发者大会公布的一种网页元信息（Meta Information）标记协议，属于 Meta Tag （Meta 标签）的范畴，是一种为社交分享而生的 Meta 标签，**用于标准化网页中元数据的使用，使得社交媒体得以以丰富的“图形”对象来表示共享的页面内容**。它允许在 Facebook 上，其他网站能像 Facebook 内容一样具有丰富的“图形”对象，进而促进 Facebook 和其他网站之间的集成。

&emsp;&emsp;简单来说，该协议就是用来标注页面的类型和描述页面的内容。其灵感来自 [Dublin Core](https://www.ruanyifeng.com/blog/2007/03/dublin_core.html){:target='\_blank'}、link-rel canonical、Microformats 和 RDFa，虽然有这些不同的技术和模式并且可以组合在一起，但**没有一种技术可以提供足够的信息来丰富地表示社交图中的任何网页**。Open Graph 协议建立在这些现有技术的基础上，以开发人员使用的简单性为关键目标，并为开发人员提供了一个实施方案，它为许多技术设计决策提供了信息。

&emsp;&emsp;看了这么多，好像还是不理解什么是开发图谱协议？

&emsp;&emsp;举个简单的例子，当我们分享一个链接（URL）给朋友时，在有的 App 上它只是一个链接，而在有的 APP 上，他却可以包含如下图所示的标题、图片、描述等信息：

![OG协议]](https://i.stack.imgur.com/ERx58.jpg)

&emsp;&emsp;像飞书、WhatsApp、Twitter、Facebook 等社交软件，都会根据链接去抓取你给定 URL 的内容，以确定要包含哪些属性来进行共享展示。你可以通过在页面的头部代码中包含 `og:tags` 来显式定义属性；如果没有这些显示定义的信息，这些社交软件将在完成对给定 URL 的页面抓取后推断属性，然后使用这些属性信息组装共享框并进行展示。

&emsp;&emsp;其实这一切也是依赖于具体 APP 的实现的，对于同一 URL，我们可以看看在飞书和微信上的不同形态：

&emsp;&emsp;微信：

![OG协议](https://king-hcj.github.io/images/posts/javascript/og_wx.png?raw=true)

&emsp;&emsp;飞书：

![OG协议](https://king-hcj.github.io/images/posts/javascript/og_fs.png?raw=true)

## 为什么需要使用 OG 协议？

&emsp;&emsp;我们知道，构建内容和维护网站通常可能需要耗费大量时间，我们当然希望自己的内容能够在社交分享时能够脱颖而出。先来看下有无 OG 协议时，同一个链接被解析的差别：

&emsp;&emsp;没有开放图谱协议时：此时社交软件正确地获取了页面的标题和描述，但它所含有的信息有限，看起来并不诱人。

![simple-twitter-card](https://king-hcj.github.io/images/posts/javascript/simple-twitter-card.jpeg?raw=true)

&emsp;&emsp;有开放图谱协议时：

![large-image-twitter-card](https://king-hcj.github.io/images/posts/javascript/large-image-twitter-card.jpeg?raw=true)

&emsp;&emsp;互联网上的内容通常至少有一个目标——与他人分享。如果你只是将它发送给一个朋友，有没有开放图谱协议可能不一定重要。但是如果你想运营、分享或希望它在任何具有丰富预览功能的社交网络或应用程序上共享、传播时，你会希望该预览尽可能抓住别人的眼球。像下面这样丰富而有效的信息将有助于鼓励人们点击查看你的内容。

![吸引眼球的OG协议](https://king-hcj.github.io/images/posts/javascript/og_em.png?raw=true)

&emsp;&emsp;如果你的内容没有开放谱图协议标签会怎样？也许对于网站内容来说不会有什么影响，但你的内容将很难从互联网上大量其他内容中脱颖而出。

&emsp;&emsp;如果网页采用 OG 协议，**分享结果会结构化展示**，这样站点在被链接分享时会有**更丰富的内容展现**，同时**站点的转化率将会提升**。

## 如何给网站添加 OG 协议

### 基础属性

&emsp;&emsp;要将你的网页转换为可控结构化图形对象，你需要向页面添加**基本元数据**。四个基本开放图形标签是：

- `og:title` - 指定你想要在共享时展示的标题。这通常与你网页的`<title>`标签相同，例如“百度一下，你就知道”。
- `og:type`- 对象的类型，例如“video.movi​​e”。根据你指定的类型的不同，可能还需要添加一些其他的不同属性。
- `og:image` - 一个图片 URL。
- `og:url` - 指定你想要共享的 URL/当前页面的 URL（可以是短链接），例如，“https://www.baidu.com/”。

&emsp;&emsp;各标签控制区域如下图所示：

![OG](https://king-hcj.github.io/images/posts/javascript/og_base.png?raw=true)

&emsp;&emsp;给网站设置 OG 标签时，应该将其与其他元数据一起放置在`<head>`标签中。使用的标签还是`<meta>`，添加方式如下：

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

### 开发图标签介绍

&emsp;&emsp;上面介绍了基本元数据标签，下面将进一步对一些属性进行说明。如果你想要获得更全面的信息，请转到 [Open Graph](https://ogp.me/){:target='\_blank'} (https://ogp.me/)进行阅读。

#### title

&emsp;&emsp;最多 65 个字符。

```html
<title>your keyword rich title of the website and/or webpage</title>
```

#### description

&emsp;&emsp;最多 155 个字符。

```html
<meta
  name="description"
  content="description of your website/webpage, make sure you use keywords!"
/>
```

#### og:title

&emsp;&emsp;最多 35 个字符。

```html
<meta property="og:title" content="short title of your website/webpage" />
```

#### og:site_name

&emsp;&emsp;你的内容所在的整个网站的名称。如果你的对象是较大网站的一部分，则应为整个网站的名称。

#### og:url

&emsp;&emsp;当前网页地址的完整链接。

```html
<meta property="og:url" content="https://www.example.com/webpage/" />
```

#### og:description

&emsp;&emsp;页面的描述，最多 65 个字符。类似 `og:title`，这通常应该和你网站的`<meta type=“description”>`标签相同，当然，你也可以使其不同。

```html
<meta property="og:description" content="description of your website/webpage" />
```

#### og:image

&emsp;&emsp;尺寸小于 300KB 且最小尺寸为 300 x 200 的图像（JPG 或 PNG）。此图像应通过具有有效非自签名证书的 HTTPS 连接提供。

```html
<meta
  property="og:image"
  content="//cdn.example.com/uploads/images/webpage_300x200.png"
/>
```

&emsp;&emsp;虽然使用`og:image`添加图像比较容易，但有时让你的图像正确显示可能具有挑战性。开放图谱协议包括一些图像标签，例如`og:image:url`vs`og:image:secure_url`以及`og:image:width`和`og:image:height`，可以对图像进行更细致的控制。

&emsp;&emsp;尽量确保你遵循[开放图形文档](https://ogp.me/#structured){:target='\_blank'}中的所有注释和示例。此外，一些社交网络有图像要求。例如，[Twitter
要求](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/summary-card-with-large-image){:target='\_blank'}比例为
`2:1`，最小尺寸为 `300x157`，最大尺寸为 `4096x4096`，小于 `5MB`，JPG、PNG、WEBP 或 GIF 格式。

#### og:video

&emsp;&emsp;og:video 标签与 og:image 标签相同，用于补充“图形”对象的视频文件的 URL。

#### og:type

&emsp;&emsp;为了在图形中表示你的对象，你需要指定其类型。[这里](http://ogp.me/#types){:target='\_blank'} 是可用的全部类型列表。你还可以指定自己的类型。

```html
<meta property="og:type" content="article" />
```

&emsp;&emsp;设置开放图标签时，你需要了解哪种类型对你的网站更有意义。如果你的页面专注于单个视频，则使用“video”类型可能是有意义的；如果它是一个没有特定垂直行业的一般网站，你可能更适合使用“website”类型。

#### og:locale

&emsp;&emsp;资源的语言环境。如果你有其他语言翻译可用，你也可以使用 `og:locale:alternate`。如果不指定 `og:locale`，则默认为 en_US。

```html
<meta property="og:locale" content="en_GB" />
<meta property="og:locale:alternate" content="fr_FR" />
<meta property="og:locale:alternate" content="es_ES" />
```

#### video/audio

&emsp;&emsp;还可以共享音频/视频。例如，Facebook 和 Twitter 可以很好地共享视频。当然，WhatsApp 也有这个选项，比如当你分享 Instagram 或 Youtube 链接时，WhatsApp 预览版附带应用内视频播放器。

#### products, persons, movies 等

&emsp;&emsp;此类信息实际上取决于提供商（Facebook、Google），WhatsApp 和 Twitter 可以启用对产品的支持。这样，你与之共享链接的人可能会在共享链接“小部件”中看到价格、平均评分、评论等内容。

#### favicon

&emsp;&emsp;要获得对所有浏览器和设备的最佳图标支持，请阅读[此内容](https://stackoverflow.com/a/43154399/6086226)。

### Twitter 和其他使用开放图的社交媒体网络

&emsp;&emsp;大多数社交网络都遵循开放图谱协议的基本元数据标签，当然，一些社交应用也会包括自己的扩展，以帮助自定义其生态系统中的一些外观展示。

&emsp;&emsp;例如，Twitter 允许你指定`twitter:card`，这是你在展示你的网站时可以使用的“卡片”类型。他们的卡类型包括：

- summary
- summary_large_image
- app
- player

&emsp;&emsp;这将帮助你选择如何在其 Feed 中使用你的链接。例如，如果你使用了`summary_large_image`，只要你在 `og:image` 标签中提供了链接，Twitter 就会显示带有高分辨率大图片的链接。

&emsp;&emsp;要获得最佳 Twitter 支持，请阅读[Twitter 的相关文档](https://dev.twitter.com/cards/overview)。

&emsp;&emsp;要获得最佳 Facebook 支持，请阅读[Facebook 的分享指南](https://developers.facebook.com/docs/sharing/webmasters)。

&emsp;&emsp;以下是有关如何在某些社交媒体网站上使用开放图标签的文档链接，供你参考：

- [Twitter](https://developer.twitter.com/en/docs/tweets/optimize-with-cards/guides/getting-started){:target='\_blank'}
- [Facebook](https://developers.facebook.com/docs/sharing/webmasters/){:target='\_blank'}
- [Pinterest](https://developers.pinterest.com/docs/rich-pins/overview/?){:target='\_blank'}
- [LinkedIn](https://www.linkedin.com/help/linkedin/answer/46687/making-your-website-shareable-on-linkedin?lang=en){:target='\_blank'}

### 测试你的开放图标签

&emsp;&emsp;如果你在开发过程中遇到困难，也可以使用一些社交媒体提供的工具来测试、调试你的标签：

- [Twitter](https://cards-dev.twitter.com/validator){:target='\_blank'}
- [Facebook](https://developers.facebook.com/tools/debug/){:target='\_blank'}
- [Pinterest](https://developers.pinterest.com/tools/url-debugger/){:target='\_blank'}

### 进一步探究开放图标签

&emsp;&emsp;虽然以上介绍涵盖了一个网站中可能包含的大部分标签，但还有一些标签可能会帮助你和你的企业在整个社交网络中更多的被吸引和发现。如果你有兴趣**深入研究**，[The Open Graph protocol](https://ogp.me/){:target='\_blank'}官方文档将是一个很好的使用指南。

&emsp;&emsp;如果你只是在寻找**入门示例**，那么在为博客文章设置标签时，你可以采用类似下面的结果：

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

&emsp;&emsp;如果你正在寻找其他方法来优化和分析你的内容，下面几个链接也许会使你感兴趣：

- [如何将社交媒体图像添加到你的 Github 项目存储库](https://www.freecodecamp.org/news/how-to-add-a-social-media-image-to-your-github-project/){:target='\_blank'}
- [如何理解 Google Analytics 和你网站的流量](https://www.freecodecamp.org/news/making-sense-of-google-analytics-and-the-traffic-to-your-website/){:target='\_blank'}
- [如何使用 Google Analytics（分析）设置和跟踪 YouTube 频道的表现](https://www.freecodecamp.org/news/how-to-set-up-and-track-youtube-channel-performance-with-google-analytics/){:target='\_blank'}

## OG 协议的其他说明

&emsp;&emsp;不同公司的许多技术审计结果表明，使用 Open Graph 标签**不会帮助你获得更好的 SEO 排名**，它们仅适用于在社交媒体展示丰富的“图形”对象。

## 参考资料

- [The Open Graph protocol](https://ogp.me/){:target='\_blank'}
- [What is Open Graph and how can I use it for my website?](https://www.freecodecamp.org/news/what-is-open-graph-and-how-can-i-use-it-for-my-website/){:target='\_blank'}
- [Provide an image for WhatsApp link sharing](https://stackoverflow.com/questions/19778620/provide-an-image-for-whatsapp-link-sharing){:target='\_blank'}
- [How to Customize which URL, Text and IMG to Share](https://sharethis.com/support/legacy/how-to-customize-which-url-text-and-img-to-share/){:target='\_blank'}
