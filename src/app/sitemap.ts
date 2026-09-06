import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://ipad-six-rho.vercel.app";
  return [
    { url: base, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${base}/servicios/puntos-de-pago`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/politicas`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/terminos`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.2 },
  ];
}
