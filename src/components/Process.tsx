import Reveal from "@/components/Reveal";

export default function Process() {
  const steps = [
    {
      n: "01",
      title: "Conversamos",
      desc: "Entendemos tu negocio, tus clientes y qué debe lograr el sitio. Sin jerga técnica ni reuniones eternas.",
    },
    {
      n: "02",
      title: "Propuesta clara",
      desc: "Recibes una cotización detallada con alcance, plazos y precio cerrado. Sin sorpresas después.",
    },
    {
      n: "03",
      title: "Diseño y desarrollo",
      desc: "Construimos tu proyecto mostrándote avances reales en cada etapa. Tú apruebas antes de seguir.",
    },
    {
      n: "04",
      title: "Lanzamiento y soporte",
      desc: "Publicamos, configuramos todo (SSL, dominio, analítica) y quedamos disponibles para lo que necesites.",
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-y border-[#e7e5e0]">
      <div className="max-w-7xl mx-auto">
        <Reveal><div className="max-w-3xl mb-14">
          <p className="label mb-4">Cómo trabajamos</p>
          <h2 className="text-3xl sm:text-5xl text-neutral-900 leading-tight">Un proceso simple y transparente</h2>
        </div></Reveal>
        <Reveal delay={120}><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
          {steps.map((s) => (
            <div key={s.n} className="border-t-2 border-neutral-900 pt-6">
              <p className="text-sm font-semibold text-neutral-400 tabular-nums mb-3">{s.n}</p>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">{s.title}</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div></Reveal>
      </div>
    </section>
  );
}
