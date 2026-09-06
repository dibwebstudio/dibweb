import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DibWeb Studio - Desarrollo Web Profesional",
  description:
    "Creamos páginas web modernas, rápidas y optimizadas para convertir visitantes en clientes. Landing pages, sitios corporativos, e-commerce y más.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen bg-white text-[#0f172a] font-sans">
        {children}
      </body>
    </html>
  );
}
