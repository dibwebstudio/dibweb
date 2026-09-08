"use client";

import { useState, useEffect } from "react";

export default function Devices() {
  return (
    <div className="relative flex justify-center lg:justify-end items-end gap-6 lg:gap-10">
      <Laptop />
      <Phone />
    </div>
  );
}

function Laptop() {
  const [page, setPage] = useState(0);

  useEffect(() => {
    const i = setInterval(() => setPage(p => (p + 1) % 4), 3500);
    return () => clearInterval(i);
  }, []);

  return (
    <div className="relative">
      {/* Screen */}
      <div className="relative w-[340px] sm:w-[420px] lg:w-[480px] aspect-[16/10] bg-[#111] rounded-t-xl border-2 border-[#2a2a2a] border-b-0 overflow-hidden shadow-2xl">
        {/* Camera */}
        <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#1a1a1a] border border-[#333]">
          <div className="absolute inset-0.5 rounded-full bg-[#0a0a0a]" />
        </div>
        {/* Browser bar */}
        <div className="h-6 bg-[#1c1c1c] flex items-center px-2 gap-1 border-b border-[#333]">
          <div className="w-2 h-2 rounded-full bg-[#ff5f57]" />
          <div className="w-2 h-2 rounded-full bg-[#febc2e]" />
          <div className="w-2 h-2 rounded-full bg-[#28c840]" />
          <div className="ml-2 flex-1 h-4 rounded bg-[#0d0d0d] border border-[#333] flex items-center px-2">
            <span className="text-[8px] text-[#666]">🔒 goesca.store</span>
          </div>
        </div>
        {/* Screen content */}
        <div className="relative flex-1 bg-[#0a0e14] h-[calc(100%-24px)]">
          <div className={`absolute inset-0 transition-opacity duration-500 ${page === 0 ? 'opacity-100' : 'opacity-0'}`}>
            <ScreenHero />
          </div>
          <div className={`absolute inset-0 transition-opacity duration-500 ${page === 1 ? 'opacity-100' : 'opacity-0'}`}>
            <ScreenProducts />
          </div>
          <div className={`absolute inset-0 transition-opacity duration-500 ${page === 2 ? 'opacity-100' : 'opacity-0'}`}>
            <ScreenCart />
          </div>
          <div className={`absolute inset-0 transition-opacity duration-500 ${page === 3 ? 'opacity-100' : 'opacity-0'}`}>
            <ScreenAbout />
          </div>
        </div>
      </div>
      {/* Base / Keyboard */}
      <div className="relative">
        <div className="w-[380px] sm:w-[470px] lg:w-[530px] mx-auto h-3 bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] rounded-b-lg" />
        <div className="w-[340px] sm:w-[420px] lg:w-[480px] mx-auto h-5 bg-gradient-to-b from-[#222] to-[#181818] rounded-b-xl shadow-lg">
          {/* Trackpad */}
          <div className="mx-auto mt-1 w-20 h-2 rounded bg-[#2a2a2a] border border-[#333]" />
        </div>
      </div>
    </div>
  );
}

function Phone() {
  const [page, setPage] = useState(0);

  useEffect(() => {
    const i = setInterval(() => setPage(p => (p + 1) % 3), 3000);
    return () => clearInterval(i);
  }, []);

  return (
    <div className="relative -ml-4 lg:-ml-8 rotate-[3deg]">
      {/* Phone body */}
      <div className="relative w-[100px] sm:w-[120px] lg:w-[130px] aspect-[9/19.5] bg-[#222] rounded-[22px] border-[3px] border-[#3a3a3a] overflow-hidden shadow-xl">
        {/* Dynamic Island */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-10 h-4 bg-black rounded-full z-10">
          <div className="absolute right-1 top-1 w-2 h-2 rounded-full bg-[#1a1a1a] border border-[#333]" />
        </div>
        {/* Status bar */}
        <div className="h-7 bg-black flex items-center justify-between px-3 pt-1">
          <span className="text-[8px] text-white font-semibold">9:41</span>
          <div className="flex items-center gap-1">
            <svg className="w-3 h-2" viewBox="0 0 12 7" fill="white">
              <rect x="0" y="4" width="2" height="3" rx="0.5" opacity="0.4"/>
              <rect x="3" y="3" width="2" height="4" rx="0.5" opacity="0.6"/>
              <rect x="6" y="1.5" width="2" height="5.5" rx="0.5" opacity="0.8"/>
              <rect x="9" y="0" width="2" height="7" rx="0.5"/>
            </svg>
            <svg className="w-3 h-2" viewBox="0 0 14 7" fill="none" stroke="white" strokeWidth="0.8">
              <rect x="0.5" y="0.5" width="11" height="6" rx="1.5"/>
              <rect x="12" y="2" width="1.5" height="3" rx="0.5" fill="white"/>
              <rect x="1.5" y="1.5" width="7" height="4" rx="0.5" fill="#28c840"/>
            </svg>
          </div>
        </div>
        {/* Nav */}
        <div className="h-6 bg-black/90 flex items-center justify-between px-3">
          <span className="text-[7px] text-[#f59e0b] font-bold">GOESCA</span>
          <span className="text-[6px] text-white/50">🛒</span>
        </div>
        {/* Content */}
        <div className="flex-1 bg-[#0a0e14] h-[calc(100%-64px)] relative">
          <div className={`absolute inset-0 transition-opacity duration-500 ${page === 0 ? 'opacity-100' : 'opacity-0'}`}>
            <PhoneHero />
          </div>
          <div className={`absolute inset-0 transition-opacity duration-500 ${page === 1 ? 'opacity-100' : 'opacity-0'}`}>
            <PhoneProducts />
          </div>
          <div className={`absolute inset-0 transition-opacity duration-500 ${page === 2 ? 'opacity-100' : 'opacity-0'}`}>
            <PhoneCheckout />
          </div>
        </div>
        {/* Bottom nav */}
        <div className="h-7 bg-[#0a0e14] border-t border-white/5 flex items-center justify-around px-1">
          {['🏠','📦','🛒','💬','👤'].map((e,i) => (
            <span key={i} className={`text-[8px] ${i===0?'text-[#f59e0b]':'text-gray-600'}`}>{e}</span>
          ))}
        </div>
        {/* Home indicator */}
        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-12 h-1 rounded-full bg-white/20" />
      </div>
    </div>
  );
}

/* ─── SCREEN CONTENT ──────────────────────────────────── */
function ScreenHero() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-[#111827] via-[#1a2332] to-[#0f172a] flex flex-col justify-center px-[6%] gap-2">
      <span className="text-[5px] text-[#f59e0b] font-bold tracking-[1px]">GOESCA</span>
      <p className="text-[11px] text-white font-semibold leading-[1.15]">
        Productos de aseo<br />al mejor <span className="text-[#f59e0b]">precio</span>
      </p>
      <p className="text-[5px] text-gray-400 max-w-[60%]">Envíos a todo Chile</p>
      <span className="mt-1 inline-flex w-fit px-2 py-0.5 bg-[#f59e0b] rounded text-white text-[4px] font-semibold">Ver catálogo →</span>
      {/* Product cards */}
      <div className="absolute right-[5%] top-[12%] grid grid-cols-2 gap-1">
        {['#e0d4f5','#d0e4f5','#f5e8d5','#d5f5e8'].map((c,i) => (
          <div key={i} className="w-14 h-10 rounded bg-white/[0.06] border border-white/[0.08] p-1 flex flex-col justify-between">
            <div className="rounded-sm h-4" style={{background:c}} />
            <div className="text-[3px] text-[#f59e0b] font-bold">$1,890</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ScreenProducts() {
  return (
    <div className="w-full h-full bg-[#0a0e14] flex gap-2 p-[4%]">
      <div className="w-[18%] space-y-1">
        <div className="text-[5px] text-white font-semibold">Categorías</div>
        {['Ofertas','Lavandería','Suavizantes','Papel'].map((c,i) => (
          <div key={c} className={`text-[4px] ${i===1?'text-[#f59e0b]':'text-gray-500'}`}>{c}</div>
        ))}
      </div>
      <div className="flex-1 grid grid-cols-3 gap-1.5">
        {[0,1,2,3,4,5].map(i => (
          <div key={i} className="rounded bg-white/[0.04] border border-white/[0.07] p-1">
            <div className="h-5 rounded-sm mb-0.5" style={{background:['#e0d4f5','#d0e4f5','#f5e8d5','#d5f5e8','#e0d4f5','#d0e4f5'][i]}} />
            <div className="text-[3.5px] text-gray-300">PRODUCTO {i+1}</div>
            <div className="text-[4px] text-[#f59e0b] font-bold">$1,890</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ScreenCart() {
  return (
    <div className="w-full h-full bg-[#0a0e14] p-[5%] flex flex-col gap-2">
      <div className="text-[6px] text-white font-semibold">Mi carrito (2)</div>
      {[0,1].map(i => (
        <div key={i} className="flex gap-2 bg-white/[0.04] rounded p-2">
          <div className="w-8 h-8 rounded shrink-0" style={{background:['#e0d4f5','#d0e4f5'][i]}} />
          <div className="flex-1 flex flex-col justify-between">
            <div className="text-[4px] text-gray-300">DOWNY BRISA {i===0?'VERANO':'INTENSA'}</div>
            <div className="text-[5px] text-[#f59e0b] font-bold">$1,890</div>
          </div>
        </div>
      ))}
      <div className="mt-auto border-t border-white/10 pt-2 flex justify-between">
        <span className="text-[5px] text-gray-400">Total</span>
        <span className="text-[6px] text-[#f59e0b] font-bold">$3,780</span>
      </div>
      <div className="py-1.5 bg-emerald-600 rounded text-center text-white text-[5px] font-semibold">Comprar por WhatsApp</div>
    </div>
  );
}

function ScreenAbout() {
  return (
    <div className="w-full h-full bg-gradient-to-b from-[#111827] to-[#0a0e14] flex flex-col items-center justify-center text-center px-[8%] gap-2">
      <div className="text-[5px] text-[#f59e0b] font-semibold">SOBRE NOSOTROS</div>
      <div className="text-[10px] text-white font-semibold leading-tight">Productos de aseo<br/>de calidad</div>
      <div className="text-[4.5px] text-gray-400 max-w-[70%]">Más de 5 años entregando soluciones en todo Chile.</div>
    </div>
  );
}

function PhoneHero() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-[#111827] via-[#1a2332] to-[#0f172a] flex flex-col items-center justify-center text-center px-[6%] gap-1">
      <span className="text-[4px] text-[#f59e0b] font-bold">GOESCA</span>
      <span className="text-[8px] text-white font-semibold leading-tight">Productos<br/>al mejor <span className="text-[#f59e0b]">precio</span></span>
      <span className="text-[3px] text-gray-400">Envíos a todo Chile</span>
      <span className="mt-1 px-2 py-0.5 bg-[#f59e0b] rounded text-white text-[3px] font-semibold">Ver catálogo</span>
    </div>
  );
}

function PhoneProducts() {
  return (
    <div className="w-full h-full bg-[#0a0e14] p-[5%] flex flex-col gap-1.5">
      <div className="text-[5px] text-white font-semibold">Ofertas</div>
      <div className="grid grid-cols-2 gap-1">
        {[0,1,2,3].map(i => (
          <div key={i} className="bg-white/[0.04] border border-white/[0.07] rounded p-1">
            <div className="h-4 rounded-sm mb-0.5" style={{background:['#e0d4f5','#d0e4f5','#f5e8d5','#d5f5e8'][i]}} />
            <div className="text-[2.5px] text-[#f59e0b] font-bold">$1,890</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PhoneCheckout() {
  return (
    <div className="w-full h-full bg-[#0a0e14] p-[5%] flex flex-col gap-1.5">
      <div className="text-[5px] text-white font-semibold">Mi carrito</div>
      {[0,1].map(i => (
        <div key={i} className="flex gap-1 bg-white/[0.04] rounded p-1.5">
          <div className="w-5 h-5 rounded shrink-0" style={{background:['#e0d4f5','#d0e4f5'][i]}} />
          <div className="flex-1">
            <div className="text-[3px] text-gray-300">DOWNY {i===0?'VERANO':'INTENSA'}</div>
            <div className="text-[3.5px] text-[#f59e0b] font-bold">$1,890</div>
          </div>
        </div>
      ))}
      <div className="mt-auto border-t border-white/10 pt-1 flex justify-between">
        <span className="text-[3px] text-gray-400">Total</span>
        <span className="text-[4px] text-[#f59e0b] font-bold">$3,780</span>
      </div>
      <div className="py-1 bg-emerald-600 rounded text-center text-white text-[3px] font-semibold">WhatsApp</div>
    </div>
  );
}
