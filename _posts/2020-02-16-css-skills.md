---
layout: post
title: CSS知识点汇总
categories: Comprehensive
description: css常见面试问题汇总
keywords: css
---

汇集整理常见的CSS知识点，以供参考复习阅读。

## 伪类与伪元素的特性及其区别

- 伪类本质上是为了弥补常规CSS选择器的不足，以便获取到更多信息；
- 伪元素本质上是创建了一个有内容的虚拟容器；
- CSS3中伪类和伪元素的语法不同；
   - 伪类  :link  :hover
   - 伪元素  ::before    ::after
- 可以同时使用多个伪类，而只能同时使用一个伪元素；
- 其中伪类和伪元素的根本区别在于：它们是否创造了新的元素,,   这个新创造的元素就叫  "伪元素" ；
   - 伪元素/伪对象：不存在在DOM文档中，是虚拟的元素，是创建新元素。 这个新元素(伪元素)是某个元素的子元素，这个子元素虽然在逻辑上存在，但却并不实际存在于文档树中。
   - 伪类：存在DOM文档中，(无标签,找不到,  只有符合触发条件时才能看到 ),  逻辑上存在但在文档树中却无须标识的“幽灵”分类。
- 因为伪类是类似于添加类所以可以是多个，而伪元素在一个选择器中只能出现一次，并且只能出现在末尾； 
- W3C中对于二者应用的描述(描述太模糊, 不容易理解)：
   - 伪类：用于向某些选择器添加特殊的效果
   - 伪元素：用于将特殊的效果添加到某些选择器(标签）

## 浏览器兼容性的理解
因为个人在项目中，实际上没有涉及到太多浏览器兼容性相关的问题，也不能胡诌诌，只说说个人对这一块儿的理解：
- 常见的浏览器内核可以分四种：Trident、Gecko、Blink、Webkit
>>>IE浏览器：Trident内核，也称为IE内核   
Chrome浏览器：Webkit内核，现在是Blink内核   
Firefox浏览器：Gecko内核，俗称Firefox内核   
Safari浏览器：Webkit内核   
Opera浏览器：最初是自己的Presto内核，后来加入谷歌大军，从Webkit又到了Blink内核   
360浏览器：IE+Chrome双内核   
猎豹浏览器：IE+Chrome双内核   
百度浏览器：IE内核   
QQ浏览器：Trident（兼容模式）+Webkit（高速模式）   

- 样式：
   - 盒模型：标准模式（width值即为盒模型中的content的宽度值）和怪异模式（IE8以下，width的宽度包括border、padding和content）；根据使用方式，写好box-sizing属性
   - 默认样式：通配符设置默认样式（不建议）；相关CSS Reset重置默认样式（高效）；
   - 图片默认有间距：使用float属性为img布局；
   - css属性：opacity、cursor（支持的值不同）、float、text-overflow（ellipsis）等。
   >>>IE：filter:alpha(opacity=60);FF：opacity:0.6。   
   firefox 不支持hand，但ie支持 pointer;解决方法:统一使用pointer
- CSS Hack：CSS hack是通过在CSS样式中加入一些特殊的符号，让不同的浏览器识别不同的符号（什么样的浏览器识别什么样的符号是有标准的，CSS hack就是让你记住这个标准,使用hacker 可以把浏览器分为3类：ie6 ；ie7和遨游；其他（ie8 chrome ff safari opera等）），以达到应用不同的CSS样式的目的。
   - CSS属性Hack、CSS选择符Hack以及IE条件注释Hack:
      - 属性级Hack：比如IE6能识别下划线“_”和星号“*”，IE7能识别星号“*”，但不能识别下划线”_ ”，而firefox两个都不能认识。
      - 选择符级Hack：比如IE6能识别*html .class{}，IE7能识别*+html .class{}或者*:first-child+html .class{}。
      - IE条件注释Hack：IE条件注释是微软IE5开始就提供的一种非标准逻辑语句。比如针对所有IE：&lt;!-[if IE]&gt;&lt;!-您的代码-&gt;&lt;![endif]&gt;，针对IE6及以下版本：&lt;!-[if it IE 7]&gt;&lt;!-您的代码-&gt;&lt;![endif]-&gt;，这类Hack不仅对CSS生效，对写在判断语句里面的所有代码都会生效。   
      PS：条件注释只有在IE浏览器下才能执行，这个代码在非IE浏览下被当做注释视而不见。可以通过IE条件注释载入不同的CSS、JS、HTML和服务器代码等。
   - 示例：ie6认识的hacker 是下划线_ 和星号 *；ie7 遨游认识的hacker是星号 * （!important也算是hack的一种）
      - 比如这样一个css设置 
         ```css
         div {
            height:300px;
            *height:200px;
            _height:100px;
         }
         ```
         ie6浏览器在读到 height:300px的时候会认为高时300px；继续往下读，他也认识*heihgt， 所以当ie6读到*height:200px的时候会覆盖掉前一条的相冲突设置，认为高度是200px。继续往下读，ie6还认识_height,所以他又会覆盖掉200px高的设置，把高度设置为100px； ie7和遨游也是一样的从高度300px的设置往下读。当它们读到*height200px的时候就停下了，因为它们不认识_height。所以它们会把高度解析为200px； 剩下的浏览器只认识第一个height:300px;所以他们会把高度解析为300px。
   - 优先级相同且相冲突的属性设置后一个会覆盖掉前一个，所以书写的次序是很重要的。

- 事件绑定和AJAX：
   - IE:dom.attachEvent();其他浏览器：dom.addEventListener()。
   - IE：ActiveXObject；其他：xmlHttpReuest；
   - 所以，如果项目中涉及到这些，应该会有一个封装的公共方法来进行处理；
- polyfills：可能会导致包比较大，可以用动态倒入polyfills的技术方案（判断浏览器UA）；（HTML5新语义元素；客户端存储；地理位置；onhashchange 和 pushState；SVG 和 Canvas 图像，HTML5视频，ECMAScript 5 甚至 WebWorkers 特性等）
- PostCSS：
   - 利用从 Can I Use 网站获取的数据为 CSS 规则添加特定厂商的前缀。Autoprefixer 自动获取浏览器的流行度和能够支持的属性，并根据这些数据帮你自动为 CSS 规则添加前缀；
   - 将现代 CSS 语法转换成大多数浏览器都能理解的东西，根据你的目标浏览器或运行时环境来确定你需要的 polyfills，基于 cssdb 实现；
   - CSS Modules， 就是说你永远不用担心命名太大众化而造成冲突太普通，只要用最有意义的名字就行了；stylelint 做CSS 代码检查；利用 calc() 和你所定义的分割方式来创建网格系统，无需传递大量参数等。
- 使用框架和库
- 万能清除浮动:给需要闭合的div加上class=”clearfix”即可
   ```css
   /* Clear Fix */ 
   .clearfix:after {
      content:".";
      display:block;
      height:0;
      clear:both;
      visibility:hidden;
   } 
   .clearfix { display:inline-block; } 
   /* Hide from IE Mac */ 
   .clearfix {display:block;} 
   /* End hide from IE Mac */ 
   /* end of clearfix */
   ```

## 移动端适配
>>  参考：[一篇搞定移动端适配](https://mp.weixin.qq.com/s/lM65luoAeV7RZTIYFCpVZw){:target='_blank'}
