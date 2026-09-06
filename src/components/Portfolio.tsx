const projects = [
  {
    title: "Restaurante La Mesa",
    category: "Landing Page",
    description: "Sitio web para restaurante con menú online y sistema de reservas.",
    color: "bg-orange-100",
  },
  {
    title: "TechCorp Solutions",
    category: "Sitio Corporativo",
    description: "Web institucional para empresa de tecnología B2B.",
    color: "bg-blue-100",
  },
  {
    title: "Moda Express",
    category: "E-commerce",
    description: "Tienda online de ropa con pasarela de pagos integrada.",
    color: "bg-pink-100",
  },
  {
    title: "Clínica Bienestar",
    category: "Landing Page",
    description: "Página de captación de pacientes con sistema de citas online.",
    color: "bg-green-100",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-16">
          <p className="text-blue-600 font-medium text-sm mb-3 tracking-wide uppercase">
            Portfolio
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Proyectos recientes
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Algunos de los sitios web que hemos desarrollado para nuestros clientes.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group cursor-pointer"
            >
              <div className={`${project.color} rounded-2xl h-64 flex items-center justify-center mb-6 overflow-hidden relative`}>
                <div className="absolute inset-0 bg-gray-900/0 group-hover:bg-gray-900/5 transition-colors duration-300" />
                <svg className="w-16 h-16 text-gray-400 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">
                {project.category}
              </p>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
