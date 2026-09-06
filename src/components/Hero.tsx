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
            {/* Monitor - showing a website */}
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

                {/* Shadow */}
                <ellipse cx="320" cy="450" rx="180" ry="10" fill="rgba(0,0,0,0.3)" />

                {/* Stand */}
                <ellipse cx="320" cy="435" rx="80" ry="10" fill="url(#standBase)" />
                <rect x="310" y="390" width="20" height="48" fill="url(#standNeck)" />

                {/* Monitor body */}
                <rect x="40" y="20" width="560" height="360" rx="4" fill="url(#monitorFrame)" filter="url(#monitorShadow)" />

                {/* Bezel */}
                <rect x="40" y="20" width="560" height="6" fill="#1e293b" />
                <rect x="40" y="374" width="560" height="6" fill="#1e293b" />
                <rect x="40" y="20" width="5" height="360" fill="#1e293b" />
                <rect x="595" y="20" width="5" height="360" fill="#1e293b" />

                {/* Webcam */}
                <circle cx="320" cy="24" r="2" fill="#334155" />
                <circle cx="320" cy="24" r="1" fill="#1e293b" />

                {/* Screen - White background website */}
                <rect x="45" y="26" width="550" height="348" fill="#ffffff" />

                {/* Browser bar */}
                <rect x="45" y="26" width="550" height="28" fill="#f1f5f9" />
                <circle cx="61" cy="40" r="4" fill="#ef4444" />
                <circle cx="73" cy="40" r="4" fill="#eab308" />
                <circle cx="85" cy="40" r="4" fill="#22c55e" />
                <rect x="100" y="34" width="400" height="12" rx="3" fill="#ffffff" stroke="#e2e8f0" strokeWidth="0.5" />
                <rect x="108" y="37" width="60" height="6" rx="1" fill="#94a3b8" />
                <text x="109" y="43" fontSize="5" fill="#64748b" fontFamily="system-ui">dibweb.com</text>

                {/* Website Navigation */}
                <rect x="45" y="54" width="550" height="30" fill="#ffffff" />
                <rect x="60" y="62" width="40" height="8" rx="2" fill="#2563eb" />
                <text x="61" y="69" fontSize="6" fill="#ffffff" fontFamily="system-ui" fontWeight="bold">dibweb</text>
                <rect x="350" y="62" width="40" height="6" rx="1" fill="#64748b" />
                <text x="351" y="67" fontSize="5" fill="#64748b" fontFamily="system-ui">Servicios</text>
                <rect x="400" y="62" width="40" height="6" rx="1" fill="#64748b" />
                <text x="401" y="67" fontSize="5" fill="#64748b" fontFamily="system-ui">Portfolio</text>
                <rect x="450" y="62" width="35" height="6" rx="1" fill="#64748b" />
                <text x="451" y="67" fontSize="5" fill="#64748b" fontFamily="system-ui">Precios</text>
                <rect x="495" y="60" width="45" height="10" rx="2" fill="#2563eb" />
                <text x="500" y="67" fontSize="5" fill="#ffffff" fontFamily="system-ui">Contacto</text>

                {/* Hero section */}
                <rect x="45" y="84" width="550" height="120" fill="#f8fafc" />
                <rect x="80" y="105" width="200" height="10" rx="2" fill="#1e293b" />
                <rect x="80" y="120" width="200" height="10" rx="2" fill="#2563eb" />
                <rect x="80" y="140" width="160" height="5" rx="1" fill="#94a3b8" />
                <rect x="80" y="150" width="180" height="5" rx="1" fill="#94a3b8" />
                <rect x="80" y="165" width="60" height="12" rx="2" fill="#2563eb" />
                <text x="87" y="174" fontSize="5" fill="#ffffff" fontFamily="system-ui">Cotizar</text>
                <rect x="150" y="165" width="60" height="12" rx="2" fill="none" stroke="#2563eb" strokeWidth="0.8" />
                <text x="155" y="174" fontSize="5" fill="#2563eb" fontFamily="system-ui">Ver más</text>

                {/* Hero image placeholder */}
                <rect x="340" y="100" width="220" height="90" rx="6" fill="#e0e7ff" />
                <rect x="360" y="115" width="80" height="6" rx="1" fill="#818cf8" />
                <rect x="360" y="128" width="120" height="4" rx="1" fill="#a5b4fc" />
                <rect x="360" y="138" width="100" height="4" rx="1" fill="#a5b4fc" />
                <rect x="360" y="152" width="50" height="10" rx="2" fill="#6366f1" />

                {/* Services section */}
                <rect x="45" y="204" width="550" height="80" fill="#ffffff" />
                <rect x="80" y="214" width="80" height="6" rx="1" fill="#1e293b" />
                <text x="81" y="219" fontSize="5" fill="#1e293b" fontFamily="system-ui" fontWeight="bold">Nuestros servicios</text>

                {/* Service cards */}
                <rect x="80" y="228" width="110" height="48" rx="4" fill="#f1f5f9" />
                <rect x="90" y="236" width="20" height="10" rx="2" fill="#dbeafe" />
                <rect x="90" y="238" width="12" height="6" rx="1" fill="#3b82f6" />
                <rect x="115" y="236" width="60" height="4" rx="1" fill="#334155" />
                <rect x="115" y="244" width="50" height="3" rx="1" fill="#94a3b8" />
                <rect x="90" y="258" width="90" height="3" rx="1" fill="#e2e8f0" />
                <rect x="90" y="264" width="75" height="3" rx="1" fill="#e2e8f0" />

                <rect x="200" y="228" width="110" height="48" rx="4" fill="#f1f5f9" />
                <rect x="210" y="236" width="20" height="10" rx="2" fill="#dcfce7" />
                <rect x="210" y="238" width="12" height="6" rx="1" fill="#22c55e" />
                <rect x="235" y="236" width="60" height="4" rx="1" fill="#334155" />
                <rect x="235" y="244" width="50" height="3" rx="1" fill="#94a3b8" />
                <rect x="210" y="258" width="90" height="3" rx="1" fill="#e2e8f0" />
                <rect x="210" y="264" width="75" height="3" rx="1" fill="#e2e8f0" />

                <rect x="320" y="228" width="110" height="48" rx="4" fill="#f1f5f9" />
                <rect x="330" y="236" width="20" height="10" rx="2" fill="#fef3c7" />
                <rect x="330" y="238" width="12" height="6" rx="1" fill="#f59e0b" />
                <rect x="355" y="236" width="60" height="4" rx="1" fill="#334155" />
                <rect x="355" y="244" width="50" height="3" rx="1" fill="#94a3b8" />
                <rect x="330" y="258" width="90" height="3" rx="1" fill="#e2e8f0" />
                <rect x="330" y="264" width="75" height="3" rx="1" fill="#e2e8f0" />

                <rect x="440" y="228" width="110" height="48" rx="4" fill="#f1f5f9" />
                <rect x="450" y="236" width="20" height="10" rx="2" fill="#fce7f3" />
                <rect x="450" y="238" width="12" height="6" rx="1" fill="#ec4899" />
                <rect x="475" y="236" width="60" height="4" rx="1" fill="#334155" />
                <rect x="475" y="244" width="50" height="3" rx="1" fill="#94a3b8" />
                <rect x="450" y="258" width="90" height="3" rx="1" fill="#e2e8f0" />
                <rect x="450" y="264" width="75" height="3" rx="1" fill="#e2e8f0" />

                {/* Portfolio section */}
                <rect x="45" y="284" width="550" height="60" fill="#f8fafc" />
                <rect x="80" y="294" width="80" height="6" rx="1" fill="#1e293b" />
                <text x="81" y="299" fontSize="5" fill="#1e293b" fontFamily="system-ui" fontWeight="bold">Proyectos recientes</text>

                <rect x="80" y="306" width="80" height="30" rx="3" fill="#e0e7ff" />
                <rect x="170" y="306" width="80" height="30" rx="3" fill="#dcfce7" />
                <rect x="260" y="306" width="80" height="30" rx="3" fill="#fef3c7" />
                <rect x="350" y="306" width="80" height="30" rx="3" fill="#fce7f3" />
                <rect x="440" y="306" width="80" height="30" rx="3" fill="#f1f5f9" />

                {/* Footer */}
                <rect x="45" y="344" width="550" height="30" fill="#1e293b" />
                <rect x="80" y="354" width="40" height="6" rx="1" fill="#475569" />
                <rect x="80" y="362" width="60" height="4" rx="1" fill="#334155" />

                {/* Logo text */}
                <text x="320" y="380" textAnchor="middle" fill="#475569" fontSize="8" fontFamily="system-ui" fontWeight="300">dibweb.com</text>
              </svg>
            </div>

            {/* Phone - showing a mobile website */}
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

                {/* Shadow */}
                <ellipse cx="100" cy="405" rx="55" ry="7" fill="rgba(0,0,0,0.3)" />

                {/* Phone body */}
                <rect x="10" y="10" width="180" height="400" rx="26" fill="url(#phoneFrame)" filter="url(#phoneShadow)" />

                {/* Side buttons */}
                <rect x="4" y="90" width="3" height="18" rx="1" fill="#94a3b8" />
                <rect x="4" y="116" width="3" height="28" rx="1" fill="#94a3b8" />
                <rect x="4" y="150" width="3" height="28" rx="1" fill="#94a3b8" />
                <rect x="193" y="125" width="3" height="35" rx="1" fill="#94a3b8" />

                {/* Screen */}
                <rect x="16" y="16" width="168" height="388" rx="20" fill="#ffffff" />

                {/* Dynamic Island */}
                <rect x="60" y="22" width="80" height="22" rx="11" fill="#000" />
                <circle cx="116" cy="33" r="4" fill="#1e293b" />
                <circle cx="116" cy="33" r="2.5" fill="#0f172a" />

                {/* Status bar */}
                <text x="28" y="30" fill="#1e293b" fontSize="9" fontFamily="system-ui" fontWeight="600">9:41</text>
                <rect x="148" y="24" width="14" height="7" rx="2" fill="none" stroke="#1e293b" strokeWidth="1" />
                <rect x="150" y="26" width="8" height="3" rx="1" fill="#22c55e" />

                {/* Mobile Navigation */}
                <rect x="16" y="48" width="168" height="28" fill="#ffffff" />
                <rect x="26" y="55" width="30" height="7" rx="2" fill="#2563eb" />
                <text x="27" y="61" fontSize="5" fill="#ffffff" fontFamily="system-ui" fontWeight="bold">dib</text>
                {/* Hamburger menu */}
                <rect x="164" y="55" width="12" height="2" rx="1" fill="#1e293b" />
                <rect x="164" y="59" width="12" height="2" rx="1" fill="#1e293b" />
                <rect x="164" y="63" width="12" height="2" rx="1" fill="#1e293b" />

                {/* Mobile Hero */}
                <rect x="16" y="76" width="168" height="100" fill="#f8fafc" />
                <rect x="26" y="88" width="80" height="7" rx="1" fill="#1e293b" />
                <rect x="26" y="98" width="80" height="7" rx="1" fill="#2563eb" />
                <rect x="26" y="112" width="120" height="4" rx="1" fill="#94a3b8" />
                <rect x="26" y="120" width="100" height="4" rx="1" fill="#94a3b8" />
                <rect x="26" y="128" width="110" height="4" rx="1" fill="#94a3b8" />
                <rect x="26" y="140" width="50" height="10" rx="2" fill="#2563eb" />
                <text x="30" y="147" fontSize="4" fill="#ffffff" fontFamily="system-ui">Cotizar</text>
                <rect x="82" y="140" width="50" height="10" rx="2" fill="none" stroke="#2563eb" strokeWidth="0.8" />
                <text x="86" y="147" fontSize="4" fill="#2563eb" fontFamily="system-ui">Ver más</text>

                {/* Mobile Services */}
                <rect x="16" y="180" width="168" height="100" fill="#ffffff" />
                <rect x="26" y="190" width="70" height="5" rx="1" fill="#1e293b" />
                <text x="27" y="195" fontSize="5" fill="#1e293b" fontFamily="system-ui" fontWeight="bold">Servicios</text>

                <rect x="26" y="200" width="74" height="32" rx="3" fill="#f1f5f9" />
                <rect x="32" y="206" width="14" height="7" rx="2" fill="#dbeafe" />
                <rect x="32" y="208" width="8" height="4" rx="1" fill="#3b82f6" />
                <rect x="50" y="206" width="40" height="3" rx="1" fill="#334155" />
                <rect x="50" y="212" width="35" height="2" rx="1" fill="#94a3b8" />
                <rect x="32" y="222" width="60" height="2" rx="1" fill="#e2e8f0" />
                <rect x="32" y="226" width="50" height="2" rx="1" fill="#e2e8f0" />

                <rect x="108" y="200" width="74" height="32" rx="3" fill="#f1f5f9" />
                <rect x="114" y="206" width="14" height="7" rx="2" fill="#dcfce7" />
                <rect x="114" y="208" width="8" height="4" rx="1" fill="#22c55e" />
                <rect x="132" y="206" width="40" height="3" rx="1" fill="#334155" />
                <rect x="132" y="212" width="35" height="2" rx="1" fill="#94a3b8" />
                <rect x="114" y="222" width="60" height="2" rx="1" fill="#e2e8f0" />
                <rect x="114" y="226" width="50" height="2" rx="1" fill="#e2e8f0" />

                <rect x="26" y="240" width="74" height="32" rx="3" fill="#f1f5f9" />
                <rect x="32" y="246" width="14" height="7" rx="2" fill="#fef3c7" />
                <rect x="32" y="248" width="8" height="4" rx="1" fill="#f59e0b" />
                <rect x="50" y="246" width="40" height="3" rx="1" fill="#334155" />
                <rect x="50" y="252" width="35" height="2" rx="1" fill="#94a3b8" />
                <rect x="32" y="262" width="60" height="2" rx="1" fill="#e2e8f0" />
                <rect x="32" y="266" width="50" height="2" rx="1" fill="#e2e8f0" />

                <rect x="108" y="240" width="74" height="32" rx="3" fill="#f1f5f9" />
                <rect x="114" y="246" width="14" height="7" rx="2" fill="#fce7f3" />
                <rect x="114" y="248" width="8" height="4" rx="1" fill="#ec4899" />
                <rect x="132" y="246" width="40" height="3" rx="1" fill="#334155" />
                <rect x="132" y="252" width="35" height="2" rx="1" fill="#94a3b8" />
                <rect x="114" y="262" width="60" height="2" rx="1" fill="#e2e8f0" />
                <rect x="114" y="266" width="50" height="2" rx="1" fill="#e2e8f0" />

                {/* Mobile CTA */}
                <rect x="16" y="286" width="168" height="40" fill="#2563eb" />
                <rect x="36" y="296" width="100" height="6" rx="1" fill="#ffffff" />
                <text x="37" y="301" fontSize="5" fill="#ffffff" fontFamily="system-ui">Solicita tu cotización</text>
                <rect x="36" y="308" width="80" height="4" rx="1" fill="#93c5fd" />

                {/* Mobile Footer */}
                <rect x="16" y="332" width="168" height="40" fill="#1e293b" />
                <rect x="26" y="342" width="30" height="5" rx="1" fill="#475569" />
                <rect x="26" y="350" width="50" height="3" rx="1" fill="#334155" />
                <rect x="26" y="356" width="40" height="3" rx="1" fill="#334155" />

                {/* Bottom nav */}
                <rect x="16" y="378" width="168" height="26" fill="#ffffff" stroke="#e2e8f0" strokeWidth="0.5" />
                <rect x="30" y="383" width="16" height="10" rx="2" fill="#dbeafe" />
                <rect x="30" y="385" width="10" height="6" rx="1" fill="#3b82f6" />
                <rect x="62" y="385" width="16" height="6" rx="2" fill="#f1f5f9" />
                <rect x="94" y="385" width="16" height="6" rx="2" fill="#f1f5f9" />
                <rect x="126" y="385" width="16" height="6" rx="2" fill="#f1f5f9" />
                <rect x="154" y="385" width="16" height="6" rx="2" fill="#f1f5f9" />

                {/* Home indicator */}
                <rect x="68" y="400" width="64" height="3" rx="1.5" fill="#1e293b" />
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
