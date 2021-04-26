import React from "react";
import { Link, Route, Switch } from "react-router-dom";

import NormalRoute from "./normalRoute";
import {LandingPage} from "../pages/";

const AppRouting = () => {
    function NotFound() {
        return (
            <>
                <h1>Error 404!</h1>
                <h5>Page Not Found.</h5>
                <Link to={"/"}>Back to home</Link>
            </>
        );
    }

    return (
        <>
            <Switch>
                <NormalRoute exact path={"/"} component={LandingPage} />
                <Route component={NotFound} />
            </Switch>
        </>
    );
};

export default AppRouting;
