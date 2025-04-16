import React, { useRef } from 'react';
import { HashLink } from 'react-router-hash-link';
import { motion, useScroll, useTransform } from 'framer-motion';

const HeroSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  // Get scroll progress relative to the section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  
  // Calculate effects based on scroll position
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const translateY = useTransform(scrollYProgress, [0, 0.5], [0, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  
  // Background blur effects
  const blurScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.5]);
  const blueBgY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const purpleBgY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const greenBgY = useTransform(scrollYProgress, [0, 1], [0, -75]);

  // Scroll down arrow animations
  const bounceTransition = {
    y: {
      duration: 1.6,
      repeat: Infinity,
      repeatType: "reverse" as const,
      ease: "easeInOut"
    }
  };

  return (
    <section 
      ref={sectionRef}
      id="home" 
      className="py-24 min-h-[80vh] flex items-center scroll-m-16 overflow-hidden relative"
    >
      {/* Background parallax elements with reactive motion */}
      <motion.div 
        className="absolute inset-0 opacity-10 dark:opacity-5 pointer-events-none"
        style={{ scale: blurScale }}
      >
        <motion.div 
          className="absolute top-10 left-[10%] h-40 w-40 rounded-full bg-blue-400 blur-3xl"
          style={{ y: blueBgY }}
        />
        <motion.div 
          className="absolute top-40 right-[15%] h-60 w-60 rounded-full bg-indigo-500 blur-3xl"
          style={{ y: purpleBgY }}
        />
        <motion.div 
          className="absolute bottom-20 left-[30%] h-40 w-40 rounded-full bg-purple-400 blur-3xl"
          style={{ y: greenBgY }}
        />
      </motion.div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          style={{ 
        opacity, 
        y: translateY,
        scale
          }}
        >
          <motion.h1 
        className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
          >
        I'm <motion.span 
          className="text-blue-600"
          initial={{ color: "#3B82F6" }}
          whileHover={{ color: "#1E40AF", scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >Adam</motion.span>
          </motion.h1>
          
          <motion.p 
        className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
          >
        Full-Stack Developer
          </motion.p>
          
          <motion.div 
        className="flex flex-wrap justify-center gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
          >
        <HashLink 
          smooth
          to="#projects"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-lg font-medium transition-all hover:scale-105 flex items-center"
        >
          View My Work
          <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L11.586 12H6a1 1 0 110-2h5.586l-2.293-2.293a1 1 0 111.414-1.414l4 4z" clipRule="evenodd" />
          </svg>
        </HashLink>
        <HashLink 
          smooth
          to="#contact"
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white px-6 py-3 rounded-md text-lg font-medium transition-all hover:scale-105"
        >
          Contact Me
        </HashLink>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll Down Arrow - Moved to the bottom of the section */}
      <motion.div 
        className="absolute bottom-2 left-0 right-0 flex flex-col items-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <motion.p 
          className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1 tracking-wider"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          SCROLL DOWN
        </motion.p>
        
        <motion.svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          className="text-blue-500 dark:text-blue-400"
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <path d="M12 5v14M5 12l7 7 7-7"/>
        </motion.svg>
      </motion.div>
    </section>
  );
};

export default HeroSection;