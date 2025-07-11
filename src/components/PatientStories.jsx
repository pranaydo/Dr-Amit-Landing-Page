// import React, { useState } from "react";

// const stories = [
//   {
//     img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=100&q=80",
//     alt: "Patient 1",
//     title: "Every Appointment Felt Like a Step Toward Healing",
//     quote:
//       "“Dr. Amit’s positivity, precision, and patience made all the difference. I felt more than a patient. I felt truly cared for.”",
//     name: "Rajesh Verma, Thyroid Cancer",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&q=80",
//     alt: "Patient 2",
//     title: "A Journey from Fear to Confidence",
//     quote:
//       "“The team explained everything so well. I always felt supported and confident in my treatment.”",
//     name: "Priya Sharma, Oral Cancer",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=100&q=80",
//     alt: "Patient 3",
//     title: "Care Beyond Treatment",
//     quote:
//       "“Not just medical care, but emotional support too. I am grateful for the compassion I received.”",
//     name: "Amit Patel, Laryngeal Cancer",
//   },
// ];

// const PatientStories = () => {
//   const [selected, setSelected] = useState(0);

//   return (
//     <div className="py-16 px-4 min-h-[520px]">
//       <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-[#7b223c]">
//         Patient Stories of Hope
//       </h2>
//       <div className="flex flex-col md:flex-row items-center justify-center gap-10 max-w-5xl mx-auto min-h-[380px]">
//         {/* Side images */}
//         <div className="flex md:flex-col gap-6">
//           {stories.map((story, idx) => (
//             <img
//               key={idx}
//               src={story.img}
//               alt={story.alt}
//               className={`w-24 h-28 rounded-xl object-cover border-2 shadow cursor-pointer transition-all duration-200 ${
//                 selected === idx
//                   ? "border-[#7b223c] ring-2 ring-[#7b223c]"
//                   : "border-white"
//               }`}
//               onMouseEnter={() => setSelected(idx)}
//               onClick={() => setSelected(idx)}
//             />
//           ))}
//         </div>
//         {/* Main story card */}
//         <div
//           className="bg-[#f8e9dc] rounded-2xl shadow-lg flex flex-col md:flex-row items-center p-10 md:p-14 flex-1 max-w-3xl min-h-[320px] shadow-2xl
// "
//         >
//           <div className="flex-1">
//             <h3 className="text-2xl md:text-3xl font-bold text-[#7b223c] mb-4">
//               {stories[selected].title}
//             </h3>
//             <p className="text-gray-600 text-base md:text-lg mb-6">
//               {stories[selected].quote}
//             </p>
//             <div className="text-right text-[#7b223c] font-semibold text-base">
//               {stories[selected].name}
//             </div>
//           </div>
//           <div className="ml-0 md:ml-12 mt-6 md:mt-0 flex-shrink-0">
//             {/* Awareness ribbon SVG */}
//             <svg width="80" height="80" viewBox="0 0 64 64" fill="none">
//               <path
//                 d="M32 8C22 8 16 18 16 26c0 10 16 30 16 30s16-20 16-30c0-8-6-18-16-18z"
//                 fill="#f7e5dd"
//               />
//               <path
//                 d="M32 8c-10 0-16 10-16 18 0 10 16 30 16 30s16-20 16-30c0-8-6-18-16-18zm0 4c7.732 0 14 7.268 14 14 0 7.732-7.268 14-14 14S18 29.732 18 22c0-6.732 6.268-14 14-14z"
//                 fill="#b23c5a"
//               />
//               <path
//                 d="M20 54c6-8 18-8 24 0"
//                 stroke="#b23c5a"
//                 strokeWidth="4"
//                 strokeLinecap="round"
//               />
//             </svg>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PatientStories;

import React, { useState } from "react";

const stories = [
  {
    title: "Every Appointment Felt Like a Step Toward Healing",
    quote:
      "“Dr. Amit’s positivity, precision, and patience made all the difference. I felt more than a patient. I felt truly cared for.”",
    name: "Rajesh Verma, Thyroid Cancer",
  },
  {
    title: "A Journey from Fear to Confidence",
    quote:
      "“The team explained everything so well. I always felt supported and confident in my treatment.”",
    name: "Priya Sharma, Oral Cancer",
  },
  {
    title: "Care Beyond Treatment",
    quote:
      "“Not just medical care, but emotional support too. I am grateful for the compassion I received.”",
    name: "Amit Patel, Laryngeal Cancer",
  },
];

const ICON_HEIGHT = 60; // px

const PatientStories = () => {
  const [selected, setSelected] = useState(0);

  // Mobile swipe handlers
  let touchStartX = 0;
  let touchEndX = 0;

  const handleTouchStart = (e) => {
    touchStartX = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX - touchEndX > 50) {
      setSelected((prev) => (prev + 1) % stories.length);
    }
    if (touchEndX - touchStartX > 50) {
      setSelected((prev) => (prev - 1 + stories.length) % stories.length);
    }
  };

  return (
    <div className="py-16 px-4 min-h-[520px]">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-[#7b223c]">
        Patient Stories of Hope
      </h2>
      {/* Desktop: Show all cards in a row, Mobile: Show one card as slider */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-5xl mx-auto min-h-[380px]">
        {/* Mobile Slider */}
        <div className="w-full md:hidden">
          <div
            className="bg-[#f8e9dc] rounded-2xl shadow-lg flex flex-col items-center p-8 min-h-[320px] transition-all duration-300"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex justify-center mb-6"
              style={{ minHeight: ICON_HEIGHT }}
            >
              {/* Awareness ribbon SVG */}
              <svg width="60" height="60" viewBox="0 0 64 64" fill="none">
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
            <h3 className="text-2xl font-bold text-[#7b223c] mb-4">
              {stories[selected].title}
            </h3>
            <p className="text-gray-600 text-base mb-6">
              {stories[selected].quote}
            </p>
            <div className="text-right text-[#7b223c] font-semibold text-base w-full">
              {stories[selected].name}
            </div>
            {/* Dots */}
            <div className="flex justify-center gap-2 mt-4">
              {stories.map((_, idx) => (
                <button
                  key={idx}
                  className={`w-3 h-3 rounded-full ${
                    selected === idx ? "bg-[#7b223c]" : "bg-gray-300"
                  }`}
                  onClick={() => setSelected(idx)}
                  aria-label={`Go to story ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
        {/* Desktop: All cards in a row */}
        <div className="hidden md:flex flex-row gap-8 w-full justify-center items-stretch">
          {stories.map((story, idx) => (
            <div
              key={idx}
              className="bg-[#f8e9dc] rounded-2xl shadow-lg flex flex-col items-center p-8 min-h-[320px] max-w-xs flex-1"
            >
              <div
                className="flex justify-center mb-6"
                style={{ minHeight: ICON_HEIGHT }}
              >
                {/* Awareness ribbon SVG */}
                <svg width="60" height="60" viewBox="0 0 64 64" fill="none">
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
              <h3 className="text-2xl font-bold text-[#7b223c] mb-4">
                {story.title}
              </h3>
              <p className="text-gray-600 text-base mb-6">{story.quote}</p>
              <div className="text-right text-[#7b223c] font-semibold text-base w-full">
                {story.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PatientStories;
