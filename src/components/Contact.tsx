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
    <section id="contacto" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#0a1628]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <p className="text-blue-400 font-mono text-sm mb-3 tracking-widest uppercase border-2 border-blue-400/40 inline-block px-2 py-1">
              Contacto
            </p>
            <h2 className="text-3xl sm:text-5xl font-bold text-white uppercase leading-tight mt-4 mb-6">
              Hablemos de
              <br />
              <span className="text-blue-400">Tu Proyecto</span>
            </h2>
            <p className="text-slate-400 text-lg mb-10 border-l-4 border-blue-500 pl-4">
              Cuéntanos qué necesitas y te responderemos en menos de 24 horas.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 glass-card p-6">
                <div className="w-12 h-12 bg-blue-500 flex items-center justify-center text-white mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="square" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-xs text-slate-500 font-mono uppercase tracking-wider mb-1">Email</p>
                <p className="text-white font-bold">hola@dibweb.com</p>
              </div>
              <div className="glass-card p-6">
                <div className="w-10 h-10 bg-slate-600 flex items-center justify-center text-white mb-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="square" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <p className="text-xs text-slate-500 font-mono uppercase tracking-wider mb-1">Teléfono</p>
                <p className="text-white font-bold text-sm">+54 11 1234-5678</p>
              </div>
              <div className="glass-card p-6">
                <div className="w-10 h-10 bg-blue-500 flex items-center justify-center text-white mb-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="square" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="square" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="text-xs text-slate-500 font-mono uppercase tracking-wider mb-1">Ubicación</p>
                <p className="text-white font-bold text-sm">Buenos Aires, Argentina</p>
              </div>
            </div>
          </div>

          <div className="glass-card p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <div className="w-16 h-16 bg-emerald-500 flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="square" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white uppercase mb-2">¡Mensaje Enviado!</h3>
                <p className="text-slate-400">Te responderemos pronto.</p>
              </div>
            ) : (
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5 uppercase tracking-wider">Nombre</label>
                  <input type="text" name="name" required className="w-full px-4 py-3 bg-white/5 border-2 border-white/10 text-white text-sm focus:outline-none focus:border-blue-500 placeholder:text-slate-600 transition-all" placeholder="Tu nombre" />
                </div>
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5 uppercase tracking-wider">Email</label>
                  <input type="email" name="email" required className="w-full px-4 py-3 bg-white/5 border-2 border-white/10 text-white text-sm focus:outline-none focus:border-blue-500 placeholder:text-slate-600 transition-all" placeholder="tu@email.com" />
                </div>
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5 uppercase tracking-wider">Servicio</label>
                  <select name="service" className="w-full px-4 py-3 bg-white/5 border-2 border-white/10 text-white text-sm focus:outline-none focus:border-blue-500 transition-all appearance-none">
                    <option className="bg-slate-800">Landing Page</option>
                    <option className="bg-slate-800">Sitio Corporativo</option>
                    <option className="bg-slate-800">E-commerce</option>
                    <option className="bg-slate-800">Aplicación Web</option>
                    <option className="bg-slate-800">Mantenimiento</option>
                    <option className="bg-slate-800">Otro</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-mono text-slate-400 mb-1.5 uppercase tracking-wider">Mensaje</label>
                  <textarea name="message" required rows={4} className="w-full px-4 py-3 bg-white/5 border-2 border-white/10 text-white text-sm focus:outline-none focus:border-blue-500 resize-none placeholder:text-slate-600 transition-all" placeholder="Cuéntanos sobre tu proyecto..." />
                </div>
                <div style={{ position: "absolute", left: "-9999px" }} aria-hidden="true">
                  <input type="text" name="website" tabIndex={-1} autoComplete="off" />
                </div>
                {error && <p className="text-red-400 text-sm">{error}</p>}
                <button type="submit" disabled={loading} className="w-full btn-primary py-4 text-sm font-bold uppercase tracking-wider disabled:opacity-50">
                  {loading ? "Enviando..." : "Enviar →"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
