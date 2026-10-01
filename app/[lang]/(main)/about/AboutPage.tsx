"use client";

import { ArrowRight, Eye, Leaf, Star, MapPin } from "@phosphor-icons/react";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

import styles from "./styles.module.scss";

const AboutPage = () => {
  const locale = useLocale();
  const t = useTranslations("about");

  const stats = [
    { number: "500+", label: locale === "fr" ? t("statsLabels.brands") : "Brands served" },
    { number: "1", label: locale === "fr" ? t("statsLabels.minimum") : "Minimum order" },
    { number: "100%", label: locale === "fr" ? t("statsLabels.specialty") : "Specialty grade" },
  ];

  const values = locale === "fr"
    ? (t.raw("values") as { title: string; body: string }[])
    : [
        { icon: null, title: "Transparency", body: "We tell you exactly where your coffee comes from, who grew it, and how it was processed." },
        { icon: null, title: "Simplicity", body: "No minimums, no hidden fees, no complicated processes. Just great coffee with your name on it." },
        { icon: null, title: "Quality", body: "We only work with specialty-grade beans, roasted in-house at Canadian Roasting Society in Montreal." },
      ];

  const icons = [
    <Eye key="eye" size={28} weight="duotone" />,
    <Leaf key="leaf" size={28} weight="duotone" />,
    <Star key="star" size={28} weight="duotone" />,
  ];

  return (
    <div className={styles.page}>

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>
            {locale === "fr" ? (
              <>{t("heroTitle")}<br /><span className={styles.heroAccent}>{t("heroTitleAccent")}</span></>
            ) : (
              <>We make coffee<br />branding <span className={styles.heroAccent}>easy.</span></>
            )}
          </h1>
          <p className={styles.heroSubtitle}>
            {locale === "fr" ? t("heroSubtitle") : "EZPZ was built by coffee industry veterans who were tired of seeing great brands struggle with complicated, expensive, high-minimum coffee production. So we built the solution."}
          </p>
        </div>
        <div className={styles.heroAngle} />
      </section>

      {/* ── Who is EZPZ Coffee ───────────────────────────────── */}
      <section className={styles.whoIs} aria-label={locale === "fr" ? "Qui est EZPZ Coffee" : "Who is EZPZ Coffee"}>
        <div className={styles.whoIsInner}>
          <p className={styles.whoIsText}>
            {locale === "fr" ? t("whoIsText") : "EZPZ Coffee is a Montreal-based specialty coffee company founded by entrepreneurs with years of coffee industry experience. EZPZ is the only custom coffee bag supplier in Canada with zero minimum order. The company roasts at Canadian Roasting Society in Montreal's southwest and ships to clients across Canada and the USA."}
          </p>
        </div>
      </section>

      {/* ── Stats ────────────────────────────────────────────── */}
      <section className={styles.stats}>
        <div className={styles.statsInner}>
          {stats.map((s) => (
            <div
              key={s.label}
              className={styles.statItem}
              {...(s.number === "1" ? { "data-egg": "one-stat", style: { cursor: "pointer" } } : {})}
            >
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
            <span className={styles.eyebrowDark}>{locale === "fr" ? t("storyEyebrow") : "Our story"}</span>
            <h2 className={styles.storyTitle}>{locale === "fr" ? t("storyTitle") : "Built by people who know coffee."}</h2>
          </div>
          <div className={styles.storyRight}>
            <p className={styles.storyBody}>
              {locale === "fr" ? t("storyBody1") : "Founded in Montreal, EZPZ was created by entrepreneurs with years of experience in the coffee industry. We saw a gap, businesses wanted to sell their own branded coffee, but the barriers were too high. Too many minimums, too much complexity, too little transparency."}
            </p>
            <p className={styles.storyBody}>
              {locale === "fr" ? t("storyBody2") : "We built EZPZ to change that. Today, we help hundreds of brands across Canada bring their coffee vision to life, simply, affordably, and without compromise."}
            </p>
            <blockquote className={styles.pullQuote}>
              {locale === "fr" ? `"${t("pullQuote")}"` : `"Great brands shouldn't need a warehouse to get started."`}
            </blockquote>
          </div>
        </div>
      </section>

      {/* ── Our Values ───────────────────────────────────────── */}
      <section className={styles.values}>
        <div className={styles.sectionInner}>
          <span className={styles.eyebrowDark}>{locale === "fr" ? t("valuesEyebrow") : "Our values"}</span>
          <h2 className={styles.sectionTitle}>{locale === "fr" ? t("valuesTitle") : "What we stand for"}</h2>
          <div className={styles.valuesGrid}>
            {values.map((v, i) => (
              <div key={v.title} className={styles.valueCard}>
                <span className={styles.valueNumber}>0{i + 1}</span>
                <span className={styles.valueIcon}>{icons[i]}</span>
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
            {locale === "fr" ? t("roastBody") : "All our coffees are roasted at Canadian Roasting Society, located in the southwest of Montreal. Our in-house roasting process gives us full control over quality, freshness, and turnaround time."}
          </p>
          <div className={styles.roastDivider} />
          <span className={styles.roastTagline}>{locale === "fr" ? t("roastTagline") : "Roasted fresh. Shipped fast. Always specialty-grade."}</span>
          <p style={{ marginTop: "1.5rem", fontSize: "0.88rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.65 }}>
            {locale === "fr" ? (
              <Link href={`/${locale}/canadian-coffee-roaster`} style={{ color: "rgba(255,255,255,0.85)", fontWeight: 700, textDecoration: "underline", textUnderlineOffset: "3px" }}>
                {t("roastLearnMore")} &rarr;
              </Link>
            ) : (
              <>
                Learn more about{" "}
                <Link href={`/${locale}/canadian-coffee-roaster`} style={{ color: "rgba(255,255,255,0.85)", fontWeight: 700, textDecoration: "underline", textUnderlineOffset: "3px" }}>
                  what makes EZPZ a different kind of Canadian coffee roaster &rarr;
                </Link>
              </>
            )}
          </p>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>
            {locale === "fr" ? t("ctaTitle") : <>Ready to build your<br />coffee brand?</>}
          </h2>
          <p className={styles.ctaSubtitle}>{locale === "fr" ? t("ctaSubtitle") : "Join hundreds of brands already using EZPZ."}</p>
          <div className={styles.ctaButtons}>
            <Link href={`/${locale}/design`} className={styles.ctaPrimary}>
              {locale === "fr" ? t("ctaDesign") : "Design your bag"} <ArrowRight size={18} weight="bold" />
            </Link>
            <Link href={`/${locale}/contact`} className={styles.ctaSecondary}>
              {locale === "fr" ? t("ctaContact") : "Contact us"}
            </Link>
          </div>
          <p style={{ marginTop: "1.5rem", fontSize: "0.85rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.65 }}>
            {locale === "fr" ? t("ctaHiring") : "Want to join the team?"}{" "}
            <Link href={locale === "fr" ? "/fr/carrieres" : `/${locale}/careers`} style={{ color: "rgba(255,255,255,0.85)", fontWeight: 700, textDecoration: "underline", textUnderlineOffset: "3px" }}>
              {locale === "fr" ? t("ctaHiringLink") : "See open roles at EZPZ"} &rarr;
            </Link>
          </p>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;
