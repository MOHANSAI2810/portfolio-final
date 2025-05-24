import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Send, ChevronUp } from 'lucide-react';

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

    try {
      const formDataEncoded = new FormData();
      formDataEncoded.append("form-name", "contact");
      formDataEncoded.append("name", formData.name);
      formDataEncoded.append("email", formData.email);
      formDataEncoded.append("message", formData.message);

      await fetch("/", {
        method: "POST",
        body: formDataEncoded,
      });

      setFormStatus('Thanks! Your message has been submitted.');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setFormStatus('Oops! Something went wrong.');
    }
  };

  return (
    <section id="contact" className="w-full py-20 bg-black text-white relative overflow-hidden">
      {/* Floating Background */}
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

        {/* ✅ Hidden Netlify Form for Build Detection */}
        <form name="contact" netlify netlify-honeypot="bot-field" hidden>
          <input type="text" name="name" />
          <input type="email" name="email" />
          <textarea name="message"></textarea>
        </form>

        <div className="flex flex-col lg:flex-row gap-8 items-stretch relative">
          {/* Divider */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px">
            <div className="h-full w-full bg-gradient-to-b from-transparent via-gray-600 to-transparent opacity-30"
              style={{
                backgroundImage: 'linear-gradient(to bottom, transparent, transparent 50%, #4B5563 50%, transparent)',
                backgroundSize: '1px 10px',
                backgroundRepeat: 'repeat-y'
              }}
            />
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl opacity-70 blur-sm group-hover:opacity-100 transition duration-1000"></div>

            <form
              onSubmit={handleSubmit}
              name="contact"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              className="relative bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] p-8 rounded-2xl border border-transparent shadow-xl h-full"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl -z-10"></div>
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="bot-field" />

              <div className="space-y-6 h-full flex flex-col">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Enter Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#2c2c2c] text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter mail id"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-[#2c2c2c] text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                      required
                    />
                  </div>

                  <div className="flex-grow">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1">Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="8"
                      placeholder="Drop your message..."
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

          {/* Contact Info - with gradient border */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative"
          >
            {/* Gradient border */}
            <div className="absolute -inset-0.5 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl opacity-70 blur-sm group-hover:opacity-100 transition duration-1000"></div>
            
            <div className="relative bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] border border-transparent rounded-2xl p-8 shadow-xl h-full">
              <div className="absolute -inset-0.5 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl -z-10"></div>
              
              <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
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
                      href="mailto:pushadapumohansai@gmail.com" 
                      className="text-white hover:underline"
                    >
                      pushadapumohansai@gmail.com
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
                      +91 74166 98427
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
                    <p className="text-white">Vuyyuru, India</p>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4 p-3 bg-[#2c2c2c] rounded-lg border border-gray-700"
                >
                  <Github className="w-6 h-6 text-gray-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-sm font-medium text-gray-400">GitHub</h4>
                    <a
                      href="https://github.com/pusha-da"
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
                  <Linkedin className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-sm font-medium text-gray-400">LinkedIn</h4>
                    <a
                      href="https://www.linkedin.com/in/pusha-da/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:underline"
                    >
                      linkedin.com/in/MOHANSAI2810
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
  className="fixed bottom-6 right-6 z-50 group"
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
>
  {/* Tooltip */}
  <span className="absolute bottom-14 right-1/2 translate-x-1/2 px-3 py-1 text-xs text-white bg-gray-800 rounded shadow opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
    Top
  </span>

  {/* Button */}
  <button
    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    className="w-12 h-12 flex items-center justify-center bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full shadow-lg hover:shadow-pink-400/50 transition-all"
    aria-label="Back to top"
  >
    <ChevronUp className="w-6 h-6" />
  </button>
</motion.div>
        <div className="mt-16 border-t border-gray-700 pt-8 text-center text-sm text-gray-500">
  <p className="mb-2">
    © {new Date().getFullYear()} <span className="text-white font-semibold"></span>. All rights reserved.
  </p>
  <p>
    Built with <span className="text-pink-400">React</span>, <span className="text-purple-400">Tailwind CSS</span>, and ❤️
  </p>
</div>
      </div>
    </section>
  );
};

export default Contact;
