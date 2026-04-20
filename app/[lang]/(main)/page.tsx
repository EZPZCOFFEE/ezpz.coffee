import type { Metadata } from "next";
import Script from "next/script";
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

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "EZPZ Coffee",
  url: "https://www.ezpz.coffee",
  logo: "https://www.ezpz.coffee/logo.svg",
  address: {
    "@type": "PostalAddress",
    streetAddress: "3780 Rue Saint-Patrick",
    addressLocality: "Montréal",
    addressRegion: "QC",
    postalCode: "H4E 1A2",
    addressCountry: "CA",
  },
  description:
    "Custom branded coffee bags and white label coffee solutions with no minimum order across Canada.",
  areaServed: "Canada",
};

const HomePage = () => {
  return (
    <>
      <Script
        id="json-ld-local-business"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />
      <HomeLanding />
    </>
  );
};

export default HomePage;
