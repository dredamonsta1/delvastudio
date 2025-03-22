import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Camera } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Camera className="w-6 h-6" />
            <span className="font-light text-lg">Photography Portfolio</span>
          </Link>
          
          <div className="flex space-x-8">
            <Link 
              to="/" 
              className={`text-sm hover:text-gray-600 transition-colors ${
                location.pathname === '/' ? 'text-black' : 'text-gray-400'
              }`}
            >
              Work
            </Link>
            <Link 
              to="/about" 
              className={`text-sm hover:text-gray-600 transition-colors ${
                location.pathname === '/about' ? 'text-black' : 'text-gray-400'
              }`}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`text-sm hover:text-gray-600 transition-colors ${
                location.pathname === '/contact' ? 'text-black' : 'text-gray-400'
              }`}
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