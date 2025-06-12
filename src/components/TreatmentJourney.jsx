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
      className="relative bg-cover bg-center py-6 pb-8 px-2 sm:px-4"
      // style={{
      //   backgroundImage: `url(${bgImg})`,
      // }}
    >
      {/* Overlay for better readability */}
      <div className="absolute inset-0 bg-black opacity-50 z-0" />
      <div className="relative z-10 w-full max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8 drop-shadow">
          Your Treatment Journey
        </h2>
        <div className="flex flex-col gap-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white bg-opacity-95 rounded-xl sm:rounded-2xl shadow-lg flex items-start p-6 w-full mx-auto"
            >
              <div className="text-4xl font-bold text-[#7b223c] mr-4">
                {idx + 1}
              </div>
              <div>
                <div className="font-semibold text-[#7b223c] text-lg mb-1">
                  {step.title}
                </div>
                <div className="text-gray-700 text-sm">{step.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TreatmentJourney;
