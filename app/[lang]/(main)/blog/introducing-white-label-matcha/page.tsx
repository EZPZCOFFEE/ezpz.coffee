import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

import { BLOG_POSTS } from "../data";
import styles from "../custom-coffee-bags-corporate-gifts-canada/blogPost.module.scss";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  return {
    title: "Introducing White-Label Organic Matcha | Add Matcha to Your Coffee Brand — EZPZ Coffee",
    description:
      "EZPZ Coffee now offers private-label organic Japanese matcha. Premium grade, certified organic, no minimum on the 85g pouch. Expand your brand with matcha.",
    alternates: {
      canonical: `/${lang}/blog/introducing-white-label-matcha`,
      languages: {
        en: "https://www.ezpz.coffee/en/blog/introducing-white-label-matcha",
        "fr-CA": "https://www.ezpz.coffee/fr/blog/introducing-white-label-matcha",
      },
    },
    openGraph: {
      title: "Introducing White-Label Organic Matcha | Add Matcha to Your Coffee Brand — EZPZ Coffee",
      description:
        "EZPZ Coffee now offers private-label organic Japanese matcha. Premium grade, certified organic, no minimum on the 85g pouch. Expand your brand with matcha.",
      type: "article",
      url: `https://www.ezpz.coffee/${lang}/blog/introducing-white-label-matcha`,
      images: [{ url: "/assets/blog/introducing-white-label-matcha.svg", width: 800, height: 420, alt: "Introducing White-Label Organic Japanese Matcha by EZPZ Coffee" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Introducing White-Label Organic Matcha — EZPZ Coffee",
      description: "Organic Japanese matcha, custom-label, no minimum on the 85g pouch. Add matcha to your brand.",
      images: ["/assets/blog/introducing-white-label-matcha.svg"],
    },
  };
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Introducing White-Label Matcha: Now You Can Add Matcha to Your Brand",
      description:
        "EZPZ Coffee now offers private-label organic Japanese matcha. Premium grade, certified organic, no minimum on the 85g pouch. Expand your brand with matcha.",
      datePublished: "2026-11-16",
      author: { "@type": "Organization", name: "EZPZ Coffee Team" },
      publisher: { "@type": "Organization", name: "EZPZ Coffee", url: "https://www.ezpz.coffee" },
      image: "https://www.ezpz.coffee/assets/blog/introducing-white-label-matcha.svg",
      url: "https://www.ezpz.coffee/en/blog/introducing-white-label-matcha",
      wordCount: 650,
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Can I add matcha to my existing coffee brand through EZPZ?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. EZPZ now offers white-label organic Japanese matcha through the same program as our custom coffee bags. You can add matcha alongside your coffee with no minimum order on the 85g sticker-label pouch.",
          },
        },
        {
          "@type": "Question",
          name: "Is EZPZ matcha certified organic?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. EZPZ matcha is 100% certified organic and a product of Japan. It meets Canadian organic standards and is gluten-free.",
          },
        },
        {
          "@type": "Question",
          name: "What is the minimum order for white-label matcha?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "There is no minimum order for the 85g pouch with your label applied. For fully custom branded pouches with no EZPZ branding, the minimum is 5,000 units. Contact EZPZ for pricing and samples.",
          },
        },
      ],
    },
  ],
};

const MORE_SLUGS = [
  "introducing-freeze-dried-instant-coffee",
  "wholesale-coffee-beans-for-your-business-canada",
  "private-label-coffee-canada-complete-guide",
];

const morePosts = BLOG_POSTS.filter((p) => MORE_SLUGS.includes(p.slug));

export default async function Page({ params }: Props) {
  const { lang } = await params;
  return (
    <div className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.heroCategory} style={{ color: "#c43e14" }}>Product Launch</span>
          <h1 className={styles.heroTitle}>Introducing White-Label Matcha: Now You Can Add Matcha to Your Brand</h1>
          <div className={styles.heroMeta}>
            <span className={styles.heroDate}>November 16, 2026</span>
            <span className={styles.heroReadTime}>4 min read</span>
          </div>
        </div>
        <div className={styles.heroImageWrap}>
          <img
            src="/assets/blog/introducing-white-label-matcha.svg"
            alt="Introducing White-Label Organic Japanese Matcha by EZPZ Coffee"
            className={styles.heroImage}
          />
        </div>
      </section>

      <div className={styles.tldr}>
        <div className={styles.tldrInner}>
          <span className={styles.tldrLabel}>TL;DR</span>
          <p className={styles.tldrText}>
            EZPZ now offers white-label organic Japanese matcha. Same no-minimum program as our coffee bags: your label on an 85g pouch, no minimum order to start. Certified organic, product of Japan. Contact us for pricing and samples.
          </p>
        </div>
      </div>

      <div className={styles.articleWrapper}>
        <article className={styles.article}>

          <p className={styles.p}>
            Big news from the EZPZ team: we are expanding beyond coffee. You can now launch your own organic Japanese matcha under your own brand, through the same simple{" "}
            <Link href="/en/white-label" className={styles.inlineLink}>white-label program</Link>{" "}
            you already know from our custom coffee.
          </p>

          <h2 className={styles.h2}>Why matcha, and why now</h2>
          <p className={styles.p}>
            Matcha has moved from a niche tea to one of the fastest-growing beverages in cafes and online. The customers who love a great cup of your coffee are often the same people reaching for a matcha latte in the afternoon. Offering both lets your brand own more of their day, with no added complexity on your side. We handle the sourcing, the packaging, and the fulfillment, exactly as we do with your coffee.
          </p>

          <h2 className={styles.h2}>About the matcha</h2>
          <p className={styles.p}>
            Our matcha is a premium, 100% pure{" "}
            <Link href="/en/matcha" className={styles.inlineLink}>organic Japanese matcha</Link>{" "}
            green tea:
          </p>
          <ul className={styles.p} style={{ paddingLeft: "1.5rem" }}>
            <li style={{ marginBottom: "0.5rem" }}>Product of Japan, where the finest matcha is grown and milled.</li>
            <li style={{ marginBottom: "0.5rem" }}>Certified organic and gluten-free.</li>
            <li style={{ marginBottom: "0.5rem" }}>Naturally rich in antioxidants, with the smooth, focused energy matcha is loved for.</li>
            <li style={{ marginBottom: "0.5rem" }}>Vibrant colour and a clean, versatile taste that works whisked, in lattes, or in recipes.</li>
            <li style={{ marginBottom: "0.5rem" }}>Available in an 85g pouch, and in bulk.</li>
          </ul>

          <h2 className={styles.h2}>The same easy program as our coffee</h2>
          <p className={styles.p}>
            Adding{" "}
            <Link href="/en/matcha" className={styles.inlineLink}>matcha to your lineup</Link>{" "}
            works just like your custom coffee:
          </p>
          <ul className={styles.p} style={{ paddingLeft: "1.5rem" }}>
            <li style={{ marginBottom: "0.5rem" }}><strong>85g pouch, no minimum.</strong> Your label is applied to our standard pouch, so you can start small and test the market. Like our coffee bags, the standard pouch carries a small EZPZ logo.</li>
            <li style={{ marginBottom: "0.5rem" }}><strong>Bulk available</strong> for larger volumes.</li>
            <li style={{ marginBottom: "0.5rem" }}><strong>Fully custom packaging</strong> — your own fully branded pouch with no EZPZ branding — available at a 5,000-unit minimum.</li>
          </ul>
          <p className={styles.p}>
            Whether you are a{" "}
            <Link href="/en/coffee-dropshipping-canada" className={styles.inlineLink}>dropship brand</Link>{" "}
            that wants to sit matcha right next to your coffee, or a cafe looking for a signature matcha to sell on the shelf, it is an easy addition to your range.
          </p>

          <h2 className={styles.h2}>Ready to add matcha to your brand?</h2>
          <p className={styles.p}>
            We would love to get a sample into your hands and talk through the format that fits your plans. Contact us for pricing and samples at{" "}
            <Link href="mailto:help@ezpz.coffee?subject=Matcha%20Inquiry" className={styles.inlineLink}>help@ezpz.coffee</Link>
            , and we will help you launch your matcha line alongside your coffee.
          </p>

        </article>
      </div>

      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>Add matcha to your brand.</h2>
          <div className={styles.ctaButtons}>
            <Link href={`/${lang}/contact?subject=Matcha%20Inquiry`} className={styles.ctaPrimary}>
              Contact us for pricing <ArrowRight size={14} weight="bold" />
            </Link>
            <Link href={`/${lang}/matcha`} className={styles.ctaSecondary}>
              See the matcha page
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.more}>
        <div className={styles.moreInner}>
          <h2 className={styles.moreTitle}>More from the blog</h2>
          <div className={styles.moreGrid}>
            {morePosts.map((post) => (
              <Link key={post.slug} href={`/${lang}/blog/${post.slug}`} className={styles.moreCard}>
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
}
