// import React from "react";
// import bgImg from "../assets/14.png";

// const steps = [
//   {
//     title: "Consult & Diagnosis",
//     desc: "Comprehensive exam, PET-CT, biopsy, and review to understand your condition clearly.",
//   },
//   {
//     title: "Personalised Plan",
//     desc: "A custom plan combining surgery, chemo, or radiotherapy, explained clearly and kindly.",
//   },
//   {
//     title: "Expert Treatment",
//     desc: "Advanced techniques like robotic surgery with pain-managed, expert-led care.",
//   },
//   {
//     title: "Recovery & Follow-up",
//     desc: "Comprehensive rehab, PET-CT scans, and reviews to understand your condition clearly.",
//   },
// ];

// const TreatmentJourney = () => {
//   return (
//     <div
//       className="relative bg-cover bg-center py-6 pb-8 px-2 sm:px-4"
//       // style={{
//       //   backgroundImage: `url(${bgImg})`,
//       // }}
//     >
//       {/* Overlay for better readability */}
//       <div className="absolute inset-0 bg-[#a6012d]  z-0" />
//       <div className="relative z-10 w-full max-w-5xl mx-auto">
//         <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8 drop-shadow">
//           Your Treatment Journey
//         </h2>
//         <div className="flex flex-col gap-6">
//           {steps.map((step, idx) => (
//             <div
//               key={idx}
//               className="bg-white bg-opacity-95 rounded-xl sm:rounded-2xl shadow-lg flex items-start p-6 w-full mx-auto"
//             >
//               <div className="text-4xl font-bold text-[#7b223c] mr-4">
//                 {idx + 1}
//               </div>
//               <div>
//                 <div className="font-semibold text-[#7b223c] text-lg mb-1">
//                   {step.title}
//                 </div>
//                 <div className="text-gray-700 text-sm">{step.desc}</div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TreatmentJourney;

import React from "react";
import bgImg from "../assets/14.png";

const steps = [
  {
    title: "Consult & Diagnosis",
    desc: "Comprehensive exam, PET-CT, biopsy, and review to understand your condition clearly.",
  },
  {
    title: "Personalised Plan",
    desc: "A custom plan combining surgery, chemo, or radiotherapy, explained clearly and kindly.",
  },
  {
    title: "Expert Treatment",
    desc: "Advanced techniques like robotic surgery with pain-managed, expert-led care.",
  },
  {
    title: "Recovery & Follow-up",
    desc: "Comprehensive rehab, PET-CT scans, and reviews to understand your condition clearly.",
  },
];

const TreatmentJourney = () => {
  return (
    <div
      className="relative bg-cover bg-center py-16 px-2 sm:px-4 min-h-[700px]"
      style={{
        backgroundImage: `url(${bgImg})`,
      }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-[#a6012d] bg-opacity-90 z-0" />
      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-white text-center mb-12 drop-shadow">
          Your Treatment Journey
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white bg-opacity-95 rounded-2xl shadow-lg flex flex-col items-center justify-center text-center p-8 min-h-[220px]"
            >
              <div className="text-5xl font-bold text-[#7b223c] mb-4">
                {idx + 1}
              </div>
              <div>
                <div className="font-semibold text-[#7b223c] text-xl mb-2">
                  {step.title}
                </div>
                <div className="text-gray-700 text-base">{step.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TreatmentJourney;
