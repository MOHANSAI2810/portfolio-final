import React from 'react';
import Navbar from './components/Navbar';
import { motion } from 'framer-motion';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Home from './components/Home';
import ProjectsSection from './components/Projects';
import Projects from './components/Projects';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const App = () => {
  return (
    <div className="bg-black text-white min-h-screen font-sans scroll-smooth">
      <Navbar />

      <main className="pt-24">
        <section>
          <Home/>
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

        <section id='projects'>
          <Projects/>
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