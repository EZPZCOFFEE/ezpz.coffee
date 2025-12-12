import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import MarketingContent from "@/components/custom/MarketingContent";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("metadata.coffee");

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: "/coffee",
    },
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      type: "website",
      url: "/coffee",
    },
    twitter: {
      card: "summary_large_image",
      title: t("twitterTitle"),
      description: t("twitterDescription"),
    },
  };
}

const CoffeePage = async () => {
  const t = await getTranslations("coffee");

  return (
    <MarketingContent
      eyebrow={t("eyebrow")}
      title={t("title")}
      intro={t("intro")}
      sections={[
        {
          copy: [t("sections.main.paragraphs.0"), t("sections.main.paragraphs.1")],
        },
      ]}
    />
  );
};

export default CoffeePage;
