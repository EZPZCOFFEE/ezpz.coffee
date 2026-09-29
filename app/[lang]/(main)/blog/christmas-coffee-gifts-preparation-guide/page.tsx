import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

import { BLOG_POSTS } from "../data";
import styles from "../custom-coffee-bags-corporate-gifts-canada/blogPost.module.scss";

export const metadata: Metadata = {
  title: "How to Prepare Custom Coffee Gifts for Christmas (2026 Planning Guide) | EZPZ Coffee",
  description:
    "Planning custom branded coffee for Christmas gifts? Here's your timeline, quantities, design, and ordering checklist to get holiday coffee gifts done right, and on time.",
  alternates: { canonical: "/en/blog/christmas-coffee-gifts-preparation-guide" },
  openGraph: {
    title: "How to Prepare Custom Coffee Gifts for Christmas (2026 Planning Guide) | EZPZ Coffee",
    description:
      "Planning custom branded coffee for Christmas gifts? Here's your timeline, quantities, design, and ordering checklist to get holiday coffee gifts done right, and on time.",
    type: "article",
    url: "https://www.ezpz.coffee/en/blog/christmas-coffee-gifts-preparation-guide",
    images: [
      {
        url: "/assets/blog/christmas-coffee-gifts.svg",
        width: 800,
        height: 420,
        alt: "How to Prepare Custom Coffee Gifts for Christmas — EZPZ 2026 Planning Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Prepare Custom Coffee Gifts for Christmas (2026 Guide) | EZPZ",
    description:
      "Your timeline, quantities, design tips, and ordering checklist for stress-free holiday coffee gifting.",
    images: ["/assets/blog/christmas-coffee-gifts.svg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "How to Prepare Custom Coffee Gifts for Christmas (2026 Planning Guide)",
      description:
        "Planning custom branded coffee for Christmas gifts? Here's your timeline, quantities, design, and ordering checklist to get holiday coffee gifts done right, and on time.",
      datePublished: "2026-06-22",
      author: { "@type": "Organization", name: "EZPZ Coffee Team" },
      publisher: {
        "@type": "Organization",
        name: "EZPZ Coffee",
        url: "https://www.ezpz.coffee",
      },
      image: "https://www.ezpz.coffee/assets/blog/christmas-coffee-gifts.svg",
      url: "https://www.ezpz.coffee/en/blog/christmas-coffee-gifts-preparation-guide",
      wordCount: 1600,
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "When should I order custom coffee gifts for Christmas?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Start planning 8 to 10 weeks before Christmas, finalize design and coffee 6 to 8 weeks before, and place your order 4 to 6 weeks before to guarantee production and shipping without a rush. Earlier is always safer given December shipping delays.",
          },
        },
        {
          "@type": "Question",
          name: "How many coffee gifts should I order?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Count your full list of employees, clients, and partners, then add a small buffer of extras. With a zero-minimum partner like EZPZ, you can order exactly what you need, from 20 gifts to 500.",
          },
        },
        {
          "@type": "Question",
          name: "Can custom coffee gifts be shipped directly to each recipient?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. With dropshipping, each branded coffee gift can be shipped directly to individual recipients, so you don't have to pack and send them yourself.",
          },
        },
        {
          "@type": "Question",
          name: "What coffee is best for a Christmas gift?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A smooth, balanced medium roast is the safest and most universally enjoyed choice for gifts, since it appeals to the widest range of people. Always taste samples before committing.",
          },
        },
      ],
    },
  ],
};

const MORE_SLUGS = [
  "coffee-dropshipping-canada-how-it-works",
  "how-to-start-a-coffee-brand-canada",
  // TODO: add "best-corporate-christmas-gift-custom-coffee-canada" once that post is published
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
        <span className={styles.heroCategory}>Corporate Gifting</span>
        <h1 className={styles.heroTitle}>
          How to Prepare Your Christmas Coffee Gifts (Without the Last-Minute Panic)
        </h1>
        <p className={styles.heroSubtitle}>
          Custom branded coffee is one of the most loved holiday gifts, but the businesses that pull
          it off flawlessly all have one thing in common: they plan ahead. Here&apos;s your complete
          timeline and checklist to get it right this year.
        </p>
        <div className={styles.heroMeta}>
          <span>June 22, 2026</span>
          <span className={styles.heroMetaDot} />
          <span>7 min read</span>
        </div>
      </div>
    </section>

    {/* ── Article ───────────────────────────────────────────────── */}
    <div className={styles.articleWrapper}>
      <article className={styles.article}>

        <p className={styles.intro}>
          Every year, it happens. Somewhere around late November, a business realizes they still
          haven&apos;t sorted out client and employee gifts, and the scramble begins.
        </p>

        <p className={styles.p}>
          They end up grabbing generic gift baskets or last-minute gift cards — forgettable,
          impersonal, and gone by New Year&apos;s. The businesses that nail their holiday gifting do
          one thing differently: they start early and plan properly. And more and more of them are
          choosing{" "}
          <Link href="/en/design" className={styles.inlineLink}>
            custom branded coffee
          </Link>{" "}
          — a gift people genuinely use every morning, with your logo on their counter well into the
          new year.
        </p>
        <p className={styles.p}>
          If custom coffee is on your list this Christmas, here&apos;s exactly how to prepare so it
          arrives beautifully, on brand, and on time.
        </p>

        {/* ── Why coffee ── */}
        <h2 className={styles.h2}>Why Coffee Makes Such a Strong Christmas Gift</h2>
        <p className={styles.p}>
          Before the how, a quick reminder of the why. Coffee is nearly universal — most people
          drink it, so you&apos;re not guessing at taste or dietary restrictions. It&apos;s
          consumable and useful; it gets enjoyed, not shoved in a drawer. And when it&apos;s{" "}
          <Link href="/en/design" className={styles.inlineLink}>
            custom branded
          </Link>
          , it becomes a gift and a marketing touchpoint at once: every morning your recipient
          brews a cup, they see your brand.
        </p>
        <p className={styles.p}>
          Unlike a bottle of wine (not everyone drinks) or branded swag (often tossed), a
          beautifully designed bag of quality coffee hits the rare sweet spot of thoughtful,
          premium, and genuinely wanted.
        </p>

        {/* ── Timeline ── */}
        <h2 className={styles.h2}>Your Christmas Coffee Gift Timeline</h2>
        <p className={styles.p}>
          The single biggest factor in stress-free holiday gifting is timing. Here&apos;s a
          realistic timeline to work backwards from.
        </p>

        <div className={styles.timelineBlock ?? ""} style={{ margin: "2rem 0", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          {[
            {
              window: "8–10 weeks before",
              action: "Decide your concept and quantities.",
              detail: "Who's on your list — employees, clients, or both? Roughly how many gifts? This is also when to lock in your budget.",
            },
            {
              window: "6–8 weeks before",
              action: "Choose your coffee and finalize your design.",
              detail: "Order or request samples so you can taste and pick the right roast. Get your logo and any custom holiday message to your production partner so the bag design can be created.",
            },
            {
              window: "4–6 weeks before",
              action: "Approve your design and place your order.",
              detail: "This is the safe window that guarantees production and shipping happen without a rush.",
            },
            {
              window: "2–4 weeks before",
              action: "Receive your finished gifts.",
              detail: "Give yourself buffer time for assembly, adding a card, or distributing to multiple locations.",
            },
          ].map(({ window, action, detail }) => (
            <div
              key={window}
              style={{
                display: "grid",
                gridTemplateColumns: "140px 1fr",
                gap: "1rem",
                alignItems: "start",
                borderLeft: "3px solid var(--color-accent)",
                paddingLeft: "1.25rem",
              }}
            >
              <span style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--color-accent)", paddingTop: "0.1rem" }}>
                {window}
              </span>
              <div>
                <strong style={{ display: "block", marginBottom: "0.2rem" }}>{action}</strong>
                <span style={{ fontSize: "0.9rem", color: "#4b5563", lineHeight: 1.65 }}>{detail}</span>
              </div>
            </div>
          ))}
        </div>

        <p className={styles.p}>
          The golden rule: earlier is always safer. December shipping gets busy and unpredictable,
          so building in a buffer means no white-knuckle tracking-number refreshing the week before
          Christmas.
        </p>

        {/* ── Quantities ── */}
        <h2 className={styles.h2}>How Many Should You Order?</h2>
        <p className={styles.p}>
          A few things to consider when settling on quantities. Count your full list — employees,
          key clients, top customers, partners — and add a small buffer of extras (there are always
          a few people you forgot, or a last-minute addition). If you&apos;re gifting to clients,
          consider tiering: a premium version for your top accounts and a standard version for the
          broader list.
        </p>
        <p className={styles.p}>
          The good news: with a{" "}
          <Link href="/en/custom-coffee-bags-no-minimum-canada" className={styles.inlineLink}>
            zero-minimum
          </Link>{" "}
          partner, you&apos;re not forced into a huge order. Whether you need 20 gifts for your
          best clients or 500 for the whole company, you can order exactly what you need.
        </p>

        {/* ── Design ── */}
        <h2 className={styles.h2}>Designing a Bag Worth Gifting</h2>
        <p className={styles.p}>
          The design is what makes a coffee gift feel special rather than generic. A few tips:
        </p>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <strong>Keep it on brand but festive.</strong> Your logo and colours should shine, and
            a subtle holiday touch — a seasonal colour accent or a short message — makes it feel
            like a gift.
          </li>
          <li className={styles.li}>
            <strong>
              Add a{" "}
              <Link href="/en/design" className={styles.inlineLink}>
                custom message
              </Link>
              .
            </strong>{" "}
            A line like &ldquo;Happy Holidays from the team at [Your Company]&rdquo; or something
            playful turns a product into a keepsake.{" "}
            <Link href="/en/design" className={styles.inlineLink}>
              Custom messaging
            </Link>{" "}
            right on the bag is a small touch with big impact.
          </li>
          <li className={styles.li}>
            <strong>Let the design do the work.</strong> In a gift, presentation is everything. A
            clean, premium-looking bag needs no wrapping — it <em>is</em> the wrapping.
          </li>
        </ul>
        <p className={styles.p}>
          If your coffee partner includes design (as we do at EZPZ), you don&apos;t need to hire a
          designer — you just bring your logo and vision, and the finished bag comes back
          gift-ready.
        </p>

        {/* ── Choosing coffee ── */}
        <h2 className={styles.h2}>Choosing the Right Coffee</h2>
        <p className={styles.p}>
          For a gift, you want a coffee that pleases the widest range of people. A smooth, balanced
          medium roast is almost always the safest, most universally enjoyed choice —
          approachable for casual drinkers and satisfying for{" "}
          <Link href="/en/coffee" className={styles.inlineLink}>
            specialty-grade
          </Link>{" "}
          enthusiasts alike.
        </p>
        <p className={styles.p}>
          If you want variety, consider a small range: a medium as your crowd-pleaser, and perhaps
          a bolder dark for the strong-coffee lovers. And always taste before you commit — request
          samples early so your gift delivers on quality, not just looks.
        </p>

        {/* ── Logistics ── */}
        <h2 className={styles.h2}>Don&apos;t Forget the Logistics</h2>
        <p className={styles.p}>
          A few practical things that separate a smooth gifting season from a stressful one. Decide
          how gifts will be distributed — shipped individually to each recipient, or sent to you in
          bulk to hand out. If you&apos;re shipping to many individual addresses, a partner that
          offers{" "}
          <Link href="/en/coffee-dropshipping-canada" className={styles.inlineLink}>
            dropshipping
          </Link>{" "}
          can send each gift directly, saving you from becoming a packing station. Confirm delivery
          timelines early, and get everything locked in with buffer room before the December rush.
        </p>

        {/* ── Conclusion ── */}
        <h2 className={styles.h2}>The Simple Path to Stress-Free Christmas Gifts</h2>
        <p className={styles.p}>
          Here&apos;s the whole thing in a nutshell: decide early, choose a quality coffee,{" "}
          <Link href="/en/blog/best-corporate-christmas-gift-custom-coffee-canada" className={styles.inlineLink}>
            design a bag worth gifting
          </Link>
          , order with buffer time, and sort your distribution. Do that, and your holiday gifts
          will be the ones people actually remember — and use.
        </p>
        <p className={styles.p}>
          At EZPZ, we make it easy:{" "}
          <Link href="/en/design" className={styles.inlineLink}>
            custom design included
          </Link>
          ,{" "}
          <Link href="/en/custom-coffee-bags-no-minimum-canada" className={styles.inlineLink}>
            zero minimum
          </Link>
          ,{" "}
          <Link href="/en/coffee" className={styles.inlineLink}>
            specialty-grade coffee
          </Link>{" "}
          roasted fresh in Montreal, and the option to ship in bulk to you or directly to each
          recipient via{" "}
          <Link href="/en/coffee-dropshipping-canada" className={styles.inlineLink}>
            dropshipping
          </Link>
          . Whether it&apos;s 20 gifts or 500, we help you get it done beautifully and on time.
        </p>
        <p className={styles.p}>
          The best time to start planning your Christmas coffee gifts? Now. Your future, calm,
          organized December self will thank you.
        </p>

      </article>
    </div>

    {/* ── CTA Banner ────────────────────────────────────────────── */}
    <section className={styles.cta}>
      <div className={styles.ctaInner}>
        <h2 className={styles.ctaTitle}>
          Start your Christmas coffee gifts early.
        </h2>
        <div className={styles.ctaButtons}>
          <Link href="/en/design" className={styles.ctaPrimary}>
            Design your gift
          </Link>
          <Link href="/en/contact?subject=Christmas Gift Sample Request" className={styles.ctaSecondary}>
            Request a free sample
          </Link>
        </div>
        <p style={{ marginTop: "1.25rem", fontSize: "0.85rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.6 }}>
          Zero minimum, design included, roasted in Montreal.{" "}
          <Link href="/en/contact" style={{ color: "rgba(255,255,255,0.65)", textDecoration: "underline" }}>
            Order early to guarantee holiday delivery.
          </Link>
        </p>
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
