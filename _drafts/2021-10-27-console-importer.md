---
layout: post
title: 教你在浏览器控制台安装npm包
categories: JavaScript
description: 教你在浏览器控制台安装npm包
keywords: JS, 前端, JavaScript
---

<!-- 循序渐进，添加script引入cdn资源，安装npm包（还是去找cdn），插件 -->

```js
function importer(originName) {
  if (typeof originName !== 'string') {
    throw new Error('Argument should be a string, please check it.');
  }

  // Trim string
  const name = originName.trim();

  // 三种引入方式

  // If it is a valid URL, inject it directly
  if (/^https?:\/\//.test(name)) {
    // return inject(name);
    return injectScript(name);
  }

  // If version specified, try unpkg
  if (name.indexOf('@') !== -1) {
    return unpkg(name);
  }

  return cdnjs(name);
}

// Insert script tag
function injectScript(url) {
  const script = document.createElement('script');
  script.src = url;
  document.body.appendChild(script);
  // document.body.removeChild(script);
}
function unpkg(name) {
  const url = `https://unpkg.com/${name}`;
  injectScript(url);
}
function cdnjs(name) {
  fetch(`https://api.cdnjs.com/libraries?search=${name}`, {
    referrerPolicy: 'no-referrer',
  })
    .then((res) => res.json())
    .then(({ results }) => {
      if (results.length === 0) {
        console.error(
          'Sorry, ',
          strong(name),
          ' not found, please try another keyword.'
        );
        return;
      }

      const { name: exactName, latest: url } = results[0];
      if (name !== exactName) {
        console.log(
          strong(name),
          ' not found, import ',
          strong(exactName),
          ' instead.'
        );
      }

      injectScript(url);
    })
    .catch(() => {
      console.error(
        'There appears to be some trouble with your network. If you think this is a bug, please report an issue:'
      );
      console.error('https://github.com/pd4d10/console-importer/issues');
    });
}
```
