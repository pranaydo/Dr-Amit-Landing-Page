import React from "react";

const features = [
  {
    icon: (
      <svg
        className="w-8 h-8 text-[#7b223c]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M12 21C12 21 4 13.36 4 8.5C4 5.42 6.42 3 9.5 3C11.24 3 12.91 3.81 14 5.08C15.09 3.81 16.76 3 18.5 3C21.58 3 24 5.42 24 8.5C24 13.36 16 21 16 21H12Z" />
      </svg>
    ),
    title: "10+ yrs / 25k+ surgeries",
    subtitle: "seasoned expertise",
  },
  {
    icon: (
      <svg
        className="w-8 h-8 text-[#7b223c]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="7" r="4" />
        <path d="M5.5 21v-2a4.5 4.5 0 019 0v2" />
      </svg>
    ),
    title: "Exclusive head-&-neck focus",
    subtitle: "precise healthcare",
  },
  {
    icon: (
      <svg
        className="w-8 h-8 text-[#7b223c]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <rect x="3" y="11" width="18" height="10" rx="2" />
        <path d="M7 11V7a5 5 0 0110 0v4" />
      </svg>
    ),
    title: "Robotic & laser techniques",
    subtitle: "less pain, faster recovery",
  },
  {
    icon: (
      <svg
        className="w-8 h-8 text-[#7b223c]"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.049 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
      </svg>
    ),
    title: "4.9★ Google rating & 1000+ grateful families",
    subtitle: "proven trust",
  },
  {
    icon: (
      <svg
        className="w-8 h-8 text-[#7b223c]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M17 21v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: "Multidisciplinary team & top hospitals",
    subtitle: "360° care",
  },
  {
    icon: (
      <svg
        className="w-8 h-8 text-[#7b223c]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14v2m0 12v2m8-8h-2m-12 0H2" />
      </svg>
    ),
    title: "Transparent costs & second-opinion friendly",
    subtitle: "ethical practice",
  },
];

const WhyChoose = () => {
  return (
    <div className="py-8 px-4  mx-auto " style={{ backgroundColor: "#f8e9dc" }}>
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#7b223c]">
        Why Patients Choose Dr. Amit
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl border border-gray-200 shadow-sm flex flex-col items-start p-5 min-h-[140px]"
          >
            <div className="mb-3">{feature.icon}</div>
            <div className="font-semibold text-[#7b223c]">{feature.title}</div>
            <div className="text-xs text-gray-500 mt-1">{feature.subtitle}</div>
          </div>
        ))}
        {/* <div className="bg-white rounded-xl border border-gray-200 shadow-sm flex items-center justify-center p-0 overflow-hidden min-h-[140px]">
          <img
            src="https://images.unsplash.com/photo-1519494080410-f9aa8f52f1e1?auto=format&fit=crop&w=400&q=80"
            alt="Dr. Amit with patient"
            className="object-cover w-full h-full"
          />
        </div> */}
      </div>
    </div>
  );
};

export default WhyChoose;
