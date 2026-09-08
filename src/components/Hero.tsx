"use client";

import Reveal from "@/components/Reveal";
import Devices from "@/components/Devices";

export default function Hero() {
  return (
    <section className="relative pt-28 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#faf9f7]">
      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <Reveal>
              <p className="label mb-6">Estudio de desarrollo web · Santiago de Chile</p>

              <h1 className="text-5xl sm:text-6xl lg:text-[4.5rem] leading-[1.02] text-neutral-900 tracking-tighter">
                Sitios web que
                <br />
                <span className="accent-italic text-neutral-700">convierten</span> visitas
                <br />
                en ventas
              </h1>

              <p className="mt-7 text-lg lg:text-xl text-neutral-600 max-w-xl leading-relaxed">
                Desarrollamos páginas web, tiendas online y sistemas de punto de venta a medida.
                Entregas a tiempo y soporte real después del lanzamiento.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a href="#contacto" className="btn-primary px-9 py-4 rounded-full text-sm font-semibold text-center">
                  Solicitar cotización
                </a>
                <a href="#portfolio" className="btn-secondary px-9 py-4 rounded-full text-sm font-semibold text-center">
                  Ver trabajos
                </a>
              </div>
            </Reveal>
          </div>
          <Devices />
        </div>
      </div>
    </section>
  );
}
