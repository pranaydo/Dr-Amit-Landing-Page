import ban1 from "../assets/ban12.jpg";
import ban2 from "../assets/ban2.jpg"; // Use the correct mobile image here

function Banner() {
  return (
    <div className="w-full overflow-hidden">
      {/* Desktop Image */}
      <img
        rel="preload"
        src={ban1}
        alt="Desktop Banner"
        className="hidden sm:block w-full h-full object-cover"
        fetchpriority="high"
      />

      {/* Mobile Image */}
      <img
        rel="preload"
        src={ban2}
        alt="Mobile Banner"
        className="block sm:hidden w-full h-full object-cover"
        fetchpriority="high"
      />
    </div>
  );
}

export default Banner;
