import React from 'react'

const AboutUs = () => {
  return (
      <section className="flex flex-col md:flex-row items-center justify-between p-8 bg-[#001845]" id="about">
      <div className="md:w-1/2 w-full flex justify-center">
        <img 
          src="/AboutUs.jpg" 
          alt="About Us" 
          className="rounded-2xl shadow-md w-full max-w-2xl"
        />
      </div>

      {/* Right Side - About Us Text */}
      <div className="md:w-1/2 w-full mt-6 md:mt-0 md:pl-10 text-center md:text-left">
        <h2 className="text-2xl text-3xl font-bold text-white">About Us</h2>
        <p className="mt-4 text-gray-500">
          We are a team of passionate developers committed to building innovative and scalable solutions. Our mission is to push the boundaries of technology and create impactful digital experiences.
        </p>
      </div>
    </section>
  )
}

export default AboutUs
