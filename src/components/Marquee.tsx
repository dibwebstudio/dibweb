"use client";

const items = ["Landing Pages", "E-commerce", "Sitios Corporativos", "Sistemas ERP", "Puntos de Venta", "Meta Ads", "SEO", "Consultoría Digital", "Hosting", "Aplicaciones Web"];

export default function Marquee() {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden bg-[#faf9f7] py-5 border-t border-[#e7e5e0]">
      <div className="flex gap-12 animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-4 text-neutral-400 text-sm font-medium">
            {item}
            <span className="w-1 h-1 rounded-full bg-neutral-300" />
          </span>
        ))}
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee { animation: marquee 30s linear infinite; }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee { animation: none; }
        }
      `}</style>
    </div>
  );
}
