import { useState } from "react";
import { Users, Briefcase, Wind, Check, ArrowRight, ShieldCheck } from "lucide-react";
import { FLEET } from "../data/bookingData";

export default function Cars({ onSelectCar }) {
  const [filter, setFilter] = useState("all"); // 'all' | 'Sedan' | 'SUV' | 'Group'

  const filteredFleet = filter === "all" 
    ? FLEET 
    : FLEET.filter((car) => {
        if (filter === "SUV") return car.category.includes("SUV");
        return car.category === filter;
      });

  const handleSelectCar = (carId) => {
    if (onSelectCar) {
      onSelectCar(carId);
    }
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="fleet" className="py-16 sm:py-20 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-blue-600 font-bold text-xs sm:text-sm uppercase tracking-wider bg-blue-50 px-3.5 py-1.5 rounded-full">
            Our Bengaluru Fleet
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Premium, Clean & Well-Maintained Vehicles
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            From agile city sedans for Bengaluru's traffic to luxury Innova Crystas and spacious Tempo Travellers for Karnataka expeditions.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {[
              { id: "all", label: "All Vehicles" },
              { id: "Sedan", label: "Sedans (Dzire, Etios)" },
              { id: "SUV", label: "SUVs (Innova, Crysta)" },
              { id: "Group", label: "Group / Tempo Traveller" },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition cursor-pointer ${
                  filter === f.id
                    ? "bg-blue-600 text-white shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredFleet.map((car) => (
            <div
              key={car.id}
              className="bg-slate-50/70 rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image showcase */}
                <div className="relative h-56 bg-gradient-to-b from-slate-100 to-white flex items-center justify-center p-6 border-b border-slate-200/60 overflow-hidden">
                  <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-slate-700 border border-slate-200 shadow-2xs">
                    {car.category}
                  </span>
                  
                  <span className="absolute top-4 right-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-xs font-black shadow-xs">
                    {car.ratePerKm}
                  </span>

                  <img
                    src={car.img}
                    alt={car.name}
                    className="max-h-40 max-w-full object-contain group-hover:scale-110 transition duration-500"
                  />
                </div>

                {/* Car Details */}
                <div className="p-6">
                  <div className="mb-3">
                    <h3 className="text-xl font-bold text-slate-900 leading-snug">
                      {car.name}
                    </h3>
                    <p className="text-xs text-blue-600 font-semibold mt-0.5">
                      {car.tag}
                    </p>
                  </div>

                  {/* Specs Grid */}
                  <div className="grid grid-cols-2 gap-2.5 py-3 border-y border-slate-200/60 text-xs text-slate-600 mb-4">
                    <div className="flex items-center gap-2">
                      <Users size={15} className="text-blue-600 shrink-0" />
                      <span>{car.seats}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Briefcase size={15} className="text-blue-600 shrink-0" />
                      <span>{car.luggage}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Wind size={15} className="text-blue-600 shrink-0" />
                      <span>{car.ac}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ShieldCheck size={15} className="text-emerald-600 shrink-0" />
                      <span>Fastag & GPS</span>
                    </div>
                  </div>

                  {/* Pricing Estimates */}
                  <div className="bg-white rounded-2xl p-3.5 border border-slate-200/70 mb-4 space-y-1.5 text-xs">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-500">Kempegowda Airport:</span>
                      <span className="font-bold text-slate-900">{car.airportDrop} (approx)</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-500">8h/80km Local Rental:</span>
                      <span className="font-bold text-slate-900">{car.hourlyRental}</span>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-1.5">
                    {car.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                        <Check size={13} className="text-emerald-500 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => handleSelectCar(car.id)}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-sm transition active:scale-95 cursor-pointer"
                >
                  <span>Select & Book {car.name.split(" ")[car.name.split(" ").length - 1]}</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}