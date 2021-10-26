---
layout: post
title: 教你在浏览器控制台安装npm包
categories: JavaScript
description: 教你在浏览器控制台安装npm包
keywords: JS, 前端, JavaScript
---

<!-- 循序渐进，添加script引入cdn资源，安装npm包（还是去找cdn），插件 -->

## 通过script引入cdn资源

```js
// Insert script tag
const injectScript = (url) => {
  const script = document.createElement('script');
  script.src = url;
  document.body.appendChild(script);
  // document.body.removeChild(script);
}
```

## 安装特定版本npm包

### UNPKG

&emsp;&emsp;[UNPKG](https://unpkg.com/){:target='_blank'}：unpkg 是一个快速的全球内容分发网络，适用于 npm 上的所有内容。使用它可以使用以下 URL 快速轻松地从任何包加载任何文件：`unpkg.com/:package@:version/:file`；

```js
const unpkg = (name) => {
  injectScript(`https://unpkg.com/${name}`);
}
```

## 根据包名安装

### cdnjs

- [cdnjs](https://cdnjs.com/api){:target='_blank'}：cdnjs 提供了一个简单的 API，允许任何人快速查询我们在 CDN 上的库。

## 完整代码

```ts
const npmInstall = (originName: string) => {
  // Trim string
  const name = originName.trim();
  // 三种引入方式
  // If it is a valid URL, inject it directly
  if (/^https?:\/\//.test(name)) return injectScript(name);
  // If version specified, try unpkg
  if (name.indexOf('@') !== -1) return unpkg(name);
  return cdnjs(name);
}

// Insert script tag
const injectScript = (url) => {
  const script = document.createElement('script');
  script.src = url;
  document.body.appendChild(script);
  // document.body.removeChild(script);
}


const unpkg = (name) => {
  injectScript(`https://unpkg.com/${name}`);
}

const cdnjs = async (name) => {
  const searchPromise = await fetch(`https://api.cdnjs.com/libraries?search=${name}`, {
    referrerPolicy: 'no-referrer',
  });
  const { results } = await searchPromise.json();
  if (results.length === 0) {
        console.error(
          'Sorry, ',
          name,
          ' not found, please try another keyword.'
        );
        return;
      }

      const { name: exactName, latest: url } = results[0];
      if (name !== exactName) {
        console.log(
          name,
          ' not found, import ',
          exactName,
          ' instead.'
        );
      }
      injectScript(url);
}
```

## 可以干什么

## 可以学到什么

// 查各种包，查cdn资源