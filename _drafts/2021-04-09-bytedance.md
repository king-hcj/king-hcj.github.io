---
layout: post
title: 被字节鞭尸的第108次
categories: JavaScript
description: 被字节鞭尸的第108次
keywords: JS, 前端, JavaScript, 面试
---

大型鞭尸现场，惨不忍睹
被反复、花样蹂躏

就是上不了岸，还一直被蹂躏

```js
// 1
var obj = {
  a: 1,
  b: 2,
  fn: () => {
    console.log(1);
  },
};

for (var c of obj) {
  console.log(c);
}

// 2
var result = [];
var a = 3;
var total = 0;
function foo(a) {
  var i = 0;
  for (; i < 3; i++) {
    result[i] = function () {
      total += i * a;
      console.log(total);
    };
  }
}

foo(1);
result[0]();
result[1]();
result[2]();

// 3
function fn(...args) {
  // TODO;
}

var f1 = fn(1, 2, 3);
console.log(f1.getValue()); // 6
var f2 = fn(1)(2, 3);
console.log(f2.getValue()); // 6
var f3 = fn(1)(2)(3);
console.log(f3.getValue()); // 6
var f4 = fn(1)(2)(3)(4);
console.log(f4.getValue()); // 10
```
