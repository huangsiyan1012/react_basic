import { Component } from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

export default class MyNavLink extends Component {
  render() {
    //   标签体的传递key，默认为children
    return (
      <NavLink
        activeClassName="hsy_active"
        className="list-group-item"
        {...this.props}
      />
    );
  }
}
