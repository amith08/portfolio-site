import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Open Gmail compose window
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=work.amithhegde@gmail.com&su=${encodeURIComponent(`Portfolio Contact from ${formData.name}`)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`);
    
    // Clear form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="max-w-4xl mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Get In Touch</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-gray-600">work.amithhegde@gmail.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
              <a href="https://www.linkedin.com/in/amith-hegde-8721972a6" className="text-gray-600 hover:text-primary">
                LinkedIn Profile
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2a10 10 0 00-3.516 19.442c.556.102.758-.242.758-.538v-2.02c-3.09.672-3.74-1.49-3.74-1.49-.506-1.288-1.234-1.63-1.234-1.63-.998-.682.076-.668.076-.668 1.104.078 1.684 1.134 1.684 1.134.982 1.682 2.576 1.196 3.204.914.1-.712.384-1.196.698-1.472-2.466-.28-5.066-1.234-5.066-5.494 0-1.214.434-2.206 1.144-2.982-.114-.28-.496-1.414.108-2.948 0 0 .934-.298 3.06 1.14a10.68 10.68 0 015.568 0c2.126-1.438 3.06-1.14 3.06-1.14.604 1.534.222 2.668.108 2.948.71.776 1.144 1.768 1.144 2.982 0 4.27-2.6 5.21-5.072 5.484.394.34.746 1.012.746 2.042v3.02c0 .298.2.646.764.538A10.002 10.002 0 0012 2z" />
              </svg>
              <a href="https://github.com/amith08" className="text-gray-600 hover:text-primary">
                GitHub Profile
              </a>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primary"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primary"
                placeholder="your@email.com"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-primary"
                placeholder="Your message..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-secondary transition-colors"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;