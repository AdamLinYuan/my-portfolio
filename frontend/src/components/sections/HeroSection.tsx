import React from 'react';
import { HashLink } from 'react-router-hash-link';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="py-20 min-h-[80vh] flex items-center scroll-m-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            I'm <span className="text-blue-600">Adam</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-10">
            Full-Stack Developer & UI/UX Enthusiast
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <HashLink 
              smooth
              to="#projects"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-lg font-medium transition-colors flex items-center"
            >
              View My Work
              <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L11.586 12H6a1 1 0 110-2h5.586l-2.293-2.293a1 1 0 111.414-1.414l4 4z" clipRule="evenodd" />
              </svg>
            </HashLink>
            <HashLink 
              smooth
              to="#contact"
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white px-6 py-3 rounded-md text-lg font-medium transition-colors"
            >
              Contact Me
            </HashLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;