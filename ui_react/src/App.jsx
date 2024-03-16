// import React from 'react'
// import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
// import Footer from './assets/Footer'
// import Navbar from './assets/Navbar'
// import Home from './assets/pages/Home'

// import Login from './assets/pages/Login'


// const App = () => {
 
//   return (
//     <>
//     <BrowserRouter>

//         {location.pathname!=='/login' && <Navbar/>}
       
//          <Routes>
//            <Route exact path="/" element={<Home />} />
//            <Route exact path="/login" element={<Login />} />
//            {/* Add more routes if needed */}
//          </Routes>
//          <Footer/>
//     </BrowserRouter>
//     </>
//    )
// }
// export default App
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Footer from './assets/Footer';
import Navbar from './assets/Navbar';
import Home from './assets/pages/Home';
import Login from './assets/pages/Login';

const App = () => {
  return (
    <>
      <BrowserRouter>
        {/* {showNavbar && lo!=='/login' && <Navbar />} */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          {/* Add more routes if needed */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
