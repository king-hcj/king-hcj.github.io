---
layout: post
title: Elasticsearch实践与总结
categories: Elasticsearch
description: Elasticsearch实践与总结。
keywords: Elasticsearch
---

&emsp;&emsp;Elasticsearch实践与总结。

## 什么是Elasticsearch？

- [终于有人把Elasticsearch原理讲透了！](https://zhuanlan.zhihu.com/p/62892586){:target='_blank'}

## 常用操作

- 查看mapping

  ```s
    GET contract_info_suppliercontractinfo/_mapping
  ```

- 查询所有文档

  ```s
    POST contract_info_basecontractinfo/_search
    {
      "query": {
        "match_all": {}
      }
    }
  ```

## Elasticsearch列表搜索公共方法封装

&emsp;&emsp;由于后端有些事情不愿去处理，查询时需要前端拼接ES查询语句，为了减少每次拼接的繁琐程序，自己封装一个列表页查询的方法，接收普通的form表单输入数据，输出ES查询语句，此方法会根据业务需求逐步完善。

### 通过kibana分析查询语句

```js
// 查询示例参考
POST contract_info_suppliercontractinfo/_search
{
  "query": {
    "bool": {
      "must": [
        {
          "term": {
            "suppierContractName.keyword": "合同名称-00005"
          }
        },
        {
          "match_phrase": {
            "suppierContractType": "采购"
          }
        }
      ],
      // range可以像term一样写到must里面
      "filter": {
          "range": {
            "supplierContractStartDate": {
              "gt": "2020-10-02",
              "lte": "2020-10-04"
            }
          }
        }
    }
  },
  "from": 0,
  "size": 100
}
```

### 公共查询方法（参数拼接）

```ts
/**
 * 几种场景
 * 1、模糊查询（字段中包含）
 * 2、精确查询（字段相等）
 * 3、区间查询
 */

// fields为输入，数据结构如下
const fields = {
  contractAmountLow: "",
  contractAmountUp: "",
  ourContractingParty: "优刻得",
  suppierContractApplyGroup: "",
  suppierContractApplyUser: "",
  suppierContractCode: "spc-00007",
  suppierContractName: "",
  suppierContractSignDate: ["2020-01", "2020-11"],
  suppierContractTag: undefined,
  suppierContractType: "采购合同",
  suppierCurrency: undefined,
  suppierIsRaise: undefined,
  suppierName: "",
  suppierProjectName: "",
  suppierResourceType: undefined,
  supplierSourceChannel: undefined
}
// 需要精准查询的字段（这里对应的是term keyword的场景）
const exactQuery: string[] = [];
// 由于中文每个字都是一个分词，所以模糊查询需要使用match_phrase，否则可以同exactQuery使用term
// const matchPhrase: string[] =  ['suppierContractType', 'suppierIsRaise'];
// 需要进行区间查询的字段
const rangeQuery: string[] = [
  'suppierContractAmount',
  'suppierContractSignDate',
];
const conditions: object[] = [];
for (const key in fields) {
  const current = fields[key];
  // 有值时才进行语句拼接
  if (
    ([0, false].includes(current) || current) &&
    Object.prototype.hasOwnProperty.call(fields, key)
  ) {
    if (rangeQuery.includes(key)) {
      // 区间查询
      conditions.push({
        range: {
          [key]: {
            gte: current[0],
            lte: current[1],
          },
        },
      });
    } else if (exactQuery.includes(key)) {
      // 精准keyword查询
      const searchKey: string = `${key}.keyword`;
      if (Array.isArray(current)) {
        conditions.push({
          terms: { [searchKey]: current },
        });
      } else {
        // term精确查询，match模糊查询，会进行分词
        conditions.push({
          term: { [searchKey]: current },
        });
      }
    } else {
      // 模糊查询
      conditions.push({
        match_phrase: { [key]: current },
      });
    }
  }
}
const searchParams: object = {
  query: {
    bool: {
      must: conditions
      // 当出现金额、数量等字段以字符串形式存储时，直接用区间查询会出现类似1<2000<5的情况，此时可以通过下面正则的方式【下面代码会过滤出must结果中suppierContractAmount大于299的部分】
      //filter: {
      //  regexp: {
      //    "suppierContractAmount.keyword": getRegExpLowStrNumber(299)
      //  }
      //}
    },
  },
  sort: [
    {
      // asc和desc，排序字段可自定义
      'rowNo.keyword': {
        order: 'desc',
      },
    },
  ],
  // 声明需要的字段（也可以不声明，默认为[]，返回所有字段）
  _source:["suppierContractCode", "suppierContractAmount", "ourContractingParty"],
  // 或者使用includes和excludes
  // _source:{
  //       "includes":["suppierContractCode", "suppierContractAmount", "ourContractingParty"],
  //       "excludes":["supplierSourceChannel"]
  //   },
  // 查询范围可自定义
  from: 0,
  size: 100,
};
console.log('-----searchParams-----', searchParams);

// 获取大于该字符串类型数据的正则
const getRegExpLowStrNumber = (num) => {
  const strBaseNumber = Number(num).toString();
  const arrBaseNumber = strBaseNumber.split('');
  const len = strBaseNumber.length;
  // 生成正则：数位更多或者从高位开始比数值更大
  // 丢给ES进行查询时使用，貌似不可使用\d、开头、结尾匹配等字符
  let strRegExp = `[0-9]{${len+1}}`;
  arrBaseNumber.map((item, index) => {
    strRegExp += `|${strBaseNumber.substring(index,-1) || ''}[${+item + 1}-9][0-9]{${len - index - 1}}`
  });
  return strRegExp;
}
```

### 生成示例

```js
// 公共方法生成的查询语句
POST contract_info_suppliercontractinfo/_search
{
  "query": {
    "bool": {
      "must": [
        {
          "match_phrase": {
            "suppierContractCode": "spc-00007"
          }
        },
        {
          "match_phrase": {
            "ourContractingParty": "优刻得"
          }
        },
        {
          "match_phrase": {
            "suppierContractType": "采购合同"
          }
        },
        {
          "range": {
            "suppierContractSignDate": {
              "gte": "2020-01",
              "lte": "2020-11"
            }
          }
        }
      ]
    }
  },
  "from": 0,
  "size": 100,
  "sort": [
    {
      "rowNo.keyword": {
        "order": "desc"
      }
    }
  ]
}
```

## Es的模糊查询，match，match_phrase、wildcard的区别

- match查询：会先对搜索词进行分词，比如“四川和成都”，会分成“四川”、“成都”。含有相关内容的字段，都会被检索出来。（不一定同时含有“四川”和“成都”）

  ```js
  POST supplychain_sku_info_hardware/_search
  {
    "query": {
      "match": {
        "manufacture": "四川和成都"
      }
    }
  }
  ```

- wildcard查询：是使用通配符进行查询，其中`?`代表任意一个字符，`*`代表任意的一个或多个字符。
   ```js
   // 法一
    POST supplychain_sku_info_hardware/_search
    {
      "query": {
        "query_string": {
          "query": "*光*",
          "analyze_wildcard": false,
          "fields": [
            "manufacture",
            "spec",
            "model"
          ]
        }
      }
    }
    // 法二
    POST supplychain_sku_info_hardware/_search
    {
      "query": {
        "wildcard": {
          "manufacture": "光*"
        }
      }
    }
   ```

- match_phrase查询：match_phrase与slop一起用，能保证分词间的邻近关系，slop参数告诉match_phrase查询词条能够相隔多远时仍然将文档视为匹配，默认是0。为0时 必须相邻才能被检索出来。

  ```js
  POST supplychain_sku_info_hardware/_search
  {
    "query": {
      "match_phrase": {
        "model": {
          "query": "水色",
          "slop": 1 // 为1，所以可以查出：水蓝色
        }
      }
    }
  }
  ```

> 学习参考：[【ES】match_phrase、match、prefix、wildcard比较](https://hao5743.github.io/2019/07/11/2019-07-16/){:target='_blank'}

## 可供参考的文章汇总

- [Elasticsearch 搜索的高级功能学习](https://zhuanlan.zhihu.com/p/104631505){:target='_blank'}
- [十九种Elasticsearch字符串搜索方式终极介绍](https://zhuanlan.zhihu.com/p/137575167){:target='_blank'}
- [知乎-Elasticsearch](https://www.zhihu.com/search?q=elasticsearch&type=content){:target='_blank'}
- [Elasticsearch 基本查询（Query查询）](https://blog.csdn.net/zx711166/article/details/81811548){:target='_blank'}
