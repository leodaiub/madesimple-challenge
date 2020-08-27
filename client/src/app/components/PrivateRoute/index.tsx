import React from 'react';
import { Redirect, Route } from 'react-router-dom';

interface Props {
  component: any;
  exact: boolean;
  path: string;
}

export function PrivateRoute({ component: Component, ...rest }: Props) {
  return (
    <Route
      {...rest}
      render={props =>
        !!localStorage.getItem('token') ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
}
