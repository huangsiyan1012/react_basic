import { Component, Fragment } from "react";

export default class Demo extends Component {
  render() {
    return (
      // 由于组件外面必须包一个div,但是并没用任何作用，可以用Fragment来代替包裹，编译会把Fragement忽略
      <Fragment>
        <input type="text" />
        <input type="text" />
      </Fragment>
    );
  }
}
