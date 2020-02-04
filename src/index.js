import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "./Components/Styles/scss/material-kit-react.scss?v=1.8.0";

//Pages
import ProfilePage from "./views/ProfilePage";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
  <Switch>
    <Route path="/" component={ProfilePage} />
  </Switch>
</Router>,

  document.getElementById("root")
);
