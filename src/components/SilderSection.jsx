import React, { useState } from "react";
import pic1 from "../assets/1.jpeg";
import pic2 from "../assets/2.jpeg";
import pic3 from "../assets/3.jpeg";

const images = [pic1, pic2, pic3];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  // Handle next/prev for desktop
  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);

  // Touch events for mobile swipe
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
      nextSlide();
    }
    if (touchEndX - touchStartX > 50) {
      prevSlide();
    }
  };

  return (
    <div className=" bg-[#f8e9dc] w-full  mx-auto relative px-2 lg:px-12 py-4 lg:py-8">
      {/* Image */}
      <div
        className="w-full h-64 sm:h-80 lg:h-[32rem] flex items-center justify-center overflow-hidden rounded-lg"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <img
          src={images[current]}
          alt={`slide-${current}`}
          className="w-full h-full object-cover"
        />
      </div>
      {/* Desktop Controls */}
      <button
        className="hidden sm:block absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-3 shadow"
        onClick={prevSlide}
        aria-label="Previous"
      >
        &#8592;
      </button>
      <button
        className="hidden sm:block absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-3 shadow"
        onClick={nextSlide}
        aria-label="Next"
      >
        &#8594;
      </button>
      {/* Dots */}
      <div className="flex justify-center mt-4 gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full ${
              idx === current ? "bg-[#a6012d]" : "bg-gray-300"
            }`}
            onClick={() => setCurrent(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
