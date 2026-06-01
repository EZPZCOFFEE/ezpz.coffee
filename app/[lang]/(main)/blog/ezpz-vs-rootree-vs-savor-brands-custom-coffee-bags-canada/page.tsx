import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

import { BLOG_POSTS } from "../data";
import styles from "../custom-coffee-bags-corporate-gifts-canada/blogPost.module.scss";

const SLUG = "ezpz-vs-rootree-vs-savor-brands-custom-coffee-bags-canada";

export const metadata: Metadata = {
  title: "EZPZ vs Rootree vs Savor Brands: Custom Coffee Bags Canada Compared 2026",
  description:
    "Comparing custom coffee bag options in Canada? Here is the honest breakdown of EZPZ Coffee vs Rootree vs Savor Brands — and why Canadian brands are choosing EZPZ.",
  alternates: { canonical: `/en/blog/${SLUG}` },
  openGraph: {
    title: "EZPZ vs Rootree vs Savor Brands: Custom Coffee Bags Canada Compared 2026",
    description:
      "Comparing custom coffee bag options in Canada? Here is the honest breakdown of EZPZ Coffee vs Rootree vs Savor Brands — and why Canadian brands are choosing EZPZ.",
    type: "article",
    url: `https://www.ezpz.coffee/en/blog/${SLUG}`,
    images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "EZPZ vs Rootree vs Savor Brands: Custom Coffee Bags Canada" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "EZPZ vs Rootree vs Savor Brands: Custom Coffee Bags Canada 2026",
    description: "Three Canadian custom coffee bag options. One provides the coffee too. The honest breakdown.",
    images: ["/assets/banner-01.jpg"],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "EZPZ vs Rootree vs Savor Brands: The Honest Comparison for Canadian Brands",
  description:
    "Three Canadian custom coffee bag options. One provides the coffee too. Here is the honest breakdown of EZPZ vs Rootree vs Savor Brands so you can make the right choice for your brand.",
  datePublished: "2026-06-01",
  author: { "@type": "Organization", name: "EZPZ Coffee Team" },
  publisher: {
    "@type": "Organization",
    name: "EZPZ Coffee",
    url: "https://www.ezpz.coffee",
    logo: { "@type": "ImageObject", url: "https://www.ezpz.coffee/logo.svg" },
  },
  url: `https://www.ezpz.coffee/en/blog/${SLUG}`,
  image: "https://www.ezpz.coffee/assets/blog/ezpz-vs-rootree-vs-savor-comparison.svg",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the difference between EZPZ Coffee and Rootree?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Rootree is a packaging company that sells custom coffee bags without coffee included. EZPZ Coffee is a full-service coffee brand builder that provides the specialty coffee, roasting, design, and packaging all in one order with zero minimum.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between EZPZ Coffee and Savor Brands?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Savor Brands is a sustainable packaging company that sells custom coffee bags without coffee included. EZPZ Coffee includes specialty-grade coffee roasted in Montreal, full custom design, and has zero minimum order.",
      },
    },
    {
      "@type": "Question",
      name: "Does Rootree have a minimum order for custom coffee bags?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Rootree requires minimum orders of 500 or more units per SKU. EZPZ Coffee has zero minimum order — you can order one bag or ten thousand.",
      },
    },
    {
      "@type": "Question",
      name: "Does Savor Brands include coffee in their custom bags?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Savor Brands sells packaging only. You need to source your own coffee separately. EZPZ Coffee includes specialty-grade coffee roasted in Montreal in every order.",
      },
    },
    {
      "@type": "Question",
      name: "What is the best custom coffee bag supplier in Canada with no minimum order?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "EZPZ Coffee is the only custom coffee bag supplier in Canada with zero minimum order, full design included, and specialty coffee provided. Rootree and Savor Brands both require 500+ unit minimums and do not include coffee.",
      },
    },
  ],
};

const RELATED_SLUGS = [
  "custom-coffee-bags-vs-custom-mugs-canada",
  "how-to-launch-coffee-brand-canada-2026",
  "custom-coffee-bags-vs-pre-packaged-coffee",
];
const RELATED_POSTS = BLOG_POSTS.filter((p) => RELATED_SLUGS.includes(p.slug));

const COMPARISON_ROWS: [string, string, string, string][] = [
  ["What they provide", "Coffee + bag + design + roasting + fulfillment", "Bag only", "Bag only"],
  ["Coffee included", "✓ Yes, specialty grade 80+ SCA", "✗ Source your own", "✗ Source your own"],
  ["Design included", "✓ Yes, always free", "✗ Extra cost", "✗ Extra cost"],
  ["Roasting included", "✓ Yes, at CRS Montreal", "✗ Arrange your own", "✗ Arrange your own"],
  ["Minimum order", "✓ Zero", "✗ 500+ units", "✗ 500+ units"],
  ["Lead time", "✓ 2–3 weeks", "5–7 weeks", "4–7 weeks"],
  ["Sustainable materials", "✓ Yes", "✓ Yes, specialty", "✓ Yes, specialty"],
  ["Target customer", "Any brand wanting to sell coffee", "Established roasters needing packaging", "Established roasters needing packaging"],
  ["Online ordering", "✓ Design tool available", "✗ Quote required", "✗ Quote required"],
  ["Transparent pricing", "✓ Yes", "✗ Quote required", "✗ Quote required"],
  ["Ships across Canada", "✓ Yes", "✓ Yes", "✓ Yes"],
  ["Ships to USA", "✓ Yes", "Limited", "Limited"],
];

const Page = () => (
  <div className={styles.page}>

    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

    {/* ── Hero ──────────────────────────────────────────────────── */}
    <section className={styles.hero}>
      <div className={styles.heroInner}>
        <span className={styles.heroCategory}>Business Tips</span>
        <h1 className={styles.heroTitle}>
          EZPZ vs Rootree vs Savor Brands: The Honest Comparison for Canadian Brands
        </h1>
        <p className={styles.heroSubtitle}>
          Three Canadian custom coffee bag options. One provides the coffee too. Here is everything
          you need to know before choosing your supplier.
        </p>
        <div className={styles.heroMeta}>
          <span>June 1, 2026</span>
          <span className={styles.heroMetaDot} />
          <span>7 min read</span>
        </div>
      </div>
    </section>

    {/* ── TL;DR ─────────────────────────────────────────────────── */}
    <div className={styles.tldr} role="note" aria-label="Article summary">
      <strong className={styles.tldrLabel}>TL;DR</strong>
      <p className={styles.tldrText}>Rootree and Savor Brands sell the bag. You source the coffee yourself, find a roaster, and meet 500-unit minimums. EZPZ Coffee provides the specialty coffee, the roasting, the design, and the bag — with zero minimum order and a 2 to 3 week turnaround. If you are not an established roaster, EZPZ is the only option that makes practical sense.</p>
    </div>

    {/* ── Article ───────────────────────────────────────────────── */}
    <div className={styles.articleWrapper}>
      <article className={styles.article}>

        <p className={styles.intro}>
          If you have been researching custom coffee bags in Canada you have probably come across
          three names: Rootree, Savor Brands, and EZPZ Coffee. All three are Canadian. All three
          offer custom coffee packaging. And at first glance they might seem interchangeable.
        </p>
        <p className={styles.p}>
          They are not.
        </p>
        <p className={styles.p}>
          The difference between these three companies is fundamental — not just in price or lead
          time, but in what they actually do and who they are built for. This article is the honest
          comparison nobody else has written. We will tell you exactly what Rootree does, exactly
          what Savor Brands does, exactly what EZPZ does, and exactly who should be using each one.
        </p>
        <p className={styles.p}>
          Spoiler: if you are a brand that wants to sell specialty coffee under your own name
          without sourcing beans, finding a roaster, or managing a supply chain — only one of these
          three companies can help you.
        </p>

        <h2 className={styles.h2}>What Is Rootree?</h2>
        <p className={styles.p}>
          Rootree is a Canadian packaging company based in Ontario. They specialize in sustainable,
          compostable flexible packaging — including coffee bags. Their product quality is genuinely
          excellent. They offer a wide range of bag formats, sizes, and sustainable materials
          including home compostable and industrially compostable options. Their printing is high
          quality and their design capabilities are strong.
        </p>
        <div className={styles.quoteBlock}>
          <p className={styles.quoteText}>
            <strong>Rootree is a packaging company. They sell you the bag. The coffee is your problem.</strong>
          </p>
        </div>
        <p className={styles.p}>To use Rootree you need to:</p>
        <ul className={styles.ul}>
          <li className={styles.li}>Already have a coffee source — your own roastery, a contract roaster, or a wholesale coffee supplier you have sourced separately.</li>
          <li className={styles.li}>Have print-ready design files or pay for design services separately.</li>
          <li className={styles.li}>Meet their minimum order quantities which start at 500 units per SKU for most products.</li>
          <li className={styles.li}>Manage your own production timeline, typically 5 to 7 weeks from order to delivery.</li>
          <li className={styles.li}>Handle your own quality control, inventory management, and fulfillment.</li>
        </ul>
        <p className={styles.p}>
          For established coffee roasters and brands that already have their sourcing and production
          infrastructure in place, Rootree is an excellent packaging partner. Their sustainable
          materials are genuinely differentiated and their quality is consistently good.
        </p>
        <p className={styles.p}>
          For a restaurant owner, hotel manager, boutique owner, or brand that simply wants to sell
          great coffee under their own name — Rootree is the wrong starting point. You need a
          coffee supplier, a roaster, a packaging company, and a designer before you can even place
          your first Rootree order.
        </p>

        <h2 className={styles.h2}>What Is Savor Brands?</h2>
        <p className={styles.p}>
          Savor Brands is another Canadian flexible packaging company with a strong focus on
          sustainable coffee packaging. Like Rootree, they produce beautiful, high-quality bags
          with a range of sustainable material options. Their printing capabilities are excellent
          and they have experience working with specialty coffee brands across Canada.
        </p>
        <div className={styles.quoteBlock}>
          <p className={styles.quoteText}>
            <strong>Savor Brands is also a packaging company. They also sell you the bag only.</strong>
          </p>
        </div>
        <p className={styles.p}>
          The same constraints apply: you need your own coffee supply, your own roasting
          arrangement, your own designs, and you need to meet their minimum order requirements
          before you can place an order. Lead times are similar to Rootree at 4 to 7 weeks
          depending on materials and quantities.
        </p>
        <p className={styles.p}>
          Savor Brands is genuinely excellent at what they do. If you are an established roaster
          looking to upgrade your packaging to premium sustainable materials — Savor Brands is worth
          a serious look.
        </p>
        <p className={styles.p}>
          If you are starting from zero and just want to sell coffee under your own brand — Savor
          Brands cannot help you with the most important part: the coffee.
        </p>

        <h2 className={styles.h2}>What Is EZPZ Coffee?</h2>
        <p className={styles.p}>
          EZPZ Coffee is not a packaging company. EZPZ is a full-service coffee brand builder.
        </p>
        <p className={styles.p}>
          The distinction matters enormously. When you work with EZPZ you are not buying a bag and
          then figuring out everything else yourself. You are getting a complete, ready-to-sell
          branded coffee product — from the specialty-grade coffee sourced from traceable farms, to
          the roasting at Canadian Roasting Society in Montreal, to the full custom bag design, to
          the packaged and shipped product delivered to your door.
        </p>
        <p className={styles.p}>EZPZ handles everything:</p>
        <ul className={styles.ul}>
          <li className={styles.li}><strong>Sourcing:</strong> specialty-grade coffee scoring 80 or above on the SCA cupping scale from traceable farms in Ethiopia, Colombia, Guatemala, Brazil, and more.</li>
          <li className={styles.li}><strong>Roasting:</strong> fresh-roasted at Canadian Roasting Society in Montreal, the same facility used by some of the city&apos;s most celebrated specialty coffee brands.</li>
          <li className={styles.li}><strong>Design:</strong> full custom bag design always included at no extra cost. You bring your logo and brand colors. We do the rest.</li>
          <li className={styles.li}><strong>Packaging:</strong> your coffee is packaged in your branded bag, sealed for freshness, and quality-checked before shipment.</li>
          <li className={styles.li}><strong>Fulfillment:</strong> shipped directly to your door anywhere in Canada and the USA.</li>
        </ul>
        <p className={styles.p}>
          And the most important difference of all: EZPZ has zero minimum order. You can order one
          bag or ten thousand bags. Rootree and Savor Brands require minimums of 500 units or more
          before you can even test your concept.
        </p>

        <h2 className={styles.h2}>The Head-to-Head Comparison</h2>

        <div style={{ overflowX: "auto", margin: "var(--spacing-country) 0 var(--spacing-galaxy)" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "clamp(0.78rem, 1.5vw, 0.9rem)", lineHeight: 1.6 }}>
            <thead>
              <tr>
                <th style={{ padding: "0.75em 1em", textAlign: "left", background: "#f5f5f3", borderBottom: "2px solid #e0e0e0", fontWeight: 800, fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "#333", minWidth: "140px" }}>Feature</th>
                <th style={{ padding: "0.75em 1em", textAlign: "center", background: "#ff4200", borderBottom: "2px solid #e03800", fontWeight: 800, fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "#fff", minWidth: "160px" }}>EZPZ Coffee</th>
                <th style={{ padding: "0.75em 1em", textAlign: "center", background: "#f5f5f3", borderBottom: "2px solid #e0e0e0", fontWeight: 800, fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "#555", minWidth: "130px" }}>Rootree</th>
                <th style={{ padding: "0.75em 1em", textAlign: "center", background: "#f5f5f3", borderBottom: "2px solid #e0e0e0", fontWeight: 800, fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "#555", minWidth: "130px" }}>Savor Brands</th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON_ROWS.map(([feature, ezpz, rootree, savor], i) => (
                <tr key={i}>
                  <td style={{ padding: "0.65em 1em", borderBottom: "1px solid #ebebeb", color: "#333", fontWeight: 600 }}>{feature}</td>
                  <td style={{ padding: "0.65em 1em", borderBottom: "1px solid rgba(255,66,0,0.15)", background: "rgba(255,66,0,0.05)", textAlign: "center", color: ezpz.startsWith("✓") ? "#cc3300" : "#555", fontWeight: ezpz.startsWith("✓") ? 700 : 400 }}>{ezpz}</td>
                  <td style={{ padding: "0.65em 1em", borderBottom: "1px solid #ebebeb", textAlign: "center", color: "#666" }}>{rootree}</td>
                  <td style={{ padding: "0.65em 1em", borderBottom: "1px solid #ebebeb", textAlign: "center", color: "#666" }}>{savor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className={styles.h2}>The Real Question: What Do You Actually Need?</h2>
        <p className={styles.p}>
          The right supplier depends entirely on where you are in your coffee brand journey.
        </p>
        <div className={styles.quoteBlock}>
          <p className={styles.quoteText}>
            <strong>You should use Rootree or Savor Brands if:</strong> you already own a roastery
            or have an established contract roasting arrangement, you already have a coffee supply
            chain and just need premium packaging, you are ordering 500 or more units of a single
            SKU, you have 5 to 7 weeks to wait for your packaging to arrive, and you have the
            internal resources to manage design, production, and fulfillment yourself.
          </p>
        </div>
        <div className={styles.quoteBlock}>
          <p className={styles.quoteText}>
            <strong>You should use EZPZ Coffee if:</strong> you want to sell coffee under your own
            brand but do not own a roastery, you want to start with a small order to test the
            market before committing to large quantities, you want full custom design without paying
            extra for it, you need your branded coffee ready in 2 to 3 weeks not 5 to 7, you want
            specialty-grade traceable coffee inside your bag not just a pretty label on generic
            beans, and you want one partner to handle everything from sourcing to your front door.
          </p>
        </div>

        <h2 className={styles.h2}>Why Canadian Brands Are Choosing EZPZ</h2>
        <p className={styles.p}>
          The brands choosing EZPZ are not the brands that Rootree and Savor Brands are built for.
          They are restaurants that want to sell their house blend at the counter. Hotels that want
          branded coffee in every room. Boutiques that want a high-margin lifestyle product.
          Corporate offices that want to gift their own coffee to clients. Gyms selling to loyal
          members. Real estate agents giving closing gifts that stick around for weeks.
        </p>
        <p className={styles.p}>
          For all of these businesses, the EZPZ model is the only one that makes practical sense.
          Telling a Plateau restaurant owner to go source their own green coffee, find a roaster,
          get 500 bags minimum from a packaging company, and manage the whole supply chain
          themselves — that is not a product. That is a second job.
        </p>
        <p className={styles.p}>
          EZPZ eliminates every barrier. Zero minimum. Design included. Coffee included. Roasting
          handled. Shipped to your door. Start selling in 2 to 3 weeks.
        </p>

        <h2 className={styles.h2}>A Note on Sustainability</h2>
        <p className={styles.p}>
          Both Rootree and Savor Brands have built their reputations on sustainable packaging
          materials — compostable films, eco-friendly inks, and responsible manufacturing. This is
          genuinely valuable and something the specialty coffee industry cares deeply about.
        </p>
        <p className={styles.p}>
          EZPZ shares these values. We source from traceable farms that practice responsible
          agriculture. We roast at Canadian Roasting Society in Montreal rather than shipping
          coffee across the world. And we work continuously to offer sustainable packaging options
          for clients who prioritize environmental responsibility.
        </p>
        <p className={styles.p}>
          If sustainable packaging materials are your primary decision-making criterion, Rootree
          and Savor Brands have deeper specialization in that area. If the complete picture — the
          coffee quality, the sourcing ethics, the accessibility, and the sustainability of the
          packaging — matters to you, EZPZ is the answer.
        </p>

        <h2 className={styles.h2}>The Bottom Line</h2>
        <p className={styles.p}>
          Rootree and Savor Brands are excellent companies. If you are an established roaster who
          needs premium sustainable packaging at scale — talk to them. They will serve you well.
        </p>
        <p className={styles.p}>
          If you are any other kind of Canadian business that wants to put your brand on specialty
          coffee — EZPZ Coffee is the only company in Canada built specifically for you. Zero
          minimum order. Full service from bean to branded bag. Ready in 2 to 3 weeks.
        </p>
        <p className={styles.p} style={{ fontWeight: 700, borderLeft: "3px solid #ff4200", paddingLeft: "1em" }}>
          The choice depends on what you need. But if what you need is a complete branded coffee
          product without the complexity — there is only one answer.
        </p>

      </article>
    </div>

    {/* ── CTA Banner ────────────────────────────────────────────── */}
    <section className={styles.cta}>
      <div className={styles.ctaInner}>
        <h2 className={styles.ctaTitle}>Ready for the full service option? Start with one bag.</h2>
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
          {RELATED_POSTS.map((post) => (
            <Link
              key={post.slug}
              href={post.published ? `/en/blog/${post.slug}` : "#"}
              className={styles.moreCard}
              aria-disabled={!post.published}
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
