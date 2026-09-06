export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 mesh-gradient" />
      <div className="absolute top-10 left-[10%] w-[500px] h-[500px] bg-purple-500/15 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-10 right-[15%] w-[400px] h-[400px] bg-indigo-500/12 rounded-full blur-[100px] animate-float-delayed" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-fuchsia-500/8 rounded-full blur-[140px] animate-pulse-glow" />

      <div className="relative max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 glass-card px-4 py-1.5 rounded-full mb-8">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-xs text-white/60 font-medium tracking-wide uppercase">Disponibilidad abierta</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="gradient-text-white">Creamos tu presencia</span>
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
              className="btn-primary px-8 py-4 rounded-full text-sm font-medium text-white text-center"
            >
              Solicitar cotización
            </a>
            <a
              href="#portfolio"
              className="btn-secondary px-8 py-4 rounded-full text-sm font-medium text-white text-center"
            >
              Ver trabajos
            </a>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {[
            { value: "150+", label: "Proyectos entregados" },
            { value: "98%", label: "Clientes satisfechos" },
            { value: "24h", label: "Tiempo de respuesta" },
            { value: "5+", label: "Años de experiencia" },
          ].map((stat) => (
            <div key={stat.label} className="glass-card rounded-2xl p-6 text-center">
              <p className="text-3xl font-bold gradient-text">{stat.value}</p>
              <p className="text-xs text-white/40 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
