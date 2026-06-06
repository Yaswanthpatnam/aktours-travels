export default function Services() {
  const services = [
    { title: "Local Cabs", img: "/mysore.png" },
    { title: "Airport Cabs", img: "/devanahalli.png" },
    { title: "Outstation Cabs", img: "/kanyakumari.png" },
  ];

  return (
    <div className="section px-4">

      <h2 className="section-title">Our Services</h2>

      <div className="mt-6 flex flex-col gap-4 md:flex-row md:justify-center md:gap-6">

        {services.map((s, i) => (
          <div
            key={i}
            className="relative w-full md:w-[260px] h-[140px] md:h-[320px] md:h-[320px] 
            rounded-xl overflow-hidden hover:scale-105"
          >
            <img src={s.img} className="w-full h-full object-cover" />

            <div className="absolute inset-0 bg-black/30" />

            <div className="absolute bottom-4 left-4 text-white">
              {s.title}
            </div>
          </div>
        ))}

      </div>

      <p className="section-text">
        Reliable cab services for airport, local, and outstation travel.
      </p>

    </div>
  );
}