import React, { useState } from 'react';

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
      <div className="max-w-xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 text-transparent bg-clip-text">
          Contact Me
        </h2>

        <form
          onSubmit={handleSubmit}
          name="contact"
          method="POST"
          data-netlify="true"
          className="bg-[#1f1f1f] p-6 rounded-2xl shadow-lg"
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
      </div>
    </section>
  );
};

export default Contact;
