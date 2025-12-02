import type { Metadata } from "next";
import { StaticImageData } from "next/image";
import { getTranslations } from "next-intl/server";

import faqIllustration from "@/public/arts/faq.svg";

import FAQContent from "./FAQContent";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("metadata.faq");

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: "/faq",
    },
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      type: "website",
      url: "/faq",
    },
    twitter: {
      card: "summary_large_image",
      title: t("twitterTitle"),
      description: t("twitterDescription"),
    },
  };
}

const FAQPage = async () => {
  const t = await getTranslations("faq");

  const categories = [
    {
      title: t("categories.general.title"),
      items: [
        {
          question: t("categories.general.items.specialty.question"),
          answer: t("categories.general.items.specialty.answer"),
        },
        {
          question: t("categories.general.items.wholeBeans.question"),
          answer: t("categories.general.items.wholeBeans.answer"),
        },
        {
          question: t("categories.general.items.roastingLocation.question"),
          answer: t("categories.general.items.roastingLocation.answer"),
        },
        {
          question: t("categories.general.items.thirdWave.question"),
          answer: t("categories.general.items.thirdWave.answer"),
        },
      ],
    },
    {
      title: t("categories.preparation.title"),
      items: [
        {
          question: t("categories.preparation.items.storage.question"),
          answer: t("categories.preparation.items.storage.answer"),
        },
        {
          question: t("categories.preparation.items.brewing.question"),
          answer: t("categories.preparation.items.brewing.answer"),
        },
        {
          question: t("categories.preparation.items.freshness.question"),
          answer: t("categories.preparation.items.freshness.answer"),
        },
        {
          question: t("categories.preparation.items.duration.question"),
          answer: t("categories.preparation.items.duration.answer"),
        },
      ],
    },
    {
      title: t("categories.shipping.title"),
      items: [
        {
          question: t("categories.shipping.items.regions.question"),
          answer: t("categories.shipping.items.regions.answer"),
        },
        {
          question: t("categories.shipping.items.deliveryTime.question"),
          answer: t("categories.shipping.items.deliveryTime.answer"),
        },
      ],
    },
    {
      title: t("categories.returns.title"),
      items: [
        {
          question: t("categories.returns.items.policy.question"),
          answer: t("categories.returns.items.policy.answer"),
        },
      ],
    },
    {
      title: t("categories.dietary.title"),
      items: [
        {
          question: t("categories.dietary.items.allergens.question"),
          answer: t("categories.dietary.items.allergens.answer"),
        },
      ],
    },
  ];

  return (
    <FAQContent
      title={t("title")}
      categories={categories}
      illustration={{
        image: faqIllustration as StaticImageData,
        alt: t("illustrationAlt"),
      }}
    />
  );
};

export default FAQPage;
