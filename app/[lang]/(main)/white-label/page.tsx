import type { Metadata } from "next";
import Script from "next/script";

import WhiteLabelSolutionsPage from "../_components/WhiteLabelSolutionsPage";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "White Label Coffee Canada | Custom Branded Coffee | EZPZ Coffee",
    description: "Launch your own coffee brand with EZPZ. We handle everything, roasting, packaging, and distribution. Specialty coffee, your brand, no minimums.",
    alternates: { canonical: "/en/white-label" },
    openGraph: {
      title: "White Label Coffee Canada | Custom Branded Coffee | EZPZ Coffee",
      description: "Launch your own coffee brand with EZPZ. We handle everything, roasting, packaging, and distribution. Specialty coffee, your brand, no minimums.",
      type: "website",
      url: "https://www.ezpz.coffee/en/white-label",
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "White Label Coffee Canada | EZPZ Coffee" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "White Label Coffee Canada | Custom Branded Coffee | EZPZ Coffee",
      description: "Launch your own coffee brand with EZPZ. We handle everything, roasting, packaging, and distribution. Specialty coffee, your brand, no minimums.",
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is white label coffee?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "White label coffee is specialty coffee produced and packaged under your brand name. EZPZ Coffee handles roasting, packaging, and design — you sell it under your own brand with no minimum order required.",
      },
    },
    {
      "@type": "Question",
      name: "Does EZPZ Coffee have a minimum order for white label coffee?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. EZPZ Coffee is the only white label coffee supplier in Canada with zero minimum order. You can launch your brand with a single bag and scale from there.",
      },
    },
    {
      "@type": "Question",
      name: "What types of custom coffee products does EZPZ offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "EZPZ Coffee offers custom branded coffee bags, white label ready-to-drink coffee, and branded Nespresso-compatible capsules. All products include full custom design with zero minimum order and are roasted in Montreal.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to get white label coffee from EZPZ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Custom coffee bags from EZPZ Coffee are ready within 2 to 3 weeks from design approval. EZPZ roasts fresh in Montreal and ships across Canada and the USA.",
      },
    },
    {
      "@type": "Question",
      name: "Can restaurants get their own branded coffee bags?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. EZPZ Coffee helps Canadian restaurants create fully branded specialty coffee bags with their logo and design. There is no minimum order so restaurants can start with as few bags as they need.",
      },
    },
  ],
};

const PRODUCT_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Custom Branded Coffee Bags",
  description:
    "Fully custom branded specialty coffee bags with your logo and design. No minimum order. Full design included. Specialty grade coffee roasted in Montreal. Ships across Canada and the USA in 2-3 weeks.",
  brand: {
    "@type": "Brand",
    name: "EZPZ Coffee",
  },
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceCurrency: "CAD",
    seller: {
      "@type": "Organization",
      name: "EZPZ Coffee",
    },
  },
};

const WhiteLabelRoutePage = () => {
  return (
    <>
      <Script
        id="wl-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      <Script
        id="wl-product-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PRODUCT_SCHEMA) }}
      />
      <WhiteLabelSolutionsPage />
    </>
  );
};

export default WhiteLabelRoutePage;
