import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

import { BLOG_POSTS } from "../data";
import styles from "../custom-coffee-bags-corporate-gifts-canada/blogPost.module.scss";

export const metadata: Metadata = {
  title: "The Best Mother's Day Gift for Coffee Lovers in Canada | EZPZ Coffee",
  description:
    "Looking for a Mother's Day gift that's personal, unique, and actually useful? Discover why a custom coffee bag is the gift every Canadian mom will love in 2026.",
  alternates: { canonical: "/blog/mothers-day-coffee-gift-ideas-canada" },
  openGraph: {
    title: "The Best Mother's Day Gift for Coffee Lovers in Canada | EZPZ Coffee",
    description:
      "Looking for a Mother's Day gift that's personal, unique, and actually useful? Discover why a custom coffee bag is the gift every Canadian mom will love in 2026.",
    type: "article",
    url: "https://www.ezpz.coffee/en/blog/mothers-day-coffee-gift-ideas-canada",
    images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "Best Mother's Day Gift for Coffee Lovers" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Best Mother's Day Gift for Coffee Lovers in Canada | EZPZ Coffee",
    description:
      "Looking for a Mother's Day gift that's personal, unique, and actually useful? Discover why a custom coffee bag is the gift every Canadian mom will love in 2026.",
    images: ["/assets/banner-01.jpg"],
  },
};

const OTHER_POSTS = BLOG_POSTS.filter(
  (p) => p.slug !== "mothers-day-coffee-gift-ideas-canada"
);

const Page = () => (
  <div className={styles.page}>

    {/* ── Hero ──────────────────────────────────────────────────── */}
    <section className={styles.hero}>
      <div className={styles.heroInner}>
        <span className={styles.heroCategory}>Gift Ideas</span>
        <h1 className={styles.heroTitle}>
          Why a Custom Coffee Bag Is the Best Mother&apos;s Day Gift You Can Give
        </h1>
        <p className={styles.heroSubtitle}>
          This Mother&apos;s Day, skip the flowers that wilt and the chocolates that disappear.
          Give her something she will use every single morning and smile every time she does.
        </p>
        <div className={styles.heroMeta}>
          <span>April 22, 2026</span>
          <span className={styles.heroMetaDot} />
          <span>5 min read</span>
        </div>
      </div>
    </section>

    {/* ── Article ───────────────────────────────────────────────── */}
    <div className={styles.articleWrapper}>
      <article className={styles.article}>

        <p className={styles.intro}>
          Mother&apos;s Day is one of those occasions where everyone wants to get it right but most
          people end up defaulting to the same predictable options. Flowers. Brunch. A gift card.
          A candle. These are fine gifts, but they are forgettable. If you want to give your mom
          something she will actually talk about, something that shows you put real thought into it,
          something that keeps giving long after the day itself: a custom coffee bag is the answer.
          Here is why.
        </p>

        <h2 className={styles.h2}>She Drinks Coffee Every Single Day</h2>
        <p className={styles.p}>
          Let&apos;s start with the obvious. If your mom drinks coffee, and statistically there
          is a very good chance she does, then coffee is not just a gift. It is a daily ritual. And
          when her morning ritual involves opening a bag with her name on it, a message from you, and
          specialty coffee you chose just for her: that hits differently than anything you could buy
          off a shelf.
        </p>
        <p className={styles.p}>
          Most gifts are used once or forgotten quickly. A bag of specialty coffee lasts weeks. Every
          single morning, she opens that bag, smells the fresh roast, and thinks of you. That is the
          kind of gift that sticks.
        </p>

        <h2 className={styles.h2}>It Is Completely Personal</h2>
        <p className={styles.p}>
          Here is what makes a custom coffee bag different from any other gift: every single detail
          is chosen by you, for her.
        </p>
        <p className={styles.p}>
          Her name on the bag. A message that only she will understand. The roast level she prefers.
          The origin that matches her taste. Even the colors and style of the design can reflect her
          personality.
        </p>
        <p className={styles.p}>
          You are not picking something off a shelf and hoping it fits. You are building something
          specifically for her. And she will feel that.
        </p>
        <p className={styles.p}>Some ideas for making it personal:</p>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <strong>Her name in big letters on the front</strong>: &ldquo;Mom&rdquo;,
            &ldquo;Maman&rdquo;, her first name, or a nickname only your family uses.
          </li>
          <li className={styles.li}>
            <strong>A message that means something</strong>: &ldquo;To the woman who made every
            morning better&rdquo; or &ldquo;You always made time for a good cup. This one is for
            you.&rdquo;
          </li>
          <li className={styles.li}>
            <strong>Her favorite roast</strong>: if she loves a bold dark roast with her morning
            news, give her that. If she prefers something light and floral, we have that too.
          </li>
          <li className={styles.li}>
            <strong>A QR code</strong> linking to a personal video message from you, this one
            genuinely makes people cry (in the best way).
          </li>
        </ul>

        <h2 className={styles.h2}>The Coffee Is Actually Incredible</h2>
        <p className={styles.p}>
          A personalized gift is only as good as the product inside it. This is where a lot of
          corporate gifting falls flat: beautiful packaging, mediocre product.
        </p>
        <p className={styles.p}>
          At EZPZ, we source exclusively specialty grade coffees. That means every bean in her bag
          has scored at least 80 out of 100 on the Specialty Coffee Association cupping scale. We
          work with producers who farm with intention, harvest with care, and process with precision.
        </p>
        <p className={styles.p}>
          The result is coffee that tastes genuinely exceptional. The kind of coffee she would buy
          herself at a high end café. The kind of coffee she will mention to her friends.
        </p>
        <p className={styles.p}>Here are three options that work beautifully as Mother&apos;s Day gifts:</p>
        <div className={styles.quoteBlock}>
          <p className={styles.quoteText}>
            <strong>The Morning Ritual:</strong> Ethiopia Yirgacheffe, light roast. Tasting notes
            of blueberry, jasmine, and lemon. Bright, aromatic, and perfect for moms who love a
            coffee that feels like a moment of calm before the day starts.
          </p>
        </div>
        <div className={styles.quoteBlock}>
          <p className={styles.quoteText}>
            <strong>The Classic:</strong> Colombia Huila, medium roast. Tasting notes of caramel,
            red apple, and hazelnut. Smooth, balanced, and universally loved. If you are not sure
            what she prefers, this is the one.
          </p>
        </div>
        <div className={styles.quoteBlock}>
          <p className={styles.quoteText}>
            <strong>The Bold One:</strong> Brazil Cerrado, dark roast. Tasting notes of chocolate,
            vanilla, and brown sugar. Rich and full bodied for the mom who takes her coffee strong
            and does not apologize for it.
          </p>
        </div>

        <h2 className={styles.h2}>No One Else Will Give Her This</h2>
        <p className={styles.p}>
          Think about the last five Mother&apos;s Day gifts your mom received. How many of them were
          custom made for her specifically?
        </p>
        <p className={styles.p}>
          Custom coffee bags are still a rare and unexpected gift. Most people have not thought of
          it. Which means when she opens that package and sees her name on a beautifully designed
          specialty coffee bag, she is going to be surprised. And then she is going to show everyone.
        </p>
        <p className={styles.p}>
          This is a gift that gets photographed. That gets posted. That gets mentioned at the next
          family dinner. Not because it is flashy, but because it is genuinely thoughtful in a way
          that most gifts are not.
        </p>

        <h2 className={styles.h2}>It Ships Directly to Her Door</h2>
        <p className={styles.p}>
          One of the most practical things about ordering a custom coffee bag through EZPZ is that
          we ship directly to her. You do not need to wrap it, drive it over, or coordinate a
          surprise delivery.
        </p>
        <p className={styles.p}>
          Just enter her address at checkout and we handle the rest. It arrives beautifully packaged,
          ready to give. You can even include a personal note with the order.
        </p>
        <p className={styles.p}>
          If you want to add a physical card on your end, pair it with something simple: a nice
          mug, a small plant, a handwritten letter. But honestly, the coffee bag stands perfectly
          on its own.
        </p>

        <h2 className={styles.h2}>Order Before May 3rd</h2>
        <p className={styles.p}>
          Mother&apos;s Day this year is May 10th. Orders placed before May 3rd are guaranteed to
          arrive in time. After that we cannot promise delivery before the big day, so do not wait
          until the last minute on this one.
        </p>
        <p className={styles.p}>
          The design process takes less than 10 minutes. You pick your coffee, customize your bag,
          enter her address, and we take care of everything else. From your screen to her kitchen
          counter in under two weeks.
        </p>

        <h2 className={styles.h2}>This Is the Year You Get It Right</h2>
        <p className={styles.p}>
          Every year there is an opportunity to give a gift that actually means something. A gift
          that shows you paid attention, that you know her, that you put thought into it.
        </p>
        <p className={styles.p}>
          A custom coffee bag is that gift. Personal, practical, premium, and completely unique to
          her. No one else will give her this. And she will remember it long after Mother&apos;s Day
          is over.
        </p>

      </article>
    </div>

    {/* ── CTA Banner ────────────────────────────────────────────── */}
    <section className={styles.cta}>
      <div className={styles.ctaInner}>
        <h2 className={styles.ctaTitle}>Design mom&apos;s bag before May 3rd.</h2>
        <div className={styles.ctaButtons}>
          <Link href="/en/design" className={styles.ctaPrimary}>Design her bag now</Link>
          <Link href="/en/mothers-day" className={styles.ctaSecondary}>Learn more</Link>
        </div>
      </div>
    </section>

    {/* ── More from the blog ────────────────────────────────────── */}
    <section className={styles.more}>
      <div className={styles.moreInner}>
        <h2 className={styles.moreTitle}>More from the blog</h2>
        <div className={styles.moreGrid}>
          {OTHER_POSTS.map((post) => (
            <Link
              key={post.slug}
              href={post.published ? `/en/blog/${post.slug}` : "#"}
              className={styles.moreCard}
              aria-disabled={!post.published}
            >
              <div className={styles.moreCardImage}>
                <img src={post.image} alt={post.title} className={styles.moreCardImg} />
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
