"use client";

import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="text-xl font-bold text-gray-900">
            DibWeb<span className="text-blue-600">.</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#servicios" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              Servicios
            </a>
            <a href="#portfolio" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              Portfolio
            </a>
            <a href="#precios" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              Precios
            </a>
            <a href="#contacto" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              Contacto
            </a>
            <a
              href="#contacto"
              className="bg-gray-900 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
            >
              Cotización gratis
            </a>
          </nav>

          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <a href="#servicios" className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900">Servicios</a>
            <a href="#portfolio" className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900">Portfolio</a>
            <a href="#precios" className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900">Precios</a>
            <a href="#contacto" className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900">Contacto</a>
            <a href="#contacto" className="block bg-gray-900 text-white px-5 py-2 rounded-full text-sm font-medium text-center">Cotización gratis</a>
          </div>
        )}
      </div>
    </header>
  );
}
