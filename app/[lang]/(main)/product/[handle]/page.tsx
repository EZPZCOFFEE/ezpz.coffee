import type { GetProductQuery, GetProductQueryVariables } from "@/gql/graphql";
import type { Metadata } from "next";
import { shopifyQuery } from "@/lib/interfaces/shopify";
import { getDemoProduct } from "@/lib/data/demo-products";
import { GET_PRODUCT } from "@utils/queries/get-product";

import { ProductPageClient } from "./ProductPageClient";
import { DemoProductView } from "./DemoProductView";

interface ProductPageProps {
  params: Promise<{
    handle: string;
  }>;
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { handle } = await params;
  return {
    alternates: { canonical: `/en/product/${handle}` },
  };
}

const ProductPage = async ({ params }: ProductPageProps) => {
  const { handle } = await params;

  let product: GetProductQuery["product"] | null = null;

  try {
    const data = await shopifyQuery<GetProductQuery, GetProductQueryVariables>(GET_PRODUCT, { handle });
    product = data.product ?? null;
  } catch {
    // Shopify unavailable — fall through to demo
  }

  if (product) {
    return <ProductPageClient product={product} />;
  }

  const demoProduct = getDemoProduct(handle);
  if (demoProduct) {
    return <DemoProductView product={demoProduct} />;
  }

  return <></>;
};

export default ProductPage;
