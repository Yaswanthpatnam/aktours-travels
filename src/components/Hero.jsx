import { useState } from "react";

export default function Hero() {
  const [hover, setHover] = useState(false);

  const goToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div id="home" className="px-4 md:px-10 mt-2 md:mt-4 min-h-screen flex flex-col justify-center">

      <div
        className="relative rounded-xl overflow-hidden shadow-xl"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <img
          src="/desktop.png"
          className={`w-full h-[60vh] md:h-[420px] object-cover transition duration-500 ${
            hover ? "blur-[1px] active:blur-[1px] scale-105" : ""
          }`}
        />

        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
          <div className={`text-white text-center px-4 transition ${
            hover ? "opacity-100" : "opacity-100 md:opacity-0"
          }`}>
            <h2 className="text-xl md:text-3xl font-calibri font-semibold">
              Trusted. Reliable. Professional.
            </h2>

            <p className="mt-2 text-sm md:text-md font-calibri italic ">
              Safe, punctual, and reliable rides across Bengaluru.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-5">
        <button
          onClick={goToBooking}
          className="bg-brand text-white px-5 py-2 md:px-6 md:py-3 rounded-lg 
          active:scale-95 transition"
        >
          Book Now
        </button>
      </div>

    </div>
  );
}