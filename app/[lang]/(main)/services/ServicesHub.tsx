"use client";

import Link from "next/link";
import { useLocale } from "next-intl";

import styles from "./servicePages.module.scss";

const SERVICES = [
  {
    label: "01_ Custom Coffee Bags",
    title: "Custom Branded Coffee Bags",
    body: "From farm to your customer's door — full custom bag design, specialty-grade sourcing, roasting, packaging, and logistics. Zero minimum order. Ships across Canada and the USA.",
    stats: [
      { num: "1", label: "Minimum order" },
      { num: "2–3 wks", label: "From design to delivery" },
      { num: "500+", label: "Brands served" },
    ],
    href: "/services/custom-coffee-bags",
    cta: "Learn more →",
  },
  {
    label: "02_ Ready-to-Drink Coffee",
    title: "Custom RTD Coffee",
    body: "Launch your own branded ready-to-drink coffee in cans, bottles, or cartons. Full recipe development, production, packaging, and fulfillment handled by our team.",
    stats: [
      { num: "8,000", label: "Unit minimum" },
      { num: "4–6 wks", label: "Production timeline" },
      { num: "100%", label: "Custom recipe" },
    ],
    href: "/services/ready-to-drink",
    cta: "Learn more →",
  },
  {
    label: "03_ Nespresso Capsules",
    title: "Custom Nespresso Capsules",
    body: "Your brand in every Nespresso machine in Canada. Specialty-grade coffee, professional filling and sealing, branded packaging. Perfect for hotels, offices, and premium retail.",
    stats: [
      { num: "100%", label: "Nespresso Classic compatible" },
      { num: "2–3 wks", label: "Production timeline" },
      { num: "3", label: "Intensity levels" },
    ],
    href: "/services/nespresso-capsules",
    cta: "Learn more →",
  },
  {
    label: "04_ Coffee Dropshipping",
    title: "Coffee Dropshipping Canada",
    body: "Sell branded specialty coffee online without ever touching it. We roast in Montreal, pack in your brand, and ship direct to your customers. Zero minimum. No monthly fees.",
    stats: [
      { num: "0", label: "Minimum to start" },
      { num: "None", label: "Monthly software fees" },
      { num: "Direct", label: "Ships to your customers" },
    ],
    href: "/coffee-dropshipping-canada",
    cta: "Learn more →",
  },
];

const ServicesHub = () => {
  const locale = useLocale();

  return (
    <div className={styles.page}>
      <section className={styles.hubHero}>
        <span className={styles.eyebrow}>Our Services</span>
        <h1 className={styles.hubHeroTitle}>Three ways to put your brand on specialty coffee.</h1>
        <p className={styles.hubHeroSubtitle}>
          Whether you want a branded coffee bag, a shelf-ready RTD, or capsules for every Nespresso machine — EZPZ handles everything from design to delivery.
        </p>
      </section>

      <section className={styles.hubSection}>
        <div className={styles.hubSectionInner}>
          <span className={styles.eyebrow}>Choose your format</span>
          <div className={styles.hubServiceGrid}>
            {SERVICES.map((service) => (
              <Link key={service.title} href={`/${locale}${service.href}`} className={styles.hubServiceCard}>
                <span className={styles.hubServiceLabel}>{service.label}</span>
                <h2 className={styles.hubServiceTitle}>{service.title}</h2>
                <p className={styles.hubServiceBody}>{service.body}</p>
                <div className={styles.hubServiceStats}>
                  {service.stats.map((stat) => (
                    <div key={stat.label} className={styles.hubServiceStatItem}>
                      <span className={styles.hubServiceStatNum}>{stat.num}</span>
                      <span className={styles.hubServiceStatLabel}>{stat.label}</span>
                    </div>
                  ))}
                </div>
                <span className={styles.hubServiceCta}>{service.cta}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.finalCta}>
        <div className={styles.finalCtaInner}>
          <h2 className={styles.finalCtaTitle}>Not sure which format is right for you?</h2>
          <p className={styles.finalCtaSubtext}>
            Book a free consultation and we will help you choose the right product for your brand, your audience, and your budget.
          </p>
          <div className={styles.finalCtaButtons}>
            <Link href={`/${locale}/contact`} className={styles.finalCtaPrimary}>Get a free consultation</Link>
            <Link href={`/${locale}/coffee`} className={styles.finalCtaSecondary}>Learn about our coffee</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesHub;
