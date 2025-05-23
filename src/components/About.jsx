import React from 'react';
import { motion } from 'framer-motion';
import { Code, Rocket, BookOpen, Sparkles } from 'lucide-react';

const About = () => {
  return (
    <motion.section
      className="py-20 px-6 sm:px-12 lg:px-32 bg-gradient-to-b from-[#000000] to-black text-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }}
      id="about"
    >
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Profile Image */}
        <div className="flex-shrink-0 p-[3px] rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:cursor-pointer transition-all duration-300 shadow-xl">
          <img
            src="/profile.jpg"
            alt="Mohan's profile"
            className="w-56 h-56 object-cover rounded-full "
          />
        </div>

        {/* Content */}
        <div>
          <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
            P Mohan Sai
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Hello! I'm <span className="text-white font-semibold">Mohan Sai</span>, a passionate Python Developer with a knack for building efficient and intelligent applications. I specialize in full-stack development and artificial intelligence, with real-world experience in Flask, React.js, and machine learning frameworks.
          </p>
          <p className="text-gray-400 mt-4">
            I enjoy turning complex problems into simple, beautiful, and intuitive solutions. My projects often focus on automating tasks, data visualization, and building useful bots and web tools. Whether it’s backend logic or frontend polish, I love every part of the development cycle.
          </p>
          <p className="text-gray-400 mt-4">
            I constantly push myself to learn new technologies and improve my skills. My goal is to work on impactful projects, contribute to open-source, and become a well-rounded software engineer.
          </p>

          {/* Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 text-sm">
            <div className="flex items-center gap-3">
              <Code className="text-purple-400" />
              <span>Full-Stack Python & React Developer</span>
            </div>
            <div className="flex items-center gap-3">
              <Rocket className="text-pink-400" />
              <span>Built & Deployed 10+ Projects</span>
            </div>
            <div className="flex items-center gap-3">
              <BookOpen className="text-blue-400" />
              <span>Active Learner & Tech Enthusiast</span>
            </div>
            <div className="flex items-center gap-3">
              <Sparkles className="text-yellow-400" />
              <span>Focus on Clean UI & User Experience</span>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
