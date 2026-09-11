"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import { ArrowRight, Check } from "@phosphor-icons/react/dist/ssr";

import styles from "./styles.module.scss";

const INCLUDED = [
  "Custom design",
  "Specialty-grade coffee (80+ SCA score)",
  "Roasted fresh in Montreal",
  "Whole bean or ground",
  "Ships across Canada & USA",
];

const PricingPage = () => {
  const locale = useLocale();

  return (
    <div className={styles.page}>

      {/* ── JSON-LD FAQ Schema ─────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How much does a custom coffee bag cost in Canada?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "EZPZ custom-label bags start with zero minimum order — custom design is always included with no setup fees. Fully custom printed bags start at a 5,000-unit minimum. Contact us for a quote tailored to your volume.",
                },
              },
              {
                "@type": "Question",
                name: "Is there a setup or design fee?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No. Custom label design is always included at no extra cost, with no setup or monthly fees on standard orders.",
                },
              },
              {
                "@type": "Question",
                name: "How much does coffee dropshipping cost?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "EZPZ dropshipping starts at a $15 per-bag baseline shipped directly to your customer, with you setting your own retail price and no monthly fees.",
                },
              },
            ],
          }),
        }}
      />

      {/* ── Answer-first block (AEO/speakable) ───────────────── */}
      <div
        data-speakable
        style={{
          background: "#FDF9F5",
          borderLeft: "4px solid #C17A3A",
          padding: "1rem 1.5rem",
          maxWidth: "820px",
          margin: "0 auto",
          fontSize: "0.95rem",
          lineHeight: 1.7,
          color: "#333",
        }}
      >
        <strong style={{ color: "#111", display: "block", marginBottom: "0.25rem" }}>
          Quick answer:
        </strong>
        EZPZ custom-label coffee bags start with zero minimum order — custom design is always included, no setup fees. Contact us for a quote scaled to your volume.
        Fully custom printed bags start at a 5,000-unit minimum.
        <a href="/en/contact?subject=Pricing Quote" style={{ color: "#C17A3A", marginLeft: "0.5rem", fontWeight: 700, textDecoration: "underline" }}>
          Get a free quote →
        </a>
      </div>

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroAngle} />
        <div className={styles.heroInner}>
          <span className={styles.heroEyebrow}>Pricing</span>
          <h1 className={styles.heroTitle}>Simple, transparent pricing.</h1>
          <p className={styles.heroSub}>
            No hidden fees, design always included. Here&apos;s what it costs to put your brand on great coffee.
          </p>
        </div>
      </section>

      {/* ── Two options ───────────────────────────────────────── */}
      <section className={styles.optionsSection}>
        <div className={styles.optionsInner}>
          <h2 className={styles.sectionHeading}>Two ways to get your branded bags</h2>

          <div className={styles.optionsGrid}>

            {/* Option 1 — EZPZ Label */}
            <div className={styles.optionCard}>
              <span className={styles.optionTag}>Best for launching &amp; testing</span>
              <h3 className={styles.optionName}>EZPZ Bags with Custom Label</h3>
              <p className={styles.optionDesc}>
                Our high-quality 225g stand-up bags (degassing valve + resealable zip) with your custom-designed label applied.
              </p>
              <ul className={styles.optionHighlights}>
                <li><Check size={14} weight="bold" className={styles.checkIcon} /> Zero minimum order — start with a single bag</li>
                <li><Check size={14} weight="bold" className={styles.checkIcon} /> Custom label design included, no setup fees</li>
                <li><Check size={14} weight="bold" className={styles.checkIcon} /> Price scales with volume — contact us for a quote</li>
              </ul>

              <div className={styles.optionCtaGroup}>
                <Link href={`/${locale}/contact?subject=EZPZ Label Bag Quote`} className={styles.optionCtaPrimary}>
                  Get a quote <ArrowRight size={14} weight="bold" />
                </Link>
                <Link href={`/${locale}/design`} className={styles.optionCtaOutline}>
                  Or design your bag <ArrowRight size={14} weight="bold" />
                </Link>
              </div>
            </div>

            {/* Option 2 — Fully Custom */}
            <div className={`${styles.optionCard} ${styles.optionCardDark}`}>
              <span className={`${styles.optionTag} ${styles.optionTagDark}`}>Best for scaling brands</span>
              <h3 className={`${styles.optionName} ${styles.optionNameLight}`}>Fully Custom Printed Bags</h3>
              <p className={`${styles.optionDesc} ${styles.optionDescLight}`}>
                The entire bag printed to your exact design and size (250g, 340g, 454g, 1kg, and more). Zero EZPZ branding.
              </p>

              <ul className={`${styles.optionHighlights} ${styles.optionHighlightsLight}`}>
                <li><Check size={14} weight="bold" className={styles.checkIconLight} /> Minimum order: 5,000 units (splittable across up to 5 designs)</li>
                <li><Check size={14} weight="bold" className={styles.checkIconLight} /> Paid upfront</li>
                <li><Check size={14} weight="bold" className={styles.checkIconLight} /> Per-bag price drops significantly at scale — contact us for a quote</li>
              </ul>

              <Link href={`/${locale}/contact?subject=Fully Custom Printed Bags`} className={styles.optionCtaSecondary}>
                Get a custom quote <ArrowRight size={14} weight="bold" />
              </Link>
            </div>

          </div>

          <div className={styles.optionsClarifier}>
            <p>
              <strong>Not sure which to choose?</strong> Most brands start with Option 1 to launch lean with zero risk, then move to Option 2 once they&apos;ve proven demand. Both use the same specialty-grade coffee inside.
            </p>
          </div>
        </div>
      </section>

      {/* ── Dropshipping pricing ───────────────────────────────── */}
      <section className={styles.dropshipSection}>
        <div className={styles.dropshipInner}>
          <span className={styles.sectionEyebrow}>Dropshipping</span>
          <h2 className={styles.sectionHeading}>Sell online, zero inventory.</h2>
          <p className={styles.dropshipDesc}>
            Sell online with zero inventory. When a customer orders on your store, we roast, pack, and ship directly to them under your brand.
          </p>
          <div className={styles.dropshipHighlight}>
            <span className={styles.dropshipPrice}>$15</span>
            <span className={styles.dropshipLabel}>per bag shipped to your customer — you set your own retail price</span>
          </div>
          <p className={styles.dropshipNote}>
            No monthly fees, no setup fees. Rate improves as your volume grows.
          </p>
          <Link href={`/${locale}/coffee-dropshipping-canada`} className={styles.dropshipLink}>
            Learn about dropshipping <ArrowRight size={13} weight="bold" />
          </Link>
        </div>
      </section>

      {/* ── What's always included ────────────────────────────── */}
      <section className={styles.includedSection}>
        <div className={styles.includedInner}>
          <h2 className={styles.sectionHeading}>What&apos;s always included</h2>
          <ul className={styles.includedList}>
            {INCLUDED.map((item) => (
              <li key={item} className={styles.includedItem}>
                <Check size={16} weight="bold" className={styles.checkIcon} />
                {item}
              </li>
            ))}
          </ul>
          <p className={styles.includedNote}>
            Shipping is calculated by destination. <Link href={`/${locale}/contact?subject=Shipping Quote`} className={styles.includedNoteLink}>Contact us</Link> for an exact quote tailored to your volume and location.
          </p>

          {/* Sample CTA */}
          <div className={styles.sampleCta}>
            <p className={styles.sampleCtaText}>Want to taste first?</p>
            <Link href={`/${locale}/contact?subject=Free Sample Request`} className={styles.sampleCtaLink}>
              Request a free sample kit <ArrowRight size={13} weight="bold" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ────────────────────────────────────────── */}
      <section className={styles.ctaBanner}>
        <div className={styles.ctaBannerInner}>
          <h2 className={styles.ctaBannerTitle}>Ready to start?</h2>
          <p className={styles.ctaBannerSub}>
            Design your bag or request a free sample — zero commitment either way.
          </p>
          <div className={styles.ctaBannerButtons}>
            <Link href={`/${locale}/design`} className={styles.ctaBannerPrimary}>
              Design your bag
            </Link>
            <Link href={`/${locale}/contact?subject=Free Sample Request`} className={styles.ctaBannerSecondary}>
              Request a free sample
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default PricingPage;
