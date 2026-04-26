import type { Metadata } from "next";
import Link from "next/link";

import styles from "./compare.module.scss";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Best Custom Coffee Bags Canada | EZPZ vs Competitors | No Minimum",
    description:
      "See how EZPZ Coffee compares to Rogue Wave Coffee, Canterbury Coffee, Black Stripe Coffee, Virgin Hill Coffee, Hutsul Coffee and others. No minimums, full design included, roasted in Montreal.",
    alternates: { canonical: "/compare" },
    openGraph: {
      title: "Best Custom Coffee Bags Canada | EZPZ vs Competitors | No Minimum",
      description:
        "See how EZPZ Coffee compares to every custom coffee supplier in Canada. No minimums, design included, ships nationwide.",
      type: "website",
      url: "https://www.ezpz.coffee/en/compare",
    },
  };
}

const COMPETITORS: { name: string; href?: string }[] = [
  { name: "Rogue Wave Coffee", href: "/en/compare/rogue-wave-coffee-alternative" },
  { name: "Canterbury Coffee", href: "/en/compare/canterbury-coffee-alternative" },
  { name: "Black Stripe Coffee", href: "/en/compare/black-stripe-coffee-alternative" },
  { name: "Virgin Hill Coffee", href: "/en/compare/virgin-hill-coffee-alternative" },
  { name: "Hutsul Coffee", href: "/en/compare/hutsul-coffee-alternative" },
];

const COMPETITOR_PAGES: { name: string; blurb: string; href: string }[] = [
  { name: "Rogue Wave Coffee", blurb: "Edmonton-based roaster with high minimum orders and no online design tool.", href: "/en/compare/rogue-wave-coffee-alternative" },
  { name: "Canterbury Coffee", blurb: "BC distributor focused on grocery and foodservice — not brand builders.", href: "/en/compare/canterbury-coffee-alternative" },
  { name: "Black Stripe Coffee", blurb: "Custom coffee supplier with limited transparency on pricing and MOQ.", href: "/en/compare/black-stripe-coffee-alternative" },
  { name: "Virgin Hill Coffee", blurb: "Specialty roaster without an online design tool or zero-minimum offering.", href: "/en/compare/virgin-hill-coffee-alternative" },
  { name: "Hutsul Coffee", blurb: "Wholesale-focused roaster with unclear minimum and turnaround requirements.", href: "/en/compare/hutsul-coffee-alternative" },
  { name: "Roasters Pack", blurb: "Subscription-first model — not built for custom branded bag production.", href: "/en/compare/roasters-pack-alternative" },
];

const ROWS: { feature: string; ezpz: string; competitors: string[] }[] = [
  {
    feature: "Minimum order",
    ezpz: "None — order 1 bag",
    competitors: ["High minimums", "Large volume only", "High minimums", "High minimums", "Unclear"],
  },
  {
    feature: "Custom bag design included",
    ezpz: "Yes, always free",
    competitors: ["Extra cost", "Not mentioned", "Not mentioned", "Not mentioned", "Not mentioned"],
  },
  {
    feature: "Specialty grade coffee",
    ezpz: "Yes, 80+ SCA",
    competitors: ["Yes", "Yes", "Yes", "Yes", "Yes"],
  },
  {
    feature: "Turnaround time",
    ezpz: "2 to 3 weeks",
    competitors: ["Unclear", "Weeks to months", "Unclear", "Unclear", "Unclear"],
  },
  {
    feature: "Online design tool",
    ezpz: "Yes",
    competitors: ["No", "No", "No", "No", "No"],
  },
  {
    feature: "Transparent pricing",
    ezpz: "Yes",
    competitors: ["No", "No", "No", "No", "No"],
  },
  {
    feature: "Roasted in Canada",
    ezpz: "Yes, Montreal",
    competitors: ["Yes, Edmonton", "Yes, BC", "Yes", "Yes", "Yes"],
  },
  {
    feature: "Ships across Canada",
    ezpz: "Yes",
    competitors: ["Yes", "Yes", "Yes", "Yes", "Yes"],
  },
  {
    feature: "White label solutions",
    ezpz: "Yes — bags, RTD, capsules",
    competitors: ["Bags only", "Grocery and foodservice", "Limited", "Limited", "Limited"],
  },
  {
    feature: "Distribution support",
    ezpz: "Yes",
    competitors: ["No", "Limited", "No", "No", "No"],
  },
];

const DIFFERENTIATORS = [
  {
    n: "01",
    title: "No minimum — anywhere.",
    body: "Every competitor we looked at requires minimum orders of 50, 100, or even 500+ units. EZPZ is the only custom coffee supplier in Canada with zero minimums. Order 1 bag. Order 10,000. We treat you the same.",
  },
  {
    n: "02",
    title: "Design included. Always.",
    body: "Most suppliers charge extra for packaging design or require you to supply print-ready files. At EZPZ, full bag design and customization is included in your per-unit price. No hidden fees, ever.",
  },
  {
    n: "03",
    title: "Built for brands, not just roasters.",
    body: "Canterbury and Rogue Wave are great roasters. But they built their businesses for wholesale coffee buyers, not brand builders. EZPZ was built specifically for restaurants, hotels, retailers, and brands who want to sell coffee under their own name.",
  },
  {
    n: "04",
    title: "You can start today.",
    body: "No lengthy onboarding. No sales calls required. Use our online design tool to create your bag right now, pick your coffee, and place your order. Most competitors require you to email them and wait days for a quote.",
  },
];

const isPositive = (val: string) =>
  val.toLowerCase().startsWith("yes");

const isNegative = (val: string) =>
  val.toLowerCase() === "no" ||
  val.toLowerCase().includes("unclear") ||
  val.toLowerCase().includes("not mentioned") ||
  val.toLowerCase().includes("high minimums") ||
  val.toLowerCase().includes("large volume");

const ComparePage = () => {
  return (
    <div className={styles.page}>

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.eyebrow}>EZPZ vs The Competition</span>
          <h1 className={styles.heroTitle}>
            Why Canadian brands choose EZPZ over the competition.
          </h1>
          <p className={styles.heroSubtitle}>
            We looked at every custom coffee option in Canada so you don&apos;t have to. Here&apos;s what we found.
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
                {COMPETITORS.map((c) => (
                  <th key={c.name} className={styles.th}>
                    {c.href ? (
                      <Link href={c.href} className={styles.thLink}>{c.name}</Link>
                    ) : (
                      c.name
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row) => (
                <tr key={row.feature} className={styles.tr}>
                  <td className={styles.tdFeature}>{row.feature}</td>
                  <td className={`${styles.td} ${styles.tdEzpz}`}>
                    <span className={styles.check}>✓</span> {row.ezpz}
                  </td>
                  {row.competitors.map((val, i) => (
                    <td key={i} className={styles.td}>
                      <span className={isNegative(val) ? styles.cross : isPositive(val) ? styles.checkGray : styles.neutral}>
                        {isNegative(val) ? "✗" : isPositive(val) ? "✓" : "—"}
                      </span>{" "}
                      {val}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── What makes EZPZ different ── */}
      <section className={styles.diff}>
        <div className={styles.diffInner}>
          <span className={styles.eyebrow}>The EZPZ difference</span>
          <h2 className={styles.diffTitle}>What makes EZPZ different</h2>
          <div className={styles.diffGrid}>
            {DIFFERENTIATORS.map((d) => (
              <div key={d.n} className={styles.diffCard}>
                <span className={styles.diffNumber}>{d.n}</span>
                <h3 className={styles.diffCardTitle}>{d.title}</h3>
                <p className={styles.diffCardBody}>{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Head-to-head pages ── */}
      <section className={styles.headToHead}>
        <div className={styles.headToHeadInner}>
          <span className={styles.eyebrow}>Detailed Comparisons</span>
          <h2 className={styles.headToHeadTitle}>EZPZ vs every Canadian competitor</h2>
          <div className={styles.headToHeadGrid}>
            {COMPETITOR_PAGES.map((c) => (
              <Link key={c.href} href={c.href} className={styles.headToHeadCard}>
                <span className={styles.headToHeadName}>{c.name}</span>
                <p className={styles.headToHeadBlurb}>{c.blurb}</p>
                <span className={styles.headToHeadCta}>See full comparison →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA banner ── */}
      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>Ready to see the difference?</h2>
          <div className={styles.ctaButtons}>
            <Link href="/en/design" className={styles.ctaPrimary}>Design your bag</Link>
            <Link href="/en/contact" className={styles.ctaSecondary}>Get a quote</Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ComparePage;
