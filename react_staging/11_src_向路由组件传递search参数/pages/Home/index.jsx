import { Component } from "react";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import MyNavLink from "../../components/MyNavLink";
import Message from "./Message";
import News from "./News";

export default class Home extends Component {
  render() {
    return (
      <div>
        <h3>我是Home的内容</h3>
        <div>
          <ul className="nav nav-tabs">
            <li>
              <MyNavLink to="/home/news">News</MyNavLink>
            </li>
            <li>
              <MyNavLink to="/home/message">Message</MyNavLink>
            </li>
          </ul>
          <div>
            <Switch>
              <Route path="/home/news" component={News}></Route>
              <Route path="/home/message" component={Message}></Route>
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}
