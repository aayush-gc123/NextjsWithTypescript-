"use client"
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <a href="#" className="flex items-center py-4 px-2">
                <img 
                src="https://play-lh.googleusercontent.com/R6nnBrz3nukRct2FliOgttKowm-vMEVexuHbbUHImrNaOoC6WHogEsjJNQBrkSCo8Q=w240-h480-rw"
                 alt="Logo"
                  className="h-8 w-8 mr-2" />
                <span className="font-semibold text-white text-lg">Pragati Secondary School</span>
              </a>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            <a href="#" className="py-4 px-2 text-white hover:text-gray-300 transition duration-300">Home</a>
            <a href="#" className="py-4 px-2 text-white hover:text-gray-300 transition duration-300">About</a>
            <a href="#" className="py-4 px-2 text-white hover:text-gray-300 transition duration-300">Blog</a>
            <a href="#" className="py-4 px-2 text-white hover:text-gray-300 transition duration-300">Contact Us</a>
          </div>
          <div className="md:hidden flex items-center">
            <button className="outline-none mobile-menu-button" onClick={toggleMenu}>
              {isOpen ? (
                <FaTimes className="h-6 w-6 text-white" />
              ) : (
                <FaBars className="h-6 w-6 text-white" />
              )}
            </button>
          </div>
        </div>
      </div>
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-800 text-white">Home</a>
        <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-800 text-white">About</a>
        <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-800 text-white">Blog</a>
        <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-800 text-white">Contact Us</a>
      </div>
    </nav>
  );
};

export default Footer;