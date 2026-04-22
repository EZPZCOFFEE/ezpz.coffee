import { flattenConnection } from "@shopify/hydrogen-react";
import { MetadataRoute } from "next";

import { shopifyQuery } from "@/lib/interfaces/shopify";
import { ShopifyCollectionOperation, GET_COLLECTION } from "@/lib/queries/get-collection";
import { baseUrl } from "@utils/base-url";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routesMap: MetadataRoute.Sitemap = [
    "",
    "/en",
    "/en/design",
    "/en/white-label",
    "/en/about",
    "/en/coffee",
    "/en/faq",
    "/en/contact",
    "/en/shop",
    "/en/terms-of-use",
    "/en/mothers-day",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
  }));

  let productRoutes: MetadataRoute.Sitemap = [];

  try {
    const data = await shopifyQuery<
      ShopifyCollectionOperation["data"],
      ShopifyCollectionOperation["variables"]
    >(GET_COLLECTION, {
      collectionHandle: "shop-all",
    });

    const collection = data.collection;
    const products = collection?.products && flattenConnection(collection.products);

    productRoutes =
      products?.map((product) => ({
        url: `${baseUrl}/product/${product.handle}`,
        lastModified: (product.updatedAt as string) ?? new Date().toISOString(),
      })) ?? [];
  } catch (error) {
    if (process.env.NODE_ENV !== "production") {
      console.error("Failed to build Shopify sitemap entries", error);
    }
  }

  return [...routesMap, ...productRoutes];
}
