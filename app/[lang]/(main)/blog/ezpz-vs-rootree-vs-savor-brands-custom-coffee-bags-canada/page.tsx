import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

import { BLOG_POSTS } from "../data";
import styles from "./blogPost.module.scss";

const SLUG = "ezpz-vs-rootree-vs-savor-brands-custom-coffee-bags-canada";

export const metadata: Metadata = {
  title: "EZPZ vs Rootree vs Savor Brands: Custom Coffee Bags Canada Compared",
  description:
    "Comparing custom coffee bag options in Canada? Here is how EZPZ Coffee differs from Rootree and Savor Brands — and why Canadian brands are choosing EZPZ.",
  alternates: { canonical: `/en/blog/${SLUG}` },
  openGraph: {
    title: "EZPZ vs Rootree vs Savor Brands: Custom Coffee Bags Canada Compared",
    description:
      "Comparing custom coffee bag options in Canada? Here is how EZPZ Coffee differs from Rootree and Savor Brands — and why Canadian brands are choosing EZPZ.",
    type: "article",
    url: `https://www.ezpz.coffee/en/blog/${SLUG}`,
    images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "EZPZ vs Rootree vs Savor Brands — Custom Coffee Bags Canada" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "EZPZ vs Rootree vs Savor Brands: Custom Coffee Bags Canada Compared",
    description: "Two types of custom coffee bag companies exist in Canada. Only one provides the coffee AND the bag.",
    images: ["/assets/banner-01.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "EZPZ vs Rootree vs Savor Brands: What's the Difference?",
  description:
    "Comparing custom coffee bag options in Canada — how EZPZ Coffee differs from Rootree and Savor Brands and why Canadian brands are choosing EZPZ.",
  datePublished: "2026-05-18",
  author: { "@type": "Person", name: "EZPZ Coffee Team" },
  publisher: {
    "@type": "Organization",
    name: "EZPZ Coffee",
    url: "https://www.ezpz.coffee",
  },
  url: `https://www.ezpz.coffee/en/blog/${SLUG}`,
};

const OTHER_POSTS = BLOG_POSTS.filter((p) => p.slug !== SLUG && p.published);

const COMPARISON_ROWS = [
  { feature: "Coffee included",    ezpz: "Yes",        rootree: "No",          savor: "No",          ezpzYes: true },
  { feature: "Minimum order",      ezpz: "Zero",       rootree: "2,000 units", savor: "2,000 units",  ezpzYes: true },
  { feature: "Design included",    ezpz: "Yes, free",  rootree: "Extra cost",  savor: "Extra cost",   ezpzYes: true },
  { feature: "Lead time",          ezpz: "2–3 weeks",  rootree: "5–7 weeks",   savor: "5–7 weeks",    ezpzYes: true },
  { feature: "Roasted in Canada",  ezpz: "Yes, Montreal", rootree: "N/A",      savor: "N/A",          ezpzYes: true },
  { feature: "Full service",       ezpz: "Yes",        rootree: "No",          savor: "No",           ezpzYes: true },
];

const Page = () => (
  <div className={styles.page}>

    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />

    {/* ── Hero ──────────────────────────────────────────────────── */}
    <section className={styles.hero}>
      <div className={styles.heroInner}>
        <span className={styles.heroCategory}>Business Tips</span>
        <h1 className={styles.heroTitle}>
          EZPZ vs Rootree vs Savor Brands: What&apos;s the Difference?
        </h1>
        <p className={styles.heroSubtitle}>
          All three sell custom coffee bags in Canada. Only one fills them with specialty coffee too.
        </p>
        <div className={styles.heroMeta}>
          <span>May 18, 2026</span>
          <span className={styles.heroMetaDot} />
          <span>5 min read</span>
        </div>
      </div>
    </section>

    {/* ── TL;DR ─────────────────────────────────────────────────── */}
    <div className={styles.tldr} role="note" aria-label="Article summary">
      <strong className={styles.tldrLabel}>TL;DR</strong>
      <p className={styles.tldrText}>
        Rootree and Savor Brands sell you the bag. You still need to find your own coffee, roaster,
        and supply chain — with minimums of 2,000 units. EZPZ provides the specialty coffee, the
        roasting, and the custom branded bag, all in one order, with zero minimum.
      </p>
    </div>

    {/* ── Article ───────────────────────────────────────────────── */}
    <div className={styles.articleWrapper}>
      <article className={styles.article}>

        <p className={styles.intro}>
          When Canadian businesses search for custom coffee bags, they typically find two very
          different types of companies. The first type sells packaging — beautiful, custom-printed
          bags that you fill yourself. The second type provides everything: the coffee, the roasting,
          and the branded packaging, all in one place. Rootree and Savor Brands are the first type.
          EZPZ is the second. Understanding the difference will save you a lot of time, money, and
          logistical headaches.
        </p>

        <h2 className={styles.h2}>What Rootree Does</h2>
        <p className={styles.p}>
          Rootree is a Canadian packaging company that prints custom coffee bags. They are excellent
          at what they do — beautiful bags, sustainable materials, compostable options. If you are a
          roaster who already has beans and just needs premium packaging, Rootree is a legitimate
          choice.
        </p>
        <p className={styles.p}>
          But they sell you the bag only. You still need to source your own coffee, find your own
          roaster, and manage your own supply chain. Minimum orders at Rootree start at 2,000 units
          per SKU with 5 to 7 week lead times. For a restaurant, hotel, or brand that does not
          already have a roasting partner, this means Rootree is only the first step in a much
          longer process.
        </p>

        <h2 className={styles.h2}>What Savor Brands Does</h2>
        <p className={styles.p}>
          Savor Brands is another Canadian packaging company focused on compostable coffee bags.
          Like Rootree, they specialize in the packaging side of the equation — not the coffee
          itself. You bring your own beans, they print your bag. The quality and sustainability
          credentials are real.
        </p>
        <p className={styles.p}>
          Also like Rootree, they require minimum orders of 2,000 units with lead times of 5 to 7
          weeks. And again — they sell you the packaging. The coffee, the sourcing, the roasting,
          and the logistics are your problem to figure out separately.
        </p>

        <h2 className={styles.h2}>What EZPZ Does Differently</h2>
        <p className={styles.p}>
          EZPZ is not a packaging company. We are a full-service coffee brand builder.
        </p>
        <p className={styles.p}>
          We provide everything: the specialty-grade coffee sourced from traceable farms and scored
          80+ on the SCA scale, the roasting at{" "}
          <Link href="/en/blog/canadian-roasting-society-montreal-best-roaster" className={styles.inlineLink}>
            Canadian Roasting Society in Montreal
          </Link>
          , and the custom branded bag — all in one order. No roaster to find. No supply chain to
          manage. No minimum order to hit. You can start with a single bag.
        </p>
        <p className={styles.p}>
          For Canadian restaurants, hotels, boutiques, corporate offices, and any brand that wants
          to sell coffee under their own name without the operational complexity — EZPZ is the only
          option that handles everything end-to-end.
        </p>

        <h2 className={styles.h2}>The Key Differences — Side by Side</h2>

        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead className={styles.thead}>
              <tr>
                <th className={styles.th}>Feature</th>
                <th className={`${styles.th} ${styles.thEzpz}`}>EZPZ</th>
                <th className={styles.th}>Rootree</th>
                <th className={styles.th}>Savor Brands</th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON_ROWS.map((row) => (
                <tr key={row.feature} className={styles.tr}>
                  <td className={`${styles.td} ${styles.tdFeature}`}>{row.feature}</td>
                  <td className={`${styles.td} ${styles.tdEzpz} ${row.ezpz === "Yes" || row.ezpz === "Zero" || row.ezpz === "Yes, free" || row.ezpz === "Yes, Montreal" ? styles.tdYes : ""}`}>
                    {row.ezpz}
                  </td>
                  <td className={`${styles.td} ${row.rootree === "No" || row.rootree === "N/A" || row.rootree === "Extra cost" ? styles.tdNo : ""}`}>
                    {row.rootree}
                  </td>
                  <td className={`${styles.td} ${row.savor === "No" || row.savor === "N/A" || row.savor === "Extra cost" ? styles.tdNo : ""}`}>
                    {row.savor}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className={styles.h2}>Which One Is Right for You?</h2>
        <p className={styles.p}>
          If you are an established coffee roaster who already has beans and just needs
          packaging — Rootree and Savor Brands are excellent options. They are serious companies
          with serious products. We have no issue saying that.
        </p>
        <p className={styles.p}>
          But if you are a restaurant, hotel, boutique, gym, real estate office, corporate brand,
          or any business that wants to sell coffee under your own name without sourcing beans,
          finding a roaster, or managing a supply chain — EZPZ is the only option that does
          everything for you with zero minimum order.
        </p>
        <p className={styles.p}>
          The difference is not just convenience. It is whether you can actually launch. For most
          non-roaster businesses, having to source coffee separately makes Rootree and Savor Brands
          effectively inaccessible. With EZPZ, you can have{" "}
          <Link href="/en/services/custom-coffee-bags" className={styles.inlineLink}>
            your branded specialty coffee
          </Link>{" "}
          in 2 to 3 weeks, designed and delivered, with no supply chain to build.
        </p>

      </article>
    </div>

    {/* ── CTA Banner ────────────────────────────────────────────── */}
    <section className={styles.cta}>
      <div className={styles.ctaInner}>
        <h2 className={styles.ctaTitle}>Ready for the full-service option?</h2>
        <div className={styles.ctaButtons}>
          <Link href="/en/design" className={styles.ctaPrimary}>Design your bag</Link>
          <Link href="/en/contact" className={styles.ctaSecondary}>Get a free quote</Link>
        </div>
      </div>
    </section>

    {/* ── More from the blog ────────────────────────────────────── */}
    <section className={styles.more}>
      <div className={styles.moreInner}>
        <h2 className={styles.moreTitle}>More from the blog</h2>
        <div className={styles.moreGrid}>
          {OTHER_POSTS.slice(0, 3).map((post) => (
            <Link
              key={post.slug}
              href={`/en/blog/${post.slug}`}
              className={styles.moreCard}
            >
              <div className={styles.moreCardImage}>
                <img src={post.image} alt={post.title} loading="lazy" className={styles.moreCardImg} />
              </div>
              <div className={styles.moreCardBody}>
                <span className={styles.moreCardCategory} style={{ color: post.categoryColor }}>
                  {post.category}
                </span>
                <h3 className={styles.moreCardTitle}>{post.title}</h3>
                <p className={styles.moreCardExcerpt}>{post.excerpt}</p>
                <div className={styles.moreCardFooter}>
                  <span className={styles.moreCardDate}>{post.date}</span>
                  <span className={styles.moreCardReadMore}>
                    Read more <ArrowRight size={12} weight="bold" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>

  </div>
);

export default Page;
