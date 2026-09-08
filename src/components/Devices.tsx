"use client";

import { useState, useEffect } from "react";

export default function Devices() {
  return (
    <div className="relative flex justify-center lg:justify-end">
      <Laptop />
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
    <div className="relative animate-float" style={{ perspective: "1200px" }}>
      <div style={{ transform: "rotateY(-5deg) rotateX(2deg)", transformStyle: "preserve-3d" }}>
        {/* === SCREEN === */}
        <div className="relative w-[360px] sm:w-[440px] lg:w-[500px]">
          {/* Lid */}
          <div className="relative bg-[#1a1a1a] rounded-t-xl border-2 border-[#333] border-b-0 overflow-hidden shadow-2xl">
            {/* Top bezel highlight */}
            <div className="h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            {/* Camera area */}
            <div className="flex justify-center py-1.5">
              <div className="w-2 h-2 rounded-full bg-[#111] border border-[#444] relative">
                <div className="absolute inset-[3px] rounded-full bg-[#0a0a0a]" />
                <div className="absolute inset-[4px] rounded-full bg-[#1a1a1a]" />
              </div>
            </div>
            {/* Browser chrome */}
            <div className="h-7 bg-[#1c1c1c] flex items-center px-3 gap-1.5 border-t border-[#333]">
              <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
              <div className="ml-3 flex-1 h-5 rounded-md bg-[#0d0d0d] border border-[#333] flex items-center px-2.5 gap-1">
                <svg className="w-2.5 h-2.5 text-[#555]" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
                </svg>
                <span className="text-[9px] text-[#888]">goesca.store</span>
              </div>
            </div>
            {/* Screen content area */}
            <div className="relative bg-[#0a0e14] aspect-[16/10]">
              <div className={`absolute inset-0 transition-all duration-700 ease-in-out ${page === 0 ? 'opacity-100 scale-100' : 'opacity-0 scale-[0.98]'}`}>
                <ScreenHero />
              </div>
              <div className={`absolute inset-0 transition-all duration-700 ease-in-out ${page === 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-[0.98]'}`}>
                <ScreenProducts />
              </div>
              <div className={`absolute inset-0 transition-all duration-700 ease-in-out ${page === 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-[0.98]'}`}>
                <ScreenCart />
              </div>
              <div className={`absolute inset-0 transition-all duration-700 ease-in-out ${page === 3 ? 'opacity-100 scale-100' : 'opacity-0 scale-[0.98]'}`}>
                <ScreenAbout />
              </div>
            </div>
          </div>

          {/* === BASE === */}
          <div className="relative">
            {/* Hinge */}
            <div className="w-full h-1.5 bg-gradient-to-b from-[#444] to-[#2a2a2a]" />
            {/* Keyboard surface */}
            <div className="w-full h-6 bg-gradient-to-b from-[#222] to-[#1a1a1a] rounded-b-xl shadow-lg relative overflow-hidden">
              {/* Keyboard texture */}
              <div className="absolute inset-x-4 top-1 bottom-2 flex flex-col gap-[2px]">
                {[...Array(5)].map((_, row) => (
                  <div key={row} className="flex justify-center gap-[3px]">
                    {[...Array(row === 4 ? 6 : 12)].map((_, key) => (
                      <div key={key} className="w-[14px] h-[5px] rounded-[1px] bg-[#2a2a2a] border border-[#333]/30" />
                    ))}
                  </div>
                ))}
              </div>
              {/* Trackpad */}
              <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-24 h-3 rounded-md bg-[#1a1a1a] border border-[#333]/50" />
              {/* Front edge highlight */}
              <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
            </div>
          </div>
        </div>
      </div>

      {/* Shadow */}
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[80%] h-6 bg-black/20 rounded-full blur-xl" />
    </div>
  );
}

/* ─── SCREEN PAGES ────────────────────────────────────── */
function ScreenHero() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-[#111827] via-[#1a2332] to-[#0f172a] relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#f59e0b]/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="relative h-full flex">
        {/* Left content */}
        <div className="flex-1 flex flex-col justify-center px-[6%] gap-2">
          <span className="text-[5px] text-[#f59e0b] font-bold tracking-[1.5px]">GOESCA</span>
          <h2 className="text-[13px] text-white font-semibold leading-[1.1] tracking-tight">
            Productos de aseo<br />al mejor <span className="text-[#f59e0b]">precio</span>
          </h2>
          <p className="text-[5px] text-gray-400 max-w-[55%] leading-relaxed">
            Limpieza para tu hogar y negocio. Envíos a todo Chile.
          </p>
          <div className="flex gap-2 mt-1">
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-[#f59e0b] rounded text-white text-[5px] font-semibold">
              Ver catálogo →
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1 border border-white/20 rounded text-white/70 text-[5px]">
              Contactar
            </span>
          </div>
        </div>
        {/* Right - Product grid */}
        <div className="w-[45%] flex items-center justify-center p-[3%]">
          <div className="grid grid-cols-2 gap-2 w-full">
            {[{c:'#e0d4f5',n:'DOWNY VERANO',p:'$1,890'},{c:'#d0e4f5',n:'DOWNY INTENSA',p:'$1,890'},{c:'#f5e8d5',n:'SOFT CLÁSICO',p:'$1,390'},{c:'#d5f5e8',n:'SOFT 1 LITRO',p:'$1,990'}].map((item,i) => (
              <div key={i} className="bg-white/[0.06] backdrop-blur rounded-lg border border-white/[0.08] p-2 flex flex-col gap-1.5 hover:bg-white/[0.1] transition-colors">
                <div className="w-full aspect-[4/3] rounded-md" style={{background:item.c}} />
                <div className="text-[4px] text-gray-300 font-medium">{item.n}</div>
                <div className="text-[5px] text-[#f59e0b] font-bold">{item.p}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Trust strip */}
      <div className="absolute bottom-0 inset-x-0 h-[18%] bg-black/40 backdrop-blur-sm flex items-center justify-around px-[5%] border-t border-white/5">
        {['🚚 Envío gratis','✅ Garantía','💬 Soporte 24/7','🔒 Pago seguro'].map((t,i) => (
          <span key={i} className="text-[4px] text-gray-300">{t}</span>
        ))}
      </div>
    </div>
  );
}

function ScreenProducts() {
  return (
    <div className="w-full h-full bg-[#0a0e14] flex">
      {/* Sidebar */}
      <div className="w-[18%] bg-[#0d1117] border-r border-white/5 p-[3%] flex flex-col gap-2">
        <div className="text-[5px] text-white font-semibold mb-1">Categorías</div>
        {['Ofertas','Lavandería','Suavizantes','Papel higiénico','Higiene personal','Baño'].map((c,i) => (
          <div key={c} className={`text-[4px] py-0.5 cursor-pointer transition-colors ${i===1?'text-[#f59e0b] font-medium':'text-gray-500 hover:text-gray-300'}`}>{c}</div>
        ))}
      </div>
      {/* Product grid */}
      <div className="flex-1 p-[3%]">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-[8px] text-white font-semibold">Lavandería</h3>
          <span className="text-[4px] text-gray-500">6 productos</span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[{c:'#e0d4f5',n:'DOWNY BRISA DE VERANO',p:'$1,890',o:true},{c:'#d0e4f5',n:'DOWNY BRISA INTENSA',p:'$1,890',o:true},{c:'#f5e8d5',n:'SUAVISANTE SOFT CLÁSICO',p:'$1,390',o:false},{c:'#d5f5e8',n:'SUAVISANTE SOFT 1L',p:'$1,990',o:false},{c:'#e0d4f5',n:'DETERGENTE RO LAVADO',p:'$3,290',o:false},{c:'#d0e4f5',n:'CLORO ESPUMA ARCADIA',p:'$2,190',o:true}].map((item,i) => (
            <div key={i} className="bg-white/[0.03] rounded-lg border border-white/[0.06] p-2 hover:bg-white/[0.06] transition-colors">
              <div className="relative w-full aspect-[4/3] rounded-md mb-1.5" style={{background:item.c}}>
                {item.o && <span className="absolute top-1 left-1 px-1.5 py-0.5 bg-red-500 rounded text-white text-[3px] font-bold">OFERTA</span>}
              </div>
              <div className="text-[4px] text-gray-300 font-medium leading-tight">{item.n}</div>
              <div className="text-[5px] text-[#f59e0b] font-bold mt-0.5">{item.p}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ScreenCart() {
  return (
    <div className="w-full h-full bg-[#0a0e14] flex">
      {/* Cart items */}
      <div className="flex-1 p-[4%] flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h3 className="text-[9px] text-white font-semibold">Mi carrito (2)</h3>
          <span className="text-[4px] text-gray-500">Vaciar</span>
        </div>
        {[{c:'#e0d4f5',n:'DOWNY BRISA DE VERANO 350ML',p:'$1,890',q:2},{c:'#d0e4f5',n:'DOWNY BRISA INTENSA 350ML',p:'$1,890',q:1}].map((item,i) => (
          <div key={i} className="flex gap-3 bg-white/[0.03] rounded-lg p-3 border border-white/[0.06]">
            <div className="w-12 h-12 rounded-lg shrink-0" style={{background:item.c}} />
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <div className="text-[5px] text-white font-medium">{item.n}</div>
                <div className="text-[4px] text-gray-500 mt-0.5">Cantidad: {item.q}</div>
              </div>
              <div className="text-[6px] text-[#f59e0b] font-bold">{item.p}</div>
            </div>
            <button className="text-gray-600 hover:text-red-400 transition-colors">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
          </div>
        ))}
      </div>
      {/* Summary */}
      <div className="w-[35%] bg-[#0d1117] border-l border-white/5 p-[4%] flex flex-col">
        <h3 className="text-[7px] text-white font-semibold mb-3">Resumen</h3>
        <div className="space-y-2 flex-1">
          <div className="flex justify-between text-[4.5px]">
            <span className="text-gray-400">Subtotal</span>
            <span className="text-white">$5.670</span>
          </div>
          <div className="flex justify-between text-[4.5px]">
            <span className="text-gray-400">Envío</span>
            <span className="text-emerald-400">Gratis</span>
          </div>
          <div className="border-t border-white/10 pt-2 flex justify-between">
            <span className="text-[5px] text-white font-semibold">Total</span>
            <span className="text-[7px] text-[#f59e0b] font-bold">$5.670</span>
          </div>
        </div>
        <button className="w-full py-2 bg-[#f59e0b] rounded-lg text-white text-[5px] font-semibold hover:bg-[#d97706] transition-colors">
          Finalizar compra
        </button>
        <button className="w-full py-2 mt-2 border border-emerald-500/50 rounded-lg text-emerald-400 text-[5px] font-semibold hover:bg-emerald-500/10 transition-colors flex items-center justify-center gap-1">
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          Comprar por WhatsApp
        </button>
      </div>
    </div>
  );
}

function ScreenAbout() {
  return (
    <div className="w-full h-full bg-gradient-to-b from-[#111827] to-[#0a0e14] relative overflow-hidden">
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-64 h-64 bg-[#f59e0b]/5 rounded-full blur-3xl" />
      <div className="relative h-full flex flex-col items-center justify-center text-center px-[10%] gap-3">
        <span className="text-[5px] text-[#f59e0b] font-bold tracking-[2px]">SOBRE NOSOTROS</span>
        <h2 className="text-[14px] text-white font-semibold leading-tight">Productos de aseo<br/>de calidad</h2>
        <p className="text-[5px] text-gray-400 max-w-[65%] leading-relaxed">
          Más de 5 años entregando soluciones de limpieza a hogares y negocios en todo Chile. Calidad garantizada.
        </p>
        <div className="flex gap-3 mt-2">
          {['🚚 Envío','✅ Garantía','💬 Soporte','🔒 Seguro'].map(t => (
            <span key={t} className="text-[4px] text-gray-300 bg-white/[0.05] rounded px-2 py-1">{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
