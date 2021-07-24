---
layout: post
title: 前端装逼技巧 108 式（四）—— 一起摇摆
categories: JavaScript
description: 前端装逼技巧 108 式，助你更懂JS原理
keywords: JS, 前端, JavaScript
---

> 原来《人月神话》不是本奇幻小说！ 原来《代码大全》不是一堆开源代码！ 原来《鸟哥的 Linux 私房菜》不是教你做菜！ 原来《边城》不是教你写代码的！ 原来《深入浅出 HTML》不是教你**H**ow **T**o **M**ake **L**ove。

<!-- 建议适当调整，此篇装逼干活略多 -->

## 想藏？让浏览器告诉大家你正在浏览黄色网站

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

## 第五十五式：网站如何屏蔽开发者工具

&emsp;&emsp;浏览器开发者工具是给我们这些**专业的 web 应用和网站开发人员**使用的工具（当然，到底专不专业，自己心里都会有点 B 数 😄），它的作用在于，帮助开发人员审查元素、对网页进行布局、帮助前端工程师更好的断点调试等，还可以使用工具查看网页加载过程，进行性能分析和优化，获取网页请求等（这个过程也叫做抓包）。笔者可以豪不违心的说，**离开了开发者工具，火热而有趣的的前端开发将变得索然无味**，因为我感受不到有比浏览器自带开发者工具更趁手的利器。当然，**据说真正的大神写出的 JS 和 CSS 都是不需要进行调试的**，那我们另当别论，显然我和真正的大神不是一类人。

&emsp;&emsp;既然开发者工具这么可爱、这么好用，那我们为什么要屏蔽它呢？ —— 可能是因为我们用过了、完成了开发工作，不想让别人有机会发现那些我们自己也看不懂的代码以及其中蕴含的商业机密吧，哼哼，果然是渣男～

&emsp;&emsp;那么，到底该如何做一个有能力可以**屏蔽开发者工具的渣男**呢？

&emsp;&emsp;也许依据打开控制台的几种方式，你自然就想到了：

- 监听 F12；
- 监听和禁止右键菜单（因为右键菜单里有“检查”选项可以打开控制台）;

&emsp;&emsp;但是这样真的就行了吗？不，我们依然可以通过浏览器右上角的三个点，找到更多工具中的开发者工具，然后点击打开。
![开发者工具](https://king-hcj.github.io/images/posts/zhuangbility100/consoleForB.png?raw=true)

&emsp;&emsp;那我们该以什么思路解决这一问题呢？网上解法有很多，有些非主流，**有些由于浏览器的升级已失效**，相关思路及链接会在本小结末尾给出，这里只说两个我觉得还不错的方法：

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

&emsp;&emsp;以上方法的核心原理在于一点：**只有打开控制台，才会执行 console 方法**，而适用`console`打印`Date`，会调用`Date`的`toString`方法，而我们对`toString`方法做了改写。**如果直接注入代码，如`console = 1`，以上代码将失效**。

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

## 第五十六式：纯前端生成和解析 Excel

- [纯前端生成和解析 Excel](https://king-hcj.github.io/2020/05/19/export-excel/){:target='\_blank'}
- [Node.js + Vue 实现 Excel 导出与保存](https://mp.weixin.qq.com/s/PHIbCZe31rATZj34xgdKkA){:target='\_blank'}

## 第五十七式：JavaScript Puzzlers!

&emsp;&emsp;

一些很细节但可能没有太大用处的 JavaScript 脑筋急转弯

- [44 个 Javascript 变态题解析 (上)](https://github.com/xiaoyu2er/blog/issues/1){:target='\_blank'}
- [44 个 Javascript 变态题解析 (下)](https://github.com/xiaoyu2er/blog/issues/3){:target='\_blank'}
- [JavaScript Puzzlers!](http://javascript-puzzlers.herokuapp.com/)

## 第五十八式：牛逼的浏览器地址栏

- 浏览器地址栏运行 JavaScript 代码
- 浏览器地址栏运行 HTML 代码
- 浏览器秒变编辑器

- [这些鲜为人知的前端冷知识，你都 GET 了吗？](https://mp.weixin.qq.com/s/stGK1dvOV1skp8iubMWRZw){:target='\_blank'}
- [关于浏览器，你不知道的几个骚操作~](https://blog.csdn.net/weixin_38753698/article/details/106654346){:target='\_blank'}

## 第五十九式：汪峰看了会流泪 —— 我是如何轻松走上百度热搜的？

&emsp;&emsp;**“汪峰上头条”**一直是娱乐界里的一个梗，每次在微博热搜榜看到汪峰，以为能登顶榜首，不想都会有其他的爆点压制住，不管粉丝怎么努力，汪峰还是迟迟上不了头条！

&emsp;&emsp;最后“帮汪峰上头条”反而成了热搜，甚至被收录入[百度百科](https://baike.baidu.com/item/%E5%B8%AE%E6%B1%AA%E5%B3%B0%E4%B8%8A%E5%A4%B4%E6%9D%A1/15079279){:target='\_blank'}🐶。

![汪峰](https://king-hcj.github.io/images/posts/zhuangbility100/wangfeng.jpeg?raw=true)

&emsp;&emsp;蒽 🤔，如果汪峰是个前端工程师，那热搜的事儿不是分分钟搞定吗？就算不懂 HTML，只要知道 HTML5 的`contenteditable`，属性，控制台输入一个`document.body.contentEditable='true';`，热搜还不少随便改，想要多少有多少 😄。

![汪峰热搜](https://king-hcj.github.io/images/posts/zhuangbility100/wangfengresou.png?raw=true)

&emsp;&emsp;蒽 🤔，学了这招，甚至你可以轻松通过热搜像对象告白了...不过作为**专业的 web 应用和网站开发人员**，我们怎能满足于此呢？

&emsp;&emsp;同理，也是利用了 HTML5 中的`contenteditable`属性，巧妙的在 body 增加一个可编辑的 style 标签，那这个样式，我们在页面上都可以修改了，想想就...没有太多卵用，哈哈哈 😂，不过话说回来，这个属性在部分富文本编辑器上还是很有用处的。

```html
<style style="display:block; height:50px;" contenteditable>
  body {
    background: red;
  }
</style>
```

&emsp;&emsp;效果图（图片来自下面的参考文章）：

![contentEditable](https://king-hcj.github.io/images/posts/zhuangbility100/contenteditable1.gif?raw=true)

- [这些鲜为人知的前端冷知识，你都 GET 了吗？](https://mp.weixin.qq.com/s/stGK1dvOV1skp8iubMWRZw){:target='\_blank'}

## 第六十式：隐藏鼠标

（那人却在灯火阑珊处）

- [前端随便玩儿](https://xiaohuazheng.github.io/2018/06/02/fed-play/){:target='\_blank'}

## 第六十一式：千呼万唤始出来，犹抱琵琶半遮面 —— 让你的网站模糊不清

&emsp;&emsp;也去你经常碰到这样的页面，当没有登录的时候，只能看到下面的效果：

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

- [前端随便玩儿](https://xiaohuazheng.github.io/2018/06/02/fed-play/){:target='\_blank'}

## 第六十二式：你见过页面跳舞吗？ —— 那些年 High 动的页面一如我逝去的青春

&emsp;&emsp;还记得魔性的小苹果和抖音吗，作为前端的你，有想过**让页面也 High 起来、舞动起来**吗？

&emsp;&emsp;先看效果：

![页面舞动](https://king-hcj.github.io/images/posts/zhuangbility100/letdance.gif?raw=true)

> 下面这段代码可直接在控制台执行，略长。可直接跳到本小结末，使用简短 JS 引入的方式进行体验

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

> 在浏览器地址栏黏贴以下内容的话，有**三点需要注意**，一是必须是已有内容的页面；二是如果是通过 copy paste 代码到浏览器地址栏的话，IE 及 Chrome**会自动去掉代码开头的`javascript:`**，所以需要手动添加起来才能正确执行，而 Firefox 中虽然不会自动去掉，但它根本就不支持在地址栏运行 JS 代码；三是引用的`carnival.js`会依赖`JQuery`（没有的话也没事，只是页面少了一个倾斜的效果）。

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

## 第六十三式：双兔傍地走，安能辨我是雄雌 —— 你和我谈性能？那么该如何对比各种写法的性能

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

- [JSPerf-javascript 代码性能测试利器](https://blog.csdn.net/dpj514/article/details/78767936){:target='\_blank'}

## 第六十四式：开发提效——我点了页面上的元素，VSCode 乖乖打开了对应的组件？原理揭秘

- [开发提效——我点了页面上的元素，VSCode 乖乖打开了对应的组件？原理揭秘](https://juejin.cn/post/6901466406823575560){:target='\_blank'} &#124; [GitHub 仓库及使用](https://github.com/zthxxx/react-dev-inspector){:target='\_blank'} &#124; [在线预览体验](https://react-dev-inspector.zthxxx.me/){:target='\_blank'}：`react-dev-inspector`。

## 第六十五式：如何生成包含大小写字母和数字的随机字符串

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

## 第六十六式：如何在离开页面时发送请求

&emsp;&emsp;前端在做异常监控、统计页面访问时常时，可能需要在页面崩溃、关闭的时候发送请求。

- navigator.sendBeacon 就是天生来解决“页离开时的请求发送”问题的，目前 Google Analytics 使用 navigator.sendBeacon 来上报数据

- [Google Analytics added sendBeacon functionality to Universal Analytics JavaScript API](https://www.thyngster.com/google-analytics-added-sendbeacon-functionality-universal-analytics-javascript-api){:target='\_blank'}
- [Navigator.sendBeacon()](https://blog.csdn.net/hsl0530hsl/article/details/88579958){:target='\_blank'}
- [Navigator.sendBeacon 无阻塞发送统计数据](https://blog.csdn.net/u012193330/article/details/102778979){:target='\_blank'}

## 第六十七式：CSS 如何实现局部光照效果？

- [CSS 如何实现局部光照效果？](https://segmentfault.com/q/1010000039359551?utm_source=homepage#){:target='\_blank'}

## 第六十八式：浏览器自带的长截图

- [浏览器自带的长截图](https://blog.csdn.net/weixin_38753698/article/details/106654346){:target='\_blank'}

## 第六十九式：带有 Id 属性的元素，会创建全局变量

以下这篇包含多式

- [这些鲜为人知的前端冷知识，你都 GET 了吗？](https://mp.weixin.qq.com/s/stGK1dvOV1skp8iubMWRZw){:target='\_blank'}

## 第七十式：利用 a 标签解析 url

- [这些鲜为人知的前端冷知识，你都 GET 了吗？](https://mp.weixin.qq.com/s/stGK1dvOV1skp8iubMWRZw){:target='\_blank'}

## 第七十一式：你也许真的不了解 JSON.stringify

简单的深拷贝，复杂的不行？真的不行吗？
【第二个参数】

- [慎用 JSON.stringify](https://mp.weixin.qq.com/s/jmEXKuamwP6EgfntuvV9fQ){:target='\_blank'}
- [你可能不知道的 JSON 序列化](https://mp.weixin.qq.com/s/fSJHY6oEJHiiOq2ODRawPg){:target='\_blank'}

## 第七十二式：如何一起富强、民主、文明、和谐、自由、平等？

&emsp;&emsp;**别人写文章都妙笔生花，我上个网，我上个网，鼠标点过的地方都“富强、民主、文明、和谐、自由、平等”，我骄傲了吗？**

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

- [前端随便玩儿](https://xiaohuazheng.github.io/2018/06/02/fed-play/){:target='\_blank'}

## 如何通过动图学习 JS

- [JavaScript Visualized Series' Articles](https://dev.to/lydiahallie/series/3341){:target='\_blank'} &#124; [译文](https://segmentfault.com/u/savokiss/articles){:target='\_blank'} &#124; [译文](https://juejin.cn/post/6844904050165563406){:target='\_blank'}

## isInputPending

- [Facebook 将对 React 的优化实现到了浏览器！](https://mp.weixin.qq.com/s/Lbcu1aa2LQZlddAwIIExqA){:target='\_blank'} &#124; [Faster input events with Facebook’s first browser API contribution](https://engineering.fb.com/2019/04/22/developer-tools/isinputpending-api/){:target='\_blank'}

## WebContainers —— 一个可以在浏览器运行 Node.js 的神器

- 在最新的 Google I/O 主题演讲中 stackblitz 向大家介绍了他们与 Next.js 和 Google 团队合作开发的在线 IDE WebContainers ，真的是非常惊艳。
  - [​ 推荐一个神器！可以在浏览器运行 Node.js](https://mp.weixin.qq.com/s/1xiWegxUyTYekIRrvwqQFA){:target='\_blank'}
  - [在线 IDE WebContainers](https://stackblitz.com/){:target='\_blank'}：The fastest, most secure dev environment on the planet.
