import { useState } from "react";

export default function Booking() {
  const [service, setService] = useState("");
  const [car, setCar] = useState("");
  const [phone, setPhone] = useState("");

  const handleBooking = () => {
    if (!service || !car || !phone) {
      alert("Please fill all fields.");
      return;
    }

    const msg = `🚖 AK Travels Booking Request

Customer Mobile: ${phone}

Service Required: ${service}
Vehicle Required: ${car}

Please contact me regarding pricing and availability.`;

    window.open(
      `https://wa.me/919611671318?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
  };

  return (
    <div id="booking" className="section flex flex-col items-center">
      <h2 className="section-title">Quick Booking</h2>

      <p className="section-text">
        Select your service and vehicle, then proceed to book instantly via
        WhatsApp.
      </p>

      <div className="bg-muted p-8 rounded-xl w-full max-w-lg text-center mt-6">
        <select
          value={service}
          onChange={(e) => setService(e.target.value)}
          className="w-full p-4 border rounded-xl mt-3 hover:border-blue-500"
        >
          <option value="">Select Service</option>
          <option>Local</option>
          <option>Airport</option>
          <option>Outstation</option>
        </select>

        <select
          value={car}
          onChange={(e) => setCar(e.target.value)}
          className="w-full p-4 border rounded-xl mt-4 hover:border-blue-500"
        >
          <option value="">Select Vehicle</option>
          <option>Swift Dzire</option>
          <option>Etios</option>
          <option>Innova</option>
          <option>Innova Crysta</option>
          <option>Tempo Traveller</option>
        </select>

        <input
          type="tel"
          placeholder="Enter Mobile Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full p-4 border rounded-xl mt-4 hover:border-blue-500"
        />

        <button
          onClick={handleBooking}
          className="bg-brand text-white px-6 py-3 rounded-lg mt-4
          transition transform hover:scale-105 active:scale-95
          focus:ring-2 focus:ring-blue-400"
        >
          Book Now
        </button>
      </div>
    </div>
  );
}