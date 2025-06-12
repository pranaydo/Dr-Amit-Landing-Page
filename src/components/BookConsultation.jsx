import React, { useState } from "react";
import bgImg from "../assets/12.png"; // Assuming you have a background image

const BookConsultation = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (API call or email)
    alert("Appointment request submitted!");
  };

  return (
    <div
      className="bg-[#111] bg-cover bg-center py-12 px-4"
      style={{
        backgroundImage: `url(${bgImg})`,
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
        {/* Left: Info */}
        <div className="flex-1 text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Take the First Step Toward Healing
          </h2>
          <div className="mb-2 text-sm opacity-80">
            Your details stay 100% confidential.
          </div>
          <div className="mt-6 flex flex-col gap-3 text-base">
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-white opacity-80"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M22 16.92V19a2 2 0 01-2.18 2A19.72 19.72 0 013 5.18 2 2 0 015 3h2.09a2 2 0 012 1.72c.13 1.05.37 2.07.7 3.06a2 2 0 01-.45 2.11l-.91.91a16 16 0 006.29 6.29l.91-.91a2 2 0 012.11-.45c.99.33 2.01.57 3.06.7a2 2 0 011.72 2z" />
              </svg>
              <a href="tel:+918657717994" className="hover:underline">
                +91-86577 17994
              </a>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-white opacity-80"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M21 10.5V19a2 2 0 01-2 2H5a2 2 0 01-2-2v-8.5" />
                <path d="M3.27 6.96l8.73 6.54 8.73-6.54A2 2 0 0021 5H3a2 2 0 00.27 1.96z" />
              </svg>
              <span>
                2nd Floor, Bellevue Hospital, Opp. D.N. Nagar Metro Station,
                Andheri (W), 400053
              </span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-white opacity-80"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M8 7V3m8 4V3M3 11h18M5 19h14a2 2 0 002-2v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7a2 2 0 002 2z" />
              </svg>
              <span>Mon-Sat 10am-6pm</span>
            </div>
          </div>
        </div>
        {/* Right: Form */}
        <form
          className="bg-white rounded-2xl shadow-lg p-6 md:p-8 w-full max-w-md flex flex-col gap-4"
          onSubmit={handleSubmit}
        >
          <div className="flex gap-3">
            <div className="flex-1">
              <label className="block text-sm font-medium mb-1">
                First Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="firstName"
                required
                value={form.firstName}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#7b223c]"
                placeholder="First Name"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium mb-1">
                Last Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="lastName"
                required
                value={form.lastName}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#7b223c]"
                placeholder="Last Name"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Phone<span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              required
              value={form.phone}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#7b223c]"
              placeholder="Phone"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#7b223c]"
              placeholder="Write your message or query…"
              rows={3}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#7b223c] text-white font-semibold py-2 rounded hover:bg-[#5a182c] transition"
          >
            Book Appointment
          </button>
          {/* <a
            href="tel:+918657717994"
            className="w-full mt-2 text-center border border-[#7b223c] text-[#7b223c] font-semibold py-2 rounded hover:bg-[#f7e5dd] transition"
          >
            Call Now
          </a> */}
        </form>
      </div>
    </div>
  );
};

export default BookConsultation;
