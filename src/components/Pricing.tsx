const plans = [
  {
    name: "Básico",
    price: "299",
    description: "Ideal para emprendedores y pequeños negocios que necesitan presencia online.",
    features: [
      "Landing page de hasta 5 secciones",
      "Diseño responsive",
      "Formulario de contacto",
      "Optimización SEO básica",
      "Entrega en 5 días hábiles",
      "1 revisión incluida",
    ],
    cta: "Empezar",
    popular: false,
    accent: "text-slate-300",
  },
  {
    name: "Profesional",
    price: "799",
    description: "Para negocios que quieren destacar y convertir visitantes en clientes.",
    features: [
      "Hasta 8 secciones",
      "Diseño personalizado premium",
      "Formularios avanzados",
      "SEO completo + Analytics",
      "Integración con redes sociales",
      "Entrega en 10 días hábiles",
      "3 revisiones incluidas",
      "Soporte por 30 días",
    ],
    cta: "Más popular",
    popular: true,
    accent: "text-blue-400",
  },
  {
    name: "Enterprise",
    price: "1,499",
    description: "Solución completa para empresas con necesidades avanzadas.",
    features: [
      "Sitio web ilimitado",
      "E-commerce integrado",
      "Panel de administración",
      "Blog / CMS",
      "SEO avanzado + campañas",
      "Integraciones API",
      "Entrega en 20 días hábiles",
      "Revisiones ilimitadas",
      "Soporte por 90 días",
    ],
    cta: "Contactar",
    popular: false,
    accent: "text-sky-400",
  },
];

export default function Pricing() {
  return (
    <section id="precios" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#0d1b2e]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-blue-400 font-medium text-sm mb-3 tracking-wide uppercase">
            Precios
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Planes transparentes
          </h2>
          <p className="mt-4 text-slate-400 text-lg">
            Sin costos ocultos. Elegí el plan que mejor se adapte a tu negocio.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-lg p-8 transition-all duration-300 ${
                plan.popular ? "glass-strong glow scale-[1.02]" : "glass-card"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 btn-primary text-white text-xs font-medium px-4 py-1 rounded">
                  Más popular
                </span>
              )}
              <h3 className={`text-xl font-semibold mb-2 ${plan.accent}`}>
                {plan.name}
              </h3>
              <p className="text-slate-400 text-sm mb-6 min-h-[40px]">
                {plan.description}
              </p>
              <div className="mb-8">
                <span className="text-4xl font-bold text-white">${plan.price}</span>
                <span className="text-slate-500 text-sm ml-1">USD</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-slate-300">
                    <svg className={`w-5 h-5 ${plan.accent} shrink-0 mt-0.5`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#contacto"
                className={`block w-full text-center py-3 rounded text-sm font-medium transition-all duration-300 ${
                  plan.popular ? "btn-primary" : "btn-secondary"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
