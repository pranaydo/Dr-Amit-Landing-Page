import React from "react";

const stories = [
  {
    img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=100&q=80",
    alt: "Patient 1",
  },
  {
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&q=80",
    alt: "Patient 2",
  },
  {
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=100&q=80",
    alt: "Patient 3",
  },
];

const PatientStories = () => {
  return (
    <div className="bg-[#f7e5dd] py-10 px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#7b223c]">
        Patient Stories of Hope
      </h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 max-w-4xl mx-auto">
        {/* Side images */}
        <div className="flex md:flex-col gap-4">
          {stories.map((story, idx) => (
            <img
              key={idx}
              src={story.img}
              alt={story.alt}
              className="w-16 h-16 rounded-lg object-cover border-2 border-white shadow"
            />
          ))}
        </div>
        {/* Main story card */}
        <div className="bg-white rounded-xl shadow-lg flex flex-col md:flex-row items-center p-6 md:p-8 flex-1 max-w-2xl">
          <div className="flex-1">
            <h3 className="text-xl md:text-2xl font-bold text-[#7b223c] mb-2">
              Every Appointment Felt Like a Step Toward Healing
            </h3>
            <p className="text-gray-600 text-sm md:text-base mb-4">
              “Dr. Amit’s positivity, precision, and patience made all the
              difference. I felt more than a patient. I felt truly cared for.”
            </p>
            <div className="text-right text-[#7b223c] font-semibold text-sm">
              Rajesh Verma, Thyroid Cancer
            </div>
          </div>
          <div className="ml-0 md:ml-8 mt-4 md:mt-0 flex-shrink-0">
            {/* Awareness ribbon SVG */}
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
              <path
                d="M32 8C22 8 16 18 16 26c0 10 16 30 16 30s16-20 16-30c0-8-6-18-16-18z"
                fill="#f7e5dd"
              />
              <path
                d="M32 8c-10 0-16 10-16 18 0 10 16 30 16 30s16-20 16-30c0-8-6-18-16-18zm0 4c7.732 0 14 7.268 14 14 0 7.732-7.268 14-14 14S18 29.732 18 22c0-6.732 6.268-14 14-14z"
                fill="#b23c5a"
              />
              <path
                d="M20 54c6-8 18-8 24 0"
                stroke="#b23c5a"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientStories;
