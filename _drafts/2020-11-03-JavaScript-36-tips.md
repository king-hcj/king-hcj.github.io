---
layout: post
title: 前端装逼技巧 108 式
categories: JavaScript
description: 前端装逼技巧 108 式，助你更懂JS原理
keywords: JS, 前端, JavaScript
---

&emsp;&emsp;前端装逼技巧 108 式，助你更懂 JS。

- [一叹](http://www.fx361.com/page/2017/0224/888345.shtml){:target='_blank'}

## JavaScript Puzzlers!

- [44个 Javascript 变态题解析 (上)](https://github.com/xiaoyu2er/blog/issues/1){:target='_blank'}
- [44个 Javascript 变态题解析 (下)](https://github.com/xiaoyu2er/blog/issues/3){:target='_blank'}
- [JavaScript Puzzlers!](http://javascript-puzzlers.herokuapp.com/)

## window.history.length的大坑

- [window.history.length的大坑](https://zhuanlan.zhihu.com/p/91931664)

```js
// 无法回退时关闭网页
// window.history.length是1，那么肯定不能回退了，但是大于1，无法判断能不能继续回退。
window.history.length > 1
? window.history.back()
// window.history.go( -1 );
: setTimeout(() => {
    window.close();
  }, 2000);
```

## JS常见的四种 Error 类型

- [javaScript代码飘红报错看不懂？读完这篇文章再试试！](https://zhuanlan.zhihu.com/p/339429715)

## `will-change`是如何优化性能的？

&emsp;&emsp;CSS 属性 `will-change` 为 web 开发者提供了一种告知浏览器该元素会有哪些变化的方法，这样浏览器可以在元素属性真正发生变化之前提前做好对应的优化准备工作。这种优化可以将一部分复杂的计算工作提前准备好，使页面的反应更为快速灵敏。

- [will-change](https://developer.mozilla.org/zh-CN/docs/Web/CSS/will-change){:target='\_blank'}
- [说一说 will-change](https://mp.weixin.qq.com/s/rbDZntqZd8VcbDjQFER2Yw){:target='\_blank'}
- [CSS 页面渲染优化属性 will-change](https://www.cnblogs.com/xiaohuochai/p/6321790.html){:target='\_blank'}
- [极客 1](https://time.geekbang.org/column/article/82397){:target='\_blank'}
- [极客 2](https://time.geekbang.org/column/article/141842){:target='\_blank'}
- [极客 3](https://time.geekbang.org/column/article/143889){:target='\_blank'}
- [仅使用CSS就可以提高页面渲染速度的4个技巧](https://segmentfault.com/a/1190000038810622)

## v8为什么要采用多种垃圾回收方式？各种垃圾回收方式的优劣对比

- 引用计数
- 标记清除
- 标记整理

- [垃圾回收算法优缺点对比](https://www.jianshu.com/p/47ff2bff20dc){:target='_blank'}
- [V8专题](http://newhtml.net/category/v8%e4%b8%93%e9%a2%98/){:target='_blank'}
- [V8 之旅： 垃圾回收器](http://newhtml.net/v8-garbage-collection/){:target='_blank'}
- [几种垃圾回收算法](https://www.jianshu.com/p/a8a04fd00c3c){:target='_blank'}
- [V8引擎的垃圾回收策略](https://www.cnblogs.com/onepixel/p/7422820.html){:target='_blank'}
- [V8引擎垃圾回收机制分析](https://blog.csdn.net/weixin_41376400/article/details/106076661){:target='_blank'}
- [前端面试：谈谈 JS 垃圾回收机制](https://segmentfault.com/a/1190000018605776){:target='_blank'}
- [面试官问你有没有了解过 V8 的 javascript 垃圾回收机制算法](https://zhuanlan.zhihu.com/p/37996721){:target='_blank'}
- [V8 中的垃圾收集（GC），图文指南](https://zhuanlan.zhihu.com/p/29276031){:target='_blank'}

## [全新的互联网体验](http://newhtml.net/){:target='_blank'}

## 如何实现前端录音功能

- [如何实现前端录音功能](https://zhuanlan.zhihu.com/p/43581133){:target='\_blank'}

## 李银城：https://www.zhihu.com/people/li-yin-cheng-24/posts

## input 框限制只能输入中文

```js
const input = document.querySelector('input[type="text"]');
const clearText = (target) => {
  const { value } = target;
  target.value = value.replace(/[^\u4e00-\u9fa5]/g, '');
};
input.onfocus = ({ target }) => {
  clearText(target);
};
input.onkeyup = ({ target }) => {
  clearText(target);
};
input.onblur = ({ target }) => {
  clearText(target);
};
input.oninput = ({ target }) => {
  clearText(target);
};
```

## 你知道 Chrome 为调试专门提供的这些函数吗？

- [你知道 Chrome 为调试专门提供的这些函数吗？](https://segmentfault.com/a/1190000038406115){:target='\_blank'}

## 大文件上传

- [前端大文件上传](https://juejin.cn/post/6844903860327186445){:target='\_blank'}

## 大文件下载

- [前端大文件下载方案](https://blog.csdn.net/azurecho/article/details/108618513){:target='\_blank'}
- [从 Fetch 到 Streams —— 以流的角度处理网络请求](https://juejin.cn/post/6844904029244358670){:target='\_blank'}

## `let Days={};Days[Days["Sun"] = 3] = "Sun"`

## `String.replace()`第二个参数可以是个函数？

- 特殊符号`$`
- [JavaScript replace() 方法](https://www.w3school.com.cn/jsref/jsref_replace.asp){:target='\_blank'}

## 如何通过脚本来新建文件，提高开发效率？

- 抛砖引玉，你一定会探究出更高级的用法

- 接口

## 如何通过脚本完成自动化部署？

- 合同、UBOX 等测试环境

## 动手实现一个 reduce

## reduce 还可以这么用？

- runPromiseInSequence
- Koa only、pick、omit

[20 个你不得不知道的数组 reduce 高级用法](https://mp.weixin.qq.com/s/cksKPLdXLje327UBI2eKIQ){:target='\_blank'}

## 如何实现 call、apply 和 bind

## 你知道 this 也有优先级吗？

- 显式绑定和隐式绑定
- new 绑定的优先级比显式 bind 绑定更高
- new>显示绑定>隐式绑定

## 我不太想谈闭包和变量提升

- 变量的定义和赋值过程
- 闭包、懒加载、预解析

## let 和 const 到底提升了吗？定义一个变量会经历什么样的过程？

- [我用了两个月的时间才理解 let](https://zhuanlan.zhihu.com/p/28140450){:target='\_blank'}
- [08 | x => x：函数式语言的核心抽象：函数与表达式的同一性](https://time.geekbang.org/column/article/171617){:target='\_blank'}
## new 到底新建了什么？

## 垃圾回收，一张图就够了

## JavaScript 是怎么执行的？

## 防抖和节流真的很难吗？

- 如何在 react 函数式组件中使用防抖与节流函数

## 如何和浏览器过不去？比如让它卡死？

- 带你看看宏任务和微任务

## 前端的未来在移动端吗？跨端方案都有哪些

[Electron 和当下其他的桌面开发方法相比如何？](https://www.zhihu.com/question/264999651?sort=created){:target='\_blank'}

## 回调地狱：前端是如何一步步走出来的？

- 前端异步方案是怎么一路走来的

## JavaScript 新特性：Optional Chaining 解决了什么问题？

- [Optional Chains](http://www.ecma-international.org/ecma-262/#sec-optional-chains){:target='\_blank'}

## 如何实现 mul(2)(3)(4)为 24？

- 函数珂里化
- 或者 compose 实现的几种方案
- 如果一个值要经过多个函数，才能变成另外一个值，就可以把所有中间步骤合并成一个函数，这叫做"函数的合成"（compose）。

## 数组的 N 种操作

- 扁平化
- 去重
- 类数组转化为数组

## Promise 并行限制

## Promise.all，一个失败都失败，怎么解决

- 每一个都处理 catch（或者），确保不会出现异常（`urls.map(item => axios(item).catch(e => 'error'))`）
- Promise.allSettled

- [使用 promise.all 遇到其中一个阻塞导致所有处理无法进行的处理方式](https://blog.csdn.net/Drongguang/article/details/91406290){:target='\_blank'}
  > 资料参考：[Promise 中的三兄弟 .all(), .race(), .allSettled()](https://segmentfault.com/a/1190000020034361){:target='\_blank'}

## 业务超时，race

## 想做自己的前端项目，却没有后端支持 —— 有哪些好玩的免费的 API 接口?

- [有哪些好玩的免费的 API 接口?](https://www.zhihu.com/question/32225726){:target='\_blank'}

## 渲染几万条数据，怎样才能不卡住页面？

## 只拆过快递，JS 里装箱和拆箱又是什么？

## 为了减少冗余参数，我用 delete 有错吗？

- 删除
- 改变属性顺序

## 省省劲儿，setTimeout 不能让你的程序暂停

- 如果设置的 timeout 小于 0，则设置为 0
- 如果嵌套的层级超过了 5 层，并且 timeout 小于 4ms，则设置 timeout 为 4ms。

- [setTimeout, setInterval 与 requestAnimationFrame 隐藏的各种坑](https://blog.csdn.net/qingyafan/article/details/52335753){:target='\_blank'}
- [参考](https://www.cnblogs.com/liuxiaoru/p/13637983.html){:target='\_blank'}
- [为什么 setTimeout 有最小时延 4ms ?](https://zhuanlan.zhihu.com/p/155752686){:target='\_blank'}
- [为什么要用 setTimeout 模拟 setInterval ？](https://segmentfault.com/a/1190000038829248)
- 最小延时、最大延时

## 流媒体播放

- [「1.4 万字」玩转前端 Video 播放器 | 多图预警](https://juejin.cn/post/6850037275579121671){:target='\_blank'}
- [前端视频直播技术总结及 video.js 在 h5 页面中的应用](https://www.cnblogs.com/dreamsqin/p/12557070.html){:target='\_blank'}
- [[1.3 万字] 玩转前端二进制](https://juejin.cn/post/6846687590783909902){:target='\_blank'}

## 前端流程图

- [Gojs](https://gojs.net.cn/){:target='\_blank'}

## 微信扫码登录原理

[浅析微信扫码登录原理(小结)](https://www.jb51.net/article/149680.htm){:target='\_blank'}
[实践](https://wx.qq.com/){:target='\_blank'}（查看长连接等）

## `Object.defineProperty()`为何被 Vue 弃用？

`Object.defineProperty()`方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象。同时，该 API 也是 Vue 2.x 数据绑定实现的核心，Vue 在 3.x 版本之后改用 Proxy 进行实现，本系列文章后续会进行简单讨论。

- [实现双向绑定 Proxy 比 defineproperty 优劣如何](https://www.jianshu.com/p/2df6dcddb0d7){:target='\_blank'}
- [为什么 Vue3.0 使用 Proxy 实现数据监听？defineProperty 表示不背这个锅](https://juejin.cn/post/6844903965180575751){:target='\_blank'}

## 明明 console 数组有值，展开就是空了？

- 明明里面是有值的 但是 Length 是 0

## 既然饱受诟病，JavaScript 为什么还是单线程的

## CSS

- [参考](https://mp.weixin.qq.com/s/UVifGMNXac3_KPLhR_cLNw){:target='\_blank'}

## CSS 动效

-[10 个 GitHub 上超火的 CSS 奇技淫巧项目，找到写 CSS 的灵感！](https://segmentfault.com/a/1190000038263876){:target='\_blank'}

## JS 动效

- [11 个最好的 JavaScript 动态效果库](https://segmentfault.com/a/1190000018577143){:target='\_blank'}

## 如何修改 antd 样式

## http2

- [深入浅出：HTTP/2](https://www.cnblogs.com/confach/p/10141273.html){:target='\_blank'}
- [一文读懂 HTTP/2 特性](https://zhuanlan.zhihu.com/p/26559480){:target='\_blank'}

## 重放攻击

- [前端业务安全综述（防爬、防薅、人机校验等）](https://mp.weixin.qq.com/s/eQKqiBbiuw-_RwWVYUnFXg){:target='\_blank'}

## 内网穿透

> 公网 IP 就是广域网 IP，拥有公网 IP 就不需要经过路由器或交换机直接可以上网，而且，还能直接被外界访问到，也就是在 Internet 上可以和其他计算机随意互相访问。内网穿透一般是因为局域网应用网络环境没有公网 IP，但又需要在外网进行访问，就需要进行内网穿透了，如通过内网穿透，生成固定域名来实现对局域网 win 电脑、网站、博客、视频监控、游戏联机、FTP/SVN/MAC 服务器、公司的 OA、erp 等办公系统等等的远程外网访问。

- [什么是内网、外网？内网、外网有啥区别？](https://zhuanlan.zhihu.com/p/147282153){:target='\_blank'}
- [内网穿透：在公网访问你家的 NAS](https://zhuanlan.zhihu.com/p/57477087){:target='\_blank'}
- [内网穿透和公网 IP 有什么区别吗?](https://www.zhihu.com/question/404693104/answer/1315636116){:target='\_blank'}

## 微前端、serverless

## JS 代码调试必须要 HTML、控制台或者 node？

## 让对象的 toString 返回指定的字符串而不是[object Object]

## Node 后台邮件服务器

- [Node 后台邮件服务器](https://blog.csdn.net/konghouy/article/details/84961500){:target='\_blank'}
- [Nodemailer](https://nodemailer.com/about/){:target='\_blank'}
- [如何用js给老婆每天发情话](https://juejin.cn/post/6904805497845579783){:target='_blank'}

## 短信验证码

短信验证码，后端调服务商的 api，服务商会把发送的验证码返回给你，然后用手机号作为 key，存在比如 redis 里

- [Web 项目中手机注册短信验证码实现的全流程及代码](https://blog.csdn.net/zuoliangzhu/article/details/81193269){:target='\_blank'}

## 验证码的原理、作用及实现

- [验证码的原理、作用及实现](https://blog.csdn.net/niaonao/article/details/51112686){:target='\_blank'}
- [node 实现登录图片验证码的示例代码](https://www.jb51.net/article/138526.htm){:target='\_blank'}

## 微信支付

- [支付宝、微信支付原理图](https://www.cnblogs.com/hua-nuo/p/12857671.html){:target='\_blank'}
- [从前端的角度来梳理微信支付（小程序、H5、JSAPI）的流程](https://segmentfault.com/a/1190000038228200){:target='\_blank'}
- [微信支付-文档](https://pay.weixin.qq.com/wiki/doc/api/app/app.php?chapter=8_3){:target='\_blank'}

## 生成器函数执行器（co）

## 低代码前端框架

- [低代码前端框架](https://baidu.gitee.io/amis/docs/index){:target='_blank'}

## window.getSelection()

- [clipboard.js 的源码分析](https://mp.weixin.qq.com/s/nsEmDprpeICz_wC3Xu9cPQ){:target='_blank'}
- [Window.getSelection](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/getSelection){:target='_blank'}
- https://developer.mozilla.org/zh-CN/docs/Web/API/Selection

## 函数参数传递，到底传递了什么——你应该知道的那些区别

- 箭头函数和普通函数
- 基本类型和引用类型

```js
var obj1 = {
  value: '111',
};

var obj2 = {
  value: '222',
};

function changeStuff(obj) {
  obj.value = '333';
  obj = obj2;
  return obj.value;
}

var foo = changeStuff(obj1);

console.log(foo); // '222' 参数obj指向了新的对象obj2
console.log(obj1.value); //'333'
```

**函数的参数传递，传递的都是值，参数是 Object 类型的也一样，也是值，只不过这个值是地址值。**

- [Is JavaScript a pass-by-reference or pass-by-value language?](https://stackoverflow.com/questions/518000/is-javascript-a-pass-by-reference-or-pass-by-value-language?lq=1){:target='\_blank'}
- [javascript 传递参数如果是 object 的话，是按值传递还是按引用传递？](https://www.zhihu.com/question/27114726/answer/35481766){:target='\_blank'}
- [JavaScript 中函数都是值传递吗？](https://www.zhihu.com/question/51018162/answer/123779633){:target='\_blank'}
- [箭头函数和普通函数的区别](https://segmentfault.com/a/1190000021380336){:target='\_blank'}
- [08 | x => x：函数式语言的核心抽象：函数与表达式的同一性](https://time.geekbang.org/column/article/171617){:target='\_blank'}

## case不等于if

```js
function fn (arg) {
  switch(arg) {
    case '1':
          return 1  
    case '2':
          let a = 2
          return a;
    case '3':
          let a = 3
          return a;
    }
}
// js里有一点蛮坑的感觉，写case的时候，总觉得可以这么写
```

## 装逼文章大赏

- [这些 JavaScript 编程黑科技，装逼指南，高逼格代码，让你惊叹不已](https://segmentfault.com/a/1190000010752361){:target='\_blank'}

<!-- JavaScript  36 式（17，19，23，24）：
常用方法的实现
常用方法的整理
常用技巧的梳理
常考知识点的原理 -->
