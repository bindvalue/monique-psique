import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import BackToTop from "@/components/ui/BackToTop";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Monique Gonçalves | Psicóloga Clínica — CRP 04/84383",
  description:
    "Psicoterapia individual para adultos, online e presencial. Um espaço de escuta qualificada, ética e acolhedora.",
  keywords: [
    "psicóloga",
    "psicoterapia",
    "terapia online",
    "ansiedade",
    "autoconhecimento",
    "CRP 04/84383",
  ],
  openGraph: {
    title: "Monique Gonçalves | Psicóloga Clínica",
    description:
      "Espaço de escuta qualificada para o seu processo terapêutico.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="font-sans bg-creme text-cacau antialiased">
        {children}
        <BackToTop />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              "name": "Monique Gonçalves - Psicóloga Clínica",
              "description": "Psicoterapia individual para adultos, online e presencial.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Belo Horizonte",
                "addressRegion": "MG",
                "addressCountry": "BR"
              },
              "medicalSpecialty": "Psychiatric",
              "availableService": {
                "@type": "MedicalTherapy",
                "name": "Psicoterapia"
              },
              "founder": {
                "@type": "Person",
                "name": "Monique Gonçalves",
                "jobTitle": "Psicóloga Clínica",
                "identifier": "CRP 04/84383"
              }
            })
          }}
        />
      </body>
    </html>
  );
}