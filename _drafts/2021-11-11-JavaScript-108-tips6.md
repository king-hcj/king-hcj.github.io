---
layout: post
title: 前端装逼技巧 108 式（终章） - 不装逼的逼王
categories: JavaScript
description: 前端装逼技巧 108 式，助你更懂JS原理
keywords: JS, 前端, JavaScript
---

> 原来《人月神话》不是本奇幻小说！ 原来《代码大全》不是一堆开源代码！ 原来《鸟哥的 Linux 私房菜》不是教你做菜！ 原来《边城》不是教你写代码的！ 原来《深入浅出 HTML》不是教你**H**ow **T**o **M**ake **L**ove。

- [一叹](http://www.fx361.com/page/2017/0224/888345.shtml){:target='\_blank'}

思考：取舍问题，偏技术就会失去趣味性；偏趣味性又会失去一些深度

如果选择深度：

- 看一些比较普适的、有深度的文章，进行总结提炼
- 如果偏趣味性：找一些常见或者会用到的、好玩儿、又能提炼出技术原理的东西

建议有深度的内容，放在**前端中高级面试精华荟萃**系列里面讲，这里已轻松为主。

## 如何通过动图学习 JS

可多篇

- [JavaScript Visualized Series' Articles](https://dev.to/lydiahallie/series/3341){:target='\_blank'} &#124; [译文](https://segmentfault.com/u/savokiss/articles){:target='\_blank'} &#124; [译文](https://juejin.cn/post/6844904050165563406){:target='\_blank'}

## isInputPending

- [Facebook 将对 React 的优化实现到了浏览器！](https://mp.weixin.qq.com/s/Lbcu1aa2LQZlddAwIIExqA){:target='\_blank'} &#124; [Faster input events with Facebook’s first browser API contribution](https://engineering.fb.com/2019/04/22/developer-tools/isinputpending-api/){:target='\_blank'}

## 你也许真的不了解 JSON.stringify

简单的深拷贝，复杂的不行？真的不行吗？
【第二个参数】

- [慎用 JSON.stringify](https://mp.weixin.qq.com/s/jmEXKuamwP6EgfntuvV9fQ){:target='\_blank'}
- [你可能不知道的 JSON 序列化](https://mp.weixin.qq.com/s/fSJHY6oEJHiiOq2ODRawPg){:target='\_blank'}

## 高压缩文件是如何实现的？

- [高压缩文件是如何实现的？](https://www.zhihu.com/question/19925039/answer/19738033){:target='\_blank'}
- [他发明了 zip 压缩格式，功成名就之际死于堕落](https://zhuanlan.zhihu.com/p/25044196){:target='\_blank'}
- [压缩文件为什么不能一层层压缩自身？](https://www.zhihu.com/question/20207589/answer/14333722){:target='\_blank'}

## 浏览器自带的长截图

- [浏览器自带的长截图](https://blog.csdn.net/weixin_38753698/article/details/106654346){:target='\_blank'}

## 纯前端生成和解析 Excel

- [纯前端生成和解析 Excel](https://king-hcj.github.io/2020/05/19/export-excel/){:target='\_blank'}
- [Node.js + Vue 实现 Excel 导出与保存](https://mp.weixin.qq.com/s/PHIbCZe31rATZj34xgdKkA){:target='\_blank'}

## CSS 如何实现局部光照效果？

- [CSS 如何实现局部光照效果？](https://segmentfault.com/q/1010000039359551?utm_source=homepage#){:target='\_blank'}
- 在线演示：[深入理解 CSS 径向渐变 radial-gradient](https://www.cnblogs.com/xiaohuochai/p/5383285.html){:target='\_blank'}

## 第九十一式：抽象语法树(AST)

ESLint 使用 Espree 来解析 JavaScript 语句，生成 AST。有了完整的解析树，我们就可以基于解析树对代码进行检测和修改。

ESLint 的灵魂是每一条 rule，每条规则都是独立且插件化的。一条规则就是一个 node 模块，它由 meta 和 create 组成。meta 包含了该条规则的文档描述，相对简单。而 create 接受一个 context 参数，返回一个对象。从 context 对象上我们可以取得当前执行扫描到的代码，并通过选择器获取当前需要的内容。

- [AST 抽象语法树——最基础的 javascript 重点知识，99%的人根本不了解](https://segmentfault.com/a/1190000016231512){:target='\_blank'}
- [AST 生成](https://astexplorer.net/){:target='\_blank'}
- [Parser API](https://developer.mozilla.org/en-US/docs/Mozilla/Projects/SpiderMonkey/Parser_API){:target='\_blank'}
- [Espree](https://github.com/eslint/espree/blob/master/README.md){:target='\_blank'}
- [Esprima](https://esprima.org/index.html){:target='\_blank'}
- [代码规范工具及背后技术设计（下）](https://gitbook.cn/gitchat/column/5c91c813968b1d64b1e08fde/topic/5c99b2e5ccb24267c1d01a14){:target='\_blank'}

## 第九十二式：前端也要懂一些 shell 脚本编程，如何使用脚本完成项目的便捷部署

- 传统：build，压缩， scp 上传，备份，解压
- git CICD 等
- Jenkins：一个开源的持续集成的服务器，Jenkins 开源帮助我们自动构建各类项目。Jenkins 强大的插件式，使得 Jenkins 可以集成很多软件，可能帮助我们持续集成我们的工程项目。

- 最基础的打包、上传、登录

```js
"scripts": {
    "build": "umi build && zip -r qm-web.zip dist && zip -q -r qm-web.zip ./dist && scp qm-web.zip name.gu@192.168.0.123:~ && ssh name.gu@192.168.0.123",
}
```

- 测试环境发布（无需考虑备份）：

```s
# publish_pre.sh
#!/bin/sh

rm -rf ./ucontract/*

export NODE_ENV=production

yarn build

scp -r ./ucontract/* root@192.168.0.123:/data/front-end/ucontract
```

- 正式环境发布

  - 本地脚本：打包、压缩、上传

  ```s
  # publish_prod.sh
  #!/bin/sh

  export NODE_ENV=production

  projectname=ucontract
  distdir=./ucontract/*

  rm -rf $distdir

  rm -rf ./ucontract-*.zip

  yarn build

  branch=`git rev-parse --abbrev-ref HEAD`
  echo Current Branch : $branch

  commitid=`git rev-parse --short HEAD`
  echo Current Commit ID : $commitid

  now=$(date +%Y%m%d\%H%M)
  echo Current Time : $now

  packagename=$projectname-$branch-$commitid-$now.zip
  echo Package Name : $packagename

  # If the developed system you coding on is windows, you aren't able to execute `zip` command
  # You can refer to following link
  # https://ranxing.wordpress.com/2016/12/13/add-zip-into-git-bash-on-windows/
  # Or you can comment `zip` command and uncomment `node zip.js` command
  #zip -r $packagename $distdir

  node zip.js

  echo Enter the password: assdfggf21212ds

  scp -r ucontract-$branch-*.zip root@192.168.0.321:/data/ucloud/
  ```

  - 服务器脚本

  ```s
  # deploy_frontend.sh
  LatestPackage=`ls -alrt ucontract-* | tail -n 1 | awk '{print $9}'`

  unzip -o $LatestPackage

  ReservedNum=7

  date=$(date "+%Y%m%d%H%M%S")

  FileNum=$(ls -l|grep ucontract- |wc -l)

  while(( $FileNum > $ReservedNum))
  do
      OldFile=$(ls -alrt ucontract-* | head -1)
      echo  $date "Delete File:"$OldFile
      rm -rf $OldFile
      let "FileNum--"
  done
  ```

- [Bash 脚本教程 - 阮一峰](https://wangdoc.com/bash/index.html){:target='\_blank'}
- [scp 命令](https://wangdoc.com/ssh/scp.html){:target='\_blank'}

## 第九十三式：yeoman generator 与自定义脚手架

- [前端工程化 通过 yeoman-generator 将文件加载到本地](https://blog.csdn.net/zemprogram/article/details/104125933){:target='\_blank'}

## 第九十四式：plop

- [小型前端脚手架工具 plop 的简单使用](https://blog.csdn.net/zemprogram/article/details/104146833){:target='\_blank'}

## 第九十五式：大文件上传

- [前端大文件上传](https://juejin.cn/post/6844903860327186445){:target='\_blank'}
- [HTTP 断点续传（分块传输）（HTTP 头格式非常清楚）](https://www.cnblogs.com/findumars/p/5745345.html){:target='\_blank'}
- [Range 回源和视频拖拽播放](https://blog.csdn.net/Kim_Weir/article/details/85336313){:target='\_blank'}

## 第九十六式：大文件下载

- [前端大文件下载方案](https://blog.csdn.net/azurecho/article/details/108618513){:target='\_blank'}
- [从 Fetch 到 Streams —— 以流的角度处理网络请求](https://juejin.cn/post/6844904029244358670){:target='\_blank'}

## 第九十七式：流媒体播放

- [「1.4 万字」玩转前端 Video 播放器 | 多图预警](https://juejin.cn/post/6850037275579121671){:target='\_blank'}
- [前端视频直播技术总结及 video.js 在 h5 页面中的应用](https://www.cnblogs.com/dreamsqin/p/12557070.html){:target='\_blank'}
- [[1.3 万字] 玩转前端二进制](https://juejin.cn/post/6846687590783909902){:target='\_blank'}

## 第九十八式：v8 为什么要采用多种垃圾回收方式？各种垃圾回收方式的优劣对比

- 引用计数
- 标记清除
- 标记整理

- [V8 引擎的垃圾回收策略](https://www.cnblogs.com/onepixel/p/7422820.html){:target='\_blank'}
- [垃圾回收算法优缺点对比](https://www.jianshu.com/p/47ff2bff20dc){:target='\_blank'}
- [V8 专题](http://newhtml.net/category/v8%e4%b8%93%e9%a2%98/){:target='\_blank'}
- [V8 之旅： 垃圾回收器](http://newhtml.net/v8-garbage-collection/){:target='\_blank'}
- [几种垃圾回收算法](https://www.jianshu.com/p/a8a04fd00c3c){:target='\_blank'}
- [V8 引擎的垃圾回收策略](https://www.cnblogs.com/onepixel/p/7422820.html){:target='\_blank'}
- [V8 引擎垃圾回收机制分析](https://blog.csdn.net/weixin_41376400/article/details/106076661){:target='\_blank'}
- [前端面试：谈谈 JS 垃圾回收机制](https://segmentfault.com/a/1190000018605776){:target='\_blank'}
- [面试官问你有没有了解过 V8 的 javascript 垃圾回收机制算法](https://zhuanlan.zhihu.com/p/37996721){:target='\_blank'}
- [V8 中的垃圾收集（GC），图文指南](https://zhuanlan.zhihu.com/p/29276031){:target='\_blank'}

## 第九十九式：http2

- [深入浅出：HTTP/2](https://www.cnblogs.com/confach/p/10141273.html){:target='\_blank'}
- [一文读懂 HTTP/2 特性](https://zhuanlan.zhihu.com/p/26559480){:target='\_blank'}

## 第一百式：diff 算法对比？

## 第一百零一式：`Object.defineProperty()`为何被 Vue 弃用？

`Object.defineProperty()`方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象。同时，该 API 也是 Vue 2.x 数据绑定实现的核心，Vue 在 3.x 版本之后改用 Proxy 进行实现，本系列文章后续会进行简单讨论。

- [实现双向绑定 Proxy 比 defineproperty 优劣如何](https://www.jianshu.com/p/2df6dcddb0d7){:target='\_blank'}
- [为什么 Vue3.0 使用 Proxy 实现数据监听？defineProperty 表示不背这个锅](https://juejin.cn/post/6844903965180575751){:target='\_blank'}
- [Vue 的数据响应式原理](https://www.infoq.cn/article/we3l33h5zgyyg6gc9hri){:target='\_blank'}

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>defineProperty 多个成员</title>
  </head>
  <body>
    <div id="app">hello</div>
    <script>
      // 模拟 Vue 中的 data 选项
      let data = {
        msg: 'hello',
        count: 10,
      };

      // 模拟 Vue 的实例
      let vm = {};

      proxyData(data);

      function proxyData(data) {
        // 遍历 data 对象的所有属性
        Object.keys(data).forEach((key) => {
          // 把 data 中的属性，转换成 vm 的 setter/setter
          Object.defineProperty(vm, key, {
            enumerable: true,
            configurable: true,
            get() {
              console.log('get: ', key, data[key]);
              return data[key];
            },
            set(newValue) {
              console.log('set: ', key, newValue);
              if (newValue === data[key]) {
                return;
              }
              data[key] = newValue;
              // 数据更改，更新 DOM 的值
              document.querySelector('#app').textContent = data[key];
            },
          });
        });
      }

      // 测试
      vm.msg = 'Hello World';
      console.log(vm.msg);
    </script>
  </body>
</html>
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Proxy</title>
  </head>
  <body>
    <div id="app">hello</div>
    <script>
      // 模拟 Vue 中的 data 选项
      let data = {
        msg: 'hello',
        count: 0,
      };

      // 模拟 Vue 实例
      let vm = new Proxy(data, {
        // 执行代理行为的函数
        // 当访问 vm 的成员会执行
        get(target, key) {
          console.log('get, key: ', key, target[key]);
          return target[key];
        },
        // 当设置 vm 的成员会执行
        set(target, key, newValue) {
          console.log('set, key: ', key, newValue);
          if (target[key] === newValue) {
            return;
          }
          target[key] = newValue;
          document.querySelector('#app').textContent = target[key];
        },
      });

      // 测试
      vm.msg = 'Hello World';
      console.log(vm.msg);
    </script>
  </body>
</html>
```

## 第一百零二式：微前端

## 第一百零三式：低代码

## 第一百零四式：serverless

## 第一百零五式：可视化

## 第一百零六式：跨端

## 第一百零二式：前端架构

## 第一百零八式：逼王

- 论装逼的艺术

## 签字板

- [前端小功能：canvas 签名版](https://www.cnblogs.com/bore/p/11351641.html){:target='\_blank'}
- [JS canvas 实现画板和签字板功能](https://www.zztuku.com/front-1076.html){:target='\_blank'}
- [web 前端 原生 js 签名板(电子签名)写字板 canvas 截图](https://blog.csdn.net/qq_33270001/article/details/81809535){:target='\_blank'}
- [sign-canvas 一个基于 canvas 开发,封装于 Vue 组件的通用手写签名板(电子签名板),支持 pc 端和移动端；](https://blog.csdn.net/qq_33270001/article/details/102855964){:target='\_blank'}

- [集成一个好用的 canvas 签名板](https://www.cnblogs.com/my3306/p/9895920.html){:target='\_blank'}
- [Tablet](https://github.com/941477276/Tablet/tree/master){:target='\_blank'}

## 你不知道的 GIF

&emsp;&emsp;GIF 文件带给了我们很多欢乐，君不见每天微博上搞笑的图片大多数都是 GIF 格式的。那么 GIF 这种神奇的图片格式究竟是怎么来的呢？GIF(Graphics Interchange Format)的原义是“图像互换格式”。本片是 SmartWater 工作室为首届 GIF 动画节 Moving the Still 所做，精致的粘土定格动画给我们讲述了 GIF 这三十年的历史，还给我们展示了为什么 GIF 文件能给我们带来无穷的欢乐。A Short History of the Gif GIF25 岁生日快乐！

> [科普小知识：GIF 的简短历史](https://v.qq.com/x/cover/p0164wh13yx/p0164wh13yx.html){:target='\_blank'}

&emsp;&emsp;动图，顾名思义就是动态图片，亦称 GIF 图片。官方解释：它是一个可以将多幅图像数据存于一起，并逐帧显示到屏幕上，形成简单动画的图像文件。

&emsp;&emsp;gif 的全称是 Graphics Interchange Format（ 图形交换格式 ），诞生于 1987 年，最初是为了填补跨平台图像格式的空白，用人话来说就是填补了静态图片和视频之间的空隙。gif 最初由一家叫做 CompuServe 的公司搞出来，这也是美国最早的一家信息服务公司。gif 到了 1995 年才能循环起来，这已经是 gif 诞生 8 年之后了。之所以 gif 能在 1995 年开始循环播放，其实要靠一个叫做网景 （ Netscape ） 的浏览器。

&emsp;&emsp;gif 之所以能够在有限的大小实现了动态画面，是因为它采用了 LZW（ Lempel-Zev-Welch ）压缩算法。LZW 算法也叫做 “ 串表压缩算法 ”，这种算法会用数字来表示文件中第一次出现的串，然后再放进串表中。而压缩文件只存储数字，不存储串符，这样压缩效率就会得到提高。

&emsp;&emsp;2004 年，一种叫做 apng 的动图格式诞生于火狐浏览器所在的公司，它和 gif 类似，但是它是以一帧帧 png 组成的。再结合优异的压缩算法， apng 在文件大小和 gif 相似的情况下，图片质量要更高，而且即使不加载整个动图也能预览第一张。直到 2017 年才只有 Safari 和火狐浏览器支持，2019 年 Chrome 才跟上。

&emsp;&emsp;到了 5G 时代，就连短视频都能够轻松地用手机观看和制作，动图更是小事一桩的事情。从简单的像素动画到现在的全民表情包，gif 似乎就是为互联网而生的。几十年过去了，gif 仍然宝刀不老，也许在几年之后，apng 就会取代它，但 gif 应该永远不会被遗忘。其实啊，无论是什么格式，这一张张动图既是互联网时代的缩影，也默默记录着每个网上冲浪的人的喜怒哀乐。

&emsp;&emsp;动图是一个多幅图像数据文件，其中应至少包含两幅图片。当图像越多时，动画就越细腻（文件也越大）。当每秒超过 24 帧，即单帧时间低于 0.04 秒，这些连续播放的图片就会连成视频。

- [为什么 30 多年过去了，GIF 还没有被淘汰](https://zhuanlan.zhihu.com/p/396618872){:target='\_blank'}
- [谈谈 GIF 格式](https://zhuanlan.zhihu.com/p/22590949){:target='\_blank'}
- [GIF 动图发展史上的 11 个重要时刻](https://zhuanlan.zhihu.com/p/28466822){:target='\_blank'}

## Linux 下使用 curl 查看 http 请求各阶段耗时

- [Linux 下使用 curl 查看 http 请求各阶段耗时](https://www.cnblogs.com/lnlvinso/p/9775484.html){:target='\_blank'}
- [Linux 使用 curl 查看请求响应时间](https://blog.csdn.net/zhenyushao/article/details/69258536){:target='\_blank'}

## `pointer-events` 与鼠标穿透

&emsp;&emsp;`pointer-events`是 css3 的一个属性，指定在什么情况下元素可以成为鼠标事件的`target`（包括鼠标的样式）。`pointer-events`属性有很多值，但是对于浏览器来说，只有`auto`（默认值）和`none`两个值可用，其它的几个是针对 SVG 的(本身这个属性就来自于 SVG 技术)。`none`值时，元素永远不会成为鼠标事件的`target`（目标）。

- [非常有用的 pointer-events 属性](https://www.cnblogs.com/kunmomo/p/11752669.html){:target='\_blank'}
- [pointer-events](https://developer.mozilla.org/zh-CN/docs/Web/CSS/pointer-events){:target='\_blank'}

## Mutation Observer API：监视 DOM 变动。DOM 的任何变动，比如节点的增减、属性的变动、文本内容的变动，这个 API 都可以得到通知。

- [Mutation Observer API](https://wangdoc.com/javascript/dom/mutationobserver.html){:target='\_blank'}

## queueMicrotask —— 不用 promise，如何创建微任务

- [queueMicrotask - MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/WindowOrWorkerGlobalScope/queueMicrotask){:target='\_blank'}
- [使用 queueMicrotask 来执行微任务](https://segmentfault.com/a/1190000020332724){:target='\_blank'}

## rel=”noopener noreferrer”

- [关于 rel=”noopener noreferrer”的作用](http://www.6cu.com/seoxuetang/gjcpm/2019/1203/27843.html){:target='\_blank'} &#124; [rel=noopener/noreferrer 简介](https://www.dazhuanlan.com/2020/01/02/5e0d46202b8a8/){:target='\_blank'}
  ```js
  <a href='http://other.site' target='_blank' rel='noopener noopener'>
    LINK
  </a>
  ```
- [Chrome 88 新功能解读](https://mp.weixin.qq.com/s/RCGljgCqtxkRbQ-KJz9w0w){:target='\_blank'}
- [Javascript 中 window.opener 的一点小总结](https://www.cnblogs.com/ilinuxer/p/5245983.html){:target='\_blank'}

## window.onerror 和 window.addEventListener('error')

- 可处理类型
- 处理机制：冒泡、捕获
- 区别
- 怎么区分网络资源加载错误和其他一般错误

- [性能监控和错误收集与上报（下）](https://gitbook.cn/gitchat/column/5c91c813968b1d64b1e08fde/topic/5c99c5dbccb24267c1d01b98){:target='\_blank'}

## requestIdleCallback

- [你应该知道的 requestIdleCallback](https://segmentfault.com/a/1190000014457824){:target='\_blank'}
- [requestIdleCallback-后台任务调度](http://www.zhangyunling.com/702.html){:target='\_blank'}

## 突破 Chrome 浏览器 12px 的最小字体限制

- [再谈 Chrome 的最小字体 12px 限制](https://zhuanlan.zhihu.com/p/69695071){:target='\_blank'}
- [Chrome 的最小字体 12px 限制最终解决办法](https://blog.csdn.net/im_dogg/article/details/93891050){:target='\_blank'}
- [针对谷歌默认最小字体 12px 的正确解决方案 （css、html）](https://blog.csdn.net/qq_36278639/article/details/52944690){:target='\_blank'}

## 性能数据获取：window.performance 与 自定义时间计算

- [fmp-timing](https://github.com/qbright/fmp-timing){:target='\_blank'} &#124; [前端监控实践——FMP 的智能获取算法](https://segmentfault.com/a/1190000017092752){:target='\_blank'}
- [性能监控和错误收集与上报（上）](https://gitbook.cn/gitchat/column/5c91c813968b1d64b1e08fde/topic/5c99c52fccb24267c1d01b87){:target='\_blank'}
- [初探 performance – 监控网页与程序性能](http://www.alloyteam.com/2015/09/explore-performance/){:target='\_blank'}

## GitHub 隐藏新功能！个人页还能这么玩？

- [GitHub 隐藏新功能！个人页还能这么玩？](https://zhuanlan.zhihu.com/p/161029860){:target='\_blank'}
- [定制 github 首页-自动更新 Github 的 star 数量](https://blog.csdn.net/LEILEI18A/article/details/116659324){:target='\_blank'}
- [在你的 README 中获取动态生成的 GitHub 统计信息！](https://github.com/anuraghazra/github-readme-stats/blob/master/docs/readme_cn.md){:target='\_blank'}
<!-- https://github-readme-stats.vercel.app/api?username=king-hcj -->

## 这可能是我迄今为止见过拥有最全速查表的技术网站！

- [这可能是我迄今为止见过拥有最全速查表的技术网站！](https://zhuanlan.zhihu.com/p/153461066){:target='\_blank'}

## callee 和 caller 的作用与区别

- [callee 和 caller 的作用与区别](https://blog.csdn.net/hustzw07/article/details/72312329){:target='\_blank'}

## JS new Function()

new Function（）的参数是某个字符串，在使用时，编译器会将参数中的字符串当作正常的脚本代码来执行。利用这种方法来把字符串转对象，可以简单的想象成就是 new 出一个对象。

vue 中 parse 最后会把一个字符串形式的函数传给 new Function()

- [JS 巧用 new Function() 把字符串（string）转对象（object）](https://blog.csdn.net/piaoyinluo2316/article/details/87003745){:target='\_blank'}
- [JS 的 new Function()](https://blog.csdn.net/piaoyinluo2316/article/details/84135918){:target='\_blank'}

## window.history.length 的大坑

- [window.history.length 的大坑](https://zhuanlan.zhihu.com/p/91931664)

```js
// 无法回退时关闭网页
// window.history.length是1，那么肯定不能回退了，但是大于1，无法判断能不能继续回退。
window.history.length > 1
  ? window.history.back()
  : // window.history.go( -1 );
    setTimeout(() => {
      window.close();
    }, 2000);
```

## console.log()

- [Will console.log reduce JavaScript execution performance?](https://stackoverflow.com/questions/11426185/will-console-log-reduce-javascript-execution-performance){:target='\_blank'}
- [console.log() async or sync?](https://stackoverflow.com/questions/23392111/console-log-async-or-sync){:target='\_blank'}
- [Does console log affect performance?](https://everythingwhat.com/does-console-log-affect-performance){:target='\_blank'}
- [Is Chrome's JavaScript console lazy about evaluating arrays?](https://stackoverflow.com/questions/4057440/is-chromes-javascript-console-lazy-about-evaluating-arrays){:target='\_blank'}
- [array.length is zero, but the array has elements in it [duplicate]](https://stackoverflow.com/questions/42260524/array-length-is-zero-but-the-array-has-elements-in-it){:target='\_blank'}
- [Weird behavior with objects & console.log [duplicate]](https://stackoverflow.com/questions/23429203/weird-behavior-with-objects-console-log){:target='\_blank'}
- [Please stop using console.log(), it’s broken…](https://hackernoon.com/please-stop-using-console-log-its-broken-b5d7d396cf15){:target='\_blank'}

和内存泄漏关联

## 内存泄漏

- [4 Types of Memory Leaks in JavaScript and How to Get Rid Of Them](https://auth0.com/blog/four-types-of-leaks-in-your-javascript-code-and-how-to-get-rid-of-them/){:target='\_blank'}
- [Don't Fear node.js console.log()](https://surfingthe.cloud/dont-fear-node-js-console-log/){:target='\_blank'}
- [Does console log increase memory on nodejs server?](https://stackoverflow.com/questions/54204313/does-console-log-increase-memory-on-nodejs-server/54205072){:target='\_blank'}
- [Memory leak patterns in JavaScript](https://www.ibm.com/developerworks/web/library/wa-memleak/wa-memleak-pdf.pdf){:target='\_blank'}

## 导航守卫

- [vue-router 导航守卫，不懂的来](https://zhuanlan.zhihu.com/p/54112006){:target='\_blank'}
- [导航守卫](https://router.vuejs.org/zh/guide/advanced/navigation-guards.html){:target='\_blank'}
- [React Router 4.0 实现路由守卫](https://www.jianshu.com/p/677433245697){:target='\_blank'}
- [如何实现一个 react-router 路由拦截（导航守卫）](https://juejin.cn/post/6844903753284321294){:target='\_blank'}

## 如何挂起请求

如何挂起请求（Promise），refresh_token 后再用新的 access_token 重新发起请求？

- [axios 拦截器封装 http 请求，刷新 token 重发请求](https://juejin.cn/post/6844903894481371143){:target='\_blank'}

## Vue 中的 render: h => h(App) 具体是什么含义？

- [Explanation for `render: h => h(App)` please](https://github.com/vuejs-templates/webpack-simple/issues/29){:target='\_blank'}
- [关于 Vue 中的 render: h => h(App) 具体是什么含义？](https://segmentfault.com/q/1010000007130348){:target='\_blank'}

> It comes from the term "hyperscript", which is commonly used in many virtual-dom implementations. "Hyperscript" itself stands for "script that generates HTML structures" because HTML is the acronym for "hyper-text markup language".

它来自“ hyperscript”一词，该术语通常在许多虚拟 dom 实现中使用。 “超脚本”本身代表“生成 HTML 结构的脚本”，因为 HTML 是“超文本标记语言”的首字母缩写。

## console.log 恶搞（待定）

- [这些鲜为人知的前端冷知识，你都 GET 了吗？](https://mp.weixin.qq.com/s/stGK1dvOV1skp8iubMWRZw){:target='\_blank'}

## 哪些场景下不适合使用 ES6 箭头函数

- this：构造函数的原型方法上
- this：使用对象方法时
- this：使用动态回调时
- arguments：需要获得 arguments 时

- [ES6 箭头函数使用禁忌](https://zhuanlan.zhihu.com/p/28972104)
- [哪些场景下不适合使用 ES6 箭头函数](https://gitbook.cn/gitchat/column/5c91c813968b1d64b1e08fde/topic/5cbbe98ebbbba80861a35bfe)

## JavaScript 中判断函数是 new 还是()调用

- [new.target](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/new.target){:target='\_blank'}
- [new.target 属性](https://es6.ruanyifeng.com/#docs/class#new-target-%E5%B1%9E%E6%80%A7){:target='\_blank'}
- [JavaScript 中判断函数是 new 还是()调用](https://blog.csdn.net/weixin_33794672/article/details/85480850){:target='\_blank'}

## You don't (may not) need Lodash/Underscore

- [You don't (may not) need Lodash/Underscore](https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore){:target='\_blank'}

## 使用 VSCode 断点调试 js 项目，html 页面

- [用 vscode 来调试 js 文件吧](https://www.jianshu.com/p/8f8f384075a2){:target='\_blank'}
- [使用 VSCode 断点调试 js 项目，html 页面](https://blog.csdn.net/arvin0/article/details/53673351){:target='\_blank'}

## Babel 是如何处理 let、const 和箭头函数的

- JavaScript 严格模式（strict mode）不允许使用未声明的变量，加上严格模式的标记，自然就可以实现了 TDZ 的效果。
- Babel 编译会将 let、const 变量重新命名；
- Babel 检测到 const 声明的变量被改变赋值，就会主动插入了一个 \_readOnlyError 函数，并执行此函数。这个函数的执行内容就是报错，因此代码执行时就会直接抛出异常。

- [Babel 编译对代码做了什么](https://gitbook.cn/gitchat/column/5c91c813968b1d64b1e08fde/topic/5cbbe98ebbbba80861a35bfe)

## BFC

BFC 就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此。

- [BFC 背后的布局问题](https://gitbook.cn/gitchat/column/5c91c813968b1d64b1e08fde/topic/5cbbeaf5bbbba80861a35c03)
- [10 分钟理解 BFC 原理](https://zhuanlan.zhihu.com/p/25321647)

## HTML

给汉字加拼音
展开收起组件
禁止用户选中文字
开启硬件加速
让 chrome 支持小于 12px 的文字
CSS 变量：简单使用；一键主题切换；
CSS modules 并不是真正的局部有效（唯一 class 名称，web components 更接近真正的局部有效）
composes 实现样式复用

- [进击的 CSS 和 HTML](https://gitbook.cn/m/mazi/columns/5c91c813968b1d64b1e08fde/topics/5cbbef07bbbba80861a35c21)

## CSS 中的相对单位

- em
- rem
- vh、vw、vmin、vmax
- %
- calc()

- [【第 2193 期】7 个你可能不认识的 CSS 单位](https://mp.weixin.qq.com/s/oxvwUZxEhsBos7LUVBcyXA){:target='\_blank'}

## 5 个好用的 CSS 函数，快来试试手吧！

- [5 个好用的 CSS 函数，快来试试手吧！](https://segmentfault.com/a/1190000039031953){:target='\_blank'}

## git 分支合并时如何忽略某个文件

> [git 分支合并时如何忽略某个文件【译文】](http://www.voidcn.com/article/p-aohzmust-c.html){:target='\_blank'} &#124; [How to make Git preserve specific files while merging](https://medium.com/@porteneuve/how-to-make-git-preserve-specific-files-while-merging-18c92343826b){:target='\_blank'}：
> git 在 merge 分支时，有一个默认的 merge 驱动，这个驱动会去检查每个文件的每一行，如果按照一定规则发现两个分支的同一个文件有不同，那么认为两个分支都对这个文件做了修改，会 merge 两个文件，此时有可能产生冲突；那么如果我们自定义一个 merge 驱动，在里面定义一些不会被检查的文件，那 git 就会直接跳过这些文件，因此就不会 merge 了。

## momentjs 太重了吗？试试 dayjs 和 miment 吧

[Moment.js Github](https://github.com/moment/moment){:target='\_blank'}：Moment.js is a legacy project, now in maintenance mode. In most cases, you should choose a different library.

默认情况下，webpack 会打包所有的 Moment.js 语言环境（在 Moment.js 2.18.1 中，最小为 160 KB）。 若要剥离不必要的语言环境且仅打包使用的语言环境，则添加 moment-locales-webpack-plugin。

moment.js 的大小达到了 200KB，对于非 SSR 的首屏渲染性能非常不友好，所以，如果对于 moment.js 的需求不大，可以考虑社区中出现的，它的替代方案。

- day.js
- miment.js

- [moment 优化](http://momentjs.cn/docs/#/use-it/webpack/){:target='\_blank'}
- [Day.js](https://day.js.org/zh-CN/){:target='\_blank'}
- [Miment](https://github.com/noahlam/Miment){:target='\_blank'}
- [JS 使用技巧 2——momentjs 太重了吗？试试 dayjs 和 miment 吧](https://segmentfault.com/a/1190000017517737){:target='\_blank'}

## SharedWorker

- [SharedWorker](https://developer.mozilla.org/zh-CN/docs/Web/API/SharedWorker)

## HTML5 标签实现手风琴效果：https://mp.weixin.qq.com/s/jTM6iwTyrOo_c7HvSQWZSw

- [前端进阶之路](https://king-hcj.github.io/2020/05/25/front-end-engineer-promotion/){:target='\_blank'}
- https://www.jq22.com/webqd5638

<details><summary>Output</summary>
<p>

```
Node {
  type: 'Program',
  start: 0,
  end: 15,
  body: [
    Node {
      type: 'VariableDeclaration',
      start: 0,
      end: 15,
      declarations: [Array],
      kind: 'let'
    }
  ],
  sourceType: 'script'
}
```

</p>
</details>

## 网页短链接的实现原理

- [网页短链接的实现原理](https://blog.csdn.net/mimicoa/article/details/79834242)
- [网页短链接实现原理探究](https://blog.csdn.net/lishanleilixin/article/details/82908834)

## 打字机效果

- requestAnimationFrame

- [打字机效果](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/setInterval#%E4%BE%8B%EF%BC%93%EF%BC%9A%E6%89%93%E5%AD%97%E6%9C%BA%E6%95%88%E6%9E%9C)
- [JS 插件 —— 酷炫的打字机效果: Typed.js](https://www.jianshu.com/p/37ff22decc62)
- [5 行代码带你实现一个 js 的打字效果](https://zhuanlan.zhihu.com/p/94619915)
- [用 css3 实现打字机效果](https://blog.csdn.net/shenshuai00/article/details/108964144)
- [CSS 实现打字效果](https://www.cnblogs.com/xieyulin/p/7085766.html)
- [纯 css 实现打字效果](https://www.ilt.me/dmfx/16.html)
- [打字机](http://www.bootstrapmb.com/tag/daziji)

## JS 常见的四种 Error 类型

- [javaScript 代码飘红报错看不懂？读完这篇文章再试试！](https://zhuanlan.zhihu.com/p/339429715)

## 从浏览器多进程到 JS 单线程，JS 运行机制最全面的一次梳理

- [从浏览器多进程到 JS 单线程，JS 运行机制最全面的一次梳理](https://segmentfault.com/a/1190000012925872){:target='\_blank'}

## UV 和 PV

- [如何清楚易懂的解释“UV 和 PV＂的定义？](https://www.zhihu.com/question/20448467){:target='\_blank'}

## [全新的互联网体验](http://newhtml.net/){:target='\_blank'}

## 如何实现前端录音功能

- [如何实现前端录音功能](https://zhuanlan.zhihu.com/p/43581133){:target='\_blank'}

## 李银城：https://www.zhihu.com/people/li-yin-cheng-24/posts

## input 框限制只能输入中文

```js
const input = document.querySelector('input[type="text"]');
const clearText = (target) => {
  const { value } = target;
  target.value = value.replace(/[^\u4e00-\u9fa5]/g, '');
};
input.onfocus = ({ target }) => {
  clearText(target);
};
input.onkeyup = ({ target }) => {
  clearText(target);
};
input.onblur = ({ target }) => {
  clearText(target);
};
input.oninput = ({ target }) => {
  clearText(target);
};
```

## 你知道 Chrome 为调试专门提供的这些函数吗？

- [你知道 Chrome 为调试专门提供的这些函数吗？](https://segmentfault.com/a/1190000038406115){:target='\_blank'}

## `let Days={};Days[Days["Sun"] = 3] = "Sun"`

## 如何通过脚本完成自动化部署？

- 合同、UBOX 等测试环境

## 动手实现一个 reduce

## reduce 还可以这么用？

- runPromiseInSequence
- Koa only、pick、omit

[20 个你不得不知道的数组 reduce 高级用法](https://mp.weixin.qq.com/s/cksKPLdXLje327UBI2eKIQ){:target='\_blank'}

## 如何实现 call、apply 和 bind

## 你知道 this 也有优先级吗？

- 显式绑定和隐式绑定
- new 绑定的优先级比显式 bind 绑定更高
- new>显示绑定>隐式绑定

## 我不太想谈闭包和变量提升

- 变量的定义和赋值过程
- 闭包、懒加载、预解析

## let 和 const 到底提升了吗？定义一个变量会经历什么样的过程？

- [我用了两个月的时间才理解 let](https://zhuanlan.zhihu.com/p/28140450){:target='\_blank'}
- [08 | x => x：函数式语言的核心抽象：函数与表达式的同一性](https://time.geekbang.org/column/article/171617){:target='\_blank'}

## new 到底新建了什么？

## 垃圾回收，一张图就够了

## JavaScript 是怎么执行的？

## 防抖和节流真的很难吗？

- 如何在 react 函数式组件中使用防抖与节流函数

## 如何和浏览器过不去？比如让它卡死？

- 带你看看宏任务和微任务

## 前端的未来在移动端吗？跨端方案都有哪些

[Electron 和当下其他的桌面开发方法相比如何？](https://www.zhihu.com/question/264999651?sort=created){:target='\_blank'}

## 回调地狱：前端是如何一步步走出来的？

- 前端异步方案是怎么一路走来的

## JavaScript 新特性：Optional Chaining 解决了什么问题？

- [Optional Chains](http://www.ecma-international.org/ecma-262/#sec-optional-chains){:target='\_blank'}

## 如何实现 mul(2)(3)(4)为 24？

- 函数柯里化（curry）
- 或者 compose 实现的几种方案
- 如果一个值要经过多个函数，才能变成另外一个值，就可以把所有中间步骤合并成一个函数，这叫做"函数的合成"（compose）。

- [三行代码实现 add(1)(2)(3)](https://juejin.cn/post/6844904093467541517){:target='\_blank'}

## 数组的 N 种操作

- 扁平化：
  - 循环加递归（concat）
  - flat
  - flatMap
  - toString 后 split
  - join 后 split：[1,2,[3,[4,5]]].join().split(',')
- 去重
- 类数组转化为数组

- [JS 专题之数组展开](https://www.imooc.com/article/277566){:target='\_blank'}

## `504 Gateway Time-out`，也许你并不一定需要`git clone`

- 全克隆
- 单一克隆
- 深度克隆

当项目过大时，git clone 时会出现 error: RPC failed; HTTP 504 curl 22 The requested URL returned error: 504 Gateway Time-out 的问题。

总结：

- 用 git clone --depth=1 的好处是限制 clone 的深度，不会下载 Git 协作的历史记录，这样可以大大加快克隆的速度
- depth 用于指定克隆深度，为 1 即表示只克隆最近一次 commit
- **适合用 git clone --depth=1 的场景**：你只是想 clone 最新版本来使用或学习，而不是参与整个项目的开发工作

- [详细介绍 git clone --depth=1 的用法](https://blog.csdn.net/qq_43827595/article/details/104833980){:target='\_blank'}
- [git clone 几种可选参数的使用与区别](https://blog.csdn.net/shrimpcolo/article/details/80164741){:target='\_blank'}

## Promise 并行限制

## Promise.all，一个失败都失败，怎么解决

- 每一个都处理 catch（或者），确保不会出现异常（`urls.map(item => axios(item).catch(e => 'error'))`）
- Promise.allSettled

- [使用 promise.all 遇到其中一个阻塞导致所有处理无法进行的处理方式](https://blog.csdn.net/Drongguang/article/details/91406290){:target='\_blank'}
  > 资料参考：[Promise 中的三兄弟 .all(), .race(), .allSettled()](https://segmentfault.com/a/1190000020034361){:target='\_blank'}

## 业务超时，race

## 想做自己的前端项目，却没有后端支持 —— 有哪些好玩的免费的 API 接口?

- [前端数据模拟的三种姿势](https://blog.csdn.net/huangpb123/article/details/79273316){:target='\_blank'}

- [有哪些好玩的免费的 API 接口?](https://www.zhihu.com/question/32225726){:target='\_blank'}
- [\{JSON\} Placeholder](https://jsonplaceholder.typicode.com/){:target='\_blank'}：快速搭建 RESTful API 接口
- [json-server](https://github.com/typicode/json-server){:target='\_blank'}
- [Mock.js](http://mockjs.com/){:target='\_blank'}
- [yesno](https://yesno.wtf/api){:target='\_blank'}
- [程序员必备网站之一：API Coding](https://zhuanlan.zhihu.com/p/145137377){:target='\_blank'}
- [这款神器，能帮你快速找到想要的 API 接口！](https://zhuanlan.zhihu.com/p/141209314){:target='\_blank'}

## 渲染几万条数据，怎样才能不卡住页面？

## React 官方提供的：React.addons.Perf

- [React 性能优化总结](https://segmentfault.com/a/1190000007811296){:target='\_blank'}

## 只拆过快递，JS 里装箱和拆箱又是什么？

## 为了减少冗余参数，我用 delete 有错吗？

- 删除
- 改变属性顺序

## 省省劲儿，setTimeout 不能让你的程序暂停

- 如果设置的 timeout 小于 0，则设置为 0
- 如果嵌套的层级超过了 5 层，并且 timeout 小于 4ms，则设置 timeout 为 4ms。

- [setTimeout, setInterval 与 requestAnimationFrame 隐藏的各种坑](https://blog.csdn.net/qingyafan/article/details/52335753){:target='\_blank'}
- [参考](https://www.cnblogs.com/liuxiaoru/p/13637983.html){:target='\_blank'}
- [为什么 setTimeout 有最小时延 4ms ?](https://zhuanlan.zhihu.com/p/155752686){:target='\_blank'}
- [为什么要用 setTimeout 模拟 setInterval ？](https://segmentfault.com/a/1190000038829248)
- 最小延时、最大延时

## 前端流程图

- [Gojs](https://gojs.net.cn/){:target='\_blank'}

## 微信扫码登录原理

[浅析微信扫码登录原理(小结)](https://www.jb51.net/article/149680.htm){:target='\_blank'}
[实践](https://wx.qq.com/){:target='\_blank'}（查看长连接等）

## 明明 console 数组有值，展开就是空了？

- 明明里面是有值的 但是 Length 是 0

## 既然饱受诟病，JavaScript 为什么还是单线程的

## CSS

- [参考](https://mp.weixin.qq.com/s/UVifGMNXac3_KPLhR_cLNw){:target='\_blank'}

## CSS 动效

-[10 个 GitHub 上超火的 CSS 奇技淫巧项目，找到写 CSS 的灵感！](https://segmentfault.com/a/1190000038263876){:target='\_blank'}

## JS 动效

- [11 个最好的 JavaScript 动态效果库](https://segmentfault.com/a/1190000018577143){:target='\_blank'}

## 纯 CSS 实现 24 个大写英文字母 CSS-fonts

- [纯 CSS 实现 24 个大写英文字母 CSS-fonts](https://yusugomori.com/projects/css-sans/fonts){:target='\_blank'}
- [【CSS】纯 CSS 实现 24 个大写英文字母 CSS-fonts](https://juejin.cn/post/6979617409082589197){:target='\_blank'}

## 如何修改 antd 样式

## 重放攻击

- [前端业务安全综述（防爬、防薅、人机校验等）](https://mp.weixin.qq.com/s/eQKqiBbiuw-_RwWVYUnFXg){:target='\_blank'}

## 内网穿透

> 公网 IP 就是广域网 IP，拥有公网 IP 就不需要经过路由器或交换机直接可以上网，而且，还能直接被外界访问到，也就是在 Internet 上可以和其他计算机随意互相访问。内网穿透一般是因为局域网应用网络环境没有公网 IP，但又需要在外网进行访问，就需要进行内网穿透了，如通过内网穿透，生成固定域名来实现对局域网 win 电脑、网站、博客、视频监控、游戏联机、FTP/SVN/MAC 服务器、公司的 OA、erp 等办公系统等等的远程外网访问。

- [什么是内网、外网？内网、外网有啥区别？](https://zhuanlan.zhihu.com/p/147282153){:target='\_blank'}
- [内网穿透：在公网访问你家的 NAS](https://zhuanlan.zhihu.com/p/57477087){:target='\_blank'}
- [内网穿透和公网 IP 有什么区别吗?](https://www.zhihu.com/question/404693104/answer/1315636116){:target='\_blank'}

## 前端打印

- [window.print() 前端实现网页打印详解](https://blog.csdn.net/qq_38128179/article/details/103344021){:target='\_blank'}

## 微前端、serverless

## JS 代码调试必须要 HTML、控制台或者 node？

## 让对象的 toString 返回指定的字符串而不是[object Object]

## Node 后台邮件服务器

- [Node 后台邮件服务器](https://blog.csdn.net/konghouy/article/details/84961500){:target='\_blank'}
- [Nodemailer](https://nodemailer.com/about/){:target='\_blank'}
- [如何用 js 给老婆每天发情话](https://juejin.cn/post/6904805497845579783){:target='\_blank'}

## 短信验证码

短信验证码，后端调服务商的 api，服务商会把发送的验证码返回给你，然后用手机号作为 key，存在比如 redis 里

- [Web 项目中手机注册短信验证码实现的全流程及代码](https://blog.csdn.net/zuoliangzhu/article/details/81193269){:target='\_blank'}

## 验证码的原理、作用及实现

- [验证码的原理、作用及实现](https://blog.csdn.net/niaonao/article/details/51112686){:target='\_blank'}
- [node 实现登录图片验证码的示例代码](https://www.jb51.net/article/138526.htm){:target='\_blank'}

## 微信支付

- [支付宝、微信支付原理图](https://www.cnblogs.com/hua-nuo/p/12857671.html){:target='\_blank'}
- [从前端的角度来梳理微信支付（小程序、H5、JSAPI）的流程](https://segmentfault.com/a/1190000038228200){:target='\_blank'}
- [微信支付-文档](https://pay.weixin.qq.com/wiki/doc/api/app/app.php?chapter=8_3){:target='\_blank'}

## 生成器函数执行器（co）

## 低代码前端框架

- [低代码前端框架](https://baidu.gitee.io/amis/docs/index){:target='\_blank'}

## 解决 parseInt() 的神秘行为：parseInt(0.0000005) => 5

- [解决 parseInt() 的神秘行为：parseInt(0.0000005) => 5](https://mp.weixin.qq.com/s/fB40_HcuyE1K7cyinn1C1Q){:target='\_blank'}

## Why is the result of ('b'+'a'+ + 'a' + 'a').toLowerCase() 'banana'?

- [Why is the result of ('b'+'a'+ + 'a' + 'a').toLowerCase() 'banana'?](https://stackoverflow.com/questions/57456188/why-is-the-result-of-ba-a-a-tolowercase-banana){:target='\_blank'}

## 如何把你家的 WiFi 打印在墙上？

- [如何把你家的 WiFi 打印在墙上？](https://zhuanlan.zhihu.com/p/390136394){:target='\_blank'}
- [WiFi Card:将 wifi 密码转为二维码，从此不再被询问 wifi 密码](https://github.com/bndw/wifi-card){:target='\_blank'}

## case 不等于 if

```js
function fn(arg) {
  switch (arg) {
    case '1':
      return 1;
    case '2':
      let a = 2;
      return a;
    case '3':
      let a = 3;
      return a;
  }
}
// js里有一点蛮坑的感觉，写case的时候，总觉得可以这么写
```

## 你不知道的 Chrome 浏览器 骚操作

- [你不知道的 Chrome 浏览器 骚操作](https://blog.csdn.net/qq_43901693/article/details/103483721){:target='\_blank'}

## 你可能不知道，前端这 6 个有用的技术可以这么酷！

- [你可能不知道，前端这 6 个有用的技术可以这么酷！](https://segmentfault.com/a/1190000040426363){:target='\_blank'}

## squoosh 谷歌图片压缩工具

- [squoosh](https://squoosh.app/){:target='\_blank'}
- [squoosh 中文版](https://squoosh.net/)

## 装逼文章大赏

- [这些 JavaScript 编程黑科技，装逼指南，高逼格代码，让你惊叹不已](https://segmentfault.com/a/1190000010752361){:target='\_blank'}

[顶级程序员](http://www.djcxy.com/c/4/){:target='\_blank'}

<!-- JavaScript  36 式（17，19，23，24）：
常用方法的实现
常用方法的整理
常用技巧的梳理
常考知识点的原理 -->

江南无所有，聊赠一枝春
