import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import WhiteLabelSolutionsPage from "../_components/WhiteLabelSolutionsPage";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("metadata.whiteLabelPage");

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: "/white-label",
    },
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      type: "website",
      url: "/white-label",
    },
    twitter: {
      card: "summary_large_image",
      title: t("twitterTitle"),
      description: t("twitterDescription"),
    },
  };
}

const WhiteLabelRoutePage = () => {
  return <WhiteLabelSolutionsPage />;
};

export default WhiteLabelRoutePage;
