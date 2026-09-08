"use client";

export default function Devices() {
  return (
    <div className="relative flex justify-center lg:justify-end items-end gap-4 lg:gap-6">
      <Monitor />
      <Phone />
    </div>
  );
}

function Monitor() {
  const pages = [
    /* Page 0: Hero */
    <div key="hero" className="w-full h-full flex flex-col">
      <div className="h-[10%] bg-[#161b22] flex items-center px-3 gap-1.5">
        <span className="w-2 h-2 rounded-full bg-[#ef4444]" />
        <span className="w-2 h-2 rounded-full bg-[#eab308]" />
        <span className="w-2 h-2 rounded-full bg-[#22c55e]" />
        <span className="ml-3 flex-1 h-3 rounded bg-[#0d1117] border border-[#30363d] flex items-center px-2">
          <span className="text-[3px] text-[#8b949e]">🔒 goesca.store</span>
        </span>
      </div>
      <div className="h-[8%] bg-black/85 flex items-center px-3 justify-between">
        <span className="text-[4px] text-[#f68b1f] font-bold tracking-[1px]">GOESCA</span>
        <span className="text-[3px] text-white/70">☰</span>
      </div>
      <div className="flex-1 bg-gradient-to-br from-[#1a2332] to-[#162030] flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5">
          <span className="text-[4px] text-[#f68b1f] font-bold tracking-[0.5px]">GOESCA</span>
          <span className="text-[7px] text-white font-bold text-center leading-tight">Productos de aseo<br/>al mejor <span className="text-[#f68b1f]">precio</span></span>
          <span className="text-[3.5px] text-[#9ca3af]">Limpieza para tu hogar y negocio</span>
          <span className="mt-1 px-2 py-0.5 bg-[#f68b1f] rounded text-white text-[3px] font-bold">Ver catálogo →</span>
        </div>
        <div className="absolute right-3 top-2 grid grid-cols-2 gap-1">
          {[0,1,2,3].map(i => (
            <div key={i} className="w-7 h-5 rounded bg-white/5 border border-white/10 flex items-center justify-center">
              <div className="w-4 h-3 rounded-sm" style={{background: ['#e8d5f5','#d5e8f5','#f5e8d5','#d5f5e8'][i]}} />
            </div>
          ))}
        </div>
      </div>
      <div className="h-[10%] bg-[#0d1117] flex items-center justify-between px-3">
        <span className="text-[3px] text-[#f68b1f] font-bold">GOESCA</span>
        <span className="text-[2.5px] text-[#6b7280]">© 2026</span>
      </div>
    </div>,
    /* Page 1: Products */
    <div key="products" className="w-full h-full flex flex-col">
      <div className="h-[10%] bg-[#161b22] flex items-center px-3 gap-1.5">
        <span className="w-2 h-2 rounded-full bg-[#ef4444]" />
        <span className="w-2 h-2 rounded-full bg-[#eab308]" />
        <span className="w-2 h-2 rounded-full bg-[#22c55e]" />
        <span className="ml-3 flex-1 h-3 rounded bg-[#0d1117] border border-[#30363d] flex items-center px-2">
          <span className="text-[3px] text-[#8b949e]">🔒 goesca.store/categoria/lavanderia</span>
        </span>
      </div>
      <div className="h-[8%] bg-black/85 flex items-center px-3 justify-between">
        <span className="text-[4px] text-[#f68b1f] font-bold tracking-[1px]">GOESCA</span>
        <span className="text-[3px] text-white/70">☰</span>
      </div>
      <div className="flex-1 bg-[#0d1117] p-2 flex gap-2">
        <div className="w-[18%] space-y-1">
          <span className="text-[3px] text-white font-bold block">Categorías</span>
          {['Ofertas','Lavandería','Suavizantes','Papel','Higiene'].map((c,i) => (
            <span key={c} className={`text-[2.5px] block ${i===1 ? 'text-[#f68b1f]' : 'text-[#9ca3af]'}`}>{c}</span>
          ))}
        </div>
        <div className="flex-1 grid grid-cols-3 gap-1">
          {[0,1,2,3,4,5].map(i => (
            <div key={i} className="bg-white/5 rounded p-1 flex flex-col gap-0.5">
              <div className="w-full h-3 rounded-sm" style={{background: ['#e8d5f5','#d5e8f5','#f5e8d5','#d5f5e8','#e8d5f5','#d5e8f5'][i]}} />
              <span className="text-[2.5px] text-white">DOWNY {i}</span>
              <span className="text-[3px] text-[#f68b1f] font-bold">$1,890</span>
            </div>
          ))}
        </div>
      </div>
      <div className="h-[10%] bg-[#0d1117] flex items-center justify-between px-3">
        <span className="text-[3px] text-[#f68b1f] font-bold">GOESCA</span>
        <span className="text-[2.5px] text-[#6b7280]">© 2026</span>
      </div>
    </div>,
    /* Page 2: Cart */
    <div key="cart" className="w-full h-full flex flex-col">
      <div className="h-[10%] bg-[#161b22] flex items-center px-3 gap-1.5">
        <span className="w-2 h-2 rounded-full bg-[#ef4444]" />
        <span className="w-2 h-2 rounded-full bg-[#eab308]" />
        <span className="w-2 h-2 rounded-full bg-[#22c55e]" />
        <span className="ml-3 flex-1 h-3 rounded bg-[#0d1117] border border-[#30363d] flex items-center px-2">
          <span className="text-[3px] text-[#8b949e]">🔒 goesca.store/carrito</span>
        </span>
      </div>
      <div className="h-[8%] bg-black/85 flex items-center px-3 justify-between">
        <span className="text-[4px] text-[#f68b1f] font-bold tracking-[1px]">GOESCA</span>
        <span className="text-[3px] text-white/70">🛒 2</span>
      </div>
      <div className="flex-1 bg-[#0d1117] p-2 space-y-1.5">
        <span className="text-[4px] text-white font-bold block">Mi carrito (2)</span>
        {[0,1].map(i => (
          <div key={i} className="flex gap-1.5 bg-white/5 rounded p-1.5">
            <div className="w-5 h-5 rounded" style={{background: ['#e8d5f5','#d5e8f5'][i]}} />
            <div className="flex-1">
              <span className="text-[2.5px] text-white block">DOWNY BRISA {i===0?'DE VERANO':'INTENSA'}</span>
              <span className="text-[3px] text-[#f68b1f] font-bold">$1,890</span>
            </div>
          </div>
        ))}
        <div className="flex justify-between items-center pt-1 border-t border-white/10">
          <span className="text-[3px] text-[#9ca3af]">Total</span>
          <span className="text-[4px] text-[#f68b1f] font-bold">$3,780</span>
        </div>
        <div className="w-full py-1 bg-[#22c55e] rounded text-center text-white text-[3px] font-bold">Comprar por WhatsApp</div>
      </div>
      <div className="h-[10%] bg-[#0d1117] flex items-center justify-between px-3">
        <span className="text-[3px] text-[#f68b1f] font-bold">GOESCA</span>
        <span className="text-[2.5px] text-[#6b7280]">© 2026</span>
      </div>
    </div>,
    /* Page 3: About */
    <div key="about" className="w-full h-full flex flex-col">
      <div className="h-[10%] bg-[#161b22] flex items-center px-3 gap-1.5">
        <span className="w-2 h-2 rounded-full bg-[#ef4444]" />
        <span className="w-2 h-2 rounded-full bg-[#eab308]" />
        <span className="w-2 h-2 rounded-full bg-[#22c55e]" />
        <span className="ml-3 flex-1 h-3 rounded bg-[#0d1117] border border-[#30363d] flex items-center px-2">
          <span className="text-[3px] text-[#8b949e]">🔒 goesca.store/nosotros</span>
        </span>
      </div>
      <div className="h-[8%] bg-black/85 flex items-center px-3 justify-between">
        <span className="text-[4px] text-[#f68b1f] font-bold tracking-[1px]">GOESCA</span>
        <span className="text-[3px] text-white/70">☰</span>
      </div>
      <div className="flex-1 bg-gradient-to-b from-[#1a2332] to-[#0d1117] p-3 flex flex-col items-center justify-center text-center gap-2">
        <span className="text-[4px] text-[#f68b1f] font-bold">SOBRE NOSOTROS</span>
        <span className="text-[6px] text-white font-bold leading-tight">Productos de aseo<br/>de calidad</span>
        <span className="text-[3px] text-[#9ca3af] max-w-[80%] text-center leading-relaxed">Más de 5 años entregando soluciones de limpieza a hogares y negocios en todo Chile.</span>
        <div className="flex gap-2 mt-1">
          {['🚚 Envío','✅ Garantía','💬 Soporte'].map(t => (
            <span key={t} className="text-[2.5px] text-white bg-white/5 rounded px-1.5 py-0.5">{t}</span>
          ))}
        </div>
      </div>
      <div className="h-[10%] bg-[#0d1117] flex items-center justify-between px-3">
        <span className="text-[3px] text-[#f68b1f] font-bold">GOESCA</span>
        <span className="text-[2.5px] text-[#6b7280]">© 2026</span>
      </div>
    </div>,
  ];

  return (
    <div className="group relative">
      <style>{`
        @keyframes monitor-browse {
          0%, 20% { opacity: 1; }
          23%, 43% { opacity: 0; }
          46%, 66% { opacity: 0; }
          69%, 89% { opacity: 0; }
          92%, 100% { opacity: 0; }
        }
        @keyframes monitor-browse-p1 {
          0%, 20% { opacity: 0; }
          23%, 43% { opacity: 1; }
          46%, 66% { opacity: 0; }
          69%, 89% { opacity: 0; }
          92%, 100% { opacity: 0; }
        }
        @keyframes monitor-browse-p2 {
          0%, 43% { opacity: 0; }
          46%, 66% { opacity: 1; }
          69%, 89% { opacity: 0; }
          92%, 100% { opacity: 0; }
        }
        @keyframes monitor-browse-p3 {
          0%, 66% { opacity: 0; }
          69%, 89% { opacity: 1; }
          92%, 100% { opacity: 0; }
        }
        .monitor-page-0 { animation: monitor-browse 12s ease-in-out infinite; }
        .monitor-page-1 { animation: monitor-browse-p1 12s ease-in-out infinite; }
        .monitor-page-2 { animation: monitor-browse-p2 12s ease-in-out infinite; }
        .monitor-page-3 { animation: monitor-browse-p3 12s ease-in-out infinite; }
        .monitor-page-active { animation: none; opacity: 1; }
        @media (prefers-reduced-motion: reduce) {
          .monitor-page-0, .monitor-page-1, .monitor-page-2, .monitor-page-3 { animation: none; }
          .monitor-page-0 { opacity: 1; }
          .monitor-page-1, .monitor-page-2, .monitor-page-3 { opacity: 0; }
        }
      `}</style>
      <div className="animate-float">
        <svg viewBox="0 0 640 480" className="w-full max-w-2xl transition-transform duration-500 group-hover:scale-[1.02]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="mf" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1e293b" />
              <stop offset="50%" stopColor="#0f172a" />
              <stop offset="100%" stopColor="#1e293b" />
            </linearGradient>
            <linearGradient id="sn" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#475569" />
              <stop offset="50%" stopColor="#94a3b8" />
              <stop offset="100%" stopColor="#475569" />
            </linearGradient>
            <linearGradient id="sb" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#64748b" />
              <stop offset="100%" stopColor="#334155" />
            </linearGradient>
            <filter id="ms"><feDropShadow dx="0" dy="10" stdDeviation="15" floodColor="#000" floodOpacity="0.5"/></filter>
          </defs>
          <ellipse cx="320" cy="450" rx="180" ry="10" fill="rgba(0,0,0,0.3)" />
          <ellipse cx="320" cy="435" rx="80" ry="10" fill="url(#sb)" />
          <rect x="310" y="390" width="20" height="48" fill="url(#sn)" />
          <rect x="40" y="20" width="560" height="360" rx="4" fill="url(#mf)" filter="url(#ms)" />
          <rect x="40" y="20" width="560" height="6" fill="#1e293b" />
          <rect x="40" y="374" width="560" height="6" fill="#1e293b" />
          <rect x="40" y="20" width="5" height="360" fill="#1e293b" />
          <rect x="595" y="20" width="5" height="360" fill="#1e293b" />
          <circle cx="320" cy="24" r="2" fill="#334155" />
          <circle cx="320" cy="24" r="1" fill="#1e293b" />
          <rect x="45" y="26" width="550" height="348" fill="#0d1117" />
          {pages.map((page, i) => (
            <foreignObject key={i} x="45" y="26" width="550" height="348" className={i === 0 ? 'monitor-page-active' : `monitor-page-${i}`}>
              <div className="w-full h-full">{page}</div>
            </foreignObject>
          ))}
        </svg>
      </div>
    </div>
  );
}

function Phone() {
  const pages = [
    /* Page 0: Hero */
    <div key="hero" className="w-full h-full flex flex-col">
      <div className="h-[6%] bg-black flex items-center justify-between px-3">
        <span className="text-white text-[6px] font-semibold">9:41</span>
        <span className="flex items-center gap-0.5">
          <span className="w-2 h-[3px] bg-[#22c55e] rounded-sm" />
        </span>
      </div>
      <div className="h-[7%] bg-black/85 flex items-center px-3 justify-between">
        <span className="text-[4px] text-[#f68b1f] font-bold tracking-[1px]">GOESCA</span>
        <span className="text-[3px] text-white/70">🛒</span>
      </div>
      <div className="flex-1 bg-gradient-to-br from-[#1a2332] to-[#162030] flex flex-col items-center justify-center text-center p-3 gap-1.5">
        <span className="text-[3px] text-[#f68b1f] font-bold tracking-[0.5px]">GOESCA</span>
        <span className="text-[5px] text-white font-bold leading-tight">Productos de aseo<br/>al mejor <span className="text-[#f68b1f]">precio</span></span>
        <span className="text-[2.5px] text-[#9ca3af]">Envíos a todo Chile</span>
        <span className="mt-1 px-2 py-0.5 bg-[#f68b1f] rounded text-white text-[2.5px] font-bold">Ver catálogo</span>
      </div>
      <div className="h-[13%] bg-[#0d1117] flex items-center justify-around px-2">
        {['🏠','📦','🛒','💬','👤'].map((e,i) => (
          <span key={i} className={`text-[5px] ${i===0?'text-[#f68b1f]':'text-[#9ca3af]'}`}>{e}</span>
        ))}
      </div>
    </div>,
    /* Page 1: Products */
    <div key="products" className="w-full h-full flex flex-col">
      <div className="h-[6%] bg-black flex items-center justify-between px-3">
        <span className="text-white text-[6px] font-semibold">9:41</span>
        <span className="flex items-center gap-0.5">
          <span className="w-2 h-[3px] bg-[#22c55e] rounded-sm" />
        </span>
      </div>
      <div className="h-[7%] bg-black/85 flex items-center px-3 justify-between">
        <span className="text-[4px] text-[#f68b1f] font-bold tracking-[1px]">GOESCA</span>
        <span className="text-[3px] text-white/70">🛒 2</span>
      </div>
      <div className="flex-1 bg-[#0d1117] p-2 space-y-1.5">
        <span className="text-[3.5px] text-white font-bold block">Ofertas destacadas</span>
        <div className="grid grid-cols-2 gap-1">
          {[0,1,2,3].map(i => (
            <div key={i} className="bg-white/5 rounded p-1 flex flex-col gap-0.5">
              <div className="w-full h-4 rounded-sm" style={{background: ['#e8d5f5','#d5e8f5','#f5e8d5','#d5f5e8'][i]}} />
              <span className="text-[2px] text-white">DOWNY {i}</span>
              <span className="text-[2.5px] text-[#f68b1f] font-bold">$1,890</span>
            </div>
          ))}
        </div>
        <span className="text-[3px] text-[#3b82f6] font-bold block">Ver todo →</span>
      </div>
      <div className="h-[13%] bg-[#0d1117] flex items-center justify-around px-2">
        {['🏠','📦','🛒','💬','👤'].map((e,i) => (
          <span key={i} className={`text-[5px] ${i===2?'text-[#f68b1f]':'text-[#9ca3af]'}`}>{e}</span>
        ))}
      </div>
    </div>,
    /* Page 2: Checkout */
    <div key="checkout" className="w-full h-full flex flex-col">
      <div className="h-[6%] bg-black flex items-center justify-between px-3">
        <span className="text-white text-[6px] font-semibold">9:41</span>
        <span className="flex items-center gap-0.5">
          <span className="w-2 h-[3px] bg-[#22c55e] rounded-sm" />
        </span>
      </div>
      <div className="h-[7%] bg-black/85 flex items-center px-3 justify-between">
        <span className="text-[4px] text-[#f68b1f] font-bold tracking-[1px]">GOESCA</span>
        <span className="text-[3px] text-white/70">← Volver</span>
      </div>
      <div className="flex-1 bg-[#0d1117] p-2 space-y-1.5">
        <span className="text-[3.5px] text-white font-bold block">Mi carrito</span>
        {[0,1].map(i => (
          <div key={i} className="flex gap-1 bg-white/5 rounded p-1">
            <div className="w-4 h-4 rounded" style={{background: ['#e8d5f5','#d5e8f5'][i]}} />
            <div className="flex-1">
              <span className="text-[2px] text-white block">DOWNY BRISA {i===0?'VERANO':'INTENSA'}</span>
              <span className="text-[2.5px] text-[#f68b1f] font-bold">$1,890</span>
            </div>
          </div>
        ))}
        <div className="flex justify-between items-center border-t border-white/10 pt-1">
          <span className="text-[2.5px] text-[#9ca3af]">Total</span>
          <span className="text-[3px] text-[#f68b1f] font-bold">$3,780</span>
        </div>
        <div className="w-full py-1 bg-[#22c55e] rounded text-center text-white text-[2.5px] font-bold">Comprar por WhatsApp</div>
      </div>
      <div className="h-[13%] bg-[#0d1117] flex items-center justify-around px-2">
        {['🏠','📦','🛒','💬','👤'].map((e,i) => (
          <span key={i} className={`text-[5px] ${i===3?'text-[#f68b1f]':'text-[#9ca3af]'}`}>{e}</span>
        ))}
      </div>
    </div>,
  ];

  return (
    <div className="group relative -ml-8 lg:-ml-16">
      <style>{`
        @keyframes phone-browse {
          0%, 25% { opacity: 1; }
          28%, 58% { opacity: 0; }
          61%, 91% { opacity: 0; }
          94%, 100% { opacity: 0; }
        }
        @keyframes phone-browse-p1 {
          0%, 25% { opacity: 0; }
          28%, 58% { opacity: 1; }
          61%, 91% { opacity: 0; }
          94%, 100% { opacity: 0; }
        }
        @keyframes phone-browse-p2 {
          0%, 58% { opacity: 0; }
          61%, 91% { opacity: 1; }
          94%, 100% { opacity: 0; }
        }
        .phone-page-0 { animation: phone-browse 10s ease-in-out infinite; }
        .phone-page-1 { animation: phone-browse-p1 10s ease-in-out infinite; }
        .phone-page-2 { animation: phone-browse-p2 10s ease-in-out infinite; }
        .phone-page-active { animation: none; opacity: 1; }
        @media (prefers-reduced-motion: reduce) {
          .phone-page-0, .phone-page-1, .phone-page-2 { animation: none; }
          .phone-page-0 { opacity: 1; }
          .phone-page-1, .phone-page-2 { opacity: 0; }
        }
      `}</style>
      <div className="animate-float-delay">
        <svg viewBox="0 0 200 420" className="w-full max-w-[140px] transition-transform duration-500 group-hover:scale-[1.03] group-hover:-translate-y-1" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="pf" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#334155" />
              <stop offset="50%" stopColor="#64748b" />
              <stop offset="100%" stopColor="#334155" />
            </linearGradient>
            <filter id="ps"><feDropShadow dx="0" dy="8" stdDeviation="10" floodColor="#000" floodOpacity="0.5"/></filter>
          </defs>
          <ellipse cx="100" cy="405" rx="55" ry="7" fill="rgba(0,0,0,0.3)" />
          <rect x="10" y="10" width="180" height="400" rx="26" fill="url(#pf)" filter="url(#ps)" />
          <rect x="4" y="90" width="3" height="18" rx="1" fill="#94a3b8" />
          <rect x="4" y="116" width="3" height="28" rx="1" fill="#94a3b8" />
          <rect x="4" y="150" width="3" height="28" rx="1" fill="#94a3b8" />
          <rect x="193" y="125" width="3" height="35" rx="1" fill="#94a3b8" />
          <rect x="16" y="16" width="168" height="388" rx="20" fill="#0d1117" />
          <rect x="60" y="22" width="80" height="22" rx="11" fill="#000" />
          <circle cx="116" cy="33" r="4" fill="#1e293b" />
          <circle cx="116" cy="33" r="2.5" fill="#0d1117" />
          <rect x="16" y="48" width="168" height="344" rx="0" fill="#0d1117" />
          {pages.map((page, i) => (
            <foreignObject key={i} x="16" y="48" width="168" height="344" className={i === 0 ? 'phone-page-active' : `phone-page-${i}`}>
              <div className="w-full h-full">{page}</div>
            </foreignObject>
          ))}
          <rect x="68" y="404" width="64" height="3" rx="1.5" fill="#fff" opacity="0.3" />
        </svg>
      </div>
    </div>
  );
}
