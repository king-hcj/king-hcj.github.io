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

&emsp;&emsp;本文为便于代码复制，将奉行**不首先装逼**的原则，尽量减少此装逼利器的使用。

## 第二式：`console`调试万金油，学会开车更上头

&emsp;&emsp;`console.log()`在前端调试中的地位自不必赘述，其实一代车神也对其五体投地，不信诸君细看（如真有不解其意者，建议发扬不耻下问的求知精神，问问你旁边的同事）：

![console.log]({{site.url}}{{site.baseurl}}/images/posts/arts/fbi.png?raw=true)

&emsp;&emsp;是的，以上图片是由`console.log()`完成的，我没有骗你，贴出代码以证清白，为便于诸君控制台开车，此处我们忘掉第一式：

```js
// 在此提醒，为免于生成丑陋的锯齿背景图片，请注意空格的个数，并保证console面板的宽度。
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
  - `%o`：obj对象（DOM）
  - `%O`：obj对象
  - `%c`：CSS样式

&emsp;&emsp;`console.log()`可以通过以上这些特有的占位符进行信息的加工输出。是的，你可能已经明白，上面代码的玄机就在四个`%c`，第一个创建神秘而性感的纯黑背景；第二个给“FBI WARNING”加上红色的背景；第三个恢复纯黑的性感；第四个配上白色的文字，如此，大事已成。

&emsp;&emsp;明白了以上原理，诸君就可以自由发挥，展示你们强大的css实力了，甚至还可以输出gif背景图，在装逼的路上更上几层楼。不装了，我是css渣渣。

```js
console.log(
  '%c孤篷',
  'text-shadow: 0 1px 0 #ccc,0 2px 0 #c9c9c9,0 3px 0 #bbb,0 4px 0 #b9b9b9,0 5px 0 #aaa,0 6px 1px rgba(0,0,0,.1),0 0 5px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3),0 3px 5px rgba(0,0,0,.2),0 5px 10px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.2),0 20px 20px rgba(0,0,0,.15);font-size:5em'
  )
```

![孤蓬]({{site.url}}{{site.baseurl}}/images/posts/zhuangbility100/gupeng.png?raw=true)

&emsp;&emsp;那么，我们是否可以超越度娘，在官网控制台完成精美的招聘文案投送呢？

&emsp;&emsp;拓展：`console`对象都有哪些方法？

![console]({{site.url}}{{site.baseurl}}/images/posts/zhuangbility100/console.png?raw=true)

> 参考资料：[小蝌蚪日记：通过console.log高仿FBI Warning](https://segmentfault.com/a/1190000022866520){:target='_blank'} &#124; [Using the F12 Tools Console to View Errors and Status](https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/samples/gg589530(v=vs.85)?redirectedfrom=MSDN){:target='_blank'} 


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
  - 轮廓线不会占据空间，也不一定是矩形（比如2D转换等）。
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

## 第四式：角声寒，夜阑珊，又改需求。难，难，难！—— 类型转换助你不带脏字的骂产品、优雅的夸自己

- `(!(~+[])+{})[--[~+""][+[]]*[~+[]]+~~!+[]]+({}+[])[[~!+[]*~+[]]]`：sb
- `([][[]]+[])[+!![]]+([]+{})[!+[]+!![]]`：nb
- `(+!![]*([]+{})+[]+{})[+[]]+([]+{})[!+[]+!![]]`：Nb

图解：取类型转换得到的字符串里的字母进行拼凑（看懂了原理，其实我们完全可以尝试写的更简练一些）

![nb]({{site.url}}{{site.baseurl}}/images/posts/zhuangbility100/sb.png?raw=true)

> 插件：[zhuangbility，一个可以逆向操作，输入文字，返回操作符的npm插件](https://www.npmjs.com/package/zhuangbility){:target='_blank'}

## 第五式：`a == 1 && a == 2 && a == 3`，那你可以实现`a === 1 && a === 2 && a === 3`吗？

- `a == 1 && a == 2 && a == 3`：

  ```js
    // 当然，你也可以把count作为属性放在a对象上
    let count = 1
    let a = {
      valueOf: function(){return count++}
    }
    console.log(a==1 && a==2 && a==3) // true
  ```

  - 对象在转换基本类型时，会调用该对象上 `valueOf` 或 `toString` 这两个方法，该方法的返回值是转换为基本类型的结果
  - 具体调用什么取决于内置的 `toPrimitive` 调用结果

- `a === 1 && a === 2 && a === 3`：

```js
let count = 1;
Object.defineProperty(window, 'a', {
    get: function() {
        return count ++;
    }
});

console.log(a===1 && a===2 && a===3) // true
```

> `Object.defineProperty()`方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象。同时，该API也是Vue 2.x数据绑定实现的核心，Vue 在 3.x 版本之后改用 Proxy 进行实现，本系列文章后续会进行简单讨论。

> 原理可参考：[[译] 在JS中，如何让(a===1 && a===2 && a === 3)(严格相等)的值为true？](https://juejin.cn/post/6844903725442531341){:target='_blank'} &#124; [深入浅出Object.defineProperty()](https://www.jianshu.com/p/8fe1382ba135){:target='_blank'} &#124; [ECMAScript7规范中的ToPrimitive抽象操作](https://segmentfault.com/a/1190000016325587){:target='_blank'}

## 第六式：最近有点儿火的 Web Components 可能并不是小鲜肉

  - html很宽松，浏览器也可以识别不规则、不合法标签（元素）（如`<custom-label>Web Components</custom-label>` 会展示"Web Components"。）；
  - 自定义继承自`HTMLElement`的类，称为自定义元素的类；
  - 经过`window.customElements.define`API定义和注册自定义元素，使得**不合法标签**（自定义元素）与自定义元素的类关联，实现**合法化**；
  - 通过模板标签`<template>`简化类的定义过程并添加样式；
  - 通过自定义元素的`attachShadow()`方法开启 Shadow DOM（这部分 DOM 默认与外部 DOM 隔离，内部任何代码都无法影响外部），隐藏自定义元素的内部实现；
  - 添加事件监听、进行组件化封装等。

> 参考资料：[Web Components 入门实例教程-阮一峰](http://www.ruanyifeng.com/blog/2019/08/web_components.html){:target='_blank'} &#124; [Window.customElements](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/customElements){:target='_blank'}

## 第七式：Windows环境变量设置其实可以很简单

&emsp;&emsp;使用Windows系统电脑进行开发的小伙伴也许经常会碰到需要手动设置环境变量的情况，其实设置环境变量也可以很简单：

      ```sh

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

## 第八式：`1.toFixed()`、`1.0.toFixed()`和`1..toFixed()`，究竟哪个写法是对的？

&emsp;&emsp;在数字字面量中，`1.xxxxx`这样的语法是浮点数表示法。所以`1.toFixed()`这样的语法在 JavaScript 中会报错，这个错误来自于浮点数的字面量解析过程，而不是“.作为存取运算符”的处理过程。在 JavaScript 中，浮点数的小位数是可以为空的，因此“1.”和“1.0”将作为相同的浮点数被解析出来。所以会出现：

```js
1. === 1; // true
1. === 1.0; // true
1 === 1.0; // true
1.; // 1
1.0; // 1
```

&emsp;&emsp;既然“1.”表示的是浮点数，那么“1..toFixed”表示的就是该浮点数字面量的“.toFixed”属性。当是数字字面量时，可通过类似`Number(1).toFixed()` 创建基本包装类型（显示装箱），然后就可以进行属性和方法的添加、读取（或者可借助小括号把字面量括起来，告诉浏览器引擎这是一个整体）。
  - 装箱：将基本数据类型转换为对应的引用类型的操作（装箱又分为隐式装箱和显式装箱）；
  - 拆箱：把引用类型转换成基本数据类型。

&emsp;&emsp;基本类型不能有属性和方法，当给它们添加属性的时候系统会自动进行包装类并销毁：

```js
var num = 1;
num.len = 2;
//上一行代码会产生如下过程：
// new Number(1).len =2; 
// delete len;
// 也就是会先添加len属性，当前语句执行结束后即销毁，所以下一行打印num还是1，没有len属性。
console.log(num, num.len);//1 undefined
var num = new Number(1);
num.len = 2;
console.log(num); // Number {1, len: 2}
```

> 参考拓展：[谈谈JavaScript中装箱和拆箱](https://juejin.im/post/6844903859765133320){:target='_blank'}

## 第九式：typeof不靠谱，我们又该如何判断类型？

  - `typeof`之殇：我们应该都知道，使用 `typeof` 可以准确判断除 `null` 以外的基本类型，以及 `function`、`symbol` 类型；`null` 会被 `typeof` 判断为 `object`。
    - 在 JavaScript 最初的实现中，JavaScript 中的值是由一个表示类型的标签和实际数据值表示的。对象的类型标签是 0。由于 null 代表的是空指针（大多数平台下值为 0x00），因此，null 的类型标签是 0，typeof null 也因此返回 "object"；
    - 在 ES 6 之前，typeof 总能保证对任何所给的操作数返回一个字符串。即便是没有声明的标识符，typeof 也能返回 'undefined'。使用 typeof 永远不会抛出错误。但在加入了块级作用域的 let 和 const 之后，在其被声明之前对块中的 let 和 const 变量使用 typeof 会抛出一个 ReferenceError。块作用域变量在块的头部处于“暂存死区”，直至其被初始化，在这期间，访问变量将会引发错误。
  - 以前经常拿来判断数组的`instanceof`是怎么实现的：使用 `a instanceof B` 判断的是a 是否为 B 的实例，即 a 的原型链上是否存在 B 构造函数（ES6之后可以通过`Array.isArray()`来判断是否是数组）。

    ```js
      // L 表示左表达式，R 表示右表达式
      const customInstanceof = (L, R) => {
        if (typeof L !== 'object') return false
        while (true) { 
          // 已经遍历到了最顶端
          if (L === null) return false
          // 利用原型链进行判断
          if (R.prototype === L.__proto__) return true
          L = L.__proto__
        } 
      };
      customInstanceof([], Array) // true
    ``` 

  - constructor为什么不是我们的选择？
    - constructor属性是可以被修改的，会导致检测出的结果不正确；
    - 除了`undefined`和`null`，其他类型的变量均能使用`constructor`判断出类型。
      ```js
        let bool=true;
        bool.constructor==Boolean  //true
        let num1=1;
        num1.constructor==Number  //true
        let num2=new Number();
        num2.constructor==Number   //true
        // constructor属性是可以被修改的
        num2.constructor = Object
        num2.constructor==Number   //false
        let str='hello world';
        str.constructor==String     //true
      ```
  - Object.prototype.toString竟如此万能？
    ```js
      Object.prototype.toString.call(123)
      //"[object Number]"
      Object.prototype.toString.call('str')
      //"[object String]"
      Object.prototype.toString.call(true)
      //"[object Boolean]"
      Object.prototype.toString.call({})
      //"[object Object]"
      Object.prototype.toString.call([])
      //"[object Array]"
      // 定义getType方法，用来判断类型
      getType = (obj) => {
        return Object.prototype.toString.call(obj).slice(8, -1)
      }
      getType(12n) // BigInt
      getType(Symbol()) // Symbol
      getType(() => {}) // Function
      getType() // Undefined
      getType(null) // Null
      getType(NaN) // Number
    ```

> 资料参考：[typeof](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/typeof){:target='_blank'} &#124; [The history of “typeof null”](https://2ality.com/2013/10/typeof-null.html){:target='_blank'}

## 第十式：十进制二进制互转，真的不用那么麻烦

- 使用`NumberObject.toString(radix)`十进制转二进制：
  ```js
  // 如有补齐位数的需求，可通过判断返回值的长度在前面加0
  let num = 10;
  console.log(num.toString(2)); // 1010
  ```
- 使用`parseInt(string, radix);`二进制转十进制：
  ```js
  let num = 1010101;
  console.log(parseInt(num,2)); // 85
  ```
- Tips：由于以上代码都使用let定义了num变量，除了刷新页面外，该如何在控制台分别执行呢？只需把代码放在一对花括号之间即可（块级作用域）。


## 第十一式：没有加减乘除，如何比较正整数字符串的大小？

&emsp;&emsp;在接手的部分项目中，存在需要前端拼接Elasticsearch查询语句的情况，好不容易会了点Elasticsearch，却发现问题并没有那么简单：金额数量区间查询你告诉我存储的是字符串？那岂不是会出现`1<3000<5`的情况？天啦噜，不要逗我好吗？

&emsp;&emsp;那么，在不改动ES的情况下，如何**通过正则查询来实现正整数字符串大小的比较**呢？直接说思路：数位更多或者从高位开始比，数值更大即是更大的数【一时间没想到更好的解法，有更好的解法欢迎留言或者私信】。

```js
// 通过正则表达式从字符串数组中筛选出大于某个数值的字符串类型数据
const filterStrNumberByRegExp = (num, arr) => {
  const strBaseNumber = num.toString();
  const arrBaseNumber = strBaseNumber.split('');
  const len = strBaseNumber.length;
  // 生成正则：数位更多或者从高位开始比，数值更大
  let strRegExp = `\\d{${len+1}}`;
  arrBaseNumber.map((item, index) => {
    // 这里因为有位数限制，'^'和'$'不是必须的，可以去除
    strRegExp += `|${strBaseNumber.substring(index,-1) || '^'}[${+item + 1}-9]\\d{${len - index - 1}}$`
  });
  // 丢给ES进行查询时，貌似不可使用\d（可用[0-9]替代）、开头、结尾匹配等字符，上面四行可用下面注释内容替换
  //let strRegExp = `[0-9]{${len+1}}`;
  //arrBaseNumber.map((item, index) => {
  //  strRegExp += `|${strBaseNumber.substring(index,-1) || ''}[${+item + 1}-9][0-9]{${len - index - 1}}`
  //});
  const regExp = new RegExp(strRegExp);
  // 丢给ES进行正则查询时使用strRegExp结果
  console.log(regExp, strRegExp);
  return arr.filter(item => {
    // 小于等于判断的话，这里取反或者自行修改正则
    if(regExp.test(item)) return true;
  });
};
filterStrNumberByRegExp(386, ['12', '334', '556', '1122', '5546','234','388','387','1234','386','385']); // ["556", "1122", "5546", "388", "387", "1234"]
```

&emsp;&emsp;详细Elasticsearch列表页搜索公共方法实现可以查看我的[这篇](https://king-hcj.github.io/2020/11/12/elasticsearch/#elasticsearch%E5%88%97%E8%A1%A8%E6%90%9C%E7%B4%A2%E5%85%AC%E5%85%B1%E6%96%B9%E6%B3%95%E5%B0%81%E8%A3%85){:target='_blank'}笔记。

## 第十二式：如何让页面和你说话？ —— TTS（Text To Speah）

&emsp;&emsp;在项目中需要对ajax请求返回的消息进行语音播报，str 为需要播报的信息（适应于错误信息语音提示等场景）：

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
  `);
  // 尝试了一些换女声的方式，但是，都失败了。。。
  voiceAnnouncements(`
  哇，代码写的真棒，你可真秀哇！
  `);
  ```

- 参数解释：

  - lan：固定值zh。语言选择,目前只有中英文混合模式，填写固定值zh
  - ie:编码方式
  - spd：语速，取值0-9，默认为5中语速
  - text：合成的文本，使用UTF-8编码。小于512个中文字或者英文数字。（文本在百度服务器内转换为GBK后，长度必须小于1024字节）

- [React Native Text-To-Speech library for Android and iOS](https://github.com/ak1394/react-native-tts){:target='_blank'}

- 用语音控制自己的网站 [annyang](https://github.com/TalAter/annyang){:target='_blank'}：A tiny JavaScript Speech Recognition library that lets your users control your site with voice commands.annyang has no dependencies, weighs just 2 KB, and is free to use and modify under the MIT license。

## 第十三式：失焦事件与点击事件冲突怎么办？
- 场景：
  - 下拉框中blur与click冲突；
  - 输入框blur与下方可点击浮沉click冲突：输入值时下方出现浮层，输入框失去焦点时，浮层隐藏；点击浮层条目触发搜索并隐藏浮层；
  - 问题：点击浮层时，由于失焦事件先触发，浮层隐藏逻辑执行，导致浮层的onClick事件逻辑无法执行

  ![失焦事件与点击事件冲突]({{site.url}}{{site.baseurl}}/images/posts/arts/blur.png?raw=true)

```js
// 点击弹窗条目进行搜索
handleSearch = (activeSearch) => {
  console.log(activeSearch);
  this.setState({ visible: false });
}

// 获得焦点，有值时展示弹窗
onFocus = () => {
  if (this.state.keyword) {
    this.setState({ visible: true });
  }
}

// 输入且有值时展示弹窗
onChange = (e) => {
  this.setState({
    keyword: e.target.value,
    visible: !!e.target.value
  })
}

// 失去焦点隐藏弹窗
onBlur = () => {
  if (this.state.keyword) {
    this.setState({ visible: false });
  }
}

render() {
  const { keyword, visible } = this.state;
  return (
    <div>
      <Input
        allowClear
        addonBefore={<Icon type="user" />}
        placeholder="支持ID、名称、主邮箱、客户经理、专属账户、客户ID、GroupID搜索"
        style={ { width: 460 } }
        onFocus={this.onFocus}
        onChange={this.onChange}
        onBlur={this.onBlur}
      />
      {
        // 展示弹窗（点击条目完成搜索）
        visible && keyword && <div className={styles.SearchSelect}>
          {
            showOptions.map(item => (
              <div
                onClick={() => this.handleSearch(item)}
                className={styles.item}
                key={item.key}
              >
                <div>
                  {item.label}：{keyword}
                </div>
              </div>
            ))
          }
        </div>
      }
    </div>
  );
}
```

- 解决：
  - 方法一：给失焦事件设置延迟触发

    ```js
      onBlur = () => {
        if (this.state.keyword) {
          setTimeout(() => {
            this.setState({ visible: false });
          }, 300);
        }
      }
    ```

  - 方法二：使用onMouseDown替代onClick
    - mousedown事件：当鼠标指针移动到元素上方，并按下鼠标按键时，会发生mousedown事件，所以它会先于失焦事件执行。
    - mouseup事件：当在元素上放松鼠标按钮时，会发生mouseup事件。

## 第十四式：不用加减乘除如何做加法——位运算让你的代码更高效

- JavaScript 位运算符

  ![JavaScript 位运算符]({{site.url}}{{site.baseurl}}/images/posts/zhuangbility100/bit.png?raw=true)

&emsp;&emsp;位运算是基于二进制的，如何快速获得二进制可参考第十式。

- 不用加减乘除做加法

  ```js
  function add(a,b) {
      let sum;
      let add1;
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

- JS按位运算符的妙用：
  - 使用`&`运算符判断一个数的奇偶（只需记住0和1与1进行`&`运算的结果即可）：
    - `偶数 & 1 = 0`
    - `奇数 & 1 = 1`
  - 使用`~~，>>,<<,>>>,|`来取整：
    - `~~Math.PI`：3（按位取反再取反）
    - `Math.PI>>0`，`Math.PI<<0`，`Math.PI>>>0`：3（按位左移或者右移0位，`>>>`不可用于负数）
    - `Math.PI|0`：3，按位异或
  - 使用`<<,>>`来计算乘除：
    - 整数左移n位相当于乘2的n次方；
    - 右移相当于除以2的n次方，再向下取整
  - 利用`^`来完成比较两个数是否相等：`!(a ^ b)`
  - 使用`^`来完成值交换：参考第十五式
  - 使用`&,>>,|`来完成rgb值和16进制颜色值之间的转换
    - 16进制颜色值转RGB：
      ```js
      function hexToRGB(hex){
        hex = hex.replace("#","0x");
        let r = hex >> 16;
        let g = hex >> 8 & 0xff;
        let b = hex & 0xff;
        return "rgb("+r+","+g+","+b+")";
      };
      hexToRGB('#cccccc'); // rgb(204,204,204)
      ```

    - RGB转16进制颜色值：
      ```js
      function RGBToHex(rgb){
        let rgbArr = rgb.split(/[^\d]+/);
        let color = rgbArr[1]<<16 | rgbArr[2]<<8 | rgbArr[3];
        return "#"+color.toString(16);
      };
      RGBToHex('rgb(204,204,204)'); // #cccccc
      ```

> 参考资料：[JavaScript 位运算符](https://www.w3school.com.cn/js/js_bitwise.asp){:target='_blank'}

## 第十五式：无聊的脑筋急转弯，不借助第三个变量交换a,b两个变量值的N种方法

- 方法一：加减

  ```js
    a = a + b;
    b = a - b;
    a= a - b;
  ```

- 方法二：位运算
  
  ```js
    a ^= b;
    b ^= a;
    a ^= b;
  ```

- 方法三：对象或者数组
  
  ```js
    a = {a, b};
    b = a.a;
    a = a.b;
    // a = [a, b];
    // b = a[0];
    // a = a[1];
  ```

- 方法四：ES 6 解构赋值
  
  ```js
    [a, b] = [b, a]
  ```

- 方案五：运算符优先级

  ```js
    a = [b, b=a][0];
  ```

 > 参考资料： [不借助第三个变量交换a,b两个变量值](https://blog.csdn.net/web_hwg/article/details/75045689){:target='_blank'}

## 第十六式：如何在浏览器当前页面打开并操作另一个tab页

  ```js
    if (window.customeWindow) {
      window.customeWindow.close()
    }
    window.customeWindow = window.open()
    window.customeWindow.document.write('<p style="color:red">写点什么呢？<p>')
    window.customeWindow.document.write('<p style="color:#cccccc">想写什么就写什么。<p>')
    window.customeWindow.document.write('再追加点别的。')
    window.customeWindow.document.close() // 连续追加输入结束
    window.customeWindow.document.write('哈哈，现在页面上就只有我了！')
    window.customeWindow.document.write('<p style="color:red">不，还有我！<p>')
  ```

  > 参考资料：[BRAFT EDITOR富文本编辑器预览](https://braft.margox.cn/demos/preview){:target='_blank'}

## 第十七式：这段代码为什么会报错，说好的分号可以省略呢？

  ```js
    console.log(123)
    [12,2].filter(item => item > 3)
    // Uncaught TypeError: Cannot read property '2' of undefined
    // at <anonymous>:2:1
  ```

  - 分号推断：编译原理里的分号推断，作用是在编程的时候，让程序员省略掉不必要的分号；
  - JavaScript有着自动分号插入的机制(Automatic Semicolon Insertion)，简称ASI（ASI 只是表示编译器正确理解了程序员的意图，并没有真的插入分号）；
  - 浏览器引擎的 Parser（负责将JS 源码转换为 AST）总是优先将换行符前后的符号流当作一条语句解析（带换行的多行注释与换行符是等效的）；
  - 所以在 Parser 眼里，以上代码是这样的：
    - `console.log(123)[12,2].filter(item => item > 3)`，`console.log(123)`没有返回值，既`undefined`；
    - `[12,2]`中的方括号被视为读取`console.log(123)`返回值中的属性`2`，类似于根据下标取数组中的元素；
    - 为什么是取属性`2`呢，因为`12,2`是个逗号表达式，表达式的值是最右边的“2”，如此以来，上面的报错信息就很好理解了。
  - 不能省略的分号：
    - for 循环头部的分号
    - 作为空语句存在的分号
    - 以 `[、(、`开头的语句之前的分号

  > 资料参考：[备胎的自我修养——趣谈 JavaScript 中的 ASI (Automatic Semicolon Insertion)](https://segmentfault.com/a/1190000002955405){:target='_blank'}

## 第十八式：产品说要按照中文拼音顺序排序？

- 使用 `stringObject.localeCompare(target)` 方法实现中文按照拼音顺序排序

```js
var array = ["上海", "北京", "杭州", "广东", "深圳", "西安"];
// localeCompare() 方法返回一个数字来指示一个参考字符串是否在排序顺序前面或之后或与给定字符串相同。
array = array.sort((item1, item2) => item1.localeCompare(item2));
// ["北京", "广东", "杭州", "上海", "深圳", "西安"]
```

> 参考资料：[String.prototype.localeCompare()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare){:target='_blank'}

- 一个对象数组按照另一个数组排序

```js
sortFunc = (propName, referArr) => (prev, next) => 
referArr.indexOf(prev[propName]) - referArr.indexOf(next[propName])
// 按照年龄age的顺序给person排序
const age = [33, 11, 55, 22, 66];
const person = [
 {age: 55, weight: 50},
 {age: 22, weight: 42},
 {age: 11, weight: 15},
 {age: 66, weight: 56},
 {age: 33, weight: 68}]
person.sort(sortFunc('age', age));
// 结果：
// [
//  {"age": 33,"weight": 68},
//  {"age": 11,"weight": 15},
//  {"age": 55,"weight": 50},
//  {"age": 22,"weight": 42},
//  {"age": 66,"weight": 56}
// ]
```

## 第十九式：西施宜笑复宜颦，丑女效之徒累身 —— `window.btoa`、`window.atob`，命名这么随意的API可以用来干什么？

&emsp;&emsp;单从命名来看，完全让人摸不着头脑的两个API，我们到底可以用他们来干些什么呢？（我甚至怀疑，如果在项目中使用这样的命名，完全可能被同事打，哈哈）

 - `window.atob()` 函数用来解码一个已经被base-64编码过的数据。你可以使用 `window.btoa()` 方法来**编码一个可能在传输过程中出现问题的数据**，并且在接受数据之后，使用 `window.atob()` 方法来将数据解码。例如：你可以把ASCII里面数值0到31的控制字符进行编码，传输和解码。
- `window.btoa()`：将ASCII字符串或二进制数据转换成一个base64编码过的字符串,**该方法不能直接作用于Unicode字符串**。
- 在各浏览器中,使用 `window.btoa` 对Unicode字符串进行编码都会触发一个字符越界的异常，

```js
let encodedData = window.btoa("Hello, world"); // 编码
console.log(encodedData);                      // SGVsbG8sIHdvcmxk
let decodedData = window.atob(encodedData);    // 解码
console.log(decodedData);                      // Hello, world
let encodeUTF = window.btoa(encodeURIComponent('啊'));
console.log(encodeUTF);                        // JUU1JTk1JThB
let decodedUTF = decodeURIComponent(atob(encodeUTF));
console.log(decodedUTF);                       // 啊
```

> 资料参考：[window.atob()与window.btoa()方法实现编码与解码](https://www.cnblogs.com/moqiutao/p/6280099.html){:target='_blank'} &#124; [WindowOrWorkerGlobalScope.atob()](https://developer.mozilla.org/zh-CN/docs/Web/API/WindowBase64/atob){:target='_blank'} &#124; [WindowOrWorkerGlobalScope.btoa()](https://developer.mozilla.org/zh-CN/docs/Web/API/WindowBase64/btoa){:target='_blank'}

## 第二十式：`escape`、`encodeURI` 、 `encodeURIComponent`，这些编码 API 有什么区别？

- `escape` 是对字符串(string)进行编码(而另外两种是对 URL)，作用是让它们在所有电脑上可读。编码之后的效果是`%XX`或者`%uXXXX`这种形式。其中 ASCII 字母、数字、`@*/+` ，这几个字符不会被编码，其余的都会。最关键的是，**当你需要对 URL 编码时，请忘记这个方法，这个方法是针对字符串使用的，不适用于 URL**；
- `encodeURI` 和 `encodeURIComponent` 都是编码 URL，唯一区别就是编码的字符范围；
- `encodeURI` 方法不会对下列字符编码：ASCII 字母、数字、`~!@#$&*()=:/,;?+'`；
- `encodeURIComponent` 方法不会对下列字符编码：ASCII 字母、数字、`~!*()'`；
- 也就是 **`encodeURIComponent` 编码的范围更广**，会将`http://XXX`中的`//`也编码，会导致 URL 不可用。(其实 java 中的 `URLEncoder.encode(str,char)`也类似于这个方法，会导致 URL 不可用)。
- 使用场景：
  - 如果只是编码字符串，不和 URL 有半毛钱关系，那么用 `escape`，而且这个方法一般不会用到；
  - 如果你需要编码整个 URL，然后需要使用这个 URL，那么用 `encodeURI`；
  - 当你需要编码 URL 中的参数的时候，那么 `encodeURIComponent` 是最好方法；
  - 某些场景下，编码之后导致URL不可用（比如笔者曾遇到预览附件时某些附件URL无法打开的问题），可尝试考虑是否是因为特殊字符导致的。
- 如果不生效可以用两次编码：[关于两次编码的原因](https://www.cnblogs.com/qlqwjy/p/9934706.html){:target='\_blank'}

> 资料参考：[escape、encodeURI 和 encodeURIComponent 的区别](https://www.cnblogs.com/qlqwjy/p/9934706.html){:target='\_blank'}

## 第二十一式：经常碰到移动端DNS域名劫持问题？来一起了解下HTTPDNS是什么，解决了什么问题吧

&emsp;&emsp;对于互联网，域名是访问的第一跳，而这一跳很多时候会“失足”（尤其是移动端网络），导致访问错误内容、失败连接等，让用户在互联网上畅游的爽快瞬间消失。但凡使用域名来给用户提供服务的互联网企业，都或多或少地无法避免在有中国特色的互联网环境中遭遇到各种域名被缓存、用户跨网访问缓慢等问题。

- DNS 解析过程：

![DNS 解析过程]({{site.url}}{{site.baseurl}}/images/posts/zhuangbility100/dns.jpg?raw=true)

- 什么HttpDNS：

&emsp;&emsp;HTTPDNS 利用 HTTP 协议与 DNS 服务器交互，代替了传统的基于 UDP 协议的 DNS 交互，绕开了运营商的 Local DNS，**有效防止了域名劫持，提高域名解析效率**。另外，由于 DNS 服务器端获取的是真实客户端 IP 而非 Local DNS 的 IP，**能够精确定位客户端地理位置、运营商信息，从而有效改进调度精确性**。

- HttpDns 主要解决的问题：

  - Local DNS 劫持：由于 HttpDns 是通过 IP 直接请求 HTTP 获取服务器 A 记录地址，不存在向本地运营商询问 domain 解析过程，所以从根本避免了劫持问题。
  - 平均访问延迟下降：由于是 IP 直接访问省掉了一次 domain 解析过程，通过智能算法排序后找到最快节点进行访问。
  - 用户连接失败率下降：通过算法降低以往失败率过高的服务器排序，通过时间近期访问过的数据提高服务器排序，通过历史访问成功记录提高服务器排序。

- HttpDNS的原理

  - 客户端**直接访问HttpDNS接口**，获取业务在域名配置管理系统上配置的访问延迟最优的IP。（基于容灾考虑，还是保留次选使用运营商LocalDNS解析域名的方式）；
  - 客户端获取到IP后就直接向此IP发送业务协议请求。以Http请求为例，通过在header中指定host字段，向HttpDNS返回的IP发送标准的Http请求即可。

> 详细资料参考：[全面了解移动端DNS域名劫持等杂症：原理、根源、HttpDNS解决方案等](https://www.jianshu.com/p/5413a5a0577e){:target='_blank'}

## 第二十二式：`depcheck`一下你的前端项目中是否存在未使用的依赖包

&emsp;&emsp;很多时候，也许我们的前端项目是基于某个已有的项目进行”复制搭建“，或者直接使用[UmiJS](https://umijs.org/){:target='_blank'}这样的企业级 react 应用框架，又或者基于[Ant Design Pro](https://pro.ant.design/){:target='_blank'}等开源项目进行删改，难免会存在未使用的依赖包，拖累项目安装速度，增大项目打包体积等，这时，我们就可以考虑使用`depcheck`找出那些未使用的依赖包进行移除。

  - `npm install depcheck -g`
  - cd 到要检查的项目目录，运行 depcheck

    ```s
      D:\project>depcheck
      Unused devDependencies  #未使用的依赖
        * @antv/data-set
        * echarts
        * echarts-for-react
        * qs
      * Unused devDependencies #未使用的devDependencies
        * chalk
        * enzyme
        * express
      Missing dependencies  #缺少的dependencies
        * immutability-helper: .\src\components\EditColums\EditColumnsTable.js
        * slash2: .\config\config.js
    ```

> UmiJS学习参考：[UmiJS](https://umijs.org/){:target='_blank'} &#124; [[react]初识Umi.JS](https://www.jianshu.com/p/dc493809a2fd){:target='_blank'}

## 第二十三式：防止误操作：在组件卸载、路由跳转、页面关闭（刷新）之前进行提示

&emsp;&emsp;工作中经常会有大表单填写、提交这样的需求，如果用户写了大量内容，因为误操作，刷新或者关闭了页面，填写信息用没有做缓存，此时用户的内心应该是奔溃的。

&emsp;&emsp;React组件卸载、路由跳转、页面关闭（刷新）之前进行提示（如果是AntD Modal弹窗里面的表单，也可视情考虑将`maskClosable`属性设置为false，防止误点蒙层导致弹窗关闭）：

```js
//监听窗口事件
useEffect(() => {
  const listener = (ev) => {
    ev.preventDefault();
    ev.returnValue = '确定离开吗？';
  };
  window.addEventListener('beforeunload', listener);
  return () => {
    // 在末尾处返回一个函数
    // React 在该函数组件卸载前调用该方法（实现 componentWillUnmount）
    window.removeEventListener('beforeunload', listener);
  };
}, []);
```

## 第二十四式：不带括号也能执行函数调用？console.log\`hello world\`会打印出什么

- 直接看结果：
```js
console.log`hello world` // 打印出一个数组：["hello world", raw: Array(1)]
```

- 再看看以下代码：
```js
const name = 'jack'
const gender = false
// 带括号
console.log(`hey, ${name} is a ${gender ? 'girl' : 'boy'}.`) // hey, jack is a boy.
// 不带括号
console.log`hey, ${name} is a ${gender ? 'girl' : 'boy'}.` // ["hey, ", " is a ", ".", raw: Array(3)] 'jack' 'boy'
```

&emsp;&emsp;从最后一行打印可以看出数组中的项是以'插入表达式'作为分割生成的，并且插入表答式中的内容参数，也会依次打印出来。这就是**带标签的模板字符串**。

- 模板字符串的语法：

```js
// 普通
`string text`

// 换行
`string text line 1
 string text line 2`

// 插值
`string text ${expression} string text`

// 带标签的模板字符串
tag `string text ${expression} string text`
```

- 可以做什么：
```js
const name = 'jack'
const gender = false

function myTagFunc(strings, name, gender) {
    const sex = gender ? 'girl' : 'boy'
    // return 'hello world'
    return strings[0] + name + strings[1] + sex + strings[2]
}

// result 的值是myTagFunc函数的返回值
// 如果myTagFunc返回 hello world，result就是hello world
// 这样可在一定程度上避免在模板字符串内写复杂的逻辑
const result = myTagFunc`hey, ${name} is a ${gender}.`
console.log(result) // hey, jack is a boy.
```

&emsp;&emsp;在标签函数的第一个参数中，存在一个特殊的属性raw ，我们可以通过它来访问模板字符串的原始字符串，而不经过特殊字符的替换。
```js
function tag(strings) {
  console.log(strings.raw[0]);
}
tag`string text line 1 \n string text line 2`;// "string text line 1 \n string text line 2"
console.log`string text line 1 \n string text line 2` // ["string text line 1 ↵ string text line 2", raw: Array(1)]
```

![原始字符串]({{site.url}}{{site.baseurl}}/images/posts/zhuangbility100/tag.png?raw=true)

> 参考资料：[MDN-带标签的模板字符串](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/template_strings){:target='_blank'} &#124; [带标签的模板字符串](https://www.kancloud.cn/cyyspring/more/1967485){:target='_blank'}

## 第二十五式：还在用闭包实现自增ID？何不试试优雅大气的Generator？

- 闭包

```js
function createIdMaker(){
    let id = 1;
    return function (){
        return id ++;
    }
}

const idMaker =  createIdMaker();

console.log(idMaker()) // 1
console.log(idMaker()) // 2
console.log(idMaker()) // 3
```

- Generator

```js
function * createIdMaker() {
  let id = 1
  while(true) yield id ++;
}
const idMaker = createIdMaker()
console.log(idMaker.next().value) // 1
console.log(idMaker.next().value) // 2
console.log(idMaker.next().value) // 3
```

## 第二十六式：对象属性会自己偷偷排队 —— 谁动了我的对象？

- 试想以下，下面的代码会输出什么：

```js
function Foo() {
  this[200] = 'test-200';
  this[1] = 'test-1';
  this[100] = 'test-100';
  this['B'] = 'bar-B';
  this[50] = 'test-50';
  this[9] = 'test-9';
  this[8] = 'test-8';
  this[3] = 'test-3';
  this[5] = 'test-5';
  this['D'] = 'bar-D';
  this['C'] = 'bar-C';
}
var bar = new Foo();

for (key in bar) {
  console.log(`index:${key}  value:${bar[key]}`);
}
```

&emsp;&emsp;在 ECMAScript 规范中定义了**数字属性应该按照索引值大小升序排列，字符串属性根据创建时的顺序升序排列**。我们把对象中的数字属性称为**排序属性**，在 Chrome V8 引擎 中被称为 elements，字符串属性就被称为**常规属性**，在 V8 中被称为 properties。在 V8 内部，为了有效地提升存储和访问这两种属性的性能，分别使用了两个线性数据结构来分别保存排序属性和常规属性。同时 v8 将部分常规属性直接存储到对象本身，我们把这称为**对象内属性 (in-object properties)**，不过对象内属性的数量是固定的，默认是 10 个。更多详情可参考之前的一篇文章[浏览器是如何工作的：Chrome V8让你更懂JavaScript](https://segmentfault.com/a/1190000037435824){:target='_blank'} —— 【V8 内部是如何存储对象的：快属性和慢属性】一节。

- 结果揭晓

```js
//输出：
// index:1  value:test-1
// index:3  value:test-3
// index:5  value:test-5
// index:8  value:test-8
// index:9  value:test-9
// index:50  value:test-50
// index:100  value:test-100
// index:200  value:test-200
// index:B  value:bar-B
// index:D  value:bar-D
// index:C  value:bar-C
```

> 资料参考：[浏览器是如何工作的：Chrome V8让你更懂JavaScript](https://segmentfault.com/a/1190000037435824){:target='_blank'} —— 【V8 内部是如何存储对象的：快属性和慢属性】一节。

## 只会用AntD上传组件？除了FormData和Blob，你还会怎么上传文件？

- [JavaScript专精系列(6)——FileReader 文件读取](https://mapbar-front.blog.csdn.net/article/details/78632928){:target='_blank'}
- [前端上传文件的方法总结](https://www.cnblogs.com/soraly/p/8441589.html){:target='_blank'}
- [前端大文件上传](https://juejin.cn/post/6844903860327186445){:target='_blank'}
- [前端本地文件操作与上传](https://zhuanlan.zhihu.com/p/31401799){:target='_blank'}

## 如何快速将普通对象转为map

```js
const obj = {
  foo: 'value1',
  bar: 'value2'
}
// 打印value
console.log(Object.values(obj))
// 打印key
console.log(Object.keys(obj))
// 打印由[key, value]
console.log(Object.entries(obj))
// 使用of遍历普通对象的方法
for(const [key, value] of Object.entries(obj)){
  console.log(key, value)
}
// 普通对象转Map
console.log(new Map(Object.entries(obj)))
// 遍历普通对象生成的Map
for(const item of new Map(Object.entries(obj))){
  console.log(item)
}
```

## `String.replace()`第二个参数可以是个函数？
- 特殊符号`$`
- [JavaScript replace() 方法](https://www.w3school.com.cn/jsref/jsref_replace.asp){:target='_blank'}

## VSCode竟然可以打开谷歌开发者工具面板？他 和 Chrome有什么关系？

- Help => Toggle Developer Tools

VS Code 是基于 Electron (原来叫 Atom Shell) 进行开发的。Electron 基于 Node.js（作为后端运行时）和 Chromium（作为前端渲染)，使得开发者可以使用 HTML, CSS 和 JavaScript 等前端技术来开发跨平台桌面 GUI 应用程序。Atom, GitHub Desktop, Slack, Microsoft Teams, WordPress Desktop 等知名软件都是基于 Electron 开发的。

VS Code 的其他的主要组件有：

Monaco Editor
Language Server Protocol
Debug Adapter Protocol
Xterm.js

- [vs code的界面是用的什么技术？](https://www.zhihu.com/question/43666493?sort=created){:target='_blank'}

## 如何通过脚本来新建文件，提高开发效率？

- 抛砖引玉，你一定会探究出更高级的用法

- 接口

## 如何通过脚本完成自动化部署？

- 合同、UBOX等测试环境

## `let Days={};Days[Days["Sun"] = 3] = "Sun"`

## 动手实现一个 reduce

## reduce 还可以这么用？
  - runPromiseInSequence
  - Koa only、pick、omit

  [20个你不得不知道的数组reduce高级用法](https://mp.weixin.qq.com/s/cksKPLdXLje327UBI2eKIQ){:target='_blank'}

## 什么？我理解的forEach不对？

## 如何实现call、apply和bind

## getBoundingClientRect：让你找准定位不迷失自我

- offsetTop 和 getBoundingClientRect() 区别
- [Element.getBoundingClientRect()](https://developer.mozilla.org/zh-CN/docs/Web/API/Element/getBoundingClientRect){:target='_blank'}
- 吸顶效果

## 滚动吸顶

- [【前端词典】4 种滚动吸顶实现方式的比较](https://zhuanlan.zhihu.com/p/62125575){:target='_blank'}

## 你知道 this 也有优先级吗？
  - 显式绑定和隐式绑定
  - new 绑定的优先级比显式 bind 绑定更高
  - new>显示绑定>隐式绑定

## 我不太想谈闭包和变量提升
  - 变量的定义和赋值过程
  - 闭包、懒加载、预解析

## let和const到底提升了吗？

  - [我用了两个月的时间才理解 let](https://zhuanlan.zhihu.com/p/28140450){:target='_blank'}

## 有趣的`let x = x`

- [JS变量封禁大法：薛定谔的X](https://zhuanlan.zhihu.com/p/28117094){:target='_blank'}

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

## 前端的未来在移动端吗？跨端方案都有哪些

## 回调地狱：前端是如何一步步走出来的？
  - 前端异步方案是怎么一路走来的

## JavaScript新特性：Optional Chaining解决了什么问题？

  - [Optional Chains](http://www.ecma-international.org/ecma-262/#sec-optional-chains){:target='_blank'}

## 0.1 + 0.2 !== 0.3？体育老师说这个锅我不背

  - Number.EPSILON
  - toFixed
  - 字符串运算？整数运算？

  - [0.1 + 0.2 != 0.3背后的原理](https://segmentfault.com/a/1190000015051329){:target='_blank'}

## 如果没有BigInt，如何进行大数运算？

- [参考](https://www.cnblogs.com/Ballon/p/4752409.html){:target='_blank'}
- [js大数相加问题](https://www.jianshu.com/p/c373943f0e9e){:target='_blank'}
- [JS 大数相加](https://blog.csdn.net/qq_39816673/article/details/88667505){:target='_blank'}

## 如何实现mul(2)(3)(4)为24？

   - 函数珂里化
   - 或者compose 实现的几种方案

## 数组的N种操作

  - 扁平化
  - 去重
  - 类数组转化为数组

## 庭院深深深几许，杨柳堆烟，帘幕无重数 —— 如何实现深拷贝？

```js
  // 有undefined + 循环引用
  let obj = {
    a: 1,
    b: {
      c: 2,
      d: 3,
    },
    f: undefined
  }
  obj.c = obj.b;
  obj.e = obj.a
  obj.b.c = obj.c
  obj.b.d = obj.b
  obj.b.e = obj.b.c

  function deepCopy(obj) {
    return new Promise((resolve) => {
      const {port1, port2} = new MessageChannel();
      port2.onmessage = ev => resolve(ev.data);
      port1.postMessage(obj);
    });
  }

  deepCopy(obj).then((copy) => {           // 请记住`MessageChannel`是异步的这个前提！
      let copyObj = copy;
      console.log(copyObj, obj)
      console.log(copyObj == obj)
  });
```

- object.asign
- [MessageChannel](https://developer.mozilla.org/zh-CN/docs/Web/API/MessageChannel){:target='_blank'}
- [MessageChannel是什么，怎么使用？](https://www.jianshu.com/p/4f07ef18b5d7){:target='_blank'}

## Promise并行限制

## 渲染几万条数据，怎样才能不卡住页面？

## 只拆过快递，JS里装箱和拆箱又是什么？

## 为了减少冗余参数，我用 delete 有错吗？
  - 删除
  - 改变属性顺序

## 省省劲儿，setTimeout 不能让你的程序暂停

  - 如果设置的 timeout 小于 0，则设置为 0
  - 如果嵌套的层级超过了 5 层，并且 timeout 小于 4ms，则设置 timeout 为 4ms。

  - [setTimeout, setInterval 与 requestAnimationFrame 隐藏的各种坑](https://blog.csdn.net/qingyafan/article/details/52335753){:target='_blank'}
  - [参考](https://www.cnblogs.com/liuxiaoru/p/13637983.html){:target='_blank'}
  - [为什么 setTimeout 有最小时延 4ms ?](https://zhuanlan.zhihu.com/p/155752686){:target='_blank'}
  - 最小延时、最大延时

## `git reset --hard` 真的就没救了吗？

- [git时光穿梭机--女神的侧颜](https://segmentfault.com/a/1190000018726100){:target='_blank'}
- [git命令log与reflog的比较](https://blog.csdn.net/u013252047/article/details/80230781){:target='_blank'}
- [github总结(4)--关于git reset --hard这个命令的惨痛教训](https://www.cnblogs.com/hope-markup/p/6683522.html){:target='_blank'}

## 前端错误处理

## 纯前端代码生成 Excel

## iframe间数据传递，postMessage可以是你的选择

错误：`Block a frame with origin`
```js
  // 页面1
  top.postMessage(query, '*');
 //页面2 监听message事件
  useEffect(() => {
 const listener = ev => {
   console.log(ev,ev.data)
 };
   window.addEventListener('message', listener);
 return () => {
   window.removeEventListener('message', listener);
 };
  }, []);
```

## 流媒体播放

- [前端视频直播技术总结及video.js在h5页面中的应用](https://www.cnblogs.com/dreamsqin/p/12557070.html){:target='_blank'}
- [「1.4万字」玩转前端 Video 播放器 | 多图预警](https://juejin.cn/post/6850037275579121671){:target='_blank'}
- [[1.3万字] 玩转前端二进制](https://juejin.cn/post/6846687590783909902){:target='_blank'}

## 前端流程图

- [Gojs](https://gojs.net.cn/){:target='_blank'}

## 微信扫码登录原理

[浅析微信扫码登录原理(小结)](https://www.jb51.net/article/149680.htm){:target='_blank'}
[实践](https://wx.qq.com/){:target='_blank'}（查看长连接等）

## `Object.defineProperty()`为何被Vue弃用？

`Object.defineProperty()`方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象。同时，该API也是Vue 2.x数据绑定实现的核心，Vue 在 3.x 版本之后改用 Proxy 进行实现，本系列文章后续会进行简单讨论。

- [实现双向绑定Proxy比defineproperty优劣如何](https://www.jianshu.com/p/2df6dcddb0d7){:target='_blank'}
- [为什么Vue3.0使用Proxy实现数据监听？defineProperty表示不背这个锅](https://juejin.cn/post/6844903965180575751){:target='_blank'}


## 明明console 数组有值，展开就是空了？

- 明明里面是有值的 但是Length是0

## `will-change`是如何优化性能的？

&emsp;&emsp;CSS 属性 `will-change` 为web开发者提供了一种告知浏览器该元素会有哪些变化的方法，这样浏览器可以在元素属性真正发生变化之前提前做好对应的优化准备工作。这种优化可以将一部分复杂的计算工作提前准备好，使页面的反应更为快速灵敏。

- [will-change](https://developer.mozilla.org/zh-CN/docs/Web/CSS/will-change){:target='_blank'}
- [说一说will-change](https://mp.weixin.qq.com/s/rbDZntqZd8VcbDjQFER2Yw){:target='_blank'}
- [CSS页面渲染优化属性will-change](https://www.cnblogs.com/xiaohuochai/p/6321790.html){:target='_blank'}

## 既然饱受诟病，JavaScript为什么还是单线程的

## CSS

- [参考](https://mp.weixin.qq.com/s/UVifGMNXac3_KPLhR_cLNw){:target='_blank'}

## CSS动效

-[10 个 GitHub 上超火的 CSS 奇技淫巧项目，找到写 CSS 的灵感！](https://segmentfault.com/a/1190000038263876){:target='_blank'}

## JS动效

- [11 个最好的 JavaScript 动态效果库](https://segmentfault.com/a/1190000018577143){:target='_blank'}

## 如何修改antd样式

## http2

- [深入浅出：HTTP/2](https://www.cnblogs.com/confach/p/10141273.html){:target='_blank'}
- [一文读懂 HTTP/2 特性](https://zhuanlan.zhihu.com/p/26559480){:target='_blank'}

## 一个正经又有点邪气的组件封装："★★★★★☆☆☆☆☆".slice(5 - rate, 10 - rate)

- [信条｜手撕吊打面试官系列面试题](https://mp.weixin.qq.com/s/xaZGvnRuHAFocjh3DMiXCw){:target='_blank'}

## 重放攻击

- [前端业务安全综述（防爬、防薅、人机校验等）](https://mp.weixin.qq.com/s/eQKqiBbiuw-_RwWVYUnFXg){:target='_blank'}

## 内网穿透

> 公网IP就是广域网IP，拥有公网IP就不需要经过路由器或交换机直接可以上网，而且，还能直接被外界访问到，也就是在Internet上可以和其他计算机随意互相访问。内网穿透一般是因为局域网应用网络环境没有公网IP，但又需要在外网进行访问，就需要进行内网穿透了，如通过内网穿透，生成固定域名来实现对局域网win电脑、网站、博客、视频监控、游戏联机、FTP/SVN/MAC服务器、公司的OA、erp等办公系统等等的远程外网访问。

- [什么是内网、外网？内网、外网有啥区别？](https://zhuanlan.zhihu.com/p/147282153){:target='_blank'}
- [内网穿透：在公网访问你家的 NAS](https://zhuanlan.zhihu.com/p/57477087){:target='_blank'}
- [内网穿透和公网IP有什么区别吗?](https://www.zhihu.com/question/404693104/answer/1315636116){:target='_blank'}

## 微前端、serverless

## JS代码调试必须要HTML、控制台或者node？

## 让对象的toString返回指定的字符串而不是[object Object]

## 可以遍历绝大部分数据类型的for of为什么不能遍历普通对象？（单独文章，拉勾可迭代接口，MDN也可以，迭代器模式）
```js
for(const [key, value] of Object.entries(obj)){
  console.log(key, value)
}
```

- [MDN：for...of](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/for...of){:target='_blank'}
- [Understanding the JavaScript For...of Loop](https://scotch.io/tutorials/understanding-the-javascript-forof-loop){:target='_blank'}
- [【译】理解 JavaScript 中的 for…of 循环](https://www.cnblogs.com/m2maomao/p/7743143.html){:target='_blank'}

## 61

## 装逼文章大赏

- [这些JavaScript编程黑科技，装逼指南，高逼格代码，让你惊叹不已](https://segmentfault.com/a/1190000010752361){:target='_blank'}

<!-- JavaScript  36 式（17，19，23，24）：
常用方法的实现
常用方法的整理
常用技巧的梳理
常考知识点的原理 -->



