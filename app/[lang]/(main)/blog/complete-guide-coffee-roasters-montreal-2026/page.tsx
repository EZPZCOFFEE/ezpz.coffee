import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

import { BLOG_POSTS } from "../data";
import styles from "../custom-coffee-bags-corporate-gifts-canada/blogPost.module.scss";

export const metadata: Metadata = {
  title: "Every Coffee Roaster in Montreal 2026 | The Complete Guide | EZPZ Coffee",
  description:
    "The most complete guide to every coffee roaster in Montreal in 2026. From world-ranked elite roasters to hidden micro-roasters — 40+ Montreal roasters covered by EZPZ Coffee.",
  alternates: { canonical: "/en/blog/complete-guide-coffee-roasters-montreal-2026" },
  openGraph: {
    title: "Every Coffee Roaster in Montreal 2026 | The Complete Guide | EZPZ Coffee",
    description:
      "The most complete guide to every coffee roaster in Montreal in 2026. From world-ranked elite roasters to hidden micro-roasters — 40+ Montreal roasters covered by EZPZ Coffee.",
    type: "article",
    url: "https://www.ezpz.coffee/en/blog/complete-guide-coffee-roasters-montreal-2026",
    images: [
      {
        url: "/assets/banner-01.jpg",
        width: 1200,
        height: 630,
        alt: "Every Coffee Roaster in Montreal 2026 | EZPZ Coffee",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Every Coffee Roaster in Montreal 2026 — The Complete Guide",
    description:
      "40+ Montreal coffee roasters covered — from four world-ranked operations to nano-roasters nobody has written about. By EZPZ Coffee.",
    images: ["/assets/banner-01.jpg"],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Every Coffee Roaster in Montreal in 2026: The Complete Guide",
  description:
    "The most complete guide to every coffee roaster in Montreal in 2026. From world-ranked elite roasters to hidden micro-roasters — 40+ Montreal roasters covered.",
  datePublished: "2026-06-02",
  author: { "@type": "Organization", name: "EZPZ Coffee Team" },
  publisher: {
    "@type": "Organization",
    name: "EZPZ Coffee",
    url: "https://www.ezpz.coffee",
    logo: { "@type": "ImageObject", url: "https://www.ezpz.coffee/logo.svg" },
  },
  url: "https://www.ezpz.coffee/en/blog/complete-guide-coffee-roasters-montreal-2026",
  image: "https://www.ezpz.coffee/assets/blog/complete-guide-montreal-roasters.svg",
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CafeOrCoffeeShop",
      name: "Café Pista",
      url: "https://cafepista.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "6524 Boulevard Saint-Laurent",
        addressLocality: "Montréal",
        addressRegion: "QC",
        addressCountry: "CA",
      },
      description: "Canada's highest-ranked café in 2026 — World's 100 Best Coffee Shops #34 in North America.",
    },
    {
      "@type": "CafeOrCoffeeShop",
      name: "Café Saint-Henri",
      url: "https://cafestahenri.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "3632 Notre-Dame Street West",
        addressLocality: "Montréal",
        addressRegion: "QC",
        addressCountry: "CA",
      },
      description: "World-ranked Montreal specialty roaster — #60 in North America 2026.",
    },
    {
      "@type": "CafeOrCoffeeShop",
      name: "Micro Espresso Bar",
      address: {
        "@type": "PostalAddress",
        streetAddress: "3496 Avenue du Parc",
        addressLocality: "Montréal",
        addressRegion: "QC",
        addressCountry: "CA",
      },
      description: "World-ranked Montreal specialty café — #89 in North America 2026.",
    },
    {
      "@type": "CafeOrCoffeeShop",
      name: "Café Éclair",
      address: {
        "@type": "PostalAddress",
        streetAddress: "1 Rue Saint-Viateur East",
        addressLocality: "Montréal",
        addressRegion: "QC",
        addressCountry: "CA",
      },
      description: "World-ranked Montreal café featuring international specialty roasters — #91 in North America 2026.",
    },
    {
      "@type": "CafeOrCoffeeShop",
      name: "Ambros Coffee Roasters",
      address: {
        "@type": "PostalAddress",
        streetAddress: "1 Rue Clark",
        addressLocality: "Montréal",
        addressRegion: "QC",
        addressCountry: "CA",
      },
      description: "Family-operated specialty roaster and café in Mile End, roasting at Canadian Roasting Society.",
    },
    {
      "@type": "CafeOrCoffeeShop",
      name: "EZPZ Coffee",
      url: "https://www.ezpz.coffee",
      address: {
        "@type": "PostalAddress",
        streetAddress: "3780 Rue Saint-Patrick",
        addressLocality: "Montréal",
        addressRegion: "QC",
        addressCountry: "CA",
      },
      description: "Full-service private label and white label coffee producer roasting at Canadian Roasting Society. Zero minimum order, custom branded bags for brands across Canada and the USA.",
    },
    {
      "@type": "CafeOrCoffeeShop",
      name: "Caffè Olimpico",
      url: "https://caffeolimpico.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "124 Rue Saint-Viateur Ouest",
        addressLocality: "Montréal",
        addressRegion: "QC",
        addressCountry: "CA",
      },
      description: "Montreal's most historically significant Italian espresso café, roasting in Mile End since the 1970s.",
    },
    {
      "@type": "CafeOrCoffeeShop",
      name: "Brûlerie Saint-Denis",
      url: "https://bruleriesaintdenis.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "3967 Rue Saint-Denis",
        addressLocality: "Montréal",
        addressRegion: "QC",
        addressCountry: "CA",
      },
      description: "One of Montreal's oldest specialty roasters, a Plateau institution for decades.",
    },
    {
      "@type": "CafeOrCoffeeShop",
      name: "Le Brûloir",
      address: {
        "@type": "PostalAddress",
        streetAddress: "318 Rue Fleury Ouest",
        addressLocality: "Montréal",
        addressRegion: "QC",
        addressCountry: "CA",
      },
      description: "Neighbourhood specialty roaster and café in Ahuntsic, part of Montreal's coffee landscape for nearly a decade.",
    },
    {
      "@type": "CafeOrCoffeeShop",
      name: "Café Myriade",
      url: "https://cafemyriade.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "4627 Rue Saint-Denis",
        addressLocality: "Montréal",
        addressRegion: "QC",
        addressCountry: "CA",
      },
      description: "Montreal specialty coffee anchor since 2008, co-founded by Scott Rao of Canadian Roasting Society.",
    },
    {
      "@type": "CafeOrCoffeeShop",
      name: "Dispatch Coffee",
      url: "https://dispatchcoffee.ca",
      address: {
        "@type": "PostalAddress",
        streetAddress: "4231 Boulevard Saint-Laurent",
        addressLocality: "Montréal",
        addressRegion: "QC",
        addressCountry: "CA",
      },
      description: "Beloved Montreal specialty roaster and café brand, started as a food truck in 2012.",
    },
    {
      "@type": "CafeOrCoffeeShop",
      name: "La Finca Café",
      address: {
        "@type": "PostalAddress",
        streetAddress: "1067 de Bleury Street",
        addressLocality: "Montréal",
        addressRegion: "QC",
        addressCountry: "CA",
      },
      description: "Montreal café sourcing directly from the Don Eli Farm in Costa Rica since 2012.",
    },
    {
      "@type": "CafeOrCoffeeShop",
      name: "September Café",
      address: {
        "@type": "PostalAddress",
        streetAddress: "4021 Rue Sainte-Catherine Ouest",
        addressLocality: "Montréal",
        addressRegion: "QC",
        addressCountry: "CA",
      },
      description: "Montreal café beloved for its atmosphere and in-house specialty roasting program.",
    },
    {
      "@type": "CafeOrCoffeeShop",
      name: "Café Falco",
      address: {
        "@type": "PostalAddress",
        streetAddress: "5605 Avenue de Gaspé",
        addressLocality: "Montréal",
        addressRegion: "QC",
        addressCountry: "CA",
      },
      description: "Japanese-inspired specialty café and in-house roaster with a precision approach to sourcing and roasting.",
    },
  ],
};

const TOC = [
  { id: "infrastructure", label: "Montreal's Roasting Infrastructure" },
  { id: "world-ranked", label: "The World Ranked (Top 100 N. America)" },
  { id: "crs-community", label: "The CRS Community Roasters" },
  { id: "institutions", label: "The Historic Institutions" },
  { id: "rising-stars", label: "Specialists & Rising Stars" },
  { id: "city-reputation", label: "A City That Earned Its Reputation" },
];

const RELATED_SLUGS = [
  "best-coffee-roasters-montreal-2026",
  "best-coffee-shops-quebec-complete-guide",
  "best-coffee-shops-montreal-2026",
];
const RELATED_POSTS = BLOG_POSTS.filter((p) => RELATED_SLUGS.includes(p.slug));

const Page = () => (
  <div className={styles.page}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />

    {/* ── Hero ──────────────────────────────────────────────────── */}
    <section className={styles.hero}>
      <div className={styles.heroInner}>
        <span className={styles.heroCategory}>Montreal Coffee Guide</span>
        <h1 className={styles.heroTitle}>
          Every Coffee Roaster in Montreal in 2026: The Complete Guide
        </h1>
        <p className={styles.heroSubtitle}>
          The most comprehensive list of Montreal coffee roasters ever compiled. From four
          world-ranked operations to nano-roasters that most coffee guides have never heard of —
          every roaster worth knowing in the city.
        </p>
        <div className={styles.heroMeta}>
          <span>June 2, 2026</span>
          <span className={styles.heroMetaDot} />
          <span>15 min read</span>
        </div>
      </div>
    </section>

    {/* ── Note box ──────────────────────────────────────────────── */}
    <div style={{ background: "var(--color-white)", padding: "0 var(--spacing-state)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", paddingTop: "var(--spacing-galaxy)" }}>
        <div className={styles.noteBox}>
          <p>
            40+ roasters covered — the only guide that goes this deep into Montreal&apos;s
            roasting scene.
          </p>
        </div>
      </div>
    </div>

    {/* ── TOC + Article ─────────────────────────────────────────── */}
    <div className={styles.articleWrapper} style={{ paddingTop: 0 }}>
      <div className={styles.tocLayout}>

        {/* Sticky TOC */}
        <aside className={styles.tocSidebar}>
          <p className={styles.tocHeading}>Contents</p>
          <nav aria-label="Table of contents">
            <ul className={styles.tocList}>
              {TOC.map(({ id, label }) => (
                <li key={id}>
                  <a href={`#${id}`} className={styles.tocLink}>{label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Article */}
        <article className={styles.tocArticle}>

          <p className={styles.intro}>
            Montreal has quietly become one of the great coffee roasting cities in North America.
            Not quietly in the sense that nobody knows about it — four Montreal operations were
            ranked among the top 100 best coffee shops on the continent in 2026 — but quietly in
            the sense that the city itself does not announce its coffee culture the way Seattle or
            Melbourne do. Montreal&apos;s roasting scene is serious, obsessive, and deeply
            community-driven. And it is bigger than most people realize.
          </p>
          <p className={styles.p}>
            This guide covers every coffee roaster operating in Montreal in 2026 — from the
            world-ranked heavyweights to the nano-roasters that most coffee guides have never heard
            of. It is the most comprehensive list of Montreal coffee roasters ever written and it
            was put together by the team at EZPZ Coffee, roasting specialists based at Canadian
            Roasting Society right here in Montreal&apos;s southwest.
          </p>
          <p className={styles.p}>
            Whether you are a coffee lover, a café owner looking for a roasting partner, a brand
            considering private label coffee, or simply someone who wants to understand the full
            scope of what Montreal&apos;s roasting scene has become — this is the guide.
          </p>

          {/* ── Infrastructure ── */}
          <h2 id="infrastructure" className={styles.h2}>
            The Infrastructure Behind Montreal&apos;s Roasting Scene
          </h2>
          <p className={styles.p}>
            Before diving into the individual roasters, it is worth understanding what makes
            Montreal&apos;s roasting scene possible. The single most important institution is
            Canadian Roasting Society.
          </p>
          <p className={styles.p}>
            Founded by Andrew Kyres of Tunnel Espresso and Scott Rao, one of the world&apos;s most
            respected coffee consultants and a co-founder of Café Myriade, Canadian Roasting Society
            is a community co-roasting space located at 3780 Rue Saint-Patrick in
            Montreal&apos;s southwest. The facility houses professional Probat roasting machines
            alongside all the equipment needed to operate a serious specialty coffee production
            program — without the enormous capital cost of building a private roastery.
          </p>
          <p className={styles.p}>
            The result is that Montreal has a disproportionately large number of serious specialty
            roasters for a city its size. The CRS model allows micro and nano roasters to operate
            at a level of quality that would otherwise require millions in infrastructure investment.
            This is why you will see so many Montreal roasters on this list sharing the same
            address — and why the quality across the board is so consistently high.
          </p>
          <div className={styles.quoteBlock}>
            <p className={styles.quoteText}>
              EZPZ Coffee roasts at Canadian Roasting Society. When you create a custom branded
              coffee bag with EZPZ, your coffee is produced in the same facility that has incubated
              some of the most exciting roasting talent in Canada.
            </p>
          </div>

          {/* ── World Ranked ── */}
          <h2 id="world-ranked" className={styles.h2}>
            The World Ranked — Montreal&apos;s Elite Roasters
          </h2>
          <p className={styles.p}>
            These four Montreal operations were named among the top 100 best coffee shops in all
            of North America in 2026 by The World&apos;s 100 Best Coffee Shops — evaluated by over
            200 judges across more than 4,600 establishments. No other Canadian city had four
            operations on this list.
          </p>

          <h3 className={styles.h3}>1. Café Pista — World Ranked #34</h3>
          <p className={styles.p} style={{ fontSize: "0.82rem", color: "#888", marginBottom: "0.5rem" }}>
            6524 Boulevard Saint-Laurent &amp; 1450 Rue City Councillors · cafepista.com
          </p>
          <p className={styles.p}>
            Café Pista began as a coffee bicycle — a mobile espresso service powered by human effort
            and genuine passion. It has grown into Montreal&apos;s most internationally recognized
            coffee operation and Canada&apos;s highest-ranked café in 2026. Founded by Maxime Richard
            with roasting led by Alexandre Séguin, Pista sources beans personally from producers and
            roasts at Canadian Roasting Society with a philosophy centered on transparency,
            traceability, and community.
          </p>
          <p className={styles.p}>
            The Rosemont flagship on Saint-Laurent is warm, wood-lined, and perpetually busy. The
            downtown location near the Quartier des Spectacles serves the professional community with
            the same level of care. Both locations offer a rotating selection of single origin coffees
            that change based on what is tasting best — not what is easiest to source.
          </p>
          <div className={styles.quoteBlock}>
            <p className={styles.quoteText}>
              What Pista represents for Montreal: proof that a city can build world-class specialty
              coffee from scratch through passion and community. They were not born from a franchise
              or a capital infusion. They grew from a bicycle.
            </p>
          </div>

          <h3 className={styles.h3}>2. Café Saint-Henri — World Ranked #60</h3>
          <p className={styles.p} style={{ fontSize: "0.82rem", color: "#888", marginBottom: "0.5rem" }}>
            3632 Notre-Dame Street West (multiple locations) · cafestahenri.com
          </p>
          <p className={styles.p}>
            Café Saint-Henri is the roaster that built the bridge between specialty coffee and
            everyday Montreal life. Since 2011 they have operated from their flagship in the
            working-class neighborhood of Saint-Henri — a choice that reflects their philosophy of
            making great coffee accessible to everyone, not just the specialty coffee initiated.
          </p>
          <p className={styles.p}>
            Their roasting program is meticulous and educational. They run workshops and cupping
            events designed to bring producers and consumers closer together. Their sourcing is
            direct trade wherever possible. And their five locations across the city maintain a
            consistency of quality that is genuinely difficult to achieve at scale.
          </p>
          <p className={styles.p}>
            The Mile-Ex roastery headquarters is a destination in itself — a large, light-filled
            space where you can watch the roasting happen and have one of the finest cups of coffee
            in the city in the same visit.
          </p>

          <h3 className={styles.h3}>3. Micro Espresso Bar — World Ranked #89</h3>
          <p className={styles.p} style={{ fontSize: "0.82rem", color: "#888", marginBottom: "0.5rem" }}>
            3496 Avenue du Parc
          </p>
          <p className={styles.p}>
            Micro is the anti-café café. No food, no elaborate menu, no Instagram aesthetic. Just
            precision extractions, rotating single origin batch brews, and some of the most genuinely
            knowledgeable staff in the city. The judges who ranked Micro at number 89 in North
            America described it as the place where Montreal&apos;s true coffee lovers go for their
            daily cup.
          </p>
          <p className={styles.p}>
            Their sourcing rotates through some of the finest producers available to Canadian
            roasters — people like Wilton Benitez and select cooperatives in Ethiopia and Colombia.
            The batch brew changes daily. The espresso is calibrated with obsessive precision.
          </p>
          <p className={styles.p}>
            Micro is where you go when you are serious about coffee and do not need the surrounding
            experience to justify the trip.
          </p>

          <h3 className={styles.h3}>4. Café Éclair — World Ranked #91</h3>
          <p className={styles.p} style={{ fontSize: "0.82rem", color: "#888", marginBottom: "0.5rem" }}>
            1 Rue Saint-Viateur East
          </p>
          <p className={styles.p}>
            Café Éclair occupies a specific and deliberate niche in Montreal&apos;s roasting scene.
            All of their coffees are sourced from roasters outside Canada — an intentional choice to
            introduce Montreal coffee drinkers to the different philosophies and flavor profiles that
            define the global specialty coffee landscape.
          </p>
          <p className={styles.p}>
            The result is an education in coffee more than a café in the traditional sense. The slow
            bar format, the intimate service style, and the constant rotation of international
            roasters make Café Éclair the most intellectually stimulating coffee experience in the
            city.
          </p>

          {/* ── CRS Community ── */}
          <h2 id="crs-community" className={styles.h2}>
            The CRS Community — Roasters at Canadian Roasting Society
          </h2>
          <p className={styles.p}>
            Canadian Roasting Society is home to the largest concentration of serious specialty
            roasters in Montreal. These brands share the facility, share knowledge, and collectively
            represent some of the most exciting coffee being produced in Canada.
          </p>

          <h3 className={styles.h3}>5. Traffic Coffee</h3>
          <p className={styles.p} style={{ fontSize: "0.82rem", color: "#888", marginBottom: "0.5rem" }}>
            trafficcoffee.ca
          </p>
          <p className={styles.p}>
            Traffic were the first roasters to commit to the Canadian Roasting Society from day one.
            They roast micro and nano lots with extraordinary precision and their coffees are served
            in some of Montreal&apos;s most respected venues including Café Melbourne and Nocturne
            Café. Traffic represents the entrepreneurial energy that the CRS model was designed to
            support — a serious roasting operation that would have been impossible without shared
            infrastructure.
          </p>

          <h3 className={styles.h3}>6. Structure Coffee Roasters</h3>
          <p className={styles.p} style={{ fontSize: "0.82rem", color: "#888", marginBottom: "0.5rem" }}>
            structurecoffee.ca
          </p>
          <p className={styles.p}>
            Structure is one of Montreal&apos;s most respected wholesale roasters — supplying cafés
            and restaurants across the city and beyond with consistently excellent specialty coffee.
            They roast at CRS and wholesale their beans to a growing roster of clients. For cafés
            looking for a reliable, high-quality roasting partner in Montreal, Structure is one of
            the first names mentioned.
          </p>

          <h3 className={styles.h3}>7. Canal Roasters</h3>
          <p className={styles.p} style={{ fontSize: "0.82rem", color: "#888", marginBottom: "0.5rem" }}>
            canalroasters.com
          </p>
          <p className={styles.p}>
            Canal Roasters takes their name from the Lachine Canal that runs through the neighborhood
            of their roasting home. Their mission is to highlight the humans in the supply chain as
            much as the coffee itself — traceability and producer relationships are central to
            everything they do. They were early members of the CRS community and have built a devoted
            following in Montreal&apos;s southwest.
          </p>

          <h3 className={styles.h3}>8. Ambros Coffee Roasters</h3>
          <p className={styles.p} style={{ fontSize: "0.82rem", color: "#888", marginBottom: "0.5rem" }}>
            1 Rue Clark
          </p>
          <p className={styles.p}>
            Ambros is a family operation — two brothers and their father running one of Mile
            End&apos;s most beautiful and carefully considered cafés. Their sourcing is serious and
            their commitment to quality is personal in a way that only a family business can sustain.
            Their Ethiopian Guji natural is one of the finest coffees available at this price point
            in Montreal. A relatively recent addition to the CRS community, Ambros has quickly become
            one of the most talked-about roasters in the city.
          </p>

          <h3 className={styles.h3}>9. Jungle Livraison Café</h3>
          <p className={styles.p} style={{ fontSize: "0.82rem", color: "#888", marginBottom: "0.5rem" }}>
            junglemtl.com
          </p>
          <p className={styles.p}>
            Jungle approaches coffee with the same values they bring to their broader mission:
            sustainability, community, and genuine care for the people behind the product. They roast
            at CRS and have built a loyal following through their delivery model and their genuine
            commitment to values-aligned sourcing.
          </p>

          <h3 className={styles.h3}>10. Za and Klo</h3>
          <p className={styles.p}>
            A woman-owned micro-roaster at CRS with a distinctive approach to sourcing and a growing
            reputation in Montreal&apos;s specialty community. Za and Klo represents the kind of new
            voice that the CRS model makes possible — a serious operation that would not exist without
            the shared infrastructure.
          </p>

          <h3 className={styles.h3}>11. Colorfull Coffee</h3>
          <p className={styles.p} style={{ fontSize: "0.82rem", color: "#888", marginBottom: "0.5rem" }}>
            colorfullcoffee.com
          </p>
          <p className={styles.p}>
            Colorfull Coffee brings an expressive, joyful visual identity to a serious roasting
            program. Their branding is among the most distinctive in Montreal&apos;s specialty coffee
            scene and their coffees are consistently well-sourced and carefully roasted at CRS.
          </p>

          <h3 className={styles.h3}>12. Melk Coffee</h3>
          <p className={styles.p} style={{ fontSize: "0.82rem", color: "#888", marginBottom: "0.5rem" }}>
            melkcoffee.ca
          </p>
          <p className={styles.p}>
            Melk is a friendly and unpretentious specialty café and roaster with a warm community
            atmosphere and genuinely excellent coffee. Their rotating single origins are roasted at
            CRS and their café locations in Montreal attract loyal regulars who appreciate both the
            quality and the welcome.
          </p>

          <h3 className={styles.h3}>13. Mayan Mountain Coffee</h3>
          <p className={styles.p} style={{ fontSize: "0.82rem", color: "#888", marginBottom: "0.5rem" }}>
            mayanmountain.ca
          </p>
          <p className={styles.p}>
            Mayan Mountain brings a specific geographic focus to their sourcing — Central American
            origins with an emphasis on producer relationships and ethical trade. Their roasting at
            CRS produces coffees with a distinctive regional character that sets them apart in
            Montreal&apos;s diverse specialty landscape.
          </p>

          <h3 className={styles.h3}>14. Yamabiko Coffee</h3>
          <p className={styles.p}>
            A Japanese-influenced roaster at CRS with a precision-first approach to both sourcing
            and roasting. Yamabiko reflects the influence of Japanese coffee culture — which has
            shaped Montreal&apos;s specialty scene more than most people realize — through meticulous
            attention to every variable in the roasting process.
          </p>

          <h3 className={styles.h3}>15. Locomotive Coffee</h3>
          <p className={styles.p}>
            An emerging roaster at CRS building a reputation for interesting lots and thoughtful
            sourcing. Locomotive is one of the newer members of the CRS community and represents
            the continued growth of Montreal&apos;s specialty roasting ecosystem.
          </p>

          <h3 className={styles.h3}>16. Malomi Coffee</h3>
          <p className={styles.p}>
            A micro-roaster at CRS focused on quality over volume. Malomi is one of the smaller
            operations in the community but no less serious in their approach to sourcing and
            roasting.
          </p>

          <h3 className={styles.h3}>17. Zaman Coffee</h3>
          <p className={styles.p}>
            A roaster at CRS bringing a distinct cultural perspective to Montreal&apos;s specialty
            coffee scene. Zaman&apos;s coffees reflect a commitment to origins and producers that
            connect to specific communities and stories.
          </p>

          <h3 className={styles.h3}>18. Le Club Coffee</h3>
          <p className={styles.p}>
            Le Club operates at CRS with a focus on community and accessibility — making great
            specialty coffee approachable for a broad Montreal audience while maintaining the quality
            standards that the CRS environment demands.
          </p>

          <h3 className={styles.h3}>19. Bad Wild Coffee</h3>
          <p className={styles.p}>
            A roaster at CRS with a bold brand identity and a serious roasting program. Bad Wild
            channels irreverence into a genuine commitment to quality that has earned them a
            following in Montreal&apos;s younger specialty coffee community.
          </p>

          <h3 className={styles.h3}>20. Café Escape and Escape Lab</h3>
          <p className={styles.p}>
            An early CRS member with a New Zealand-influenced approach to specialty coffee. Escape
            has built a reputation for clean, bright roast profiles and a welcoming café environment
            that reflects the best of Southern Hemisphere coffee culture transplanted to Montreal.
          </p>

          <h3 className={styles.h3}>21. EZPZ Coffee</h3>
          <p className={styles.p} style={{ fontSize: "0.82rem", color: "#888", marginBottom: "0.5rem" }}>
            3780 Rue Saint-Patrick · ezpz.coffee
          </p>
          <p className={styles.p}>
            EZPZ Coffee is a full-service white label and private label coffee producer roasting at
            Canadian Roasting Society. Unlike most CRS members who build consumer-facing coffee
            brands, EZPZ is built to put other brands&apos; names on specialty coffee. They source
            traceable, 80-plus SCA scored beans from Ethiopia, Colombia, Guatemala, Brazil, and
            beyond, roast them fresh at CRS, and produce custom branded bags for restaurants,
            hotels, boutiques, gyms, and brands across Canada and the USA — with zero minimum order
            and full custom design always included. EZPZ is the infrastructure that allows Canadian
            businesses of any size to have their own branded specialty coffee without owning a
            roastery.
          </p>

          {/* ── Institutions ── */}
          <h2 id="institutions" className={styles.h2}>
            The Institutions — Montreal&apos;s Historic Roasters
          </h2>

          <h3 className={styles.h3}>22. Caffè Olimpico</h3>
          <p className={styles.p} style={{ fontSize: "0.82rem", color: "#888", marginBottom: "0.5rem" }}>
            124 Rue Saint-Viateur Ouest &amp; Old Montreal · caffeolimpico.com
          </p>
          <p className={styles.p}>
            Caffè Olimpico has been roasting and serving espresso in Mile End since the 1970s. The
            Italian tradition is fully intact — short, strong, and served with the kind of warmth
            that only comes from decades of serving the same community. The original Saint-Viateur
            location is Montreal&apos;s most historically significant coffee space and one of the
            most authentic Italian café experiences in North America. The bomboloni remain legendary.
          </p>

          <h3 className={styles.h3}>23. Brûlerie Saint-Denis</h3>
          <p className={styles.p} style={{ fontSize: "0.82rem", color: "#888", marginBottom: "0.5rem" }}>
            3967 Rue Saint-Denis · bruleriesaintdenis.com
          </p>
          <p className={styles.p}>
            One of Montreal&apos;s oldest specialty roasters, Brûlerie Saint-Denis has been roasting
            on the Plateau for decades. They represent the old guard of Montreal specialty coffee
            before the third wave terminology existed. Their approach is classic and consistent — a
            wide range of origins and blends roasted to serve a broad audience without compromising
            on quality. A Montreal institution that has outlasted dozens of trends.
          </p>

          <h3 className={styles.h3}>24. Le Brûloir</h3>
          <p className={styles.p} style={{ fontSize: "0.82rem", color: "#888", marginBottom: "0.5rem" }}>
            318 Rue Fleury Ouest
          </p>
          <p className={styles.p}>
            Le Brûloir has been part of Montreal&apos;s coffee landscape for nearly a decade. Their
            reputation is built on beans worth picking up — carefully sourced, thoughtfully roasted,
            and served in a space that takes coffee seriously without taking itself too seriously.
            Their Fleury Ouest location in Ahuntsic has become a neighborhood anchor.
          </p>

          <h3 className={styles.h3}>25. Café Myriade</h3>
          <p className={styles.p} style={{ fontSize: "0.82rem", color: "#888", marginBottom: "0.5rem" }}>
            4627 Rue Saint-Denis (multiple locations) · cafemyriade.com
          </p>
          <p className={styles.p}>
            Café Myriade has been one of the most important anchors of Montreal&apos;s specialty
            coffee scene since 2008. Co-founded by Chris Capell and Scott Rao — who would go on to
            co-found Canadian Roasting Society — Myriade set the standard for what a serious
            specialty espresso bar could look like in Montreal at a time when the concept was still
            new. Five locations across the city maintain a consistent level of quality and their
            wholesale roasting program supplies some of the city&apos;s best restaurants and cafés.
          </p>

          <h3 className={styles.h3}>26. Dispatch Coffee</h3>
          <p className={styles.p} style={{ fontSize: "0.82rem", color: "#888", marginBottom: "0.5rem" }}>
            4231 Boulevard Saint-Laurent (multiple locations) · dispatchcoffee.ca
          </p>
          <p className={styles.p}>
            Dispatch began as a food truck in 2012 and has grown into one of Montreal&apos;s most
            beloved specialty roasters and café brands. Their Saint-Laurent location features an open
            counter format where baristas actively engage customers in conversation about the coffees
            on offer. Their subscription service ships their signature roasts across Canada and the
            USA. For a roaster with genuine ethical commitments and consistently outstanding coffee,
            Dispatch is one of the most reliable names in the city.
          </p>

          {/* ── Rising Stars ── */}
          <h2 id="rising-stars" className={styles.h2}>
            The Specialists and Rising Stars
          </h2>

          <h3 className={styles.h3}>27. 94 Celsius</h3>
          <p className={styles.p} style={{ fontSize: "0.82rem", color: "#888", marginBottom: "0.5rem" }}>
            94celcius.com
          </p>
          <p className={styles.p}>
            94 Celsius is a pure roaster — no physical café, no retail location, just an online
            and wholesale model that allows them to focus entirely on bean quality. Their approach
            is designed for coffee drinkers who want to step off the beaten path of commercial
            coffee without falling into profiles that are disorienting for the uninitiated. Their
            honest and educational approach to coffee content has built a strong online following
            across Quebec.
          </p>

          <h3 className={styles.h3}>28. Zab Coffee Roasters</h3>
          <p className={styles.p} style={{ fontSize: "0.82rem", color: "#888", marginBottom: "0.5rem" }}>
            zabcafe.com
          </p>
          <p className={styles.p}>
            Zab is one of Montreal&apos;s most interesting multi-roaster experiences. Their rotating
            selection of specialty lots from producers around the world is curated with genuine care.
            The famous freezer of special coffees at the back of their café is legendary among
            Montreal&apos;s serious coffee enthusiasts — a collection of rare and exceptional lots
            not found anywhere else in the city.
          </p>

          <h3 className={styles.h3}>29. Kittel Coffee</h3>
          <p className={styles.p} style={{ fontSize: "0.82rem", color: "#888", marginBottom: "0.5rem" }}>
            kittelcoffee.com
          </p>
          <p className={styles.p}>
            Kittel is one of Montreal&apos;s most respected wholesale roasters — their coffees are
            found in dozens of cafés and restaurants across the city including Café Rosé, Tunnel
            Espresso, and Pâtisserie Bernice. Their roasting program produces reliably excellent
            coffees with consistent quality that makes them a trusted partner for café owners who
            need to know their coffee will be right every time.
          </p>

          <h3 className={styles.h3}>30. Kujira Coffee</h3>
          <p className={styles.p}>
            A Japanese-inspired precision roaster that brings the meticulous attention to detail
            characteristic of Japanese coffee culture to Montreal&apos;s specialty scene. Kujira
            occupies a specific niche in the city&apos;s roasting ecosystem and has built a devoted
            following among coffee professionals and enthusiasts who appreciate the
            precision-first philosophy.
          </p>

          <h3 className={styles.h3}>31. Narval Coffee</h3>
          <p className={styles.p}>
            A micro-roaster with a distinctive visual identity founded by siblings with a genuine
            passion for the craft. Narval represents the next generation of Montreal specialty
            roasters — brands built with as much attention to design and storytelling as to the
            quality of the beans themselves.
          </p>

          <h3 className={styles.h3}>32. Union Microtorréfacteur</h3>
          <p className={styles.p}>
            The specialty division of Café Union — a Montreal coffee institution with over a century
            of history. Union Microtorréfacteur represents the remarkable journey of a traditional
            coffee company reinventing itself for the specialty era while bringing its deep Montreal
            roots and community connections to everything it does.
          </p>

          <h3 className={styles.h3}>33. Barista Microtorréfacteur</h3>
          <p className={styles.p}>
            A specialist in custom blends for wholesale clients — essentially operating as a contract
            roaster that develops house coffees for cafés and restaurants across Montreal. For a café
            owner who wants to develop a signature house blend rather than purchasing a single origin,
            Barista Microtorréfacteur is one of the most valuable partners in the city.
          </p>

          <h3 className={styles.h3}>34. La Finca Café</h3>
          <p className={styles.p} style={{ fontSize: "0.82rem", color: "#888", marginBottom: "0.5rem" }}>
            1067 de Bleury Street · Downtown Montreal
          </p>
          <p className={styles.p}>
            La Finca has been sourcing directly from the Don Eli Farm in Costa Rica since 2012 —
            one of the most enduring direct trade relationships in Montreal&apos;s coffee community.
            Their commitment to ethical stability for the family-run farm they work with is reflected
            in the quality and consistency of their coffee. Beyond their café they also offer a range
            of fine local products, microbrewery beers, and natural wines.
          </p>

          <h3 className={styles.h3}>35. PS Roasters</h3>
          <p className={styles.p}>
            A Montreal specialty roaster whose coffees are found in several cafés and retail
            locations across the city. PS Roasters is part of the broader ecosystem of small-batch
            specialty producers that makes Montreal&apos;s coffee scene so rich and diverse.
          </p>

          <h3 className={styles.h3}>36. Biodynamic Coffee</h3>
          <p className={styles.p}>
            A roaster with a specific commitment to biodynamic farming practices — sourcing
            exclusively from certified biodynamic producers and bringing a distinctly ecological
            philosophy to Montreal&apos;s specialty roasting community.
          </p>

          <h3 className={styles.h3}>37. Rabbit Hole Roasters</h3>
          <p className={styles.p} style={{ fontSize: "0.82rem", color: "#888", marginBottom: "0.5rem" }}>
            rabbitholeroasters.ca
          </p>
          <p className={styles.p}>
            Rabbit Hole began roasting at Canadian Roasting Society in December 2018. They have
            built a reputation for rare and unusual origins — they were the first and only roasters
            in Canada to offer Yunnan coffee from China. Their coffees can be found at select cafés
            across Montreal including Café Lali in Griffintown and they have been served at the
            Montreal Google offices. For adventurous coffee drinkers who want something genuinely
            different, Rabbit Hole is the place to look.
          </p>

          <h3 className={styles.h3}>38. September Café</h3>
          <p className={styles.p} style={{ fontSize: "0.82rem", color: "#888", marginBottom: "0.5rem" }}>
            4021 Rue Sainte-Catherine Ouest
          </p>
          <p className={styles.p}>
            September is primarily known as one of Montreal&apos;s most beloved café atmospheres —
            the surfer-owner aesthetic and legendary summer terrasse have earned it a devoted
            following. But their in-house roasting program is one of the city&apos;s best-kept
            secrets. The coffees they produce for their own use are thoughtfully sourced and
            carefully roasted, reflecting the same intentionality that defines everything else about
            the September experience.
          </p>

          <h3 className={styles.h3}>39. Café Falco</h3>
          <p className={styles.p} style={{ fontSize: "0.82rem", color: "#888", marginBottom: "0.5rem" }}>
            5605 Avenue de Gaspé
          </p>
          <p className={styles.p}>
            Café Falco&apos;s Japanese-inspired aesthetic extends into their approach to roasting —
            precise, minimal, and deeply respectful of the raw material. Their in-house roasting
            program produces coffees that reward the kind of slow, attentive drinking that the Falco
            environment encourages.
          </p>

          <h3 className={styles.h3}>40. Sensory House</h3>
          <p className={styles.p}>
            A specialty roaster focused on the sensory experience of coffee — developing profiles
            designed to highlight the most distinctive and memorable characteristics of each origin
            they work with. Sensory House represents the kind of thoughtful, consumer-focused
            approach to roasting that the CRS community encourages.
          </p>

          {/* ── Closing ── */}
          <h2 id="city-reputation" className={styles.h2}>
            A City That Earned Its Reputation
          </h2>
          <p className={styles.p}>
            Montreal&apos;s coffee roasting scene is not an accident. It is the product of genuinely
            passionate people making extraordinary coffees in a community that supports and challenges
            each other to be better. The Canadian Roasting Society model has been transformative —
            giving roasters the infrastructure they need to be serious without the capital that would
            otherwise exclude them.
          </p>
          <p className={styles.p}>
            And the results speak for themselves. Four operations in the top 100 in North America.
            Dozens of micro and nano roasters producing coffees that rival anything being made in the
            world&apos;s great coffee cities. A community that shares knowledge, supports each
            other&apos;s growth, and collectively elevates the entire scene.
          </p>
          <p className={styles.p} style={{ fontWeight: 700, borderLeft: "3px solid #c43e14", paddingLeft: "1em" }}>
            At EZPZ Coffee, we are proud to be part of this community. Every bag we produce at
            Canadian Roasting Society carries the quality standards and community values that define
            Montreal&apos;s roasting scene. When you put your brand on an EZPZ bag, you are not
            just getting specialty coffee. You are getting coffee made in one of North
            America&apos;s great roasting cities, by people who genuinely love what they do.
          </p>

        </article>
      </div>
    </div>

    {/* ── CTA Banner ────────────────────────────────────────────── */}
    <section className={styles.cta}>
      <div className={styles.ctaInner}>
        <h2 className={styles.ctaTitle}>
          Put Montreal&apos;s specialty coffee culture under your brand.
        </h2>
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
