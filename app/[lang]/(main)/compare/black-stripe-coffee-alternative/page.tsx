import type { Metadata } from "next";
import Link from "next/link";

import styles from "./blackStripe.module.scss";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Black Stripe Coffee Alternative | Custom Branded Coffee No Minimum | EZPZ",
    description:
      "Comparing Black Stripe Coffee for custom branded bags? EZPZ offers more flexibility, no minimums, full design support, and specialty coffee for Canadian brands of any size.",
    alternates: { canonical: "/en/compare/black-stripe-coffee-alternative" },
    openGraph: {
      title: "Black Stripe Coffee Alternative | Custom Branded Coffee No Minimum | EZPZ",
      description:
        "Comparing Black Stripe Coffee for custom branded bags? EZPZ offers more flexibility, no minimums, full design support, and specialty coffee for Canadian brands of any size.",
      type: "website",
      url: "https://www.ezpz.coffee/en/compare/black-stripe-coffee-alternative",
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "EZPZ vs Black Stripe Coffee" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Black Stripe Coffee Alternative | Custom Branded Coffee No Minimum | EZPZ",
      description:
        "No minimums, design included, ships across Canada. See how EZPZ compares to Black Stripe Coffee.",
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
    title: "Zero minimums means zero risk",
    body: "Black Stripe Coffee requires minimum orders before you can access their custom program. That means you need to commit hundreds or thousands of dollars before you know if your branded coffee product will sell. EZPZ lets you start with one bag. Test your market. Prove the concept. Then scale.",
  },
  {
    n: "02",
    title: "Design should not cost extra",
    body: "Most roasters treat packaging design as a separate service that adds cost and complexity to your order. At EZPZ, full custom bag design is included in every order. Your logo, your colors, your messaging — handled by our team at no additional charge. What you see in our per-unit pricing is what you pay.",
  },
  {
    n: "03",
    title: "An online process that respects your time",
    body: "Getting a custom order through Black Stripe means emails, quote requests, and back-and-forth before you can even see what your bag will look like. EZPZ has an online design tool that lets you build your bag visually, pick your coffee origin, and place your order — all without waiting for a reply from a sales team.",
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

const BlackStripePage = () => {
  return (
    <div className={styles.page}>

      {/* ── Breadcrumb ── */}
      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <div className={styles.breadcrumbInner}>
          <Link href="/en" className={styles.breadcrumbLink}>Home</Link>
          <span className={styles.breadcrumbSep}>›</span>
          <Link href="/en/compare" className={styles.breadcrumbLink}>Compare</Link>
          <span className={styles.breadcrumbSep}>›</span>
          <span className={styles.breadcrumbCurrent}>EZPZ vs Black Stripe Coffee</span>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.eyebrow}>EZPZ vs Black Stripe Coffee</span>
          <h1 className={styles.heroTitle}>
            Custom coffee bags with more flexibility than Black Stripe Coffee.
          </h1>
          <p className={styles.heroSubtitle}>
            Black Stripe Coffee offers custom options for Canadian businesses. EZPZ offers the same quality with no minimums, included design, and a fully online process.
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
            Black Stripe Coffee is a Canadian roaster that offers custom coffee options for businesses. They roast quality beans and have built a solid reputation in their market. If you have researched custom coffee in Canada, you may have come across them.
          </p>
          <p className={styles.introText}>
            However, like most Canadian roasters who offer custom options, Black Stripe requires minimum order quantities that can be prohibitive for small businesses, startups, or brands that want to test a concept before committing. Their custom process also requires back-and-forth communication and does not have a self-serve online design tool.
          </p>
          <p className={styles.introText}>
            EZPZ was built to remove every one of those barriers. Same quality specialty coffee, same Canadian roasting, with zero minimums, full design included, and an online process that takes less than 30 minutes from start to order confirmation.
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
                <th className={styles.th}>Black Stripe Coffee</th>
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
          <h2 className={styles.reasonsTitle}>Three reasons brands choose EZPZ over Black Stripe Coffee.</h2>
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
          <h2 className={styles.ctaTitle}>Same quality specialty coffee. Zero minimums. Full design included.</h2>
          <p className={styles.ctaSubtext}>See why Canadian brands choose EZPZ. Design your bag online right now.</p>
          <div className={styles.ctaButtons}>
            <Link href="/en/design" className={styles.ctaPrimary}>Design your bag</Link>
            <Link href="/en/contact" className={styles.ctaSecondary}>Get a free quote</Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default BlackStripePage;
