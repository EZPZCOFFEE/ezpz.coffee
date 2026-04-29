"use client";

import { ArrowLeft, ArrowRight, Star } from "@phosphor-icons/react";
import Link from "next/link";
import { useLocale } from "next-intl";

import type { PortfolioClient } from "../data";
import styles from "./styles.module.scss";

const CaseStudyPage = ({ client }: { client: PortfolioClient }) => {
  const locale = useLocale();

  return (
    <div className={styles.page}>

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className={styles.hero} style={{ background: client.color }}>
        <div className={styles.heroAngle} />
        <div className={styles.heroInner}>
          <Link href={`/${locale}/portfolio`} className={styles.backLink}>
            <ArrowLeft size={14} weight="bold" /> All case studies
          </Link>
          <span className={styles.heroEyebrow}>{client.industry}</span>
          <h1 className={styles.heroTitle}>{client.name}</h1>
          <p className={styles.heroSub}>An EZPZ Coffee case study</p>
        </div>
      </section>

      <div className={styles.body}>

        {/* ── Challenge ────────────────────────────────────────── */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitle}>The challenge</h2>
            <p className={styles.challengeText}>{client.challenge}</p>
          </div>
        </section>

        {/* ── What we delivered ────────────────────────────────── */}
        <section className={styles.section}>
          <div className={styles.sectionInner}>
            <h2 className={styles.sectionTitle}>What we delivered</h2>
            <div className={styles.deliveredGrid}>
              <div className={styles.deliveredCard}>
                <span className={styles.deliveredLabel}>Product Type</span>
                <span className={styles.deliveredValue}>{client.delivered.productType}</span>
              </div>
              <div className={styles.deliveredCard}>
                <span className={styles.deliveredLabel}>Design Included</span>
                <span className={styles.deliveredValue}>{client.delivered.designIncluded}</span>
              </div>
              <div className={styles.deliveredCard}>
                <span className={styles.deliveredLabel}>Turnaround Time</span>
                <span className={styles.deliveredValue}>{client.delivered.turnaround}</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── Product visual ───────────────────────────────────── */}
        <section className={styles.mockupSection}>
          <div className={styles.sectionInner}>
            <div className={styles.mockup} style={{ background: client.color }}>
              <span className={styles.mockupInitials}>{client.initials}</span>
            </div>
            <p className={styles.mockupCaption}>{client.productCaption}</p>
          </div>
        </section>

        {/* ── Quote ────────────────────────────────────────────── */}
        <section className={styles.quoteSection}>
          <div className={styles.sectionInner}>
            <div className={styles.quoteCard}>
              <div className={styles.stars}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} weight="fill" />
                ))}
              </div>
              <blockquote className={styles.quoteText}>
                &ldquo;{client.quote.text}&rdquo;
              </blockquote>
              <div className={styles.quoteAuthor}>
                <span className={styles.quoteAuthorName}>{client.quote.author}</span>
                <span className={styles.quoteAuthorTitle}>{client.quote.title}</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── Stats ────────────────────────────────────────────── */}
        <section className={styles.statsSection}>
          <div className={styles.sectionInner}>
            <div className={styles.statsRow}>
              {client.stats.map((stat) => (
                <div key={stat.label} className={styles.statItem}>
                  <span className={styles.statValue}>{stat.value}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────── */}
        <section className={styles.cta}>
          <div className={styles.ctaInner}>
            <h2 className={styles.ctaTitle}>Want results like this for your brand?</h2>
            <div className={styles.ctaButtons}>
              <Link href={`/${locale}/contact`} className={styles.ctaButtonPrimary}>
                Get a quote <ArrowRight size={15} weight="bold" />
              </Link>
              <Link href={`/${locale}/portfolio`} className={styles.ctaButtonSecondary}>
                See all case studies
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default CaseStudyPage;
