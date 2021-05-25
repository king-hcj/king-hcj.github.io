---
layout: post
title: 前端装逼技巧 108 式（终章） - 不装逼的逼王
categories: JavaScript
description: 前端装逼技巧 108 式，助你更懂JS原理
keywords: JS, 前端, JavaScript
---

&emsp;&emsp;前端装逼技巧 108 式，助你更懂 JS。

- [一叹](http://www.fx361.com/page/2017/0224/888345.shtml){:target='_blank'}

思考：取舍问题，偏技术就会失去趣味性；偏趣味性又会失去一些深度

如果选择深度：

  - 看一些比较普适的、有深度的文章，进行总结提炼
  - 如果偏趣味性：找一些常见或者会用到的、好玩儿、又能提炼出技术原理的东西

建议有深度的内容，放在**前端中高级面试精华荟萃**系列里面讲，这里已轻松为主。

## 第九十一式：抽象语法树(AST)

ESLint 使用 Espree 来解析 JavaScript 语句，生成 AST。有了完整的解析树，我们就可以基于解析树对代码进行检测和修改。

ESLint 的灵魂是每一条 rule，每条规则都是独立且插件化的。一条规则就是一个 node 模块，它由 meta 和 create 组成。meta 包含了该条规则的文档描述，相对简单。而 create 接受一个 context 参数，返回一个对象。从 context 对象上我们可以取得当前执行扫描到的代码，并通过选择器获取当前需要的内容。

- [AST抽象语法树——最基础的javascript重点知识，99%的人根本不了解](https://segmentfault.com/a/1190000016231512){:target='_blank'}
- [AST生成](https://astexplorer.net/){:target='_blank'}
- [Parser API](https://developer.mozilla.org/en-US/docs/Mozilla/Projects/SpiderMonkey/Parser_API){:target='_blank'}
- [Espree](https://github.com/eslint/espree/blob/master/README.md){:target='_blank'}
- [Esprima](https://esprima.org/index.html){:target='_blank'}
- [代码规范工具及背后技术设计（下）](https://gitbook.cn/gitchat/column/5c91c813968b1d64b1e08fde/topic/5c99b2e5ccb24267c1d01a14){:target='_blank'}

## 第九十二式：前端也要懂一些shell脚本编程，如何使用脚本完成项目的便捷部署

- 传统：build，压缩， scp上传，备份，解压
- git CICD等
- Jenkins：一个开源的持续集成的服务器，Jenkins开源帮助我们自动构建各类项目。Jenkins强大的插件式，使得Jenkins可以集成很多软件，可能帮助我们持续集成我们的工程项目。

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

- [Bash 脚本教程 - 阮一峰](https://wangdoc.com/bash/index.html){:target='_blank'}
- [scp 命令](https://wangdoc.com/ssh/scp.html){:target='_blank'}

## 第九十三式：yeoman generator与自定义脚手架

- [前端工程化 通过yeoman-generator将文件加载到本地](https://blog.csdn.net/zemprogram/article/details/104125933){:target='_blank'}
## 第九十四式：plop

- [小型前端脚手架工具plop的简单使用](https://blog.csdn.net/zemprogram/article/details/104146833){:target='_blank'}

## 第九十五式：大文件上传

- [前端大文件上传](https://juejin.cn/post/6844903860327186445){:target='\_blank'}
- [HTTP断点续传（分块传输）（HTTP头格式非常清楚）](https://www.cnblogs.com/findumars/p/5745345.html){:target='_blank'}
- [Range回源和视频拖拽播放](https://blog.csdn.net/Kim_Weir/article/details/85336313){:target='_blank'}

## 第九十六式：大文件下载

- [前端大文件下载方案](https://blog.csdn.net/azurecho/article/details/108618513){:target='\_blank'}
- [从 Fetch 到 Streams —— 以流的角度处理网络请求](https://juejin.cn/post/6844904029244358670){:target='\_blank'}

## 第九十七式：流媒体播放

- [「1.4 万字」玩转前端 Video 播放器 | 多图预警](https://juejin.cn/post/6850037275579121671){:target='\_blank'}
- [前端视频直播技术总结及 video.js 在 h5 页面中的应用](https://www.cnblogs.com/dreamsqin/p/12557070.html){:target='\_blank'}
- [[1.3 万字] 玩转前端二进制](https://juejin.cn/post/6846687590783909902){:target='\_blank'}

## 第九十八式：v8为什么要采用多种垃圾回收方式？各种垃圾回收方式的优劣对比

- 引用计数
- 标记清除
- 标记整理

- [V8引擎的垃圾回收策略](https://www.cnblogs.com/onepixel/p/7422820.html){:target='_blank'}
- [垃圾回收算法优缺点对比](https://www.jianshu.com/p/47ff2bff20dc){:target='_blank'}
- [V8专题](http://newhtml.net/category/v8%e4%b8%93%e9%a2%98/){:target='_blank'}
- [V8 之旅： 垃圾回收器](http://newhtml.net/v8-garbage-collection/){:target='_blank'}
- [几种垃圾回收算法](https://www.jianshu.com/p/a8a04fd00c3c){:target='_blank'}
- [V8引擎的垃圾回收策略](https://www.cnblogs.com/onepixel/p/7422820.html){:target='_blank'}
- [V8引擎垃圾回收机制分析](https://blog.csdn.net/weixin_41376400/article/details/106076661){:target='_blank'}
- [前端面试：谈谈 JS 垃圾回收机制](https://segmentfault.com/a/1190000018605776){:target='_blank'}
- [面试官问你有没有了解过 V8 的 javascript 垃圾回收机制算法](https://zhuanlan.zhihu.com/p/37996721){:target='_blank'}
- [V8 中的垃圾收集（GC），图文指南](https://zhuanlan.zhihu.com/p/29276031){:target='_blank'}

## 第九十九式：http2

- [深入浅出：HTTP/2](https://www.cnblogs.com/confach/p/10141273.html){:target='\_blank'}
- [一文读懂 HTTP/2 特性](https://zhuanlan.zhihu.com/p/26559480){:target='\_blank'}
## 第一百式：diff算法对比？

## 第一百零一式：`Object.defineProperty()`为何被 Vue 弃用？

`Object.defineProperty()`方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象。同时，该 API 也是 Vue 2.x 数据绑定实现的核心，Vue 在 3.x 版本之后改用 Proxy 进行实现，本系列文章后续会进行简单讨论。

- [实现双向绑定 Proxy 比 defineproperty 优劣如何](https://www.jianshu.com/p/2df6dcddb0d7){:target='\_blank'}
- [为什么 Vue3.0 使用 Proxy 实现数据监听？defineProperty 表示不背这个锅](https://juejin.cn/post/6844903965180575751){:target='\_blank'}
- [Vue 的数据响应式原理](https://www.infoq.cn/article/we3l33h5zgyyg6gc9hri){:target='_blank'}

```html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>defineProperty 多个成员</title>
</head>
<body>
  <div id="app">
    hello
  </div>
  <script>
    // 模拟 Vue 中的 data 选项
    let data = {
      msg: 'hello',
      count: 10
    }

    // 模拟 Vue 的实例
    let vm = {}

    proxyData(data)

    function proxyData(data) {
      // 遍历 data 对象的所有属性
      Object.keys(data).forEach(key => {
        // 把 data 中的属性，转换成 vm 的 setter/setter
        Object.defineProperty(vm, key, {
          enumerable: true,
          configurable: true,
          get () {
            console.log('get: ', key, data[key])
            return data[key]
          },
          set (newValue) {
            console.log('set: ', key, newValue)
            if (newValue === data[key]) {
              return
            }
            data[key] = newValue
            // 数据更改，更新 DOM 的值
            document.querySelector('#app').textContent = data[key]
          }
        })
      })
    }

    // 测试
    vm.msg = 'Hello World'
    console.log(vm.msg)
  </script>
</body>
</html>
```

```html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Proxy</title>
</head>
<body>
  <div id="app">
    hello
  </div>
  <script>
    // 模拟 Vue 中的 data 选项
    let data = {
      msg: 'hello',
      count: 0
    }

    // 模拟 Vue 实例
    let vm = new Proxy(data, {
      // 执行代理行为的函数
      // 当访问 vm 的成员会执行
      get (target, key) {
        console.log('get, key: ', key, target[key])
        return target[key]
      },
      // 当设置 vm 的成员会执行
      set (target, key, newValue) {
        console.log('set, key: ', key, newValue)
        if (target[key] === newValue) {
          return
        }
        target[key] = newValue
        document.querySelector('#app').textContent = target[key]
      }
    })

    // 测试
    vm.msg = 'Hello World'
    console.log(vm.msg)
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

## queueMicrotask —— 不用promise，如何创建微任务
  - [queueMicrotask - MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/WindowOrWorkerGlobalScope/queueMicrotask){:target='_blank'}
  - [使用 queueMicrotask 来执行微任务](https://segmentfault.com/a/1190000020332724){:target='_blank'}

## rel=”noopener noreferrer”

- [关于 rel=”noopener noreferrer”的作用](http://www.6cu.com/seoxuetang/gjcpm/2019/1203/27843.html){:target='_blank'} &#124; [rel=noopener/noreferrer简介](https://www.dazhuanlan.com/2020/01/02/5e0d46202b8a8/){:target='_blank'}
    ```js
    <a href="http://other.site" target="_blank" rel="noopener noopener">LINK</a>
    ```
- [Chrome 88 新功能解读](https://mp.weixin.qq.com/s/RCGljgCqtxkRbQ-KJz9w0w){:target='_blank'}
- [Javascript中window.opener的一点小总结](https://www.cnblogs.com/ilinuxer/p/5245983.html){:target='_blank'}

##  window.onerror 和 window.addEventListener('error') 

- 可处理类型
- 处理机制：冒泡、捕获
- 区别
- 怎么区分网络资源加载错误和其他一般错误


- [性能监控和错误收集与上报（下）](https://gitbook.cn/gitchat/column/5c91c813968b1d64b1e08fde/topic/5c99c5dbccb24267c1d01b98){:target='_blank'}

## requestIdleCallback

- [你应该知道的requestIdleCallback](https://segmentfault.com/a/1190000014457824){:target='_blank'}
- [requestIdleCallback-后台任务调度](http://www.zhangyunling.com/702.html){:target='_blank'}

## 突破Chrome浏览器12px的最小字体限制

- [再谈Chrome的最小字体12px限制](https://zhuanlan.zhihu.com/p/69695071){:target='_blank'}
- [Chrome的最小字体12px限制最终解决办法](https://blog.csdn.net/im_dogg/article/details/93891050){:target='_blank'}
- [针对谷歌默认最小字体12px的正确解决方案 （css、html）](https://blog.csdn.net/qq_36278639/article/details/52944690){:target='_blank'}

## 性能数据获取：window.performance 与 自定义时间计算

- [fmp-timing](https://github.com/qbright/fmp-timing){:target='_blank'} &#124; [前端监控实践——FMP的智能获取算法](https://segmentfault.com/a/1190000017092752){:target='_blank'}
- [性能监控和错误收集与上报（上）](https://gitbook.cn/gitchat/column/5c91c813968b1d64b1e08fde/topic/5c99c52fccb24267c1d01b87){:target='_blank'}
- [初探 performance – 监控网页与程序性能](http://www.alloyteam.com/2015/09/explore-performance/){:target='_blank'}

## GitHub 隐藏新功能！个人页还能这么玩？

- [GitHub 隐藏新功能！个人页还能这么玩？](https://zhuanlan.zhihu.com/p/161029860){:target='_blank'}
- [定制github首页-自动更新Github的star数量](https://blog.csdn.net/LEILEI18A/article/details/116659324){:target='_blank'}

## 这可能是我迄今为止见过拥有最全速查表的技术网站！

- [这可能是我迄今为止见过拥有最全速查表的技术网站！](https://zhuanlan.zhihu.com/p/153461066){:target='_blank'}


## callee和caller的作用与区别

- [callee和caller的作用与区别](https://blog.csdn.net/hustzw07/article/details/72312329){:target='_blank'}

## JS new Function()

new Function（）的参数是某个字符串，在使用时，编译器会将参数中的字符串当作正常的脚本代码来执行。利用这种方法来把字符串转对象，可以简单的想象成就是new出一个对象。

vue中parse最后会把一个字符串形式的函数传给new Function()

- [JS巧用 new Function() 把字符串（string）转对象（object）](https://blog.csdn.net/piaoyinluo2316/article/details/87003745){:target='_blank'}
- [JS的new Function()](https://blog.csdn.net/piaoyinluo2316/article/details/84135918){:target='_blank'}

## window.history.length的大坑

- [window.history.length的大坑](https://zhuanlan.zhihu.com/p/91931664)

```js
// 无法回退时关闭网页
// window.history.length是1，那么肯定不能回退了，但是大于1，无法判断能不能继续回退。
window.history.length > 1
? window.history.back()
// window.history.go( -1 );
: setTimeout(() => {
    window.close();
  }, 2000);
```

## 导航守卫

- [vue-router导航守卫，不懂的来](https://zhuanlan.zhihu.com/p/54112006){:target='_blank'}
- [导航守卫](https://router.vuejs.org/zh/guide/advanced/navigation-guards.html){:target='_blank'}
- [React Router 4.0 实现路由守卫](https://www.jianshu.com/p/677433245697){:target='_blank'}
- [如何实现一个react-router路由拦截（导航守卫）](https://juejin.cn/post/6844903753284321294){:target='_blank'}

## 如何挂起请求

如何挂起请求（Promise），refresh_token后再用新的access_token重新发起请求？

- [axios拦截器封装http请求，刷新token重发请求](https://juejin.cn/post/6844903894481371143){:target='_blank'}

## Vue中的 render: h => h(App) 具体是什么含义？

- [Explanation for `render: h => h(App)` please](https://github.com/vuejs-templates/webpack-simple/issues/29){:target='_blank'}
- [关于Vue中的 render: h => h(App) 具体是什么含义？](https://segmentfault.com/q/1010000007130348){:target='_blank'}

> It comes from the term "hyperscript", which is commonly used in many virtual-dom implementations. "Hyperscript" itself stands for "script that generates HTML structures" because HTML is the acronym for "hyper-text markup language".

它来自“ hyperscript”一词，该术语通常在许多虚拟dom实现中使用。 “超脚本”本身代表“生成HTML结构的脚本”，因为HTML是“超文本标记语言”的首字母缩写。

## console.log恶搞（待定）

- [这些鲜为人知的前端冷知识，你都GET了吗？](https://mp.weixin.qq.com/s/stGK1dvOV1skp8iubMWRZw){:target='_blank'}

## 哪些场景下不适合使用 ES6 箭头函数

- this：构造函数的原型方法上
- this：使用对象方法时
- this：使用动态回调时
- arguments：需要获得 arguments 时

- [ES6 箭头函数使用禁忌](https://zhuanlan.zhihu.com/p/28972104)
- [哪些场景下不适合使用 ES6 箭头函数](https://gitbook.cn/gitchat/column/5c91c813968b1d64b1e08fde/topic/5cbbe98ebbbba80861a35bfe)

## JavaScript中判断函数是new还是()调用

- [new.target](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/new.target){:target='_blank'}
- [new.target 属性](https://es6.ruanyifeng.com/#docs/class#new-target-%E5%B1%9E%E6%80%A7){:target='_blank'}
- [JavaScript中判断函数是new还是()调用](https://blog.csdn.net/weixin_33794672/article/details/85480850){:target='_blank'}

## You don't (may not) need Lodash/Underscore

- [You don't (may not) need Lodash/Underscore](https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore){:target='_blank'}

## 使用VSCode 断点调试 js项目，html页面

- [用vscode来调试js文件吧](https://www.jianshu.com/p/8f8f384075a2){:target='_blank'}
- [使用VSCode 断点调试 js项目，html页面](https://blog.csdn.net/arvin0/article/details/53673351){:target='_blank'}

## Babel是如何处理let、const和箭头函数的

- JavaScript 严格模式（strict mode）不允许使用未声明的变量，加上严格模式的标记，自然就可以实现了 TDZ 的效果。
- Babel 编译会将 let、const 变量重新命名；
- Babel 检测到 const 声明的变量被改变赋值，就会主动插入了一个 _readOnlyError 函数，并执行此函数。这个函数的执行内容就是报错，因此代码执行时就会直接抛出异常。

- [Babel 编译对代码做了什么](https://gitbook.cn/gitchat/column/5c91c813968b1d64b1e08fde/topic/5cbbe98ebbbba80861a35bfe)

## BFC

BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此。

- [BFC 背后的布局问题](https://gitbook.cn/gitchat/column/5c91c813968b1d64b1e08fde/topic/5cbbeaf5bbbba80861a35c03)
- [10 分钟理解 BFC 原理](https://zhuanlan.zhihu.com/p/25321647)

## HTML 
给汉字加拼音
展开收起组件
禁止用户选中文字
开启硬件加速
让chrome支持小于12px的文字
CSS变量：简单使用；一键主题切换；
CSS modules并不是真正的局部有效（唯一class名称，web components更接近真正的局部有效）
composes 实现样式复用

- [进击的 CSS 和 HTML](https://gitbook.cn/m/mazi/columns/5c91c813968b1d64b1e08fde/topics/5cbbef07bbbba80861a35c21)

## CSS 中的相对单位

- em
- rem
- vh、vw、vmin、vmax
- %
- calc()

- [【第2193期】7个你可能不认识的CSS单位](https://mp.weixin.qq.com/s/oxvwUZxEhsBos7LUVBcyXA){:target='_blank'}

## 5个好用的 CSS 函数，快来试试手吧！

- [5个好用的 CSS 函数，快来试试手吧！](https://segmentfault.com/a/1190000039031953){:target='_blank'}

## git 分支合并时如何忽略某个文件

> [git 分支合并时如何忽略某个文件【译文】](http://www.voidcn.com/article/p-aohzmust-c.html){:target='_blank'} &#124; [How to make Git preserve specific files while merging](https://medium.com/@porteneuve/how-to-make-git-preserve-specific-files-while-merging-18c92343826b){:target='_blank'}：
git在merge分支时，有一个默认的merge驱动，这个驱动会去检查每个文件的每一行，如果按照一定规则发现两个分支的同一个文件有不同，那么认为两个分支都对这个文件做了修改，会merge两个文件，此时有可能产生冲突；那么如果我们自定义一个merge驱动，在里面定义一些不会被检查的文件，那git就会直接跳过这些文件，因此就不会merge了。

## momentjs太重了吗？试试dayjs和miment吧

[Moment.js Github](https://github.com/moment/moment){:target='_blank'}：Moment.js is a legacy project, now in maintenance mode. In most cases, you should choose a different library.

默认情况下，webpack 会打包所有的 Moment.js 语言环境（在 Moment.js 2.18.1 中，最小为 160 KB）。 若要剥离不必要的语言环境且仅打包使用的语言环境，则添加 moment-locales-webpack-plugin。

moment.js 的大小达到了200KB，对于非SSR的首屏渲染性能非常不友好，所以，如果对于moment.js 的需求不大，可以考虑社区中出现的，它的替代方案。
  - day.js
  - miment.js

- [moment优化](http://momentjs.cn/docs/#/use-it/webpack/){:target='_blank'}
- [Day.js](https://day.js.org/zh-CN/){:target='_blank'}
- [Miment](https://github.com/noahlam/Miment){:target='_blank'}
- [JS使用技巧2——momentjs太重了吗？试试dayjs和miment吧](https://segmentfault.com/a/1190000017517737){:target='_blank'}

## SharedWorker

- [SharedWorker](https://developer.mozilla.org/zh-CN/docs/Web/API/SharedWorker)

## HTML5标签实现手风琴效果：https://mp.weixin.qq.com/s/jTM6iwTyrOo_c7HvSQWZSw

- [前端进阶之路](https://king-hcj.github.io/2020/05/25/front-end-engineer-promotion/){:target='_blank'}
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
- [JS插件 —— 酷炫的打字机效果: Typed.js](https://www.jianshu.com/p/37ff22decc62)
- [5行代码带你实现一个js的打字效果](https://zhuanlan.zhihu.com/p/94619915)
- [用css3实现打字机效果](https://blog.csdn.net/shenshuai00/article/details/108964144)
- [CSS 实现打字效果](https://www.cnblogs.com/xieyulin/p/7085766.html)
- [纯css实现打字效果](https://www.ilt.me/dmfx/16.html)
- [打字机](http://www.bootstrapmb.com/tag/daziji)

## JS常见的四种 Error 类型

- [javaScript代码飘红报错看不懂？读完这篇文章再试试！](https://zhuanlan.zhihu.com/p/339429715)

## 从浏览器多进程到JS单线程，JS运行机制最全面的一次梳理

- [从浏览器多进程到JS单线程，JS运行机制最全面的一次梳理](https://segmentfault.com/a/1190000012925872){:target='_blank'}

## UV和PV

- [如何清楚易懂的解释“UV和PV＂的定义？](https://www.zhihu.com/question/20448467){:target='_blank'}

## [全新的互联网体验](http://newhtml.net/){:target='_blank'}

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

- [三行代码实现 add(1)(2)(3)](https://juejin.cn/post/6844904093467541517){:target='_blank'}

## 数组的 N 种操作

- 扁平化：
  - 循环加递归（concat）
  - flat
  - flatMap
  - toString后split
  - join后split：[1,2,[3,[4,5]]].join().split(',')
- 去重
- 类数组转化为数组

- [JS专题之数组展开](https://www.imooc.com/article/277566){:target='_blank'}

## `504 Gateway Time-out`，也许你并不一定需要`git clone`

- 全克隆
- 单一克隆
- 深度克隆

当项目过大时，git clone时会出现error: RPC failed; HTTP 504 curl 22 The requested URL returned error: 504 Gateway Time-out的问题。

总结：
- 用 git clone --depth=1 的好处是限制 clone 的深度，不会下载 Git 协作的历史记录，这样可以大大加快克隆的速度
- depth用于指定克隆深度，为1即表示只克隆最近一次commit
- **适合用 git clone --depth=1 的场景**：你只是想clone最新版本来使用或学习，而不是参与整个项目的开发工作

- [详细介绍git clone --depth=1的用法](https://blog.csdn.net/qq_43827595/article/details/104833980){:target='_blank'}
- [git clone几种可选参数的使用与区别](https://blog.csdn.net/shrimpcolo/article/details/80164741){:target='_blank'}

## Promise 并行限制

## Promise.all，一个失败都失败，怎么解决

- 每一个都处理 catch（或者），确保不会出现异常（`urls.map(item => axios(item).catch(e => 'error'))`）
- Promise.allSettled

- [使用 promise.all 遇到其中一个阻塞导致所有处理无法进行的处理方式](https://blog.csdn.net/Drongguang/article/details/91406290){:target='\_blank'}
  > 资料参考：[Promise 中的三兄弟 .all(), .race(), .allSettled()](https://segmentfault.com/a/1190000020034361){:target='\_blank'}

## 业务超时，race

## 想做自己的前端项目，却没有后端支持 —— 有哪些好玩的免费的 API 接口?

- [前端数据模拟的三种姿势](https://blog.csdn.net/huangpb123/article/details/79273316){:target='_blank'}

- [有哪些好玩的免费的 API 接口?](https://www.zhihu.com/question/32225726){:target='\_blank'}
- [\{JSON\} Placeholder](https://jsonplaceholder.typicode.com/){:target='_blank'}：快速搭建RESTful API接口
- [json-server](https://github.com/typicode/json-server){:target='_blank'}
- [Mock.js](http://mockjs.com/){:target='_blank'}
- [yesno](https://yesno.wtf/api){:target='_blank'}
- [程序员必备网站之一：API Coding](https://zhuanlan.zhihu.com/p/145137377){:target='_blank'}
- [这款神器，能帮你快速找到想要的 API 接口！](https://zhuanlan.zhihu.com/p/141209314){:target='_blank'}

## 渲染几万条数据，怎样才能不卡住页面？

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

## 如何修改 antd 样式

## 重放攻击

- [前端业务安全综述（防爬、防薅、人机校验等）](https://mp.weixin.qq.com/s/eQKqiBbiuw-_RwWVYUnFXg){:target='\_blank'}

## 内网穿透

> 公网 IP 就是广域网 IP，拥有公网 IP 就不需要经过路由器或交换机直接可以上网，而且，还能直接被外界访问到，也就是在 Internet 上可以和其他计算机随意互相访问。内网穿透一般是因为局域网应用网络环境没有公网 IP，但又需要在外网进行访问，就需要进行内网穿透了，如通过内网穿透，生成固定域名来实现对局域网 win 电脑、网站、博客、视频监控、游戏联机、FTP/SVN/MAC 服务器、公司的 OA、erp 等办公系统等等的远程外网访问。

- [什么是内网、外网？内网、外网有啥区别？](https://zhuanlan.zhihu.com/p/147282153){:target='\_blank'}
- [内网穿透：在公网访问你家的 NAS](https://zhuanlan.zhihu.com/p/57477087){:target='\_blank'}
- [内网穿透和公网 IP 有什么区别吗?](https://www.zhihu.com/question/404693104/answer/1315636116){:target='\_blank'}

## 微前端、serverless

## JS 代码调试必须要 HTML、控制台或者 node？

## 让对象的 toString 返回指定的字符串而不是[object Object]

## Node 后台邮件服务器

- [Node 后台邮件服务器](https://blog.csdn.net/konghouy/article/details/84961500){:target='\_blank'}
- [Nodemailer](https://nodemailer.com/about/){:target='\_blank'}
- [如何用js给老婆每天发情话](https://juejin.cn/post/6904805497845579783){:target='_blank'}

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

- [低代码前端框架](https://baidu.gitee.io/amis/docs/index){:target='_blank'}

## 解决 parseInt() 的神秘行为：parseInt(0.0000005) => 5

- [解决 parseInt() 的神秘行为：parseInt(0.0000005) => 5](https://mp.weixin.qq.com/s/fB40_HcuyE1K7cyinn1C1Q){:target='_blank'}

## case不等于if

```js
function fn (arg) {
  switch(arg) {
    case '1':
          return 1  
    case '2':
          let a = 2
          return a;
    case '3':
          let a = 3
          return a;
    }
}
// js里有一点蛮坑的感觉，写case的时候，总觉得可以这么写
```

## 你不知道的 Chrome 浏览器 骚操作

- [你不知道的 Chrome 浏览器 骚操作](https://blog.csdn.net/qq_43901693/article/details/103483721){:target='_blank'}

## 装逼文章大赏

- [这些 JavaScript 编程黑科技，装逼指南，高逼格代码，让你惊叹不已](https://segmentfault.com/a/1190000010752361){:target='\_blank'}


[顶级程序员](http://www.djcxy.com/c/4/){:target='_blank'}

<!-- JavaScript  36 式（17，19，23，24）：
常用方法的实现
常用方法的整理
常用技巧的梳理
常考知识点的原理 -->

江南无所有，聊赠一枝春
