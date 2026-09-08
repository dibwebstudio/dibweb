import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Puntos de Venta / Pago",
  alternates: { canonical: "/servicios/puntos-de-pago" },
  description: "Sistemas de punto de venta (POS) para tu negocio. Software de cobro con efectivo, tarjeta y múltiples medios de pago.",
};

export default function PuntosDePago() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-white min-h-screen">
        {/* Hero */}
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <Link href="/#servicios" className="inline-flex items-center gap-2 text-neutral-600 hover:text-neutral-900 text-sm mb-8 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Volver a servicios
            </Link>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block bg-neutral-100 text-neutral-700 text-xs font-medium px-3 py-1 rounded-full mb-4">Software POS</span>
                <h1 className="text-4xl sm:text-5xl font-bold text-neutral-900 mb-6 leading-tight">
                  Puntos de venta<br />
                  <span className="text-neutral-900">modernos y rápidos</span>
                </h1>
                <p className="text-neutral-600 text-lg mb-8 leading-relaxed">
                  Desarrollamos sistemas de punto de venta (POS) personalizados para tu negocio. Cobros con efectivo, tarjeta, transferencia y múltiples medios de pago. Disponible a medida o en arriendo mensual.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="#contacto" className="btn-primary px-8 py-4 rounded-lg text-sm font-semibold text-center">
                    Solicitar cotización
                  </a>
                  <a href="https://wa.me/56949417183" target="_blank" rel="noopener noreferrer" className="btn-secondary px-8 py-4 rounded-lg text-sm font-semibold text-center">
                    Consultar por WhatsApp
                  </a>
                </div>
              </div>

              <div className="relative">
                <div className="glass-card rounded-2xl overflow-hidden aurora-card">
                  <Image src="/pos.jpg" alt="Sistema Punto de Venta desarrollado por DibWeb Studio" width={1600} height={1000} className="w-full h-auto rounded-2xl" priority />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-neutral-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-neutral-900 text-center mb-12">Características del sistema</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Múltiples medios de pago", desc: "Efectivo, tarjeta de crédito/débito, transferencia, QR y más.", icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" },
                { title: "Control de inventario", desc: "Gestión de stock en tiempo real con alertas de reposición.", icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" },
                { title: "Reportes de ventas", desc: "Estadísticas diarias, semanales y mensuales automáticas.", icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" },
                { title: "Múltiples cajas", desc: "Control de varias cajas registradoras desde un solo panel.", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
                { title: "Facturación electrónica", desc: "Emisión de boletas y facturas según normativa SII.", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
                { title: "Soporte 24/7", desc: "Asistencia técnica permanente para tu negocio.", icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" },
              ].map((f) => (
                <div key={f.title} className="glass-card aurora-card rounded-xl p-6">
                  <div className="w-12 h-12 rounded-xl bg-[#f5f4f1] flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-neutral-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={f.icon} />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-2">{f.title}</h3>
                  <p className="text-neutral-600 text-sm">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-neutral-900 text-center mb-4">Planes del sistema POS</h2>
            <p className="text-neutral-600 text-center mb-12">Todos los precios en pesos chilenos.</p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: "Básico", price: "199.000", desc: "Una caja, funcionalidades esenciales.", features: ["1 caja registradora", "Efectivo y tarjeta", "Control de stock básico", "Reportes diarios", "Soporte email"], popular: false },
                { name: "Profesional", price: "399.000", desc: "Multi-caja y reportes avanzados.", features: ["Hasta 5 cajas", "Todos los medios de pago", "Control de stock avanzado", "Reportes completos", "Facturación electrónica", "Soporte prioritario"], popular: true },
                { name: "Enterprise", price: "699.000", desc: "Solución completa para retail.", features: ["Cajas ilimitadas", "Multi-sucursal", "API integraciones", "Dashboard en tiempo real", "Soporte 24/7", "Capacitación incluida"], popular: false },
              ].map((p) => (
                <div key={p.name} className={`rounded-xl p-8 ${p.popular ? "bg-white border-2 border-neutral-900 shadow-sm" : "glass-card aurora-card"}`}>
                  {p.popular && <span className="text-xs label mb-4 block !text-neutral-900">Recomendado</span>}
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">{p.name}</h3>
                  <p className="text-neutral-600 text-sm mb-6">{p.desc}</p>
                  <div className="mb-8">
                    <span className="text-sm text-neutral-500">Desde</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold text-neutral-900">${p.price}</span>
                      <span className="text-neutral-500 text-sm">CLP</span>
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm text-neutral-600">
                        <svg className="w-5 h-5 text-neutral-700 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a href="#contacto" className={`block w-full text-center py-3 rounded-lg text-sm font-semibold transition-all ${p.popular ? "btn-primary" : "btn-secondary"}`}>
                    Solicitar
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-neutral-50 aurora-bg">
          <div className="aurora-blob aurora-blob-2" style={{ width: '300px', height: '300px', opacity: 0.1 }} />
          <div className="max-w-3xl mx-auto text-center relative">
            <h2 className="text-3xl font-bold text-neutral-900 mb-4">¿Necesitas un sistema POS?</h2>
            <p className="text-neutral-600 mb-8">Cuéntanos sobre tu negocio y te diseñamos un sistema a medida.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contacto" className="btn-primary px-8 py-4 rounded-lg text-sm font-semibold">Solicitar cotización</a>
              <a href="https://wa.me/56949417183" target="_blank" rel="noopener noreferrer" className="btn-secondary px-8 py-4 rounded-lg text-sm font-semibold">WhatsApp</a>
            </div>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </>
  );
}

function Contact() {
  return (
    <section id="contacto" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-neutral-900 mb-8 text-center">Contáctanos</h2>
        <div className="glass-card rounded-xl p-8">
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-neutral-600 mb-1.5">Nombre</label>
              <input type="text" required className="w-full px-4 py-3 rounded-lg bg-white border border-neutral-300 text-neutral-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder:text-neutral-400" placeholder="Tu nombre" />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-600 mb-1.5">Email</label>
              <input type="email" required className="w-full px-4 py-3 rounded-lg bg-white border border-neutral-300 text-neutral-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder:text-neutral-400" placeholder="tu@email.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-600 mb-1.5">Mensaje</label>
              <textarea required rows={4} className="w-full px-4 py-3 rounded-lg bg-white border border-neutral-300 text-neutral-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none placeholder:text-neutral-400" placeholder="Cuéntanos sobre tu negocio..." />
            </div>
            <button type="submit" className="w-full btn-primary py-3 rounded-lg text-sm font-semibold">Enviar mensaje</button>
          </form>
        </div>
      </div>
    </section>
  );
}
