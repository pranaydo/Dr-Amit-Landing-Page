import React, { useState } from "react";
import doc from "../assets/banner-img.webp";
// import operative from "../assets/doctor-operating.webp";
import { useNavigate } from "react-router-dom";
import { Bot } from "lucide-react";

const HeroWithForm = ({ isMiddleHero }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    console.log(event, "event");

    const formData = {
      fullName: fullName,
      email: email,
      phone: phone,
    };

    try {
      const response = await fetch(
        // "https://hooks.zapier.com/hooks/catch/22908877/uycgz9d/",
        "https://hooks.zapier.com/hooks/catch/22908877/uoy9px5/",
        {
          method: "POST",
          // headers: {
          //   "Content-Type": "application/json",
          // },
          body: JSON.stringify(formData),
        }
      );
      if (response.ok) {
        setFullName("");
        setEmail("");
        setPhone("");
        navigate("/thank-you");
      }

      console.log(response, "response");
    } catch (error) {
      console.error("Error during API call:", error);
    }
  };
  return (
    <section
      className={` text-white py-12 px-4 md:px-16 ${
        isMiddleHero ? "bg-[#f8e9dc]" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2 flex flex-col items-center text-center text-black">
          {/* <img src={operative} alt="Doctor" className="rounded-lg w-60 mb-6" /> */}
          <h1 className="text-3xl md:text-4xl font-semibold mb-2">
            Head & Neck Cancer Specialist <br />{" "}
            <span className="text-[#be953f]">Dr. Amit Chakraborty,</span> Mumbai
          </h1>
          {!isMiddleHero && (
            <p className="text-xl md:text-base text-center">
              🏅 18+ yrs experience
              <br />
              <span className="inline-flex items-center justify-center gap-2">
                <Bot className="w-5 h-5" />
                Robotic & minimally-invasive surgery
              </span>
            </p>
          )}
        </div>

        {/* Right Side - Contact Form */}
        <div
          id="appointment-form"
          className={` ${
            isMiddleHero
              ? "md:w-1/2  text-black p-6 rounded-2xl  w-full"
              : "md:w-1/2 bg-white text-black p-6 rounded-2xl  w-full"
          }`}
        >
          <div
            className="text-center text-xl  font-semibold
 pb-8"
          >
            <span className="text-[#a6012d] ">Relief</span> Starts Today! <br />{" "}
            Book Your Appointment Here
          </div>
          <form
            onSubmit={handleSubmit}
            // className=""
            className="bg-white rounded-2xl p-6 
 space-y-4"
            style={{ boxShadow: "0 4px 24px 0 rgba(166, 1, 45, 0.25)" }}
          >
            <div>
              <label className="block text-sm font-medium"> Full Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Phone</label>
              <input
                type="tel"
                className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
                placeholder="Your Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-[#a6012d]  hover:text-black hover:bg-white border-2 border-black w-40 text-white font-semibold py-2 rounded"
              >
                Book Appointment
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default HeroWithForm;
