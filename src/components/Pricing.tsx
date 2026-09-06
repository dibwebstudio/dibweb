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
  },
];

export default function Pricing() {
  return (
    <section id="precios" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-blue-600 font-medium text-sm mb-3 tracking-wide uppercase">
            Precios
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Planes transparentes
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Sin costos ocultos. Elige el plan que mejor se adapte a tu negocio.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-white rounded-2xl p-8 ${
                plan.popular
                  ? "border-2 border-gray-900 shadow-xl scale-105"
                  : "border border-gray-200"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs font-medium px-4 py-1 rounded-full">
                  Más popular
                </span>
              )}
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {plan.name}
              </h3>
              <p className="text-gray-500 text-sm mb-6 min-h-[40px]">
                {plan.description}
              </p>
              <div className="mb-8">
                <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
                <span className="text-gray-500 text-sm ml-1">USD</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-gray-600">
                    <svg className="w-5 h-5 text-green-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#contacto"
                className={`block w-full text-center py-3 rounded-full text-sm font-medium transition-colors ${
                  plan.popular
                    ? "bg-gray-900 text-white hover:bg-gray-800"
                    : "border border-gray-300 text-gray-700 hover:border-gray-900 hover:text-gray-900"
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
