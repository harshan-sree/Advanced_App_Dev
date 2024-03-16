
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Footer from './assets/Footer';
import Navbar from './assets/Navbar';
import Home from './assets/pages/Home';
import Login from './assets/pages/Login';
import Main from './assets/pages/Main';
import SignUp from './assets/pages/SignUp';

const App = () => {
  return (
    <>
      <BrowserRouter> 
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/sign" element={<SignUp/>}/>
          <Route exact path="/main" element={<Main/>}/>
       </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
