import React, { useEffect } from 'react';
import TimelineItem from './TimelineItem';
import { useInView } from 'react-intersection-observer';

interface Project {
  id: number;
  date: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  link?: string;
}

const projects: Project[] = [
  {
    id: 1,
    date: "August 2021",
    title: "AI Facial recognition",
    description: "A functional AI-based facial recognition program, contributing to a practical application of computer vision technology.",
    technologies: ["Python", "OpenCV", "Mediapipe"],
    imageUrl: "/videos/Facemesh.mp4",
    link: "https://github.com/AdamLinYuan/FaceMeshModule-and-Full-body-detection"
  },
  {
    id: 2,
    date: "Jan 2022",
    title: "Game",
    description: "A 2D 1v1 Brawling Game made using Unity Game Engine",
    technologies: ["C#", "Unity", "Procreate"],
    imageUrl: "/videos/game.mp4",
    link: "https://github.com/AdamLinYuan/Unity-2D-Game"
  },
  {
    id: 3,
    date: "March 2024",
    title: "Bookle",
    description: "A Daily book search web game, inspired by Wordle",
    technologies: ["Google Books API", "Python", "Django", "Html", "CSS"],
    imageUrl: "/images/bookle.jpg",
    link: "https://github.com/phantomsheepp/group1a_wad_project"
  },
  {
    id: 4,
    date: "April 2024",
    title: "Astraeus-01 satellite",
    description: "A weather dashboard that shows forecasts and historical data",
    technologies: ["React", "Chart.js", "Weather API"],
    imageUrl: "/images/projects/weather.jpg",
    link: "https://github.com/guorbit"
  },
  {
    id: 5,
    date: "April 2025",
    title: "JPMorgan Code For Good Hackathon Winner",
    description: "My team and I came up with an innovative solution for the MCR pathway which allowed their mentor and mentees to be paired up efficiently",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Django", "Postgres"],
    imageUrl: "/images/CFG2025.jpg",
    link: "https://github.com/cfgglasgow25/Team-6"
  },
  {
    id: 6,
    date: "April 2025",
    title: "Portfolio Website",
    description: "A personal portfolio website built with React and TypeScript",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    imageUrl: "/images/portfolio.jpg",
    link: "https://github.com/adamlinyuan/my-portfolio"
  }
];

const Timeline: React.FC = () => {
  const { ref: todayRef, inView: todayInView } = useInView({
    threshold: 0.5,
    triggerOnce: false
  });

  return (
    <div className="max-w-5xl mx-auto mt-12 relative px-4 py-12">
      
      {/* Timeline container with position relative */}
      <div className="relative">
        {/* Single continuous line - IMPORTANT: Adjusted to work with the Today marker */}
        <div 
          className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-400 via-blue-500 to-indigo-600"
          style={{ top: '9rem', bottom: '2rem' }} 
        ></div>
        
        {/* Timeline items */}
        {projects.map((project, index) => (
          <TimelineItem
            key={project.id}
            date={project.date}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            imageUrl={project.imageUrl}
            link={project.link}
            position={index % 2 === 0 ? 'left' : 'right'}
          />
        ))}
        
        {/* Today marker - FIXED POSITIONING */}
        <div className="relative h-16 mt-8"> {/* Added wrapper with height */}
          <div 
            ref={todayRef}
            className={`
              absolute left-1/2 transform -translate-x-1/2 top-0
              transition-all duration-700 ease-out
              ${todayInView ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}
            `}
          > 
            <div className="mt-3 text-center text-sm font-medium text-gray-600 dark:text-gray-300 bg-white dark:bg-gray-800 px-3 py-1 rounded-full shadow-sm">
              Today
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;