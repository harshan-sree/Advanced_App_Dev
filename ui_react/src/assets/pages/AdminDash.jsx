import React from 'react'
import { Link } from 'react-router-dom'

const AdminDash = () => {
  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      <div className="bg-gray-800 flex-shrink-0 w-64">
        <div className="flex items-center justify-center h-16 bg-gray-900">
          <span className="text-white text-lg font-bold">Admin Dashboard</span>
        </div>
        <nav className="flex flex-col mt-2">
          <a href="#" className="px-6 py-3 text-gray-300 hover:bg-gray-700 hover:text-white">Dashboard</a>
          <a href="/user" className="px-6 py-3 text-gray-300 hover:bg-gray-700 hover:text-white">Users</a>
          <a href="/prog" className="px-6 py-3 text-gray-300 hover:bg-gray-700 hover:text-white">Teacher Training Programs</a>
          <a href="/yogList" className="px-6 py-3 text-gray-300 hover:bg-gray-700 hover:text-white">Yoga Classes</a>
        </nav>
      </div>
      <div className="flex flex-col flex-1 w-0 overflow-hidden">
        <header className="flex items-center justify-between bg-white border-b border-gray-200 px-4 py-2">
          <div>
            <button className="text-gray-400 focus:outline-none focus:text-gray-500">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
          <div>
            <span className="text-lg font-bold">Welcome, Admin!</span>
          </div>
          <div>
            <button className="text-gray-400 focus:outline-none focus:text-gray-500">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v.01M12 8v.01M12 12v.01M12 16v.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
            </button>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto p-4 bg-gray-100">
          <div className="container mx-auto py-8">
            <h1 className="text-3xl font-semibold text-gray-800">Admin Dashboard</h1>
            <p className="mt-2 text-sm text-gray-600">Welcome to the admin dashboard. Manage your users and settings here.</p>
          </div>
        </main>
      </div>
    </div>
  )
}

export default AdminDash
