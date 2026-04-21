"use client";

import { ArrowRight } from "@phosphor-icons/react";
import Link from "next/link";
import { useLocale } from "next-intl";

import { BLOG_POSTS } from "../data";
import styles from "../_components/blogPost.module.scss";

const PostContent = () => {
  const locale = useLocale();
  const otherPosts = BLOG_POSTS.filter((p) => p.slug !== "how-to-launch-coffee-brand-canada-2026");

  return (
    <div className={styles.page}>

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroAngle} />
        <div className={styles.heroInner}>
          <div className={styles.heroMeta}>
            <span className={styles.heroCategory}>Brand Building</span>
            <span className={styles.heroDivider} />
            <span className={styles.heroDate}>April 10, 2026</span>
            <span className={styles.heroDivider} />
            <span className={styles.heroReadTime}>6 min read</span>
          </div>
          <h1 className={styles.heroTitle}>
            How to Launch Your Own Coffee Brand in Canada in 2026
          </h1>
          <p className={styles.heroSubtitle}>
            Everything you need to know to go from idea to branded coffee bags on shelves — without the complexity or big upfront investment.
          </p>
        </div>
      </section>

      {/* ── Article ──────────────────────────────────────────── */}
      <article className={styles.article}>
        <div className={styles.articleInner}>

          {/* Intro */}
          <p className={styles.intro}>
            Starting your own coffee brand used to be complicated. High minimums, expensive design agencies, complicated supply chains, and months of back-and-forth with roasters. But in 2026, that&apos;s no longer the case. Whether you&apos;re a restaurant owner, a gym, a hotel, or just someone with a great idea — launching your own branded coffee product is more accessible than ever. Here&apos;s exactly how to do it.
          </p>

          {/* Step 1 */}
          <section className={styles.section}>
            <h2 className={styles.h2}>Step 1: Define Your Brand Identity</h2>
            <p className={styles.p}>
              Before you think about coffee, think about your brand. Ask yourself:
            </p>
            <ul className={styles.ul}>
              <li className={styles.li}>Who is your target customer?</li>
              <li className={styles.li}>What feeling do you want your coffee to evoke? (Premium? Fun? Earthy? Bold?)</li>
              <li className={styles.li}>What&apos;s your brand&apos;s color palette and visual style?</li>
            </ul>
            <p className={styles.p}>
              Your coffee bag is a physical extension of your brand. It sits on shelves, gets shared on social media, and ends up in people&apos;s hands. Getting the visual identity right before you start designing your bag will save you time and money down the road.
            </p>
            <div className={styles.proTip}>
              <span className={styles.proTipLabel}>Pro tip</span>
              Look at brands you admire — not just in coffee, but in any industry — and note what draws you to them visually. Bring that inspiration to your design process.
            </div>
          </section>

          {/* Step 2 */}
          <section className={styles.section}>
            <h2 className={styles.h2}>Step 2: Choose Your Coffee</h2>
            <p className={styles.p}>
              This is where most people get overwhelmed — but it doesn&apos;t have to be complicated. Here are the key decisions to make:
            </p>
            <div className={styles.termList}>
              <div className={styles.term}>
                <span className={styles.termLabel}>Origin</span>
                <p className={styles.termBody}>Where do you want your beans to come from? Ethiopia, Colombia, Guatemala, Brazil? Each origin has distinct flavor characteristics. Ethiopian coffees tend to be fruity and floral. Colombian coffees are balanced and nutty. Brazilian beans are chocolatey and smooth.</p>
              </div>
              <div className={styles.term}>
                <span className={styles.termLabel}>Roast level</span>
                <p className={styles.termBody}>Light roasts preserve the bean&apos;s natural flavors and acidity. Dark roasts are bolder and more bitter. Medium is the crowd-pleaser. Think about who&apos;s drinking your coffee and choose accordingly.</p>
              </div>
              <div className={styles.term}>
                <span className={styles.termLabel}>Grind</span>
                <p className={styles.termBody}>Whole bean gives customers flexibility. Pre-ground is more convenient. You can also offer both.</p>
              </div>
            </div>
            <p className={styles.p}>
              At EZPZ, we help you navigate all of these decisions. You don&apos;t need to be a coffee expert — that&apos;s what we&apos;re here for.
            </p>
          </section>

          {/* Step 3 */}
          <section className={styles.section}>
            <h2 className={styles.h2}>Step 3: Design Your Bag</h2>
            <p className={styles.p}>
              Your bag design is your most important marketing asset. When someone picks up your bag, you have about 3 seconds to make an impression.
            </p>
            <p className={styles.p}>Here&apos;s what makes a great coffee bag design:</p>
            <ul className={styles.ul}>
              <li className={styles.li}>A clear, legible brand name at the top</li>
              <li className={styles.li}>A strong visual element — illustration, pattern, or photo</li>
              <li className={styles.li}>Clean typography that matches your brand personality</li>
              <li className={styles.li}>Key info visible at a glance: origin, roast level, weight</li>
            </ul>
            <p className={styles.p}>
              With EZPZ, full bag design and customization is included in the price per bag. You can use our online design tool to build your bag from scratch, or share your brand assets and we&apos;ll handle the design for you.
            </p>
          </section>

          {/* Step 4 */}
          <section className={styles.section}>
            <h2 className={styles.h2}>Step 4: Place Your Order — With Zero Minimums</h2>
            <p className={styles.p}>
              Here&apos;s the part that surprises most people: you don&apos;t need to order hundreds of bags to get started. At EZPZ, there is no minimum order. You can order a single bag, 10 bags, or 10,000 bags. The price per unit adjusts based on volume, but there&apos;s no barrier to entry.
            </p>
            <p className={styles.p}>This means you can:</p>
            <ul className={styles.ul}>
              <li className={styles.li}>Test your product before committing to large quantities</li>
              <li className={styles.li}>Create limited edition seasonal bags</li>
              <li className={styles.li}>Offer personalized bags as corporate gifts</li>
              <li className={styles.li}>Launch small and scale as demand grows</li>
            </ul>
          </section>

          {/* Step 5 */}
          <section className={styles.section}>
            <h2 className={styles.h2}>Step 5: Sell and Scale</h2>
            <p className={styles.p}>
              Once your bags arrive, it&apos;s time to sell. Here are the most effective channels for branded coffee in Canada:
            </p>
            <div className={styles.channelList}>
              <div className={styles.channel}>
                <span className={styles.channelLabel}>In-store</span>
                <p className={styles.channelBody}>If you have a physical location — restaurant, café, boutique, gym — your branded coffee bags sell themselves when displayed near the checkout.</p>
              </div>
              <div className={styles.channel}>
                <span className={styles.channelLabel}>Online</span>
                <p className={styles.channelBody}>Add your coffee to your Shopify or e-commerce store. Coffee subscriptions are booming in Canada right now.</p>
              </div>
              <div className={styles.channel}>
                <span className={styles.channelLabel}>Corporate gifting</span>
                <p className={styles.channelBody}>Branded coffee bags are one of the most popular corporate gifts. Reach out to local businesses around the holidays.</p>
              </div>
              <div className={styles.channel}>
                <span className={styles.channelLabel}>Distribution</span>
                <p className={styles.channelBody}>If you&apos;re ready to scale, EZPZ can help connect you with distributors across Canada to get your product on more shelves.</p>
              </div>
            </div>
          </section>

          {/* Closing */}
          <section className={styles.section}>
            <h2 className={styles.h2}>Ready to Start?</h2>
            <p className={styles.closing}>
              Launching a coffee brand in Canada has never been easier. With no minimums, full design support, and in-house roasting in Montreal, EZPZ removes every barrier between your idea and a real product in customers&apos; hands.
            </p>
          </section>

        </div>
      </article>

      {/* ── CTA banner ───────────────────────────────────────── */}
      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>Ready to build your coffee brand?</h2>
          <div className={styles.ctaButtons}>
            <Link href={`/${locale}/contact`} className={styles.ctaButtonPrimary}>
              Get a quote <ArrowRight size={15} weight="bold" />
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
