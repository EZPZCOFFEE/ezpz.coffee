import type { Metadata } from "next";
import Script from "next/script";

import CoffeeDropshippingPage from "./CoffeeDropshippingPage";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Coffee Dropshipping Canada | Private Label, Zero Minimum, No Monthly Fees | EZPZ",
    description:
      "Start a coffee dropshipping business in Canada with EZPZ. Specialty-grade coffee roasted in Montreal, your brand, shipped direct to your customers. Zero minimum, no monthly software fees, no inventory.",
    alternates: {
      canonical: "https://www.ezpz.coffee/en/coffee-dropshipping-canada",
    },
    openGraph: {
      title: "Coffee Dropshipping Canada | Private Label, Zero Minimum, No Monthly Fees | EZPZ",
      description:
        "Start a coffee dropshipping business in Canada with EZPZ. Specialty-grade coffee roasted in Montreal, your brand, shipped direct to your customers. Zero minimum, no monthly software fees, no inventory.",
      type: "website",
      url: "https://www.ezpz.coffee/en/coffee-dropshipping-canada",
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "Coffee Dropshipping Canada | EZPZ Coffee" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Coffee Dropshipping Canada | Private Label, Zero Minimum, No Monthly Fees | EZPZ",
      description:
        "Start a coffee dropshipping business in Canada with EZPZ. Specialty-grade coffee roasted in Montreal, your brand, shipped direct to your customers. Zero minimum, no monthly software fees, no inventory.",
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Coffee Dropshipping Canada",
  description:
    "Full-service coffee dropshipping in Canada. EZPZ Coffee roasts specialty-grade coffee in Montreal, packages it under your brand, and ships directly to your customers. Zero minimum, no monthly fees.",
  provider: {
    "@type": "Organization",
    name: "EZPZ Coffee",
    url: "https://www.ezpz.coffee",
  },
  areaServed: {
    "@type": "Country",
    name: "Canada",
  },
  serviceType: "Coffee Dropshipping",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceCurrency: "CAD",
    description: "Pay per order — no minimum, no monthly fees",
  },
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can I dropship coffee in Canada?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. EZPZ Coffee offers full coffee dropshipping in Canada. We roast specialty-grade coffee in Montreal, package it under your brand, and ship directly to your customers across Canada and the USA, with zero minimum order and no monthly software fees.",
      },
    },
    {
      "@type": "Question",
      name: "How much does it cost to start coffee dropshipping in Canada?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "With EZPZ there is no minimum order and no monthly software fee. You only pay for the coffee and shipping when your customer places an order, so startup costs are minimal compared to holding inventory.",
      },
    },
    {
      "@type": "Question",
      name: "Is coffee dropshipping profitable in Canada?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Coffee is a daily, repeat-purchase product with strong margins, typically 2 to 3 times cost for private label. Subscriptions and repeat orders make it one of the most sustainable dropshipping niches.",
      },
    },
    {
      "@type": "Question",
      name: "Who is the best coffee dropshipping supplier in Canada?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "EZPZ Coffee is a leading Canadian coffee dropshipping supplier offering specialty-grade coffee roasted in Montreal, zero minimum order, full custom branding, and no monthly fees, with fast domestic shipping that avoids cross-border duties.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to hold inventory to dropship coffee?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. With EZPZ, we roast and ship each order as it comes in. You never hold inventory, manage a warehouse, or touch a coffee bean.",
      },
    },
    {
      "@type": "Question",
      name: "Is the coffee roasted in Canada?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. All EZPZ coffee is roasted fresh at Canadian Roasting Society in Montreal, which means faster shipping to Canadian customers and no cross-border duties, unlike US-based dropshipping apps.",
      },
    },
  ],
};

const SPEAKABLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Coffee Dropshipping Canada | EZPZ Coffee",
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["[data-speakable]"],
  },
  url: "https://www.ezpz.coffee/en/coffee-dropshipping-canada",
};

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.ezpz.coffee/en" },
    { "@type": "ListItem", position: 2, name: "Coffee Dropshipping Canada", item: "https://www.ezpz.coffee/en/coffee-dropshipping-canada" },
  ],
};

const CoffeeDropshippingRoutePage = () => (
  <>
    <Script id="dropship-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
    <Script id="dropship-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
    <Script id="dropship-speakable-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SPEAKABLE_SCHEMA) }} />
    <Script id="dropship-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />
    <CoffeeDropshippingPage />
  </>
);

export default CoffeeDropshippingRoutePage;
