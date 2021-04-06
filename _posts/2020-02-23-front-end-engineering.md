---
layout: post
title: 前端自动化、工程化原理与实践(一)
categories: 前端工程化系列原理与实践
description: 前端工程化系列原理与实践
keywords: 前端工程化，原理与实践
---

&emsp;&emsp;本系列文章主要用于前端自动化、工程化相关的笔记、原理与实践的简要记录，预计主要包括webpack、Babel、Git/npm/Yarn、Jenkings、CI/CD方面的内容。

## WebPack
### webpack功能模块设计

![webpack功能模块设计]({{site.url}}{{site.baseurl}}/images/posts/frontEndEngineering/webpack.jpeg?raw=true)   

### webpack流程

![webpack流程]({{site.url}}{{site.baseurl}}/images/posts/frontEndEngineering/webpack.png?raw=true)   

### webpack热更新原理分析

![webpack热更新原理]({{site.url}}{{site.baseurl}}/images/posts/frontEndEngineering/HMR.png?raw=true)  

  - HMR Runtime 通过 HotModuleReplacementPlugin 已经注入到我们 chunk 中了
  - 除了开启一个 Bundle Server，还开启了 HMR Server，主要用来和 HMR Runtime 中通信
  - 在编译结束的时候，通过 compiler.hooks.done，监听并通知客户端
  - 客户端接收到之后，就会调用  module.hot.check 等，发起 http 请求去服务器端获取新的模块资源解析并局部刷新页面

- [把 webpack 热更新原理聊清楚](https://mp.weixin.qq.com/s/-DZ5vMaiOhFsOb9RDx71wg){:target='_blank'}

### SSR实现思路
![SSR代码实现思路]({{site.url}}{{site.baseurl}}/images/posts/frontEndEngineering/SSR.png?raw=true)   

### Tapable

[tapable](https://segmentfault.com/a/1190000017420937){:target='_blank'} 是一个类似于nodejs 的EventEmitter 的库, 主要是控制钩子函数的发布与订阅,控制着webpack的插件系,webpack的本质就是一系列的插件运行。

## npm和yarn的区别

1. **yarn速度快**：

   - **并行安装**：无论 npm 还是 Yarn 在执行包的安装时，都会执行一系列任务。npm 是按照队列执行每个 package，也就是说必须要等到当前 package 安装完成之后，才能继续后面的安装。而 Yarn 是同步执行所有任务，提高了性能。
   - **离线模式**：如果之前已经安装过一个软件包，用Yarn再次安装时之间从缓存中获取，就不用像npm那样再从网络下载了。
2. **安装版本统一**：为了防止拉取到不同的版本，Yarn 有一个锁定文件 (lock file) 记录了被确切安装上的模块的版本号。每次只要新增了一个模块，Yarn 就会创建（或更新）yarn.lock 这个文件。
3. 更简洁的输出：npm 的输出信息比较冗长。在执行 npm install package 的时候，命令行里会不断地打印出所有被安装上的依赖。
4. 多注册来源处理：所有的依赖包，不管他被不同的库间接关联引用多少次，安装这个包时，只会从一个注册来源去装，要么是 npm 要么是 bower, 防止出现混乱不一致。
5. 更好的语义化： yarn改变了一些npm命令的名称，比如 yarn add/remove，感觉上比 npm 原本的 install/uninstall 要更清晰。
6. 有了yarn的压力之后，npm5.0做了一些类似的改进，如默认新增了类似yarn.lock的 package-lock.json。

