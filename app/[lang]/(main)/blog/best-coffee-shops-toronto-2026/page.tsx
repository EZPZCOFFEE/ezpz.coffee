import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

import { BLOG_POSTS } from "../data";
import styles from "./blogPost.module.scss";

export const metadata: Metadata = {
  title: "The 15 Best Coffee Shops in Toronto in 2026 | EZPZ Coffee Guide",
  description:
    "Discover the best coffee shops in Toronto in 2026. From world-class specialty cafés in Kensington to hidden gems in the Annex — your complete Toronto coffee guide.",
  alternates: { canonical: "/en/blog/best-coffee-shops-toronto-2026" },
  openGraph: {
    title: "The 15 Best Coffee Shops in Toronto in 2026 | EZPZ Coffee Guide",
    description:
      "Discover the best coffee shops in Toronto in 2026. From world-class specialty cafés in Kensington to hidden gems in the Annex — your complete Toronto coffee guide.",
    type: "article",
    url: "https://www.ezpz.coffee/en/blog/best-coffee-shops-toronto-2026",
    images: [{ url: "/assets/blog/toronto-coffee.svg", width: 800, height: 420, alt: "The 15 Best Coffee Shops in Toronto in 2026" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The 15 Best Coffee Shops in Toronto in 2026 | EZPZ Coffee Guide",
    description: "15 of the best cafés in Toronto for 2026 — from Pilot Coffee Roasters to hidden gems in the east end.",
    images: ["/assets/blog/toronto-coffee.svg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "The 15 Best Coffee Shops in Toronto in 2026",
      description: "Discover the best coffee shops in Toronto in 2026. From world-class specialty cafés to hidden gems — your complete Toronto coffee guide.",
      datePublished: "2026-05-03",
      author: { "@type": "Organization", name: "EZPZ Coffee Team" },
      publisher: { "@type": "Organization", name: "EZPZ Coffee", url: "https://www.ezpz.coffee" },
      image: "https://www.ezpz.coffee/assets/blog/toronto-coffee.svg",
      url: "https://www.ezpz.coffee/en/blog/best-coffee-shops-toronto-2026",
      wordCount: 1800,
    },
    {
      "@type": "CafeOrCoffeeShop",
      name: "Pilot Coffee Roasters",
      description: "Toronto's most respected specialty roaster. Founded 2009, direct-trade relationships with farms across Ethiopia, Colombia, Kenya, and Guatemala.",
      address: { "@type": "PostalAddress", streetAddress: "50 Wagstaff Drive", addressLocality: "Toronto", addressRegion: "ON", postalCode: "M4L 3W7", addressCountry: "CA" },
      url: "https://pilotcoffeeroasters.com",
    },
    {
      "@type": "CafeOrCoffeeShop",
      name: "Quantum Coffee",
      description: "Devoted following in Dovercourt Village for obsessively sourced coffees and an exceptional food program.",
      address: { "@type": "PostalAddress", streetAddress: "793 Dovercourt Road", addressLocality: "Toronto", addressRegion: "ON", postalCode: "M6H 2X4", addressCountry: "CA" },
    },
    {
      "@type": "CafeOrCoffeeShop",
      name: "Sam James Coffee Bar",
      description: "Toronto institution. The tiny Harbord Street original helped define what a specialty espresso bar could look and feel like in Canada.",
      address: { "@type": "PostalAddress", streetAddress: "297 Harbord Street", addressLocality: "Toronto", addressRegion: "ON", postalCode: "M6G 1G7", addressCountry: "CA" },
      url: "https://samjamescoffeebar.com",
    },
    {
      "@type": "CafeOrCoffeeShop",
      name: "Sense Appeal",
      description: "One of Toronto's most respected specialty roasters for over a decade. Exceptional sourcing program and consistently fine in-store coffee experience.",
      address: { "@type": "PostalAddress", streetAddress: "378 Spadina Avenue", addressLocality: "Toronto", addressRegion: "ON", postalCode: "M5T 2G5", addressCountry: "CA" },
    },
    {
      "@type": "CafeOrCoffeeShop",
      name: "Boxcar Social",
      description: "Serious specialty coffee destination and welcoming neighborhood spot in Summerhill. Cocktail and wine program extends the experience into the evening.",
      address: { "@type": "PostalAddress", streetAddress: "235 Summerhill Avenue", addressLocality: "Toronto", addressRegion: "ON", postalCode: "M4T 1B3", addressCountry: "CA" },
      url: "https://boxcarsocial.ca",
    },
    {
      "@type": "CafeOrCoffeeShop",
      name: "Café Boulangerie Kneaded",
      description: "One of Toronto's best café-bakery combinations on Bloor West. Coffee sourced from top Canadian roasters, extraordinary pastries.",
      address: { "@type": "PostalAddress", streetAddress: "1664 Bloor Street West", addressLocality: "Toronto", addressRegion: "ON", postalCode: "M6P 1A8", addressCountry: "CA" },
    },
    {
      "@type": "CafeOrCoffeeShop",
      name: "De Mello Palheta Coffee",
      description: "Toronto outpost of the celebrated Malaysian specialty coffee brand. Sourcing spans rare origins that many Canadian roasters do not touch.",
      address: { "@type": "PostalAddress", streetAddress: "500 Keele Street", addressLocality: "Toronto", addressRegion: "ON", postalCode: "M6N 3E3", addressCountry: "CA" },
    },
    {
      "@type": "CafeOrCoffeeShop",
      name: "Fahrenheit Coffee",
      description: "King West's finest specialty coffee bar. Sleek minimal space with a tight, consistent espresso program and rotating single origins on filter.",
      address: { "@type": "PostalAddress", streetAddress: "85 Portland Street", addressLocality: "Toronto", addressRegion: "ON", postalCode: "M5V 2M9", addressCountry: "CA" },
    },
    {
      "@type": "CafeOrCoffeeShop",
      name: "Early Bird Espresso and Brew Bar",
      description: "One of the best kept secrets on Queen East. Exceptional espresso and rotating single-origin drip coffee program.",
      address: { "@type": "PostalAddress", streetAddress: "700 Queen Street East", addressLocality: "Toronto", addressRegion: "ON", postalCode: "M4M 1G9", addressCountry: "CA" },
    },
    {
      "@type": "CafeOrCoffeeShop",
      name: "Merchant of Green Coffee",
      description: "Toronto's most unique coffee experience — a green coffee merchant who roasts small batches to order in Riverside.",
      address: { "@type": "PostalAddress", streetAddress: "4 Matilda Street", addressLocality: "Toronto", addressRegion: "ON", postalCode: "M4M 2G5", addressCountry: "CA" },
    },
    {
      "@type": "CafeOrCoffeeShop",
      name: "Café Neon",
      description: "Beloved neighbourhood café on Bloor West in the Dovercourt-Wallace area. Coffee sourced from excellent Canadian roasters.",
      address: { "@type": "PostalAddress", streetAddress: "936 Bloor Street West", addressLocality: "Toronto", addressRegion: "ON", postalCode: "M6H 1L5", addressCountry: "CA" },
    },
    {
      "@type": "CafeOrCoffeeShop",
      name: "Neo Coffee Bar",
      description: "Brought serious specialty coffee to Toronto's financial district. High quality coffee prepared efficiently without sacrificing craft.",
      address: { "@type": "PostalAddress", streetAddress: "161 Frederick Street", addressLocality: "Toronto", addressRegion: "ON", postalCode: "M5A 4P3", addressCountry: "CA" },
      url: "https://neocoffeebar.com",
    },
    {
      "@type": "CafeOrCoffeeShop",
      name: "Hale Coffee Company",
      description: "Roaster and café with one of the most beautifully designed spaces in Toronto. Genuine commitment to direct trade and ethical sourcing.",
      address: { "@type": "PostalAddress", streetAddress: "794 Dundas Street East", addressLocality: "Toronto", addressRegion: "ON", postalCode: "M4M 1R4", addressCountry: "CA" },
      url: "https://halecoffee.ca",
    },
    {
      "@type": "CafeOrCoffeeShop",
      name: "Lot Forty-Five Coffee",
      description: "Coffee and culture space at the intersection of specialty coffee and the arts in Leslieville. Hosts events, pop-ups, and art exhibitions.",
      address: { "@type": "PostalAddress", streetAddress: "1145 Queen Street East", addressLocality: "Toronto", addressRegion: "ON", postalCode: "M4M 1K9", addressCountry: "CA" },
    },
    {
      "@type": "CafeOrCoffeeShop",
      name: "Reunion Island Coffee",
      description: "Roasting in Toronto for over two decades. Thoughtful sourcing, approachable roasting style, multiple locations across the city.",
      address: { "@type": "PostalAddress", streetAddress: "326 Adelaide Street West", addressLocality: "Toronto", addressRegion: "ON", postalCode: "M5V 1R3", addressCountry: "CA" },
      url: "https://reunionislandcoffee.com",
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

    {/* ── Hero ──────────────────────────────────────────────────── */}
    <section className={styles.hero}>
      <div className={styles.heroInner}>
        <span className={styles.heroCategory}>Toronto Coffee Guide</span>
        <h1 className={styles.heroTitle}>
          The 15 Best Coffee Shops in Toronto in 2026
        </h1>
        <p className={styles.heroSubtitle}>
          Toronto&apos;s coffee scene has exploded into one of the most exciting in North America.
          Here is your complete guide to the cafés worth going out of your way for in 2026.
        </p>
        <div className={styles.heroMeta}>
          <span>May 3, 2026</span>
          <span className={styles.heroMetaDot} />
          <span>7 min read</span>
        </div>
      </div>
    </section>

    {/* ── TL;DR ─────────────────────────────────────────────────── */}
    <div className={styles.tldr} role="note" aria-label="Article summary">
      <strong className={styles.tldrLabel}>TL;DR</strong>
      <p className={styles.tldrText}>Toronto&apos;s specialty coffee scene has matured dramatically — from Pilot Coffee Roasters in the east end to Sam James on Harbord to hidden gems in Leslieville and Dovercourt Village. These 15 cafés represent the best of what the city has to offer in 2026.</p>
    </div>

    {/* ── Article ───────────────────────────────────────────────── */}
    <div className={styles.articleWrapper}>
      <article className={styles.article}>

        <p className={styles.intro}>
          Toronto is home to over 2.7 million people and a coffee culture that has matured
          dramatically over the past decade. What was once a city defined by Second Cup and
          Tim Hortons has transformed into a genuine specialty coffee destination — with
          world-class roasters, innovative café concepts, and a community of coffee professionals
          who rival anything you will find in New York, London, or Melbourne. In 2026,
          Toronto&apos;s coffee scene is thriving and these are the 15 shops leading the charge.
        </p>
        <p className={styles.p}>
          At <Link href="/en" className={styles.inlineLink}>EZPZ Coffee</Link>, we ship{" "}
          <Link href="/en/custom-coffee-bags-toronto" className={styles.inlineLink}>custom branded specialty coffee bags to Toronto businesses</Link>{" "}
          every week — from restaurants on King West to boutique hotels in Yorkville to retailers
          on Queen Street. We know Toronto&apos;s coffee culture intimately. This is our honest
          guide to the 15 best coffee shops in Toronto in 2026.
        </p>

        {/* ── What Makes Toronto Special ──── */}
        <h2 className={styles.h2}>What Makes Toronto&apos;s Coffee Scene Special</h2>
        <p className={styles.p}>
          Toronto&apos;s coffee scene is unique because it reflects the city itself — diverse,
          ambitious, and constantly evolving. The city&apos;s multicultural identity means you
          can find exceptional Italian espresso traditions alongside Japanese-inspired pour-over
          bars, Ethiopian coffee ceremonies, and cutting-edge Scandinavian-influenced roasting
          programs. The sheer size of the city also means there is room for many different coffee
          philosophies to coexist and thrive.
        </p>

        {/* ── The Icons ─────────────────── */}
        <h2 className={styles.h2}>The Icons</h2>

        <h3 className={styles.h3}>1. Pilot Coffee Roasters</h3>
        <div className={styles.addressBlock}>
          <span className={styles.addressLine}>Depot: 50 Wagstaff Drive, Toronto, ON M4L 3W7 · multiple café locations across the city</span>
          <span className={styles.neighbourhood}>Leslieville &amp; multiple · pilotcoffeeroasters.com</span>
        </div>
        <p className={styles.p}>
          Pilot is Toronto&apos;s most respected specialty roaster and the anchor of the
          city&apos;s third-wave coffee movement. Founded in 2009, they have spent over 15 years
          building direct relationships with farmers across Ethiopia, Colombia, Kenya, and
          Guatemala. Their roasting is precise and origin-focused — light to medium profiles that
          let the terroir of each lot speak clearly. Their café locations across the city are
          consistently excellent and their retail bags are some of the most beautiful in Canada.
        </p>
        <div className={styles.orderBlock}><strong>What to try:</strong> Their rotating single origin pour-over selection and their direct trade Ethiopian natural — one of the finest coffees available anywhere in Canada.</div>

        <h3 className={styles.h3}>2. Quantum Coffee</h3>
        <div className={styles.addressBlock}>
          <span className={styles.addressLine}>793 Dovercourt Road, Toronto, ON M6H 2X4</span>
          <span className={styles.neighbourhood}>Dovercourt Village</span>
        </div>
        <p className={styles.p}>
          One of Toronto&apos;s most talked about new cafés, Quantum Coffee has built a devoted
          following in Dovercourt Village with their obsessively sourced coffees and exceptional
          food program. The space is intimate and the atmosphere is warm — exactly what a
          neighbourhood café should feel like. Their espresso program is among the best in the city.
        </p>
        <div className={styles.orderBlock}><strong>What to try:</strong> Their house espresso and any of their seasonal single origin pour-overs.</div>

        <h3 className={styles.h3}>3. Sam James Coffee Bar</h3>
        <div className={styles.addressBlock}>
          <span className={styles.addressLine}>297 Harbord Street, Toronto, ON M6G 1G7 · multiple locations</span>
          <span className={styles.neighbourhood}>Harbord Village &amp; multiple · samjamescoffeebar.com</span>
        </div>
        <p className={styles.p}>
          Sam James is a Toronto institution. The tiny Harbord Street original is one of the most
          influential coffee bars in Canadian history — it helped define what a specialty espresso
          bar could look and feel like in this city. The focus is absolute: great espresso, minimal
          distraction, maximum quality. Multiple locations now but the original remains the soul of
          the operation.
        </p>
        <div className={styles.orderBlock}><strong>What to try:</strong> The espresso. Nothing else. It is perfect.</div>

        <h3 className={styles.h3}>4. Sense Appeal</h3>
        <div className={styles.addressBlock}>
          <span className={styles.addressLine}>378 Spadina Avenue, Toronto, ON M5T 2G5</span>
          <span className={styles.neighbourhood}>Kensington Market</span>
        </div>
        <p className={styles.p}>
          Sense Appeal has been one of Toronto&apos;s most respected specialty roasters for over a
          decade. Their sourcing program is exceptional and their in-store coffee experience is
          consistently one of the finest in the city. The Spadina location is a destination for
          serious coffee drinkers and their wholesale program supplies some of the best restaurants
          and cafés in Toronto.
        </p>
        <div className={styles.orderBlock}><strong>What to try:</strong> Their signature espresso blend and any of their rotating single origin filter options.</div>

        {/* ── Neighbourhood Favourites ─── */}
        <h2 className={styles.h2}>The Neighbourhood Favourites</h2>

        <h3 className={styles.h3}>5. Boxcar Social</h3>
        <div className={styles.addressBlock}>
          <span className={styles.addressLine}>235 Summerhill Avenue, Toronto, ON M4T 1B3 · multiple locations</span>
          <span className={styles.neighbourhood}>Summerhill &amp; multiple · boxcarsocial.ca</span>
        </div>
        <p className={styles.p}>
          Boxcar Social occupies a beautiful space in Summerhill that manages to be both a serious
          specialty coffee destination and an incredibly welcoming neighbourhood spot. Their cocktail
          and wine program extends the experience into the evening making it one of the most
          versatile café-bar concepts in the city.
        </p>
        <div className={styles.orderBlock}><strong>What to try:</strong> Their cold brew and their seasonal espresso selections.</div>

        <h3 className={styles.h3}>6. Café Boulangerie Kneaded</h3>
        <div className={styles.addressBlock}>
          <span className={styles.addressLine}>1664 Bloor Street West, Toronto, ON M6P 1A8</span>
          <span className={styles.neighbourhood}>Roncesvalles</span>
        </div>
        <p className={styles.p}>
          One of Toronto&apos;s best café-bakery combinations. The coffee is sourced from top
          Canadian roasters and prepared with genuine care. The pastries are extraordinary. The
          space on Bloor West has become a Roncesvalles institution with lineups on weekend mornings
          that speak to the quality of what is being produced inside.
        </p>
        <div className={styles.orderBlock}><strong>What to try:</strong> Their cortado paired with any of the seasonal pastries.</div>

        <h3 className={styles.h3}>7. De Mello Palheta Coffee</h3>
        <div className={styles.addressBlock}>
          <span className={styles.addressLine}>500 Keele Street, Toronto, ON M6N 3E3</span>
          <span className={styles.neighbourhood}>The Junction</span>
        </div>
        <p className={styles.p}>
          A Toronto outpost of the celebrated Malaysian specialty coffee brand. De Mello Palheta
          brings an international perspective to Toronto&apos;s coffee scene — their sourcing spans
          origins that many Canadian roasters do not touch. The Keele Street location is a
          destination worth traveling across the city for.
        </p>
        <div className={styles.orderBlock}><strong>What to try:</strong> Their single origin espresso options and any of their rare Asian coffee origins.</div>

        <h3 className={styles.h3}>8. Fahrenheit Coffee</h3>
        <div className={styles.addressBlock}>
          <span className={styles.addressLine}>85 Portland Street, Toronto, ON M5V 2M9</span>
          <span className={styles.neighbourhood}>King West</span>
        </div>
        <p className={styles.p}>
          Fahrenheit is King West&apos;s finest specialty coffee bar — a sleek, minimal space that
          takes coffee seriously without taking itself too seriously. The espresso program is tight
          and consistent and the rotating single origins on filter are always interesting.
        </p>
        <div className={styles.orderBlock}><strong>What to try:</strong> Their flat white and their current filter coffee selection.</div>

        {/* ── Hidden Gems ───────────────── */}
        <h2 className={styles.h2}>The Hidden Gems</h2>

        <h3 className={styles.h3}>9. Early Bird Espresso and Brew Bar</h3>
        <div className={styles.addressBlock}>
          <span className={styles.addressLine}>700 Queen Street East, Toronto, ON M4M 1G9</span>
          <span className={styles.neighbourhood}>Leslieville</span>
        </div>
        <p className={styles.p}>
          One of the best kept secrets on Queen East. Early Bird&apos;s espresso is exceptional
          and their drip coffee program showcases rotating single origins from top Canadian
          roasters. The space is warm and the service is genuinely friendly — a neighbourhood
          coffee bar at its absolute best.
        </p>
        <div className={styles.orderBlock}><strong>What to try:</strong> Their espresso and anything on their rotating pour-over menu.</div>

        <h3 className={styles.h3}>10. Merchant of Green Coffee</h3>
        <div className={styles.addressBlock}>
          <span className={styles.addressLine}>4 Matilda Street, Toronto, ON M4M 2G5</span>
          <span className={styles.neighbourhood}>Riverside</span>
        </div>
        <p className={styles.p}>
          Merchant of Green is one of Toronto&apos;s most unique coffee experiences — a green
          (unroasted) coffee merchant who also roasts small batches to order. If you want to
          understand coffee at a deeper level, start here. The Matilda Street location in
          Riverside is a destination for coffee educators, professionals, and enthusiasts.
        </p>
        <div className={styles.orderBlock}><strong>What to try:</strong> Ask for their recommendation based on your flavour preferences — they will find something that surprises you.</div>

        <h3 className={styles.h3}>11. Café Neon</h3>
        <div className={styles.addressBlock}>
          <span className={styles.addressLine}>936 Bloor Street West, Toronto, ON M6H 1L5</span>
          <span className={styles.neighbourhood}>Dovercourt-Wallace</span>
        </div>
        <p className={styles.p}>
          Café Neon on Bloor West has become one of the most beloved neighbourhood spots in the
          Dovercourt-Wallace area. The coffee is sourced from excellent Canadian roasters and the
          space has a warmth that keeps people coming back. A genuinely great neighbourhood café
          that does everything well.
        </p>
        <div className={styles.orderBlock}><strong>What to try:</strong> Their latte and any of their seasonal offerings.</div>

        <h3 className={styles.h3}>12. Neo Coffee Bar</h3>
        <div className={styles.addressBlock}>
          <span className={styles.addressLine}>161 Frederick Street, Toronto, ON M5A 4P3 · multiple locations</span>
          <span className={styles.neighbourhood}>St. Lawrence &amp; multiple · neocoffeebar.com</span>
        </div>
        <p className={styles.p}>
          Neo Coffee Bar brought serious specialty coffee to the financial district and surrounding
          areas of Toronto. Their locations are designed for the working professional — high quality
          coffee prepared efficiently without sacrificing craft. One of the most successful specialty
          coffee brands in the city.
        </p>
        <div className={styles.orderBlock}><strong>What to try:</strong> Their espresso drinks and their excellent cold brew program.</div>

        {/* ── Design Destinations ────────── */}
        <h2 className={styles.h2}>The Design Destinations</h2>

        <h3 className={styles.h3}>13. Hale Coffee Company</h3>
        <div className={styles.addressBlock}>
          <span className={styles.addressLine}>794 Dundas Street East, Toronto, ON M4M 1R4</span>
          <span className={styles.neighbourhood}>Leslieville · halecoffee.ca</span>
        </div>
        <p className={styles.p}>
          Hale Coffee is a roaster and café that takes both the coffee and the environment equally
          seriously. Their Dundas East location is one of the most beautifully designed café spaces
          in Toronto. The roasting program is excellent and their commitment to direct trade and
          ethical sourcing is genuine.
        </p>
        <div className={styles.orderBlock}><strong>What to try:</strong> Their house blend espresso and any of their direct trade single origins.</div>

        <h3 className={styles.h3}>14. Lot Forty-Five Coffee</h3>
        <div className={styles.addressBlock}>
          <span className={styles.addressLine}>1145 Queen Street East, Toronto, ON M4M 1K9</span>
          <span className={styles.neighbourhood}>Leslieville</span>
        </div>
        <p className={styles.p}>
          A coffee and culture space that sits at the intersection of specialty coffee and the
          arts. The Leslieville location hosts events, pop-ups, and art exhibitions alongside
          excellent coffee. A genuine community hub that represents the best of what a café can be.
        </p>
        <div className={styles.orderBlock}><strong>What to try:</strong> Their rotating espresso offerings and their expertly prepared filter coffee.</div>

        <h3 className={styles.h3}>15. Reunion Island Coffee</h3>
        <div className={styles.addressBlock}>
          <span className={styles.addressLine}>326 Adelaide Street West, Toronto, ON M5V 1R3 · multiple locations</span>
          <span className={styles.neighbourhood}>Entertainment District &amp; multiple · reunionislandcoffee.com</span>
        </div>
        <p className={styles.p}>
          Reunion Island has been roasting in Toronto for over two decades and remains one of the
          city&apos;s most respected operations. Their sourcing is thoughtful and their roasting is
          calibrated for approachability without sacrificing complexity. Multiple locations across
          the city make them one of Toronto&apos;s most accessible specialty coffee brands.
        </p>
        <div className={styles.orderBlock}><strong>What to try:</strong> Their signature blends and their rotating single origin pour-over selections.</div>

        {/* ── EZPZ Note ─────────────────── */}
        <h2 className={styles.h2}>What Toronto&apos;s Coffee Scene Means for Your Brand</h2>
        <p className={styles.p}>
          Toronto&apos;s world-class coffee culture is exactly the kind of environment where a{" "}
          <Link href="/en/design" className={styles.inlineLink}>custom branded specialty coffee bag</Link>{" "}
          thrives. Toronto consumers are sophisticated, brand-conscious, and willing to pay a
          premium for quality. A beautifully designed custom coffee bag from EZPZ Coffee — roasted
          fresh in Montreal and shipped directly to your Toronto door — is the product that
          Toronto&apos;s best restaurants, hotels, and retailers are adding to their lineup right now.
        </p>
        <p className={styles.p}>
          If you are a Toronto business thinking about launching your own branded coffee product,
          EZPZ ships directly to Toronto with no minimum order and full custom design included.
          Join the restaurants, hotels, and brands across Toronto that already trust{" "}
          <Link href="/en/white-label" className={styles.inlineLink}>EZPZ&apos;s white label coffee service</Link>.
          Zero minimums. Full design. 2 to 3 weeks to delivery.{" "}
          <Link href="/en/contact" className={styles.inlineLink}>Get a free quote today</Link>.
        </p>

      </article>
    </div>

    {/* ── CTA Banner ────────────────────────────────────────────── */}
    <section className={styles.cta}>
      <div className={styles.ctaInner}>
        <h2 className={styles.ctaTitle}>
          Put your Toronto brand on specialty coffee.
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
