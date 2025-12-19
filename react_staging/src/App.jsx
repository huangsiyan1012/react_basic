import axios from "axios";
import { Component } from "react";

export default class App extends Component {
  getStudentsDatat = () => {
    axios.get("/students").then(
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
        <button onClick={this.getStudentsDatat}>点我获取学生数据</button>
      </div>
    );
  }
}
