import type { Metadata } from "next";
import Script from "next/script";

import ServicesHub from "./ServicesHub";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isFr = lang === "fr";

  const title = isFr
    ? "Nos services | Sacs de café, prêt-à-boire, capsules Nespresso | EZPZ Coffee"
    : "Our Services | Custom Coffee Bags, RTD, Nespresso Capsules | EZPZ Coffee";
  const description = isFr
    ? "EZPZ Coffee offre cinq façons de mettre votre marque sur un café de spécialité : sacs personnalisés, prêt-à-boire, capsules compatibles Nespresso, café instantané lyophilisé et dropshipping. Aucun minimum. Design inclus."
    : "EZPZ Coffee offers three ways to put your brand on specialty coffee — custom branded bags, ready-to-drink, and Nespresso-compatible capsules. No minimums. Full design included.";

  return {
    title,
    description,
    alternates: {
      canonical: `/${lang}/services`,
      languages: {
        en: "https://www.ezpz.coffee/en/services",
        "fr-CA": "https://www.ezpz.coffee/fr/services",
      },
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://www.ezpz.coffee/${lang}/services`,
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: isFr ? "Services EZPZ Coffee" : "EZPZ Coffee Services" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const SERVICES_SCHEMA_EN = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "EZPZ Coffee Services",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Custom Branded Coffee Bags", url: "https://www.ezpz.coffee/en/services/custom-coffee-bags" },
    { "@type": "ListItem", position: 2, name: "Ready-to-Drink Coffee", url: "https://www.ezpz.coffee/en/services/ready-to-drink" },
    { "@type": "ListItem", position: 3, name: "Nespresso-Compatible Capsules", url: "https://www.ezpz.coffee/en/services/nespresso-capsules" },
  ],
};

const SERVICES_SCHEMA_FR = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Services EZPZ Coffee",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Sacs de café personnalisés", url: "https://www.ezpz.coffee/fr/services/custom-coffee-bags" },
    { "@type": "ListItem", position: 2, name: "Café prêt-à-boire", url: "https://www.ezpz.coffee/fr/services/ready-to-drink" },
    { "@type": "ListItem", position: 3, name: "Capsules Nespresso compatibles", url: "https://www.ezpz.coffee/fr/services/nespresso-capsules" },
  ],
};

const ServicesRoutePage = async ({ params }: Props) => {
  const { lang } = await params;
  const schema = lang === "fr" ? SERVICES_SCHEMA_FR : SERVICES_SCHEMA_EN;
  return (
    <>
      <Script id="services-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <ServicesHub />
    </>
  );
};

export default ServicesRoutePage;
