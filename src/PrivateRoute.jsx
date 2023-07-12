import React from 'react';
import { Route, Navigate } from 'react-router-dom';

function PrivateRoute({ path, element: Component, isAuthenticated }) {
  return isAuthenticated ? (
    <Route path={path} element={<Component />} />
  ) : (
    <Navigate to="/" replace />
  );
}

export default PrivateRoute;
