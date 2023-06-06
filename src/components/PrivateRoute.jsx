import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from './AuthProvider';

const PrivateRoute = ({ children }) => {
  const auth = useAuth();
  const url = useLocation();

  if (!auth.user.isLogged && url.pathname === '/login') {
    return
  }
  if (!auth.user.isLogged) {
    return <Navigate to="/login" />
  }

  return children;
}

export default PrivateRoute