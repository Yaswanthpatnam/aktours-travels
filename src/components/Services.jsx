import { 
  Plane, 
  MapPin, 
  Clock, 
  Building2, 
  ArrowRight, 
  Check
} from "lucide-react";

export default function Services({ onSelectService }) {
  const servicesList = [
    {
      id: "airport",
      icon: Plane,
      title: "BLR Kempegowda Airport Taxi",
      kannadaTitle: "ವಿಮಾನ ನಿಲ್ದಾಣ ಟ್ಯಾಕ್ಸಿ ಸೇವೆ",
      badge: "24/7 Available",
      price: "From ₹1,199",
      img: "/devanahalli.png",
      description: "Dedicated airport pickup & drop covering T1 & T2 terminals from any corner of Bengaluru. Punctual 3 AM or midnight pickups with flight tracking.",
      points: [
        "Flight delay & schedule monitoring",
        "Doorstep pickup & luggage support",
        "Dedicated terminal parking assistance",
        "Zero hidden waiting charges",
      ],
    },
    {
      id: "outstation",
      icon: MapPin,
      title: "Karnataka Outstation Cabs",
      kannadaTitle: "ಹೊರಗಿನ ಪ್ರವಾಸ ಸೇವೆಗಳು",
      badge: "Ghats & Highway Specialists",
      price: "From ₹12/km",
      img: "/kanyakumari.png",
      description: "Comfortable round trips & one-way rentals to Mysore, Coorg, Chikmagalur, Ooty, Wayanad, and Tirupati with experienced highway drivers.",
      points: [
        "Clean, spacious cars with roof luggage carriers",
        "Chauffeurs well-versed in ghats & scenic routes",
        "Transparent ₹/km and driver bata billing",
        "Multiple stopovers at authentic food joints",
      ],
    },
    {
      id: "city",
      icon: Clock,
      title: "City Hourly Rental (Disposal)",
      kannadaTitle: "ಬೆಂಗಳೂರು ಸಿಟಿ ಬಾಡಿಗೆ",
      badge: "4h / 8h / 12h Packages",
      price: "From ₹1,200",
      img: "/mysore.png",
      description: "Rent a car with chauffeur for multiple meetings across Indiranagar, Whitefield, and Koramangala, or a relaxed family shopping day.",
      points: [
        "Unlimited stopovers within city limits",
        "Chauffeur waits patiently while you shop or meet",
        "AC stays running for your comfort",
        "Ideal for hospital visits & family weddings",
      ],
    },
    {
      id: "corporate",
      icon: Building2,
      title: "Corporate & Tech Park Fleet",
      kannadaTitle: "ಕಾರ್ಪೊರೇಟ್ ಪ್ರಯಾಣ ಸೇವೆ",
      badge: "GST Invoices Provided",
      price: "Custom Contract",
      img: "/desktop.png",
      description: "Premium employee transport and VIP executive travel for tech corridors in Electronic City, Outer Ring Road, and Manyata.",
      points: [
        "Uniformed, English-fluent executive chauffeurs",
        "Innova Crysta & luxury sedan options",
        "Official GST tax invoice for travel reimbursement",
        "Dedicated corporate relationship manager",
      ],
    },
  ];

  const handleBookService = (serviceId) => {
    if (onSelectService) {
      onSelectService(serviceId);
    } else {
      document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-16 sm:py-20 bg-slate-50/70 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-blue-600 font-bold text-xs sm:text-sm uppercase tracking-wider bg-blue-100/70 px-3.5 py-1.5 rounded-full">
            Tailored For Bengaluru
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our Premium Cab & Rental Services
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            From early morning Kempegowda Airport runs to memorable family vacations across Karnataka, we offer reliable transportation tailored to your exact journey.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesList.map((srv) => {
            const Icon = srv.icon;
            return (
              <div
                key={srv.id}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Image banner */}
                  <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-900">
                    <img
                      src={srv.img}
                      alt={srv.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500 opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                    
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-blue-600/90 backdrop-blur-md text-white text-xs font-bold shadow-sm">
                        {srv.badge}
                      </span>
                    </div>

                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-slate-900 font-extrabold text-xs">
                      {srv.price}
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-white/20 backdrop-blur-md text-white border border-white/20">
                        <Icon size={20} />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-white leading-tight">
                          {srv.title}
                        </h3>
                        <p className="text-xs text-amber-300 font-medium">
                          {srv.kannadaTitle}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Content body */}
                  <div className="p-6">
                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                      {srv.description}
                    </p>

                    <div className="space-y-2 border-t border-slate-100 pt-4">
                      {srv.points.map((pt, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                          <Check size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer CTA */}
                <div className="px-6 pb-6 pt-2">
                  <button
                    onClick={() => handleBookService(srv.id)}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-semibold text-sm transition group/btn cursor-pointer"
                  >
                    <span>Book {srv.title.split(" ")[0]} Ride</span>
                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}