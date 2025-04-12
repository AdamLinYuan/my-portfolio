import React from 'react';
import TimelineItem from './TimelineItem';

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
    date: "June 2023",
    title: "Portfolio Website",
    description: "A personal portfolio website built with React and TypeScript",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    imageUrl: "/images/projects/portfolio.jpg",
    link: "https://github.com/yourusername/portfolio"
  },
  {
    id: 2,
    date: "December 2023",
    title: "Task Management App",
    description: "A full-stack task management application with user authentication",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    imageUrl: "/images/projects/task-app.jpg",
    link: "https://github.com/yourusername/task-app"
  },
  {
    id: 3,
    date: "March 2024",
    title: "E-commerce Platform",
    description: "A complete e-commerce solution with product management and checkout",
    technologies: ["React", "Redux", "Node.js", "PostgreSQL"],
    imageUrl: "/images/projects/ecommerce.jpg",
    link: "https://github.com/yourusername/ecommerce"
  },
  {
    id: 4,
    date: "April 2024",
    title: "Weather Dashboard",
    description: "A weather dashboard that shows forecasts and historical data",
    technologies: ["React", "Chart.js", "Weather API"],
    imageUrl: "/images/projects/weather.jpg",
    link: "https://github.com/yourusername/weather-app"
  }
];

const Timeline: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto mt-12 relative py-12">
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
      
      {/* Current date marker */}
      <div className="relative">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3 h-3 rounded-full bg-red-500" />
        <div className="mt-4 text-center text-sm font-medium">Today</div>
      </div>
    </div>
  );
};

export default Timeline;