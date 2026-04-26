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
    "/en/blog/mothers-day-coffee-gift-ideas-canada",
    "/en/blog/best-coffee-shops-montreal-2026",
    "/en/blog/custom-coffee-bags-corporate-gifts-canada",
    "/en/blog/how-to-launch-coffee-brand-canada-2026",
    "/en/blog/what-makes-specialty-coffee-traceable",
    "/en/blog/custom-coffee-bags-vs-pre-packaged-coffee",
    "/en/blog/custom-coffee-bags-airbnb-canada",
    "/en/blog/custom-coffee-bags-weddings-canada",
    "/en/blog/custom-coffee-bags-events-canada",
    "/en/coffee-week",
    "/en/white-label/restaurants",
    "/en/white-label/hotels",
    "/en/white-label/retailers",
    "/en/white-label/influencers",
    "/en/compare",
    "/en/compare/rogue-wave-coffee-alternative",
    "/en/compare/canterbury-coffee-alternative",
    "/en/compare/black-stripe-coffee-alternative",
    "/en/compare/virgin-hill-coffee-alternative",
    "/en/compare/hutsul-coffee-alternative",
    "/en/compare/roasters-pack-alternative",
    "/en/custom-coffee-bags-montreal",
    "/en/custom-coffee-bags-toronto",
    "/en/custom-coffee-bags-vancouver",
    "/en/white-label-coffee-canada",
    "/en/private-label-coffee-canada",
    "/en/locations",
    "/en/locations/usa",
    "/en/custom-coffee-bags-new-york",
    "/en/custom-coffee-bags-los-angeles",
    "/en/custom-coffee-bags-chicago",
    "/en/custom-coffee-bags-miami",
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
