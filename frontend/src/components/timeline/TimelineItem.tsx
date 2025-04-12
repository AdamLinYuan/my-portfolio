import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

interface TimelineItemProps {
  date: string;
  title: string;
  description: string;
  technologies?: string[];
  imageUrl?: string;
  link?: string;
  position: 'left' | 'right';
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  date,
  title,
  description,
  technologies = [],
  imageUrl,
  link,
  position
}) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <div 
      ref={ref}
      className={`flex items-center relative mb-16 ${
        position === 'left' ? 'flex-row' : 'flex-row-reverse'
      }`}
    >
      {/* Timeline center line */}
      <div className="absolute top-0 bottom-0 w-1 bg-blue-500 left-1/2 transform -translate-x-1/2" />
      
      {/* Date bubble */}
      <div className="absolute left-1/2 top-5 transform -translate-x-1/2 z-10 h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center shadow-md">
        <span className="text-white text-xs font-bold">{date.split(" ")[0]}</span>
      </div>

      {/* Content */}
      <div 
        className={`w-5/12 ${
          inView ? 'animate-fadeIn' : 'opacity-0'
        } transition-all duration-700 ${position === 'right' ? 'text-right' : ''}`}
      >
        <div 
          className={`bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ${
            position === 'left' ? 'mr-8' : 'ml-8'
          }`}
        >
          <h3 className="font-bold text-lg text-blue-600 dark:text-blue-400 mb-2">{title}</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>
          
          {imageUrl && (
            <img 
              src={imageUrl} 
              alt={title} 
              className="rounded-md shadow-sm mb-4 max-h-40 object-cover w-full"
            />
          )}
          
          {technologies.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3 mb-3">
              {technologies.map(tech => (
                <span 
                  key={tech} 
                  className="bg-gray-100 dark:bg-gray-700 text-xs px-2 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
          
          {link && (
            <a 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 inline-flex items-center text-sm"
            >
              View Project
              <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          )}
        </div>
        <div className="mt-2 text-sm text-gray-500 dark:text-gray-400 font-semibold">{date}</div>
      </div>
    </div>
  );
};

export default TimelineItem;