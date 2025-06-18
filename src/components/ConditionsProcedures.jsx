import React from "react";
import {
  FaTeeth,
  FaBrain,
  FaLungs,
  FaMicroscope,
  FaUserMd,
  FaProcedures,
} from "react-icons/fa";

const ConditionsProcedures = () => {
  const conditions = [
    {
      icon: <FaTeeth size={32} className="text-[#7a0c2e]" />,
      label: "Oral / Mouth Cancer (incl. tongue, buccal mucosa)",
    },
    {
      icon: <FaMicroscope size={32} className="text-[#7a0c2e]" />,
      label: "Thyroid & Parathyroid Cancer",
    },
    {
      icon: <FaLungs size={32} className="text-[#7a0c2e]" />,
      label: "Laryngeal / Voice-box Cancer",
    },
    {
      icon: <FaUserMd size={32} className="text-[#7a0c2e]" />,
      label: "Salivary Gland / Parotid Tumors",
    },
    {
      icon: <FaBrain size={32} className="text-[#7a0c2e]" />,
      label: "Skull-base & Sinus Tumors",
    },
    {
      icon: <FaProcedures size={32} className="text-[#7a0c2e]" />,
      label: "Reconstructive & Microvascular Surgery",
    },
  ];

  return (
    <section className="px-4 py-12 lg:px-20 bg-[#f8e9dc]">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-10">
        <h2 className="text-3xl font-bold text-gray mb-6 text-center">
          Why <span className="text-[#7a0c2e]">Thousands</span> Trust Dr Amit
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
          {conditions.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-white shadow-md rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition"
            >
              <div className="mb-3">{item.icon}</div>
              <p className="text-black-800 text-lg">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConditionsProcedures;
