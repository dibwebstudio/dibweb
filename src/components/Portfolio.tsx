import Image from "next/image";

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-white border-y border-[#e7e5e0]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="label mb-4">Portfolio</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Proyectos recientes</h2>
          <p className="mt-4 text-slate-600 text-lg">Casos reales con resultados medibles, no solo diseño bonito.</p>
        </div>

        <div className="space-y-16">
          {/* Project 1 - goesca.store */}
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="order-2 lg:order-1">
              <span className="inline-block bg-neutral-100 text-neutral-700 text-xs font-medium px-3 py-1 rounded-full mb-4">E-commerce</span>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Goesca Store</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
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
                    <span className="text-xs text-slate-500">goesca.store</span>
                  </div>
                </div>
                <div className="aspect-video bg-gradient-to-br from-[#1a2332] to-[#162030] p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded bg-[#f68b1f] flex items-center justify-center text-white text-xs font-bold">G</div>
                    <span className="text-white text-sm font-bold tracking-wider">GOESCA</span>
                  </div>
                  <div className="text-white text-xl font-bold mb-1">Productos de aseo al</div>
                  <div className="text-white text-xl font-bold mb-1">mejor <span className="text-[#f68b1f]">precio</span></div>
                  <p className="text-slate-400 text-xs mb-4">Envíos a todo Chile</p>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="bg-white/10 rounded p-2 h-12" />
                    <div className="bg-white/10 rounded p-2 h-12" />
                    <div className="bg-white/10 rounded p-2 h-12" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Project 2 - POS System */}
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="glass-card rounded-xl overflow-hidden aurora-card">
                <Image src="/pos.jpg" alt="Sistema Punto de Venta" width={1600} height={1000} className="w-full h-auto" loading="lazy" />
              </div>
            </div>
            <div>
              <span className="inline-block bg-neutral-100 text-neutral-700 text-xs font-medium px-3 py-1 rounded-full mb-4">Software POS</span>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Sistema de Cajero</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Sistema de punto de venta para tiendas de retail. Se crean a medida según las necesidades de tu negocio, o puedes arrendarlo mensualmente. Control de inventario, múltiples medios de pago, reportes de ventas y facturación electrónica.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {["Next.js", "React", "Tailwind CSS", "POS Integration"].map((t) => (
                  <span key={t} className="text-xs text-neutral-500 border border-neutral-200 px-3 py-1 rounded-full">{t}</span>
                ))}
              </div>
              <a href="/servicios/puntos-de-pago" className="text-neutral-900 hover:text-blue-800 text-sm font-semibold underline underline-offset-4 decoration-neutral-300 transition-colors">
                Ver más detalles →
              </a>
            </div>
          </div>

          {/* Project 3 */}
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="order-2 lg:order-1">
              <span className="inline-block bg-neutral-100 text-neutral-700 text-xs font-medium px-3 py-1 rounded-full mb-4">Corporativo</span>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">TechCorp Solutions</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Sitio institucional B2B con sección de servicios, casos de éxito, blog corporativo y formulario de contacto con CRM integrado.
              </p>
              <div className="flex flex-wrap gap-2">
                {["React", "Node.js", "PostgreSQL", "Docker"].map((t) => (
                  <span key={t} className="text-xs text-neutral-500 border border-neutral-200 px-3 py-1 rounded-full">{t}</span>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="glass-card rounded-xl overflow-hidden aurora-card">
                <div className="bg-[#0f172a] px-4 py-2 flex items-center gap-2 border-b border-white/5">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                  </div>
                  <div className="flex-1 text-center">
                    <span className="text-xs text-slate-500">techcorp.cl</span>
                  </div>
                </div>
                <div className="aspect-video bg-gradient-to-br from-slate-800/40 to-slate-700/20 p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-6 h-6 rounded bg-blue-500" />
                    <span className="text-white text-sm font-bold">TechCorp</span>
                  </div>
                  <div className="text-white text-lg font-bold mb-2">Soluciones tecnológicas</div>
                  <p className="text-slate-400 text-xs mb-4">para empresas modernas</p>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="bg-white/10 rounded h-16" />
                    <div className="bg-white/10 rounded h-16" />
                    <div className="bg-white/10 rounded h-16" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
