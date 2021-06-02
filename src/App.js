import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "./components/apprenant/login";
import Welcome from "./components/dashboard/welcome";
import Accueil from "./components/pages/accueil";
import Connexion from "./administration/id/connexion";
import Inscription from "./administration/id/inscription";
import Header from "./administration/admin/Header";
import Demon from "./administration/students/demon";
import AppRouter from "./administration/cours/appRouter";
import AppIndex from "./administration/profs/appIndex";
import Cours from "./components/studentsCours/cours";
import Calendriers from "./components/pages/calendriers";

import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={Accueil} />
        <Switch>
          <Route path="/header" component={Header} />
          <Route path="/cours" component={Cours} />
          <Route path="/calendriers" component={Calendriers} />
          <Route path="/appRouter" component={AppRouter} />
          <Route path="/demon" component={Demon} />
          <Route path="/welcome" component={Welcome} />
          <Route path="/login" component={Login} />
          <Route path="/connexion" component={Connexion} />
          <Route path="/inscription" component={Inscription} />
          <Route path="/appIndex" component={AppIndex} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
