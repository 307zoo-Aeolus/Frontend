import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import Components from "views/Components/Components.js";
import Interns from "views/Interns/Interns.js";
import Academic from "views/Academic/Academic.js";
import Research from "views/Research/Research.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import RegisterPage from "views/RegisterPage/Register.js";
import ChangePW from "views/ChangePW/ChangePW.js";
import ForgetPW from "views/ForgetPW/ForgetPW.js";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/interns" component={Interns} />
      <Route path="/academic" component={Academic} />
      <Route path="/research" component={Research} />
      <Route path="/profile-page" component={ProfilePage} />
      <Route path="/login-page" component={LoginPage} />
      <Route path="/register-page" component={RegisterPage} />
      <Route path="/change-pw" component={ChangePW} />
      <Route path="/forget-pw" component={ForgetPW} />
      <Route path="/" component={Components} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
