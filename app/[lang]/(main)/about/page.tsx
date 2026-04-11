import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import MarketingContent from "@/components/custom/MarketingContent";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("metadata.about");

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: "/about",
    },
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      type: "website",
      url: "/about",
    },
    twitter: {
      card: "summary_large_image",
      title: t("twitterTitle"),
      description: t("twitterDescription"),
    },
  };
}

const AboutPage = async () => {
  const t = await getTranslations("about");

  return (
    <MarketingContent
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

export default AboutPage;
