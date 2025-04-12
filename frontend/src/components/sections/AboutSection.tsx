import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-gray-50 dark:bg-gray-900 scroll-m-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
          About Me
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <img 
                  className="h-64 w-full object-cover md:w-48" 
                  src="/images/profile.jpg" 
                  alt="Profile" 
                />
              </div>
              <div className="p-8">
                <div className="uppercase tracking-wide text-sm text-blue-500 font-semibold">袁霖 | Full-stack Developer</div>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                    Motivated and detail-oriented Computing Science student at the University of Glasgow with hands-on experience in 
                    full-stack development, computer vision, and satellite data processing. Proven ability to lead and collaborate on 
                    technical projects, including winning the JP Morgan CFG 2025 hackathon, an AI-based facial recognition tool, 
                    and wildfire risk mapping with GUOrbit’s Astraeus-01 satellite. Passionate about using technology for real-world impact 
                    and problem solving.
                </p>
                <div className="mt-6">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">Skills</h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {["Python", "Java", "Kotlin", "JavaScript", "TypeScript", "React", "Tailwind", "Django", "Springboot", "MySQL", "PostgreSQL", "SQLite", "Git", "CICD", "AWS"].map(skill => (
                      <span 
                        key={skill}
                        className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;