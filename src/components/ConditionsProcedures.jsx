// import React from "react";
// import {
//   FaTeeth,
//   FaBrain,
//   FaLungs,
//   FaMicroscope,
//   FaUserMd,
//   FaProcedures,
// } from "react-icons/fa";
// import procedureImg from "../assets/neck.webp";

// const ConditionsProcedures = () => {
//   const conditions = [
//     {
//       icon: <FaTeeth size={20} className="text-[#7a0c2e]" />,
//       label: "Oral / Mouth Cancer (incl. tongue, buccal mucosa)",
//     },
//     {
//       icon: <FaMicroscope size={20} className="text-[#7a0c2e]" />,
//       label: "Thyroid & Parathyroid Cancer",
//     },
//     {
//       icon: <FaLungs size={20} className="text-[#7a0c2e]" />,
//       label: "Laryngeal / Voice-box Cancer",
//     },
//     {
//       icon: <FaUserMd size={20} className="text-[#7a0c2e]" />,
//       label: "Salivary Gland / Parotid Tumors",
//     },
//     {
//       icon: <FaBrain size={20} className="text-[#7a0c2e]" />,
//       label: "Skull-base & Sinus Tumors",
//     },
//     {
//       icon: <FaProcedures size={20} className="text-[#7a0c2e]" />,
//       label: "Reconstructive & Microvascular Surgery",
//     },
//   ];
//   return (
//     <section className="px-4 py-12 lg:px-20">
//       <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
//         {/* Left - Text & List */}
//         <div className="lg:w-1/2 lg:pl-24 w-full text-center lg:text-left">
//           <h2 className="text-3xl font-bold text-[#7a0c2e] mb-6">
//             Conditions & Procedures Treated
//           </h2>
//           <ul className="space-y-5">
//             {conditions.map((item, index) => (
//               <li
//                 key={index}
//                 className="flex flex-col items-center lg:flex-row lg:items-start gap-3"
//               >
//                 <span>{item.icon}</span>
//                 <p className="text-black-800 text-xl">{item.label}</p>
//               </li>
//             ))}
//           </ul>
//         </div>
//         {/* Right - Image */}
//         <div className="lg:w-1/2 overflow-hidden flex justify-center items-center">
//           <div className="w-full max-w-md aspect-[4/3] border-2 border-[#7a0c2e] shadow-lg rounded-tr-3xl rounded-bl-3xl overflow-hidden flex items-center justify-center bg-white">
//             <img
//               src={procedureImg}
//               alt="Procedures illustration"
//               className="w-full h-full object-cover"
//               style={{ display: "block" }}
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ConditionsProcedures;

import React from "react";
import {
  FaTeeth,
  FaBrain,
  FaLungs,
  FaMicroscope,
  FaUserMd,
  FaProcedures,
} from "react-icons/fa";
// import procedureImg from "../assets/neck.webp";

const ConditionsProcedures = () => {
  const conditions = [
    {
      icon: <FaTeeth size={24} className="text-[#7a0c2e]" />,
      label: "Oral / Mouth Cancer (incl. tongue, buccal mucosa)",
    },
    {
      icon: <FaMicroscope size={24} className="text-[#7a0c2e]" />,
      label: "Thyroid & Parathyroid Cancer",
    },
    {
      icon: <FaLungs size={24} className="text-[#7a0c2e]" />,
      label: "Laryngeal / Voice-box Cancer",
    },
    {
      icon: <FaUserMd size={24} className="text-[#7a0c2e]" />,
      label: "Salivary Gland / Parotid Tumors",
    },
    {
      icon: <FaBrain size={24} className="text-[#7a0c2e]" />,
      label: "Skull-base & Sinus Tumors",
    },
    {
      icon: <FaProcedures size={24} className="text-[#7a0c2e]" />,
      label: "Reconstructive & Microvascular Surgery",
    },
  ];
  return (
    <section className="px-4 py-12 lg:px-20 bg-[#f8e9dc]">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-10">
        <h2 className="text-3xl font-bold text-[#7a0c2e] mb-6 text-center">
          Conditions & Procedures Treated
        </h2>
        <ul className="space-y-5 w-full max-w-2xl">
          {conditions.map((item, index) => (
            <li
              key={index}
              className="flex items-center gap-4 text-left justify-start lg:justify-center"
            >
              <span>{item.icon}</span>
              <span className="text-black-800 text-xl">{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ConditionsProcedures;
