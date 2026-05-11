import type { Metadata } from "next";
import Script from "next/script";

import ServicesHub from "./ServicesHub";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Our Services | Custom Coffee Bags, RTD, Nespresso Capsules | EZPZ Coffee",
    description:
      "EZPZ Coffee offers three ways to put your brand on specialty coffee — custom branded bags, ready-to-drink, and Nespresso-compatible capsules. No minimums. Full design included.",
    alternates: { canonical: "/en/services" },
    openGraph: {
      title: "Our Services | Custom Coffee Bags, RTD, Nespresso Capsules | EZPZ Coffee",
      description:
        "EZPZ Coffee offers three ways to put your brand on specialty coffee — custom branded bags, ready-to-drink, and Nespresso-compatible capsules. No minimums. Full design included.",
      type: "website",
      url: "https://www.ezpz.coffee/en/services",
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "EZPZ Coffee Services" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Our Services | Custom Coffee Bags, RTD, Nespresso Capsules | EZPZ Coffee",
      description:
        "EZPZ Coffee offers three ways to put your brand on specialty coffee — custom branded bags, ready-to-drink, and Nespresso-compatible capsules. No minimums. Full design included.",
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const SERVICES_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "EZPZ Coffee Services",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Custom Branded Coffee Bags",
      url: "https://www.ezpz.coffee/en/services/custom-coffee-bags",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Ready-to-Drink Coffee",
      url: "https://www.ezpz.coffee/en/services/ready-to-drink",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Nespresso-Compatible Capsules",
      url: "https://www.ezpz.coffee/en/services/nespresso-capsules",
    },
  ],
};

const ServicesRoutePage = () => (
  <>
    <Script
      id="services-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICES_SCHEMA) }}
    />
    <ServicesHub />
  </>
);

export default ServicesRoutePage;
