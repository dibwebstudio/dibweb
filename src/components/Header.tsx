"use client";

import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center">
            <img src="/logo.png" alt="DibWeb Studio" className="h-10 w-auto" />
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {["Servicios", "Portfolio", "Precios", "Contacto"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                {item}
              </a>
            ))}
            <a href="#contacto" className="btn-primary px-5 py-2 rounded-lg text-sm font-semibold">
              Cotización
            </a>
          </nav>

          <button className="md:hidden p-2 text-gray-600" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden pb-4 space-y-2 border-t border-gray-200 pt-4">
            {["Servicios", "Portfolio", "Precios", "Contacto"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600">{item}</a>
            ))}
            <a href="#contacto" className="block btn-primary px-5 py-2 rounded-lg text-sm font-semibold text-center">Cotización</a>
          </div>
        )}
      </div>
    </header>
  );
}
