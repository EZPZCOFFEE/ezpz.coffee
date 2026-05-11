import type { Metadata } from "next";
import Script from "next/script";

import ReadyToDrinkPage from "./ReadyToDrinkPage";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Custom Ready-to-Drink Coffee Canada | White Label RTD | EZPZ Coffee",
    description:
      "Launch your own branded ready-to-drink coffee in Canada. EZPZ Coffee handles recipe development, production, packaging, and fulfillment for your custom RTD coffee brand.",
    alternates: { canonical: "/en/services/ready-to-drink" },
    openGraph: {
      title: "Custom Ready-to-Drink Coffee Canada | White Label RTD | EZPZ Coffee",
      description:
        "Launch your own branded ready-to-drink coffee in Canada. EZPZ Coffee handles recipe development, production, packaging, and fulfillment for your custom RTD coffee brand.",
      type: "website",
      url: "https://www.ezpz.coffee/en/services/ready-to-drink",
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "Custom Ready-to-Drink Coffee Canada | EZPZ Coffee" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Custom Ready-to-Drink Coffee Canada | White Label RTD | EZPZ Coffee",
      description:
        "Launch your own branded ready-to-drink coffee in Canada. EZPZ Coffee handles recipe development, production, packaging, and fulfillment for your custom RTD coffee brand.",
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const PRODUCT_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Custom Ready-to-Drink Coffee",
  description:
    "Custom branded ready-to-drink coffee in cans, bottles, or cartons. Full recipe development, production, packaging, and fulfillment. Available across Canada and the USA. Minimum 8,000 units.",
  brand: { "@type": "Brand", name: "EZPZ Coffee" },
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceCurrency: "CAD",
    seller: { "@type": "Organization", name: "EZPZ Coffee" },
  },
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the minimum order for custom RTD coffee in Canada?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The minimum order for custom ready-to-drink coffee from EZPZ is 8,000 units. This minimum covers the setup costs for recipe development, production scheduling, and co-manufacturing.",
      },
    },
    {
      "@type": "Question",
      name: "Can EZPZ develop a custom RTD coffee recipe for my brand?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. EZPZ Coffee develops a recipe specifically for your brand — flavor profile, sweetness level, dairy or dairy-free base, cold brew or espresso base, and functional ingredients. We produce samples until the flavor is exactly right for your brand.",
      },
    },
  ],
};

const ReadyToDrinkRoutePage = () => (
  <>
    <Script id="rtd-product-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(PRODUCT_SCHEMA) }} />
    <Script id="rtd-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
    <ReadyToDrinkPage />
  </>
);

export default ReadyToDrinkRoutePage;
