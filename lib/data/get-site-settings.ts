import { unstable_cache } from "next/cache";

import { GetSiteSettingsQuery } from "@/gql/graphql";
import { shopifyQuery } from "@/lib/interfaces/shopify";
import { GET_SITE_SETTINGS } from "@/lib/queries/get-site-settings";

// Simple in-memory cache for Edge runtime (middleware)
// Works in Edge runtime where unstable_cache doesn't work
const edgeCache = new Map<string, { data: GetSiteSettingsQuery | null; expires: number }>();

const CACHE_TTL = 60 * 1000; // 60 seconds in milliseconds

async function fetchSiteSettings(): Promise<GetSiteSettingsQuery | null> {
  try {
    console.log("[getSiteSettings] Fetching from Shopify...");
    const result = await shopifyQuery<GetSiteSettingsQuery>(GET_SITE_SETTINGS);
    console.log("[getSiteSettings] Shopify response:", {
      hasShop: !!result?.shop,
      hasPasswordWallEnabled: !!result?.shop?.passwordWallEnabled,
      passwordLength: result?.shop?.password?.value?.length,
      value: result?.shop?.passwordWallEnabled?.value,
    });
    return result;
  } catch (error) {
    console.error("[getSiteSettings] Failed to fetch site settings from Shopify:", error);
    return null;
  }
}

/**
 * Fetches site settings with Edge-compatible caching.
 * Works in middleware (Edge runtime) where unstable_cache doesn't work.
 */
async function getSiteSettingsCached(): Promise<GetSiteSettingsQuery | null> {
  const cacheKey = "site-settings";
  const now = Date.now();
  const cached = edgeCache.get(cacheKey);

  // Return cached data if it exists and hasn't expired
  if (cached && cached.expires > now) {
    console.log("[getSiteSettingsCached] Cache hit");
    return cached.data;
  }

  // Fetch fresh data
  console.log("[getSiteSettingsCached] Cache miss - fetching...");
  const data = await fetchSiteSettings();

  // Store in cache
  edgeCache.set(cacheKey, {
    data,
    expires: now + CACHE_TTL,
  });

  return data;
}

/**
 * Fetches the password wall enabled setting from Shopify Shop metafields.
 * Falls back to false if metafield doesn't exist or fetch fails.
 * Results are cached for 60 seconds to avoid hitting Shopify on every request.
 *
 * This version works in Edge runtime (middleware) using in-memory cache.
 */
export async function getPasswordWallEnabled(): Promise<boolean> {
  console.log("[getPasswordWallEnabled] Function called");
  try {
    const data = await getSiteSettingsCached();

    const enabled = data?.shop?.passwordWallEnabled?.value;
    console.log("[getPasswordWallEnabled] Extracted enabled value:", enabled);

    // If metafield exists and has a value, parse it
    if (enabled !== undefined && enabled !== null) {
      const isEnabled = enabled.toLowerCase() === "true";
      console.log("[getPasswordWallEnabled] Parsed result:", isEnabled);
      return isEnabled;
    }

    // Fallback to false if metafield doesn't exist or field is missing
    console.log("[getPasswordWallEnabled] No value found, defaulting to false");
    return false;
  } catch (error) {
    console.error("[getPasswordWallEnabled] Error getting password wall setting:", error);
    // Fallback to false on any error
    return false;
  }
}

/**
 * Fetches the site password from Shopify Shop metafields.
 * Returns undefined if metafield doesn't exist or fetch fails.
 * Results are cached for 60 seconds to avoid hitting Shopify on every request.
 *
 * This version uses unstable_cache for server actions (Node.js runtime).
 * For middleware, use getSiteSettingsCached() which uses Edge-compatible cache.
 */
export async function getSitePassword(): Promise<string | undefined> {
  try {
    // Use unstable_cache for server actions (works in Node.js runtime)
    const data = await unstable_cache(
      async () => {
        try {
          console.log("[getSitePassword] Fetching site settings from Shopify...");
          const result = await shopifyQuery<GetSiteSettingsQuery>(GET_SITE_SETTINGS);
          console.log("[getSitePassword] Shopify fetch successful:", {
            hasShop: !!result?.shop,
            hasPasswordMetafield: !!result?.shop?.password,
            passwordValueExists: !!result?.shop?.password?.value,
          });
          return result;
        } catch (error) {
          console.error("[getSitePassword] Failed to fetch site settings from Shopify:", error);
          return null;
        }
      },
      ["site-settings-password"],
      {
        revalidate: 60, // Cache for 60 seconds
        tags: ["site-settings"],
      }
    )();

    const password = data?.shop?.password?.value;
    console.log("[getSitePassword] Password metafield:", {
      exists: password !== undefined && password !== null,
      length: password?.length ?? 0,
      value: password ? "***" : "undefined/null",
    });

    return password ?? undefined;
  } catch (error) {
    console.error("[getSitePassword] Error getting site password:", error);
    // Fallback: try Edge-compatible cache if unstable_cache fails
    try {
      const data = await getSiteSettingsCached();
      return data?.shop?.password?.value ?? undefined;
    } catch {
      return undefined;
    }
  }
}
