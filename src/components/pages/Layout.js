import React, { Component } from 'react'
import BottomBar from "../BottomBar";
import TopBar from "../TopBar";

export default class Layout extends Component {
  
  componentDidMount() {
    const {title = "商城"} = this.props;
    document.title = title; 
  }
  
  render() {
    const {children, showTopBar, showBottomBar} = this.props;
    return (
      <div>
        {showTopBar && <TopBar />}

        {/* 不具名
        {children} */}

        {/* 具名 */}
        {children.content}
        <div>{children.txt}</div>
        <button onClick={children.btnClick}>btnClick</button>
        {showBottomBar && <BottomBar />}
      </div>
    );
  }
}
