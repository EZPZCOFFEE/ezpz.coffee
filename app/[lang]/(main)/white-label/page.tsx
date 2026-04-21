import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import WhiteLabelSolutionsPage from "../_components/WhiteLabelSolutionsPage";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "White Label Coffee Canada | Custom Branded Coffee | EZPZ Coffee",
    description: "Launch your own coffee brand with EZPZ. We handle everything, roasting, packaging, and distribution. Specialty coffee, your brand, no minimums.",
    alternates: { canonical: "/white-label" },
    openGraph: {
      title: "White Label Coffee Canada | Custom Branded Coffee | EZPZ Coffee",
      description: "Launch your own coffee brand with EZPZ. We handle everything, roasting, packaging, and distribution. Specialty coffee, your brand, no minimums.",
      type: "website",
      url: "https://www.ezpz.coffee/en/white-label",
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "White Label Coffee Canada | EZPZ Coffee" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "White Label Coffee Canada | Custom Branded Coffee | EZPZ Coffee",
      description: "Launch your own coffee brand with EZPZ. We handle everything, roasting, packaging, and distribution. Specialty coffee, your brand, no minimums.",
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const WhiteLabelRoutePage = () => {
  return <WhiteLabelSolutionsPage />;
};

export default WhiteLabelRoutePage;
