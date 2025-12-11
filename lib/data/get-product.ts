import { GetProductQuery, GetProductQueryVariables } from "@/gql/graphql";
import { shopifyQuery } from "@/lib/interfaces/shopify";
import { GET_PRODUCT } from "@/lib/queries/get-product";

export async function getProduct(handle: string) {
  const result = await shopifyQuery<GetProductQuery, GetProductQueryVariables>(GET_PRODUCT, {
    handle,
  });

  return {
    product: result.product,
  };
}
