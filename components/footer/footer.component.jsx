import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const FixedFooter = () => {
  return (
    <footer className="fixed bottom-0 h-9  justify-center flex left-0 right-0 bg-[#246fae] text-white py-3 shadow-md z-50">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src="images/logo.png" className="w-9 h-9" alt="logo" />
          <span className="text-sm font-semibold text-white">
            First Choice University
          </span>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-3 items-center">
          <a
            href="#"
            className="text-xs text-white hover:text-black transition-colors"
          >
            Home
          </a>
          <a
            href="#"
            className="text-xs text-white hover:text-black transition-colors"
          >
            About
          </a>
          <a
            href="#"
            className="text-xs text-white hover:text-black transition-colors"
          >
            Services
          </a>
          <a
            href="#"
            className="text-xs text-white hover:text-black transition-colors"
          >
            Contact
          </a>
        </div>

        {/* Copyright */}
        <div className="text-xs text-white">
          © {new Date().getFullYear()} Your Company
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-6 items-center">
          <a
            href="#"
            className="text-white hover:text-black transition-colors"
          >
            <Facebook size={16} />
          </a>
          <a
            href="#"
            className="text-white hover:text-black transition-colors"
          >
            <Twitter size={16} />
          </a>
          <a
            href="#"
            className="text-white hover:text-black transition-colors"
          >
            <Instagram size={16} />
          </a>
          <a
            href="#"
            className="text-white hover:text-black transition-colors"
          >
            <Linkedin size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FixedFooter;
