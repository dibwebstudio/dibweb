"use client";

import { useEffect, useRef, useState } from "react";

interface CounterProps {
  target: number;
  suffix?: string;
  duration?: number;
}

function AnimatedCounter({ target, suffix = "", duration = 2000 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLParagraphElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect(); } },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      setCount(Math.floor(p * target * (p < 1 ? 1 : 1)));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, target, duration]);

  return (
    <p ref={ref} className="text-3xl sm:text-4xl font-semibold tabular-nums text-neutral-900">
      {count}{suffix}
    </p>
  );
}

export default function TrustBar() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-y border-[#e7e5e0]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-neutral-500">
          {["SSL incluido", "Diseño responsive", "SEO técnico", "Hosting gestionado", "Soporte en Chile"].map((t) => (
            <span key={t} className="label flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-neutral-300" />
              {t}
            </span>
          ))}
        </div>
        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 max-w-4xl mx-auto gap-y-10">
          {[
            { t: 150, s: "+", l: "Proyectos entregados" },
            { t: 98, s: "%", l: "Clientes satisfechos" },
            { t: 24, s: "h", l: "Tiempo de respuesta" },
            { t: 5, s: "+", l: "Años de experiencia" },
          ].map((s, i) => (
            <div key={s.l} className={`text-center py-2 ${i > 0 ? "lg:border-l border-[#e7e5e0]" : ""}`}>
              <AnimatedCounter target={s.t} suffix={s.s} />
              <p className="text-xs text-neutral-500 mt-2">{s.l}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
