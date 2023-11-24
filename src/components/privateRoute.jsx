import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ component: Component, isAuthenticated, selectedStudent, ...rest }) => (
    <Route
    {...rest}
    render={(props) =>
      isAuthenticated ? (
        <Component {...props} selectedStudent={selectedStudent} />
      ) : (
        <Navigate to="/eleves" />

      )
    }
  />
);

export default PrivateRoute;
