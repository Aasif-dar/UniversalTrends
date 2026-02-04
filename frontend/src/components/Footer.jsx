const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 pt-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Shop Info */}
        <div>
          <h3 className="text-white text-xl font-bold mb-4">
            Universal Trend
          </h3>
          <p className="text-sm leading-relaxed">
            Universal Trend is your one-stop destination for fashion,
            footwear, and fragrances. We bring you modern styles
            crafted for comfort and confidence.
          </p>
        </div>

        {/* Social Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">
            Follow Us
          </h4>

          <div className="flex gap-4 text-2xl">
            <a href="#" className="hover:text-white">📸</a>
            <a href="#" className="hover:text-white">📘</a>
            <a href="#" className="hover:text-white">💬</a>
          </div>

          <p className="text-sm mt-4">
            Instagram • Facebook • WhatsApp
          </p>
        </div>

        {/* Map */}
        <div>
          <h4 className="text-white font-semibold mb-4">
            Visit Our Store
          </h4>

          <div className="w-full h-40 rounded overflow-hidden">
            <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.956639083192!2d74.814139!3d33.9936475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e18ddbca53feb5%3A0x804ec14e8fc466c8!2sUniversal%20Trend!5e0!3m2!1sen!2sin!4v1770114679225!5m2!1sen!2sin"
            width="100%"
            height="180"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Store Location"
          ></iframe>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 py-4 text-center text-sm">
        © {new Date().getFullYear()} Universal Trend. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
