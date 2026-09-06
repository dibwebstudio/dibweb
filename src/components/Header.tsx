"use client";

import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#faf9f7]/90 backdrop-blur-md border-b border-[#e7e5e0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          <a href="#" className="flex items-center" aria-label="DibWeb Studio - Inicio">
            <Image src="/logo.png" alt="DibWeb Studio" width={160} height={40} className="h-9 w-auto" priority />
          </a>

          <nav className="hidden md:flex items-center gap-9">
            {["Servicios", "Portfolio", "Precios", "Contacto"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm text-neutral-600 hover:text-neutral-900 transition-colors">
                {item}
              </a>
            ))}
            <a href="#contacto" className="btn-primary px-5 py-2.5 rounded-full text-sm font-medium">
              Cotización
            </a>
          </nav>

          <button className="md:hidden p-2 text-neutral-700" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden pb-4 space-y-1 border-t border-[#e7e5e0] pt-4">
            {["Servicios", "Portfolio", "Precios", "Contacto"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="block px-3 py-2 text-sm text-neutral-600 hover:text-neutral-900">{item}</a>
            ))}
            <a href="#contacto" className="block btn-primary px-5 py-2.5 rounded-full text-sm font-medium text-center mt-2">Cotización</a>
          </div>
        )}
      </div>
    </header>
  );
}
