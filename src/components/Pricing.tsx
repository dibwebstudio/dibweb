const plans = [
  {
    name: "Landing Page",
    price: "120.000",
    desc: "Ideal para emprendedores y negocios nuevos.",
    features: [
      "Landing page hasta 5 secciones",
      "Diseño responsive",
      "Formulario de contacto",
      "SEO básico",
      "Integración redes sociales",
      "Entrega en 5 días",
      "1 revisión incluida",
    ],
    cta: "Solicitar cotización",
    popular: false,
  },
  {
    name: "Sitio Corporativo",
    price: "250.000",
    desc: "Para negocios que quieren destacar.",
    features: [
      "Hasta 8 secciones",
      "Diseño personalizado",
      "Formularios avanzados",
      "SEO + Google Analytics",
      "Blog integrado",
      "Entrega en 10 días",
      "3 revisiones incluidas",
      "Soporte 30 días",
    ],
    cta: "Solicitar cotización",
    popular: true,
  },
  {
    name: "E-commerce",
    price: "450.000",
    desc: "Tienda online completa con pasarela de pagos.",
    features: [
      "Catálogo de productos ilimitado",
      "Pasarela de pagos",
      "Gestión de inventario",
      "Panel de administración",
      "SEO avanzado",
      "Entrega en 20 días",
      "Revisiones ilimitadas",
      "Soporte 90 días",
    ],
    cta: "Solicitar cotización",
    popular: false,
  },
];

const services = [
  { name: "Meta Ads", price: "Desde $80.000", desc: "Campañas en Facebook e Instagram", icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" },
  { name: "SEO", price: "Desde $60.000", desc: "Posicionamiento en buscadores", icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" },
  { name: "Sistema ERP", price: "Desde $500.000", desc: "Gestión empresarial a medida", icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" },
  { name: "Mantenimiento", price: "Desde $30.000/mes", desc: "Soporte y actualizaciones", icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z" },
  { name: "Hosting + Dominio", price: "Desde $15.000/año", desc: "Alojamiento y registro", icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" },
];

import Reveal from "@/components/Reveal";

export default function Pricing() {
  return (
    <section id="precios" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <Reveal><div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900">Planes transparentes y a medida</h2>
          <p className="mt-4 text-neutral-600 text-lg">Planes estándar desde $120.000 CLP o soluciones personalizadas para tu negocio.</p>
        </div></Reveal>

        <Reveal delay={100}><div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
          {plans.map((p) => (
            <div key={p.name} className={`rounded-2xl p-8 ${p.popular ? "bg-white border-2 border-neutral-900 shadow-sm" : "glass-card aurora-card"}`}>
              {p.popular && <span className="label mb-4 block !text-neutral-900">Recomendado</span>}
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">{p.name}</h3>
              <p className="text-neutral-500 text-sm mb-6">{p.desc}</p>
              <div className="mb-8">
                <span className="text-sm text-neutral-400">Desde</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-neutral-900">${p.price}</span>
                  <span className="text-neutral-500 text-sm">CLP</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-neutral-600">
                    <svg className="w-5 h-5 text-neutral-900 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <a href="#contacto" className={`block w-full text-center py-3 rounded-lg text-sm font-semibold transition-all ${p.popular ? "btn-primary" : "btn-secondary"}`}>
                {p.cta}
              </a>
            </div>
          ))}
        </div></Reveal>

        {/* Plan a medida */}
        <Reveal delay={150}><div className="max-w-5xl mx-auto mb-16">
          <div className="relative rounded-2xl overflow-hidden bg-neutral-900 p-8 sm:p-10 aurora-card">
            
            <div className="relative grid md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="inline-block bg-white/10 text-neutral-300 text-xs font-medium px-3 py-1 rounded-full mb-4">Plan a Medida</span>
                <h3 className="text-2xl font-bold text-white mb-3">¿Necesitas algo diferente?</h3>
                <p className="text-neutral-300 leading-relaxed">
                  Si tu proyecto no encaja en estos planes, creamos una solución completamente personalizada:
                  combinaciones de servicios, funcionalidades especiales, integraciones con tus sistemas o
                  modalidad de arriendo mensual. Cuéntanos tu idea.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <ul className="space-y-2.5">
                  {[
                    "Alcance y precio según necesidades reales",
                    "Integración con sistemas existentes (ERP, CRM, POS)",
                    "Modalidad compra o arriendo mensual",
                    "Acompañamiento y soporte dedicado",
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-neutral-200">
                      <svg className="w-5 h-5 text-neutral-300 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#contacto" className="mt-2 bg-white text-neutral-900 text-center py-3 rounded-lg text-sm font-semibold hover:bg-neutral-100 transition-colors">
                  Solicitar cotización
                </a>
              </div>
            </div>
          </div>
        </div></Reveal>

        <Reveal delay={200}><div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-neutral-900">Servicios adicionales</h3>
            <p className="text-neutral-500 mt-2">Complementos para potenciar tu presencia digital</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((s) => (
              <div key={s.name} className="glass-card aurora-card rounded-xl p-5">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#f5f4f1] flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-neutral-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={s.icon} />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 text-sm">{s.name}</h4>
                    <p className="text-neutral-500 text-xs mt-0.5">{s.desc}</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-neutral-100">
                  <span className="text-neutral-900 font-bold text-lg">{s.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div></Reveal>
      </div>
    </section>
  );
}