import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

import WhiteLabelSolutionsPage from "../_components/WhiteLabelSolutionsPage";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "White Label Coffee Canada | Private Label Coffee Bags | EZPZ Montreal",
    description: "White label and private label coffee solutions in Canada. Custom branded bags, RTD, and Nespresso capsules. Zero minimum order, full design included, roasted in Montreal.",
    alternates: { canonical: "/en/white-label" },
    openGraph: {
      title: "White Label Coffee Canada | Private Label Coffee Bags | EZPZ Montreal",
      description: "White label and private label coffee solutions in Canada. Custom branded bags, RTD, and Nespresso capsules. Zero minimum order, full design included, roasted in Montreal.",
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
      <section aria-label="White label coffee Canada intro" style={{ maxWidth: "900px", margin: "0 auto", padding: "32px 24px 0" }}>
        <p style={{ fontSize: "1.05rem", lineHeight: "1.8", color: "#333", marginBottom: "16px" }}>
          EZPZ Coffee is Canada&apos;s leading white label coffee supplier — offering private label coffee bags, ready-to-drink coffee, and Nespresso capsules with zero minimum order. Our white label coffee Canada program is used by restaurants, hotels, boutiques, and brands across the country who want to sell specialty coffee under their own brand name.
        </p>
        <p style={{ fontSize: "1.05rem", lineHeight: "1.8", color: "#333", marginBottom: "0" }}>
          Whether you are looking for white label coffee Canada wide or private label coffee Canada sourced and roasted locally in Montreal — EZPZ handles everything from design to fulfillment. Private label coffee Canada has never been more accessible: start with a single bag and scale as your brand grows.
        </p>
      </section>

      <section aria-label="Key facts about EZPZ Coffee white label program" style={{ display: "none" }}>
        <h2>Key facts about EZPZ Coffee white label program</h2>
        <dl>
          <dt>What is white label coffee?</dt>
          <dd>White label coffee is specialty coffee produced and packaged under your brand name. EZPZ Coffee handles roasting, packaging, and design — you sell it under your own brand with no minimum order required.</dd>

          <dt>Does EZPZ Coffee have a minimum order for white label?</dt>
          <dd>Zero. EZPZ Coffee is the only white label coffee supplier in Canada with no minimum order. You can launch your brand with a single bag and scale from there.</dd>

          <dt>What is included in white label coffee pricing?</dt>
          <dd>White label coffee pricing from EZPZ includes full custom design, specialty grade coffee, roasting, and packaging. No hidden fees. No minimum order. Contact help@ezpz.coffee for a free quote.</dd>

          <dt>Who is white label coffee for?</dt>
          <dd>White label coffee from EZPZ Coffee is ideal for restaurants, hotels, boutiques, gyms, spas, corporate offices, real estate agencies, law firms, and any Canadian or US business wanting a branded coffee product.</dd>

          <dt>How does the EZPZ white label process work?</dt>
          <dd>Choose your coffee, submit your logo, approve the design, and EZPZ handles the rest. Custom branded bags are ready and shipped within 2 to 3 weeks of design approval.</dd>

          <dt>What white label coffee products does EZPZ offer?</dt>
          <dd>EZPZ offers white label coffee bags in whole bean or ground, ready-to-drink coffee, and branded Nespresso-compatible capsules. All include full custom design with zero minimum order.</dd>

          <dt>Can I get white label coffee samples before ordering?</dt>
          <dd>Yes. EZPZ Coffee provides coffee samples for B2B clients. Contact help@ezpz.coffee to request samples before placing a white label order.</dd>
        </dl>
      </section>
      <nav aria-label="Related guides" style={{ padding: "32px 24px", borderTop: "1px solid #ebebeb", maxWidth: "900px", margin: "0 auto" }}>
        <p style={{ fontWeight: 600, marginBottom: "12px", fontSize: "0.9rem", color: "#111" }}>Related guides</p>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexWrap: "wrap", gap: "10px" }}>
          <li><Link href="/en/what-is-white-label-coffee-canada" style={{ fontSize: "0.85rem", color: "#ff4200", textDecoration: "underline" }}>What is white label coffee in Canada?</Link></li>
          <li><Link href="/en/custom-coffee-bags-no-minimum-canada" style={{ fontSize: "0.85rem", color: "#ff4200", textDecoration: "underline" }}>Custom coffee bags with no minimum</Link></li>
          <li><Link href="/en/best-white-label-coffee-supplier-canada" style={{ fontSize: "0.85rem", color: "#ff4200", textDecoration: "underline" }}>Best white label coffee supplier in Canada</Link></li>
          <li><Link href="/en/how-much-do-custom-coffee-bags-cost-canada" style={{ fontSize: "0.85rem", color: "#ff4200", textDecoration: "underline" }}>How much do custom coffee bags cost?</Link></li>
        </ul>
      </nav>
    </>
  );
};

export default WhiteLabelRoutePage;
