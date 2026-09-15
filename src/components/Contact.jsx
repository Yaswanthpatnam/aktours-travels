import { useState } from "react";
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Mail, 
  Clock, 
  Send, 
  ShieldCheck, 
  ExternalLink 
} from "lucide-react";
import { COMPANY_DETAILS, SERVICE_AREAS } from "../data/bookingData";

export default function Contact() {
  const [formName, setFormName] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [formMessage, setFormMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formPhone) return;

    const text = `🚖 *AK TOURS BENGALURU CONTACT INQUIRY*
──────────────────────
👤 *Name:* ${formName || "Customer"}
📱 *Phone:* ${formPhone}
💬 *Message:* ${formMessage || "General Inquiry about Cab Services in Bengaluru"}
──────────────────────`;

    const url = `https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-slate-900 text-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-blue-400 font-bold text-xs sm:text-sm uppercase tracking-wider bg-blue-900/50 border border-blue-700/50 px-3.5 py-1.5 rounded-full">
            24/7 Bengaluru Travel Support
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Get in Touch With Our Dispatch Team
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            Need an urgent airport cab, a custom outstation package quote, or corporate billing assistance? We are available round the clock.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column: Contact Cards & Office Details (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Phone & WhatsApp Quick Actions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href={`tel:${COMPANY_DETAILS.phonePrimaryRaw}`}
                className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500 hover:bg-white/10 transition group"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center mb-3 group-hover:bg-blue-600 group-hover:text-white transition">
                  <Phone size={20} />
                </div>
                <div className="text-xs text-slate-400">Primary Booking Helpline</div>
                <div className="text-base font-bold text-white mt-0.5">{COMPANY_DETAILS.phonePrimary}</div>
                <div className="text-[11px] text-emerald-400 font-medium mt-1">● 24x7 Call Support</div>
              </a>

              <a
                href={`tel:${COMPANY_DETAILS.phoneSecondaryRaw}`}
                className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500 hover:bg-white/10 transition group"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center mb-3 group-hover:bg-blue-600 group-hover:text-white transition">
                  <Phone size={20} />
                </div>
                <div className="text-xs text-slate-400">Secondary Booking Line</div>
                <div className="text-base font-bold text-white mt-0.5">{COMPANY_DETAILS.phoneSecondary}</div>
                <div className="text-[11px] text-blue-300 font-medium mt-1">Direct Driver Dispatch</div>
              </a>
            </div>

            {/* WhatsApp Direct Card */}
            <a
              href={`https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=${encodeURIComponent("Hello AK Tours, I'd like to make an inquiry.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-5 rounded-2xl bg-gradient-to-r from-emerald-600/20 to-teal-600/20 border border-emerald-500/40 hover:bg-emerald-600/30 transition group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <div className="font-bold text-white text-base">Instant WhatsApp Confirmation</div>
                  <div className="text-xs text-emerald-300">Fastest response time (Under 2 minutes)</div>
                </div>
              </div>
              <span className="text-xs font-bold text-emerald-400 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                Chat Now →
              </span>
            </a>

            {/* Office Location & Details */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-4 text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-amber-400 shrink-0 mt-1" />
                <div>
                  <div className="font-bold text-white">Registered Bengaluru Office:</div>
                  <p className="text-slate-300 text-xs sm:text-sm mt-0.5 leading-relaxed">
                    {COMPANY_DETAILS.address}
                  </p>
                  <a
                    href="https://maps.google.com/?q=Vivek+Nagar+Bangalore"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-blue-400 hover:text-blue-300 font-medium mt-1.5"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-white/10">
                <Mail size={18} className="text-blue-400 shrink-0" />
                <div>
                  <div className="font-bold text-white text-xs">Official Email:</div>
                  <a href={`mailto:${COMPANY_DETAILS.email}`} className="text-slate-300 hover:text-white transition text-xs">
                    {COMPANY_DETAILS.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-3 border-t border-white/10">
                <Clock size={18} className="text-emerald-400 shrink-0" />
                <div>
                  <div className="font-bold text-white text-xs">Operating Hours:</div>
                  <div className="text-slate-300 text-xs">{COMPANY_DETAILS.operatingHours} (Including Festival Days)</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Quick Contact / Callback Form (6 cols) */}
          <div className="lg:col-span-6 bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">
                <ShieldCheck size={16} />
                <span>Fast Callback Request</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Request a Custom Quote or Route
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Planning a corporate offsite, multi-vehicle wedding conveyance, or customized Karnataka holiday? Leave your details below.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    placeholder="e.g. Anand Murthy"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    Mobile Number <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formPhone}
                    onChange={(e) => setFormPhone(e.target.value)}
                    placeholder="10-digit mobile number"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    Requirement / Travel Details
                  </label>
                  <textarea
                    rows={3}
                    value={formMessage}
                    onChange={(e) => setFormMessage(e.target.value)}
                    placeholder="e.g. Need 2 Innova Crystas for 3 days to Coorg with family..."
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-lg transition active:scale-[0.99] cursor-pointer"
                >
                  <Send size={16} />
                  <span>Send Request to Desk via WhatsApp</span>
                </button>
              </form>

              {submitted && (
                <div className="mt-3 p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs text-center">
                  Thank you! WhatsApp dispatch opened. Our Bengaluru desk will connect with you promptly.
                </div>
              )}
            </div>

            {/* Service Hubs Badges */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                Key Bengaluru Hubs We Serve:
              </div>
              <div className="flex flex-wrap gap-1.5">
                {SERVICE_AREAS.slice(0, 10).map((area, i) => (
                  <span key={i} className="text-[10px] px-2.5 py-1 rounded-lg bg-white/5 text-slate-300 border border-white/10">
                    {area}
                  </span>
                ))}
                <span className="text-[10px] px-2.5 py-1 rounded-lg bg-blue-600/20 text-blue-300 font-semibold border border-blue-500/30">
                  + All Bengaluru
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}