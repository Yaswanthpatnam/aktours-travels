import { ShieldCheck } from "lucide-react";
import { COMPANY_DETAILS, SERVICE_AREAS, TOUR_PACKAGES } from "../data/bookingData";

export default function Footer() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-sm pt-16 pb-24 sm:pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Col (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-1 bg-white rounded-xl">
                <img
                  src="/ak.png"
                  alt="AK Tours & Travels Bengaluru"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <div>
                <span className="text-xl font-black text-white tracking-tight">
                  AK TOURS & TRAVELS
                </span>
                <p className="text-xs text-amber-400 font-semibold">
                  {COMPANY_DETAILS.kannadaName}
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Namma Bengaluru's premier car rental and cab booking service. Delivering safe, punctual, and transparent rides across Karnataka and South India with zero surge pricing.
            </p>

            <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300 space-y-1">
              <div className="flex items-center gap-2 text-emerald-400 font-bold">
                <ShieldCheck size={14} />
                <span>Verified Commercial Fleet</span>
              </div>
              <p className="text-[11px] text-slate-400">
                All vehicles yellow-board licensed, insured, and GPS enabled as per Karnataka RTO regulations.
              </p>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => scrollTo("home")} className="hover:text-white transition">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("booking")} className="hover:text-white transition">
                  Book a Cab
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("services")} className="hover:text-white transition">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("fleet")} className="hover:text-white transition">
                  Our Fleet (Cars)
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("packages")} className="hover:text-white transition">
                  Karnataka Tours
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("why-us")} className="hover:text-white transition">
                  Why AK Tours
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo("contact")} className="hover:text-white transition">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Top Outstation Routes (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Popular Routes From Bengaluru
            </h4>
            <ul className="space-y-2 text-xs">
              {TOUR_PACKAGES.map((pkg) => (
                <li key={pkg.id}>
                  <button
                    onClick={() => scrollTo("packages")}
                    className="hover:text-white transition flex items-center justify-between w-full text-left"
                  >
                    <span className="truncate pr-2">{pkg.title}</span>
                    <span className="text-amber-400 shrink-0 font-medium">{pkg.price}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Bengaluru Office
            </h4>
            <p className="text-xs leading-relaxed text-slate-300">
              {COMPANY_DETAILS.address}
            </p>
            <div className="space-y-1.5 pt-2 text-xs">
              <div>
                <span className="text-slate-500 block text-[10px]">Helpline:</span>
                <a href={`tel:${COMPANY_DETAILS.phonePrimaryRaw}`} className="text-white hover:text-blue-400 font-bold">
                  {COMPANY_DETAILS.phonePrimary}
                </a>
              </div>
              <div>
                <span className="text-slate-500 block text-[10px]">Dispatch:</span>
                <a href={`tel:${COMPANY_DETAILS.phoneSecondaryRaw}`} className="text-white hover:text-blue-400 font-bold">
                  {COMPANY_DETAILS.phoneSecondary}
                </a>
              </div>
              <div>
                <span className="text-slate-500 block text-[10px]">Email:</span>
                <a href={`mailto:${COMPANY_DETAILS.email}`} className="text-slate-300 hover:text-white">
                  {COMPANY_DETAILS.email}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bengaluru Neighborhoods Pill Cloud */}
        <div className="py-6 border-b border-slate-800">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
            Coverage Across All Bengaluru Locations:
          </span>
          <div className="flex flex-wrap gap-2 text-[11px] text-slate-400">
            {SERVICE_AREAS.map((loc, i) => (
              <span key={i} className="hover:text-slate-200 transition">
                {loc} {i < SERVICE_AREAS.length - 1 ? "•" : ""}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom copyright & payment strip */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} AK Tours & Travels Bengaluru. All rights reserved.</p>
          <div className="flex items-center gap-2 text-[11px]">
            <span>Accepted Payments:</span>
            <span className="text-slate-300 bg-white/5 px-2 py-0.5 rounded">UPI (GPay / PhonePe)</span>
            <span className="text-slate-300 bg-white/5 px-2 py-0.5 rounded">Net Banking</span>
            <span className="text-slate-300 bg-white/5 px-2 py-0.5 rounded">Corporate GST Billing</span>
          </div>
        </div>

      </div>
    </footer>
  );
}