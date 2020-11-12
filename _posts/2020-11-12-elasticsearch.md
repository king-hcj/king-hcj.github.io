---
layout: post
title: Elasticsearch实践总结
categories: Elasticsearch
description: Elasticsearch实践总结。
keywords: Elasticsearch
---

&emsp;&emsp;Elasticsearch实践总结。

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
      // range可以像term一样写到must里面（金额等字段，以字符串形式存储该如何处理区间查询？）
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

### 公共查询方法

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
// 精准查询（这里对应的时term keyword的场景）
const exactQuery: string[] = [];
// 由于中文每个字都是一个分词，所以模糊查询需要使用match_phrase，否则可以同exactQuery使用term
// const matchPhrase: string[] =  ['suppierContractType', 'suppierIsRaise'];
// 区间查询的
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
      must: conditions,
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
  // 声明需要的字段
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
```

### 示例

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

## 可供参考的文章汇总

- [Elasticsearch 搜索的高级功能学习](https://zhuanlan.zhihu.com/p/104631505){:target='_blank'}
- [十九种Elasticsearch字符串搜索方式终极介绍](https://zhuanlan.zhihu.com/p/137575167){:target='_blank'}
- [终于有人把Elasticsearch原理讲透了！](https://zhuanlan.zhihu.com/p/62892586){:target='_blank'}
- [知乎-Elasticsearch](https://www.zhihu.com/search?q=elasticsearch&type=content){:target='_blank'}
