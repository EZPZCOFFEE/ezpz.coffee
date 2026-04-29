import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

import { BLOG_POSTS } from "../data";
import styles from "./blogPost.module.scss";

export const metadata: Metadata = {
  title: "What Makes Specialty Coffee Traceable? Montreal Coffee Experts Explain | EZPZ",
  description:
    "Learn what farm-to-bag traceability means in the specialty coffee world, why it matters for your Montreal or Toronto brand, and how EZPZ Coffee guarantees full transparency in every bag.",
  alternates: { canonical: "/en/blog/what-makes-specialty-coffee-traceable" },
  openGraph: {
    title: "What Makes Specialty Coffee Traceable? | EZPZ Coffee",
    description:
      "Learn what farm-to-bag traceability means in the specialty coffee world, why it matters for your Montreal or Toronto brand, and how EZPZ Coffee guarantees full transparency in every bag.",
    type: "article",
    url: "https://www.ezpz.coffee/en/blog/what-makes-specialty-coffee-traceable",
    images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "What Makes Specialty Coffee Traceable?" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "What Makes Specialty Coffee Traceable? | EZPZ Coffee",
    description: "Learn what farm-to-bag traceability means and why it matters for your Montreal or Toronto coffee brand.",
    images: ["/assets/banner-01.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "What Makes Specialty Coffee Traceable?",
  "description": "Learn what farm-to-bag traceability means in the specialty coffee world, why it matters for your Montreal or Toronto brand, and how EZPZ Coffee guarantees full transparency.",
  "datePublished": "2026-03-18",
  "author": { "@type": "Person", "name": "EZPZ Coffee Team" },
  "publisher": {
    "@type": "Organization",
    "name": "EZPZ Coffee",
    "url": "https://www.ezpz.coffee",
  },
  "url": "https://www.ezpz.coffee/en/blog/what-makes-specialty-coffee-traceable",
};

const OTHER_POSTS = BLOG_POSTS.filter(
  (p) => p.slug !== "what-makes-specialty-coffee-traceable" && p.published
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
        <span className={styles.heroCategory}>Coffee Education</span>
        <h1 className={styles.heroTitle}>
          What Makes Specialty Coffee Traceable?
        </h1>
        <p className={styles.heroSubtitle}>
          Traceability is one of the most powerful stories you can tell about your coffee brand.
          Here is what it actually means — and why Montreal and Toronto brands are using it to
          stand out.
        </p>
        <div className={styles.heroMeta}>
          <span>March 18, 2026</span>
          <span className={styles.heroMetaDot} />
          <span>5 min read</span>
        </div>
      </div>
    </section>

    {/* ── Article ───────────────────────────────────────────────── */}
    <div className={styles.articleWrapper}>
      <article className={styles.article}>

        <p className={styles.intro}>
          You have probably seen words like <em>single origin</em>, <em>farm-to-cup</em>, or{" "}
          <em>fully traceable</em> on high-end coffee bags in Montreal cafés and Toronto specialty
          shops. But what do they actually mean? And more importantly — why should your brand care?
          In this post, the EZPZ Coffee team breaks down what coffee traceability really means, how
          it is measured, and why it is becoming one of the most important selling points for coffee
          brands across Canada.
        </p>

        <h2 className={styles.h2}>What Is Coffee Traceability?</h2>
        <p className={styles.p}>
          Coffee traceability means being able to follow your coffee&apos;s journey all the way
          from the farm where it was grown to the bag in your customer&apos;s hands.
        </p>
        <p className={styles.p}>At a basic level this means knowing:</p>
        <ul className={styles.ul}>
          <li className={styles.li}>Which country and region the beans came from</li>
          <li className={styles.li}>Which farm or cooperative produced them</li>
          <li className={styles.li}>Who the farmer is</li>
          <li className={styles.li}>When the harvest took place</li>
          <li className={styles.li}>How the beans were processed — washed, natural, or honey</li>
        </ul>
        <p className={styles.p}>
          The opposite of traceable coffee is commodity coffee — blended from multiple unknown
          sources, optimized for price rather than quality or transparency. Most large coffee brands
          that you find in Montreal grocery stores or Toronto supermarkets use commodity coffee.
          Specialty coffee brands use traceable single origins.
        </p>

        <h2 className={styles.h2}>What Is Specialty Coffee?</h2>
        <p className={styles.p}>
          Specialty coffee is a specific designation regulated by the Specialty Coffee Association
          (SCA). To qualify as specialty coffee, beans must score at least 80 out of 100 on a
          standardized cupping evaluation.
        </p>
        <p className={styles.p}>
          This scoring takes into account aroma, flavor, aftertaste, acidity, body, balance,
          sweetness, and uniformity. Only the top coffees in the world reach this threshold. At
          EZPZ Coffee in Montreal, we exclusively source and roast specialty-grade coffees — which
          means every bag we produce starts with beans that have already passed a rigorous quality
          standard.
        </p>

        <h2 className={styles.h2}>Why Does Traceability Matter for Your Montreal or Toronto Brand?</h2>
        <p className={styles.p}>
          If you are building a coffee brand in Montreal, Toronto, or anywhere across Canada,
          traceability is one of your most powerful storytelling tools.
        </p>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <strong>It builds trust:</strong> Montreal and Toronto consumers are increasingly
            skeptical of vague claims. Being able to say <em>this coffee comes from the Yirgacheffe
            region of Ethiopia, harvested in October 2025 by a cooperative of 200 farmers</em> is
            infinitely more compelling than <em>premium blend</em>.
          </li>
          <li className={styles.li}>
            <strong>It justifies your price point:</strong> Traceable, specialty coffee commands
            higher prices — and Canadian customers understand why. If you want to sell at a premium
            in a Montreal boutique or a Toronto restaurant, you need a premium story.
          </li>
          <li className={styles.li}>
            <strong>It aligns with values:</strong> Sustainability, fair trade, and ethical sourcing
            are top priorities for millennial and Gen Z consumers in Montreal and Toronto. A
            traceable supply chain signals that you care about the people behind your product.
          </li>
          <li className={styles.li}>
            <strong>It differentiates you:</strong> Most coffee brands in Canada cannot tell you
            much about where their beans come from. If you can, you immediately stand out on any
            shelf in any city.
          </li>
        </ul>

        <h2 className={styles.h2}>How EZPZ Guarantees Traceability</h2>
        <p className={styles.p}>
          At EZPZ Coffee, roasted in Montreal at Canadian Roasting Society, traceability is not a
          marketing claim — it is a fundamental part of how we source. We work directly with
          producers and importers who provide full documentation on every lot of coffee we purchase.
          This means we know the farm name, the farmer&apos;s name, the harvest date, the
          processing method, and the cupping score for every single origin we carry.
        </p>
        <p className={styles.p}>
          When you order a{" "}
          <Link href="/en/custom-coffee-bags-montreal" className={styles.inlineLink}>custom bag</Link>{" "}
          through EZPZ — whether you are a Montreal restaurant, a Toronto hotel, or a Vancouver
          boutique — you are not getting anonymous commodity coffee. You are getting a specific,
          documented lot of specialty coffee, and we can tell you exactly where it came from.
          You can also explore our{" "}
          <Link href="/en/white-label" className={styles.inlineLink}>white label program</Link>{" "}
          to build a full branded coffee line under your own name.
        </p>

        <h2 className={styles.h2}>The Third Wave Coffee Movement</h2>
        <p className={styles.p}>
          Traceability is a core value of what is known as third-wave coffee — a movement that
          treats coffee the way fine wine is treated: as an agricultural product with terroir,
          complexity, and a story worth telling. It emphasizes direct trade relationships with
          farmers, transparency throughout the supply chain, and a deep respect for the craft of
          both growing and roasting.
        </p>
        <p className={styles.p}>
          Montreal has become one of Canada&apos;s leading third-wave coffee cities — with Café
          Pista, Café Saint-Henri, Micro Espresso, and Café Éclair all earning spots on the
          World&apos;s 100 Best Coffee Shops 2026 list. EZPZ is rooted in the same values. When
          you build your brand with us, you are tapping into a global movement that millions of
          coffee drinkers in Montreal, Toronto, and across Canada are already passionate about.
        </p>

        <h2 className={styles.h2}>What This Means for Your Customers</h2>
        <p className={styles.p}>
          When your branded coffee bag includes origin information — even just a country and region
          — it transforms a commodity product into an experience. Your Montreal or Toronto customers
          are not just drinking coffee. They are drinking a light roast from the highlands of
          Ethiopia, grown at 1,800 metres by farmers who have been cultivating coffee for
          generations.
        </p>
        <p className={styles.p}>
          That story is worth paying for. And it is a story only traceable coffee can tell.
          Ready to put that story on your own bag?{" "}
          <Link href="/en/compare" className={styles.inlineLink}>See how EZPZ compares to other Canadian suppliers.</Link>
        </p>

      </article>
    </div>

    {/* ── CTA Banner ────────────────────────────────────────────── */}
    <section className={styles.cta}>
      <div className={styles.ctaInner}>
        <h2 className={styles.ctaTitle}>Want traceable specialty coffee in your branded bag?</h2>
        <div className={styles.ctaButtons}>
          <Link href="/en/design" className={styles.ctaPrimary}>Design your bag</Link>
          <Link href="/en/coffee" className={styles.ctaSecondary}>See our coffees</Link>
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
