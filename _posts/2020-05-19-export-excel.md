---
layout: post
title: 纯前端生成和解析Excel
categories: JavaScript
description: 纯前端生成和解析Excel
keywords: Excel
---

&emsp;&emsp;纯前端生成和解析Excel。

## SheetJS js-xlsx 方案

&emsp;&emsp;数据是以行进行组织的，需要定义每一行的数据，支持列的合并等复杂较需求。

> > > [如何使用 JavaScript 实现纯前端读取和导出 excel 文件](https://www.cnblogs.com/liuxianan/p/js-excel.html){:target='\_blank'}  
> > > [sheetjs](https://github.com/SheetJS/sheetjs){:target='\_blank'}

```JavaScript
import XLSX from 'xlsx';

// csv转sheet对象
function csv2sheet(csv) {
    var sheet = {}; // 将要生成的sheet
    csv = csv.split('\n');
    csv.forEach(function (row, i) {
        row = row.split(',');
        if (i == 0) sheet['!ref'] = 'A1:' + String.fromCharCode(65 + row.length - 1) + (csv.length - 1);
        row.forEach(function (col, j) {
            sheet[String.fromCharCode(65 + j) + (i + 1)] = { v: col };
        });
    });
    return sheet;
}

// 将一个sheet转成最终的excel文件的blob对象，然后利用URL.createObjectURL下载
function sheet2blob(sheet, sheetName) {
  sheetName = sheetName || 'sheet1';
  var workbook = {
    SheetNames: [sheetName],
    Sheets: {},
  };
  workbook.Sheets[sheetName] = sheet;
  // 生成excel的配置项
  var wopts = {
    bookType: 'xlsx', // 要生成的文件类型
    bookSST: false, // 是否生成Shared String Table，官方解释是，如果开启生成速度会下降，但在低版本IOS设备上有更好的兼容性
    type: 'binary',
  };
  var wbout = XLSX.write(workbook, wopts);
  var blob = new Blob([s2ab(wbout)], { type: 'application/octet-stream' });
  // 字符串转ArrayBuffer
  function s2ab(s) {
    var buf = new ArrayBuffer(s.length);
    var view = new Uint8Array(buf);
    for (var i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xff;
    return buf;
  }
  return blob;
}

/**
 * 通用的打开下载对话框方法，没有测试过具体兼容性
 * @param url 下载地址，也可以是一个blob对象，必选
 * @param saveName 保存文件名，可选
 */
function openDownloadDialog(url, saveName) {
  if (typeof url == 'object' && url instanceof Blob) {
    url = URL.createObjectURL(url); // 创建blob地址
  }
  var aLink = document.createElement('a');
  aLink.href = url;
  aLink.download = saveName || ''; // HTML5新增的属性，指定保存文件名，可以不要后缀，注意，file:///模式下不会生效
  var event;
  if (window.MouseEvent) event = new MouseEvent('click');
  else {
    event = document.createEvent('MouseEvents');
    event.initMouseEvent(
      'click',
      true,
      false,
      window,
      0,
      0,
      0,
      0,
      0,
      false,
      false,
      false,
      false,
      0,
      null,
    );
  }
  aLink.dispatchEvent(event);
}

// 传入csv，执行后就会弹出下载框
const exportExcel1 = (csv) => {
  var sheet = csv2sheet(csv);
  var blob = sheet2blob(sheet);
  openDownloadDialog(blob, '导出.xlsx')
};

// 利用工具，简化csv2sheet的操作
const exportExcel2 = () => {
  var aoa = [
      ['主要信息', null, null, '其它信息'], // 特别注意合并的地方后面预留2个null
      ['姓名', '性别', '年龄', '注册时间'],
      ['张三', '男', 18, new Date()],
      ['李四', '女', 22, new Date()]
  ];
  var sheet = XLSX.utils.aoa_to_sheet(aoa);
  sheet['!merges'] = [
    // 设置A1-C1的单元格合并
      {s: {r: 0, c: 0}, e: {r: 0, c: 2}}
  ];
  openDownloadDialog(sheet2blob(sheet), '导出.xlsx');
};

// 接收自定义参数，支持较复杂excel导出
const exportExcel3 = (data, merges, cols, rows, title) => {
  var sheet = XLSX.utils.aoa_to_sheet(data);
  // 参考exportExcel2的 sheet['!merges']写法
  sheet['!merges'] = merges || [];
  sheet['!rows'] = rows;
  sheet['!cols'] = cols;
  openDownloadDialog(sheet2blob(sheet), `${title || '导出'}.xlsx`);
};

export { exportExcel1, exportExcel2, exportExcel3 };

```

exportExcel3 参考样例：  
![导出excel]({{site.url}}{{site.baseurl}}/images/posts/javascript/excel.png?raw=true)

## [FileSaver.js](https://github.com/eligrey/FileSaver.js){:target='\_blank'} 方案

- [FileSaver.js 介绍](https://www.cnblogs.com/jackyWHJ/articles/10435851.html){:target='\_blank'}：FileSaver.js 是在客户端保存文件的解决方案，非常适合需要生成文件，或者保存不应该发送到外部服务器的敏感信息的 web App。
- [FileSaver.js demo](https://eligrey.com/demos/FileSaver.js/){:target='\_blank'}
- 保存 excel 文件示例代码：

  ```js
  // utils.j
  import FileSaver from "file-saver";
  export const exportCsv = (columns, keys, data, title = "导出") => {
    let exportStr = "\uFEFF";
    columns = columns.join(",");
    exportStr += columns + "\n";
    _.each(data, (item) => {
      let dataStr = "";
      let itemStr = "";
      _.each(keys, (key) => {
        if (typeof key === "object") {
          for (let index in key) {
            let callback = key[index];
            itemStr = callback(item[index], item);
          }
        } else {
          itemStr = item[key];
        }
        dataStr += `"${itemStr || ""}",`;
      });
      dataStr = dataStr.substring(0, dataStr.length - 1) + "\n";
      exportStr += dataStr;
    });

    let blob = new Blob([exportStr], {
      type: "text/csv;charset=UTF-8",
    });
    FileSaver.saveAs(blob, title + ".csv");
  };
  ```

  ```js
  // index.js
  import { exportCsv } from "./utils.js";
  // 导出函数
  const doExport = () => {
    // columns配置生成excel的列（columns为antD table的columns）
    let keys = _.map(columns, "dataIndex");
    let column = _.map(columns, "title");
    let dataList = list.map((item) => {
      // 可以做一些数据处理
      item.requestTime = moment
        .unix(item.requestTime)
        .format("YYYY-MM-DD HH:mm:ss");
      return item;
    });
    exportCsv(column, keys, dataList, "导出列表");
  };
  ```

## 纯前端解析excel文件

&emsp;&emsp;HTML：
```html
<input @change="getUploadFile" type="file">
```

&emsp;&emsp;JS：
```js
import XLSX from 'xlsx';

getUploadFile (e) {
  //拿到所导入文件的名字
  let fileName = e.target.files[0]
  //定义reader，存放文件读取方法
  let reader = new FileReader()
  //启动函数
  reader.readAsBinaryString(fileName)
  //onload在文件被读取时自动触发
  reader.onload = function(e) {
      //workbook存放excel的所有基本信息
      let workbook = XLSX.read(e.target.result, {type: 'binary'})
      //定义sheetList中存放excel表格的sheet表，就是最下方的tab
      let sheetList = workbook.SheetNames
      //存放json数组格式的表格数据
      let resultJson = []
      //存放字符串数组格式的表格数据
      let resultFormulae = []
      sheetList.forEach(function(y) {
          let worksheet = workbook.Sheets[y]
          let json = XLSX.utils.sheet_to_json(workbook.Sheets[y])
          let formulae = XLSX.utils.sheet_to_formulae(workbook.Sheets[y])
          if(json.length > 0){
              //具体如何处理看项目需求，我的项目其实只有一个sheet，在这里写成循环避免大家误会
              //数据处理与存放
              resultJson.push(json)
              resultFormulae.push(formulae)
          }

      });
      //因为我的表格只有一列，因此我取出resultJson第一组数据的key作为键去遍历取出手机号码
      let tableHeader = Object.keys(result[0])[0]
      let importInfo = result.map((item) => {
          return item[tableHeader]
      })

  };
}
```

- [纯前端解析excel文件](https://blog.csdn.net/for_weber/article/details/81903875){:target='_blank'}
