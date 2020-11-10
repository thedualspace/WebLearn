import React from 'react';
import { Redirect } from 'react-router-dom';

export const ProtectedRoute = ( {component: Component, isAuthenticated, isLoading, props, ...rest} ) => {
  if(isLoading) {
    return <div></div>
  }
  if(!isAuthenticated) {
    return <Redirect to="/login" />
  }
  return <Component {...props} /> 
}
