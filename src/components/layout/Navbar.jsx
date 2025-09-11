import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-gray-300 shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo / Nombre */}
        <div className="text-lg font-semibold text-white">
          🌍 SismoAPP
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          <a href="/" className="hover:text-white transition-colors text-sm">
            Home
          </a>
          <a href="/map" className="hover:text-white transition-colors text-sm">
            Map
          </a>
          <a href="/about" className="hover:text-white transition-colors text-sm">
            About
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-300 hover:text-white"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-gray-800 px-4 pb-4 space-y-2">
          <a
            href="/"
            className="block hover:text-white transition-colors text-sm"
          >
            Home
          </a>
          <a
            href="/map"
            className="block hover:text-white transition-colors text-sm"
          >
            Map
          </a>
          <a
            href="/about"
            className="block hover:text-white transition-colors text-sm"
          >
            About
          </a>
        </div>
      )}
    </nav>
  );
}
