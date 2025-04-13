import React from 'react';
import Timeline from '../timeline/Timeline';
import { motion } from 'framer-motion';

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="py-20 scroll-m-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, margin: "-100px" }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
            The Timeline
          </h2>
          <p className="text-center text-lg text-gray-700 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            A chronological journey through my key projects.
          </p>
        </motion.div>
        
        <Timeline />
      </div>
    </section>
  );
};

export default ProjectsSection;