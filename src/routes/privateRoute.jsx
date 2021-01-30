import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { isAuthenticated } from "../services/auth";

export default function PrivateRoute(props) {
  const logged = isAuthenticated();
  return logged ? <Route component={props.component} path={props.path} /> : <Redirect to='/login' />
}



