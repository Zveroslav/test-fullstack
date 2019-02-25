import {Switch, Route, HashRouter} from 'react-router-dom'
import React from 'react';
import {Login} from "./Pages/Login";
import {Notfound} from "./Pages/Notfound";
import {Header} from "./HOC/Header";
import {Sites} from "./Pages/Sites";
import {AlarmZones} from "./Pages/AlarmZones";
import {Devices} from "./Pages/Devices";

export class Routing extends React.Component {

  render() {
    return (
      <HashRouter>
        <Header>
          <Switch>
            <Route exact path="/"  component={() => <p>Test App</p>} />
            <Route exact path="/login"  component={Login} />
            <Route exact path="/sites" component={Sites} />
            <Route path="/sites/:siteId/alarmZones" component={AlarmZones} />
            <Route path="/sites/:siteId/devices" component={Devices} />
            <Route component={Notfound} />
          </Switch>
        </Header>
      </HashRouter>
    )
  };
}

