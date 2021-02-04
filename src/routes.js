import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import HomeScreen from "./pages/home";

const Routes = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={HomeScreen}></Route>
    </Switch>
  </HashRouter>
);

export default Routes;
