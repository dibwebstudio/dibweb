export default function Services() {
  return (
    <section id="servicios" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#0d1b2e]">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-16">
          <p className="text-blue-400 font-medium text-sm mb-3 tracking-wide uppercase">
            Servicios
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Todo lo que necesitas para tu presencia digital
          </h2>
          <p className="mt-4 text-slate-400 text-lg">
            Ofrecemos soluciones completas para que tu negocio destaque en internet.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[160px]">
          <div className="col-span-2 row-span-2 glass-card rounded-2xl p-8 flex flex-col justify-between group">
            <div>
              <div className="w-14 h-14 rounded-xl bg-blue-500/15 flex items-center justify-center text-blue-400 mb-6">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Landing Pages</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Páginas de alto impacto diseñadas para convertir visitantes en leads y clientes potenciales.
              </p>
            </div>
            <div className="flex items-center gap-2 text-blue-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
              <span>Ver más</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-6 flex flex-col justify-between group">
            <div className="w-10 h-10 rounded-lg bg-slate-500/15 flex items-center justify-center text-slate-300">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white mb-1">Sitios Corporativos</h3>
              <p className="text-slate-500 text-xs">Webs institucionales</p>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-6 flex flex-col justify-between group">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/15 flex items-center justify-center text-emerald-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
              </svg>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white mb-1">E-commerce</h3>
              <p className="text-slate-500 text-xs">Tiendas online</p>
            </div>
          </div>

          <div className="col-span-2 glass-card rounded-2xl p-6 flex flex-col justify-between group">
            <div className="flex items-start justify-between">
              <div className="w-10 h-10 rounded-lg bg-violet-500/15 flex items-center justify-center text-violet-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <span className="text-xs text-slate-500 bg-white/5 px-2 py-1 rounded">SEO</span>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white mb-1">SEO & Marketing Digital</h3>
              <p className="text-slate-500 text-xs">Optimización para buscadores y estrategias digitales</p>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-6 flex flex-col justify-between group">
            <div className="w-10 h-10 rounded-lg bg-cyan-500/15 flex items-center justify-center text-cyan-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white mb-1">Aplicaciones Web</h3>
              <p className="text-slate-500 text-xs">Herramientas a medida</p>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-6 flex flex-col justify-between group">
            <div className="w-10 h-10 rounded-lg bg-amber-500/15 flex items-center justify-center text-amber-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white mb-1">Mantenimiento</h3>
              <p className="text-slate-500 text-xs">Soporte continuo</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
