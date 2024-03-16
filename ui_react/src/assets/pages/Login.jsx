// import React from 'react'
// import { Link, NavLink } from 'react-router-dom'

// const Login = () => {
   
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{backgroundImage: 'url("advback.jpg")'}}>
//     <div className="max-w-md w-full bg-white bg-opacity-80 p-8 rounded shadow-lg">
//       <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
//       <form className="mt-8 space-y-6" action="#" method="POST">
//         <input type="hidden" name="remember" value="true" />
//         <div className="rounded-md shadow-sm -space-y-px">
//           <div>
//             <label htmlFor="email-address" className="sr-only">Email address</label>
//             <input id="email-address" name="email" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" />
//           </div>
//           <div>
//             <label htmlFor="password" className="sr-only">Password</label>
//             <input id="password" name="password" type="password" autoComplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
//           </div>
//         </div>

//         <div className="flex items-center justify-between">
//           <div className="flex items-center">
//             <input id="remember_me" name="remember_me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
//             <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
//               Remember me
//             </label>
//           </div>

//           <div className="text-sm">
//             <Link to='/sign'>
//             <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
//               Don't have an account? Sign Up
//             </a>
//             </Link>
//           </div>
//         </div>

//         <div>
//           <Link to="/"><button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
//             Sign in
//           </button></Link>
//         </div>
//       </form>
//     </div>
//   </div>
//   )
// }

// export default Login


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history=useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

   
    if (email.trim() !== '' && password.trim() !== '') {
      if (email === 'admin@gmail.com') { 
        history('/adm');
      } else {
       
        history('/main');
      }
    } else {
    
      console.log('Please fill in both email and password fields.');
    }
   
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{backgroundImage: 'url("advback.jpg")'}}>
      <div className="max-w-md w-full bg-white bg-opacity-80 p-8 rounded shadow-lg">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <input id="email-address" name="email" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input id="password" name="password" type="password" autoComplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input id="remember_me" name="remember_me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
              <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <Link to='/sign'>
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Don't have an account? Sign Up
                </a>
              </Link>
            </div>
          </div>

          <div>
            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
