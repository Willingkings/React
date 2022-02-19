import React, { PureComponent } from 'react'

export default class ClassComponent extends PureComponent {
  constructor(props){
    super(props)
    this.state = {
      date: new Date()
    }
  }

  // 组件挂载完成之后执行
  componentDidMount() {
    this.timer = setInterval(() => {
      
      // 更新state，不能用this.state直接去更新
      this.setState({
        date: new Date()
      })
    }, 1000);
  }

  // 组件卸载之后执行
  componentWillUnmount() {
    clearInterval(this.timer)
  }
  render() {
    const {date} = this.state;
    return (
      <div>
        <h3>ClassComponent</h3>
        <p>{date.toLocaleTimeString()}</p>
      </div>
    );
  }
}

