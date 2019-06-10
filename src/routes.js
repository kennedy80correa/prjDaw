import React from 'react';

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import LoginTela from './pages/login';
import { isAuthenticated } from './auth';
import CadCurso from './pages/CadCurso';
import CadUser from './pages/cadUser';
import CadPlanoAula from './pages/cadPlanoAula';

const PrivateRoute = ({component: Component, ... rest }) => (
    <Route { ... rest} render={props => (
        isAuthenticated() ? (
            <Component { ... props} />
        ) : (
            <Redirect to={{ pathname: '/', state: { from: props.location }}} />
        )
    )}  />
)

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={() => <CadPlanoAula/>}/>
            <PrivateRoute path='./pages/CadCurso' component={() => <CadCurso />}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;