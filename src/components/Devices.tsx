"use client";

export default function Devices() {
  return (
    <div className="relative flex justify-center lg:justify-end items-end" style={{ perspective: "1400px" }}>
      <div className="relative" style={{ transform: "rotateY(-6deg) rotateX(3deg)", transformStyle: "preserve-3d" }}>
        <Laptop />
        <Phone />
      </div>
    </div>
  );
}

/* ─── LAPTOP ──────────────────────────────────────────── */
function Laptop() {
  const dur = 14;

  const pages = [
    /* 0 — Hero */
    <div key="h" className="absolute inset-0 flex flex-col">
      <Bar url="goesca.store" />
      <Nav brand="GOESCA" />
      <div className="flex-1 bg-gradient-to-br from-[#111827] via-[#1a2332] to-[#0f172a] relative overflow-hidden">
        <div className="absolute inset-0 flex flex-col justify-center px-[5%] gap-2">
          <span className="text-[5px] text-[#f59e0b] font-bold tracking-[1px]">GOESCA</span>
          <p className="text-[10px] text-white font-semibold leading-[1.15]">
            Productos de aseo<br />al mejor <span className="text-[#f59e0b]">precio</span>
          </p>
          <p className="text-[4px] text-gray-400 leading-relaxed max-w-[50%]">
            Limpieza para tu hogar y negocio. Envíos a todo Chile.
          </p>
          <span className="mt-1 inline-flex w-fit px-3 py-[3px] bg-[#f59e0b] rounded text-white text-[3.5px] font-semibold">
            Ver catálogo →
          </span>
        </div>
        <div className="absolute right-[4%] top-[8%] grid grid-cols-2 gap-[4px]">
          {[0,1,2,3].map(i => (
            <div key={i} className="w-[60px] h-[44px] rounded bg-white/[0.06] border border-white/[0.08] p-[3px] flex flex-col justify-between">
              <div className="rounded-sm h-[18px]" style={{background:['#e0d4f5','#d0e4f5','#f5e8d5','#d5f5e8'][i]}} />
              <div>
                <div className="text-[2.5px] text-gray-300">DOWNY {i}</div>
                <div className="text-[3px] text-[#f59e0b] font-bold">$1,890</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>,

    /* 1 — Products */
    <div key="p" className="absolute inset-0 flex flex-col">
      <Bar url="goesca.store/categoria" />
      <Nav brand="GOESCA" />
      <div className="flex-1 bg-[#0a0e14] flex gap-2 p-[3%]">
        <div className="w-[15%] shrink-0 space-y-[3px] pt-1">
          <div className="text-[3.5px] text-white font-semibold mb-1">Categorías</div>
          {['Ofertas','Lavandería','Suavizantes','Papel','Higiene'].map((c,i)=>(
            <div key={c} className={`text-[3px] py-[1px] ${i===1?'text-[#f59e0b] font-medium':'text-gray-500'}`}>{c}</div>
          ))}
        </div>
        <div className="flex-1 grid grid-cols-3 gap-[4px]">
          {[0,1,2,3,4,5].map(i=>(
            <div key={i} className="rounded bg-white/[0.04] border border-white/[0.07] p-[3px]">
              <div className="h-[24px] rounded-sm mb-1" style={{background:['#e0d4f5','#d0e4f5','#f5e8d5','#d5f5e8','#e0d4f5','#d0e4f5'][i]}} />
              <div className="text-[2.5px] text-gray-300">PRODUCTO {i+1}</div>
              <div className="text-[3px] text-[#f59e0b] font-bold">$1,890</div>
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
        <div className="text-[5px] text-white font-semibold">Mi carrito (2)</div>
        {[0,1].map(i=>(
          <div key={i} className="flex gap-2 bg-white/[0.04] rounded p-2">
            <div className="w-[30px] h-[30px] rounded shrink-0" style={{background:['#e0d4f5','#d0e4f5'][i]}} />
            <div className="flex-1 flex flex-col justify-between">
              <div className="text-[3px] text-gray-300">DOWNY BRISA {i===0?'VERANO':'INTENSA'}</div>
              <div className="text-[3.5px] text-[#f59e0b] font-bold">$1,890</div>
            </div>
          </div>
        ))}
        <div className="mt-auto border-t border-white/10 pt-2 flex justify-between">
          <span className="text-[3.5px] text-gray-400">Total</span>
          <span className="text-[5px] text-[#f59e0b] font-bold">$3,780</span>
        </div>
        <div className="py-[6px] bg-emerald-600 rounded text-center text-white text-[3.5px] font-semibold">
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
        <div className="text-[4px] text-[#f59e0b] font-semibold tracking-[0.5px]">SOBRE NOSOTROS</div>
        <div className="text-[9px] text-white font-semibold leading-tight">Productos de aseo<br/>de calidad</div>
        <div className="text-[3.5px] text-gray-400 max-w-[65%] leading-relaxed">
          Más de 5 años entregando soluciones de limpieza a hogares y negocios en todo Chile.
        </div>
      </div>
      <Footer />
    </div>,
  ];

  return (
    <div className="relative z-10">
      <style>{`
        @keyframes lc{0%,18%{opacity:1}22%,43%{opacity:0}47%,68%{opacity:0}72%,93%{opacity:0}97%,100%{opacity:0}}
        @keyframes lc1{0%,18%{opacity:0}22%,43%{opacity:1}47%,68%{opacity:0}72%,93%{opacity:0}97%,100%{opacity:0}}
        @keyframes lc2{0%,43%{opacity:0}47%,68%{opacity:1}72%,93%{opacity:0}97%,100%{opacity:0}}
        @keyframes lc3{0%,68%{opacity:0}72%,93%{opacity:1}97%,100%{opacity:0}}
        .lp0{animation:lc ${dur}s ease-in-out infinite}
        .lp1{animation:lc1 ${dur}s ease-in-out infinite}
        .lp2{animation:lc2 ${dur}s ease-in-out infinite}
        .lp3{animation:lc3 ${dur}s ease-in-out infinite}
        .lp0{animation-fill-mode:both}
        @media(prefers-reduced-motion:reduce){.lp0,.lp1,.lp2,.lp3{animation:none}.lp0{opacity:1}.lp1,.lp2,.lp3{opacity:0}}
      `}</style>

      <div className="animate-float">
        <svg viewBox="0 0 700 520" className="w-full max-w-[560px]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="lBody" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2c2c2c"/>
              <stop offset="50%" stopColor="#1a1a1a"/>
              <stop offset="100%" stopColor="#111"/>
            </linearGradient>
            <linearGradient id="lLid" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#333"/>
              <stop offset="100%" stopColor="#1a1a1a"/>
            </linearGradient>
            <linearGradient id="lKey" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#222"/>
              <stop offset="100%" stopColor="#181818"/>
            </linearGradient>
            <filter id="lSh"><feDropShadow dx="0" dy="15" stdDeviation="20" floodColor="#000" floodOpacity="0.5"/></filter>
            <clipPath id="lScr"><rect x="58" y="38" width="584" height="340" rx="3"/></clipPath>
          </defs>

          {/* Shadow */}
          <ellipse cx="350" cy="500" rx="180" ry="10" fill="rgba(0,0,0,0.3)"/>

          {/* === LID (screen part) === */}
          <g transform="rotate(-2, 350, 400)">
            {/* Lid outer */}
            <rect x="30" y="16" width="640" height="390" rx="12" fill="url(#lLid)" filter="url(#lSh)"/>
            {/* Lid top edge highlight */}
            <rect x="30" y="16" width="640" height="1.5" fill="rgba(255,255,255,0.08)" rx="1"/>
            {/* Lid left edge */}
            <rect x="30" y="16" width="1.5" height="390" fill="rgba(255,255,255,0.05)"/>
            {/* Lid right edge */}
            <rect x="668.5" y="16" width="1.5" height="390" fill="rgba(255,255,255,0.05)"/>

            {/* Bezel */}
            <rect x="42" y="28" width="616" height="366" rx="6" fill="#111"/>

            {/* Screen */}
            <rect x="58" y="38" width="584" height="340" fill="#0a0e14"/>
            <rect x="58" y="38" width="584" height="340" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" rx="3"/>

            {/* Camera */}
            <circle cx="350" cy="22" r="2" fill="#1a1a1a"/>
            <circle cx="350" cy="22" r="0.8" fill="#0d0d0d"/>

            {/* Animated content */}
            <g clipPath="url(#lScr)">
              {pages.map((p,i) => (
                <foreignObject key={i} x="58" y="38" width="584" height="340" className={i===0?'lp0':`lp${i}`}>
                  <div className="w-full h-full">{p}</div>
                </foreignObject>
              ))}
            </g>
          </g>

          {/* === BASE (keyboard part) === */}
          <g>
            {/* Base top surface */}
            <path d="M50,410 L650,410 L670,450 L30,450 Z" fill="url(#lKey)"/>
            {/* Base front edge */}
            <path d="M30,450 L670,450 L668,462 L32,462 Z" fill="#151515"/>
            {/* Base bottom edge */}
            <path d="M32,462 L668,462 L665,468 L35,468 Z" fill="#0d0d0d"/>

            {/* Trackpad */}
            <rect x="280" y="422" width="140" height="20" rx="4" fill="#1a1a1a" stroke="#2a2a2a" strokeWidth="0.5"/>

            {/* Keyboard area */}
            <g opacity="0.4">
              {[0,1,2,3,4,5,6,7,8,9,10].map(row => (
                Array.from({length: row === 0 ? 14 : row === 10 ? 8 : 13}, (_, col) => {
                  const w = row === 10 ? 18 : (col === 0 && row === 0) ? 22 : 14;
                  const x = 80 + col * 40 + (row === 10 ? 10 : 0);
                  const y = 416 + row * 2.5;
                  return <rect key={`${row}-${col}`} x={x} y={y} width={w} height="2" rx="0.5" fill="#2a2a2a"/>;
                })
              ))}
            </g>

            {/* Hinge line */}
            <line x1="40" y1="410" x2="660" y2="410" stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>
          </g>
        </svg>
      </div>
    </div>
  );
}

/* ─── PHONE (leaning against laptop) ──────────────────── */
function Phone() {
  const dur = 11;

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
    <div className="absolute z-20" style={{ right: "2%", bottom: "8%", transform: "rotate(4deg)" }}>
      <style>{`
        @keyframes pc{0%,22%{opacity:1}26%,56%{opacity:0}60%,90%{opacity:0}94%,100%{opacity:0}}
        @keyframes pc1{0%,22%{opacity:0}26%,56%{opacity:1}60%,90%{opacity:0}94%,100%{opacity:0}}
        @keyframes pc2{0%,56%{opacity:0}60%,90%{opacity:1}94%,100%{opacity:0}}
        .pp0{animation:pc ${dur}s ease-in-out infinite}
        .pp1{animation:pc1 ${dur}s ease-in-out infinite}
        .pp2{animation:pc2 ${dur}s ease-in-out infinite}
        .pp0{animation-fill-mode:both}
        @media(prefers-reduced-motion:reduce){.pp0,.pp1,.pp2{animation:none}.pp0{opacity:1}.pp1,.pp2{opacity:0}}
      `}</style>

      <svg viewBox="0 0 180 380" className="w-full max-w-[120px]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="pBody" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#2a2a2a"/>
            <stop offset="30%" stopColor="#3a3a3a"/>
            <stop offset="50%" stopColor="#444"/>
            <stop offset="70%" stopColor="#3a3a3a"/>
            <stop offset="100%" stopColor="#2a2a2a"/>
          </linearGradient>
          <filter id="pSh"><feDropShadow dx="3" dy="8" stdDeviation="10" floodColor="#000" floodOpacity="0.5"/></filter>
          <clipPath id="pScr"><rect x="12" y="12" width="156" height="356" rx="22"/></clipPath>
        </defs>

        {/* Phone body */}
        <rect x="6" y="6" width="168" height="368" rx="28" fill="url(#pBody)" filter="url(#pSh)"/>

        {/* Side buttons */}
        <rect x="1" y="85" width="3" height="18" rx="1.5" fill="#888"/>
        <rect x="1" y="110" width="3" height="28" rx="1.5" fill="#888"/>
        <rect x="1" y="145" width="3" height="28" rx="1.5" fill="#888"/>
        <rect x="176" y="120" width="3" height="35" rx="1.5" fill="#888"/>

        {/* Inner screen */}
        <rect x="12" y="12" width="156" height="356" rx="22" fill="#0a0e14"/>
        <rect x="12" y="12" width="156" height="356" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" rx="22"/>

        {/* Dynamic Island */}
        <rect x="52" y="18" width="76" height="20" rx="10" fill="#000"/>
        <circle cx="106" cy="28" r="4" fill="#1a1a1a"/>
        <circle cx="106" cy="28" r="2.5" fill="#0a0e14"/>

        {/* Screen content */}
        <g clipPath="url(#pScr)">
          {pages.map((p,i) => (
            <foreignObject key={i} x="12" y="12" width="156" height="356" className={i===0?'pp0':`pp${i}`}>
              <div className="w-full h-full">{p}</div>
            </foreignObject>
          ))}
        </g>

        {/* Home indicator */}
        <rect x="58" y="370" width="64" height="3" rx="1.5" fill="#fff" opacity="0.15"/>
      </svg>
    </div>
  );
}

/* ─── SHARED PIECES ───────────────────────────────────── */
function Bar({ url }: { url: string }) {
  return (
    <div className="h-[8%] bg-[#161b22] flex items-center px-[2%] gap-[5px]">
      <span className="w-[6px] h-[6px] rounded-full bg-[#ff5f57]"/>
      <span className="w-[6px] h-[6px] rounded-full bg-[#febc2e]"/>
      <span className="w-[6px] h-[6px] rounded-full bg-[#28c840]"/>
      <div className="ml-2 flex-1 h-[12px] rounded bg-[#0d1117] border border-[#30363d] flex items-center px-2">
        <span className="text-[4px] text-[#8b949e]">🔒 {url}</span>
      </div>
    </div>
  );
}

function Nav({ brand, cart }: { brand: string; cart?: string }) {
  return (
    <div className="h-[7%] bg-black/88 flex items-center px-[3%] justify-between">
      <span className="text-[6px] text-[#f59e0b] font-bold tracking-[1px]">{brand}</span>
      <span className="text-[5px] text-white/60">{cart ? `🛒 ${cart}` : '☰'}</span>
    </div>
  );
}

function Footer() {
  return (
    <div className="h-[7%] bg-[#0a0e14] border-t border-white/[0.06] flex items-center justify-between px-[3%]">
      <span className="text-[3.5px] text-[#f59e0b] font-semibold tracking-[0.5px]">GOESCA</span>
      <span className="text-[3px] text-gray-500">© 2026</span>
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
