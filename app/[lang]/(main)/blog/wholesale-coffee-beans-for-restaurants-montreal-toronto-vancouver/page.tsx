import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

import { BLOG_POSTS } from "../data";
import styles from "../custom-coffee-bags-corporate-gifts-canada/blogPost.module.scss";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata(): Promise<Metadata> {
  return {
    title:
      "Wholesale Coffee Beans for Restaurants in Montreal, Toronto & Vancouver | EZPZ Coffee",
    description:
      "Premium wholesale coffee beans for restaurants in Montreal, Toronto, and Vancouver. Freshly roasted in Montreal, specialty-grade, flexible volumes. Request free samples.",
    alternates: {
      canonical:
        "/en/blog/wholesale-coffee-beans-for-restaurants-montreal-toronto-vancouver",
      languages: {
        "en-CA":
          "https://www.ezpz.coffee/en/blog/wholesale-coffee-beans-for-restaurants-montreal-toronto-vancouver",
        "x-default":
          "https://www.ezpz.coffee/en/blog/wholesale-coffee-beans-for-restaurants-montreal-toronto-vancouver",
      },
    },
    openGraph: {
      title:
        "Wholesale Coffee Beans for Restaurants in Montreal, Toronto & Vancouver | EZPZ Coffee",
      description:
        "Premium wholesale coffee beans for restaurants in Montreal, Toronto, and Vancouver. Freshly roasted in Montreal, specialty-grade, flexible volumes. Request free samples.",
      type: "article",
      url: "https://www.ezpz.coffee/en/blog/wholesale-coffee-beans-for-restaurants-montreal-toronto-vancouver",
      images: [
        {
          url: "/assets/blog/wholesale-coffee-beans-canada.svg",
          width: 800,
          height: 420,
          alt: "Wholesale Coffee Beans for Restaurants in Montreal, Toronto and Vancouver",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title:
        "Wholesale Coffee Beans for Restaurants in Montreal, Toronto & Vancouver | EZPZ Coffee",
      description:
        "Premium wholesale coffee beans for restaurants in Montreal, Toronto, and Vancouver. Freshly roasted in Montreal, specialty-grade, flexible volumes.",
      images: ["/assets/blog/wholesale-coffee-beans-canada.svg"],
    },
  };
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Wholesale Coffee Beans for Restaurants: Why EZPZ Is the Quality Choice in Montreal, Toronto, and Vancouver",
  description:
    "Premium wholesale coffee beans for restaurants in Montreal, Toronto, and Vancouver. Freshly roasted in Montreal, specialty-grade, flexible volumes. Request free samples.",
  datePublished: "2026-10-27",
  dateModified: "2026-10-27",
  author: { "@type": "Organization", name: "EZPZ Coffee" },
  publisher: {
    "@type": "Organization",
    name: "EZPZ Coffee",
    url: "https://www.ezpz.coffee",
    logo: {
      "@type": "ImageObject",
      url: "https://www.ezpz.coffee/logo.svg",
    },
  },
  image:
    "https://www.ezpz.coffee/assets/blog/wholesale-coffee-beans-canada.svg",
  url: "https://www.ezpz.coffee/en/blog/wholesale-coffee-beans-for-restaurants-montreal-toronto-vancouver",
  wordCount: 900,
};

const MORE_SLUGS = [
  "wholesale-coffee-beans-for-your-business-canada",
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
            Wholesale Coffee Beans for Restaurants: Why EZPZ Is the Quality
            Choice in Montreal, Toronto, and Vancouver
          </h1>
          <p className={styles.heroSubtitle}>
            The last thing your guests taste before they leave is often the
            coffee. Here is why more restaurants in Montreal, Toronto, and
            Vancouver are switching to fresh, specialty-grade beans.
          </p>
          <div className={styles.heroMeta}>
            <span>October 27, 2026</span>
            <span className={styles.heroMetaDot} />
            <span>7 min read</span>
          </div>
        </div>
      </section>

      {/* ── Article ───────────────────────────────────────────────── */}
      <div className={styles.articleWrapper}>
        <article className={styles.article}>

          <p className={styles.intro}>
            The last thing your guests taste before they leave is often the
            coffee. A great meal can be remembered fondly, or quietly undone,
            by the cup that ends it. For restaurants in Montreal, Toronto, and
            Vancouver, the beans you serve are not a small detail. They are
            part of your reputation.
          </p>

          <p className={styles.p}>
            At EZPZ Coffee, we roast premium, specialty-grade coffee beans in
            Montreal and supply them{" "}
            <Link href={`/${lang}/wholesale-coffee-beans`} className={styles.inlineLink}>
              wholesale
            </Link>{" "}
            to restaurants across Canada. No gimmicks, no complicated packages,
            just excellent beans, ready to brew and serve to your guests. Here
            is why more restaurants are making the switch.
          </p>

          {/* ── What a restaurant needs ── */}
          <h2 className={styles.h2}>
            What a restaurant actually needs from its coffee supplier
          </h2>
          <p className={styles.p}>
            Running a restaurant is demanding enough without worrying about
            inconsistent coffee. When you choose a{" "}
            <Link href={`/${lang}/wholesale-coffee-beans`} className={styles.inlineLink}>
              wholesale bean partner
            </Link>
            , you need a few things to be true every single time:
          </p>
          <ul className={styles.ul}>
            <li className={styles.li}>
              Quality in the cup, so the coffee lives up to the rest of your menu.
            </li>
            <li className={styles.li}>
              Consistency, so the espresso or drip you serve on a Tuesday tastes
              the same as the one you served last Friday.
            </li>
            <li className={styles.li}>
              Freshness, because coffee is at its best within weeks of roasting,
              not months.
            </li>
            <li className={styles.li}>
              Reliable supply, so you never run out mid-service.
            </li>
            <li className={styles.li}>
              Flexibility, so you can start at the volume that fits your room
              and grow from there.
            </li>
          </ul>
          <p className={styles.p}>EZPZ was built to deliver on all five.</p>

          {/* ── Freshly roasted ── */}
          <h2 className={styles.h2}>
            Freshly roasted in Montreal, not sitting in a warehouse
          </h2>
          <p className={styles.p}>
            A lot of wholesale coffee has been roasted weeks or months before it
            reaches your kitchen. By the time it hits the grinder, much of the
            flavour is already gone. We roast in Montreal in small, careful
            batches and ship quickly, so your beans arrive fresh and full of
            character. Fresher beans mean a richer, more aromatic cup, and a
            noticeable difference your regulars will taste.
          </p>

          {/* ── Specialty-grade ── */}
          <h2 className={styles.h2}>
            Specialty-grade beans your menu deserves
          </h2>
          <p className={styles.p}>
            We work with specialty-grade coffee and roast to bring out the best
            in each origin, from bright and balanced to deep, bold, and
            chocolatey. Whether your room calls for a smooth house drip, a
            dependable espresso base for lattes and cappuccinos, or a dark roast
            with real backbone, we can match beans to the experience you want to
            give your guests. Prefer whole bean to grind in-house for maximum
            freshness, or pre-ground to keep service fast? Your choice, either
            way.
          </p>

          {/* ── Consistency ── */}
          <h2 className={styles.h2}>
            Consistency you can build a service around
          </h2>
          <p className={styles.p}>
            Great coffee is not just about one perfect cup. It is about the
            hundredth cup tasting as good as the first. Our roasting process is
            built for consistency, so your baristas and servers can rely on the
            same flavour profile, shot after shot, day after day. That
            reliability is what lets you put coffee on the menu with confidence.
          </p>

          {/* ── Flexible volumes ── */}
          <h2 className={styles.h2}>
            Flexible wholesale volumes: start where you are
          </h2>
          <p className={styles.p}>
            You should not have to commit to a pallet of beans to get a great{" "}
            <Link href={`/${lang}/wholesale-coffee-beans`} className={styles.inlineLink}>
              wholesale price
            </Link>
            . We keep it flexible, so a small cafe-style bistro and a
            high-volume dining room can both work with us. Start with a modest
            order to dial in your blend and your pour, then scale your volume
            as demand grows. As your orders increase, so does the value of your
            wholesale pricing.
          </p>

          {/* ── Three cities ── */}
          <h2 className={styles.h2}>
            Proudly serving restaurants in Montreal, Toronto, and Vancouver
          </h2>
          <p className={styles.p}>
            We are a Canadian roaster, and we love supporting Canadian
            restaurants from coast to coast. Three cities we are especially
            proud to serve:
          </p>
          <p className={styles.p}>
            <strong>Montreal.</strong> As a Montreal roaster, this is home. The
            city&apos;s dining scene is one of the most vibrant in North
            America, and local restaurants deserve coffee roasted right here,
            delivered fresh. Being local means short transit and beans that
            arrive at their peak.
          </p>
          <p className={styles.p}>
            <strong>Toronto.</strong> Toronto diners expect quality and care in
            everything on the menu, and coffee is no exception. We ship quickly
            across Ontario so GTA restaurants can serve beans that stand up to
            the city&apos;s high standards, with the reliability a busy room
            needs.
          </p>
          <p className={styles.p}>
            <strong>Vancouver.</strong> The West Coast takes its coffee
            seriously, and so do we. We supply Vancouver restaurants with fresh,
            specialty-grade beans that fit a market that genuinely knows and
            appreciates good coffee, backed by dependable delivery across
            British Columbia.
          </p>
          <p className={styles.p}>
            Wherever your restaurant sits in these cities, you get the same
            thing: fresh Montreal-roasted beans, consistent quality, and a
            supplier that treats your coffee program as seriously as you do.
          </p>

          {/* ── Simple to get started ── */}
          <h2 className={styles.h2}>Simple to get started</h2>
          <p className={styles.p}>
            We make it easy to find out whether EZPZ is the right fit for your
            restaurant:
          </p>
          <ol className={styles.ul}>
            <li className={styles.li}>
              <strong>Taste first.</strong> Request a free sample so you and
              your team can judge the quality in your own space, on your own
              equipment.
            </li>
            <li className={styles.li}>
              <strong>Choose your beans.</strong> We will help you select the
              roast and profile that best suits your menu and your guests.
            </li>
            <li className={styles.li}>
              <strong>Set your volume and pricing.</strong> Tell us roughly how
              much coffee you go through, and we will put together{" "}
              <Link href={`/${lang}/wholesale-coffee-beans`} className={styles.inlineLink}>
                wholesale pricing
              </Link>{" "}
              that works for you, with better rates as your volume grows.
            </li>
            <li className={styles.li}>
              <strong>Serve with confidence.</strong> We keep you supplied with
              fresh beans on a schedule that fits your service.
            </li>
          </ol>

          {/* ── Closing ── */}
          <h2 className={styles.h2}>Serve coffee worth remembering</h2>
          <p className={styles.p}>
            Your guests remember how their experience ended. Give them a final
            cup that is as thoughtful as the rest of their meal. If you run a
            restaurant in Montreal, Toronto, or Vancouver and you want premium
            wholesale beans without the hassle, we would love to send you a
            sample.
          </p>
          <p className={styles.p}>
            Ready to taste the difference?{" "}
            <Link href={`/${lang}/contact?subject=Wholesale Sample Request`} className={styles.inlineLink}>
              Reach out to request your free wholesale samples
            </Link>
            .
          </p>

        </article>
      </div>

      {/* ── CTA Banner ────────────────────────────────────────────── */}
      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>
            Serve coffee your guests will remember.
          </h2>
          <p
            style={{
              fontSize: "1rem",
              color: "rgba(255,255,255,0.55)",
              lineHeight: 1.7,
              margin: 0,
              maxWidth: "480px",
              textAlign: "center",
            }}
          >
            Specialty-grade wholesale beans, roasted fresh in Montreal,
            delivered on your schedule.
          </p>
          <div className={styles.ctaButtons}>
            <Link
              href={`/${lang}/wholesale-coffee-beans`}
              className={styles.ctaPrimary}
            >
              Explore wholesale coffee
            </Link>
            <Link
              href={`/${lang}/contact?subject=Wholesale Sample Request`}
              className={styles.ctaSecondary}
            >
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
              <Link
                key={post.slug}
                href={`/${lang}/blog/${post.slug}`}
                className={styles.moreCard}
              >
                <div className={styles.moreCardImage}>
                  <img
                    src={post.image}
                    alt={post.title}
                    loading="lazy"
                    className={styles.moreCardImg}
                  />
                </div>
                <div className={styles.moreCardBody}>
                  <span
                    className={styles.moreCardCategory}
                    style={{ color: post.categoryColor }}
                  >
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
