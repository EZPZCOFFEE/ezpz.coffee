import { unstable_cache } from "next/cache";

import { GetSiteSettingsQuery } from "@/gql/graphql";
import { shopifyQuery } from "@/lib/interfaces/shopify";
import { GET_SITE_SETTINGS } from "@/lib/queries/get-site-settings";

/**
 * Fetches the password wall enabled setting from Shopify Shop metafields.
 * Falls back to false if metafield doesn't exist or fetch fails.
 * Results are cached for 60 seconds to avoid hitting Shopify on every request.
 */
export async function getPasswordWallEnabled(): Promise<boolean> {
  try {
    const data = await unstable_cache(
      async () => {
        try {
          return await shopifyQuery<GetSiteSettingsQuery>(GET_SITE_SETTINGS);
        } catch (error) {
          console.error("Failed to fetch site settings from Shopify:", error);
          return null;
        }
      },
      ["site-settings-password-wall"],
      {
        revalidate: 60, // Cache for 60 seconds
        tags: ["site-settings"],
      }
    )();

    const enabled = data?.shop?.passwordWallEnabled?.value;

    // If metafield exists and has a value, parse it
    if (enabled !== undefined && enabled !== null) {
      return enabled.toLowerCase() === "true";
    }

    // Fallback to false if metafield doesn't exist or field is missing
    return false;
  } catch (error) {
    console.error("Error getting password wall setting:", error);
    // Fallback to false on any error
    return false;
  }
}

/**
 * Fetches the site password from Shopify Shop metafields.
 * Returns undefined if metafield doesn't exist or fetch fails.
 * Results are cached for 60 seconds to avoid hitting Shopify on every request.
 */
export async function getSitePassword(): Promise<string | undefined> {
  try {
    const data = await unstable_cache(
      async () => {
        try {
          return await shopifyQuery<GetSiteSettingsQuery>(GET_SITE_SETTINGS);
        } catch (error) {
          console.error("Failed to fetch site settings from Shopify:", error);
          return null;
        }
      },
      ["site-settings-password"],
      {
        revalidate: 60, // Cache for 60 seconds
        tags: ["site-settings"],
      }
    )();

    return data?.shop?.password?.value ?? undefined;
  } catch (error) {
    console.error("Error getting site password:", error);
    return undefined;
  }
}
