import React from "react";
// import doctorImage from "../assets/surgeon.jpg"; // Replace with actual image
import backgroundImage from "../assets/14.png"; // placeholder trust badges
// import trust2 from "../assets/trust2.png";
// import trust3 from "../assets/trust3.png";

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className=" bg-opacity-70    inset-0 z-0"></div>

      <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center px-4 py-10  text-white max-w-7xl mx-auto">
        {/* Left - Hero content */}
        <div className="w-full lg:w-1/2 mb-10 lg:mb-0 text-center lg:text-left">
          <div className="flex justify-center lg:justify-start mb-6">
            {" "}
            profile
            {/* <img
              src={doctorImage}
              alt="Dr. Amit Operating"
              className="rounded-lg w-64 h-auto shadow-lg"
            /> */}
          </div>
          <h1 className="text-2xl md:text-3xl font-bold leading-snug">
            Head & Neck Cancer Specialist – Dr. Amit Chakraborty, Mumbai
          </h1>
          <p className="mt-2 text-lg">
            18+ yrs experience · Robotic & minimally-invasive surgery
          </p>

          {/* Trust badges */}
          <div className="flex justify-center lg:justify-start gap-4 mt-6">
            {/* <img src={trust1} alt="Trust Badge 1" className="h-10 w-auto" />
            <img src={trust2} alt="Trust Badge 2" className="h-10 w-auto" />
            <img src={trust3} alt="Trust Badge 3" className="h-10 w-auto" /> */}
          </div>
        </div>

        {/* Right - Contact Form */}
        <div className="w-full lg:w-1/2">
          <div className="bg-white text-black rounded-xl p-6 shadow-lg">
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
