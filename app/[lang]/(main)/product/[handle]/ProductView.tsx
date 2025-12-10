"use client";

import {
  AddToCartButton,
  BuyNowButton,
  Image,
  ProductPrice,
  flattenConnection,
  useProduct,
} from "@shopify/hydrogen-react";
import { useTranslations } from "next-intl";

export const ProductView = () => {
  const t = useTranslations("product");
  const { product, selectedVariant } = useProduct();

  if (!product) {
    return <></>;
  }

  const productImages = product.images ? flattenConnection(product.images) : [];
  const primaryImage = productImages[0];

  return (
    <div>
      <p>{product.title}</p>
      {primaryImage && (
        <Image
          data={primaryImage}
          sizes="(max-width: 768px) 50vw, 100vw"
          alt={primaryImage.altText ?? product.title}
        />
      )}
      <p>{product.description}</p>
      <ProductPrice data={product} />
      {selectedVariant?.id && (
        <>
          <AddToCartButton variantId={selectedVariant.id}>{t("addToCart")}</AddToCartButton>
          <BuyNowButton variantId={selectedVariant.id}>{t("buyNow")}</BuyNowButton>
        </>
      )}
    </div>
  );
};
