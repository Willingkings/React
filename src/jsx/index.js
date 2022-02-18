import React from "react";
import ReactDOM from "react-dom";
import styles from "./index.module.css"
import logo from './logo192.png'

// 基本使用 表达式用{}包裹
const name = "React";

// 函数
const obj = {
  firstName: "Harry",
  lastName: "Potter"
}
function formatName(name) {
  return name.firstName + " " + name.lastName;
}

// JSX对象
const greet = <div>good</div>

// 条件语句
const show = false

// 数组
const arr = [0, 1, 2]

const jsx = (
  <div className={styles.app}>
    <div>Hello, {name}</div>
    <div>{formatName(obj)}</div>
    {greet}
    {show ? greet : "bad"}
    {!show && greet}
    <ul>
      {/* diff时，首先比较type，然后是key，所以同级同类型元素，key值必须唯一 */}
      {arr.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
    {/* 属性 */}
    <img src={logo} className={styles.logo} style={{ width: "50px", height: "50px" }} />
  </div>
);
ReactDOM.render(jsx, document.querySelector("#root"));