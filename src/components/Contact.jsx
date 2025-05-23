import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';

const Contact = () => {
  const [formStatus, setFormStatus] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus('Please fill out all fields.');
      return;
    }

    e.target.submit(); // Needed for Netlify
    setFormStatus('Thanks! Your message has been submitted.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="w-full py-20 bg-black text-white relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              x: [0, 100 * (i % 2 === 0 ? 1 : -1)],
              y: [0, 50 * (i % 3 === 0 ? 1 : -1)],
              transition: {
                duration: 20 + i * 3,
                repeat: Infinity,
                repeatType: "reverse"
              }
            }}
            className="absolute rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20"
            style={{
              width: Math.random() * 300 + 100,
              height: Math.random() * 300 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 text-transparent bg-clip-text">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to connect? Drop me a message!
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          {/* Contact Form - Taller and Narrower */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <form
              onSubmit={handleSubmit}
              name="contact"
              method="POST"
              data-netlify="true"
              className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] p-8 rounded-2xl border border-gray-800 shadow-xl h-full"
            >
              <input type="hidden" name="form-name" value="contact" />
              <div className="space-y-6 h-full flex flex-col">
                <div className="space-y-4 flex-grow">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#2c2c2c] text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#2c2c2c] text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                      required
                    />
                  </div>

                  <div className="flex-grow">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="8"
                      placeholder="Hello, I'd like to talk about..."
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full h-full min-h-[200px] px-4 py-3 bg-[#2c2c2c] text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                      required
                    />
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-pink-600 hover:to-purple-600 text-white font-semibold py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-purple-500/30"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </motion.button>

                {formStatus && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className={`text-center text-sm ${
                      formStatus.includes('Thanks') ? 'text-green-400' : 'text-red-400'
                    }`}
                  >
                    {formStatus}
                  </motion.p>
                )}
              </div>
            </form>
          </motion.div>

          {/* Contact Info - Enhanced */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] border border-gray-800 rounded-2xl p-8 shadow-xl h-full">
              <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                Contact Information
              </h3>
              
              <div className="space-y-5">
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 p-3 bg-[#2c2c2c] rounded-lg border border-gray-700"
                >
                  <Mail className="w-6 h-6 text-pink-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-sm font-medium text-gray-400">Email</h4>
                    <a 
                      href="mailto:mohansai2810@gmail.com" 
                      className="text-white hover:underline"
                    >
                      mohansai2810@gmail.com
                    </a>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 p-3 bg-[#2c2c2c] rounded-lg border border-gray-700"
                >
                  <Phone className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-sm font-medium text-gray-400">Phone</h4>
                    <a 
                      href="tel:+919876543210" 
                      className="text-white hover:underline"
                    >
                      +91 98765 43210
                    </a>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 p-3 bg-[#2c2c2c] rounded-lg border border-gray-700"
                >
                  <MapPin className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-sm font-medium text-gray-400">Location</h4>
                    <p className="text-white">Hyderabad, India</p>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 p-3 bg-[#2c2c2c] rounded-lg border border-gray-700"
                >
                  <Github className="w-6 h-6 text-white mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-sm font-medium text-gray-400">GitHub</h4>
                    <a 
                      href="https://github.com/MOHANSAI2810" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white hover:underline"
                    >
                      github.com/MOHANSAI2810
                    </a>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 p-3 bg-[#2c2c2c] rounded-lg border border-gray-700"
                >
                  <Linkedin className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-sm font-medium text-gray-400">LinkedIn</h4>
                    <a 
                      href="https://linkedin.com/in/mohansai2810" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white hover:underline"
                    >
                      linkedin.com/in/mohansai2810
                    </a>
                  </div>
                </motion.div>
              </div>

              {/* Availability Status */}
              
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;