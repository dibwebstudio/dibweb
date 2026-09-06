export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#0a1628]">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-16">
          <p className="text-blue-400 font-medium text-sm mb-3 tracking-wide uppercase">
            Portfolio
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Proyectos recientes
          </h2>
          <p className="mt-4 text-slate-400 text-lg">
            Algunos de los sitios web que hemos desarrollado para nuestros clientes.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[200px]">
          <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden relative group cursor-pointer bg-gradient-to-br from-blue-900/60 to-blue-800/40 border border-white/10">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <svg className="w-20 h-20 text-white/10 group-hover:text-white/20 group-hover:scale-110 transition-all duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="text-xs uppercase tracking-wider mb-1 font-medium text-blue-400">Landing Page</p>
              <h3 className="text-2xl font-semibold text-white mb-1 group-hover:text-blue-300 transition-colors">Restaurante La Mesa</h3>
              <p className="text-slate-300 text-sm">Menú online y sistema de reservas</p>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden relative group cursor-pointer bg-gradient-to-br from-slate-800/60 to-slate-700/40 border border-white/10">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <svg className="w-12 h-12 text-white/10 group-hover:text-white/20 transition-all duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p className="text-xs uppercase tracking-wider mb-1 font-medium text-slate-300">Corporativo</p>
              <h3 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors">TechCorp</h3>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden relative group cursor-pointer bg-gradient-to-br from-rose-900/60 to-rose-800/40 border border-white/10">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <svg className="w-12 h-12 text-white/10 group-hover:text-white/20 transition-all duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
              </svg>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p className="text-xs uppercase tracking-wider mb-1 font-medium text-rose-300">E-commerce</p>
              <h3 className="text-lg font-semibold text-white group-hover:text-blue-300 transition-colors">Moda Express</h3>
            </div>
          </div>

          <div className="col-span-2 rounded-2xl overflow-hidden relative group cursor-pointer bg-gradient-to-br from-emerald-900/60 to-emerald-800/40 border border-white/10">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <svg className="w-16 h-16 text-white/10 group-hover:text-white/20 group-hover:scale-110 transition-all duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="text-xs uppercase tracking-wider mb-1 font-medium text-emerald-400">Landing Page</p>
              <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-blue-300 transition-colors">Clínica Bienestar</h3>
              <p className="text-slate-300 text-sm">Sistema de citas online</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
