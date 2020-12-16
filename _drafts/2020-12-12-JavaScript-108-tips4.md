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

## 第五十六式：根据配置自动生成文件

- 编写自动生成文件的脚本：

```js
// auto.js
const fs = require('fs');
const path = require('path');
const config = require('./apiConfig');
// config格式：
// [
//     {
//         filename: 'querySupplierInfoForPage.js',
//         url: '/supplier/rest/v1/supplier/querySupplierInfoForPage',
//         comment: '分页查询供应商档案-主信息',
//     },
// ]

// 验证数量是否一致
// 也可以再次做一些其他的验证
function verify() {
    console.log(config.length, fs.readdirSync(path.join(__dirname, '/server/api')).length);
}

function writeFileAuto(filePath, item) {
    fs.writeFileSync(filePath,
        `/**
* ${item.comment}
*/
const { Controller, Joi } = require('ukoa');

module.exports = class ${item.filename.split('.')[0]} extends Controller {
    init() {
        this.schema = {
            Params: Joi.object().default({}).notes('参数'),
            Action: Joi.string().required().notes('Action')
        };
    }

    // 执行函数体
    async main() {
        const { http_supply_chain } = this.ctx.galaxy;
        const [data] = await http_supply_chain("${item.url}", this.params.Params, { throw: true });
        return this.ok = data.obj;
    }
};
`)
}

function exec() {
    config.forEach(item => {
        var filePath = path.join(__dirname, '/server/api/', item.filename);
        fs.exists(filePath, function (exists) {
            if (exists) {
                console.log(`文件${item.filename}已存在`)
            } else {
                console.log(`创建文件：${item.filename}`)
                writeFileAuto(filePath, item)
            }
        })
    })
}

exec();
```

- 执行脚本，生成文件：`node auto.js`

```js
// querySupplierInfoForPage.js
/**
* 分页查询供应商档案-主信息
*/
const { Controller, Joi } = require('ukoa');

module.exports = class querySupplierInfoForPage extends Controller {
    init() {
        this.schema = {
            Params: Joi.object().default({}).notes('参数'),
            Action: Joi.string().required().notes('Action')
        };
    }

    // 执行函数体
    async main() {
        const { http_supply_chain } = this.ctx.galaxy;
        const [data] = await http_supply_chain("/supplier/rest/v1/supplier/querySupplierInfoForPage", this.params.Params, { throw: true });
        return this.ok = data.obj;
    }
};
```

## 第五十七式：如何纯前端实现页面检测更新并提示？

- 场景：停留在当前页面

- [纯前端实现页面检测更新提示](https://king-hcj.github.io/2020/12/11/upload-page/){:target='_blank'}
- [前端检测版本更新](https://blog.csdn.net/sansan_7957/article/details/83626045){:target='_blank'}
- [纯前端检测版本更新](https://blog.csdn.net/y814696634/article/details/108725374){:target='_blank'}

## 第五十八式：yeoman generator与自定义脚手架

- [前端工程化 通过yeoman-generator将文件加载到本地](https://blog.csdn.net/zemprogram/article/details/104125933){:target='_blank'}
## 第五十九式：plop

- [小型前端脚手架工具plop的简单使用](https://blog.csdn.net/zemprogram/article/details/104146833){:target='_blank'}


[Bash 脚本教程 - 阮一峰](https://wangdoc.com/bash/index.html){:target='_blank'}
[scp 命令](https://wangdoc.com/ssh/scp.html){:target='_blank'}


