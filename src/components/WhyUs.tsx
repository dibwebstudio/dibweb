import Reveal from "@/components/Reveal";

export default function WhyUs() {
  return (
    <section className="py-28 px-4 sm:px-6 lg:px-8 bg-[#faf9f7]">
      <div className="max-w-7xl mx-auto">
        <Reveal><div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl text-neutral-900 leading-tight mb-6">
              No solo hacemos páginas.<br />Acompañamos resultados.
            </h2>
            <p className="text-neutral-600 text-lg mb-10 leading-relaxed">
              Cada proyecto es una relación de largo plazo. Queremos que tu inversión se note
              en tus ventas, no solo en la pantalla.
            </p>
            <div className="space-y-6">
              {[
                { title: "Enfoque en conversión", desc: "Cada decisión de diseño responde a un objetivo comercial." },
                { title: "Tecnología probada", desc: "Herramientas modernas, estables y fáciles de mantener." },
                { title: "Soporte real", desc: "No desaparecemos tras la entrega. Respondemos cuando nos necesitas." },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="w-8 h-8 rounded-full border border-neutral-300 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-neutral-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">{item.title}</h3>
                    <p className="text-neutral-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-px bg-[#e7e5e0] border border-[#e7e5e0] rounded-2xl overflow-hidden">
            {[
              { n: "100%", d: "Proyectos entregados a tiempo" },
              { n: "4.9", d: "Calificación promedio de clientes" },
              { n: "x3", d: "Retorno promedio de inversión" },
              { n: "2h", d: "Respuesta máxima garantizada" },
            ].map((s) => (
              <div key={s.d} className="bg-white p-8 text-center">
                <p className="text-4xl font-semibold tabular-nums text-neutral-900 mb-2">{s.n}</p>
                <p className="text-sm text-neutral-500">{s.d}</p>
              </div>
            ))}
          </div>
        </div></Reveal>
      </div>
    </section>
  );
}
