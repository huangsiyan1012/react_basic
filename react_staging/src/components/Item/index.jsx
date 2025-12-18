import { Component } from "react";
import "./index.css";

export default class Item extends Component {
  state = { mouse: false };
  // 鼠标移入移出的回调
  handleMouse = (flag, e) => {
    // 标识鼠标是否悬浮到list上
    this.setState({ mouse: flag });
  };

  // 勾选/取消勾选的回调
  handleCheck = (id) => {
    return (e) => {
      this.props.updateTodo(id, e.target.checked);
    };
  };
  render() {
    const { name, done, id } = this.props;
    return (
      <div>
        <li
          style={{ backgroundColor: this.state.mouse ? "#ddd" : "white" }}
          onMouseLeave={(e) => {
            this.handleMouse(false, e);
          }}
          onMouseEnter={(e) => {
            this.handleMouse(true, e);
          }}
        >
          <label>
            <input
              type="checkbox"
              defaultChecked={done}
              onChange={this.handleCheck(id)}
            />
            <span>{name}</span>
          </label>
          <button
            className="btn btn-danger"
            style={{ display: this.state.mouse ? "block" : "none" }}
          >
            删除
          </button>
        </li>
      </div>
    );
  }
}
