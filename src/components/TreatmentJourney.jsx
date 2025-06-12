import React from "react";

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
      className="relative py-12 px-2 sm:px-4 bg-cover bg-center min-h-[700px] flex items-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80')",
      }}
    >
      <div className="w-full max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8 drop-shadow">
          Your Treatment Journey
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white bg-opacity-95 rounded-xl shadow-lg flex items-start p-6"
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
