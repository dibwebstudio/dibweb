import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-white border-y border-[#e7e5e0]">
      <div className="max-w-7xl mx-auto">
        <Reveal><div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900">Proyectos recientes</h2>
          <p className="mt-4 text-neutral-600 text-lg">Soluciones digitales que puedes explorar antes de cotizar tu proyecto.</p>
        </div></Reveal>

        <div className="space-y-16">
          {/* Project 1 - goesca.store */}
          <Reveal><div className="grid lg:grid-cols-2 gap-10 items-center group">
            <div className="order-2 lg:order-1">
              <span className="inline-block bg-neutral-100 text-neutral-700 text-xs font-medium px-3 py-1 rounded-full mb-4">E-commerce</span>
              <h3 className="text-2xl font-bold text-neutral-900 mb-3">Goesca Store</h3>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                Tienda online de artículos de aseo para hogar, negocio y empresa. Incluye catálogo de productos, carrito de compras, pasarela de pagos y panel de administración.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {["Next.js", "React", "Tailwind CSS", "TypeScript"].map((t) => (
                  <span key={t} className="text-xs text-neutral-500 border border-neutral-200 px-3 py-1 rounded-full">{t}</span>
                ))}
              </div>
              <a href="https://goesca.store" target="_blank" rel="noopener noreferrer" className="text-neutral-900 hover:text-blue-800 text-sm font-semibold underline underline-offset-4 decoration-neutral-300 transition-colors">
                Ver sitio →
              </a>
            </div>
            <div className="order-1 lg:order-2">
              <div className="glass-card rounded-xl overflow-hidden aurora-card">
                <div className="bg-[#0d1117] px-4 py-2 flex items-center gap-2 border-b border-white/5">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                  </div>
                  <div className="flex-1 text-center">
                    <span className="text-xs text-neutral-500">goesca.store</span>
                  </div>
                </div>
                <div className="aspect-video bg-gradient-to-br from-[#1a2332] to-[#162030] p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded bg-[#f68b1f] flex items-center justify-center text-white text-xs font-bold">G</div>
                    <span className="text-white text-sm font-bold tracking-wider">GOESCA</span>
                  </div>
                  <div className="text-white text-xl font-bold mb-1">Productos de aseo al</div>
                  <div className="text-white text-xl font-bold mb-1">mejor <span className="text-[#f68b1f]">precio</span></div>
                  <p className="text-neutral-400 text-xs mb-4">Envíos a todo Chile</p>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="bg-white/10 rounded p-2 h-12" />
                    <div className="bg-white/10 rounded p-2 h-12" />
                    <div className="bg-white/10 rounded p-2 h-12" />
                  </div>
                </div>
              </div>
            </div>
          </div></Reveal>

          {/* Project 2 - POS System */}
          <Reveal><div className="grid lg:grid-cols-2 gap-10 items-center group">
            <div>
              <div className="glass-card rounded-xl overflow-hidden aurora-card">
                <Image src="/pos.jpg" alt="Sistema Punto de Venta" width={1600} height={1000} className="w-full h-auto img-zoom" loading="lazy" />
              </div>
            </div>
            <div>
              <span className="inline-block bg-neutral-100 text-neutral-700 text-xs font-medium px-3 py-1 rounded-full mb-4">Software POS</span>
              <h3 className="text-2xl font-bold text-neutral-900 mb-3">Sistema de Cajero</h3>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                Sistema de punto de venta para tiendas de retail. Se crean a medida según las necesidades de tu negocio, o puedes arrendarlo mensualmente. Control de inventario, múltiples medios de pago, reportes de ventas y facturación electrónica.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {["Next.js", "React", "Tailwind CSS", "POS Integration"].map((t) => (
                  <span key={t} className="text-xs text-neutral-500 border border-neutral-200 px-3 py-1 rounded-full">{t}</span>
                ))}
              </div>
              <a href="https://pos-demo-tan.vercel.app" target="_blank" rel="noopener noreferrer" className="text-neutral-900 hover:text-blue-800 text-sm font-semibold underline underline-offset-4 decoration-neutral-300 transition-colors">
                Probar demostración →
              </a>
            </div>
          </div></Reveal>

          {/* Project 3 - ERP demo */}
          <Reveal><div className="grid lg:grid-cols-2 gap-10 items-center group">
            <div className="order-2 lg:order-1">
              <span className="inline-block bg-neutral-100 text-neutral-700 text-xs font-medium px-3 py-1 rounded-full mb-4">Sistema ERP</span>
              <h3 className="text-2xl font-bold text-neutral-900 mb-3">Nexo ERP</h3>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                Plataforma empresarial para controlar ventas, facturación, clientes, inventario y finanzas desde un solo lugar. Explora una demostración interactiva con datos ficticios.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {["Next.js", "React", "Inventario", "Reportes"].map((t) => (
                  <span key={t} className="text-xs text-neutral-500 border border-neutral-200 px-3 py-1 rounded-full">{t}</span>
                ))}
              </div>
              <a href="https://erp-demo-vert.vercel.app" target="_blank" rel="noopener noreferrer" className="text-neutral-900 hover:text-blue-800 text-sm font-semibold underline underline-offset-4 decoration-neutral-300 transition-colors">
                Explorar demostración →
              </a>
            </div>
            <div className="order-1 lg:order-2">
              <div className="glass-card rounded-xl overflow-hidden aurora-card">
                <div className="bg-[#0b1220] px-4 py-2 flex items-center gap-2 border-b border-white/5">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                  </div>
                  <div className="flex-1 text-center">
                    <span className="text-xs text-neutral-500">Nexo ERP · Demo</span>
                  </div>
                </div>
                <div className="aspect-video bg-[#f4f6f9] flex">
                  <div className="w-[28%] bg-[#0b1220] p-3">
                    <div className="flex items-center gap-2 mb-5">
                      <div className="w-6 h-6 rounded-md bg-blue-600" />
                      <span className="text-white text-xs font-bold">Nexo</span>
                    </div>
                    <div className="space-y-2">
                      <div className="h-5 rounded bg-blue-600" />
                      <div className="h-5 rounded bg-white/5" />
                      <div className="h-5 rounded bg-white/5" />
                      <div className="h-5 rounded bg-white/5" />
                    </div>
                  </div>
                  <div className="flex-1 p-4">
                    <div className="text-neutral-900 text-sm font-bold mb-1">Resumen de la empresa</div>
                    <div className="text-neutral-400 text-[9px] mb-4">Ventas, clientes e inventario</div>
                    <div className="grid grid-cols-3 gap-2 mb-3">
                      <div className="bg-white border border-neutral-200 rounded-md h-12 p-2"><div className="h-1.5 w-8 bg-neutral-200 rounded mb-2" /><div className="h-2 w-12 bg-blue-500 rounded" /></div>
                      <div className="bg-white border border-neutral-200 rounded-md h-12 p-2"><div className="h-1.5 w-8 bg-neutral-200 rounded mb-2" /><div className="h-2 w-10 bg-emerald-500 rounded" /></div>
                      <div className="bg-white border border-neutral-200 rounded-md h-12 p-2"><div className="h-1.5 w-8 bg-neutral-200 rounded mb-2" /><div className="h-2 w-9 bg-amber-500 rounded" /></div>
                    </div>
                    <div className="bg-white border border-neutral-200 rounded-md h-16 flex items-end gap-1.5 p-2">
                      {[35, 55, 42, 68, 58, 82, 72, 92].map((height, index) => <div key={index} className={`flex-1 rounded-t ${index === 7 ? "bg-blue-600" : "bg-blue-200"}`} style={{ height: `${height}%` }} />)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div></Reveal>
        </div>
      </div>
    </section>
  );
}
