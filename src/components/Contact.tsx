"use client";

import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          service: data.get("service"),
          message: data.get("message"),
        }),
      });
      if (!res.ok) throw new Error("Error al enviar");
      setSubmitted(true);
    } catch {
      setError("Hubo un error, intentá de nuevo.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contacto" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 mesh-gradient opacity-40" />
      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <p className="text-amber-700 font-medium text-sm mb-3 tracking-wide uppercase">Contacto</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1c1917] mb-6">Hablemos de tu proyecto</h2>
            <p className="text-[#1c1917]/50 text-lg mb-10">
              Cuéntanos qué necesitas y te responderemos en menos de 24 horas con una cotización personalizada sin compromiso.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 glass-card rounded-xl flex items-center justify-center bg-amber-50">
                  <svg className="w-5 h-5 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-[#1c1917]/40">Email</p>
                  <p className="text-[#1c1917] font-medium">hola@dibweb.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 glass-card rounded-xl flex items-center justify-center bg-stone-50">
                  <svg className="w-5 h-5 text-stone-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-[#1c1917]/40">Teléfono</p>
                  <p className="text-[#1c1917] font-medium">+54 11 1234-5678</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 glass-card rounded-xl flex items-center justify-center bg-orange-50">
                  <svg className="w-5 h-5 text-orange-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-[#1c1917]/40">Ubicación</p>
                  <p className="text-[#1c1917] font-medium">Buenos Aires, Argentina</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#1c1917] mb-2">¡Mensaje enviado!</h3>
                <p className="text-[#1c1917]/50">Te responderemos en menos de 24 horas.</p>
              </div>
            ) : (
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium text-[#1c1917]/60 mb-1.5">Nombre</label>
                  <input type="text" name="name" required className="w-full px-4 py-3 rounded-xl bg-white/60 border border-[#1c1917]/10 text-[#1c1917] text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-400/50 placeholder:text-[#1c1917]/30 transition-all" placeholder="Tu nombre" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1c1917]/60 mb-1.5">Email</label>
                  <input type="email" name="email" required className="w-full px-4 py-3 rounded-xl bg-white/60 border border-[#1c1917]/10 text-[#1c1917] text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-400/50 placeholder:text-[#1c1917]/30 transition-all" placeholder="tu@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1c1917]/60 mb-1.5">Servicio de interés</label>
                  <select name="service" className="w-full px-4 py-3 rounded-xl bg-white/60 border border-[#1c1917]/10 text-[#1c1917] text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-400/50 transition-all appearance-none">
                    <option className="bg-white">Landing Page</option>
                    <option className="bg-white">Sitio Corporativo</option>
                    <option className="bg-white">E-commerce</option>
                    <option className="bg-white">Aplicación Web</option>
                    <option className="bg-white">Mantenimiento</option>
                    <option className="bg-white">Otro</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#1c1917]/60 mb-1.5">Mensaje</label>
                  <textarea name="message" required rows={4} className="w-full px-4 py-3 rounded-xl bg-white/60 border border-[#1c1917]/10 text-[#1c1917] text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-400/50 resize-none placeholder:text-[#1c1917]/30 transition-all" placeholder="Cuéntanos sobre tu proyecto..." />
                </div>
                <div style={{ position: "absolute", left: "-9999px" }} aria-hidden="true">
                  <input type="text" name="website" tabIndex={-1} autoComplete="off" />
                </div>
                {error && <p className="text-red-500 text-sm">{error}</p>}
                <button type="submit" disabled={loading} className="w-full btn-primary py-3 rounded-full text-sm font-medium disabled:opacity-50">
                  {loading ? "Enviando..." : "Enviar mensaje"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
