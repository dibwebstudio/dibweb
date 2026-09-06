"use client";

import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-strong">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center">
            <img src="/logo.svg" alt="DibWeb Studio" className="h-10 w-auto" />
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#servicios" className="text-sm text-[#1c1917]/50 hover:text-[#1c1917] transition-colors duration-300">
              Servicios
            </a>
            <a href="#portfolio" className="text-sm text-[#1c1917]/50 hover:text-[#1c1917] transition-colors duration-300">
              Portfolio
            </a>
            <a href="#precios" className="text-sm text-[#1c1917]/50 hover:text-[#1c1917] transition-colors duration-300">
              Precios
            </a>
            <a href="#contacto" className="text-sm text-[#1c1917]/50 hover:text-[#1c1917] transition-colors duration-300">
              Contacto
            </a>
            <a href="#contacto" className="btn-primary px-5 py-2 rounded-full text-sm font-medium">
              Cotización gratis
            </a>
          </nav>

          <button
            className="md:hidden p-2 text-[#1c1917]/60"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <a href="#servicios" className="block px-3 py-2 text-sm text-[#1c1917]/60 hover:text-[#1c1917]">Servicios</a>
            <a href="#portfolio" className="block px-3 py-2 text-sm text-[#1c1917]/60 hover:text-[#1c1917]">Portfolio</a>
            <a href="#precios" className="block px-3 py-2 text-sm text-[#1c1917]/60 hover:text-[#1c1917]">Precios</a>
            <a href="#contacto" className="block px-3 py-2 text-sm text-[#1c1917]/60 hover:text-[#1c1917]">Contacto</a>
            <a href="#contacto" className="block btn-primary px-5 py-2 rounded-full text-sm font-medium text-center">Cotización gratis</a>
          </div>
        )}
      </div>
    </header>
  );
}
