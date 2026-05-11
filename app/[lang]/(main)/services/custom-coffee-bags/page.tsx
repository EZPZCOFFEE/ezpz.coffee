import type { Metadata } from "next";
import Script from "next/script";

import CustomCoffeeBagsPage from "./CustomCoffeeBagsPage";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Custom Branded Coffee Bags Canada | Full Service | No Minimum | EZPZ Coffee",
    description:
      "EZPZ Coffee handles everything for your custom branded coffee bags — design, sourcing, roasting, packaging, logistics, and fulfillment. No minimum order. Ships across Canada and the USA.",
    alternates: { canonical: "/en/services/custom-coffee-bags" },
    openGraph: {
      title: "Custom Branded Coffee Bags Canada | Full Service | No Minimum | EZPZ Coffee",
      description:
        "EZPZ Coffee handles everything for your custom branded coffee bags — design, sourcing, roasting, packaging, logistics, and fulfillment. No minimum order. Ships across Canada and the USA.",
      type: "website",
      url: "https://www.ezpz.coffee/en/services/custom-coffee-bags",
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "Custom Branded Coffee Bags Canada | EZPZ Coffee" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Custom Branded Coffee Bags Canada | Full Service | No Minimum | EZPZ Coffee",
      description:
        "EZPZ Coffee handles everything for your custom branded coffee bags — design, sourcing, roasting, packaging, logistics, and fulfillment. No minimum order. Ships across Canada and the USA.",
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const PRODUCT_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Custom Branded Coffee Bags",
  description:
    "Fully custom branded specialty coffee bags with your logo and design. No minimum order. Full design included. Specialty grade coffee roasted in Montreal at Canadian Roasting Society. Ships across Canada and the USA in 2–3 weeks.",
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
      name: "What is included with custom branded coffee bags from EZPZ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Custom branded coffee bags from EZPZ include full custom bag design at no extra cost, specialty-grade coffee sourcing, professional roasting at Canadian Roasting Society in Montreal, packaging, and shipping anywhere in Canada and the USA.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a minimum order for custom coffee bags?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. EZPZ Coffee has zero minimum order for custom branded coffee bags. You can order as few as one bag and scale up from there.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to get custom coffee bags from EZPZ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Custom coffee bags from EZPZ are ready within 2 to 3 weeks from design approval. Design typically takes 3 to 5 business days and production takes an additional 1 to 2 weeks.",
      },
    },
  ],
};

const CustomCoffeeBagsRoutePage = () => (
  <>
    <Script id="ccb-product-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(PRODUCT_SCHEMA) }} />
    <Script id="ccb-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
    <CustomCoffeeBagsPage />
  </>
);

export default CustomCoffeeBagsRoutePage;
