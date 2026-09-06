"use client";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#0f172a]">
      <div className="absolute inset-0 bg-gradient-to-b from-[#1e293b] to-[#0f172a]" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-slate-800 border border-slate-700 px-4 py-1.5 rounded mb-8">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-xs text-slate-400 font-medium">Disponibilidad abierta</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white">
              Creamos tu presencia
              <br />
              <span className="text-blue-400">digital</span>
            </h1>

            <p className="mt-6 text-lg text-slate-400 max-w-xl leading-relaxed">
              Diseñamos y desarrollamos páginas web modernas, rápidas y optimizadas
              para convertir visitantes en clientes.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a href="#contacto" className="btn-primary px-8 py-4 rounded-lg text-sm font-semibold text-center">
                Solicitar cotización
              </a>
              <a href="#portfolio" className="btn-secondary px-8 py-4 rounded-lg text-sm font-semibold text-center">
                Ver trabajos
              </a>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end items-end gap-4 lg:gap-6">
            {/* Monitor - bigger */}
            <div className="group relative">
              <svg viewBox="0 0 640 480" className="w-full max-w-2xl transition-transform duration-500 group-hover:scale-[1.02]" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="monitorFrame" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#1e293b" />
                    <stop offset="50%" stopColor="#0f172a" />
                    <stop offset="100%" stopColor="#1e293b" />
                  </linearGradient>
                  <linearGradient id="standNeck" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#475569" />
                    <stop offset="50%" stopColor="#94a3b8" />
                    <stop offset="100%" stopColor="#475569" />
                  </linearGradient>
                  <linearGradient id="standBase" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#64748b" />
                    <stop offset="100%" stopColor="#334155" />
                  </linearGradient>
                  <filter id="monitorShadow">
                    <feDropShadow dx="0" dy="10" stdDeviation="15" floodColor="#000" floodOpacity="0.5"/>
                  </filter>
                </defs>

                <ellipse cx="320" cy="450" rx="180" ry="10" fill="rgba(0,0,0,0.3)" />
                <ellipse cx="320" cy="435" rx="80" ry="10" fill="url(#standBase)" />
                <rect x="310" y="390" width="20" height="48" fill="url(#standNeck)" />

                <rect x="40" y="20" width="560" height="360" rx="4" fill="url(#monitorFrame)" filter="url(#monitorShadow)" />
                <rect x="40" y="20" width="560" height="6" fill="#1e293b" />
                <rect x="40" y="374" width="560" height="6" fill="#1e293b" />
                <rect x="40" y="20" width="5" height="360" fill="#1e293b" />
                <rect x="595" y="20" width="5" height="360" fill="#1e293b" />
                <circle cx="320" cy="24" r="2" fill="#334155" />
                <circle cx="320" cy="24" r="1" fill="#1e293b" />

                <rect x="45" y="26" width="550" height="348" fill="#0f172a" />
                <rect x="45" y="26" width="550" height="28" fill="#1e293b" />
                <circle cx="61" cy="40" r="4" fill="#ef4444" />
                <circle cx="73" cy="40" r="4" fill="#eab308" />
                <circle cx="85" cy="40" r="4" fill="#22c55e" />
                <rect x="100" y="34" width="400" height="12" rx="3" fill="#0f172a" />
                <rect x="108" y="37" width="80" height="6" rx="1" fill="#334155" />

                <rect x="45" y="54" width="550" height="24" fill="#1e293b" />
                <rect x="56" y="58" width="50" height="8" rx="2" fill="#3b82f6" />
                <rect x="116" y="59" width="60" height="6" rx="1" fill="#334155" />

                <rect x="45" y="78" width="100" height="296" fill="#0f172a" />
                <rect x="56" y="88" width="70" height="6" rx="1" fill="#1e3a5f" />
                <rect x="56" y="102" width="60" height="5" rx="1" fill="#1e293b" />
                <rect x="56" y="114" width="65" height="5" rx="1" fill="#1e293b" />
                <rect x="56" y="126" width="55" height="5" rx="1" fill="#2563eb" />
                <rect x="56" y="138" width="62" height="5" rx="1" fill="#1e293b" />
                <rect x="56" y="150" width="58" height="5" rx="1" fill="#1e293b" />

                <rect x="153" y="88" width="150" height="70" rx="4" fill="#1e293b" />
                <rect x="165" y="98" width="40" height="6" rx="1" fill="#3b82f6" />
                <rect x="165" y="112" width="100" height="4" rx="1" fill="#334155" />
                <rect x="165" y="122" width="80" height="4" rx="1" fill="#334155" />
                <rect x="165" y="138" width="50" height="12" rx="3" fill="#2563eb" />

                <rect x="311" y="88" width="150" height="70" rx="4" fill="#1e293b" />
                <rect x="323" y="98" width="40" height="6" rx="1" fill="#10b981" />
                <rect x="323" y="112" width="100" height="4" rx="1" fill="#334155" />
                <rect x="323" y="122" width="80" height="4" rx="1" fill="#334155" />
                <rect x="323" y="138" width="50" height="12" rx="3" fill="#10b981" />

                <rect x="469" y="88" width="126" height="70" rx="4" fill="#1e293b" />
                <rect x="481" y="98" width="40" height="6" rx="1" fill="#8b5cf6" />
                <rect x="481" y="112" width="80" height="4" rx="1" fill="#334155" />
                <rect x="481" y="122" width="70" height="4" rx="1" fill="#334155" />
                <rect x="481" y="138" width="50" height="12" rx="3" fill="#8b5cf6" />

                <rect x="153" y="166" width="300" height="208" rx="4" fill="#1e293b" />
                <rect x="165" y="178" width="60" height="6" rx="1" fill="#f0f6fc" />
                <rect x="170" y="320" width="20" height="44" fill="#1e3a5f" />
                <rect x="198" y="300" width="20" height="64" fill="#2563eb" />
                <rect x="226" y="280" width="20" height="84" fill="#3b82f6" />
                <rect x="254" y="310" width="20" height="54" fill="#2563eb" />
                <rect x="282" y="290" width="20" height="74" fill="#3b82f6" />
                <rect x="310" y="270" width="20" height="94" fill="#60a5fa" />
                <rect x="338" y="305" width="20" height="59" fill="#2563eb" />
                <rect x="366" y="285" width="20" height="79" fill="#3b82f6" />
                <rect x="394" y="295" width="20" height="69" fill="#2563eb" />
                <rect x="422" y="325" width="20" height="39" fill="#1e3a5f" />

                <rect x="461" y="166" width="134" height="208" rx="4" fill="#1e293b" />
                <rect x="473" y="178" width="50" height="6" rx="1" fill="#f0f6fc" />
                <rect x="473" y="196" width="110" height="5" rx="1" fill="#1e293b" />
                <rect x="473" y="210" width="90" height="5" rx="1" fill="#1e293b" />
                <rect x="473" y="224" width="105" height="5" rx="1" fill="#1e293b" />
                <rect x="473" y="244" width="100" height="5" rx="1" fill="#1e293b" />
                <rect x="473" y="258" width="85" height="5" rx="1" fill="#1e293b" />
                <rect x="473" y="272" width="95" height="5" rx="1" fill="#1e293b" />
                <rect x="473" y="292" width="100" height="5" rx="1" fill="#1e293b" />
                <rect x="473" y="306" width="80" height="5" rx="1" fill="#1e293b" />

                <text x="320" y="380" textAnchor="middle" fill="#475569" fontSize="9" fontFamily="system-ui" fontWeight="300">dibweb</text>
              </svg>
            </div>

            {/* Phone - smaller */}
            <div className="group relative -ml-8 lg:-ml-16">
              <svg viewBox="0 0 200 420" className="w-full max-w-[140px] transition-transform duration-500 group-hover:scale-[1.03] group-hover:-translate-y-1" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="phoneFrame" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#334155" />
                    <stop offset="50%" stopColor="#64748b" />
                    <stop offset="100%" stopColor="#334155" />
                  </linearGradient>
                  <filter id="phoneShadow">
                    <feDropShadow dx="0" dy="8" stdDeviation="10" floodColor="#000" floodOpacity="0.5"/>
                  </filter>
                </defs>

                <ellipse cx="100" cy="405" rx="55" ry="7" fill="rgba(0,0,0,0.3)" />
                <rect x="10" y="10" width="180" height="400" rx="26" fill="url(#phoneFrame)" filter="url(#phoneShadow)" />
                <rect x="4" y="90" width="3" height="18" rx="1" fill="#94a3b8" />
                <rect x="4" y="116" width="3" height="28" rx="1" fill="#94a3b8" />
                <rect x="4" y="150" width="3" height="28" rx="1" fill="#94a3b8" />
                <rect x="193" y="125" width="3" height="35" rx="1" fill="#94a3b8" />
                <rect x="16" y="16" width="168" height="388" rx="20" fill="#0f172a" />
                <rect x="60" y="22" width="80" height="22" rx="11" fill="#000" />
                <circle cx="116" cy="33" r="4" fill="#1e293b" />
                <circle cx="116" cy="33" r="2.5" fill="#0f172a" />
                <text x="28" y="30" fill="#94a3b8" fontSize="9" fontFamily="system-ui" fontWeight="600">9:41</text>
                <rect x="148" y="24" width="14" height="7" rx="2" fill="none" stroke="#94a3b8" strokeWidth="1" />
                <rect x="150" y="26" width="8" height="3" rx="1" fill="#22c55e" />
                <rect x="16" y="48" width="168" height="36" fill="#1e293b" />
                <rect x="26" y="55" width="60" height="8" rx="2" fill="#3b82f6" />
                <rect x="26" y="67" width="90" height="5" rx="1" fill="#334155" />
                <rect x="16" y="88" width="168" height="80" fill="#1e293b" />
                <rect x="26" y="98" width="70" height="8" rx="2" fill="#1e3a5f" />
                <rect x="26" y="114" width="130" height="4" rx="1" fill="#334155" />
                <rect x="26" y="122" width="110" height="4" rx="1" fill="#334155" />
                <rect x="26" y="130" width="140" height="4" rx="1" fill="#334155" />
                <rect x="26" y="144" width="50" height="14" rx="3" fill="#2563eb" />
                <rect x="16" y="176" width="78" height="60" rx="4" fill="#1e293b" />
                <rect x="26" y="186" width="24" height="4" rx="1" fill="#3b82f6" />
                <rect x="26" y="196" width="56" height="3" rx="1" fill="#334155" />
                <rect x="26" y="204" width="46" height="3" rx="1" fill="#334155" />
                <rect x="26" y="216" width="36" height="8" rx="2" fill="#2563eb" />
                <rect x="106" y="176" width="78" height="60" rx="4" fill="#1e293b" />
                <rect x="116" y="186" width="24" height="4" rx="1" fill="#10b981" />
                <rect x="116" y="196" width="56" height="3" rx="1" fill="#334155" />
                <rect x="116" y="204" width="46" height="3" rx="1" fill="#334155" />
                <rect x="116" y="216" width="36" height="8" rx="2" fill="#10b981" />
                <rect x="16" y="244" width="168" height="32" rx="4" fill="#1e293b" />
                <circle cx="34" cy="260" r="8" fill="#334155" />
                <rect x="48" y="254" width="80" height="4" rx="1" fill="#475569" />
                <rect x="48" y="262" width="60" height="3" rx="1" fill="#334155" />
                <rect x="16" y="282" width="168" height="32" rx="4" fill="#1e293b" />
                <circle cx="34" cy="298" r="8" fill="#334155" />
                <rect x="48" y="292" width="80" height="4" rx="1" fill="#475569" />
                <rect x="48" y="300" width="60" height="3" rx="1" fill="#334155" />
                <rect x="16" y="360" width="168" height="28" fill="#1e293b" />
                <rect x="34" y="366" width="18" height="12" rx="3" fill="#2563eb" />
                <rect x="62" y="368" width="18" height="8" rx="2" fill="#334155" />
                <rect x="90" y="368" width="18" height="8" rx="2" fill="#334155" />
                <rect x="118" y="368" width="18" height="8" rx="2" fill="#334155" />
                <rect x="146" y="368" width="18" height="8" rx="2" fill="#334155" />
                <rect x="68" y="396" width="64" height="4" rx="2" fill="#334155" />
              </svg>
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="glass-card rounded-lg p-6 text-center">
            <p className="text-3xl font-bold text-blue-400">150+</p>
            <p className="text-xs text-slate-500 mt-2">Proyectos</p>
          </div>
          <div className="glass-card rounded-lg p-6 text-center">
            <p className="text-3xl font-bold text-blue-400">98%</p>
            <p className="text-xs text-slate-500 mt-2">Satisfacción</p>
          </div>
          <div className="glass-card rounded-lg p-6 text-center">
            <p className="text-3xl font-bold text-blue-400">24h</p>
            <p className="text-xs text-slate-500 mt-2">Respuesta</p>
          </div>
          <div className="glass-card rounded-lg p-6 text-center">
            <p className="text-3xl font-bold text-blue-400">5+</p>
            <p className="text-xs text-slate-500 mt-2">Experiencia</p>
          </div>
        </div>
      </div>
    </section>
  );
}
