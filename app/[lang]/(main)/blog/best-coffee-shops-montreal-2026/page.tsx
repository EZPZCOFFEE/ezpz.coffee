import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

import { BLOG_POSTS } from "../data";
import styles from "./blogPost.module.scss";

export const metadata: Metadata = {
  title: "15 Best Coffee Shops in Montreal 2026 | Ultimate Guide | EZPZ Coffee",
  description:
    "Discover the 15 best coffee shops in Montreal in 2026. From world-ranked specialty cafés to hidden neighbourhood gems — your ultimate Montreal coffee guide from the experts at EZPZ Coffee.",
  alternates: { canonical: "/en/blog/best-coffee-shops-montreal-2026" },
  openGraph: {
    title: "15 Best Coffee Shops in Montreal 2026 | Ultimate Guide | EZPZ Coffee",
    description:
      "Discover the 15 best coffee shops in Montreal in 2026. From world-ranked specialty cafés to hidden neighbourhood gems — your ultimate Montreal coffee guide from the experts at EZPZ Coffee.",
    type: "article",
    url: "https://www.ezpz.coffee/en/blog/best-coffee-shops-montreal-2026",
    images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "Best Coffee Shops in Montreal 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "15 Best Coffee Shops in Montreal 2026 | EZPZ Coffee",
    description:
      "Discover the 15 best coffee shops in Montreal in 2026. From world-ranked specialty cafés to hidden neighbourhood gems.",
    images: ["/assets/banner-01.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": "The 15 Best Coffee Shops in Montreal in 2026",
      "description": "Discover the 15 best coffee shops in Montreal in 2026. From world-ranked specialty cafés to hidden neighbourhood gems.",
      "datePublished": "2026-04-25",
      "author": { "@type": "Organization", "name": "EZPZ Coffee" },
      "publisher": {
        "@type": "Organization",
        "name": "EZPZ Coffee",
        "url": "https://www.ezpz.coffee",
      },
    },
    {
      "@type": "CafeOrCoffeeShop",
      "name": "Café Pista",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "6524 Boulevard Saint-Laurent",
        "addressLocality": "Montréal",
        "addressRegion": "QC",
        "postalCode": "H2S 3C6",
        "addressCountry": "CA",
      },
      "description": "Montreal's highest-ranked café on the World's 100 Best Coffee Shops 2026 list, ranked #34 out of 4,600+ establishments.",
    },
    {
      "@type": "CafeOrCoffeeShop",
      "name": "Café Saint-Henri",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "3632 Notre-Dame Street West",
        "addressLocality": "Montréal",
        "addressRegion": "QC",
        "postalCode": "H4C 1P7",
        "addressCountry": "CA",
      },
      "description": "Ranked #60 on the World's 100 Best Coffee Shops 2026 list. One of Montreal's most respected specialty roasters.",
    },
    {
      "@type": "CafeOrCoffeeShop",
      "name": "Micro Espresso Bar",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "3496 Avenue du Parc",
        "addressLocality": "Montréal",
        "addressRegion": "QC",
        "postalCode": "H2X 2H6",
        "addressCountry": "CA",
      },
      "description": "Ranked #89 on the World's 100 Best Coffee Shops 2026 list. Known for precision extractions and seasonal single-origin harvests.",
    },
    {
      "@type": "CafeOrCoffeeShop",
      "name": "Café Éclair",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "1 Rue Saint-Viateur East",
        "addressLocality": "Montréal",
        "addressRegion": "QC",
        "postalCode": "H2T 1A8",
        "addressCountry": "CA",
      },
      "description": "Ranked #91 on the World's 100 Best Coffee Shops 2026 list. All coffees are roasted outside Canada, introducing clients to global specialty coffee perspectives.",
    },
  ],
};

const OTHER_POSTS = BLOG_POSTS.filter((p) => p.slug !== "best-coffee-shops-montreal-2026" && p.published);

const Page = () => (
  <div className={styles.page}>

    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />

    {/* ── Hero ──────────────────────────────────────────────────── */}
    <section className={styles.hero}>
      <div className={styles.heroInner}>
        <span className={styles.heroCategory}>Montreal Coffee Guide</span>
        <h1 className={styles.heroTitle}>
          The 15 Best Coffee Shops in Montreal in 2026
        </h1>
        <p className={styles.heroSubtitle}>
          From world-ranked specialty roasters to beloved neighbourhood gems — your ultimate guide to
          Montreal&apos;s most exciting coffee scene, curated by the team at EZPZ Coffee.
        </p>
        <div className={styles.heroMeta}>
          <span>April 25, 2026</span>
          <span className={styles.heroMetaDot} />
          <span>8 min read</span>
        </div>
      </div>
    </section>

    {/* ── Article ───────────────────────────────────────────────── */}
    <div className={styles.articleWrapper}>
      <article className={styles.article}>

        <p className={styles.intro}>
          Montreal has quietly become one of the great coffee cities in the world. In 2026, four
          Montreal cafés were named among the top 100 best coffee shops in all of North America,
          Central America, and the Caribbean — out of more than 4,600 establishments evaluated by
          over 200 judges. That is not an accident. It is the result of years of investment in
          specialty coffee culture, world-class roasting, and a city that takes its café experience
          seriously.
        </p>
        <p className={styles.p}>
          At EZPZ Coffee, we roast specialty grade coffee right here in Montreal at Canadian
          Roasting Society. We know this city&apos;s coffee scene intimately. This is our honest,
          up-to-date guide to the 15 best coffee shops in Montreal in 2026 — the ones worth going
          out of your way for.
        </p>

        {/* ── World-Ranked ───────────── */}
        <h2 className={styles.h2}>The World-Ranked Montreal Cafés</h2>

        <h3 className={styles.h3}>1. Café Pista</h3>
        <div className={styles.addressBlock}>
          <span className={styles.addressLine}>6524 Boulevard Saint-Laurent, Montréal, QC H2S 3C6 · also 1450 Rue City Councillors, Montréal, QC H3A 2E6</span>
          <span className={styles.neighbourhood}>Rosemont &amp; Quartier des Spectacles</span>
        </div>
        <p className={styles.p}>
          Café Pista is Montreal&apos;s highest-ranked café on the World&apos;s 100 Best Coffee
          Shops 2026 list, coming in at number 34 out of more than 4,600 establishments evaluated
          across North America. Founded by Maxime Richard, Pista has become a destination for
          serious coffee lovers who want exceptional specialty coffee in a warm, mid-century modern
          environment. The Quartier des Spectacles location on Saint-Laurent is large, welcoming,
          and perfectly positioned for exploring downtown Montreal. Their sourcing is meticulous,
          their roasting is precise, and the café experience is consistently among the best in the
          city. If you visit one café on this list, make it Pista.
        </p>

        <h3 className={styles.h3}>2. Café Saint-Henri</h3>
        <div className={styles.addressBlock}>
          <span className={styles.addressLine}>3632 Notre-Dame Street West, Montréal, QC H4C 1P7 · multiple locations across the city</span>
          <span className={styles.neighbourhood}>Saint-Henri</span>
        </div>
        <p className={styles.p}>
          Café Saint-Henri is one of Montreal&apos;s most respected and beloved specialty roasters,
          earning the number 60 spot on the World&apos;s 100 Best Coffee Shops 2026 list. What
          started as a single café in the working-class neighbourhood of Saint-Henri has grown into
          a multi-location operation that never lost its soul. Their approach to coffee is deeply
          educational — they want every customer to understand and appreciate what is in their cup.
          The Saint-Henri neighbourhood location remains the original and the most atmospheric. The
          roastery is a serious operation and their retail bags are some of the most beautiful in
          the city.
        </p>

        <h3 className={styles.h3}>3. Micro Espresso Bar</h3>
        <div className={styles.addressBlock}>
          <span className={styles.addressLine}>3496 Avenue du Parc, Montréal, QC H2X 2H6</span>
          <span className={styles.neighbourhood}>Milton-Parc</span>
        </div>
        <p className={styles.p}>
          Micro Espresso landed at number 89 on the World&apos;s 100 Best Coffee Shops 2026 list,
          described by the judges as the place where Montreal&apos;s true coffee lovers come for
          their daily cup — no gimmicks, just precision extractions, consistent drinks, and
          genuinely great service. The coffee program rotates through seasonal single-origin
          harvests, and their batch brew is one of the best in the city. The space is small,
          focused, and completely unpretentious. Prices are also notably lower than many specialty
          cafés in the city, which has earned them fierce loyalty from Montreal&apos;s coffee
          community.
        </p>

        <h3 className={styles.h3}>4. Café Éclair</h3>
        <div className={styles.addressBlock}>
          <span className={styles.addressLine}>1 Rue Saint-Viateur East, Montréal, QC H2T 1A8</span>
          <span className={styles.neighbourhood}>Mile End</span>
        </div>
        <p className={styles.p}>
          Tucked into Mile End, Café Éclair earned the number 91 spot on the World&apos;s 100 Best
          Coffee Shops 2026 list with a very specific and intentional point of view — all of their
          coffees are roasted outside Canada, introducing clients to the different visions of the
          specialty coffee industry from around the world. It is a small shop with a big philosophy,
          and the result is a cup that consistently surprises even experienced coffee drinkers.
        </p>

        {/* ── Montreal Icons ───────────── */}
        <h2 className={styles.h2}>The Montreal Icons</h2>

        <h3 className={styles.h3}>5. Caffè Olimpico</h3>
        <div className={styles.addressBlock}>
          <span className={styles.addressLine}>124 Rue Saint-Viateur Ouest, Montréal, QC H2T 2L1 · multiple locations including Old Montreal</span>
          <span className={styles.neighbourhood}>Mile End &amp; Old Montreal</span>
        </div>
        <p className={styles.p}>
          Caffè Olimpico is the closest thing Montreal has to a coffee institution. The original
          Mile End location has been serving espresso and cappuccinos since the 1970s, and the
          nostalgic atmosphere is completely intact. The Italian espresso tradition is alive and
          well here — strong, short, and served with genuine warmth. The bomboloni are legendary.
          The lineups are real but the service is lightning quick. If you want to understand where
          Montreal&apos;s coffee culture came from, start here.
        </p>

        <h3 className={styles.h3}>6. Crew Collective and Café</h3>
        <div className={styles.addressBlock}>
          <span className={styles.addressLine}>360 Rue Saint-Jacques, Montréal, QC H2Y 1P5</span>
          <span className={styles.neighbourhood}>Old Montreal</span>
        </div>
        <p className={styles.p}>
          Crew Collective and Café is housed inside a stunning former Royal Bank of Canada branch
          from the 1920s — 50-foot vaulted ceilings, marble floors, bronze chandeliers, and enough
          architectural drama to make you forget you came in for a flat white. Forbes recognized it
          as one of the five most beautiful coworking spaces in the world. The coffee is genuinely
          good, the pastries are sourced from excellent bakeries around the city, and the setting is
          unlike anything else in Montreal. This is the one to bring out-of-town guests to.
        </p>

        <h3 className={styles.h3}>7. Café Myriade</h3>
        <div className={styles.addressBlock}>
          <span className={styles.addressLine}>4627 Rue Saint-Denis, Montréal, QC H2J 2L4 · five locations across the city</span>
          <span className={styles.neighbourhood}>Plateau-Mont-Royal &amp; multiple</span>
        </div>
        <p className={styles.p}>
          With five locations across Montreal, Café Myriade has become the city&apos;s go-to
          specialty coffee chain that never feels like a chain. They opened in 2008 and have been
          sourcing from top producers around the world ever since. The consistency across locations
          is impressive. Whether you are in the Plateau, downtown, or Westmount, you can count on a
          well-made drink and knowledgeable staff. They are one of the cafés that helped build
          Montreal&apos;s specialty coffee reputation before it was cool.
        </p>

        {/* ── Neighbourhood Favourites ───────────── */}
        <h2 className={styles.h2}>The Neighbourhood Favourites</h2>

        <h3 className={styles.h3}>8. Tommy Café</h3>
        <div className={styles.addressBlock}>
          <span className={styles.addressLine}>2030 Rue Mansfield, Montréal, QC H3A 2Y7</span>
          <span className={styles.neighbourhood}>Downtown</span>
        </div>
        <p className={styles.p}>
          Tommy Café is one of the most visually distinctive spaces in downtown Montreal. The
          multi-level interior uses vertical space brilliantly — half-floor mezzanines,
          floor-to-ceiling windows, and views that make every seat feel special. The cold brew is
          consistently praised and the atmosphere is ideal for both working and lingering. It is
          also one of the most photographed café interiors in the city.
        </p>

        <h3 className={styles.h3}>9. Café Falco</h3>
        <div className={styles.addressBlock}>
          <span className={styles.addressLine}>5605 Avenue de Gaspé, Montréal, QC H2T 2A4</span>
          <span className={styles.neighbourhood}>Mile End</span>
        </div>
        <p className={styles.p}>
          Café Falco is a Japanese-inspired specialty café with concrete walls, floor-to-ceiling
          windows, and a minimalist aesthetic that feels more Kyoto than Mile End. The lattes and
          espresso drinks are consistently excellent and the space has a calm, focused energy that
          is increasingly rare in a busy city. For design-conscious coffee drinkers, Falco is one
          of the most satisfying experiences in Montreal.
        </p>

        <h3 className={styles.h3}>10. September Café</h3>
        <div className={styles.addressBlock}>
          <span className={styles.addressLine}>4021 Rue Sainte-Catherine Ouest, Montréal, QC H3Z 1P7</span>
          <span className={styles.neighbourhood}>Westmount &amp; Saint-Henri</span>
        </div>
        <p className={styles.p}>
          September Café has one of the most beloved atmospheres of any café in Montreal. The owner
          is a surfer, and the café reflects that — relaxed, warm, covered in surf memorabilia and
          natural light. The food and drinks are priced at a premium but consistently deliver. The
          large patio in summer is one of the best places in the city to spend a morning. Locals
          love it, regulars are fiercely loyal, and the best time to visit is around 10am before
          the lunch rush.
        </p>

        <h3 className={styles.h3}>11. Ambros Coffee Roasters</h3>
        <div className={styles.addressBlock}>
          <span className={styles.addressLine}>1 Rue Clark, Montréal, QC H2X 2T1</span>
          <span className={styles.neighbourhood}>Mile End</span>
        </div>
        <p className={styles.p}>
          Ambros Coffee Roasters is a family operation — two brothers run the café with their
          father, and that personal investment shows in every aspect of the experience. The café
          itself is beautifully designed, the sourcing is serious, and the fact that the owners are
          on-site every day creates a warmth that is hard to manufacture. One of the newer additions
          to the Mile End specialty scene, it has quickly become a local favourite.
        </p>

        <h3 className={styles.h3}>12. Café Larue and Fils</h3>
        <div className={styles.addressBlock}>
          <span className={styles.addressLine}>1357 Rue Castelnau Est, Montréal, QC H2R 1R9</span>
          <span className={styles.neighbourhood}>Villeray</span>
        </div>
        <p className={styles.p}>
          Café Larue and Fils sits on Rue de Castelnau in Villeray, close to the Jean-Talon
          Market. In summer, the street closes to cars and the outdoor benches become one of the
          best spots in the city to enjoy a coffee and watch Montreal life unfold. The café itself
          is cozy and unpretentious — a genuine neighbourhood institution in an area of the city
          that rewards exploration.
        </p>

        <h3 className={styles.h3}>13. Pikolo Espresso Bar</h3>
        <div className={styles.addressBlock}>
          <span className={styles.addressLine}>3418 Avenue du Parc, Montréal, QC H2X 2H5</span>
          <span className={styles.neighbourhood}>Milton-Parc</span>
        </div>
        <p className={styles.p}>
          Pikolo is one of Yelp&apos;s consistently top-rated coffee spots in Montreal for good
          reason. The espresso is excellent, the service is friendly, and the prices are among the
          most reasonable in the specialty coffee scene. They sell beans from many of the top
          roasters in the city and the espresso changes regularly — always good, never predictable.
          For value-conscious coffee drinkers who refuse to compromise on quality, Pikolo is the
          answer.
        </p>

        <h3 className={styles.h3}>14. Pigeon</h3>
        <div className={styles.addressBlock}>
          <span className={styles.addressLine}>1238 Avenue du Mont-Royal Est, Montréal, QC H2J 1X2</span>
          <span className={styles.neighbourhood}>Plateau-Mont-Royal</span>
        </div>
        <p className={styles.p}>
          Pigeon on Mont-Royal is one of the most consistently praised neighbourhood cafés in
          Montreal. The atmosphere is cool but not intimidating, the coffee is well-made, and the
          space works equally well for a quick espresso or a long afternoon with a laptop. It has
          the kind of local loyalty that only comes from years of getting things right every single
          day.
        </p>

        <h3 className={styles.h3}>15. Miss Boon</h3>
        <div className={styles.addressBlock}>
          <span className={styles.addressLine}>8527 Rue Drolet, Montréal, QC H2P 2J1</span>
          <span className={styles.neighbourhood}>Villeray</span>
        </div>
        <p className={styles.p}>
          Miss Boon is a nature-inspired café that feels like a greenhouse in the best possible
          way. In a city where winters can be long and grey, walking into Miss Boon — with its
          abundant indoor plants, warm lighting, and thoughtfully designed space — is genuinely
          restorative. The coffee, fresh juices, and smoothies are all excellent. It is a hidden
          gem in Villeray that deserves far more attention than it gets.
        </p>

        {/* ── EZPZ Note ───────────── */}
        <h2 className={styles.h2}>A Note From EZPZ Coffee</h2>
        <p className={styles.p}>
          We are proud to be part of Montreal&apos;s specialty coffee story. At EZPZ Coffee, we
          roast all of our beans fresh at Canadian Roasting Society right here in the southwest of
          the city. Many of the cafés on this list share our commitment to specialty-grade,
          traceable coffee — and that is a commitment we take seriously in everything we produce.
        </p>
        <p className={styles.p}>
          If you are a café, restaurant, hotel, or brand inspired by Montreal&apos;s coffee culture
          and want to create your own branded specialty coffee product — we make that possible with
          zero minimum orders, full custom design included, and turnaround in 2 to 3 weeks.{" "}
          <Link href="/en/design" className={styles.inlineLink}>
            Visit ezpz.coffee/en/design
          </Link>{" "}
          to start building your own coffee brand today. You can also explore our{" "}
          <Link href="/en/white-label" className={styles.inlineLink}>white label solutions</Link>{" "}
          for restaurants and hotels, or{" "}
          <Link href="/en/custom-coffee-bags-montreal" className={styles.inlineLink}>
            learn more about custom coffee bags in Montreal
          </Link>.{" "}
          See how we{" "}
          <Link href="/en/compare" className={styles.inlineLink}>compare to every other Canadian supplier</Link>.
        </p>

      </article>
    </div>

    {/* ── CTA Banner ────────────────────────────────────────────── */}
    <section className={styles.cta}>
      <div className={styles.ctaInner}>
        <h2 className={styles.ctaTitle}>
          Inspired by Montreal&apos;s coffee scene? Build your own coffee brand.
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
          {OTHER_POSTS.map((post) => (
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
