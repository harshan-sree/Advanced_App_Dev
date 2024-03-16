
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Footer from './assets/Footer';
import AdminDash from './assets/pages/AdminDash';
import Home from './assets/pages/Home';
import Login from './assets/pages/Login';
import SignUp from './assets/pages/SignUp';
import UserDash from './assets/pages/UserDash';

const App = () => {
  return (
    <>
      <BrowserRouter> 
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/sign" element={<SignUp/>}/>
          <Route exact path="/main" element={<UserDash/>}/>
          <Route exact path="/adm" element={<AdminDash/>}/>
       </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
