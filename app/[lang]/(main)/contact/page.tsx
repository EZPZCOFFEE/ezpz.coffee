import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import { ContactForm } from "./ContactForm";
import styles from "./styles.module.scss";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("metadata.contact");

  return {
    title: t("title"),
    description: t("description"),
    alternates: { canonical: "/contact" },
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      type: "website",
      url: "/contact",
    },
    twitter: {
      card: "summary_large_image",
      title: t("twitterTitle"),
      description: t("twitterDescription"),
    },
  };
}

const ContactPage = async () => {
  const t = await getTranslations("contact");

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>{t("title")}</h1>
        <p className={styles.intro}>{t("intro")}</p>
      </div>

      <div className={styles.body}>
        <ContactForm />

        <aside className={styles.info}>
          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>{t("info.emailLabel")}</span>
            <a href="mailto:help@ezpz.coffee" className={styles.infoValue}>
              {t("info.email")}
            </a>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>{t("info.addressLabel")}</span>
            <span className={styles.infoValue}>{t("info.address")}</span>
          </div>
          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>{t("info.responseLabel")}</span>
            <span className={styles.infoValue}>{t("info.response")}</span>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default ContactPage;
