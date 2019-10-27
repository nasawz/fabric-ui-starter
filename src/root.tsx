import * as React from "react";
import { Route, HashRouter as Router, Switch } from "react-router-dom";
import App from "./containers/app";

export interface IRootProps {
}

export default function Root(props: IRootProps) {
  return (
    <Router>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </Router>
  );
}
