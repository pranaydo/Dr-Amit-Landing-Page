import React from "react";
import banner from "../assets/banner-img.webp";
import SilderSection from "./SilderSection";

const MeetDr = () => {
  return (
    <>
      <section className="bg-[#f8e9dc] text-white px-4 py-12 lg:px-20 lg:py-20">
        {/* Heading always at the top and centered on all screens */}
        <h2 className="text-4xl font-bold mb-10 text-[#a6012d] text-center w-full">
          Meet the Doctor
        </h2>
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch gap-10 min-h-[400px] relative">
          {/* Left - Doctor Image & Label at the bottom */}
          <div className="relative flex-1 flex flex-col justify-end items-center min-h-[320px]">
            {/* <div className="absolute top-[5px] left-1/2 -translate-x-1/2 flex flex-col items-center w-64 h-64  rounded-full border-4 border-[#a6012d] overflow-hidden">
              <img
                src={banner}
                alt="Dr. Amit Chakraborty"
                className="w-40 h-40 object-cover rounded-full mt-4"
              />
              {/* <span className="mt-4 bg-[#a6012d] text-white font-semibold px-4 py-2 text-center text-sm rounded-lg border border-white">
                Dr. Amit Chakraborty
              </span> */}
            {/* </div> */}
            <div className="w-80 h-80 rounded-full border-4 border-[#a6012d] flex items-center justify-center overflow-hidden ">
              <img
                src={banner}
                alt="Dr. Amit Chakraborty"
                className="w-80 h-80 object-cover rounded-full"
              />
            </div>

            <span className="bg-[#a6012d] text-white font-semibold px-6 py-4 text-center text-xl rounded-lg border border-white">
              Dr. Amit Chakraborty
            </span>
          </div>
          {/* Right - Bio & Bullets */}
          <div className="flex-1 flex flex-col justify-center items-start">
            <div className="w-full flex flex-col items-start">
              {/* Card with bio text */}
              <div className="bg-white rounded-xl shadow-lg p-6 mb-8 w-full">
                <p className="text-xl lg:text-xl text-black md:text-lg leading-relaxed text-left pb-4">
                  Dr. Amit Chakraborty is an esteemed Surgical Oncologist based
                  in Mumbai, Nagpur, and Dubai. He brings 18+ years of advanced
                  experience to his practice. Notably, he is a pioneer in
                  head-and-neck robotic surgery, consistently delivering
                  successful outcomes with minimally invasive techniques and
                  compassionate care.
                </p>
                <ul className="space-y-4 text-2xl lg:text-2xl text-left w-full">
                  <li className="flex items-center text-[#a6012d]">
                    <span className="mr-3">🏅</span> 18 years experience
                  </li>
                  <li className="flex items-center text-[#a6012d]">
                    <span className="mr-3">🤖</span> Robotic oral cancer surgery
                  </li>
                  <li className="flex items-center text-[#a6012d]">
                    <span className="mr-3">🏥</span> Practices at top hospitals
                    in Mumbai, Dubai, Nagpur
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <SilderSection />
    </>
  );
};

export default MeetDr;

// import React from "react";
// import banner from "../assets/banner-img.webp";
// import SilderSection from "./SilderSection";

// const MeetDr = () => {
//   return (
//     <>
//       <section className="bg-[#f8e9dc] text-white px-4 py-12 lg:px-20 lg:py-20">
//         <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch gap-10 min-h-[400px] relative">
//           {/* Left - Doctor Image & Label at the bottom */}
//           <div className="relative flex-1 flex flex-col justify-end items-center min-h-[320px]">
//             <div className="absolute top-[5px] bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center w-full pb-2">
//               <img
//                 src={banner}
//                 alt="Dr. Amit Chakraborty"
//                 className="w-56 md:w-115 h-auto rounded-lg ml-6"
//               />
//               <span className="inline-block bg-[#a6012d] text-white font-semibold px-10 md:px-36 py-4 border-2 border-[#a6012d] rounded-lg text-sm ">
//                 Dr. Amit Chakraborty
//               </span>
//             </div>
//           </div>
//           {/* Right - Bio & Bullets */}
//           <div className="flex-1 flex flex-col justify-center items-start">
//             <div className="w-full flex flex-col items-start">
//               <h2 className="text-4xl font-bold mb-6 text-[#a6012d]">
//                 Meet the Doctor
//               </h2>
//               {/* Card with bio text */}
//               <div className="bg-white rounded-xl shadow-lg p-6 mb-8 w-full">
//                 <p className="text-xl lg:text-xl text-black md:text-lg leading-relaxed text-left">
//                   Dr. Amit Chakraborty is an esteemed Surgical Oncologist based
//                   in Mumbai, Nagpur, and Dubai. He brings 18+ years of advanced
//                   experience to his practice. Notably, he is a pioneer in
//                   head-and-neck robotic surgery, consistently delivering
//                   successful outcomes with minimally invasive techniques and
//                   compassionate care.
//                 </p>
//               </div>
//               <ul className="space-y-4 text-2xl lg:text-2xl text-left w-full">
//                 <li className="flex items-center text-[#a6012d]">
//                   <span className="mr-3">🏅</span> 18 years experience
//                 </li>
//                 <li className="flex items-center text-[#a6012d]">
//                   <span className="mr-3">🤖</span> Robotic oral cancer surgery
//                 </li>
//                 <li className="flex items-center text-[#a6012d]">
//                   <span className="mr-3">🏥</span> Practices at top hospitals in
//                   Mumbai, Dubai, Nagpur
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>
//       <SilderSection />
//     </>
//   );
// };

// export default MeetDr;
