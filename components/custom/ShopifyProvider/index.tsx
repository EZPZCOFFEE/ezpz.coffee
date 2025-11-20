"use client";

import { CartProvider, ShopifyProvider } from "@shopify/hydrogen-react";
import { CountryCode, LanguageCode } from "@shopify/hydrogen-react/storefront-api-types";
import { PropsWithChildren } from "react";

import { API_VERSION } from "@/lib/consts";

interface Props {
  countryCode: CountryCode;
  languageCode: LanguageCode;
}

export const WhiteeeShopifyProvider: React.FC<PropsWithChildren<Props>> = ({
  countryCode,
  languageCode,
  children,
}) => {
  const storeDomain = `https://${process.env.NEXT_PUBLIC_STOREFRONT_ID}.myshopify.com`;

  if (!process.env.NEXT_PUBLIC_STOREFRONT_ID || !process.env.NEXT_PUBLIC_STOREFRONT_API_TOKEN) {
    if (process.env.NODE_ENV !== "production") {
       
      console.error(
        "Missing NEXT_PUBLIC_STOREFRONT_ID or NEXT_PUBLIC_STOREFRONT_API_TOKEN env vars for ShopifyProvider"
      );
    }
  }

  return (
    <ShopifyProvider
      storeDomain={storeDomain}
      storefrontToken={process.env.NEXT_PUBLIC_STOREFRONT_API_TOKEN!}
      storefrontApiVersion={API_VERSION}
      countryIsoCode={countryCode}
      languageIsoCode={languageCode}
      storefrontId={process.env.NEXT_PUBLIC_STOREFRONT_ID}
    >
      <CartProvider>{children}</CartProvider>
    </ShopifyProvider>
  );
};
