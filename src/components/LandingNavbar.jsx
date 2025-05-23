import React, { useState } from "react";
import { FaSignInAlt, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const LandingNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="bg-gray-200 p-4 text-gray-900 shadow-md sticky top-0 z-50 bg-opacity-90 backdrop-blur-lg"
      role="navigation"
      aria-label="Primary Navigation"
    >
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 font-bold text-xl sm:text-2xl">
          <img
            src={logo}
            className="h-10 sm:h-12"
            alt="Instant Blood Donor Finder Logo"
          />
          <span className="text-red-600 text-center sm:text-left">
            INSTANT BLOOD DONOR FINDER
          </span>
        </div>

        {/* Nav Items (Only Login and Signup) */}
        <ul className="flex flex-row items-center gap-4 sm:gap-6 mt-4 sm:mt-0">
          {/* Spacer */}
          <li
            className="hidden sm:block border-l border-gray-400 h-6 mx-2"
            aria-hidden="true"
          ></li>

          {/* Login */}
          <li>
            <Link
              to="/login"
              className="flex items-center gap-2 px-4 py-2 border border-red-600 text-red-600 rounded hover:bg-red-600 hover:text-white transition focus:outline-none focus:ring-2 focus:ring-red-600"
              onClick={() => setMenuOpen(false)}
            >
              <FaSignInAlt /> Login
            </Link>
          </li>

          {/* Signup */}
          <li>
            <Link
              to="/signup"
              className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition focus:outline-none focus:ring-2 focus:ring-red-600"
              onClick={() => setMenuOpen(false)}
            >
              <FaUserCircle /> Signup
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default LandingNavbar;
