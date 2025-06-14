import React, { useState } from "react";

const faqs = [
  {
    q: "Is surgery painful/risky?",
    a: "Most surgeries are minimally invasive and pain is well controlled with modern techniques.",
  },
  {
    q: "How urgent is treatment?",
    a: "Earlier treatment usually means better outcomes. Quick appointment slots are available.",
  },
  {
    q: "Can I get cost clarity?",
    a: "Yes, you’ll receive a transparent estimate at your first visit.",
  },
  {
    q: "Do I need a referral?",
    a: "No referral is needed; self-booking is welcome.",
  },
];

const FAQ = () => {
  const [open, setOpen] = useState(null);

  return (
    <div className=" bg-[#f8e9dc] py-16 px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-[#a6012d] mb-8">
        FAQ
      </h2>
      <div className="max-w-2xl mx-auto flex flex-col gap-4">
        {faqs.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg px-5 py-4 cursor-pointer transition-shadow shadow flex items-center justify-between flex-col"
            onClick={() => setOpen(open === idx ? null : idx)}
          >
            <div className="flex items-center w-full justify-between">
              <span className="font-medium text-gray-800 text-lg">
                {item.q}
              </span>
              <span className="ml-4">
                <svg
                  className={`w-6 h-6 text-[a6012d] transition-transform duration-200 ${
                    open === idx ? "rotate-180" : ""
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.085l3.71-3.855a.75.75 0 111.08 1.04l-4.24 4.4a.75.75 0 01-1.08 0l-4.24-4.4a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </div>
            {open === idx && (
              <div className="w-full text-gray-600 text-base mt-4">
                {item.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
