import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpg";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between h-24 items-center"> {/* Increased height */}
          {/* Logo and Company Name */}
          <div className="flex items-center space-x-3"> {/* Slightly more spacing */}
            <img
              src={logo}
              alt="Logo"
              className="h-14 w-14 object-contain rounded-full" // Bigger logo
            />
            <span className="font-bold text-2xl">Ariyana Tech Solutions</span> {/* Bigger font */}
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8 items-center"> {/* More spacing between links */}
            <Link to="/" className="hover:text-blue-400 text-lg">Home</Link>
            <Link to="/about" className="hover:text-blue-400 text-lg">About</Link>
            <Link to="/services" className="hover:text-blue-400 text-lg">Services</Link>

            {/* Contact as a yellow button */}
            <Link
              to="/contact"
              className="ml-12 bg-yellow-400 text-blue-900 font-semibold px-6 py-3 rounded-lg hover:bg-yellow-500 transition duration-300 text-lg"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
