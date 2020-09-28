import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomeScreen from './screens/home';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={HomeScreen}></Route>
        </Switch>
    </BrowserRouter>
)

export default Routes;