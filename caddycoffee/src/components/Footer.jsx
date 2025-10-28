import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#4b2e05] text-white py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-3 gap-8">
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">Caddy Coffee</h2>
          <p className="text-sm text-gray-200">
            Your go-to café for the finest cold coffees, crispy sandwiches,
            spicy chaap, and hot momos in town. Taste happiness in every sip and
            bite.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-200">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/menu" className="hover:underline">Menu</Link></li>
            <li><Link to="/about" className="hover:underline">About Us</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <p className="text-gray-200">📍 12, Food Market , Sector-110, Noida</p>
          <p className="text-gray-200">📞 +91 9310745399</p>
          <p className="text-gray-200">📧 caddycoffee01@gmail.com</p>
        </div>
      </div>

      <div className="text-center mt-10 text-gray-300 text-sm border-t border-gray-600 pt-4">
        © {new Date().getFullYear()} Caddy Coffee. All Rights Reserved.
      </div>
    </footer>
  );
}
