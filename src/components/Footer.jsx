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
          className="h-8 w-8 object-contain"
        />
        {/* <span className="font-semibold text-[#7b223c] text-lg">
          Dr. Amit’s Cancer Care
        </span> */}
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
        href="tel:+918657717994"
        className="bg-[#7b223c] text-white font-semibold px-5 py-2 rounded-full hover:bg-[#5a182c] transition"
      >
        +91-86577 17994
      </a>
    </div>
  </footer>
);

export default Footer;
