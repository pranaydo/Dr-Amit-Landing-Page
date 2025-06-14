import React from "react";
import dramitlogo from "../assets/dramitlogo.webp";

const Footer = () => (
  <footer className="bg-white border-t py-4 px-2">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      {/* Logo and tagline */}
      <div className="flex items-center gap-2">
        <img
          src={dramitlogo}
          alt="Dr. Amit's Cancer Care"
          className="h-8 w-auto object-contain"
        />
      </div>
      {/* Address */}
      <div className="text-center md:text-left text-gray-700 text-sm">
        <div className="font-semibold">ISO Andheri (Hospital and Clinic)</div>
        <div>
          2nd Floor, Bellevue Hospital, Opp. D.N. Nagar
          <br />
          Metro Station, Andheri (W), 400053
        </div>
      </div>
      {/* Call button */}
      <a
        href="tel:+918657717988"
        className="bg-[#a6012d] text-white hover:bg-white hover:text-black hover:border-2 hover:border-[#a6012d] text-sm font-semibold px-4 py-2 rounded-sm flex items-center gap-2"
      >
        <svg
          className="w-4 h-4 "
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M22 16.92V19a2 2 0 01-2.18 2A19.72 19.72 0 013 5.18 2 2 0 015 3h2.09a2 2 0 012 1.72c.13 1.05.37 2.07.7 3.06a2 2 0 01-.45 2.11l-.91.91a16 16 0 006.29 6.29l.91-.91a2 2 0 012.11-.45c.99.33 2.01.57 3.06.7a2 2 0 011.72 2z" />
        </svg>
        8657717988
      </a>
    </div>
  </footer>
);

export default Footer;
