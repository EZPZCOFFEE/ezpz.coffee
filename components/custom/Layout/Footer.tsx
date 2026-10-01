"use client";

import { InstagramLogo, LinkedinLogo } from "@phosphor-icons/react";
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
          <nav className={styles.footerNavCol} aria-label={t("shopHeading")}>
            <span className={styles.footerNavHeading}>{t("shopHeading")}</span>
            <Link href={`/${locale}/design`} className={styles.footerLink}>{t("design")}</Link>
            <Link href={`/${locale}/coffee`} className={styles.footerLink}>{t("ourCoffee")}</Link>
            <Link href={`/${locale}/pricing`} className={styles.footerLink}>{t("pricingLink")}</Link>
            <Link href={`/${locale}/custom-bag`} className={styles.footerLink}>{t("customBagsLink")}</Link>
            <Link href={`/${locale}/services`} className={styles.footerLink}>{t("servicesLink")}</Link>
            <Link href={`/${locale}/instant-coffee`} className={styles.footerLink}>{t("instantCoffeeLink")}</Link>
            <Link href={`/${locale}/blog`} className={styles.footerLink}>{t("blog")}</Link>
            <Link href={`/${locale}/locations`} className={styles.footerLink}>{t("canadianMarketsLink")}</Link>
            <Link href={`/${locale}/locations/usa`} className={styles.footerLink}>{t("usMarketsLink")}</Link>
            <Link href={`/${locale}/industries`} className={styles.footerLink}>{t("industriesLink")}</Link>
          </nav>

          {/* Guides column */}
          <nav className={styles.footerNavCol} aria-label={t("guidesHeading")}>
            <span className={styles.footerNavHeading}>{t("guidesHeading")}</span>
            <Link href={`/${locale}/pricing`} className={styles.footerLink}>{t("bagPricingLink")}</Link>
            <Link href={`/${locale}/what-is-white-label-coffee-canada`} className={styles.footerLink}>{t("whatIsWLLink")}</Link>
            <Link href={`/${locale}/custom-coffee-bags-no-minimum-canada`} className={styles.footerLink}>{t("noMinimumLink")}</Link>
            <Link href={`/${locale}/how-much-do-custom-coffee-bags-cost-canada`} className={styles.footerLink}>{t("coffeeBagCostLink")}</Link>
            <Link href={`/${locale}/best-white-label-coffee-supplier-canada`} className={styles.footerLink}>{t("bestSupplierLink")}</Link>
            <Link href={`/${locale}/custom-coffee-for-restaurants-canada`} className={styles.footerLink}>{t("coffeeForRestLink")}</Link>
          </nav>

          {/* Company column */}
          <nav className={styles.footerNavCol} aria-label={t("companyHeading")}>
            <span className={styles.footerNavHeading}>{t("companyHeading")}</span>
            <Link href={`/${locale}/about`} className={styles.footerLink}>{t("aboutUs")}</Link>
            <Link href={`/${locale}/white-label`} className={styles.footerLink}>{t("whiteLabel")}</Link>
            <Link href={`/${locale}/compare`} className={styles.footerLink}>{t("vsCompetitorsLink")}</Link>
            <Link href={`/${locale}/contact`} className={styles.footerLink}>{t("contactUs")}</Link>
            <Link href={locale === "fr" ? "/fr/carrieres" : "/en/careers"} className={styles.footerLink}>
              {locale === "fr" ? "Carrières : nous embauchons" : "Careers: We're Hiring"}
            </Link>
            {/* TODO (owner): Replace "#" with the real Google Business Profile review link once GBP is set up.
                Format: https://g.page/r/XXXXXXXXXXXXX/review  */}
            <a href="#" className={styles.footerLink} style={{ opacity: 0.5, pointerEvents: "none" }}>
              {t("leaveReviewLink")}
            </a>
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
            <a
              href="https://www.linkedin.com/company/ezpzcoffee/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.footerSmallLink}
              aria-label="LinkedIn"
            >
              <LinkedinLogo size={20} />
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
