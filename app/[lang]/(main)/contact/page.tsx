import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import MarketingContent from "@/components/custom/MarketingContent";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("metadata.contact");

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: "/contact",
    },
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      type: "website",
      url: "/contact",
    },
    twitter: {
      card: "summary_large_image",
      title: t("twitterTitle"),
      description: t("twitterDescription"),
    },
  };
}

const ContactPage = async () => {
  const t = await getTranslations("contact");

  return (
    <MarketingContent
      title={t("title")}
      intro={t("intro")}
      sections={[
        {
          copy: [t("sections.main.paragraphs.0")],
        },
      ]}
    />
  );
};

export default ContactPage;
