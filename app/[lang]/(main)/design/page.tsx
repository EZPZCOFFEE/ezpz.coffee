import type { Metadata } from "next";
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
    alternates: { canonical: "/design" },
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

  return <CustomizationPageClient product={product} />;
};

export default DesignPage;
