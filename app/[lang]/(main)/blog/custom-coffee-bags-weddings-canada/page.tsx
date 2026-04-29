import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

import { BLOG_POSTS } from "../data";
import styles from "../custom-coffee-bags-corporate-gifts-canada/blogPost.module.scss";

export const metadata: Metadata = {
  title: "Custom Coffee Bags for Weddings in Canada | Unique Wedding Favors | EZPZ",
  description:
    "Custom coffee bags make unforgettable wedding favors. Personalized with the couple's names, a wedding date, and specialty coffee — no minimum order, ships across Canada.",
  alternates: { canonical: "/en/blog/custom-coffee-bags-weddings-canada" },
  openGraph: {
    title: "Custom Coffee Bags for Weddings in Canada | Unique Wedding Favors | EZPZ",
    description:
      "Custom coffee bags make unforgettable wedding favors. Personalized with the couple's names and specialty coffee — no minimum order.",
    type: "article",
    url: "https://www.ezpz.coffee/en/blog/custom-coffee-bags-weddings-canada",
    images: [{ url: "/assets/blog/wedding-coffee.svg", width: 800, height: 420, alt: "Custom Coffee Bags for Weddings Canada" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Coffee Bags for Weddings in Canada | EZPZ Coffee",
    description: "Custom coffee bags as wedding favors — personalized, specialty-grade, no minimum order.",
    images: ["/assets/blog/wedding-coffee.svg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Custom Coffee Bags for Weddings in Canada | Unique Wedding Favors",
  description: "Wedding favors that guests actually keep. Custom coffee bags with the couple's names, a personal message, and specialty coffee they'll enjoy every morning.",
  datePublished: "2026-04-26",
  author: { "@type": "Organization", name: "EZPZ Coffee Team" },
  publisher: {
    "@type": "Organization",
    name: "EZPZ Coffee",
    url: "https://www.ezpz.coffee",
    logo: { "@type": "ImageObject", url: "https://www.ezpz.coffee/logo.svg" },
  },
  url: "https://www.ezpz.coffee/en/blog/custom-coffee-bags-weddings-canada",
  image: "https://www.ezpz.coffee/assets/blog/wedding-coffee.svg",
};

const OTHER_POSTS = BLOG_POSTS.filter(
  (p) => p.slug !== "custom-coffee-bags-weddings-canada" && p.published
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
        <span className={styles.heroCategory}>Gift Ideas</span>
        <h1 className={styles.heroTitle}>
          Custom Coffee Bags for Weddings in Canada — The Wedding Favor Guests Actually Keep
        </h1>
        <p className={styles.heroSubtitle}>
          Forget the Jordan almonds and the miniature picture frames. Custom coffee bags with the
          couple&apos;s names, the wedding date, and specialty coffee inside are the favor people
          take home and use every single morning.
        </p>
        <div className={styles.heroMeta}>
          <span>April 26, 2026</span>
          <span className={styles.heroMetaDot} />
          <span>5 min read</span>
        </div>
      </div>
    </section>

    {/* ── Article ───────────────────────────────────────────────── */}
    <div className={styles.articleWrapper}>
      <article className={styles.article}>

        <p className={styles.intro}>
          Wedding favors have a reputation problem. Most of them end up left on the table, donated to
          a food bank, or quietly forgotten in a guest&apos;s car. The best wedding favors are the
          ones people actually want — and nothing fits that description better than a bag of
          beautifully designed specialty coffee with the couple&apos;s names on it. Canadian couples
          from Montreal to Vancouver are discovering custom coffee bags as a wedding favor, and their
          guests are talking about it long after the reception ends.
        </p>

        <h2 className={styles.h2}>Why Custom Coffee Bags Make the Perfect Wedding Favor</h2>
        <p className={styles.p}>
          A great wedding favor has three qualities: it feels personal, it is genuinely useful, and
          it reminds the recipient of the day every time they encounter it. Custom coffee bags check
          all three.
        </p>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <strong>Personal:</strong> your names and wedding date printed on a beautifully designed
            bag makes it a keepsake, not just a freebie. Guests keep it because throwing it away
            would feel wrong.
          </li>
          <li className={styles.li}>
            <strong>Useful:</strong> over 70% of Canadian adults drink coffee every day. Your guests
            will use this. Every morning they open that bag, they think of you.
          </li>
          <li className={styles.li}>
            <strong>Memorable:</strong> coffee bags are still an unexpected and original wedding
            favor in Canada. Your guests will mention it because no one else has done it at a wedding
            they attended.
          </li>
        </ul>

        <h2 className={styles.h2}>What to Put on Your Wedding Coffee Bag</h2>
        <p className={styles.p}>
          The design of your custom wedding coffee bag is where you make it yours. Here are the
          elements that work best:
        </p>
        <div className={styles.stepList}>
          <div className={styles.step}>
            <span className={styles.stepNum}>1</span>
            <p className={styles.stepBody}>
              <strong>The couple&apos;s names and wedding date.</strong> Keep it simple: &ldquo;Emma
              &amp; James — June 14, 2026&rdquo; at the top, elegantly typeset. Let the names be the
              hero.
            </p>
          </div>
          <div className={styles.step}>
            <span className={styles.stepNum}>2</span>
            <p className={styles.stepBody}>
              <strong>A message or quote.</strong> Something meaningful: &ldquo;Love is brewing.
              Thank you for being part of our story.&rdquo; Or simply the origin of the coffee and
              tasting notes — it gives guests something to discover.
            </p>
          </div>
          <div className={styles.step}>
            <span className={styles.stepNum}>3</span>
            <p className={styles.stepBody}>
              <strong>Your wedding colors.</strong> Use your palette in the bag design. If your
              wedding is dusty rose and sage, we can reflect that. If it is black tie and gold, we
              can do that too.
            </p>
          </div>
          <div className={styles.step}>
            <span className={styles.stepNum}>4</span>
            <p className={styles.stepBody}>
              <strong>A personal photo or illustration.</strong> Some couples add a custom
              illustration — a portrait, a map of where they met, a significant landmark. It
              transforms the bag into a piece of art.
            </p>
          </div>
        </div>

        <h2 className={styles.h2}>No Minimum Order — Perfect for Intimate and Large Weddings Alike</h2>
        <p className={styles.p}>
          Whether you are hosting 12 people at an intimate dinner or 350 guests at a ballroom
          reception, EZPZ has no minimum order. You can order exactly the number of bags you need
          — not a single bag more. This is a genuine differentiator from most custom suppliers in
          Canada, who require minimums of 50, 100, or even 250 units.
        </p>
        <p className={styles.p}>
          The price per bag adjusts based on volume — larger orders cost less per unit — but there
          is no penalty for ordering small. You can even{" "}
          <Link href="/en/contact" className={styles.inlineLink}>contact us</Link>{" "}
          to request samples before committing to your full order, so you can see the quality in
          person before the big day.
        </p>

        <h2 className={styles.h2}>Choosing the Right Coffee for Your Wedding</h2>
        <p className={styles.p}>
          We recommend choosing a coffee with broad appeal — something smooth and approachable
          that works for light and dark roast drinkers alike. Our Colombia Huila is the most popular
          choice for weddings: caramel, red apple, and hazelnut tasting notes, a beautifully balanced
          medium roast that virtually every guest will enjoy. If you want to offer two options —
          a light and a dark — we can accommodate that with two separate bag designs.
        </p>
        <p className={styles.p}>
          All of our coffees are specialty-grade, scoring 80 or above on the SCA cupping scale. This
          is not commodity coffee in a pretty bag — the quality is genuinely exceptional, which matters
          because the coffee itself reflects on your celebration. Learn more about{" "}
          <Link href="/en/blog/what-makes-specialty-coffee-traceable" className={styles.inlineLink}>
            what makes specialty coffee traceable
          </Link>{" "}
          and why it matters for your guests.
        </p>

        <h2 className={styles.h2}>Plan Ahead — Order 4 to 6 Weeks Before Your Wedding Date</h2>
        <p className={styles.p}>
          First orders at EZPZ typically take 2 to 3 weeks from design approval to delivery. For
          weddings, we recommend starting the process 4 to 6 weeks before your date so you have
          time to review the design, request any changes, and receive your order without any stress.
          The design process itself takes less than 10 minutes — use our{" "}
          <Link href="/en/design" className={styles.inlineLink}>online design tool</Link>{" "}
          or share your wedding assets with us and we will handle the design for you.
        </p>
        <p className={styles.p}>
          We ship to every province in Canada — Montreal, Toronto, Vancouver, Calgary, Ottawa,
          and everywhere in between. Want to compare EZPZ to other custom coffee suppliers?{" "}
          <Link href="/en/compare" className={styles.inlineLink}>See how we stack up</Link>.
        </p>

        <h2 className={styles.h2}>Beyond the Wedding — Other Uses for Your Custom Bags</h2>
        <p className={styles.p}>
          Many couples order extra bags for their bridal party as a thank-you gift, for the rehearsal
          dinner table, or as a morning-of surprise for the wedding party. Some use them as part of
          a welcome box for out-of-town guests at their hotel. The same custom bag that works as a
          wedding favor works beautifully in all of these contexts — you just need one design.
        </p>

      </article>
    </div>

    {/* ── CTA Banner ────────────────────────────────────────────── */}
    <section className={styles.cta}>
      <div className={styles.ctaInner}>
        <h2 className={styles.ctaTitle}>Design your wedding coffee bag today.</h2>
        <div className={styles.ctaButtons}>
          <Link href="/en/design" className={styles.ctaPrimary}>Start designing</Link>
          <Link href="/en/contact" className={styles.ctaSecondary}>Ask us anything</Link>
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
