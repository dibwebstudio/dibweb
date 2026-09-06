export default function TrustBar() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#0a0f1a] border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-slate-500 text-xs uppercase tracking-widest mb-8">Confían en nosotros</p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {[
            { name: "SSL Seguro", icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" },
            { name: "Google Partner", icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
            { name: "Meta Partner", icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" },
            { name: "Tecnología Cloud", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
            { name: "Bases de Datos", icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" },
          ].map((t) => (
            <div key={t.name} className="flex items-center gap-2 text-slate-500 hover:text-slate-400 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={t.icon} />
              </svg>
              <span className="text-sm font-medium">{t.name}</span>
            </div>
          ))}
        </div>
        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto">
          <div className="text-center">
            <p className="text-3xl font-bold text-white">150+</p>
            <p className="text-xs text-slate-500 mt-1">Proyectos entregados</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-white">98%</p>
            <p className="text-xs text-slate-500 mt-1">Clientes satisfechos</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-white">24h</p>
            <p className="text-xs text-slate-500 mt-1">Tiempo de respuesta</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-white">5+</p>
            <p className="text-xs text-slate-500 mt-1">Años de experiencia</p>
          </div>
        </div>
      </div>
    </section>
  );
}
