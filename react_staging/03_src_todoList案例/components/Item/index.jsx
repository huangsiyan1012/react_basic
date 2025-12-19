import PropTypes from "prop-types";
import { Component } from "react";
import "./index.css";

export default class Item extends Component {
  // 对接收的props进行类型和必要性的限制
  static propTypes = {
    updateTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
  };
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

  // 删除的回调
  handleDelete = (id) => {
    if (window.confirm("确定删除吗？")) {
      this.props.deleteTodo(id);
    }
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
              checked={done}
              onChange={this.handleCheck(id)}
            />
            <span>{name}</span>
          </label>
          <button
            onClick={() => {
              this.handleDelete(id);
            }}
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
