"use client";

export default function Devices() {
  return (
    <div className="relative flex justify-center lg:justify-end items-end gap-3 lg:gap-5">
      <Monitor />
      <Phone />
    </div>
  );
}

/* ─── MONITOR ─────────────────────────────────────────── */
function Monitor() {
  const dur = 12; // total cycle seconds

  const pages = [
    /* 0 — Hero */
    <div key="h" className="absolute inset-0 flex flex-col">
      <Bar url="goesca.store" />
      <Nav brand="GOESCA" />
      <div className="flex-1 bg-gradient-to-br from-[#111827] via-[#1a2332] to-[#0f172a] relative overflow-hidden">
        {/* hero content */}
        <div className="absolute inset-0 flex flex-col justify-center px-[6%] gap-2">
          <span className="text-[4px] text-[#f59e0b] font-bold tracking-[1px]">GOESCA</span>
          <p className="text-[8px] text-white font-semibold leading-[1.15]">
            Productos de aseo<br />al mejor <span className="text-[#f59e0b]">precio</span>
          </p>
          <p className="text-[3.5px] text-gray-400 leading-relaxed max-w-[55%]">
            Limpieza para tu hogar y negocio. Envíos a todo Chile.
          </p>
          <span className="mt-1 inline-flex w-fit px-2 py-[2px] bg-[#f59e0b] rounded text-white text-[3px] font-semibold">
            Ver catálogo →
          </span>
        </div>
        {/* product cards */}
        <div className="absolute right-[4%] top-[10%] grid grid-cols-2 gap-[3px]">
          {[0,1,2,3].map(i => (
            <div key={i} className="w-[52px] h-[38px] rounded bg-white/[0.06] border border-white/[0.08] p-[3px] flex flex-col justify-between">
              <div className="rounded-sm h-[16px]" style={{background:['#e0d4f5','#d0e4f5','#f5e8d5','#d5f5e8'][i]}} />
              <div>
                <div className="text-[2.2px] text-gray-300">DOWNY {i}</div>
                <div className="text-[2.8px] text-[#f59e0b] font-bold">$1,890</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>,

    /* 1 — Products grid */
    <div key="p" className="absolute inset-0 flex flex-col">
      <Bar url="goesca.store/categoria/lavanderia" />
      <Nav brand="GOESCA" />
      <div className="flex-1 bg-[#0a0e14] flex gap-2 p-[3%]">
        {/* sidebar */}
        <div className="w-[16%] shrink-0 space-y-[3px] pt-1">
          <div className="text-[3px] text-white font-semibold mb-1">Categorías</div>
          {['Ofertas','Lavandería','Suavizantes','Papel','Higiene','Baño'].map((c,i)=>(
            <div key={c} className={`text-[2.5px] py-[1px] ${i===1?'text-[#f59e0b] font-medium':'text-gray-500'}`}>{c}</div>
          ))}
        </div>
        {/* product grid */}
        <div className="flex-1 grid grid-cols-3 gap-[3px]">
          {['DOWNY VERANO','DOWNY INTENSA','SOFT CLÁSICO','SOFT 1L','CLORO ESPUMA','AROMATIZANTE'].map((name,i)=>(
            <div key={i} className="rounded bg-white/[0.04] border border-white/[0.07] p-[3px] flex flex-col gap-1">
              <div className="h-[22px] rounded-sm" style={{background:['#e0d4f5','#d0e4f5','#f5e8d5','#d5f5e8','#e0d4f5','#d0e4f5'][i]}} />
              <div className="text-[2.2px] text-gray-300 leading-tight">{name}</div>
              <div className="text-[2.5px] text-[#f59e0b] font-bold">$1,890</div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>,

    /* 2 — Cart */
    <div key="c" className="absolute inset-0 flex flex-col">
      <Bar url="goesca.store/carrito" />
      <Nav brand="GOESCA" cart="2" />
      <div className="flex-1 bg-[#0a0e14] p-[4%] flex flex-col gap-2">
        <div className="text-[4px] text-white font-semibold">Mi carrito (2)</div>
        {[0,1].map(i=>(
          <div key={i} className="flex gap-2 bg-white/[0.04] rounded p-2">
            <div className="w-[28px] h-[28px] rounded shrink-0" style={{background:['#e0d4f5','#d0e4f5'][i]}} />
            <div className="flex-1 flex flex-col justify-between">
              <div className="text-[2.5px] text-gray-300">DOWNY BRISA {i===0?'VERANO':'INTENSA'} 350ML</div>
              <div className="text-[3px] text-[#f59e0b] font-bold">$1,890</div>
            </div>
          </div>
        ))}
        <div className="mt-auto flex justify-between items-center border-t border-white/10 pt-2">
          <div className="text-[3px] text-gray-400">Total</div>
          <div className="text-[4px] text-[#f59e0b] font-bold">$3,780</div>
        </div>
        <div className="py-[5px] bg-emerald-600 rounded text-center text-white text-[3px] font-semibold">
          Comprar por WhatsApp
        </div>
      </div>
      <Footer />
    </div>,

    /* 3 — About */
    <div key="a" className="absolute inset-0 flex flex-col">
      <Bar url="goesca.store/nosotros" />
      <Nav brand="GOESCA" />
      <div className="flex-1 bg-gradient-to-b from-[#111827] to-[#0a0e14] flex flex-col items-center justify-center text-center px-[8%] gap-2">
        <div className="text-[3.5px] text-[#f59e0b] font-semibold tracking-[0.5px]">SOBRE NOSOTROS</div>
        <div className="text-[7px] text-white font-semibold leading-tight">Productos de aseo<br/>de calidad</div>
        <div className="text-[3px] text-gray-400 max-w-[70%] leading-relaxed">
          Más de 5 años entregando soluciones de limpieza a hogares y negocios en todo Chile.
        </div>
        <div className="flex gap-2 mt-1">
          {['🚚 Envío','✅ Garantía','💬 Soporte'].map(t=>(
            <span key={t} className="text-[2.5px] text-gray-300 bg-white/[0.05] rounded px-[5px] py-[2px]">{t}</span>
          ))}
        </div>
      </div>
      <Footer />
    </div>,
  ];

  return (
    <div className="group relative">
      {/* CSS animations */}
      <style>{`
        @keyframes mon-cycle {
          0%,18%{opacity:1} 22%,43%{opacity:0} 47%,68%{opacity:0} 72%,93%{opacity:0} 97%,100%{opacity:0}
        }
        @keyframes mon-cycle-1{0%,18%{opacity:0}22%,43%{opacity:1}47%,68%{opacity:0}72%,93%{opacity:0}97%,100%{opacity:0}}
        @keyframes mon-cycle-2{0%,43%{opacity:0}47%,68%{opacity:1}72%,93%{opacity:0}97%,100%{opacity:0}}
        @keyframes mon-cycle-3{0%,68%{opacity:0}72%,93%{opacity:1}97%,100%{opacity:0}}
        .mon-p0{animation:mon-cycle ${dur}s ease-in-out infinite}
        .mon-p1{animation:mon-cycle-1 ${dur}s ease-in-out infinite}
        .mon-p2{animation:mon-cycle-2 ${dur}s ease-in-out infinite}
        .mon-p3{animation:mon-cycle-3 ${dur}s ease-in-out infinite}
        .mon-p0{animation-fill-mode:both}
        @media(prefers-reduced-motion:reduce){
          .mon-p0,.mon-p1,.mon-p2,.mon-p3{animation:none}
          .mon-p0{opacity:1}.mon-p1,.mon-p2,.mon-p3{opacity:0}
        }
      `}</style>

      <div className="animate-float">
        <svg viewBox="0 0 660 490" className="w-full max-w-[520px] transition-transform duration-500 group-hover:scale-[1.015]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="mFrame" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2a2f38"/>
              <stop offset="40%" stopColor="#1c2028"/>
              <stop offset="100%" stopColor="#2a2f38"/>
            </linearGradient>
            <linearGradient id="mBezel" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3a3f48"/>
              <stop offset="100%" stopColor="#1a1e24"/>
            </linearGradient>
            <linearGradient id="mStand" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#555"/>
              <stop offset="100%" stopColor="#333"/>
            </linearGradient>
            <filter id="mShadow"><feDropShadow dx="0" dy="12" stdDeviation="18" floodColor="#000" floodOpacity="0.45"/></filter>
            <clipPath id="mScreen"><rect x="50" y="28" width="560" height="352" rx="2"/></clipPath>
          </defs>

          {/* Shadow on desk */}
          <ellipse cx="330" cy="468" rx="160" ry="8" fill="rgba(0,0,0,0.25)"/>

          {/* Stand base */}
          <ellipse cx="330" cy="452" rx="72" ry="8" fill="url(#mStand)"/>
          {/* Stand neck */}
          <rect x="321" y="404" width="18" height="50" rx="2" fill="url(#mStand)"/>

          {/* Monitor body */}
          <rect x="40" y="18" width="580" height="380" rx="8" fill="url(#mFrame)" filter="url(#mShadow)"/>

          {/* Top bezel highlight */}
          <rect x="40" y="18" width="580" height="1.5" fill="rgba(255,255,255,0.06)" rx="1"/>
          {/* Side bezel lines */}
          <rect x="40" y="18" width="1.5" height="380" fill="rgba(255,255,255,0.04)"/>
          <rect x="618.5" y="18" width="1.5" height="380" fill="rgba(255,255,255,0.04)"/>

          {/* Bottom bezel */}
          <rect x="40" y="390" width="580" height="8" fill="#1a1e24"/>
          <circle cx="330" cy="394" r="2" fill="#333"/>

          {/* Camera dot */}
          <circle cx="330" cy="22" r="1.8" fill="#222"/>
          <circle cx="330" cy="22" r="0.8" fill="#1a1e24"/>

          {/* Screen */}
          <rect x="50" y="28" width="560" height="352" fill="#0a0e14"/>

          {/* Animated pages */}
          <g clipPath="url(#mScreen)">
            {pages.map((p,i) => (
              <foreignObject key={i} x="50" y="28" width="560" height="352" className={i===0?'mon-p0':`mon-p${i}`}>
                <div className="w-full h-full">{p}</div>
              </foreignObject>
            ))}
          </g>
        </svg>
      </div>
    </div>
  );
}

/* ─── PHONE ───────────────────────────────────────────── */
function Phone() {
  const dur = 10;

  const pages = [
    /* 0 — Hero */
    <div key="h" className="absolute inset-0 flex flex-col">
      <PhoneStatusBar />
      <div className="h-[7%] bg-black/90 flex items-center px-[4%] justify-between">
        <span className="text-[5px] text-[#f59e0b] font-bold tracking-[0.8px]">GOESCA</span>
        <span className="text-[4px] text-white/60">🛒</span>
      </div>
      <div className="flex-1 bg-gradient-to-br from-[#111827] via-[#1a2332] to-[#0f172a] flex flex-col items-center justify-center text-center px-[6%] gap-1">
        <span className="text-[3px] text-[#f59e0b] font-bold tracking-[0.5px]">GOESCA</span>
        <span className="text-[6px] text-white font-semibold leading-[1.15]">Productos de aseo<br/>al mejor <span className="text-[#f59e0b]">precio</span></span>
        <span className="text-[2.5px] text-gray-400">Envíos a todo Chile</span>
        <span className="mt-1 px-[6px] py-[2px] bg-[#f59e0b] rounded text-white text-[2.5px] font-semibold">Ver catálogo</span>
      </div>
      <PhoneNav active={0} />
    </div>,

    /* 1 — Products */
    <div key="p" className="absolute inset-0 flex flex-col">
      <PhoneStatusBar />
      <div className="h-[7%] bg-black/90 flex items-center px-[4%] justify-between">
        <span className="text-[5px] text-[#f59e0b] font-bold tracking-[0.8px]">GOESCA</span>
        <span className="text-[4px] text-white/60">🛒 2</span>
      </div>
      <div className="flex-1 bg-[#0a0e14] p-[4%] flex flex-col gap-2">
        <div className="text-[4px] text-white font-semibold">Ofertas destacadas</div>
        <div className="grid grid-cols-2 gap-[3px]">
          {[0,1,2,3].map(i=>(
            <div key={i} className="bg-white/[0.04] border border-white/[0.07] rounded p-[3px]">
              <div className="h-[20px] rounded-sm mb-[2px]" style={{background:['#e0d4f5','#d0e4f5','#f5e8d5','#d5f5e8'][i]}} />
              <div className="text-[2px] text-gray-300">DOWNY {i}</div>
              <div className="text-[2.5px] text-[#f59e0b] font-bold">$1,890</div>
            </div>
          ))}
        </div>
        <div className="text-[3px] text-blue-400 font-medium mt-auto">Ver todo →</div>
      </div>
      <PhoneNav active={1} />
    </div>,

    /* 2 — Checkout */
    <div key="c" className="absolute inset-0 flex flex-col">
      <PhoneStatusBar />
      <div className="h-[7%] bg-black/90 flex items-center px-[4%] justify-between">
        <span className="text-[5px] text-[#f59e0b] font-bold tracking-[0.8px]">GOESCA</span>
        <span className="text-[3.5px] text-white/50">← Volver</span>
      </div>
      <div className="flex-1 bg-[#0a0e14] p-[4%] flex flex-col gap-2">
        <div className="text-[4px] text-white font-semibold">Mi carrito</div>
        {[0,1].map(i=>(
          <div key={i} className="flex gap-[5px] bg-white/[0.04] rounded p-[5px]">
            <div className="w-[22px] h-[22px] rounded shrink-0" style={{background:['#e0d4f5','#d0e4f5'][i]}} />
            <div className="flex-1 flex flex-col justify-between">
              <div className="text-[2px] text-gray-300">DOWNY BRISA {i===0?'VERANO':'INTENSA'}</div>
              <div className="text-[2.5px] text-[#f59e0b] font-bold">$1,890</div>
            </div>
          </div>
        ))}
        <div className="mt-auto border-t border-white/10 pt-2 flex justify-between">
          <span className="text-[2.5px] text-gray-400">Total</span>
          <span className="text-[3.5px] text-[#f59e0b] font-bold">$3,780</span>
        </div>
        <div className="py-[4px] bg-emerald-600 rounded text-center text-white text-[2.5px] font-semibold">
          Comprar por WhatsApp
        </div>
      </div>
      <PhoneNav active={2} />
    </div>,
  ];

  return (
    <div className="group relative -ml-6 lg:-ml-12">
      <style>{`
        @keyframes ph-cycle{0%,22%{opacity:1}26%,56%{opacity:0}60%,90%{opacity:0}94%,100%{opacity:0}}
        @keyframes ph-cycle-1{0%,22%{opacity:0}26%,56%{opacity:1}60%,90%{opacity:0}94%,100%{opacity:0}}
        @keyframes ph-cycle-2{0%,56%{opacity:0}60%,90%{opacity:1}94%,100%{opacity:0}}
        .ph-p0{animation:ph-cycle ${dur}s ease-in-out infinite}
        .ph-p1{animation:ph-cycle-1 ${dur}s ease-in-out infinite}
        .ph-p2{animation:ph-cycle-2 ${dur}s ease-in-out infinite}
        .ph-p0{animation-fill-mode:both}
        @media(prefers-reduced-motion:reduce){
          .ph-p0,.ph-p1,.ph-p2{animation:none}
          .ph-p0{opacity:1}.ph-p1,.ph-p2{opacity:0}
        }
      `}</style>

      <div className="animate-float-delay">
        <svg viewBox="0 0 210 440" className="w-full max-w-[155px] transition-transform duration-500 group-hover:scale-[1.02] group-hover:-translate-y-1" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="pFrame" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#3a3f48"/>
              <stop offset="30%" stopColor="#555"/>
              <stop offset="50%" stopColor="#666"/>
              <stop offset="70%" stopColor="#555"/>
              <stop offset="100%" stopColor="#3a3f48"/>
            </linearGradient>
            <filter id="pShadow"><feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#000" floodOpacity="0.5"/></filter>
            <clipPath id="pScreen"><rect x="14" y="14" width="182" height="412" rx="24"/></clipPath>
          </defs>

          {/* Desk shadow */}
          <ellipse cx="105" cy="434" rx="50" ry="5" fill="rgba(0,0,0,0.22)"/>

          {/* Phone body */}
          <rect x="8" y="8" width="194" height="424" rx="30" fill="url(#pFrame)" filter="url(#pShadow)"/>

          {/* Side buttons */}
          <rect x="3" y="100" width="2.5" height="20" rx="1" fill="#888"/>
          <rect x="3" y="128" width="2.5" height="32" rx="1" fill="#888"/>
          <rect x="3" y="168" width="2.5" height="32" rx="1" fill="#888"/>
          <rect x="204.5" y="140" width="2.5" height="38" rx="1" fill="#888"/>

          {/* Inner screen */}
          <rect x="14" y="14" width="182" height="412" rx="24" fill="#0a0e14"/>

          {/* Dynamic Island */}
          <rect x="62" y="20" width="86" height="24" rx="12" fill="#000"/>
          <circle cx="122" cy="32" r="4.5" fill="#1a1e24"/>
          <circle cx="122" cy="32" r="3" fill="#0a0e14"/>

          {/* Screen content */}
          <g clipPath="url(#pScreen)">
            {pages.map((p,i) => (
              <foreignObject key={i} x="14" y="14" width="182" height="412" className={i===0?'ph-p0':`ph-p${i}`}>
                <div className="w-full h-full">{p}</div>
              </foreignObject>
            ))}
          </g>

          {/* Home indicator */}
          <rect x="70" y="426" width="70" height="3.5" rx="2" fill="#fff" opacity="0.2"/>
        </svg>
      </div>
    </div>
  );
}

/* ─── SHARED PIECES ───────────────────────────────────── */
function Bar({ url }: { url: string }) {
  return (
    <div className="h-[8%] bg-[#161b22] flex items-center px-[2%] gap-[4px]">
      <span className="w-[5px] h-[5px] rounded-full bg-[#ff5f57]"/>
      <span className="w-[5px] h-[5px] rounded-full bg-[#febc2e]"/>
      <span className="w-[5px] h-[5px] rounded-full bg-[#28c840]"/>
      <div className="ml-2 flex-1 h-[10px] rounded bg-[#0d1117] border border-[#30363d] flex items-center px-2">
        <span className="text-[3.5px] text-[#8b949e]">🔒 {url}</span>
      </div>
    </div>
  );
}

function Nav({ brand, cart }: { brand: string; cart?: string }) {
  return (
    <div className="h-[7%] bg-black/88 flex items-center px-[3%] justify-between">
      <span className="text-[5px] text-[#f59e0b] font-bold tracking-[1px]">{brand}</span>
      <span className="text-[4px] text-white/60">{cart ? `🛒 ${cart}` : '☰'}</span>
    </div>
  );
}

function Footer() {
  return (
    <div className="h-[7%] bg-[#0a0e14] border-t border-white/[0.06] flex items-center justify-between px-[3%]">
      <span className="text-[3px] text-[#f59e0b] font-semibold tracking-[0.5px]">GOESCA</span>
      <span className="text-[2.5px] text-gray-500">© 2026</span>
    </div>
  );
}

function PhoneStatusBar() {
  return (
    <div className="h-[5%] bg-black flex items-center justify-between px-[5%] pt-[2px]">
      <span className="text-[6px] text-white font-semibold">9:41</span>
      <div className="flex items-center gap-[3px]">
        <svg className="w-[10px] h-[6px]" viewBox="0 0 12 7" fill="white">
          <rect x="0" y="4" width="2" height="3" rx="0.5" opacity="0.4"/>
          <rect x="3" y="3" width="2" height="4" rx="0.5" opacity="0.6"/>
          <rect x="6" y="1.5" width="2" height="5.5" rx="0.5" opacity="0.8"/>
          <rect x="9" y="0" width="2" height="7" rx="0.5"/>
        </svg>
        <svg className="w-[12px] h-[6px]" viewBox="0 0 14 7" fill="none" stroke="white" strokeWidth="0.8">
          <rect x="0.5" y="0.5" width="11" height="6" rx="1.5"/>
          <rect x="12" y="2" width="1.5" height="3" rx="0.5" fill="white"/>
          <rect x="1.5" y="1.5" width="7" height="4" rx="0.5" fill="#28c840"/>
        </svg>
      </div>
    </div>
  );
}

function PhoneNav({ active }: { active: number }) {
  const items = ['🏠','📦','🛒','💬','👤'];
  return (
    <div className="h-[8%] bg-[#0a0e14] border-t border-white/[0.06] flex items-center justify-around px-[3%]">
      {items.map((e,i) => (
        <span key={i} className={`text-[6px] ${i===active?'text-[#f59e0b]':'text-gray-500'}`}>{e}</span>
      ))}
    </div>
  );
}
