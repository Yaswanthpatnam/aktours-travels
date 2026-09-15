import { useState, useEffect } from "react";
import { Phone, MessageCircle, Menu, X, ShieldCheck, MapPin } from "lucide-react";
import { COMPANY_DETAILS } from "../data/bookingData";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "glass-nav shadow-md py-2.5" : "bg-white/95 backdrop-blur-md py-3.5 border-b border-slate-100"}`}>
      {/* Top micro-bar for Bengaluru trust signals */}
      <div className="hidden lg:block bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-slate-200 text-xs py-1.5 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 font-medium text-amber-400">
              <MapPin size={13} />
              ನಮ್ಮ ಬೆಂಗಳೂರು • Namma Bengaluru
            </span>
            <span className="text-slate-400">|</span>
            <span className="flex items-center gap-1 text-slate-300">
              <ShieldCheck size={13} className="text-emerald-400" />
              Kempegowda Airport (BLR) & Karnataka Outstation Specialists
            </span>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-emerald-400 font-medium">● 24/7 Live Dispatch Active</span>
            <a href={`tel:${COMPANY_DETAILS.phonePrimaryRaw}`} className="hover:text-amber-400 transition">
              Emergency Desk: {COMPANY_DETAILS.phonePrimary}
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & Name */}
          <div 
            onClick={() => scrollTo("home")}
            className="flex items-center gap-3 cursor-pointer group select-none"
          >
            <div className="relative p-1 bg-white rounded-xl shadow-sm border border-slate-200/80 group-hover:scale-105 transition">
              <img
                src="/ak.png"
                alt="AK Tours & Travels Bengaluru"
                className="w-10 h-10 sm:w-11 sm:h-11 object-contain"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 group-hover:text-blue-600 transition">
                  AK TOURS
                </span>
                <span className="bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">
                  TRAVELS
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium tracking-wide flex items-center gap-1">
                <span>Bengaluru, Karnataka</span>
                <span className="text-blue-500 font-bold">•</span>
                <span className="text-amber-600 font-semibold">★ 4.9</span>
              </p>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 text-sm font-medium text-slate-600">
            <button
              onClick={() => scrollTo("home")}
              className="px-3 py-2 rounded-lg hover:text-blue-600 hover:bg-blue-50/70 transition"
            >
              Home
            </button>
            <button
              onClick={() => scrollTo("booking")}
              className="px-3 py-2 rounded-lg hover:text-blue-600 hover:bg-blue-50/70 transition"
            >
              Book Cab
            </button>
            <button
              onClick={() => scrollTo("services")}
              className="px-3 py-2 rounded-lg hover:text-blue-600 hover:bg-blue-50/70 transition"
            >
              Services
            </button>
            <button
              onClick={() => scrollTo("fleet")}
              className="px-3 py-2 rounded-lg hover:text-blue-600 hover:bg-blue-50/70 transition"
            >
              Our Fleet
            </button>
            <button
              onClick={() => scrollTo("packages")}
              className="px-3 py-2 rounded-lg hover:text-blue-600 hover:bg-blue-50/70 transition"
            >
              Karnataka Tours
            </button>
            <button
              onClick={() => scrollTo("why-us")}
              className="px-3 py-2 rounded-lg hover:text-blue-600 hover:bg-blue-50/70 transition"
            >
              Why Us
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="px-3 py-2 rounded-lg hover:text-blue-600 hover:bg-blue-50/70 transition"
            >
              Contact
            </button>
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${COMPANY_DETAILS.phonePrimaryRaw}`}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-slate-700 bg-slate-100 hover:bg-slate-200 text-sm font-semibold transition"
            >
              <Phone size={15} className="text-blue-600" />
              <span>Call Us</span>
            </a>
            
            <a
              href={`https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=${encodeURIComponent("Hello AK Tours, I'd like to book a cab in Bengaluru.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-sm font-semibold shadow-sm hover:shadow transition"
            >
              <MessageCircle size={16} />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={() => scrollTo("booking")}
              className="px-4 py-2 rounded-xl text-white bg-blue-600 hover:bg-blue-700 text-sm font-semibold shadow-sm hover:shadow transition"
            >
              Quick Fare
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={`tel:${COMPANY_DETAILS.phonePrimaryRaw}`}
              className="p-2 rounded-lg bg-blue-50 text-blue-600 text-sm"
              aria-label="Call AK Tours"
            >
              <Phone size={18} />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition"
              aria-label="Open menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-2 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="py-2 px-3 bg-blue-50 rounded-xl mb-3 flex items-center justify-between text-xs text-blue-900 font-medium">
            <span>ನಮ್ಮ ಬೆಂಗಳೂರು • 24/7 Cab Service</span>
            <span className="text-emerald-600 font-bold">● Available</span>
          </div>

          <button
            onClick={() => scrollTo("home")}
            className="w-full text-left px-3 py-2.5 rounded-lg text-slate-700 font-medium hover:bg-slate-100"
          >
            Home
          </button>
          <button
            onClick={() => scrollTo("booking")}
            className="w-full text-left px-3 py-2.5 rounded-lg text-slate-700 font-medium hover:bg-slate-100"
          >
            Book a Ride / Fare Calculator
          </button>
          <button
            onClick={() => scrollTo("services")}
            className="w-full text-left px-3 py-2.5 rounded-lg text-slate-700 font-medium hover:bg-slate-100"
          >
            Services (Airport, Outstation, Local)
          </button>
          <button
            onClick={() => scrollTo("fleet")}
            className="w-full text-left px-3 py-2.5 rounded-lg text-slate-700 font-medium hover:bg-slate-100"
          >
            Our Fleet (Dzire, Innova, Crysta, Tempo)
          </button>
          <button
            onClick={() => scrollTo("packages")}
            className="w-full text-left px-3 py-2.5 rounded-lg text-slate-700 font-medium hover:bg-slate-100"
          >
            Karnataka Tour Packages
          </button>
          <button
            onClick={() => scrollTo("why-us")}
            className="w-full text-left px-3 py-2.5 rounded-lg text-slate-700 font-medium hover:bg-slate-100"
          >
            Why Choose AK Tours
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="w-full text-left px-3 py-2.5 rounded-lg text-slate-700 font-medium hover:bg-slate-100"
          >
            Contact & Address
          </button>

          <div className="pt-3 flex flex-col gap-2">
            <a
              href={`tel:${COMPANY_DETAILS.phonePrimaryRaw}`}
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-slate-900 text-white font-medium text-sm"
            >
              <Phone size={16} />
              <span>Call +91 96116 71318</span>
            </a>
            <a
              href={`https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=${encodeURIComponent("Hello AK Tours, I'd like to book a cab in Bengaluru.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-emerald-600 text-white font-medium text-sm"
            >
              <MessageCircle size={16} />
              <span>WhatsApp Direct Booking</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}