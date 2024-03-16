import React from 'react'
import Navbar from '../Navbar'
import Navbarr from './Navbarr'

const UserDash = () => {
  return (
    <div className="h-screen flex flex-col overflow-hidden bg-gray-100">
  <Navbarr/>
    <div className="flex flex-1 overflow-hidden">
      <div className="bg-blue-800 flex-shrink-0 w-64">
        <div className="flex items-center justify-center h-16 bg-blue-900">
          <span className="text-white text-lg font-bold">User Dashboard</span>
        </div>
        <nav className="flex flex-col mt-4">
          <a href="#" className="px-6 py-3 text-gray-300 hover:bg-blue-700 hover:text-white">Dashboard</a>
          <a href="#" className="px-6 py-3 text-gray-300 hover:bg-blue-700 hover:text-white">Profile</a>
          <a href="#" className="px-6 py-3 text-gray-300 hover:bg-blue-700 hover:text-white">Settings</a>
        </nav>
      </div>
      <div className="flex flex-col flex-1 w-0 overflow-hidden">
        <main className="flex-1 overflow-y-auto p-4 bg-gray-100">   
          <div className="container mx-auto py-8">
            <h1 className="text-3xl font-semibold text-gray-800">User Dashboard</h1>
            <p className="mt-2 text-sm text-gray-600">Welcome to the user dashboard. View your profile and settings here.</p>
          </div>
        </main>
      </div>
    </div>
  </div>
  )
}

export default UserDash
