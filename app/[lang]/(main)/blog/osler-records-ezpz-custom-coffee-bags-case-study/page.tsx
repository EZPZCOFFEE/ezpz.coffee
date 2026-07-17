import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

import { BLOG_POSTS } from "../data";
import styles from "../custom-coffee-bags-corporate-gifts-canada/blogPost.module.scss";

export const metadata: Metadata = {
  title: "How Osler Records Launched Their Own House Blend With EZPZ | Case Study",
  description:
    "Osler Records — Toronto's Junction Triangle coffee shop, bar, and record label — partnered with EZPZ Coffee to create their House Blend. Here is the full story.",
  alternates: { canonical: "/en/blog/osler-records-ezpz-custom-coffee-bags-case-study" },
  openGraph: {
    title: "How Osler Records Launched Their Own House Blend With EZPZ | Case Study",
    description:
      "Osler Records — Toronto's Junction Triangle coffee shop, bar, and record label — partnered with EZPZ Coffee to create their House Blend. Here is the full story.",
    type: "article",
    url: "https://www.ezpz.coffee/en/blog/osler-records-ezpz-custom-coffee-bags-case-study",
    images: [
      {
        url: "/assets/blog/osler-records-case-study.png",
        width: 1200,
        height: 1113,
        alt: "Osler Records House Blend — Custom Coffee Bag by EZPZ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Osler Records Launched Their House Blend With EZPZ | Case Study",
    description:
      "Toronto's Junction Triangle music venue and coffee shop created their own branded House Blend with EZPZ. Here is how it happened.",
    images: ["/assets/blog/osler-records-case-study.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "How Osler Records Launched Their Own House Blend With EZPZ",
      description:
        "Osler Records — Toronto's Junction Triangle coffee shop, bar, and record label — partnered with EZPZ Coffee to create their House Blend.",
      datePublished: "2026-07-16",
      author: { "@type": "Organization", name: "EZPZ Coffee Team" },
      publisher: {
        "@type": "Organization",
        name: "EZPZ Coffee",
        url: "https://www.ezpz.coffee",
      },
      image: "https://www.ezpz.coffee/assets/blog/osler-records-case-study.png",
      url: "https://www.ezpz.coffee/en/blog/osler-records-ezpz-custom-coffee-bags-case-study",
      wordCount: 1000,
      about: {
        "@type": "Organization",
        name: "Osler Records",
        url: "https://www.instagram.com/osler.records/",
      },
    },
    {
      "@type": "Organization",
      name: "Osler Records",
      url: "https://www.instagram.com/osler.records/",
      description:
        "Toronto-based coffee shop, cocktail bar, live music venue, and independent record label located at 2A Osler Street in the Junction Triangle.",
    },
  ],
};

const MORE_SLUGS = [
  "cafe-public-ezpz-custom-coffee-bags-case-study",
  "private-label-coffee-canada-complete-guide",
  "how-to-choose-private-label-coffee-supplier-canada",
];
const morePosts = BLOG_POSTS.filter((p) => MORE_SLUGS.includes(p.slug));

const Page = () => (
  <div className={styles.page}>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />

    {/* ── Hero ──────────────────────────────────────────────────── */}
    <section className={styles.hero}>
      <div className={styles.heroInner}>
        <span className={styles.heroCategory}>Client Story</span>
        <h1 className={styles.heroTitle}>
          How Osler Records Launched Their Own House Blend With EZPZ
        </h1>
        <p className={styles.heroSubtitle}>
          From a converted aluminum factory in Toronto&apos;s Junction Triangle to a branded coffee bag on the shelf. How one of the city&apos;s most original venues created a House Blend as distinctive as the place itself.
        </p>
        <div className={styles.heroMeta}>
          <span>July 16, 2026</span>
          <span className={styles.heroMetaDot} />
          <span>5 min read</span>
        </div>
      </div>
    </section>

    {/* ── TL;DR ─────────────────────────────────────────────────── */}
    <div className={styles.tldr} role="note" aria-label="Article summary">
      <strong className={styles.tldrLabel}>TL;DR</strong>
      <p className={styles.tldrText}>
        <a
          href="https://www.instagram.com/osler.records/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.inlineLink}
        >
          Osler Records
        </a>
        {" "}— Toronto&apos;s Junction Triangle coffee shop, cocktail bar, live music venue, and independent record label — partnered with EZPZ Coffee to launch their House Blend: a 225g specialty coffee made from 75% Brazilian and 25% Colombian beans, fully washed, whole bean. Served in-house and sold to customers in a label as bold and distinctive as the venue itself.
      </p>
    </div>

    {/* ── Article ───────────────────────────────────────────────── */}
    <div className={styles.articleWrapper}>
      <article className={styles.article}>

        <p className={styles.intro}>
          Some brands have an identity so distinct that their coffee has to match it.{" "}
          <a
            href="https://www.instagram.com/osler.records/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.inlineLink}
          >
            Osler Records
          </a>
          {" "}— part coffee shop, part cocktail bar, part live music venue, part independent record label — is one of them. When they decided to launch their own branded coffee bags, we knew this one was going to look good.
        </p>

        {/* ── Who Is Osler Records ── */}
        <h2 className={styles.h2}>Who Is Osler Records?</h2>
        <p className={styles.p}>
          Osler Records opened in 2026 on Osler Street in Toronto&apos;s Junction Triangle, inside a former aluminum factory. The space was founded by Joe Ferrari (formerly of Sony Music Canada), Ian McGrenaghan (a serial Toronto restaurateur), and Roland Broere (artist and manager) — three west-end Toronto residents who wanted to build something that did not fit neatly into any existing category.
        </p>
        <p className={styles.p}>
          The result is a venue that starts serving espresso at 9 in the morning and is still going at 2 in the morning on weekends. Staff are mostly musicians. The in-house record label presses limited vinyl. Artists drop in, regular customers become regulars for life, and the line between a coffee shop, a bar, and a venue gets blurred in exactly the right way.
        </p>
        <p className={styles.p}>
          It is a genuine third space — the kind that builds a community around it rather than just serving one. And like everything else at Osler Records, the coffee was never going to be an afterthought.
        </p>

        {/* ── The Product ── */}
        <h2 className={styles.h2}>The Product — House Blend</h2>
        <p className={styles.p}>
          When the Osler Records team decided they wanted their own branded coffee bags to sell to customers, the brief was exactly what you would expect from this venue: direct, confident, and built to last. A house blend that could stand behind the name they were putting on it.
        </p>
        <p className={styles.p}>
          The result is the Osler Records House Blend. A 225g bag of whole bean,{" "}
          <Link href="/en/coffee" className={styles.inlineLink}>
            specialty-grade
          </Link>
          {" "}coffee — 75% Brazil, 25% Colombia, fully washed — developed for the kind of versatility a venue like Osler needs. Smooth and balanced enough for the morning espresso crowd. Distinctive enough to earn a place on the shelf of a record shop bar.
        </p>

        <div className={styles.addressCard} style={{ background: "#b8c832", borderColor: "#a0b020" }}>
          <span className={styles.addressCardLabel} style={{ color: "#1a1a1a" }}>House Blend — Product Details</span>
          <span className={styles.addressCardLine} style={{ color: "#1a1a1a" }}>Origin: 75% Brazil // 25% Colombia</span>
          <span className={styles.addressCardLine} style={{ color: "#1a1a1a" }}>Process: Fully Washed</span>
          <span className={styles.addressCardLine} style={{ color: "#1a1a1a" }}>Weight: 225g · Whole Beans</span>
          <span className={styles.addressCardLine} style={{ color: "#1a1a1a" }}>Roasted in Montreal at Canadian Roasting Society</span>
        </div>

        <div style={{ margin: "2.5rem 0", textAlign: "center" }}>
          <img
            src="/assets/blog/osler-records-case-study.png"
            alt="Osler Records House Blend — Custom Coffee Label by EZPZ Coffee"
            style={{ maxWidth: "420px", width: "100%", borderRadius: "6px", display: "inline-block" }}
          />
        </div>

        <p className={styles.p}>
          The label design is unmistakably Osler Records: acid green, bold chunky type, and the handwritten signature logo that makes the whole thing feel like a limited-edition record release. It looks exactly like a product from this venue should look.
        </p>

        {/* ── Why EZPZ ── */}
        <h2 className={styles.h2}>Why Osler Records Chose EZPZ</h2>
        <p className={styles.p}>
          When you are running a venue that touches music, food, drink, community, and a live record label simultaneously, you do not have time to become a coffee sourcing specialist as well. Osler Records needed a partner who could handle everything — blend development, specialty-grade coffee, custom design, custom packaging — without requiring them to manage multiple suppliers or commit to inventory they were not ready for.
        </p>
        <p className={styles.p}>
          EZPZ handles it all as one finished product. The sourcing, the blend development, the roasting at{" "}
          <a
            href="https://www.canadianroastingsociety.ca"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.inlineLink}
          >
            Canadian Roasting Society
          </a>
          {" "}in Montreal, and the packaging in their custom-designed label.{" "}
          <Link href="/en/custom-coffee-bags-no-minimum-canada" className={styles.inlineLink}>
            Zero minimum order
          </Link>
          {" "}meant Osler could launch their House Blend at exactly the right scale for the venue — not whatever a supplier&apos;s MOQ demanded.
        </p>

        {/* ── How It Came Together ── */}
        <h2 className={styles.h2}>How It Came Together</h2>
        <p className={styles.p}>
          The process matched the venue&apos;s approach to everything else it does: clear, direct, no unnecessary complexity. Osler came with a vision — a house blend they could be proud to serve in-house and sell to customers who wanted to take the experience home with them.
        </p>
        <p className={styles.p}>
          We developed the House Blend from our curated selection of traceable origins: a 75/25 split of Brazilian and Colombian{" "}
          <Link href="/en/coffee" className={styles.inlineLink}>
            specialty-grade beans
          </Link>
          , both fully washed, designed to deliver a smooth and balanced cup with the versatility to work across espresso and filter brewing. The roast profile was developed at Canadian Roasting Society in Montreal to bring out the natural structure of the blend — approachable without sacrificing the quality standards the Osler team expected.
        </p>
        <p className={styles.p}>
          The design was developed to match Osler Records&apos; existing brand language. The acid green, the bold display type, the handwritten logo. A label that looks like it belongs in the same world as the records on the shelf.
        </p>

        <div className={styles.pullQuote}>
          <p className={styles.pullQuoteText}>
            &ldquo;From brief to finished product in weeks — roasted in Montreal, branded in their identity, ready to serve and sell at 2A Osler Street.&rdquo;
          </p>
        </div>

        {/* ── The Bigger Picture ── */}
        <h2 className={styles.h2}>The Bigger Picture</h2>
        <p className={styles.p}>
          The Osler Records House Blend now lives on the shelf and behind the bar at 2A Osler Street. The customer who discovers it over a morning latte can take a bag home. The brand extends beyond the physical space and into the kitchens — and mornings — of the people who love the venue.
        </p>
        <p className={styles.p}>
          This is exactly what a branded coffee product should do for a hospitality business. It turns a moment at your venue into something that follows the customer home. Every morning, they make a cup and remember where they got it.
        </p>

        {/* ── What This Means for Your Brand ── */}
        <h2 className={styles.h2}>What This Means for Your Brand</h2>
        <p className={styles.p}>
          If your business has a distinct identity — a restaurant, a music venue, a bar, a boutique, a gym, anything with a real brand and a real audience — a custom coffee bag is one of the most natural extensions of that identity you can make.
        </p>
        <p className={styles.p}>
          Osler Records did not invest in roasting infrastructure. They did not meet a 500-unit minimum. They came to EZPZ with a vision and we developed the blend, roasted it in Montreal, packaged it in their brand, and delivered a finished product ready to serve and sell — in weeks.
        </p>
        <p className={styles.p}>
          <Link href="/en/custom-coffee-bags-no-minimum-canada" className={styles.inlineLink}>
            Zero minimum order.
          </Link>
          {" "}Full{" "}
          <Link href="/en/design" className={styles.inlineLink}>
            custom design
          </Link>
          {" "}always included.{" "}
          <Link href="/en/coffee" className={styles.inlineLink}>
            Specialty grade coffee
          </Link>
          {" "}from traceable origins. Roasted fresh in Montreal at one of Canada&apos;s finest specialty coffee facilities.
        </p>
        <p className={styles.p}>
          Your brand deserves the same. Let us build it together.
        </p>

      </article>
    </div>

    {/* ── CTA Banner ────────────────────────────────────────────── */}
    <section className={styles.cta}>
      <div className={styles.ctaInner}>
        <h2 className={styles.ctaTitle}>
          Ready to launch your own branded coffee like Osler Records?
        </h2>
        <div className={styles.ctaButtons}>
          <Link href="/en/design" className={styles.ctaPrimary}>
            Design your bag
          </Link>
          <Link href="/en/contact" className={styles.ctaSecondary}>
            Get a free quote
          </Link>
        </div>
      </div>
    </section>

    {/* ── More from the blog ────────────────────────────────────── */}
    <section className={styles.more}>
      <div className={styles.moreInner}>
        <h2 className={styles.moreTitle}>More from the blog</h2>
        <div className={styles.moreGrid}>
          {morePosts.map((post) => (
            <Link key={post.slug} href={`/en/blog/${post.slug}`} className={styles.moreCard}>
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
