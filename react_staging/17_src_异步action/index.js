// 引入React
import React from "react";
// 引入ReactDOM
import ReactDOM from "react-dom/client";
// 引入BrowserRouter
import App from "./App";
// 用于记录文件性能

// 渲染App组件到页面
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>
);
