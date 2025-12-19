import axios from "axios";
import { Component } from "react";

export default class App extends Component {
  getStudentsData = () => {
    axios.get("http://localhost:3000/students").then(
      (response) => {
        console.log("成功了", response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  };
  render() {
    return (
      <div>
        <button onClick={this.getStudentsData}>点我获取学生数据</button>
      </div>
    );
  }
}
