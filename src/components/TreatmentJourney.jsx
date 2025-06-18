import React from "react";
import {
  FaStethoscope,
  FaClipboardList,
  FaUserMd,
  FaHeartbeat,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaStethoscope className="text-5xl text-[#7b223c] mb-4" />,
    title: "Consult & Diagnosis",
    desc: "Comprehensive exam, PET-CT, biopsy, and review to understand your condition clearly.",
  },
  {
    icon: <FaClipboardList className="text-5xl text-[#7b223c] mb-4" />,
    title: "Personalised Plan",
    desc: "A custom plan combining surgery, chemo, or radiotherapy, explained clearly and kindly.",
  },
  {
    icon: <FaUserMd className="text-5xl text-[#7b223c] mb-4" />,
    title: "Expert Treatment",
    desc: "Advanced techniques like robotic surgery with pain-managed, expert-led care.",
  },
  {
    icon: <FaHeartbeat className="text-5xl text-[#7b223c] mb-4" />,
    title: "Recovery & Follow-up",
    desc: "Comprehensive rehab, PET-CT scans, and reviews to understand your condition clearly.",
  },
];

const TreatmentJourney = () => {
  return (
    <div className="relative bg-cover bg-center py-16 px-2 sm:px-4 min-h-[700px]">
      <div className="absolute inset-0 bg-[#a6012d] z-0" />
      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-white text-center mb-12 drop-shadow">
          Your Treatment Journey
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white bg-opacity-95 rounded-2xl shadow-lg flex flex-col items-center justify-center text-center  min-h-[180px] m-4"
            >
              <div>{step.icon}</div>
              <div>
                <div className="font-semibold text-[#7b223c] text-xl mb-2">
                  {step.title}
                </div>
                <div className="text-gray-700 text-base m-2">{step.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TreatmentJourney;
