---
layout: post
title: 纯前端生成Excel
categories: JavaScript
description: 纯前端生成Excel
keywords: Excel
---

&emsp;&emsp;前端生成 Excel。

## SheetJS js-xlsx 方案

&emsp;&emsp;数据是以行进行组织的，需要定义每一行的数据，支持列的合并等复杂较需求。

>>>[如何使用JavaScript实现纯前端读取和导出excel文件](https://www.cnblogs.com/liuxianan/p/js-excel.html){:target='_blank'}   
>>>[sheetjs](https://github.com/SheetJS/sheetjs){:target='_blank'}

```JavaScript
import XLSX from 'xlsx';

// // csv转sheet对象
// function csv2sheet(csv) {
//     var sheet = {}; // 将要生成的sheet
//     csv = csv.split('\n');
//     csv.forEach(function (row, i) {
//         row = row.split(',');
//         if (i == 0) sheet['!ref'] = 'A1:' + String.fromCharCode(65 + row.length - 1) + (csv.length - 1);
//         row.forEach(function (col, j) {
//             sheet[String.fromCharCode(65 + j) + (i + 1)] = { v: col };
//         });
//     });
//     return sheet;
// }

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
const exportExcel = (data, merges, cols, rows, title) => {
  // var sheet = csv2sheet(csv);
  // var blob = sheet2blob(sheet);
  // openDownloadDialog(blob, '导出.xlsx')
  // var aoa = [
  //     ['主要信息', null, null, '其它信息'], // 特别注意合并的地方后面预留2个null
  //     ['姓名', '性别', '年龄', '注册时间'],
  //     ['张三', '男', 18, new Date()],
  //     ['李四', '女', 22, new Date()]
  // ];
  // var sheet = XLSX.utils.aoa_to_sheet(aoa);
  var sheet = XLSX.utils.aoa_to_sheet(data);
  let len = data.length;
  sheet['!merges'] = merges || [];
  sheet['!rows'] = rows;
  sheet['!cols'] = cols;
  openDownloadDialog(sheet2blob(sheet), `${title || '导出'}.xlsx`);
};

export { exportExcel };

```

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
    // columns配置生成excel的列
    let keys = _.map(columns, "dataIndex");
    let column = _.map(columns, "title");
    let dataList = list.map((item) => {
      item.requestTime = moment
        .unix(item.requestTime)
        .format("YYYY-MM-DD HH:mm:ss");
      return item;
    });
    exportCsv(column, keys, dataList, "导出列表");
  };
  ```
