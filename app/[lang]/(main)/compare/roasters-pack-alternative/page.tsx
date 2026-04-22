import type { Metadata } from "next";
import Link from "next/link";

import styles from "./roastersPack.module.scss";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Roasters Pack Alternative for Business | White Label Coffee Canada | EZPZ",
    description:
      "The Roasters Pack is great for coffee lovers. EZPZ is built for coffee brands. Custom branded bags, no minimums, full white label solutions across Canada.",
    alternates: { canonical: "/compare/roasters-pack-alternative" },
    openGraph: {
      title: "Roasters Pack Alternative for Business | White Label Coffee Canada | EZPZ",
      description:
        "The Roasters Pack is great for coffee lovers. EZPZ is built for coffee brands. Custom branded bags, no minimums, full white label solutions across Canada.",
      type: "website",
      url: "https://www.ezpz.coffee/en/compare/roasters-pack-alternative",
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "EZPZ vs The Roasters Pack" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Roasters Pack Alternative for Business | White Label Coffee Canada | EZPZ",
      description:
        "The Roasters Pack is great for coffee lovers. EZPZ is built for coffee brands.",
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const ROWS: { feature: string; ezpz: string; competitor: string }[] = [
  { feature: "Custom branded bags",        ezpz: "Yes",                    competitor: "No" },
  { feature: "White label solutions",      ezpz: "Yes, bags, RTD, capsules", competitor: "No" },
  { feature: "Minimum order",              ezpz: "None",                   competitor: "Not applicable" },
  { feature: "Design included",            ezpz: "Yes, free",              competitor: "Not applicable" },
  { feature: "B2B and business clients",   ezpz: "Yes, core focus",        competitor: "No — consumer only" },
  { feature: "Online design tool",         ezpz: "Yes",                    competitor: "No" },
  { feature: "Distribution support",       ezpz: "Yes",                    competitor: "No" },
  { feature: "Ships across Canada",        ezpz: "Yes",                    competitor: "Yes, consumer only" },
  { feature: "Specialty grade coffee",     ezpz: "Yes, 80+ SCA",           competitor: "Yes" },
];

const REASONS = [
  {
    n: "01",
    title: "They are not in the custom coffee business",
    body: "The Roasters Pack does not offer custom branded coffee bags, private label programs, or white label solutions. This is not a criticism — it is simply not what they do. If you are a business looking to sell coffee under your own brand, you are looking at the wrong company. EZPZ is the right one.",
  },
  {
    n: "02",
    title: "EZPZ is built for your business goals",
    body: "The Roasters Pack is built to delight individual coffee subscribers. EZPZ is built to help businesses generate revenue from branded coffee. Those are fundamentally different goals, and the products reflect that. EZPZ offers an online design tool, transparent B2B pricing, white label production, and distribution support — all aimed at helping your business grow.",
  },
  {
    n: "03",
    title: "Start selling in under 3 weeks",
    body: "From the moment you start designing your bag on EZPZ to the moment your branded coffee arrives ready to sell is typically 2 to 3 weeks. The Roasters Pack operates on a consumer subscription timeline with no B2B equivalent. If you want a branded coffee product that generates real revenue for your business, EZPZ is the path.",
  },
];

const WHO_CARDS = [
  {
    icon: "🍽️",
    title: "Restaurants and Cafés",
    body: "Serve your own signature blend and sell branded bags at the counter. Turn every table into a touchpoint for your brand.",
  },
  {
    icon: "🏨",
    title: "Hotels and Hospitality",
    body: "Elevate the in-room and lobby experience with custom branded coffee that guests associate with your property.",
  },
  {
    icon: "🛍️",
    title: "Retailers and Boutiques",
    body: "Add a high-margin, repeat-purchase product to your shelves without the complexity of traditional wholesale sourcing.",
  },
  {
    icon: "💪",
    title: "Gyms and Wellness Brands",
    body: "Build a daily habit product around your brand. Custom coffee drives repeat purchases and keeps your name in front of customers every morning.",
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

const isPositive = (val: string) =>
  val.toLowerCase().startsWith("yes") || val === "None" || val.includes("core focus");
const isNegative = (val: string) =>
  val.toLowerCase() === "no" ||
  val.includes("consumer only") ||
  val.includes("Not applicable");

const RoastersPackPage = () => {
  return (
    <div className={styles.page}>

      {/* ── Breadcrumb ── */}
      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <div className={styles.breadcrumbInner}>
          <Link href="/en" className={styles.breadcrumbLink}>Home</Link>
          <span className={styles.breadcrumbSep}>›</span>
          <Link href="/en/compare" className={styles.breadcrumbLink}>Compare</Link>
          <span className={styles.breadcrumbSep}>›</span>
          <span className={styles.breadcrumbCurrent}>EZPZ vs The Roasters Pack</span>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.eyebrow}>EZPZ vs The Roasters Pack</span>
          <h1 className={styles.heroTitle}>
            The Roasters Pack is for coffee lovers. EZPZ is for coffee brands.
          </h1>
          <p className={styles.heroSubtitle}>
            Two completely different products. If you want to discover great Canadian coffee, The Roasters Pack is excellent. If you want to sell coffee under your own brand — that is EZPZ.
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
            The Roasters Pack is one of Canada&apos;s most popular coffee subscription services. Based in Toronto, they curate monthly boxes of specialty coffee from Canadian roasters and deliver them to subscribers across Canada. For coffee enthusiasts who want to discover new roasters, they are genuinely excellent at what they do.
          </p>
          <p className={styles.introText}>
            But The Roasters Pack is a consumer subscription service. They do not offer custom branded bags, white label solutions, private label programs, or any kind of business-to-business coffee service. If you have a restaurant, hotel, boutique, gym, or brand and you want to sell coffee under your own name — The Roasters Pack simply cannot help you.
          </p>
          <p className={styles.introText}>
            EZPZ can. Here is how we compare.
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
                <th className={styles.th}>The Roasters Pack</th>
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
          <span className={styles.eyebrow}>Two products. Two purposes.</span>
          <h2 className={styles.reasonsTitle}>Two products. Two very different purposes.</h2>
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

      {/* ── Who is EZPZ for ── */}
      <section className={styles.who}>
        <div className={styles.whoInner}>
          <span className={styles.eyebrow}>Who we serve</span>
          <h2 className={styles.whoTitle}>EZPZ is built for businesses like yours.</h2>
          <div className={styles.whoGrid}>
            {WHO_CARDS.map((card) => (
              <div key={card.title} className={styles.whoCard}>
                <span className={styles.whoIcon} aria-hidden>{card.icon}</span>
                <h3 className={styles.whoCardTitle}>{card.title}</h3>
                <p className={styles.whoCardBody}>{card.body}</p>
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
          <h2 className={styles.ctaTitle}>Ready to sell coffee under your own brand?</h2>
          <p className={styles.ctaSubtext}>EZPZ is Canada&apos;s only custom coffee platform with no minimums, full design included, and a completely online process.</p>
          <div className={styles.ctaButtons}>
            <Link href="/en/design" className={styles.ctaPrimary}>Design your bag</Link>
            <Link href="/en/contact" className={styles.ctaSecondary}>Get a free quote</Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default RoastersPackPage;
