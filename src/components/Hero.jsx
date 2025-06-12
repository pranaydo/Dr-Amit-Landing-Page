import React from "react";
import doctorImage from "../assets/banner-img.webp";
import backgroundImage from "../assets/14.png";

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat min-h-screen flex items-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60 z-0" />

      <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center px-4 max-w-7xl mx-auto w-full text-white">
        {/* Left - Hero content */}
        <div className="w-full lg:w-1/2 mb-10 lg:mb-0 text-center lg:text-left">
          <div className="flex justify-center lg:justify-start mb-6">
            <img
              src={doctorImage}
              alt="Dr. Amit Operating"
              className="rounded-lg w-64 h-auto shadow-lg"
            />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold leading-snug">
            Head & Neck Cancer Specialist – Dr. Amit Chakraborty, Mumbai
          </h1>
          <p className="mt-2 text-lg">
            18+ yrs experience · Robotic & minimally-invasive surgery
          </p>
        </div>

        {/* Right - Contact Form */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="bg-white text-black rounded-2xl p-6 shadow-lg w-full max-w-md">
            <form className="space-y-4">
              <div>
                <label htmlFor="firstName" className="block font-medium">
                  Name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="Enter Name"
                  className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Email (optional)"
                  className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                />
              </div>
              <div>
                <label htmlFor="message" className="block font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  placeholder="Write your message..."
                  className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white font-semibold px-6 py-2 rounded hover:bg-blue-700 w-full"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
