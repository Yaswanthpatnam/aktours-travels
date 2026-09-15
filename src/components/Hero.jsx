import { 
  ShieldCheck, 
  Star, 
  Phone, 
  Plane, 
  ArrowRight, 
  CheckCircle2
} from "lucide-react";
import { COMPANY_DETAILS } from "../data/bookingData";

export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative pt-6 pb-16 md:pt-10 md:pb-20 overflow-hidden bg-gradient-to-b from-white via-slate-50/50 to-slate-100">
      {/* Background ambient gradient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-gradient-to-br from-blue-100/40 via-indigo-100/20 to-transparent blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Value Proposition & Copy (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Tag / Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs sm:text-sm font-semibold shadow-xs">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>ನಮ್ಮ ಬೆಂಗಳೂರು • Namma Bengaluru's Trusted Cab Partner</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15]">
              Seamless Cab Travel Across{" "}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 bg-clip-text text-transparent">
                Bengaluru & Karnataka
              </span>
            </h1>

            {/* Sub-copy */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Punctual Kempegowda Airport (BLR) taxis, full-day corporate rentals, and outstation trips to Mysore, Coorg, and Ooty. Experienced local Kannada & English-speaking chauffeurs with zero surge pricing.
            </p>

            {/* Trust Badges Pill Bar */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-1">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200/80 shadow-xs text-xs font-semibold text-slate-700">
                <Star size={14} className="text-amber-500 fill-amber-500" />
                <span>4.9/5 Rating (Google Reviews)</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200/80 shadow-xs text-xs font-semibold text-slate-700">
                <CheckCircle2 size={14} className="text-emerald-500" />
                <span>50,000+ Trips in Bengaluru</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200/80 shadow-xs text-xs font-semibold text-slate-700">
                <ShieldCheck size={14} className="text-blue-600" />
                <span>Zero Surge Pricing</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => scrollTo("booking")}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-base shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 active:scale-95 transition cursor-pointer"
              >
                <span>Book Instant Cab</span>
                <ArrowRight size={18} />
              </button>

              <button
                onClick={() => scrollTo("packages")}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-base border border-slate-200 shadow-xs hover:shadow transition"
              >
                <span>Explore Tour Packages</span>
              </button>

              <a
                href={`tel:${COMPANY_DETAILS.phonePrimaryRaw}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-blue-600 transition px-2 py-1"
              >
                <Phone size={15} className="text-emerald-600" />
                <span>{COMPANY_DETAILS.phonePrimary}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Card with backdrop */}
              <div className="relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl group">
                <img
                  src="/desktop.png"
                  alt="AK Tours Fleet Bengaluru"
                  className="w-full h-72 sm:h-80 lg:h-96 object-cover opacity-85 group-hover:scale-105 transition duration-700"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />

                {/* Floating Airport Guarantee Badge */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl py-2 px-3.5 shadow-lg border border-white/40 flex items-center gap-2 text-xs font-bold text-slate-900">
                  <div className="p-1.5 rounded-lg bg-blue-600 text-white">
                    <Plane size={14} />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-wider">Kempegowda BLR</div>
                    <div className="text-blue-700 font-extrabold">Airport Express Cab</div>
                  </div>
                </div>

                {/* Bottom Card Content */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl text-white">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h3 className="font-extrabold text-base sm:text-lg text-white">
                        Toyota Innova Crysta & Dzire Fleet
                      </h3>
                      <p className="text-xs text-slate-300">
                        Sanitized • AC • GPS Tracked • Verified Chauffeurs
                      </p>
                    </div>
                    <span className="px-2.5 py-1 rounded-lg bg-emerald-500 text-white text-xs font-extrabold shadow-sm">
                      ₹12/km
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-xs pt-2 border-t border-white/10 text-slate-300">
                    <span>Doorstep Pickup Anywhere in Bengaluru</span>
                    <button
                      onClick={() => scrollTo("fleet")}
                      className="text-amber-400 font-bold hover:underline flex items-center gap-1"
                    >
                      View All 5 Cars <ArrowRight size={12} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Floating Stat Widget */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-white rounded-2xl p-3.5 shadow-xl border border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 font-black text-lg">
                  ✓
                </div>
                <div className="text-left">
                  <div className="text-xs text-slate-500 font-medium">Early Morning BLR Flight?</div>
                  <div className="text-xs font-bold text-slate-900">100% On-Time Guarantee</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}