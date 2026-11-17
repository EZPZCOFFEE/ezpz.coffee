import type { Metadata } from "next";
import Script from "next/script";

import WholesaleCoffeePage from "./WholesaleCoffeePage";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isFr = lang === "fr";
  const title = isFr
    ? "Café en gros pour restaurants, cafés et hôtels | EZPZ Coffee"
    : "Wholesale Coffee Beans for Restaurants, Cafés & Hotels | Bulk Coffee Supply | EZPZ";
  const description = isFr
    ? "Achetez des grains de café de spécialité en gros pour votre restaurant, café, hôtel ou bureau. Torréfié frais à Montréal, qualité constante, livraison récurrente. Servez un café exceptionnel à vos clients."
    : "Buy specialty wholesale coffee beans in bulk for your restaurant, café, hotel, or office. Freshly roasted in Montreal, consistent quality, recurring delivery. Serve exceptional coffee to your guests.";
  return {
    title,
    description,
    alternates: {
      canonical: `/${lang}/wholesale-coffee-beans`,
      languages: {
        "en-CA": "https://www.ezpz.coffee/en/wholesale-coffee-beans",
        "fr-CA": "https://www.ezpz.coffee/fr/cafe-en-gros",
        "x-default": "https://www.ezpz.coffee/en/wholesale-coffee-beans",
      },
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://www.ezpz.coffee/${lang}/wholesale-coffee-beans`,
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "Wholesale Coffee Beans | EZPZ Coffee" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/assets/banner-01.jpg"] },
  };
}

const SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Wholesale Coffee Beans",
  description:
    "Specialty-grade wholesale coffee beans in bulk for restaurants, cafés, hotels, offices, and businesses across Canada. Roasted fresh in Montreal, consistent quality, recurring delivery.",
  provider: {
    "@type": "Organization",
    name: "EZPZ Coffee",
    url: "https://www.ezpz.coffee",
    address: {
      "@type": "PostalAddress",
      streetAddress: "3780 Rue Saint-Patrick",
      addressLocality: "Montréal",
      addressRegion: "QC",
      postalCode: "H4E 1A2",
      addressCountry: "CA",
    },
  },
  areaServed: { "@type": "Country", name: "Canada" },
  serviceType: "Wholesale Coffee Supply",
  url: "https://www.ezpz.coffee/en/wholesale-coffee-beans",
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you sell wholesale coffee beans to restaurants and cafés?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. EZPZ supplies wholesale specialty coffee beans in bulk to restaurants, cafés, hotels, offices, and other businesses, roasted fresh in Montreal, available whole bean or ground, with recurring delivery.",
      },
    },
    {
      "@type": "Question",
      name: "What's the difference between wholesale beans and private label?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Wholesale beans are bulk coffee you brew and serve to your customers. Private label is coffee packaged in retail bags under your own brand to sell. EZPZ offers both — this program is for bulk beans you serve.",
      },
    },
    {
      "@type": "Question",
      name: "Can I get coffee delivered on a recurring schedule?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We set up recurring deliveries on a schedule that fits your usage, so your business never runs out, and your coffee always arrives freshly roasted.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer whole bean or ground wholesale coffee?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Both. We supply whole bean for your grinder or pre-ground to your machine's specification, whichever suits your setup.",
      },
    },
    {
      "@type": "Question",
      name: "Can I taste the coffee before ordering wholesale?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We provide samples so you can taste and choose the right coffee for your business before committing to a standing order.",
      },
    },
  ],
};

const SPEAKABLE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Wholesale Coffee Beans for Restaurants, Cafés & Hotels | EZPZ Coffee",
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["[data-speakable]"],
  },
  url: "https://www.ezpz.coffee/en/wholesale-coffee-beans",
};

const BREADCRUMB_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.ezpz.coffee/en" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://www.ezpz.coffee/en/services" },
    { "@type": "ListItem", position: 3, name: "Wholesale Coffee Beans", item: "https://www.ezpz.coffee/en/wholesale-coffee-beans" },
  ],
};

const WholesaleRoutePage = () => (
  <>
    <Script id="wholesale-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_SCHEMA) }} />
    <Script id="wholesale-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
    <Script id="wholesale-speakable-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SPEAKABLE_SCHEMA) }} />
    <Script id="wholesale-breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_SCHEMA) }} />
    <WholesaleCoffeePage />
  </>
);

export default WholesaleRoutePage;
