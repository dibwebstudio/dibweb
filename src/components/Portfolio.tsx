export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#0f172a]">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-16">
          <p className="text-blue-400 font-medium text-sm mb-3 tracking-wide">Portfolio</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Proyectos recientes</h2>
          <p className="mt-4 text-slate-400 text-lg">Algunos de los sitios web que hemos desarrollado.</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {[
            { title: "Restaurante La Mesa", cat: "Landing Page", desc: "Menú online y sistema de reservas.", grad: "from-blue-900/40 to-blue-800/20" },
            { title: "TechCorp Solutions", cat: "Corporativo", desc: "Web institucional B2B.", grad: "from-slate-800/40 to-slate-700/20" },
            { title: "Moda Express", cat: "E-commerce", desc: "Tienda online de ropa.", grad: "from-rose-900/40 to-rose-800/20" },
            { title: "Clínica Bienestar", cat: "Landing Page", desc: "Sistema de citas online.", grad: "from-emerald-900/40 to-emerald-800/20" },
          ].map((p) => (
            <div key={p.title} className="group cursor-pointer">
              <div className={`rounded-xl h-56 flex items-center justify-center mb-4 overflow-hidden bg-gradient-to-br ${p.grad} border border-white/5`}>
                <svg className="w-12 h-12 text-white/10 group-hover:text-white/20 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-xs text-slate-500 mb-1">{p.cat}</p>
              <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">{p.title}</h3>
              <p className="text-slate-400 text-sm">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
