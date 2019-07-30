import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Home from "./homePage";
import Card from './cardValidatorAll';

export default () =>
<Router>
    <div>
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/card" exact component={Card} />
    </Switch>
    </div>
</Router>