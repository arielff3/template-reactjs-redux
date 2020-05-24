import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import RouteWrapper from './router';

import Login from '~/pages/Login';
import Logged from '~/pages/Logged';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <RouteWrapper exact path="/" component={Login} />
        {/* <RouteWrapper path="/forgot" component={Forgot} /> */}
        <RouteWrapper path="/logged" isPrivate component={Logged} />
      </Switch>
    </BrowserRouter>
  );
}
