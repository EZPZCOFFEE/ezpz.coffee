import type { GetProductQuery, GetProductQueryVariables } from "@/gql/graphql";
import { shopifyQuery } from "@/lib/interfaces/shopify";
import { GET_PRODUCT } from "@utils/queries/get-product";

import { ProductPageClient } from "./ProductPageClient";

interface ProductPageProps {
  params: Promise<{
    handle: string;
  }>;
}

const ProductPage = async ({ params }: ProductPageProps) => {
  const { handle } = await params;

  const data = await shopifyQuery<GetProductQuery, GetProductQueryVariables>(GET_PRODUCT, {
    handle,
  });

  const product = data.product;

  if (!product) {
    return <></>;
  }

  return <ProductPageClient product={product} />;
};

export default ProductPage;
