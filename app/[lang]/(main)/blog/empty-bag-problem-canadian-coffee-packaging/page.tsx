import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

import { BLOG_POSTS } from "../data";
import styles from "../custom-coffee-bags-corporate-gifts-canada/blogPost.module.scss";

export const metadata: Metadata = {
  title: "The Empty Bag Problem: Why Every Coffee Packaging Company in Canada Is Selling You Half a Product | EZPZ",
  description:
    "Every custom coffee bag supplier in Canada sells you an empty bag and walks away. Here is why that is a problem, what it really costs you, and the only company solving it.",
  alternates: { canonical: "/en/blog/empty-bag-problem-canadian-coffee-packaging" },
  openGraph: {
    title: "The Empty Bag Problem: Why Every Coffee Packaging Company in Canada Is Selling You Half a Product | EZPZ",
    description:
      "Every custom coffee bag supplier in Canada sells you an empty bag and walks away. Here is why that is a problem, what it really costs you, and the only company solving it.",
    type: "article",
    url: "https://www.ezpz.coffee/en/blog/empty-bag-problem-canadian-coffee-packaging",
    images: [{ url: "/assets/blog/empty-bag-problem.svg", width: 800, height: 420, alt: "The Empty Bag Problem — EZPZ Coffee Manifesto" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Empty Bag Problem | EZPZ Coffee",
    description: "Every coffee packaging company in Canada is selling you half a product. Here is the only company solving it.",
    images: ["/assets/blog/empty-bag-problem.svg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "The Empty Bag Problem: Why Every Coffee Packaging Company in Canada Is Selling You Half a Product",
      description:
        "Every custom coffee bag supplier in Canada sells you an empty bag and walks away. Here is why that is a problem, what it really costs you, and the only company solving it.",
      datePublished: "2026-06-12",
      author: { "@type": "Organization", name: "EZPZ Coffee Team" },
      publisher: { "@type": "Organization", name: "EZPZ Coffee", url: "https://www.ezpz.coffee" },
      image: "https://www.ezpz.coffee/assets/blog/empty-bag-problem.svg",
      url: "https://www.ezpz.coffee/en/blog/empty-bag-problem-canadian-coffee-packaging",
      wordCount: 1800,
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Do Canadian coffee packaging companies include the coffee?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Companies like KimEcopak, Universal Packaging, Savor Brands, and Rootree sell empty custom coffee bags only. You must source, roast, and fill the coffee yourself. EZPZ Coffee is the only Canadian supplier that provides the coffee and the custom bag together as a finished product.",
          },
        },
        {
          "@type": "Question",
          name: "What is the cheapest way to start a custom coffee brand in Canada?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "EZPZ Coffee offers zero minimum order with full custom design included, meaning you can start with a single finished bag of specialty coffee. Packaging-only companies require minimums of 500 to 2,000 units plus separately sourced coffee.",
          },
        },
        {
          "@type": "Question",
          name: "Who sells custom coffee bags with the coffee included in Canada?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "EZPZ Coffee is the only full-service custom coffee supplier in Canada that includes specialty grade coffee, roasting, design, and packaging in one order, with zero minimum.",
          },
        },
        {
          "@type": "Question",
          name: "How fast can I get custom branded coffee in Canada?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "EZPZ Coffee delivers finished custom branded coffee in 2 to 3 weeks. Packaging-only suppliers take 5 to 7 weeks for empty bags, before you have even sourced your coffee.",
          },
        },
      ],
    },
  ],
};

const MORE_SLUGS = [
  "ezpz-vs-rootree-vs-savor-brands-custom-coffee-bags-canada",
  "private-label-coffee-canada-complete-guide",
  "custom-coffee-bags-vs-custom-mugs-canada",
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
        <span className={styles.heroCategory}>The Manifesto</span>
        <h1 className={styles.heroTitle}>The Empty Bag Problem</h1>
        <p className={styles.heroSubtitle}>
          Every coffee packaging company in Canada is selling you half a product. Here is why
          that is costing you thousands, and what we are doing about it.
        </p>
        <div className={styles.heroMeta}>
          <span>June 12, 2026</span>
          <span className={styles.heroMetaDot} />
          <span>8 min read</span>
        </div>
      </div>
    </section>

    {/* ── TL;DR ─────────────────────────────────────────────────── */}
    <div className={styles.tldr} role="note" aria-label="Article summary">
      <strong className={styles.tldrLabel}>TL;DR</strong>
      <p className={styles.tldrText}>
        Every custom coffee bag supplier in Canada — KimEcopak, Universal Packaging, Savor
        Brands, Rootree, ePac — sells you a beautiful empty bag and leaves you to source,
        roast, and fill the coffee yourself. EZPZ Coffee is the only Canadian company that
        sells you the finished product: specialty grade coffee, roasted fresh in Montreal,
        packaged in your fully custom branded bag. Zero minimum. Full design included. 2 to 3
        weeks.
      </p>
    </div>

    {/* ── Article ───────────────────────────────────────────────── */}
    <div className={styles.articleWrapper}>
      <article className={styles.article}>

        <p className={styles.intro}>
          Go ahead. Search &ldquo;custom coffee bags Canada&rdquo; right now. We will wait.
        </p>
        <p className={styles.p}>
          Here is what you found. KimEcopak. Universal Packaging. Waxpapers. Savor Brands.
          ePac. Rootree. A dozen others. Beautiful websites. Gorgeous bags. Compostable
          materials. Low minimums. Free samples.
        </p>
        <p className={styles.p}>
          And every single one of them has the same fatal flaw. They sell you an empty bag.
        </p>
        <p className={styles.p}>
          That is it. That is the product. A beautiful, branded, compostable, valve-sealed,
          resealable, professionally printed empty bag. And then they wave goodbye and leave
          you to figure out the hardest part entirely on your own: the actual coffee.
        </p>
        <p className={styles.p}>
          This is the empty bag problem. And once you see it, you cannot unsee it.
        </p>

        {/* ── What "Custom Coffee Bags" Actually Means ── */}
        <h2 className={styles.h2}>What &ldquo;Custom Coffee Bags&rdquo; Actually Means in Canada</h2>
        <p className={styles.p}>
          Let us be brutally honest about what you are actually buying when you order custom
          coffee bags from a Canadian packaging company.
        </p>
        <p className={styles.p}>
          You are buying packaging. Full stop. You provide the print-ready design files, or
          you pay extra for design. You meet their minimum order, usually 500 to 2,000 units,
          sometimes 1,000 pouches, sometimes more. You wait five to seven weeks. And then a
          box of empty bags shows up at your door.
        </p>
        <p className={styles.p}>Now what?</p>
        <p className={styles.p}>
          Now you need coffee. So you go find a green coffee importer. You research roasters.
          You negotiate wholesale pricing. You arrange roasting schedules. You figure out grind
          specifications. You manage quality control. You coordinate the timing so your coffee
          is fresh when it goes in those bags you have been storing in your back room for two
          months. You handle the bagging, the sealing, the weighing, the labeling.
        </p>
        <p className={styles.p}>
          You just signed up for a second full-time job. And you have not sold a single bag
          of coffee yet.
        </p>
        <p className={styles.p}>
          The packaging company got paid. You got homework.
        </p>

        {/* ── Why Does Everyone Do It This Way ── */}
        <h2 className={styles.h2}>Why Does Everyone Do It This Way?</h2>
        <p className={styles.p}>
          Because selling empty bags is easy. Selling finished coffee is hard.
        </p>
        <p className={styles.p}>
          An empty bag is a simple manufactured product. Print it, ship it, done. No sourcing
          relationships. No roasting expertise. No quality control on a perishable product. No{" "}
          <Link href="/en/coffee" className={styles.inlineLink}>specialty coffee</Link>{" "}
          knowledge required. It is a printing business that happens to print on bags.
        </p>
        <p className={styles.p}>
          Putting genuinely excellent specialty coffee inside that bag — sourced from traceable
          farms, roasted fresh, quality controlled, and delivered ready to sell — is a
          completely different business. It requires roasting infrastructure. It requires
          relationships with coffee producers. It requires people who can taste the difference
          between an 82 and an 86 on the SCA scale. It requires actually caring about what
          goes in the bag, not just what is printed on it.
        </p>
        <p className={styles.p}>
          So the packaging companies stay in their lane. They sell you the easy half and leave
          you the hard half. And the entire Canadian market just accepts this as normal.
        </p>
        <p className={styles.p}>We do not.</p>

        {/* ── The Real Cost ── */}
        <h2 className={styles.h2}>The Real Cost of the Empty Bag</h2>
        <p className={styles.p}>
          Here is what the empty bag actually costs you, beyond the price per unit.
        </p>
        <p className={styles.p}>
          It costs you <strong>time</strong>. Weeks of sourcing, negotiating, and coordinating
          before you can sell anything. Time you should be spending running your actual business.
        </p>
        <p className={styles.p}>
          It costs you <strong>capital</strong>. Most packaging minimums force you to spend two
          thousand to eight thousand dollars on bags and coffee before you have proven anyone
          wants to buy your product. That is money locked up in inventory and risk.
        </p>
        <p className={styles.p}>
          It costs you <strong>quality control</strong>. When you are sourcing coffee separately
          from packaging, nobody owns the final product. The packaging company blames the
          roaster. The roaster blames the green importer. You are stuck in the middle holding a
          product that is only as good as its weakest link.
        </p>
        <p className={styles.p}>
          It costs you <strong>opportunities</strong>. By the time you have navigated the whole
          fragmented supply chain, the seasonal moment has passed. The event is over. The trend
          has moved on. The five to seven week lead time killed your agility.
        </p>
        <p className={styles.p}>
          And worst of all, it costs you the thing that actually matters: a great product.
          Because a stunning bag full of mediocre coffee is just a pretty disappointment. Your
          customers do not drink the packaging.
        </p>

        {/* ── The EZPZ Model ── */}
        <h2 className={styles.h2}>The EZPZ Model. The Whole Product.</h2>
        <p className={styles.p}>
          We built EZPZ Coffee to solve the empty bag problem completely.
        </p>
        <p className={styles.p}>
          When you work with us, you do not get an empty bag. You get a finished product.{" "}
          <Link href="/en/coffee" className={styles.inlineLink}>
            Specialty grade coffee
          </Link>
          , sourced from traceable farms in Ethiopia, Colombia, Guatemala, and Brazil, every
          origin{" "}
          <Link href="/en/coffee" className={styles.inlineLink}>
            scoring 80 or above on the SCA cupping scale
          </Link>
          , roasted fresh at{" "}
          <Link href="/en/about" className={styles.inlineLink}>
            Canadian Roasting Society
          </Link>{" "}
          in Montreal, packaged in your fully custom branded bag, quality checked, and shipped
          to your door ready to sell.
        </p>
        <p className={styles.p}>
          The coffee and the bag. Together. As one product. The way it should have always been.
        </p>
        <p className={styles.p}>
          And we did not just solve the empty bag problem. We torched every other barrier the
          industry built too.
        </p>
        <p className={styles.p}>
          <strong>
            <Link href="/en/custom-coffee-bags-no-minimum-canada" className={styles.inlineLink}>
              Zero minimum order.
            </Link>
          </strong>{" "}
          Not 500. Not 1,000. Not 2,000. Zero. Order one bag. Order ten thousand. Your call.
        </p>
        <p className={styles.p}>
          <strong>Full custom design included. Always. Free.</strong> You bring your logo and
          your vision, our team builds the bag. No design fees. No print-ready file
          requirements. No hunting for a separate designer.
        </p>
        <p className={styles.p}>
          <strong>Ready in two to three weeks.</strong> Not five to seven. Because we control
          the entire process from sourcing to shipping, we move at a speed the fragmented
          supply chain physically cannot match.
        </p>
        <p className={styles.p}>
          <strong>One partner. One invoice. One product.</strong> From bean to branded bag to
          your doorstep.
        </p>

        {/* ── Comparison Table ── */}
        <h2 className={styles.h2}>The Comparison Nobody Wants You to See</h2>
        <p className={styles.p}>Let us put it side by side.</p>

        <div style={{ overflowX: "auto", margin: "1.5rem 0", borderRadius: "8px", border: "1px solid #e0e0e0" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.88rem" }}>
            <thead>
              <tr>
                <th style={{ padding: "12px 16px", textAlign: "left", background: "#111111", color: "#ffffff", fontWeight: 700, fontSize: "0.78rem", textTransform: "uppercase", letterSpacing: "0.06em", whiteSpace: "nowrap" }}>What You Get</th>
                <th style={{ padding: "12px 16px", textAlign: "left", background: "#111111", color: "rgba(255,255,255,0.5)", fontWeight: 700, fontSize: "0.78rem", textTransform: "uppercase", letterSpacing: "0.06em", whiteSpace: "nowrap" }}>The Packaging Companies</th>
                <th style={{ padding: "12px 16px", textAlign: "left", background: "#c43e14", color: "#ffffff", fontWeight: 700, fontSize: "0.78rem", textTransform: "uppercase", letterSpacing: "0.06em", whiteSpace: "nowrap" }}>EZPZ Coffee ✓</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["What is in the box", "An empty bag", "A finished coffee product ready to sell"],
                ["The coffee", "Your problem", "Specialty grade, sourced and roasted for you"],
                ["Minimum order", "500 to 2,000 units", "Zero"],
                ["Design", "Extra cost or DIY", "Always included free"],
                ["Lead time", "5 to 7 weeks", "2 to 3 weeks"],
                ["Sourcing", "You do it", "We do it"],
                ["Roasting", "You arrange it", "Roasted fresh in Montreal"],
                ["Quality control", "Nobody owns it", "We own it end to end"],
                ["Suppliers to manage", "Three or more", "One"],
                ["Time until you can sell", "Months", "Weeks"],
              ].map(([feature, them, us], i) => (
                <tr key={i}>
                  <td style={{ padding: "11px 16px", color: "#374151", borderBottom: "1px solid #f0f0f0", fontWeight: 600, background: i % 2 === 0 ? "#ffffff" : "#fafafa" }}>{feature}</td>
                  <td style={{ padding: "11px 16px", color: "#9ca3af", borderBottom: "1px solid #f0f0f0", background: i % 2 === 0 ? "#ffffff" : "#fafafa" }}>{them}</td>
                  <td style={{ padding: "11px 16px", color: "#c43e14", fontWeight: 700, borderBottom: "1px solid #f0f0f0", background: i % 2 === 0 ? "rgba(196,62,20,0.04)" : "rgba(196,62,20,0.07)" }}>{us}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ── Who This Is For ── */}
        <h2 className={styles.h2}>Who This Is For</h2>
        <p className={styles.p}>
          If you are an established roaster who already owns the coffee side and genuinely
          just needs packaging, then honestly, the packaging companies are fine for you. Go
          order your empty bags. You have already solved the hard part.
        </p>
        <p className={styles.p}>
          But if you are anyone else — a restaurant, a hotel, a boutique, a gym, a corporate
          brand, an entrepreneur, a café that wants a retail line, a DTC brand testing the
          market — then the empty bag is a trap. You do not want to become a coffee sourcing
          expert. You do not want to manage a three-supplier supply chain. You want to put your
          brand on great coffee and start selling.
        </p>
        <p className={styles.p}>
          That is exactly, precisely, the only thing EZPZ does. See how we compare with{" "}
          <Link href="/en/blog/ezpz-vs-rootree-vs-savor-brands-custom-coffee-bags-canada" className={styles.inlineLink}>
            EZPZ vs Rootree vs Savor Brands
          </Link>
          .
        </p>

        {/* ── We Are Coming for the Whole Country ── */}
        <h2 className={styles.h2}>We Are Coming for the Whole Country</h2>
        <p className={styles.p}>
          We are based in Montreal. We roast at{" "}
          <Link href="/en/about" className={styles.inlineLink}>
            Canadian Roasting Society
          </Link>
          , in the same facility as some of the best specialty roasters on the continent. But
          this is not a Montreal story. This is a Canadian story.
        </p>
        <p className={styles.p}>
          Every restaurant in Toronto serving generic coffee it could be branding. Every hotel
          in Vancouver putting anonymous beans in its rooms. Every boutique in Calgary, every
          gym in Ottawa, every corporate office in Halifax, every entrepreneur in every city
          who looked at the empty bag problem and gave up because it was too complicated.
        </p>
        <p className={styles.p}>
          We built EZPZ for all of them. For all of you. The whole country.
        </p>

        <div className={styles.pullQuote}>
          <p className={styles.pullQuoteText}>
            &ldquo;The empty bag era is over. The finished product era starts now.&rdquo;
          </p>
        </div>

        {/* ── Start With One Bag ── */}
        <h2 className={styles.h2}>Start With One Bag</h2>
        <p className={styles.p}>
          Here is how serious we are about killing the empty bag problem. You can order a
          single bag. One. Today.
        </p>
        <p className={styles.p}>
          Go to our{" "}
          <Link href="/en/design" className={styles.inlineLink}>
            design tool
          </Link>
          ,{" "}
          <Link href="/en/design" className={styles.inlineLink}>
            upload your logo
          </Link>
          , choose your coffee, and place an order for exactly one fully branded bag of{" "}
          <Link href="/en/coffee" className={styles.inlineLink}>
            specialty coffee
          </Link>{" "}
          roasted fresh in Montreal. No minimum. No design fee. No supply chain to manage. No
          catch.
        </p>
        <p className={styles.p}>
          Try doing that with any other coffee company in Canada. You cannot. Because they are
          still selling empty bags.
        </p>
        <p className={styles.p}>We are selling the whole thing.</p>

      </article>
    </div>

    {/* ── CTA Banner ────────────────────────────────────────────── */}
    <section className={styles.cta}>
      <div className={styles.ctaInner}>
        <h2 className={styles.ctaTitle}>
          Stop buying empty bags. Start selling finished coffee.
        </h2>
        <div className={styles.ctaButtons}>
          <Link href="/en/design" className={styles.ctaPrimary}>
            Design your bag now
          </Link>
          <Link href="/en/contact" className={styles.ctaSecondary}>
            Get a free quote
          </Link>
        </div>
        <p style={{ marginTop: "1.25rem", fontSize: "0.85rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.6 }}>
          Not ready to design yet?{" "}
          <Link href="/en/contact" style={{ color: "rgba(255,255,255,0.65)", textDecoration: "underline" }}>
            Get a free quote and we will show you exactly what your finished product would cost.
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
