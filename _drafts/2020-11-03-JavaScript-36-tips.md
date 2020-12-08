---
layout: post
title: 前端装逼技巧 108 式
categories: JavaScript
description: 前端装逼技巧 108 式，助你更懂JS原理
keywords: JS, 前端, JavaScript
---

&emsp;&emsp;前端装逼技巧 108 式，助你更懂JS。

## 你知道 Chrome 为调试专门提供的这些函数吗？

- [你知道 Chrome 为调试专门提供的这些函数吗？](https://segmentfault.com/a/1190000038406115){:target='_blank'}

## 大文件上传

- [前端大文件上传](https://juejin.cn/post/6844903860327186445){:target='_blank'}

## 大文件下载

- [前端大文件下载方案](https://blog.csdn.net/azurecho/article/details/108618513){:target='_blank'}
- [从 Fetch 到 Streams —— 以流的角度处理网络请求](https://juejin.cn/post/6844904029244358670){:target='_blank'}

## `let Days={};Days[Days["Sun"] = 3] = "Sun"`

## `String.replace()`第二个参数可以是个函数？
- 特殊符号`$`
- [JavaScript replace() 方法](https://www.w3school.com.cn/jsref/jsref_replace.asp){:target='_blank'}

## 如何通过脚本来新建文件，提高开发效率？

- 抛砖引玉，你一定会探究出更高级的用法

- 接口

## 如何通过脚本完成自动化部署？

- 合同、UBOX等测试环境

## 动手实现一个 reduce

## reduce 还可以这么用？
  - runPromiseInSequence
  - Koa only、pick、omit

  [20个你不得不知道的数组reduce高级用法](https://mp.weixin.qq.com/s/cksKPLdXLje327UBI2eKIQ){:target='_blank'}

## 什么？我理解的forEach不对？

## 如何实现call、apply和bind

## 你知道 this 也有优先级吗？
  - 显式绑定和隐式绑定
  - new 绑定的优先级比显式 bind 绑定更高
  - new>显示绑定>隐式绑定

## 我不太想谈闭包和变量提升
  - 变量的定义和赋值过程
  - 闭包、懒加载、预解析

## let和const到底提升了吗？

  - [我用了两个月的时间才理解 let](https://zhuanlan.zhihu.com/p/28140450){:target='_blank'}

## 有趣的`let x = x`

- [JS变量封禁大法：薛定谔的X](https://zhuanlan.zhihu.com/p/28117094){:target='_blank'}

## new 到底新建了什么？

##  函数参数传递——你应该知道的那些区别
  - 箭头函数和普通函数
  - 基本类型和引用类型

## SQL也可以if else？
  - SQL之CASE WHEN用法详解

## 垃圾回收，一张图就够了

## JavaScript 是怎么执行的？

## 防抖和节流真的很难吗？
  - 如何在 react 函数式组件中使用防抖与节流函数

## 如何和浏览器过不去？比如让它卡死？
  - 带你看看宏任务和微任务

## 前端的未来在移动端吗？跨端方案都有哪些

[Electron 和当下其他的桌面开发方法相比如何？](https://www.zhihu.com/question/264999651?sort=created){:target='_blank'}

## 回调地狱：前端是如何一步步走出来的？
  - 前端异步方案是怎么一路走来的

## JavaScript新特性：Optional Chaining解决了什么问题？

  - [Optional Chains](http://www.ecma-international.org/ecma-262/#sec-optional-chains){:target='_blank'}

## 0.1 + 0.2 !== 0.3？体育老师说这个锅我不背

  - Number.EPSILON
  - toFixed
  - 字符串运算？整数运算？

  - [0.1 + 0.2 != 0.3背后的原理](https://segmentfault.com/a/1190000015051329){:target='_blank'}

## 如何实现mul(2)(3)(4)为24？

   - 函数珂里化
   - 或者compose 实现的几种方案

## 数组的N种操作

  - 扁平化
  - 去重
  - 类数组转化为数组

## 庭院深深深几许，杨柳堆烟，帘幕无重数 —— 如何实现深拷贝？

```js
  // 有undefined + 循环引用
  let obj = {
    a: 1,
    b: {
      c: 2,
      d: 3,
    },
    f: undefined
  }
  obj.c = obj.b;
  obj.e = obj.a
  obj.b.c = obj.c
  obj.b.d = obj.b
  obj.b.e = obj.b.c

  function deepCopy(obj) {
    return new Promise((resolve) => {
      const {port1, port2} = new MessageChannel();
      port2.onmessage = ev => resolve(ev.data);
      port1.postMessage(obj);
    });
  }

  deepCopy(obj).then((copy) => {           // 请记住`MessageChannel`是异步的这个前提！
      let copyObj = copy;
      console.log(copyObj, obj)
      console.log(copyObj == obj)
  });
```

- object.asign
- [MessageChannel](https://developer.mozilla.org/zh-CN/docs/Web/API/MessageChannel){:target='_blank'}
- [MessageChannel是什么，怎么使用？](https://www.jianshu.com/p/4f07ef18b5d7){:target='_blank'}

## Promise并行限制

## 渲染几万条数据，怎样才能不卡住页面？

## 只拆过快递，JS里装箱和拆箱又是什么？

## 为了减少冗余参数，我用 delete 有错吗？
  - 删除
  - 改变属性顺序

## 省省劲儿，setTimeout 不能让你的程序暂停

  - 如果设置的 timeout 小于 0，则设置为 0
  - 如果嵌套的层级超过了 5 层，并且 timeout 小于 4ms，则设置 timeout 为 4ms。

  - [setTimeout, setInterval 与 requestAnimationFrame 隐藏的各种坑](https://blog.csdn.net/qingyafan/article/details/52335753){:target='_blank'}
  - [参考](https://www.cnblogs.com/liuxiaoru/p/13637983.html){:target='_blank'}
  - [为什么 setTimeout 有最小时延 4ms ?](https://zhuanlan.zhihu.com/p/155752686){:target='_blank'}
  - 最小延时、最大延时

## 前端错误处理

## 纯前端代码生成 Excel

## iframe间数据传递，postMessage可以是你的选择

错误：`Block a frame with origin`
```js
  // 页面1
  top.postMessage(query, '*');
 //页面2 监听message事件
  useEffect(() => {
 const listener = ev => {
   console.log(ev,ev.data)
 };
   window.addEventListener('message', listener);
 return () => {
   window.removeEventListener('message', listener);
 };
  }, []);
```

## 流媒体播放

- [前端视频直播技术总结及video.js在h5页面中的应用](https://www.cnblogs.com/dreamsqin/p/12557070.html){:target='_blank'}
- [「1.4万字」玩转前端 Video 播放器 | 多图预警](https://juejin.cn/post/6850037275579121671){:target='_blank'}
- [[1.3万字] 玩转前端二进制](https://juejin.cn/post/6846687590783909902){:target='_blank'}

## 前端流程图

- [Gojs](https://gojs.net.cn/){:target='_blank'}

## 微信扫码登录原理

[浅析微信扫码登录原理(小结)](https://www.jb51.net/article/149680.htm){:target='_blank'}
[实践](https://wx.qq.com/){:target='_blank'}（查看长连接等）

## `Object.defineProperty()`为何被Vue弃用？

`Object.defineProperty()`方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象。同时，该API也是Vue 2.x数据绑定实现的核心，Vue 在 3.x 版本之后改用 Proxy 进行实现，本系列文章后续会进行简单讨论。

- [实现双向绑定Proxy比defineproperty优劣如何](https://www.jianshu.com/p/2df6dcddb0d7){:target='_blank'}
- [为什么Vue3.0使用Proxy实现数据监听？defineProperty表示不背这个锅](https://juejin.cn/post/6844903965180575751){:target='_blank'}


## 明明console 数组有值，展开就是空了？

- 明明里面是有值的 但是Length是0

## `will-change`是如何优化性能的？

&emsp;&emsp;CSS 属性 `will-change` 为web开发者提供了一种告知浏览器该元素会有哪些变化的方法，这样浏览器可以在元素属性真正发生变化之前提前做好对应的优化准备工作。这种优化可以将一部分复杂的计算工作提前准备好，使页面的反应更为快速灵敏。

- [will-change](https://developer.mozilla.org/zh-CN/docs/Web/CSS/will-change){:target='_blank'}
- [说一说will-change](https://mp.weixin.qq.com/s/rbDZntqZd8VcbDjQFER2Yw){:target='_blank'}
- [CSS页面渲染优化属性will-change](https://www.cnblogs.com/xiaohuochai/p/6321790.html){:target='_blank'}

## 既然饱受诟病，JavaScript为什么还是单线程的

## CSS

- [参考](https://mp.weixin.qq.com/s/UVifGMNXac3_KPLhR_cLNw){:target='_blank'}

## CSS动效

-[10 个 GitHub 上超火的 CSS 奇技淫巧项目，找到写 CSS 的灵感！](https://segmentfault.com/a/1190000038263876){:target='_blank'}

## JS动效

- [11 个最好的 JavaScript 动态效果库](https://segmentfault.com/a/1190000018577143){:target='_blank'}

## 如何修改antd样式

## http2

- [深入浅出：HTTP/2](https://www.cnblogs.com/confach/p/10141273.html){:target='_blank'}
- [一文读懂 HTTP/2 特性](https://zhuanlan.zhihu.com/p/26559480){:target='_blank'}

## 重放攻击

- [前端业务安全综述（防爬、防薅、人机校验等）](https://mp.weixin.qq.com/s/eQKqiBbiuw-_RwWVYUnFXg){:target='_blank'}

## 内网穿透

> 公网IP就是广域网IP，拥有公网IP就不需要经过路由器或交换机直接可以上网，而且，还能直接被外界访问到，也就是在Internet上可以和其他计算机随意互相访问。内网穿透一般是因为局域网应用网络环境没有公网IP，但又需要在外网进行访问，就需要进行内网穿透了，如通过内网穿透，生成固定域名来实现对局域网win电脑、网站、博客、视频监控、游戏联机、FTP/SVN/MAC服务器、公司的OA、erp等办公系统等等的远程外网访问。

- [什么是内网、外网？内网、外网有啥区别？](https://zhuanlan.zhihu.com/p/147282153){:target='_blank'}
- [内网穿透：在公网访问你家的 NAS](https://zhuanlan.zhihu.com/p/57477087){:target='_blank'}
- [内网穿透和公网IP有什么区别吗?](https://www.zhihu.com/question/404693104/answer/1315636116){:target='_blank'}

## 微前端、serverless

## JS代码调试必须要HTML、控制台或者node？

## 让对象的toString返回指定的字符串而不是[object Object]

## Node后台邮件服务器

- [Node后台邮件服务器](https://blog.csdn.net/konghouy/article/details/84961500){:target='_blank'}
- [Nodemailer](https://nodemailer.com/about/){:target='_blank'}

## 短信验证码

短信验证码，后端调服务商的api，服务商会把发送的验证码返回给你，然后用手机号作为key，存在比如redis里

- [Web项目中手机注册短信验证码实现的全流程及代码](https://blog.csdn.net/zuoliangzhu/article/details/81193269){:target='_blank'}


## 验证码的原理、作用及实现

- [验证码的原理、作用及实现](https://blog.csdn.net/niaonao/article/details/51112686){:target='_blank'}
- [node实现登录图片验证码的示例代码](https://www.jb51.net/article/138526.htm){:target='_blank'}

## 微信支付

- [支付宝、微信支付原理图](https://www.cnblogs.com/hua-nuo/p/12857671.html){:target='_blank'}
- [从前端的角度来梳理微信支付（小程序、H5、JSAPI）的流程](https://segmentfault.com/a/1190000038228200){:target='_blank'}
- [微信支付-文档](https://pay.weixin.qq.com/wiki/doc/api/app/app.php?chapter=8_3){:target='_blank'}

## 生成器函数执行器（co）

## 61

## 装逼文章大赏

- [这些JavaScript编程黑科技，装逼指南，高逼格代码，让你惊叹不已](https://segmentfault.com/a/1190000010752361){:target='_blank'}

<!-- JavaScript  36 式（17，19，23，24）：
常用方法的实现
常用方法的整理
常用技巧的梳理
常考知识点的原理 -->



