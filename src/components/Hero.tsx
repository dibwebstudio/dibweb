export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <p className="text-blue-600 font-medium text-sm mb-4 tracking-wide uppercase">
            Desarrollo Web Profesional
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
            Creamos tu presencia{" "}
            <span className="text-gray-400">digital</span>
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl leading-relaxed">
            Diseñamos y desarrollamos páginas web modernas, rápidas y optimizadas
            para convertir visitantes en clientes. Desde landing pages hasta
            plataformas completas.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#contacto"
              className="bg-gray-900 text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors text-center"
            >
              Solicitar cotización
            </a>
            <a
              href="#portfolio"
              className="border border-gray-300 text-gray-700 px-8 py-4 rounded-full text-sm font-medium hover:border-gray-900 hover:text-gray-900 transition-colors text-center"
            >
              Ver trabajos
            </a>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-8 border-t border-gray-200 pt-10">
          <div>
            <p className="text-3xl font-bold text-gray-900">150+</p>
            <p className="text-sm text-gray-500 mt-1">Proyectos entregados</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-gray-900">98%</p>
            <p className="text-sm text-gray-500 mt-1">Clientes satisfechos</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-gray-900">24h</p>
            <p className="text-sm text-gray-500 mt-1">Tiempo de respuesta</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-gray-900">5+</p>
            <p className="text-sm text-gray-500 mt-1">Años de experiencia</p>
          </div>
        </div>
      </div>
    </section>
  );
}
