import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaFileAlt, FaRocket } from 'react-icons/fa';

const Home = () => {
  return (
    <section
      id="home"
      className="w-full min-h-screen bg-black text-white flex items-center justify-center px-4"
    >
      <div className="max-w-3xl text-center -mt-20">

        {/* Profile Pic with Hover Name Overlay (No background circle) */}


        {/* Title */}
{/* Title */}
<motion.h1
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 text-transparent bg-clip-text mb-4 leading-relaxed"
>
  Welcome to my World
</motion.h1>


        {/* Subtitle */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-lg sm:text-xl text-gray-300 mb-4"
        >
          Software & Backend Developer | AI Enthusiast | Dynamic
        </motion.h2>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-md sm:text-lg text-gray-400 mb-8"
        >
          Let's explore new things and know about my self and stay connected.
        </motion.p>

        {/* Buttons with Tooltip Titles */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="https://www.linkedin.com/in/mohansai2810"
            target="_blank"
            rel="noopener noreferrer"
            title="Go to LinkedIn"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-full transition text-white"
          >
            <FaLinkedin /> Stay Connected
          </a>

          <a
            href="#projects"
            title="View Projects"
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700 px-5 py-2 rounded-full transition text-white"
          >
            <FaRocket /> Explore my works!
          </a>

          <a
            href="/resume.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            title="Download Resume"
            className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 px-5 py-2 rounded-full transition text-white"
          >
            <FaFileAlt /> Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
