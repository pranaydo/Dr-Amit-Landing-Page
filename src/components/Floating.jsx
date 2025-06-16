import React from "react";
import { Phone, MessageCircle } from "lucide-react";
import { ReceiptText } from "lucide-react";
function FloatingButtons() {
  const scrollToHeroForm = (e) => {
    e.preventDefault();
    const formSection = document.getElementById("appointment-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-center gap-3">
      {/* Call Button */}
      <a
        href="tel:8657717988"
        className="w-12 h-12 flex items-center justify-center rounded-full bg-themeLight text-darkGray border-2 border-darkGray shadow-lg hover:bg-white hover:text-black transition-all duration-200"
      >
        <Phone className="w-5 h-5" />
      </a>

      {/* WhatsApp Button */}
      <form onSubmit={scrollToHeroForm}>
        <button
          type="submit"
          className="w-12 h-12 flex items-center justify-center rounded-full bg-darkGray text-black border-2 border-black-700 hover:bg-white shadow-lg  hover:text-darkGray transition-all duration-200"
        >
          <ReceiptText className="w-5 h-5" />
        </button>
      </form>
    </div>
  );
}

export default FloatingButtons;
