import type { Metadata } from "next";
import Script from "next/script";
import { getTranslations } from "next-intl/server";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

import FAQContent from "./FAQContent";
import styles from "./styles.module.scss";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("metadata.faq");

  return {
    title: t("title"),
    description: t("description"),
    alternates: { canonical: "/faq" },
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      type: "website",
      url: "https://www.ezpz.coffee/en/faq",
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "FAQ | EZPZ Coffee" }],
    },
    twitter: {
      card: "summary_large_image",
      title: t("twitterTitle"),
      description: t("twitterDescription"),
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const FAQPage = async () => {
  const t = await getTranslations("faq");
  const locale = "en";

  const categories = [
    {
      title: t("categories.general.title"),
      items: [
        { question: t("categories.general.items.specialty.question"), answer: t("categories.general.items.specialty.answer") },
        { question: t("categories.general.items.wholeBeans.question"), answer: t("categories.general.items.wholeBeans.answer") },
        { question: t("categories.general.items.roastingLocation.question"), answer: t("categories.general.items.roastingLocation.answer") },
        { question: t("categories.general.items.thirdWave.question"), answer: t("categories.general.items.thirdWave.answer") },
      ],
    },
    {
      title: t("categories.preparation.title"),
      items: [
        { question: t("categories.preparation.items.storage.question"), answer: t("categories.preparation.items.storage.answer") },
        { question: t("categories.preparation.items.brewing.question"), answer: t("categories.preparation.items.brewing.answer") },
        { question: t("categories.preparation.items.freshness.question"), answer: t("categories.preparation.items.freshness.answer") },
        { question: t("categories.preparation.items.duration.question"), answer: t("categories.preparation.items.duration.answer") },
      ],
    },
    {
      title: t("categories.shipping.title"),
      items: [
        { question: t("categories.shipping.items.regions.question"), answer: t("categories.shipping.items.regions.answer") },
        { question: t("categories.shipping.items.deliveryTime.question"), answer: t("categories.shipping.items.deliveryTime.answer") },
      ],
    },
    {
      title: t("categories.returns.title"),
      items: [
        { question: t("categories.returns.items.policy.question"), answer: t("categories.returns.items.policy.answer") },
      ],
    },
    {
      title: t("categories.dietary.title"),
      items: [
        { question: t("categories.dietary.items.allergens.question"), answer: t("categories.dietary.items.allergens.answer") },
      ],
    },
    {
      title: t("categories.b2b.title"),
      items: [
        { question: t("categories.b2b.items.samples.question"), answer: t("categories.b2b.items.samples.answer") },
        { question: t("categories.b2b.items.recipes.question"), answer: t("categories.b2b.items.recipes.answer") },
        { question: t("categories.b2b.items.distribution.question"), answer: t("categories.b2b.items.distribution.answer") },
        { question: t("categories.b2b.items.turnaround.question"), answer: t("categories.b2b.items.turnaround.answer") },
      ],
    },
  ];

  const allItems = categories.flatMap((c) => c.items);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <Script
        id="faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FAQContent title={t("title")} categories={categories} />
      <div className={styles.ctaSection}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>Still have questions?</h2>
          <p className={styles.ctaBody}>Our team is happy to help. Reach out and we&apos;ll get back to you within 24 hours.</p>
          <Link href={`/${locale}/contact`} className={styles.ctaButton}>
            Contact us <ArrowRight size={16} weight="bold" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default FAQPage;
