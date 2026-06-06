import { Phone, MessageCircle } from "lucide-react";

export default function FloatingButtons() {

  return (
    <div className="fixed bottom-4 right-4 flex flex-col gap-3 z-50">

      <a
        href="https://wa.me/91XXXXXXXXXX"
        className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center 
        rounded-full bg-green-500 text-white shadow-lg active:scale-90"
      >
        <MessageCircle size={22} />
      </a>

      <a
        href="tel:+91XXXXXXXXXX"
        className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center 
        rounded-full bg-blue-500 text-white shadow-lg active:scale-90"
      >
        <Phone size={22} />
      </a>

    </div>
  );
}