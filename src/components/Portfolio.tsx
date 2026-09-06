const projects = [
  {
    title: "Restaurante La Mesa",
    category: "Landing Page",
    description: "Sitio web para restaurante con menú online y sistema de reservas.",
    gradient: "from-orange-200/60 via-amber-200/40 to-yellow-200/30",
    accent: "text-orange-600",
  },
  {
    title: "TechCorp Solutions",
    category: "Sitio Corporativo",
    description: "Web institucional para empresa de tecnología B2B.",
    gradient: "from-blue-200/60 via-indigo-200/40 to-violet-200/30",
    accent: "text-blue-600",
  },
  {
    title: "Moda Express",
    category: "E-commerce",
    description: "Tienda online de ropa con pasarela de pagos integrada.",
    gradient: "from-pink-200/60 via-rose-200/40 to-fuchsia-200/30",
    accent: "text-pink-600",
  },
  {
    title: "Clínica Bienestar",
    category: "Landing Page",
    description: "Página de captación de pacientes con sistema de citas online.",
    gradient: "from-emerald-200/60 via-teal-200/40 to-cyan-200/30",
    accent: "text-emerald-600",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 mesh-gradient opacity-40" />
      <div className="relative max-w-7xl mx-auto">
        <div className="max-w-2xl mb-16">
          <p className="text-violet-600 font-medium text-sm mb-3 tracking-wide uppercase">
            Portfolio
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a2e]">
            Proyectos recientes
          </h2>
          <p className="mt-4 text-[#1a1a2e]/50 text-lg">
            Algunos de los sitios web que hemos desarrollado para nuestros clientes.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group cursor-pointer"
            >
              <div className={`rounded-2xl h-64 flex items-center justify-center mb-6 overflow-hidden relative bg-gradient-to-br ${project.gradient} glass-card`}>
                <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
                <svg className="relative w-16 h-16 text-[#1a1a2e]/15 group-hover:text-[#1a1a2e]/25 group-hover:scale-110 transition-all duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <p className={`text-xs uppercase tracking-wider mb-2 font-medium ${project.accent}`}>
                {project.category}
              </p>
              <h3 className="text-xl font-semibold text-[#1a1a2e] mb-2 group-hover:text-violet-600 transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-[#1a1a2e]/50 text-sm">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
