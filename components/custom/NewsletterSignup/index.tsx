"use client";

import { useTranslations } from "next-intl";

import Button from "@/components/shared/Button";

import styles from "./styles.module.scss";

const NewsletterSignup = () => {
  const t = useTranslations("newsletter");

  // Parse the title with highlight markup
  const titleRaw = String(t.raw("title"));
  const titleParts = titleRaw.split(/<highlight>|<\/highlight>/);

  return (
    <section className={styles.newsletterSection} aria-labelledby="newsletter-heading">
      <div className={styles.newsletterInner}>
        <h2 id="newsletter-heading" className={styles.newsletterTitle}>
          {titleParts[0]}
          {titleParts[1] && <span className={styles.highlight}>{titleParts[1]}</span>}
          {titleParts[2]}
        </h2>

        <form className={styles.form}>
          <label className={styles.visuallyHidden} htmlFor="newsletter-email">
            {t("emailLabel")}
          </label>
          <input
            id="newsletter-email"
            type="email"
            className={styles.input}
            placeholder={t("emailPlaceholder")}
          />
          <Button type="button" variant="primary">
            {t("subscribe")}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSignup;
