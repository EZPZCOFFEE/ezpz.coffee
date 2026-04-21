"use client";

import { InstagramLogoIcon } from "@phosphor-icons/react";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

import styles from "./styles.module.scss";

const Footer = () => {
  const t = useTranslations("footer");
  const locale = useLocale();
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.footerTop}>
          <span className={styles.footerBrand}>{t("brand", { year })}</span>
          <nav className={styles.footerNav} aria-label={t("navigation")}>
            <Link href={`/${locale}/coffee`} className={styles.footerLink}>
              {t("ourCoffee")}
            </Link>
            <Link href={`/${locale}/contact`} className={styles.footerLink}>
              {t("contactUs")}
            </Link>
            <Link href={`/${locale}/faq`} className={styles.footerLink}>
              {t("faq")}
            </Link>
            <Link href={`/${locale}/terms-of-use`} className={styles.footerLink}>
              {t("termsOfUse")}
            </Link>
          </nav>
        </div>
        <div className={styles.footerSocial}>
          <a
            href="https://www.instagram.com/ezpz.coffee/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.footerLink}
            aria-label="Instagram"
          >
            <InstagramLogoIcon size={24} weight="regular" aria-hidden />
          </a>
        </div>
        <address className={styles.footerAddress}>{t("address")}</address>
      </div>
    </footer>
  );
};

export default Footer;
