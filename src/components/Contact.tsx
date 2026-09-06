"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";

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
        body: JSON.stringify({ name: data.get("name"), email: data.get("email"), service: data.get("service"), message: data.get("message") }),
      });
      if (!res.ok) throw new Error("Error");
      setSubmitted(true);
    } catch { setError("Hubo un error, intentá de nuevo."); }
    finally { setLoading(false); }
  }

  return (
    <section id="contacto" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-[#e7e5e0]">
      <div className="max-w-7xl mx-auto">
        <Reveal><div className="grid lg:grid-cols-2 gap-12">
          <div>
            <p className="label mb-4">Contacto</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 mb-6">Hablemos de tu proyecto</h2>
            <p className="text-neutral-600 text-lg mb-10">Cuéntanos qué necesitas y te responderemos en menos de 24 horas.</p>
            <div className="space-y-6">
              {[
                { icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", label: "Email", value: "dibwebstudio@gmail.com" },
                { icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z", label: "Teléfono", value: "+56 9 4941-7183" },
                { icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z", label: "Ubicación", value: "Santiago de Chile" },
              ].map((c) => (
                <div key={c.label} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#f5f4f1] flex items-center justify-center text-neutral-700">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={c.icon} />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-neutral-500">{c.label}</p>
                    <p className="text-neutral-900 font-medium">{c.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card rounded-2xl p-8 shadow-sm">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">¡Mensaje enviado!</h3>
                <p className="text-neutral-500">Te responderemos pronto.</p>
              </div>
            ) : (
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1.5">Nombre</label>
                  <input type="text" name="name" required className="w-full px-4 py-3 rounded-lg bg-white border border-neutral-300 text-neutral-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder:text-neutral-400 transition-all" placeholder="Tu nombre" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1.5">Email</label>
                  <input type="email" name="email" required className="w-full px-4 py-3 rounded-lg bg-white border border-neutral-300 text-neutral-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder:text-neutral-400 transition-all" placeholder="tu@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1.5">Servicio</label>
                  <select name="service" className="w-full px-4 py-3 rounded-lg bg-white border border-neutral-300 text-neutral-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all appearance-none">
                    <option>Landing Page</option>
                    <option>Sitio Corporativo</option>
                    <option>E-commerce</option>
                    <option>Punto de Venta (POS)</option>
                    <option>Aplicación Web</option>
                    <option>Otro</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1.5">Mensaje</label>
                  <textarea name="message" required rows={4} className="w-full px-4 py-3 rounded-lg bg-white border border-neutral-300 text-neutral-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none placeholder:text-neutral-400 transition-all" placeholder="Cuéntanos sobre tu proyecto..." />
                </div>
                <div style={{ position: "absolute", left: "-9999px" }} aria-hidden="true">
                  <input type="text" name="website" tabIndex={-1} autoComplete="off" />
                </div>
                {error && <p className="text-red-500 text-sm">{error}</p>}
                <button type="submit" disabled={loading} className="w-full btn-primary py-3 rounded-lg text-sm font-semibold disabled:opacity-50">
                  {loading ? "Enviando..." : "Enviar mensaje"}
                </button>
              </form>
            )}
          </div>
        </div></Reveal>
      </div>
    </section>
  );
}