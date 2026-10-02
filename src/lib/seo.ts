import type { Metadata } from "next";

export function constructMetadata({
  title = "María Arias | Agente de Seguros Licenciada en FL, NC, SC, TX, NJ",
  description = "Asesoría profesional, humana y en español en seguros de salud (Obamacare y planes privados sin requisito migratorio), vida y retiro para familias hispanas en EE.UU.",
  image = "/images/hero/bg-1.jpg",
  path = "",
}: {
  title?: string;
  description?: string;
  image?: string;
  path?: string;
} = {}): Metadata {
  const url = `https://mariaariasinsurance.com${path}`;

  return {
    title,
    description,
    metadataBase: new URL("https://mariaariasinsurance.com"),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "María Arias Insurance",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type: "website",
      locale: "es_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
