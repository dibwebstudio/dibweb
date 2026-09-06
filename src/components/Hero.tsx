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

          <div className="relative flex justify-center lg:justify-end items-end gap-6">
            {/* Monitor */}
            <svg viewBox="0 0 520 380" className="w-full max-w-lg" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="monitorBody" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#1a1a2e" />
                  <stop offset="50%" stopColor="#0f0f1a" />
                  <stop offset="100%" stopColor="#0a0a12" />
                </linearGradient>
                <linearGradient id="monitorScreen" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#111827" />
                  <stop offset="100%" stopColor="#030712" />
                </linearGradient>
                <linearGradient id="standMetal" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#374151" />
                  <stop offset="30%" stopColor="#6b7280" />
                  <stop offset="50%" stopColor="#9ca3af" />
                  <stop offset="70%" stopColor="#6b7280" />
                  <stop offset="100%" stopColor="#374151" />
                </linearGradient>
                <linearGradient id="screenGlow" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="rgba(59, 130, 246, 0.03)" />
                  <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
                </linearGradient>
                <filter id="monitorShadow" x="-10%" y="-10%" width="130%" height="130%">
                  <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#000" floodOpacity="0.5"/>
                </filter>
              </defs>

              {/* Monitor shadow */}
              <ellipse cx="260" cy="360" rx="180" ry="10" fill="rgba(0,0,0,0.3)" />

              {/* Stand base */}
              <path d="M180 345 L340 345 L320 355 L200 355 Z" fill="url(#standMetal)" />
              <rect x="200" y="355" width="120" height="4" rx="1" fill="#4b5563" />

              {/* Stand neck */}
              <rect x="248" y="310" width="24" height="40" fill="url(#standMetal)" />
              <rect x="248" y="310" width="24" height="40" fill="rgba(255,255,255,0.05)" />

              {/* Monitor body */}
              <rect x="30" y="20" width="460" height="290" rx="4" fill="url(#monitorBody)" filter="url(#monitorShadow)" />
              
              {/* Monitor bezel - top */}
              <rect x="30" y="20" width="460" height="12" rx="4" fill="#1f2937" />
              {/* Monitor bezel - bottom */}
              <rect x="30" y="298" width="460" height="12" fill="#1f2937" />
              {/* Monitor bezel - left */}
              <rect x="30" y="20" width="8" height="290" fill="#1f2937" />
              {/* Monitor bezel - right */}
              <rect x="482" y="20" width="8" height="290" fill="#1f2937" />

              {/* Webcam dot */}
              <circle cx="260" cy="26" r="2.5" fill="#0f172a" />
              <circle cx="260" cy="26" r="1" fill="#1e3a5f" />

              {/* Screen */}
              <rect x="38" y="32" width="444" height="266" fill="url(#monitorScreen)" />

              {/* Screen reflection */}
              <rect x="38" y="32" width="444" height="266" fill="url(#screenGlow)" />

              {/* Browser chrome */}
              <rect x="38" y="32" width="444" height="28" fill="#1f2937" />
              <circle cx="54" cy="46" r="4" fill="#ef4444" />
              <circle cx="68" cy="46" r="4" fill="#eab308" />
              <circle cx="82" cy="46" r="4" fill="#22c55e" />
              <rect x="100" y="40" width="320" height="12" rx="3" fill="#111827" />
              <rect x="106" y="43" width="80" height="6" rx="1" fill="#374151" />

              {/* Dashboard UI - Header */}
              <rect x="38" y="60" width="444" height="20" fill="#0f172a" />
              <rect x="48" y="65" width="40" height="10" rx="2" fill="#2563eb" />
              <rect x="100" y="67" width="60" height="6" rx="1" fill="#374151" />
              <rect x="380" y="65" width="80" height="10" rx="2" fill="#1f2937" />

              {/* Sidebar */}
              <rect x="38" y="80" width="80" height="218" fill="#0a0f1a" />
              <rect x="46" y="88" width="64" height="8" rx="1" fill="#1e3a5f" />
              <rect x="46" y="102" width="50" height="6" rx="1" fill="#1f2937" />
              <rect x="46" y="114" width="55" height="6" rx="1" fill="#1f2937" />
              <rect x="46" y="126" width="45" height="6" rx="1" fill="#2563eb" />
              <rect x="46" y="138" width="58" height="6" rx="1" fill="#1f2937" />
              <rect x="46" y="150" width="52" height="6" rx="1" fill="#1f2937" />
              <rect x="46" y="162" width="60" height="6" rx="1" fill="#1f2937" />

              {/* Main content - cards */}
              <rect x="126" y="88" width="110" height="65" rx="4" fill="#111827" stroke="#1f2937" strokeWidth="1" />
              <rect x="134" y="96" width="30" height="4" rx="1" fill="#3b82f6" />
              <rect x="134" y="104" width="70" height="3" rx="1" fill="#374151" />
              <rect x="134" y="111" width="55" height="3" rx="1" fill="#374151" />
              <rect x="134" y="118" width="80" height="3" rx="1" fill="#374151" />
              <rect x="134" y="130" width="40" height="10" rx="2" fill="#2563eb" />

              <rect x="244" y="88" width="110" height="65" rx="4" fill="#111827" stroke="#1f2937" strokeWidth="1" />
              <rect x="252" y="96" width="30" height="4" rx="1" fill="#10b981" />
              <rect x="252" y="104" width="70" height="3" rx="1" fill="#374151" />
              <rect x="252" y="111" width="55" height="3" rx="1" fill="#374151" />
              <rect x="252" y="118" width="80" height="3" rx="1" fill="#374151" />
              <rect x="252" y="130" width="40" height="10" rx="2" fill="#10b981" />

              <rect x="362" y="88" width="110" height="65" rx="4" fill="#111827" stroke="#1f2937" strokeWidth="1" />
              <rect x="370" y="96" width="30" height="4" rx="1" fill="#8b5cf6" />
              <rect x="370" y="104" width="70" height="3" rx="1" fill="#374151" />
              <rect x="370" y="111" width="55" height="3" rx="1" fill="#374151" />
              <rect x="370" y="118" width="80" height="3" rx="1" fill="#374151" />
              <rect x="370" y="130" width="40" height="10" rx="2" fill="#8b5cf6" />

              {/* Chart area */}
              <rect x="126" y="160" width="228" height="138" rx="4" fill="#111827" stroke="#1f2937" strokeWidth="1" />
              <rect x="134" y="168" width="50" height="6" rx="1" fill="#3b82f6" />
              {/* Chart bars */}
              <rect x="140" y="240" width="16" height="48" fill="#1e3a5f" />
              <rect x="162" y="220" width="16" height="68" fill="#2563eb" />
              <rect x="184" y="200" width="16" height="88" fill="#3b82f6" />
              <rect x="206" y="230" width="16" height="58" fill="#2563eb" />
              <rect x="228" y="210" width="16" height="78" fill="#3b82f6" />
              <rect x="250" y="190" width="16" height="98" fill="#60a5fa" />
              <rect x="272" y="225" width="16" height="63" fill="#2563eb" />
              <rect x="294" y="205" width="16" height="83" fill="#3b82f6" />
              <rect x="316" y="215" width="16" height="73" fill="#2563eb" />
              <rect x="338" y="245" width="16" height="43" fill="#1e3a5f" />

              {/* Activity list */}
              <rect x="362" y="160" width="110" height="138" rx="4" fill="#111827" stroke="#1f2937" strokeWidth="1" />
              <rect x="370" y="168" width="40" height="6" rx="1" fill="#f59e0b" />
              <rect x="370" y="182" width="90" height="5" rx="1" fill="#1f2937" />
              <rect x="370" y="193" width="80" height="5" rx="1" fill="#1f2937" />
              <rect x="370" y="204" width="95" height="5" rx="1" fill="#1f2937" />
              <rect x="370" y="220" width="90" height="5" rx="1" fill="#1f2937" />
              <rect x="370" y="231" width="75" height="5" rx="1" fill="#1f2937" />
              <rect x="370" y="242" width="85" height="5" rx="1" fill="#1f2937" />
              <rect x="370" y="258" width="90" height="5" rx="1" fill="#1f2937" />
              <rect x="370" y="269" width="70" height="5" rx="1" fill="#1f2937" />

              {/* Apple-like logo on chin */}
              <text x="260" y="306" textAnchor="middle" fill="#374151" fontSize="8" fontFamily="system-ui" fontWeight="300">dibweb</text>
            </svg>

            {/* Phone */}
            <svg viewBox="0 0 180 370" className="w-full max-w-[160px]" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="phoneBody" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#1f2937" />
                  <stop offset="15%" stopColor="#374151" />
                  <stop offset="50%" stopColor="#4b5563" />
                  <stop offset="85%" stopColor="#374151" />
                  <stop offset="100%" stopColor="#1f2937" />
                </linearGradient>
                <linearGradient id="phoneScreen" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#111827" />
                  <stop offset="100%" stopColor="#030712" />
                </linearGradient>
                <filter id="phoneShadow" x="-10%" y="-5%" width="130%" height="115%">
                  <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#000" floodOpacity="0.5"/>
                </filter>
              </defs>

              {/* Phone shadow */}
              <ellipse cx="90" cy="355" rx="50" ry="6" fill="rgba(0,0,0,0.3)" />

              {/* Phone body */}
              <rect x="10" y="10" width="160" height="340" rx="24" fill="url(#phoneBody)" filter="url(#phoneShadow)" />

              {/* Side buttons */}
              <rect x="4" y="80" width="4" height="25" rx="1" fill="#6b7280" />
              <rect x="4" y="115" width="4" height="40" rx="1" fill="#6b7280" />
              <rect x="172" y="100" width="4" height="35" rx="1" fill="#6b7280" />

              {/* Screen */}
              <rect x="16" y="18" width="148" height="324" rx="18" fill="url(#phoneScreen)" />

              {/* Dynamic Island */}
              <rect x="58" y="24" width="64" height="18" rx="10" fill="#000" />
              <circle cx="96" cy="33" r="3" fill="#1f2937" />
              <circle cx="96" cy="33" r="1.5" fill="#0f172a" />

              {/* Status bar */}
              <text x="28" y="32" fill="#9ca3af" fontSize="8" fontFamily="system-ui" fontWeight="600">9:41</text>
              <rect x="130" y="26" width="16" height="8" rx="2" fill="none" stroke="#9ca3af" strokeWidth="1" />
              <rect x="132" y="28" width="10" height="4" rx="1" fill="#22c55e" />

              {/* App header */}
              <rect x="16" y="50" width="148" height="40" fill="#0f172a" />
              <rect x="24" y="58" width="60" height="8" rx="2" fill="#2563eb" />
              <rect x="24" y="70" width="90" height="5" rx="1" fill="#374151" />

              {/* Hero image placeholder */}
              <rect x="16" y="90" width="148" height="80" fill="#111827" />
              <rect x="24" y="98" width="70" height="8" rx="2" fill="#1e3a5f" />
              <rect x="24" y="112" width="120" height="4" rx="1" fill="#1f2937" />
              <rect x="24" y="120" width="100" height="4" rx="1" fill="#1f2937" />
              <rect x="24" y="128" width="130" height="4" rx="1" fill="#1f2937" />
              <rect x="24" y="142" width="50" height="14" rx="3" fill="#2563eb" />

              {/* Content cards */}
              <rect x="16" y="178" width="70" height="60" rx="4" fill="#111827" stroke="#1f2937" strokeWidth="1" />
              <rect x="22" y="186" width="20" height="4" rx="1" fill="#3b82f6" />
              <rect x="22" y="194" width="50" height="3" rx="1" fill="#1f2937" />
              <rect x="22" y="201" width="40" height="3" rx="1" fill="#1f2937" />
              <rect x="22" y="210" width="30" height="8" rx="2" fill="#2563eb" />

              <rect x="94" y="178" width="70" height="60" rx="4" fill="#111827" stroke="#1f2937" strokeWidth="1" />
              <rect x="100" y="186" width="20" height="4" rx="1" fill="#10b981" />
              <rect x="100" y="194" width="50" height="3" rx="1" fill="#1f2937" />
              <rect x="100" y="201" width="40" height="3" rx="1" fill="#1f2937" />
              <rect x="100" y="210" width="30" height="8" rx="2" fill="#10b981" />

              {/* List items */}
              <rect x="16" y="246" width="148" height="30" rx="4" fill="#111827" stroke="#1f2937" strokeWidth="1" />
              <circle cx="34" cy="261" r="8" fill="#1f2937" />
              <rect x="48" y="254" width="80" height="5" rx="1" fill="#374151" />
              <rect x="48" y="263" width="60" height="3" rx="1" fill="#1f2937" />

              <rect x="16" y="282" width="148" height="30" rx="4" fill="#111827" stroke="#1f2937" strokeWidth="1" />
              <circle cx="34" cy="297" r="8" fill="#1f2937" />
              <rect x="48" y="290" width="80" height="5" rx="1" fill="#374151" />
              <rect x="48" y="299" width="60" height="3" rx="1" fill="#1f2937" />

              {/* Bottom nav */}
              <rect x="16" y="318" width="148" height="24" fill="#0a0f1a" />
              <rect x="30" y="324" width="16" height="12" rx="2" fill="#2563eb" />
              <rect x="60" y="326" width="16" height="8" rx="1" fill="#374151" />
              <rect x="90" y="326" width="16" height="8" rx="1" fill="#374151" />
              <rect x="120" y="326" width="16" height="8" rx="1" fill="#374151" />

              {/* Home indicator */}
              <rect x="60" y="336" width="60" height="4" rx="2" fill="#374151" />
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
