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
import PageAccueil from "client/views/Components/PageAccueil.jsx";
import Activités from "client/views/LesActivites/LesActivites.jsx";
import Actualités from "client/views/Actualités/Actualités.jsx";
import Inscription from "client/views/Inscription/Inscription.jsx";
import Admin from "server/views/components/PageAdmin.jsx";
import Dashboard from "server/views/components/PageDashboard.jsx";
import Infogenerale from "./server/views/components/info-generale/infogenerale.jsx";
import Prochainevent from "./server/views/components/prochain-event/prochainevent.jsx";
import Mesactivites from "./server/views/components/mes-activites/mesactivites.jsx";
import Mesactu from "./server/views/components/mes-actu/mesctu.jsx";


var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/activités" component={Activités}/>
      <Route path="/actualités" component={Actualités}/>
      <Route path="/inscription" component={Inscription}/>
      <Route path="/admin" component={Admin}/>
      <Route path="/dashboard" component={Dashboard}/>
      <Route path="/infogenerale" component={Infogenerale}/>
      <Route path="/prochainevent" component={Prochainevent}/>
      <Route path="/mesactivites" component={Mesactivites}/>
      <Route path="/mesactu" component={Mesactu}/>
      <Route path="/" component={PageAccueil} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
