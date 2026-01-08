import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import type { GetProductQuery, GetProductQueryVariables } from "@/gql/graphql";
import { shopifyQuery } from "@/lib/interfaces/shopify";
import { GET_PRODUCT } from "@/lib/queries/get-product";

import CustomizationPageClient from "./_components/CustomizationPageClient";
import FontPreloader from "./_components/FontPreloader";

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

  return (
    <>
      <FontPreloader />
      <CustomizationPageClient product={product} />
    </>
  );
};

export default HomePage;
