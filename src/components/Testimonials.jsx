import { Star, CheckCircle2 } from "lucide-react";
import { TESTIMONIALS } from "../data/bookingData";

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-20 bg-slate-50/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Star size={13} className="fill-emerald-700 text-emerald-700" />
            <span>Google Verified Reviews • 4.9 Rating</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Loved by Travelers Across Bengaluru
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Here is what regular commuters, tech professionals, and holiday travelers have to say about their experience with AK Tours.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="bg-white p-7 sm:p-8 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-md transition duration-300 flex flex-col justify-between relative group"
            >
              <div>
                {/* Rating Stars */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={16} className="text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full flex items-center gap-1">
                    <CheckCircle2 size={12} /> Verified Traveler
                  </span>
                </div>

                {/* Comment */}
                <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic mb-6">
                  "{t.comment}"
                </p>
              </div>

              {/* Author & Trip Badge */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">
                    {t.name}
                  </h4>
                  <p className="text-xs text-slate-500 font-medium">
                    {t.role}
                  </p>
                </div>
                <span className="text-[11px] text-blue-600 font-semibold bg-blue-50 px-2.5 py-1 rounded-lg">
                  {t.trip.split("&")[0]}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
