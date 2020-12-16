---
layout: post
title: 前端装逼技巧 108 式（三）—— 冇得感情的API调用工程师
categories: JavaScript
description: 前端装逼技巧 108 式，助你更懂JS原理
keywords: JS, 前端, JavaScript
---

> “小马同学，背一下《陋室铭》。”“山不在高，有仙则名。水不在深，有龙则灵。斯是陋室，惟馨。”“停，怎么少了俩字？”“年轻人不讲吾德。”

系列文章发布汇总：

- [前端装逼技巧 108 式（一）—— 打工人](https://segmentfault.com/a/1190000038251777){:target='_blank'}
- [前端装逼技巧 108 式（二）—— 不讲武德](https://segmentfault.com/a/1190000038393789){:target='_blank'}

> 文章风格所限，引用资料部分，将在对应小节末尾标出。

## 第三十七式：茫然一顾眼前亮，懵懂宛如在梦中 —— `"123​4".length === 5` ？这一刻，我感受到了眼睛的背叛和侮辱

```js
const foo = '123\u200b4';
const bar = '123\u{200b}4';
const a = '1234';
console.log(foo, foo.length);
console.log(bar, bar.length);
encodeURIComponent(a); // 1234
encodeURIComponent(foo); // 123%E2%80%8B4
"123​4".length === 5;
```

- [常见空格一览](https://zhuanlan.zhihu.com/p/150716121){:target='\_blank'}
- [什么是零宽度空格](https://www.dazhuanlan.com/2019/09/30/5d9224891dead/){:target='\_blank'}

## 第三十八式：禁止网页复制粘贴

```js
const html = document.querySelector('html');
html.oncopy = () => false;
html.onpaste = () => false;
{
  const html = document.querySelector('html');
  html.oncopy = (e) => {
    console.log(e);
    // 比如指向登陆
    // window.location.href='http://';  //location.herf=指向一个链接或应用
  };
  html.onpaste = (e) => {
    console.log(e);
  };
}
// 网银转账时，输入对方卡号，需要输入两次，通常第二次输入的输入框是不允许粘贴的，这样就在一定程度上保证了卡号的准确性。
// 登陆才能复制。很多网站上的页面内容是不允许复制的，这样可以防止用户或者程序恶意的去抓取页面数据。
```

- [js 设置/获取剪切板内容](https://www.cnblogs.com/zhanping/p/13226193.html){:target='\_blank'}

```js
//设置剪切板内容
document.addEventListener('copy', function () {
  if (event.clipboardData || event.originalEvent) {
    var clipboardData =
      event.clipboardData || event.originalEvent.clipboardData;
    const selection = 'AAAAA';
    clipboardData.setData('text/plain', selection.toString());
    event.preventDefault();
  }
});
// 注意：clipboardData.setData("参数1","参数2")  参数1的值要对应http的content-type的类型，如果没有设置参数1的话有可能会报错
//获取剪切板的内容
document.addEventListener('paste', function () {
  if (event.clipboardData || event.originalEvent) {
    var clipboardData = event.clipboardData || window.clipboardData;
    var val = clipboardData.getData('text');
    console.log(val);
    event.preventDefault();
  }
});
```

- [Clipboard API and events](https://www.w3.org/TR/clipboard-apis/){:target='\_blank'}
- [js 剪切板应用 clipboardData 详细解析](https://blog.csdn.net/a460550542/article/details/78363350){:target='\_blank'}

## 第三十九式：`fn.length`指代什么？

- 如何获取形参个数
- 实现 lodash curry 化函数
- "柯里化"，就是把一个多参数的函数，转化为单参数函数。

```js
function func(a, b, c) {
  console.log(func.length, arguments.length);
}
```

## 第四十式：`["1","7","11"].map(parseInt)`返回[1,NaN,3]?

- map返回3个参数，item，index，Array，所以[1,7,11].map(console.log)打印：

```javascript
  1 0 (3) [1, 7, 11]
  7 1 (3) [1, 7, 11]
  11 2 (3) [1, 7, 11]
```

- parseInt接受两个参数：string，radix，其中radix默认为10；每次调用parseInt，相当于：parseInt(item,index,Array),map传递的第三个参数Array会被忽略,index为0时取默认值10；parseInt(7,1)中，7在1进制中不存在。
> 参考：[JS 中为啥 ['1', '7', '11'].map(parseInt) 返回 [1, NaN, 3]](https://mp.weixin.qq.com/s/h-hxPt1yN2shq-Dkq6S3dA){:target='_blank'}

## 第四十一式：iframe 间数据传递，postMessage 可以是你的选择

错误：`Block a frame with origin`

```js
// 页面1
top.postMessage(query, '*');
//页面2 监听message事件
useEffect(() => {
  const listener = (ev) => {
    console.log(ev, ev.data);
  };
  window.addEventListener('message', listener);
  return () => {
    window.removeEventListener('message', listener);
  };
}, []);
```

## 第四十二式：有趣的`let x = x`

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <script>
    let x = x
  </script>
  <script>
    x = 2
    console.log(x)
  </script>
</body>
</html>
```

- [JS 变量封禁大法：薛定谔的 X](https://zhuanlan.zhihu.com/p/28117094){:target='\_blank'}

## 第四十三式：前端错误处理

## 第四十四式：纯前端代码生成 Excel


## 第四十五式：明明元素存在，我的`document.getElementsByTagName('video')`却获取不到？

- 使用Chrome浏览器在线看视频的时候，有些网站不支持倍速播放；有的网站只支持1.5和2倍速，但是自己更喜欢1.75倍；又或者有些网站需要会员才能倍速播放（比如某盘），一般我们可以通过安装相应的浏览器插件解决，如果不愿意安装插件，也可以使用类似`document.getElementsByTagName('video')[0].playbackRate = 1.75`（1.75倍速）的方式实现倍速播放，这个方法在大部分网站上是有效的（当然，如果知道video标签的id或者class，通过id和class来获取元素会更便捷一点），经测试，`playbackRate`支持的最大倍速Chrome下是16。同时，给`playbackRate`设置一个小于1的值，比如0.3，可以模拟出**类似鬼片的音效**。
- 但是在某盘，这种方法却失效了，因为我没有办法获取到video元素，审查元素如下：
![videojs](https://king-hcj.github.io/images/posts/zhuangbility100/videojs.png?raw=true)

&emsp;&emsp;审查元素时，我们发现了`#shadow-root (closed)`和[videojs](https://videojs.com/){:target='_blank'}的存在。也许你还记得，在第六式中我们曾简单探讨过`Web Components`，其中介绍到`attachShadow()`方法可以开启 Shadow DOM（这部分 DOM 默认与外部 DOM 隔离，内部任何代码都无法影响外部），隐藏自定义元素的内部实现，我们外部也没法获取到相应元素，如下图所以（点击图片跳转Web Components示例代码）：

[![shadow](https://king-hcj.github.io/images/posts/zhuangbility100/shadow.png?raw=true)](https://jsbin.com/yobopor/1/edit?html,js,output){:target='_blank'}

&emsp;&emsp;是以，我们可以合理推断，某盘的网页视频播放也使用了类似[Element.attachShadow()](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/attachShadow){:target='_blank'}方法进行了元素隐藏，所以我们无法通过`document.getElementsByTagName('video')`获取到video元素。通过阅读[videojs文档](https://videojs.com/){:target='_blank'}发现，可以通过相应API实现自定义倍速播放：

```js
videojs.getPlayers("video-player").html5player.tech_.setPlaybackRate(1.666)
```

> 参考资料：[百度网盘视频倍速播放方法](https://blog.csdn.net/u013044310/article/details/80444695){:target='_blank'} &#124; [videojs文档](https://videojs.com/){:target='_blank'} &#124; [Element.attachShadow()](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/attachShadow){:target='_blank'} &#124; [深入理解Shadow DOM v1](https://segmentfault.com/a/1190000019115050){:target='_blank'}

## 第四十六式：`will-change`是如何优化性能的？

&emsp;&emsp;CSS 属性 `will-change` 为 web 开发者提供了一种告知浏览器该元素会有哪些变化的方法，这样浏览器可以在元素属性真正发生变化之前提前做好对应的优化准备工作。这种优化可以将一部分复杂的计算工作提前准备好，使页面的反应更为快速灵敏。

- [will-change](https://developer.mozilla.org/zh-CN/docs/Web/CSS/will-change){:target='\_blank'}
- [说一说 will-change](https://mp.weixin.qq.com/s/rbDZntqZd8VcbDjQFER2Yw){:target='\_blank'}
- [CSS 页面渲染优化属性 will-change](https://www.cnblogs.com/xiaohuochai/p/6321790.html){:target='\_blank'}
- https://time.geekbang.org/column/article/82397
- https://time.geekbang.org/column/article/141842
- https://time.geekbang.org/column/article/143889

## 第四十七式：庭院深深深几许，杨柳堆烟，帘幕无重数 —— 如何实现深拷贝？

```js
// 有undefined + 循环引用
let obj = {
  a: 1,
  b: {
    c: 2,
    d: 3,
  },
  f: undefined,
};
obj.c = obj.b;
obj.e = obj.a;
obj.b.c = obj.c;
obj.b.d = obj.b;
obj.b.e = obj.b.c;

function deepCopy(obj) {
  return new Promise((resolve) => {
    const { port1, port2 } = new MessageChannel();
    port2.onmessage = (ev) => resolve(ev.data);
    port1.postMessage(obj);
  });
}

deepCopy(obj).then((copy) => {
  // 请记住`MessageChannel`是异步的这个前提！
  let copyObj = copy;
  console.log(copyObj, obj);
  console.log(copyObj == obj);
});
```

- object.asign
- [MessageChannel](https://developer.mozilla.org/zh-CN/docs/Web/API/MessageChannel){:target='\_blank'}
- [MessageChannel 是什么，怎么使用？](https://www.jianshu.com/p/4f07ef18b5d7){:target='\_blank'}


## 第四十八式：换了电脑，VSCode 保存插件配置并使用 gist 管理代码片段

- [Settings Sync](https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync){:target='\_blank'}
- [VSCode 保存插件配置并使用 gist 管理代码片段](https://www.cnblogs.com/fayin/p/8257845.html){:target='\_blank'}

## 中章

半程总结：
下期预告：前端工具人，如何用脚本为前端赋能

## 本文发布

  - [segmentfault思否社区](https://segmentfault.com/a/1190000038393789){:target='_blank'}



