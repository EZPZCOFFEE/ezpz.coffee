import type { Metadata } from "next";
import Script from "next/script";

import NespressoCapsulesPage from "./NespressoCapsulesPage";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isFr = lang === "fr";

  const title = isFr
    ? "Capsules Nespresso personnalisées au Canada | Marque blanche | EZPZ Coffee"
    : "Custom Branded Nespresso Capsules Canada | White Label | EZPZ Coffee";
  const description = isFr
    ? "Lancez vos propres capsules compatibles Nespresso de marque au Canada. EZPZ Coffee gère l'approvisionnement, le remplissage, l'emballage et l'exécution. Compatible avec toutes les machines Nespresso Classic."
    : "Launch your own branded Nespresso-compatible capsules in Canada. EZPZ Coffee handles sourcing, filling, packaging, and fulfillment. Compatible with all Nespresso Classic machines.";

  return {
    title,
    description,
    alternates: {
      canonical: `/${lang}/services/nespresso-capsules`,
      languages: {
        "en-CA": "https://www.ezpz.coffee/en/services/nespresso-capsules",
        "fr-CA": "https://www.ezpz.coffee/fr/services/nespresso-capsules",
        "x-default": "https://www.ezpz.coffee/en/services/nespresso-capsules",
      },
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://www.ezpz.coffee/${lang}/services/nespresso-capsules`,
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: isFr ? "Capsules Nespresso personnalisées au Canada | EZPZ Coffee" : "Custom Branded Nespresso Capsules Canada | EZPZ Coffee" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/assets/banner-01.jpg"] },
  };
}

const makeCapsuleOffer = (url: string) => ({
  "@type": "Offer",
  url,
  priceCurrency: "CAD",
  price: "0.85",
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
  name: "Custom Branded Nespresso-Compatible Capsules",
  description: "Custom branded Nespresso-compatible capsules filled with specialty coffee. Compatible with all Nespresso Classic machines. Full custom packaging design included. Available for hotels, offices, corporate gifting, and retail across Canada and the USA.",
  brand: { "@type": "Brand", name: "EZPZ Coffee" },
  image: ["https://www.ezpz.coffee/assets/banner-01.jpg"],
  sku: "EZPZ-CAPS",
  offers: makeCapsuleOffer("https://www.ezpz.coffee/en/services/nespresso-capsules"),
};

const PRODUCT_SCHEMA_FR = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Capsules compatibles Nespresso personnalisées",
  description: "Capsules compatibles Nespresso personnalisées remplies de café de spécialité. Compatible avec toutes les machines Nespresso Classic. Design d'emballage entièrement personnalisé inclus. Disponible pour les hôtels, les bureaux, les cadeaux corporatifs et le commerce de détail partout au Canada et aux États-Unis.",
  brand: { "@type": "Brand", name: "EZPZ Coffee" },
  image: ["https://www.ezpz.coffee/assets/banner-01.jpg"],
  sku: "EZPZ-CAPS",
  offers: makeCapsuleOffer("https://www.ezpz.coffee/fr/services/nespresso-capsules"),
};

const FAQ_SCHEMA_EN = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Are EZPZ capsules compatible with Nespresso machines?", acceptedAnswer: { "@type": "Answer", text: "Yes. Every EZPZ capsule is compatible with all Nespresso Classic machines — the most widely used single-serve coffee system in Canadian hotels, offices, and homes." } },
    { "@type": "Question", name: "Can hotels get their own branded Nespresso capsules in Canada?", acceptedAnswer: { "@type": "Answer", text: "Yes. EZPZ Coffee offers custom branded Nespresso-compatible capsules for hotels across Canada. We handle sourcing, filling, packaging design, and delivery to your hotel properties." } },
  ],
};

const FAQ_SCHEMA_FR = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Les capsules EZPZ sont-elles compatibles avec les machines Nespresso ?", acceptedAnswer: { "@type": "Answer", text: "Oui. Chaque capsule EZPZ est compatible avec toutes les machines Nespresso Classic, le système de café à portion individuelle le plus utilisé dans les hôtels, bureaux et maisons au Canada." } },
    { "@type": "Question", name: "Les hôtels peuvent-ils obtenir leurs propres capsules Nespresso de marque au Canada ?", acceptedAnswer: { "@type": "Answer", text: "Oui. EZPZ Coffee offre des capsules compatibles Nespresso personnalisées pour les hôtels partout au Canada. Nous gérons l'approvisionnement, le remplissage, le design de l'emballage et la livraison à vos propriétés hôtelières." } },
  ],
};

const NespressoCapsulesRoutePage = async ({ params }: Props) => {
  const { lang } = await params;
  const isFr = lang === "fr";
  return (
    <>
      <Script id="capsule-product-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(isFr ? PRODUCT_SCHEMA_FR : PRODUCT_SCHEMA_EN) }} />
      <Script id="capsule-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(isFr ? FAQ_SCHEMA_FR : FAQ_SCHEMA_EN) }} />
      <NespressoCapsulesPage />
    </>
  );
};

export default NespressoCapsulesRoutePage;
