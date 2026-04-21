"use client";

import { ArrowRight } from "@phosphor-icons/react";
import Link from "next/link";
import { useLocale } from "next-intl";

import { BLOG_POSTS } from "../data";
import styles from "../_components/blogPost.module.scss";

const PostContent = () => {
  const locale = useLocale();
  const otherPosts = BLOG_POSTS.filter((p) => p.slug !== "what-makes-specialty-coffee-traceable");

  return (
    <div className={styles.page}>

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroAngle} />
        <div className={styles.heroInner}>
          <div className={styles.heroMeta}>
            <span className={styles.heroCategory} style={{ color: "#2d8a2d", background: "rgba(45,74,45,0.15)" }}>Coffee Education</span>
            <span className={styles.heroDivider} />
            <span className={styles.heroDate}>March 18, 2026</span>
            <span className={styles.heroDivider} />
            <span className={styles.heroReadTime}>5 min read</span>
          </div>
          <h1 className={styles.heroTitle}>
            What Makes Specialty Coffee Traceable?
          </h1>
          <p className={styles.heroSubtitle}>
            Traceability is one of the most powerful stories you can tell about your coffee brand. Here&apos;s what it actually means — and why it matters.
          </p>
        </div>
      </section>

      {/* ── Article ──────────────────────────────────────────── */}
      <article className={styles.article}>
        <div className={styles.articleInner}>

          {/* Intro */}
          <p className={styles.intro}>
            You&apos;ve probably seen words like &apos;single origin&apos;, &apos;farm-to-cup&apos;, or &apos;fully traceable&apos; on high-end coffee bags. But what do they actually mean? And more importantly — why should your brand care? In this post, we break down what coffee traceability really means, how it&apos;s measured, and why it&apos;s becoming one of the most important selling points for coffee brands in Canada.
          </p>

          {/* What is traceability */}
          <section className={styles.section}>
            <h2 className={styles.h2}>What Is Coffee Traceability?</h2>
            <p className={styles.p}>
              Coffee traceability means being able to follow your coffee&apos;s journey all the way from the farm where it was grown, to the bag in your customer&apos;s hands.
            </p>
            <p className={styles.p}>At a basic level, this means knowing:</p>
            <ul className={styles.ul}>
              <li className={styles.li}>Which country and region the beans came from</li>
              <li className={styles.li}>Which farm or cooperative produced them</li>
              <li className={styles.li}>Who the farmer is</li>
              <li className={styles.li}>When the harvest took place</li>
              <li className={styles.li}>How the beans were processed (washed, natural, honey)</li>
            </ul>
            <p className={styles.p}>
              The opposite of traceable coffee is commodity coffee — blended from multiple unknown sources, optimized for price rather than quality or transparency.
            </p>
          </section>

          {/* What is specialty */}
          <section className={styles.section}>
            <h2 className={styles.h2}>What Is Specialty Coffee?</h2>
            <p className={styles.p}>
              Specialty coffee is a specific designation regulated by the Specialty Coffee Association (SCA). To qualify as specialty coffee, beans must score at least 80 out of 100 on a standardized cupping (tasting) evaluation.
            </p>
            <p className={styles.p}>This scoring takes into account:</p>
            <ul className={styles.ul}>
              <li className={styles.li}>Aroma</li>
              <li className={styles.li}>Flavor</li>
              <li className={styles.li}>Aftertaste</li>
              <li className={styles.li}>Acidity</li>
              <li className={styles.li}>Body</li>
              <li className={styles.li}>Balance</li>
              <li className={styles.li}>Sweetness</li>
              <li className={styles.li}>Uniformity</li>
            </ul>
            <p className={styles.p}>
              Only the top coffees in the world reach this threshold. At EZPZ, we exclusively source and roast specialty-grade coffees — which means every bag we produce starts with beans that have already passed a rigorous quality standard.
            </p>
          </section>

          {/* Why it matters for your brand */}
          <section className={styles.section}>
            <h2 className={styles.h2}>Why Does Traceability Matter for Your Brand?</h2>
            <p className={styles.p}>
              If you&apos;re building a coffee brand, traceability is one of your most powerful storytelling tools. Here&apos;s why:
            </p>
            <div className={styles.channelList}>
              <div className={styles.channel}>
                <span className={styles.channelLabel}>It builds trust</span>
                <p className={styles.channelBody}>Consumers are increasingly skeptical of vague claims. Being able to say &ldquo;this coffee comes from the Yirgacheffe region of Ethiopia, harvested in October 2025 by a cooperative of 200 farmers&rdquo; is infinitely more compelling than &ldquo;premium blend.&rdquo;</p>
              </div>
              <div className={styles.channel}>
                <span className={styles.channelLabel}>It justifies your price point</span>
                <p className={styles.channelBody}>Traceable, specialty coffee commands higher prices — and customers understand why. If you want to sell at a premium, you need a premium story.</p>
              </div>
              <div className={styles.channel}>
                <span className={styles.channelLabel}>It aligns with values</span>
                <p className={styles.channelBody}>Sustainability, fair trade, and ethical sourcing are top priorities for millennial and Gen Z consumers. A traceable supply chain signals that you care about the people behind your product.</p>
              </div>
              <div className={styles.channel}>
                <span className={styles.channelLabel}>It differentiates you</span>
                <p className={styles.channelBody}>Most coffee brands can&apos;t tell you much about where their beans come from. If you can, you immediately stand out.</p>
              </div>
            </div>
          </section>

          {/* How EZPZ guarantees it */}
          <section className={styles.section}>
            <h2 className={styles.h2}>How EZPZ Guarantees Traceability</h2>
            <p className={styles.p}>
              At EZPZ, traceability isn&apos;t a marketing claim — it&apos;s a fundamental part of how we source. Here&apos;s what that looks like in practice:
            </p>
            <p className={styles.p}>
              We work directly with producers and importers who can provide full documentation on every lot of coffee we purchase. This means we know the farm name, the farmer&apos;s name, the harvest date, the processing method, and the cupping score for every single origin we carry.
            </p>
            <div className={styles.proTip}>
              <span className={styles.proTipLabel}>When you order with EZPZ</span>
              You&apos;re not getting anonymous commodity coffee. You&apos;re getting a specific, documented lot of specialty coffee — and we can tell you exactly where it came from.
            </div>
          </section>

          {/* Third wave */}
          <section className={styles.section}>
            <h2 className={styles.h2}>The Third Wave Coffee Movement</h2>
            <p className={styles.p}>
              Traceability is a core value of what&apos;s known as third-wave coffee — a movement that emerged on the West Coast of the United States in the early 2000s and has since spread globally.
            </p>
            <p className={styles.p}>
              Third-wave coffee treats coffee the way fine wine is treated: as an agricultural product with terroir, complexity, and a story worth telling. It emphasizes direct trade relationships with farmers, transparency throughout the supply chain, and a deep respect for the craft of both growing and roasting coffee.
            </p>
            <p className={styles.p}>
              EZPZ is rooted in third-wave values. When you build your brand with us, you&apos;re tapping into a global movement that millions of coffee drinkers are already passionate about.
            </p>
          </section>

          {/* What this means for customers */}
          <section className={styles.section}>
            <h2 className={styles.h2}>What This Means for Your Customers</h2>
            <p className={styles.closing}>
              When your branded coffee bag includes origin information — even just a country and region — it transforms a commodity product into an experience. Your customers aren&apos;t just drinking coffee. They&apos;re drinking a light roast from the highlands of Ethiopia, grown at 1,800 metres by farmers who have been cultivating coffee for generations.
            </p>
            <p className={styles.closing}>
              That story is worth paying for. And it&apos;s a story only traceable coffee can tell.
            </p>
          </section>

        </div>
      </article>

      {/* ── CTA banner ───────────────────────────────────────── */}
      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>Want traceable specialty coffee in your branded bag?</h2>
          <div className={styles.ctaButtons}>
            <Link href={`/${locale}/design`} className={styles.ctaButtonPrimary}>
              Design your bag <ArrowRight size={15} weight="bold" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── More from the blog ───────────────────────────────── */}
      <section className={styles.more}>
        <div className={styles.moreInner}>
          <h2 className={styles.moreTitle}>More from the blog</h2>
          <div className={styles.moreGrid}>
            {otherPosts.map((post) => (
              <Link
                key={post.slug}
                href={post.published ? `/${locale}/blog/${post.slug}` : "#"}
                className={styles.moreCard}
                aria-disabled={!post.published}
              >
                <div className={styles.moreCardImage} style={{ background: post.color }}>
                  <span className={styles.moreCardInitials}>{post.initials}</span>
                </div>
                <div className={styles.moreCardBody}>
                  <span className={styles.moreCardCategory}>{post.category}</span>
                  <h3 className={styles.moreCardTitle}>{post.title}</h3>
                  <p className={styles.moreCardExcerpt}>{post.excerpt}</p>
                  <span className={styles.moreCardDate}>{post.date}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default PostContent;
