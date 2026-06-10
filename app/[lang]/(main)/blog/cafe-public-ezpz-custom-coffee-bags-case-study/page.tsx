import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

import { BLOG_POSTS } from "../data";
import styles from "../custom-coffee-bags-corporate-gifts-canada/blogPost.module.scss";

export const metadata: Metadata = {
  title: "How Café Public Launched Their Own Branded Coffee Bag With EZPZ | Case Study",
  description:
    "Café Public partnered with EZPZ Coffee to create the Mélange Café Public — a custom branded specialty coffee bag roasted in Montreal. Here is the full story.",
  alternates: { canonical: "/en/blog/cafe-public-ezpz-custom-coffee-bags-case-study" },
  openGraph: {
    title: "How Café Public Launched Their Own Branded Coffee Bag With EZPZ | Case Study",
    description:
      "Café Public partnered with EZPZ Coffee to create the Mélange Café Public — a custom branded specialty coffee bag roasted in Montreal. Here is the full story.",
    type: "article",
    url: "https://www.ezpz.coffee/en/blog/cafe-public-ezpz-custom-coffee-bags-case-study",
    images: [
      {
        url: "/assets/blog/cafe-public-case-study.svg",
        width: 800,
        height: 420,
        alt: "Café Public × EZPZ Coffee — Mélange Café Public Case Study",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Café Public Launched Their Own Branded Coffee With EZPZ | Case Study",
    description:
      "One of Quebec's most exciting specialty coffee platforms chose EZPZ to create their signature blend. Here is the full story.",
    images: ["/assets/blog/cafe-public-case-study.svg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "How Café Public Launched Their Own Branded Coffee With EZPZ",
      description:
        "Café Public partnered with EZPZ Coffee to create the Mélange Café Public — a custom branded specialty coffee bag roasted in Montreal.",
      datePublished: "2026-06-10",
      author: { "@type": "Organization", name: "EZPZ Coffee Team" },
      publisher: {
        "@type": "Organization",
        name: "EZPZ Coffee",
        url: "https://www.ezpz.coffee",
      },
      image: "https://www.ezpz.coffee/assets/blog/cafe-public-case-study.svg",
      url: "https://www.ezpz.coffee/en/blog/cafe-public-ezpz-custom-coffee-bags-case-study",
      wordCount: 1100,
      about: {
        "@type": "Organization",
        name: "Café Public",
        url: "https://cafepublic.ca",
      },
    },
    {
      "@type": "Organization",
      name: "Café Public",
      url: "https://cafepublic.ca",
      description:
        "Quebec-based online specialty coffee platform featuring 60+ micro-roasters from across the province.",
    },
  ],
};

const MORE_SLUGS = [
  "canadian-roasting-society-montreal-best-roaster",
  "private-label-coffee-canada-complete-guide",
  "ezpz-vs-rootree-vs-savor-brands-custom-coffee-bags-canada",
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
          How Café Public Launched Their Own Branded Coffee With EZPZ
        </h1>
        <p className={styles.heroSubtitle}>
          From concept to shelf in weeks. How one of Quebec&apos;s most exciting specialty coffee
          platforms created their own signature blend — roasted fresh in Montreal with zero
          complications.
        </p>
        <div className={styles.heroMeta}>
          <span>June 10, 2026</span>
          <span className={styles.heroMetaDot} />
          <span>5 min read</span>
        </div>
      </div>
    </section>

    {/* ── TL;DR ─────────────────────────────────────────────────── */}
    <div className={styles.tldr} role="note" aria-label="Article summary">
      <strong className={styles.tldrLabel}>TL;DR</strong>
      <p className={styles.tldrText}>
        Café Public — Quebec&apos;s curated online marketplace for 60+ specialty micro-roasters —
        partnered with EZPZ Coffee to launch the{" "}
        <a
          href="https://cafepublic.ca/products/melange-cafe-public"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.inlineLink}
        >
          Mélange Café Public
        </a>
        : a 250g Brazilian specialty blend, medium dark roast, roasted at{" "}
        <a
          href="https://www.canadianroastingsociety.ca"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.inlineLink}
        >
          Canadian Roasting Society
        </a>{" "}
        in Montreal. From brief to finished product in weeks — with zero minimum order and full
        custom design included.
      </p>
    </div>

    {/* ── Article ───────────────────────────────────────────────── */}
    <div className={styles.articleWrapper}>
      <article className={styles.article}>

        <p className={styles.intro}>
          Some collaborations just make sense. Café Public is one of Quebec&apos;s most exciting
          specialty coffee platforms — a curated online marketplace featuring over 60
          micro-roasters from across the province, helping Quebecers discover and buy exceptional
          coffee from independent producers they would never have found on their own. When they
          decided it was time to launch their own signature blend, they came to EZPZ Coffee.
        </p>
        <p className={styles.p}>
          The result is the{" "}
          <a
            href="https://cafepublic.ca/products/melange-cafe-public"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.inlineLink}
          >
            Mélange Café Public
          </a>{" "}
          — a{" "}
          <Link href="/en/design" className={styles.inlineLink}>
            custom branded specialty coffee bag
          </Link>
          , roasted by EZPZ at{" "}
          <a
            href="https://www.canadianroastingsociety.ca"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.inlineLink}
          >
            Canadian Roasting Society
          </a>{" "}
          in Montreal, and now available directly on cafepublic.ca. This is the story of how it
          came together.
        </p>

        {/* ── Who Is Café Public ── */}
        <h2 className={styles.h2}>Who Is Café Public?</h2>
        <p className={styles.p}>
          Café Public is a Quebec-based online specialty coffee platform with a mission to make
          the world of micro-roasters accessible to every coffee lover in the province. Their
          platform features over 60 independent roasters — names like Ambros, Canal, Dispatch,
          Kittel, Micro Espresso, Myriade, Pista, Saint-Henri, Traffic, and dozens more —
          organized by flavor profile, brewing method, and roaster so customers can discover
          exactly the coffee they are looking for.
        </p>
        <p className={styles.p}>
          They are not just a store. They are an introduction to what specialty coffee can be.
          Their discovery boxes and subscription service introduce Quebecers to roasters they
          would never have encountered otherwise, building a community around the craft of
          specialty coffee in a way that serves both consumers and the independent roasters they
          champion.
        </p>
        <p className={styles.p}>
          When Café Public decided to create their own house blend, the brief was clear: it
          needed to reflect their mission. An introduction to micro-roaster coffee. Classic and
          comforting enough to bring a broad audience into specialty coffee. But genuinely
          excellent — crafted to the standards of the world they have spent years celebrating.
        </p>

        {/* ── The Product ── */}
        <h2 className={styles.h2}>The Product — Mélange Café Public</h2>
        <p className={styles.p}>
          The{" "}
          <a
            href="https://cafepublic.ca/products/melange-cafe-public"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.inlineLink}
          >
            Mélange Café Public
          </a>{" "}
          is a 250g bag of{" "}
          <Link href="/en/coffee" className={styles.inlineLink}>
            specialty-grade
          </Link>{" "}
          Brazilian coffee, roasted by EZPZ at Canadian Roasting Society in Montreal. It was
          designed to be exactly what Café Public&apos;s audience needed: a gateway coffee. A
          bridge from the commercial blends most Quebecers grew up with into the richer, more
          intentional world of micro-roaster specialty coffee.
        </p>

        <div className={styles.addressCard} style={{ background: "#3b1a0a", borderColor: "#6b3520" }}>
          <span className={styles.addressCardLabel} style={{ color: "#e8b88a" }}>Mélange Café Public — Product Details</span>
          <span className={styles.addressCardLine} style={{ color: "#f0d4b8" }}>Origin: Brazil · Process: Various</span>
          <span className={styles.addressCardLine} style={{ color: "#f0d4b8" }}>Flavor profile: Praliné and chocolaté</span>
          <span className={styles.addressCardLine} style={{ color: "#f0d4b8" }}>Tasting notes: Classic, chocolate, and roasted hazelnuts</span>
          <span className={styles.addressCardLine} style={{ color: "#f0d4b8" }}>Recommendations: Espresso and classic filter</span>
          <span className={styles.addressCardLine} style={{ color: "#f0d4b8" }}>Roast: Medium dark — approachable, comforting, specialty grade</span>
        </div>

        <p className={styles.p}>
          The description on their site says it perfectly:{" "}
          <em>
            &ldquo;Le pont idéal pour passer du café commercial vers le café des
            micro-torréfacteurs.&rdquo;
          </em>{" "}
          The ideal bridge from commercial coffee to micro-roaster coffee.
        </p>
        <p className={styles.p}>
          The bag design reflects the Café Public brand — clean, distinctive, and instantly
          recognizable as belonging to the same platform their customers already trust for
          discovering the best specialty coffee in Quebec.
        </p>

        {/* ── Why EZPZ ── */}
        <h2 className={styles.h2}>Why Café Public Chose EZPZ</h2>
        <p className={styles.p}>
          Café Public knows the Quebec coffee world better than almost anyone. They work with
          over 60 roasters. They have tasted hundreds of coffees. When they decided to launch
          their own product, they had plenty of options.
        </p>
        <p className={styles.p}>
          They chose EZPZ Coffee for three reasons.
        </p>
        <p className={styles.p}>
          First, the roasting infrastructure. EZPZ produces all its coffee at{" "}
          <a
            href="https://www.canadianroastingsociety.ca"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.inlineLink}
          >
            Canadian Roasting Society
          </a>{" "}
          in Montreal — the same facility shared by some of the city&apos;s most celebrated
          specialty brands including Micro Espresso, Traffic, Myriade, and Ambros. For a
          platform built on celebrating Montreal&apos;s micro-roasting community, roasting at CRS
          was not just a practical choice. It was the right one.
        </p>
        <p className={styles.p}>
          Second, the flexibility. Café Public did not need to commit to thousands of units to
          test their own product. EZPZ&apos;s{" "}
          <Link href="/en/custom-coffee-bags-no-minimum-canada" className={styles.inlineLink}>
            zero minimum order
          </Link>{" "}
          model meant they could launch the Mélange Café Public at exactly the scale that made
          sense for them — and scale as demand grew.
        </p>
        <p className={styles.p}>
          Third, the quality guarantee. Every EZPZ coffee is{" "}
          <Link href="/en/coffee" className={styles.inlineLink}>
            specialty grade
          </Link>
          , scoring 80 or above on the SCA cupping scale. For a platform whose entire identity
          is built around the quality standards of specialty coffee, anything less would have
          been off-brand.
        </p>

        {/* ── How It Came Together ── */}
        <h2 className={styles.h2}>How It Came Together</h2>
        <p className={styles.p}>
          The process was straightforward by design — which is the entire point of the EZPZ
          model.
        </p>
        <p className={styles.p}>
          Café Public came to us with a clear brief: a Brazilian blend, medium dark roast,
          approachable tasting profile, designed as an entry point to specialty coffee for their
          broader audience. A coffee that was genuinely good enough to be sold on a platform
          alongside Pista and Saint-Henri, but accessible enough to bring a new audience in.
        </p>
        <p className={styles.p}>
          We sourced a{" "}
          <Link href="/en/coffee" className={styles.inlineLink}>
            specialty-grade
          </Link>{" "}
          Brazilian lot from our curated selection of traceable origins — clean, consistent, with
          the natural chocolate and hazelnut notes that Brazilian coffees are known for at their
          best. The roast profile was developed at{" "}
          <a
            href="https://www.canadianroastingsociety.ca"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.inlineLink}
          >
            Canadian Roasting Society
          </a>{" "}
          to bring out those notes while keeping the body approachable for espresso and classic
          filter brewing.
        </p>
        <p className={styles.p}>
          The design was developed to reflect the Café Public visual identity — minimal,
          confident, and clearly part of their brand family.
        </p>

        <div className={styles.pullQuote}>
          <p className={styles.pullQuoteText}>
            &ldquo;From brief to finished product, the timeline was weeks — not months. The
            Mélange Café Public is now live on cafepublic.ca, available for $19 for a 250g bag
            of whole bean, and listed prominently in their Nouveautés collection.&rdquo;
          </p>
        </div>

        {/* ── The Bigger Picture ── */}
        <h2 className={styles.h2}>The Bigger Picture</h2>
        <p className={styles.p}>
          The Mélange Café Public is a perfect example of what EZPZ was built to enable. A brand
          with a clear identity, a defined audience, and a specific vision for a product — but
          without the infrastructure, the minimum order requirements, or the complexity of
          building a roasting operation from scratch.
        </p>
        <p className={styles.p}>
          EZPZ handled the sourcing, the roasting, the packaging, and the delivery. Café Public
          handled what they do best: curating, communicating, and connecting their audience with
          great coffee.
        </p>
        <p className={styles.p}>
          The product on their shelf is 100% theirs. The brand, the name, the story, the
          positioning. EZPZ is the production partner in the background — making sure the coffee
          inside the bag is as good as the brand on the outside.
        </p>
        <p className={styles.p}>
          This is the EZPZ model. And it works.
        </p>

        {/* ── What This Means for Your Brand ── */}
        <h2 className={styles.h2}>What This Means for Your Brand</h2>
        <p className={styles.p}>
          If you run a business in Quebec — a café, a restaurant, a food platform, a retailer, a
          subscription service — and you have ever thought about launching your own coffee
          product, the Mélange Café Public is proof that it is simpler than you think.
        </p>
        <p className={styles.p}>
          Café Public did not need to invest in a roaster. They did not need to meet a 500 unit
          minimum. They did not need to hire a designer or find a separate packaging supplier.
          They came to EZPZ with a vision and we helped them bring it to life — roasted fresh at{" "}
          <a
            href="https://www.canadianroastingsociety.ca"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.inlineLink}
          >
            Canadian Roasting Society
          </a>
          , packaged in their brand, and ready to sell in weeks.
        </p>
        <p className={styles.p}>
          <Link href="/en/custom-coffee-bags-no-minimum-canada" className={styles.inlineLink}>
            Zero minimum order.
          </Link>{" "}
          Full{" "}
          <Link href="/en/design" className={styles.inlineLink}>
            custom design
          </Link>{" "}
          always included.{" "}
          <Link href="/en/coffee" className={styles.inlineLink}>
            Specialty grade coffee
          </Link>{" "}
          from traceable origins. Roasted in Montreal at one of the finest specialty coffee
          facilities in Canada.
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
          Ready to launch your own branded coffee like Café Public?
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
