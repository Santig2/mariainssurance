import type { Metadata, Viewport } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#1B2D5B",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://mariaariasinsurance.com"),
  title: "María Arias | Agente de Seguros Licenciada en Florida, NC, SC, TX, NJ",
  description:
    "Asesoría profesional y cálida en seguros de salud (Obamacare y planes privados sin estatus migratorio), vida y protección financiera para familias hispanas en EE.UU. Cotización gratis.",
  keywords: [
    // Keywords primarias
    "seguro de salud en español",
    "agente de seguros en español Florida",
    "seguro de salud para inmigrantes",
    "obamacare en español",
    "planes de salud ACA Florida",
    "seguro médico sin documentos",
    "seguro de salud para familias hispanas",
    "health insurance agent Spanish Florida",
    // Keywords de marca + compañías
    "Manhattan Life agente español Florida",
    "UHone planes de salud Florida",
    "MedBlue Health Plans Florida",
    "UnitedHealthcare agente español Miami",
    "Oscar seguros de salud Florida",
    "Ambetter Florida agente licenciado",
    "Cigna planes de salud español",
    "National Life Group Florida español",
    "Assure For Life membresía funeraria",
    // Keywords de servicios específicos
    "planes PPO sin requisito de estatus migratorio",
    "seguro de salud para asilo pendiente",
    "seguro médico privado sin ACA",
    "seguro de vida familias hispanas",
    "anualidades para latinos Florida",
    "dental vision seguro complementario",
    "planificación retiro hispanos Florida",
    // SEO Local - Sur de Florida
    "agente de seguros Miami",
    "agente de seguros Hialeah",
    "agente de seguros Doral",
    "agente de seguros Kendall",
    "agente de seguros Homestead",
    "agente de seguros Miami Lakes",
    "agente de seguros Coral Gables",
    "agente de seguros Pembroke Pines",
    "agente de seguros Miramar",
    "seguro de salud Miami-Dade",
    "seguro de salud Broward County",
    // SEO por estado
    "agente de seguros North Carolina español",
    "agente de seguros South Carolina español",
    "agente de seguros Texas español",
    "agente de seguros New Jersey español",
    "health insurance agent bilingual NC SC TX NJ",
  ],
  authors: [{ name: "María Rosario Arias Gómez" }],
  creator: "María Arias",
  openGraph: {
    type: "website",
    locale: "es_US",
    url: "https://mariaariasinsurance.com",
    title: "María Arias | Licensed Insurance Agent",
    description: "Protección para hoy. Planificación para mañana. Seguros médicos, vida y ahorro para familias hispanas.",
    siteName: "María Arias Insurance",
    images: [
      {
        url: "/images/maria-arias.jpg",
        width: 1200,
        height: 630,
        alt: "María Arias - Agente de Seguros Licenciada",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "María Arias | Agente de Seguros",
    description: "Protección para hoy. Planificación para mañana. Asesoría en español.",
    images: ["/images/maria-arias.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://mariaariasinsurance.com/#mariaarias",
        "name": "María Rosario Arias Gómez",
        "jobTitle": "Licensed Insurance Agent",
        "description": "Agente de seguros con licencia activa en Florida, Carolina del Norte, Carolina del Sur, Texas y Nueva Jersey especializada en seguros de salud, vida y protección financiera para la comunidad hispana.",
        "url": "https://mariaariasinsurance.com",
        "image": "https://mariaariasinsurance.com/images/maria/portrait.jpg",
        "knowsLanguage": ["es", "en"],
        "hasCredential": "State Licensed Insurance Agent (FL, NC, SC, TX, NJ)"
      },
      {
        "@type": "InsuranceAgency",
        "@id": "https://mariaariasinsurance.com/#agency",
        "name": "María Arias - Licensed Insurance Agent",
        "url": "https://mariaariasinsurance.com",
        "logo": "https://mariaariasinsurance.com/images/brand/logo.png",
        "image": "https://mariaariasinsurance.com/images/maria/portrait.jpg",
        "description": "Servicios de seguros de salud (Obamacare y planes privados sin requisito migratorio), seguro de vida, complementarios y planificación financiera para familias hispanas.",
        "areaServed": ["FL", "NC", "SC", "TX", "NJ"],
        "knowsLanguage": ["es", "en"],
        "founder": {
          "@id": "https://mariaariasinsurance.com/#mariaarias"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Servicios de Seguros",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Seguros de Salud Obamacare (ACA)" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Planes Privados de Salud (Sin Estatus)" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Seguros de Vida con Beneficios en Vida" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Seguros Dentales y Visión" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Planificación para el Retiro (Anualidades)" } }
          ]
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "500"
        },
        "priceRange": "$$",
        "telephone": "+1-305-000-0000",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Miami",
          "addressRegion": "FL",
          "addressCountry": "US"
        }
      }
    ]
  };

  return (
    <html lang="es" className={`${playfair.variable} ${lato.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans antialiased text-[#1A1A2E] bg-[#FAF6EF]">
        <div className="pointer-events-none fixed inset-0 z-[100] opacity-[0.03] mix-blend-multiply" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
        {children}
      </body>
    </html>
  );
}
