import React, { useState, useEffect } from 'react';

import { FiMenu, FiX } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // Added 'skills' to the navItems array after 'about'
  const navItems = ['home', 'about', 'skills', 'projects', 'contact'];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 ${
        scrolled ? 'bg-black/90 backdrop-blur-md border-b border-gray-800' : 'bg-transparent'
      } transition-all duration-300`}
    >
      <div className="container mx-auto flex justify-between items-center px-6 py-3">

        {/* Profile Picture + Name */}
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="flex items-center space-x-4"
        >
          
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 text-transparent bg-clip-text">
            P Mohan Sai
          </h1>
        </motion.div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-4">
          {navItems.map((item) => (
            <motion.a
              key={item}
              href={`#${item}`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="capitalize text-white/80 hover:text-white text-lg px-4 py-2 rounded-md transition-all duration-300 relative group"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 group-hover:w-full"></span>
            </motion.a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl z-50"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>

        {/* Mobile Nav Overlay */}
        {menuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', stiffness: 100 }}
            className="md:hidden fixed inset-0 bg-black/95 backdrop-blur-lg flex flex-col items-center justify-center space-y-8"
          >
            {navItems.map((item) => (
              <motion.a
                key={item}
                href={`#${item}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="capitalize text-3xl font-medium text-white/90 hover:text-white px-8 py-4"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </motion.a>
            ))}
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Navbar;