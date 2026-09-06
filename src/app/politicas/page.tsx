import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Política de Privacidad - DibWeb Studio",
  description: "Conoce cómo DibWeb Studio recopila, usa y protege tu información personal.",
};

export default function PoliticaPrivacidad() {
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

            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Política de Privacidad</h1>
            <p className="text-slate-600 mb-8">Última actualización: Enero 2025</p>

            <div className="space-y-8 text-slate-600 leading-relaxed">
              <div>
                <h2 className="text-xl font-semibold text-slate-900 mb-3">1. Información que recopilamos</h2>
                <p className="text-slate-600">
                  Recopilamos información que usted nos proporciona directamente al contactarnos a través de nuestro formulario,
                  como su nombre, dirección de correo electrónico, número de teléfono y el mensaje que nos envía.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-slate-900 mb-3">2. Uso de la información</h2>
                <p className="text-slate-600">Utilizamos su información para:</p>
                <ul className="mt-2 space-y-1 text-slate-600 list-disc list-inside">
                  <li>Responder a sus consultas y solicitudes de cotización</li>
                  <li>Enviar información sobre nuestros servicios</li>
                  <li>Mejorar la calidad de nuestro servicio</li>
                  <li>Cumplir con obligaciones legales</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-slate-900 mb-3">3. Protección de datos</h2>
                <p className="text-slate-600">
                  Implementamos medidas de seguridad técnicas y organizativas para proteger su información personal
                  contra acceso no autorizado, alteración, divulgación o destrucción. Utilizamos conexiones SSL/TLS
                  y almacenamiento seguro en la nube.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-slate-900 mb-3">4. Cookies</h2>
                <p className="text-slate-600">
                  Utilizamos cookies técnicas estrictamente necesarias para el funcionamiento del sitio web.
                  Estas cookies no recopilan información personal y son esenciales para la navegación.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-slate-900 mb-3">5. Servicios de terceros</h2>
                <p className="text-slate-600">
                  Podemos utilizar servicios de terceros como Google Analytics y Meta Pixel para el análisis
                  del tráfico web y campañas publicitarias. Estos servicios recopilan información de forma
                  anónima y agregada.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-slate-900 mb-3">6. Sus derechos</h2>
                <p className="text-slate-600">
                  Usted tiene derecho a acceder, rectificar, eliminar o portar sus datos personales.
                  También puede oponerse al procesamiento de sus datos o solicitar la limitación del mismo.
                  Para ejercer estos derechos, contáctenos a través de nuestros canales oficiales.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-slate-900 mb-3">7. Retención de datos</h2>
                <p className="text-slate-600">
                  Conservamos su información personal solo durante el tiempo necesario para los fines
                  para los que fue recopilada, o según lo requiera la ley aplicable.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-slate-900 mb-3">8. Cambios en esta política</h2>
                <p className="text-slate-600">
                  Nos reservamos el derecho de actualizar esta política de privacidad en cualquier momento.
                  Los cambios serán publicados en esta página con la fecha de última actualización.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-slate-900 mb-3">9. Contacto</h2>
                <p className="text-slate-600">
                  Si tiene preguntas sobre esta política de privacidad o sobre el tratamiento de sus datos,
                  puede contactarnos a través de nuestro formulario de contacto o al correo electrónico
                  dibwebstudio@gmail.com.
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
