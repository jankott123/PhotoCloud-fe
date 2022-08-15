import React from 'react';
import {Route} from 'react-router-dom';
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import auth from '../services/Auth';

export const PrivateRoute = ({children, ...rest}) => {
    
    return(
      <Route {...rest} render={(props) => {
       
        return auth.isAuthenticated() === "true"
        ? children
        : <Redirect to={{
            pathname: "/login",
            state: { property_id: rest.warning }
          }} />
      }} />
    );
  }