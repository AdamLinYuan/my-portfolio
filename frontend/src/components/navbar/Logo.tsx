import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
}

const Logo: React.FC<LogoProps> = ({ size = 'medium' }) => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  
  const sizeClasses = {
    small: 'text-xl md:text-2xl py-1 px-2',
    medium: 'text-2xl md:text-3xl py-2 px-3',
    large: 'text-3xl md:text-4xl py-3 px-4'
  };
  
  // Container styles with theme indicator
  const containerClass = `
    bg-slate-700 rounded-md transition-all duration-300 
    hover:bg-slate-600 hover:shadow-lg 
    hover:shadow-${isDarkMode ? 'blue' : 'amber'}-500/30 
    transform hover:scale-105 
    border border-transparent 
    hover:border-${isDarkMode ? 'blue' : 'amber'}-400 
    cursor-pointer
    relative
  `;
  
  // Handle logo click to toggle theme
  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    toggleDarkMode();
  };
  
  // Small indicator for current theme


  return (
    <Link to="/" onClick={handleLogoClick} className="no-underline focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-md">
      <div className={containerClass}>
        <span className={`font-bold ${sizeClasses[size]} text-white block font-['Noto_Sans_SC']`}>
          袁霖
        </span>
      </div>
    </Link>
  );
};

export default Logo;