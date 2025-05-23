import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    image: '/mini-chatbot.png',
    name: "Mohan's Mini Chatbot",
    description: 'A smart chatbot used for several purposes.',
    techStack: ['Python', 'HTML', 'Flask', 'CSS', 'Java Script'],
    liveLink: 'https://mohan-mini-chatbot-ue5o.onrender.com/',
    codeLink: 'https://github.com/MOHANSAI2810/Mohan-Mini-ChatBot',
  },
  {
    image: 'sms-spam.png',
    name: 'Email Spam Detection',
    description: 'Helps to classify whether the email is spam or not.',
    techStack: ['ML', 'Python', 'Streamlit', 'HTML','CSS','JS'],
    liveLink: 'https://sms-spam-classification-machine-learning.streamlit.app/',
    codeLink: 'https://github.com/MOHANSAI2810/email-spam-classification',
  },
  {
    image: '/traffic.png',
    name: 'Traffic Management System',
    description: 'Enhances the traffic updates to give better routes.',
    techStack: ['Python', 'Flask', 'HTML','CSS','JS'],
    liveLink: 'https://github.com/MOHANSAI2810/traffic-management-system',
    codeLink: 'https://github.com/MOHANSAI2810/traffic-management-system',
  },
  {
    image: '/youtube.png',
    name: 'Youtube Video Analyzer',
    description: 'Analyzes the content in the youtube video using AI.',
    techStack: ['Python', 'AI', 'Flask'],
    liveLink: 'https://github.com/MOHANSAI2810/youtube_video_analyzer',
    codeLink: 'https://github.com/MOHANSAI2810/youtube_video_analyzer',
  },
  {
    image: 'telegram-bot.png',
    name: 'Telegram Bot',
    description: 'Conversational telegram bot for user support using AI.',
    techStack: ['Python', 'Flask', 'AI'],
    liveLink: 'https://web.telegram.org/k/#@Mohan_mini_chatbot',
    codeLink: 'https://github.com/MOHANSAI2810/telegram_bot',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 px-6 sm:px-10 lg:px-20 bg-black text-white">
      <h2 className="text-4xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
        My Work
      </h2>
      <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
        Here are some of my featured projects. Each one represents a unique challenge and solution.
      </p>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative bg-gradient-to-br from-[#1f1f1f] to-[#2e2e2e] rounded-2xl overflow-hidden 
              shadow-md hover:shadow-xl transform transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1 
              w-full max-w-sm mx-auto group border border-transparent"
          >
            <div className="bg-gradient-to-r from-purple-700/60 to-blue-700/60 h-52 overflow-hidden">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-5 flex flex-col justify-between flex-grow bg-[#1f1f1f] rounded-b-2xl">
              <div className="space-y-3">
                <h3 className="text-xl font-semibold">{project.name}</h3>
                <p className="text-gray-400 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 text-xs">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 px-2 py-1 rounded-full text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex justify-between pt-4">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-blue-400 hover:underline"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live
                </a>
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-gray-300 hover:underline"
                >
                  <Github className="w-4 h-4" />
                  Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;