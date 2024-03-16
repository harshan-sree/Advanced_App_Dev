import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbarr = () => {
  return (
    <nav className="w-full bg-gray-800 py-2 px-4 lg:px-8 flex justify-center">
    <div className="container flex items-center justify-between mx-auto text-blue-gray-900">
      <NavLink to="/" className="text-white font-bold text-lg">
        THE YogaAcademy
      </NavLink>
      <ul className="hidden lg:flex flex-row gap-6 items-center">
        <li className="text-white">
          <NavLink to="/" activeClassName="font-bold">
            Home
          </NavLink>
        </li>
        <li className="text-white">
          <NavLink to="/admin" activeClassName="font-bold">
            Admin
          </NavLink>
        </li>
        <li className="text-white">
          <NavLink to="/resources" activeClassName="font-bold">
            Resources
          </NavLink>
        </li>
        <li className="text-white">
          <NavLink to="/contact" activeClassName="font-bold">
            Contact Us
          </NavLink>
        </li>
      </ul>
      <div className="flex gap-x-1 items-center">
        <a
          href="https://www.instagram.com/theyogainstituteofficial"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-instagram"
            viewBox="0 0 16 16"
          >
            {/* Instagram icon */}
          </svg>
        </a>
        <a
          href="https://www.youtube.com/@theyogainstituteofficial"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-youtube"
            viewBox="0 0 16 16"
          >
            {/* YouTube icon */}
          </svg>
        </a>
      </div>
    </div>
  </nav>
  )
}

export default Navbarr
