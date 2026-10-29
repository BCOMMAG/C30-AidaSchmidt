import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";
import { getClinicSchema } from "@/lib/schema";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const siteUrl = "https://aidaschmidt.pages.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Clínica Schmidt — Dra. Aïda Schmidt | Harmonização Orofacial em Campo Largo PR",
    template: "%s | Clínica Schmidt — Dra. Aïda Schmidt",
  },
  description:
    "Clínica especializada em Harmonização Orofacial em Campo Largo/PR. Cuidado individualizado, beleza natural e equilíbrio facial com a Dra. Aïda Schmidt (CRO-PR 34310).",
  keywords: [
    "harmonização orofacial campo largo",
    "dra aida schmidt",
    "clinica schmidt",
    "harmonizacao facial campo largo",
    "botox campo largo",
    "toxina botulinica campo largo pr",
    "preenchimento labial campo largo",
    "acido hialuronico campo largo",
    "bioestimuladores de colageno",
    "fios de sustentacao campo largo",
    "rejuvenescimento facial campo largo",
    "cro pr 34310",
  ],
  authors: [{ name: "Dra. Aïda Schmidt" }],
  creator: "Dra. Aïda Schmidt",
  publisher: "Clínica Schmidt",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    title: "Clínica Schmidt — Dra. Aïda Schmidt | Harmonização Orofacial em Campo Largo PR",
    description:
      "Cuidado individualizado em Harmonização Orofacial. Procedimentos com foco em naturalidade, equilíbrio e bem-estar em Campo Largo/PR.",
    siteName: "Clínica Schmidt — Dra. Aïda Schmidt",
    images: [
      {
        url: "/og-image_optimized_300.jpg",
        width: 1353,
        height: 755,
        alt: "Clínica Schmidt — Dra. Aïda Schmidt | Harmonização Orofacial em Campo Largo PR",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Clínica Schmidt — Dra. Aïda Schmidt | Harmonização Orofacial",
    description:
      "Harmonização Orofacial com foco em equilíbrio, delicadeza e beleza natural em Campo Largo/PR.",
    images: ["/og-image_optimized_300.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: [
      { url: "/favicon-apple-touch-icon180x180.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = getClinicSchema(siteUrl);

  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${manrope.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased bg-[#F7F4EF] text-[#3B302B] selection:bg-[#C2A783]/30 selection:text-[#3B302B]">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}

