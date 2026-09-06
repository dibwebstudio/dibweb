const projects = [
  {
    title: "Restaurante La Mesa",
    category: "Landing Page",
    description: "Sitio web para restaurante con menú online y sistema de reservas.",
    gradient: "from-blue-100/80 via-sky-50/60 to-cyan-50/40",
    accent: "text-blue-700",
  },
  {
    title: "TechCorp Solutions",
    category: "Sitio Corporativo",
    description: "Web institucional para empresa de tecnología B2B.",
    gradient: "from-slate-100/80 via-slate-50/60 to-gray-50/40",
    accent: "text-slate-600",
  },
  {
    title: "Moda Express",
    category: "E-commerce",
    description: "Tienda online de ropa con pasarela de pagos integrada.",
    gradient: "from-rose-100/60 via-pink-50/40 to-red-50/30",
    accent: "text-rose-700",
  },
  {
    title: "Clínica Bienestar",
    category: "Landing Page",
    description: "Página de captación de pacientes con sistema de citas online.",
    gradient: "from-emerald-100/60 via-teal-50/40 to-cyan-50/30",
    accent: "text-emerald-700",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 mesh-gradient opacity-40" />
      <div className="relative max-w-7xl mx-auto">
        <div className="max-w-2xl mb-16">
          <p className="text-blue-700 font-medium text-sm mb-3 tracking-wide uppercase">
            Portfolio
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1e293b]">
            Proyectos recientes
          </h2>
          <p className="mt-4 text-[#1e293b]/50 text-lg">
            Algunos de los sitios web que hemos desarrollado para nuestros clientes.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div key={project.title} className="group cursor-pointer">
              <div className={`rounded-2xl h-64 flex items-center justify-center mb-6 overflow-hidden relative bg-gradient-to-br ${project.gradient} glass-card`}>
                <div className="absolute inset-0 bg-gradient-to-t from-white/30 to-transparent" />
                <svg className="relative w-16 h-16 text-[#1e293b]/10 group-hover:text-[#1e293b]/20 group-hover:scale-110 transition-all duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <p className={`text-xs uppercase tracking-wider mb-2 font-medium ${project.accent}`}>
                {project.category}
              </p>
              <h3 className="text-xl font-semibold text-[#1e293b] mb-2 group-hover:text-blue-700 transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-[#1e293b]/50 text-sm">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
