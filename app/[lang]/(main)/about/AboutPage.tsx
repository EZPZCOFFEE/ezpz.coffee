"use client";

import { ArrowRight, Eye, Leaf, Star, MapPin } from "@phosphor-icons/react";
import Link from "next/link";
import { useLocale } from "next-intl";

import styles from "./styles.module.scss";

const STATS = [
  { number: "500+", label: "Brands served" },
  { number: "0", label: "Minimum order" },
  { number: "100%", label: "Specialty grade" },
];

const VALUES = [
  {
    icon: <Eye size={28} weight="duotone" />,
    title: "Transparency",
    body: "We tell you exactly where your coffee comes from, who grew it, and how it was processed.",
  },
  {
    icon: <Leaf size={28} weight="duotone" />,
    title: "Simplicity",
    body: "No minimums, no hidden fees, no complicated processes. Just great coffee with your name on it.",
  },
  {
    icon: <Star size={28} weight="duotone" />,
    title: "Quality",
    body: "We only work with specialty-grade beans, roasted in-house at Canadian Roasting Society in Montreal.",
  },
];

const AboutPage = () => {
  const locale = useLocale();

  return (
    <div className={styles.page}>

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.eyebrow}>About EZPZ Coffee</span>
          <h1 className={styles.heroTitle}>
            We make coffee<br />
            branding <span className={styles.heroAccent}>easy.</span>
          </h1>
          <p className={styles.heroSubtitle}>
            EZPZ was built by coffee industry veterans who were tired of seeing great brands
            struggle with complicated, expensive, high-minimum coffee production.
            So we built the solution.
          </p>
        </div>
        <div className={styles.heroAngle} />
      </section>

      {/* ── Stats ────────────────────────────────────────────── */}
      <section className={styles.stats}>
        <div className={styles.statsInner}>
          {STATS.map((s) => (
            <div key={s.label} className={styles.statItem}>
              <span className={styles.statNumber}>{s.number}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Our Story ────────────────────────────────────────── */}
      <section className={styles.story}>
        <div className={styles.storyInner}>
          <div className={styles.storyLeft}>
            <span className={styles.eyebrowDark}>Our story</span>
            <h2 className={styles.storyTitle}>Built by people who know coffee.</h2>
          </div>
          <div className={styles.storyRight}>
            <p className={styles.storyBody}>
              Founded in Montreal, EZPZ was created by entrepreneurs with years of experience in
              the coffee industry. We saw a gap, businesses wanted to sell their own branded
              coffee, but the barriers were too high. Too many minimums, too much complexity,
              too little transparency.
            </p>
            <p className={styles.storyBody}>
              We built EZPZ to change that. Today, we help hundreds of brands across Canada bring
              their coffee vision to life, simply, affordably, and without compromise.
            </p>
            <blockquote className={styles.pullQuote}>
              "Great brands shouldn't need a warehouse to get started."
            </blockquote>
          </div>
        </div>
      </section>

      {/* ── Our Values ───────────────────────────────────────── */}
      <section className={styles.values}>
        <div className={styles.sectionInner}>
          <span className={styles.eyebrowDark}>Our values</span>
          <h2 className={styles.sectionTitle}>What we stand for</h2>
          <div className={styles.valuesGrid}>
            {VALUES.map((v, i) => (
              <div key={v.title} className={styles.valueCard}>
                <span className={styles.valueNumber}>0{i + 1}</span>
                <span className={styles.valueIcon}>{v.icon}</span>
                <h3 className={styles.valueTitle}>{v.title}</h3>
                <p className={styles.valueBody}>{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Where We Roast ───────────────────────────────────── */}
      <section className={styles.roast}>
        <div className={styles.roastInner}>
          <div className={styles.roastBadge}>
            <MapPin size={22} weight="fill" />
            Montreal, QC
          </div>
          <h2 className={styles.roastTitle}>Canadian Roasting Society</h2>
          <p className={styles.roastBody}>
            All our coffees are roasted at Canadian Roasting Society, located in the southwest
            of Montreal. Our in-house roasting process gives us full control over quality,
            freshness, and turnaround time.
          </p>
          <div className={styles.roastDivider} />
          <span className={styles.roastTagline}>Roasted fresh. Shipped fast. Always specialty-grade.</span>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>Ready to build your<br />coffee brand?</h2>
          <p className={styles.ctaSubtitle}>Join hundreds of brands already using EZPZ.</p>
          <div className={styles.ctaButtons}>
            <Link href={`/${locale}/design`} className={styles.ctaPrimary}>
              Design your bag <ArrowRight size={18} weight="bold" />
            </Link>
            <Link href={`/${locale}/contact`} className={styles.ctaSecondary}>
              Contact us
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;
