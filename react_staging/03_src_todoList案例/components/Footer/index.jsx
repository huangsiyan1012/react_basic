import { Component } from "react";
import "./index.css";

export default class Footer extends Component {
  // 勾选全部和取消全部勾选
  handleCheckAll = (e) => {
    this.props.checkAllTodos(e.target.checked);
  };

  // 清除完成的
  handleClear = () => {
    this.props.clearAllDone();
  };
  render() {
    const { todos } = this.props;
    // 已完成个数
    const doneCount = todos.reduce((pre, todo) => {
      return pre + (todo.done ? 1 : 0);
    }, 0);

    return (
      <div>
        <div className="todo-footer">
          <label>
            <input
              type="checkbox"
              checked={
                doneCount === todos.length && todos.length !== 0 ? true : false
              }
              onChange={this.handleCheckAll}
            />
          </label>
          <span>
            <span>已完成{doneCount}</span> / 全部{todos.length}
          </span>
          <button onClick={this.handleClear} className="btn btn-danger">
            清除已完成任务
          </button>
        </div>
      </div>
    );
  }
}
