import { Component } from "react";
import { Link, Route } from "react-router-dom/cjs/react-router-dom.min";
import Detail from "./Detail";

export default class Message extends Component {
  state = {
    messageArr: [
      { id: "01", title: "消息1" },
      { id: "02", title: "消息2" },
      { id: "03", title: "消息3" },
    ],
  };
  render() {
    const { messageArr } = this.state;
    return (
      <div>
        <ul>
          {messageArr.map((mesaageObj) => {
            return (
              <li key={mesaageObj.id}>
                {/* 向路由组件传递params参数 */}
                {/* <Link
                  to={`/home/message/detail/${mesaageObj.id}/${mesaageObj.title}`}
                >
                  {mesaageObj.title}
                </Link> */}
                {/* 向路由组件传递search参数  */}
                {/* <Link
                  to={`/home/message/detail/?id=${mesaageObj.id}&title=${mesaageObj.title}`}
                >
                  {mesaageObj.title}
                </Link> */}
                {/* 向路由组件传递state参数  */}
                <Link
                  // 路由的replace模式,默认是push模式
                  // replace={true}
                  to={{
                    pathname: "/home/message/detail",
                    state: { id: mesaageObj.id, title: mesaageObj.title },
                  }}
                >
                  {mesaageObj.title}
                </Link>
                &nbsp;&nbsp;
              </li>
            );
          })}
        </ul>
        <hr />
        {/* 声明接收params参数 */}
        {/* <Route
          path="/home/message/detail/:id/:title"
          component={Detail}
        ></Route> */}

        {/* search参数无需声明接收 */}
        {/* <Route path="/home/message/detail" component={Detail}></Route> */}

        {/* state参数无需声明接收 */}
        <Route path="/home/message/detail" component={Detail}></Route>
      </div>
    );
  }
}
