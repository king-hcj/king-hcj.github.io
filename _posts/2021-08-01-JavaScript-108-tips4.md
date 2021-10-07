---
layout: post
title: 前端装逼技巧 108 式（四）—— 一起摇摆
categories: JavaScript
description: 前端装逼技巧 108 式，助你更懂JS原理
keywords: JS, 前端, JavaScript
hot: true
---

> <div style="text-align: center">《洗 练》<br /><br />半夜不眠，<br />推门至院落，<br />院中的莲雾树熟了，<br />有一枚红果悄然坠落，<br />我剪一段月光裹住心伤。<br /><br />七月的虫声是炸了线的唐诗三百，<br />格律皆破，<br />独独押一个锡韵：寂寂寂寂寂寂。<br />我说：渔人哪，你竟不如一只虫子，你三年未归。<br /><br />瀚海无路，<br />只有等字，<br />你不妨托星月当信差，<br />若我裁得一截银白的咸布，<br />渍痛了伤口，<br />我便知晓，<br />你已无法回來。</div>

&emsp;&emsp;关注本系列的朋友们，因为一些事情，好久不见了，真是抱歉，八月伊始，本系列又回来了。其实我一直在思考，《前端装逼技巧 108 式》的意义究竟在哪里？是带来一些开发技巧吗？是整合一些大家忽略的细节吗？是真的用来装逼的吗？是更多的专注于技术还是趣味性？这是一个取舍问题，偏技术就会失去一定的趣味性；偏趣味性又会失去一些深度。我认为，纯技术文章其实是很多的了，我更多的是希望给程序猿生活带来更多的乐趣，在系列文章余下的几篇中，依然会力求从各个角度更多的为程序人生增添一些别样的色彩。

系列文章发布汇总：

- [前端装逼技巧 108 式（一）—— 打工人](https://king-hcj.github.io/2020/11/22/JavaScript-108-tips1/){:target='\_blank'}
- [前端装逼技巧 108 式（二）—— 不讲武德](https://king-hcj.github.io/2020/12/05/JavaScript-108-tips2/){:target='\_blank'}
- [前端装逼技巧 108 式（三）—— 冇得感情的 API 调用工程师](https://king-hcj.github.io/2020/12/21/JavaScript-108-tips3/){:target='\_blank'}
- [前端装逼技巧 108 式（四）—— 一起摇摆](https://king-hcj.github.io/2021/08/01/JavaScript-108-tips4/){:target='\_blank'}

> 文章风格所限，引用资料部分，将在对应小节末尾标出。

## 第五十五式：你见过页面跳舞吗？ —— 那 High 动的页面一如那些年我逝去的青春

&emsp;&emsp;还记得魔性的小苹果和抖音吗，作为前端的你，有想过**让页面也 High 起来、舞动起来**吗？

&emsp;&emsp;先看效果：

![页面舞动](https://king-hcj.github.io/images/posts/zhuangbility100/letdance1.gif?raw=true)

> 下面这段代码可直接在控制台执行，略长。可直接跳到本小节末，使用简短 JS 引入的方式进行体验（**带音乐效果哟**）

```js
setTimeout(letDance, 1000);
var bgmSrc =
  'https://nd002723.github.io/carnival/audio/Martin%20Jensen%20-%20Fox%20(Loop%20Remix).mp3';
var cssHref = 'https://nd002723.github.io/carnival/css/high.css';
function letDance() {
  function loadCss() {
    //将css文件引入页面
    var myCss = document.createElement('link');
    myCss.setAttribute('type', 'text/css');
    myCss.setAttribute('rel', 'stylesheet');
    myCss.setAttribute('href', cssHref); //css文件地址
    myCss.setAttribute('class', l);
    document.body.appendChild(myCss);
  }

  function h() {
    var e = document.getElementsByClassName(l);
    for (var t = 0; t < e.length; t++) {
      document.body.removeChild(e[t]);
    }
  }

  function p() {
    var e = document.createElement('div');
    e.setAttribute('class', a);
    document.body.appendChild(e);
    setTimeout(function () {
      document.body.removeChild(e);
    }, 100);
  }

  function getSize(e) {
    //获取目标的宽高
    return {
      height: e.offsetHeight,
      width: e.offsetWidth,
    };
  }

  function checkSize(i) {
    //判断目标大小是否符合要求
    var s = getSize(i); //获取目标的宽高
    return (
      s.height > minHeight &&
      s.height < maxHeight &&
      s.width > minWidth &&
      s.width < maxWidth
    ); //判断目标是否符合条件
  }

  function m(e) {
    var t = e;
    var n = 0;
    while (!!t) {
      n += t.offsetTop;
      t = t.offsetParent;
    }
    return n;
  }

  function g() {
    var e = document.documentElement;
    if (!!window.innerWidth) {
      return window.innerHeight;
    } else if (e && !isNaN(e.clientHeight)) {
      return e.clientHeight;
    }
    return 0;
  }

  function y() {
    if (window.pageYOffset) {
      return window.pageYOffset;
    }
    return Math.max(
      document.documentElement.scrollTop,
      document.body.scrollTop
    );
  }

  function E(e) {
    var t = m(e);
    return t >= w && t <= b + w;
  }

  function setBgm() {
    //设置音乐
    var e = document.createElement('audio');
    e.setAttribute('class', l);
    e.src = bgmSrc; //bgm地址
    e.loop = false;
    e.addEventListener(
      'canplay',
      function () {
        setTimeout(function () {
          x(k);
        }, 500);
        setTimeout(function () {
          N();
          p();
          for (var e = 0; e < O.length; e++) {
            T(O[e]);
          }
        }, 15500);
      },
      true
    );
    e.addEventListener(
      'ended',
      function () {
        N();
        h();
      },
      true
    );
    e.innerHTML =
      ' <p>If you are reading this, it is because your browser does not support the audio element. We recommend that you get a new browser.</p> <p>';
    document.body.appendChild(e);
    e.play();
  }

  function x(e) {
    e.className += ' ' + s + ' ' + o;
  }

  function T(e) {
    e.className += ' ' + s + ' ' + u[Math.floor(Math.random() * u.length)];
  }

  function N() {
    var e = document.getElementsByClassName(s);
    var t = new RegExp('\\b' + s + '\\b');
    for (var n = 0; n < e.length; ) {
      e[n].className = e[n].className.replace(t, '');
    }
  }
  var minHeight = 3; //最小高度
  var minWidth = 3; //最小宽度
  var maxHeight = 800; //最大高度
  var maxWidth = 1400; //最大宽度
  var s = 'mw-harlem_shake_me';
  var o = 'im_first';
  var u = ['im_drunk', 'im_baked', 'im_trippin', 'im_blown'];
  var a = 'mw-strobe_light';
  var l = 'mw_added_css'; //最终要移除的css
  var b = g();
  var w = y();
  var C = document.getElementsByTagName('*');
  var k = null;
  for (var L = 0; L < C.length; L++) {
    var targetDiv = C[L];
    if (checkSize(targetDiv)) {
      if (E(targetDiv)) {
        k = targetDiv;
        break;
      }
    }
  }
  if (targetDiv === null) {
    //如果没找到合适大小的
    console.warn('没能找到合适的大小. 换一个页面试试？.');
    return;
  }

  loadCss(); //将自定义css文件引入页面
  setBgm(); //添加背景音乐

  var O = [];
  for (var L = 0; L < C.length; L++) {
    var targetDiv = C[L];
    if (checkSize(targetDiv)) {
      O.push(targetDiv);
    }
  }

  //网页整体倾斜效果（这块儿本来是JQuery实现的，为了避免引入JQuery，做了改动。）
  var style = document.createElement('style');
  style.type = 'text/css';
  try {
    style.appendChild(
      document.createTextNode(
        'body{overflow-x:hidden;transform: rotate(1deg);-webkit-transform: rotate(1deg);-moz-transform: rotate(1deg);-o-transform: rotate(1deg);-ms-transform: rotate(1deg)}'
      )
    );
  } catch (ex) {
    style.styleSheet.cssText = 'body{background-color:red}'; //针对IE
  }
  var head = document.getElementsByTagName('head')[0];
  head.appendChild(style);
}
```

&emsp;&emsp;或者更简洁一点，在页面 URL 栏或者控制台键入以下代码直接体验：

> 在浏览器地址栏黏贴以下内容的话，有**三点需要注意**，一是必须是已有内容的页面；二是如果是通过复制黏贴代码到浏览器地址栏的话，IE 及 Chrome**会自动去掉代码开头的`javascript:`**，所以需要手动添加起来才能正确执行，而 Firefox 中虽然不会自动去掉，但它根本就不支持在地址栏运行 JS 代码；三是引用的`carnival.js`会依赖`JQuery`（没有的话也没事，只是页面少了一个倾斜的效果）。

```js
javascript: void (function () {
  var d = document,
    a = 'setAttribute',
    s = d.createElement('script');
  s[a]('tyle', 'text/javascript');
  s[a]('src', 'https://nd002723.github.io/carnival/js/carnival.js');
  d.head.appendChild(s);
})();
```

- [一个能让你的网站 high 起来的 js](https://loli-rbq.top/carnival/){:target='\_blank'}

## 第五十六式：昔时金阶白玉堂，即今唯见青松在 —— 浏览器隐身模式真的可以隐身吗？

### 隐身模式与设备唯一标识

&emsp;&emsp;我们都知道，浏览器隐身模式可以让别人无法知道你都访问了什么网站和做了什么操作，在隐身模式下，打开的网页和下载的文件不会记录到您的浏览历史记录以及下载历史记录中。在你关闭打开的全部隐身窗口后，系统会删除所有新 Cookie。但是，隐身模式真的就隐身了吗？多次通过隐身模式访问同一网站，就真的无法识别你已经访问过了吗？如果真是这样，那绝对是一个刷 UV（unique visitor）的利器了，尝试了下 [个人博客](https://king-hcj.github.io/){:target='\_blank'}，还真是这样（我使用的是[不蒜子](https://ibruce.info/2015/04/04/busuanzi/){:target='\_blank'}），那以后谁的 UV 能有我多啊，😄😄😄，不过，等等，好像有哪里不对... 蒽，原来我是程序猿啊 🤔，如果产品和数据分析师需要精确的数据呢？无需登陆的页面（如社区文章）需要杜绝隐身模式刷 UV 访问量呢？无需登陆的投票站点需要杜绝隐身模式反复投票点赞呢？嗯，这就不得不引入**设备唯一标识**的概念了。

&emsp;&emsp;在开发场景下，唯一的标识一个设备是一个基本功能，可以拥有很多应用场景，比如**软件授权（如何保证你的软件在授权后才能在特定机器上使用）、软件 License，设备标识，设备身份识别**等。

&emsp;&emsp;如果说要获取设备唯一标识，也许你会想到类似 IMEI、Android ID、MAC 地址等思路，但是[Android 10 中官方文档](https://developer.android.google.cn/about/versions/10/privacy/changes){:target='\_blank'} 中有以下两个表述：

- 从 Android 10 开始，应用必须具有 `READ_PRIVILEGED_PHONE_STATE` 特许权限才能访问设备的不可重置标识符（包含 IMEI 和序列号）。
- 默认情况下，在搭载 Android 10 或更高版本的设备上，系统会传输随机分配的 MAC 地址。

&emsp;&emsp;一个电脑可能存在多个网卡，多个 MAC 地址，MAC 地址另外一个更加致命的弱点是，MAC 地址很容易手动更改。

&emsp;&emsp;至于 Android ID，则不具有真正的唯一性，ROOT、刷机、恢复出厂设置、不同签名的应用等都会导致获取的 Android ID 发生改变，并且不同厂商定制的系统的 BUG 会导致不同的设备可能会产生相同的 Android ID。

&emsp;&emsp;其他一些获取设备唯一标识的方法，这篇文章有比较全面的论述：

> [获取设备唯一标识（Unique Identifier）:Windows 系统](https://blog.csdn.net/qq_32403473/article/details/81505664){:target='\_blank'}

&emsp;&emsp;而如果回到我们前端场景下，以上这些方法又多了很多局限性，比如有的需要特许权限，有的需要依赖于原生开发的配合，那么，有没有一种**只需要前端参与**，也可以获得不错的准确率的唯一标识方案呢？ —— 此时就到了浏览器指纹出场的时候了。

&emsp;&emsp;FingerPrint 即我们常说的指纹识别，使用手指和拇指前端的纹理按下的纹印来鉴定身份。指纹是鉴别身份的一种可靠的方法，具有唯一性，因为每个人的每个指头上的纹理排列各不相同而且不因发育或年龄而改变。而浏览器指纹是指仅通过浏览器的各种信息，如 CPU 核心数、显卡信息、系统字体、屏幕分辨率、浏览器插件等组合成的一个字符串，就**能近乎绝对定位一个用户，就算使用浏览器的隐私窗口模式，也无法避免**。

&emsp;&emsp;这是一个被动的识别方式。也就是说，理论上你访问了某一个网站，那么这个网站就能识别到你，虽然不知道你是谁，但你有一个唯一的指纹，将来无论是**广告投放、精准推送、安全防范**，还是其他一些关于隐私的事情，都非常方便。

&emsp;&emsp;市面上关于隐身模式的识别，也有一些方法，比如曾经有效的通过检查 Chrome 的 `FileSystem API` 的可用性、根据隐身模式和非隐身模式下，脚本执行和对浏览器文件系统的写入速度差异来判断等。

### BrowserLeaks

&emsp;&emsp;长期以来，人们一直认为 IP 地址和 Cookie 是用于在线跟踪人员的唯一可靠数字指纹。但过了一段时间，当现代网络技术允许感兴趣的组织在他们不知情且无法避免的情况下使用新方法来识别和跟踪用户时，事情就失控了。

&emsp;&emsp;[BrowserLeaks](https://browserleaks.com/){:target='\_blank'}就是关于浏览隐私和网络浏览器指纹的。在这里，你将找到一个 Web 技术安全测试工具库，这些工具将向您展示哪些类型的个人身份数据可能会被泄露，以及如何保护自己免受此类泄露。这个网站提供了包括 IP 地址、地理位置、Canvas、WebGL、WebRTC、字体等多种类型指纹的查看。

![fingerPrint](https://king-hcj.github.io/images/posts/zhuangbility100/fingerPrint.png?raw=true)

&emsp;&emsp;如果你对其中的技术原理很感兴趣，可以进入[BrowserLeaks](https://browserleaks.com/){:target='\_blank'}，点击对应卡片标题进行查看和了解，比如 [HTML5 Canvas Fingerprinting](https://browserleaks.com/canvas){:target='\_blank'}页面，会给出你的 Canvas 指纹及其唯一性率等信息；也可以通过[探讨浏览器指纹](https://zhuanlan.zhihu.com/p/282922459){:target='\_blank'}这篇文章进行了解。

![fingerPrintCanvas](https://king-hcj.github.io/images/posts/zhuangbility100/fingerPrintCanvas.png?raw=true)

### 实现 Canvas Fingerprinting

&emsp;&emsp;**Canvas Fingerprinting（Canvas 指纹）基于 Canvas 绘制特定内容的图片，使用 canvas.toDataURL()方法返回该图片内容的 base64 编码字符串。对于 PNG 文件格式，以块(chunk)划分，最后一块是一段 32 位的 CRC 校验，提取这段 CRC 校验码便可以用于用户的唯一标识。**Canvas 利用 HTML5 canvas API 和 JavaScript 来动态生成你想要的图像。和其它跟踪技术一样，这种方法已被成千上万的网站采用了，包括我们熟知的广告领域。

&emsp;&emsp;下面是 Canvas 指纹的一个简单实现，原理其实比较简单，不理解的地方可以参考注释：

```js
// PHP 中，bin2hex() 函数把 ASCII 字符的字符串转换为十六进制值。字符串可通过使用 pack() 函数再转换回去
// 下面是PHP 的 bin2hex 的 JavaScript 实现
function bin2hex(s) {
  let n,
    o = '';
  s += '';
  for (let i = 0, l = s.length; i < l; i++) {
    n = s.charCodeAt(i).toString(16);
    o += n.length < 2 ? '0' + n : n;
  }

  return o;
}

// 获取指纹UUID
function getUUID(domain) {
  // 创建 <canvas> 元素
  let canvas = document.createElement('canvas');
  // getContext() 方法可返回一个对象，该对象提供了用于在画布上绘图的方法和属性
  let ctx = canvas.getContext('2d');
  // 设置在绘制文本时使用的当前文本基线
  ctx.textBaseline = 'top';
  // 设置文本内容的当前字体属性
  ctx.font = "14px 'Arial'";
  // 设置用于填充绘画的颜色、渐变或模式
  ctx.fillStyle = '#f60';
  // 绘制"被填充"的矩形
  ctx.fillRect(125, 1, 62, 20);
  ctx.fillStyle = '#069';
  // 在画布上绘制"被填充的"文本
  ctx.fillText(domain, 2, 15);
  ctx.fillStyle = 'rgba(102, 204, 0, 0.7)';
  ctx.fillText(domain, 4, 17);

  // toDataURL返回一个包含图片展示的 data URI
  let b64 = canvas.toDataURL().replace('data:image/png;base64,', '');
  // atob() 方法用于解码使用 base-64 编码的字符串；base-64 编码使用方法是 btoa() ，第十九式中有介绍
  let crc = bin2hex(atob(b64).slice(-16, -12));
  return crc;
}

// 调用时，你可以传入任何你想传的字符串，并不局限于传递domain，这里只是为了便于区分
console.log(getUUID('https://www.baidu.com/'));
```

> [PHP bin2hex() 函数](https://www.runoob.com/php/func-string-bin2hex.html){:target='\_blank'}

&emsp;&emsp;测试结果表明，同一浏览器访问该域时生成的 CRC 校验码总是不变。可以简单理解为**同样的 HTML Canvas 元素绘制操作，在不同的操作系统不同的浏览器上，产生的图片内容其实是不完全相同的**。出现这种情况可能是有几个原因：

- 在图片格式上，不同 web 浏览器使用了不同的图形处理引擎、不同的图片导出选项、不同的默认压缩级别等。
- 在像素级别来看，操作系统各自使用了不同的设置和算法来进行抗锯齿和子像素渲染操作。
- 即使是相同的绘图操作，最终产生的图片数据在 hash 层面上依然是不同的。

### FingerprintJS

&emsp;&emsp;**FingerprintJS** 是一个快速的浏览器指纹库，纯 `JavaScript` 实现，没有任何依赖。默认情况下，使用 `Murmur Hash` 算法返回一个 32 位整数，Hash 函数可以很容易地更换。同时，他也很轻量：开启 `gzipped` 后只有 `843 bytes`，匿名识别网络浏览器的准确率高达 `94%`。

> MurmurHash 是一种**非加密型哈希**函数，适用于一般的哈希检索操作。 由 Austin Appleby 在 2008 年发明， 并出现了多个变种，都已经发布到了公有领域(public domain)。与其它流行的哈希函数相比，对于规律性较强的 key，MurmurHash 的随机分布特征表现更良好。

&emsp;&emsp;FingerprintJS 的使用也比较简单：

```js
import FingerprintJS from '@fingerprintjs/fingerprintjs';

// 应用启动时初始化：Initialize an agent at application startup.
const fpPromise = FingerprintJS.load();

(async () => {
  // Get the visitor identifier when you need it.
  const fp = await fpPromise;
  const result = await fp.get();

  // This is the visitor identifier:
  const visitorId = result.visitorId;
  console.log(visitorId);
})();
```

- [fingerprintJS 介绍与使用](http://valve.github.io/fingerprintjs/){:target='\_blank'}
- [fingerprintJS - GitHub](https://github.com/fingerprintjs/fingerprintjs){:target='\_blank'}
- [fingerprintJS - 官方文档](https://fingerprintjs.com/){:target='\_blank'}

&emsp;&emsp;上面这些方法，能获得九成以上意义的唯一浏览器指纹，也许并不能完全真的唯一，因为比如重写相关 canvas 方法、使用类似[猫头鹰浏览器](https://www.owlssky.com/){:target='\_blank'}等特殊浏览器还是会使得相关方法失效，但是技术手段更多时候只是一个通用意义上的解决方案，增加破解的壁垒和成本，我认为支持常用场景下的开发是足够的了。

> 猫头鹰浏览器是基于 chromium 代码修改编译的浏览器，从底层对各种 API 做了修改，可以交给用户自定义返回各种数据，比如 Canvas、Webgl、AudioContext、WebRTC、字体、UserAgent、屏幕分辨率、CPU 核心数、内存大小、插件信息、语言等信息，这样就可以完全避免被“生成”唯一用户指纹了。因为在线公司、广告商和开发人员喜欢跟踪您的在线活动和操作，以便为您提供有针对性的广告，通常，大家认为这是侵犯用户隐私的。

&emsp;&emsp;有了唯一的浏览器指纹，我们就可以在类似统计 UV、点赞、投票的时候，带上相关指纹，自然就可以在极大程度上辨别用户是否存在刷票、刷访问量的行为了，不过，**浏览器指纹技术终归是把双刃剑**，在解决以上问题的同时，难免会给用户带来更多的信息泄漏困扰。

## 第五十七式：JavaScript Puzzlers! —— 一个可以拿来装逼的题库

&emsp;&emsp;作为程序员，需求无处不在，bug 无处不在，自然，装逼也可以无处不在。回想你的每一次面试，是否曾被面试官鄙视或者秀一脸？回想你和同事的每一次交流，是否曾被同事展示的古怪面试题或者奇技淫巧搞的无语难受 😓，想秀回去却苦于一时“脑中羞涩”，[JavaScript Puzzlers!](http://javascript-puzzlers.herokuapp.com/)就是一个收录的各种表态 JavaScript 题目的网站，有了它，现在妈妈再也不怕我找不到可以装逼的代码/题目了。

&emsp;&emsp;我们不妨先看几道题目：

```js
var min = Math.min(),
  max = Math.max();
min < max; // 答案: false
// 有趣的是, Math.min 不传参数返回 Infinity, Math.max 不传参数返回 -Infinity 😆
```

```js
// 这个还是相对容易的
var name = 'World!';
(function () {
  if (typeof name === 'undefined') {
    var name = 'Jack';
    console.log('Goodbye ' + name);
  } else {
    console.log('Hello ' + name);
  }
})();
// 答案：Goodbye Jack
```

```js
'1 2 3'.replace(/\d/g, parseInt); // 答案: 1, NaN, 3
```

&emsp;&emsp;不，我是一个前端工程师，工程师的事儿，能叫装逼么？也许它是没有太大用处的脑筋急转弯，但是这叫**小技巧后面藏着的大智慧**，哈哈～

&emsp;&emsp;话说回来，这些变态题目涉及的知识点很广，如果你能掌握这些题目背后的原理，也许就会对 JavaScript 的理解有一个不小的提升，下面将题目奉上，供诸君参阅：

> 目前由于未知原因，也许是去装逼答题的太多了吧 😄，[JavaScript Puzzlers!](http://javascript-puzzlers.herokuapp.com/)网站已不可访问，所幸您还可以通过下面两个 GitHub 链接查看具体的题目及解析。

- [44 个 Javascript 变态题解析 (上)](https://github.com/xiaoyu2er/blog/issues/1){:target='\_blank'}
- [44 个 Javascript 变态题解析 (下)](https://github.com/xiaoyu2er/blog/issues/3){:target='\_blank'}
- [JavaScript Puzzlers!](http://javascript-puzzlers.herokuapp.com/)

## 第五十八式：牛逼的浏览器地址栏

&emsp;&emsp;作为一名前端开发者，我们甚至每天与浏览器相伴的时间比女朋友/男朋友（如果有的话 😄）陪伴你的都要久，想想那每一个令人“不是那么期待”的早晨，每一个争分夺秒完成任务的黄昏，只有浏览器和编辑器一直是你忠实的伙伴，那么，你了解浏览器吗？了解那个每天都要输入`http://localhost:3000/`的地址栏吗？本节带你认识那些关于地址栏的好玩儿的细节。

### 浏览器地址栏运行 JavaScript 代码

&emsp;&emsp;对，你没看错，在“浏览器地址栏运行 JavaScript 代码”，做法是以`javascript:`开头后跟要执行的语句。需要注意的是如果是**通过复制、黏贴代码到浏览器地址栏的话，IE 及 Chrome 会自动去掉代码开头的 `javascript:`，所以需要手动添加起来才能正确执行**。并且，你需要在网站的地址栏运行`javascript:`，而不能在新打开的空标签页面上运行，那样也不会生效。

```js
// 点击确定后，会接着弹出：孤舟蓑笠翁，独钓寒江雪，点击取消则不会弹出
javascript: if (confirm('千山鸟飞绝，万径人踪灭'))
  alert('孤舟蓑笠翁，独钓寒江雪');
```

![浏览器地址栏运行 JavaScript 代码](https://king-hcj.github.io/images/posts/zhuangbility100/url_js.gif?raw=true)

### 浏览器地址栏运行 HTML 代码

&emsp;&emsp;如果说在“浏览器地址栏运行 JavaScript 代码”知道的人还算多的话，在“浏览器地址栏运行 HTML 代码”知道的人就要少一些了，在非 IE 内核的浏览器地址栏可以直接运行 HTML 代码！在地址栏输入以下代码然后回车运行，会出现下图所示的页面：

```html
data:text/html,
<h1>Nothing is given, Everything is earned!</h1>
```

![浏览器地址栏运行 HTML 代码](https://king-hcj.github.io/images/posts/zhuangbility100/url_html.png?raw=true)

### 浏览器可以是你的记事本

&emsp;&emsp;这个还是在浏览器地址栏上面做文章，将以下代码复制粘贴到浏览器地址栏，运行后浏览器就变成了一个简单原始的编辑器，话不多说，直接试试吧。

```html
data:text/html,
<html contenteditable></html>
```

![浏览器也是你的记事本](https://king-hcj.github.io/images/posts/zhuangbility100/url_html.gif?raw=true)

&emsp;&emsp;另外，补充一个万能的浏览器**撤销关闭页**快捷键：MAC OS 下，`command + shift + t`；Windows：`ctrl + shift + t`。这个**重新打开被关闭的页面**的快捷键，可以一直按，会依次恢复被关闭的页面哟～，要不，看看小伙伴都干了些什么，看看会不会被打 😜

> 参考资料：[这些鲜为人知的前端冷知识，你都 GET 了吗？](https://mp.weixin.qq.com/s/stGK1dvOV1skp8iubMWRZw){:target='\_blank'}

## 第五十九式：汪峰看了会流泪 —— 我是如何轻松走上百度热搜的？

&emsp;&emsp;**“汪峰上头条”**一直是娱乐界里的一个梗，每次在微博热搜榜看到汪峰，以为能登顶榜首，不想都会有其他的爆点压制住，不管粉丝怎么努力，汪峰还是迟迟上不了头条！

&emsp;&emsp;最后“帮汪峰上头条”反而成了热搜，甚至被收录入[百度百科](https://baike.baidu.com/item/%E5%B8%AE%E6%B1%AA%E5%B3%B0%E4%B8%8A%E5%A4%B4%E6%9D%A1/15079279){:target='\_blank'}🐶。

![汪峰](https://king-hcj.github.io/images/posts/zhuangbility100/wangfeng.jpeg?raw=true)

&emsp;&emsp;蒽 🤔，如果汪峰是个前端工程师，那热搜的事儿不是分分钟搞定吗？就算不懂 HTML，只要知道 HTML5 的`contenteditable`属性，控制台输入一个`document.body.contentEditable='true';`，热搜还不是随便改，想要多少有多少 😄。

![汪峰热搜](https://king-hcj.github.io/images/posts/zhuangbility100/wangfengresou.png?raw=true)

&emsp;&emsp;蒽 🤔，学了这招，甚至你可以轻松通过热搜向对象告白了...不过作为**专业的 web 应用和网站开发人员**，我们怎能满足于此呢？

&emsp;&emsp;同理，也是利用了 HTML5 中的`contenteditable`属性，巧妙的在 body 增加一个可编辑的 style 标签，那这个样式，我们在页面上都可以修改了，想想就...没有太多卵用，哈哈哈 😂，不过话说回来，这个属性在部分富文本编辑器上还是很有用处的。很多富文本编辑器就是基于`contenteditable`实现的，具体可以参考[深入浅出 contenteditable 富文本编辑器](https://zhuanlan.zhihu.com/p/37051858){:target='\_blank'}。

```html
<style style="display:block; height:50px;" contenteditable>
  body {
    background: red;
  }
</style>
```

&emsp;&emsp;效果图（图片来自下面的参考文章）：

![contentEditable](https://king-hcj.github.io/images/posts/zhuangbility100/contenteditable1.gif?raw=true)

&emsp;&emsp;你以为`contenteditable`只有`true`和`false`？其实它的可选值包括：

- contenteditable=""
- contenteditable="events"
- contenteditable="caret"
- contenteditable="plaintext-only"
- contenteditable="true"
- contenteditable="false"

&emsp;&emsp;除了 HTML5 的`contenteditable`属性，其实还有一个不常用的 css 属性 —— `user-modify`可以实现类似的效果，`user-modify`可取值为以下四个：

- `read-only`
- `read-write`
- `write-only`
- `read-write-plaintext-only`

&emsp;&emsp;其中，`write-only`不用在意，当下这个年代，基本上没有浏览器支持，以后估计也不会有。`read-only`表示只读，就是普通元素的默认状态。然后，`read-write`和`read-write-plaintext-only`会让元素表现得像个文本域一样，可以 focus 以及输入内容，前者可以输入富文本，而后者只能输入纯文本。

&emsp;&emsp;具体效果你可以通过审查元素，给元素添加 CSS 样式查看，也可以直接看张鑫旭大佬的[CSS user-modify 属性行为表现测试实例页面](https://www.zhangxinxu.com/study/201601/user-modify.html){:target='\_blank'}demo。

- [这些鲜为人知的前端冷知识，你都 GET 了吗？](https://mp.weixin.qq.com/s/stGK1dvOV1skp8iubMWRZw){:target='\_blank'}
- [小 tip: 如何让 contenteditable 元素只能输入纯文本](https://www.zhangxinxu.com/wordpress/2016/01/contenteditable-plaintext-only/){:target='\_blank'}

## 第六十式：蓦然回首，那人却在，灯火阑珊处 —— 我的鼠标去哪儿了

&emsp;&emsp;这个一个隐藏页面上鼠标的技巧，其实不值一提，也没有什么卵用。可以直接复制以下代码到控制台试试（此时如果在页面上吊起右键菜单，还是可以看见鼠标的）：

```js
var style = document.createElement('style');
document.head.appendChild(style);

style.type = 'text/css';
style.styleSheet
  ? (style.styleSheet.cssText = '* { cursor: none;!important; }')
  : style.appendChild(
      document.createTextNode('* { cursor: none;!important; }')
    );
```

&emsp;&emsp;原理非常简单，设置`cursor`属性为`none`即可：

```scss
* {
  cursor: none !important;
}
```

&emsp;&emsp;或者在浏览器地址栏输入以下内容：

> IE 和 Chrome 会自动隐去前面的 `javascript:` 然后把后面的部分当做查询字段。你需要复制以下代码黏贴后手动在前面加上 `javascript:`， 然后回车效果就出来了。

```js
javascript:function play(){var style = document.createElement('style');document.head.appendChild(style);style.type = 'text/css';style.styleSheet ? (style.styleSheet.cssText = '* { cursor: none !important; }') : style.appendChild(document.createTextNode('* { cursor: none !important; }'));}play();
```

> 参考资料：[前端随便玩儿](https://xiaohuazheng.github.io/2018/06/02/fed-play/){:target='\_blank'}

## 第六十一式：千呼万唤始出来，犹抱琵琶半遮面 —— 让你的网站模糊不清

&emsp;&emsp;也许你经常碰到这样的页面，当没有登录的时候，只能看到下面的效果：

![网站模糊不清](https://king-hcj.github.io/images/posts/zhuangbility100/kanzhun.png?raw=true)

&emsp;&emsp;当然，这里的模糊不清效果是通过背景图占位来做的，其实如果不考虑安全性、被破解等因素，我们也完全可以使用 css 来实现类似的效果。

```js
javascript:function play(){var style = document.createElement('style');document.head.appendChild(style);style.type = 'text/css';style.styleSheet ? (style.styleSheet.cssText = '* { color: transparent !important; text-shadow: #333 0 0 10px !important; }') : style.appendChild(document.createTextNode('* { color: transparent !important; text-shadow: #333 0 0 10px !important; }'));}play();
```

&emsp;&emsp;显而易见，这里主要是使用了以下两个 CSS 属性：

```less
color: transparent !important;
text-shadow: #333 0 0 10px !important;
```

![网站模糊不清](https://king-hcj.github.io/images/posts/zhuangbility100/pageblur.png?raw=true)

> 参考资料：[前端随便玩儿](https://xiaohuazheng.github.io/2018/06/02/fed-play/){:target='\_blank'}

## 第六十二式：网站如何屏蔽开发者工具

&emsp;&emsp;浏览器开发者工具是给我们这些**专业的 web 应用和网站开发人员**使用的工具（当然，到底专不专业，自己心里都会有点 B 数 😄），它的作用在于，帮助开发人员审查元素、对网页进行布局、帮助前端工程师更好的断点调试等，还可以使用工具查看网页加载过程，进行性能分析和优化，获取网页请求等（这个过程也叫做抓包）。笔者可以豪不违心的说，**离开了开发者工具，火热而有趣的的前端开发将变得索然无味**，因为我感受不到有比浏览器自带开发者工具更趁手的利器。当然，**据说真正的大神写出的 JS 和 CSS 都是不需要进行调试的**，那我们另当别论，显然我和真正的大神不是一类人。

&emsp;&emsp;既然开发者工具这么可爱、这么好用，那我们为什么要屏蔽它呢？ —— 可能是因为我们用过了、完成了开发工作，**不想让别人有机会发现那些我们自己也看不懂的代码以及其中蕴含的商业机密吧**，哼哼，果然是渣男～

&emsp;&emsp;那么，到底该如何做一个有能力可以**屏蔽开发者工具的渣男**呢？

&emsp;&emsp;也许依据打开控制台的几种方式，你自然就想到了：

- 监听 F12；
- 监听和禁止右键菜单（因为右键菜单里有“检查”选项可以打开控制台）;

&emsp;&emsp;但是这样真的就行了吗？不，我们依然可以通过浏览器右上角的三个点，找到更多工具中的开发者工具，然后点击打开。
![开发者工具](https://king-hcj.github.io/images/posts/zhuangbility100/consoleForB.png?raw=true)

&emsp;&emsp;那我们该以什么思路解决这一问题呢？网上解法有很多，有些非主流，**有些由于浏览器的升级已失效**，相关思路及链接会在本小节末尾给出，这里只说两个我觉得还不错的方法：

```js
const im = new Image();
Object.defineProperty(im, 'id', {
  get: function () {
    // 在这里放入你的代码，比如我这里会让他跳到百度
    console.log('Console is opened');
    window.location.href = 'http://www.baidu.com';
  },
});
console.log(im); //谷歌最新版失效

let num = 0; //谷歌最新版有效
const devtools = new Date();
devtools.toString = function () {
  num++;
  if (num > 1) {
    // 在这里放入你的代码，比如我这里会让他跳到百度
    console.log('Console is opened');
    // window.location.href = "http://www.baidu.com";
    return Date.prototype.toString.call(devtools); // 返回devtools结果（这一步不是必须的）
  }
};
console.log(devtools);
```

&emsp;&emsp;以上方法的核心原理在于一点：**只有打开控制台，才会执行 console 方法**，而使用`console`打印`Date`，会调用`Date`的`toString`方法，我们对`toString`方法做了改写。**如果直接注入代码，如`console = 1`，以上代码将失效**。

&emsp;&emsp;其他几种思路包括：

- 监听 F12 或者 shift+ctrl+i 调起开发者工具（无法防止先打开开发者工具，然后在地址栏输入网址的访问）；
- 监听和禁止右键菜单（因为右键菜单里有“检查”选项可以打开控制台）;
- 监视窗口大小（适用于未将开发工具设置成独立窗口的情况）；
- 监视 DOM 修改（适用于水印保护等场景）；
- 利用 debugger 的特性，无限递归。

&emsp;&emsp;除了以上方法，也有诸如[devtools-detector](https://github.com/AEPKILL/devtools-detector){:target='\_blank'}一类的插件，用来对开发者工具打开的监测问题，在此不过多赘述。

其他参考：

- [网站如何检测到是否开启开发者工具?](https://segmentfault.com/q/1010000039917621){:target='\_blank'}
- [JS 检测，禁用浏览器开发者工具之 6 大方法探讨](https://blog.csdn.net/cplvfx/article/details/108518077){:target='\_blank'}
- [前端开发中如何在 JS 文件中检测用户浏览器是否打开了调试面板（F12 打开开发者工具）？](https://www.zhihu.com/question/24188524){:target='\_blank'}
- [网站这样来屏蔽开发者工具，不比监听 MouseDown 舒服?](https://segmentfault.com/a/1190000040157555){:target='\_blank'}
- [JS 禁止打开控制台](https://segmentfault.com/a/1190000021459140){:target='\_blank'}

## 第六十三式：双兔傍地走，安能辨我是雄雌 —— 你和我谈性能？那么该如何对比各种写法的性能优劣

&emsp;&emsp;**性能、各种写法的优劣**是我们在日常开发、技术讨论中最常提及和关注的。在写一段代码的时候，很多同学可能都会想要知道它的性能到底如何，和其他写法比起来哪个更快，但却苦于没有好用的工具，只能手动测试运行时间，这样**一个是不方便，二是因为样本数太少误差较大**。那么，除了对原理解析这种理论性的东西之外，我们可以怎样简洁、清晰、高效的对比各种不同 JS 写法的执行速度和性能呢？这就涉及到 JS**性能测试工具**了。

&emsp;&emsp;JS 性能测试工具原理一般是将给定的测试用例循环在指定环境下运行许多次，然后输出比对结果。[JSBench.Me](https://jsbench.me/){:target='\_blank'}就是这样一款在线代码性能测试利器。

![jsbench](https://king-hcj.github.io/images/posts/zhuangbility100/jsbench.png?raw=true)

&emsp;&emsp;同时也有一款 npm 插件 —— 强大的基准测试库[Benchmark.js](https://www.npmjs.com/package/benchmark)官方说：

> Benchmark.js 是一个强大的[**基准测试**](https://blog.csdn.net/woniu317/article/details/82560312){:target='\_blank'}库，支持高分辨率计时器并返回具有统计意义的结果。正如在 jsPerf 上看到的那样。

&emsp;&emsp;上文提到的[jsPerf](https://jsperf.com/){:target='\_blank'}本来是我想要介绍的一个工具，奈何这款工具无情的拒绝了我 😭。

![jsperf](https://king-hcj.github.io/images/posts/zhuangbility100/jsperf.png?raw=true)

&emsp;&emsp;所以，我们还是看看`Benchmark.js`这个库的使用吧：

```js
var suite = new Benchmark.Suite();

// add tests
suite
  .add('RegExp#test', function () {
    /o/.test('Hello World!');
  })
  .add('String#indexOf', function () {
    'Hello World!'.indexOf('o') > -1;
  })
  // add listeners
  .on('cycle', function (event) {
    console.log(String(event.target));
  })
  .on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
  })
  // run async
  .run({ async: true });

// logs:
// => RegExp#test x 4,161,532 +-0.99% (59 cycles)
// => String#indexOf x 6,139,623 +-1.00% (131 cycles)
// => Fastest is String#indexOf
```

## 第六十四式：`requestIdleCallback` —— 浏览器一帧都干些什么，也会摸鱼 🐟 吗？

### 浏览器一帧都会干些什么？

&emsp;&emsp;我们都知道，页面的内容都是一帧一帧绘制出来的，浏览器刷新率代表浏览器一秒绘制多少帧。原则上说 1s 内绘制的帧数也多，画面表现就也细腻。

> 电影放映的标准是每秒放映 24 帧，也就是说电影每秒放映 24 幅画面，以达到动画的效果，超过 24 帧/s 连续的变化，视觉暂留就会将静态的画“动”起来。研究表明，人眼承受的极限为每秒 55 帧，还有研究表明，每秒 60 帧以上可以明显提升观众的观影感受。每秒 120 帧是每秒 24 帧的 5 倍，采用这样的拍摄技术可以让画面更加栩栩如生，让观众仿佛置身其中，给人一种似真似幻的感觉。

&emsp;&emsp;目前浏览器大多是 60Hz（60 帧/s），每一帧耗时也就是在 16.6ms 左右。那么在这一帧的（16.6ms） 过程中浏览器又干了些什么呢？

![浏览器一帧都会干些什么](https://king-hcj.github.io/images/posts/zhuangbility100/life-of-a-frame.png?raw=true)

&emsp;&emsp;通过上面这张图可以清楚的知道，浏览器一帧会经过下面这几个过程：

1. 接受输入事件，处理用户的交互，如点击、触碰、滚动等事件
2. 执行事件回调
3. 开始一帧
4. 执行 RAF (`RequestAnimationFrame`)
5. 页面布局，样式计算
6. 绘制渲染
7. 执行 RIC (`RequestIdelCallback`)

&emsp;&emsp;第七步的 RIC 事件不是每一帧结束都会执行，只有在一帧的 16.6ms 中做完了前面 6 件事儿且还有剩余时间，才会执行。如果一帧执行结束后还有时间执行 RIC 事件，那么下一帧需要在事件执行结束才能继续渲染，所以 RIC 执行不要超过 30ms，如果长时间不将控制权交还给浏览器，会影响下一帧的渲染，导致页面出现卡顿和事件响应不及时。

### requestIdleCallback 的启示

&emsp;&emsp;我们以浏览器是否有剩余时间作为任务中断的标准，那么我们需要一种机制，当浏览器有剩余时间时通知我们。

```js
requestIdleCallback((deadline) => {
  // deadline 有两个参数
  // timeRemaining(): 当前帧还剩下多少时间，最大值50ms
  // didTimeout: 是否超时
  // 另外 requestIdleCallback 后如果跟上第二个参数 {timeout: ...} 则会强制浏览器在当前帧执行完后执行。
  if (deadline.timeRemaining() > 0) {
    // TODO
  } else {
    requestIdleCallback(otherTasks);
  }
});
```

```js
// 用法示例
let tasksNum = 10000;

requestIdleCallback(unImportWork);

function unImportWork(deadline) {
  while (deadline.timeRemaining() && tasksNum > 0) {
    console.log(`执行了${10000 - tasksNum + 1}个任务`);
    tasksNum--;
  }
  if (tasksNum > 0) {
    // 在未来的帧中继续执行
    requestIdleCallback(unImportWork);
  }
}
```

&emsp;&emsp;其实部分浏览器已经实现了这个 API，这就是 requestIdleCallback。但是由于以下因素，Facebook 在 React 的重构升级中， 抛弃了 requestIdleCallback 的原生 API，而实现了功能更完备的 `requestIdleCallbackpolyfill`，这就是**Scheduler**。除了在空闲时触发回调的功能外，Scheduler 还提供了多种调度优先级供任务设置：

- 浏览器兼容性；
- 触发频率不稳定，受很多因素影响。比如当我们的浏览器切换 tab 后，之前 tab 注册的 requestIdleCallback 触发的频率会变得很低。

&emsp;&emsp;`requestIdleCallback` 的 callback 会在浏览器的空闲时间运行，而在[w3c 文档](https://www.w3.org/TR/requestidlecallback/#idle-periods){:target='\_blank'}里，空闲时间分两种：

- 在执行一段连续的动画时，将给定帧提交到屏幕与开始处理下一帧之间的时间，这段时间内属于空闲时间。在连续动画和屏幕更新期间，此类空闲时间会频繁发生，但通常会非常短（即，如果我们的屏幕是 60hz（1s 内屏幕刷新 60 次）的设备，小于 16 毫秒），如下图所示。

![帧间空闲期](https://king-hcj.github.io/images/posts/zhuangbility100/idle-period1.png?raw=true)

- 另外一种空闲时间，当用户属于空闲状态（没有与网页进行任何交互），并且屏幕中也没有动画执行。此时空闲时间理论上是无限长的。但为了避免在不可预测的任务（例如处理用户输入）引起用户可察觉的延迟，这些空闲时间段的长度应限制为**最大值 50ms**，一旦空闲期结束，浏览器可以安排另一个空闲期。

![timeRemaining](https://king-hcj.github.io/images/posts/zhuangbility100/idle-period2.png?raw=true)

&emsp;&emsp;也就是说，即使浏览器一直处于空闲状态的话，`deadline.timeRemaining`可以得到的最长时间，也是 50ms，这是 [w3c 标准](https://www.w3.org/TR/requestidlecallback/#idle-periods){:target='\_blank'} 规定的。一些低优先级的任务可使用 `requestIdleCallback` 等浏览器不忙的时候来执行，同时因为时间有限，它所执行的任务应该尽量是能够量化，细分的微小任务。

> 50 ms 的最大截止时间来自一个 `RESPONSETIME`研究，该研究表明，对 100 毫秒内用户输入的响应通常被人类感知为瞬时的。将空闲期限限制为 50 ms 意味着即使用户输入在空闲任务开始后立即发生，用户代理仍有剩余的 50 ms 时间来响应用户输入，而不会产生用户可察觉的延迟。

&emsp;&emsp;当设备的性能越来越好，浏览器支持的效果越来越炫，浏览器的开发者开始越来越多的考虑使用原生 API 来处理一些之前特别占用性能的功能，自从最初的 `requestAnimationFrame`，`InsterSectionObserver`，到`requestIdleCallback`，对于前端的将来，充满希望，没错，我们都会有“光明的未来”，哈哈 😄，关于浏览器的更多细节，可以参考我之前的两篇文章：

- [浏览器是如何工作的：Chrome V8 让你更懂 JavaScript](https://segmentfault.com/a/1190000037435824){:target='\_blank'}
- [47 张图带你走进浏览器的世界](https://segmentfault.com/a/1190000040330317){:target='\_blank'}

### 拓展阅读与参考

- [requestIdleCallback-后台任务调度](http://www.zhangyunling.com/702.html){:target='\_blank'}
- [浏览器帧原理剖析](https://github.com/xitu/gold-miner/blob/master/TODO1/the-anatomy-of-a-frame.md){:target='\_blank'}
- [Accurately measuring layout on the web](https://nolanlawson.com/2018/09/25/accurately-measuring-layout-on-the-web/){:target='\_blank'}
- [Cooperative Scheduling of Background Tasks](https://www.w3.org/TR/requestidlecallback/){:target='\_blank'}

## 第六十五式：如何生成包含大小写字母和数字的随机字符串？

&emsp;&emsp;项目中，也许我们会遇到需要使用 JS 生成特定长度随机字符串的需求，比如用来做 Hash 值、uuid、随机码等，除了可以借助一些库和插件之外，其实部分场景下，我们完全可以自定义函数实现**指定长度随机字符串**的生成。

&emsp;&emsp;简洁版函数只需要两行代码：

```js
/**
 * 生成长度为len的包含a-z、A-Z、0-9的随机字符串
 */
function generateStr(len = 18) {
  // 一行代码生成0-9、A-Z、a-z、总长度为62的字符数组
  var arr = [...new Array(62)].map((item, i) =>
    String.fromCharCode(i + (i < 10 ? 0 : i < 36 ? 7 : 13) + 48)
  );
  return [...new Array(len)]
    .map(() => arr[Math.floor(Math.random() * arr.length)])
    .join('');
}
generateStr(18);
```

&emsp;&emsp;如果担心重复，则可以添加一个`Map`来缓存已经生成的字符串，每次返回时判断一下：

```js
/**
 * 生成长度为len的包含a-z、A-Z、0-9的随机字符串
 */
const cacheMap = new Map(); // 缓存已经生成过了的字符串
// 一行代码生成0-9、A-Z、a-z、总长度为62的字符数组
const arr = [...new Array(62)].map((item, i) =>
  String.fromCharCode(i + (i < 10 ? 0 : i < 36 ? 7 : 13) + 48)
);
function generateStr(len = 18) {
  const str = [...new Array(len)]
    .map(() => arr[Math.floor(Math.random() * arr.length)])
    .join('');
  if (cacheMap.has(str)) {
    // 这里会有死循环的问题，比如下面的for循环，i设置的大于62
    console.log(cacheMap, str);
    // i 值越大，len越小，重复的概率越大
    return generateStr(len);
  } else {
    cacheMap.set(str, true);
    return str;
  }
}
for (let i = 0; i < 20; i++) {
  // 长度选小一点，测试20次
  // i设置的大于62会出现死循环，可先算出排列组合数进行预防
  // i 值越大，len越小，重复的概率越大，执行时间越长
  generateStr(1);
}
console.log(cacheMap);
```

&emsp;&emsp;1 行代码生成指定长度数字：这种方法有缺点，低概率会出现位数不足的问题（原因是 0.00566 \* 100000 = 566，会丢失前面的 0），不推荐使用。

```js
// len 最多16，可能出现
function generateNum(len = 16) {
  return Math.floor(Math.random() * Math.pow(10, len));
}
```

- [2 行代码生成包含大小写字母和数字的随机字符串](http://blog.haoji.me/generate-random-string.html){:target='\_blank'}

## 第六十六式：何故中道废，自遗今日殃 —— 如何在离开页面时发送请求？

&emsp;&emsp;用户卸载网页的时候（关闭浏览器、刷新浏览器或者跳转其他页面时），有时需要向服务器发送一些统计数据；同时，前端在做异常监控、统计页面访问时长时，也会需要在页面崩溃、关闭的时候发送请求。很自然的做法是在 `unload` 事件或 `beforeunload` 事件的监听函数里面，使用 `XMLHttpRequest` 对象发送数据。但是，这样做不是很可靠，因为 **`XMLHttpRequest` 对象是异步发送，很可能在它即将发送的时候，页面和相关资源已经卸载，会引起 `function not found` 的错误，从而导致发送取消或者发送失败**。

&emsp;&emsp;解决方法就是 `AJAX` 通信改成同步发送，即只有发送完成，页面才能卸载。但是，**很多浏览器已经不支持同步的 `XMLHttpRequest` 对象了**（即 `open()`方法的第三个参数为 `false`）：

```js
window.addEventListener('unload', logData, false);

function logData() {
  var client = new XMLHttpRequest();
  // 第三个参数表示同步发送
  client.open('POST', '/log', false);
  client.setRequestHeader('Content-Type', 'text/plain;charset=UTF-8');
  client.send(analyticsData);
}
```

&emsp;&emsp;同步通信有几种变通的方法：

- 一种做法是新建一个`<img>`元素，数据放在 src 属性，作为 URL 的查询字符串，这时浏览器会等待图片加载完成（服务器回应），再进行卸载。
- 另一种做法是创建一个循环，规定执行时间为几秒钟，在这几秒钟内把数据发出去，然后再卸载页面。

&emsp;&emsp;通过在 unload 事件处理器中，创建一个图片元素并设置它的 src 属性的方法来延迟卸载以保证数据的发送。因为**绝大多数浏览器会延迟卸载以保证图片的载入，所以数据可以在卸载事件中发送**。

```js
const reportData = (url, data) => {
  let img = document.createElement('img');
  const params = [];
  Object.keys(data).forEach((key) => {
    params.push(`${key}=${encodeURIComponent(data[key])}`);
  });
  img.onload = () => (img = null);
  img.src = `${url}?${params.join('&')}`;
};
```

&emsp;&emsp;这些做法的共同问题是，卸载的时间被硬生生拖长了，后面页面的加载被推迟了，用户体验不好。

&emsp;&emsp;而`Navigator.sendBeacon` 就是天生用来解决“网页离开时的请求发送”问题的，该方法可用于通过 HTTP 将少量数据**异步**传输到 Web 服务器。可以发现，同样是采用异步的方式，但是`Navigator.sendBeacon`**发出的异步请求是作为浏览器任务执行的，与当前页面是脱钩的**。因此该方法不会阻塞页面卸载流程和延迟后面页面的加载。当用户代理成功把数据加入浏览器**传输队列**时，`sendBeacon()` 方法将会返回 `true`，如果受到队列总数、数据大小的限制后，会返回 `false`。返回`true`后，只是表示进入了发送队列，浏览器会尽力保证发送成功，但是否成功了，无法判断。

&emsp;&emsp;目前 Google Analytics 使用 `Navigator.sendBeacon` 来上报数据。`Navigator.sendBeacon`方法接受两个参数，第一个参数是目标服务器的 URL，第二个参数是所要发送的数据（可选），可以是任意类型（字符串、表单对象、二进制对象等等）。这个方法的返回值是一个布尔值，成功发送数据为 true，否则为 false。该方法发送数据的 HTTP 方法是 POST，可以跨域，类似于表单提交数据。它不能指定回调函数。

```js
window.addEventListener('unload', analytics, false);

function analytics(state) {
  if (!navigator.sendBeacon) return;

  var URL = 'http://example.com/analytics';
  var data = 'state=' + state + '&location=' + window.location;
  navigator.sendBeacon(URL, data);
}
```

&emsp;&emsp;`sendBeacon`方法具有如下特点：

- 发出的是异步请求，并且是 POST 请求，后端解析参数时，需要注意处理方式；
- 发出的请求，是放到的浏览器任务队列执行的，脱离了当前页面，所以不会阻塞当前页面的卸载和后面页面的加载过程，用户体验较好；
- 只能判断出是否放入浏览器任务队列，不能判断是否发送成功；
- `Beacon API`不提供相应的回调，因此后端返回最好省略`response body`。

### 参考资料

- [Google Analytics added sendBeacon functionality to Universal Analytics JavaScript API](https://www.thyngster.com/google-analytics-added-sendbeacon-functionality-universal-analytics-javascript-api){:target='\_blank'}
- [Navigator.sendBeacon 无阻塞发送统计数据](https://blog.csdn.net/u012193330/article/details/102778979){:target='\_blank'}
- [Navigator.sendBeacon() —— MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Navigator/sendBeacon){:target='\_blank'}

## 第六十七式：身无彩凤双飞翼，心有灵犀一点通 —— 如何让 VSCode、浏览器和你心有灵犀，一点就“通”？

&emsp;&emsp;在刚接手比较大型项目时，也许你会经常碰到这样的问题：需要修改一个页面，却苦于对项目结构不熟悉、文件夹结构不规范等，不知道文件在哪个目录下；要改一个 bug，却难以迅速定位到问题所在文件，这时候你是否幻想过，如果可以点击页面上的组件，在 VSCode 中自动跳转到对应文件，并定位到对应行号岂不美哉？

&emsp;&emsp;[react-dev-inspector ](https://github.com/zthxxx/react-dev-inspector){:target='\_blank'}就是满足你这些幻想的梦中女神，这个插件允许用户通过简单的点击直接从浏览器 React 组件跳转到本地 IDE 代码。TA 不仅能满足你的幻想，使用起来也是非常简单方便，看完这张动图，懂得都懂 😜：

![react-dev-inspector](https://react-dev-inspector.zthxxx.me/images/inspect.gif?raw=true)

&emsp;&emsp;如果看完图，你还不放心的话，不妨现在就先在[在线预览体验](https://react-dev-inspector.zthxxx.me/){:target='\_blank'}地址体验一下（在线体验地址里，激活点击跳转的快捷键是四个按键的组合，不过你完全不用担心，因为这个组合是可以自定义的，你完全可以改成两个按键的组合）。

&emsp;&emsp;前面说了，使用方式非常简单，只需三步：

- 首先，保证你的命令行本身可以通过 `code` 命令打开 VSCode 编辑器，比如`code .`，用 VSCode 打开当前文件夹下的文件；如果没有配置这个，可以参考以下步骤：

  - 首先打开 VSCode。
  - 使用 `command + shift + p` (注意 window 下使用 `ctrl + shift + p`) 然后搜索 code，选择 `install 'code' command in path`。

- 安装`react-dev-inspector`，修改`babelrc.js`和`webpack.config.ts`文件：

```js
// babelrc.js
export default {
  plugins: [
    // plugin options docs see:
    // https://github.com/zthxxx/react-dev-inspector#inspector-babel-plugin-options
    'react-dev-inspector/plugins/babel',
  ],
};

// webpack.config.ts
import type { Configuration } from 'webpack';
import { launchEditorMiddleware } from 'react-dev-inspector/plugins/webpack';

const config: Configuration = {
  /**
   * [server side] webpack dev server side middleware for launch IDE app
   */
  devServer: {
    before: (app) => {
      app.use(launchEditorMiddleware);
    },
  },
};
```

- 对项目入口文件进行以下修改：

```jsx
import React from 'react';
import { Inspector, InspectParams } from 'react-dev-inspector';

const InspectorWrapper =
  process.env.NODE_ENV === 'development' ? Inspector : React.Fragment;

export const Layout = () => {
  // ...

  return (
    <InspectorWrapper
      // props docs see:
      // https://github.com/zthxxx/react-dev-inspector#inspector-component-props
      // 这里可以随便配置快捷键，你可以改成两个按键的组合
      keys={['control', 'shift', 'command', 'c']}
      disableLaunchEditor={false}
      onHoverElement={(params: InspectParams) => {}}
      onClickElement={(params: InspectParams) => {}}
    >
      {/*这里是你原来的入口组件jsx*/}
      <YourComponent>...</YourComponent>
    </InspectorWrapper>
  );
};
```

&emsp;&emsp;当然，这个插件目前也支持在`Vite2`、`create-react-app`、`Umi`中使用，接入也都很简单，可以参考[react-dev-inspector GitHub 仓库及使用](https://github.com/zthxxx/react-dev-inspector){:target='\_blank'}文档。

&emsp;&emsp;这个插件的原理，简单说也分为三步：

- **构建时**：添加一个 `webpack loader` 去**遍历编译前的 AST 节点，在 DOM 节点上加上文件路径、名称等相关的信息**。使用 `DefinePlugin` 注入项目运行时的根路径，以便后续用来拼接文件路径，打开 VSCode 相应的文件。

- **运行时**：需要在项目的最外层包裹 `Inspector` 组件，用于在浏览器端监听快捷键，弹出 debug 的遮罩层，在点击遮罩层的时候，利用 `fetch` 向本机服务发送一个打开 VSCode 的请求。

- **本地服务**：需要启动 `react-dev-utils` 里的一个中间件，监听一个特定的路径，在本机服务端执行打开 VSCode 的指令，如`code src/pages/index.ts`。

&emsp;&emsp;如果你对其中的原理很感兴趣，可以参考字节跳动 Web Infra 团队的文章——[开发提效——我点了页面上的元素，VSCode 乖乖打开了对应的组件？原理揭秘](https://juejin.cn/post/6901466406823575560){:target='\_blank'}。

## 第六十八式：摸鱼想藏？何不让浏览器告诉大家你正在浏览黄色网站

&emsp;&emsp;上班滑水摸鱼，同事来了赶紧切换浏览器界面？何不直接让同事以为你在浏览某些“正经”网站？

&emsp;&emsp;以下代码，当切换浏览器 tab，使得页面不可见时，会更改不可见页面的 title 和 icon 显示效果，可以直接复制以下代码在控制台尝试。

```js
let interval = null;
(function () {
  // 获取icon所在link，rel*="icon"是为了兼容rel="shortcut icon"的情况
  const Link = document.querySelector('link[rel*="icon"]');
  const sourceTitile = document.title;
  const sourceLink = Link.href;
  document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
      // 让title文字动起来，更加醒目
      interval = setInterval(scroll, 1000);
      // 修改title，这里也可以直接写文字，之所以用编码后的嘛，🤔，是因为不想让你一眼看出代码里下了毒...
      document.title = decodeURI(
        '%E6%82%A8%E6%AD%A3%E5%9C%A8%E6%B5%8F%E8%A7%88%E9%BB%84%E8%89%B2%E7%BD%91%E7%AB%99...'
      );
      Link.href =
        'https://king-hcj.github.io/images/posts/zhuangbility100/nh.gif?raw=true';
      Link.type = 'image/gif';
    } else {
      clearInterval(interval);
      document.title = sourceTitile;
      Link.href = sourceLink;
    }
  });
})();
function scroll() {
  // 让title文字动起来，更加醒目
  const titleInfo = document.title;
  const firstInfo = titleInfo.charAt(0);
  const lastInfo = titleInfo.substring(1, titleInfo.length);
  document.title = lastInfo + firstInfo;
}
```

&emsp;&emsp;效果图：

![效果图](https://king-hcj.github.io/images/posts/zhuangbility100/hs.png?raw=true)

## 第六十九式：带有 Id 属性的元素，会创建全局变量

&emsp;&emsp;关于 HTML 中的 Id 属性，想必您已经再熟悉不过了：

- id 属性规定 HTML 元素的唯一的 id；
- id 在 HTML 文档中必须是唯一的；
- id 属性可用作链接锚（link anchor），通过 JavaScript（HTML DOM）或通过 CSS 为带有指定 id 的元素改变或添加样式。

&emsp;&emsp;对于 DOM 树中具有 ID 的给定 HTML 元素，可以使用其 ID 作为变量名来检索 div。所以，下面的`console.log(foo)`会打印出 id 为 foo 的这个 div DOM 元素：

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title></title>
  </head>
  <body>
    <div id="foo"></div>

    <script type="text/javascript">
      console.log(foo); // 会输出id为foo的div 这个 DOM元素
    </script>
  </body>
</html>
```

&emsp;&emsp;如果您不信，那就此时打开您的网站看看：

![Id_property](https://king-hcj.github.io/images/posts/zhuangbility100/Id_property.png?raw=true)

&emsp;&emsp;那么，这是否也意味着可以在这些浏览器中使用它来替代 getElementById 方法呢？实际项目中最好还是老老实实该怎么写就怎么写，毕竟如果这样，大概率你会被后来的接手者或者同事问候的 😄 ～

- [Do DOM tree elements with ids become global variables?](https://stackoverflow.com/questions/3434278/do-dom-tree-elements-with-ids-become-global-variables){:target='\_blank'}

## 第七十式：利用 a 标签解析 url

&emsp;&emsp;很多时候我们有从一个 URL 中提取域名，查询关键字，变量参数值等的需要，而万万没想到可以让浏览器方便地帮我们完成这一任务而不用我们写正则去抓取。方法是在 JS 代码里先创建一个 a 标签然后将需要解析的 URL 赋值给 a 的 href 属性，然后就得到了一切我们想要的了。

```js
var a = document.createElement('a');
a.href = 'https://juejin.cn/user/2796746682939054/posts';
console.log(a.host);
```

&emsp;&emsp;利用这一原理，稍微扩展一下，就得到了一个更加健壮的解析 URL 各部分的通用方法了，下面提供一个网上常见的封装示例。

```js
function urlParse(url, key) {
  var a = document.createElement('a');
  a.href = url;
  var result = {
    href: url,
    protocol: a.protocol.replace(':', ''),
    port: a.port,
    query: a.search,
    params: (function () {
      var ret = {},
        centArr,
        seg = a.search.replace(/^\?/, '').replace(/^\?/, '').split('&');
      for (i = 0, len = seg.length; i < len; i++) {
        if (!seg[i]) {
          continue;
        }
        centArr = seg[i].split('=');
        ret[centArr[0]] = centArr[1];
      }
      return ret;
    })(),
    hash: a.hash,
    file: (a.pathname.match(/\/([^\/?#]+)$/i) || [, ''])[1],
    path: a.pathname.replace(/^([^\/])/, '/$1'),
    relative: (a.href.match(/tps?:\/\/[^\/]+(.+)/) || [, ''])[1],
    segments: a.pathname.replace(/^\//, '').split('/'),
  };
  a = null;
  return key ? result[key] : result;
}
```

&emsp;&emsp;H5 有新的 API URL 也可以快速的处理一个链接，相对更加简洁。

```js
var url = new URL('https://www.baidu.com/')
url.hash
...
```

- [这些鲜为人知的前端冷知识，你都 GET 了吗？](https://mp.weixin.qq.com/s/stGK1dvOV1skp8iubMWRZw){:target='\_blank'}

## 第七十一式：你的在线 IDE —— WebContainers，一个可以在浏览器运行 Node.js 的神器

&emsp;&emsp;在最新的 `Google I/O` 主题演讲中 `stackblitz` 向大家介绍了他们与 `Next.js` 和 `Google` 团队合作开发的在线 `IDE WebContainers`：

> 几年前，我们意识到网络正朝着一个关键的拐点发展。`WebAssembly` 的出现让我们可以有能力编写基于 `WebAssembly` 的操作系统，这个操作系统的功能强大到可以完全在浏览器中运行 `Node.js`。我们设计了一个**比本地环境更快，更安全和一致的高级开发环境，可以实现无缝代码协作，而不需要设置本地环境**，两年后的今天，他终于诞生了！

![StackBlitz](https://king-hcj.github.io/images/posts/zhuangbility100/stackBlitz1.png?raw=true)

&emsp;&emsp;官网声称[`StackBlitz.com`](https://stackblitz.com/){:target='\_blank'}是这个星球上**最快、最安全的开发环境**，它的 logo 也是一个闪电的标识：

![StackBlitz](https://king-hcj.github.io/images/posts/zhuangbility100/stackBlitz2.png?raw=true)

&emsp;&emsp;`WebContainers` 允许你创建一个完整的 `Node.js`环境，它可以在**毫秒内启动**，并且可以实现**一键联机和链接共享**。这个环境具有 **`VS Code` 强大的编辑功能，完整的终端，还有 npm 等功能**。它也完全在你的浏览器中运行，这带来了一些关键的好处：

- 比本地环境快。**构建速度比 `yarn/npm` 快 20％，包安装速度可以快 5 倍**。
- 支持在浏览器中调试 `Node.js`。与 `Chrome DevTools` 的无缝集成可实现本机后端调试，无需安装扩展。
- 默认安全。所有代码执行都发生在浏览器的安全沙箱中，而不是在远程 `VM` 或本地二进制文件上。

&emsp;&emsp;同样，这些环境不需要在远程服务器上运行。而是每个环境都完全包含在你的 Web 浏览器中。没错：Node.js 运行时本身是第一次在浏览器内部本机运行。你可以在[`StackBlitz.com`](https://stackblitz.com/){:target='\_blank'} 上自己尝试一下，下面是我截取的页面截图：

![StackBlitz](https://king-hcj.github.io/images/posts/zhuangbility100/stackblitz3.png?raw=true)

- [​ 推荐一个神器！可以在浏览器运行 Node.js](https://mp.weixin.qq.com/s/1xiWegxUyTYekIRrvwqQFA){:target='\_blank'}
- [在线 IDE WebContainers 体验地址](https://stackblitz.com/){:target='\_blank'}

## 第七十二式：如何一起富强、民主、文明、和谐、自由、平等？

&emsp;&emsp;**别人写文章都妙笔生花，我上个网，我上个网鼠标点过的地方都“富强、民主、文明、和谐、自由、平等”，我骄傲了吗？**

&emsp;&emsp;**复制以下代码到控制台执行，然后，开始点击你的页面吧**～ 😎

```js
(function () {
  var playWords = [
      '富强',
      '民主',
      '文明',
      '和谐',
      '自由',
      '平等',
      '公正',
      '法制',
      '爱国',
      '敬业',
      '诚信',
      '友善',
    ], // 点击展示的词库
    colors = ['#ff4545', '#3eff00'], // 颜色库
    wordIdx = Math.floor(Math.random() * playWords.length); // 随机取词下标
  document.body.addEventListener('click', function (e) {
    // 监听点击事件
    if (e.target.tagName == 'A') {
      // a标签
      return;
    }
    var x = e.pageX,
      y = e.pageY, // 获取点击位置
      span = document.createElement('span'); // 创建展示playWords的span

    span.textContent = playWords[wordIdx];
    wordIdx = (wordIdx + 1) % playWords.length;
    color = colors[Math.floor(Math.random() * colors.length)]; // 随机取色
    span.style.cssText = [
      'z-index: 9999; position: absolute; top: ',
      y - 20,
      'px; left: ',
      x,
      'px; font-weight: bold; color: ',
      color,
    ].join('');
    document.body.appendChild(span);
    renderWords(span);
  });

  function renderWords(el) {
    var i = 0,
      top = parseInt(el.style.top);

    var playTimer = setInterval(function () {
      if (i > 180) {
        clearInterval(playTimer);
        el.parentNode.removeChild(el);
      } else {
        i += 3;
        el.style.top = top - i + 'px';
        el.style.opacity = (180 - i) / 180;
      }
    }, 16.7);
  }
})();
```

> 参考资料：[前端随便玩儿](https://xiaohuazheng.github.io/2018/06/02/fed-play/){:target='\_blank'}
