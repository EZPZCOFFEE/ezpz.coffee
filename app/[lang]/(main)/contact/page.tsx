import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { InstagramLogo, LinkedinLogo } from "@phosphor-icons/react/dist/ssr";

import { ContactForm } from "./ContactForm";
import styles from "./styles.module.scss";

export const metadata: Metadata = {
  title: "Contact EZPZ Coffee | Get a Custom Coffee Quote | Montreal",
  description: "Get in touch with EZPZ Coffee. Whether you need a single custom bag or a full white label coffee brand, we'll respond within 24 hours.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact EZPZ Coffee | Get a Custom Coffee Quote | Montreal",
    description: "Get in touch with EZPZ Coffee. Whether you need a single custom bag or a full white label coffee brand, we'll respond within 24 hours.",
    type: "website",
    url: "/contact",
  },
};

const ContactPage = async () => {
  const t = await getTranslations("contact");

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>{t("title")}</h1>
        <p className={styles.intro}>{t("intro")}</p>
      </div>

      <div className={styles.body}>
        <div className={styles.formWrap}>
          <p className={styles.formNote}>
            Whether you&apos;re looking for a single custom bag or launching a full white label brand,
            we&apos;d love to hear from you. Fill out the form and we&apos;ll get back to you within
            24 hours with a personalized quote.
          </p>
          <ContactForm />
        </div>

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

          <div className={styles.infoItem}>
            <span className={styles.infoLabel}>Follow us</span>
            <div className={styles.socialLinks}>
              <a
                href="https://www.instagram.com/ezpz.coffee/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="Instagram"
              >
                <InstagramLogo size={22} />
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/company/ezpz-coffee"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="LinkedIn"
              >
                <LinkedinLogo size={22} />
                LinkedIn
              </a>
            </div>
          </div>

          <div className={styles.directEmail}>
            Prefer to chat? Email us directly at{" "}
            <a href="mailto:help@ezpz.coffee" className={styles.directEmailLink}>
              help@ezpz.coffee
            </a>{" "}
            and we&apos;ll respond within 24 hours.
          </div>
        </aside>
      </div>
    </div>
  );
};

export default ContactPage;
