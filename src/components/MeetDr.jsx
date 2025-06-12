import React from "react";
import banner from "../assets/banner-img.webp"; // Replace with actual image

const MeetDr = () => {
  return (
    <section className="bg-[#7a0c2e] text-white px-4 py-12 lg:px-20 lg:py-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-10">
        {/* Left - Doctor Image & Label */}
        <div className="text-center lg:text-left">
          <img
            src={banner}
            alt="Dr. Amit Chakraborty"
            className="w-56 h-auto ml-4 rounded-lg shadow-lg "
          />
          <span className="inline-block bg-white text-[#7a0c2e] font-semibold px-10 py-2 rounded-sm text-sm">
            Dr. Amit Chakraborty
          </span>
        </div>

        {/* Right - Bio & Bullets */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-4">Meet the Doctor</h2>
          <p className="text-sm md:text-base mb-6 leading-relaxed">
            Dr. Amit Chakraborty is an esteemed Surgical Oncologist based in
            Mumbai, Nagpur, and Dubai. He brings 18+ years of advanced
            experience to his practice. Notably, he is a pioneer in
            head-and-neck robotic surgery, consistently delivering successful
            outcomes with minimally invasive techniques and compassionate care.
          </p>

          <ul className="space-y-3 text-sm md:text-base">
            <li className="flex items-center">
              <span className="text-white mr-2">🏅</span> 18 years experience
            </li>
            <li className="flex items-center">
              <span className="text-white mr-2">🤖</span> Robotic oral cancer
              surgery
            </li>
            <li className="flex items-center">
              <span className="text-white mr-2">🏥</span> Practices at top
              hospitals in Mumbai, Dubai, Nagpur
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MeetDr;
