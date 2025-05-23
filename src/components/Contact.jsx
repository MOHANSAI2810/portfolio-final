import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

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
    <section id="contact" className="w-full py-16 bg-black text-white">
  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 text-transparent bg-clip-text">
      Contact Me
    </h2>

    {/* Flex container to hold form and contact card side-by-side */}
    <div className="flex flex-col lg:flex-row lg:justify-between gap-8">
      
      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        name="contact"
        method="POST"
        data-netlify="true"
        className="bg-[#1f1f1f] p-6 rounded-2xl shadow-lg flex-1"
      >
        <input type="hidden" name="form-name" value="contact" />
        <div className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-[#2c2c2c] text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-[#2c2c2c] text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-[#2c2c2c] text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
          />
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-pink-600 hover:to-purple-600 text-white font-semibold py-2 rounded-lg transition duration-300"
          >
            Send Message
          </button>
          {formStatus && (
            <p className="text-green-400 text-sm text-center">{formStatus}</p>
          )}
        </div>
      </form>

      {/* Contact Info */}
      <div className="bg-[#1a1a1a] border border-gray-700 rounded-xl p-6 shadow-md flex-1 h-fit">
        <h3 className="text-xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
          Contact Information
        </h3>
        <div className="space-y-3 text-gray-300">
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-pink-400" />
            <span>mohansai2810@gmail.com</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-green-400" />
            <span>+91 98765 43210</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-blue-400" />
            <span>Hyderabad, India</span>
          </div>
          <div className="flex items-center gap-3">
            <Github className="w-5 h-5 text-white" />
            <a href="https://github.com/MOHANSAI2810" target="_blank" rel="noopener noreferrer" className="hover:underline">
              github.com/MOHANSAI2810
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Linkedin className="w-5 h-5 text-blue-500" />
            <a href="https://linkedin.com/in/mohansai2810" target="_blank" rel="noopener noreferrer" className="hover:underline">
              linkedin.com/in/mohansai2810
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  );
};

export default Contact;
