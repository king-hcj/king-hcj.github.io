---
layout: post
title:  关于未来互联网的思考与趋势关注
categories: Comprehensive
description: 关于未来前端趋势、互联网的思考
keywords: 前端，web3.0
---

&emsp;&emsp;从事前端一年有余，关于前端趋势、互联网的未来等，有一些自己的判断与思考。

&emsp;&emsp;因为是转行而来，从最初面对需求的茫然不知所措到后来逐渐能胜任前端开发、理解前端思想原理，之后难免会对前端的未来和个人的未来进行一些思考。
- 如何在入行前端的各个阶段平稳过渡？各个阶段的认知不一样，唯有在这个阶段努力提升，在这个阶段变的更好，你才能领会下一个阶段应该是什么样的，需要一些什么。
   - 很多时候，你会真切的感受到知道的越多，不知道的越多；要如何判断你认为重要的东西是否就是前端重要的东西。
   - 比如我学浏览器工作原理，学习JavaScript核心原理，我知道这是前端真真切切需要的；
   - 我学编译原理，复习计算机组成原理，我知道它和编程息息相关，但它对前端有多少真切的影响呢？说的俗一点，前端、工作，大多时候我们都是在趋利的，那么我们又该如何平衡趋利和基础深度的关系？
- 你觉得未来的互联网、未来的前端是什么样的？
- 面试反思：
   - 对应岗位的理想人选是什么样的，需要具备哪些能力与特质？
   - 此岗位前任拥有什么样的特质，又有哪些不足？
   - 到岗后前三个月都有哪些要求，希望继任者能做到些什么?
   - 能否给个简单的评价或建议？

## 展示立体化(虚拟现实，装修，5G，游戏)
&emsp;&emsp;5G带来更多可能；基于D3，threejs或类似框架技术的立体化。

## 功能智能化(人工智能)
&emsp;&emsp;人工智能，大数据等。

## 前沿技术热点
### GraphQL
- GraphQL是Facebook2015年开源的数据查询规范，最大的优势是查询图状数据
- A query language for your API
   - Describe your data
   - Ask for what you want
   - Get predictable results
- [GraphQL英文网站](https://graphql.org/){:target='_blank'} &#124; [GraphQL中文网站](https://graphql.org.cn/){:target='_blank'}
- 使用GraphQL的理由（RESTful Service的局限性和问题）
   - 数据冗余和请求冗余 (overfetching & underfetching)：RESTful的不足；如果使用的是REST的话，有时候你需要调用多个REST API的请求才能获取所需信息；获得的信息里可能会含有大量冗余数据；
   - 灵活而强类型的schema：GraphQL是强类型的。也就是说，我们在定义schema时，类似于使用SQL，是显式地为每一个域定义类型的；
   - 接口校验 (validation)：由于强类型的使用，我们对收到的数据进行检验的操作变得更为容易和严格，自动化的简便度和有效性也大大提高；
   - 接口变动，维护与文档
      - RESTful Application里面，一旦要改动API，不管是增删值域，改变值域范围，还是增减API数量，改变API url，都很容易变成伤筋动骨的行为；
      - GraphQL的Service，API endpoint很可能就只有一个，根本不太会有改动URL path的情况；你不必因为客户端数据需求的变更而改变你的后端；
      - 有了GraphQL的queries，我们可以非常精准地进行数据分析(Analytics)；
   - 开发效率
- 不用GraphQL的理由
   - 迁移成本
   - 牺牲Performance
   - 缺乏动态类型
   - 简单问题复杂化
   - 缓存能解决很多问题：如果选择使用GraphQL，我们就没有了那么直白的caching解决方案

&emsp;&emsp;GraphQL最大的优势，就是它能够大大提高开发者的效率，而且最大化地简化了前端的数据层的复杂性，并且使得前后端对数据的组织观点一致。只是使用时，需要考察scale, performance, tech stack, migration等等方面的要求，做合理的取舍，否则它可能不仅没能提高开发者效率，反倒制造出更多的问题。

### Serverless
&emsp;&emsp;Serverless是一种构建和管理基于微服务架构的完整流程，允许你在**服务部署级别**而不是**服务器部署级别**来管理你的应用部署。它与传统架构的不同之处在于，完全由第三方管理，由事件触发，存在于无状态（Stateless）、暂存（可能只存在于一次调用的过程中）计算容器内。构建无服务器应用程序意味着开发者可以专注在产品代码上，而无须管理和操作云端或本地的服务器或运行时。Serverless真正做到了部署应用无需涉及基础设施的建设，自动构建、部署和启动服务。概括性地讲 —— **Serverless 的内涵就是对全部底层资源和运维工作的封装，让开发者更专注于业务逻辑**。   
&emsp;&emsp;国内外的各大云厂商 Amazon、微软、Google、IBM、阿里云、腾讯云、华为云相继推出Serverless产品，Serverless也从概念、愿景逐步走向落地，在各企业、公司应用开来。   
&emsp;&emsp;Serverless由开发者实现的服务端逻辑运行在无状态的计算容器中，它由事件触发， 完全被第三方管理，其业务层面的状态则被开发者使用的数据库和存储资源所记录。Serverless涵盖了很多技术，分为两类：FaaS和BaaS。   
&emsp;&emsp;云计算经过这么多年的发展，逐渐进化到用户仅需关注业务和所需的资源。比如，通过K8S这类编排工具，用户只要关注自己的计算和需要的资源（CPU、内存等）就行了，不需要操心到机器这一层。**Serverless架构让人们不再操心运行所需的资源，只需关注自己的业务逻辑，并且为实际消耗的资源付费。**   

---

&emsp;&emsp;在行业内，目前对于 Serverless 有几种解读方法：
   - 在某些场景可以解读为一种软件系统架构方法，通常称为 Serverless 架构
   - 在另一些情况下，又可以代表一种产品形态，称为 Serverless 产品

&emsp;&emsp;在说起 Serverless 架构时，Serverless 代表的是利用 Serverless 形态的产品实现的应用架构，这种架构完全依托于云厂商或云平台提供产品完成系统的组织及构建。在这种架构中，用户无需关注支撑应用服务运行的主机，而将关注点投入在系统架构，业务开发，业务支撑运维上。   
&emsp;&emsp;而说起 Serverless 产品时，代表的是无需理解、管理服务器，按需使用，按使用付费的产品。Serverless 产品中，其实也可以包含存储、计算等多种类型的产品。而典型的计算产品，就是云函数这种形态。   
&emsp;&emsp;云函数，或者称为函数即服务 (Function as a Service)，它和后端即服务 (Backend as a Service) 一起，都可以称为 Serverless 产品。通过组合使用这些产品，开发者可以构建自身的业务 Serverless 架构。
> 参考：[看懂 Serverless，这一篇就够了](https://blog.csdn.net/cc18868876837/article/details/90672971){:target='_blank'} &#124; [Serverless 基本概念入门](https://zhuanlan.zhihu.com/p/78250791){:target='_blank'} &#124; [Serverless 的运行原理与组件架构](https://zhuanlan.zhihu.com/p/79214097){:target='_blank'}(多图，可参考) &#124; **[Serverless应用场景](https://help.aliyun.com/document_detail/65565.html){:target='_blank'}**

