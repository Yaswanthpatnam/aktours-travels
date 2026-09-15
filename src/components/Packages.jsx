import { MapPin, Clock, ArrowRight, Sparkles, Check } from "lucide-react";
import { TOUR_PACKAGES, COMPANY_DETAILS } from "../data/bookingData";

export default function Packages() {
  const handleBookPackage = (pkg) => {
    const msg = `🚖 *AK TOURS & TRAVELS BENGALURU*
*Tour Package Inquiry*
──────────────────────
📌 *Package:* ${pkg.title}
⏳ *Duration:* ${pkg.duration}
🛣️ *Route Details:* ${pkg.distance}
💰 *Starting Price:* ${pkg.price}

Hello AK Tours, I would like to check availability and book this tour package starting from Bengaluru.`;

    const url = `https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="packages" className="py-16 sm:py-20 bg-slate-100/60 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles size={14} className="text-amber-600" />
            <span>ಕರ್ನಾಟಕ ಪ್ರವಾಸ ಪ್ಯಾಕೇಜ್‌ಗಳು • Karnataka Getaways</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Curated Weekend & Holiday Road Trips
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Hassle-free outstation road trips departing right from your doorstep in Bengaluru. Seasoned highway drivers, well-planned itineraries, and comfortable AC vehicles.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TOUR_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Visual Banner */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-900">
                  <img
                    src={pkg.img}
                    alt={pkg.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-amber-500 text-slate-950 text-xs font-extrabold shadow-sm">
                    {pkg.tag}
                  </span>

                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-xs text-amber-300 font-bold uppercase tracking-wider block">
                      Starting from
                    </span>
                    <span className="text-2xl font-black text-white">
                      {pkg.price}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 leading-snug mb-1">
                    {pkg.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium mb-4">
                    {pkg.subtitle}
                  </p>

                  <div className="flex items-center gap-4 text-xs font-semibold text-slate-600 py-3 border-y border-slate-100 mb-4">
                    <div className="flex items-center gap-1.5">
                      <Clock size={14} className="text-blue-600" />
                      <span>{pkg.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin size={14} className="text-emerald-600" />
                      <span className="truncate">{pkg.distance}</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-1.5">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                      Key Highlights:
                    </span>
                    {pkg.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                        <Check size={13} className="text-emerald-500 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action button */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => handleBookPackage(pkg)}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-900 hover:bg-emerald-700 text-white font-semibold text-sm transition cursor-pointer"
                >
                  <span>Book This Package on WhatsApp</span>
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
