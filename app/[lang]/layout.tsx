import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { PropsWithChildren } from "react";

import Layout from "@/components/custom/Layout";
import { Locale, locales } from "@/i18n/types";
import { baseUrl } from "@/lib/base-url";

import "../global.scss";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
};

export function generateStaticParams() {
  return locales.map((locale) => ({ lang: locale }));
}

interface RootLayoutProps extends PropsWithChildren {
  params: Promise<{ lang: Locale }>;
}

const RootLayout = async ({ children, params }: RootLayoutProps) => {
  const { lang } = await params;

  // Enable static rendering
  setRequestLocale(lang);

  // Get messages for client components
  const messages = await getMessages();

  return (
    <html lang={lang}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Layout>{children}</Layout>
        </NextIntlClientProvider>
      </body>
    </html>
  );
};

export default RootLayout;
