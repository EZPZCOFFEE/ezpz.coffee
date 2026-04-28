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
    // Canadian city pages
    "/en/custom-coffee-bags-quebec-city",
    "/en/custom-coffee-bags-laval",
    "/en/custom-coffee-bags-longueuil",
    "/en/custom-coffee-bags-gatineau",
    "/en/custom-coffee-bags-sherbrooke",
    "/en/custom-coffee-bags-ottawa",
    "/en/custom-coffee-bags-mississauga",
    "/en/custom-coffee-bags-brampton",
    "/en/custom-coffee-bags-hamilton",
    "/en/custom-coffee-bags-london-ontario",
    "/en/custom-coffee-bags-kelowna",
    "/en/custom-coffee-bags-victoria",
    "/en/custom-coffee-bags-calgary",
    "/en/custom-coffee-bags-edmonton",
    "/en/custom-coffee-bags-winnipeg",
    "/en/custom-coffee-bags-saskatoon",
    "/en/custom-coffee-bags-regina",
    "/en/custom-coffee-bags-halifax",
    "/en/custom-coffee-bags-moncton",
    // US city pages
    "/en/custom-coffee-bags-brooklyn",
    "/en/custom-coffee-bags-san-francisco",
    "/en/custom-coffee-bags-seattle",
    "/en/custom-coffee-bags-boston",
    "/en/custom-coffee-bags-austin",
    "/en/custom-coffee-bags-dallas",
    "/en/custom-coffee-bags-houston",
    "/en/custom-coffee-bags-nashville",
    "/en/custom-coffee-bags-denver",
    "/en/custom-coffee-bags-portland",
    "/en/custom-coffee-bags-atlanta",
    "/en/custom-coffee-bags-philadelphia",
    "/en/custom-coffee-bags-phoenix",
    "/en/custom-coffee-bags-washington-dc",
    "/en/custom-coffee-bags-las-vegas",
    "/en/custom-coffee-bags-new-orleans",
    "/en/custom-coffee-bags-minneapolis",
    "/en/custom-coffee-bags-charlotte",
    "/en/custom-coffee-bags-san-diego",
    "/en/custom-coffee-bags-detroit",
    "/en/custom-coffee-bags-pittsburgh",
    "/en/custom-coffee-bags-raleigh",
    "/en/custom-coffee-bags-tampa",
    "/en/custom-coffee-bags-honolulu",
    // Industries hub and 24 industry pages
    "/en/industries",
    "/en/custom-coffee-bags-restaurants",
    "/en/custom-coffee-bags-hotels",
    "/en/custom-coffee-bags-boutiques",
    "/en/custom-coffee-bags-gyms",
    "/en/custom-coffee-bags-yoga-studios",
    "/en/custom-coffee-bags-spas",
    "/en/custom-coffee-bags-airbnb",
    "/en/custom-coffee-bags-corporate",
    "/en/custom-coffee-bags-offices",
    "/en/custom-coffee-bags-co-working-spaces",
    "/en/custom-coffee-bags-real-estate-agents",
    "/en/custom-coffee-bags-law-firms",
    "/en/custom-coffee-bags-dental-offices",
    "/en/custom-coffee-bags-medical-clinics",
    "/en/custom-coffee-bags-universities",
    "/en/custom-coffee-bags-golf-clubs",
    "/en/custom-coffee-bags-country-clubs",
    "/en/custom-coffee-bags-wineries",
    "/en/custom-coffee-bags-breweries",
    "/en/custom-coffee-bags-wedding-venues",
    "/en/custom-coffee-bags-event-planners",
    "/en/custom-coffee-bags-catering-companies",
    "/en/custom-coffee-bags-food-trucks",
    "/en/custom-coffee-bags-subscription-boxes",
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
