import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import resumePDF from '../Resource/AMITH HEGDE.pdf';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link 
              to="/" 
              className="text-2xl font-bold text-primary hover:scale-105 transition-transform duration-200"
            >
              AMITH HEGDE
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-gray-600 hover:text-primary hover:scale-105 transition-all duration-200 font-medium"
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-gray-600 hover:text-primary hover:scale-105 transition-all duration-200 font-medium"
            >
              About
            </Link>
            <Link 
              to="/works" 
              className="text-gray-600 hover:text-primary hover:scale-105 transition-all duration-200 font-medium"
            >
              My Works
            </Link>
            <Link 
              to="/contact" 
              className="text-gray-600 hover:text-primary hover:scale-105 transition-all duration-200 font-medium"
            >
              Contact
            </Link>
            <a
              href={resumePDF}
              download="Amith_Hegde_Resume.pdf"
              className="px-4 py-2 text-primary border-2 border-primary rounded-lg 
                hover:bg-primary hover:text-white transition-all duration-300 
                transform hover:scale-105 hover:shadow-lg font-semibold 
                active:scale-95"
            >
              <span className="flex items-center gap-2">
                Download Resume
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" 
                  />
                </svg>
              </span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-primary focus:outline-none 
                transition-transform duration-200 hover:scale-110"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg rounded-b-lg">
            <Link 
              to="/" 
              className="block px-3 py-2 text-gray-600 hover:text-primary hover:bg-gray-50 rounded-lg transition-all duration-200"
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="block px-3 py-2 text-gray-600 hover:text-primary hover:bg-gray-50 rounded-lg transition-all duration-200"
            >
              About
            </Link>
            <Link 
              to="/works" 
              className="block px-3 py-2 text-gray-600 hover:text-primary hover:bg-gray-50 rounded-lg transition-all duration-200"
            >
              My Works
            </Link>
            <Link 
              to="/contact" 
              className="block px-3 py-2 text-gray-600 hover:text-primary hover:bg-gray-50 rounded-lg transition-all duration-200"
            >
              Contact
            </Link>
            <a
              href={resumePDF}
              download="Amith_Hegde_Resume.pdf"
              className="block px-3 py-2 mt-2 text-primary border-2 border-primary 
                rounded-lg hover:bg-primary hover:text-white transition-all duration-300 
                text-center font-semibold"
            >
              <span className="flex items-center justify-center gap-2">
                Download Resume
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" 
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;