import React from 'react';
import Navbar from './components/Navbar';
import { motion } from 'framer-motion';
import Skills from './components/Skills';
import Contact from './components/Contact';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const App = () => {
  return (
    <div className="bg-black text-white min-h-screen font-sans scroll-smooth">
      <Navbar />

      <main className="pt-24">
        <section 
          id="home" 
          className="min-h-screen flex items-center justify-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20"></div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
            className="container mx-auto px-6 text-center z-10"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 text-transparent bg-clip-text">
              Welcome to My Portfolio
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
              I create beautiful, functional digital experiences
            </p>
          </motion.div>
        </section>

        <section 
          id="about" 
          className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 via-black to-gray-900 py-20"
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={sectionVariants}
            className="container mx-auto px-6"
          >
            <h1 className="text-4xl font-bold mb-12 text-center">About Me</h1>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="/your-image.jpg" 
                  alt="About me" 
                  className="rounded-xl shadow-2xl w-full max-w-md mx-auto"
                />
              </div>
              <div className="space-y-6">
                <p className="text-lg text-gray-300">
                  I'm a passionate developer with expertise in modern web technologies.
                </p>
                {/* Add more content */}
              </div>
            </div>
          </motion.div>
        </section>
        <section id="skills" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-black py-20">
          <Skills />
        </section>

        <section 
          id="projects" 
          className="min-h-screen flex items-center justify-center py-20"
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
            className="container mx-auto px-6"
          >
            <h1 className="text-4xl font-bold mb-12 text-center">My Projects</h1>
            {/* Projects grid will go here */}
          </motion.div>
        </section>

        <section 
          id="contact" 

        >
          

            <Contact />
          
        </section>
      </main>
    </div>
  );
};

export default App;