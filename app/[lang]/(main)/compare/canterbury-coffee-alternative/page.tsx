import type { Metadata } from "next";
import Link from "next/link";

import styles from "./canterbury.module.scss";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Canterbury Coffee Alternative for Small Business | EZPZ Coffee Canada",
    description:
      "Canterbury Coffee serves large grocery and foodservice chains. EZPZ serves everyone else — restaurants, boutiques, hotels — with no minimums and full custom design included.",
    alternates: { canonical: "/compare/canterbury-coffee-alternative" },
    openGraph: {
      title: "Canterbury Coffee Alternative for Small Business | EZPZ Coffee Canada",
      description:
        "Canterbury Coffee serves large grocery and foodservice chains. EZPZ serves everyone else — restaurants, boutiques, hotels — with no minimums and full custom design included.",
      type: "website",
      url: "https://www.ezpz.coffee/en/compare/canterbury-coffee-alternative",
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "EZPZ vs Canterbury Coffee" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Canterbury Coffee Alternative for Small Business | EZPZ Coffee Canada",
      description:
        "No minimums, design included, ships across Canada. See how EZPZ compares to Canterbury Coffee.",
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const ROWS: { feature: string; ezpz: string; competitor: string }[] = [
  { feature: "Minimum order",              ezpz: "None",                       competitor: "Large volume only" },
  { feature: "Target client size",         ezpz: "Any size — 1 to 10,000 units", competitor: "National chains and large foodservice" },
  { feature: "Custom bag design included", ezpz: "Yes, free",                  competitor: "Not included" },
  { feature: "Online ordering",            ezpz: "Yes",                        competitor: "No — quote required" },
  { feature: "Turnaround time",            ezpz: "2 to 3 weeks",               competitor: "Weeks to months" },
  { feature: "Transparent pricing",        ezpz: "Yes",                        competitor: "No" },
  { feature: "White label options",        ezpz: "Bags, RTD, capsules",        competitor: "Grocery blends and foodservice" },
  { feature: "Distribution support",       ezpz: "Yes",                        competitor: "Limited to large clients" },
  { feature: "Specialty grade coffee",     ezpz: "Yes, 80+ SCA",               competitor: "Yes" },
];

const REASONS = [
  {
    n: "01",
    title: "You do not need to be a grocery chain",
    body: "Canterbury's private label page lists Grocery and Foodservice as their two client categories. If your business does not fit neatly into one of those boxes — a boutique, a gym, a hotel, an online brand — Canterbury is not designed for you. EZPZ works with any business of any size, in any industry, anywhere in Canada.",
  },
  {
    n: "02",
    title: "No volume commitments",
    body: "Canterbury's private label program requires volume commitments that make sense for grocery shelf space but are completely unrealistic for most small and medium businesses. EZPZ has zero minimums. You can start with a single bag, test the market, and scale when you are ready. The risk is essentially zero.",
  },
  {
    n: "03",
    title: "Start in days, not months",
    body: "Getting a custom coffee program off the ground with Canterbury means sales calls, sampling rounds, design approvals, production scheduling, and months of lead time. EZPZ lets you design your bag online, pick your coffee, and place your order in under 30 minutes. Most orders are ready within 2 to 3 weeks.",
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

const isPositive = (val: string) => val.toLowerCase().startsWith("yes") || val === "None" || val.includes("Any size") || val.includes("Bags,");
const isNegative = (val: string) =>
  val.toLowerCase() === "no" ||
  val.includes("Large volume") ||
  val.includes("National chains") ||
  val.includes("Not included") ||
  val.includes("quote required") ||
  val.includes("Weeks to months") ||
  val.includes("Limited to");

const CanterburyPage = () => {
  return (
    <div className={styles.page}>

      {/* ── Breadcrumb ── */}
      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <div className={styles.breadcrumbInner}>
          <Link href="/en" className={styles.breadcrumbLink}>Home</Link>
          <span className={styles.breadcrumbSep}>›</span>
          <Link href="/en/compare" className={styles.breadcrumbLink}>Compare</Link>
          <span className={styles.breadcrumbSep}>›</span>
          <span className={styles.breadcrumbCurrent}>EZPZ vs Canterbury Coffee</span>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.eyebrow}>EZPZ vs Canterbury Coffee</span>
          <h1 className={styles.heroTitle}>
            Canterbury Coffee is built for grocery chains. EZPZ is built for your brand.
          </h1>
          <p className={styles.heroSubtitle}>
            Canterbury has been serving large Canadian clients for over 40 years. If you are not a national grocery chain, EZPZ is the better fit.
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
            Canterbury Coffee is one of Canada&apos;s largest and most established coffee companies. Based in BC, they have been roasting and supplying coffee to major Canadian grocery chains, national foodservice companies, and large institutional clients for over four decades. They are very good at what they do.
          </p>
          <p className={styles.introText}>
            But Canterbury&apos;s private label program is designed for large-scale clients. Their onboarding process, minimum quantities, lead times, and pricing structures are built around clients ordering tens of thousands of units. If you are a boutique hotel, a growing restaurant group, a specialty retailer, or any business that wants to launch a branded coffee product without massive upfront commitments — Canterbury is simply not built for you.
          </p>
          <p className={styles.introText}>
            EZPZ was. Here is how we compare.
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
                <th className={styles.th}>Canterbury Coffee</th>
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
          <h2 className={styles.reasonsTitle}>Why growing brands choose EZPZ over Canterbury Coffee.</h2>
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
          <h2 className={styles.ctaTitle}>You do not need to be a grocery chain to have your own coffee brand.</h2>
          <p className={styles.ctaSubtext}>EZPZ was built for businesses exactly like yours. No minimums, no complexity, no hidden fees.</p>
          <div className={styles.ctaButtons}>
            <Link href="/en/design" className={styles.ctaPrimary}>Design your bag</Link>
            <Link href="/en/contact" className={styles.ctaSecondary}>Get a free quote</Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default CanterburyPage;
