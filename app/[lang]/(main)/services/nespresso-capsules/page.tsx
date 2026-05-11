import type { Metadata } from "next";
import Script from "next/script";

import NespressoCapsulesPage from "./NespressoCapsulesPage";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Custom Branded Nespresso Capsules Canada | White Label | EZPZ Coffee",
    description:
      "Launch your own branded Nespresso-compatible capsules in Canada. EZPZ Coffee handles sourcing, filling, packaging, and fulfillment. Compatible with all Nespresso Classic machines.",
    alternates: { canonical: "/en/services/nespresso-capsules" },
    openGraph: {
      title: "Custom Branded Nespresso Capsules Canada | White Label | EZPZ Coffee",
      description:
        "Launch your own branded Nespresso-compatible capsules in Canada. EZPZ Coffee handles sourcing, filling, packaging, and fulfillment. Compatible with all Nespresso Classic machines.",
      type: "website",
      url: "https://www.ezpz.coffee/en/services/nespresso-capsules",
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "Custom Branded Nespresso Capsules Canada | EZPZ Coffee" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Custom Branded Nespresso Capsules Canada | White Label | EZPZ Coffee",
      description:
        "Launch your own branded Nespresso-compatible capsules in Canada. EZPZ Coffee handles sourcing, filling, packaging, and fulfillment. Compatible with all Nespresso Classic machines.",
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const PRODUCT_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Custom Branded Nespresso-Compatible Capsules",
  description:
    "Custom branded Nespresso-compatible capsules filled with specialty coffee. Compatible with all Nespresso Classic machines. Full custom packaging design included. Available for hotels, offices, corporate gifting, and retail across Canada and the USA.",
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
      name: "Are EZPZ capsules compatible with Nespresso machines?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Every EZPZ capsule is compatible with all Nespresso Classic machines — the most widely used single-serve coffee system in Canadian hotels, offices, and homes.",
      },
    },
    {
      "@type": "Question",
      name: "Can hotels get their own branded Nespresso capsules in Canada?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. EZPZ Coffee offers custom branded Nespresso-compatible capsules for hotels across Canada. We handle sourcing, filling, packaging design, and delivery to your hotel properties.",
      },
    },
  ],
};

const NespressoCapsulesRoutePage = () => (
  <>
    <Script id="capsule-product-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(PRODUCT_SCHEMA) }} />
    <Script id="capsule-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
    <NespressoCapsulesPage />
  </>
);

export default NespressoCapsulesRoutePage;
