"use client";

import Reveal from "@/components/Reveal";

export default function Hero() {
  return (
    <section className="relative pt-36 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#faf9f7]">
      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <Reveal>
              <p className="label mb-6">Estudio de desarrollo web · Santiago de Chile</p>

              <h1 className="text-5xl sm:text-6xl lg:text-[4.25rem] leading-[1.05] text-neutral-900">
                Sitios web que
                <br />
                <span className="accent-italic">convierten</span> visitas
                <br />
                en ventas
              </h1>

              <p className="mt-7 text-lg lg:text-xl text-neutral-600 max-w-xl leading-relaxed">
                Desarrollamos páginas web, tiendas online y sistemas de punto de venta a medida.
                Trabajo de calidad, entregas a tiempo y soporte real después del lanzamiento.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a href="#contacto" className="btn-primary px-9 py-4 rounded-full text-sm font-semibold text-center">
                  Solicitar cotización
                </a>
                <a href="#portfolio" className="btn-secondary px-9 py-4 rounded-full text-sm font-semibold text-center">
                  Ver trabajos
                </a>
              </div>

              <p className="mt-9 text-sm text-neutral-500 flex items-center gap-2">
                <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Respuesta en menos de 24 horas, sin compromiso
              </p>
            </Reveal>
          </div>
          <div className="relative flex justify-center lg:justify-end items-end gap-4 lg:gap-6">
            <Reveal delay={200} className="contents">
            {/* Monitor - showing goesca.store */}
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
                  <linearGradient id="heroGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1a2332" />
                    <stop offset="50%" stopColor="#1e2a3a" />
                    <stop offset="100%" stopColor="#162030" />
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

                {/* Screen */}
                <rect x="45" y="26" width="550" height="348" fill="#0d1117" />

                {/* Browser bar */}
                <rect x="45" y="26" width="550" height="28" fill="#161b22" />
                <circle cx="61" cy="40" r="4" fill="#ef4444" />
                <circle cx="73" cy="40" r="4" fill="#eab308" />
                <circle cx="85" cy="40" r="4" fill="#22c55e" />
                <rect x="100" y="34" width="400" height="12" rx="3" fill="#0d1117" stroke="#30363d" strokeWidth="0.5" />
                <text x="108" y="43" fontSize="5" fill="#8b949e" fontFamily="system-ui">🔒 goesca.store</text>

                {/* Header - black bg */}
                <rect x="45" y="54" width="550" height="28" fill="rgba(0,0,0,0.85)" />
                {/* Hamburger */}
                <rect x="60" y="62" width="12" height="1.5" rx="0.5" fill="#fff" opacity="0.8" />
                <rect x="60" y="65" width="12" height="1.5" rx="0.5" fill="#fff" opacity="0.8" />
                <rect x="60" y="68" width="12" height="1.5" rx="0.5" fill="#fff" opacity="0.8" />
                {/* GOESCA */}
                <text x="82" y="71" fontSize="8" fill="#f68b1f" fontFamily="system-ui" fontWeight="bold" letterSpacing="2">GOESCA</text>
                {/* Cart icon */}
                <rect x="575" y="62" width="14" height="12" rx="2" fill="none" stroke="#fff" strokeWidth="1" opacity="0.8" />
                <circle cx="580" cy="76" r="1.5" fill="#fff" opacity="0.8" />
                <circle cx="587" cy="76" r="1.5" fill="#fff" opacity="0.8" />

                {/* Hero section - dark gradient */}
                <rect x="45" y="82" width="550" height="130" fill="url(#heroGrad)" />

                {/* Left text */}
                <text x="70" y="105" fontSize="5" fill="#f68b1f" fontFamily="system-ui" fontWeight="bold" letterSpacing="1">GOESCA</text>
                <text x="70" y="118" fontSize="10" fill="#ffffff" fontFamily="system-ui" fontWeight="bold">Productos de aseo al</text>
                <text x="70" y="130" fontSize="10" fill="#ffffff" fontFamily="system-ui" fontWeight="bold">mejor </text>
                <text x="143" y="130" fontSize="10" fill="#f68b1f" fontFamily="system-ui" fontWeight="bold">precio</text>
                <text x="70" y="144" fontSize="5.5" fill="#9ca3af" fontFamily="system-ui">Limpieza para tu hogar y negocio.</text>
                <text x="70" y="152" fontSize="5.5" fill="#9ca3af" fontFamily="system-ui">Envíos a todo Chile.</text>
                <text x="70" y="168" fontSize="6" fill="#9ca3af" fontFamily="system-ui" fontWeight="bold">Ver catálogo →</text>

                {/* Right product grid 2x2 */}
                {/* Product 1 */}
                <rect x="300" y="92" width="130" height="55" rx="8" fill="#fff" />
                <rect x="310" y="98" width="40" height="35" rx="4" fill="#f0f4f8" />
                <rect x="315" y="103" width="30" height="25" rx="2" fill="#e8d5f5" />
                <text x="360" y="108" fontSize="4" fill="#1f2937" fontFamily="system-ui" fontWeight="bold">DOWNY BRISA DE</text>
                <text x="360" y="114" fontSize="4" fill="#1f2937" fontFamily="system-ui" fontWeight="bold">VERANO 350 ML</text>
                <text x="360" y="125" fontSize="6" fill="#f68b1f" fontFamily="system-ui" fontWeight="bold">$1,890</text>

                {/* Product 2 */}
                <rect x="440" y="92" width="145" height="55" rx="8" fill="#fff" />
                <rect x="450" y="98" width="40" height="35" rx="4" fill="#f0f4f8" />
                <rect x="455" y="103" width="30" height="25" rx="2" fill="#d5e8f5" />
                <text x="500" y="108" fontSize="4" fill="#1f2937" fontFamily="system-ui" fontWeight="bold">DOWNY BRISA</text>
                <text x="500" y="114" fontSize="4" fill="#1f2937" fontFamily="system-ui" fontWeight="bold">INTENSA 350 ML</text>
                <text x="500" y="125" fontSize="6" fill="#f68b1f" fontFamily="system-ui" fontWeight="bold">$1,890</text>

                {/* Product 3 */}
                <rect x="300" y="152" width="130" height="55" rx="8" fill="#fff" />
                <rect x="310" y="158" width="40" height="35" rx="4" fill="#f0f4f8" />
                <rect x="315" y="163" width="30" height="25" rx="2" fill="#f5e8d5" />
                <text x="360" y="168" fontSize="4" fill="#1f2937" fontFamily="system-ui" fontWeight="bold">SUAVISANTE SOFT</text>
                <text x="360" y="174" fontSize="4" fill="#1f2937" fontFamily="system-ui" fontWeight="bold">CLASICO 900ML</text>
                <text x="360" y="185" fontSize="6" fill="#f68b1f" fontFamily="system-ui" fontWeight="bold">$1,390</text>

                {/* Product 4 */}
                <rect x="440" y="152" width="145" height="55" rx="8" fill="#fff" />
                <rect x="450" y="158" width="40" height="35" rx="4" fill="#f0f4f8" />
                <rect x="455" y="163" width="30" height="25" rx="2" fill="#d5f5e8" />
                <text x="500" y="168" fontSize="4" fill="#1f2937" fontFamily="system-ui" fontWeight="bold">SUAVISANTE SOFT</text>
                <text x="500" y="174" fontSize="4" fill="#1f2937" fontFamily="system-ui" fontWeight="bold">1 LITRO</text>
                <text x="500" y="185" fontSize="6" fill="#f68b1f" fontFamily="system-ui" fontWeight="bold">$1,990</text>

                {/* Trust cards */}
                <rect x="45" y="212" width="550" height="40" fill="#0d1117" />
                <rect x="60" y="218" width="160" height="28" rx="6" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
                <rect x="70" y="224" width="16" height="12" rx="3" fill="rgba(246,139,31,0.15)" />
                <text x="74" y="233" fontSize="6" fill="#f68b1f">🚚</text>
                <text x="92" y="228" fontSize="4.5" fill="#fff" fontFamily="system-ui" fontWeight="bold">Retiro en tienda</text>
                <text x="92" y="235" fontSize="3.5" fill="#9ca3af" fontFamily="system-ui">Coordinamos tu retiro</text>

                <rect x="230" y="218" width="160" height="28" rx="6" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
                <rect x="240" y="224" width="16" height="12" rx="3" fill="rgba(34,197,94,0.15)" />
                <text x="244" y="233" fontSize="6" fill="#22c55e">✓</text>
                <text x="262" y="228" fontSize="4.5" fill="#fff" fontFamily="system-ui" fontWeight="bold">Calidad garantizada</text>
                <text x="262" y="235" fontSize="3.5" fill="#9ca3af" fontFamily="system-ui">Productos originales</text>

                <rect x="400" y="218" width="180" height="28" rx="6" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
                <rect x="410" y="224" width="16" height="12" rx="3" fill="rgba(59,130,246,0.15)" />
                <text x="414" y="233" fontSize="6" fill="#3b82f6">⏱</text>
                <text x="432" y="228" fontSize="4.5" fill="#fff" fontFamily="system-ui" fontWeight="bold">Respuesta rápida</text>
                <text x="432" y="235" fontSize="3.5" fill="#9ca3af" fontFamily="system-ui">Cotización por WhatsApp</text>

                {/* Categories + Products section */}
                <rect x="45" y="252" width="550" height="100" fill="#0d1117" />

                {/* Sidebar */}
                <rect x="55" y="258" width="80" height="88" rx="6" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
                <text x="65" y="270" fontSize="4.5" fill="#fff" fontFamily="system-ui" fontWeight="bold">Categorías</text>
                <text x="65" y="280" fontSize="3.5" fill="#9ca3af" fontFamily="system-ui">Ofertas</text>
                <text x="65" y="288" fontSize="3.5" fill="#f68b1f" fontFamily="system-ui">Lavandería</text>
                <text x="65" y="296" fontSize="3.5" fill="#9ca3af" fontFamily="system-ui">Suavizantes</text>
                <text x="65" y="304" fontSize="3.5" fill="#9ca3af" fontFamily="system-ui">Papel higiénico</text>
                <text x="65" y="312" fontSize="3.5" fill="#9ca3af" fontFamily="system-ui">Higiene personal</text>
                <text x="65" y="320" fontSize="3.5" fill="#9ca3af" fontFamily="system-ui">Cuidado bucal</text>
                <text x="65" y="328" fontSize="3.5" fill="#9ca3af" fontFamily="system-ui">Baño</text>
                <text x="65" y="336" fontSize="3.5" fill="#3b82f6" fontFamily="system-ui">Ver todo →</text>

                {/* Product cards */}
                <rect x="145" y="258" width="90" height="88" rx="6" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
                <rect x="150" y="263" width="80" height="40" rx="4" fill="#f0f4f8" />
                <rect x="155" y="268" width="70" height="30" rx="3" fill="#e8d5f5" />
                <rect x="148" y="308" width="20" height="8" rx="3" fill="#e84f5f" />
                <text x="150" y="314" fontSize="3" fill="#fff" fontFamily="system-ui" fontWeight="bold">OFERTA</text>
                <text x="152" y="325" fontSize="3.5" fill="#fff" fontFamily="system-ui" fontWeight="bold">DOWNY BRISA DE</text>
                <text x="152" y="331" fontSize="3.5" fill="#fff" fontFamily="system-ui" fontWeight="bold">VERANO 350 ML</text>
                <text x="152" y="340" fontSize="4" fill="#f68b1f" fontFamily="system-ui" fontWeight="bold">$1,890</text>

                <rect x="245" y="258" width="90" height="88" rx="6" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
                <rect x="250" y="263" width="80" height="40" rx="4" fill="#f0f4f8" />
                <rect x="255" y="268" width="70" height="30" rx="3" fill="#d5e8f5" />
                <rect x="248" y="308" width="20" height="8" rx="3" fill="#e84f5f" />
                <text x="250" y="314" fontSize="3" fill="#fff" fontFamily="system-ui" fontWeight="bold">OFERTA</text>
                <text x="252" y="325" fontSize="3.5" fill="#fff" fontFamily="system-ui" fontWeight="bold">SUAVISANTE SOFT</text>
                <text x="252" y="331" fontSize="3.5" fill="#fff" fontFamily="system-ui" fontWeight="bold">CLASICO 900ML</text>
                <text x="252" y="340" fontSize="4" fill="#f68b1f" fontFamily="system-ui" fontWeight="bold">$1,390</text>

                <rect x="345" y="258" width="90" height="88" rx="6" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
                <rect x="350" y="263" width="80" height="40" rx="4" fill="#f0f4f8" />
                <rect x="355" y="268" width="70" height="30" rx="3" fill="#f5e8d5" />
                <text x="352" y="325" fontSize="3.5" fill="#fff" fontFamily="system-ui" fontWeight="bold">SUAVISANTE SOFT</text>
                <text x="352" y="331" fontSize="3.5" fill="#fff" fontFamily="system-ui" fontWeight="bold">1 LITRO</text>
                <text x="352" y="340" fontSize="4" fill="#f68b1f" fontFamily="system-ui" fontWeight="bold">$1,990</text>

                <rect x="445" y="258" width="90" height="88" rx="6" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
                <rect x="450" y="263" width="80" height="40" rx="4" fill="#f0f4f8" />
                <rect x="455" y="268" width="70" height="30" rx="3" fill="#d5f5e8" />
                <rect x="448" y="308" width="20" height="8" rx="3" fill="#e84f5f" />
                <text x="450" y="314" fontSize="3" fill="#fff" fontFamily="system-ui" fontWeight="bold">OFERTA</text>
                <text x="452" y="325" fontSize="3.5" fill="#fff" fontFamily="system-ui" fontWeight="bold">DOWNY BRISA</text>
                <text x="452" y="331" fontSize="3.5" fill="#fff" fontFamily="system-ui" fontWeight="bold">INTENSA 350 ML</text>
                <text x="452" y="340" fontSize="4" fill="#f68b1f" fontFamily="system-ui" fontWeight="bold">$1,890</text>

                {/* Footer */}
                <rect x="45" y="352" width="550" height="22" fill="rgba(0,0,0,0.85)" />
                <text x="60" y="364" fontSize="5" fill="#f68b1f" fontFamily="system-ui" fontWeight="bold" letterSpacing="1">GOESCA</text>
                <text x="110" y="364" fontSize="3.5" fill="#9ca3af" fontFamily="system-ui">Artículos de aseo para hogar y negocio</text>
                <text x="400" y="364" fontSize="3.5" fill="#9ca3af" fontFamily="system-ui">Compra segura</text>
                <text x="460" y="364" fontSize="3.5" fill="#9ca3af" fontFamily="system-ui">Retiro express</text>
                <text x="320" y="373" textAnchor="middle" fontSize="3" fill="#6b7280" fontFamily="system-ui">Goesca © 2026 — Todos los derechos reservados</text>
              </svg>
            </div>

            {/* Phone - showing goesca.store mobile */}
            <div className="group relative -ml-8 lg:-ml-16">
              <svg viewBox="0 0 200 420" className="w-full max-w-[140px] transition-transform duration-500 group-hover:scale-[1.03] group-hover:-translate-y-1" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="phoneFrame" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#334155" />
                    <stop offset="50%" stopColor="#64748b" />
                    <stop offset="100%" stopColor="#334155" />
                  </linearGradient>
                  <linearGradient id="phoneHeroGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1a2332" />
                    <stop offset="50%" stopColor="#1e2a3a" />
                    <stop offset="100%" stopColor="#162030" />
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
                <rect x="16" y="16" width="168" height="388" rx="20" fill="#0d1117" />

                {/* Dynamic Island */}
                <rect x="60" y="22" width="80" height="22" rx="11" fill="#000" />
                <circle cx="116" cy="33" r="4" fill="#1e293b" />
                <circle cx="116" cy="33" r="2.5" fill="#0d1117" />

                {/* Status bar */}
                <text x="28" y="30" fill="#fff" fontSize="9" fontFamily="system-ui" fontWeight="600">9:41</text>
                <rect x="148" y="24" width="14" height="7" rx="2" fill="none" stroke="#fff" strokeWidth="1" />
                <rect x="150" y="26" width="8" height="3" rx="1" fill="#22c55e" />

                {/* Mobile Header */}
                <rect x="16" y="48" width="168" height="28" fill="rgba(0,0,0,0.85)" />
                {/* Hamburger */}
                <rect x="26" y="56" width="10" height="1.5" rx="0.5" fill="#fff" opacity="0.8" />
                <rect x="26" y="59" width="10" height="1.5" rx="0.5" fill="#fff" opacity="0.8" />
                <rect x="26" y="62" width="10" height="1.5" rx="0.5" fill="#fff" opacity="0.8" />
                {/* GOESCA */}
                <text x="42" y="64" fontSize="7" fill="#f68b1f" fontFamily="system-ui" fontWeight="bold" letterSpacing="1.5">GOESCA</text>
                {/* Cart */}
                <rect x="164" y="56" width="12" height="10" rx="2" fill="none" stroke="#fff" strokeWidth="0.8" opacity="0.8" />
                <circle cx="168" cy="68" r="1.2" fill="#fff" opacity="0.8" />
                <circle cx="174" cy="68" r="1.2" fill="#fff" opacity="0.8" />

                {/* Mobile Hero */}
                <rect x="16" y="76" width="168" height="95" fill="url(#phoneHeroGrad)" />
                <text x="26" y="90" fontSize="4" fill="#f68b1f" fontFamily="system-ui" fontWeight="bold" letterSpacing="0.8">GOESCA</text>
                <text x="26" y="100" fontSize="7" fill="#fff" fontFamily="system-ui" fontWeight="bold">Productos de aseo</text>
                <text x="26" y="109" fontSize="7" fill="#fff" fontFamily="system-ui" fontWeight="bold">al mejor </text>
                <text x="84" y="109" fontSize="7" fill="#f68b1f" fontFamily="system-ui" fontWeight="bold">precio</text>
                <text x="26" y="120" fontSize="4" fill="#9ca3af" fontFamily="system-ui">Limpieza para tu hogar</text>
                <text x="26" y="127" fontSize="4" fill="#9ca3af" fontFamily="system-ui">y negocio. Envíos a todo Chile.</text>
                <text x="26" y="140" fontSize="4.5" fill="#9ca3af" fontFamily="system-ui" fontWeight="bold">Ver catálogo →</text>

                {/* Product cards horizontal scroll */}
                <rect x="16" y="175" width="168" height="60" fill="#0d1117" />
                <text x="26" y="185" fontSize="5" fill="#fff" fontFamily="system-ui" fontWeight="bold">Ofertas destacadas</text>

                <rect x="26" y="192" width="70" height="38" rx="5" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
                <rect x="30" y="196" width="62" height="20" rx="3" fill="#f0f4f8" />
                <rect x="33" y="199" width="56" height="14" rx="2" fill="#e8d5f5" />
                <rect x="28" y="218" width="16" height="6" rx="2" fill="#e84f5f" />
                <text x="30" y="223" fontSize="2.5" fill="#fff" fontFamily="system-ui" fontWeight="bold">OFERTA</text>
                <text x="30" y="228" fontSize="3" fill="#f68b1f" fontFamily="system-ui" fontWeight="bold">$1,890</text>

                <rect x="104" y="192" width="70" height="38" rx="5" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
                <rect x="108" y="196" width="62" height="20" rx="3" fill="#f0f4f8" />
                <rect x="111" y="199" width="56" height="14" rx="2" fill="#d5e8f5" />
                <rect x="106" y="218" width="16" height="6" rx="2" fill="#e84f5f" />
                <text x="108" y="223" fontSize="2.5" fill="#fff" fontFamily="system-ui" fontWeight="bold">OFERTA</text>
                <text x="108" y="228" fontSize="3" fill="#f68b1f" fontFamily="system-ui" fontWeight="bold">$1,390</text>

                {/* Best sellers */}
                <rect x="16" y="240" width="168" height="65" fill="#0d1117" />
                <text x="26" y="252" fontSize="5" fill="#fff" fontFamily="system-ui" fontWeight="bold">Los favoritos</text>
                <text x="120" y="252" fontSize="3.5" fill="#3b82f6" fontFamily="system-ui">Ver todo →</text>

                <rect x="26" y="258" width="148" height="10" rx="3" fill="rgba(255,255,255,0.05)" />
                <text x="30" y="265" fontSize="3.5" fill="#f68b1f" fontFamily="system-ui" fontWeight="bold">1</text>
                <text x="38" y="265" fontSize="3.5" fill="#fff" fontFamily="system-ui">PANO AMARILLO MULTIUSO</text>
                <text x="148" y="265" fontSize="3.5" fill="#f68b1f" fontFamily="system-ui" fontWeight="bold">$250</text>

                <rect x="26" y="270" width="148" height="10" rx="3" fill="rgba(255,255,255,0.03)" />
                <text x="30" y="277" fontSize="3.5" fill="#f68b1f" fontFamily="system-ui" fontWeight="bold">2</text>
                <text x="38" y="277" fontSize="3.5" fill="#fff" fontFamily="system-ui">AROMATIZANTE AMBIENTAL</text>
                <text x="143" y="277" fontSize="3.5" fill="#f68b1f" fontFamily="system-ui" fontWeight="bold">$1,290</text>

                <rect x="26" y="282" width="148" height="10" rx="3" fill="rgba(255,255,255,0.05)" />
                <text x="30" y="289" fontSize="3.5" fill="#f68b1f" fontFamily="system-ui" fontWeight="bold">3</text>
                <text x="38" y="289" fontSize="3.5" fill="#fff" fontFamily="system-ui">RO DETERGENTE LAVADO</text>
                <text x="143" y="289" fontSize="3.5" fill="#f68b1f" fontFamily="system-ui" fontWeight="bold">$3,290</text>

                <rect x="26" y="294" width="148" height="10" rx="3" fill="rgba(255,255,255,0.03)" />
                <text x="30" y="301" fontSize="3.5" fill="#f68b1f" fontFamily="system-ui" fontWeight="bold">4</text>
                <text x="38" y="301" fontSize="3.5" fill="#fff" fontFamily="system-ui">CLORO ESPUMA ARCADIA</text>
                <text x="143" y="301" fontSize="3.5" fill="#f68b1f" fontFamily="system-ui" fontWeight="bold">$2,190</text>

                {/* Trust cards */}
                <rect x="16" y="310" width="168" height="35" fill="#0d1117" />
                <rect x="22" y="315" width="50" height="24" rx="5" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
                <text x="34" y="326" fontSize="4" fill="#f68b1f">🚚</text>
                <text x="30" y="334" fontSize="3" fill="#fff" fontFamily="system-ui" fontWeight="bold">Retiro tienda</text>

                <rect x="78" y="315" width="50" height="24" rx="5" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
                <text x="90" y="326" fontSize="4" fill="#22c55e">✓</text>
                <text x="86" y="334" fontSize="3" fill="#fff" fontFamily="system-ui" fontWeight="bold">Calidad</text>

                <rect x="134" y="315" width="44" height="24" rx="5" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
                <text x="146" y="326" fontSize="4" fill="#3b82f6">⏱</text>
                <text x="142" y="334" fontSize="3" fill="#fff" fontFamily="system-ui" fontWeight="bold">Rápido</text>

                {/* Footer */}
                <rect x="16" y="350" width="168" height="30" fill="rgba(0,0,0,0.85)" />
                <text x="26" y="362" fontSize="4.5" fill="#f68b1f" fontFamily="system-ui" fontWeight="bold" letterSpacing="1">GOESCA</text>
                <text x="26" y="370" fontSize="3" fill="#9ca3af" fontFamily="system-ui">Artículos de aseo para hogar</text>
                <text x="26" y="376" fontSize="2.5" fill="#6b7280" fontFamily="system-ui">Goesca © 2026</text>

                {/* Bottom nav */}
                <rect x="16" y="384" width="168" height="20" fill="rgba(0,0,0,0.9)" />
                <rect x="30" y="387" width="16" height="12" rx="3" fill="rgba(246,139,31,0.2)" />
                <text x="34" y="396" fontSize="4" fill="#f68b1f">🏠</text>
                <text x="32" y="400" fontSize="2.5" fill="#f68b1f" fontFamily="system-ui">Inicio</text>

                <rect x="62" y="387" width="16" height="12" rx="3" fill="rgba(255,255,255,0.05)" />
                <text x="66" y="396" fontSize="4" fill="#9ca3af">📦</text>
                <text x="62" y="400" fontSize="2.5" fill="#9ca3af" fontFamily="system-ui">Catálogo</text>

                <rect x="94" y="387" width="16" height="12" rx="3" fill="rgba(255,255,255,0.05)" />
                <text x="98" y="396" fontSize="4" fill="#9ca3af">🛒</text>
                <text x="96" y="400" fontSize="2.5" fill="#9ca3af" fontFamily="system-ui">Carrito</text>

                <rect x="126" y="387" width="16" height="12" rx="3" fill="rgba(255,255,255,0.05)" />
                <text x="130" y="396" fontSize="4" fill="#9ca3af">💬</text>
                <text x="126" y="400" fontSize="2.5" fill="#9ca3af" fontFamily="system-ui">WhatsApp</text>

                <rect x="154" y="387" width="16" height="12" rx="3" fill="rgba(255,255,255,0.05)" />
                <text x="158" y="396" fontSize="4" fill="#9ca3af">👤</text>

                {/* Home indicator */}
                <rect x="68" y="404" width="64" height="3" rx="1.5" fill="#fff" opacity="0.3" />
              </svg>
            </div>
            </Reveal>
          </div>
        </div>

      </div>
    </section>
  );
}
