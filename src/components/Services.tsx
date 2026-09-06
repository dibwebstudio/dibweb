export default function Services() {
  const services = [
    { title: "Landing Pages", desc: "Páginas de alto impacto diseñadas para convertir visitantes en clientes.", price: "Desde $120.000", link: "#contacto" },
    { title: "Sitios Corporativos", desc: "Sitios institucionales que transmiten profesionalismo y respaldo.", price: "Desde $250.000", link: "#contacto" },
    { title: "E-commerce", desc: "Tiendas online completas: catálogo, pasarela de pagos y gestión de inventario.", price: "Desde $450.000", link: "#contacto" },
    { title: "Puntos de Venta (POS)", desc: "Sistemas de cajero a medida o en modalidad de arriendo mensual.", price: "A medida", link: "/servicios/puntos-de-pago" },
    { title: "Sistemas ERP", desc: "Gestión empresarial a medida: inventario, ventas, facturación y reportes.", price: "Desde $800.000", link: "#contacto" },
    { title: "Aplicaciones Web", desc: "Plataformas y herramientas internas a medida para tu operación.", price: "Según alcance", link: "#contacto" },
    { title: "SEO & Marketing", desc: "Posicionamiento en buscadores y estrategia digital para atraer clientes.", price: "Desde $60.000", link: "#contacto" },
    { title: "Meta Ads", desc: "Campañas de publicidad en Facebook e Instagram orientadas a resultados.", price: "Desde $80.000", link: "#contacto" },
    { title: "SSL & Seguridad", desc: "Certificados, protección y buenas prácticas de seguridad web.", price: "Incluido", link: "#contacto" },
    { title: "Hosting & Dominios", desc: "Alojamiento de alto rendimiento y gestión de dominios.", price: "Desde $15.000/año", link: "#contacto" },
    { title: "Mantenimiento", desc: "Soporte continuo, actualizaciones y mejoras periódicas.", price: "Desde $30.000/mes", link: "#contacto" },
    { title: "Consultoría Digital", desc: "Estrategia y asesoramiento para tu presencia en línea.", price: "Según alcance", link: "#contacto" },
  ];

  return (
    <section id="servicios" className="py-28 px-4 sm:px-6 lg:px-8 bg-[#faf9f7]">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16">
          <p className="label mb-4">Servicios</p>
          <h2 className="text-3xl sm:text-5xl text-neutral-900 leading-tight">
            Todo lo que tu negocio necesita para estar en internet
          </h2>
          <p className="mt-5 text-neutral-600 text-lg">
            Soluciones completas de principio a fin: diseño, desarrollo, publicación y soporte.
          </p>
        </div>

        <div className="border-t border-[#e7e5e0]">
          {services.map((s, i) => (
            <a
              key={s.title}
              href={s.link}
              className="group grid grid-cols-[auto_1fr_auto] sm:grid-cols-[64px_1.4fr_2fr_auto] gap-x-6 gap-y-1 items-baseline py-6 border-b border-[#e7e5e0] hover:bg-white transition-colors px-2 -mx-2 rounded"
            >
              <span className="text-sm text-neutral-400 tabular-nums">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="text-xl font-semibold text-neutral-900 group-hover:text-blue-800 transition-colors">{s.title}</h3>
              <p className="hidden sm:block text-sm text-neutral-500 leading-relaxed">{s.desc}</p>
              <span className="text-sm font-medium text-neutral-700 whitespace-nowrap text-right">
                {s.price}
                <span className="inline-block ml-2 text-neutral-400 group-hover:text-blue-800 group-hover:translate-x-0.5 transition-all">→</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
