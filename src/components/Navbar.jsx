export default function Navbar() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full flex justify-between items-center px-4 md:px-10 py-10 md:py-8 sm:py-6">

      {/* LEFT */}
      <div className="flex items-center gap-2">
        <img
          src="/ak.png"
          className="w-12 h-12 object-contain"
        />

        <div className="leading-tight">
          <p className="font-times text-sm md:text-lg text-[#2D309A] font-bold">
            TOURS &
          </p>
          <p className="font-times text-sm md:text-lg text-[#2D309A] font-bold">
            TRAVELS
          </p>
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex gap-3 md:gap-6 font-calibri text-lg md:text-md">

        <button
          onClick={() => scrollTo("home")}
          className="px-2 py-1 md:px-3 md:py-2 rounded-lg transition 
          hover:bg-gray-300 active:hover:bg-gray-300 active:scale-95"
        >
          Home
        </button>

        <button
          onClick={() => scrollTo("contact")}
          className="
px-3 py-2 rounded-lg
transition
hover:bg-gray-300
active:bg-gray-300
"
        >
          Contact
        </button>

      </div>
    </div>
  );
}