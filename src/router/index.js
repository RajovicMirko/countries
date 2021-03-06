import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Error404 from "../pages/Error404";
import Countries from "../pages/Countries";
import Country from "../pages/Country";

function Router() {
  return (
    <Switch>
      <Route exact path="/" component={Countries} />
      <Route exact path="/countries" component={Countries} />
      <Route path="/countries/country/:name" component={Country} />
      <Route path="/error404" component={Error404} />
      <Redirect to="/error404" />
    </Switch>
  );
}

export default Router;
