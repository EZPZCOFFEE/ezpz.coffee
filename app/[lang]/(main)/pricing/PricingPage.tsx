"use client";

import { Check } from "@phosphor-icons/react";
import Link from "next/link";
import { useLocale } from "next-intl";

import styles from "./styles.module.scss";

const TIERS = [
  {
    name: "Starter",
    tagline: "Perfect for testing your concept or creating a unique gift.",
    popular: false,
    features: [
      "1–10 bags",
      "Full custom design included",
      "Choose your origin and roast",
      "Ships within 2–3 weeks",
    ],
    cta: { label: "Start designing", href: "/design" },
  },
  {
    name: "Brand Builder",
    tagline: "For businesses ready to launch their coffee brand.",
    popular: true,
    features: [
      "11–100 bags",
      "Full custom design included",
      "Priority production",
      "Distribution support available",
      "Ships within 2–3 weeks",
    ],
    cta: { label: "Get a quote", href: "/contact" },
  },
  {
    name: "Scale",
    tagline: "For established brands ready to grow.",
    popular: false,
    features: [
      "100+ bags",
      "Dedicated account manager",
      "Custom recipe development",
      "White label + RTD + capsules available",
      "Volume pricing",
    ],
    cta: { label: "Contact us", href: "/contact" },
  },
];

const PricingPage = () => {
  const locale = useLocale();

  return (
    <div className={styles.page}>

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroAngle} />
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>No minimums.<br />No hidden fees.<br />No surprises.</h1>
          <p className={styles.heroSub}>
            We believe pricing should be as easy as our process. Here&apos;s what you can expect.
          </p>
        </div>
      </section>

      {/* ── Tiers ────────────────────────────────────────────── */}
      <section className={styles.tiersSection}>
        <div className={styles.tiersInner}>
          <div className={styles.tiersGrid}>
            {TIERS.map((tier) => (
              <div
                key={tier.name}
                className={`${styles.card} ${tier.popular ? styles.cardPopular : ""}`}
              >
                {tier.popular && (
                  <span className={styles.popularBadge}>Most popular</span>
                )}
                <div className={styles.cardTop}>
                  <h2 className={styles.cardName}>{tier.name}</h2>
                  <p className={styles.cardTagline}>{tier.tagline}</p>
                </div>
                <ul className={styles.featureList}>
                  {tier.features.map((f) => (
                    <li key={f} className={styles.featureItem}>
                      <Check size={15} weight="bold" className={styles.featureIcon} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/${locale}${tier.cta.href}`}
                  className={`${styles.ctaButton} ${tier.popular ? styles.ctaButtonPrimary : styles.ctaButtonSecondary}`}
                >
                  {tier.cta.label}
                </Link>
              </div>
            ))}
          </div>

          <p className={styles.note}>
            All prices include design, production, and standard shipping. Contact us for exact per-unit pricing based on your needs.
          </p>
        </div>
      </section>

    </div>
  );
};

export default PricingPage;
