import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Términos y Condiciones - DibWeb Studio",
  description: "Términos y condiciones de uso de los servicios de DibWeb Studio.",
};

export default function TerminosServicio() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-white min-h-screen">
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <Link href="/" className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 text-sm mb-8 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Volver al inicio
            </Link>

            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Términos y Condiciones</h1>
            <p className="text-slate-600 mb-8">Última actualización: Enero 2025</p>

            <div className="space-y-8 text-slate-600 leading-relaxed">
              <div>
                <h2 className="text-xl font-semibold text-slate-900 mb-3">1. Aceptación de los términos</h2>
                <p className="text-slate-600">
                  Al acceder y utilizar los servicios de DibWeb Studio, usted acepta estos términos y condiciones.
                  Si no está de acuerdo con alguno de estos términos, le rogamos que no utilice nuestros servicios.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-slate-900 mb-3">2. Descripción de servicios</h2>
                <p className="text-slate-600">
                  DibWeb Studio ofrece servicios de diseño y desarrollo web, incluyendo landing pages,
                  sitios corporativos, e-commerce, aplicaciones web, SEO, marketing digital, Meta Ads,
                  sistemas ERP, certificados SSL, hosting y dominios, y consultoría digital.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-slate-900 mb-3">3. Proceso de trabajo</h2>
                <ul className="mt-2 space-y-1 text-slate-600 list-disc list-inside">
                  <li>Cotización inicial basada en los requerimientos del cliente</li>
                  <li>Aprobación del presupuesto y cronograma</li>
                  <li>Desarrollo y entrega de avances parciales</li>
                  <li>Revisión y aprobación final</li>
                  <li>Entrega y puesta en producción</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-slate-900 mb-3">4. Pagos</h2>
                <p className="text-slate-600">
                  Los precios se acuerdan previamente al inicio del proyecto. Se requiere un adelanto del 50%
                  para comenzar el trabajo. El saldo restante se abona al momento de la entrega final.
                  Los precios están expresados en dólares estadounidenses (USD) salvo indicación contraria.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-slate-900 mb-3">5. Propiedad intelectual</h2>
                <p className="text-slate-600">
                  Una vez completado el pago total, el cliente adquiere los derechos de propiedad intelectual
                  sobre el diseño y desarrollo entregado. DibWeb Studio se reserva el derecho de mostrar
                  el proyecto en su portfolio como referencia.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-slate-900 mb-3">6. Revisions</h2>
                <p className="text-slate-600">
                  Cada plan incluye un número determinado de revisiones. Las revisiones adicionales tendrán
                  un costo extra que será comunicado previamente. Se considera revisión cualquier cambio
                  en el diseño, contenido o funcionalidad una vez aprobada la entrega.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-slate-900 mb-3">7. Plazos de entrega</h2>
                <p className="text-slate-600">
                  Los plazos de entrega se acuerdan al inicio del proyecto y dependen de la complejidad
                  del mismo. DibWeb Studio se compromete a cumplir con los plazos acordados, salvo
                  circunstancias imprevistas que serán comunicadas oportunamente.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-slate-900 mb-3">8. Soporte y mantenimiento</h2>
                <p className="text-slate-600">
                  El soporte post-venta está incluido según el plan contratado. El mantenimiento continuo
                  tiene un costo mensual o anual que se acuerda por separado.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-slate-900 mb-3">9. Limitación de responsabilidad</h2>
                <p className="text-slate-600">
                  DibWeb Studio no será responsable por daños indirectos, pérdidas de beneficios o
                  interrupciones del servicio. Nuestra responsabilidad se limita al monto pagado
                  por el servicio contratado.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-slate-900 mb-3">10. Cancelaciones</h2>
                <p className="text-slate-600">
                  El cliente puede cancelar el proyecto en cualquier momento. En caso de cancelación
                  después del inicio, se facturará el trabajo realizado hasta la fecha de cancelación.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-slate-900 mb-3">11. Contacto</h2>
                <p className="text-slate-600">
                  Para consultas sobre estos términos y condiciones, puede contactarnos a través
                  de nuestro formulario de contacto o al correo electrónico dibwebstudio@gmail.com.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
