import React from 'react';
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
  // Extract year from date string
  const month = date.split(" ")[0];
  const year = date.split(" ")[1];
  
  // Use a lower threshold and delay to create a staggered animation effect
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });
  
  // Check if imageUrl is a YouTube embed URL
  const isYouTubeEmbed = imageUrl?.includes('youtube.com/embed/');
  
  // Extract YouTube video ID if it's a YouTube embed
  const getYouTubeVideoId = (url: string) => {
    if (!url) return null;
    const match = url.match(/embed\/([^/?]+)/);
    return match ? match[1] : null;
  };
  
  const youTubeVideoId = isYouTubeEmbed ? getYouTubeVideoId(imageUrl!) : null;

  return (
    <div 
      ref={ref}
      className={`flex items-start relative mb-16 sm:mb-24 min-h-[100px] ${
        position === 'left' ? 'flex-row' : 'flex-row-reverse'
      } md:px-4`}
    >
      {/* Year number opposite to content */}
      <div className={`
        absolute hidden md:block ${position === 'left' ? 'right-0 pr-8' : 'left-0 pl-8'} 
        top-6 transform 
        transition-all duration-700 ease-out
        ${inView ? 'opacity-100' : 'opacity-0'}
      `}>
        <span className={`
          text-5xl font-bold text-gray-200 dark:text-gray-700
          ${position === 'left' ? 'text-right' : 'text-left'}
          inline-block w-20
        `}>
          {year}
        </span>
      </div>

      {/* Date bubble */}
      <div className={`
        absolute left-1/2 top-0 transform -translate-x-1/2 z-10 h-12 w-12 
        rounded-full bg-blue-500 flex items-center justify-center shadow-lg
        transition-all duration-500 ease-out
        ${inView ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}
      `}>
        <span className="text-white text-xs font-bold">{month}</span>
      </div>

      {/* Content */}
      <div 
        className={`
          w-full md:w-5/12 px-4 md:px-0
          ${position === 'right' ? 'md:ml-auto' : ''} 
          transition-all duration-700 ease-out transform
          ${inView 
            ? 'opacity-100 ' + (position === 'left' ? 'translate-x-0' : 'translate-x-0') 
            : 'opacity-0 ' + (position === 'left' ? '-translate-x-12' : 'translate-x-12')
          }
        `}
      >
        <div 
          className={`
            bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md 
            hover:shadow-xl transition-all duration-300 mt-8
            border-t-4 ${position === 'left' ? 'border-blue-500' : 'border-indigo-500'}
          `}
        >
          <h3 className="font-bold text-lg text-blue-600 dark:text-blue-400 mb-2">{title}</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">{description}</p>
          
          {imageUrl && (
            <div className="mb-4 overflow-hidden rounded-md shadow-sm h-40 group">
              {isYouTubeEmbed ? (
                <div className="relative w-full h-full">
                  <iframe 
                    src={imageUrl}
                    className="absolute top-0 left-0 w-full h-full"
                    title={title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              ) : (
                <img 
                  src={imageUrl} 
                  alt={title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = '/images/placeholder.jpg';
                    console.warn(`Failed to load image: ${imageUrl}`);
                  }}
                />
              )}
            </div>
          )}
          
          {technologies.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4 mb-3">
              {technologies.slice(0, 4).map(tech => (
                <span 
                  key={tech} 
                  className="bg-gray-100 dark:bg-gray-700 text-xs px-2 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
              {technologies.length > 4 && (
                <span className="bg-gray-200 dark:bg-gray-600 text-xs px-2 py-1 rounded-full">
                  +{technologies.length - 4}
                </span>
              )}
            </div>
          )}
          
          {link && (
            <div className="mt-4 border-t dark:border-gray-700 pt-3">
              <a 
                href={link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 inline-flex items-center text-sm font-medium transition-colors"
              >
                {isYouTubeEmbed ? 'View Code' : 'View Project'}
                <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
              
              {isYouTubeEmbed && youTubeVideoId && (
                <a 
                  href={`https://www.youtube.com/watch?v=${youTubeVideoId}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-red-500 hover:text-red-700 inline-flex items-center text-sm font-medium transition-colors ml-4"
                >
                  Watch on YouTube
                  <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                  </svg>
                </a>
              )}
            </div>
          )}
        </div>
        <div className={`mt-2 text-sm text-gray-500 dark:text-gray-400 font-semibold px-1 ${position === 'right' ? 'text-right' : 'text-left'}`}>
          {date}
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;