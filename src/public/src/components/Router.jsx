import {Switch, Route, HashRouter} from 'react-router-dom'
import React from 'react';
import {Login} from "../containers/login-page";
import {Notfound} from "./Notfound";
import {Header} from "./blocks/Header";
import {Sites} from "../containers/sites-page";
import {AlarmZones} from "./AlarmZones";
import {DevicesPage} from "../containers/devices-page";
import {PrivateRoute} from "./blocks/privat-route";

export class Routing extends React.Component {

  render() {
    return (
      <HashRouter>
        <Header>
          <Switch>
            <Route exact path="/"  component={() => <p>Test App</p>} />
            <Route exact path="/login"  component={Login} />
            <PrivateRoute exact path="/sites" component={Sites} />
            <PrivateRoute path="/sites/:siteId/alarmZones" component={AlarmZones} />
            <PrivateRoute path="/sites/:siteId/devices" component={DevicesPage} />
            <Route component={Notfound} />
          </Switch>
        </Header>
      </HashRouter>
    )
  };
}

