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

          <div className="relative flex justify-center lg:justify-end items-end gap-8 lg:gap-12">
            {/* Monitor - 27" style */}
            <svg viewBox="0 0 640 480" className="w-full max-w-xl" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="monitorFrame" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#2d3748" />
                  <stop offset="20%" stopColor="#1a202c" />
                  <stop offset="80%" stopColor="#0d1117" />
                  <stop offset="100%" stopColor="#1a202c" />
                </linearGradient>
                <linearGradient id="monitorBezel" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#0d1117" />
                  <stop offset="100%" stopColor="#161b22" />
                </linearGradient>
                <linearGradient id="monitorScreenGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#0d1117" />
                  <stop offset="100%" stopColor="#010409" />
                </linearGradient>
                <linearGradient id="standNeck" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#4a5568" />
                  <stop offset="25%" stopColor="#718096" />
                  <stop offset="50%" stopColor="#a0aec0" />
                  <stop offset="75%" stopColor="#718096" />
                  <stop offset="100%" stopColor="#4a5568" />
                </linearGradient>
                <linearGradient id="standBase" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#718096" />
                  <stop offset="50%" stopColor="#a0aec0" />
                  <stop offset="100%" stopColor="#4a5568" />
                </linearGradient>
                <linearGradient id="screenReflect" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="rgba(255,255,255,0.03)" />
                  <stop offset="50%" stopColor="rgba(255,255,255,0)" />
                  <stop offset="100%" stopColor="rgba(255,255,255,0.02)" />
                </linearGradient>
                <filter id="monitorShadow">
                  <feDropShadow dx="0" dy="12" stdDeviation="20" floodColor="#000" floodOpacity="0.6"/>
                </filter>
                <clipPath id="screenClip">
                  <rect x="44" y="36" width="552" height="348" />
                </clipPath>
              </defs>

              {/* Ambient shadow */}
              <ellipse cx="320" cy="455" rx="220" ry="12" fill="rgba(0,0,0,0.4)" />

              {/* Stand base - oval metallic */}
              <ellipse cx="320" cy="440" rx="90" ry="12" fill="url(#standBase)" />
              <ellipse cx="320" cy="440" rx="90" ry="12" fill="rgba(255,255,255,0.1)" />
              <ellipse cx="320" cy="438" rx="80" ry="8" fill="rgba(255,255,255,0.05)" />

              {/* Stand neck - tapered */}
              <path d="M305 438 L335 438 L330 390 L310 390 Z" fill="url(#standNeck)" />
              <path d="M305 438 L335 438 L330 390 L310 390 Z" fill="rgba(255,255,255,0.08)" />

              {/* Stand hinge */}
              <rect x="308" y="385" width="24" height="8" rx="2" fill="#4a5568" />

              {/* Monitor body - outer frame */}
              <rect x="24" y="16" width="592" height="372" rx="8" fill="url(#monitorFrame)" filter="url(#monitorShadow)" />

              {/* Monitor bezel - thin modern style */}
              <rect x="24" y="16" width="592" height="8" rx="8" fill="url(#monitorBezel)" />
              <rect x="24" y="380" width="592" height="8" fill="url(#monitorBezel)" />
              <rect x="24" y="16" width="6" height="372" fill="url(#monitorBezel)" />
              <rect x="610" y="16" width="6" height="372" fill="url(#monitorBezel)" />

              {/* Webcam with lens */}
              <circle cx="320" cy="20" r="3" fill="#0d1117" />
              <circle cx="320" cy="20" r="2" fill="#1a1a2e" />
              <circle cx="320" cy="20" r="1" fill="#2d3748" />
              <circle cx="321" cy="19" r="0.5" fill="rgba(255,255,255,0.3)" />

              {/* Power LED */}
              <circle cx="320" cy="384" r="1.5" fill="#22c55e" />

              {/* Screen */}
              <rect x="30" y="24" width="580" height="356" fill="url(#monitorScreenGrad)" />

              {/* Screen content - clipped */}
              <g clipPath="url(#screenClip)">
                {/* Screen reflection overlay */}
                <rect x="30" y="24" width="580" height="356" fill="url(#screenReflect)" />

                {/* Browser top bar */}
                <rect x="30" y="24" width="580" height="32" fill="#161b22" />
                {/* Traffic lights */}
                <circle cx="48" cy="40" r="5" fill="#ff5f57" />
                <circle cx="64" cy="40" r="5" fill="#febc2e" />
                <circle cx="80" cy="40" r="5" fill="#28c840" />
                {/* URL bar */}
                <rect x="100" y="32" width="440" height="16" rx="4" fill="#0d1117" />
                <rect x="108" y="35" width="12" height="10" rx="2" fill="#30363d" />
                <rect x="124" y="37" width="80" height="6" rx="1" fill="#484f58" />
                {/* Tab icons */}
                <rect x="550" y="32" width="16" height="16" rx="3" fill="#21262d" />
                <rect x="570" y="32" width="16" height="16" rx="3" fill="#21262d" />

                {/* Website header */}
                <rect x="30" y="56" width="580" height="40" fill="#0d1117" />
                <rect x="46" y="64" width="60" height="12" rx="2" fill="#2563eb" />
                <rect x="120" y="68" width="40" height="6" rx="1" fill="#30363d" />
                <rect x="170" y="68" width="40" height="6" rx="1" fill="#30363d" />
                <rect x="220" y="68" width="40" height="6" rx="1" fill="#30363d" />
                <rect x="540" y="64" width="56" height="14" rx="3" fill="#2563eb" />

                {/* Hero section */}
                <rect x="30" y="96" width="580" height="120" fill="#010409" />
                <rect x="56" y="112" width="200" height="16" rx="2" fill="#f0f6fc" />
                <rect x="56" y="136" width="280" height="8" rx="1" fill="#484f58" />
                <rect x="56" y="150" width="240" height="8" rx="1" fill="#484f58" />
                <rect x="56" y="164" width="260" height="8" rx="1" fill="#484f58" />
                <rect x="56" y="184" width="80" height="20" rx="4" fill="#2563eb" />
                <rect x="146" y="184" width="80" height="20" rx="4" fill="transparent" stroke="#30363d" strokeWidth="1" />

                {/* Dashboard cards */}
                <rect x="30" y="220" width="188" height="80" rx="0" fill="#161b22" />
                <rect x="42" y="232" width="40" height="8" rx="1" fill="#3b82f6" />
                <rect x="42" y="248" width="120" height="5" rx="1" fill="#30363d" />
                <rect x="42" y="258" width="100" height="5" rx="1" fill="#30363d" />
                <rect x="42" y="274" width="50" height="14" rx="3" fill="#2563eb" />

                <rect x="226" y="220" width="188" height="80" rx="0" fill="#161b22" />
                <rect x="238" y="232" width="40" height="8" rx="1" fill="#10b981" />
                <rect x="238" y="248" width="120" height="5" rx="1" fill="#30363d" />
                <rect x="238" y="258" width="100" height="5" rx="1" fill="#30363d" />
                <rect x="238" y="274" width="50" height="14" rx="3" fill="#10b981" />

                <rect x="422" y="220" width="188" height="80" rx="0" fill="#161b22" />
                <rect x="434" y="232" width="40" height="8" rx="1" fill="#8b5cf6" />
                <rect x="434" y="248" width="120" height="5" rx="1" fill="#30363d" />
                <rect x="434" y="258" width="100" height="5" rx="1" fill="#30363d" />
                <rect x="434" y="274" width="50" height="14" rx="3" fill="#8b5cf6" />

                {/* Chart section */}
                <rect x="30" y="304" width="380" height="76" fill="#161b22" />
                <rect x="42" y="312" width="60" height="6" rx="1" fill="#f0f6fc" />
                {/* Line chart */}
                <polyline points="50,360 90,345 130,350 170,335 210,340 250,320 290,330 330,315 370,325" fill="none" stroke="#3b82f6" strokeWidth="2" />
                <polyline points="50,365 90,355 130,358 170,348 210,352 250,340 290,345 330,335 370,342" fill="none" stroke="#10b981" strokeWidth="1.5" opacity="0.5" />

                {/* Activity feed */}
                <rect x="416" y="304" width="194" height="76" fill="#161b22" />
                <rect x="428" y="312" width="50" height="6" rx="1" fill="#f0f6fc" />
                <rect x="428" y="326" width="160" height="5" rx="1" fill="#30363d" />
                <rect x="428" y="338" width="140" height="5" rx="1" fill="#30363d" />
                <rect x="428" y="350" width="170" height="5" rx="1" fill="#30363d" />
                <rect x="428" y="362" width="130" height="5" rx="1" fill="#30363d" />
              </g>

              {/* Chin logo */}
              <text x="320" y="392" textAnchor="middle" fill="#4a5568" fontSize="9" fontFamily="system-ui" fontWeight="300" letterSpacing="2">dibweb</text>
            </svg>

            {/* Phone - iPhone 15 Pro style */}
            <svg viewBox="0 0 200 420" className="w-full max-w-[180px]" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="phoneFrame" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#374151" />
                  <stop offset="10%" stopColor="#6b7280" />
                  <stop offset="20%" stopColor="#4b5563" />
                  <stop offset="50%" stopColor="#6b7280" />
                  <stop offset="80%" stopColor="#4b5563" />
                  <stop offset="90%" stopColor="#6b7280" />
                  <stop offset="100%" stopColor="#374151" />
                </linearGradient>
                <linearGradient id="phoneScreenGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#0d1117" />
                  <stop offset="100%" stopColor="#010409" />
                </linearGradient>
                <linearGradient id="titanium" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#52525b" />
                  <stop offset="20%" stopColor="#71717a" />
                  <stop offset="40%" stopColor="#a1a1aa" />
                  <stop offset="50%" stopColor="#d4d4d8" />
                  <stop offset="60%" stopColor="#a1a1aa" />
                  <stop offset="80%" stopColor="#71717a" />
                  <stop offset="100%" stopColor="#52525b" />
                </linearGradient>
                <filter id="phoneShadow">
                  <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#000" floodOpacity="0.6"/>
                </filter>
                <clipPath id="phoneScreenClip">
                  <rect x="14" y="14" width="172" height="392" rx="20" />
                </clipPath>
              </defs>

              {/* Phone shadow */}
              <ellipse cx="100" cy="408" rx="60" ry="8" fill="rgba(0,0,0,0.4)" />

              {/* Phone body - titanium frame */}
              <rect x="8" y="8" width="184" height="404" rx="28" fill="url(#titanium)" filter="url(#phoneShadow)" />
              <rect x="8" y="8" width="184" height="404" rx="28" fill="rgba(255,255,255,0.05)" />

              {/* Side buttons */}
              {/* Silent switch */}
              <rect x="2" y="88" width="4" height="20" rx="1" fill="#71717a" />
              {/* Volume up */}
              <rect x="2" y="116" width="4" height="32" rx="1" fill="#71717a" />
              {/* Volume down */}
              <rect x="2" y="154" width="4" height="32" rx="1" fill="#71717a" />
              {/* Power button */}
              <rect x="194" y="130" width="4" height="40" rx="1" fill="#71717a" />

              {/* Screen */}
              <rect x="14" y="14" width="172" height="392" rx="20" fill="url(#phoneScreenGrad)" />

              {/* Screen content - clipped */}
              <g clipPath="url(#phoneScreenClip)">
                {/* Dynamic Island */}
                <rect x="58" y="20" width="84" height="24" rx="12" fill="#000" />
                {/* Camera */}
                <circle cx="118" cy="32" r="5" fill="#18181b" />
                <circle cx="118" cy="32" r="3.5" fill="#0d1117" />
                <circle cx="118" cy="32" r="2" fill="#27272a" />
                <circle cx="119" cy="31" r="0.8" fill="rgba(255,255,255,0.4)" />

                {/* Status bar */}
                <text x="26" y="32" fill="#f0f6fc" fontSize="10" fontFamily="system-ui" fontWeight="600">9:41</text>
                {/* Signal bars */}
                <rect x="140" y="26" width="3" height="4" rx="0.5" fill="#f0f6fc" />
                <rect x="145" y="24" width="3" height="6" rx="0.5" fill="#f0f6fc" />
                <rect x="150" y="22" width="3" height="8" rx="0.5" fill="#f0f6fc" />
                <rect x="155" y="20" width="3" height="10" rx="0.5" fill="#f0f6fc" />
                {/* Battery */}
                <rect x="162" y="24" width="18" height="8" rx="2" fill="none" stroke="#f0f6fc" strokeWidth="1" />
                <rect x="180" y="26" width="2" height="4" rx="1" fill="#f0f6fc" opacity="0.5" />
                <rect x="164" y="26" width="12" height="4" rx="1" fill="#22c55e" />

                {/* App header */}
                <rect x="14" y="48" width="172" height="44" fill="#0d1117" />
                <rect x="22" y="56" width="70" height="10" rx="2" fill="#2563eb" />
                <rect x="22" y="72" width="100" height="6" rx="1" fill="#30363d" />

                {/* Hero image */}
                <rect x="14" y="92" width="172" height="90" fill="#161b22" />
                <rect x="22" y="102" width="80" height="10" rx="2" fill="#1e3a5f" />
                <rect x="22" y="120" width="140" height="5" rx="1" fill="#30363d" />
                <rect x="22" y="130" width="120" height="5" rx="1" fill="#30363d" />
                <rect x="22" y="140" width="150" height="5" rx="1" fill="#30363d" />
                <rect x="22" y="156" width="60" height="16" rx="4" fill="#2563eb" />

                {/* Feature cards */}
                <rect x="14" y="190" width="82" height="70" rx="6" fill="#161b22" stroke="#30363d" strokeWidth="0.5" />
                <rect x="22" y="198" width="24" height="5" rx="1" fill="#3b82f6" />
                <rect x="22" y="208" width="60" height="4" rx="1" fill="#30363d" />
                <rect x="22" y="216" width="50" height="4" rx="1" fill="#30363d" />
                <rect x="22" y="228" width="36" height="10" rx="3" fill="#2563eb" />

                <rect x="104" y="190" width="82" height="70" rx="6" fill="#161b22" stroke="#30363d" strokeWidth="0.5" />
                <rect x="112" y="198" width="24" height="5" rx="1" fill="#10b981" />
                <rect x="112" y="208" width="60" height="4" rx="1" fill="#30363d" />
                <rect x="112" y="216" width="50" height="4" rx="1" fill="#30363d" />
                <rect x="112" y="228" width="36" height="10" rx="3" fill="#10b981" />

                {/* List items */}
                <rect x="14" y="268" width="172" height="36" rx="4" fill="#161b22" stroke="#30363d" strokeWidth="0.5" />
                <circle cx="34" cy="286" r="10" fill="#21262d" />
                <rect x="50" y="278" width="90" height="5" rx="1" fill="#484f58" />
                <rect x="50" y="288" width="70" height="4" rx="1" fill="#30363d" />

                <rect x="14" y="310" width="172" height="36" rx="4" fill="#161b22" stroke="#30363d" strokeWidth="0.5" />
                <circle cx="34" cy="328" r="10" fill="#21262d" />
                <rect x="50" y="320" width="90" height="5" rx="1" fill="#484f58" />
                <rect x="50" y="330" width="70" height="4" rx="1" fill="#30363d" />

                <rect x="14" y="352" width="172" height="36" rx="4" fill="#161b22" stroke="#30363d" strokeWidth="0.5" />
                <circle cx="34" cy="370" r="10" fill="#21262d" />
                <rect x="50" y="362" width="90" height="5" rx="1" fill="#484f58" />
                <rect x="50" y="372" width="70" height="4" rx="1" fill="#30363d" />

                {/* Bottom nav */}
                <rect x="14" y="384" width="172" height="22" fill="#0d1117" />
                <rect x="30" y="388" width="18" height="14" rx="3" fill="#2563eb" />
                <rect x="62" y="390" width="18" height="10" rx="2" fill="#30363d" />
                <rect x="94" y="390" width="18" height="10" rx="2" fill="#30363d" />
                <rect x="126" y="390" width="18" height="10" rx="2" fill="#30363d" />
                <rect x="158" y="390" width="18" height="10" rx="2" fill="#30363d" />
              </g>

              {/* Home indicator */}
              <rect x="64" y="400" width="72" height="5" rx="2.5" fill="#30363d" />
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
