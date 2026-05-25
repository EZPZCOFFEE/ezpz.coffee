import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

import { BLOG_POSTS } from "../data";
import styles from "../custom-coffee-bags-corporate-gifts-canada/blogPost.module.scss";

export const metadata: Metadata = {
  title: "Best Coffee Gifts for Father's Day in Canada 2026 | EZPZ Coffee",
  description:
    "Looking for the perfect Father's Day gift for a coffee-loving dad? Discover the best custom coffee gifts in Canada for 2026 — personalized, unique, and actually useful.",
  alternates: { canonical: "/en/blog/coffee-gifts-fathers-day-canada-2026" },
  openGraph: {
    title: "Best Coffee Gifts for Father's Day in Canada 2026 | EZPZ Coffee",
    description:
      "Looking for the perfect Father's Day gift for a coffee-loving dad? Discover the best custom coffee gifts in Canada for 2026 — personalized, unique, and actually useful.",
    type: "article",
    url: "https://www.ezpz.coffee/en/blog/coffee-gifts-fathers-day-canada-2026",
    images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "Best Coffee Gifts for Father's Day in Canada 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Coffee Gifts for Father's Day in Canada 2026 | EZPZ Coffee",
    description:
      "Looking for the perfect Father's Day gift for a coffee-loving dad? Personalized, unique, and actually useful — the best custom coffee gifts in Canada for 2026.",
    images: ["/assets/banner-01.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "The Best Coffee Gifts for Father's Day in Canada 2026",
  description:
    "Skip the tie. Skip the gift card. Give dad a gift he will use every single morning and think of you every time he does.",
  datePublished: "2026-05-25",
  author: { "@type": "Organization", name: "EZPZ Coffee Team" },
  publisher: {
    "@type": "Organization",
    name: "EZPZ Coffee",
    url: "https://www.ezpz.coffee",
    logo: { "@type": "ImageObject", url: "https://www.ezpz.coffee/logo.svg" },
  },
  url: "https://www.ezpz.coffee/en/blog/coffee-gifts-fathers-day-canada-2026",
  image: "https://www.ezpz.coffee/assets/blog/fathers-day-coffee.svg",
};

const RELATED_SLUGS = [
  "mothers-day-coffee-gift-ideas-canada",
  "custom-coffee-bags-corporate-gifts-canada",
  "custom-coffee-bags-weddings-canada",
];

const RELATED_POSTS = BLOG_POSTS.filter((p) => RELATED_SLUGS.includes(p.slug));

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
          The Best Coffee Gifts for Father&apos;s Day in Canada 2026
        </h1>
        <p className={styles.heroSubtitle}>
          Skip the tie. Skip the gift card. Give dad a gift he will use every single morning
          and think of you every time he does.
        </p>
        <div className={styles.heroMeta}>
          <span>May 25, 2026</span>
          <span className={styles.heroMetaDot} />
          <span>6 min read</span>
        </div>
      </div>
    </section>

    {/* ── TL;DR ─────────────────────────────────────────────────── */}
    <div className={styles.tldr} role="note" aria-label="Article summary">
      <strong className={styles.tldrLabel}>TL;DR</strong>
      <p className={styles.tldrText}>A personalized specialty coffee bag is the best Father&apos;s Day gift for a coffee-loving dad in Canada. EZPZ Coffee creates custom bags with his name, a message from you, and specialty coffee he will love — zero minimum order, ships anywhere in Canada. Order by June 8th for Father&apos;s Day delivery.</p>
    </div>

    {/* ── Article ───────────────────────────────────────────────── */}
    <div className={styles.articleWrapper}>
      <article className={styles.article}>

        <p className={styles.intro}>
          Father&apos;s Day is June 15th. And every year, millions of Canadians face the same
          impossible question: what do you get the dad who has everything? The answer, more often
          than not, ends up being a gift card, a bottle of wine, or something from a hardware store
          that he probably did not need. This year, do something different. If your dad drinks
          coffee — and statistically there is a very good chance he does — a custom specialty coffee
          gift is the most personal, most useful, and most memorable Father&apos;s Day gift you can
          give him. Here is why, and exactly what to order.
        </p>

        <h2 className={styles.h2}>Why Coffee Is the Perfect Father&apos;s Day Gift</h2>
        <p className={styles.p}>
          Coffee is not just a drink for most Canadian dads. It is a ritual. The first thing in
          the morning before anyone else is awake. The quiet moment before the day starts. The
          reward after a long week. Whatever coffee means to your dad specifically, a gift that
          elevates that ritual is a gift that keeps giving every single morning.
        </p>
        <p className={styles.p}>
          Unlike flowers that wilt in a week or chocolates that disappear in an afternoon, a bag
          of specialty coffee lasts three to four weeks. Every single morning your dad makes a cup
          from your gift, he thinks of you. That is the kind of Father&apos;s Day gift that
          actually lands.
        </p>

        <h2 className={styles.h2}>The Best Custom Coffee Gift for Dad — A Personalized Bag</h2>
        <p className={styles.p}>
          The most unique coffee gift you can give your dad in Canada is a custom specialty coffee
          bag with his name on it. Not a generic bag from a grocery store. A bag designed
          specifically for him — with his name, a message from you, and the coffee origin he loves
          most.
        </p>
        <p className={styles.p}>
          At EZPZ Coffee, you can create a fully personalized coffee bag for dad with zero minimum
          order. Order one bag. Add his name. Write a message. Choose his favorite roast. We roast
          it fresh in Montreal and ship it directly to his door anywhere in Canada.
        </p>
        <p className={styles.p}>Ideas for personalizing dad&apos;s bag:</p>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <strong>His name or nickname on the front</strong> — &ldquo;Dad&rdquo;,
            &ldquo;Papa&rdquo;, &ldquo;Pops&rdquo;, or whatever you call him.
          </li>
          <li className={styles.li}>
            <strong>A message that only your family would write</strong> — &ldquo;World&apos;s
            okayest dad&rdquo; if he has a sense of humor, or &ldquo;You always made time for
            a good cup. This one is for you&rdquo; if you want to make him tear up a little.
          </li>
          <li className={styles.li}>
            <strong>His favorite roast level</strong> — bold dark roast for the dad who takes his
            coffee seriously, smooth medium for the easygoing one, bright light roast for the
            adventurous palate.
          </li>
          <li className={styles.li}>
            <strong>His coffee origin</strong> — Ethiopian for something floral and complex,
            Colombian for something balanced and smooth, Brazilian for something rich and
            chocolatey.
          </li>
          <li className={styles.li}>
            <strong>A QR code linking to a personal video message</strong> from the family — this
            one genuinely makes dads emotional.
          </li>
        </ul>

        <h2 className={styles.h2}>Which Coffee Origin Is Right for Your Dad?</h2>
        <p className={styles.p}>
          Choosing the right coffee origin is one of the most thoughtful things you can do when
          personalizing a Father&apos;s Day coffee gift. Here is a simple guide:
        </p>
        <div className={styles.quoteBlock}>
          <p className={styles.quoteText}>
            <strong>The Bold Dad:</strong> Brazil Cerrado, dark roast. Tasting notes of dark
            chocolate, vanilla, and brown sugar. Rich, full-bodied, and unapologetically strong.
            For the dad who drinks his coffee black and means business.
          </p>
        </div>
        <div className={styles.quoteBlock}>
          <p className={styles.quoteText}>
            <strong>The Balanced Dad:</strong> Colombia Huila, medium roast. Tasting notes of
            caramel, red apple, and hazelnut. Smooth, balanced, and universally loved. The
            crowd-pleaser that works for every palate. If you are not sure what your dad prefers,
            start here.
          </p>
        </div>
        <div className={styles.quoteBlock}>
          <p className={styles.quoteText}>
            <strong>The Adventurous Dad:</strong> Ethiopia Yirgacheffe, light roast. Tasting notes
            of blueberry, jasmine, and lemon. Bright, aromatic, and completely unlike anything he
            has had from a grocery store. For the dad who appreciates the unexpected.
          </p>
        </div>
        <div className={styles.quoteBlock}>
          <p className={styles.quoteText}>
            <strong>The Classic Dad:</strong> Guatemala Antigua, medium dark roast. Tasting notes
            of dark chocolate, brown sugar, and almond. Comforting and familiar but with a depth
            that shows genuine quality. For the dad who knows what he likes and likes it done right.
          </p>
        </div>

        <h2 className={styles.h2}>Father&apos;s Day Coffee Gift Ideas Beyond the Bag</h2>
        <p className={styles.p}>
          A personalized coffee bag is the star of any Father&apos;s Day coffee gift, but here
          are some ways to build it into something even more memorable:
        </p>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <strong>The Complete Morning Kit:</strong> A custom coffee bag paired with a quality
            ceramic mug and a small handwritten card. Everything he needs for the perfect morning
            ritual, in one package.
          </li>
          <li className={styles.li}>
            <strong>The Coffee Tasting Flight:</strong> Order three different custom bags — one
            light, one medium, one dark — so dad can taste the difference between origins and
            discover his new favorite. Label each one with tasting notes so it feels like a proper
            tasting experience.
          </li>
          <li className={styles.li}>
            <strong>The Family Coffee Gift:</strong> Get the whole family involved. Each person
            contributes a line to the message on the bag. Mom writes one line, the kids write
            another, and you write the closing. The bag becomes a family artifact, not just a gift.
          </li>
          <li className={styles.li}>
            <strong>The Office Dad Gift:</strong> A custom bag with dad&apos;s company name or
            professional title on it. &ldquo;World&apos;s Best CFO&rdquo; or &ldquo;Senior
            Engineer Fuel&rdquo; — something that acknowledges his professional identity alongside
            his coffee habit.
          </li>
          <li className={styles.li}>
            <strong>The Golf Dad Gift:</strong> Pair a custom dark roast bag with a sleeve of golf
            balls and a personalized note. Coffee for the early morning tee time, balls for the
            round, and a message that shows you actually thought about what he loves.
          </li>
        </ul>

        <h2 className={styles.h2}>Why EZPZ Is the Best Place to Order Father&apos;s Day Coffee in Canada</h2>
        <p className={styles.p}>
          EZPZ Coffee is the only custom coffee bag supplier in Canada with zero minimum order.
          That means you can order one single personalized bag for your dad without committing to
          hundreds of units. Full custom design is always included — you bring the name and message
          and we handle the rest. The coffee is specialty grade, 80 plus on the SCA cupping scale,
          and roasted fresh at Canadian Roasting Society in Montreal.
        </p>
        <p className={styles.p}>
          Orders placed by June 8th are guaranteed to arrive before Father&apos;s Day on June
          15th. After that we cannot promise delivery in time so do not leave it to the last
          minute.
        </p>

        <h2 className={styles.h2}>A Note for the Dads Reading This</h2>
        <p className={styles.p}>
          If you are a dad reading this and thinking someone should get you one of these — we
          respect the self-awareness. Send this article to whoever is responsible for your
          Father&apos;s Day gift. You deserve the good stuff.
        </p>
        <p className={styles.p}>
          And if you are a business owner who happens to be a dad — you already know that a custom
          branded coffee bag is one of the smartest products you can add to your business. The same
          gift that would make your dad&apos;s morning can make your customers&apos; mornings too.{" "}
          <Link href="/en/corporate-coffee-gifts-canada" className={styles.inlineLink}>
            See our corporate coffee gifts page.
          </Link>
        </p>

      </article>
    </div>

    {/* ── CTA Banner ────────────────────────────────────────────── */}
    <section className={styles.cta}>
      <div className={styles.ctaInner}>
        <h2 className={styles.ctaTitle}>Order dad&apos;s personalized coffee bag before June 8th.</h2>
        <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.85rem", margin: "0", letterSpacing: "0.02em" }}>
          Order by June 8th to guarantee delivery before Father&apos;s Day on June 15th.
        </p>
        <div className={styles.ctaButtons}>
          <Link href="/en/design" className={styles.ctaPrimary}>Design his bag now</Link>
          <Link href="/en/fathers-day" className={styles.ctaSecondary}>See gift ideas</Link>
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
