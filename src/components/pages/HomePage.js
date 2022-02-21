import React, { Component } from 'react'
import Layout from "./Layout";

export default class HomePage extends Component {
  render() {
    return (
      <Layout showTopBar={false} showBottomBar={true} title="商城首页">
        {/* // 不具名
        <div>HomePage</div> */}

        {/* 具名 */}
        {{
          content: (
            <div>
              <h3>HomePage</h3>
            </div>
          ),
          txt: "这是个文本",
          btnClick: () => {
            console.log("btnClick");
          },
        }}
      </Layout>
    );
  }
}
