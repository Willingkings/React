# setState

#### 正确使⽤setState

setState(partialState, callback)
1. partialState : object|function
    ⽤于产⽣与当前state合并的⼦集。
2. callback : function
    state更新之后被调⽤。

#### 关于setState()你应该了解三件事：

1.   **不要直接修改State**

     例如，此代码不会重新渲染组件：

     ```jsx
     // 错误示范
     this.state.comment = 'Hello';
     ```

     ⽽是应该使⽤ setState() :

     ```jsx
     // 正确使⽤
     this.setState({comment: 'Hello'});
     ```

2.   **State** **的更新可能是异步的**

     出于性能考虑，React 可能会把多个 setState() 调⽤合并成⼀个调⽤。

     观察以下例⼦中log的值和button显示的counter。

     ```jsx
     import React, { Component } from "react";
     export default class SetStatePage extends Component {
       constructor(props) {
         super(props);
         this.state = {
           counter: 0,
         };
       }
       changeValue = (v) => {
         this.setState({
           counter: this.state.counter + v,
         });
         console.log("counter", this.state.counter);
       };
       setCounter = () => {
         this.changeValue(1);
         //this.changeValue(2);
         //console.log("counter", this.state.counter);
       };
       render() {
         const { counter } = this.state;
         return (
           <div>
             <h3>SetStatePage</h3>
             <button onClick={this.setCounter}>{counter}</button>
           </div>
         );
       }
     }
     
     ```

     如果要获取到最新状态值有以下⽅式：

     1.   在回调中获取状态值

          ```jsx
          changeValue = (v) => {
            this.setState(
              {
                counter: this.state.counter + v,
              },
              () => {
                console.log("counter", this.state.counter);
              }
            );
          };
          
          ```

     2.   使⽤定时器

          ```jsx
          setTimeout(() => {
            this.setCounter();
          }, 0);
          ```

     3.   原⽣事件中修改状态

          ```jsx
          componentDidMount(){
            document.body.addEventListener('click', this.setCounter, false) 
          }
          ```

​	**总结： setState只有在合成事件和⽣命周期函数中是异步的，在原⽣事件和setTimeout中都是同步的，这⾥的异步其实是批量更新。**

3.   **State的更新会被合并**

     ```jsx
     changeValue = (v) => {
       this.setState({
         counter: this.state.counter + v,
       });
     };
     setCounter = () => {
       this.changeValue(1);
       this.changeValue(2);
     };
     
     ```

     如果想要链式更新state：

     ```jsx
     changeValue = (v) => {
       this.setState((state) => ({ counter: state.counter + v }));
     };
     setCounter = () => {
       this.changeValue(1);
       this.changeValue(2);
     };
     
     ```

     

