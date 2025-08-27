import "./globals.css";
import type { Metadata } from "next";
import { Inter, Nunito } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});
export const metadata: Metadata = {
  title: "Stephanie Toloi Arquitetura",
  description:
    "Stephanie Toloi Arquitetura | Escritório especializado em projetos de interiores residenciais e comerciais. Design funcional e personalizado. Excelência em cada detalhe. Solicite um projeto!",
  icons: {
    icon: "/favicon.ico",
  },
  keywords:
    "stephanie toloi, arquitetura de interiores, projetos residenciais, projetos comerciais, design de interiores, escritório de arquitetura, design funcional, design personalizado, arquitetura residencial, arquitetura comercial, interiores personalizados, solicitar projeto de arquitetura, orçamento para projeto de interiores",
  authors: [{ name: "Stephanie Toloi" }],
  robots: "index, follow",
  openGraph: {
    title: "Stephanie Toloi Arquitetura",
    description:
      "Stephanie Toloi Arquitetura | Escritório especializado em projetos de interiores residenciais e comerciais. Design funcional e personalizado. Excelência em cada detalhe. Solicite um projeto!",
    type: "website",
    images: [
      {
        url: "https://stephanietoloi.com.br/public/images/background_desktop.jpg",
        alt: "Stephanie Toloi Arquitetura",
      },
    ],
  },
  verification: {
    google: "9_NkXKbYv1_fFuVykUpmPeMVzxcy5PAWMxfan6rTGas",
  },
};
export const viewport = {
  width: "device-width",
  initialScale: 1,
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${nunito.variable}`}>
      <head>
        <link rel="shortcut icon" href="/images/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
