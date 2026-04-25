export const getShopProductsQuery = /* GraphQL */ `
  query GetShopProducts($first: Int!, $after: String) {
    products(first: $first, after: $after, sortKey: TITLE) {
      pageInfo {
        hasNextPage
        endCursor
      }
      nodes {
        handle
        title
        description
        productType
        availableForSale
        featuredImage {
          url
          altText
        }
        priceRange {
          minVariantPrice {
            amount
            currencyCode
          }
        }
      }
    }
  }
`;

export interface ShopProduct {
  handle: string;
  title: string;
  description: string;
  productType: string;
  availableForSale: boolean;
  featuredImage: { url: string; altText: string | null } | null;
  priceRange: {
    minVariantPrice: {
      amount: string;
      currencyCode: string;
    };
  };
}

export interface GetShopProductsData {
  products: {
    pageInfo: { hasNextPage: boolean; endCursor: string | null };
    nodes: ShopProduct[];
  };
}

export interface GetShopProductsVariables {
  first: number;
  after?: string;
}
