const services = [
  {
    title: "Landing Pages",
    description: "Páginas de alto impacto diseñadas para convertir visitantes en leads y clientes potenciales.",
    iconColor: "text-blue-700",
    iconBg: "bg-blue-50 group-hover:bg-blue-100",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Sitios Corporativos",
    description: "Webs institucionales que transmiten profesionalismo y confianza para tu empresa o negocio.",
    iconColor: "text-slate-700",
    iconBg: "bg-slate-50 group-hover:bg-slate-100",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "E-commerce",
    description: "Tiendas online completas con pasarela de pagos, gestión de inventario y panel de administración.",
    iconColor: "text-emerald-700",
    iconBg: "bg-emerald-50 group-hover:bg-emerald-100",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
      </svg>
    ),
  },
  {
    title: "SEO & Marketing",
    description: "Optimización para buscadores y estrategias digitales para aumentar tu visibilidad online.",
    iconColor: "text-indigo-700",
    iconBg: "bg-indigo-50 group-hover:bg-indigo-100",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: "Aplicaciones Web",
    description: "Plataformas y herramientas a medida para automatizar procesos de tu negocio.",
    iconColor: "text-blue-800",
    iconBg: "bg-blue-50 group-hover:bg-blue-100",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: "Mantenimiento",
    description: "Soporte continuo, actualizaciones de contenido y mejoras periódicas para tu web.",
    iconColor: "text-sky-700",
    iconBg: "bg-sky-50 group-hover:bg-sky-100",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="servicios" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 mesh-gradient opacity-50" />
      <div className="relative max-w-7xl mx-auto">
        <div className="max-w-2xl mb-16">
          <p className="text-blue-700 font-medium text-sm mb-3 tracking-wide uppercase">
            Servicios
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1e293b]">
            Todo lo que necesitas para tu presencia digital
          </h2>
          <p className="mt-4 text-[#1e293b]/50 text-lg">
            Ofrecemos soluciones completas para que tu negocio destaque en internet.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.title} className="glass-card p-8 rounded-2xl group">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${service.iconColor} mb-6 ${service.iconBg} transition-colors duration-300`}>
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-[#1e293b] mb-3">
                {service.title}
              </h3>
              <p className="text-[#1e293b]/50 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
