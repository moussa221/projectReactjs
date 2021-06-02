import React from "react";
import { Switch, Route } from "react-router-dom";
import Calendrier from "../pages/calendrier";

const Routes = () => {
  return (
    <Switch>
      <Route path="/calendrier" component={Calendrier} />
    </Switch>
  );
};

export default Routes;
