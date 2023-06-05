import React from 'react'
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children, loggedIn}) => {
    if (!loggedIn) {
      console.log(loggedIn);
      return <Navigate to="/login" />
    }

  return children;

}

export default PrivateRoute