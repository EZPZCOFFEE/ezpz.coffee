import type { Metadata } from "next";
import Script from "next/script";
import { getTranslations } from "next-intl/server";

import HomeLanding from "./_components/HomeLanding";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("metadata.home");

  return {
    title: t("title"),
    description: t("description"),
    alternates: { canonical: "/en" },
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      type: "website",
      url: "https://www.ezpz.coffee/en",
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: t("ogTitle") }],
    },
    twitter: {
      card: "summary_large_image",
      title: t("ogTitle"),
      description: t("twitterDescription"),
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "EZPZ Coffee",
  url: "https://www.ezpz.coffee",
  logo: "https://www.ezpz.coffee/logo.svg",
  image: "https://www.ezpz.coffee/_next/static/media/banner-01.15cqmow69pk9l.jpg",
  description: "Canada's only custom coffee bag supplier with zero minimum order. Custom branded bags, white label solutions, and specialty coffee roasted in Montreal.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "3780 Rue Saint-Patrick",
    addressLocality: "Montréal",
    addressRegion: "QC",
    postalCode: "H4E 1A2",
    addressCountry: "CA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 45.4706,
    longitude: -73.5772,
  },
  telephone: "+15140000000",
  email: "help@ezpz.coffee",
  priceRange: "$$",
  servesCuisine: "Coffee",
  areaServed: "Canada",
  openingHours: "Mo-Fr 09:00-17:00",
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
