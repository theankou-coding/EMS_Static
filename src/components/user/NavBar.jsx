import React, { useState, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { mainNavigation } from "../../data/navigation";

const Navbar = ({ user = null, onLogout }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Scroll effect for navbar background
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 10);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Close mobile menu on route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-white shadow" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-3 md:py-4">
        {/* Left side: Logo */}
        <Link to="/" className="flex items-center space-x-2">
          {/* <div className="bg-blue-600 p-2 rounded-full"> */}
          {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 10h2l2-3 3 8 4-5 3 8h2"
              />
            </svg> */}
          {/* </div> */}
          <span className="font-poppins text-[1.5rem] font-bold text-black">
            Eventify .
          </span>
        </Link>

        {/* Center: Desktop navigation */}
        <div className="hidden md:flex space-x-8 text-gray-900 font-medium">
          {mainNavigation.map(({ id, name, path }) => (
            <Link
              key={id}
              to={path}
              className={`hover:text-blue-600 border-b-2 ${
                location.pathname === path
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent"
              } pb-1`}
            >
              {name}
            </Link>
          ))}
        </div>

        {/* Right side: Search & User icon */}
        <div className="flex items-center space-x-6">
          {/* Search Button/Icon */}
          <button
            aria-label="Search"
            className="text-gray-600 hover:text-gray-900 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 md:h-6 md:w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>

          {/* User Icon */}
          <Link
            to="/user/profile"
            aria-label="User Profile"
            className="text-gray-700 hover:text-black transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 md:h-7 md:w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.121 17.804A7 7 0 1112 19a7 7 0 11-6.879-1.196zM15 11a3 3 0 10-6 0 3 3 0 006 0z"
              />
            </svg>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden ml-4 text-gray-700 hover:text-black focus:outline-none"
          aria-label="Toggle menu"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-200">
          <div className="flex flex-col px-6 py-4 space-y-3 font-medium text-gray-900">
            {mainNavigation.map(({ id, name, path }) => (
              <Link
                key={id}
                to={path}
                className={`block py-2 border-b border-gray-200 ${
                  location.pathname === path
                    ? "text-blue-600 font-semibold"
                    : "hover:text-blue-600"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
