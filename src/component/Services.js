import React from 'react'

const Services = () => {

    const services = [
        { title: "Web Development", description: "Building responsive and scalable web applications.", icon: "🌐" },
        { title: "Mobile App Development", description: "Creating seamless mobile experiences for iOS and Android.", icon: "📱" },
        { title: "UI/UX Design", description: "Designing intuitive and user-friendly interfaces.", icon: "🎨" },
        { title: "Cloud Solutions", description: "Providing scalable and secure cloud infrastructure.", icon: "☁️" }
      ];

  return (
    <section className="p-8" id="section">
      <h2 className="text-3xl font-bold text-white text-center">Our Services</h2>
      <p className="text-gray-600 text-center mt-2">An overview of our key offerings.</p>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div key={index} className="p-6 bg-white rounded-xl shadow-md text-center hover:shadow-lg transition">
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
            <p className="text-gray-600 mt-2">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services
