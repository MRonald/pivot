import React from "react";
import { Route, Switch } from "react-router";
import Login from "./pages/Login";

export default function Routes() {
    return (
        <Switch>
            <Route path="/" component={Login} exact />
        </Switch>
    );
}
