import React from 'react';
import Navbar from './components/Navbar';
import { motion } from 'framer-motion';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Home from './components/Home';
import ProjectsSection from './components/Projects';
import Projects from './components/Projects';
import About from './components/About';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const App = () => {
  return (
    <div className="bg-black text-white min-h-screen font-sans scroll-smooth">
      <Navbar />

      <main>
        <section id='home' >
          <Home/>
        </section>

        <section id="about">
          <About/>
        </section>

        <section id="skills" >
          <Skills />
        </section>

        <section id='projects'>
          <Projects/>
        </section>

        <section id="contact">
          <Contact />
        </section>

      </main>
    </div>
  );
};

export default App;