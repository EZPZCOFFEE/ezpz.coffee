import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import TermsContent from "./TermsContent";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("metadata.termsOfUse");

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: "/terms-of-use",
    },
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      type: "website",
      url: "/terms-of-use",
    },
    twitter: {
      card: "summary_large_image",
      title: t("twitterTitle"),
      description: t("twitterDescription"),
    },
  };
}

const TermsOfUsePage = async () => {
  const t = await getTranslations("termsOfUse");

  const sections = [
    {
      id: "use-of-website",
      title: t("sections.useOfWebsite.title"),
      content: [t("sections.useOfWebsite.content")],
    },
    {
      id: "products-orders",
      title: t("sections.productsOrders.title"),
      content: [
        t("sections.productsOrders.content.0"),
        t("sections.productsOrders.content.1"),
        t("sections.productsOrders.content.2"),
        t("sections.productsOrders.content.3"),
      ],
    },
    {
      id: "production-shipping",
      title: t("sections.productionShipping.title"),
      content: [
        t("sections.productionShipping.content.0"),
        t("sections.productionShipping.content.1"),
        t("sections.productionShipping.content.2"),
      ],
    },
    {
      id: "payments",
      title: t("sections.payments.title"),
      content: [t("sections.payments.content")],
    },
    {
      id: "intellectual-property",
      title: t("sections.intellectualProperty.title"),
      content: [t("sections.intellectualProperty.content")],
    },
    {
      id: "user-content",
      title: t("sections.userContent.title"),
      content: [t("sections.userContent.content")],
    },
    {
      id: "limitation-liability",
      title: t("sections.limitationLiability.title"),
      content: [t("sections.limitationLiability.content")],
    },
    {
      id: "modifications",
      title: t("sections.modifications.title"),
      content: [t("sections.modifications.content")],
    },
    {
      id: "contact",
      title: t("sections.contact.title"),
      content: [t("sections.contact.content")],
    },
  ];

  return (
    <TermsContent
      title={t("title")}
      lastUpdated={t("lastUpdated")}
      intro={t("intro")}
      sections={sections}
    />
  );
};

export default TermsOfUsePage;
