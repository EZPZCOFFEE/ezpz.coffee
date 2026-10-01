import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import AboutPage from "./AboutPage";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const t = await getTranslations("metadata.about");
  return {
    title: t("title"),
    description: t("description"),
    alternates: { canonical: `/${lang}/about` },
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      type: "website",
      url: `https://www.ezpz.coffee/${lang}/about`,
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: t("ogTitle") }],
    },
    twitter: {
      card: "summary_large_image",
      title: t("twitterTitle") ?? t("ogTitle"),
      description: t("twitterDescription"),
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const AboutRoutePage = () => <AboutPage />;

export default AboutRoutePage;
