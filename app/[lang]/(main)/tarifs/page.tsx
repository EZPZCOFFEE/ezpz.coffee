import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import PricingPage from "../pricing/PricingPage";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const t = await getTranslations("metadata.pricing");
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `/${lang}/tarifs`,
      languages: {
        en: "https://www.ezpz.coffee/en/pricing",
        "fr-CA": "https://www.ezpz.coffee/fr/tarifs",
      },
    },
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      type: "website",
      url: `https://www.ezpz.coffee/${lang}/tarifs`,
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: t("ogTitle") }],
    },
    twitter: {
      card: "summary_large_image",
      title: t("twitterTitle"),
      description: t("twitterDescription"),
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const TarifsPage = () => <PricingPage />;

export default TarifsPage;
