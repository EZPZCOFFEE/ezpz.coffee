import { PropsWithChildren } from "react";
import { headers } from "next/headers";

import Layout from "@/components/custom/Layout";

const BASE_URL = "https://www.ezpz.coffee";

const toLabel = (segment: string): string =>
  segment
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");

const MainLayout = async ({ children }: PropsWithChildren) => {
  const pathname = (await headers()).get("x-pathname") ?? "";
  const localeMatch = pathname.match(/^(\/[a-z]{2})/);
  const localePrefix = localeMatch?.[1] ?? "/en";
  const pathWithoutLocale = pathname.slice(localePrefix.length) || "/";
  const segments = pathWithoutLocale.split("/").filter(Boolean);

  const breadcrumbItems = [
    { "@type": "ListItem", position: 1, name: "Home", item: `${BASE_URL}${localePrefix}` },
    ...segments.map((segment, i) => ({
      "@type": "ListItem",
      position: i + 2,
      name: toLabel(segment),
      item: `${BASE_URL}${localePrefix}/${segments.slice(0, i + 1).join("/")}`,
    })),
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbItems,
  };

  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </Layout>
  );
};

export default MainLayout;
