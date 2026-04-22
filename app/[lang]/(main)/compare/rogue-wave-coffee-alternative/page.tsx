import type { Metadata } from "next";
import Link from "next/link";

import styles from "./rogueWave.module.scss";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Rogue Wave Coffee Alternative | Custom Coffee Bags No Minimum | EZPZ",
    description:
      "Looking for a Rogue Wave Coffee alternative for custom branded bags? EZPZ offers no minimum orders, full design included, specialty coffee roasted in Montreal, and ships across Canada.",
    alternates: { canonical: "/compare/rogue-wave-coffee-alternative" },
    openGraph: {
      title: "Rogue Wave Coffee Alternative | Custom Coffee Bags No Minimum | EZPZ",
      description:
        "Looking for a Rogue Wave Coffee alternative for custom branded bags? EZPZ offers no minimum orders, full design included, specialty coffee roasted in Montreal, and ships across Canada.",
      type: "website",
      url: "https://www.ezpz.coffee/en/compare/rogue-wave-coffee-alternative",
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "EZPZ vs Rogue Wave Coffee" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Rogue Wave Coffee Alternative | Custom Coffee Bags No Minimum | EZPZ",
      description:
        "No minimum orders, design included, ships across Canada. See how EZPZ compares to Rogue Wave Coffee.",
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const ROWS: { feature: string; ezpz: string; rogue: string }[] = [
  { feature: "Minimum order",            ezpz: "None",                    rogue: "100+ units" },
  { feature: "Custom bag design included", ezpz: "Yes, free",             rogue: "Extra cost" },
  { feature: "Online design tool",       ezpz: "Yes",                     rogue: "No" },
  { feature: "Turnaround time",          ezpz: "2 to 3 weeks",            rogue: "4 to 6 weeks" },
  { feature: "Transparent pricing",      ezpz: "Yes",                     rogue: "No" },
  { feature: "White label solutions",    ezpz: "Bags, RTD, capsules",     rogue: "Bags only" },
  { feature: "Distribution support",     ezpz: "Yes",                     rogue: "No" },
  { feature: "Ships across Canada",      ezpz: "Yes",                     rogue: "Yes" },
  { feature: "Specialty grade coffee",   ezpz: "Yes, 80+ SCA",            rogue: "Yes" },
];

const REASONS = [
  {
    n: "01",
    title: "No minimum order",
    body: "Rogue Wave requires significant minimum quantities for custom orders. This makes sense for their business model but it creates a massive barrier for small businesses, new brands, or anyone who wants to test a concept before committing. EZPZ has zero minimums. You can order a single bag. This alone is why most brands choose us.",
  },
  {
    n: "02",
    title: "Design is included",
    body: "To order custom coffee from Rogue Wave, you need to bring your own print-ready design files. That means hiring a graphic designer before you even know if your concept will work. At EZPZ, full bag design is included in your per-unit price. You bring your logo and brand colors — we handle the rest.",
  },
  {
    n: "03",
    title: "Built for your brand, not the roasting community",
    body: "Rogue Wave built their brand for specialty coffee enthusiasts, competitive brewers, and gear lovers. Their website, their language, their products — all aimed at that audience. EZPZ was built for brand owners. Our entire process, from the online design tool to the quote system to the customer support, was designed with business owners in mind.",
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
const isNegative = (val: string) => val.toLowerCase() === "no" || val.includes("100+") || val.includes("Extra cost") || val.includes("4 to 6");

const RogueWavePage = () => {
  return (
    <div className={styles.page}>

      {/* ── Breadcrumb ── */}
      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <div className={styles.breadcrumbInner}>
          <Link href="/en" className={styles.breadcrumbLink}>Home</Link>
          <span className={styles.breadcrumbSep}>›</span>
          <Link href="/en/compare" className={styles.breadcrumbLink}>Compare</Link>
          <span className={styles.breadcrumbSep}>›</span>
          <span className={styles.breadcrumbCurrent}>EZPZ vs Rogue Wave Coffee</span>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.eyebrow}>EZPZ vs Rogue Wave Coffee</span>
          <h1 className={styles.heroTitle}>
            A Rogue Wave Coffee alternative built for brand builders.
          </h1>
          <p className={styles.heroSubtitle}>
            Rogue Wave Coffee is a fantastic specialty roaster. But if you need custom branded bags with no minimum order, EZPZ was built exactly for that.
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
            Rogue Wave Coffee is one of Canada&apos;s most respected specialty roasters, based in Edmonton, Alberta. They source exceptional beans, roast with precision, and have built a loyal community of coffee enthusiasts. We genuinely respect what they have built.
          </p>
          <p className={styles.introText}>
            But here is the thing — Rogue Wave was built for coffee lovers, not coffee brands. If you are a restaurant, hotel, boutique, gym, or any business looking to sell coffee under your own brand name with custom packaging, no minimums, and a simple online process — Rogue Wave is not the right fit. They offer a custom coffee option, but it comes with significant minimum order requirements, no included design support, and no streamlined brand-building process.
          </p>
          <p className={styles.introText}>
            EZPZ was built specifically to solve that problem. Here is how we compare.
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
                <th className={styles.th}>Rogue Wave Coffee</th>
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
                    <span className={isNegative(row.rogue) ? styles.cross : isPositive(row.rogue) ? styles.checkGray : styles.neutral}>
                      {isNegative(row.rogue) ? "✗" : isPositive(row.rogue) ? "✓" : "—"}
                    </span>{" "}
                    {row.rogue}
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
          <h2 className={styles.reasonsTitle}>Why brands choose EZPZ over Rogue Wave Coffee.</h2>
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
          <h2 className={styles.ctaTitle}>Ready to build your coffee brand without the minimums?</h2>
          <p className={styles.ctaSubtext}>Join 500+ Canadian brands who chose EZPZ. Design your bag online in under 10 minutes.</p>
          <div className={styles.ctaButtons}>
            <Link href="/en/design" className={styles.ctaPrimary}>Design your bag</Link>
            <Link href="/en/contact" className={styles.ctaSecondary}>Get a free quote</Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default RogueWavePage;
