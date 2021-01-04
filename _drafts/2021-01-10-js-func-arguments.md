---
layout: post
title: JS中的函数 —— 你可能不知道的参数
categories: JavaScript
description: JS中的函数 —— 你可能不知道的参数
keywords: JS, 前端, JavaScript, 函数参数
---

&emsp;&emsp;我们都知道，JavaScript 中的函数定义并未指定函数形参的类型，函数调用也未对传入的实参值做任何类型检查，JavaScript 函数调用甚至不检查传入形参的个数。

```js
function sidEffecting(ary) {
  ary[0] = ary[2];
}
function bar(a,b,c) {
  c = 10
  sidEffecting(arguments);
  return a + b + c;
}
bar(1,1,1)
```

## 函数的参数-arguments

## 同名参数

## 内部属性

- callee：arguments对象有一个名为callee的属性，该属性是一个指针，指向拥有这个arguments对象的函数
- caller

## 箭头函数不绑定 arguments

&emsp;&emsp;箭头函数不会在其内部暴露出arguments对象： arguments.length, arguments[0], arguments[1] 等等，都不会指向箭头函数的 arguments，而是指向了箭头函数所在作用域的一个名为 arguments 的值(如果有的话，否则，就是 undefined)。箭头函数没有自己的 arguments 对象，不过在大多数情形下，rest参数可以给出一个解决方案。

## `function.length` —— 函数重载

- 看看 MDN 的解释：

  - `length` 是函数对象的一个属性值，指该函数有多少个**必须要传入的参数**，那些**已定义了默认值的参数不算在内**，比如 function（x = 0）的 length 是 0。即形参的数量仅包括第一个具有默认值之前的参数个数。
  - 与之对比的是， `arguments.length` 是函数被调用时实际传参的个数。

- JS 函数重载

&emsp;&emsp;函数重载，就是函数名称一样，但是允许有不同输入，根据输入的不同，调用不同的函数，返回不同的结果。JS 里默认是没有函数重载的，但是有了`Function.length`属性和`arguments.length`，我们便可简单的通过`if…else`或者`switch`来完成 JS 函数重载了。

```js
function overLoading() {
  // 根据arguments.length，对不同的值进行不同的操作
  switch (arguments.length) {
    case 0 /*操作1的代码写在这里*/:
      break;
    case 1 /*操作2的代码写在这里*/:
      break;
    case 2: /*操作3的代码写在这里*/
  }
}
```

&emsp;&emsp;更高级的函数重载，请参考 jQuery 之父 John Resig 的[JavaScript Method Overloading](https://johnresig.com/blog/javascript-method-overloading/){:target='\_blank'}， 这篇文章里，作者巧妙地利用闭包，实现了 JS 函数的重载。

> 参考资料：[浅谈 JavaScript 函数重载](https://www.cnblogs.com/yugege/p/5539020.html){:target='\_blank'} &#124; [JavaScript Method Overloading](https://johnresig.com/blog/javascript-method-overloading/){:target='\_blank'} &#124; [【译】JavaScript 函数重载 - Fundebug](https://blog.fundebug.com/2017/07/24/javascript_metho_overloading/){:target='\_blank'} &#124; [Function.length](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/length){:target='\_blank'}


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

[JS中的函数(二)：函数参数（你可能不知道的参数传递）](https://www.cnblogs.com/hanhanhan/p/5765920.html){:target='_blank'}
[深入理解javascript函数系列第二篇——函数参数](https://www.cnblogs.com/xiaohuochai/p/5706289.html){:target='_blank'}
[【JS 口袋书】第 3 章：JavaScript 函数](https://segmentfault.com/a/1190000020616499){:target='_blank'}