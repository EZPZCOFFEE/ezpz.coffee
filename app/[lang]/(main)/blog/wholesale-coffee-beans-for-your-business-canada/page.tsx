import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

import { BLOG_POSTS } from "../data";
import styles from "../custom-coffee-bags-corporate-gifts-canada/blogPost.module.scss";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  return {
    title: "Wholesale Coffee Beans in Canada: A Guide for Restaurants, Cafés & Offices | EZPZ Coffee",
    description:
      "Buying wholesale coffee beans for your restaurant, café, hotel, or office? Here's how bulk coffee supply works in Canada, what to look for, and how to serve consistently great coffee without the hassle.",
    alternates: {
      canonical: `/${lang}/blog/wholesale-coffee-beans-for-your-business-canada`,
      languages: {
        "en-CA": "https://www.ezpz.coffee/en/blog/wholesale-coffee-beans-for-your-business-canada",
        "fr-CA": "https://www.ezpz.coffee/fr/blog/grains-cafe-en-gros-entreprise-canada",
        "x-default": "https://www.ezpz.coffee/en/blog/wholesale-coffee-beans-for-your-business-canada",
      },
    },
    openGraph: {
      title: "Wholesale Coffee Beans in Canada: A Guide for Restaurants, Cafés & Offices | EZPZ Coffee",
      description:
        "Buying wholesale coffee beans for your restaurant, café, hotel, or office? Here's how bulk coffee supply works in Canada, what to look for, and how to serve consistently great coffee without the hassle.",
      type: "article",
      url: `https://www.ezpz.coffee/${lang}/blog/wholesale-coffee-beans-for-your-business-canada`,
      images: [
        {
          url: "/assets/blog/wholesale-coffee-beans-canada.svg",
          width: 800,
          height: 420,
          alt: "Wholesale Coffee Beans for Your Business — The Canadian Guide",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Wholesale Coffee Beans in Canada: A Guide for Businesses | EZPZ Coffee",
      description:
        "How bulk coffee supply works in Canada, what to look for in a supplier, and how to serve great coffee at your restaurant, café, hotel, or office.",
      images: ["/assets/blog/wholesale-coffee-beans-canada.svg"],
    },
  };
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Wholesale Coffee Beans for Your Business: The Canadian Guide",
      description:
        "Buying wholesale coffee beans for your restaurant, café, hotel, or office? Here's how bulk coffee supply works in Canada, what to look for, and how to serve consistently great coffee without the hassle.",
      datePublished: "2026-06-24",
      author: { "@type": "Organization", name: "EZPZ Coffee Team" },
      publisher: {
        "@type": "Organization",
        name: "EZPZ Coffee",
        url: "https://www.ezpz.coffee",
      },
      image: "https://www.ezpz.coffee/assets/blog/wholesale-coffee-beans-canada.svg",
      url: "https://www.ezpz.coffee/en/blog/wholesale-coffee-beans-for-your-business-canada",
      wordCount: 1200,
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is wholesale coffee?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Wholesale coffee is coffee bought in bulk to brew and serve to customers, guests, or staff, rather than packaged under your own brand to resell. It's what restaurants, cafés, hotels, and offices use to serve coffee.",
          },
        },
        {
          "@type": "Question",
          name: "Where can I buy wholesale coffee beans in Canada?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "EZPZ supplies wholesale specialty coffee beans across Canada, roasted fresh in Montreal, available whole bean or ground, with recurring delivery for restaurants, cafés, hotels, and offices.",
          },
        },
        {
          "@type": "Question",
          name: "How much does wholesale coffee cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Wholesale coffee pricing depends on the coffee and your volume, and improves as orders grow. Specialty-grade coffee offers better value than commodity beans through improved customer experience and repeat business.",
          },
        },
        {
          "@type": "Question",
          name: "Can I get wholesale coffee delivered regularly?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. A good wholesale supplier sets up recurring delivery on a schedule matched to your usage, so your business never runs out and the coffee always arrives freshly roasted.",
          },
        },
      ],
    },
  ],
};

const MORE_SLUGS = [
  "how-to-start-a-coffee-brand-canada",
  "private-label-coffee-canada-complete-guide",
  "what-makes-specialty-coffee-traceable",
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

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.heroCategory}>Wholesale</span>
          <h1 className={styles.heroTitle}>
            Wholesale Coffee Beans for Your Business: The Canadian Guide
          </h1>
          <p className={styles.heroSubtitle}>
            Whether you run a restaurant, a café, a hotel, or an office, the coffee you serve says
            something about you. Here&apos;s how to source great wholesale beans in Canada, and
            serve a cup your guests actually remember.
          </p>
          <div className={styles.heroMeta}>
            <span>June 24, 2026</span>
            <span className={styles.heroMetaDot} />
            <span>6 min read</span>
          </div>
        </div>
      </section>

      {/* ── Article ───────────────────────────────────────────────── */}
      <div className={styles.articleWrapper}>
        <article className={styles.article}>

          <p className={styles.intro}>
            The coffee you serve is rarely the first thing a guest notices, but it&apos;s often the
            last thing they remember. A great final cup after a meal, a smooth americano in a hotel
            lobby, a genuinely good office brew — these small moments shape how people feel about
            your business. And they all start with the beans.
          </p>

          <p className={styles.p}>
            If you serve coffee to customers, guests, or staff, you need a reliable wholesale coffee
            supplier: someone who delivers quality beans, consistently, on a schedule that keeps you
            stocked. This guide covers how wholesale coffee works in Canada, what to look for in a
            supplier, and how to get it right.
          </p>

          <p className={styles.p}>
            (And yes, this is also a bit of an introduction: we recently launched our own{" "}
            <Link href={`/${lang}/wholesale-coffee-beans`} className={styles.inlineLink}>
              wholesale coffee bean program
            </Link>
            {" "}— more on that at the end.)
          </p>

          {/* ── What Wholesale Coffee Actually Means ── */}
          <h2 className={styles.h2}>What &ldquo;Wholesale Coffee&rdquo; Actually Means</h2>
          <p className={styles.p}>
            Wholesale coffee is simply coffee bought in bulk to serve, not to resell in branded
            retail bags. It&apos;s the coffee a{" "}
            <Link href={`/${lang}/custom-coffee-bags-restaurants`} className={styles.inlineLink}>
              restaurant
            </Link>{" "}
            brews for its tables, a café pulls for its espresso, a{" "}
            <Link href={`/${lang}/custom-coffee-bags-hotels`} className={styles.inlineLink}>
              hotel
            </Link>{" "}
            offers its guests, or an office keeps in the breakroom.
          </p>
          <p className={styles.p}>
            It&apos;s different from{" "}
            <Link href={`/${lang}/private-label-coffee-canada`} className={styles.inlineLink}>
              private label
            </Link>{" "}
            (coffee packaged under your own brand to sell). Wholesale is about the coffee itself:
            quality, consistency, and a steady supply. You&apos;re buying beans to brew and serve,
            plain and simple.
          </p>

          {/* ── Why Quality Matters ── */}
          <h2 className={styles.h2}>Why the Quality of Your Wholesale Coffee Matters More Than You Think</h2>
          <p className={styles.p}>
            It&apos;s easy to treat coffee as an afterthought — a commodity line item. But here&apos;s
            the thing: coffee is one of the cheapest ways to exceed a customer&apos;s expectations.
          </p>
          <p className={styles.p}>
            Think about it. A guest finishes a nice meal, and the coffee is flat and bitter. That&apos;s
            the note they leave on. Now flip it: the coffee is genuinely excellent — smooth, aromatic,
            memorable. Suddenly the whole experience lifts. For a few cents more per cup, you&apos;ve
            turned a forgettable ending into a reason to come back.
          </p>
          <p className={styles.p}>
            Great coffee also signals care. A business that serves{" "}
            <Link href={`/${lang}/coffee`} className={styles.inlineLink}>
              specialty-grade coffee
            </Link>{" "}
            is telling its customers it pays attention to details. That impression is worth far more
            than the price difference between commodity and specialty beans.
          </p>

          {/* ── What to Look For ── */}
          <h2 className={styles.h2}>What to Look For in a Wholesale Coffee Supplier</h2>
          <p className={styles.p}>
            Not all wholesale coffee is equal. Here&apos;s what actually matters when choosing a
            supplier:
          </p>
          <ul className={styles.ul}>
            <li className={styles.li}>
              <strong>Specialty grade, not commodity.</strong> There&apos;s a real difference.
              Specialty-grade coffee (scored 80+ on the SCA scale) is traceable, carefully sourced,
              and roasted with intention. Commodity coffee is cheap for a reason. If quality matters
              to your business, insist on specialty grade.
            </li>
            <li className={styles.li}>
              <strong>Freshness.</strong> Coffee is at its best within weeks of roasting, not months.
              A supplier who roasts to order and ships fresh will always beat one shipping beans that
              have sat in a warehouse. Ask when the coffee is roasted relative to when it&apos;s
              delivered.
            </li>
            <li className={styles.li}>
              <strong>Consistency.</strong> This is the one businesses underestimate. Your customers
              should get the same great cup every single time. A good wholesale partner locks in your
              coffee and matches it batch after batch, so there are no surprises in the cup.
            </li>
            <li className={styles.li}>
              <strong>Reliable, recurring delivery.</strong> Running out of coffee is not an option
              for a business that serves it. The best suppliers set up a recurring delivery schedule
              tailored to your usage, so you&apos;re always stocked without having to think about it.
            </li>
            <li className={styles.li}>
              <strong>Flexibility.</strong> Your needs will change. A good supplier scales with you,
              whether you need a few kilos a week or a steady high-volume supply, and offers whole
              bean or ground to suit your setup.
            </li>
          </ul>

          {/* ── Whole Bean or Ground ── */}
          <h2 className={styles.h2}>Whole Bean or Ground?</h2>
          <p className={styles.p}>
            A quick practical note. Whole bean is ideal if you have a grinder — and freshly ground
            coffee tastes better. Ground coffee works if you don&apos;t, or if you want consistency
            and speed — just make sure it&apos;s ground to the right size for your brewing method.
            A good wholesale supplier will grind to your specification or supply whole bean, whichever
            fits how you operate.
          </p>

          {/* ── Cost ── */}
          <h2 className={styles.h2}>How Much Does Wholesale Coffee Cost?</h2>
          <p className={styles.p}>
            Wholesale coffee pricing depends on the coffee you choose and your volume, and it
            improves as your orders grow. The key is value, not just price: a slightly higher cost
            per pound for genuinely good, consistent,{" "}
            <Link href={`/${lang}/coffee`} className={styles.inlineLink}>
              specialty-grade coffee
            </Link>{" "}
            pays for itself in customer experience and repeat business. The cheapest beans are rarely
            the best deal.
          </p>
          <p className={styles.p}>
            The smart move is to taste a few options, pick the coffee that fits your business, and
            set up a recurring supply at a volume that makes sense for you.
          </p>

          {/* ── Introducing EZPZ ── */}
          <h2 className={styles.h2}>Introducing EZPZ Wholesale Coffee Beans</h2>
          <p className={styles.p}>
            This is exactly why we launched our{" "}
            <Link href={`/${lang}/wholesale-coffee-beans`} className={styles.inlineLink}>
              wholesale coffee bean program
            </Link>
            .
          </p>
          <p className={styles.p}>
            We roast specialty-grade coffee fresh in Montreal and supply it in bulk to{" "}
            <Link href={`/${lang}/custom-coffee-bags-restaurants`} className={styles.inlineLink}>
              restaurants
            </Link>
            ,{" "}
            <Link href={`/${lang}/custom-coffee-bags-hotels`} className={styles.inlineLink}>
              hotels
            </Link>
            , cafés, offices, and businesses across Canada. The same coffee we use for the{" "}
            <Link href={`/${lang}/white-label`} className={styles.inlineLink}>
              custom brands we work with
            </Link>
            , now available as straightforward wholesale beans for you to serve.
          </p>
          <p className={styles.p}>Here&apos;s what you get:</p>
          <ul className={styles.ul}>
            <li className={styles.li}>
              <Link href={`/${lang}/coffee`} className={styles.inlineLink}>Specialty-grade, traceable coffee</Link> (80+ SCA), single origins and custom blends
            </li>
            <li className={styles.li}>Roasted fresh in Montreal, not sitting in a warehouse</li>
            <li className={styles.li}>Consistent quality, every batch matches</li>
            <li className={styles.li}>Whole bean or ground to your specification</li>
            <li className={styles.li}>Recurring delivery on your schedule, so you never run out</li>
            <li className={styles.li}>Competitive wholesale pricing, thanks to our roasting volume</li>
            <li className={styles.li}>Samples so you can taste before you commit</li>
          </ul>
          <p className={styles.p}>
            Whether you&apos;re a{" "}
            <Link href={`/${lang}/custom-coffee-bags-restaurants`} className={styles.inlineLink}>
              restaurant
            </Link>{" "}
            wanting a crowd-pleasing house coffee, a café after a specialty blend, a{" "}
            <Link href={`/${lang}/custom-coffee-bags-hotels`} className={styles.inlineLink}>
              hotel
            </Link>{" "}
            serving guests, or an office that&apos;s tired of bad breakroom coffee, we&apos;ll help
            you find the right coffee and keep you stocked.
          </p>

          {/* ── Serve Coffee Worth Remembering ── */}
          <h2 className={styles.h2}>Serve Coffee Worth Remembering</h2>
          <p className={styles.p}>
            The coffee you serve is a small cost with an outsized impact. Get it right, and it
            quietly works in your favour every single day: better guest experiences, a stronger
            impression, and customers who come back.
          </p>
          <p className={styles.p}>
            If you&apos;re ready to serve genuinely great coffee, we&apos;d love to send you some
            samples.
          </p>

        </article>
      </div>

      {/* ── CTA Banner ────────────────────────────────────────────── */}
      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>
            Serve coffee your guests will remember.
          </h2>
          <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.7, margin: 0, maxWidth: "480px", textAlign: "center" }}>
            Specialty-grade wholesale beans, roasted fresh in Montreal, delivered on your schedule.
          </p>
          <div className={styles.ctaButtons}>
            <Link href={`/${lang}/wholesale-coffee-beans`} className={styles.ctaPrimary}>
              Explore wholesale coffee
            </Link>
            <Link href={`/${lang}/contact?subject=Wholesale Sample Request`} className={styles.ctaSecondary}>
              Request a free sample
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
              <Link key={post.slug} href={`/${lang}/blog/${post.slug}`} className={styles.moreCard}>
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
}
