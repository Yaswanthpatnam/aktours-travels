import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Tagline from "./components/Tagline";
import Services from "./components/Services";
import Booking from "./components/Booking";
import Cars from "./components/Cars";
import Contact from "./components/Contact";
import FloatingButtons from "./components/FloatingButtons";

export default function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Tagline />
      <Services />
      <Booking />
      <Cars />
      <Contact />
      <FloatingButtons />
    </div>
  );
}