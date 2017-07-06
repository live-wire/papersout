import React from 'react'
import {
  Route,
  Redirect
} from 'react-router-dom'
var FakeAuth = require('./FakeAuth').default;

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    FakeAuth.isAuthenticated ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
);

export default PrivateRoute