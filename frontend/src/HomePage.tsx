import './index.css';
import HeroSection from './components/sections/HeroSection';
import ProjectsSection from './components/sections/ProjectsSection';
import AboutSection from './components/sections/AboutSection';
import ContactSection from './components/sections/ContactSection';

const HomePage = () => {
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