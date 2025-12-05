import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import type { GetProductQuery, GetProductQueryVariables } from "@/gql/graphql";
import { GET_PRODUCT } from "@/lib/queries/get-product";
import { shopifyQuery } from "@/lib/shopify";

import CustomizationPageClient from "./_components/CustomizationPageClient";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("metadata.home");

  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
    },
    twitter: {
      card: "summary_large_image",
      title: t("ogTitle"),
      description: t("twitterDescription"),
    },
  };
}

const HomePage = async () => {
  const data = await shopifyQuery<GetProductQuery, GetProductQueryVariables>(GET_PRODUCT, {
    handle: "custom-coffee",
  });

  const product = data.product;

  if (!product) {
    return <div>Product not found</div>;
  }

  return <CustomizationPageClient product={product} />;
};

export default HomePage;
