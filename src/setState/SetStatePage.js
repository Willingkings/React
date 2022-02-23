import React, { Component } from "react";

export default class SetStatePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  componentDidMount() {
    // this.changeValue(2)
    document.getElementById("test").addEventListener("click", this.setCounter);
  }

  changeValue = (v) => {
    // setState 在合成事件、生命周期中是异步的，这里的异步指批量跟新，以达到优化性能的目的
    // this.setState(
    //   {
    //     counter: this.state.counter + v,
    //   },
    //   () => {
    //     // callback就是在state更新完成之后再执行
    //     console.log("counter", this.state.counter);
    //   }
    // );

    // 链式更新state
    this.setState((state) => {
      return {
        counter: state.counter + v,
      };
    });
  };

  setCounter = () => {
    // this.changeValue(1);
    // setState 在setTimeout、原生事件中是同步的
    // setTimeout(() => {
      this.changeValue(1);
      this.changeValue(2);
    // }, 0);
  };
  render() {
    const { counter } = this.state;
    return (
      <div>
        <h3>setState</h3>
        <button onClick={this.setCounter}>{"change " + counter}</button>
        <button id="test">{"原生事件 " + counter}</button>
      </div>
    );
  }
}
