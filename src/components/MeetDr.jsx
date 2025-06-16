import React from "react";
import banner from "../assets/banner-img.webp";

const MeetDr = () => {
  return (
    <section className="bg-[#f8e9dc] text-white px-4 py-12 lg:px-20 lg:py-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch gap-10 min-h-[400px] relative">
        {/* Left - Doctor Image & Label at the bottom */}
        <div className="relative flex-1 flex flex-col justify-end items-center min-h-[320px]">
          <div className="absolute top-[5px] bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center w-full pb-2">
            <img
              src={banner}
              alt="Dr. Amit Chakraborty"
              className="w-56 md:w-115 h-auto rounded-lg ml-6" // Increased width
            />
            <span className="inline-block bg-[#a6012d] text-white font-semibold px-10 md:px-36 py-4  border-2 border-[#a6012d] rounded-sm text-sm ">
              Dr. Amit Chakraborty
            </span>
          </div>
        </div>
        {/* Right - Bio & Bullets */}
        <div className="flex-1 flex flex-col justify-center items-start text-left">
          <div className="w-full text-center lg:text-left">
            <h2 className="text-4xl font-bold mb-6 text-[#a6012d]">
              Meet the Doctor
            </h2>
            <p className="text-xl lg:text-xl text-black md:text-lg mb-8 leading-relaxed">
              Dr. Amit Chakraborty is an esteemed Surgical Oncologist based in
              Mumbai, Nagpur, and Dubai. He brings 18+ years of advanced
              experience to his practice. Notably, he is a pioneer in
              head-and-neck robotic surgery, consistently delivering successful
              outcomes with minimally invasive techniques and compassionate
              care.
            </p>
            {/* <ul className="space-y-4 text-2xl lg:text-2xl  sm:text-center md:text-left">
              <li className="flex items-center text-[#a6012d]">
                <span className="mr-3">🏅</span> 18 years experience
              </li>
              <li className="flex items-center text-[#a6012d]">
                <span className="mr-3">🤖</span> Robotic oral cancer surgery
              </li>
              <li className="flex items-center text-[#a6012d]">
                <span className="mr-3">🏥</span> Practices at top hospitals in
                Mumbai, Dubai, Nagpur
              </li>
            </ul> */}
            <ul className="space-y-4 text-2xl lg:text-2xl text-center lg:text-left w-full">
              <li className="flex items-center justify-center lg:justify-start text-[#a6012d]">
                <span className="mr-3">🏅</span> 18 years experience
              </li>
              <li className="flex items-center justify-center lg:justify-start text-[#a6012d]">
                <span className="mr-3">🤖</span> Robotic oral cancer surgery
              </li>
              <li className="flex items-center justify-center lg:justify-start text-[#a6012d]">
                <span className="mr-3">🏥</span> Practices at top hospitals in
                Mumbai, Dubai, Nagpur
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetDr;
