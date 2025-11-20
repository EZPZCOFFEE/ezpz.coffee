import { flattenConnection } from "@shopify/hydrogen-react";
import { MetadataRoute } from "next";

import { ShopifyCollectionOperation, GET_COLLECTION } from "@/lib/queries/get-collection";
import { shopifyQuery } from "@/lib/shopify";
import { baseUrl } from "@utils/base-url";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routesMap: MetadataRoute.Sitemap = ["", "/shop"].map((route) => ({
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
    console.log(collection);
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
