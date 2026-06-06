export default function Contact() {
  const whatsappMsg =
    "Hello AK Travels, I would like to know more about your cab services.";

  return (
    <div id="contact" className="section bg-gray-200 rounded-t-[80px]">

      <h2 className="section-title">Contact Us</h2>

      <p className="section-text">
        Reach out to us for bookings, inquiries, or support anytime.
      </p>

      <div className="mt-6 text-center font-calibri space-y-2">
        <p>📞 +919611671318</p>
        <p>📞 +918970094480</p>


        <p>💬 WhatsApp Available 24/7</p>

        <p>
          📍 #118, 28th Cross, L.R. Nagar, Vivek Nagar Post,
          Bangalore - 560047
        </p>

        <p>📧 aktravelsbangalore@gmail.com</p>
      </div>

      <div className="flex justify-center gap-4 mt-8 flex-wrap">

        <a
          href="tel:+919611671318"
          className="bg-brand text-white px-6 py-3 rounded-lg
          hover:scale-105 transition"
        >
          📞 Call Us
        </a>

        <a
          href={`https://wa.me/919611671318?text=${encodeURIComponent(
            whatsappMsg
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-600 text-white px-6 py-3 rounded-lg
          hover:scale-105 transition"
        >
          💬 WhatsApp Us
        </a>

      </div>

      <div className="mt-6 text-center space-x-4">
        <a href="#">Facebook</a>
        <a href="#">Instagram</a>
      </div>

    </div>
  );
}