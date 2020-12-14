---
layout: post
title: 纯前端实现页面检测更新提示
categories: JavaScript
description: 纯前端实现页面检测更新提示
keywords: JS, 前端, JavaScript
---

&emsp;&emsp;开发过程中，经常遇到页面更新、版本发布时，需要告诉使用人员刷新页面的情况，甚至有些运营、测试人员觉得切换一下菜单再切回去就是更新了web页面资源，有的分不清普通刷新和强刷的区别，所以实现了一个页面更新检测功能，页面更新了自动提示使用人员刷新页面。

&emsp;&emsp;基本思路为：使用 webpack 配置编译时在 js 文件名里添加 hash，然后使用js向`${window.location.origin}/index.html`发送请求，解析出html文件里引入的js文件路径，对比当前 js 的 hash 与新版本的 hash 是否一致，不一致则提示用户更新版本。

```js
// uploadUtils.jsx
import React from 'react';
import axios from 'axios';
import { notification, Button } from 'antd';

// 弹窗是否已展示（可以改用闭包、单例模式等）
let uploadNotificationShow = false;

const close = () => {
  uploadNotificationShow = false;
};

const onRefresh = (new_hash) => {
  close();
  // 更新localStorage版本号信息
  window.localStorage.setItem('XXXSystemFrontVesion', new_hash);
  // 刷新页面
  window.location.reload(true);
};

const openNotification = (new_hash) => {
  uploadNotificationShow = true;
  const btn = (
    <Button type='primary' size='small' onClick={() => onRefresh(new_hash)}>
      确认更新
    </Button>
  );
  notification.open({
    message: '版本更新提示',
    description: '检测到系统当前版本已更新，请刷新后使用。',
    btn,
    // 不自动关闭
    duration: 0,
    onClose: close,
  });
};

// 获取hash
export const getHash = () => {
  // 如果提示弹窗没有展示
  if (!uploadNotificationShow) {
    // 在 js 中请求首页地址，这样不会刷新界面，也不会跨域
    axios
      .get(`${window.location.origin}/index.html?time=${new Date().getTime()}`)
      .then((res) => {
        // 匹配index.html文件中引入的js文件是否变化（具体正则，视打包时的设置及文件路径而定）
        let new_hash = res.data && res.data.match(/\/static\/js\/main.(.*).js/);
        // console.log(res, new_hash);
        new_hash = new_hash ? new_hash[1] : null;
        // 查看本地版本
        let old_hash = localStorage.getItem('XXXSystemFrontVesion');
        if (!old_hash) {
          // 如果本地没有，则存储版本信息
          onRefresh(new_hash);
        } else if (new_hash && new_hash != old_hash) {
          // 本地已有版本信息，但是和新版不同：版本更新，弹出提示
          openNotification(new_hash);
        }
      });
  }
};
```

使用：

```js
import { getHash } from '../uploadUtils';

let timer = null;
componentDidMount() {
    getHash();
    timer = setInterval(() => {
      getHash();
      // 10分钟检测一次
    }, 600000)
  }

  componentWillUnmount () {
      // 页面卸载时清除
    clearInterval(timer);
  }
```
