const projects = [
  {
    title: "Restaurante La Mesa",
    category: "Landing Page",
    description: "Sitio web para restaurante con menú online y sistema de reservas.",
    gradient: "from-orange-500/25 via-amber-500/15 to-yellow-500/10",
    accent: "text-orange-400",
  },
  {
    title: "TechCorp Solutions",
    category: "Sitio Corporativo",
    description: "Web institucional para empresa de tecnología B2B.",
    gradient: "from-blue-500/25 via-indigo-500/15 to-violet-500/10",
    accent: "text-blue-400",
  },
  {
    title: "Moda Express",
    category: "E-commerce",
    description: "Tienda online de ropa con pasarela de pagos integrada.",
    gradient: "from-pink-500/25 via-rose-500/15 to-fuchsia-500/10",
    accent: "text-pink-400",
  },
  {
    title: "Clínica Bienestar",
    category: "Landing Page",
    description: "Página de captación de pacientes con sistema de citas online.",
    gradient: "from-emerald-500/25 via-teal-500/15 to-cyan-500/10",
    accent: "text-emerald-400",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 mesh-gradient opacity-40" />
      <div className="relative max-w-7xl mx-auto">
        <div className="max-w-2xl mb-16">
          <p className="text-fuchsia-400 font-medium text-sm mb-3 tracking-wide uppercase">
            Portfolio
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Proyectos recientes
          </h2>
          <p className="mt-4 text-white/40 text-lg">
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <svg className="relative w-16 h-16 text-white/20 group-hover:text-white/40 group-hover:scale-110 transition-all duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <p className={`text-xs uppercase tracking-wider mb-2 font-medium ${project.accent}`}>
                {project.category}
              </p>
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-fuchsia-400 transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-white/40 text-sm">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
