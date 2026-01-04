import { Component } from "react";

export default class Demo extends Component {
  state = { count: 0 };

  add = () => {
    // 获取状态
    //   const { count } = this.state;
    // 对象式
    /* this.setState({ count: count + 1 }, () => {
        console.log(this.state.count)
    }); */

    // 函数式
    this.setState((state, props) => ({ count: state.count + 1 }));
  };
  render() {
    return (
      <div>
        当前求和为：{this.state.count}
        <button onClick={this.add}>点我+1</button>
      </div>
    );
  }
}
