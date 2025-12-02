import type { Metadata } from "next";
import { StaticImageData } from "next/image";
import { getTranslations } from "next-intl/server";

import MarketingContent from "@/components/custom/MarketingContent";
import aboutIllustration from "@/public/arts/about-us.svg";

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
      eyebrow={t("eyebrow")}
      title={t("title")}
      intro={t("intro")}
      sections={[
        {
          copy: [t("sections.main.paragraphs.0"), t("sections.main.paragraphs.1")],
        },
      ]}
      illustration={{
        image: aboutIllustration as StaticImageData,
        alt: t("illustrationAlt"),
        caption: t("illustrationCaption"),
        priority: true,
      }}
    />
  );
};

export default AboutPage;
