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
//import { createBrowserHistory } from "history";
import { /*Router,*/ Route, Switch, BrowserRouter } from "react-router-dom";
import _ from "lodash";

import "client/assets/scss/material-kit-react.scss?v=1.7.0";

// pages for this product
import PageAccueil from "client/views/Components/PageAccueil.jsx";
import Activités from "client/views/LesActivites/LesActivites.jsx";
import Actualités from "client/views/Actualités/Actualités.jsx";
import Admin from "server/views/components/PageAdmin.jsx";
import Dashboard from "server/views/components/PageDashboard.jsx";
import Infogenerale from "./server/views/components/info-generale/infogenerale.jsx";
import Prochainevent from "./server/views/components/prochain-event/prochainevent.jsx";
import Mesactivites from "./server/views/components/mes-activites/mesactivites.jsx";
import Mesactu from "./server/views/components/mes-actu/mesactu.jsx";

import { auth } from "./server/firebase/firebase"
import withAuthProtection from "./server/firebase/withauthprotection";

const ProtectedProfile = withAuthProtection("/")(Dashboard);
const ProtectedProfile2 = withAuthProtection("/")(Infogenerale);
const ProtectedProfile3 = withAuthProtection("/")(Prochainevent);
const ProtectedProfile4 = withAuthProtection("/")(Mesactivites);
const ProtectedProfile5 = withAuthProtection("/")(Mesactu);

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      me: auth.currentUser
    };
  }

  componentDidMount() {
    auth.onAuthStateChanged(me => {
      this.setState({ me });
    });
  }

  render() {
    const { me } = this.state;
    const email = _.get(me, "email");
    return (
      <BrowserRouter>
        <Switch>
            <Route path="/activités" component={Activités}/>
            <Route path="/actualités" component={Actualités}/>
            <Route path="/admin" component={Admin}/>
            <Route path="/dashboard" render={props => (
              <ProtectedProfile {...props} me={me} displayName={email}/> )} />
            <Route path="/infogenerale" render={props => (
              <ProtectedProfile2 {...props} me={me} displayName={email}/> )}/> />
            <Route path="/prochainevent" render={props => (
              <ProtectedProfile3 {...props} me={me} displayName={email}/> )}/> />
            <Route path="/mesactivites" render={props => (
              <ProtectedProfile4 {...props} me={me} displayName={email}/> )}/> />/>
            <Route path="/mesactu" render={props => (
              <ProtectedProfile5 {...props} me={me} displayName={email}/> )}/> />/>
            <Route path="/" component={PageAccueil} />
        </Switch>
      </BrowserRouter>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
