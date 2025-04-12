import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      // Check if page is scrolled more than 20px
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full bg-slate-800 text-white shadow-md z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-2 shadow-lg bg-opacity-95 backdrop-blur-sm' 
          : 'py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo now handles theme toggling */}
          <Logo size={isScrolled ? "small" : "medium"} />
          
          {/* Empty right side or you can add other navigation elements here */}
          <div className="flex items-center space-x-4">
            {/* Other header items can go here */}
          </div>
          <Navigation />
        </div>
      </div>
    </header>
  );
};

export default Header;