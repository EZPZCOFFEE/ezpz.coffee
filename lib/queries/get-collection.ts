import { graphql } from "@/gql";
import { GetCollectionQuery } from "@/gql/graphql";

export const getCollectionQuery = /* GraphQL */ `
  query GetCollection($collectionHandle: String!, $after: String) {
    collection(handle: $collectionHandle) {
      id
      products(first: 250, after: $after) {
        nodes {
          handle
          title
          availableForSale
          featuredImage {
            url
          }
          priceRange {
            maxVariantPrice {
              amount
              currencyCode
            }
            minVariantPrice {
              amount
              currencyCode
            }
          }
          updatedAt
        }
      }
    }
  }
`;

export interface ShopifyCollectionOperation {
  data: {
    collection: GetCollectionQuery["collection"];
  };
  variables: {
    collectionHandle: string;
  };
}

export const GET_COLLECTION = graphql(getCollectionQuery);
