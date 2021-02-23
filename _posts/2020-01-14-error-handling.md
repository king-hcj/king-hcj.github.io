---
layout: post
title: 前端错误处理
categories: Comprehensive
description: 由React-dnd引发的前端错误处理
keywords: react-dnd，错误处理，前端
---
&emsp;&emsp;由react-dnd-html5-backend报错：'Cannot have two HTML5 backends at the same time.'引发的前端错误处理思考。

### 问题引入
&emsp;&emsp;当页面已有一个可拖拽组件，打开另一个时，react-dnd-html5-backend报错：'Cannot have two HTML5 backends at the same time.'
### 源码分析
```js
...
value: function setup() {
  if (this.window === undefined) {
    return;
  }
  if (this.window.__isReactDndBackendSetUp) {
    throw new Error('Cannot have two HTML5 backends at the same time.');
  }
  this.window.__isReactDndBackendSetUp = true;
  this.addEventListeners(this.window);
}
...
```
### 错误处理方法及延伸
- 可以通过window.__isReactDndBackendSetUp的全局变量判断是否已经存在一个可拖拽组件；如果是通过弹窗展示的可拖拽组件，一定要记得给弹窗设置destroyOnClose属性（关闭销毁）。
- Error Boundaries   
   &emsp;&emsp;如何使组件变成一个“Error Boundaries”，只需要在组件中定义个新的生命周期函数——componentDidCatch(error, info):
   >error: 这是一个已经被抛出的错误；info:这是一个componentStack key。这个属性有关于抛出错误的组件堆栈信息。

   ```js
   // ErrorBoundary实现
    class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }

    componentDidCatch(error, info) {
      // Display fallback UI
      this.setState({ hasError: true });
      // You can also log the error to an error reporting service
      logErrorToMyService(error, info);
    }

    render() {
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return <h1>Something went wrong.</h1>
      }
      return this.props.children;
    }
  }
   ```
   ```js
   // ErrorBoundary使用
   <ErrorBoundary>
    <MyWidget />
  </ErrorBoundary>
   ```
   >Erro Boundaries本质上也是一个组件，通过增加了新的生命周期函数componentDidCatch使其变成了一个新的组件，这个特殊组件可以捕获其子组件树中的js错误信息，输出错误信息或者在报错条件下，显示默认错误页。注意一个Error Boundaries只能捕获其子组件中的js错误，而不能捕获其组件本身的错误和非子组件中的js错误。   
   >下面我们来看哪些情况下不能通过Error Boundaries来实现catch{}错误:   
    >- 组件的内部的事件处理函数，因为Error Boundaries处理的仅仅是Render中的错误，而Hander Event并不发生在Render过程中。
    >- 异步函数中的异常，Error Boundaries不能catch，比如setTimeout或者setInterval ,requestAnimationFrame等函数中的异常。
    >- 服务器端的rendering
    >- 发生在Error Boundaries组件本身的错误
- componentDidCatch（）生命周期函数：componentDidCatch是一个新的生命周期函数，当组件有了这个生命周期函数，就成为了一个Error Boundaries。
- try/catch模块：Error Boundaries仅仅抛出了子组件的错误信息，并且不能抛出组件中的事件处理函数中的异常。（因为Error Boundaries仅仅能保证正确的render，而事件处理函数并不会发生在render过程中），我们需要用try/catch来处理事件处理函数中的异常。
>try/catch只能捕获到同步的运行时错误，对语法和异步错误却无能为力，捕获不到。

- window.onerror：当 JS 运行时错误发生时，window 会触发一个 ErrorEvent 接口的 error 事件，并执行 window.onerror()。
>在实际的使用过程中，onerror 主要是来捕获预料之外的错误，而 try-catch 则是用来在可预见情况下监控特定的错误，两者结合使用更加高效。

```js
/**
* @param {String}  message    错误信息
* @param {String}  source    出错文件
* @param {Number}  lineno    行号
* @param {Number}  colno    列号
* @param {Object}  error  Error对象（对象）
*/
window.onerror = function(message, source, lineno, colno, error) {
   console.log('捕获到异常：',{message, source, lineno, colno, error});
  // window.onerror 函数只有在返回 true 的时候，异常才不会向上抛出，否则即使是知道异常的发生控制台还是会显示 Uncaught Error: xxxxx。
  //  return true;
}
```

- window.addEventListener：静态资源加载异常捕获

  &emsp;&emsp;可以使用 window.addEventListener('error') 方式对加载异常进行处理，注意这时候我们无法使用 window.onerror 进行处理，因为 **window.onerror 事件是通过事件冒泡获取 error 信息的，而网络加载错误是不会进行事件冒泡的**。

  &emsp;&emsp;不支持冒泡的事件还有：鼠标聚焦 / 失焦（focus / blur）、鼠标移动相关事件（mouseleave / mouseenter）、一些 UI 事件（如 scroll、resize 等）。

  &emsp;&emsp;因此，我们也就知道 window.addEventListener 不同于 window.onerror，它通过事件捕获获取 error 信息，从而可以对网络资源的加载异常进行处理

  ```js
    // 也可以这样处理静态资源加载错误 
    <script src="***.js"  onerror="errorHandler(this)"></script>
    <link rel="stylesheet" href="***.css" onerror="errorHandler(this)">
  ```

- Promise Catch
- [unhandledrejection](https://developer.mozilla.org/zh-CN/docs/Web/Events/unhandledrejection){:target='_blank'}：当Promise 被 reject 且没有 reject 处理器的时候，会触发 unhandledrejection 事件；这可能发生在 window 下，但也可能发生在 Worker 中。 unhandledrejection继承自 PromiseRejectionEvent，而 PromiseRejectionEvent 又继承自 Event。因此unhandledrejection 含有 PromiseRejectionEvent 和 Event 的属性和方法。


### 总结
&emsp;&emsp;**前端组件/项目中，需要有适当的错误处理过程，否则出现错误，层层上传，没有进行捕获，就会导致页面挂掉。**
