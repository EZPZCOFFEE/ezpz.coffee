import type { Metadata } from "next";
import Script from "next/script";
import { getTranslations } from "next-intl/server";

import type { GetProductQuery, GetProductQueryVariables } from "@/gql/graphql";
import { shopifyQuery } from "@/lib/interfaces/shopify";
import { GET_PRODUCT } from "@/lib/queries/get-product";

import CustomizationPageClient from "../_components/CustomizationPageClient";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("metadata.design");

  return {
    title: t("title"),
    description: t("description"),
    alternates: { canonical: "/en/design" },
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      type: "website",
      url: "https://www.ezpz.coffee/en/design",
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "Design Your Custom Coffee Bag | EZPZ Coffee" }],
    },
    twitter: {
      card: "summary_large_image",
      title: t("ogTitle"),
      description: t("twitterDescription"),
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const PRODUCT_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Custom Branded Coffee Bags",
  description:
    "Fully custom branded specialty coffee bags with your logo and design. No minimum order. Full design included. Specialty grade coffee roasted in Montreal. Ships across Canada and the USA in 2-3 weeks.",
  brand: { "@type": "Brand", name: "EZPZ Coffee" },
  image: ["https://www.ezpz.coffee/assets/banner-01.jpg"],
  sku: "EZPZ-CCB",
  offers: {
    "@type": "Offer",
    url: "https://www.ezpz.coffee/en/design",
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
  },
};

const DesignPage = async () => {
  let product: GetProductQuery["product"] | null = null;

  try {
    const data = await shopifyQuery<GetProductQuery, GetProductQueryVariables>(GET_PRODUCT, {
      handle: "custom-coffee",
    });
    product = data.product ?? null;
  } catch (err) {
    console.error("[DesignPage] Shopify fetch failed:", err);
  }

  if (!product) {
    return (
      <div style={{ padding: "120px 24px", textAlign: "center", fontFamily: "sans-serif" }}>
        <h1 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Our designer is temporarily unavailable.</h1>
        <p style={{ color: "#666" }}>Please try again in a few minutes or <a href="/en/contact" style={{ color: "#c0392b" }}>contact us</a> for help.</p>
      </div>
    );
  }

  return (
    <>
      <Script id="design-product-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(PRODUCT_SCHEMA) }} />
      <CustomizationPageClient product={product} />
    </>
  );
};

export default DesignPage;
