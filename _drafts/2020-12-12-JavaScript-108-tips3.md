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

- **复制**以下代码到浏览器控制台：
```js
console.log("123​4".length === 5); // true
```
![12345](https://king-hcj.github.io/images/posts/zhuangbility100/12345.png?raw=true)

&emsp;&emsp;哈哈，是不是有种被眼睛背叛的感觉？其实这就是所谓的**零宽空格**（Zero Width Space，简称“ZWSP”），零宽度字符是不可见的非打印字符，它用于打断长英文单词或长阿拉伯数字，以便于换行显示，否则长英文单词和长阿拉伯数字会越过盒模型的边界，常见于富文本编辑器，用于格式隔断。

- 探究以下上面代码的玄机：

```js
const common = "1234";
const special = "123​4";
console.log(common.length); // 4
console.log(special.length); // 5
console.log(encodeURIComponent(common)); // 1234
console.log(encodeURIComponent(special)); // 123%E2%80%8B4
// 把上面中间特殊字符部分进行解码
console.log(decodeURIComponent("%E2%80%8B")); // （空）

const otherSpecial = "123\u200b4"; // 或者"123\u{200b}4"
console.log(otherSpecial); // 1234
console.log(otherSpecial.length, common === special, special === otherSpecial); // 5 false true
```

- 在HTML中使用零宽度空格（在HTML中，零宽度空格与`<wbr>`等效）：
```html
<!-- &#8203; 或者 <wbr /> -->
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
  </head>
  <body>
    <div>abc&#8203;def</div>
    <div>abc<wbr />def</div>
  </body>
</html>
```

> ESLint有一条[禁止不规则的空白 (no-irregular-whitespace)](https://cn.eslint.org/docs/rules/no-irregular-whitespace){:target='_blank'}的规则，防止代码里面误拷贝了一些诸如零宽空格类的空格，以免造成一些误导。

>参考资料：[常见空格一览 - 李银城](https://zhuanlan.zhihu.com/p/150716121){:target='\_blank'} &#124; [什么是零宽度空格](https://www.dazhuanlan.com/2019/09/30/5d9224891dead/){:target='\_blank'} &#124; [维基百科-空格](https://zh.wikipedia.org/wiki/%E7%A9%BA%E6%A0%BC){:target='_blank'}

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

## 第三十九式：`function.length`指代什么？ —— 柯里化，JS函数重载

- 如何获取形参个数
- 实现 lodash curry 化函数
- "柯里化"，就是把一个多参数的函数，转化为单参数函数。

```js
function func(a, b, c) {
  console.log(func.length, arguments.length);
}
```

```js
// 模拟实现 lodash 中的 curry 方法

function getSum (a, b, c) {
  return a + b + c
}

const curried = curry(getSum)

console.log(curried(1, 2, 3))
console.log(curried(1)(2, 3))
console.log(curried(1, 2)(3))

function curry (func) {
  return function curriedFn(...args) {
    // 判断实参和形参的个数
    if (args.length < func.length) {
      return function () {
        return curriedFn(...args.concat(Array.from(arguments)))
      }
    }
    return func(...args)
  }
}
```

- length 是函数对象的一个属性值，指该函数有多少个必须要传入的参数，即形参的个数。
- 形参的数量不包括剩余参数个数，仅包括第一个具有默认值之前的参数个数。
- 与之对比的是，  arguments.length 是函数被调用时实际传参的个数。

- 函数重载
- length 是函数对象的一个属性值，指该函数有多少个必须要传入的参数，那些已定义了默认值的参数不算在内，比如function（xx = 0）的length是0。

- [浅谈JavaScript函数重载](https://www.cnblogs.com/yugege/p/5539020.html){:target='_blank'}
- [JavaScript函数重载](https://blog.fundebug.com/2017/07/24/javascript_metho_overloading/){:target='_blank'} &#124; [原文](https://johnresig.com/blog/javascript-method-overloading/){:target='_blank'}
- [Function.length](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/length){:target='_blank'}
- [javascript高级知识点——函数的长度](https://www.cnblogs.com/winderby/p/4074323.html){:target='_blank'}

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

- [window.postMessage](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/postMessage){:target='_blank'}

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
- [极客1](https://time.geekbang.org/column/article/82397){:target='_blank'}
- [极客2](https://time.geekbang.org/column/article/141842){:target='_blank'}
- [极客3](https://time.geekbang.org/column/article/143889){:target='_blank'}

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

## 第四十九式：防止篡改对象：Object.seal、Object.freeze

&emsp;&emsp;有时候你可能怕你的对象被误改了，所以需要把它保护起来。

- [Object.seal防止新增和删除属性](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/seal){:target='_blank'}
- [Object.freeze冻结对象](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze){:target='_blank'}
- defineProperty冻结单个属性 [深入浅出Object.defineProperty()](https://www.jianshu.com/p/8fe1382ba135){:target='_blank'}

```js
const person = {
  name: 'jack'
}
Object.seal(person)
delete person.name
console.log(person)
```

- [JS 高级技巧](https://zhuanlan.zhihu.com/p/29015916){:target='\_blank'}

## 第五十式：`Math.random`，不随机的随机数

- 怎么实现一个随机数发生器

为什么说 Math.random 是不安全的呢？从 V8 的源码可以看到 Math.random 的种子来源是/dev/random，取 64 位，种子的可能个数为 2 ^ 64 随机算法相对简单，只是保证尽可能的随机分布。

- [随机数的故事](https://zhuanlan.zhihu.com/p/205359984){:target='\_blank'}
- [Math.random() 还能这样玩？](https://segmentfault.com/a/1190000038432999){:target='_blank'}
- [Lots of Ways to Use Math.random() in JavaScript](https://css-tricks.com/lots-of-ways-to-use-math-random-in-javascript/){:target='_blank'}

- Crypto.getRandomValues()

```js
var array = new Uint32Array(10);
window.crypto.getRandomValues(array);

console.log("Your lucky numbers:");
for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
}
```

- [Crypto.getRandomValues()](https://developer.mozilla.org/zh-CN/docs/Web/API/RandomSource/getRandomValues){:target='\_blank'}

## 第五十一式：`forEach` 就是对for循环的简单封装？你理解的 forEach 可能并不正确

## 第五十二式：let 和 const 到底提升了吗？定义一个变量会经历什么样的过程？

- [我用了两个月的时间才理解 let](https://zhuanlan.zhihu.com/p/28140450){:target='\_blank'}
- [08 | x => x：函数式语言的核心抽象：函数与表达式的同一性](https://time.geekbang.org/column/article/171617){:target='_blank'}

## 第五十三式：函数参数传递，到底传递了什么——你应该知道的那些区别

- 箭头函数和普通函数
- 基本类型和引用类型
```js
var obj1 = {
  value:'111'
};
 
var obj2 = {
  value:'222'
};
 
function changeStuff(obj){
  obj.value = '333';
  obj = obj2;
  return obj.value;
}

var foo = changeStuff(obj1);
 
console.log(foo);// '222' 参数obj指向了新的对象obj2
console.log(obj1.value);//'333'
```

**函数的参数传递，传递的都是值，参数是 Object 类型的也一样，也是值，只不过这个值是地址值。**

- [Is JavaScript a pass-by-reference or pass-by-value language?](https://stackoverflow.com/questions/518000/is-javascript-a-pass-by-reference-or-pass-by-value-language?lq=1){:target='_blank'}
- [javascript传递参数如果是object的话，是按值传递还是按引用传递？](https://www.zhihu.com/question/27114726/answer/35481766){:target='_blank'}
- [JavaScript中函数都是值传递吗？](https://www.zhihu.com/question/51018162/answer/123779633){:target='_blank'}
- [箭头函数和普通函数的区别](https://segmentfault.com/a/1190000021380336){:target='_blank'}
- [08 | x => x：函数式语言的核心抽象：函数与表达式的同一性](https://time.geekbang.org/column/article/171617){:target='_blank'}

## 第五十四式：前两个？或者前端检测更新？

## 中章

半程总结：
下期预告：前端工具人，如何用脚本为前端赋能

## 本文发布

  - [segmentfault思否社区](https://segmentfault.com/a/1190000038393789){:target='_blank'}



