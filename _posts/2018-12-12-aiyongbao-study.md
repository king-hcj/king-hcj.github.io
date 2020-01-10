---
layout: post
title: 慕课视频等综合学习笔记
categories: Comprehensive
description: 慕课视频等综合学习笔记
keywords: Markdown，React，AntV，JavaScript，React Native，抠图，小技巧
---

包括在爱用宝工作及慕课课程学习总结的一些笔记。

[Markdown基本语法参考](https://www.jianshu.com/p/191d1e21f7ed)
------------
# React 16.4 开发简书项目:
[从零基础入门到实战](https://coding.imooc.com/class/229.html)

生命周期函数：指在某一时刻组件会自动调用执行的函数

动画：
1. [react-transition-group 思否](https://segmentfault.com/a/1190000015487495)
2. [react-transition-group 官网](https://reactcommunity.org/react-transition-group/)

React、React.js、React Native三者的关系
- React：
React 是基础框架，是一套基础设计实现理念，开发者不能直接使用它来开发移动应用或者网页。
- React.js:
在React框架之上，发展出了React.js 框架来开发网页。
- React Native：
在React框架之上，发展出来React Native 用来开发移动应用。

因为React 基础框架与React.js框架是同时出现、同时进化发展的，这就造成了React基础框架的基本概念、设计思想都是在React.js的相关文档中描述的。后来，Facebook推出了React Native 后，也没有把React的相关概念文档从React.js文档中分离出来。这就导致出现了学React Native 要去看React.js文档，说React Native 不时会说到React.js的情况。

使用React.Children.map而不是props.children.map遍历：   
React.Children.map的实现考虑到 props.children 可能是一个数组或一个对象。

key值的作用：   
一列节点中的一个发生了改变，React并没有什么好方法来处理这个问题。循环新旧两个列表，并找出不同是React唯一的处理方法。但是，有一个可以把这个算法的复杂度降低的办法。那就是我们在生成一列节点的时候给每一个节点上添加一个key。这个key只需要在这一列节点中唯一，不需要全局唯一。   

ref:   
经常误解的是，您需要使用类组件才能使用 ref ，但 ref 也可以通过利用 JavaScript 中的 闭包 与 功能组件functional components一起使用。例如：
```javascript
function CustomForm ({handleSubmit}) {
  let inputElement
  return (
    <form onSubmit={() => handleSubmit(inputElement.value)}>
      <input
        type='text'
        ref={(input) => inputElement = input} />
      <button type='submit'>Submit</button>
    </form>
  )
}
```

文章力荐：   
1. [React 常见的面试题](https://blog.csdn.net/sinat_17775997/article/details/69938720)
2. [理解 React，但不理解 Redux，该如何通俗易懂的理解 Redux？](https://www.zhihu.com/question/41312576)

# 图表库 AntV - G2

1. [数据驱动的高交互可视化图形语法 AntV - G2](https://www.oschina.net/p/antv-g2)
```javascript
  import G2 from '@antv/g2';   
  const chart = new G2.Chart({   
    container: 'c1',   
    width: 600,   
    height: 300   
  });
```
  
2. [G2 文档:G2 API 和教程文档](https://www.yuque.com/antv/g2-docs)




# HTTP协议原理+实践 Web开发工程师必学
[HTTP协议原理+实践 Web开发工程师必学](https://coding.imooc.com/class/225.html)

低三层：
1. 物理层：定义物理设备如何传输数据
2. 数据链路层：在通信实体间建立数据链路连接（电路）
3. 网络层：为数据在结点间传输创建逻辑链路

传输层：
端到端，向高层屏蔽细节

应用层：构建于TCP协议之上，屏蔽网络传输细节

URI(统一资源标识符)：包含URL(统一资源定位器)和URN(永久统一资源定位符，资源移动后还能找到)

Get、Post、Put方法等只是语义话方法（建议），无强约束。

Etag:数据签名(最常见：hash计算。if-Match、if-Non-Match)。

axios在很大程度上受到Angular提供的$http服务的启发。 最终，axios努力提供一个在Angular外使用的独立的$http-like服务。

# Web攻城狮培养计划之进击JavaScript核心视频课程
堆内存、栈内存：
   基本类型，按值访问；保存在栈内存中(有序好查找，固定大小，不可修改，修改变量实际是覆盖)；
   引用类型,按引用访问；大小不固定，保存在堆内存中，可修改；无序，难以定位，所以把地址保存在栈内存中，通过地址查找。
参数传递：按值传递（引用类型传递的是地址，也是值）

作用域：全局作用域，局部作用域（函数作用域）；没有块级作用域

JS解析：
1. 先预解析（所有变量，在正式运行代码之前，都提前赋一个值：undefined；所有的函数，在正式运行代码之前都是整个函数块）;逐行代码解析（fn1()函数内部再发生{（1）预解析（2）逐行代码解析}）；
2. 遇到重名，变量和函数重名，就留下函数，与上下关系没有关系，注:只先找var(包括参数。其他无var的，不会预解析) ，function声明的；
3. 预解析不影响执行时的赋值，如var 了变量a和函数a，预解析时函数覆盖掉变量，但是执行的时候，还是可以给a赋值，所以可能会造成函数无法执行的问题；
4. 预解析是分标签进行的（script），前一个标签定义赋值，后一个打印可以；换过来不行；

参考：
1. [JS解析+预解析相关总结](https://www.cnblogs.com/yehui-mmd/p/6095041.html)

垃圾回收机制：释放无用数据，回收内存
   - 自动
   - 手动
   - 原理：找出无用数据，打上标记，释放其内存；周期性执行。
      - 标记清除
      - 引用计数（变量访问对象）：问题在于循环引用，得不到释放
   - 内存管理：web浏览器 < 桌面应用程序



资料参考：
1. [没错，就是Access-Control-Allow-Origin，跨域](https://www.jianshu.com/p/89a377c52b48)
2. [ajax跨域，这应该是最全的解决方案了](https://segmentfault.com/a/1190000012469713)
3. [axios全攻略](https://ykloveyxk.github.io/2017/02/25/axios%E5%85%A8%E6%94%BB%E7%95%A5/#more)
4. [前端｜浅谈fetch](https://www.jianshu.com/p/35123b048e5e)

# React Native
1. [看看React Native和React.js之间的区别](https://baijiahao.baidu.com/s?id=1615907407534131792&wfr=spider&for=pc)
2. [React Native运行原理解析](https://blog.csdn.net/xiangzhihong8/article/details/52623852)
3. [React、React Native面试题](https://blog.csdn.net/qizhenshuai/article/details/78202472)
4. [CSS3 Flexbox 口诀](https://weibo.com/1712131295/CoRnElNkZ?ref=collection&type=comment#_rnd1554724921355)
5. [IOS与安卓的区别](https://blog.csdn.net/elzza/article/details/78878806)
6. [iOS与安卓的区别 浅谈ios为什么比安卓流畅](https://www.jianshu.com/p/372034fc2f2e)：
>>>有了优先级的关系，有了GPU加速的影响，还有两个系统各自编程以及机制的问题，似乎已经可以说明为什么iOS相比Android更为流畅的原因，但最终还有一个问题是就是应用程序。
7. [iOS 开发是否要采用 React Native?](https://www.jianshu.com/p/17cfac53578a)
   

# 抠图技术
>语义分割重在对每个像素的语义理解，将相同语义的像素分割为同一个部分，得到的结果就是若干个块状，至于块与块之间是否衔接自然则不考虑。抠图只将图片分成前景和背景两块，目的是拿到前景，好的抠图算法会对于头发等细节的处理效果比较精确。分割和抠图的另一个重要区别是分割是返回像素分类结果，分类结果是整型；而抠图返回的是属于前景或背景的概率p，在前景与背景交互区域会产生渐变的效果，使得抠图更加自然。

>抠图技术的核心问题是解以下公式：Ii = αFi + (1-α)Bi，其中Ii是图像当前可观察的像素，为已知量；α是透明度，F是前景像素，B是背景像素，这三个变量为未知量。对于这个公式的理解，可以把原始图像看做是前景和背景按照一定权重（α透明度）叠加组成的。对于完全确定是前景的像素，α = 1；对于完全确定是背景的像素，α = 0；对于不确定是前景还是背景的像素，α是介于0到1之间的浮点数。
>>来源：CSDN 

>>原文：https://blog.csdn.net/qq_36165459/article/details/78549686 

>I = αF +(1-α)B。一张图片I，应该由前景F和前景B合成，合成的方式，就是通过透明度α来操作。matting问题研究的是，如何通过左边的I，推测出右边的三个变量α、F和B，难度可想而知。在这篇文章中，作者给出了Triangulation Matting的方法，整体思想也很简单，既然matting原问题那么难，不如把条件放松，使得问题简单一些。假设我知道了B和I，那么有没有可能得到α和F，于是乎，作者提出了，针对同一张前景，切换背景，来计算得到前景和透明度的方法。

>因为F、B和α都是未知的，要把这么多未知项都求出来显然很不容易。所以就需要增加一些附加的约束，通常，这种约以TriMap的形式给出。TriMap就是三元图，它是和待分割图像同等大小的一张图，但图中的像素只有三个取值，0、128（左右）和255。

>>来源：[自然抠图算法：以经典的贝叶斯抠图为例（Bayesian Matting）](https://blog.csdn.net/baimafujinji/article/details/72863106?utm_source=gold_browser_extension)   

相关文章：   
1. [天干物燥，小心抠图 —— A journey of matting(知乎)](https://zhuanlan.zhihu.com/p/27852081?utm_source=itdadao&utm_medium=referral)
2. [Jue Wang Computer Graphics and Vision Researcher](http://www.juew.org/default.htm)
3. [百度AI人像分割(免费使用)](http://ai.baidu.com/tech/body/seg)

# 小技巧
1. 多行文本转数组:类似下面这样，带有换行符，需要转换成在SQL IN中可使用的数组
>>>技巧：``.replace(/\n/g,',').split(',')   
纵列文本
     ```   
      娜琪丝   
      泰和之恋   
      凯飞乐呵呵125212910   
      谭焕荣   
      wangp111111111   
      倍帅123   
      joonewatch1222   
      女神win   
      缪斯兔商城   
      yu727467052   
      tb78230558   
      wangjia2772489833   
      dainian   
      第一间店铺1   
      凰诏旗舰店   
      lijinxuan123   
      rthz李杰   
      为你我要好好的   
      余锦盟123   
      乐派成人用品专营店   
      jayvsliangw   
      tb3228464532   
      fxj12345677   
      体坛风云302   
      anhuimaanshan   
      月光林地101   
      安小雨1   
      烟花夕颜冷   
      fvqrfvqr77   
      tb0400_72   
      快乐飞34   
      ranqingjun123   
      taobaotong0902   
      ```   
   
>>>输出：   
["娜琪丝", "泰和之恋", "凯飞乐呵呵125212910", "谭焕荣", "wangp111111111", "倍帅123", "joonewatch1222", "女神win", "缪斯兔商城", "yu727467052", "tb78230558", "wangjia2772489833", "dainian", "第一间店铺1", "凰诏旗舰店", "lijinxuan123", "rthz李杰", "为你我要好好的", "余锦盟123", "乐派成人用品专营店", "jayvsliangw", "tb3228464532", "fxj12345677", "体坛风云302", "anhuimaanshan", "月光林地101", "安小雨1", "烟花夕颜冷", "fvqrfvqr77", "tb0400_72", "快乐飞34", "ranqingjun123", "taobaotong0902"]

