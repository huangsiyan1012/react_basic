// PureComponent会帮我们完成下面shouldComponentUpdate生命周期中是否调用render的逻辑
import { PureComponent } from "react";

export default class Demo extends PureComponent {
  state = { username: "tom" };

  changeName = () => {
    this.setState({ username: "jack" });
  };

  /*   shouldComponentUpdate(nextProps, nextState) {
    // console.log(nextProps, nextState); //接下来要更新成的props和state
    if (nextState.username === this.state.username) {
      return false;
    }
    return true;
  } */

  render() {
    console.log("@");
    return (
      <div style={{ background: "orange", width: "50%", height: "400px" }}>
        <h1>祖组件</h1>
        <h4>我的内容：{this.state.username}</h4>
        <button onClick={this.changeName}>点击更换名字</button>
        <Son username="xxx"></Son>
      </div>
    );
  }
}

class Son extends PureComponent {
  /*   shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps, nextState); //接下来要更新成的props和state
    if (nextProps.username === this.props.username) {
      return false;
    }
    return true;
  }
 */
  render() {
    return (
      <div style={{ background: "skyblue", width: "90%", height: "250px" }}>
        <h1>儿子组件</h1>
        <h4>收到的祖组件的内容：{this.props.username}</h4>
      </div>
    );
  }
}
