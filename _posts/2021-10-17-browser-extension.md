---
layout: post
title: 7分钟学会写一个浏览器插件——突破某SDN未登录禁止复制的限制
categories: Chrome
description: 浏览器插件
keywords: JS, 前端, JavaScript, Chrome
---

&emsp;&emsp;严格意义上说，本篇文章要讨论的应该是 “Chrome 扩展(Extension)”而不是“Chrome 插件（Plugins）”，大家不妨先思考一个问题：“浏览器插件”和“浏览器扩展”之间有什么区别？如果您对此感到厌烦，不妨直接跳过此小节的阅读。

## 关于 Chrome 插件与扩展的误区

&emsp;&emsp;Chrome 浏览器自 2008 年诞生以来发生了很多事情，它是目前功能最完备、对新特性支持最充分的 Web 浏览器，Chrome 的出现，在某种意义上扩展了我们对浏览器功能的定义，并且它支持第三方开发人员制作的应用程序、插件和扩展。但是这三者有什么区别呢？如果你想获得广告拦截器，那是应用程序还是扩展程序？在 HTML5 之前曾红极一时、可以让网站内容变得更丰富、带来了视频/动画/游戏却因安全问题一直饱受诟病的 Adobe Flash，是属于浏览器扩展还是插件？

&emsp;&emsp;在此，我们先来了解一下 Chrome 应用程序、插件和扩展程序之间（Chrome apps, plugins and extensions）的区别，以便你能够始终知道自己需要的是什么。

### Chrome 应用程序（Chrome Apps）

&emsp;&emsp;Chrome 应用程序的概念，可能是 Chrome 应用程序、插件和扩展程序中最模糊的，因为其实 Google 本身可以互换地指代应用程序和扩展程序。想要证明这一点也不难，你可以转到 Chrome 网上应用店中的[扩展程序页面](https://chrome.google.com/webstore/category/extensions){:target='\_blank'}（`https://chrome.google.com/webstore/category/extensions`），在地址栏中将“extensions”一词替换为“apps”，它实际上会重定向回扩展（extensions）页面！

&emsp;&emsp;Web Store 曾经有一个专门的“应用程序（Apps）”部分，在那里提供独立的桌面应用程序。但在 2017 年底，谷歌移除了这些传统的 Chrome 应用程序，因为 Google 推动了“渐进式网络应用程序（Progressive Web Apps，即 PWA）”的构想，从本质上将网站转变为从桌面或手机即时访问的应用程序，所以如今的搜索框下方只有“Extensions”和“Themes”两部分了。

![extensions](https://king-hcj.github.io/images/browser/extensions.png?raw=true)

&emsp;&emsp;对于普通的 PC 用户来说，Chrome 应用程序如今已融入扩展程序中。如果你正在为 Chrome 寻找广告拦截器、Web Clipper 等，无论你搜索“Chrome app”还是“Chrome extension”，您最终都会得到一个扩展程序。

### Chrome 扩展程序（Chrome Extensions）

![extensions](https://king-hcj.github.io/images/browser/my_extensions.png?raw=true)

&emsp;&emsp;Chrome 扩展程序是 Chrome 的附加组件，旨在**以各种方式改善您的体验**。这种体验的改善可以从数据保护程序到广告拦截器，再到让你在 Chrome 中双击单词并立即了解其含义的字典。您可以在 Chrome 网上应用店中找到扩展程序，当您安装一个扩展程序时，它会在 Chrome 浏览器的右上角显示一个小图标。

&emsp;&emsp;扩展程序可以增加浏览器本身的功能，也**可以调用浏览器的 API**，并且同一个浏览器的扩展一般也都是可以**跨操作系统**使用的。比如，你在 Windows 使用的那些 Chrome 扩展，换到 Mac 平台上也一样能用。

&emsp;&emsp;扩展为浏览器添加特性与功能，它一般通过 web 技术——HTML，CSS 还有 JavaScript 来创建。扩展其实是一个压缩文件，Firefox 的扩展是`.xpi`、Chrome 扩展格式为`.crx`。

### Chrome 插件（Chrome Plugins）

&emsp;&emsp;插件最好被描述为**“插入”Chrome 的代码包**，允许 Web 开发人员将某些功能、动画、视频等嵌入到他们的网站中，插件**可调用操作系统的 API**，并且不同操作系统的插件一般不能混用，插件主要用于实现浏览器无法独立实现的功能。

&emsp;&emsp;也就是说，插件使得别的程序才能处理的内容在浏览器的页面中得以展现和处理。所以插件一般实现的都是比较底层的功能，一旦出现问题，往往就会牵涉到整个操作系统，像 Flash 插件就属于经常被扒出高危漏洞的那一类。在 Chrome 57 版本之前，你可以在地址栏中的`chrome://plugins`中查看 Chrome 的所有插件列表，其中包括 Adob​​e Flash Player、Chrome PDF Viewer 和 Java 插件等，现在`chrome://chrome-urls/`中已经找不到`chrome://plugins`了。

&emsp;&emsp;`chrome://plugins`不再存在的部分原因是出于安全考虑，Chrome 不再支持 NPAPI 插件——一些插件不再工作，而其他插件已以各种方式集成到 Chrome 中。例如，基于 Java 的小程序不再在浏览器中运行，PDF 查看器等功能已直接集成到浏览器中。因此，有点像应用程序（Chrome Apps），Chrome 插件的也正在逐步淘汰或集成到浏览器的主体中。

&emsp;&emsp;插件的格式通常是**二进制文件**，如 windows 下的插件一般是`dll`，linux 下的插件一般是`os`格式。

&emsp;&emsp;从本质上讲，“Chrome 应用程序”会被 PWA 所替代，而这些年来插件基本上已被弃用，所以你在 Chrome 中唯一需要关心的就是扩展程序。

&emsp;&emsp;真正意义上的 Chrome 插件是更底层的浏览器功能扩展，但是浏览器插件和扩展这两个概念早已被混淆。鉴于大部分人对 Chrome 插件的叫法已经习惯，本文也全部采用这种叫法，但您应该知道，**本文所描述的 Chrome 插件实际上指的是 Chrome 扩展**。

> 顺便简单做个补充，除了以上提到的 3 个概念，你可能还看到过`ActiveX`（控件）、`Addon` 等概念，其实 `ActiveX` 是 IE 内核浏览器下的插件（Plugin），随着 IE 浏览器从 Windows 11 中消失，并将在 2022 年正式退出历史舞台，我们无需过多关注；Addon 是属于 Mozilla 系浏览器的，中文名字叫附加组件，其实和浏览器扩展是同一类应用。

## 浏览器插件的核心元素

### `manifest.json`

&emsp;&emsp;一个 Chrome 扩展其实就是一个配置（入口）文件 `manifest.json` 和一系列 html、css、js、图片文件的集合，扩展/插件从它们的`manifest.json`开始，所以`manifest.json`是一个**Chrome 插件最重要也是必不可少的文件**，用来配置所有和插件相关的配置，必须放在根目录。一般至少应该包含下面这些配置：

```js
// manifest.json
{
  "name": "Getting Started Example", // 扩展的名称（name）
  "version": "1.0", // 插件版本号
  "description": "Build an Extension!", // 插件描述
  "manifest_version": 2, // manifest 版本，目前是必须是2或者3

  // 指定扩展在Chrome 工具栏中的图标，它定义了扩展图标文件位置（default_icon）、
  // 悬浮提示（default_title）和点击扩展图标所显示的页面位置（default_popup）
  "browser_action": {
    "default_title": "Hello, 某SDN!",
    "default_icon": "/images/logo.png", // 浏览器右上角图标设置
    "default_popup": "popup.html"
  }
}
```

> 当然，一个`manifest.json`文件可以包含很多东西，可以参考[Manifest file format](https://developer.chrome.com/docs/extensions/mv3/manifest/){:target='\_blank'}，后续使用到其他配置会在注释中进行说明。

> VSCode 在书写`.json` 文件的备注时标红提示 `Comments are not permitted in JSON.（521）`，此时只需点击 VSCode 界面右下角的“JSON”，在顶部展现出的框中输入“JSON with Comments”，点击使用即可解决。

### `popup.html`

&emsp;&emsp;这个名称不是固定的，取决于 `manifest.json`中对`browser_action`的“default_popup”字段的配置，它定义了点击插件的图标所展示的弹窗页面 HTML，`popup.html`像普通 html 一样可以直接引入其他 js 文件。需要注意的一点是，这里面引入的 js，如果直接操作 DOM，操作的是 popup.html 产生的 DOM，而不是浏览器当前展示页面的 DOM。

### `content_scripts`

&emsp;&emsp;这一项来自于`manifest.json`的`content_scripts`配置项，声明了**需要直接注入页面的 JS，这里的 JS 可以直接操作当前页面的 DOM 对象**，所以这个文件在需要对打开的页面进行操作时会很有用。

## 开发调试

&emsp;&emsp;**Chrome 插件没有严格的项目结构要求，只要保证根目录有一个 manifest.json 即可**，也不需要专门的 IDE 进行开发。

&emsp;&emsp;开发调试时，进入插件管理页面最简洁的方式是在地址栏输入`chrome://extensions/`进行访问。其他两种进入插件管理页面的方式如下图所示：

![extensions](https://king-hcj.github.io/images/browser/dev_extensions1.png?raw=true)

![extensions](https://king-hcj.github.io/images/browser/dev_extensions2.png?raw=true)

&emsp;&emsp;打开右上角**开发者模式**便可以文件夹的形式直接加载插件，否则只能安装`.crx` 格式的文件。默认情况下，Chrome 要求插件必须从它的 Chrome 应用商店安装，其它任何网站下载的以及自己打包的都无法直接安装。所以，其实我们可以把 crx 文件解压，然后通过开发者模式直接加载。

![extensions](https://king-hcj.github.io/images/browser/dev_extensions3.png?raw=true)

&emsp;&emsp;开发过程中，代码有任何改动都必须重新加载插件，点击对应插件的重新加载按钮或者刷新当前插件管理页面均可。如果出现错误，将会出现类似下面的界面，更改后，你需要先点击“错误”按钮进入弹窗对错误进行清除。

![extensions](https://king-hcj.github.io/images/browser/dev_extensions6.png?raw=true)

> 开发过程中遇到的更多细节可以参考官方[Debugging extensions](https://developer.chrome.com/docs/extensions/mv3/tut_debugging/){:target='\_blank'}文档。

## 3 分钟写一个浏览器插件，解决某 SDN 未登录无法复制代码的问题

&emsp;&emsp;我们知道，前段时间某 SDN 更新后，未登录时，无法复制文章中的代码，给开发者带来一定不便。今天我们就花 3 分钟时间写一个浏览器插件，突破这种限制。

&emsp;&emsp;基本思路其实很简单，**通过将当前页面的`document.body.contentEditable`值设置为`true`来达到可复制的效果**。当然，这个我们通过控制台面板或者“自定义书签“的方式也能轻松实现，这里只是让大家体验一下简单插件的开发，避免出手就是”Hello World！“，😄

> 书签功能的实现可参考[前端装逼技巧 108 式（一）—— 打工人](https://juejin.cn/post/6996850474175430686#heading-3){:target='\_blank'}。

&emsp;&emsp;下面将逐步介绍项目各文件相关信息，您也可以直接点击[这里](https://stackblitz.com/edit/browser-extension?){:target='\_blank'}在线查看完整代码。整个项目**核心代码不足 30 行**，相信您能藉此迅速入门 Chrome 插件开发，激发兴趣和潜能，写出更有用的插件或者应用。

### 目录结构

- manifest.json：配置文件，插件开发中的必备项；
- popup.html：插件弹窗；
- style.css：弹窗样式文件；
- js
  - popup.js：弹窗 popup.html 中使用的 js；
  - content_script.js：需要直接注入页面的 js；
- images
  - logo.png：插件图标。

### manifest.json 配置文件

```js
{
  // 清单文件的版本，必须是2或者3，
  // 文档见 https://developer.chrome.com/docs/extensions/mv3/manifest/manifest_version/
  "manifest_version": 2,
  // 插件的名称
  "name": "Copy SDN",
  // 插件的版本
  "version": "1.0.0",
  // 插件描述
  "description": "不登录依然可以在某SDN页面进行代码复制！",
  // 指定扩展在Chrome 工具栏中的图标，它定义了扩展图标文件位置（default_icon）、
  // 悬浮提示（default_title）和点击扩展图标所显示的页面位置（default_popup）
  "browser_action": {
    "default_title": "Hello, 某SDN!",
    "default_icon": "/images/logo.png", // 浏览器右上角图标设置
    "default_popup": "popup.html"
  },
  // https://developer.chrome.com/docs/extensions/mv2/manifest/icons/
  // 128x128 的图标；它在安装期间和 Chrome 网上应用店使用
  // 48x48 图标，用于扩展程序管理页面 (chrome://extensions)
  // 16x16 图标用作扩展页面的收藏夹图标
  // 这里只写一个其实也是可以的
  "icons": {
    "128": "/images/logo.png"
  },
  // 需要直接注入页面的JS
  "content_scripts": [
    {
      //"matches": ["http://*/*", "https://*/*"],"<all_urls>" 表示匹配所有地址
      "matches": ["https://blog.csdn.net/*"],
      // 多个JS按顺序注入
      "js": ["/js/content_script.js"],
      // "css": ["css/custom.css"],
      // 代码注入的时间，可选值： "document_start", "document_end", or "document_idle"，
      // document_idle表示页面空闲时，为默认值
      "run_at": "document_start"
    }
  ],
  // 定义了扩展需要向 Chrome 申请的权限，比如通过 XMLHttpRequest 跨域请求数据、访问浏览器选项卡（tabs）
  // 获取当前活动选项卡（activeTab）、浏览器通知（notifications）、存储（storage）等，可以根据需要添加。
  "permissions": ["tabs"]
}
```

### popup.html 和 css 制作插件弹窗

`popup.html`：

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./style.css" />
    <title>Copy SDN</title>
  </head>

  <body>
    允许复制Code：<input type="checkbox" class="switch" id="toggle" />
    <!-- 这里引入了popup.js，来给popup弹窗添加一些交互功能 -->
    <script src="./js/popup.js"></script>
  </body>
</html>
```

弹窗样式文件`style.css`：

```css
body {
  width: 160px;
  height: 24px;
  background-color: lavender;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Switch开关样式 */
input[type='checkbox'].switch {
  outline: none;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  position: relative;
  width: 40px;
  height: 20px;
  background: #ccc;
  border-radius: 10px;
  transition: border-color 0.3s, background-color 0.3s;
}

input[type='checkbox'].switch::after {
  content: '';
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0, 0, 2px, #999;
  transition: 0.4s;
  top: 2px;
  position: absolute;
  left: 2px;
}

input[type='checkbox'].switch:checked {
  background: rgb(19, 206, 102);
}

/* 当input[type=checkbox]被选中时：伪元素显示下面样式 位置发生变化 */
input[type='checkbox'].switch:checked::after {
  content: '';
  position: absolute;
  left: 55%;
  top: 2px;
}
```

&emsp;&emsp;以上代码将构建出如下插件弹窗 UI：

![extensions](https://king-hcj.github.io/images/browser/copy_sdn.png?raw=true)

### popup.js 给弹窗添加交互

```js
// 这里的js其实是操作popup.html产生的dom的
document.addEventListener('DOMContentLoaded', function () {
  // 获取开关按钮的初始值。这里{ type: 'get_editable' }是可以随意定义的，可以传递任何你想传递的信息
  sendMessageToContentScript({ type: 'get_editable' }, (response) => {
    toggle.checked = ['true', true].includes(response) ? 'checked' : null;
  });

  // 切换contentEditable状态
  toggle.addEventListener('change', () => {
    sendMessageToContentScript({ type: 'toggle' });
  });
});

// 向content_scripts发送消息的函数
function sendMessageToContentScript(message, callback) {
  // 这里用到了tabs，所以前面配置文件需要配置"permissions": ["tabs"]
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, message, (response) => {
      if (callback) callback(response);
    });
  });
}
```

### content_script.js 向页面注入 JS

```js
// 所谓content-scripts，其实就是Chrome插件中向页面注入脚本的一种形式（虽然名为script，其实还可以包括css），
// 借助content-scripts我们可以实现通过配置的方式轻松向指定页面注入JS和CSS（如果需要动态注入，可以参考下文），
// 最常见的比如：广告屏蔽、页面CSS定制，等等。

// 接收消息
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  // 数据处理和返回。是不是有点类似redux中reducer数据处理的感觉
  switch (request.type) {
    case 'get_editable':
      // 将当前文档是否可编辑的信息返回给popup，控制开关的形态
      sendResponse(document.body.contentEditable);
      break;
    case 'toggle':
      // 切换可编辑状态
      document.body.contentEditable = ![true, 'true'].includes(
        document.body.contentEditable
      );
    default:
      break;
  }
});
```

## 打包与发布

&emsp;&emsp;在插件管理页左上角有一个“打包扩展程序”的按钮，点击就会出现如下界面，选择要打包的文件夹进行打包即可，你会得到一个`.crx`的压缩文件，这个实际上就是你经常安装插件时安装的压缩包文件。

![extensions](https://king-hcj.github.io/images/browser/dev_extensions4.png?raw=true)
![extensions](https://king-hcj.github.io/images/browser/dev_extensions5.png?raw=true)

&emsp;&emsp;要发布到 Google 应用商店的话，需要先支付 5 美元的注册费成为开发者：[Register as a Chrome Web Store Developer](https://chrome.google.com/webstore/devconsole/register){:target='\_blank'}。

![extensions](https://king-hcj.github.io/images/browser/dev_extensions7.png?raw=true)

## 参考资料

- [How to Build & Publish a Chrome Extension in 13 Minutes?🔥](https://www.youtube.com/watch?v=gtF2nHVjqFk){:target='\_blank'}
- [Chrome Apps, Plugins, Extensions: What’s the Difference?](https://www.maketecheasier.com/chrome-apps-plugins-extensions-differences/){:target='\_blank'}
- [【干货】Chrome 插件(扩展)开发全攻略](http://blog.haoji.me/chrome-plugin-develop.html){:target='\_blank'}
