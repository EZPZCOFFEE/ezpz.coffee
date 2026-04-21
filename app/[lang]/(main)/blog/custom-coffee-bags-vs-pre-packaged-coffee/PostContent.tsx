"use client";

import { ArrowRight } from "@phosphor-icons/react";
import Link from "next/link";
import { useLocale } from "next-intl";

import { BLOG_POSTS } from "../data";
import styles from "../_components/blogPost.module.scss";
import postStyles from "./styles.module.scss";

const PostContent = () => {
  const locale = useLocale();
  const otherPosts = BLOG_POSTS.filter((p) => p.slug !== "custom-coffee-bags-vs-pre-packaged-coffee");

  return (
    <div className={styles.page}>

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroAngle} />
        <div className={styles.heroInner}>
          <div className={styles.heroMeta}>
            <span className={styles.heroCategory} style={{ color: "#7a4aad", background: "rgba(42,26,61,0.2)" }}>Business Tips</span>
            <span className={styles.heroDivider} />
            <span className={styles.heroDate}>February 25, 2026</span>
            <span className={styles.heroDivider} />
            <span className={styles.heroReadTime}>5 min read</span>
          </div>
          <h1 className={styles.heroTitle}>
            Custom Coffee Bags vs. Pre-Packaged Coffee: What&apos;s Right for Your Business?
          </h1>
          <p className={styles.heroSubtitle}>
            If you&apos;re thinking about adding coffee to your business, you have two main options. Here&apos;s an honest breakdown of both — so you can make the right call.
          </p>
        </div>
      </section>

      {/* ── Article ──────────────────────────────────────────── */}
      <article className={styles.article}>
        <div className={styles.articleInner}>

          {/* Intro */}
          <p className={styles.intro}>
            Coffee is one of the most profitable add-on products a business can sell. Whether you&apos;re a restaurant, a boutique, a gym, or a hotel — adding coffee to your lineup can generate real revenue, strengthen your brand, and delight your customers. But when it comes to HOW you sell coffee, there are two very different paths. You can sell pre-packaged coffee from an existing brand, or you can sell coffee under your own brand. Here&apos;s everything you need to know to make the right choice.
          </p>

          {/* Option 1 */}
          <section className={styles.section}>
            <h2 className={styles.h2}>Option 1: Pre-Packaged Coffee From an Existing Brand</h2>
            <p className={styles.p}>
              This means buying coffee wholesale from an established roaster and reselling it at your location — in its original packaging, under their brand name.
            </p>
            <div className={postStyles.comparisonRow}>
              <div className={postStyles.prosCard}>
                <span className={postStyles.prosLabel}>Pros</span>
                <ul className={postStyles.compList}>
                  <li>Zero design work required</li>
                  <li>Low upfront commitment</li>
                  <li>Established brand recognition</li>
                  <li>Simple to set up</li>
                </ul>
              </div>
              <div className={postStyles.consCard}>
                <span className={postStyles.consLabel}>Cons</span>
                <ul className={postStyles.compList}>
                  <li>You&apos;re building someone else&apos;s brand, not yours</li>
                  <li>Lower margins — you&apos;re a reseller, not a brand owner</li>
                  <li>No differentiation — your competitors can sell the exact same product</li>
                  <li>No storytelling or brand connection for your customers</li>
                  <li>You&apos;re entirely dependent on the supplier&apos;s quality and availability</li>
                </ul>
              </div>
            </div>
            <p className={styles.p}>
              This approach works fine if you just need coffee on the shelf quickly and don&apos;t care about brand building. But if you have a strong brand and want coffee to be part of your identity, pre-packaged reselling is a missed opportunity.
            </p>
          </section>

          {/* Option 2 */}
          <section className={styles.section}>
            <h2 className={styles.h2}>Option 2: Custom Branded Coffee Bags</h2>
            <p className={styles.p}>
              This means working with a roaster like EZPZ to produce coffee under your own brand name, in your own custom packaging, with your own design.
            </p>
            <div className={postStyles.comparisonRow}>
              <div className={postStyles.prosCard}>
                <span className={postStyles.prosLabel}>Pros</span>
                <ul className={postStyles.compList}>
                  <li>Your brand is on the product — every bag is a marketing touchpoint</li>
                  <li>Higher perceived value — branded products command premium prices</li>
                  <li>Stronger customer loyalty — people associate the great coffee experience with YOU</li>
                  <li>Complete control over the story you tell (origin, roast, tasting notes)</li>
                  <li>No minimums with EZPZ — you can start as small as you want</li>
                  <li>Design and customization included in the price</li>
                </ul>
              </div>
              <div className={postStyles.consCard}>
                <span className={postStyles.consLabel}>Cons</span>
                <ul className={postStyles.compList}>
                  <li>Slightly more upfront work (choosing your beans, approving your design)</li>
                  <li>Slightly longer lead time on your first order (2–3 weeks)</li>
                </ul>
              </div>
            </div>
            <div className={styles.proTip}>
              <span className={styles.proTipLabel}>Honest take</span>
              The cons are minor. The upfront work takes a few hours, not weeks. And the lead time is a one-time thing — once your design is approved, repeat orders are fast.
            </div>
          </section>

          {/* The numbers */}
          <section className={styles.section}>
            <h2 className={styles.h2}>The Numbers: Why Custom Wins on Margin</h2>
            <p className={styles.p}>Let&apos;s talk about money. Here&apos;s a rough comparison:</p>
            <div className={postStyles.marginTable}>
              <div className={postStyles.marginRow}>
                <div className={postStyles.marginLabel}>Pre-packaged reselling</div>
                <div className={postStyles.marginDetail}>Buy at $12–18 wholesale, sell for $18–22</div>
                <div className={postStyles.marginBadgeLow}>$4–6 / bag</div>
              </div>
              <div className={postStyles.marginRow}>
                <div className={postStyles.marginLabel}>Custom branded bags</div>
                <div className={postStyles.marginDetail}>Produce at competitive cost, sell for $22–32 under your brand</div>
                <div className={postStyles.marginBadgeHigh}>$10–16 / bag</div>
              </div>
            </div>
            <p className={styles.p}>
              Custom branded coffee can deliver 2–3x the margin of reselling — because your brand adds value that justifies a higher price point.
            </p>
          </section>

          {/* When pre-packaged makes sense */}
          <section className={styles.section}>
            <h2 className={styles.h2}>When Pre-Packaged Makes Sense</h2>
            <p className={styles.p}>To be fair, there are scenarios where pre-packaged coffee is the right call:</p>
            <ul className={styles.ul}>
              <li className={styles.li}>You&apos;re just starting out and want to test whether coffee sells at your location before investing in branding</li>
              <li className={styles.li}>You need coffee immediately and can&apos;t wait 2–3 weeks</li>
              <li className={styles.li}>Coffee is a very minor part of your business and brand alignment doesn&apos;t matter</li>
            </ul>
            <p className={styles.p}>
              In these cases, start with pre-packaged and switch to custom once you&apos;ve validated demand. Many of our best clients started that way.
            </p>
          </section>

          {/* When custom wins */}
          <section className={styles.section}>
            <h2 className={styles.h2}>When Custom Branded Coffee Is the Clear Winner</h2>
            <p className={styles.p}>Custom branded coffee is the right move when:</p>
            <ul className={styles.ul}>
              <li className={styles.li}>You have a strong brand and want everything to reflect it</li>
              <li className={styles.li}>You want to maximize margins on every bag you sell</li>
              <li className={styles.li}>You&apos;re in hospitality, retail, or food &amp; beverage where presentation matters</li>
              <li className={styles.li}>You want to offer a unique product your competitors can&apos;t copy</li>
              <li className={styles.li}>You&apos;re thinking about corporate gifting, events, or seasonal collections</li>
              <li className={styles.li}>You want to build a real coffee brand, not just sell someone else&apos;s</li>
            </ul>
          </section>

          {/* Bottom line */}
          <section className={styles.section}>
            <h2 className={styles.h2}>The Bottom Line</h2>
            <p className={styles.closing}>
              If you&apos;re serious about your brand and your margins, custom branded coffee bags are the obvious choice. The barrier to entry is lower than most people think — especially with no minimums, included design, and a simple online ordering process.
            </p>
            <p className={styles.p}>
              Pre-packaged coffee has its place, but it&apos;s a short-term solution. Custom branded coffee is a long-term brand asset.
            </p>
          </section>

        </div>
      </article>

      {/* ── CTA banner ───────────────────────────────────────── */}
      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>Ready to stop reselling and start building your own coffee brand?</h2>
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
