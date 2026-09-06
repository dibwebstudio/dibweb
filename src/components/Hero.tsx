export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 px-4 py-1.5 rounded mb-8">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-xs text-slate-500 font-medium tracking-wide uppercase">Disponibilidad abierta</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-slate-900">
              Creamos tu presencia
              <br />
              <span className="text-blue-700">digital</span>
            </h1>

            <p className="mt-6 text-lg text-slate-500 max-w-xl leading-relaxed">
              Diseñamos y desarrollamos páginas web modernas, rápidas y optimizadas
              para convertir visitantes en clientes. Desde landing pages hasta
              plataformas completas.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a href="#contacto" className="btn-primary px-8 py-4 rounded text-sm font-medium text-center">
                Solicitar cotización
              </a>
              <a href="#portfolio" className="btn-secondary px-8 py-4 rounded text-sm font-medium text-center">
                Ver trabajos
              </a>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <svg viewBox="0 0 600 420" className="w-full max-w-lg" xmlns="http://www.w3.org/2000/svg">
                <rect x="40" y="10" width="520" height="320" rx="8" fill="#1e293b" />
                <rect x="48" y="18" width="504" height="296" rx="4" fill="#0f172a" />

                <rect x="56" y="26" width="488" height="280" rx="2" fill="#f8fafc" />

                <rect x="64" y="34" width="140" height="20" rx="3" fill="#e2e8f0" />
                <rect x="64" y="62" width="200" height="12" rx="2" fill="#f1f5f9" />
                <rect x="64" y="80" width="180" height="12" rx="2" fill="#f1f5f9" />
                <rect x="64" y="98" width="220" height="12" rx="2" fill="#f1f5f9" />

                <rect x="64" y="130" width="220" height="160" rx="6" fill="#eff6ff" stroke="#bfdbfe" strokeWidth="1" />
                <rect x="72" y="138" width="100" height="10" rx="2" fill="#3b82f6" />
                <rect x="72" y="154" width="160" height="8" rx="1" fill="#93c5fd" />
                <rect x="72" y="168" width="140" height="8" rx="1" fill="#93c5fd" />
                <rect x="72" y="182" width="180" height="8" rx="1" fill="#93c5fd" />
                <rect x="72" y="202" width="80" height="24" rx="4" fill="#2563eb" />
                <text x="82" y="218" fill="white" fontSize="10" fontFamily="system-ui">Contactar</text>

                <rect x="300" y="34" width="244" height="130" rx="6" fill="#f0fdf4" stroke="#bbf7d0" strokeWidth="1" />
                <rect x="308" y="42" width="80" height="10" rx="2" fill="#22c55e" />
                <rect x="308" y="58" width="150" height="8" rx="1" fill="#86efac" />
                <rect x="308" y="72" width="130" height="8" rx="1" fill="#86efac" />
                <rect x="308" y="86" width="170" height="8" rx="1" fill="#86efac" />
                <rect x="308" y="106" width="60" height="40" rx="4" fill="#16a34a" />
                <text x="318" y="130" fill="white" fontSize="9" fontFamily="system-ui">Ver más</text>

                <rect x="300" y="174" width="244" height="132" rx="6" fill="#fefce8" stroke="#fde68a" strokeWidth="1" />
                <rect x="308" y="182" width="120" height="10" rx="2" fill="#eab308" />
                <rect x="308" y="198" width="180" height="8" rx="1" fill="#facc15" />
                <rect x="308" y="212" width="160" height="8" rx="1" fill="#facc15" />
                <rect x="308" y="226" width="200" height="8" rx="1" fill="#facc15" />
                <rect x="308" y="246" width="90" height="24" rx="4" fill="#ca8a04" />
                <text x="318" y="262" fill="white" fontSize="9" fontFamily="system-ui">Más info</text>

                <rect x="200" y="340" width="200" height="16" rx="4" fill="#475569" />
                <rect x="230" y="356" width="140" height="10" rx="2" fill="#64748b" />
              </svg>
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {[
            { value: "150+", label: "Proyectos entregados" },
            { value: "98%", label: "Clientes satisfechos" },
            { value: "24h", label: "Tiempo de respuesta" },
            { value: "5+", label: "Años de experiencia" },
          ].map((stat) => (
            <div key={stat.label} className="glass-card rounded p-6 text-center">
              <p className="text-3xl font-bold text-blue-700">{stat.value}</p>
              <p className="text-xs text-slate-400 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
