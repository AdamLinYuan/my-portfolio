import React from 'react';

// Skill category component for better organization
const SkillCategory: React.FC<{title: string, skills: string[]}> = ({ title, skills }) => (
  <div className="mb-4">
    <h4 className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2 font-medium">
      {title}
    </h4>
    <div className="flex flex-wrap gap-2">
      {skills.map(skill => (
        <span 
          key={skill}
          className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-sm transition-all hover:bg-blue-100 dark:hover:bg-blue-900"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

// Experience card with improved structure
const ExperienceItem: React.FC<{role: string, company: string, period: string, description: string}> = 
  ({ role, company, period, description }) => (
  <div className="mb-4 border-l-2 border-blue-500 pl-4 py-1">
    <h4 className="font-medium text-gray-900 dark:text-white">{role}</h4>
    <div className="flex justify-between items-center mb-1">
      <span className="text-blue-600 dark:text-blue-400">{company}</span>
      <span className="text-sm text-gray-500 dark:text-gray-400">{period}</span>
    </div>
    <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>
  </div>
);

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-gray-50 dark:bg-gray-900 scroll-m-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
          About Me
        </h2>
        
        {/* Compact Profile Card - Now sits above the main content */}
        <div className="max-w-5xl mx-auto mb-6">
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
            <div className="sm:flex">
              {/* Profile image now on the left side */}
              <div className="sm:w-1/3 lg:w-1/4 relative">
                <img 
                  className="h-full w-full object-cover" 
                  src="/images/profile.jpg" 
                  alt="Profile" 
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2">
                  <h3 className="text-white text-lg font-bold">Adam</h3>
                </div>
              </div>
              
              {/* Bio summary and contact info in the middle */}
              <div className="sm:w-2/3 lg:w-3/4 p-4 sm:p-5 flex flex-col sm:flex-row">
                {/* Bio summary */}
                <div className="sm:w-2/3 pr-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Full-stack Developer
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    Computing Science student at the University of Glasgow passionate about building 
                    applications that solve real-world problems. My experience spans web development,
                    AI, and data processing with a focus on clean, efficient solutions.
                  </p>
                  
                  {/* Resume download button */}
                  <a 
                    href="/resume.pdf" 
                    target="_blank"
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm font-medium"
                  >
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                    </svg>
                    Resume
                  </a>
                </div>
                
                {/* Contact info and social links now combined on right */}
                <div className="sm:w-1/3 mt-4 sm:mt-0 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center mb-2">
                      <svg className="w-4 h-4 text-gray-500 dark:text-gray-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3z"></path>
                      </svg>
                      <span className="text-sm text-gray-600 dark:text-gray-300">University of Glasgow</span>
                    </div>
                    <div className="flex items-center mb-2">
                      <svg className="w-4 h-4 text-gray-500 dark:text-gray-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                      </svg>
                      <span className="text-sm text-gray-600 dark:text-gray-300">Glasgow, UK</span>
                    </div>
                    <div className="flex items-center mb-2">
                      <svg className="w-4 h-4 text-gray-500 dark:text-gray-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                      </svg>
                      <span className="text-sm text-gray-600 dark:text-gray-300 truncate">adamyuanprofessional@gmail.com</span>
                    </div>
                  </div>
                  
                  {/* Social links integrated with contact info */}
                  <div className="flex space-x-3 mt-3">
                    <a 
                      href="https://github.com/adamlinyuan" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                    <a 
                      href="https://linkedin.com/in/adamlinyuan" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Main content grid - Experience and Skills */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          {/* Experience Card */}
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden p-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
              Experience
            </h3>
            <div className="space-y-4">
              <ExperienceItem 
                role="Software Engineer"
                company="GUOrbit"
                period="Jan 2024 - Present"
                description="Working on satellite data processing systems for the Astraeus-01 project, implementing algorithms for wildfire risk mapping."
              />
              <ExperienceItem 
                role="Software Engineer Intern"
                company="JPMorgan Chase & Co"
                period="Jun 2023 - Aug 2023"
                description="Developed and maintained financial software applications, focusing on backend services with Spring Boot and PostgreSQL."
              />
              <ExperienceItem 
                role="Software Engineer Intern"
                company="Expedia Group"
                period="Jun 2022 - Aug 2022"
                description="Worked on frontend development using React and TypeScript, implementing new features for the hotel booking platform."
              />
            </div>
          </div>
          
          {/* Skills Card */}
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden p-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
              Skills
            </h3>
            <div>
              <SkillCategory 
                title="Programming Languages" 
                skills={["Python", "Java", "Kotlin", "JavaScript", "TypeScript"]} 
              />
              <SkillCategory 
                title="Frontend Development" 
                skills={["React", "Next.js", "Tailwind CSS", "HTML/CSS"]} 
              />
              <SkillCategory 
                title="Backend Development" 
                skills={["Django", "Spring Boot", "Node.js", "Express"]} 
              />
              <SkillCategory 
                title="Databases & Tools" 
                skills={["MySQL", "PostgreSQL", "Git", "CI/CD", "AWS", "Docker"]} 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;