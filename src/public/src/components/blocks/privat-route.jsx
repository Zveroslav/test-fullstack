import React from "react";
import Redirect from "react-router-dom/es/Redirect";
import Route from "react-router-dom/es/Route";
import {Auth} from "../../utils";

export function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props => {
        return (
          Auth.checkLogin() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      ) }
      }
    />
  );
}
