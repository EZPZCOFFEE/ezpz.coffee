import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

import { BLOG_POSTS } from "../data";
import styles from "./blogPost.module.scss";

export const metadata: Metadata = {
  title: "Custom Coffee Bags vs Pre-Packaged Coffee: What's Right for Your Business? | EZPZ",
  description:
    "Thinking about selling coffee at your Montreal or Toronto business? We break down the pros and cons of custom branded bags vs pre-packaged coffee so you can make the best decision for your brand.",
  alternates: { canonical: "/en/blog/custom-coffee-bags-vs-pre-packaged-coffee" },
  openGraph: {
    title: "Custom Coffee Bags vs Pre-Packaged Coffee | EZPZ Coffee",
    description:
      "Thinking about selling coffee at your Montreal or Toronto business? We break down the pros and cons so you can make the best decision for your brand.",
    type: "article",
    url: "https://www.ezpz.coffee/en/blog/custom-coffee-bags-vs-pre-packaged-coffee",
    images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "Custom Coffee Bags vs Pre-Packaged Coffee" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Coffee Bags vs Pre-Packaged Coffee | EZPZ Coffee",
    description: "Custom branded bags vs pre-packaged coffee — an honest breakdown for Montreal and Toronto business owners.",
    images: ["/assets/banner-01.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Custom Coffee Bags vs. Pre-Packaged Coffee: What's Right for Your Business?",
  "description": "An honest breakdown of custom branded coffee bags vs pre-packaged coffee for Canadian business owners in Montreal, Toronto, and beyond.",
  "datePublished": "2026-02-25",
  "author": { "@type": "Person", "name": "EZPZ Coffee Team" },
  "publisher": {
    "@type": "Organization",
    "name": "EZPZ Coffee",
    "url": "https://www.ezpz.coffee",
  },
  "url": "https://www.ezpz.coffee/en/blog/custom-coffee-bags-vs-pre-packaged-coffee",
};

const OTHER_POSTS = BLOG_POSTS.filter(
  (p) => p.slug !== "custom-coffee-bags-vs-pre-packaged-coffee" && p.published
);

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
          Custom Coffee Bags vs. Pre-Packaged Coffee: What&apos;s Right for Your Business?
        </h1>
        <p className={styles.heroSubtitle}>
          If you are thinking about adding coffee to your Montreal or Toronto business, you have
          two main options. Here is an honest breakdown of both — so you can make the right call.
        </p>
        <div className={styles.heroMeta}>
          <span>February 25, 2026</span>
          <span className={styles.heroMetaDot} />
          <span>5 min read</span>
        </div>
      </div>
    </section>

    {/* ── Article ───────────────────────────────────────────────── */}
    <div className={styles.articleWrapper}>
      <article className={styles.article}>

        <p className={styles.intro}>
          Coffee is one of the most profitable add-on products a business can sell. Whether you are
          a Montreal restaurant, a Toronto boutique, a Quebec City hotel, or a Vancouver gym —
          adding coffee to your lineup can generate real revenue, strengthen your brand, and delight
          your customers. But when it comes to <em>how</em> you sell coffee, there are two very
          different paths. You can sell pre-packaged coffee from an existing brand, or you can sell
          coffee under your own brand. Here is everything you need to know to make the right choice
          for your Canadian business.
        </p>

        <h2 className={styles.h2}>Option 1 — Pre-Packaged Coffee From an Existing Brand</h2>
        <p className={styles.p}>
          This means buying coffee wholesale from an established roaster and reselling it at your
          location in its original packaging under their brand name.
        </p>

        <h3 className={styles.h3}>Pros</h3>
        <ul className={styles.ul}>
          <li className={styles.li}>Zero design work required</li>
          <li className={styles.li}>Low upfront commitment</li>
          <li className={styles.li}>Established brand recognition</li>
          <li className={styles.li}>Simple to set up quickly</li>
        </ul>

        <h3 className={styles.h3}>Cons</h3>
        <ul className={styles.ul}>
          <li className={styles.li}>You are building someone else&apos;s brand, not yours</li>
          <li className={styles.li}>Lower margins since you are a reseller, not a brand owner</li>
          <li className={styles.li}>
            No differentiation — your Montreal or Toronto competitor can sell the exact same product
          </li>
          <li className={styles.li}>No storytelling or brand connection for your customers</li>
          <li className={styles.li}>Entirely dependent on the supplier&apos;s quality and availability</li>
        </ul>

        <p className={styles.p}>
          This approach works fine if you just need coffee on the shelf quickly. But if you have a
          strong brand and want coffee to be part of your identity — whether you are a Plateau
          restaurant or a King Street West boutique — pre-packaged reselling is a missed
          opportunity.
        </p>

        <h2 className={styles.h2}>Option 2 — Custom Branded Coffee Bags</h2>
        <p className={styles.p}>
          This means working with a roaster like EZPZ Coffee in Montreal to produce coffee under
          your own brand name, in your own custom packaging, with your own design. For restaurants,
          hotels, and retailers ready to go further,{" "}
          <Link href="/en/white-label" className={styles.inlineLink}>white label solutions</Link>{" "}
          extend this to ready-to-drink and Nespresso-compatible capsules as well.
        </p>

        <h3 className={styles.h3}>Pros</h3>
        <ul className={styles.ul}>
          <li className={styles.li}>
            Your brand is on the product — every bag is a marketing touchpoint
          </li>
          <li className={styles.li}>
            Higher perceived value — branded products command premium prices
          </li>
          <li className={styles.li}>
            Stronger customer loyalty — people associate the great coffee experience with you
          </li>
          <li className={styles.li}>
            Complete control over the story you tell — origin, roast, and tasting notes
          </li>
          <li className={styles.li}>
            No minimums with EZPZ — start as small as you want
          </li>
          <li className={styles.li}>
            Design and customization included in the price
          </li>
        </ul>

        <h3 className={styles.h3}>Cons</h3>
        <ul className={styles.ul}>
          <li className={styles.li}>
            Slightly more upfront work to choose your beans and approve your design
          </li>
          <li className={styles.li}>
            Slightly longer lead time on your first order — 2 to 3 weeks
          </li>
        </ul>

        <p className={styles.p}>
          The cons are minor. The upfront work takes a few hours, not weeks. And the lead time is
          a one-time thing — once your design is approved, repeat orders are fast. We produce custom
          bags for Montreal restaurants, Toronto hotels, Vancouver boutiques, and brands across
          Canada every single week.
        </p>

        <h2 className={styles.h2}>The Numbers — Why Custom Wins on Margin</h2>
        <p className={styles.p}>
          Here is a rough comparison for Canadian businesses:
        </p>
        <div className={styles.comparisonGrid}>
          <div className={styles.comparisonCard}>
            <span className={styles.comparisonLabel}>Pre-packaged reselling</span>
            <p className={styles.comparisonBody}>
              Buy at $12–$18 wholesale, sell for $18–$22. Margin: <strong>$4–$6 per bag.</strong>
            </p>
          </div>
          <div className={styles.comparisonCard}>
            <span className={styles.comparisonLabel + " " + styles.comparisonLabelAccent}>Custom branded bags</span>
            <p className={styles.comparisonBody}>
              Produce at a competitive per-unit cost, sell for $22–$32 under your own brand.
              Margin: <strong>$10–$16 per bag.</strong>
            </p>
          </div>
        </div>
        <p className={styles.p}>
          Custom branded coffee can deliver 2 to 3 times the margin of reselling — because your
          brand adds value that justifies a higher price point. Montreal and Toronto customers are
          willing to pay more for a product that feels local, personal, and premium.
        </p>

        <h2 className={styles.h2}>When Pre-Packaged Makes Sense</h2>
        <p className={styles.p}>
          To be fair, there are scenarios where pre-packaged coffee is the right call:
        </p>
        <ul className={styles.ul}>
          <li className={styles.li}>
            If you are just starting out and want to test whether coffee sells at your location
            before investing in branding
          </li>
          <li className={styles.li}>
            If you need coffee immediately and cannot wait 2 to 3 weeks
          </li>
          <li className={styles.li}>
            If coffee is a very minor part of your business and brand alignment does not matter yet
          </li>
        </ul>
        <p className={styles.p}>
          In these cases, start with pre-packaged and switch to custom once you have validated
          demand. Many of our best EZPZ clients — from Montreal restaurants to Toronto retail brands
          — started that way.
        </p>

        <h2 className={styles.h2}>When Custom Branded Coffee Is the Clear Winner</h2>
        <p className={styles.p}>Custom branded coffee is the right move when:</p>
        <ul className={styles.ul}>
          <li className={styles.li}>You have a strong brand and want everything to reflect it</li>
          <li className={styles.li}>You want to maximize margins on every bag you sell</li>
          <li className={styles.li}>
            You are in hospitality, retail, or food and beverage in Montreal, Toronto, Quebec, or
            anywhere across Canada where presentation matters
          </li>
          <li className={styles.li}>You want to offer a unique product your competitors cannot copy</li>
          <li className={styles.li}>You are thinking about corporate gifting, events, or seasonal collections</li>
          <li className={styles.li}>You want to build a real coffee brand, not just sell someone else&apos;s</li>
        </ul>

        <h2 className={styles.h2}>The Bottom Line</h2>
        <p className={styles.p}>
          If you are serious about your brand and your margins, custom branded coffee bags are the
          obvious choice for any Canadian business. The barrier to entry is lower than most people
          think — especially with no minimums, included design, and a simple online ordering process
          at{" "}
          <Link href="/en/design" className={styles.inlineLink}>ezpz.coffee/en/design</Link>.
        </p>
        <p className={styles.p}>
          Pre-packaged coffee has its place, but it is a short-term solution. Custom branded coffee
          is a long-term brand asset. Whether you are in{" "}
          <Link href="/en/custom-coffee-bags-montreal" className={styles.inlineLink}>Montreal</Link>,{" "}
          <Link href="/en/custom-coffee-bags-toronto" className={styles.inlineLink}>Toronto</Link>,{" "}
          Quebec City, or Vancouver — the math and the brand logic both point in the same direction.
          Not sure which supplier to choose?{" "}
          <Link href="/en/compare" className={styles.inlineLink}>Compare EZPZ to every competitor.</Link>
        </p>

      </article>
    </div>

    {/* ── CTA Banner ────────────────────────────────────────────── */}
    <section className={styles.cta}>
      <div className={styles.ctaInner}>
        <h2 className={styles.ctaTitle}>
          Ready to stop reselling and start building your own coffee brand?
        </h2>
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
          {OTHER_POSTS.map((post) => (
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
