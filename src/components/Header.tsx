"use client";

import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b-2 border-slate-200 shadow-[0_4px_0px_0px_rgba(15,23,42,0.1)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center">
            <img src="/logo.png" alt="DibWeb Studio" className="h-10 w-auto" />
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#servicios" className="text-sm text-slate-600 hover:text-blue-600 transition-colors font-medium uppercase tracking-wider">
              Servicios
            </a>
            <a href="#portfolio" className="text-sm text-slate-600 hover:text-blue-600 transition-colors font-medium uppercase tracking-wider">
              Portfolio
            </a>
            <a href="#precios" className="text-sm text-slate-600 hover:text-blue-600 transition-colors font-medium uppercase tracking-wider">
              Precios
            </a>
            <a href="#contacto" className="text-sm text-slate-600 hover:text-blue-600 transition-colors font-medium uppercase tracking-wider">
              Contacto
            </a>
            <a href="#contacto" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 text-sm font-bold uppercase tracking-wider transition-all shadow-[3px_3px_0px_#1e40af] border-2 border-blue-800 hover:shadow-[1px_1px_0px_#1e40af] hover:translate-x-[2px] hover:translate-y-[2px]">
              Cotización
            </a>
          </nav>

          <button
            className="md:hidden p-2 text-slate-700"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="square" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="square" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden pb-4 space-y-2 border-t-2 border-slate-100 pt-4">
            <a href="#servicios" className="block px-3 py-2 text-sm text-slate-600 hover:text-blue-600 font-medium uppercase tracking-wider">Servicios</a>
            <a href="#portfolio" className="block px-3 py-2 text-sm text-slate-600 hover:text-blue-600 font-medium uppercase tracking-wider">Portfolio</a>
            <a href="#precios" className="block px-3 py-2 text-sm text-slate-600 hover:text-blue-600 font-medium uppercase tracking-wider">Precios</a>
            <a href="#contacto" className="block px-3 py-2 text-sm text-slate-600 hover:text-blue-600 font-medium uppercase tracking-wider">Contacto</a>
            <a href="#contacto" className="block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 text-sm font-bold uppercase tracking-wider text-center shadow-[3px_3px_0px_#1e40af] border-2 border-blue-800">Cotización</a>
          </div>
        )}
      </div>
    </header>
  );
}
