import type { Metadata } from "next";
import Script from "next/script";

import InstantCoffeePage from "./InstantCoffeePage";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "High-End Instant Coffee | Freeze-Dried Specialty Coffee | EZPZ Coffee",
    description:
      "EZPZ now offers premium freeze-dried (lyophilized) instant coffee. Specialty grade, full flavor and aroma preserved, roasted in Montreal. Custom branded, zero minimum. The instant coffee that tastes like a real cup.",
    alternates: {
      canonical: "https://www.ezpz.coffee/en/instant-coffee",
    },
    openGraph: {
      title: "High-End Instant Coffee | Freeze-Dried Specialty Coffee | EZPZ Coffee",
      description:
        "EZPZ now offers premium freeze-dried (lyophilized) instant coffee. Specialty grade, full flavor and aroma preserved, roasted in Montreal. Custom branded, zero minimum. The instant coffee that tastes like a real cup.",
      type: "website",
      url: "https://www.ezpz.coffee/en/instant-coffee",
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "Freeze-Dried Specialty Instant Coffee | EZPZ Coffee" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "High-End Instant Coffee | Freeze-Dried Specialty Coffee | EZPZ Coffee",
      description:
        "EZPZ now offers premium freeze-dried (lyophilized) instant coffee. Specialty grade, full flavor and aroma preserved, roasted in Montreal. Custom branded, zero minimum.",
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const PRODUCT_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Freeze-Dried Specialty Instant Coffee",
  description:
    "Premium freeze-dried (lyophilized) instant coffee made from specialty-grade beans, roasted in Montreal. Custom branded, zero minimum. Full flavor and aroma preserved through gentle lyophilisation.",
  brand: {
    "@type": "Brand",
    name: "EZPZ Coffee",
  },
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
      name: "What is freeze-dried instant coffee?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Freeze-dried instant coffee, or lyophilized coffee, is premium instant coffee made by freezing brewed specialty coffee and removing the water through sublimation under vacuum. This gentle process preserves the coffee's full flavor and aroma, unlike cheap spray-dried instant.",
      },
    },
    {
      "@type": "Question",
      name: "Is freeze-dried coffee better than regular instant coffee?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Regular instant coffee is usually spray-dried with high heat that burns off delicate flavor compounds. Freeze-drying uses no aggressive heat, preserving about 95% of the coffee's flavor and aroma molecules for a far superior cup.",
      },
    },
    {
      "@type": "Question",
      name: "Does freeze-dried coffee keep coffee's health benefits?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The gentle low-heat freeze-drying process helps preserve the natural antioxidants and beneficial compounds found in freshly brewed coffee, which high-heat processing can degrade.",
      },
    },
    {
      "@type": "Question",
      name: "Can I get freeze-dried instant coffee under my own brand?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. EZPZ offers fully custom branded freeze-dried instant coffee, made from specialty grade beans, packaged under your brand in jars, sachets, or sticks, with zero minimum order.",
      },
    },
    {
      "@type": "Question",
      name: "How do you make freeze-dried coffee?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We brew specialty coffee, freeze it, then place it under vacuum where the ice sublimates directly into vapor, removing the water while leaving the flavor and aroma intact. The result is a soluble specialty coffee that dissolves instantly in hot water.",
      },
    },
  ],
};

const SPEAKABLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Freeze-Dried Specialty Instant Coffee | EZPZ Coffee",
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["[data-speakable]"],
  },
  url: "https://www.ezpz.coffee/en/instant-coffee",
};

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.ezpz.coffee/en" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://www.ezpz.coffee/en/services" },
    { "@type": "ListItem", position: 3, name: "Freeze-Dried Instant Coffee", item: "https://www.ezpz.coffee/en/instant-coffee" },
  ],
};

const InstantCoffeeRoutePage = () => (
  <>
    <Script id="instant-product-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(PRODUCT_SCHEMA) }} />
    <Script id="instant-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
    <Script id="instant-speakable-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SPEAKABLE_SCHEMA) }} />
    <Script id="instant-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />
    <InstantCoffeePage />
  </>
);

export default InstantCoffeeRoutePage;
