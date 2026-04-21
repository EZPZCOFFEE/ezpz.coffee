"use client";

import { ArrowRight } from "@phosphor-icons/react";
import Link from "next/link";
import { useLocale } from "next-intl";

import styles from "./styles.module.scss";

const BRANDS = [
  {
    name: "Fairmont Hotels",
    industry: "Hospitality",
    description: "Custom branded coffee bags for in-room and restaurant service",
    color: "#1a3a5c",
    initials: "FH",
  },
  {
    name: "Avenue",
    industry: "Retail",
    description: "Private label whole bean bags sold in-store",
    color: "#2d4a2d",
    initials: "AV",
  },
  {
    name: "Regine",
    industry: "Food & Beverage",
    description: "Branded espresso blend for their café locations",
    color: "#4a1a2d",
    initials: "RG",
  },
  {
    name: "Cowork",
    industry: "Workspace",
    description: "Custom office coffee program with monthly delivery",
    color: "#1a2d4a",
    initials: "CW",
  },
  {
    name: "Janine",
    industry: "Boutique",
    description: "Limited edition seasonal coffee bags for gifting",
    color: "#3d2a1a",
    initials: "JN",
  },
  {
    name: "Stephen",
    industry: "Restaurant",
    description: "House blend bags served and sold on-site",
    color: "#2a1a3d",
    initials: "ST",
  },
];

const PortfolioPage = () => {
  const locale = useLocale();

  return (
    <div className={styles.page}>

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroAngle} />
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>Real brands.<br />Real results.</h1>
          <p className={styles.heroSub}>
            Here&apos;s a look at some of the coffee brands we&apos;ve helped create, launch, and grow across Canada.
          </p>
        </div>
      </section>

      {/* ── Grid ─────────────────────────────────────────────── */}
      <section className={styles.gridSection}>
        <div className={styles.gridInner}>
          <div className={styles.grid}>
            {BRANDS.map((brand) => (
              <div key={brand.name} className={styles.card}>
                <div className={styles.cardImage} style={{ background: brand.color }}>
                  <span className={styles.cardInitials}>{brand.initials}</span>
                </div>
                <div className={styles.cardBody}>
                  <span className={styles.cardIndustry}>{brand.industry}</span>
                  <h2 className={styles.cardName}>{brand.name}</h2>
                  <p className={styles.cardDesc}>{brand.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>Want to see your brand here?</h2>
          <Link href={`/${locale}/contact`} className={styles.ctaButton}>
            Get a quote <ArrowRight size={16} weight="bold" />
          </Link>
        </div>
      </section>

    </div>
  );
};

export default PortfolioPage;
