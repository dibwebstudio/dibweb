import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center" aria-label="DibWeb Studio - Inicio">
              <Image src="/logo.png" alt="DibWeb Studio" width={160} height={40} className="h-10 w-auto" />
            </Link>
            <p className="mt-4 text-neutral-400 text-sm max-w-xs leading-relaxed">
              Creamos páginas web modernas y efectivas que ayudan a tu negocio a crecer.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-white text-sm mb-4">Servicios</h4>
            <ul className="space-y-2.5">
              {["Landing Pages", "Corporativos", "E-commerce", "SEO & Marketing", "Meta Ads", "Sistemas ERP"].map((s) => (
                <li key={s}><Link href="/#servicios" className="text-sm text-neutral-400 hover:text-white transition-colors">{s}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white text-sm mb-4">Contacto</h4>
            <ul className="space-y-2.5">
              <li><a href="mailto:dibwebstudio@gmail.com" className="text-sm text-neutral-400 hover:text-white transition-colors">dibwebstudio@gmail.com</a></li>
              <li><a href="tel:+56949417183" className="text-sm text-neutral-400 hover:text-white transition-colors">+56 9 4941-7183</a></li>
              <li><span className="text-sm text-neutral-400">Santiago de Chile</span></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-neutral-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-500">&copy; {new Date().getFullYear()} DibWeb Studio. Todos los derechos reservados.</p>
          <div className="flex items-center gap-6">
            <Link href="/politicas" className="text-neutral-500 hover:text-white transition-colors text-sm">Privacidad</Link>
            <Link href="/terminos" className="text-neutral-500 hover:text-white transition-colors text-sm">Términos</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}