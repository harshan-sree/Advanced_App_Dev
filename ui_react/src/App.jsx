
import React, { Suspense, useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Footer from './assets/Footer';
import AboutUs from './assets/pages/AboutUs';
import AdminDash from './assets/pages/AdminDash';
import ContactUs from './assets/pages/ContactUs';
import Home from './assets/pages/Home';
import Login from './assets/pages/Login';
import Profile from './assets/pages/Profile';
import SignUp from './assets/pages/SignUp';
import Success from './assets/pages/Success';
import UserDash from './assets/pages/UserDash';
import YogaClass from './assets/pages/YogaClass';

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
          <Route exact path="/profile" element={<Profile/>}/>
          <Route exact path='/about' element={<AboutUs/>}/>
          <Route exact path='/contact' element={<ContactUs/>}/>
          <Route exact path='/class' element={<YogaClass/>}/>
          <Route path="/details/:className" element={<Success />} />
       </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
