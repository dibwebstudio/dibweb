"use client";

import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-strong">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="text-xl font-bold tracking-tight">
            <span className="text-white">Dib</span>
            <span className="text-violet-400">Web</span>
            <span className="text-white/40 text-sm font-light ml-1">Studio</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#servicios" className="text-sm text-white/50 hover:text-white transition-colors duration-300">
              Servicios
            </a>
            <a href="#portfolio" className="text-sm text-white/50 hover:text-white transition-colors duration-300">
              Portfolio
            </a>
            <a href="#precios" className="text-sm text-white/50 hover:text-white transition-colors duration-300">
              Precios
            </a>
            <a href="#contacto" className="text-sm text-white/50 hover:text-white transition-colors duration-300">
              Contacto
            </a>
            <a
              href="#contacto"
              className="glass-card px-5 py-2 rounded-full text-sm font-medium text-white hover:bg-white/10 transition-all duration-300"
            >
              Cotización gratis
            </a>
          </nav>

          <button
            className="md:hidden p-2 text-white/60"
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
            <a href="#servicios" className="block px-3 py-2 text-sm text-white/60 hover:text-white">Servicios</a>
            <a href="#portfolio" className="block px-3 py-2 text-sm text-white/60 hover:text-white">Portfolio</a>
            <a href="#precios" className="block px-3 py-2 text-sm text-white/60 hover:text-white">Precios</a>
            <a href="#contacto" className="block px-3 py-2 text-sm text-white/60 hover:text-white">Contacto</a>
            <a href="#contacto" className="block glass-card px-5 py-2 rounded-full text-sm font-medium text-white text-center">Cotización gratis</a>
          </div>
        )}
      </div>
    </header>
  );
}
