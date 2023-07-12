import logo from './logo.svg';
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './component/Home';
import Profile from './component/Profile';
import OAuth2RedirectHandler from './component/OAuth2RedirectHandler';
import PrivateRoute from './PrivateRoute';




function App() {

   const isAuthenticated = true;

  return (
    
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/profile/*"
        element={<PrivateRoute element={Profile} isAuthenticated={isAuthenticated} />}
      />
      <Route path="/oauth2/redirect" element={<OAuth2RedirectHandler />} />
    </Routes>
  </Router>
    
  );
}

export default App;
