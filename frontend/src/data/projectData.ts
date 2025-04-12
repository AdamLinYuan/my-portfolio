export interface Project {
  id: number;
  date: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  link?: string;
}

export const projects: Project[] = [
    {
        id: 1,
        date: "August 2021",
        title: "AI Facial recognition",
        description: "A functional AI-based facial recognition program, contributing to a practical application of computer vision technology.",
        technologies: ["Python", "OpenCV", "Mediapipe"],
        imageUrl: "/images/profile.jpg",
        link: "https://github.com/AdamLinYuan/FaceMeshModule-and-Full-body-detection"
      },
      {
        id: 2,
        date: "Jan 2022",
        title: "Game",
        description: "A 2D 1v1 Brawling Game made using Unity Game Engine",
        technologies: ["C#", "Unity", "Procreate"],
        imageUrl: "/images/task-app.jpg",
        link: "https://github.com/yourusername/task-app"
      },
      {
        id: 3,
        date: "March 2024",
        title: "Bookle",
        description: "A Daily book search web game, inspired by Wordle",
        technologies: ["Google Books API", "Python", "Django", "Html", "CSS"],
        imageUrl: "/images/bookle.jpg",
        link: "https://github.com/yourusername/ecommerce"
      },
      {
        id: 4,
        date: "April 2024",
        title: "Astraeus-01 satellite",
        description: "A weather dashboard that shows forecasts and historical data",
        technologies: ["React", "Chart.js", "Weather API"],
        imageUrl: "/images/projects/weather.jpg",
        link: "https://github.com/yourusername/weather-app"
      },
      {
        id: 5,
        date: "April 2025",
        title: "JPMorgan Code For Good Hackathon Winner",
        description: "My team and I came up with an innovative solution for the MCR pathway which allowed their mentor and mentees to be paired up efficiently",
        technologies: ["React", "TypeScript", "Tailwind CSS", "Django", "Postgres"],
        imageUrl: "/images/bookle.jpg",
        link: "https://github.com/adamlinyuan/my-portfolio"
      },
      {
        id: 6,
        date: "April 2025",
        title: "Portfolio Website",
        description: "A personal portfolio website built with React and TypeScript",
        technologies: ["React", "TypeScript", "Tailwind CSS"],
        imageUrl: "/images/profile.jpg",
        link: "https://github.com/adamlinyuan/my-portfolio"
      }
];