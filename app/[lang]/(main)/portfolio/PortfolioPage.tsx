"use client";

import { ArrowRight } from "@phosphor-icons/react";
import Link from "next/link";
import { useLocale } from "next-intl";

import { PORTFOLIO_CLIENTS } from "./data";
import styles from "./styles.module.scss";

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
            {PORTFOLIO_CLIENTS.map((client) => (
              <Link
                key={client.slug}
                href={`/${locale}/portfolio/${client.slug}`}
                className={styles.card}
              >
                <div className={styles.cardImage} style={{ background: client.color }}>
                  <span className={styles.cardInitials}>{client.initials}</span>
                </div>
                <div className={styles.cardBody}>
                  <span className={styles.cardIndustry}>{client.industry}</span>
                  <h2 className={styles.cardName}>{client.name}</h2>
                  <p className={styles.cardDesc}>{client.description}</p>
                  <span className={styles.cardLink}>
                    View case study <ArrowRight size={13} weight="bold" />
                  </span>
                </div>
              </Link>
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
