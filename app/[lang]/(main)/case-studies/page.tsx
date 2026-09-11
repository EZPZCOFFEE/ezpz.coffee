import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

import { CASE_STUDIES } from "./data";
import styles from "./styles.module.scss";

export const metadata: Metadata = {
  title: "Client Case Studies | Real Brands Built With EZPZ Coffee",
  description:
    "See how restaurants, platforms, and businesses across Canada launched their own branded coffee with EZPZ. Real clients, real products, real stories.",
  alternates: { canonical: "/en/case-studies" },
  openGraph: {
    title: "Client Case Studies | Real Brands Built With EZPZ Coffee",
    description:
      "See how restaurants, platforms, and businesses across Canada launched their own branded coffee with EZPZ.",
    type: "website",
    url: "https://www.ezpz.coffee/en/case-studies",
    images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "EZPZ Coffee Case Studies" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Client Case Studies | Real Brands Built With EZPZ Coffee",
    description: "See how real brands launched their own coffee with EZPZ.",
    images: ["/assets/banner-01.jpg"],
  },
};

export default function CaseStudiesPage() {
  const published = CASE_STUDIES.filter((c) => c.published);

  return (
    <div className={styles.page}>

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroAngle} />
        <div className={styles.heroInner}>
          <span className={styles.heroEyebrow}>Client Stories</span>
          <h1 className={styles.heroTitle}>
            Real brands. Real coffee. Built with EZPZ.
          </h1>
          <p className={styles.heroSub}>
            From specialty coffee platforms to restaurants and retailers — here is how
            businesses across Canada and the US launched their own branded coffee with zero
            complications.
          </p>
        </div>
      </section>

      {/* ── Stats band ────────────────────────────────────────── */}
      <section className={styles.statBand}>
        <div className={styles.statBandInner}>
          <div className={styles.statItem}>
            <span className={styles.statValue}>1 bag</span>
            <span className={styles.statLabel}>Minimum order</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.statItem}>
            <span className={styles.statValue}>7–10 days</span>
            <span className={styles.statLabel}>From brief to delivery</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.statItem}>
            <span className={styles.statValue}>$0</span>
            <span className={styles.statLabel}>Design fee</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.statItem}>
            <span className={styles.statValue}>80+</span>
            <span className={styles.statLabel}>SCA score on every coffee</span>
          </div>
        </div>
      </section>

      {/* ── Case study grid ───────────────────────────────────── */}
      <section className={styles.gridSection}>
        <div className={styles.gridInner}>
          <div className={styles.grid}>
            {published.map((cs) => (
              <Link key={cs.slug} href={cs.href} className={styles.card}>
                <div className={styles.cardImage}>
                  <img
                    src={cs.image}
                    alt={`${cs.client} — EZPZ Coffee case study`}
                    loading="lazy"
                    className={styles.cardImg}
                  />
                </div>
                <div className={styles.cardBody}>
                  <div className={styles.cardMeta}>
                    <span className={styles.cardClient}>{cs.client}</span>
                    <span className={styles.cardCategory}>{cs.category}</span>
                  </div>
                  <h2 className={styles.cardTitle}>{cs.title}</h2>
                  <p className={styles.cardExcerpt}>{cs.excerpt}</p>
                  <div className={styles.cardTags}>
                    {cs.tags.map((tag) => (
                      <span key={tag} className={styles.cardTag}>{tag}</span>
                    ))}
                  </div>
                  <div className={styles.cardFooter}>
                    <span className={styles.cardDate}>{cs.date}</span>
                    <span className={styles.readMore}>
                      Read case study <ArrowRight size={13} weight="bold" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* ── Coming soon placeholder ── */}
          <div className={styles.comingSoon}>
            <p className={styles.comingSoonText}>
              More case studies coming soon. We are just getting started.
            </p>
            <Link href="/en/contact" className={styles.comingSoonCta}>
              Want to be featured? Talk to us <ArrowRight size={13} weight="bold" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ────────────────────────────────────────── */}
      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>Ready to write your own story?</h2>
          <p className={styles.ctaSubtext}>
            1 bag minimum. Full design included. Roasted fresh in Montreal.
            Your brand deserves to be on the shelf.
          </p>
          <div className={styles.ctaButtons}>
            <Link href="/en/design" className={styles.ctaPrimary}>
              Design your bag
            </Link>
            <Link href="/en/contact" className={styles.ctaSecondary}>
              Get a free quote
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
