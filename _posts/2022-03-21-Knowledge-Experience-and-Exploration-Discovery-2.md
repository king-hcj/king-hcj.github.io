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

### Exploration and Discovery

#### 经济学

- [解读你身边的经济学](https://kaiwu.lagou.com/course/courseInfo.htm?courseId=987){:target='\_blank'}

#### MySQL 实战

- [MySQL 实战 45 讲](https://time.geekbang.org/column/intro/100020801?tab=intro){:target='\_blank'}
