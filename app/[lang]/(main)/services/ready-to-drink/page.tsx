import type { Metadata } from "next";
import Script from "next/script";

import ReadyToDrinkPage from "./ReadyToDrinkPage";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isFr = lang === "fr";

  const title = isFr
    ? "Café prêt-à-boire personnalisé au Canada | Marque blanche RTD | EZPZ Coffee"
    : "Custom Ready-to-Drink Coffee Canada | White Label RTD | EZPZ Coffee";
  const description = isFr
    ? "Lancez votre propre café prêt-à-boire de marque au Canada. EZPZ Coffee gère le développement de la recette, la production, l'emballage et l'exécution pour votre marque de café RTD personnalisé."
    : "Launch your own branded ready-to-drink coffee in Canada. EZPZ Coffee handles recipe development, production, packaging, and fulfillment for your custom RTD coffee brand.";

  return {
    title,
    description,
    alternates: {
      canonical: `/${lang}/services/ready-to-drink`,
      languages: {
        "en-CA": "https://www.ezpz.coffee/en/services/ready-to-drink",
        "fr-CA": "https://www.ezpz.coffee/fr/services/ready-to-drink",
        "x-default": "https://www.ezpz.coffee/en/services/ready-to-drink",
      },
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://www.ezpz.coffee/${lang}/services/ready-to-drink`,
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: isFr ? "Café prêt-à-boire personnalisé au Canada | EZPZ Coffee" : "Custom Ready-to-Drink Coffee Canada | EZPZ Coffee" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/assets/banner-01.jpg"] },
  };
}

const makeRtdOffer = (url: string) => ({
  "@type": "Offer",
  url,
  priceCurrency: "CAD",
  price: "11.75",
  availability: "https://schema.org/InStock",
  itemCondition: "https://schema.org/NewCondition",
  seller: { "@type": "Organization", name: "EZPZ Coffee" },
  hasMerchantReturnPolicy: {
    "@type": "MerchantReturnPolicy",
    applicableCountry: "CA",
    returnPolicyCategory: "https://schema.org/MerchantReturnNotPermitted",
  },
  shippingDetails: {
    "@type": "OfferShippingDetails",
    shippingRate: { "@type": "MonetaryAmount", value: "5.00", currency: "CAD" },
    shippingDestination: { "@type": "DefinedRegion", addressCountry: "CA" },
    deliveryTime: {
      "@type": "ShippingDeliveryTime",
      handlingTime: { "@type": "QuantitativeValue", minValue: 10, maxValue: 21, unitCode: "DAY" },
      transitTime: { "@type": "QuantitativeValue", minValue: 3, maxValue: 10, unitCode: "DAY" },
    },
  },
});

const PRODUCT_SCHEMA_EN = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Custom Ready-to-Drink Coffee",
  description: "Custom branded ready-to-drink coffee in cans, bottles, or cartons. Full recipe development, production, packaging, and fulfillment. Available across Canada and the USA. Minimum 8,000 units.",
  brand: { "@type": "Brand", name: "EZPZ Coffee" },
  image: ["https://www.ezpz.coffee/assets/banner-01.jpg"],
  sku: "EZPZ-RTD",
  offers: makeRtdOffer("https://www.ezpz.coffee/en/services/ready-to-drink"),
};

const PRODUCT_SCHEMA_FR = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Café prêt-à-boire personnalisé",
  description: "Café prêt-à-boire personnalisé en cannettes, bouteilles ou cartons. Développement de la recette, production, emballage et exécution complets. Disponible partout au Canada et aux États-Unis. Minimum 8 000 unités.",
  brand: { "@type": "Brand", name: "EZPZ Coffee" },
  image: ["https://www.ezpz.coffee/assets/banner-01.jpg"],
  sku: "EZPZ-RTD",
  offers: makeRtdOffer("https://www.ezpz.coffee/fr/services/ready-to-drink"),
};

const FAQ_SCHEMA_EN = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What is the minimum order for custom RTD coffee in Canada?", acceptedAnswer: { "@type": "Answer", text: "The minimum order for custom ready-to-drink coffee from EZPZ is 8,000 units. This minimum covers the setup costs for recipe development, production scheduling, and co-manufacturing." } },
    { "@type": "Question", name: "Can EZPZ develop a custom RTD coffee recipe for my brand?", acceptedAnswer: { "@type": "Answer", text: "Yes. EZPZ Coffee develops a recipe specifically for your brand — flavor profile, sweetness level, dairy or dairy-free base, cold brew or espresso base, and functional ingredients. We produce samples until the flavor is exactly right for your brand." } },
  ],
};

const FAQ_SCHEMA_FR = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Quel est le minimum de commande pour le café prêt-à-boire personnalisé au Canada ?", acceptedAnswer: { "@type": "Answer", text: "Le minimum de commande pour le café prêt-à-boire personnalisé d'EZPZ est de 8 000 unités. Ce minimum couvre les frais de développement de la recette, la planification de la production et la co-fabrication." } },
    { "@type": "Question", name: "EZPZ peut-il développer une recette de café RTD personnalisée pour ma marque ?", acceptedAnswer: { "@type": "Answer", text: "Oui. EZPZ Coffee développe une recette spécifiquement pour votre marque : profil de saveur, niveau de sucre, base laitière ou non laitière, base cold brew ou espresso, et ingrédients fonctionnels. Nous produisons des échantillons jusqu'à ce que la saveur soit exactement celle que vous souhaitez." } },
  ],
};

const ReadyToDrinkRoutePage = async ({ params }: Props) => {
  const { lang } = await params;
  const isFr = lang === "fr";
  return (
    <>
      <Script id="rtd-product-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(isFr ? PRODUCT_SCHEMA_FR : PRODUCT_SCHEMA_EN) }} />
      <Script id="rtd-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(isFr ? FAQ_SCHEMA_FR : FAQ_SCHEMA_EN) }} />
      <ReadyToDrinkPage />
    </>
  );
};

export default ReadyToDrinkRoutePage;
