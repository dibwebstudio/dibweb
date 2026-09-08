import Reveal from "@/components/Reveal";
import React from "react";

const icons: Record<string, React.ReactNode> = {
  "Landing Pages": (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
    </svg>
  ),
  "Sitios Corporativos": (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
    </svg>
  ),
  "E-commerce": (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
    </svg>
  ),
  "Puntos de Venta (POS)": (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  "Sistemas ERP": (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
    </svg>
  ),
  "Aplicaciones Web": (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
    </svg>
  ),
  "SEO & Marketing": (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
    </svg>
  ),
  "Meta Ads": (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.52-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" />
    </svg>
  ),
  "SSL & Seguridad": (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  ),
  "Hosting & Dominios": (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
    </svg>
  ),
  "Mantenimiento": (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-5.1m5.1 5.1L17.25 9.75M11.42 15.17a4.5 4.5 0 01-6.364-6.364l5.1-5.1a4.5 4.5 0 016.364 6.364l-5.1 5.1z" />
    </svg>
  ),
  "Consultoría Digital": (
    <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
    </svg>
  ),
};

export default function Services() {
  const featured = [
    { title: "Landing Pages", desc: "Páginas de alto impacto diseñadas para convertir visitantes en clientes.", price: "Desde $120.000", link: "#contacto" },
    { title: "E-commerce", desc: "Tiendas online completas: catálogo, pasarela de pagos y gestión de inventario.", price: "Desde $450.000", link: "#contacto" },
    { title: "Puntos de Venta (POS)", desc: "Sistemas de cajero a medida o en modalidad de arriendo mensual.", price: "A medida", link: "/servicios/puntos-de-pago" },
  ];

  const mid = [
    { title: "Sitios Corporativos", desc: "Sitios institucionales que transmiten profesionalismo.", price: "Desde $250.000", link: "#contacto" },
    { title: "Sistemas ERP", desc: "Gestión empresarial: inventario, ventas y facturación.", price: "Desde $800.000", link: "#contacto" },
    { title: "SEO & Marketing", desc: "Posicionamiento y estrategia digital.", price: "Desde $60.000", link: "#contacto" },
  ];

  const compact = [
    { title: "Aplicaciones Web", price: "Según alcance", link: "#contacto" },
    { title: "Meta Ads", price: "Desde $80.000", link: "#contacto" },
    { title: "SSL & Seguridad", price: "Incluido", link: "#contacto" },
    { title: "Hosting & Dominios", price: "Desde $15.000/año", link: "#contacto" },
    { title: "Mantenimiento", price: "Desde $30.000/mes", link: "#contacto" },
    { title: "Consultoría Digital", price: "Según alcance", link: "#contacto" },
  ];

  return (
    <section id="servicios" className="py-28 px-4 sm:px-6 lg:px-8 bg-[#faf9f7]">
      <div className="max-w-7xl mx-auto">
        <Reveal><div className="max-w-3xl mb-16">
          <h2 className="text-3xl sm:text-5xl text-neutral-900 leading-tight">
            Todo lo que tu negocio necesita para estar en internet
          </h2>
          <p className="mt-5 text-neutral-600 text-lg">
            Soluciones completas de principio a fin: diseño, desarrollo, publicación y soporte.
          </p>
        </div></Reveal>

        {/* Featured: 3 large cards */}
        <Reveal delay={100}>
          <div className="grid md:grid-cols-3 gap-5 mb-5">
            {featured.map((s) => (
              <a
                key={s.title}
                href={s.link}
                className="group relative bg-neutral-900 text-white rounded-2xl p-7 flex flex-col justify-between min-h-[220px] overflow-hidden transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-10 translate-x-10" />
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-5 text-white">
                    {icons[s.title]}
                  </div>
                  <h3 className="text-xl font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-white/60 leading-relaxed">{s.desc}</p>
                </div>
                <div className="flex items-center justify-between mt-6">
                  <span className="text-sm font-medium text-white/80">{s.price}</span>
                  <span className="text-sm text-white/50 group-hover:text-white group-hover:translate-x-1 transition-all">→</span>
                </div>
              </a>
            ))}
          </div>
        </Reveal>

        {/* Mid: 3 medium cards with border */}
        <Reveal delay={200}>
          <div className="grid md:grid-cols-3 gap-5 mb-5">
            {mid.map((s) => (
              <a
                key={s.title}
                href={s.link}
                className="group bg-white rounded-2xl p-6 border border-[#e7e5e0] hover:border-neutral-300 transition-all hover:shadow-sm active:scale-[0.98]"
              >
                <div className="w-10 h-10 rounded-lg bg-neutral-100 flex items-center justify-center mb-4 text-neutral-700">
                  {icons[s.title]}
                </div>
                <h3 className="text-lg font-semibold text-neutral-900">{s.title}</h3>
                <p className="mt-1.5 text-sm text-neutral-500">{s.desc}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm font-medium text-neutral-600">{s.price}</span>
                  <span className="text-sm text-neutral-400 group-hover:text-neutral-900 group-hover:translate-x-1 transition-all">→</span>
                </div>
              </a>
            ))}
          </div>
        </Reveal>

        {/* Compact: 6 small items in grid */}
        <Reveal delay={300}>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-[#e7e5e0] rounded-2xl overflow-hidden">
            {compact.map((s) => (
              <a
                key={s.title}
                href={s.link}
                className="group bg-[#faf9f7] hover:bg-white p-5 transition-colors flex items-center justify-between"
              >
                <div>
                  <h4 className="text-sm font-semibold text-neutral-900">{s.title}</h4>
                  <span className="text-xs text-neutral-500 mt-0.5 block">{s.price}</span>
                </div>
                <span className="text-neutral-400 group-hover:text-neutral-900 group-hover:translate-x-1 transition-all text-sm">→</span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
