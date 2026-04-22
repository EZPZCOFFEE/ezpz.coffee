import type { Metadata } from "next";
import Link from "next/link";

import styles from "./virginHill.module.scss";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Virgin Hill Coffee Alternative | No Minimum Custom Coffee Bags | EZPZ",
    description:
      "Looking at Virgin Hill Coffee for custom bags? EZPZ offers no minimums, design always included, and a fully online ordering process for Canadian brands of any size.",
    alternates: { canonical: "/compare/virgin-hill-coffee-alternative" },
    openGraph: {
      title: "Virgin Hill Coffee Alternative | No Minimum Custom Coffee Bags | EZPZ",
      description:
        "Looking at Virgin Hill Coffee for custom bags? EZPZ offers no minimums, design always included, and a fully online ordering process for Canadian brands of any size.",
      type: "website",
      url: "https://www.ezpz.coffee/en/compare/virgin-hill-coffee-alternative",
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "EZPZ vs Virgin Hill Coffee" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Virgin Hill Coffee Alternative | No Minimum Custom Coffee Bags | EZPZ",
      description:
        "No minimums, design included, ships across Canada. See how EZPZ compares to Virgin Hill Coffee.",
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const ROWS: { feature: string; ezpz: string; competitor: string }[] = [
  { feature: "Minimum order",              ezpz: "None",                   competitor: "50+ units" },
  { feature: "Custom bag design included", ezpz: "Yes, free",              competitor: "Not included" },
  { feature: "Online design tool",         ezpz: "Yes",                    competitor: "No" },
  { feature: "Turnaround time",            ezpz: "2 to 3 weeks",           competitor: "4 to 6 weeks" },
  { feature: "Transparent pricing",        ezpz: "Yes",                    competitor: "No — quote required" },
  { feature: "White label solutions",      ezpz: "Bags, RTD, capsules",    competitor: "Bags only" },
  { feature: "Distribution support",       ezpz: "Yes",                    competitor: "No" },
  { feature: "Ships across Canada",        ezpz: "Yes",                    competitor: "Yes" },
  { feature: "Specialty grade coffee",     ezpz: "Yes, 80+ SCA",           competitor: "Yes" },
];

const REASONS = [
  {
    n: "01",
    title: "The only true zero minimum in Canada",
    body: "Virgin Hill Coffee, like most Canadian roasters, requires minimum quantities. EZPZ is the only Canadian custom coffee supplier with a genuine zero minimum. This is not a marketing claim — you can literally order one bag. We designed our entire operation around making that possible.",
  },
  {
    n: "02",
    title: "Design is not an add-on",
    body: "At most roasters, design is either your responsibility or an extra service you pay for separately. At EZPZ, full bag customization — logo, colors, typography, messaging — is included in your per-unit price. There are no surprises on your invoice.",
  },
  {
    n: "03",
    title: "Built for the digital age",
    body: "Virgin Hill's custom process requires you to reach out, wait for a quote, go back and forth on design, and then commit to a large order. EZPZ has built an online tool that lets you design your bag, select your coffee, and place your order — without talking to anyone if you prefer. Fast, transparent, and completely on your schedule.",
  },
];

const TESTIMONIALS = [
  {
    quote: "Working with EZPZ was seamless from start to finish. Our branded coffee became one of our best-selling products.",
    author: "Sarah L.",
    role: "Boutique Owner",
  },
  {
    quote: "EZPZ helped us launch our coffee brand with zero headaches. Highly recommend to any business looking to add coffee to their lineup.",
    author: "Julie R.",
    role: "Retail Brand",
  },
];

const isPositive = (val: string) => val.toLowerCase().startsWith("yes") || val === "None" || val.includes("Bags,");
const isNegative = (val: string) =>
  val.toLowerCase() === "no" ||
  val.includes("50+") ||
  val.includes("Not included") ||
  val.includes("quote required") ||
  val.includes("4 to 6");

const VirginHillPage = () => {
  return (
    <div className={styles.page}>

      {/* ── Breadcrumb ── */}
      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <div className={styles.breadcrumbInner}>
          <Link href="/en" className={styles.breadcrumbLink}>Home</Link>
          <span className={styles.breadcrumbSep}>›</span>
          <Link href="/en/compare" className={styles.breadcrumbLink}>Compare</Link>
          <span className={styles.breadcrumbSep}>›</span>
          <span className={styles.breadcrumbCurrent}>EZPZ vs Virgin Hill Coffee</span>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.eyebrow}>EZPZ vs Virgin Hill Coffee</span>
          <h1 className={styles.heroTitle}>
            Everything Virgin Hill Coffee offers — with no minimums and design included.
          </h1>
          <p className={styles.heroSubtitle}>
            Virgin Hill Coffee has a custom coffee option. EZPZ has a custom coffee platform built specifically for brand builders.
          </p>
          <div className={styles.heroButtons}>
            <Link href="/en/design" className={styles.heroPrimary}>Design your bag</Link>
            <Link href="/en/contact" className={styles.heroSecondary}>Get a free quote</Link>
          </div>
        </div>
      </section>

      {/* ── Intro ── */}
      <section className={styles.intro}>
        <div className={styles.introInner}>
          <p className={styles.introText}>
            Virgin Hill Coffee offers custom coffee options for Canadian businesses. They have a page dedicated to their custom program and serve clients who want branded coffee products. For certain clients with large volume needs, they may be a workable option.
          </p>
          <p className={styles.introText}>
            But if you are a small business, a boutique brand, a hotel, a restaurant, or anyone who wants to launch or test a branded coffee product without large upfront commitments — Virgin Hill&apos;s minimum order requirements and traditional ordering process create unnecessary barriers.
          </p>
          <p className={styles.introText}>
            EZPZ was built to make custom branded coffee accessible to any business of any size. No minimums. Full design included. Online from start to finish. Here is how we compare.
          </p>
        </div>
      </section>

      {/* ── Comparison table ── */}
      <section className={styles.tableSection}>
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.thFeature}>Feature</th>
                <th className={`${styles.th} ${styles.thEzpz}`}>EZPZ Coffee</th>
                <th className={styles.th}>Virgin Hill Coffee</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row) => (
                <tr key={row.feature} className={styles.tr}>
                  <td className={styles.tdFeature}>{row.feature}</td>
                  <td className={`${styles.td} ${styles.tdEzpz}`}>
                    <span className={styles.check}>✓</span> {row.ezpz}
                  </td>
                  <td className={styles.td}>
                    <span className={isNegative(row.competitor) ? styles.cross : isPositive(row.competitor) ? styles.checkGray : styles.neutral}>
                      {isNegative(row.competitor) ? "✗" : isPositive(row.competitor) ? "✓" : "—"}
                    </span>{" "}
                    {row.competitor}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Why brands switch ── */}
      <section className={styles.reasons}>
        <div className={styles.reasonsInner}>
          <span className={styles.eyebrow}>Why brands switch</span>
          <h2 className={styles.reasonsTitle}>Why brands choose EZPZ over Virgin Hill Coffee.</h2>
          <div className={styles.reasonsGrid}>
            {REASONS.map((r) => (
              <div key={r.n} className={styles.reasonCard}>
                <span className={styles.reasonNumber}>{r.n}</span>
                <h3 className={styles.reasonCardTitle}>{r.title}</h3>
                <p className={styles.reasonCardBody}>{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className={styles.testimonials}>
        <div className={styles.testimonialsInner}>
          <span className={styles.eyebrow}>What our customers say</span>
          <h2 className={styles.testimonialsTitle}>Results that speak for themselves.</h2>
          <div className={styles.testimonialsGrid}>
            {TESTIMONIALS.map((t) => (
              <div key={t.author} className={styles.testimonialCard}>
                <div className={styles.testimonialStars}>★★★★★</div>
                <p className={styles.testimonialQuote}>&ldquo;{t.quote}&rdquo;</p>
                <div className={styles.testimonialAuthor}>
                  <span className={styles.testimonialName}>{t.author}</span>
                  <span className={styles.testimonialRole}>{t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Back link ── */}
      <div className={styles.backLink}>
        <div className={styles.backLinkInner}>
          <Link href="/en/compare" className={styles.backLinkAnchor}>← See all competitor comparisons</Link>
        </div>
      </div>

      {/* ── Final CTA ── */}
      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>Launch your coffee brand today. No minimums. No complexity.</h2>
          <p className={styles.ctaSubtext}>EZPZ is the simplest, most flexible custom coffee option in Canada. Period.</p>
          <div className={styles.ctaButtons}>
            <Link href="/en/design" className={styles.ctaPrimary}>Design your bag</Link>
            <Link href="/en/contact" className={styles.ctaSecondary}>Get a free quote</Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default VirginHillPage;
