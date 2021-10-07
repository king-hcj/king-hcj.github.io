---
layout: post
title: JavaScript很简单？那你理解的forEach真的对吗？
categories: JavaScript
description: JavaScript很简单？那你理解的forEach真的对吗？
keywords: ES6，Array，forEach
---

&emsp;&emsp;你理解的`Array.prototype.forEach`真的对吗？

## Array.prototype.forEach

&emsp;&emsp;我们都知道，`forEach()` 方法对数组的每个元素执行一次给定的函数。它的语法也很简单：`arr.forEach(callback(currentValue [, index [, array]])[, thisArg])`：

- callback：为数组中每个元素执行的函数，该函数接收一至三个参数：
  - currentValue：数组中正在处理的当前元素。
  - index 可选，数组中正在处理的当前元素的索引。
  - array 可选，forEach() 方法正在操作的数组。
- thisArg 可选参数。当执行回调函数 callback 时，用作 this 的值。
- 返回值：`undefined`

常用用法：

```js
const array1 = ['a', 'b', 'c'];
array1.forEach((element) => console.log(element)); // 输出：a,b,c
```

&emsp;&emsp;相比普通的 for 循环，forEach 无需自己控制循环条件，所以很多时候，forEach 方法被用来代替 for 循环来完成数组的遍历。

## 这个 forEach 的实现真的对吗？

&emsp;&emsp;因为很多时候，forEach 方法被用来代替 for 循环来完成数组的遍历，所以经常可以看见 forEach 的一些 js 实现，例如：

```js
Array.prototype.forEachCustom = function (fn, context) {
  context = context || arguments[1];
  if (typeof fn !== 'function') {
    throw new TypeError(fn + 'is not a function');
  }

  for (let i = 0; i < this.length; i++) {
    fn.call(context, this[i], i, this);
  }
};
```

&emsp;&emsp;看起来没有问题，我们测试一下：

```js
const items = ['item1', 'item2', 'item3'];
items.forEach((item) => {
  console.log(item); //  依次打印：item1，item2，item3
});
items.forEachCustom((item) => {
  console.log(item); // 依次打印：item1，item2，item3
});
```

&emsp;&emsp;好的，似乎没有问题，一切貌似都很完美。我们再测试下下面几个示例：

```js
//  示例1
const items = ['', 'item2', 'item3', , undefined, null, 0];
items.forEach((item) => {
  console.log(item); //  依次打印：'',item2,item3,undefined,null,0
});
items.forEachCustom((item) => {
  console.log(item); // 依次打印：'',item2,item3,undefined,undefined,null,0
});
// 示例2
let arr = new Array(8);
arr.forEach((item) => {
  console.log(item); //  无打印输出
});
arr[1] = 9;
arr[5] = 3;
arr.forEach((item) => {
  console.log(item); //  打印输出：9 3
});
arr.forEachCustom((item) => {
  console.log(item); // 打印输出：daundefined 9 undefined*3  3 undefined*2
});
```

![太机智了]({{site.url}}{{site.baseurl}}/images/emoji/smart.jpg?raw=true)

&emsp;&emsp;貌似发生了什么可怕的事儿，同样的数组经过 forEachCustom 和 forEach 调用，在打印出的值和值的数量上均有差别。看来我以为的并不真的就是我以为的。

## 追本溯源

&emsp;&emsp;怎么办呢？咱不妨去看看 [ECMA 文档](http://www.ecma-international.org/ecma-262/11.0/index.html#sec-array.prototype.foreach){:target='\_blank'}，看看 forEach 是怎么实现的：

![forEach]({{site.url}}{{site.baseurl}}/images/posts/javascript/foreach.png?raw=true)

&emsp;&emsp;我们可以发现，真正执行遍历操作的是第 8 条，通过一个 while 循环来实现，**循环的终止条件是前面获取到的数组的长度（也就是说后期改变数组长度不会影响遍历次数），while 循环里，会先把当前遍历项的下标转为字符串，通过 HasProperty 方法判断数组对象中是否有下标对应的已初始化的项，有的话，获取对应的值，执行回调，没有的话，不会执行回调函数，而是直接遍历下一项**。

&emsp;&emsp;如此看来，**forEach 不对未初始化的值进行任何操作（稀疏数组）**，所以才会出现示例 1 和示例 2 中自定义方法打印出的值和值的数量上均有差别的现象。那么，我们只需对前面的实现稍加改造，即可实现一个自己的 forEach 方法：

```js
Array.prototype.forEachCustom = function (fn, context) {
  context = context || arguments[1];
  if (typeof fn !== 'function') {
    throw new TypeError(fn + 'is not a function');
  }

  let len = this.length;
  let k = 0;
  while (k < len) {
    // ECMA文档使用的是HasProperty，在此，使用in应该比hasOwnProperty更确切
    // if (this.hasOwnProperty(k)) {
    //   fn.call(context, this[k], k, this);
    // };
    if (k in this) {
      fn.call(context, this[k], k, this);
    }
    k++;
  }
};
```

&emsp;&emsp;再次运行示例 1 和示例 2 的测试用列，发现输出和原生 forEach 一致。

&emsp;&emsp;通过文档，我们还发现，**在迭代前 while 循环的次数就已经定了，且执行了 while 循环，不代表就一定会执行回调函数**，我们尝试在迭代时修改数组：

```js
// 示例3
var words = ['one', 'two', 'three', 'four'];
words.forEach(function (word) {
  console.log(word); // one，two，four（在迭代过程中删除元素，导致three被跳过，因为three的下标已经变成1，而下标为1的已经被遍历了过）
  if (word === 'two') {
    words.shift();
  }
});
words = ['one', 'two', 'three', 'four']; // 重新初始化数组进行forEachCustom测试
words.forEachCustom(function (word) {
  console.log(word); // one，two，four
  if (word === 'two') {
    words.shift();
  }
});
// 示例4
var arr = [1, 2, 3];
arr.forEach((item) => {
  if (item == 2) {
    arr.push(4);
    arr.push(5);
  }
  console.log(item); // 1，2，3（迭代过程中在末尾增加元素，并不会使迭代次数增加）
});
arr = [1, 2, 3];
arr.forEachCustom((item) => {
  if (item == 2) {
    arr.push(4);
    arr.push(5);
  }
  console.log(item); // 1，2，3
});
```

## 番外篇

&emsp;&emsp;**除了抛出异常以外，没有办法中止或跳出 forEach() 循环**。如果你需要中止或跳出循环，forEach() 方法不是应当使用的工具。若你需要提前终止循环，你可以使用：

- 一个简单的 for 循环
- for...of / for...in 循环
- Array.prototype.every()
- Array.prototype.some()
- Array.prototype.find()
- Array.prototype.findIndex()

&emsp;&emsp;这些数组方法则可以对数组元素判断，以便确定是否需要继续遍历：

- every()
- some()
- find()
- findIndex()

## 总结

- forEach 不对未初始化的值进行任何操作（稀疏数组）；
- 在迭代前，循环的次数就已经定了，且执行了循环，不代表就一定会执行回调函数；
- 除了抛出异常以外，没有办法中止或跳出 forEach() 循环。

&emsp;&emsp;遇到问题不可怕，多看文档，你总是会有不一样的收获。ECMA 文档：

- [ecma-262/6.0](http://www.ecma-international.org/ecma-262/6.0/){:target='\_blank'}
- [ecma-262/11.0](http://www.ecma-international.org/ecma-262/11.0/index.html){:target='\_blank'}

## 发布与转载

- [SegmentFault 思否社区](https://segmentfault.com/a/1190000030694113){:target='\_blank'}
- [全栈前端精选](https://mp.weixin.qq.com/s/wCCJODYofkZ_9o-eS-fd1g){:target='\_blank'}
- [web 前端大全](https://mp.weixin.qq.com/s/dYennTSjlKjmXx8FqZF6bQ){:target='\_blank'}
