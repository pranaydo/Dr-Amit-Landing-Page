// import React, { useState } from "react";
// import bgImg from "../assets/12.png";
// import { useNavigate } from "react-router-dom";

// const BookConsultation = () => {
//   const [fullName, setFullName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (event) => {
//     event.preventDefault(); // Prevent default form submission behavior
//     console.log(event, "event");

//     const formData = {
//       fullName: fullName,
//       email: email,
//       phone: phone,
//       // timestamp: new Date().toISOString(), // Add a timestamp
//     };

//     try {
//       const response = await fetch(
//         "https://hooks.zapier.com/hooks/catch/22908877/uoy9px5/",
//         {
//           method: "POST",
//           // headers: {
//           //   "Content-Type": "application/json",
//           // },
//           body: JSON.stringify(formData),
//         }
//       );
//       if (response.ok) {
//         setFullName("");
//         setEmail("");
//         setPhone("");
//         navigate("/thank-you");
//       }

//       console.log(response, "response");
//     } catch (error) {
//       console.error("Error during API call:", error);
//     }
//   };

//   return (
//     <div
//       className="relative bg-center py-12 px-4"
//       // style={{
//       //   backgroundImage: `url(${bgImg})`,
//       // }}
//     >
//       {/* Overlay */}
//       <div className="absolute inset-0 bg-[#a6012d] pointer-events-none" />
//       <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
//         {/* Left: Info */}
//         <div className="flex-1 text-white">
//           <h2 className="text-2xl md:text-3xl font-bold mb-4">
//             Take the First Step Toward Healing
//           </h2>
//           <div className="mb-2 text-sm opacity-80">
//             Your details stay 100% confidential.
//           </div>
//           <div className="mt-6 flex flex-col gap-3 text-base">
//             <div className="flex items-center gap-2">
//               <svg
//                 className="w-5 h-5 text-white opacity-80"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 viewBox="0 0 24 24"
//               >
//                 <path d="M22 16.92V19a2 2 0 01-2.18 2A19.72 19.72 0 013 5.18 2 2 0 015 3h2.09a2 2 0 012 1.72c.13 1.05.37 2.07.7 3.06a2 2 0 01-.45 2.11l-.91.91a16 16 0 006.29 6.29l.91-.91a2 2 0 012.11-.45c.99.33 2.01.57 3.06.7a2 2 0 011.72 2z" />
//               </svg>
//               <a href="tel:+918657717994" className="hover:underline">
//                 +91-86577 17994
//               </a>
//             </div>
//             <div className="flex items-center gap-2">
//               <svg
//                 className="w-5 h-5 text-white opacity-80"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 viewBox="0 0 24 24"
//               >
//                 <path d="M21 10.5V19a2 2 0 01-2 2H5a2 2 0 01-2-2v-8.5" />
//                 <path d="M3.27 6.96l8.73 6.54 8.73-6.54A2 2 0 0021 5H3a2 2 0 00.27 1.96z" />
//               </svg>
//               <span>
//                 2nd Floor, Bellevue Hospital, Opp. D.N. Nagar Metro Station,
//                 Andheri (W), 400053
//               </span>
//             </div>
//             <div className="flex items-center gap-2">
//               <svg
//                 className="w-5 h-5 text-white opacity-80"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 viewBox="0 0 24 24"
//               >
//                 <path d="M8 7V3m8 4V3M3 11h18M5 19h14a2 2 0 002-2v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7a2 2 0 002 2z" />
//               </svg>
//               <span>Mon-Sat 10am-6pm</span>
//             </div>
//           </div>
//         </div>
//         {/* Right: Form */}
//         <form
//           className="bg-white rounded-2xl shadow-lg p-6 md:p-8 w-full max-w-md flex flex-col gap-4"
//           onSubmit={handleSubmit}
//         >
//           <div className=" gap-3">
//             {/* <div className="flex-1"> */}
//             <label className="block text-sm font-medium mb-1">
//               Full Name<span className="text-red-500">*</span>
//             </label>
//             <input
//               type="text"
//               name="fullName"
//               required
//               value={fullName}
//               onChange={(e) => setFullName(e.target.value)}
//               className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#7b223c]"
//               placeholder="Full Name"
//             />
//             {/* </div> */}
//             <div className="">
//               <label className="block text-sm font-medium mb-1">
//                 Email<span className="text-red-500">*</span>
//               </label>
//               <input
//                 type="text"
//                 name="email"
//                 required
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#7b223c]"
//                 placeholder="Email"
//               />
//             </div>
//           </div>
//           <div>
//             <label className="block text-sm font-medium mb-1">
//               Phone<span className="text-red-500">*</span>
//             </label>
//             <input
//               type="tel"
//               name="phone"
//               required
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//               className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#7b223c]"
//               placeholder="Phone"
//             />
//           </div>

//           <div className="flex justify-center">
//             <button
//               type="submit"
//               className="bg-[#a6012d] hover:bg-white hover:text-black hover:border-2 hover:border-[#a6012d] w-40 text-white font-semibold py-2 rounded"
//             >
//               Book Appointment
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default BookConsultation;

import React, { useState } from "react";
// import bgImg from "../assets/12.png";
import { useNavigate } from "react-router-dom";

const BookConsultation = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = { fullName, email, phone };
    try {
      const response = await fetch(
        "https://hooks.zapier.com/hooks/catch/22908877/uoy9px5/",
        {
          method: "POST",
          body: JSON.stringify(formData),
        }
      );
      if (response.ok) {
        setFullName("");
        setEmail("");
        setPhone("");
        navigate("/thank-you");
      }
    } catch (error) {
      console.error("Error during API call:", error);
    }
  };

  return (
    <div className="relative bg-center py-12 px-4">
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#a6012d] pointer-events-none" />
      <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
        {/* MOBILE ORDER */}
        <div className="w-full flex flex-col md:hidden">
          {/* Heading and confidential text */}
          <h2 className="text-2xl font-bold mb-4 text-white">
            Take the First Step Toward Healing
          </h2>
          <div className="mb-4 text-sm opacity-80 text-white">
            Your details stay 100% confidential.
          </div>
          {/* Form */}
          <form
            className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-md flex flex-col gap-4 mb-6"
            onSubmit={handleSubmit}
          >
            <div className="gap-3">
              <label className="block text-sm font-medium mb-1">
                Full Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#7b223c]"
                placeholder="Full Name"
              />
              <div>
                <label className="block text-sm font-medium mb-1">
                  Email<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#7b223c]"
                  placeholder="Email"
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
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#7b223c]"
                placeholder="Phone"
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-[#a6012d] hover:bg-white hover:text-black hover:border-2 hover:border-[#a6012d] w-40 text-white font-semibold py-2 rounded"
              >
                Book Appointment
              </button>
            </div>
          </form>
          {/* Contact/Location/Timing */}
          <div className="mt-2 flex flex-col gap-3 text-white">
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
        {/* DESKTOP ORDER */}
        <div className="hidden md:flex flex-1 text-white flex-col">
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
        <form
          className="hidden md:flex bg-white rounded-2xl shadow-lg p-6 md:p-8 w-full max-w-md flex-col gap-4"
          onSubmit={handleSubmit}
        >
          <div className="gap-3">
            <label className="block text-sm font-medium mb-1">
              Full Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#7b223c]"
              placeholder="Full Name"
            />
            <div>
              <label className="block text-sm font-medium mb-1">
                Email<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#7b223c]"
                placeholder="Email"
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
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#7b223c]"
              placeholder="Phone"
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-[#a6012d] hover:bg-white hover:text-black border-2 border-black w-40 text-white font-semibold py-2 rounded"
            >
              Book Appointment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookConsultation;
