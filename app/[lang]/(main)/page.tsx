import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import HomeLanding from "./_components/HomeLanding";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("metadata.home");

  return {
    title: t("title"),
    description: t("description"),
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
    },
    twitter: {
      card: "summary_large_image",
      title: t("ogTitle"),
      description: t("twitterDescription"),
    },
  };
}

const HomePage = () => {
  return <HomeLanding />;
};

export default HomePage;
