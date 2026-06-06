export default function Cars() {

  const cars = [
    { name: "Swift Desire", img: "/desire.png" },
    { name: "Etios", img: "/etios.png" },
    { name: "Innova", img: "/innova.png" },
    { name: "Innova Crysta", img: "/crysta.png" },
    { name: "Tempo Traveller", img: "/tempo.png" },
  ];

  return (
    <div className="section">

      <h2 className="section-title">Our Cars</h2>

<p className="section-text">
  We offer a range of well-maintained vehicles ensuring comfort,
  safety, and reliability for every journey.
</p>

      <div className="flex justify-center mt-8">
        <div className="flex gap-6 overflow-x-auto max-w-[900px]">

          {cars.map((car, i) => (
            <div
              key={i}
              className="min-w-[220px] h-[320px] rounded-xl overflow-hidden 
relative group transition duration-300 hover:scale-105"
            >
              <img src={car.img} className="w-full h-full object-cover" />

              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition" />

              <div className="absolute bottom-4 left-4 text-white">
                {car.name}
              </div>
            </div>
          ))}

        </div>
      </div>

    </div>
  );
}