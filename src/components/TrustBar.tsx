import Reveal from "@/components/Reveal";

export default function TrustBar() {
  return (
    <section className="py-14 px-4 sm:px-6 lg:px-8 bg-white border-y border-[#e7e5e0]">
      <div className="max-w-7xl mx-auto">
        <Reveal><div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-neutral-500">
          {["SSL incluido", "Diseño responsive", "SEO técnico", "Hosting gestionado", "Soporte en Chile"].map((t) => (
            <span key={t} className="label flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-neutral-300" />
              {t}
            </span>
          ))}
        </div></Reveal>
        <Reveal delay={150}><div className="mt-12 grid grid-cols-2 lg:grid-cols-4 max-w-3xl mx-auto">
          {[
            { n: "150+", l: "Proyectos entregados" },
            { n: "98%", l: "Clientes satisfechos" },
            { n: "24h", l: "Tiempo de respuesta" },
            { n: "5+", l: "Años de experiencia" },
          ].map((s, i) => (
            <div key={s.l} className={`text-center py-2 ${i > 0 ? "lg:border-l border-[#e7e5e0]" : ""}`}>
              <p className="text-3xl font-semibold text-neutral-900 tabular-nums">{s.n}</p>
              <p className="text-xs text-neutral-500 mt-1">{s.l}</p>
            </div>
          ))}
        </div></Reveal>
      </div>
    </section>
  );
}
