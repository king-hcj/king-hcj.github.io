---
layout: post
title: 前端装逼技巧 108 式
categories: JavaScript
description: 前端装逼技巧 108 式，助你更懂JS原理
keywords: JS, 前端, JavaScript
---

&emsp;&emsp;前端装逼技巧 108 式，助你更懂JS。

## 第一式：子曰，公欲装逼好，工具少不了

- 代码太丑陋，carbon来相救：把你的代码转换为精美图片进行分享（点击图片跳转）

[![carbon]({{site.url}}{{site.baseurl}}/images/posts/zhuangbility100/carbon.png?raw=true)](https://carbon.now.sh/){:target='_blank'}

## 第二式：`console`调试万金油，学会开车更上头

&emsp;&emsp;`console.log()`在前端调试中的地位自不必赘述，其实一代车神也对其五体投地，不信诸君细看（如真有不解其意者，建议发扬不耻下问的求知精神，问问你旁边的同事）：

![console.log]({{site.url}}{{site.baseurl}}/images/posts/arts/fbi.png?raw=true)

&emsp;&emsp;是的，以上图片是由`console.log()`完成的，我没有骗你，贴出代码以证清白，为便于诸君控制台开车，此处我们忘掉第一式：

```js
// 在此提醒，为免于生成丑陋的锯齿背景图片，请注意空格的个数。
console.log(`%c                                                                            
                                                                            
                                                                            
                               %c FBI WARNING %c                                
                                                                            
                                                                            
%c        Federal Law provides severe civil and criminal penalties for        
        the unauthorized reproduction,distribution, or exhibition of        
         copyrighted motion pictures (Title 17, United States Code,         
        Sections 501 and 508). The Federal Bureau of Investigation          
         investigates allegations of criminal copyright infringement        
                 (Title 17, United States Code, Section 506).               
                                                                            
                                                                            
                                                                            
`,
'background: #000; font-size: 18px; font-family: monospace',
'background: #f33; font-size: 18px; font-family: monospace; color: #eee; text-shadow:0 0 1px #fff',
'background: #000; font-size: 18px; font-family: monospace',
'background: #000; font-size: 18px; font-family: monospace; color: #ddd; text-shadow:0 0 2px #fff'
)
```

&emsp;&emsp;为什么会这样呢？想必你还记得其他语言中的`print()`。占位符是`print()`的专属吗？不，他们在`console.log()`中同样使用：
  - `%s`：字符串
  - `%d`：整数
  - `%i`：整数
  - `%f`：浮点数
  - `%o`：obj对象
  - `%O`：obj对象
  - `%c`：CSS样式

&emsp;&emsp;是的，`console.log()`可以通过以上这些特有的占位符进行信息的加工输出。是的，你可能已经明白，上面代码的玄机就在四个`%c`，第一个创建神秘而性感的纯黑背景；第二个给“FBI WARNING”加上红色的背景；第三个恢复纯黑的性感；第四个配上白色的文字，如此，大事已成。

&emsp;&emsp;那么，我们是否可以超越度娘，在官网控制台完成精美的招聘文案投送呢？

> 参考资料：[小蝌蚪日记：通过console.log高仿FBI Warning](https://segmentfault.com/a/1190000022866520){:target='_blank'} &#124; [JS调试之console.log()作用与用法](https://www.feiniaomy.com/post/393.html){:target='_blank'} 


## 第三式：芙蓉面，杨柳腰，无物比妖娆 —— 让你看清UI的轮廓

- UI轮廓哪里寻，`outline`属性来帮您。
   ```scss
   html * {
      outline: 1px solid red
   }
   ```

   ![UCloud]({{site.url}}{{site.baseurl}}/images/posts/zhuangbility100/ucloud_outline.png?raw=true)

- 解析与思考
  - 这里没有使用 border 的原因是 border 会增加元素的大小但是 outline 不会；
  - 通过这个技巧不仅能帮助我们在开发中迅速了解元素所在的位置，还能帮助我们方便地查看任意网站的布局；
  - 所有浏览器都支持 outline 属性;outline （轮廓）是绘制于元素周围的一条线，位于边框边缘的外围，可起到突出元素的作用;
  - 轮廓线不会占据空间，也不一定是矩形。
  - 去掉Chrome浏览器中输入框以及其它表单控件获得焦点时的带颜色边框
    ```scss
    input {
      outline: none;
    }
    ```

- 通过一个开关实现任意网页开启关闭outline
   - Chrome右上角三个点&rArr;书签&rArr;书签管理器&rArr;右上角三个点&rArr;「添加新书签」;
   - 名称随意，粘贴以下代码到网址中;
   - 然后我们就可以在任意网站上点击刚才创建的书签，内部会判断是否存在调试的 style。存在的话就删除，不存在的话就添加，通过这种方式我们就能很方便的通过这个技巧查看任意网页的布局了。

   ```js
      javascript: (function() {
         var elements = document.body.getElementsByTagName('*');
         var items = [];
         for (var i = 0; i < elements.length; i++) {
            if (elements[i].innerHTML.indexOf('html * { outline: 1px solid red }') != -1) {
               items.push(elements[i]);
            }
         }
         if (items.length > 0) {
            for (var i = 0; i < items.length; i++) {
               items[i].innerHTML = '';
            }
         } else {
            document.body.innerHTML +=
               '<style>html * { outline: 1px solid red }</style>';
         }
    })();
   ```

> 参考资料：[很好用的 UI 调试技巧](https://mp.weixin.qq.com/s/gNmMOqVf-296BKIT39Lu2A){:target='_blank'}

## 第四式：角声寒，夜阑珊，又改需求。难，难，难！—— 如何不带脏字的骂产品、高雅的夸自己？

- `(!(~+[])+{})[--[~+""][+[]]*[~+[]]+~~!+[]]+({}+[])[[~!+[]*~+[]]]`
- `([][[]]+[])[+!![]]+([]+{})[!+[]+!![]]`

输出结果：

![SB_NB]({{site.url}}{{site.baseurl}}/images/posts/zhuangbility100/sb_nb.png?raw=true)

图解：取字符串里的字母进行拼凑（看懂了原理，其实我们完全可以尝试写的更简练一些）

![SB]({{site.url}}{{site.baseurl}}/images/posts/zhuangbility100/sb.png?raw=true)

> 参考资料：[js 骂人不带脏字 (!(~+[]) + {})[--[~+""][+[]] * [~+[]] + ~~!+[]] + ({} + [])[[~!+[]] * ~+[]] 图解](https://www.cnblogs.com/cynthia-wuqian/p/9914492.html){:target='_blank'}

> [zhuangbility，一个可以逆向操作，输入文字，返回操作符的npm插件](https://www.npmjs.com/package/zhuangbility){:target='_blank'}

## 第五式：`a == 1 && a == 2 && a == 3`，1、2、3是相等的？原谅我的无知

```js
  var count = 1
  var a = {
    valueOf: function(){return count++}
  }
```

// 类型转换 。。。。

## 第六式：最近有点儿火的 Web Components 可能并不是小鲜肉

  - html很宽松，浏览器也可以识别不规则、不合法标签（元素）（如`<custom-label>aaa</custom-label>` 会展示aaa。）；
  - 自定义继承自`HTMLElement`的类，称为自定义元素的类；
  - 经过`window.customElements.define`API使得**不合法标签**（自定义元素）与自定义元素的类关联，实现**合法化**；
  - 通过模板标签`<template>`简化类的定义过程并添加样式；
  - 通过自定义元素的`attachShadow()`方法开启 Shadow DOM（这部分 DOM 默认与外部 DOM 隔离，内部任何代码都无法影响外部），隐藏自定义元素的内部实现；
  - 添加事件监听、进行组件化封装等。

> [Web Components 入门实例教程-阮一峰](http://www.ruanyifeng.com/blog/2019/08/web_components.html){:target='_blank'}

## 第七式：Windows环境变量设置其实可以很简单

      ```s
      # 查看当前所有可用的环境变量
      set
      # 查看某个环境变量：查看path变量的值
      set path
      # 修改环境变量（注意：这里是覆盖）
      set 变量名=变量内容
      # 设置为空
      set 变量名=
      # 给变量追加内容（%变量名%;代表以前的值）
      set 变量名=%变量名%;变量内容
      # 将C:\Go\bin\添加到path中
      set path=%path%;C:\Go\bin\
      ```

> 参考资料：[Windows使用cmd命令行查看、修改、删除与添加环境变量](https://www.cnblogs.com/springsnow/p/12610417.html){:target='_blank'}

## 第八式：`1.toFixed()`和`1..toFixed()`，哪个才不会报错？

  - Number(1).toFixed()
  - 这段代码竟然也会报错？那些你可能不知道的语法规范
  ```js
    console.log(123)
    [12,2].filter(item => item > 3)
  ```

## 第九式：typeof不靠谱，我们又该如何判断类型？

  - typeof之殇
  - instanceof是怎么实现的？
  - Object.prototype.toString竟如此万能？
  - constructor为什么不是我们的选择？
  - 如果不想自己动手，type.js 你可以看一看

## 第十式：十进制二进制互转，真的不用那么麻烦

- `NumberObject.toString(radix)`
- `parseInt(string, radix);`

```js
var num = 10;
console.log(num.toString(2));
```

```js
var num = 1100100;
console.log(parseInt(num,2));
```

## 第十一式：没有加减乘除，如何比较正整数字符串的大小？

- 好不容易会了点Elasticsearch查询，金额数量区间查询你告诉我存储的是字符串？

```js
// 通过正则表达式从字符串数组中筛选出大于某个数值的字符串类型数据【能力有限，有更好的解法欢迎私聊】
const filterStrNumberByRegExp = (num, arr) => {
  const strBaseNumber = Number(num).toString();
  const arrBaseNumber = strBaseNumber.split('');
  const len = strBaseNumber.length;
  // 生成正则：数位更多或者从高位开始比，数值更大
  let strRegExp = `\\d{${len+1}}`;
  arrBaseNumber.map((item, index) => {
    // 这里'^'和'$'不是必须的，可以去除
    strRegExp += `|${strBaseNumber.substring(index,-1) || '^'}[${+item + 1}-9]\\d{${len - index - 1}}$`
  });
  // 丢给ES进行查询时使用，貌似不可使用\d（用[0-9]替代）、开头、结尾匹配等字符，上面四行可用下面注释内容替换
  //let strRegExp = `[0-9]{${len+1}}`;
  //arrBaseNumber.map((item, index) => {
  //  strRegExp += `|${strBaseNumber.substring(index,-1) || ''}[${+item + 1}-9][0-9]{${len - index - 1}}`
  //});
  const regExp = new RegExp(strRegExp);
  // 丢给ES进行正则查询请用strRegExp结果
  console.log(regExp, strRegExp);
  return arr.filter(item => {
    // 小于等于这里取反或者自行修改正则
    if(regExp.test(item)) return true;
  });
};
filterStrNumberByRegExp(386, ['12', '334', '556', '1122', '5546','234','388','387','1234','386','385']); // ["556", "1122", "5546", "388", "387", "1234"]
```

&emsp;&emsp;详细Elasticsearch查询参数拼接实现可以查看[这里](https://king-hcj.github.io/2020/11/12/elasticsearch/#elasticsearch%E5%88%97%E8%A1%A8%E6%90%9C%E7%B4%A2%E5%85%AC%E5%85%B1%E6%96%B9%E6%B3%95%E5%B0%81%E8%A3%85){:target='_blank'}。

## 第十二式：如何让页面和你说话？ —— TTS（Text To Speah）

&emsp;&emsp;在项目中需要对ajax请求返回的消息进行语音播报,str 为需要播报的信息

  ```javascript
  //语音播报
  function voiceAnnouncements(str){
      // 百度语音合成：或者使用新版地址https://tsn.baidu.com/text2audio
      var url = "http://tts.baidu.com/text2audio?lan=zh&ie=UTF-8&spd=5&text=" + encodeURI(str);
      var n = new Audio(url);
      n.src = url;
      n.play();
  };
  voiceAnnouncements(`
  秋名山上路人稀，常有车手较高低；
  如今车道依旧在，不见当年老司机。
  司机车技今尚好，前端群里不寂寥；
  向天再借五百年，誓言各行领风骚。
  `)
  ```

- 参数解释：

  - lan：固定值zh。语言选择,目前只有中英文混合模式，填写固定值zh
  - ie:编码方式
  - spd：语速，取值0-9，默认为5中语速
  - text：合成的文本，使用UTF-8编码。小于512个中文字或者英文数字。（文本在百度服务器内转换为GBK后，长度必须小于1024字节）

- [React Native Text-To-Speech library for Android and iOS](https://github.com/ak1394/react-native-tts){:target='_blank'}

- 语音识别:
    - 用语音控制自己的网站 [annyang](https://github.com/TalAter/annyang):A tiny JavaScript Speech Recognition library that lets your users control your site with voice commands.annyang has no dependencies, weighs just 2 KB, and is free to use and modify under the MIT license.

## 动手实现一个 reduce

## reduce 还可以这么用？
  - runPromiseInSequence
  - Koa only、pick、omit

## 什么？我理解的forEach不对？

## 如何实现call、apply和bind

## getBoundingClientRect：让你找准定位不迷失自我

## 你知道 this 也有优先级吗？
  - 显式绑定和隐式绑定
  - new 绑定的优先级比显式 bind 绑定更高
  - new>显示绑定>隐式绑定

## 我不太想谈闭包和变量提升
  - 变量的定义和赋值过程
  - 闭包、懒加载、预解析

## let和const到底提升了吗？

  - [我用了两个月的时间才理解 let](https://zhuanlan.zhihu.com/p/28140450){:target='_blank'}

## new 到底新建了什么？

##  函数参数传递——你应该知道的那些区别
  - 箭头函数和普通函数
  - 基本类型和引用类型

## SQL也可以if else？
  - SQL之CASE WHEN用法详解

## 垃圾回收，一张图就够了

## JavaScript 是怎么执行的？

## 防抖和节流真的很难吗？
  - 如何在 react 函数式组件中使用防抖与节流函数

## 如何和浏览器过不去？比如让它卡死？
  - 带你看看宏任务和微任务

## 产品说要按照中文拼音排序？
  - 附送一个对象数组按照另一个数组排序

## 前端的未来在移动端吗？跨端方案都有哪些

## 回调地狱：前端是如何一步步走出来的？
  - 前端异步方案是怎么一路走来的

## JavaScript新特性：Optional Chaining解决了什么问题？

  - [Optional Chains](http://www.ecma-international.org/ecma-262/#sec-optional-chains){:target='_blank'}

## 0.1 + 0.2 !== 0.3？体育老师说这个锅我不背

  - Number.EPSILON
  - toFixed

## 如果没有BigInt，如何进行大数运算？

- [参考](https://www.cnblogs.com/Ballon/p/4752409.html){:target='_blank'}

## 不用加减乘除如何做加法——位运算让你的代码更高效
  - 加法
  - 不借助第三个变量交换a,b两个变量值的N种方法
```js
function add(a,b) {
    var sum;
    var add1;
    while(b!=0) {
        // 异或
        sum = a^b;
        // 与 左移
        add1 = (a&b)<<1;
        a = sum;
        b = add1;
    }
    return a
}
```

 - [【剑指offer】不用加减乘除做加法](https://blog.csdn.net/ns_code/article/details/27966641){:target='_blank'}
 - [不借助第三个变量交换a,b两个变量值](https://blog.csdn.net/web_hwg/article/details/75045689){:target='_blank'}
 - [参考](https://www.cnblogs.com/xiaonian8/p/13821533.html){:target='_blank'}

## 如何实现mul(2)(3)(4)为24？

   - 函数珂里化
   - 或者compose 实现的几种方案

## 数组的N种操作

  - 扁平化
  - 去重
  - 类数组转化为数组

## 庭院深深深几许，杨柳堆烟，帘幕无重数 —— 如何实现深拷贝？

## Promise并行限制

## 渲染几万条数据，怎样才能不卡住页面？

## 只拆过快递，JS里装箱和拆箱又是什么？

## 为了减少冗余参数，我用 delete 有错吗？
  - 删除
  - 改变属性顺序

## 对象属性会自己偷偷排队？

## 省省劲儿，setTimeout 不能让你的程序暂停

  - 如果设置的 timeout 小于 0，则设置为 0
  - 如果嵌套的层级超过了 5 层，并且 timeout 小于 4ms，则设置 timeout 为 4ms。

  - [setTimeout, setInterval 与 requestAnimationFrame 隐藏的各种坑](https://blog.csdn.net/qingyafan/article/details/52335753){:target='_blank'}
  - [参考](https://www.cnblogs.com/liuxiaoru/p/13637983.html){:target='_blank'}
  - [为什么 setTimeout 有最小时延 4ms ?](https://zhuanlan.zhihu.com/p/155752686){:target='_blank'}

## `git reset --hard` 真的就没救了吗？

- [git时光穿梭机--女神的侧颜](https://segmentfault.com/a/1190000018726100){:target='_blank'}
- [git命令log与reflog的比较](https://blog.csdn.net/u013252047/article/details/80230781){:target='_blank'}
- [github总结(4)--关于git reset --hard这个命令的惨痛教训](https://www.cnblogs.com/hope-markup/p/6683522.html){:target='_blank'}

## 前端错误处理

## 纯前端代码生成 Excel

## 42

## 装逼文章大赏

- [信条｜手撕吊打面试官系列面试题](https://mp.weixin.qq.com/s/xaZGvnRuHAFocjh3DMiXCw){:target='_blank'}
- [这些JavaScript编程黑科技，装逼指南，高逼格代码，让你惊叹不已](https://segmentfault.com/a/1190000010752361){:target='_blank'}

<!-- JavaScript  36 式（17，19，23，24）：
常用方法的实现
常用方法的整理
常用技巧的梳理
常考知识点的原理 -->



