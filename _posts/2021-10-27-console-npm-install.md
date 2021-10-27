---
layout: post
title: 大道至简，繁在人心：在浏览器控制台安装npm包是什么操作？
categories: JavaScript
description: 在浏览器控制台安装npm包是什么体验？
keywords: JS, 前端, JavaScript
---

> 大音希声，大象无形，大智若愚，大巧若拙，越是“复杂”的东西，其原理越趋向“简单”，**大道至简，繁在人心**。

&emsp;&emsp;我们都知道，npm 是 JavaScript 世界的包管理工具,并且是 Node.js 平台的默认包管理工具。通过 npm 可以安装、共享、分发代码,管理项目依赖关系。虽然作为命令行工具的 npm 近年来逐渐式微，但是作为广泛使用的存储库的 npm，却依然如日中天，还是世界上最大的软件注册表。

&emsp;&emsp;通常，我们通过`npm install xxx`在 React、Vue、Angular 等现代前端项目中安装依赖，但是前端项目在本质上还是运行在浏览器端的 HTML、JavaScript 和 CSS，那么，我们有办法**在浏览器控制台直接安装 npm 包并使用**吗？

&emsp;&emsp;如果你对这个问题感兴趣，我们不妨通过本文一探究竟。

<!-- 循序渐进，添加script引入cdn资源，安装npm包（还是去找cdn），插件 -->

## 通过 `<script />` 引入 cdn 资源

&emsp;&emsp;在浏览器控制台安装 npm 包，看起来是个天马行空的问题，让人觉得不太切实际。如果我换一个方式进行提问：如何在浏览器/HTML 中引入 JavaScript 呢？也许你马上就有了答案：`<script />`。没错，我们的第一步就是通过 `<script />`标签在 HTML 页面上引入 cdn 资源。

&emsp;&emsp;那么，又该如果在控制台在页面上插入`<script />`标签来引入 CDN 资源呢？**这个问题可难不倒你**：

```js
// 在页面中插入<script />标签
const injectScript = (url) => {
  const script = document.createElement('script');
  script.src = url;
  document.body.appendChild(script);
  // document.body.removeChild(script);
};
```

&emsp;&emsp;我们还得在资源引入后以及出现错误时，给用户一些提示：

```js
script.onload = (name) => {
  console.log(name, ' 安装成功。');
};
script.onerror = (name) => {
  console.log(name, ' 安装失败。');
};
```

&emsp;&emsp;这么以来，我们就可以直接在控制台引入 cdn 资源了，你可以在额外补充一些善后工作的处理逻辑。

## 根据包名安装 npm 包

&emsp;&emsp;上面实现了通过`<script />` 引入 cdn 资源，但是我们安装 npm 包一般都是通过`npm install`后面直接跟包名来完成的，显然单靠`<script />`的方式难以达到我们的饿预期，那么，有没有一种方式，可以将我们的**包名直接转换成 cdn 资源地址**呢？

&emsp;&emsp;答案当然是：有。否则我写个屁啊 🤔，`cdnjs`就提供了这样的能力。

&emsp;&emsp;[cdnjs](https://cdnjs.com/api){:target='\_blank'} 提供了一个简单的 **API**，允许任何人快速查询 CDN 上的资源。具体使用读者可参考官方链接，这里给出一个根据包名查询 CDN 资源链接的示例，可以直接在浏览器地址栏打开这个链接查看：`https://api.cdnjs.com/libraries?search=jquery`，这是一个 get 请求，你将看到类似下面的页面，数组的第一项为**名称/功能最相近的资源的最新 CDN 资源地址**：

![jquery](https://king-hcj.github.io/images/posts/javascript/jquery.png?raw=true)

&emsp;&emsp;是以，根据包名搜索 cdn 资源 URL 便有如下的实现：

```js
const cdnjs = async (name) => {
  const searchPromise = await fetch(
    `https://api.cdnjs.com/libraries?search=${name}`,
    // 不显示referrer的任何信息在请求头中
    { referrerPolicy: 'no-referrer' }
  );
  const { results, total } = await searchPromise.json();
  if (total === 0) {
    console.error('Sorry, ', name, ' not found, please try another keyword.');
    return;
  }

  // 取结果中最新的一条
  const { name: exactName, latest: url } = results[0];
  if (name !== exactName) {
    console.log(name, ' not found, import ', exactName, ' instead.');
  }
  // 通过<script />标签插入
  injectScript(url);
};
```

## 安装特定版本的 npm 包

&emsp;&emsp;我们在 npm 中还可以通过类似`npm install jquery@3.5.1`的语法安装特定版本的 npm 包，而 cdnjs 只能返回特定版本的详细信息（不含 cdn 资源链接）。

&emsp;&emsp;[UNPKG](https://unpkg.com/){:target='\_blank'}在此时可以帮我们一个大忙。unpkg 是一个快速的全球内容分发网络，适用于 npm 上的所有内容。使用它可以使用以下 URL 快速轻松地从任何包**加载任何文件**：`unpkg.com/:package@:version/:file`。

&emsp;&emsp;例如，访问`https://unpkg.com/jquery@3.5.1`会自动重定向到`https://unpkg.com/jquery@3.5.1/dist/jquery.js`，并返回`v3.5.1`版本的`jQuery`文件内容（如果不带版本号，会返回最新的资源）：

![jquery_unpkg](https://king-hcj.github.io/images/posts/javascript/jquery_unpkg.png?raw=true)

&emsp;&emsp;也就是说，我们可以将`https://unpkg.com/`➕`包名`直接丢给`<script />`标签来加载资源：

```js
const unpkg = (name) => {
  injectScript(`https://unpkg.com/${name}`);
};
```

## 完整代码

&emsp;&emsp;将上面的代码简单整理，并通过一个统一的入口方法`npmInstall`进行调用：

```ts
// 存储原始传入的名称
let pkg_name_origin = null;
const npmInstall = (originName: string) => {
  // Trim string
  const name = originName.trim();
  pkg_name_origin = name;
  // 三种引入方式
  // 如果是一个有效的URL，直接通过<script />标签插入
  if (/^https?:\/\//.test(name)) return injectScript(name);
  // 如果指定了版本，尝试使用unpkg加载
  if (name.indexOf('@') !== -1) return unpkg(name);
  // 否则，尝试使用cdnjs搜索
  return cdnjs(name);
};

// 在页面中插入<script />标签
const injectScript = (url) => {
  const script = document.createElement('script');
  script.src = url;
  script.onload = () => {
    console.log(pkg_name_origin, ' 安装成功。');
  };
  script.onerror = () => {
    console.log(pkg_name_origin, ' 安装失败。');
  };
  document.body.appendChild(script);
  // document.body.removeChild(script);
};

const unpkg = (name) => {
  injectScript(`https://unpkg.com/${name}`);
};

const cdnjs = async (name) => {
  const searchPromise = await fetch(
    `https://api.cdnjs.com/libraries?search=${name}`,
    // 不显示referrer的任何信息在请求头中
    { referrerPolicy: 'no-referrer' }
  );
  const { results, total } = await searchPromise.json();
  if (total === 0) {
    console.error('Sorry, ', name, ' not found, please try another keyword.');
    return;
  }

  // 取结果中最新的一条
  const { name: exactName, latest: url } = results[0];
  if (name !== exactName) {
    console.log(name, ' not found, import ', exactName, ' instead.');
  }
  // 通过<script />标签插入
  injectScript(url);
};
```

&emsp;&emsp;我们可以通过类似`npmInstall('moment')`的方式在控制台进行调用：

![console](https://king-hcj.github.io/images/posts/javascript/consoleSuc.png?raw=true)

## 可以干什么

&emsp;&emsp;那么，这个工具到底有什么用呢？

- 在控制台通过 jQuery 方便的操作 DOM；
- 在控制台验证某些库的用法，如`moment.js`；

## 可以学到什么

- unpkg：如何查询 npm 包的最新版本以及特定版本的 js 文件；
- cdnjs：如何查询 npm 包的 cdn 地址；
- cdnjs：如何查询相似的 npm 包。
