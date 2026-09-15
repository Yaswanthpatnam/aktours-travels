import { useState } from "react";
import {
  Plane,
  Clock,
  Compass,
  Building2,
  Calendar,
  MapPin,
  Phone,
  MessageCircle,
  ShieldCheck,
  Check,
  Sparkles
} from "lucide-react";
import { FLEET, BENGALURU_LOCATIONS, COMPANY_DETAILS } from "../data/bookingData";

export default function Booking({ selectedVehicle, setSelectedVehicle }) {
  const [tripType, setTripType] = useState("airport"); // 'airport' | 'city' | 'outstation' | 'corporate'
  
  // Locations & details
  const [pickupLocation, setPickupLocation] = useState("Indiranagar");
  const [dropLocation, setDropLocation] = useState("Kempegowda Int'l Airport (BLR)");
  const [pickupDate, setPickupDate] = useState(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split("T")[0];
  });
  const [pickupTime, setPickupTime] = useState("06:00");
  const [cityPackage, setCityPackage] = useState("8h80k"); // '4h40k' | '8h80k' | '12h120k'
  const [outstationDays, setOutstationDays] = useState(2);
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [flightNumber, setFlightNumber] = useState("");

  // Adjust default locations when trip type changes
  const handleTripTypeChange = (type) => {
    setTripType(type);
    if (type === "airport") {
      setPickupLocation("Indiranagar");
      setDropLocation("Kempegowda Int'l Airport (BLR)");
    } else if (type === "city") {
      setPickupLocation("Koramangala");
      setDropLocation("Bangalore City Disposal (Multiple Stops)");
    } else if (type === "outstation") {
      setPickupLocation("Bengaluru (Doorstep)");
      setDropLocation("Mysore Palace & Chamundi Hills");
    } else if (type === "corporate") {
      setPickupLocation("Electronic City Phase 1");
      setDropLocation("Whitefield Tech Park");
    }
  };

  const currentCar = FLEET.find((c) => c.id === selectedVehicle) || FLEET[0];

  // Dynamic Fare Calculation Engine
  const calculateEstimatedFare = () => {
    let base;
    let details;

    if (tripType === "airport") {
      if (currentCar.id === "swift-dzire") base = 1199;
      else if (currentCar.id === "toyota-etios") base = 1249;
      else if (currentCar.id === "toyota-innova") base = 1899;
      else if (currentCar.id === "innova-crysta") base = 2299;
      else base = 3499;
      details = "Includes door-to-terminal pickup/drop, fuel & chauffeur. (Toll extra as actuals)";
    } else if (tripType === "city") {
      if (cityPackage === "4h40k") {
        base = Math.round(currentCar.baseFare * 0.75);
        details = `Includes 4 Hours & 40 Kilometers. Extra km @ ${currentCar.ratePerKm}`;
      } else if (cityPackage === "8h80k") {
        base = currentCar.baseFare + 400;
        details = `Standard Full Day: 8 Hours & 80 Kilometers. Extra km @ ${currentCar.ratePerKm}`;
      } else {
        base = currentCar.baseFare + 900;
        details = `Extended Day: 12 Hours & 120 Kilometers. Extra km @ ${currentCar.ratePerKm}`;
      }
    } else if (tripType === "outstation") {
      const minKmPerDay = 250;
      const totalKm = outstationDays * minKmPerDay;
      const driverBataPerDay = 400;
      base = totalKm * currentCar.rateNumber + outstationDays * driverBataPerDay;
      details = `${outstationDays} Days (~${totalKm} km included) + Driver Bata included. Inter-state permit/toll extra.`;
    } else {
      base = currentCar.baseFare + 500;
      details = "Corporate executive rate with verified chauffeur & GST invoice support.";
    }

    return { amount: base, details };
  };

  const fareInfo = calculateEstimatedFare();

  const handleWhatsAppBooking = (e) => {
    e.preventDefault();

    if (!customerPhone || customerPhone.length < 10) {
      alert("Please enter a valid 10-digit mobile number so our team can confirm your ride.");
      return;
    }

    const typeLabels = {
      airport: "✈️ BLR Kempegowda Airport Transfer",
      city: `🚖 City Hourly Rental (${cityPackage.toUpperCase()})`,
      outstation: `🌄 Karnataka Outstation (${outstationDays} Days)`,
      corporate: "🏢 Corporate & Tech Park Transfer",
    };

    const msg = `🚖 *AK TOURS & TRAVELS BENGALURU*
*New Ride Booking Request*
──────────────────────
👤 *Customer Name:* ${customerName.trim() || "Guest"}
📱 *Contact:* ${customerPhone.trim()}
📌 *Trip Category:* ${typeLabels[tripType]}
🚗 *Vehicle Selected:* ${currentCar.name} (${currentCar.category})

🚩 *Pickup Location:* ${pickupLocation}
🏁 *Destination / Drop:* ${dropLocation}
📅 *Date:* ${pickupDate}
⏰ *Time:* ${pickupTime}
${flightNumber ? `✈️ *Flight No:* ${flightNumber}\n` : ""}
💵 *Est. Base Fare:* ₹${fareInfo.amount.toLocaleString("en-IN")}
ℹ️ *Plan:* ${fareInfo.details}
──────────────────────
Please confirm driver assignment & booking details. Namma Bengaluru Travel Desk.`;

    const url = `https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="booking" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-20">
      {/* Header text */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
          <Sparkles size={14} className="text-blue-600" />
          <span>Transparent Pricing • Zero Surge • Instant Confirmation</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Book Your Ride in Bengaluru
        </h2>
        <p className="mt-2 text-slate-600 text-sm sm:text-base">
          Airport transfers, full-day city rentals, and Karnataka outstation trips with guaranteed on-time pickup and sanitized vehicles.
        </p>
      </div>

      <div className="bg-white rounded-3xl shadow-xl border border-slate-200/80 overflow-hidden">
        {/* Navigation Tabs for Ride Types */}
        <div className="grid grid-cols-2 md:grid-cols-4 border-b border-slate-200 bg-slate-50/80">
          <button
            type="button"
            onClick={() => handleTripTypeChange("airport")}
            className={`flex items-center justify-center gap-2 py-4 px-3 text-sm font-semibold transition border-b-2 cursor-pointer ${
              tripType === "airport"
                ? "border-blue-600 text-blue-600 bg-white shadow-sm"
                : "border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100/60"
            }`}
          >
            <Plane size={18} className={tripType === "airport" ? "text-blue-600" : "text-slate-400"} />
            <span>Airport Transfer (BLR)</span>
          </button>

          <button
            type="button"
            onClick={() => handleTripTypeChange("city")}
            className={`flex items-center justify-center gap-2 py-4 px-3 text-sm font-semibold transition border-b-2 cursor-pointer ${
              tripType === "city"
                ? "border-blue-600 text-blue-600 bg-white shadow-sm"
                : "border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100/60"
            }`}
          >
            <Clock size={18} className={tripType === "city" ? "text-blue-600" : "text-slate-400"} />
            <span>City Hourly Rental</span>
          </button>

          <button
            type="button"
            onClick={() => handleTripTypeChange("outstation")}
            className={`flex items-center justify-center gap-2 py-4 px-3 text-sm font-semibold transition border-b-2 cursor-pointer ${
              tripType === "outstation"
                ? "border-blue-600 text-blue-600 bg-white shadow-sm"
                : "border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100/60"
            }`}
          >
            <Compass size={18} className={tripType === "outstation" ? "text-blue-600" : "text-slate-400"} />
            <span>Karnataka Outstation</span>
          </button>

          <button
            type="button"
            onClick={() => handleTripTypeChange("corporate")}
            className={`flex items-center justify-center gap-2 py-4 px-3 text-sm font-semibold transition border-b-2 cursor-pointer ${
              tripType === "corporate"
                ? "border-blue-600 text-blue-600 bg-white shadow-sm"
                : "border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-100/60"
            }`}
          >
            <Building2 size={18} className={tripType === "corporate" ? "text-blue-600" : "text-slate-400"} />
            <span>Corporate / Events</span>
          </button>
        </div>

        {/* Booking Form + Live Fare Summary Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          {/* Main Booking Input Fields (7 cols) */}
          <form onSubmit={handleWhatsAppBooking} className="lg:col-span-7 p-6 sm:p-8 space-y-5">
            {/* Context notice badge */}
            <div className="flex items-center gap-2 p-3 rounded-xl bg-blue-50/60 border border-blue-100 text-xs text-blue-900 font-medium">
              <ShieldCheck size={16} className="text-blue-600 shrink-0" />
              <span>
                {tripType === "airport" && "Direct transfers to Kempegowda Airport T1 & T2 with flight status monitoring & zero wait charges."}
                {tripType === "city" && "Keep the cab for multiple meetings, family shopping, or doctor visits anywhere across Bengaluru."}
                {tripType === "outstation" && "Comfortable outstation trips to Mysore, Coorg, Chikmagalur, Ooty & Tirupati with highway veterans."}
                {tripType === "corporate" && "Dedicated tech corridor employee transit, executive client pickups, and monthly corporate accounts."}
              </span>
            </div>

            {/* Vehicle Selection Carousel / Buttons */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                1. Select Vehicle
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
                {FLEET.map((car) => {
                  const isSelected = car.id === selectedVehicle;
                  return (
                    <button
                      type="button"
                      key={car.id}
                      onClick={() => setSelectedVehicle(car.id)}
                      className={`p-2.5 rounded-xl border text-left flex flex-col justify-between transition cursor-pointer ${
                        isSelected
                          ? "border-blue-600 bg-blue-50/70 shadow-sm ring-1 ring-blue-600"
                          : "border-slate-200 hover:border-slate-300 bg-white"
                      }`}
                    >
                      <div className="w-full h-12 flex items-center justify-center mb-1">
                        <img src={car.img} alt={car.name} className="max-h-11 object-contain" />
                      </div>
                      <div>
                        <div className="font-bold text-xs text-slate-900 truncate">
                          {car.name.replace("Maruti Suzuki ", "").replace("Toyota ", "").replace("Force ", "")}
                        </div>
                        <div className="text-[10px] text-blue-600 font-semibold">{car.ratePerKm}</div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Hourly Package Selector if City Rental */}
            {tripType === "city" && (
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Rental Package Duration
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: "4h40k", label: "4 Hrs / 40 Kms", note: "Half-day quick meetings" },
                    { id: "8h80k", label: "8 Hrs / 80 Kms", note: "Full-day standard (Popular)" },
                    { id: "12h120k", label: "12 Hrs / 120 Kms", note: "Extended day / weddings" },
                  ].map((pkg) => (
                    <button
                      type="button"
                      key={pkg.id}
                      onClick={() => setCityPackage(pkg.id)}
                      className={`p-3 rounded-xl border text-left transition cursor-pointer ${
                        cityPackage === pkg.id
                          ? "border-blue-600 bg-blue-50 text-blue-900 font-semibold ring-1 ring-blue-600"
                          : "border-slate-200 hover:border-slate-300 text-slate-700"
                      }`}
                    >
                      <div className="text-xs font-bold">{pkg.label}</div>
                      <div className="text-[10px] text-slate-500 mt-0.5">{pkg.note}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Outstation Days Selector */}
            {tripType === "outstation" && (
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Number of Outstation Days
                </label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((d) => (
                    <button
                      type="button"
                      key={d}
                      onClick={() => setOutstationDays(d)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold border transition cursor-pointer ${
                        outstationDays === d
                          ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                          : "bg-white text-slate-700 border-slate-200 hover:border-slate-300"
                      }`}
                    >
                      {d} {d === 1 ? "Day" : "Days"}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Locations (Pickup & Drop) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Pickup Location in Bengaluru
                </label>
                <div className="relative">
                  <MapPin size={16} className="absolute left-3.5 top-3.5 text-blue-600" />
                  <input
                    type="text"
                    value={pickupLocation}
                    onChange={(e) => setPickupLocation(e.target.value)}
                    placeholder="e.g. Indiranagar, Whitefield, Koramangala..."
                    className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-slate-300 text-sm font-medium focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    list="bangalore-pickups"
                  />
                  <datalist id="bangalore-pickups">
                    {BENGALURU_LOCATIONS.map((loc, i) => (
                      <option key={i} value={loc} />
                    ))}
                  </datalist>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Destination / Drop Location
                </label>
                <div className="relative">
                  <MapPin size={16} className="absolute left-3.5 top-3.5 text-emerald-600" />
                  <input
                    type="text"
                    value={dropLocation}
                    onChange={(e) => setDropLocation(e.target.value)}
                    placeholder="e.g. Airport BLR, Mysore, Coorg..."
                    className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-slate-300 text-sm font-medium focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Date, Time & Optional Flight Number */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Pickup Date
                </label>
                <div className="relative">
                  <Calendar size={16} className="absolute left-3.5 top-3.5 text-slate-400" />
                  <input
                    type="date"
                    value={pickupDate}
                    onChange={(e) => setPickupDate(e.target.value)}
                    className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-slate-300 text-sm font-medium focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Pickup Time
                </label>
                <div className="relative">
                  <Clock size={16} className="absolute left-3.5 top-3.5 text-slate-400" />
                  <input
                    type="time"
                    value={pickupTime}
                    onChange={(e) => setPickupTime(e.target.value)}
                    className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-slate-300 text-sm font-medium focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  {tripType === "airport" ? "Flight Number (Optional)" : "Special Note / Stops"}
                </label>
                <input
                  type="text"
                  value={flightNumber}
                  onChange={(e) => setFlightNumber(e.target.value)}
                  placeholder={tripType === "airport" ? "e.g. 6E-204 / AI-505" : "e.g. Need child seat / roof rack"}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-sm font-medium focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Customer Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-100">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Your Full Name
                </label>
                <input
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="e.g. Rajesh Kumar"
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-300 text-sm font-medium focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Mobile Number (For WhatsApp / Call) <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <Phone size={16} className="absolute left-3.5 top-3.5 text-slate-400" />
                  <input
                    type="tel"
                    required
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    placeholder="10-digit mobile number"
                    className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-slate-300 text-sm font-medium focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Submit Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                type="submit"
                className="flex-1 flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-base shadow-lg hover:shadow-emerald-500/20 active:scale-[0.99] transition cursor-pointer"
              >
                <MessageCircle size={20} />
                <span>Confirm & Book on WhatsApp</span>
              </button>

              <a
                href={`tel:${COMPANY_DETAILS.phonePrimaryRaw}`}
                className="flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-base shadow-md active:scale-[0.99] transition text-center"
              >
                <Phone size={18} />
                <span>Direct Call</span>
              </a>
            </div>
          </form>

          {/* Fare Summary & Vehicle Snapshot Card (5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white p-6 sm:p-8 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-slate-800">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-5">
                <div>
                  <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">Estimated Fare</span>
                  <div className="text-3xl sm:text-4xl font-black text-white mt-1">
                    ₹{fareInfo.amount.toLocaleString("en-IN")}
                    <span className="text-xs font-normal text-slate-400 ml-1.5">approx base</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="inline-flex items-center gap-1 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[11px] font-semibold px-2.5 py-1 rounded-full">
                    <Check size={12} /> Zero Surge
                  </span>
                </div>
              </div>

              {/* Selected Vehicle Card */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10 mb-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-16 h-12 bg-white/10 rounded-xl flex items-center justify-center p-1">
                    <img src={currentCar.img} alt={currentCar.name} className="max-h-10 object-contain" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">{currentCar.name}</h4>
                    <p className="text-xs text-blue-300">{currentCar.category} • {currentCar.seats}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs text-slate-300 border-t border-white/10 pt-3">
                  <div>
                    <span className="text-slate-400 block text-[10px]">Luggage:</span>
                    <span className="font-medium text-slate-200">{currentCar.luggage}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">Extra Km Rate:</span>
                    <span className="font-semibold text-amber-300">{currentCar.ratePerKm}</span>
                  </div>
                </div>
              </div>

              {/* Price Breakdown Details */}
              <div className="space-y-2.5 text-xs text-slate-300 mb-6">
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-slate-400">Trip Plan</span>
                  <span className="font-medium text-white capitalize">{tripType} Service</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-slate-400">Included Distance</span>
                  <span className="font-medium text-white">
                    {tripType === "airport" ? "Door-to-Door Single Trip" : tripType === "city" ? cityPackage.toUpperCase() : `${outstationDays * 250} Kms included`}
                  </span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-slate-400">Fuel & Chauffeur</span>
                  <span className="font-medium text-emerald-400">Included 100%</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-slate-400">Night Allowance</span>
                  <span className="font-medium text-slate-300">Nil / Included</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-400">Toll / Parking / Permits</span>
                  <span className="font-medium text-amber-300">Actuals as applicable</span>
                </div>
              </div>
            </div>

            {/* Bengaluru Trust Footnote */}
            <div className="p-3.5 rounded-xl bg-blue-900/30 border border-blue-500/20 text-[11px] text-blue-200/90 leading-relaxed">
              <div className="flex items-center gap-1.5 font-bold text-white mb-1">
                <ShieldCheck size={14} className="text-emerald-400" />
                <span>Namma Bengaluru Assured Service</span>
              </div>
              On-time arrival guarantee across Electronic City, Whitefield, Indiranagar, Koramangala, and Hebbal. Polite Kannada & English speaking drivers.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}