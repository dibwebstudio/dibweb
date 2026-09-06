"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#faf9f7]/95 backdrop-blur-md border-b border-[#e7e5e0]" : "bg-transparent"}`}>
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

            <button className="md:hidden p-2 text-neutral-700" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen
                  ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay menu */}
      <div className={`fixed inset-0 z-40 bg-[#faf9f7] md:hidden transition-all duration-300 ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        <div className="pt-24 px-6 flex flex-col gap-2">
          {["Servicios", "Portfolio", "Precios", "Contacto"].map((item, i) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="text-3xl font-semibold text-neutral-900 py-3 border-b border-[#e7e5e0] transition-all"
              style={{ transitionDelay: `${i * 50}ms`, transform: menuOpen ? "translateY(0)" : "translateY(10px)", opacity: menuOpen ? 1 : 0, transition: "opacity 0.3s ease, transform 0.3s ease" }}
            >
              {item}
            </a>
          ))}
          <div className="pt-6">
            <a href="#contacto" onClick={() => setMenuOpen(false)} className="btn-primary block text-center px-6 py-4 rounded-2xl text-sm font-semibold">
              Solicitar cotización
            </a>
            <a href="https://wa.me/56949417183" target="_blank" rel="noopener noreferrer" className="btn-secondary block text-center px-6 py-4 rounded-2xl text-sm font-semibold mt-3">
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
