import React from "react";
import { Route } from "react-router-dom";

const NormalRoute = ({ component: Component, ...data }) => {
    return (
        <>
            <Route
                {...data}
                render={(props) => {
                    return (
                        <>
                            /*NAVIGATION*/
                            <Component {...props} />
                            /*FOOTER*/
                        </>
                    );
                }}
            />
        </>
    );
};

export default NormalRoute;
