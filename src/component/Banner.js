import React from "react";

const Banner = () => {
  return (
    <div 
      className="relative bg-cover bg-center h-96 flex items-center justify-center text-white" id="home"
      style={{ backgroundImage: "url('/Banner.jpg')" }} 
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative md:z-10 text-center max-w-2xl">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Platform</h1>
        <p className="text-lg mb-6">
          Explore amazing features and grow your business with us!
        </p>
      </div>
    </div>
  );
};

export default Banner;
