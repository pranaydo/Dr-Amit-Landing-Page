import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Thankyou = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen flex flex-col justify-center items-center bg-[#f8e9dc] px-4 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center max-w-md w-full">
          {/* Success Icon */}
          <div className="mb-4">
            <svg
              className="w-20 h-20 text-[#a6012d]"
              fill="none"
              viewBox="0 0 64 64"
              stroke="currentColor"
            >
              <circle
                cx="32"
                cy="32"
                r="30"
                stroke="#a6012d"
                strokeWidth="4"
                fill="#f8e9dc"
              />
              <path
                d="M20 34l8 8 16-16"
                stroke="#a6012d"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-[#a6012d] mb-2 text-center">
            Thank You!
          </h1>
          <p className="text-lg text-gray-700 mb-4 text-center">
            Your submission has been received.
            <br />
            We will get in touch with you soon.
          </p>
          <a
            href="/"
            className="mt-2 inline-block bg-[#a6012d] text-white px-6 py-2 rounded font-semibold hover:bg-[#7b223c] transition"
          >
            Back to Home
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Thankyou;
