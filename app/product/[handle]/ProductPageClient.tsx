"use client";

import { ProductProvider } from "@shopify/hydrogen-react";

import type { GetProductQuery } from "@/gql/graphql";

import { ProductView } from "./ProductView";

interface ProductPageClientProps {
  product: NonNullable<GetProductQuery["product"]>;
}

export const ProductPageClient: React.FC<ProductPageClientProps> = ({ product }) => {
  return (
    <ProductProvider data={product}>
      <ProductView />
    </ProductProvider>
  );
};
