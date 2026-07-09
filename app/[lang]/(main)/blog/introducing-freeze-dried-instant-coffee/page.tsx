import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

import { BLOG_POSTS } from "../data";
import styles from "../custom-coffee-bags-corporate-gifts-canada/blogPost.module.scss";

export const metadata: Metadata = {
  title: "Introducing EZPZ Freeze-Dried Instant Coffee | Specialty Instant, Reinvented",
  description:
    "EZPZ now offers premium freeze-dried instant coffee. Specialty grade, full flavor and aroma preserved, custom branded, zero minimum. Here is what makes it different — and who it is for.",
  alternates: { canonical: "/en/blog/introducing-freeze-dried-instant-coffee" },
  openGraph: {
    title: "Introducing EZPZ Freeze-Dried Instant Coffee | Specialty Instant, Reinvented",
    description:
      "EZPZ now offers premium freeze-dried instant coffee. Specialty grade, full flavor and aroma preserved, custom branded, zero minimum. Here is what makes it different — and who it is for.",
    type: "article",
    url: "https://www.ezpz.coffee/en/blog/introducing-freeze-dried-instant-coffee",
    images: [{ url: "/assets/blog/introducing-instant-coffee.svg", width: 800, height: 420, alt: "Introducing EZPZ Freeze-Dried Instant Coffee" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Introducing EZPZ Freeze-Dried Instant Coffee",
    description: "Specialty grade, freeze-dried, custom branded, zero minimum. Instant coffee, reinvented.",
    images: ["/assets/blog/introducing-instant-coffee.svg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Introducing Freeze-Dried Instant Coffee by EZPZ",
      description:
        "EZPZ now offers premium freeze-dried instant coffee. Specialty grade, full flavor and aroma preserved, custom branded, zero minimum. Here is what makes it different — and who it is for.",
      datePublished: "2026-06-12",
      author: { "@type": "Organization", name: "EZPZ Coffee Team" },
      publisher: { "@type": "Organization", name: "EZPZ Coffee", url: "https://www.ezpz.coffee" },
      image: "https://www.ezpz.coffee/assets/blog/introducing-instant-coffee.svg",
      url: "https://www.ezpz.coffee/en/blog/introducing-freeze-dried-instant-coffee",
      wordCount: 1100,
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the difference between freeze-dried and spray-dried instant coffee?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Spray-dried instant coffee uses high heat to evaporate water from liquid coffee, which destroys most of the volatile aromatic compounds responsible for flavor and aroma. Freeze-drying — also called lyophilization — removes water at very low temperatures using a vacuum, which preserves the structure of the coffee along with its flavor, aroma, and antioxidants. The result is a cup that tastes much closer to freshly brewed coffee.",
          },
        },
        {
          "@type": "Question",
          name: "Is EZPZ instant coffee specialty grade?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. EZPZ freeze-dried instant coffee is made from the same traceable, specialty grade arabica beans used in our custom coffee bags — each scoring 80 or above on the SCA cupping scale. We do not use commercial-grade commodity coffee.",
          },
        },
        {
          "@type": "Question",
          name: "Can I get custom branded instant coffee from EZPZ with no minimum order?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. EZPZ instant coffee is available in custom branded jars, sachets, or single-serve sticks with zero minimum order. You can start with a small run to validate the product before scaling.",
          },
        },
      ],
    },
  ],
};

const MORE_SLUGS = [
  "empty-bag-problem-canadian-coffee-packaging",
  "private-label-coffee-canada-complete-guide",
  "custom-coffee-bags-corporate-gifts-canada",
];

const morePosts = BLOG_POSTS.filter((p) => MORE_SLUGS.includes(p.slug));

const IntroducingInstantCoffeePage = () => {
  return (
    <div className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.heroCategory} style={{ color: "#c43e14" }}>Product Launch</span>
          <h1 className={styles.heroTitle}>Introducing Freeze-Dried Instant Coffee by EZPZ</h1>
          <div className={styles.heroMeta}>
            <span className={styles.heroDate}>June 12, 2026</span>
            <span className={styles.heroReadTime}>5 min read</span>
          </div>
        </div>
        <div className={styles.heroImageWrap}>
          <img
            src="/assets/blog/introducing-instant-coffee.svg"
            alt="Introducing EZPZ Freeze-Dried Instant Coffee"
            className={styles.heroImage}
          />
        </div>
      </section>

      <div className={styles.tldr}>
        <div className={styles.tldrInner}>
          <span className={styles.tldrLabel}>TL;DR</span>
          <p className={styles.tldrText}>
            EZPZ just added freeze-dried instant coffee to the lineup. It is specialty grade, preserves full flavor and aroma, comes in custom branded formats, and has zero minimum order. If you have been looking for a premium instant coffee option under your brand, this is it.
          </p>
        </div>
      </div>

      <div className={styles.articleWrapper}>
        <article className={styles.article}>

          <h2 className={styles.h2}>Why regular instant coffee disappoints</h2>
          <p className={styles.p}>
            Instant coffee has a reputation problem — and it is mostly earned. The cheap instant coffee you find in office kitchens and hotel rooms is made by spray-drying: liquid coffee is blasted with superheated air until the water evaporates, leaving behind a fine powder. The process is fast and cheap, but the heat destroys most of the aromatic compounds that make coffee worth drinking. What you are left with is something that tastes vaguely of coffee but lacks any complexity, body, or finish.
          </p>
          <p className={styles.p}>
            For years, this was just the trade-off: convenience at the cost of quality. If you wanted a great cup, you needed a grinder, a kettle, and a few minutes. Instant was for emergencies. But that assumption has quietly become outdated.
          </p>

          <h2 className={styles.h2}>What freeze-drying actually does</h2>
          <p className={styles.p}>
            Freeze-drying — lyophilization — works differently. Brewed coffee is first frozen into a solid, then placed in a vacuum chamber where the ice sublimates directly into vapor without ever becoming liquid again. Because the process happens at very low temperatures, the volatile aromatic compounds that give specialty coffee its flavor and aroma are preserved intact. So is the structure of the coffee itself: freeze-dried crystals reconstitute quickly and evenly in hot water, without the muddy sediment or flat taste of spray-dried powder.
          </p>
          <p className={styles.p}>
            The result is a cup that tastes like coffee — not like a memory of coffee. You can still taste the origin notes, the brightness, the finish. It dissolves in seconds, but it does not taste like a shortcut.
          </p>

          <h2 className={styles.h2}>Specialty grade, not commodity beans</h2>
          <p className={styles.p}>
            Most instant coffee on the market — even premium-looking brands — is made from robusta or low-grade arabica commodity coffee. The instant format provides cover for using cheaper inputs, because the processing masks most of the flavor anyway.
          </p>
          <p className={styles.p}>
            EZPZ instant coffee is made from the same{" "}
            <Link href="/en/coffee" className={styles.inlineLink}>specialty grade arabica beans</Link> we use in every custom coffee bag — each scoring 80 or above on the{" "}
            <Link href="/en/coffee" className={styles.inlineLink}>SCA cupping scale</Link>, sourced from fully traceable farms, and roasted fresh in Montreal at Canadian Roasting Society. The freeze-drying process preserves enough of the flavor that starting with better beans actually matters.
          </p>

          <h2 className={styles.h2}>Why flavor preservation matters for branded products</h2>
          <p className={styles.p}>
            If you are building a coffee brand, what goes in the package is as much your brand as what is printed on the outside. A coffee that disappoints customers on first use does not get a second chance. This is true whether you are selling bags, capsules, or instant.
          </p>
          <p className={styles.p}>
            Freeze-dried instant coffee closes the gap between convenience and quality in a way that lets you sell it without apologizing for the format. Your customers get the same traceable, specialty grade coffee they would expect from any other EZPZ product — just faster to prepare. That is a brand promise you can stand behind.
          </p>

          <h2 className={styles.h2}>Custom branded, in the format you need</h2>
          <p className={styles.p}>
            EZPZ instant coffee is available with full{" "}
            <Link href="/en/design" className={styles.inlineLink}>custom branded</Link>{" "}
            packaging — your logo, your colors, your messaging. We offer it in glass jars, individual sachets, and single-serve sticks, so you can match the format to your sales channel and audience.
          </p>
          <p className={styles.p}>
            Jars work for retail shelf placement and gifting. Sachets are ideal for hospitality — hotels, airlines, offices — where portion control matters. Single-serve sticks are perfect for subscription boxes, sample kits, and direct-to-consumer brands.
          </p>
          <p className={styles.p}>
            All{" "}
            <Link href="/en/instant-coffee" className={styles.inlineLink}>freeze-dried instant coffee</Link>{" "}
            orders can be combined with your existing{" "}
            <Link href="/en/services/custom-coffee-bags" className={styles.inlineLink}>custom coffee bag line</Link> or ordered independently with no overlap requirement.
          </p>

          <h2 className={styles.h2}>Who it is for</h2>
          <p className={styles.p}>
            Freeze-dried instant coffee is a natural extension for any brand already working with EZPZ, and a strong standalone product for new ones. It is especially well-suited for:
          </p>
          <ul className={styles.p} style={{ paddingLeft: "1.5rem" }}>
            <li style={{ marginBottom: "0.5rem" }}><strong>Hotels and hospitality groups</strong> looking to replace the commodity instant in their rooms with something branded and better</li>
            <li style={{ marginBottom: "0.5rem" }}><strong>Subscription box curators</strong> who want a premium coffee insert without the brewing barrier</li>
            <li style={{ marginBottom: "0.5rem" }}><strong>Corporate gifting programs</strong> where instant format makes preparation easy for recipients</li>
            <li style={{ marginBottom: "0.5rem" }}><strong>Retail brands</strong> entering the coffee category and wanting a format with longer shelf life and no equipment dependency</li>
            <li style={{ marginBottom: "0.5rem" }}><strong>Existing EZPZ clients</strong> who want to offer their customers a convenient companion to their bag coffee</li>
          </ul>
          <p className={styles.p}>
            Like everything EZPZ makes, it starts with{" "}
            <Link href="/en/custom-coffee-bags-no-minimum-canada" className={styles.inlineLink}>zero minimum order</Link>. You can place a small initial run to test the product with your audience before committing to volume.
          </p>

          <h2 className={styles.h2}>How to get started</h2>
          <p className={styles.p}>
            The simplest way to explore freeze-dried instant coffee is to request a sample. Reach out through our{" "}
            <Link href="/en/contact" className={styles.inlineLink}>contact page</Link>, tell us about your brand, and we will send you a sample to evaluate before placing any order.
          </p>
          <p className={styles.p}>
            If you are ready to move forward, head to our{" "}
            <Link href="/en/instant-coffee" className={styles.inlineLink}>instant coffee product page</Link> for a full breakdown of formats, custom branding options, and next steps. Or start your order directly through the design tool and we will follow up with instant coffee options.
          </p>

        </article>
      </div>

      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>Add premium freeze-dried coffee to your brand.</h2>
          <div className={styles.ctaButtons}>
            <Link href="/en/design" className={styles.ctaPrimary}>
              Start your order <ArrowRight size={14} weight="bold" />
            </Link>
            <Link href="/en/contact" className={styles.ctaSecondary}>
              Request a sample
            </Link>
          </div>
        </div>
      </section>

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
                  <span className={styles.moreCardCategory} style={{ color: post.categoryColor }}>{post.category}</span>
                  <h3 className={styles.moreCardTitle}>{post.title}</h3>
                  <p className={styles.moreCardExcerpt}>{post.excerpt}</p>
                  <div className={styles.moreCardFooter}>
                    <span className={styles.moreCardDate}>{post.date}</span>
                    <span className={styles.moreCardReadMore}>Read more <ArrowRight size={12} weight="bold" /></span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default IntroducingInstantCoffeePage;
