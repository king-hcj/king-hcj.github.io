---
layout: post
title: ES6，你理解的forEach真的对吗？
categories: JavaScript
description: ES6，你理解的forEach真的对吗？
keywords: ES6，Array，forEach
---

## Array.prototype.forEach

## 这个 forEach 的实现真的对吗？

```JavaScript
if(!Array.prototype.forEach) {
    Array.prototype.forEachCustom = function(fn, context) {
        let context = arguments[1];
        if(typeof fn !== "function") {
            throw new TypeError(fn + "is not a function");
        }

        for(let i = 0; i < this.length; i++) {
            fn.call(context, this[i], i, this);
        }
    };
}
```

```js
let arr = new Array(8)
arr.forEach(item => {
    console.log(item); //  无打印输出
})
arr[1] = 9
arr[5] = 3
arr.forEach(item => {
    console.log(item); //  打印输出：9 3
})
arr.forEachCustom(item => {
    console.log(item) // undefined 9 undefined*3  3 undefined*2 
})
```

- [用原生 js 实现 forEach()方法](https://www.jianshu.com/p/f16cd177e883){:target='\_blank'}
- [数组的 foreach 中操作数组](https://segmentfault.com/a/1190000014488802?utm_source=sf-related){:target='\_blank'}

## 追本溯源

- [ecma-262/6.0](http://www.ecma-international.org/ecma-262/6.0/){:target='\_blank'}
- [ecma-262/11.0](http://www.ecma-international.org/ecma-262/11.0/index.html){:target='\_blank'}

## 归宿（实现）
