import React from 'react';
import {Route } from 'react-router-dom';
import LandingPage from './landingpage';
import checkAuth from '../authorization/checkAuth';

const ProtectedRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={props => (
        checkAuth() ? <Component {...props} /> :
        <LandingPage />
    )} />
)

export default ProtectedRoute;