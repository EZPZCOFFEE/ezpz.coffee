import "server-only";

export const isProduction = process.env.VERCEL_ENV === "production";
export const isVercelProductionBuild =
  isProduction && process.env.VERCEL_PROJECT_PRODUCTION_URL === "ezpz.coffee";

const getBaseUrl = (): string => {
  const platformEnv = process.env.VERCEL_ENV;

  if (platformEnv === "production") {
    return "https://ezpz.coffee";
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  return "http://localhost:3000";
};

export const baseUrl = getBaseUrl();
