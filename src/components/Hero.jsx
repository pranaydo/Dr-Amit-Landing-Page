import React from "react";
import doc from "../assets/banner-img.webp";
import operative from "../assets/doctor-operating.webp"; // replace with actual path
const HeroWithForm = () => {
  return (
    <section className="bg-[#a6012d] text-white py-12 px-4 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left Side */}
        {/* <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <img
            src={operative}
            alt="Doctor"
            className="rounded-lg w-90 md:w-60 mb-6 "
          />
          <h1 className="text-4xl md:text-4xl font-semibold mb-2">
            Head & Neck Cancer Specialist – <br /> Dr. Amit Chakraborty, Mumbai
          </h1>
          <p className="text-sm md:text-base text-gray-300">
            18+ yrs experience · Robotic & minimally-invasive surgery
          </p>
        </div> */}
        <div className="md:w-1/2 flex flex-col items-center text-center">
          <img src={operative} alt="Doctor" className="rounded-lg w-60 mb-6" />
          <h1 className="text-3xl md:text-4xl font-semibold mb-2">
            Head & Neck Cancer Specialist <br /> Dr. Amit Chakraborty, Mumbai
          </h1>
          <p className="text-sm md:text-base text-gray-300">
            18+ yrs experience · Robotic & minimally-invasive surgery
          </p>
        </div>

        {/* Right Side - Contact Form */}
        <div
          id="appointment-form"
          className="md:w-1/2 bg-white text-black p-6 rounded-2xl shadow-lg w-full"
        >
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium"> Full Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                placeholder="Full Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Phone</label>
              <input
                type="tel"
                className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                placeholder="Your Phone Number"
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-[#a6012d] w-40 text-white font-semibold py-2 rounded"
              >
                Book Appointment
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HeroWithForm;
