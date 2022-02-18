# Hello React
### 起步
1. 创建项⽬： npx create-react-app my-app
2. 打开项⽬： cd my-app
3. 启动项⽬： npm start
4. 暴露配置项： npm run eject

### cra⽂件结构
```
├── README.md             ⽂档 
├── public                静态资源
│ ├── favicon.ico
│ ├── index.html
│ └── manifest.json
└── src                   源码
 ├── App.css
 ├── App.js               根组件
 ├── App.test.js 
 ├── index.css            全局样式
 ├── index.js             ⼊⼝⽂件
 ├── logo.svg
 └── serviceWorker.js     pwa⽀持
├── package.json          npm 依赖
```
### ⼊⼝⽂件定义，webpack.config.js
```
entry: [
// WebpackDevServer客户端，它实现开发时热更新功能
isEnvDevelopment &&
require.resolve('react-dev-utils/webpackHotDevClient'),
// 应⽤程序⼊⼝：src/index
paths.appIndexJs,
].filter(Boolean)
```
webpack.config.js 是webpack配置⽂件，开头的常量声明可以看出cra能够⽀持ts、sass及css模块化。
```
// Check if TypeScript is setup
const useTypeScript = fs.existsSync(paths.appTsConfig);
// style files regexes
const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
const sassRegex = /\.(scss|sass)$/;
const sassModuleRegex = /\.module\.(scss|sass)$/;
```
### React和ReactDom
删除src下⾯所有代码，新建 hello-react/index.js。

```
import React from 'react';
import ReactDOM from 'react-dom';
// 这⾥怎么没有出现React字眼？
// JSX => React.createElement(...)
ReactDOM.render(<h1>Hello React</h1>, document.querySelector('#root'));
```
修改config下path.js : "appIndexJs: resolveModule(resolveApp, "src/hello-react/index")"
> React负责逻辑控制，数据 ->>VDOM   
> ReactDom渲染实际DOM，VDOM ->> DOM   
> React使⽤JSX来描述UI   
> babel-loader把JSX 编译成相应的 JS 对象，React.createElement再把这个JS对象构造成React需要的虚拟dom。













