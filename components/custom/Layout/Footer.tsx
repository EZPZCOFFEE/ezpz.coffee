"use client";

import { InstagramLogo } from "@phosphor-icons/react";
import Image from "next/image";
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

          {/* Brand + address */}
          <div className={styles.footerBrandCol}>
            <Link href={`/${locale}`} className={styles.footerLogoLink}>
              <Image
                src="/logo.svg"
                alt="EZPZ Coffee"
                width={80}
                height={65}
                unoptimized
                className={styles.footerLogo}
              />
            </Link>
            <address className={styles.footerAddress}>
              {t("address").split("\n").map((line, i) => (
                <span key={i}>{line}</span>
              ))}
              <a href="mailto:help@ezpz.coffee" className={styles.footerAddressLink}>
                {t("email")}
              </a>
            </address>
          </div>

          <div className={styles.footerSpacer} />

          {/* Shop column */}
          <nav className={styles.footerNavCol} aria-label="Shop">
            <span className={styles.footerNavHeading}>{t("shopHeading")}</span>
            <Link href={`/${locale}/design`} className={styles.footerLink}>{t("design")}</Link>
            <Link href={`/${locale}/coffee`} className={styles.footerLink}>{t("ourCoffee")}</Link>
            <Link href={`/${locale}/custom-bag`} className={styles.footerLink}>Custom Coffee Bags</Link>
          </nav>

          {/* Company column */}
          <nav className={styles.footerNavCol} aria-label="Company">
            <span className={styles.footerNavHeading}>{t("companyHeading")}</span>
            <Link href={`/${locale}/about`} className={styles.footerLink}>{t("aboutUs")}</Link>
            <Link href={`/${locale}/white-label`} className={styles.footerLink}>{t("whiteLabel")}</Link>
            <Link href={`/${locale}/portfolio`} className={styles.footerLink}>Our Portfolio</Link>
            <Link href={`/${locale}/blog`} className={styles.footerLink}>Blog</Link>
            <Link href={`/${locale}/compare`} className={styles.footerLink}>EZPZ vs Competitors</Link>
            <Link href={`/${locale}/contact`} className={styles.footerLink}>{t("contactUs")}</Link>
          </nav>
        </div>

        <div className={styles.footerDivider} />

        <div className={styles.footerBottom}>
          <span className={styles.footerCopyright}>{t("copyright", { year })}</span>
          <div className={styles.footerBottomLinks}>
            <a
              href="https://www.instagram.com/ezpz.coffee/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.footerSmallLink}
              aria-label="Instagram"
            >
              <InstagramLogo size={20} />
            </a>
            <Link href={`/${locale}/faq`} className={styles.footerSmallLink}>{t("faq")}</Link>
            <Link href={`/${locale}/terms-of-use`} className={styles.footerSmallLink}>{t("termsOfUse")}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
