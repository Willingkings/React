### 组件
组件，从概念上类似于 JavaScript 函数。它接受任意的⼊参（即 “props”），并返回⽤于描述⻚⾯展示内容的 React 元素。
组件有两种形式：**class**组件和**function**组件。

#### class组件

class组件通常**拥有状态**和**⽣命周期**，**继承于Component**，**实现render⽅法**。

⽤class组件创建⼀个Clock：

```jsx
import React, { Component } from "react";
export default class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    // 使⽤state属性维护状态，在构造函数中初始化状态
    this.state = { date: new Date() };
  }
  componentDidMount() {
    // 组件挂载之后启动定时器每秒更新状态
    this.timerID = setInterval(() => {
      // 使⽤setState⽅法更新状态
      this.setState({
        date: new Date(),
      });
    }, 1000);
  }
  componentWillUnmount() {
    // 组件卸载前停⽌定时器
    clearInterval(this.timerID);
  }
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  render() {
    return <div>{this.state.date.toLocaleTimeString()}</div>;
  }
}

```



#### function组件

函数组件通常**⽆状态**，仅**关注内容展示**，返回渲染结果即可。

⽤function组件创建⼀个Clock：

```jsx
import React, { useState, useEffect } from "react";
export function FunctionComponent(props) {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    //副作⽤
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(timer); //组件卸载的时候执⾏
  }, []);
  return (
    <div>
      <h3>FunctionComponent</h3>
      <p>{date.toLocaleTimeString()}</p>
    </div>
  );
}

```

>   从React16.8开始引⼊了hooks，函数组件也能够拥有状态。
>
>   提示: 如果你熟悉 React class 的⽣命周期函数，你可以把 useEffect Hook 看做componentDidMount ，componentDidUpdate 和 componentWillUnmount 这三个函数的组合。

#### 复合组件

复合组件给与你⾜够的敏捷去定义⾃定义组件的外观和⾏为，这种⽅式更明确和安全。如果组件间有公⽤的⾮UI逻辑，将它们抽取为JS模块导⼊使⽤⽽不是继承它。

##### 1. 不具名









