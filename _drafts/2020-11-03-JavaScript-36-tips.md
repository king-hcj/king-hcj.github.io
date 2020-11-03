---
layout: post
title: JavaScript 36 式
categories: JavaScript
description: JavaScript 36 式，祝你更懂JS原理
keywords: JS, 前端, JavaScript
---

&emsp;&emsp;JavaScript 36 式，祝你更懂JS原理。

## 1.toFixed()和1..toFixed()，哪个才不会报错？
  - Number(1).toFixed()

## 动手实现一个 reduce

## reduce 还可以这么用？
  - runPromiseInSequence
  - Koa only、pick、omit

## 什么？我理解的forEach不对？

## 如何实现call、apply和bind

## getBoundingClientRect：让你找准定位不迷失自我

## 你知道 this 也有优先级吗？
  - 显式绑定和隐式绑定
  - new 绑定的优先级比显式 bind 绑定更高
  - new>显示绑定>隐式绑定

## 我不太想谈闭包和变量提升
  - 变量的定义和赋值过程
  - 闭包、懒加载、预解析

## let和const到底提升了吗？

  - [我用了两个月的时间才理解 let](https://zhuanlan.zhihu.com/p/28140450){:target='_blank'}

## typeof不靠谱，我们又该如何判断类型？

    - typeof之殇
    - instanceof是怎么实现的？
    - Object.prototype.toString竟如此万能？
    - constructor为什么不是我们的选择？
    - 如果不想自己动手，type.js 你可以看一看

## new 到底新建了什么？

## 不带脏字的骂产品——类型转换你值得拥有
  - `(!(~+[])+{})[--[~+""][+[]]*[~+[]]+~~!+[]]+({}+[])[[~!+[]*~+[]]]`
  [js 骂人不带脏字 (!(~+[]) + {})[--[~+""][+[]] * [~+[]] + ~~!+[]] + ({} + [])[[~!+[]] * ~+[]] 图解...](https://blog.csdn.net/weixin_33943347/article/details/93212673){:target='_blank'}

## `a == 1 && a == 2 && a == 3`，我们都一样？
```js
var count = 1
var a = {
  valueOf: function(){return count++}
}
```

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

## 产品说要按照中文拼音排序？
  - 附送一个对象数组按照另一个数组排序

## 十进制二进制互转没那么麻烦

- `NumberObject.toString(radix)`
- `parseInt(string, radix);`
```js
var num = 10;
console.log(num.toString(2));
```

```js
var num = 1100100;
console.log(parseInt(num,2));
```

## 前端的未来在移动端吗？跨端方案都有哪些

## 回调地狱：前端是如何一步步走出来的？
  - 前端异步方案是怎么一路走来的

## JavaScript新特性：Optional Chaining解决了什么问题？

  - [Optional Chains](http://www.ecma-international.org/ecma-262/#sec-optional-chains){:target='_blank'}

## 0.1 + 0.2 !== 0.3？体育老师说这个锅我不背

  - Number.EPSILON
  - toFixed

## 如果没有BigInt，如何进行大数运算？

- [参考](https://www.cnblogs.com/Ballon/p/4752409.html){:target='_blank'}

## 不用加减乘除如何做加法——位运算让你的代码更高效
  - 加法
  - 不借助第三个变量交换a,b两个变量值的N种方法
```js
function add(a,b) {
    var sum;
    var add1;
    while(b!=0) {
        // 异或
        sum = a^b;
        // 与 左移
        add1 = (a&b)<<1;
        a = sum;
        b = add1;
    }
    return a
}
```

 - [【剑指offer】不用加减乘除做加法](https://blog.csdn.net/ns_code/article/details/27966641){:target='_blank'}
 - [不借助第三个变量交换a,b两个变量值](https://blog.csdn.net/web_hwg/article/details/75045689){:target='_blank'}
 - [参考](https://www.cnblogs.com/xiaonian8/p/13821533.html){:target='_blank'}

## 如何实现mul(2)(3)(4)为24？

   - 函数珂里化
   - 或者compose 实现的几种方案

## 数组的N种操作

  - 扁平化
  - 去重
  - 类数组转化为数组

## 庭院深深深几许，杨柳堆烟，帘幕无重数 —— 如何实现深拷贝？

## Promise并行限制

## 渲染几万条数据，怎样才能不卡住页面？

## 只拆过快递，JS里装箱和拆箱又是什么？

## 为了减少冗余参数，我用 delete 有错吗？
  - 删除
  - 改变属性顺序

## 对象属性会自己偷偷排队？

## 36

<!-- JavaScript  36 式（17，19，23，24）：
常用方法的实现
常用方法的整理
常用技巧的梳理
常考知识点的原理 -->



