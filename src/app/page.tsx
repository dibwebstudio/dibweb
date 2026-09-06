import Header from "@/components/Header";
import ScrollProgress from "@/components/ScrollProgress";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import WhyUs from "@/components/WhyUs";
import Pricing from "@/components/Pricing";
import CtaBanner from "@/components/CtaBanner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a href="#contenido" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-blue-600 focus:text-white focus:px-4 focus:py-2 focus:rounded-lg">
        Saltar al contenido
      </a>
      <Header />
      <ScrollProgress />
      <main id="contenido" className="flex-1">
        <Hero />
        <Marquee />
        <TrustBar />
        <Services />
        <Portfolio />
        <Process />
        <WhyUs />
        <Pricing />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
