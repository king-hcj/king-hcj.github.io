---
layout: post
title: 你不知道的那些第二个参数
categories: JavaScript
description: 你不知道的那些第二个参数
keywords: JS, 前端, JavaScript
---

## 你也许真的不了解 JSON.stringify
【第二个参数】
  - [慎用JSON.stringify](https://mp.weixin.qq.com/s/jmEXKuamwP6EgfntuvV9fQ){:target='_blank'}

## `String.replace()`第二个参数可以是个函数？

- 特殊符号`$`
- [JavaScript replace() 方法](https://www.w3school.com.cn/jsref/jsref_replace.asp){:target='\_blank'}

```js
// 下划线转换驼峰
function toHump(name) {
    return name.replace(/\_(\w)/g, function(all, letter){
        return letter.toUpperCase();
    });
}
// 驼峰转换下划线
function toLine(name) {
  return name.replace(/([A-Z])/g,"_$1").toLowerCase();
}
 
 
// 测试
let a = 'a_b2_345_c2345';
console.log(toHump(a));
 
let b = 'aBdaNf';
console.log(toLine(b));
```

实用封装：
```js
// 下划线转换驼峰
function toHumpObj (data) {
    if (typeof data == 'object') {
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          let eleValue = data[key];
          typeof eleValue == 'object' && toHumpObj(eleValue);
          delete data[key];
          let newKey = key.replace(/\_(\w)/g, function (all, letter) {
            return letter.toUpperCase();
          });
          data[newKey] =
            newKey == 'CompanyId' || newKey == 'State' ? +eleValue : eleValue;
        }
      }
    }
    return data;
  }
  // 驼峰转换下划线
  function toLineObj (data) {
    if (typeof data == 'object') {
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          let eleValue = data[key];
          typeof eleValue == 'object' && toLineObj(eleValue);
          delete data[key];
          let newKey = (key[0].toLowerCase() + key.slice(1)).replace(/([A-Z])/g, "_$1").toLowerCase();
          data[newKey] =
            newKey == 'CompanyId' || newKey == 'State' ? +eleValue : eleValue;
        }
      }
    }
    return data;
  }
```