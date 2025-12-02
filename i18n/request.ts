import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

import { Locale, locales, defaultLocale } from "./types";

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale;
  if (!locales.includes(locale as Locale)) notFound();

  const messages = (await import(`@/dictionaries/${locale}.json`)) as {
    default: Record<string, unknown>;
  };

  return {
    messages: messages.default,
    locale: locale ?? defaultLocale,
  };
});
