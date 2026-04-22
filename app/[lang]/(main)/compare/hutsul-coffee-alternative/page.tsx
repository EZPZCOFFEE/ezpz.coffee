import type { Metadata } from "next";
import Link from "next/link";

import styles from "./hutsul.module.scss";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Hutsul Coffee Alternative | Custom Branded Coffee Canada | EZPZ",
    description:
      "Considering Hutsul Coffee for custom branded bags? See how EZPZ compares with zero minimums, full design support, and specialty coffee roasted in Montreal.",
    alternates: { canonical: "/compare/hutsul-coffee-alternative" },
    openGraph: {
      title: "Hutsul Coffee Alternative | Custom Branded Coffee Canada | EZPZ",
      description:
        "Considering Hutsul Coffee for custom branded bags? See how EZPZ compares with zero minimums, full design support, and specialty coffee roasted in Montreal.",
      type: "website",
      url: "https://www.ezpz.coffee/en/compare/hutsul-coffee-alternative",
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "EZPZ vs Hutsul Coffee" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Hutsul Coffee Alternative | Custom Branded Coffee Canada | EZPZ",
      description:
        "No minimums, design included, ships across Canada. See how EZPZ compares to Hutsul Coffee.",
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const ROWS: { feature: string; ezpz: string; competitor: string }[] = [
  { feature: "Minimum order",              ezpz: "None",                   competitor: "Unclear — requires inquiry" },
  { feature: "Custom bag design included", ezpz: "Yes, free",              competitor: "Not included" },
  { feature: "Online design tool",         ezpz: "Yes",                    competitor: "No" },
  { feature: "Turnaround time",            ezpz: "2 to 3 weeks",           competitor: "Unclear" },
  { feature: "Transparent pricing",        ezpz: "Yes",                    competitor: "No — quote required" },
  { feature: "White label solutions",      ezpz: "Bags, RTD, capsules",    competitor: "Bags only" },
  { feature: "Distribution support",       ezpz: "Yes",                    competitor: "No" },
  { feature: "Ships across Canada",        ezpz: "Yes",                    competitor: "Yes" },
  { feature: "Specialty grade coffee",     ezpz: "Yes, 80+ SCA",           competitor: "Yes" },
];

const REASONS = [
  {
    n: "01",
    title: "Clarity from the start",
    body: "Hutsul's custom coffee program requires you to reach out before you can understand pricing, minimums, or timelines. EZPZ is fully transparent. Our pricing, process, and turnaround times are published on our website. You know exactly what you are getting before you place a single order.",
  },
  {
    n: "02",
    title: "No commitment to start",
    body: "Most roasters require you to commit to minimum quantities before you can even test your concept. EZPZ lets you order one bag. This means you can design your branded bag, see how it looks, taste the coffee, share it with your team — before deciding to scale. The risk of starting is essentially zero.",
  },
  {
    n: "03",
    title: "A platform, not just a product",
    body: "EZPZ is not just a roaster that offers custom labels. We are a full brand-building platform — online design tool, origin selection, quality control, and distribution support all in one place. We built the infrastructure that most roasters simply do not have.",
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
  val.includes("requires inquiry") ||
  val.includes("Not included") ||
  val.includes("quote required") ||
  val === "Unclear";

const HutsulPage = () => {
  return (
    <div className={styles.page}>

      {/* ── Breadcrumb ── */}
      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <div className={styles.breadcrumbInner}>
          <Link href="/en" className={styles.breadcrumbLink}>Home</Link>
          <span className={styles.breadcrumbSep}>›</span>
          <Link href="/en/compare" className={styles.breadcrumbLink}>Compare</Link>
          <span className={styles.breadcrumbSep}>›</span>
          <span className={styles.breadcrumbCurrent}>EZPZ vs Hutsul Coffee</span>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.eyebrow}>EZPZ vs Hutsul Coffee</span>
          <h1 className={styles.heroTitle}>
            Custom coffee for Canadian brands — without the minimums.
          </h1>
          <p className={styles.heroSubtitle}>
            Hutsul Coffee is a Canadian roaster with a custom program. EZPZ is a custom coffee platform with no minimums, design included, and an online process built for brands.
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
            Hutsul Coffee is a Canadian roaster that offers custom coffee options for businesses. They serve clients across Canada and have built a reputation in their community for quality roasting.
          </p>
          <p className={styles.introText}>
            Like most Canadian roasters, however, their custom coffee program comes with minimum order requirements and a traditional ordering process that involves quotes, back-and-forth emails, and longer lead times. For businesses that want to move quickly, test a concept without large upfront investment, or simply want a more streamlined brand-building experience — these are real barriers.
          </p>
          <p className={styles.introText}>
            EZPZ was built to eliminate every one of those barriers. Here is how we compare.
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
                <th className={styles.th}>Hutsul Coffee</th>
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
          <h2 className={styles.reasonsTitle}>Why brands choose EZPZ over Hutsul Coffee.</h2>
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
          <h2 className={styles.ctaTitle}>No minimums. Full transparency. Your brand on specialty coffee.</h2>
          <p className={styles.ctaSubtext}>Join 500+ Canadian brands who chose EZPZ. Start designing in under 10 minutes.</p>
          <div className={styles.ctaButtons}>
            <Link href="/en/design" className={styles.ctaPrimary}>Design your bag</Link>
            <Link href="/en/contact" className={styles.ctaSecondary}>Get a free quote</Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default HutsulPage;
