import { 
  DollarSign, 
  Plane, 
  ShieldCheck, 
  Sparkles, 
  Building2, 
  CheckCircle2
} from "lucide-react";
import { WHY_CHOOSE_US, COMPANY_DETAILS } from "../data/bookingData";

export default function WhyUs() {
  const iconMap = {
    DollarSign,
    Plane,
    ShieldCheck,
    Sparkles,
    Building2,
    CheckCircle2,
  };

  return (
    <section id="why-us" className="py-16 sm:py-20 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-blue-600 font-bold text-xs sm:text-sm uppercase tracking-wider bg-blue-50 px-3.5 py-1.5 rounded-full">
            The AK Tours Difference
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why Bengaluru Chooses AK Tours & Travels
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            In a city of unpredictable surges and cancelled rides, we deliver punctual, dependable, and honest cab service backed by over a decade of local experience.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((item, index) => {
            const Icon = iconMap[item.icon] || ShieldCheck;
            return (
              <div
                key={index}
                className="p-7 rounded-3xl bg-slate-50/70 border border-slate-200/80 hover:border-blue-300 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-blue-600/10 text-blue-600 flex items-center justify-center mb-5 group-hover:bg-blue-600 group-hover:text-white transition duration-300">
                  <Icon size={24} />
                </div>

                <div className="text-xs text-blue-600 font-bold uppercase tracking-wide mb-1">
                  {item.kannadaTitle}
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Highlight Stats Strip */}
        <div className="mt-16 rounded-3xl bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white p-8 sm:p-10 shadow-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-slate-800">
            <div className="pt-4 md:pt-0">
              <div className="text-3xl sm:text-4xl font-black text-amber-400">
                {COMPANY_DETAILS.totalTrips}
              </div>
              <div className="text-xs sm:text-sm text-slate-300 mt-1 font-medium">
                Trips Completed in Karnataka
              </div>
            </div>

            <div className="pt-4 md:pt-0 md:px-4">
              <div className="text-3xl sm:text-4xl font-black text-white">
                {COMPANY_DETAILS.rating} ★
              </div>
              <div className="text-xs sm:text-sm text-slate-300 mt-1 font-medium">
                Customer Rating (Google Reviews)
              </div>
            </div>

            <div className="pt-4 md:pt-0 md:px-4">
              <div className="text-3xl sm:text-4xl font-black text-emerald-400">
                100%
              </div>
              <div className="text-xs sm:text-sm text-slate-300 mt-1 font-medium">
                Transparent Billing (No Hidden Fees)
              </div>
            </div>

            <div className="pt-4 md:pt-0 md:px-4">
              <div className="text-3xl sm:text-4xl font-black text-blue-400">
                24/7
              </div>
              <div className="text-xs sm:text-sm text-slate-300 mt-1 font-medium">
                Support & Airport Chauffeurs
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
