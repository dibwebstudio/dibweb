const plans = [
  { name: "Básico", price: "299", desc: "Ideal para emprendedores.", features: ["Landing page hasta 5 secciones", "Diseño responsive", "Formulario de contacto", "SEO básico", "Entrega en 5 días", "1 revisión"], cta: "Empezar", popular: false },
  { name: "Profesional", price: "799", desc: "Para negocios que quieren destacar.", features: ["Hasta 8 secciones", "Diseño personalizado", "Formularios avanzados", "SEO + Analytics", "Redes sociales", "Entrega en 10 días", "3 revisiones", "Soporte 30 días"], cta: "Más popular", popular: true },
  { name: "Enterprise", price: "1,499", desc: "Solución completa para empresas.", features: ["Sitio ilimitado", "E-commerce", "Panel admin", "Blog / CMS", "SEO avanzado", "API integrations", "Entrega en 20 días", "Revisiones ilimitadas", "Soporte 90 días"], cta: "Contactar", popular: false },
];

export default function Pricing() {
  return (
    <section id="precios" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#1e293b] aurora-bg">
      <div className="aurora-blob aurora-blob-3" style={{ width: '250px', height: '250px', opacity: 0.1 }} />
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-blue-400 font-medium text-sm mb-3 tracking-wide">Precios</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Planes transparentes</h2>
          <p className="mt-4 text-slate-400 text-lg">Sin costos ocultos.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((p) => (
            <div key={p.name} className={`rounded-xl p-8 ${p.popular ? "bg-blue-500/10 border border-blue-500/30" : "glass-card"}`}>
              {p.popular && <span className="text-xs text-blue-400 font-medium mb-4 block">⭐ Más popular</span>}
              <h3 className="text-xl font-semibold text-white mb-2">{p.name}</h3>
              <p className="text-slate-400 text-sm mb-6">{p.desc}</p>
              <div className="mb-8">
                <span className="text-4xl font-bold text-white">${p.price}</span>
                <span className="text-slate-500 text-sm ml-1">USD</span>
              </div>
              <ul className="space-y-3 mb-8">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-slate-300">
                    <svg className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        </div>
      </div>
    </section>
  );
}
