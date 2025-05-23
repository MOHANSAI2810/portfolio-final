import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    image: '/mini-chatbot.png',
    name: "Mohan's Mini Chatbot",
    description: 'Classifies book genres based on cover designs using CNNs.',
    techStack: ['Python', 'HTML', 'Flask', 'CSS', 'Java Script'],
    liveLink: 'https://mohan-mini-chatbot-ue5o.onrender.com/',
    codeLink: 'https://github.com/MOHANSAI2810/Mohan-Mini-ChatBot',
  },
  {
    image: 'sms-spam.png',
    name: 'Email Spam Detection',
    description: 'Helps to classify wheather the email is spam or not.',
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
    description: 'Analyzes the content in the youtube video usind AI.',
    techStack: ['Python', 'AI', 'Flask'],
    liveLink: 'https://github.com/MOHANSAI2810/youtube_video_analyzer',
    codeLink: 'https://github.com/MOHANSAI2810/youtube_video_analyzer',
  },
  {
    image: 'telegram-bot.png',
    name: 'Telegram Bot',
    description: 'Conversational telegram bot for user support using AI.',
    techStack: ['Python', 'Flask', 'AI'],
    liveLink: '',
    codeLink: 'https://github.com/MOHANSAI2810/telegram_bot',
  },
];

const ProjectsSection = () => {
  return (
    <section className="py-12 px-4 sm:px-8 lg:px-16 bg-black text-white">
      <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#0f0f0f] border border-gray-700 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transform transition duration-300 hover:scale-[1.02] flex flex-col w-full max-w-sm mx-auto"
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-5 flex flex-col justify-between flex-grow">
              <div className="space-y-3">
                <h3 className="text-lg font-semibold">{project.name}</h3>
                <p className="text-gray-400 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 text-xs text-white">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-600 px-2 py-1 rounded-full"
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

export default ProjectsSection;
