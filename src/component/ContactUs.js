import React, { useState } from 'react';

const ContactUs = () => {
  // State for managing form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you could integrate with an API or email service
    console.log('Form submitted:', formData);
    // Optionally, reset the form fields
    setFormData({ name: '', email: '', message: '' });
  };

  const contacts = [
    {
      icon: 'fa-phone',
      title: 'Phone Number',
      detail: '+123-456-789',
    },
    {
      icon: 'fa-envelope',
      title: 'Email Address',
      detail: 'example@example.com',
    },
    {
      icon: 'fa-location-dot',
      title: 'Location',
      detail: '1234 Main St, City, Country',
    },
  ];

  return (
    <section className="container mx-auto p-6" id="contact">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Contact Details Section */}
        <div className="flex-1 bg-white rounded-lg shadow p-6">
        <div className="flex flex-col md:flex-col gap-8">
            {contacts.map((contact, index) => (
              <div key={index} className="flex items-center">
                <div className="bg-[#001233] text-white p-5 rounded-full mr-4">
                  <i className={`fa-solid ${contact.icon} text-2xl md:text-3xl`}></i>
                </div>
                <div>
                  <h2 className="text-lg font-semibold">{contact.title}</h2>
                  <span className="text-blue-800 text-sm md:text-xl font-bold">{contact.detail}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Inquiry Form Section */}
        <div className="flex-1 bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold mb-4">Inquiry Form</h2>
          <form onSubmit={handleSubmit}>
            {/* Name Field */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            {/* Email Field */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
            {/* Message Field */}
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              ></textarea>
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              className="bg-[#001233] text-white px-6 py-2 rounded-lg hover:bg-[#001845] transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
