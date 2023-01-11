---
layout: post
title: 知识与经验，探索和发现（贰）
categories: 知识与经验，探索和发现
description: 知识与经验，探索和发现
keywords: Knowledge and Experience、Exploration and Discovery
---

<!-- 二十四个节气:立春、雨水、惊蛰、春分、清明、谷雨、立夏、小满、芒种、夏至、小暑、大暑、立秋、处暑、白露、秋分、寒露、霜降、立冬、小雪、大雪、冬至、小寒、大寒。 -->

## 谷雨

> 截止 2022.05.21【计划】

### Knowledge and Experience

- `border-image`
  - [border-image](https://css-tricks.com/almanac/properties/b/border-image/){:target='\_blank'}
  - [CSS3 border-image 彻底明白](https://segmentfault.com/a/1190000010969367){:target='\_blank'}
  - [前端 web 的点 9 图效果实现](https://www.jianshu.com/p/fee55621cd3b){:target='\_blank'}
- IntersectionObserver API
  - [IntersectionObserver API 使用教程](https://www.ruanyifeng.com/blog/2016/11/intersectionobserver_api.html){:target='\_blank'}
  - [IntersectionObserver’s Coming into View](https://developers.google.com/web/updates/2016/04/intersectionobserver){:target='\_blank'}
- [git 修改分支名称](https://www.cnblogs.com/xyarch/p/15683279.html){:target='\_blank'}
- [react+antd form 警告 Warning: [antd: Form.Item] `children` is array of render props cannot have `name`.](https://blog.csdn.net/feinifi/article/details/107337618){:target='\_blank'} &#124; [官方说明：复杂一点的控件](https://ant.design/components/form-cn/#components-form-demo-complex-form-control){:target='\_blank'}
- [Warning: ant Checkbox: value is not a valid prop, do you mean checked?](https://stackoverflow.com/questions/66631801/warning-ant-checkbox-value-is-not-a-valid-prop-do-you-mean-checked){:target='\_blank'}
  - Checkbox，`form.setFieldsValue`后控制台报错；
  - Use [valuePropName](https://ant.design/components/form-cn/#API){:target='\_blank'} for Checkbox form item: `<Form.Item label="landscape" name="landscape" valuePropName="checked"><Checkbox /></Form.Item>`
- `git revert -n`：[参考](https://git-scm.com/docs/git-revert){:target='\_blank'}

  - `git revert <commit-id>`：撤销某个提交；
  - `git revert -n|--no-commit <commit-id>`：撤销某个提交，但执行命令后不进入编辑界面，也就是**不会自动提交文件**，需要手动提交，这与上一点的差别就是撤销和提交分开了，**适用于需要在撤销的基础上再进行更改的场景**。

- echo `nvm ls`：显示命令执行结果
- [nvm 笔记: node 版本管理工具](https://d.cellmean.com/p/59067c621850){:target='\_blank'}

  ```sh
  lts/dubnium -> v10.24.1 (-> N/A)
  lts/erbium -> v12.22.9 (-> N/A)
  lts/fermium -> v14.18.3 (-> N/A)
  lts/gallium -> v16.13.2
  ```

- [antd Select onChange 获取除了 value 其他的值](https://blog.csdn.net/weixin_41718879/article/details/120343083){:target='\_blank'}：给 option 标签添加“data”属性；
- 动态创建 ref：
  - [如何在 React Native 中动态创建多个 Ref](https://cloud.tencent.com/developer/ask/sof/265314){:target='\_blank'}
  - [Refs and the DOM](https://zh-hans.reactjs.org/docs/refs-and-the-dom.html#gatsby-focus-wrapper){:target='\_blank'}

```js
const CustomComponent = (props, ref) => {
  const [ArrConfig, setArrConfig] = useState([]);
  const MaxKey = useRef(-1);
  const refs = useRef({}); // using useRef because we want to persist the values when component re-renders

  useImperativeHandle(ref, () => ({
    refs,
  }));

  // 用户动态创建
  const add = () => {
    // 随便模拟一下，key值一版是自增的
    setArrConfig([...ArrConfig, { key: (MaxKey.current += 1) }]);
  };

  const setRefs = (ele: HTMLElement, key: number) => {
    if (ele) {
      // 当map开始遍历后就会调用，因为ref回调函数是以内联函数的方式定义的，所以更新过程中会执行两次。一次参数是null，一次是dom元素，所以需要if判断
      refs.current[`form_${key}`] = ele;
    }
  };

  return (
    <div className='card'>
      {ArrConfig.map(({ key }) => (
        <DynamicRenderItemForm
          key={key}
          ref={(ele: HTMLElement) => setRefs(ele, key)}
        />
      ))}
    </div>
  );
};

export default forwardRef(CustomComponent);
```

- 表单禁止输入空格

```js
rules: [
  {
    pattern: /^[^\s]*$/,
    message: 'No spaces',
  },
];
```

- Table 表格默认某列降序排序时（没排序时就按照这列降序），点击没反应（因为降序的下一个值是 undefined，被默认降序覆盖了），可以改变 sortDirections 的顺序为: ['descend', 'ascend']即可；

- 如果远程主机删除了某个分支，默认情况下，`git pull` 不会在拉取远程分支的时候，删除对应的本地分支。这是为了防止，由于其他人操作了远程主机，导致`git pull`不知不觉删除了本地分支。加上参数 `-p` 就会在本地删除远程已经删除的分支

  ```sh
    git pull -p
    # 等同于下面的命令
    git fetch --prune origin
    git fetch -p
  ```

### Exploration and Discovery

#### 经济学

- [解读你身边的经济学](https://kaiwu.lagou.com/course/courseInfo.htm?courseId=987){:target='\_blank'}

#### MySQL 实战

- [MySQL 实战 45 讲](https://time.geekbang.org/column/intro/100020801?tab=intro){:target='\_blank'}
