import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../../assets/logo.jpg";

const Navbar: React.FC = () => {
    const location = useLocation();
    const currentPath = location.pathname;

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Services", path: "/services" },
    ];

    return (
        <nav className="bg-blue-900 text-white shadow-md fixed top-0 left-0 w-full z-50">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className="flex justify-between h-24 items-center">

                    {/* Logo */}
                    <div className="flex items-center space-x-3">
                        <img
                            src={logo}
                            alt="Logo"
                            className="h-14 w-14 object-contain rounded-full"
                        />
                        <span className="font-bold text-xl tracking-wide">
                            Ariyana Tech Solutions
                        </span>
                    </div>

                    {/* Navigation Links */}
                    <div className="hidden md:flex space-x-8 items-center">
                        {navLinks.map((link) => (
                            <div key={link.path} className="relative">
                                <Link
                                    to={link.path}
                                    className={`text-lg hover:text-blue-300 transition ${currentPath === link.path ? "text-yellow-300" : ""
                                        }`}
                                >
                                    {link.name}
                                </Link>

                                {/* Animated underline */}
                                {currentPath === link.path && (
                                    <motion.div
                                        layoutId="underline"
                                        className="absolute left-0 right-0 h-[3px] bg-yellow-400 rounded"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.3 }}
                                        style={{ bottom: -4 }}
                                    />
                                )}
                            </div>
                        ))}

                        {/* Contact Button */}
                        <Link
                            to="/contact"
                            className="ml-12 bg-yellow-400 text-blue-900 font-semibold px-6 py-3 rounded-lg hover:bg-yellow-500 transition duration-300 text-lg"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
