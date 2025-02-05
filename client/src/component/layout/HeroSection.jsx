import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative bg-gray-900 text-white h-[90vh] flex items-center justify-center px-6">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content Container */}
      <div className="relative z-10 text-center max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Hi, I'm <span className="text-blue-500">JAHIDUR RAHMAN</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mt-4">
          I am a passionate Web Developer specializing in modern front-end and back-end technologies.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="mt-6 flex flex-col md:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition"
          >
            View Portfolio
          </Link>
          <Link
            to="/contact"
            className="border border-white hover:bg-white hover:text-gray-900 text-white font-semibold py-3 px-6 rounded-lg transition"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
