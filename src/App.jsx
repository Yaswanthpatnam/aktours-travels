import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Booking from "./components/Booking";
import Services from "./components/Services";
import Cars from "./components/Cars";
import Packages from "./components/Packages";
import WhyUs from "./components/WhyUs";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";

export default function App() {
  const [selectedVehicle, setSelectedVehicle] = useState("swift-dzire");

  const handleSelectCar = (carId) => {
    setSelectedVehicle(carId);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col selection:bg-blue-600 selection:text-white">
      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Live Booking Engine & Fare Estimator */}
        <Booking
          selectedVehicle={selectedVehicle}
          setSelectedVehicle={setSelectedVehicle}
        />

        {/* Services Matrix (Airport, Outstation, Local, Corporate) */}
        <Services onSelectService={() => {
          document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
        }} />

        {/* Fleet Showcase with Interactive Specs & Booking */}
        <Cars onSelectCar={handleSelectCar} />

        {/* Curated Karnataka Tour Packages */}
        <Packages />

        {/* Why Choose Us & Trust Pillars */}
        <WhyUs />

        {/* Customer Reviews & Google Rating */}
        <Testimonials />

        {/* FAQ Accordion */}
        <FAQ />

        {/* Contact & Bengaluru Office Hub */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Call & WhatsApp Triggers */}
      <FloatingButtons />
    </div>
  );
}