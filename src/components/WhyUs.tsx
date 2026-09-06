export default function WhyUs() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-white aurora-bg">
      <div className="aurora-blob aurora-blob-1" style={{ width: '300px', height: '300px', opacity: 0.25 }} />
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-blue-600 font-medium text-sm mb-3 tracking-wide">¿Por qué nosotros?</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              No solo creamos páginas web.<br />
              <span className="gradient-text">Creamos resultados.</span>
            </h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Cada proyecto es una oportunidad para superar expectativas. Nos enfocamos en lo que realmente importa: que tu negocio crezca.
            </p>
            <div className="space-y-6">
              {[
                { title: "Enfoque en conversión", desc: "Diseñamos pensando en que tus visitantes se conviertan en clientes." },
                { title: "Tecnología de vanguardia", desc: "Usamos las últimas herramientas para garantizar rapidez y seguridad." },
                { title: "Soporte continuo", desc: "No te dejamos solo después de la entrega. Estamos para ayudarte." },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">{item.title}</h3>
                    <p className="text-slate-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="glass-card rounded-2xl p-8 aurora-card shadow-sm">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 text-center">
                  <p className="text-4xl font-bold text-blue-600 mb-2">100%</p>
                  <p className="text-sm text-slate-600">Proyectos entregados a tiempo</p>
                </div>
                <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl p-6 text-center">
                  <p className="text-4xl font-bold text-emerald-600 mb-2">4.9</p>
                  <p className="text-sm text-slate-600">Calificación promedio</p>
                </div>
                <div className="bg-gradient-to-br from-violet-50 to-violet-100 rounded-xl p-6 text-center">
                  <p className="text-4xl font-bold text-violet-600 mb-2">x3</p>
                  <p className="text-sm text-slate-600">ROI promedio de nuestros clientes</p>
                </div>
                <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-6 text-center">
                  <p className="text-4xl font-bold text-amber-600 mb-2">2h</p>
                  <p className="text-sm text-slate-600">Respuesta máxima garantizada</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}