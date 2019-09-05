/*!

=========================================================
* Material Kit React - v1.7.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "client/assets/scss/material-kit-react.scss?v=1.7.0";

// pages for this product
import Components from "client/views/Components/PageAccueil.jsx";
import Activités from "client/views/LesActivites/LesActivites.jsx";
import Actualités from "client/views/Actualités/Actualités.jsx";
import Inscription from "client/views/Inscription/Inscription.jsx";
import Admin from "server/views/components/PageAdmin.jsx"

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/admin" component={Admin}/>
      <Route path="/activités" component={Activités}/>
      <Route path="/actualités" component={Actualités}/>
      <Route path="/inscription" component={Inscription}/>
      <Route path="/" component={Components} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
