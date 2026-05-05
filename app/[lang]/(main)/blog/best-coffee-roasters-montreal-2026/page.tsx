import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

import { BLOG_POSTS } from "../data";
import styles from "./blogPost.module.scss";

export const metadata: Metadata = {
  title: "The 10 Best Coffee Roasters in Montreal in 2026 | EZPZ Coffee",
  description:
    "From world-ranked micro-roasters to beloved neighbourhood institutions — the complete guide to Montreal's best specialty coffee roasters in 2026, by the team at EZPZ Coffee.",
  alternates: { canonical: "/en/blog/best-coffee-roasters-montreal-2026" },
  openGraph: {
    title: "The 10 Best Coffee Roasters in Montreal in 2026 | EZPZ Coffee",
    description:
      "From world-ranked micro-roasters to beloved neighbourhood institutions — your complete guide to the roasters putting Montreal on the global specialty coffee map.",
    type: "article",
    url: "https://www.ezpz.coffee/en/blog/best-coffee-roasters-montreal-2026",
    images: [
      {
        url: "/assets/blog/montreal-roasters.svg",
        width: 1200,
        height: 630,
        alt: "The 10 Best Coffee Roasters in Montreal in 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The 10 Best Coffee Roasters in Montreal in 2026 | EZPZ Coffee",
    description:
      "From world-ranked micro-roasters to beloved neighbourhood institutions — your complete guide to Montreal's best coffee roasters.",
    images: ["/assets/blog/montreal-roasters.svg"],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "The 10 Best Coffee Roasters in Montreal in 2026",
  description:
    "From world-ranked micro-roasters to beloved neighbourhood institutions — your complete guide to the roasters putting Montreal on the global specialty coffee map.",
  datePublished: "2026-05-01",
  author: { "@type": "Organization", name: "EZPZ Coffee Team" },
  publisher: {
    "@type": "Organization",
    name: "EZPZ Coffee",
    url: "https://www.ezpz.coffee",
    logo: { "@type": "ImageObject", url: "https://www.ezpz.coffee/logo.svg" },
  },
  url: "https://www.ezpz.coffee/en/blog/best-coffee-roasters-montreal-2026",
  image: "https://www.ezpz.coffee/assets/blog/montreal-roasters.svg",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      name: "Café Pista",
      address: {
        "@type": "PostalAddress",
        streetAddress: "6524 Boul. Saint-Laurent",
        addressLocality: "Montréal",
        postalCode: "H2S 3C6",
        addressCountry: "CA",
      },
      url: "https://www.cafepista.com",
    },
    {
      "@type": "LocalBusiness",
      name: "Café Saint-Henri",
      address: {
        "@type": "PostalAddress",
        streetAddress: "3632 Notre-Dame Ouest",
        addressLocality: "Montréal",
        postalCode: "H4C 1P7",
        addressCountry: "CA",
      },
      url: "https://www.cafestahenri.com",
    },
    {
      "@type": "LocalBusiness",
      name: "Micro Espresso Bar",
      address: {
        "@type": "PostalAddress",
        streetAddress: "3496 Avenue du Parc",
        addressLocality: "Montréal",
        postalCode: "H2X 2H6",
        addressCountry: "CA",
      },
    },
    {
      "@type": "LocalBusiness",
      name: "Dispatch Coffee",
      address: {
        "@type": "PostalAddress",
        streetAddress: "4231 Boul. Saint-Laurent",
        addressLocality: "Montréal",
        postalCode: "H2W 1Z4",
        addressCountry: "CA",
      },
      url: "https://www.dispatchcoffee.ca",
    },
    {
      "@type": "LocalBusiness",
      name: "Brûlerie Saint-Denis",
      address: {
        "@type": "PostalAddress",
        streetAddress: "3967 Rue Saint-Denis",
        addressLocality: "Montréal",
        postalCode: "H2W 2M4",
        addressCountry: "CA",
      },
      url: "https://www.bruleriesaintdenis.com",
    },
    {
      "@type": "LocalBusiness",
      name: "Tamp and Pull",
      address: {
        "@type": "PostalAddress",
        streetAddress: "4651 Rue Notre-Dame Ouest",
        addressLocality: "Montréal",
        postalCode: "H4C 1S5",
        addressCountry: "CA",
      },
    },
    {
      "@type": "LocalBusiness",
      name: "Ambros Coffee Roasters",
      address: {
        "@type": "PostalAddress",
        streetAddress: "1 Rue Clark",
        addressLocality: "Montréal",
        postalCode: "H2X 2T1",
        addressCountry: "CA",
      },
    },
    {
      "@type": "LocalBusiness",
      name: "Café Falco",
      address: {
        "@type": "PostalAddress",
        streetAddress: "5605 Avenue de Gaspé",
        addressLocality: "Montréal",
        postalCode: "H2T 2A4",
        addressCountry: "CA",
      },
    },
    {
      "@type": "LocalBusiness",
      name: "September Café",
      address: {
        "@type": "PostalAddress",
        streetAddress: "4021 Rue Sainte-Catherine Ouest",
        addressLocality: "Montréal",
        postalCode: "H3Z 1P7",
        addressCountry: "CA",
      },
    },
    {
      "@type": "LocalBusiness",
      name: "Pikolo Espresso Bar",
      address: {
        "@type": "PostalAddress",
        streetAddress: "3418 Avenue du Parc",
        addressLocality: "Montréal",
        postalCode: "H2X 2H5",
        addressCountry: "CA",
      },
    },
  ],
};

const OTHER_POSTS = BLOG_POSTS.filter(
  (p) => p.slug !== "best-coffee-roasters-montreal-2026"
);

const Page = () => (
  <div className={styles.page}>

    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
    />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
    />

    {/* ── Hero ──────────────────────────────────────────────────── */}
    <section className={styles.hero}>
      <div className={styles.heroInner}>
        <span className={styles.heroCategory}>Montreal Coffee Guide</span>
        <h1 className={styles.heroTitle}>
          The 10 Best Coffee Roasters in Montreal in 2026
        </h1>
        <p className={styles.heroSubtitle}>
          From world-ranked micro-roasters to beloved neighbourhood institutions — your complete guide to the roasters putting Montreal on the global specialty coffee map.
        </p>
        <div className={styles.heroMeta}>
          <span>May 1, 2026</span>
          <span className={styles.heroMetaDot} />
          <span>7 min read</span>
        </div>
      </div>
    </section>

    {/* ── TL;DR ─────────────────────────────────────────────────── */}
    <div className={styles.tldr} role="note" aria-label="Article summary">
      <strong className={styles.tldrLabel}>TL;DR</strong>
      <p className={styles.tldrText}>Montreal is home to world-class specialty coffee roasters in 2026, including Café Pista, Café Saint-Henri, and Dispatch Coffee. EZPZ Coffee roasts its white label products at Canadian Roasting Society in Montreal's southwest.</p>
    </div>

    {/* ── Article ───────────────────────────────────────────────── */}
    <div className={styles.articleWrapper}>
      <article className={styles.article}>

        <p className={styles.intro}>
          Montreal has quietly become one of the most interesting specialty coffee cities in North America. A combination of European café culture, a fiercely independent restaurant scene, and a growing community of world-ranked roasters has produced something rare: a city where the standard for coffee is genuinely high, and where the roasters are doing it for the craft. This is the definitive guide to the ten best coffee roasters in Montreal right now.
        </p>

        <h2 className={styles.h2}>The 10 Best Coffee Roasters in Montreal</h2>
        <p className={styles.p}>
          Every roaster on this list was evaluated for sourcing transparency, roast quality, consistency, and their contribution to Montreal&apos;s broader coffee culture. These are not just places to get a good cup — they are the establishments defining what specialty coffee means in this city.
        </p>

        <h3 className={styles.h3}>1. Café Pista</h3>
        <div className={styles.infoBlock}>
          <span className={styles.infoLine}>6524 Boul. Saint-Laurent, Montréal H2S 3C6</span>
          <a href="https://www.cafepista.com" target="_blank" rel="noopener noreferrer" className={styles.inlineLink}>cafepista.com</a>
        </div>
        <p className={styles.p}>
          Café Pista is the most internationally recognized roaster on this list. Ranked among the top specialty coffee destinations in North America, Pista has built a reputation on precision sourcing and a commitment to natural and washed process coffees from Ethiopia, Colombia, and El Salvador. Their bar on Saint-Laurent is minimal, focused, and serious — in the best possible way. If you want to understand what the global conversation about specialty coffee sounds like when it happens in Montreal, start here.
        </p>

        <h3 className={styles.h3}>2. Café Saint-Henri</h3>
        <div className={styles.infoBlock}>
          <span className={styles.infoLine}>3632 Notre-Dame Ouest, Montréal H4C 1P7</span>
          <a href="https://www.cafestahenri.com" target="_blank" rel="noopener noreferrer" className={styles.inlineLink}>cafestahenri.com</a>
        </div>
        <p className={styles.p}>
          Named for the neighbourhood it helped define, Café Saint-Henri has multiple locations across Montreal and a roastery that ships across Canada. Their approach blends transparency in sourcing with genuine accessibility — the coffee is serious but never intimidating. The flagship Notre-Dame location doubles as a working roastery, and watching bags get pulled off the drum while you drink your espresso is a quietly perfect Montreal moment.
        </p>

        <h3 className={styles.h3}>3. Micro Espresso Bar</h3>
        <div className={styles.infoBlock}>
          <span className={styles.infoLine}>3496 Avenue du Parc, Montréal H2X 2H6</span>
        </div>
        <p className={styles.p}>
          Small in name and in size, Micro Espresso Bar punches well above its footprint. Tucked on Avenue du Parc at the edge of the Plateau, Micro has built a devoted following for its espresso program and its habit of rotating single-origin filters with genuine intention. The team here cares about extraction as much as sourcing, which puts them in rare company. A benchmark for what a neighbourhood bar can be when the people behind it are genuinely obsessed.
        </p>

        <h3 className={styles.h3}>4. Dispatch Coffee</h3>
        <div className={styles.infoBlock}>
          <span className={styles.infoLine}>4231 Boul. Saint-Laurent, Montréal H2W 1Z4</span>
          <a href="https://www.dispatchcoffee.ca" target="_blank" rel="noopener noreferrer" className={styles.inlineLink}>dispatchcoffee.ca</a>
        </div>
        <p className={styles.p}>
          Dispatch Coffee has multiple locations across Montreal and a subscription program that sends fresh-roasted coffee across Canada. Their roasting philosophy leans toward clarity and sweetness — you will rarely find harsh or over-roasted coffee here. The Saint-Laurent location is one of the best spots in the city to sit with a filter and a book. Dispatch is also one of the few Montreal roasters that has cracked the retail and online markets at scale without sacrificing quality.
        </p>

        <h3 className={styles.h3}>5. Brûlerie Saint-Denis</h3>
        <div className={styles.infoBlock}>
          <span className={styles.infoLine}>3967 Rue Saint-Denis, Montréal H2W 2M4</span>
          <a href="https://www.bruleriesaintdenis.com" target="_blank" rel="noopener noreferrer" className={styles.inlineLink}>bruleriesaintdenis.com</a>
        </div>
        <p className={styles.p}>
          The longest-standing name on this list, Brûlerie Saint-Denis has been roasting in Montreal since 1979. What keeps them relevant in 2026 is not nostalgia but consistency. Their sourcing covers a wide range of origins, their retail presence spans multiple Montreal neighbourhoods, and their café on Saint-Denis remains a reference point for what a comfortable, unpretentious specialty coffee experience can look like. An institution that has earned that word honestly.
        </p>

        <h3 className={styles.h3}>6. Tamp and Pull</h3>
        <div className={styles.infoBlock}>
          <span className={styles.infoLine}>4651 Rue Notre-Dame Ouest, Montréal H4C 1S5</span>
        </div>
        <p className={styles.p}>
          Tamp and Pull occupies a corner of Notre-Dame Ouest that the Saint-Henri neighbourhood has long made its own. The espresso here is dialled in with more attention than most places twice the size — the team rotates single-origins through the grinder regularly and treats every cup as a technical exercise without making you feel like you are in a lab. Locals come back daily because the bar is welcoming and the coffee is consistently excellent.
        </p>

        <h3 className={styles.h3}>7. Ambros Coffee Roasters</h3>
        <div className={styles.infoBlock}>
          <span className={styles.infoLine}>1 Rue Clark, Montréal H2X 2T1</span>
        </div>
        <p className={styles.p}>
          Ambros sits near the intersection of Old Montreal and Chinatown, which makes it both a neighbourhood gem and a discovery for visitors who wander off the tourist track. The roasting program is small-batch and focused, with a preference for washed African coffees that show brightness and clarity. The space itself is warm and well-designed without being fussy. A reliable choice any time you are in the area and want something genuinely good.
        </p>

        <h3 className={styles.h3}>8. Café Falco</h3>
        <div className={styles.infoBlock}>
          <span className={styles.infoLine}>5605 Avenue de Gaspé, Montréal H2T 2A4</span>
        </div>
        <p className={styles.p}>
          Café Falco lives in the creative corridor of the Mile End around the Gaspé arts complex, which means its clientele is as interesting as its coffee. The café has developed a strong following among the neighbourhood&apos;s studio and gallery crowd. Their filter program is thoughtful and their sourcing runs toward sustainable and relationship-based producers. A great example of a Montreal café that treats food and coffee with equal seriousness.
        </p>

        <h3 className={styles.h3}>9. September Café</h3>
        <div className={styles.infoBlock}>
          <span className={styles.infoLine}>4021 Rue Sainte-Catherine Ouest, Montréal H3Z 1P7</span>
        </div>
        <p className={styles.p}>
          September Café brings an aesthetic sensibility to its Sainte-Catherine location that makes it easy to spend an hour longer than intended. The coffee program is balanced between accessibility and quality — the bar can produce a great cortado and a well-extracted pour-over without making either feel like a production. The kind of café that quietly raises the standard for an entire block.
        </p>

        <h3 className={styles.h3}>10. Pikolo Espresso Bar</h3>
        <div className={styles.infoBlock}>
          <span className={styles.infoLine}>3418 Avenue du Parc, Montréal H2X 2H5</span>
        </div>
        <p className={styles.p}>
          Pikolo has held a consistent position on Avenue du Parc for years — a neighbourhood anchor in an area full of McGill students, Plateau professionals, and Milton-Parc residents who know what good coffee tastes like. The espresso is reliably excellent, the staff know regulars by order, and the small format keeps the focus exactly where it should be. One of the best places in Montreal to start a morning.
        </p>

        <h2 className={styles.h2}>What Makes Montreal&apos;s Coffee Scene Stand Out</h2>
        <p className={styles.p}>
          Montreal&apos;s specialty coffee scene has a distinctive character that separates it from Toronto, Vancouver, and most North American cities of comparable size. Several factors explain why.
        </p>
        <p className={styles.p}>
          The bilingual culture creates a café environment that is simultaneously more European in its tempo and more North American in its openness. You can sit for two hours over a single coffee without feeling rushed — a rarity in most North American cities. This unhurried quality attracts operators and customers who treat coffee as something to pay attention to rather than consume on the run.
        </p>
        <p className={styles.p}>
          The neighbourhood density of Montreal also matters. Distinct neighbourhoods like the Plateau, Saint-Henri, Mile End, and Rosemont each have their own café cultures that inform what the roasters in those areas produce. Competition is hyper-local and intense, which drives quality upward. The roasters that survive long-term in Montreal are the ones that genuinely deserve to.
        </p>
        <p className={styles.p}>
          Finally, the city&apos;s restaurant culture — which punches significantly above its weight globally — has raised general food literacy in a way that benefits coffee producers. A city that takes its restaurants seriously tends to develop a customer base that takes its coffee seriously too.
        </p>

        <h2 className={styles.h2}>How to Explore Montreal&apos;s Coffee Scene</h2>
        <p className={styles.p}>
          The most efficient way to experience multiple roasters in a single day is to plan a neighbourhood-based route. Start in the Plateau — Micro Espresso Bar and Dispatch are both on or near Saint-Laurent and make for an easy morning double. Head north to Rosemont for Café Pista. Cross into Mile End for Café Falco at lunch. Head south through Saint-Henri for Café Saint-Henri or Tamp and Pull in the afternoon. Finish the day at Brûlerie Saint-Denis for an evening espresso on the terrace in warmer months.
        </p>
        <p className={styles.p}>
          If you are more interested in buying bags to take home than sitting in cafés, Café Pista, Dispatch Coffee, Café Saint-Henri, and Brûlerie Saint-Denis all have strong retail presences with online ordering. Most ship across Canada, which means you do not have to be in Montreal to access their roasts.
        </p>
        <p className={styles.p}>
          For visitors coming specifically for the coffee: the best seasons are shoulder seasons — May through June and September through October — when the terrace culture is active but the city is not overwhelmed with tourists. Café culture is deeply embedded in Montreal&apos;s daily rhythm regardless of season, but the experience of sitting outside on a warm weekday morning with a good espresso in a city this beautiful is hard to replicate anywhere else.
        </p>

        <h2 className={styles.h2}>Why Specialty Coffee Brands Choose Montreal</h2>
        <p className={styles.p}>
          At EZPZ Coffee, we roast at Canadian Roasting Society in Montreal — a deliberate choice. Montreal&apos;s roasting community has raised the standard for what specialty coffee can be in Canada, and operating within that ecosystem keeps us honest. When the roasters on this list are your neighbours, mediocrity is not an option.
        </p>
        <p className={styles.p}>
          We source only 80+ SCA specialty grade coffees from fully traceable origins — the same bar that the best roasters in this city hold themselves to. When brands across Canada put their name on our bags, they are building on a foundation of genuine quality. The neighbourhood you roast in matters, and ours happens to be world-class.
        </p>
        <p className={styles.p}>
          If you are building a coffee brand — for your restaurant, your hotel, your retail store, or your company — you are building it in the same city that produced Café Pista and Café Saint-Henri. That is a meaningful thing to put on a bag.
        </p>

      </article>
    </div>

    {/* ── CTA Banner ────────────────────────────────────────────── */}
    <section className={styles.cta}>
      <div className={styles.ctaInner}>
        <h2 className={styles.ctaTitle}>Put Montreal&apos;s specialty coffee under your brand.</h2>
        <div className={styles.ctaButtons}>
          <Link href="/en/design" className={styles.ctaPrimary}>Design your bag</Link>
          <Link href="/en/coffee" className={styles.ctaSecondary}>Learn about our coffee</Link>
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
