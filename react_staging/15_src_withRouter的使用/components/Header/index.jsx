import { Component } from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";

class Header extends Component {
  back = () => {
    this.props.history.goBack();
  };

  forward = () => {
    this.props.history.goForward();
  };

  go = () => {
    this.props.history.go(2);
  };
  render() {
    return (
      <div className="col-xs-offset-2 col-xs-8">
        <div className="page-header">
          <h2>React Router Demo</h2>
          <button onClick={this.back}>后退</button>
          <button onClick={this.forward}>前进</button>
          <button onClick={this.go}>前进/后退</button>
        </div>
      </div>
    );
  }
}

// withRouter可以加工一般组件让其身上有路由组件的api,返回值是一个新的组件
export default withRouter(Header);
