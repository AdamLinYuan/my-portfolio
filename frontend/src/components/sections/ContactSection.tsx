import React from 'react';

const SocialLink: React.FC<{
  icon: string;
  name: string;
  url: string;
  color: string;
}> = ({ icon, name, url, color }) => (
  <a 
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className={`flex items-center p-4 rounded-lg ${color} text-white transform transition-transform hover:scale-105`}
  >
    <i className={`fab fa-${icon} text-2xl mr-3`}></i>
    <span className="text-lg">{name}</span>
  </a>
);

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-16 scroll-m-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
          Get In Touch
        </h2>
        
        <div className="max-w-4xl mx-auto">
          {/* Contact form */}
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <form className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Connect with me</h3>
              <div className="space-y-4">
                <SocialLink 
                  icon="github" 
                  name="GitHub" 
                  url="https://github.com/adamlinyuan" 
                  color="bg-gray-800"
                />
                <SocialLink 
                  icon="linkedin" 
                  name="LinkedIn" 
                  url="https://linkedin.com/in/adamlinyuan" 
                  color="bg-blue-700"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;