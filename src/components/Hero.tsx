export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 mesh-gradient" />
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-1.5 rounded-full mb-8">
            <span className="w-2 h-2 bg-violet-400 rounded-full animate-pulse" />
            <span className="text-xs text-white/60 font-medium tracking-wide uppercase">Disponibilidad abierta</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="text-white">Creamos tu presencia</span>
            <br />
            <span className="gradient-text">digital</span>
          </h1>

          <p className="mt-8 text-lg text-white/40 max-w-2xl leading-relaxed">
            Diseñamos y desarrollamos páginas web modernas, rápidas y optimizadas
            para convertir visitantes en clientes. Desde landing pages hasta
            plataformas completas.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <a
              href="#contacto"
              className="bg-white text-black px-8 py-4 rounded-full text-sm font-medium hover:bg-white/90 transition-all duration-300 text-center"
            >
              Solicitar cotización
            </a>
            <a
              href="#portfolio"
              className="glass-card text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-white/10 transition-all duration-300 text-center"
            >
              Ver trabajos
            </a>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-2 sm:grid-cols-4 gap-8">
          {[
            { value: "150+", label: "Proyectos entregados" },
            { value: "98%", label: "Clientes satisfechos" },
            { value: "24h", label: "Tiempo de respuesta" },
            { value: "5+", label: "Años de experiencia" },
          ].map((stat) => (
            <div key={stat.label} className="glass-card rounded-2xl p-6 text-center">
              <p className="text-3xl font-bold text-white">{stat.value}</p>
              <p className="text-xs text-white/40 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
