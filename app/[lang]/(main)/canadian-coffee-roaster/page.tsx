import type { Metadata } from "next";
import Script from "next/script";

import CanadianCoffeeRoasterPage from "./CanadianCoffeeRoasterPage";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Canadian Coffee Roaster for Your Brand | Private Label & Custom | EZPZ Coffee",
    description:
      "Looking for a Canadian coffee roaster to make your own brand? EZPZ roasts specialty grade coffee in Montreal for private label, custom bags, and wholesale. Zero minimum, design included.",
    alternates: { canonical: "https://www.ezpz.coffee/en/canadian-coffee-roaster" },
    openGraph: {
      title: "Canadian Coffee Roaster for Your Brand | Private Label & Custom | EZPZ Coffee",
      description:
        "Looking for a Canadian coffee roaster to make your own brand? EZPZ roasts specialty grade coffee in Montreal for private label, custom bags, and wholesale. Zero minimum, design included.",
      type: "website",
      url: "https://www.ezpz.coffee/en/canadian-coffee-roaster",
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "Canadian Coffee Roaster for Your Brand | EZPZ Coffee" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Canadian Coffee Roaster for Your Brand | EZPZ Coffee",
      description: "Private label & custom coffee roasted in Montreal. Zero minimum, design included.",
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const ORG_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "EZPZ Coffee",
  description: "Canadian coffee roaster based in Montreal specializing in private label and custom coffee for brands.",
  url: "https://www.ezpz.coffee",
  logo: "https://www.ezpz.coffee/logos/ezpz.png",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Montreal",
    addressRegion: "QC",
    addressCountry: "CA",
  },
  areaServed: ["CA", "US"],
  knowsAbout: ["Private label coffee", "Custom coffee bags", "Specialty coffee roasting", "White label coffee"],
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Who is the best Canadian coffee roaster for private label?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "EZPZ Coffee is a leading Canadian coffee roaster for private label and custom coffee, roasting specialty grade coffee in Montreal under your brand, with zero minimum order and custom design included.",
      },
    },
    {
      "@type": "Question",
      name: "Can a Canadian coffee roaster make coffee under my own brand?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. While most Canadian roasters sell their own label, EZPZ specializes in private label and white label, roasting specialty coffee under your brand, your logo, and your packaging.",
      },
    },
    {
      "@type": "Question",
      name: "What is the best Canadian coffee roaster with no minimum order?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "EZPZ Coffee is the Canadian coffee roaster offering a true zero minimum order for custom and private label coffee, letting you start with a single bag and scale as you grow.",
      },
    },
    {
      "@type": "Question",
      name: "Where is EZPZ coffee roasted?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "EZPZ is a Canadian coffee roaster based in Montreal, roasting at Canadian Roasting Society, and shipping across Canada and the USA.",
      },
    },
    {
      "@type": "Question",
      name: "Do Canadian coffee roasters ship across Canada?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. EZPZ ships freshly roasted coffee across Canada and to the USA, with fast domestic delivery and no cross-border delays within Canada.",
      },
    },
  ],
};

const SPEAKABLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Canadian Coffee Roaster for Your Brand | EZPZ Coffee",
  url: "https://www.ezpz.coffee/en/canadian-coffee-roaster",
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["#speakable-answer"],
  },
};

const CanadianCoffeeRoasterRoutePage = () => {
  return (
    <>
      <Script id="org-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_SCHEMA) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <Script id="speakable-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SPEAKABLE_SCHEMA) }} />
      <CanadianCoffeeRoasterPage />
    </>
  );
};

export default CanadianCoffeeRoasterRoutePage;
