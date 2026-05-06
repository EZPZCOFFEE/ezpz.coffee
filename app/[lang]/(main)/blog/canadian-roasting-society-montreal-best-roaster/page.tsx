import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

import { BLOG_POSTS } from "../data";
import styles from "./blogPost.module.scss";

export const metadata: Metadata = {
  title: "Canadian Roasting Society: Why Montreal's Best Coffee Is Roasted Here | EZPZ",
  description:
    "Canadian Roasting Society at 3780 Rue Saint-Patrick in Montreal is home to Canada's most exciting coffee roasting community — and where every EZPZ Coffee bag is roasted fresh.",
  alternates: { canonical: "/en/blog/canadian-roasting-society-montreal-best-roaster" },
  openGraph: {
    title: "Canadian Roasting Society: Why Montreal's Best Coffee Is Roasted Here | EZPZ",
    description:
      "Canadian Roasting Society at 3780 Rue Saint-Patrick in Montreal is home to Canada's most exciting coffee roasting community — and where every EZPZ Coffee bag is roasted fresh.",
    type: "article",
    url: "https://www.ezpz.coffee/en/blog/canadian-roasting-society-montreal-best-roaster",
    images: [{ url: "/assets/blog/canadian-roasting-society.svg", width: 800, height: 420, alt: "Canadian Roasting Society — The Facility Behind Montreal's Best Coffee" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Canadian Roasting Society: The Facility Behind Montreal's Best Coffee | EZPZ",
    description: "The story of the Montreal co-roasting facility where EZPZ Coffee roasts every bag — and why it matters.",
    images: ["/assets/blog/canadian-roasting-society.svg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Canadian Roasting Society: The Facility Behind Montreal's Best Coffee",
      description:
        "The story of the Montreal roasting facility that changed Canadian coffee — and why EZPZ Coffee is proud to call it home.",
      datePublished: "2026-05-06",
      author: { "@type": "Organization", name: "EZPZ Coffee Team" },
      publisher: {
        "@type": "Organization",
        name: "EZPZ Coffee",
        url: "https://www.ezpz.coffee",
      },
      image: "https://www.ezpz.coffee/assets/blog/canadian-roasting-society.svg",
      url: "https://www.ezpz.coffee/en/blog/canadian-roasting-society-montreal-best-roaster",
      wordCount: 1600,
      about: {
        "@type": "LocalBusiness",
        name: "Canadian Roasting Society",
      },
    },
    {
      "@type": "LocalBusiness",
      name: "Canadian Roasting Society",
      url: "https://www.canadianroastingsociety.ca",
      telephone: "514-882-5288",
      email: "info@canadianroastingsociety.ca",
      address: {
        "@type": "PostalAddress",
        streetAddress: "3780 Rue Saint-Patrick",
        addressLocality: "Montreal",
        addressRegion: "QC",
        postalCode: "H4E 1A2",
        addressCountry: "CA",
      },
      description:
        "Community co-roasting space and private label coffee supplier for Canada's growing food and beverage industry. Located in Montreal's Saint-Henri neighborhood.",
    },
  ],
};

const MORE_SLUGS = [
  "best-coffee-roasters-montreal-2026",
  "best-coffee-shops-montreal-2026",
  "best-coffee-shops-quebec-complete-guide",
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
        <span className={styles.heroCategory}>Behind the Beans</span>
        <h1 className={styles.heroTitle}>
          Canadian Roasting Society: The Facility Behind Montreal&apos;s Best Coffee
        </h1>
        <p className={styles.heroSubtitle}>
          The story of the Montreal roasting facility that changed Canadian coffee —
          and why EZPZ Coffee is proud to call it home.
        </p>
        <div className={styles.heroMeta}>
          <span>May 6, 2026</span>
          <span className={styles.heroMetaDot} />
          <span>6 min read</span>
        </div>
      </div>
    </section>

    {/* ── TL;DR ─────────────────────────────────────────────────── */}
    <div className={styles.tldr} role="note" aria-label="Article summary">
      <strong className={styles.tldrLabel}>TL;DR</strong>
      <p className={styles.tldrText}>
        Canadian Roasting Society at 3780 Rue Saint-Patrick in Montreal is a community
        co-roasting facility housing some of Canada&apos;s most exciting specialty coffee
        brands — including Traffic, Micro Espresso, and EZPZ Coffee. Every EZPZ bag is
        roasted here on professional Probat equipment, surrounded by a community of people
        who care deeply about the craft.
      </p>
    </div>

    {/* ── Article ───────────────────────────────────────────────── */}
    <div className={styles.articleWrapper}>
      <article className={styles.article}>

        <p className={styles.intro}>
          There is a building on Rue Saint-Patrick in the southwest of Montreal where some of
          the most exciting coffee in Canada is being made every single day. It does not have a
          flashy storefront. It does not have a lineup around the block. But inside{" "}
          <a
            href="https://www.canadianroastingsociety.ca"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.inlineLink}
          >
            Canadian Roasting Society
          </a>{" "}
          — a community co-roasting space and private label coffee production facility — a quiet
          revolution in Canadian{" "}
          <Link href="/en/coffee" className={styles.inlineLink}>specialty coffee</Link>{" "}
          is happening.
        </p>
        <p className={styles.p}>
          This is where EZPZ Coffee roasts every single bag we produce. And understanding why
          we chose this facility — and what makes it genuinely special — tells you a lot about
          what we believe great coffee requires.
        </p>

        {/* ── What Is CRS ─────────────── */}
        <h2 className={styles.h2}>What Is Canadian Roasting Society?</h2>
        <p className={styles.p}>
          Canadian Roasting Society (CRS) describes itself as a community co-roasting space
          and private label coffee supplier for Canada&apos;s growing food and beverage
          industry. In plain terms it is a shared professional roasting facility that gives
          independent coffee brands, restaurants, hotels, and entrepreneurs access to
          world-class roasting equipment and expertise without the astronomical startup costs
          of building their own roastery.
        </p>
        <p className={styles.p}>
          Located at 3780 Rue Saint-Patrick in Montreal&apos;s Saint-Henri neighbourhood —
          steps from the Lachine Canal — CRS has become the beating heart of Montreal&apos;s
          specialty coffee production community. The facility houses professional-grade Probat
          roasting machines — described by one of their members as the most unique and advanced
          on the market — alongside weighing, filling, and bagging equipment, storage, and
          on-site expertise from coffee professionals who have dedicated their careers to the
          craft.
        </p>

        <div className={styles.addressCard}>
          <span className={styles.addressCardLabel}>Canadian Roasting Society</span>
          <span className={styles.addressCardLine}>3780 Rue Saint-Patrick, Montréal, QC H4E 1A2</span>
          <span className={styles.addressCardLine}>info@canadianroastingsociety.ca · 514-882-5288</span>
          <span className={styles.addressCardLine}>canadianroastingsociety.ca</span>
        </div>

        {/* ── The Community ───────────── */}
        <h2 className={styles.h2}>The Community That Makes It Special</h2>
        <p className={styles.p}>
          What separates Canadian Roasting Society from a generic contract roaster is the
          community it has built around the facility. When you visit CRS you are not walking
          into a factory. You are walking into a space shared by some of the most passionate
          and skilled coffee producers in the country.
        </p>
        <p className={styles.p}>
          The roster of brands that call CRS home reads like a who&apos;s who of
          Montreal&apos;s specialty coffee scene: Structure Coffee Roasters, Traffic Coffee,
          ESCAPE Coffee Roasters, Canal Roasters, Micro Espresso, Ambros Coffee, Tunnel
          Espresso, Myriade Roasting, Melk, Café Alphabet, Jungle Livraison Café, Biodynamic
          Coffee, Colorful Coffee, Sensory House, Mayan Mountain, Zaan and Klo.
        </p>
        <p className={styles.p}>
          These are not generic coffee producers. These are people who have built genuine brands
          around a deep commitment to specialty coffee. When they choose to roast at CRS it is
          a statement about what the facility represents — quality, community, and craft.
        </p>

        <div className={styles.pullQuote}>
          <p className={styles.pullQuoteText}>
            &ldquo;Everyone works in the same environment, tastes great varieties of coffee,
            discusses coffee, and exchanges knowledge that other roasters simply do not benefit
            from. The community is the greatest advantage. Whether you are a beginner or have
            years of experience, this is a community worth being part of.&rdquo;
          </p>
          <span className={styles.pullQuoteAttrib}>Jesse — Traffic Coffee</span>
        </div>

        <div className={styles.pullQuote}>
          <p className={styles.pullQuoteText}>
            &ldquo;CRS saved us from investing our life savings in equipment while still giving
            us access to the high-end machines we had always dreamed of — allowing us to focus
            on what actually matters: exceptional coffee made correctly.&rdquo;
          </p>
          <span className={styles.pullQuoteAttrib}>David, Josh &amp; Marc — ESCAPE Coffee Roasters</span>
        </div>

        {/* ── The Equipment ───────────── */}
        <h2 className={styles.h2}>The Equipment — Why It Matters</h2>
        <p className={styles.p}>
          Great coffee requires great equipment. This is not a marketing claim — it is a
          technical reality. The roast profile of a coffee — the precise temperature curve
          applied to green beans during the roasting process — determines flavour, aroma, body,
          and aftertaste. Small deviations in temperature or time at critical moments in the
          roast can mean the difference between a cup that sings and one that disappoints.
        </p>
        <p className={styles.p}>
          Canadian Roasting Society&apos;s Probat roasting machines are among the most
          respected in the industry. Probat has been manufacturing coffee roasting equipment
          in Germany since 1868 and their machines are the gold standard for specialty coffee
          production worldwide. Access to this caliber of equipment — combined with the
          expertise of the CRS team and the collective knowledge of the facility&apos;s
          community — means that every bag roasted at CRS benefits from both world-class
          machinery and deep human expertise.
        </p>
        <p className={styles.p}>
          This matters for EZPZ clients. When you order a{" "}
          <Link href="/en/design" className={styles.inlineLink}>
            custom branded coffee bag
          </Link>{" "}
          with EZPZ, your coffee is not roasted on discount equipment in a generic warehouse.
          It is roasted on professional-grade Probat machinery by people who care deeply about
          the outcome of every single batch.
        </p>

        {/* ── The Location ────────────── */}
        <h2 className={styles.h2}>The Location — Saint-Henri and the Lachine Canal</h2>
        <p className={styles.p}>
          Canadian Roasting Society sits in Saint-Henri, one of Montreal&apos;s most
          historically rich and currently most exciting neighbourhoods. The Lachine Canal runs
          through the area — a waterway that powered Montreal&apos;s industrial boom in the
          19th century and today anchors one of the city&apos;s most vibrant communities. The
          southwest is home to some of Montreal&apos;s best restaurants, cafés, and creative
          businesses including Tamp and Pull, September Café, and some of the city&apos;s most
          celebrated independent food producers.
        </p>
        <p className={styles.p}>
          Being rooted in Saint-Henri is not incidental. The neighbourhood&apos;s combination
          of industrial heritage and creative present mirrors exactly what Canadian Roasting
          Society represents — serious craft in a community-driven environment.
        </p>
        <p className={styles.p}>
          The address is also home on weekends to Dreamy Coffee Supermarket, a specialty coffee
          market that opens inside CRS on Saturdays and Sundays, selling freshly roasted beans
          from the facility&apos;s member roasters. It is a genuine gathering point for
          Montreal&apos;s coffee community — no pretension, just extraordinary coffee surrounded
          by the people who made it.
        </p>

        {/* ── Why EZPZ ────────────────── */}
        <h2 className={styles.h2}>Why EZPZ Coffee Roasts at Canadian Roasting Society</h2>
        <p className={styles.p}>
          When we were building EZPZ Coffee, we knew that the quality of our partner facility
          would determine the quality of every bag we produced. We evaluated multiple options
          across Montreal and chose Canadian Roasting Society for three reasons.
        </p>
        <p className={styles.p}>
          <strong>First, the equipment.</strong> Probat machines operated by people who
          understand them deeply produce consistently excellent results. Our clients deserve
          that consistency on every order regardless of size — including orders of{" "}
          <Link href="/en/custom-coffee-bags-no-minimum-canada" className={styles.inlineLink}>
            no minimum order
          </Link>.
        </p>
        <p className={styles.p}>
          <strong>Second, the community.</strong> Roasting alongside Traffic, Micro Espresso,
          Ambros, and the other brands at CRS keeps us connected to the best minds in
          Montreal&apos;s specialty coffee scene. That proximity to excellence raises our
          standards constantly.
        </p>
        <p className={styles.p}>
          <strong>Third, the values.</strong> Canadian Roasting Society was built on the belief
          that great coffee should be accessible — that entrepreneurs and businesses should not
          need millions in equipment to produce world-class products. That belief mirrors exactly
          what EZPZ was built to do for our clients. We believe{" "}
          <Link href="/en/coffee" className={styles.inlineLink}>
            specialty coffee
          </Link>{" "}
          should be accessible to any Canadian brand regardless of size, budget, or minimum
          order requirements.
        </p>

        {/* ── What This Means ─────────── */}
        <h2 className={styles.h2}>What This Means for Your Brand</h2>
        <p className={styles.p}>
          When you create a{" "}
          <Link href="/en/design" className={styles.inlineLink}>
            custom branded coffee bag with EZPZ Coffee
          </Link>
          , here is what happens behind the scenes. We source your green coffee from traceable
          farms scoring 80 or above on the SCA cupping scale. We transport it to Canadian
          Roasting Society at 3780 Rue Saint-Patrick in Montreal. It is roasted on professional
          Probat equipment by people who have dedicated their careers to understanding how heat
          transforms green beans into something extraordinary. It is cooled, quality-checked,
          ground or kept whole bean according to your specifications, packaged in your custom
          branded bag, and shipped directly to your door across Canada and the USA.
        </p>
        <p className={styles.p}>
          The same facility that produces coffee for some of Montreal&apos;s most celebrated
          specialty brands — and by extension some of the world&apos;s top 100 coffee shops —
          produces the coffee inside every EZPZ bag. That is not a small thing. That is what
          we mean when we say specialty grade. And it is available through our{" "}
          <Link href="/en/white-label" className={styles.inlineLink}>
            white label program
          </Link>{" "}
          to any brand, any size, with zero minimums.
        </p>

        {/* ── Visiting CRS ────────────── */}
        <h2 className={styles.h2}>Visiting Canadian Roasting Society</h2>
        <p className={styles.p}>
          If you are ever in Montreal and want to see where great Canadian coffee is made,
          Canadian Roasting Society welcomes visitors. The facility is located at 3780 Rue
          Saint-Patrick, Montréal, QC H4E 1A2 — a short walk from the Charlevoix metro station
          or a scenic ride along the Lachine Canal.
        </p>
        <p className={styles.p}>
          On weekends, Dreamy Coffee Supermarket operates inside the facility, selling freshly
          roasted specialty beans from the facility&apos;s member roasters. It is one of the
          most authentic coffee experiences in the city. You can also reach Canadian Roasting
          Society directly at{" "}
          <a href="mailto:info@canadianroastingsociety.ca" className={styles.inlineLink}>
            info@canadianroastingsociety.ca
          </a>{" "}
          or 514-882-5288.
        </p>

        {/* ── The Future ──────────────── */}
        <h2 className={styles.h2}>The Future of Canadian Coffee Is Being Made in Montreal</h2>
        <p className={styles.p}>
          The specialty coffee industry in Canada has quietly become extraordinary. Four Montreal
          cafés ranked in the top 100 in all of North America in 2026. Canadian roasters are
          winning international competitions. And at the center of a significant part of that
          story sits a building on Rue Saint-Patrick where passionate people with great equipment
          and a deep sense of community are making some of the finest coffee on the continent.
        </p>
        <p className={styles.p}>
          EZPZ Coffee is proud to be part of that story. And when you put your brand on an
          EZPZ bag, you are part of it too.
        </p>

      </article>
    </div>

    {/* ── CTA Banner ────────────────────────────────────────────── */}
    <section className={styles.cta}>
      <div className={styles.ctaInner}>
        <h2 className={styles.ctaTitle}>
          Your brand. Roasted at Canadian Roasting Society. Delivered to your door.
        </h2>
        <div className={styles.ctaButtons}>
          <Link href="/en/design" className={styles.ctaPrimary}>
            Design your bag
          </Link>
          <Link href="/en/coffee" className={styles.ctaSecondary}>
            Learn about our coffee
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

export default Page;
