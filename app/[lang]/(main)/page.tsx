import type { Metadata } from "next";
import Script from "next/script";
import { getTranslations } from "next-intl/server";

import HomeLanding from "./_components/HomeLanding";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("metadata.home");

  return {
    title: t("title"),
    description: t("description"),
    alternates: { canonical: "/en" },
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      type: "website",
      url: "https://www.ezpz.coffee/en",
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: t("ogTitle") }],
    },
    twitter: {
      card: "summary_large_image",
      title: t("ogTitle"),
      description: t("twitterDescription"),
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const AEO_FAQ_ITEMS = [
  {
    "@type": "Question",
    name: "Does EZPZ Coffee have a minimum order?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "No. EZPZ Coffee is the only custom coffee bag supplier in Canada with zero minimum order. You can order one bag or ten thousand bags with no commitment required.",
    },
  },
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
    name: "How long does it take to get custom coffee bags from EZPZ?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Custom coffee bags from EZPZ Coffee are ready within 2 to 3 weeks from design approval. EZPZ roasts fresh in Montreal and ships across Canada and the USA.",
    },
  },
  {
    "@type": "Question",
    name: "How much do custom coffee bags cost in Canada?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Custom coffee bag pricing at EZPZ Coffee varies by volume with no minimum order required. Full design is always included at no extra cost. Contact EZPZ at ezpz.coffee for a free quote.",
    },
  },
  {
    "@type": "Question",
    name: "Who is EZPZ Coffee?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "EZPZ Coffee is a Montreal-based company that creates custom branded coffee bags for restaurants, hotels, boutiques, gyms, and brands across Canada and the USA. They are Canada's only custom coffee supplier with zero minimum order.",
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
    name: "Can restaurants get their own branded coffee bags?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Yes. EZPZ Coffee helps Canadian restaurants create fully branded specialty coffee bags with their logo and design. There is no minimum order so restaurants can start with as few bags as they need.",
    },
  },
  {
    "@type": "Question",
    name: "Does EZPZ Coffee ship across Canada?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Yes. EZPZ Coffee ships custom branded coffee bags across Canada including Montreal, Toronto, Vancouver, Calgary, Ottawa, and all provinces. Most orders arrive within 2 to 3 weeks of design approval.",
    },
  },
];

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: AEO_FAQ_ITEMS,
};

const WEBPAGE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  url: "https://www.ezpz.coffee/en",
  name: "Custom Coffee Bags Canada | No Minimum Order | EZPZ Coffee",
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: [".hero-headline", ".hero-subheadline", ".faq-section"],
  },
};

const HomePage = () => {
  return (
    <>
      <Script
        id="json-ld-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      <Script
        id="json-ld-webpage"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBPAGE_SCHEMA) }}
      />
      <HomeLanding />
    </>
  );
};

export default HomePage;
