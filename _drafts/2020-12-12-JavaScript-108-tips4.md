---
layout: post
title: 前端装逼技巧 108 式（四）—— 前端工具人
categories: JavaScript
description: 前端装逼技巧 108 式，助你更懂JS原理
keywords: JS, 前端, JavaScript
---

## 第五十五式：前端如何使用脚本完成项目的便捷部署

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

## 第五十六式：纯前端代码生成 Excel

## 第五十八式：yeoman generator与自定义脚手架

- [前端工程化 通过yeoman-generator将文件加载到本地](https://blog.csdn.net/zemprogram/article/details/104125933){:target='_blank'}
## 第五十九式：plop

- [小型前端脚手架工具plop的简单使用](https://blog.csdn.net/zemprogram/article/details/104146833){:target='_blank'}


[Bash 脚本教程 - 阮一峰](https://wangdoc.com/bash/index.html){:target='_blank'}
[scp 命令](https://wangdoc.com/ssh/scp.html){:target='_blank'}


