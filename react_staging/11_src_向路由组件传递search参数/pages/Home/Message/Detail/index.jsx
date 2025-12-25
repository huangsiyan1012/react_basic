// 用于将urlencode形式的字符串转换成对象形式,这个库可以两个状态互转
import qs from "querystring";
import { Component } from "react";

const DetailDate = [
  { id: "01", content: "MESSAGE1" },
  { id: "02", content: "MESSAGE2" },
  { id: "03", content: "MESSAGE3" },
];
export default class Detail extends Component {
  render() {
    // 接收params参数
    console.log(this.props);
    // const { id, title } = this.props.match.params;

    // 接收search参数
    const { search } = this.props.location;
    const { id, title } = qs.parse(search.slice(1));

    const findResult = DetailDate.find((item) => item.id === id);
    return (
      <div>
        <ul>
          <li>ID:{id}</li>
          <li>TITLE:{title}</li>
          <li>CONTENT:{findResult.content}</li>
        </ul>
      </div>
    );
  }
}
