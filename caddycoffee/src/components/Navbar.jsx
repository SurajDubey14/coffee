import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-[#fffaf5] shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="/favicon.png"
            alt="Coffee Logo"
            className="w-10 h-10 rounded-full"
          />
          <span className="text-2xl font-bold text-[#4b2e05]">Caddy Coffee</span>
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex space-x-8">
          <Link
            to="/"
            className="text-[#4b2e05] font-medium hover:text-[#8b5e34] transition"
          >
            Home
          </Link>
          <Link
            to="/menu"
            className="text-[#4b2e05] font-medium hover:text-[#8b5e34] transition"
          >
            Menu
          </Link>
          <Link
            to="/about"
            className="text-[#4b2e05] font-medium hover:text-[#8b5e34] transition"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-[#4b2e05] font-medium hover:text-[#8b5e34] transition"
          >
            Contact
          </Link>
        </div>

        {/* CTA Button */}
        <Link
          to="/order"
          className="bg-[#4b2e05] text-white px-4 py-2 rounded-full hover:bg-[#3a2304] transition"
        >
          Order Now
        </Link>
      </div>
    </nav>
  );
}
