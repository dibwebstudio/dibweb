import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://ipad-six-rho.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "DibWeb Studio | Desarrollo Web Profesional en Santiago, Chile",
    template: "%s | DibWeb Studio",
  },
  description:
    "Diseñamos y desarrollamos sitios web modernos, e-commerce, sistemas POS a medida y campañas Meta Ads. Landing pages desde $120.000 CLP. Santiago de Chile.",
  keywords: [
    "desarrollo web Chile",
    "diseño web Santiago",
    "landing page Chile",
    "e-commerce Chile",
    "sistema punto de venta",
    "POS a medida",
    "Meta Ads Chile",
    "SEO Chile",
    "páginas web Santiago",
  ],
  authors: [{ name: "DibWeb Studio" }],
  creator: "DibWeb Studio",
  publisher: "DibWeb Studio",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: siteUrl,
    siteName: "DibWeb Studio",
    title: "DibWeb Studio | Desarrollo Web Profesional en Santiago, Chile",
    description:
      "Creamos páginas web modernas, e-commerce y sistemas POS a medida. Convierte visitantes en clientes.",
    images: [
      {
        url: "/logo.png",
        width: 1024,
        height: 1024,
        alt: "DibWeb Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DibWeb Studio | Desarrollo Web Profesional",
    description: "Páginas web, e-commerce y sistemas POS a medida en Chile.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: siteUrl,
  },
};

export const viewport: Viewport = {
  themeColor: "#2563eb",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "DibWeb Studio",
  description:
    "Desarrollo web profesional: landing pages, sitios corporativos, e-commerce, sistemas POS y marketing digital.",
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  email: "dibwebstudio@gmail.com",
  telephone: "+56949417183",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Santiago",
    addressCountry: "CL",
  },
  areaServed: "Chile",
  priceRange: "$$",
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen bg-white text-[#0f172a] font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
