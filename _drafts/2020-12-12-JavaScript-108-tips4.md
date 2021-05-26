---
layout: post
title: 前端装逼技巧 108 式（四）—— 前端工具人
categories: JavaScript
description: 前端装逼技巧 108 式，助你更懂JS原理
keywords: JS, 前端, JavaScript
---

> 原来《人月神话》不是本奇幻小说！ 原来《代码大全》不是一堆开源代码！ 原来《鸟哥的Linux私房菜》不是教你做菜！ 原来《边城》不是教你写代码的！ 原来《深入浅出HTML》不是教你**H**ow **T**o **M**ake **L**ove。

<!-- 建议适当调整，此篇装逼干活略多 -->

## 第五十五式：网站如何检测到是否开启开发者工具

- [网站如何检测到是否开启开发者工具?](https://segmentfault.com/q/1010000039917621){:target='_blank'} &#124; [前端开发中如何在JS文件中检测用户浏览器是否打开了调试面板（F12打开开发者工具）？](https://www.zhihu.com/question/24188524){:target='_blank'} &#124; [JS检测浏览器开发者工具是否打开的方法详解](https://www.jb51.net/article/196926.htm){:target='_blank'} &#124; - [JS禁止打开控制台](https://segmentfault.com/a/1190000021459140){:target='_blank'} &#124; [devtools-detector](https://github.com/AEPKILL/devtools-detector)

  ```js
    var im = new Image();
    Object.defineProperty(im, 'id', {
        get: function() {
          // 在这里放入你的代码
          console.log('Console is opened');
          window.location.href = "http://www.baidu.com"
        }
    });
    console.log(im); //谷歌最新版失效

    let num = 0; //谷歌最新版有效
    var devtools = new Date();
    devtools.toString = function () {
      num++;
      if (num > 1) {
        // 在这里放入你的代码
        console.log('Console is opened');
        window.location.href = "http://www.baidu.com"
      }
    }
    console.log('', devtools);
  ```

## 第五十六式：纯前端生成和解析Excel

- [纯前端生成和解析Excel](https://king-hcj.github.io/2020/05/19/export-excel/){:target='_blank'}

## 第五十七式：JavaScript Puzzlers!

一些很细节但可能没有太大用处的 JavaScript 脑筋急转弯

- [44个 Javascript 变态题解析 (上)](https://github.com/xiaoyu2er/blog/issues/1){:target='_blank'}
- [44个 Javascript 变态题解析 (下)](https://github.com/xiaoyu2er/blog/issues/3){:target='_blank'}
- [JavaScript Puzzlers!](http://javascript-puzzlers.herokuapp.com/)

## 第五十八式：牛逼的浏览器地址栏

- 浏览器地址栏运行JavaScript代码
- 浏览器地址栏运行HTML代码
- 浏览器秒变编辑器

- [这些鲜为人知的前端冷知识，你都GET了吗？](https://mp.weixin.qq.com/s/stGK1dvOV1skp8iubMWRZw){:target='_blank'}

## 第五十九式：我是如何轻松走上百度热搜的？—— 装逼的 contenteditable

我是如何上百度热搜的：使用场景：恶搞（或者造假....）

- 浏览器随意修改界面内容
- 实时编写样式的输入框

- [这些鲜为人知的前端冷知识，你都GET了吗？](https://mp.weixin.qq.com/s/stGK1dvOV1skp8iubMWRZw){:target='_blank'}
- [关于浏览器，你不知道的几个骚操作~](https://blog.csdn.net/weixin_38753698/article/details/106654346){:target='_blank'}

## 第六十式：隐藏鼠标
（那人却在灯火阑珊处）
- [前端随便玩儿](https://xiaohuazheng.github.io/2018/06/02/fed-play/){:target='_blank'}

## 第六十一式：网站模糊不清
（犹抱琵琶半遮面）
- [前端随便玩儿](https://xiaohuazheng.github.io/2018/06/02/fed-play/){:target='_blank'}
- [这些鲜为人知的前端冷知识，你都GET了吗？](https://mp.weixin.qq.com/s/stGK1dvOV1skp8iubMWRZw){:target='_blank'}

## 第六十二式：晃动起来
（大珠小珠落玉盘）
- [前端随便玩儿](https://xiaohuazheng.github.io/2018/06/02/fed-play/){:target='_blank'}

## 第六十三式：你和我谈性能？那么该如何对比各种写法的性能

- JS在线代码片段性能测试工具
    - [https://jsperf.com](https://jsperf.com){:target='_blank'}（目前已不可用）
    - [https://jsbench.me/](https://jsbench.me/){:target='_blank'}
    - [Benchmark.js](https://www.npmjs.com/package/benchmark)：A robust benchmarking library that supports

- [JSPerf-javascript代码性能测试利器](https://blog.csdn.net/dpj514/article/details/78767936){:target='_blank'}

## 第六十四式：开发提效——我点了页面上的元素，VSCode 乖乖打开了对应的组件？原理揭秘

- [开发提效——我点了页面上的元素，VSCode 乖乖打开了对应的组件？原理揭秘](https://juejin.cn/post/6901466406823575560){:target='_blank'} &#124; [GitHub仓库及使用](https://github.com/zthxxx/react-dev-inspector){:target='_blank'} &#124; [在线预览体验](https://react-dev-inspector.zthxxx.me/){:target='_blank'}：`react-dev-inspector`。

## 第六十五式：2行代码生成包含大小写字母和数字的随机字符串

2行代码生成指定长度字符串：

```js
/**
 * 生成长度为len的包含a-z、A-Z、0-9的随机字符串
 */
functioin generateStr(len = 18) {
	// 一行代码生成0-9、A-Z、a-z、总长度为62的字符数组
	var arr = [...new Array(62)].map((item, i) => String.fromCharCode(i + (i < 10 ? 0 : (i < 36 ? 7 : 13)) + 48));
	return [...new Array(len)].map(() => arr[Math.floor(Math.random() * arr.length)]).join('');
}
```

1行代码生成指定长度数字：这种方法有缺点，低概率会出现位数不足的问题（原因是0.00566 * 100000 = 566，会丢失前面的0），不推荐使用。
```js
// len 最多16，可能出现
functioin generateNum(len = 16) {
	return Math.floor(Math.random() * Math.pow(10, len));
}
```

- [2行代码生成包含大小写字母和数字的随机字符串](http://blog.haoji.me/generate-random-string.html){:target='_blank'}
- [随机生成验证码（由数字、大小写字母组成）](){:target='_blank'}

## 第六十六式：如何在离开页面时发送请求

- navigator.sendBeacon 就是天生来解决“页离开时的请求发送”问题的，目前 Google Analytics 使用 navigator.sendBeacon 来上报数据

- [Google Analytics added sendBeacon functionality to Universal Analytics JavaScript API](https://www.thyngster.com/google-analytics-added-sendbeacon-functionality-universal-analytics-javascript-api){:target='_blank'}
- [Navigator.sendBeacon()](https://blog.csdn.net/hsl0530hsl/article/details/88579958){:target='_blank'}
- [Navigator.sendBeacon 无阻塞发送统计数据](https://blog.csdn.net/u012193330/article/details/102778979){:target='_blank'}

## 第六十七式：CSS如何实现局部光照效果？

- [CSS如何实现局部光照效果？](https://segmentfault.com/q/1010000039359551?utm_source=homepage#){:target='_blank'}

## 第六十八式：浏览器自带的长截图

- [浏览器自带的长截图](https://blog.csdn.net/weixin_38753698/article/details/106654346){:target='_blank'}

## 第六十九式：带有 Id 属性的元素，会创建全局变量

以下这篇包含多式
- [这些鲜为人知的前端冷知识，你都GET了吗？](https://mp.weixin.qq.com/s/stGK1dvOV1skp8iubMWRZw){:target='_blank'}

## 第七十式：利用a标签解析url

- [这些鲜为人知的前端冷知识，你都GET了吗？](https://mp.weixin.qq.com/s/stGK1dvOV1skp8iubMWRZw){:target='_blank'}

## 第七十一式：你也许真的不了解 JSON.stringify
简单的深拷贝，复杂的不行？真的不行吗？
【第二个参数】
  - [慎用JSON.stringify](https://mp.weixin.qq.com/s/jmEXKuamwP6EgfntuvV9fQ){:target='_blank'}
  - [你可能不知道的JSON序列化](https://mp.weixin.qq.com/s/fSJHY6oEJHiiOq2ODRawPg){:target='_blank'}

## 第七十二式：鼠标点击效果

富强
明主
文明
和谐

- 给一个复制到控制台，就可以在当前界面点击实现效果的脚本

- [前端随便玩儿](https://xiaohuazheng.github.io/2018/06/02/fed-play/){:target='_blank'}



