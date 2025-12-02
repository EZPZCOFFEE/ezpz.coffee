"use client";

import { useTranslations } from "next-intl";

import styles from "./styles.module.scss";

const Footer = () => {
  const t = useTranslations("footer");

  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <span className={styles.footerBrand}>{t("brand")}</span>
        <nav className={styles.footerNav} aria-label={t("navigation")}>
          <button type="button" className={styles.footerLink}>
            {t("contactUs")}
          </button>
          <button type="button" className={styles.footerLink}>
            {t("faq")}
          </button>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
