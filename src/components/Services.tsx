export default function Services() {
  const featured = [
    { title: "Landing Pages", desc: "Páginas de alto impacto para convertir visitantes en clientes.", icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", color: "text-blue-400 bg-blue-500/10", price: "Desde $120.000", link: "#contacto" },
    { title: "Sitios Corporativos", desc: "Webs institucionales que transmiten profesionalismo y confianza.", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4", color: "text-slate-300 bg-slate-500/10", price: "Desde $250.000", link: "#contacto" },
    { title: "E-commerce", desc: "Tiendas online completas con pasarela de pagos y gestión de inventario.", icon: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z", color: "text-emerald-400 bg-emerald-500/10", price: "Desde $450.000", link: "#contacto" },
  ];

  const others = [
    { title: "Puntos de Pago (POS)", icon: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z", color: "text-emerald-400 bg-emerald-500/10", link: "/servicios/puntos-de-pago" },
    { title: "SEO & Marketing", icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6", color: "text-violet-400 bg-violet-500/10", link: "#contacto" },
    { title: "Meta Ads", icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z", color: "text-pink-400 bg-pink-500/10", link: "#contacto" },
    { title: "Sistemas ERP", icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4", color: "text-cyan-400 bg-cyan-500/10", link: "#contacto" },
    { title: "Aplicaciones Web", icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4", color: "text-indigo-400 bg-indigo-500/10", link: "#contacto" },
    { title: "SSL & Seguridad", icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z", color: "text-amber-400 bg-amber-500/10", link: "#contacto" },
    { title: "Mantenimiento", icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z", color: "text-orange-400 bg-orange-500/10", link: "#contacto" },
    { title: "Hosting & Dominios", icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9", color: "text-teal-400 bg-teal-500/10", link: "#contacto" },
    { title: "Consultoría Digital", icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z", color: "text-yellow-400 bg-yellow-500/10", link: "#contacto" },
  ];

  return (
    <section id="servicios" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#1e293b] aurora-bg">
      <div className="aurora-blob aurora-blob-2" style={{ width: '300px', height: '300px', opacity: 0.1 }} />
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-blue-400 font-medium text-sm mb-3 tracking-wide">Servicios</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Todo lo que necesitas para tu presencia digital
          </h2>
          <p className="mt-4 text-slate-400 text-lg">
            Soluciones completas para que tu negocio destaque en internet.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {featured.map((s) => (
            <div key={s.title} className="glass-card aurora-card rounded-xl p-8 group hover:scale-[1.02] transition-transform duration-300">
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${s.color} mb-5`}>
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={s.icon} />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{s.title}</h3>
              <p className="text-slate-400 text-sm mb-4">{s.desc}</p>
              <div className="flex items-center justify-between">
                <span className="text-blue-400 font-bold text-lg">{s.price}</span>
                <a href="#contacto" className="text-slate-500 hover:text-blue-400 text-sm font-medium transition-colors">Ver más →</a>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {others.map((s) => (
            <a key={s.title} href={s.link} className={`glass-card rounded-xl p-4 text-center hover:scale-[1.03] transition-transform duration-300 ${s.link.startsWith('/') ? 'border border-emerald-500/20' : ''}`}>
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${s.color} mx-auto mb-3`}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={s.icon} />
                </svg>
              </div>
              <p className="text-sm text-white font-medium">{s.title}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
