
// import React, { Suspense, useEffect, useState } from 'react';
// import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
// import Footer from './assets/Footer';
// import AboutUs from './assets/pages/AboutUs';
// import AdminDash from './assets/pages/AdminDash';
// import ContactUs from './assets/pages/ContactUs';
// import Home from './assets/pages/Home';
// import List from './assets/pages/List';
// import Login from './assets/pages/Login';
// import Meditation from './assets/pages/Meditation';
// import Profile from './assets/pages/Profile';
// import ProgramBook from './assets/pages/ProgramBook';
// import SignUp from './assets/pages/SignUp';
// import Success from './assets/pages/Success';
// import Training from './assets/pages/Training';
// import TrainingBook from './assets/pages/TrainingBook';
// import UserDash from './assets/pages/UserDash';
// import UserList from './assets/pages/UserList';
// import Workshop from './assets/pages/Workshop';
// import YogaClass from './assets/pages/YogaClass';
// import YogaList from './assets/pages/YogaList';

// const App = () => {
//   return (
//     <>
//       <BrowserRouter> 
      
//         <Routes>
//           <Route exact path="/" element={<Home />} />
//           <Route exact path="/login" element={<Login />} />
//           <Route exact path="/sign" element={<SignUp/>}/>
//           <Route exact path="/main" element={<UserDash/>}/>
//           <Route exact path="/adm" element={<AdminDash/>}/>
//           <Route exact path="/profile" element={<Profile/>}/>
//           <Route exact path='/about' element={<AboutUs/>}/>
//           <Route exact path='/contact' element={<ContactUs/>}/>
//           <Route exact path='/class' element={<YogaClass/>}/>
//           <Route path="/details/:className" element={<Success />} />
//           <Route path='/meditation' element={<Meditation/>}/>
//           <Route path='/training' element={<Training/>}/>
//           <Route path='/book-slot/:programName' element={<TrainingBook/>}/>
//           <Route path="/booked" element={<ProgramBook />} />
//           <Route path='/work' element={<Workshop/>}/>
//           <Route path='/prog' element={<List/>}/>
//           <Route path='/yogList' element={<YogaList/>}/>
//           <Route path='/user' element={<UserList/>}/>
//                 </Routes>
//         <Footer />
//       </BrowserRouter>
//     </>
//   );
// };

// export default App;


import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './assets/Footer';
const AboutUs = lazy(() => import('./assets/pages/AboutUs'));
const AdminDash = lazy(() => import('./assets/pages/AdminDash'));
const ContactUs = lazy(() => import('./assets/pages/ContactUs'));
const Home = lazy(() => import('./assets/pages/Home'));
const List = lazy(() => import('./assets/pages/List'));
const Login = lazy(() => import('./assets/pages/Login'));
const Meditation = lazy(() => import('./assets/pages/Meditation'));
const Profile = lazy(() => import('./assets/pages/Profile'));
const ProgramBook = lazy(() => import('./assets/pages/ProgramBook'));
const SignUp = lazy(() => import('./assets/pages/SignUp'));
const Success = lazy(() => import('./assets/pages/Success'));
const Training = lazy(() => import('./assets/pages/Training'));
const TrainingBook = lazy(() => import('./assets/pages/TrainingBook'));
const UserDash = lazy(() => import('./assets/pages/UserDash'));
const UserList = lazy(() => import('./assets/pages/UserList'));
const Workshop = lazy(() => import('./assets/pages/Workshop'));
const YogaClass = lazy(() => import('./assets/pages/YogaClass'));
const YogaList = lazy(() => import('./assets/pages/YogaList'));

const App = () => {
  return (
    <BrowserRouter> 
      <Suspense fallback={<div>Loading...</div>}>
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
          <Route path='/meditation' element={<Meditation/>}/>
          <Route path='/training' element={<Training/>}/>
          <Route path='/book-slot/:programName' element={<TrainingBook/>}/>
          <Route path="/booked" element={<ProgramBook />} />
          <Route path='/work' element={<Workshop/>}/>
          <Route path='/prog' element={<List/>}/>
          <Route path='/yogList' element={<YogaList/>}/>
          <Route path='/user' element={<UserList/>}/>
       
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
