export default function Services() {
  return (
    <section id="servicios" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#1e293b]">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-16">
          <p className="text-blue-400 font-medium text-sm mb-3 tracking-wide">
            Servicios
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Todo lo que necesitas para tu presencia digital
          </h2>
          <p className="mt-4 text-slate-400 text-lg">
            Ofrecemos soluciones completas para que tu negocio destaque en internet.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Landing Pages", desc: "Páginas de alto impacto para convertir visitantes en clientes.", icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", color: "text-blue-400 bg-blue-500/10" },
            { title: "Sitios Corporativos", desc: "Webs institucionales que transmiten profesionalismo.", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4", color: "text-slate-300 bg-slate-500/10" },
            { title: "E-commerce", desc: "Tiendas online completas con pasarela de pagos.", icon: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z", color: "text-emerald-400 bg-emerald-500/10" },
            { title: "SEO & Marketing", desc: "Optimización para buscadores y estrategias digitales.", icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6", color: "text-violet-400 bg-violet-500/10" },
            { title: "Aplicaciones Web", desc: "Plataformas y herramientas a medida para tu negocio.", icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4", color: "text-cyan-400 bg-cyan-500/10" },
            { title: "Mantenimiento", desc: "Soporte continuo y mejoras periódicas para tu web.", icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z", color: "text-amber-400 bg-amber-500/10" },
          ].map((s) => (
            <div key={s.title} className="glass-card rounded-xl p-6">
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${s.color} mb-4`}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={s.icon} />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{s.title}</h3>
              <p className="text-slate-400 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
