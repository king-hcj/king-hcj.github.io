---
layout: post
title: 知识与经验，探索和发现（壹）
categories: 知识与经验，探索和发现
description: 知识与经验，探索和发现
keywords: Knowledge and Experience、Exploration and Discovery
---

<!-- 二十四个节气:立春、雨水、惊蛰、春分、清明、谷雨、立夏、小满、芒种、夏至、小暑、大暑、立秋、处暑、白露、秋分、寒露、霜降、立冬、小雪、大雪、冬至、小寒、大寒。 -->

## 缘起

### ARTS 的终止

&emsp;&emsp;前端领域飞速发展，世界风云波谲云诡。学习资料堆积如山难以选择；计划总是跟不上变化。那么，作为前端浪潮中的弄潮儿，我们该如何选择，才能适应时代的变化呢？我想，我们也许可以做如下思考：

- **哪些事情做起来一定有益于个人的发展**，如此，可避免总是在变化中无序选择；
- 只要一直**做正确的事情**，一直有经验的沉淀与思考，多年后的某一天，你会惊异地发现自己已经获得了超出预期的成长；
- **定点捕捞**比广撒网更能获取你想要的知识。

&emsp;&emsp;同时，我认为，ARTS 打卡计划：

- 是职业生涯特定阶段的产物，比如它重算法、力求提升个人技术影响力；
- 以前的 ARTS 打卡，主要坚持的可能也只是 ATS，R 很少，实际上在某种程度上也难以发挥它的最大价值；
- 需要用这些时间系统性的干一些更重要的事儿，不仅仅是现阶段更重要的事儿；
- 知识积累过于宽泛，难有特定领域的深入探索和沉淀、产出；
- 我**希望能一直做正确的事情，一直有经验的沉淀与思考，获得更多有深度的沉淀**。

### 新的开始

- 周期：两周 ～ 两个月为一个周期
- 主题：知识与经验，探索和发现；
- 形式：
  - Knowledge and Experience【阅读、识见、思考，不仅仅局限于专业知识，也包括生活、人生等】
    - 最近两周学会的技术、小技巧和收获（可以含以前的算法）
    - 技术文章阅读学习
    - 格局、价值观、成长、人生类
    - 财经、理财类
    - 生活、运动健康等
    - 不定期的实践增补
  - Exploration and Discovery【探索与发现】
    - 特定领域的技术和知识沉淀【定点捕捞】
    - 技术文章输出，建议两周一篇
    - 领悟与收获
    - 不定期的实践增补

&emsp;&emsp;两年为期，遇见更好的自己！ —— 2021.05.24 By Cheney。

## 立春

> 截止 2021.07.23【完成】

### Knowledge and Experience

- `background-image`问题

```css
.body {
  overflow: hidden; /* 这个可以禁止下拉和左右滑动 */
  /* overflow-x: hidden; // 限制左右滑动位移 */
  background: #201d32; /* 不设置background的话，会有白边，下拉会漏出白底 */
  background-image: linear-gradient(to bottom, #201d32, #000000 100%);
}
```

- 移动端 web 禁止长按选择文字以及弹出菜单

```css
/*如果是禁用长按选择文字功能，用css*/
* {
  user-select: none;
}
```

```js
// 如果是想禁用长按弹出菜单, 用js
window.addEventListener('contextmenu', function (e) {
  e.preventDefault();
});
```

- `pointer-events`是 css3 的一个属性，指定在什么情况下元素可以成为鼠标事件的`target`（包括鼠标的样式）。`pointer-events`属性有很多值，但是对于浏览器来说，只有`auto`（默认值）和`none`两个值可用，其它的几个是针对 SVG 的(本身这个属性就来自于 SVG 技术)。`none`值时，元素永远不会成为鼠标事件的`target`（目标）。
- [不要过度使用 React.useCallback()](https://segmentfault.com/a/1190000022651514){:target='\_blank'}
- [git 对比两个分支差异](https://www.jianshu.com/p/bb97fabb475e){:target='\_blank'}

```js
  git diff branch1 branch2 --stat // 显示出branch1和branch2中差异的部分
  git diff branch1 branch2 具体文件路径 // 显示指定文件的详细差异
  git diff branch1 branch2 // 显示出所有有差异的文件的详细差异
  git log branch1 ^branch2 // 查看branch1分支有，而branch2中没有的log
  git log branch1..branch2 // 查看branch2中比branch1中多提交了哪些内容。注意，列出来的是两个点后边（此处即dev）多提交的内容。
  git log branch1...branch2 // 不知道谁提交的多谁提交的少，单纯想知道有什么不一样
  git log -left-right branch1...branch2 // 在上述情况下，在显示出每个提交是在哪个分支上。注意 commit 后面的箭头，根据我们在 –left-right branch1…branch2 的顺序，左箭头 < 表示是 branch1 的，右箭头 > 表示是branch2的。
```

- opacity 子元素继承父元素透明度的解决方法（[参考](https://www.jb51.net/css/744197.html){:target='\_blank'}）
  - 父元素背景颜色设置透明度时，避免使用 `background：#000；opacity：0.5`，建议使用 `background：rgba(0,0,0,0.5)`
  - 如果设置背景色为渐变色等这种复杂背景,子元素会继承父元素的 opacity 属性，我们让它不成为子元素。新增一个子元素，将其绝对定位到父元素位置，然后在该元素上设置背景色与透明度。
- fixed 元素抖动问题
  - [【移动端】解决 fixed 定位闪动问题](https://www.cnblogs.com/wuxianqiang/p/10554164.html){:target='\_blank'}：`transform: translateZ(0)`；
  - [移动端 fixed 的元素抖动的问题](https://www.cnblogs.com/qiujianmei/p/7544989.html){:target='\_blank'}
- 长背景，上部白底，下底有背景：`background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), #000000 100%);`;
- [CSS 实现渐隐渐现效果](https://www.cnblogs.com/WindrunnerMax/p/14366181.html){:target='\_blank'}
- [git cherry-pick 教程](https://www.ruanyifeng.com/blog/2020/04/git-cherry-pick.html){:target='\_blank'}：`git cherry-pick`命令的作用，就是将指定的提交（commit）应用于其他分支。【修改错了分支，已经 commit，但是又不能直接合并分支】

  ```s
  $ git cherry-pick <commitHash> # 将指定的提交commitHash，应用于当前分支
  $ git cherry-pick feature # 将feature分支的最近一次提交，转移到当前分支
  $ git cherry-pick <HashA> <HashB> # 将 A 和 B 两个提交应用到当前分支
  ```

- `0.5px` 边框问题（部分三星机型）：[CSS 0.5px 细线边框的原理和实现方式](https://www.cnblogs.com/yangshifu/p/9257519.html){:target='\_blank'}

  > 要实现小于 1px 的线条，有个先决条件：屏幕的分辨率要足够高，设备像素比要大于 1，即 css 中的 1 个像素对应物理屏幕中 1 个以上的像素点。

  ```less
  // border-width: 0.5px;
  border-width: 1px;
  transform: scaleY(0.5);
  ```

- rgba 的另两种写法：`background: rgba($color: #10152a, $alpha: 0.1);`和`background: rgba(red, green, blue, alpha)`。

- 过滤字符串中的表情：

```ts
// emoji 范围
const emojiRanges = [
  '\ud83c[\udf00-\udfff]',
  '\ud83d[\udc00-\ude4f]',
  '\ud83d[\ude80-\udeff]',
];

// emoji 正则
const emojiReg = new RegExp(emojiRanges.join('|'), 'g');

// 过滤掉表情
export const filterEmoji = (str: string): string => {
  return str.replace(emojiReg, '');
};
```

- Mac 设置环境变量

  - 单个用户：`export PATH=/opt/local/bin:/opt/local/sbin:$PATH`
  - [MAC 设置环境变量 path 的几种方法](https://www.cnblogs.com/shineqiujuan/p/4693404.html){:target='\_blank'}

- [Fira Code，一个程序员专用字体](https://github.com/tonsky/FiraCode){:target='\_blank'}
- [Git 忽略规则(.gitignore 配置）不生效原因和解决](https://www.cnblogs.com/rainbowk/p/10932322.html){:target='\_blank'}
  - git 清除本地缓存（改变成未 track 状态），然后再提交：`[root@kevin ~]# git rm -r --cached .`
  - 在每个 clone 下来的仓库中手动设置不要检查特定文件的更改情况。
    ```bash
    # 在PATH处输入要忽略的文件
    [root@kevin ~]# git update-index --assume-unchanged PATH
    ```
- 安卓调试
  - [Android 调试桥 (adb)](https://developer.android.google.cn/studio/command-line/adb){:target='\_blank'}
  - [Logcat 命令行工具](https://developer.android.google.cn/studio/command-line/logcat){:target='\_blank'}

### Exploration and Discovery

#### 前端性能优化

- [x] [前端性能优化方法与实战](https://kaiwu.lagou.com/course/courseInfo.htm?courseId=638#/content){:target='\_blank'}

#### 走进浏览器的世界

- [47 张图带你走进浏览器的世界](https://king-hcj.github.io/2021/07/11/web-browser/){:target='\_blank'}

## 雨水

> 截止 2021.09.23【计划】

### Knowledge and Experience

- 查看当前的 git 分支是基于哪个分支创建的？：`git reflog --date=local | grep <branchname>`；
  - [How to determine when a Git branch was created?](https://stackoverflow.com/questions/2255416/how-to-determine-when-a-git-branch-was-created){:target='\_blank'}
- Less 循环简化样式的编写

```less
/**
  * 定义循环方法
  * @index--传入的循环起始值
*/
.LoopTransform(@index) when(@index<6) {
  // 执行内容
  // 类名参数要加大括号@{index}
  // 根据index获取对应的某个值
  .swiper-wrapper .swiper-slide:nth-child(@{index}) {
    /*index号图像向前方移位300px*/
    // 注意，这里不能写成(72 * (@index - 1))deg
    transform: rotateY(72deg * (@index - 1)) translateZ(300px);
  }

  //递归调用 达到循环目的
  .LoopTransform(@index+1);
}

// 调用循环
.LoopTransform(1);
```

- [css-十六进制 8 位带透明度色值（6 位色值＋ 2 位透明度值）对照](https://blog.csdn.net/weixin_41993525/article/details/114005236){:target='\_blank'}

- [使用通配符的属性选择器【`E[Attr^=Val]`】【`E[Attr$=Val]`】【`E[Attr*=Val]`】](http://it028.com/css-selectors.html){:target='\_blank'}：css3 属性选择器中的大 boss，使得选择器功能分分钟提升。

  - `E[att^="val"]`，选择器匹配元素 E，且 E 元素定义了属性 att,att 的属性值是**以 val 开头**的任何字符串。
  - `E[att$="val"]`，选择器匹配元素 E，且 E 元素定义了属性 att，att 的属性值**以 val 结尾**的任何字符串。
  - `E[att*="val"]`，选择器匹配元素 E，且元素定义了属性 att，att 属性值**任意位置包含**了"val"。

- Mac 查看端口号是否被占用及释放

  - 查看使用端口进程：`lsof -i: 端口号`
  - 释放进程：`kill 你的PID`
  - 再次执行第一步，是否无进程占用：`lsof -i: 端口号`

- [Support for password authentication was removed. Please use a personal access token instead [duplicate]](https://stackoverflow.com/questions/68775869/support-for-password-authentication-was-removed-please-use-a-personal-access-to){:target='\_blank'}

  > 在 GitHub 创建个人 Access Token：从你的 Github 帐户，转到 `Settings => Developer Settings => Personal Access Token => Generate New Token (Give your password) => Fill up the form => 单击 Generate token => Copy the generated Token`，它将类似于 `ghp_sFhFsSHhTzMDreGRLjmks4Tzuzgthdvfsrta`

  > 对于 MAC 操作系统，单击菜单栏右侧的 Spotlight 图标（放大镜）。`键入 Keychain access 然后按 Enter 键启动应用程序【钥匙串访问】 => 在 Keychain Access 中，搜索 github.com=> 查找 Internet 密码条目 github.com=> 相应地编辑或删除该条目 => 大功告成`

  > 对于 Windows 操作系统，从控制面板转到 `Credential Manager => Windows Credentials=> 查找git:https://github.com =>编辑=> 密码替换为你的 Github 个人 Access Taken => 完成`

- css 非阻塞的一种解决方案：当一个媒体查询的结果值计算出来是 false 的时候，浏览器仍然会下载样式表，但是不会在渲染页面之前等待样式表的资源可用。样式表一下载好，media 属性就必须被设置一个可用的值，以便样式规则能被应用到 html 文档中。onload 事件就可以用来将 media 属性切换到 all：
  - [加载 CSS 时不影响页面渲染](https://www.oschina.net/translate/loading-css-without-blocking-render){:target='\_blank'}
  - [Loading CSS without blocking render](https://keithclark.co.uk/articles/loading-css-without-blocking-render/){:target='\_blank'}

```html
<!-- 方法1 -->
<link
  rel="stylesheet"
  href="css.css"
  media="none"
  onload="if(media!='all')media='all'"
/>
```

```html
<!-- 方法2 -->
<link
  rel="preload"
  as="style"
  href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
/>
<script>
  {
    `
          let link = document.createElement('link')
          link.setAttribute('rel', 'stylesheet')
          link.setAttribute('href', 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap')
          document.head.appendChild(link)
        `;
  }
</script>
```

- [touch 事件中的 touches、targetTouches 和 changedTouches 详解](https://www.cnblogs.com/mengff/p/6005516.html){:target='\_blank'}
  - 触点坐标选取：
    - `touchstart`和`touchmove`使用: `e.targetTouches[0].pageX`；
    - `touchend`使用: `e.changedTouches[0].pageX`。

```ts
let startX: number;
let endX: number;

const onTouchStart = (e: any) => {
  startX = e.targetTouches[0].pageX;
};

const onTouchEnd = (e: any) => {
  endX = e.changedTouches[0].pageX;
  if (endX && endX && Math.abs(endX - startX) > 50) {
    if (endX - startX > 0) {
      swiperInstance?.slidePrev();
    } else {
      swiperInstance?.slideNext();
    }
  }
};
```

```ts
// 滑动事件 Hooks
export const useTouchEvent = () => {
  const [startX, setStartX] = useState<number>(0);
  const [swiperInstance, setSwiperInstance] = useState<any>();
  const onTouchStart = (e: any) => {
    setStartX(e.targetTouches[0].pageX);
  };
  const onTouchEnd = (e: any) => {
    // 执行滑动逻辑
    const endX = e.changedTouches[0].pageX;
    if (endX && endX && Math.abs(endX - startX) > 50) {
      if (endX - startX > 0) {
        swiperInstance?.slidePrev();
      } else {
        swiperInstance?.slideNext();
      }
    }
  };
  return [onTouchStart, onTouchEnd, setSwiperInstance];
};
```

### Exploration and Discovery

#### 前端装逼技巧

#### CSS

- [css-tricks](https://css-tricks.com/){:target='\_blank'}

#### JavaScript Visualized Series' Articles

- [JavaScript Visualized Series' Articles](https://dev.to/lydiahallie/series/3341){:target='\_blank'} &#124; [译文](https://segmentfault.com/u/savokiss/articles){:target='\_blank'} &#124; [译文](https://juejin.cn/post/6844904050165563406){:target='\_blank'}

#### React Hooks

<!--
计划：
前端装逼技巧（四）
热门 JavaScript 引擎横评
性能优化（一二三）
技术人的芯片通识课
-->
