import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

import { BLOG_POSTS } from "../data";
import styles from "./blogPost.module.scss";

export const metadata: Metadata = {
  title: "Best Coffee Shops Montreal & Quebec 2026 | The Complete Guide | EZPZ Coffee",
  description:
    "Looking for the best coffee shops in Montreal? We cover every great café in Montreal and across Quebec — 50+ spots including 4 world-ranked cafés. Your ultimate 2026 guide.",
  alternates: { canonical: "/en/blog/best-coffee-shops-quebec-complete-guide" },
  openGraph: {
    title: "Best Coffee Shops Montreal & Quebec 2026 | 50+ Cafés Reviewed | EZPZ",
    description:
      "The most complete guide to the best coffee shops in Montreal and Quebec. 50+ cafés including 4 world-ranked spots — from Mile End to Quebec City.",
    type: "article",
    url: "https://www.ezpz.coffee/en/blog/best-coffee-shops-quebec-complete-guide",
    images: [{ url: "/assets/blog/quebec-coffee-bible.svg", width: 800, height: 420, alt: "Best Coffee Shops Montreal & Quebec 2026 — The Complete Guide" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Coffee Shops Montreal & Quebec 2026 | The Complete Guide | EZPZ Coffee",
    description: "50+ cafés including 4 world-ranked Montreal spots. The most complete Montreal and Quebec coffee guide ever written.",
    images: ["/assets/blog/quebec-coffee-bible.svg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "The Quebec Coffee Bible: Every Great Coffee Shop in the Province",
      description: "The most comprehensive guide to specialty coffee in Quebec — 50+ cafés across Montreal, Quebec City, Sherbrooke, Laval, the Laurentians, and beyond.",
      datePublished: "2026-05-04",
      author: { "@type": "Organization", name: "EZPZ Coffee Team" },
      publisher: { "@type": "Organization", name: "EZPZ Coffee", url: "https://www.ezpz.coffee" },
      image: "https://www.ezpz.coffee/assets/blog/quebec-coffee-bible.svg",
      url: "https://www.ezpz.coffee/en/blog/best-coffee-shops-quebec-complete-guide",
      wordCount: 4200,
    },
    // ── Montreal World-Ranked ────────────────────────────────────
    { "@type": "CafeOrCoffeeShop", name: "Café Pista", description: "Montreal's highest-ranked café on the World's 100 Best Coffee Shops 2026 list, ranked #34 out of 4,600+ establishments.", address: { "@type": "PostalAddress", streetAddress: "6524 Boulevard Saint-Laurent", addressLocality: "Montréal", addressRegion: "QC", postalCode: "H2S 3C6", addressCountry: "CA" } },
    { "@type": "CafeOrCoffeeShop", name: "Café Saint-Henri", description: "Ranked #60 on the World's 100 Best Coffee Shops 2026 list. One of Montreal's most respected specialty roasters since 2011.", address: { "@type": "PostalAddress", streetAddress: "3632 Notre-Dame Street West", addressLocality: "Montréal", addressRegion: "QC", postalCode: "H4C 1P7", addressCountry: "CA" } },
    { "@type": "CafeOrCoffeeShop", name: "Micro Espresso Bar", description: "Ranked #89 on the World's 100 Best Coffee Shops 2026 list. Precision extractions, seasonal single-origin harvests.", address: { "@type": "PostalAddress", streetAddress: "3496 Avenue du Parc", addressLocality: "Montréal", addressRegion: "QC", postalCode: "H2X 2H6", addressCountry: "CA" } },
    { "@type": "CafeOrCoffeeShop", name: "Café Éclair", description: "Ranked #91 on the World's 100 Best Coffee Shops 2026 list. All coffees roasted outside Canada for a global specialty perspective.", address: { "@type": "PostalAddress", streetAddress: "1 Rue Saint-Viateur East", addressLocality: "Montréal", addressRegion: "QC", postalCode: "H2T 1A8", addressCountry: "CA" } },
    // ── Montreal Icons ───────────────────────────────────────────
    { "@type": "CafeOrCoffeeShop", name: "Caffè Olimpico", description: "Montreal's original espresso institution. Serving Mile End since the 1970s. The Italian espresso tradition alive and intact.", address: { "@type": "PostalAddress", streetAddress: "124 Rue Saint-Viateur Ouest", addressLocality: "Montréal", addressRegion: "QC", postalCode: "H2T 2L1", addressCountry: "CA" } },
    { "@type": "CafeOrCoffeeShop", name: "Café Myriade", description: "Five locations across Montreal. Specialty coffee chain that never feels like a chain. Sourcing top producers worldwide since 2008.", address: { "@type": "PostalAddress", streetAddress: "4627 Rue Saint-Denis", addressLocality: "Montréal", addressRegion: "QC", postalCode: "H2J 2L4", addressCountry: "CA" } },
    { "@type": "CafeOrCoffeeShop", name: "Dispatch Coffee", description: "One of Montreal's most respected specialty roasters with an exceptional direct-trade sourcing program.", address: { "@type": "PostalAddress", streetAddress: "4231 Boulevard Saint-Laurent", addressLocality: "Montréal", addressRegion: "QC", postalCode: "H2W 1Z4", addressCountry: "CA" } },
    // ── Montreal Neighbourhood ───────────────────────────────────
    { "@type": "CafeOrCoffeeShop", name: "Caffè Biscotti", description: "Outremont's beloved neighbourhood café. Warm, unpretentious, serving the community for decades.", address: { "@type": "PostalAddress", streetAddress: "357 Avenue Van Horne", addressLocality: "Montréal", addressRegion: "QC", postalCode: "H2V 1K2", addressCountry: "CA" } },
    { "@type": "CafeOrCoffeeShop", name: "Café Falco", description: "Japanese-inspired minimalist café in Mile End. Concrete floors, floor-to-ceiling windows, precise coffee.", address: { "@type": "PostalAddress", streetAddress: "5605 Avenue de Gaspé", addressLocality: "Montréal", addressRegion: "QC", postalCode: "H2T 2A4", addressCountry: "CA" } },
    { "@type": "CafeOrCoffeeShop", name: "September Café", description: "Surfer-owner aesthetic, legendary summer patio. One of the most beloved café atmospheres in Montreal.", address: { "@type": "PostalAddress", streetAddress: "4021 Rue Sainte-Catherine Ouest", addressLocality: "Montréal", addressRegion: "QC", postalCode: "H3Z 1P7", addressCountry: "CA" } },
    { "@type": "CafeOrCoffeeShop", name: "Pikolo Espresso Bar", description: "Consistently top-rated on Yelp. Exceptional espresso at reasonable prices, selling beans from top Montreal roasters.", address: { "@type": "PostalAddress", streetAddress: "3418 Avenue du Parc", addressLocality: "Montréal", addressRegion: "QC", postalCode: "H2X 2H5", addressCountry: "CA" } },
    { "@type": "CafeOrCoffeeShop", name: "Ambros Coffee Roasters", description: "Family operation run by two brothers and their father. Personal, passionate, beautifully designed.", address: { "@type": "PostalAddress", streetAddress: "1 Rue Clark", addressLocality: "Montréal", addressRegion: "QC", postalCode: "H2X 2T1", addressCountry: "CA" } },
    { "@type": "CafeOrCoffeeShop", name: "Café Larue and Fils", description: "Villeray's finest neighbourhood café near Jean-Talon Market. Street terrasse in summer is legendary.", address: { "@type": "PostalAddress", streetAddress: "1357 Rue Castelnau Est", addressLocality: "Montréal", addressRegion: "QC", postalCode: "H2R 1R9", addressCountry: "CA" } },
    { "@type": "CafeOrCoffeeShop", name: "Tommy Café", description: "Most photogenic café space in downtown Montreal. Multi-level interior with stunning views and excellent cold brew.", address: { "@type": "PostalAddress", streetAddress: "200 Notre-Dame Street West", addressLocality: "Montréal", addressRegion: "QC", postalCode: "H2Y 1T3", addressCountry: "CA" } },
    { "@type": "CafeOrCoffeeShop", name: "Miss Boon", description: "Nature-inspired café in Villeray with abundant indoor plants and warm lighting. A restorative experience.", address: { "@type": "PostalAddress", streetAddress: "8527 Rue Drolet", addressLocality: "Montréal", addressRegion: "QC", postalCode: "H2P 2J1", addressCountry: "CA" } },
    // ── Montreal Hidden Gems ─────────────────────────────────────
    { "@type": "CafeOrCoffeeShop", name: "Zab Café", description: "Multi-roaster experience. The freezer of special coffees is legendary among serious Montreal coffee drinkers.", address: { "@type": "PostalAddress", streetAddress: "6201 Saint Denis Street", addressLocality: "Montréal", addressRegion: "QC", addressCountry: "CA" } },
    { "@type": "CafeOrCoffeeShop", name: "Shaughnessy Café", description: "Hidden gem in Shaughnessy Village. Committed to quality with warm atmosphere and rich freshly roasted aromas.", address: { "@type": "PostalAddress", streetAddress: "1455 Rue Lambert-Closse", addressLocality: "Montréal", addressRegion: "QC", postalCode: "H3H 1Z5", addressCountry: "CA" } },
    { "@type": "CafeOrCoffeeShop", name: "SoLit Café", description: "Summer vibes year round in downtown Montreal. Coffee, fresh juices, and great food.", address: { "@type": "PostalAddress", streetAddress: "2030 Mansfield Street", addressLocality: "Montréal", addressRegion: "QC", postalCode: "H3A 2Y7", addressCountry: "CA" } },
    { "@type": "CafeOrCoffeeShop", name: "Crew Collective and Café", description: "Inside a stunning 1920s Royal Bank of Canada branch with 50-foot vaulted ceilings. One of the most beautiful spaces in North America.", address: { "@type": "PostalAddress", streetAddress: "360 Rue Saint-Jacques", addressLocality: "Montréal", addressRegion: "QC", postalCode: "H2Y 1P5", addressCountry: "CA" } },
    { "@type": "CafeOrCoffeeShop", name: "La Finca", description: "Ethically sourced beans from Don Eli Farm in Costa Rica since 2012. A pioneering direct trade relationship.", address: { "@type": "PostalAddress", addressLocality: "Montréal", addressRegion: "QC", addressCountry: "CA" } },
    { "@type": "CafeOrCoffeeShop", name: "The Standard", description: "Luxurious café in NDG with marble countertops and exceptional coffee.", address: { "@type": "PostalAddress", streetAddress: "5135 Sherbrooke Street West", addressLocality: "Montréal", addressRegion: "QC", postalCode: "H4A 1T3", addressCountry: "CA" } },
    { "@type": "CafeOrCoffeeShop", name: "Dreamy Coffee Supermarket", description: "Inside Canadian Roasting Society in Montreal's southwest. Open weekends. Specialty beans from multiple roasters.", address: { "@type": "PostalAddress", streetAddress: "3780 Rue Saint-Patrick", addressLocality: "Montréal", addressRegion: "QC", postalCode: "H4E 1A2", addressCountry: "CA" } },
    { "@type": "CafeOrCoffeeShop", name: "Canal Roasters", description: "Started after founders were dissatisfied with their existing supplier. Highlights humans in the supply chain.", address: { "@type": "PostalAddress", addressLocality: "Montréal", addressRegion: "QC", addressCountry: "CA" } },
    // ── Quebec City ──────────────────────────────────────────────
    { "@type": "CafeOrCoffeeShop", name: "Maison Smith", description: "Quebec City's most beloved specialty coffee brand. Multiple locations throughout the city.", address: { "@type": "PostalAddress", addressLocality: "Québec", addressRegion: "QC", addressCountry: "CA" } },
    { "@type": "CafeOrCoffeeShop", name: "Café Krieghoff", description: "A Quebec City institution on Avenue Cartier. Warm atmosphere, excellent coffee, neighbourhood anchor for decades.", address: { "@type": "PostalAddress", streetAddress: "1091 Avenue Cartier", addressLocality: "Québec", addressRegion: "QC", postalCode: "G1R 2S6", addressCountry: "CA" } },
    { "@type": "CafeOrCoffeeShop", name: "Café du Clocher Penché", description: "In Saint-Roch, one of Quebec City's most celebrated café-restaurant destinations with a serious coffee program.", address: { "@type": "PostalAddress", streetAddress: "203 Rue Saint-Joseph Est", addressLocality: "Québec", addressRegion: "QC", postalCode: "G1K 3B1", addressCountry: "CA" } },
    // ── Eastern Townships ────────────────────────────────────────
    { "@type": "CafeOrCoffeeShop", name: "Café Géogène", description: "Fervent disciple of third wave coffee in Sherbrooke. Beans roasted and packaged on-site.", address: { "@type": "PostalAddress", addressLocality: "Sherbrooke", addressRegion: "QC", addressCountry: "CA" } },
    { "@type": "CafeOrCoffeeShop", name: "Café Hubert Saint-Jean", description: "Cult address in Sherbrooke beloved by students. Exceptional coffee, welcoming study atmosphere.", address: { "@type": "PostalAddress", streetAddress: "455 Rue King Ouest", addressLocality: "Sherbrooke", addressRegion: "QC", addressCountry: "CA" } },
    { "@type": "CafeOrCoffeeShop", name: "Kàapeh", description: "Warm café-bistro-gallery-wine bar near the Magog River in Sherbrooke. Most atmospheric in the Eastern Townships.", address: { "@type": "PostalAddress", addressLocality: "Sherbrooke", addressRegion: "QC", addressCountry: "CA" } },
    { "@type": "CafeOrCoffeeShop", name: "Fitch Bay Café", description: "Specialty roasting company in Magog. Ideal stop for freshly roasted coffee beans on the road.", address: { "@type": "PostalAddress", streetAddress: "464 Rue Principale Ouest", addressLocality: "Magog", addressRegion: "QC", addressCountry: "CA" } },
  ],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the best coffee shop in Montreal?",
      acceptedAnswer: { "@type": "Answer", text: "According to the World's 100 Best Coffee Shops 2026, the best coffee shop in Montreal is Café Pista, ranked number 34 in all of North America. Other top-ranked Montreal coffee shops include Café Saint-Henri at number 60, Micro Espresso at number 89, and Café Éclair at number 91." },
    },
    {
      "@type": "Question",
      name: "Where can I find specialty coffee in Montreal?",
      acceptedAnswer: { "@type": "Answer", text: "Montreal has dozens of excellent specialty coffee shops. The best areas for specialty coffee in Montreal are Mile End, the Plateau-Mont-Royal, Saint-Henri, and the Quartier des Spectacles. Key addresses include Café Pista on Saint-Laurent, Café Saint-Henri on Notre-Dame West, Micro Espresso on Avenue du Parc, and Caffè Olimpico on Saint-Viateur." },
    },
    {
      "@type": "Question",
      name: "What neighbourhood has the best coffee shops in Montreal?",
      acceptedAnswer: { "@type": "Answer", text: "Mile End has the highest concentration of excellent coffee shops in Montreal, including Café Pista, Caffè Olimpico, Café Éclair, and Ambros Coffee Roasters. The Plateau-Mont-Royal and Saint-Henri are also excellent neighbourhoods for coffee in Montreal." },
    },
    {
      "@type": "Question",
      name: "Is Montreal known for coffee?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. Montreal is one of Canada's great coffee cities and is increasingly recognized internationally. In 2026, four Montreal cafés were ranked among the top 100 best coffee shops in all of North America — more than any other Canadian city." },
    },
    {
      "@type": "Question",
      name: "What is the most famous coffee shop in Montreal?",
      acceptedAnswer: { "@type": "Answer", text: "Caffè Olimpico on Rue Saint-Viateur in Mile End is arguably Montreal's most famous coffee shop, having served the neighbourhood since the 1970s. For specialty coffee, Café Pista is Montreal's most internationally recognized café, ranked number 34 in North America in 2026." },
    },
    {
      "@type": "Question",
      name: "Where do locals drink coffee in Montreal?",
      acceptedAnswer: { "@type": "Answer", text: "Montreal locals frequent neighbourhood cafés like Café Larue and Fils in Villeray, September Café in Saint-Henri, Pikolo Espresso Bar near Parc, and Café Myriade across multiple neighbourhoods. Caffè Olimpico in Mile End remains a local institution after decades of operation." },
    },
  ],
};

const MORE_SLUGS = ["best-coffee-shops-montreal-2026", "best-coffee-roasters-montreal-2026", "how-to-launch-coffee-brand-canada-2026"];
const morePosts = BLOG_POSTS.filter((p) => MORE_SLUGS.includes(p.slug));

const Page = () => (
  <div className={styles.page}>

    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
    />

    {/* ── Hero ──────────────────────────────────────────────────── */}
    <section className={styles.hero}>
      <div className={styles.heroAccentBar} />
      <div className={styles.heroInner}>
        <span className={styles.heroCategory}>Quebec Coffee Bible</span>
        <h1 className={styles.heroTitle}>
          The Best Coffee Shops in Montreal and Quebec: The Complete 2026 Bible
        </h1>
        <p className={styles.heroSubtitle}>
          The most complete guide to the best coffee shops in Montreal and Quebec ever written.
          From the world-ranked cafés of Montreal to hidden gems across the province — every cup
          worth drinking in 2026.
        </p>
        <div className={styles.heroMeta}>
          <span>May 4, 2026</span>
          <span className={styles.heroMetaDot} />
          <span>25 min read</span>
          <span className={styles.heroMetaDot} />
          <span className={styles.heroScope}>The most comprehensive Quebec coffee guide online — 4,000+ words covering <Link href="/en/locations" className={styles.heroScope} style={{ textDecoration: "underline" }}>50+ cafés</Link> across the province</span>
        </div>
      </div>
    </section>

    {/* ── TL;DR ─────────────────────────────────────────────────── */}
    <div className={styles.tldr} role="note" aria-label="Article summary">
      <strong className={styles.tldrLabel}>TL;DR</strong>
      <p className={styles.tldrText}>Quebec is home to four of North America&apos;s top 100 coffee shops, world-class roasters, and a café culture that extends from Montreal&apos;s Mile End to Quebec City&apos;s Saint-Roch to the Eastern Townships. This guide covers 50+ cafés across 8 regions — the most comprehensive Quebec coffee map ever written.</p>
    </div>

    {/* ── Body (TOC + Article) ───────────────────────────────────── */}
    <div className={styles.bodyWrapper}>
      <div className={styles.bodyLayout}>

        {/* ── Table of Contents ─────────────────────────────────── */}
        <aside className={styles.tocCol}>
          <nav className={styles.tocInner} aria-label="Table of contents">
            <p className={styles.tocLabel}>In this guide</p>
            <ul className={styles.tocList}>
              <li className={styles.tocItem}><a href="#how-to-use" className={styles.tocLink}>How to use this guide</a></li>
              <li className={styles.tocItem}><a href="#montreal" className={styles.tocLink}>Montréal</a></li>
              <li className={styles.tocItem}><a href="#montreal-world-ranked" className={`${styles.tocLink} ${styles.tocSub}`}>↳ World Ranked</a></li>
              <li className={styles.tocItem}><a href="#montreal-icons" className={`${styles.tocLink} ${styles.tocSub}`}>↳ The Icons</a></li>
              <li className={styles.tocItem}><a href="#montreal-neighbourhood" className={`${styles.tocLink} ${styles.tocSub}`}>↳ Neighbourhood</a></li>
              <li className={styles.tocItem}><a href="#montreal-gems" className={`${styles.tocLink} ${styles.tocSub}`}>↳ Hidden Gems</a></li>
              <li className={styles.tocItem}><a href="#laval" className={styles.tocLink}>Laval &amp; North Shore</a></li>
              <li className={styles.tocItem}><a href="#laurentians" className={styles.tocLink}>The Laurentians</a></li>
              <li className={styles.tocItem}><a href="#quebec-city" className={styles.tocLink}>Québec City</a></li>
              <li className={styles.tocItem}><a href="#eastern-townships" className={styles.tocLink}>Eastern Townships</a></li>
              <li className={styles.tocItem}><a href="#ezpz-note" className={styles.tocLink}>A note from EZPZ</a></li>
            </ul>
          </nav>
        </aside>

        {/* ── Article ───────────────────────────────────────────── */}
        <article className={styles.article}>

          <p className={styles.intro}>
            Quebec is a coffee province. Not in the way that Seattle or Melbourne get credit for their
            coffee cultures — loudly, internationally, with global recognition — but in the quiet,
            obsessive, deeply personal way that Quebecers approach everything they love. The terrasses
            of the Plateau fill up the moment the temperature hits 10 degrees. The lineup at Olimpico
            on a Sunday morning has not changed in forty years. And the specialty coffee movement that
            has swept through Montreal over the past decade has quietly produced four of the top 100
            coffee shops in all of North America.
          </p>
          <p className={styles.p}>
            People searching for the best coffee shops in Montreal will find everything they need right here.
            Montreal alone has over 30 incredible specialty cafés covered in this guide — including four
            that ranked among the top 100 best coffee shops in all of North America in 2026. But this guide
            goes further than any other Montreal coffee guide online. We cover not just Montreal but every
            great café across the entire province of Quebec — from Quebec City to the Eastern Townships
            to the Laurentians.
          </p>
          <p className={styles.p}>
            This guide is the most comprehensive map of great coffee in Quebec ever written. We have
            covered Montreal in other posts — the{" "}
            <Link href="/en/blog/best-coffee-shops-montreal-2026" className={styles.inlineLink}>15 best coffee shops</Link>{" "}
            and the{" "}
            <Link href="/en/blog/best-coffee-roasters-montreal-2026" className={styles.inlineLink}>10 best roasters</Link>.
            This is the full picture. Every city. Every region. Every cup worth going out of your way for.
          </p>
          <p className={styles.p}>
            At <Link href="/en" className={styles.inlineLink}>EZPZ Coffee</Link>, we roast specialty coffee
            fresh in Montreal at{" "}
            <Link href="/en/about" className={styles.inlineLink}>Canadian Roasting Society</Link>{" "}
            and ship custom branded bags across Canada. We know this province&apos;s coffee culture
            from the inside. This is our bible.
          </p>

          {/* ── How to Use ───────────── */}
          <h2 id="how-to-use" className={styles.h2}>How to Use This Guide</h2>
          <p className={styles.p}>
            This guide is organized geographically. Start with Montreal — the heart of Quebec&apos;s
            coffee scene — then move outward through the Island, across the South Shore, up to Laval
            and the North Shore, into the Laurentians, east to Quebec City, through the Eastern
            Townships, and finally to the more remote regions of the province.
          </p>
          <p className={styles.p}>
            Each café listing includes the address, what makes it worth visiting, and what to order.
            We have tried to be honest — this is not a paid guide and we receive no compensation from
            any café listed here. These are the places we would recommend to a friend. Whether you are
            building a personal Montreal café guide, planning a coffee crawl, or simply looking for
            where to get coffee in Montreal on your next visit — this is the only list you need.
          </p>

          {/* ── Montreal ─────────────────────────────────────────── */}
          <h2 id="montreal" className={styles.h2}>Montréal — Home of the Best Coffee Shops in Quebec</h2>

          <h3 id="montreal-world-ranked" className={styles.h3}>The World Ranked — The Best of the Best</h3>
          <p className={styles.p}>
            These four Montreal cafés were named among the top 100 best coffee shops in all of North
            America in 2026 by The World&apos;s 100 Best Coffee Shops — evaluated by over 200 judges
            across more than 4,600 establishments. They represent the very peak of specialty coffee
            in Montreal and among the best cafes in Montreal by any measure.
          </p>

          {/* Pista */}
          <div className={styles.rank}>World Ranked #34</div>
          <h3 className={styles.h3}>Café Pista</h3>
          <div className={styles.addressBlock}>
            <span className={styles.addressLine}>6524 Boulevard Saint-Laurent, Montréal, QC H2S 3C6 · also 1450 Rue City Councillors, Montréal, QC H3A 2E6</span>
            <span className={styles.neighbourhood}>Rosemont &amp; Quartier des Spectacles</span>
          </div>
          <p className={styles.p}>
            Founded by Maxime Richard in 2014 as a coffee bike before growing into one of the most
            respected roasting operations in Canada. Pista is described by the ranking as focused on
            quality, transparency, and community — sourcing traceable coffees, roasting in-house, and
            creating welcoming spaces that connect people from producer to consumer. Their Quartier des
            Spectacles location is a destination and their Mile-End roastery is where the magic happens.
            The highest-ranked café in all of Canada.
          </p>
          <div className={styles.orderBlock}><strong>What to order:</strong> Their rotating single origin espresso and any naturally processed Ethiopian on the menu.</div>

          {/* Saint-Henri */}
          <div className={styles.rank}>World Ranked #60</div>
          <h3 className={styles.h3}>Café Saint-Henri</h3>
          <div className={styles.addressBlock}>
            <span className={styles.addressLine}>3632 Notre-Dame Street West, Montréal, QC H4C 1P7 · multiple locations across the city</span>
            <span className={styles.neighbourhood}>Saint-Henri &amp; multiple</span>
          </div>
          <p className={styles.p}>
            The ranking describes their Villeray flagship as a dedicated space to explore, taste, and
            learn everything about specialty coffee — with workshops, tastings, and hands-on brewing
            experiences designed to bring producers and consumers closer together. Since 2011,
            Saint-Henri has led Quebec&apos;s specialty coffee scene with a commitment to direct-trade
            relationships and exceptional roasting.
          </p>
          <div className={styles.orderBlock}><strong>What to order:</strong> Their house espresso blend and any seasonal single origin. Their latte with the Altitude Blend is a Montreal classic.</div>

          {/* Micro */}
          <div className={styles.rank}>World Ranked #89</div>
          <h3 className={styles.h3}>Micro Espresso Bar</h3>
          <div className={styles.addressBlock}>
            <span className={styles.addressLine}>3496 Avenue du Parc, Montréal, QC H2X 2H6</span>
            <span className={styles.neighbourhood}>Milton-Parc</span>
          </div>
          <p className={styles.p}>
            The place where, as the ranking puts it, Montreal&apos;s true coffee lovers go for their
            daily cup — no gimmicks, just precision extractions, consistent drinks, and genuinely great
            service. Built around beans from producers like Wilton Benitez and select farms worldwide,
            with batch brew rotating through seasonal single-origin harvests. One of the best value
            specialty coffee experiences in the province.
          </p>
          <div className={styles.orderBlock}><strong>What to order:</strong> The batch brew of the day. Whatever it is, trust it completely.</div>

          {/* Éclair */}
          <div className={styles.rank}>World Ranked #91</div>
          <h3 className={styles.h3}>Café Éclair</h3>
          <div className={styles.addressBlock}>
            <span className={styles.addressLine}>1 Rue Saint-Viateur East, Montréal, QC H2T 1A8</span>
            <span className={styles.neighbourhood}>Mile End</span>
          </div>
          <p className={styles.p}>
            A small Mile End specialty shop with a very specific and intentional philosophy: all their
            coffees are roasted outside Canada to introduce clients to the different visions of the
            coffee industry from around the world. They run a slow bar and serve one coffee at a time
            with a deeply personal and intimate service style.
          </p>
          <div className={styles.orderBlock}><strong>What to order:</strong> Ask the barista what is tasting best that day. The answer will surprise you.</div>

          {/* ── Why Montreal ──────────────────────────────────────── */}
          <h2 className={styles.h2}>Why Montreal Has the Best Coffee Shops in Canada</h2>
          <p className={styles.p}>
            Montreal&apos;s coffee shop scene is unlike any other city in Canada. Four factors combine
            to create something truly special.
          </p>
          <p className={styles.p}>
            <strong>First, the culture.</strong> Montrealers live in their cafés in a way that Canadians
            in other cities simply do not. A Montreal coffee shop is not just a place to grab a drink —
            it is a living room, a workspace, a meeting place, a community hub. This cultural expectation
            pushes café owners to be excellent because their customers will stay for hours and they will
            know immediately if something is not right.
          </p>
          <p className={styles.p}>
            <strong>Second, the competition.</strong> Montreal has more specialty coffee shops per capita
            than any other Canadian city. When you have Café Pista, Café Saint-Henri, Micro Espresso,
            and Café Éclair all operating at a world-class level in the same city, everyone around them
            has to raise their game or close. The competition has produced extraordinary quality across
            the board — and when you&apos;re looking for the best espresso in Montreal or the best latte
            in Montreal, you will find that the options are genuinely world-class.
          </p>
          <p className={styles.p}>
            <strong>Third, the openness.</strong> Montreal&apos;s bilingual, multicultural character
            means it absorbs influences from everywhere — Italian espresso traditions, Japanese pour-over
            precision, Scandinavian roasting philosophy, and North American third-wave values all coexist
            and cross-pollinate in ways that produce genuinely innovative coffee experiences. The best
            pour-over in Montreal can stand beside the best pour-over anywhere in the world.
          </p>
          <p className={styles.p}>
            <strong>Fourth, Canadian Roasting Society.</strong> The shared roasting facility in
            Montreal&apos;s southwest has become a hub for the city&apos;s specialty coffee community —
            giving independent roasters access to world-class equipment and creating a collaborative
            environment that lifts the entire scene. If you&apos;re wondering where to get coffee in
            Montreal, the trails all lead back to what&apos;s being roasted here.
          </p>

          <div className={styles.regionDivider}><span>Montreal Icons</span></div>

          <h3 id="montreal-icons" className={styles.h3}>The Montreal Icons</h3>

          <h3 className={styles.h3}>Caffè Olimpico</h3>
          <div className={styles.addressBlock}>
            <span className={styles.addressLine}>124 Rue Saint-Viateur Ouest, Montréal, QC H2T 2L1</span>
            <span className={styles.neighbourhood}>Mile End</span>
          </div>
          <p className={styles.p}>
            The original. Serving espresso in Mile End since the 1970s. The Italian tradition is alive
            and intact — short, strong, and served with genuine warmth. The bomboloni are legendary.
            The lineups are real but the service is lightning fast. This is where Montreal&apos;s
            coffee culture was born.
          </p>
          <div className={styles.orderBlock}><strong>What to order:</strong> A double espresso at the bar. Standing up. The way it was meant to be drunk.</div>

          <h3 className={styles.h3}>Café Myriade</h3>
          <div className={styles.addressBlock}>
            <span className={styles.addressLine}>4627 Rue Saint-Denis, Montréal, QC H2J 2L4 · five locations across the city</span>
            <span className={styles.neighbourhood}>Plateau-Mont-Royal &amp; multiple</span>
          </div>
          <p className={styles.p}>
            Five locations across Montreal that never feel like a chain. Since 2008, Myriade has been
            sourcing from top producers worldwide and roasting with genuine care. The consistency across
            locations is impressive and the staff knowledge is exceptional.
          </p>
          <div className={styles.orderBlock}><strong>What to order:</strong> Their signature espresso drinks and rotating filter coffee.</div>

          <h3 className={styles.h3}>Dispatch Coffee</h3>
          <div className={styles.addressBlock}>
            <span className={styles.addressLine}>4231 Boulevard Saint-Laurent, Montréal, QC H2W 1Z4</span>
            <span className={styles.neighbourhood}>Plateau-Mont-Royal</span>
          </div>
          <p className={styles.p}>
            One of Montreal&apos;s most respected specialty roasters. Their sourcing program is
            exceptional — working directly with farmers and importers to secure some of the most
            interesting lots available in Canada. The roasting is clean and precise.
          </p>
          <div className={styles.orderBlock}><strong>What to order:</strong> Their direct trade Guatemalan and any East African natural.</div>

          <div className={styles.regionDivider}><span>Neighbourhood Institutions</span></div>

          <h3 id="montreal-neighbourhood" className={styles.h3}>The Neighbourhood Institutions</h3>

          <h3 className={styles.h3}>Caffè Biscotti</h3>
          <div className={styles.addressBlock}>
            <span className={styles.addressLine}>357 Avenue Van Horne, Montréal, QC H2V 1K2</span>
            <span className={styles.neighbourhood}>Outremont</span>
          </div>
          <p className={styles.p}>
            Outremont&apos;s beloved neighbourhood café. A warm, unpretentious space that has been
            serving the community for decades with genuine care.
          </p>
          <div className={styles.orderBlock}><strong>What to order:</strong> Their espresso and any of the fresh pastries.</div>

          <h3 className={styles.h3}>Café Falco</h3>
          <div className={styles.addressBlock}>
            <span className={styles.addressLine}>5605 Avenue de Gaspé, Montréal, QC H2T 2A4</span>
            <span className={styles.neighbourhood}>Mile End</span>
          </div>
          <p className={styles.p}>
            Japanese-inspired minimalist café in Mile End. Concrete floors, floor-to-ceiling windows,
            and one of the most beautiful café interiors in the city. The coffee is as precise as the
            aesthetic.
          </p>
          <div className={styles.orderBlock}><strong>What to order:</strong> Their latte and any seasonal single origin pour-overs.</div>

          <h3 className={styles.h3}>September Café</h3>
          <div className={styles.addressBlock}>
            <span className={styles.addressLine}>4021 Rue Sainte-Catherine Ouest, Montréal, QC H3Z 1P7</span>
            <span className={styles.neighbourhood}>Westmount</span>
          </div>
          <p className={styles.p}>
            The surfer-owner aesthetic translates into one of the most relaxed and welcoming café
            atmospheres in the city. The patio in summer is legendary.
          </p>
          <div className={styles.orderBlock}><strong>What to order:</strong> Their house blend and anything from their rotating seasonal menu.</div>

          <h3 className={styles.h3}>Pikolo Espresso Bar</h3>
          <div className={styles.addressBlock}>
            <span className={styles.addressLine}>3418 Avenue du Parc, Montréal, QC H2X 2H5</span>
            <span className={styles.neighbourhood}>Milton-Parc</span>
          </div>
          <p className={styles.p}>
            One of Yelp&apos;s most consistently top-rated coffee spots in Montreal. Exceptional
            espresso at remarkably reasonable prices. They sell beans from the city&apos;s top roasters.
          </p>
          <div className={styles.orderBlock}><strong>What to order:</strong> Their espresso of the moment.</div>

          <h3 className={styles.h3}>Ambros Coffee Roasters</h3>
          <div className={styles.addressBlock}>
            <span className={styles.addressLine}>1 Rue Clark, Montréal, QC H2X 2T1</span>
            <span className={styles.neighbourhood}>Mile End</span>
          </div>
          <p className={styles.p}>
            A family operation run by two brothers and their father. Personal, passionate, beautifully
            designed.
          </p>
          <div className={styles.orderBlock}><strong>What to order:</strong> Their Ethiopian Guji natural.</div>

          <h3 className={styles.h3}>Café Larue and Fils</h3>
          <div className={styles.addressBlock}>
            <span className={styles.addressLine}>1357 Rue Castelnau Est, Montréal, QC H2R 1R9</span>
            <span className={styles.neighbourhood}>Villeray</span>
          </div>
          <p className={styles.p}>
            Villeray&apos;s finest neighbourhood café near Jean-Talon Market. In summer the street
            closes to cars and the terrasse becomes one of the city&apos;s best spots.
          </p>
          <div className={styles.orderBlock}><strong>What to order:</strong> Their house espresso and any seasonal pastry.</div>

          <h3 className={styles.h3}>Tommy Café</h3>
          <div className={styles.addressBlock}>
            <span className={styles.addressLine}>200 Notre-Dame Street West, Montréal, QC H2Y 1T3 · multiple locations</span>
            <span className={styles.neighbourhood}>Old Montreal &amp; multiple</span>
          </div>
          <p className={styles.p}>
            One of the most photogenic café spaces in the city with multiple levels and stunning views.
            The cold brew is consistently excellent.
          </p>
          <div className={styles.orderBlock}><strong>What to order:</strong> Cold brew and any of their espresso drinks.</div>

          <h3 className={styles.h3}>Miss Boon</h3>
          <div className={styles.addressBlock}>
            <span className={styles.addressLine}>8527 Rue Drolet, Montréal, QC H2P 2J1</span>
            <span className={styles.neighbourhood}>Villeray</span>
          </div>
          <p className={styles.p}>
            Nature-inspired café in Villeray with abundant indoor plants and warm lighting. A restorative
            experience especially in Montreal&apos;s long winters.
          </p>
          <div className={styles.orderBlock}><strong>What to order:</strong> Their specialty lattes and fresh juices.</div>

          <div className={styles.regionDivider}><span>Hidden Gems</span></div>

          <h3 id="montreal-gems" className={styles.h3}>The Hidden Gems</h3>

          <h3 className={styles.h3}>Zab Café</h3>
          <div className={styles.addressBlock}>
            <span className={styles.addressLine}>6201 Saint Denis Street, Montréal, QC H2S 2R8</span>
            <span className={styles.neighbourhood}>Rosemont</span>
          </div>
          <p className={styles.p}>
            One of Montreal&apos;s most interesting multi-roaster experiences. The freezer of special
            coffees in the back is legendary among serious coffee drinkers. Their natural Ethiopian
            coffees brewed on a Hario Switch are extraordinary.
          </p>
          <div className={styles.orderBlock}><strong>What to order:</strong> Ask about their frozen special coffees and let the barista guide you.</div>

          <h3 className={styles.h3}>White Heron Coffee</h3>
          <p className={styles.p}>
            Japanese-inspired specialty coffee shop with an eclectic mix of roasters including
            Montreal&apos;s Traffic, Toronto&apos;s Hatch, and Quebec&apos;s Yamabiko. A cozy,
            welcoming space that rewards regular visits.
          </p>
          <div className={styles.orderBlock}><strong>What to order:</strong> Their espresso options which rotate between bright and classic profiles.</div>

          <h3 className={styles.h3}>Shaughnessy Café</h3>
          <div className={styles.addressBlock}>
            <span className={styles.addressLine}>1455 Rue Lambert-Closse, Montréal, QC H3H 1Z5</span>
            <span className={styles.neighbourhood}>Shaughnessy Village</span>
          </div>
          <p className={styles.p}>
            A hidden gem in the Shaughnessy Village area. Committed to quality, warm atmosphere, rich
            aroma of freshly roasted beans. A go-to for those in the know.
          </p>
          <div className={styles.orderBlock}><strong>What to order:</strong> Their carefully crafted espresso drinks.</div>

          <h3 className={styles.h3}>Helico</h3>
          <div className={styles.addressBlock}>
            <span className={styles.addressLine}>520 Saint-Laurent Boulevard, Montréal, QC H2Y 2Y9</span>
            <span className={styles.neighbourhood}>Old Montreal</span>
          </div>
          <p className={styles.p}>
            Coffee meets brunch spot perfection. Exceptional brews paired with outstanding pastries in
            the heart of Old Montreal. A sensory experience.
          </p>
          <div className={styles.orderBlock}><strong>What to order:</strong> Their espresso with a seasonal pastry.</div>

          <h3 className={styles.h3}>Paquebot</h3>
          <p className={styles.p}>
            A stunning atmosphere and serious coffee program in Old Montreal. Their nitro cold brew is
            one of the best in the city.
          </p>
          <div className={styles.orderBlock}><strong>What to order:</strong> Their nitro cold brew and their signature espresso drinks.</div>

          <h3 className={styles.h3}>SoLit Café</h3>
          <div className={styles.addressBlock}>
            <span className={styles.addressLine}>2030 Mansfield Street, Montréal, QC H3A 2Y7</span>
            <span className={styles.neighbourhood}>Downtown</span>
          </div>
          <p className={styles.p}>
            Summer vibes year round in the heart of downtown. Coffee, fresh juices, and great food in
            a bright welcoming space.
          </p>
          <div className={styles.orderBlock}><strong>What to order:</strong> Their lattes and fresh juice combinations.</div>

          <h3 className={styles.h3}>The Standard</h3>
          <div className={styles.addressBlock}>
            <span className={styles.addressLine}>5135 Sherbrooke Street West, Montréal, QC H4A 1T3</span>
            <span className={styles.neighbourhood}>NDG</span>
          </div>
          <p className={styles.p}>
            Luxurious café in NDG with marble countertops and exceptional coffee. Perfect for working
            or catching up with a friend.
          </p>
          <div className={styles.orderBlock}><strong>What to order:</strong> Their espresso drinks and anything seasonal.</div>

          <h3 className={styles.h3}>La Finca</h3>
          <p className={styles.p}>
            Ethically sourced beans from the Don Eli Farm in Costa Rica since 2012. A pioneering
            direct trade relationship that produces exceptional coffee.
          </p>
          <div className={styles.orderBlock}><strong>What to order:</strong> Their Americano which consistently earns rave reviews.</div>

          <h3 className={styles.h3}>Crew Collective and Café</h3>
          <div className={styles.addressBlock}>
            <span className={styles.addressLine}>360 Rue Saint-Jacques, Montréal, QC H2Y 1P5</span>
            <span className={styles.neighbourhood}>Old Montreal</span>
          </div>
          <p className={styles.p}>
            Inside a stunning 1920s former Royal Bank of Canada branch with 50-foot vaulted ceilings
            and bronze chandeliers. One of the most beautiful spaces in North America. The coffee is
            genuinely good.
          </p>
          <div className={styles.orderBlock}><strong>What to order:</strong> Their espresso drinks and anything from their pastry selection.</div>

          <h3 className={styles.h3}>Canal Roasters</h3>
          <p className={styles.p}>
            Along the Lachine Canal. Started after the founders were dissatisfied with their existing
            coffee supplier and decided to take beans into their own hands. They highlight the humans
            in the supply chain as much as possible.
          </p>
          <div className={styles.orderBlock}><strong>What to order:</strong> Their rotating single origins and specialty blends.</div>

          <h3 className={styles.h3}>Dreamy Coffee Supermarket</h3>
          <div className={styles.addressBlock}>
            <span className={styles.addressLine}>3780 Rue Saint-Patrick, Montréal, QC H4E 1A2</span>
            <span className={styles.neighbourhood}>Saint-Patrick / Verdun border — inside Canadian Roasting Society</span>
          </div>
          <p className={styles.p}>
            Located inside Canadian Roasting Society — the same facility where EZPZ Coffee roasts.
            Open on weekends, they sell specialty beans from multiple roasters. A destination for serious
            coffee enthusiasts in Montreal&apos;s southwest.
          </p>
          <div className={styles.orderBlock}><strong>What to order:</strong> Whatever is freshest that weekend — ask the staff.</div>

          <h3 className={styles.h3}>Le Brûloir</h3>
          <p className={styles.p}>
            Mission-driven café that wants to add to the environments they inhabit, not simply exist
            within them. They stop at nothing to search for the best flavor profiles.
          </p>
          <div className={styles.orderBlock}><strong>What to order:</strong> Their single origin espresso and cupping event coffees.</div>

          <h3 className={styles.h3}>Café Névé · Café Castel · Melk</h3>
          <p className={styles.p}>
            Three beloved Montreal neighbourhood cafés that reward regular visits. Café Névé has
            multiple locations and maintains genuine quality across all of them. Café Castel has a
            loyal neighbourhood following with consistently excellent espresso. Melk is friendly and
            unpretentious with great coffee and a wonderful community vibe — the kind of café that
            makes you feel like a regular from the first visit.
          </p>

          {/* ── Laval ───────────────────────────────────────────── */}
          <h2 id="laval" className={styles.h2}>Laval and the North Shore</h2>

          <h3 className={styles.h3}>La Bête à Pain</h3>
          <div className={styles.addressBlock}>
            <span className={styles.addressLine}>Laval, QC</span>
            <span className={styles.neighbourhood}>North Shore</span>
          </div>
          <p className={styles.p}>
            The perfect spot for brunch and great coffee on Montreal&apos;s North Shore. An impressive
            selection of artisan products alongside excellent espresso. A florist next door adds to the
            charm.
          </p>
          <div className={styles.orderBlock}><strong>What to order:</strong> Their espresso drinks paired with artisan breads and pastries.</div>

          <h3 className={styles.h3}>Brûlerie Faro</h3>
          <div className={styles.addressBlock}>
            <span className={styles.addressLine}>Multiple locations including Laval and Sherbrooke</span>
            <span className={styles.neighbourhood}>Province-wide</span>
          </div>
          <p className={styles.p}>
            A classic Quebec roaster with locations across the province. Consistently good specialty
            coffee with a loyal following among students and professionals alike.
          </p>
          <div className={styles.orderBlock}><strong>What to order:</strong> Their house roasts and single origin selections.</div>

          {/* ── Laurentians ─────────────────────────────────────── */}
          <h2 id="laurentians" className={styles.h2}>The Laurentians and North of Montréal</h2>

          <h3 className={styles.h3}>Prana Café</h3>
          <div className={styles.addressBlock}>
            <span className={styles.addressLine}>Downtown Saint-Jérôme, QC</span>
            <span className={styles.neighbourhood}>Laurentians gateway</span>
          </div>
          <p className={styles.p}>
            A multi-purpose space that is an ideal pit stop in the Laurentians. Their vanilla-pistachio
            matcha has become legendary among road trippers heading north. Whether you are heading to
            the ski hills or the summer lakes, Prana is the reason to stop in Saint-Jérôme.
          </p>
          <div className={styles.orderBlock}><strong>What to order:</strong> Their specialty lattes and smørrebrød for a complete stop.</div>

          {/* ── Quebec City ─────────────────────────────────────── */}
          <h2 id="quebec-city" className={styles.h2}>Québec City — La Capitale du Café</h2>
          <p className={styles.p}>
            Quebec City has quietly developed one of the most interesting café scenes in the province
            outside Montreal. The historic architecture of the old city creates an extraordinary
            backdrop for specialty coffee.
          </p>

          <h3 className={styles.h3}>Maison Smith</h3>
          <div className={styles.addressBlock}>
            <span className={styles.addressLine}>Multiple locations in Quebec City including inside the historic walls and Saint-Roch</span>
            <span className={styles.neighbourhood}>Province-wide icon</span>
          </div>
          <p className={styles.p}>
            Quebec City&apos;s most beloved specialty coffee brand. Multiple locations throughout the
            city including inside the historic walls and in the Saint-Roch neighbourhood. Their
            commitment to quality has made them the standard-bearer for specialty coffee in the capital.
          </p>
          <div className={styles.orderBlock}><strong>What to order:</strong> Their signature espresso drinks and any of their rotating seasonal coffees.</div>

          <h3 className={styles.h3}>Café Krieghoff</h3>
          <div className={styles.addressBlock}>
            <span className={styles.addressLine}>1091 Avenue Cartier, Québec, QC G1R 2S6</span>
            <span className={styles.neighbourhood}>Montcalm</span>
          </div>
          <p className={styles.p}>
            A Quebec City institution on Avenue Cartier. Warm atmosphere, excellent coffee, and a menu
            that reflects the best of Quebec café culture. Has been a neighbourhood anchor for decades.
          </p>
          <div className={styles.orderBlock}><strong>What to order:</strong> Their espresso and any of their seasonal pastry offerings.</div>

          <h3 className={styles.h3}>Café du Clocher Penché</h3>
          <div className={styles.addressBlock}>
            <span className={styles.addressLine}>203 Rue Saint-Joseph Est, Québec, QC G1K 3B1</span>
            <span className={styles.neighbourhood}>Saint-Roch</span>
          </div>
          <p className={styles.p}>
            In the heart of Saint-Roch, this café and restaurant is one of Quebec City&apos;s most
            celebrated destinations. The coffee program is serious and the food is outstanding.
          </p>
          <div className={styles.orderBlock}><strong>What to order:</strong> Their espresso drinks and any of the brunch menu items.</div>

          {/* ── Eastern Townships ───────────────────────────────── */}
          <h2 id="eastern-townships" className={styles.h2}>The Eastern Townships — Estrie&apos;s Café Scene</h2>
          <p className={styles.p}>
            The Eastern Townships have developed a rich coffee culture centered around university towns
            and weekend tourism. The area rewards exploration.
          </p>

          <h3 className={styles.h3}>Café Géogène</h3>
          <div className={styles.addressBlock}>
            <span className={styles.addressLine}>Sherbrooke, QC — main location on Rue King Est</span>
            <span className={styles.neighbourhood}>Sherbrooke</span>
          </div>
          <p className={styles.p}>
            A fervent disciple of the third wave offering coffees that are ethical from the plantation
            to the cup. The beans are roasted and packaged on-site. A cornerstone of Sherbrooke&apos;s
            specialty coffee scene.
          </p>
          <div className={styles.orderBlock}><strong>What to order:</strong> Their in-house roasted single origins.</div>

          <h3 className={styles.h3}>Café Hubert Saint-Jean</h3>
          <div className={styles.addressBlock}>
            <span className={styles.addressLine}>455 Rue King Ouest, Sherbrooke, QC · and 4797 Boulevard Bourque, Sherbrooke</span>
            <span className={styles.neighbourhood}>Sherbrooke</span>
          </div>
          <p className={styles.p}>
            A cult address in Sherbrooke beloved by students for its coffee quality and welcoming
            atmosphere for long study sessions.
          </p>
          <div className={styles.orderBlock}><strong>What to order:</strong> Their espresso drinks and anything seasonal.</div>

          <h3 className={styles.h3}>Kàapeh</h3>
          <div className={styles.addressBlock}>
            <span className={styles.addressLine}>Rue Frontenac, Sherbrooke, QC</span>
            <span className={styles.neighbourhood}>Sherbrooke</span>
          </div>
          <p className={styles.p}>
            A warm café-bistro-gallery-wine bar near the Magog River. One of the most atmospheric
            coffee experiences in the Eastern Townships.
          </p>
          <div className={styles.orderBlock}><strong>What to order:</strong> Their specialty coffee drinks and curated wine selections.</div>

          <h3 className={styles.h3}>Fitch Bay Café</h3>
          <div className={styles.addressBlock}>
            <span className={styles.addressLine}>464 Rue Principale Ouest, Magog, QC</span>
            <span className={styles.neighbourhood}>Magog</span>
          </div>
          <p className={styles.p}>
            A specialty roasting company in Magog that is the ideal stop for bags of freshly roasted
            coffee on the road. Coffee to go or to take home.
          </p>
          <div className={styles.orderBlock}><strong>What to order:</strong> Their roasted beans to take home and a coffee to drink on the road.</div>

          {/* ── EZPZ Note ───────────── */}
          <h2 id="ezpz-note" className={styles.h2}>A Note From EZPZ Coffee</h2>
          <p className={styles.p}>
            This guide represents the best of what Quebec&apos;s coffee culture has built — and it is
            extraordinary. From four world-ranked cafés in Montreal to artisan roasters in the Eastern
            Townships to beloved institutions in Quebec City, this province takes coffee seriously.
          </p>
          <p className={styles.p}>
            At EZPZ Coffee, we are proud to be part of this story. We roast specialty grade, 100%
            traceable coffee at{" "}
            <Link href="/en/about" className={styles.inlineLink}>Canadian Roasting Society</Link>{" "}
            in Montreal&apos;s southwest — the same facility that houses Dreamy Coffee Supermarket,
            mentioned in this guide. When you create a{" "}
            <Link href="/en/design" className={styles.inlineLink}>custom branded coffee bag with EZPZ</Link>,
            you are not just getting a label on generic beans. You are getting specialty coffee rooted
            in the same values and culture that produced four of North America&apos;s top 100 coffee shops.
          </p>
          <p className={styles.p}>
            Whether you are a restaurant in the Plateau, a hotel in Old Quebec, a boutique in
            Sherbrooke, or a brand anywhere in the province — your customers deserve Quebec&apos;s best.
            That is what{" "}
            <Link href="/en/white-label" className={styles.inlineLink}>EZPZ delivers</Link>.
            Zero minimum order. Full design included. 2 to 3 weeks to delivery.{" "}
            <Link href="/en/contact" className={styles.inlineLink}>Contact us</Link> to get started.
          </p>

          {/* ── FAQ ───────────────────────────────────────────────── */}
          <h2 className={styles.h2}>Frequently Asked Questions About Montreal Coffee Shops</h2>

          <h3 className={styles.h3}>What is the best coffee shop in Montreal?</h3>
          <p className={styles.p}>
            According to the World&apos;s 100 Best Coffee Shops 2026, the best coffee shop in Montreal
            is Café Pista, ranked number 34 in all of North America. Other top-ranked Montreal coffee
            shops include Café Saint-Henri at number 60, Micro Espresso at number 89, and Café Éclair
            at number 91.
          </p>

          <h3 className={styles.h3}>Where can I find specialty coffee in Montreal?</h3>
          <p className={styles.p}>
            Montreal has dozens of excellent specialty coffee shops. The best areas for specialty
            coffee in Montreal are Mile End, the Plateau-Mont-Royal, Saint-Henri, and the Quartier des
            Spectacles. Key addresses include Café Pista on Saint-Laurent, Café Saint-Henri on
            Notre-Dame West, Micro Espresso on Avenue du Parc, and Caffè Olimpico on Saint-Viateur.
          </p>

          <h3 className={styles.h3}>What neighbourhood has the best coffee shops in Montreal?</h3>
          <p className={styles.p}>
            Mile End has the highest concentration of excellent coffee shops in Montreal, including
            Café Pista, Caffè Olimpico, Café Éclair, and Ambros Coffee Roasters. The
            Plateau-Mont-Royal and Saint-Henri are also excellent neighbourhoods for coffee in Montreal.
          </p>

          <h3 className={styles.h3}>Is Montreal known for coffee?</h3>
          <p className={styles.p}>
            Yes. Montreal is one of Canada&apos;s great coffee cities and is increasingly recognized
            internationally. In 2026, four Montreal cafés were ranked among the top 100 best coffee
            shops in all of North America — more than any other Canadian city.
          </p>

          <h3 className={styles.h3}>What is the most famous coffee shop in Montreal?</h3>
          <p className={styles.p}>
            Caffè Olimpico on Rue Saint-Viateur in Mile End is arguably Montreal&apos;s most famous
            coffee shop, having served the neighbourhood since the 1970s. For specialty coffee,
            Café Pista is Montreal&apos;s most internationally recognized café, ranked number 34
            in North America in 2026.
          </p>

          <h3 className={styles.h3}>Where do locals drink coffee in Montreal?</h3>
          <p className={styles.p}>
            Montreal locals frequent neighbourhood cafés like Café Larue and Fils in Villeray,
            September Café in Saint-Henri, Pikolo Espresso Bar near Parc, and Café Myriade across
            multiple neighbourhoods. Caffè Olimpico in Mile End remains a local institution after
            decades of operation.
          </p>

        </article>
      </div>
    </div>

    {/* ── CTA Banner ────────────────────────────────────────────── */}
    <section className={styles.cta}>
      <div className={styles.ctaInner}>
        <h2 className={styles.ctaTitle}>
          Put Quebec&apos;s specialty coffee culture under your brand.
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
