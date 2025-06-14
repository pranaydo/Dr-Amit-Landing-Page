import React from "react";
import {
  FaTeeth,
  FaBrain,
  FaLungs,
  FaMicroscope,
  FaUserMd,
  FaProcedures,
} from "react-icons/fa";
import procedureImg from "../assets/13.webp"; // Replace with actual image

const ConditionsProcedures = () => {
  const conditions = [
    {
      icon: <FaTeeth size={20} className="text-[#7a0c2e]" />,
      label: "Oral / Mouth Cancer (incl. tongue, buccal mucosa)",
    },
    {
      icon: <FaMicroscope size={20} className="text-[#7a0c2e]" />,
      label: "Thyroid & Parathyroid Cancer",
    },
    {
      icon: <FaLungs size={20} className="text-[#7a0c2e]" />,
      label: "Laryngeal / Voice-box Cancer",
    },
    {
      icon: <FaUserMd size={20} className="text-[#7a0c2e]" />,
      label: "Salivary Gland / Parotid Tumors",
    },
    {
      icon: <FaBrain size={20} className="text-[#7a0c2e]" />,
      label: "Skull-base & Sinus Tumors",
    },
    {
      icon: <FaProcedures size={20} className="text-[#7a0c2e]" />,
      label: "Reconstructive & Microvascular Surgery",
    },
  ];
  return (
    <section className="bg-gray-100 px-4 py-12 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        {/* Left - Text & List */}
        <div className="lg:w-1/2 lg:pl-24">
          <h2 className="text-3xl font-bold text-[#7a0c2e] mb-6">
            Conditions & Procedures Treated
          </h2>

          <ul className="space-y-5">
            {conditions.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span>{item.icon}</span>
                <p className="text-gray-800 text-xl">{item.label}</p>
              </li>
            ))}
          </ul>
        </div>

        <div
          className="lg:w-1/2 overflow-hidden"
          style={{ borderRadius: "16px" }}
        >
          <img
            src={procedureImg}
            alt="Procedures illustration"
            className="w-full max-w-md mx-auto"
            style={{ display: "block", width: "100%", height: "auto" }}
          />
        </div>
      </div>
    </section>
  );
};

export default ConditionsProcedures;
