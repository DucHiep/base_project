import React from 'react';
import {useSelector} from "react-redux";
import {appSelects} from "../redux/reducer/app/appReducer";
import {Redirect, Route} from "react-router-dom";

const AuthenticatedGuard = props => {
    const { Component, ...rest } = props;
    const isAuthenticated = useSelector(appSelects.isAuthenticated);
    return (
        <Route
            {...rest}
            render={props => {
                if (!isAuthenticated && !localStorage.getItem("token")) {
                    return <Redirect to="/login" />
                }
                return <Component {...props} />
            }}
        />
    );
};

export default AuthenticatedGuard;