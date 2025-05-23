import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaTint,
  FaHome,
  FaUserPlus,
  FaUsers,
  FaPhone,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = ({ onLogout }) => {
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
  className="h-10 sm:h-12 bg-transparent"
  alt="Instant Blood Donor Finder Logo"
  
/>
          <span className="text-red-600 text-center sm:text-left">
            INSTANT BLOOD DONOR FINDER
          </span>
        </div>

        {/* Hamburger - Small Screens */}
        <div className="w-full flex justify-center sm:hidden mt-2">
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="text-3xl text-red-600 focus:outline-none focus:ring-2 focus:ring-red-600 rounded"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Nav Items */}
        <ul
          className={`${
            menuOpen ? "flex" : "hidden"
          } sm:flex flex-col sm:flex-row w-full sm:w-auto items-center gap-4 sm:gap-6 mt-4 sm:mt-0`}
        >
          {[
            { icon: <FaHome />, label: "Home", to: "/" },
            { icon: <FaUserPlus />, label: "Be A Donor", to: "/be-a-donor" },
            // { icon: <FaUsers />, label: "Find Donor", to: "/find-donor" },
            { icon: <FaTint />, label: "About Us", to: "/about" },
            { icon: <FaPhone />, label: "Contact Us", to: "/contact" },
          ].map(({ icon, label, to }) => (
            <li key={label}>
              <Link
                to={to}
                className="flex items-center gap-2 cursor-pointer text-gray-900 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-600 rounded transition"
                onClick={() => setMenuOpen(false)}
              >
                {icon} <span>{label}</span>
              </Link>
            </li>
          ))}

          {/* Logout Button */}
          {onLogout && (
            <li>
              <button
                onClick={() => {
                  onLogout();
                  setMenuOpen(false);
                }}
                className="flex items-center gap-2 px-4 py-2 border border-red-600 text-red-600 rounded hover:bg-red-600 hover:text-white transition focus:outline-none focus:ring-2 focus:ring-red-600"
              >
                Logout
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
