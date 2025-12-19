import { Component } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import List from "./components/List";

export default class App extends Component {
  // 存储状态
  state = {
    todos: [
      { id: "001", name: "吃饭", done: true },
      { id: "002", name: "睡觉", done: true },
      { id: "003", name: "打代码", done: true },
    ],
  };

  // 给Header组件调用，用于header把数据传递给App组件
  addTodo = (todoObj) => {
    const { todos } = this.state;
    const newTodos = [todoObj, ...todos];
    this.setState({ todos: newTodos });
  };

  //用于更新todo
  updateTodo = (id, done) => {
    // 获取todos
    const { todos } = this.state;
    const newTodos = todos.map((todo) => {
      // 如果是需要修改的todo - 这里用了对象的合并
      if (todo.id === id) return { ...todo, done };
      // 不是需要修改的todo
      else return todo;
    });
    this.setState({ todos: newTodos });
  };

  // 用于删除todo
  deleteTodo = (id) => {
    // 获取原来的todos
    const { todos } = this.state;
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    this.setState({ todos: newTodos });
  };

  // 用于取消所有勾选或者勾选所有
  checkAllTodos = (done) => {
    // 获取原来的状态
    const { todos } = this.state;
    // 修改数据
    const newTodos = todos.map((todo) => {
      return { ...todo, done };
    });
    // 更新状态
    this.setState({ todos: newTodos });
  };

  // 清除所有完成的
  clearAllDone = () => {
    // 获取状态
    const { todos } = this.state;
    const newTodos = todos.filter((todo) => {
      return !todo.done;
    });
    // 更新状态
    this.setState({ todos: newTodos });
  };

  render() {
    const { todos } = this.state;
    return (
      <div>
        <div className="todo-container">
          <div className="todo-wrap">
            <Header addTodo={this.addTodo}></Header>
            <List
              todos={todos}
              updateTodo={this.updateTodo}
              deleteTodo={this.deleteTodo}
            ></List>
            <Footer
              todos={todos}
              checkAllTodos={this.checkAllTodos}
              clearAllDone={this.clearAllDone}
            ></Footer>
          </div>
        </div>
      </div>
    );
  }
}
