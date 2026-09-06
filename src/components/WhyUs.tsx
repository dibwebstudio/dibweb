export default function WhyUs() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#0f172a] aurora-bg">
      <div className="aurora-blob aurora-blob-1" style={{ width: '300px', height: '300px', opacity: 0.08 }} />
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-blue-400 font-medium text-sm mb-3 tracking-wide">¿Por qué nosotros?</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              No solo creamos páginas web.<br />
              <span className="text-blue-400">Creamos resultados.</span>
            </h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Cada proyecto es una oportunidad para superar expectativas. Nos enfocamos en lo que realmente importa: que tu negocio crezca.
            </p>
            <div className="space-y-6">
              {[
                { title: "Enfoque en conversión", desc: "Diseñamos pensando en que tus visitantes se conviertan en clientes." },
                { title: "Tecnología de vanguardia", desc: "Usamos las últimas herramientas para garantizar rapidez y seguridad." },
                { title: "Soporte continuo", desc: "No te dejamos solo después de la entrega. Estamos para ayudarte." },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                    <p className="text-slate-400 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="glass-card rounded-2xl p-8 aurora-card">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/10 rounded-xl p-6 text-center">
                  <p className="text-4xl font-bold text-blue-400 mb-2">100%</p>
                  <p className="text-sm text-slate-400">Proyectos entregados a tiempo</p>
                </div>
                <div className="bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 rounded-xl p-6 text-center">
                  <p className="text-4xl font-bold text-emerald-400 mb-2">4.9</p>
                  <p className="text-sm text-slate-400">Calificación promedio</p>
                </div>
                <div className="bg-gradient-to-br from-violet-500/20 to-violet-600/10 rounded-xl p-6 text-center">
                  <p className="text-4xl font-bold text-violet-400 mb-2">x3</p>
                  <p className="text-sm text-slate-400">ROI promedio de nuestros clientes</p>
                </div>
                <div className="bg-gradient-to-br from-amber-500/20 to-amber-600/10 rounded-xl p-6 text-center">
                  <p className="text-4xl font-bold text-amber-400 mb-2">2h</p>
                  <p className="text-sm text-slate-400">Respuesta máxima garantizada</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
