import { Component } from "react";

const DetailDate = [
  { id: "01", content: "MESSAGE1" },
  { id: "02", content: "MESSAGE2" },
  { id: "03", content: "MESSAGE3" },
];
export default class Detail extends Component {
  render() {
    console.log(this.props);
    const { id, title } = this.props.match.params;
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
