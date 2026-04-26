import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

import { BLOG_POSTS } from "../data";
import styles from "../custom-coffee-bags-corporate-gifts-canada/blogPost.module.scss";

export const metadata: Metadata = {
  title: "Custom Coffee Bags for Airbnb Hosts in Canada | EZPZ Coffee",
  description:
    "One small detail that earns five-star reviews. Discover why Canadian Airbnb hosts are adding custom branded coffee to their welcome experience — with no minimum order.",
  alternates: { canonical: "/blog/custom-coffee-bags-airbnb-canada" },
  openGraph: {
    title: "Custom Coffee Bags for Airbnb Hosts in Canada | EZPZ Coffee",
    description:
      "One small detail that earns five-star reviews. Custom branded coffee for Airbnb hosts across Canada, no minimum order.",
    type: "article",
    url: "https://www.ezpz.coffee/en/blog/custom-coffee-bags-airbnb-canada",
    images: [{ url: "/assets/blog/airbnb-coffee.svg", width: 800, height: 420, alt: "Custom Coffee Bags for Airbnb Hosts" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Coffee Bags for Airbnb Hosts in Canada | EZPZ Coffee",
    description: "One small detail that earns five-star reviews. Custom branded coffee for Airbnb hosts, no minimum order.",
    images: ["/assets/blog/airbnb-coffee.svg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Custom Coffee Bags for Airbnb Hosts in Canada",
  description: "One small detail that turns a good stay into a five-star review. Here's why Canadian Airbnb hosts are adding custom branded coffee to their welcome experience.",
  datePublished: "2026-04-26",
  author: { "@type": "Organization", name: "EZPZ Coffee Team" },
  publisher: {
    "@type": "Organization",
    name: "EZPZ Coffee",
    url: "https://www.ezpz.coffee",
    logo: { "@type": "ImageObject", url: "https://www.ezpz.coffee/logo.svg" },
  },
  url: "https://www.ezpz.coffee/en/blog/custom-coffee-bags-airbnb-canada",
  image: "https://www.ezpz.coffee/assets/blog/airbnb-coffee.svg",
};

const OTHER_POSTS = BLOG_POSTS.filter(
  (p) => p.slug !== "custom-coffee-bags-airbnb-canada" && p.published
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
        <span className={styles.heroCategory}>Hosting Tips</span>
        <h1 className={styles.heroTitle}>
          Custom Coffee Bags for Airbnb Hosts in Canada
        </h1>
        <p className={styles.heroSubtitle}>
          Guests remember the details. A custom branded coffee bag on the counter when they arrive is
          the kind of thoughtful touch that turns a good stay into a five-star review.
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
          The short-term rental market in Canada is more competitive than ever. In Montreal, Toronto,
          Vancouver, Quebec City, and hundreds of smaller markets across the country, hosts are
          constantly looking for ways to stand out from the listing next door and earn that all-important
          five-star rating. Most hosts focus on the big things — a clean space, fast WiFi, a comfortable
          bed. But the hosts with the best reviews know that it is the small, unexpected touches that
          guests remember and write about. A custom coffee bag is one of the simplest, most affordable,
          and most memorable of those touches.
        </p>

        <h2 className={styles.h2}>Why Coffee Is the Perfect Airbnb Welcome Gift</h2>
        <p className={styles.p}>
          Think about the last time you arrived somewhere after a long drive or a red-eye flight. The
          first thing most of us want is a good cup of coffee. When a guest walks into your Airbnb and
          sees a beautiful bag of specialty coffee sitting on the counter — with your property name on
          it, a personal welcome message, and quality beans inside — that moment lands differently than
          a generic basket of crackers and jam.
        </p>
        <p className={styles.p}>
          Coffee is consumed daily by the majority of Canadian adults. It is not seasonal, it is not
          dietary-restricted for most people, and it is something that guests genuinely use and
          appreciate during their stay. A great bag of coffee signals that you have put thought into
          their experience before they even unpacked.
        </p>

        <h2 className={styles.h2}>What to Put on Your Bag</h2>
        <p className={styles.p}>
          The design of your custom coffee bag is where you can really make an impression. Here are
          some ideas that work particularly well for Airbnb hosts:
        </p>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <strong>Your property name:</strong> whether it is a cozy chalet in Mont-Tremblant, a
            waterfront cottage in the Muskokas, or a loft in Old Montreal — your property name on the
            bag turns a commodity into a keepsake.
          </li>
          <li className={styles.li}>
            <strong>A personal welcome message:</strong> something simple like &ldquo;Welcome to the
            nest. The best coffee shop in the neighbourhood is three blocks north — but this one is
            just as good.&rdquo;
          </li>
          <li className={styles.li}>
            <strong>A QR code:</strong> link to your local neighbourhood guide, your house manual, or
            a curated list of your favourite restaurants and activities. Guests love local
            recommendations and a QR code makes it effortless to access them.
          </li>
          <li className={styles.li}>
            <strong>Your Instagram handle:</strong> if you want guests to share their stay, make it
            easy for them to tag you.
          </li>
        </ul>

        <h2 className={styles.h2}>No Minimum Order — Start With Just a Few Bags</h2>
        <p className={styles.p}>
          One of the biggest misconceptions hosts have when they first explore custom coffee is that
          you need to order hundreds of units to make it worthwhile. At EZPZ Coffee, there is no
          minimum order whatsoever. You can order three bags for your next three bookings, test how
          guests respond, and then reorder when you run out.
        </p>
        <p className={styles.p}>
          This makes custom branded coffee completely accessible for independent Airbnb hosts — not
          just professional property management companies. Whether you have one listing or twenty,
          the process is the same. And because{" "}
          <Link href="/en/design" className={styles.inlineLink}>
            the online design tool
          </Link>{" "}
          takes less than 10 minutes, you can have your first order placed today.
        </p>

        <h2 className={styles.h2}>What Kind of Coffee Should You Choose?</h2>
        <p className={styles.p}>
          At EZPZ, we source exclusively specialty-grade coffees that score 80 or above on the
          Specialty Coffee Association cupping scale. Here are the three profiles that work best
          for Airbnb welcome bags:
        </p>
        <div className={styles.quoteBlock}>
          <p className={styles.quoteText}>
            <strong>Light &amp; Bright:</strong> Ethiopia Yirgacheffe — blueberry, jasmine, lemon.
            Perfect for guests who love a nuanced, aromatic morning cup. Ideal for urban properties
            and design-forward spaces.
          </p>
        </div>
        <div className={styles.quoteBlock}>
          <p className={styles.quoteText}>
            <strong>Smooth &amp; Balanced:</strong> Colombia Huila — caramel, red apple, hazelnut.
            The crowd-pleaser. Works for every type of guest and every type of property. Universally
            loved across Canada.
          </p>
        </div>
        <div className={styles.quoteBlock}>
          <p className={styles.quoteText}>
            <strong>Bold &amp; Rich:</strong> Brazil Cerrado — chocolate, vanilla, brown sugar. Great
            for chalet and cottage properties where guests want a warming, full-bodied morning brew.
          </p>
        </div>

        <h2 className={styles.h2}>The Five-Star Review Impact</h2>
        <p className={styles.p}>
          Airbnb reviews are the lifeblood of a successful listing. Every detail that makes a guest
          feel genuinely welcomed contributes to that rating. Custom coffee bags show up in reviews
          more often than you might expect. Guests mention the coffee specifically because it feels
          personal, because the quality is genuinely good, and because it is an unexpected delight
          in a world of generic welcome kits.
        </p>
        <p className={styles.p}>
          The cost of a custom coffee bag per booking is modest — far less than many of the other
          amenities hosts invest in. But the return in guest satisfaction, word of mouth, and review
          quality is disproportionate to the price.
        </p>

        <h2 className={styles.h2}>Ships Across Canada — Fast</h2>
        <p className={styles.p}>
          EZPZ Coffee ships to every province in Canada. Whether your property is in downtown
          Toronto, a ski chalet in Whistler, a waterfront rental in Prince Edward Island, or a
          heritage home in Old Quebec — we ship directly to you. First orders typically arrive
          within 2 to 3 weeks from design approval. Repeat orders are faster since your design is
          already on file. See all{" "}
          <Link href="/en/locations" className={styles.inlineLink}>markets we serve across Canada</Link>.
        </p>
        <p className={styles.p}>
          Want to see how we compare to other custom coffee suppliers in Canada?{" "}
          <Link href="/en/compare" className={styles.inlineLink}>See our full comparison</Link> —
          we are the only supplier with zero minimums, free design, and an online tool that works
          in minutes.
        </p>

      </article>
    </div>

    {/* ── CTA Banner ────────────────────────────────────────────── */}
    <section className={styles.cta}>
      <div className={styles.ctaInner}>
        <h2 className={styles.ctaTitle}>Design your Airbnb welcome bag today.</h2>
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
