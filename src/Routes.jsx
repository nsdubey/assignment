import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import ITunes from "./containers/ITunes";

const Routes = props => (
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route path="/itunes" component={ITunes} />
  </Switch>
);

export default Routes;
