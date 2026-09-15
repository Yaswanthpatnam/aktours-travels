import { Phone, MessageCircle, ArrowUp, Calendar } from "lucide-react";
import { useState, useEffect } from "react";
import { COMPANY_DETAILS } from "../data/bookingData";

export default function FloatingButtons() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  const whatsappMessage = encodeURIComponent(
    "Hello AK Tours & Travels, I would like to book a cab in Bengaluru. Please share availability."
  );

  return (
    <>
      {/* Desktop Floating Actions (Right Side) */}
      <div className="hidden sm:flex fixed bottom-6 right-6 flex-col items-end gap-3 z-50">
        
        {/* Back to top button */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="w-10 h-10 rounded-full bg-white text-slate-700 shadow-md border border-slate-200 flex items-center justify-center hover:bg-slate-100 active:scale-90 transition cursor-pointer"
          >
            <ArrowUp size={18} />
          </button>
        )}

        {/* WhatsApp Floating Pill */}
        <a
          href={`https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-xl hover:shadow-emerald-600/30 font-bold text-sm group transition-all duration-300 active:scale-95"
        >
          <div className="relative">
            <MessageCircle size={22} className="fill-white" />
            <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
            </span>
          </div>
          <span className="pr-1">WhatsApp Book</span>
        </a>

        {/* Phone Call Floating Button */}
        <a
          href={`tel:${COMPANY_DETAILS.phonePrimaryRaw}`}
          className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-xl hover:shadow-blue-600/30 font-bold text-sm transition-all duration-300 active:scale-95"
        >
          <Phone size={20} className="fill-white" />
          <span className="pr-1">24/7 Helpline</span>
        </a>

      </div>

      {/* Mobile Sticky Bottom Conversion Bar */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-t border-slate-200/90 py-2 px-3 shadow-[0_-8px_20px_rgba(0,0,0,0.1)]">
        <div className="grid grid-cols-3 gap-2">
          
          {/* Direct Call */}
          <a
            href={`tel:${COMPANY_DETAILS.phonePrimaryRaw}`}
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-slate-900 text-white text-center active:scale-95 transition"
          >
            <Phone size={18} className="text-emerald-400" />
            <span className="text-[11px] font-bold mt-0.5">Call Desk</span>
          </a>

          {/* WhatsApp Direct */}
          <a
            href={`https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-600 text-white text-center shadow-sm active:scale-95 transition"
          >
            <MessageCircle size={18} />
            <span className="text-[11px] font-bold mt-0.5">WhatsApp</span>
          </a>

          {/* Quick Fare / Book */}
          <button
            onClick={scrollToBooking}
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-blue-600 text-white text-center shadow-sm active:scale-95 transition cursor-pointer"
          >
            <Calendar size={18} />
            <span className="text-[11px] font-bold mt-0.5">Book Cab</span>
          </button>

        </div>
      </div>
    </>
  );
}