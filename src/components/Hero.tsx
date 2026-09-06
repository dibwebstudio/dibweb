export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#0a1628]">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f1f3d] to-[#0a1628]" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 border-2 border-blue-500/40 px-3 py-1 mb-8">
              <span className="w-2 h-2 bg-green-400 animate-pulse" />
              <span className="text-xs text-blue-300 font-mono tracking-widest uppercase">Online</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[0.95] text-white uppercase">
              Creamos tu
              <br />
              <span className="text-blue-400">Presencia</span>
              <br />
              <span className="text-blue-400">Digital</span>
            </h1>

            <p className="mt-8 text-lg text-slate-400 max-w-xl leading-relaxed border-l-4 border-blue-500 pl-4">
              Diseñamos y desarrollamos páginas web modernas, rápidas y optimizadas
              para convertir visitantes en clientes.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a href="#contacto" className="btn-primary px-8 py-4 text-sm font-bold uppercase tracking-wider text-center">
                Cotización →
              </a>
              <a href="#portfolio" className="btn-secondary px-8 py-4 text-sm font-bold uppercase tracking-wider text-center">
                Ver trabajos
              </a>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end items-end gap-4">
            <svg viewBox="0 0 320 260" className="w-full max-w-sm" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="screenGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#1e3a5f" />
                  <stop offset="100%" stopColor="#0f172a" />
                </linearGradient>
                <linearGradient id="bezelGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#334155" />
                  <stop offset="100%" stopColor="#1e293b" />
                </linearGradient>
              </defs>

              <rect x="10" y="8" width="300" height="200" fill="url(#bezelGrad)" stroke="#475569" strokeWidth="2" />
              <rect x="16" y="14" width="288" height="180" fill="url(#screenGrad)" />

              <rect x="24" y="22" width="130" height="70" fill="rgba(37, 99, 235, 0.15)" stroke="#3b82f6" strokeWidth="1" />
              <rect x="32" y="30" width="60" height="6" fill="#3b82f6" />
              <rect x="32" y="42" width="100" height="4" fill="rgba(147, 197, 253, 0.5)" />
              <rect x="32" y="50" width="90" height="4" fill="rgba(147, 197, 253, 0.5)" />
              <rect x="32" y="58" width="110" height="4" fill="rgba(147, 197, 253, 0.5)" />
              <rect x="32" y="72" width="50" height="12" fill="#2563eb" />

              <rect x="162" y="22" width="130" height="80" fill="rgba(16, 185, 129, 0.15)" stroke="#10b981" strokeWidth="1" />
              <rect x="170" y="30" width="50" height="6" fill="#10b981" />
              <rect x="170" y="42" width="100" height="4" fill="rgba(110, 231, 183, 0.5)" />
              <rect x="170" y="50" width="80" height="4" fill="rgba(110, 231, 183, 0.5)" />
              <rect x="170" y="58" width="110" height="4" fill="rgba(110, 231, 183, 0.5)" />
              <rect x="170" y="74" width="40" height="18" fill="#059669" />

              <rect x="24" y="102" width="130" height="80" fill="rgba(168, 85, 247, 0.15)" stroke="#8b5cf6" strokeWidth="1" />
              <rect x="32" y="110" width="70" height="6" fill="#8b5cf6" />
              <rect x="32" y="122" width="100" height="4" fill="rgba(167, 139, 250, 0.5)" />
              <rect x="32" y="130" width="90" height="4" fill="rgba(167, 139, 250, 0.5)" />
              <rect x="32" y="138" width="110" height="4" fill="rgba(167, 139, 250, 0.5)" />
              <rect x="32" y="152" width="50" height="12" fill="#7c3aed" />

              <rect x="162" y="112" width="130" height="70" fill="rgba(245, 158, 11, 0.15)" stroke="#f59e0b" strokeWidth="1" />
              <rect x="170" y="120" width="60" height="6" fill="#f59e0b" />
              <rect x="170" y="132" width="100" height="4" fill="rgba(252, 211, 77, 0.5)" />
              <rect x="170" y="140" width="80" height="4" fill="rgba(252, 211, 77, 0.5)" />
              <rect x="170" y="148" width="110" height="4" fill="rgba(252, 211, 77, 0.5)" />
              <rect x="170" y="162" width="40" height="12" fill="#d97706" />

              <rect x="130" y="208" width="60" height="8" fill="#475569" />
              <rect x="100" y="216" width="120" height="6" fill="#64748b" />
              <rect x="80" y="222" width="160" height="4" fill="#334155" />
            </svg>

            <svg viewBox="0 0 100 180" className="w-full max-w-[100px]" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="phoneGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#334155" />
                  <stop offset="100%" stopColor="#1e293b" />
                </linearGradient>
              </defs>

              <rect x="5" y="5" width="90" height="170" fill="url(#phoneGrad)" stroke="#475569" strokeWidth="2" />
              <rect x="10" y="14" width="80" height="152" fill="#0f172a" />

              <rect x="14" y="20" width="72" height="40" fill="rgba(37, 99, 235, 0.2)" stroke="#3b82f6" strokeWidth="0.5" />
              <rect x="18" y="24" width="30" height="4" fill="#3b82f6" />
              <rect x="18" y="30" width="50" height="3" fill="rgba(147, 197, 253, 0.5)" />
              <rect x="18" y="36" width="45" height="3" fill="rgba(147, 197, 253, 0.5)" />
              <rect x="18" y="44" width="24" height="8" fill="#2563eb" />

              <rect x="14" y="66" width="72" height="35" fill="rgba(16, 185, 129, 0.2)" stroke="#10b981" strokeWidth="0.5" />
              <rect x="18" y="70" width="25" height="4" fill="#10b981" />
              <rect x="18" y="76" width="50" height="3" fill="rgba(110, 231, 183, 0.5)" />
              <rect x="18" y="82" width="40" height="3" fill="rgba(110, 231, 183, 0.5)" />
              <rect x="18" y="88" width="20" height="7" fill="#059669" />

              <rect x="14" y="108" width="72" height="35" fill="rgba(168, 85, 247, 0.2)" stroke="#8b5cf6" strokeWidth="0.5" />
              <rect x="18" y="112" width="35" height="4" fill="#8b5cf6" />
              <rect x="18" y="118" width="50" height="3" fill="rgba(167, 139, 250, 0.5)" />
              <rect x="18" y="124" width="45" height="3" fill="rgba(167, 139, 250, 0.5)" />
              <rect x="18" y="130" width="24" height="7" fill="#7c3aed" />

              <rect x="14" y="148" width="72" height="14" fill="rgba(245, 158, 11, 0.2)" stroke="#f59e0b" strokeWidth="0.5" />
              <rect x="18" y="152" width="30" height="3" fill="#f59e0b" />
            </svg>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="glass-card p-6 text-center">
            <p className="text-4xl font-bold text-blue-400 font-mono">150+</p>
            <p className="text-xs text-slate-500 mt-2 uppercase tracking-wider">Proyectos</p>
          </div>
          <div className="glass-card p-6 text-center">
            <p className="text-4xl font-bold text-blue-400 font-mono">98%</p>
            <p className="text-xs text-slate-500 mt-2 uppercase tracking-wider">Satisfacción</p>
          </div>
          <div className="glass-card p-6 text-center">
            <p className="text-4xl font-bold text-blue-400 font-mono">24h</p>
            <p className="text-xs text-slate-500 mt-2 uppercase tracking-wider">Respuesta</p>
          </div>
          <div className="glass-card p-6 text-center">
            <p className="text-4xl font-bold text-blue-400 font-mono">5+</p>
            <p className="text-xs text-slate-500 mt-2 uppercase tracking-wider">Experiencia</p>
          </div>
        </div>
      </div>
    </section>
  );
}
