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

## `String.replace()`第二个参数可以是个函数？
- 特殊符号`$`
- [JavaScript replace() 方法](https://www.w3school.com.cn/jsref/jsref_replace.asp){:target='_blank'}

## 如何通过脚本来新建文件，提高开发效率？

- 抛砖引玉，你一定会探究出更高级的用法

- 接口

## 如何通过脚本完成自动化部署？

- 合同、UBOX等测试环境

## 动手实现一个 reduce

## reduce 还可以这么用？
  - runPromiseInSequence
  - Koa only、pick、omit

  [20个你不得不知道的数组reduce高级用法](https://mp.weixin.qq.com/s/cksKPLdXLje327UBI2eKIQ){:target='_blank'}

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

## 如何实现mul(2)(3)(4)为24？

   - 函数珂里化
   - 或者compose 实现的几种方案

## 数组的N种操作

  - 扁平化
  - 去重
  - 类数组转化为数组

## 庭院深深深几许，杨柳堆烟，帘幕无重数 —— 如何实现深拷贝？

// MessageChannel

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
  - 最小延时、最大延时

## `git reset --hard` 真的就没救了吗？

- [git时光穿梭机--女神的侧颜](https://segmentfault.com/a/1190000018726100){:target='_blank'}
- [git命令log与reflog的比较](https://blog.csdn.net/u013252047/article/details/80230781){:target='_blank'}
- [github总结(4)--关于git reset --hard这个命令的惨痛教训](https://www.cnblogs.com/hope-markup/p/6683522.html){:target='_blank'}

## 前端错误处理

## 纯前端代码生成 Excel

## iframe数据传递，postMessage可以是你的一个选择

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

## will-change

-[说一说will-change](https://mp.weixin.qq.com/s/rbDZntqZd8VcbDjQFER2Yw){:target='_blank'}

## 既然饱受诟病，JavaScript为什么还是单线程的
## CSS

- [参考](https://mp.weixin.qq.com/s/UVifGMNXac3_KPLhR_cLNw){:target='_blank'}

## CSS动效

-[10 个 GitHub 上超火的 CSS 奇技淫巧项目，找到写 CSS 的灵感！](https://segmentfault.com/a/1190000038263876){:target='_blank'}

## JS动效

- [11 个最好的 JavaScript 动态效果库](https://segmentfault.com/a/1190000018577143){:target='_blank'}

## 如何修改antd样式

## http2

## 一个正经又不正经的组件封装："★★★★★☆☆☆☆☆".slice(5 - rate, 10 - rate)

## 60

## 装逼文章大赏

- [信条｜手撕吊打面试官系列面试题](https://mp.weixin.qq.com/s/xaZGvnRuHAFocjh3DMiXCw){:target='_blank'}
- [这些JavaScript编程黑科技，装逼指南，高逼格代码，让你惊叹不已](https://segmentfault.com/a/1190000010752361){:target='_blank'}

<!-- JavaScript  36 式（17，19，23，24）：
常用方法的实现
常用方法的整理
常用技巧的梳理
常考知识点的原理 -->



