import type { Metadata } from "next";
import Script from "next/script";

import CustomCoffeeBagsPage from "./CustomCoffeeBagsPage";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isFr = lang === "fr";

  const title = isFr
    ? "Sacs de café personnalisés au Canada | Service complet | EZPZ Coffee"
    : "Custom Coffee Bags Canada | Branded Coffee Bags | Full Service | EZPZ";
  const description = isFr
    ? "EZPZ Coffee gère tout pour vos sacs de café personnalisés : design, approvisionnement, torréfaction, emballage, logistique et exécution. Aucun minimum de commande. Livraison partout au Canada et aux États-Unis."
    : "EZPZ Coffee handles everything for your custom branded coffee bags — design, sourcing, roasting, packaging, logistics, and fulfillment. No minimum order. Ships across Canada and the USA.";

  return {
    title,
    description,
    alternates: {
      canonical: `/${lang}/services/custom-coffee-bags`,
      languages: {
        "en-CA": "https://www.ezpz.coffee/en/services/custom-coffee-bags",
        "fr-CA": "https://www.ezpz.coffee/fr/services/custom-coffee-bags",
        "x-default": "https://www.ezpz.coffee/en/services/custom-coffee-bags",
      },
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://www.ezpz.coffee/${lang}/services/custom-coffee-bags`,
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: isFr ? "Sacs de café personnalisés au Canada | EZPZ Coffee" : "Custom Branded Coffee Bags Canada | EZPZ Coffee" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/assets/banner-01.jpg"] },
  };
}

const MERCHANT_OFFER = (url: string) => ({
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
  name: "Custom Branded Coffee Bags",
  description: "Fully custom branded specialty coffee bags with your logo and design. No minimum order. Full design included. Specialty grade coffee roasted in Montreal at Canadian Roasting Society. Ships across Canada and the USA in 2–3 weeks.",
  brand: { "@type": "Brand", name: "EZPZ Coffee" },
  image: ["https://www.ezpz.coffee/assets/banner-01.jpg"],
  sku: "EZPZ-CCB",
  offers: MERCHANT_OFFER("https://www.ezpz.coffee/en/services/custom-coffee-bags"),
};

const PRODUCT_SCHEMA_FR = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Sacs de café entièrement personnalisés",
  description: "Sacs de café de spécialité entièrement personnalisés avec votre logo et votre design. Aucun minimum de commande. Design inclus. Torréfié à la Canadian Roasting Society à Montréal. Livraison en 2 à 3 semaines partout au Canada et aux États-Unis.",
  brand: { "@type": "Brand", name: "EZPZ Coffee" },
  image: ["https://www.ezpz.coffee/assets/banner-01.jpg"],
  sku: "EZPZ-CCB",
  offers: MERCHANT_OFFER("https://www.ezpz.coffee/fr/services/custom-coffee-bags"),
};

const FAQ_SCHEMA_EN = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "What is included with custom branded coffee bags from EZPZ?", acceptedAnswer: { "@type": "Answer", text: "Custom branded coffee bags from EZPZ include full custom bag design at no extra cost, specialty-grade coffee sourcing, professional roasting at Canadian Roasting Society in Montreal, packaging, and shipping anywhere in Canada and the USA." } },
    { "@type": "Question", name: "Is there a minimum order for custom coffee bags?", acceptedAnswer: { "@type": "Answer", text: "No. EZPZ Coffee has zero minimum order for custom branded coffee bags. You can order as few as one bag and scale up from there." } },
    { "@type": "Question", name: "How long does it take to get custom coffee bags from EZPZ?", acceptedAnswer: { "@type": "Answer", text: "Custom coffee bags from EZPZ are ready within 2 to 3 weeks from design approval. Design typically takes 3 to 5 business days and production takes an additional 1 to 2 weeks." } },
  ],
};

const FAQ_SCHEMA_FR = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Qu'est-ce qui est inclus avec les sacs de café personnalisés EZPZ ?", acceptedAnswer: { "@type": "Answer", text: "Les sacs de café personnalisés EZPZ incluent le design complet du sachet sans frais supplémentaires, l'approvisionnement en café de spécialité, la torréfaction professionnelle à la Canadian Roasting Society à Montréal, l'emballage et la livraison partout au Canada et aux États-Unis." } },
    { "@type": "Question", name: "Y a-t-il un minimum de commande pour les sacs de café personnalisés ?", acceptedAnswer: { "@type": "Answer", text: "Non. EZPZ Coffee n'a aucun minimum de commande pour les sacs de café personnalisés. Vous pouvez commander aussi peu qu'un seul sachet et augmenter votre volume par la suite." } },
    { "@type": "Question", name: "Combien de temps faut-il pour recevoir des sacs de café personnalisés d'EZPZ ?", acceptedAnswer: { "@type": "Answer", text: "Les sacs de café personnalisés d'EZPZ sont prêts en 2 à 3 semaines après approbation du design. Le design prend généralement 3 à 5 jours ouvrables et la production prend 1 à 2 semaines supplémentaires." } },
  ],
};

const CustomCoffeeBagsRoutePage = async ({ params }: Props) => {
  const { lang } = await params;
  const isFr = lang === "fr";
  return (
    <>
      <Script id="ccb-product-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(isFr ? PRODUCT_SCHEMA_FR : PRODUCT_SCHEMA_EN) }} />
      <Script id="ccb-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(isFr ? FAQ_SCHEMA_FR : FAQ_SCHEMA_EN) }} />
      <CustomCoffeeBagsPage />
    </>
  );
};

export default CustomCoffeeBagsRoutePage;
