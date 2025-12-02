"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

import styles from "./styles.module.scss";

const Footer = () => {
  const t = useTranslations("footer");
  const locale = useLocale();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <span className={styles.footerBrand}>{t("brand")}</span>
        <nav className={styles.footerNav} aria-label={t("navigation")}>
          <button type="button" className={styles.footerLink}>
            {t("contactUs")}
          </button>
          <Link href={`/${locale}/faq`} className={styles.footerLink}>
            {t("faq")}
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
