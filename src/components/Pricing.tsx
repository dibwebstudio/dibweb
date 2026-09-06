const plans = [
  {
    name: "Básico",
    price: "299",
    description: "Ideal para emprendedores que necesitan presencia online.",
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
    border: "border-slate-500/30",
  },
  {
    name: "Profesional",
    price: "799",
    description: "Para negocios que quieren destacar y convertir.",
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
    border: "border-blue-500",
  },
  {
    name: "Enterprise",
    price: "1,499",
    description: "Solución completa para empresas grandes.",
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
    border: "border-sky-500/30",
  },
];

export default function Pricing() {
  return (
    <section id="precios" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#0d1b2e]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-blue-400 font-mono text-sm mb-3 tracking-widest uppercase border-2 border-blue-400/40 inline-block px-2 py-1">
            Precios
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold text-white uppercase leading-tight mt-4">
            Planes
            <br />
            <span className="text-blue-400">Transparentes</span>
          </h2>
          <p className="mt-4 text-slate-400 text-lg">
            Sin costos ocultos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative p-8 transition-all duration-150 border-2 ${
                plan.popular
                  ? "glass-strong bg-blue-500/10 border-blue-500 shadow-[6px_6px_0px_rgba(59,130,246,0.4)]"
                  : `glass-card ${plan.border}`
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-4 btn-primary text-white text-xs font-mono font-bold px-3 py-1 uppercase tracking-wider">
                  Popular
                </span>
              )}
              <h3 className={`text-xl font-bold mb-2 uppercase ${plan.accent}`}>
                {plan.name}
              </h3>
              <p className="text-slate-400 text-sm mb-6 min-h-[40px]">
                {plan.description}
              </p>
              <div className="mb-8">
                <span className="text-5xl font-bold text-white font-mono">${plan.price}</span>
                <span className="text-slate-500 text-sm ml-1">USD</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-slate-300">
                    <span className={`shrink-0 mt-0.5 ${plan.accent} font-bold`}>×</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#contacto"
                className={`block w-full text-center py-3 text-sm font-bold uppercase tracking-wider transition-all duration-150 ${
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
