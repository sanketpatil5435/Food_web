import React, { useState } from 'react';

import './App.css';
import './Foodweb.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import OpenRoute from './components/OpenRoute';
import Navbar from './components/Navbar';

import Signup from './pages/Signup';
import Login from './pages/Login';
import VerifyEmail from './pages/VerifyEmail';
import ForgotPassword from './pages/ForgotPassword';
import UpdatePassword from './pages/UpdatePassword';

const App = () => {
  

  return (
    <div className="container">
     
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route
          path="login"
          element={
            <OpenRoute>
              <Login />
            </OpenRoute>
          }
        />
        
       
        <Route
          path="signup"
          element={
            <OpenRoute>
              <Signup />
            </OpenRoute>
          }
        />

        <Route
          path="verify-email"
          element={
            <OpenRoute>
              <VerifyEmail />
            </OpenRoute>
          }
        />

          <Route
          path="forgot-password"
          element={
            <OpenRoute>
              <ForgotPassword />
            </OpenRoute>
          }
        />

          <Route
          path="update-password/:id"
          element={
            <OpenRoute>
              <UpdatePassword />
            </OpenRoute>
          }
        />
        
      </Routes>



     
    </div>
  );
};

export default App;
