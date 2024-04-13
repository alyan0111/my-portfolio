import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Nav() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

 
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`flex justify-between md:justify-evenly
      top-0 w-full text-slate-300 
      bg-black items-center py-2 z-10 font-permanent`}>
      <Link
        to="/"
        className="font-extrabold hover:text-orange-400 text-orange-500 text-2xl md:text-4xl "
      >
        Aliyan
      </Link>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button className=" hover:text-slate-200" onClick={toggleMenu}>
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
            Menu
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-black z-10">
          <ul className="flex flex-col items-center space-y-4">
            <li>
              <Link
                className={`block p-2 hover:border-b-4 hover:border-orange-500  font-semibold ${location.pathname === '/' ? 'border-b-4 border-orange-500 text-orange-500' : ''}`}
                onClick={toggleMenu}
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={`block p-2 hover:border-b-4 hover:border-orange-500 font-semibold ${location.pathname === '/about' ? 'border-b-4 border-orange-500 text-orange-500' : ''}`}
                onClick={toggleMenu}
                to="/about"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className={`block p-2 hover:border-b-4 hover:border-orange-500 font-semibold ${location.pathname === '/resume' ? 'border-b-4 border-orange-500 text-orange-500' : ''}`}
                onClick={toggleMenu}
                to="/resume"
              >
                Resume
              </Link>
            </li>
            <li>
              <Link
                className={`block p-2 hover:border-b-4 hover:border-orange-500 font-semibold ${location.pathname === '/skills' ? 'border-b-4 border-orange-500 text-orange-500' : ''}`}
                onClick={toggleMenu}
                to="/skills"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                className={`block p-2 hover:border-b-4 hover:border-orange-500 font-semibold ${location.pathname === '/services' ? 'border-b-4 border-orange-500 text-orange-500' : ''}`}
                onClick={toggleMenu}
                to="/services"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                className={`block p-2 hover:border-b-4 hover:border-orange-500 font-semibold ${location.pathname === '/contact' ? 'border-b-4 border-orange-500 text-orange-500' : ''}`}
                onClick={toggleMenu}
                to="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center space-x-4 text-slate-300 ">
        <li>
          <a className={`p-2 hover:border-b-4 hover:border-orange-500 font-semibold ${location.hash === '#home' ? 'border-b-4 border-orange-500 text-orange-500' : ''}`} href="#home">
            Home
          </a>
        </li>
        <li>
          <a className={`p-2 hover:border-b-4 hover:border-orange-500 font-semibold ${location.hash === '#about' ? 'border-b-4 border-orange-500 text-orange-500' : ''}`} href="#about">
            About
          </a>
        </li>
        <li>
          <a className={`p-2 hover:border-b-4 hover:border-orange-500 font-semibold ${location.hash === '#resume' ? 'border-b-4 border-orange-500 text-orange-500' : ''}`} href="#resume">
            Resume
          </a>
        </li>
        <li>
          <a className={`p-2 hover:border-b-4 hover:border-orange-500 font-semibold ${location.hash === '#skills' ? 'border-b-4 border-orange-500 text-orange-500 ' : ''}`} href="#skills">
            Skills
          </a>
        </li>
        <li>
          <a className={`p-2 hover:border-b-4 hover:border-orange-500 font-semibold ${location.hash === '#services' ? 'border-b-4 border-orange-500 text-orange-500' : ''}`} href="#services">
            Services
          </a>
        </li>
        <li>
          <a className={`p-2 hover:border-b-4 hover:border-orange-500 font-semibold ${location.hash === '#contact' ? 'border-b-4 border-orange-500 text-orange-500' : ''}`} href="#contact">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}
