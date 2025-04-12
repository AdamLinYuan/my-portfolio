import React from 'react';
import './index.css';
import { useTheme } from './contexts/ThemeContext';
import HeroSection from './components/sections/HeroSection';
import ProjectsSection from './components/sections/ProjectsSection';
import AboutSection from './components/sections/AboutSection';
import ContactSection from './components/sections/ContactSection';

const HomePage = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;