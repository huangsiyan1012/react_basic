import "bootstrap/dist/css/bootstrap.min.css";
import { Component } from "react";
import { Link, Route } from "react-router-dom";
import Header from "./components/Header";
import About from "./pages/About";
import Home from "./pages/Home";

export default class App extends Component {
  render() {
    return (
      <div id="root">
        <div>
          <div className="row">
            <Header></Header>
          </div>
          <div className="row">
            <div className="col-xs-2 col-xs-offset-2">
              <div className="list-group">
                {/* 原生html中，使用<a>标签跳转到不同页面 */}
                {/*  <a className="list-group-item" href="./about.html">
                  About
                </a>
                <a className="list-group-item active" href="./home.html">
                  Home
                </a> */}

                {/* 在React中靠路由链接实现切换组件 - 编写路由链接 */}
                <Link className="list-group-item" to="/about">
                  About
                </Link>
                <Link className="list-group-item" to="/home">
                  Home
                </Link>
              </div>
            </div>
            <div className="col-xs-6">
              <div className="panel">
                <div className="panel-body">
                  {/* 注册路由 */}
                  <Route path="/about" component={About}></Route>
                  <Route path="/home" component={Home}></Route>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
