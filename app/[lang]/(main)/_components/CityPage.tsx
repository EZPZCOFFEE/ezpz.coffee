import Link from "next/link";

import styles from "./cityPage.module.scss";

export interface CityPageData {
  city: string;
  province: string;
  eyebrow: string;
  headline: string;
  subheadline: string;
  bodyIntro: string;
  deliveryTime: string;
  howItWorks: { n: string; title: string; body: string }[];
  whyPoints: { n: string; title: string; body: string }[];
  canonicalPath: string;
  allMarketsHref?: string;
  allMarketsLabel?: string;
  relatedCities?: { city: string; href: string }[];
}

const BREADCRUMB_BASE = "https://www.ezpz.coffee/en";

const CityPage = ({ data }: { data: CityPageData }) => {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${BREADCRUMB_BASE}` },
      { "@type": "ListItem", position: 2, name: data.allMarketsLabel ?? "Markets", item: `${BREADCRUMB_BASE}${data.allMarketsHref ?? "/locations"}` },
      { "@type": "ListItem", position: 3, name: `Custom Coffee Bags ${data.city}`, item: `${BREADCRUMB_BASE}${data.canonicalPath}` },
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `EZPZ Coffee — Custom Coffee Bags ${data.city}`,
    url: `https://www.ezpz.coffee/en${data.canonicalPath}`,
    logo: "https://www.ezpz.coffee/logo.svg",
    image: "https://www.ezpz.coffee/_next/static/media/banner-01.15cqmow69pk9l.jpg",
    description: `Custom branded coffee bags for ${data.city} businesses. No minimum order, full design included, specialty coffee roasted in Montreal and shipped to ${data.city}, ${data.province}.`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "3780 Rue Saint-Patrick",
      addressLocality: "Montréal",
      addressRegion: "QC",
      postalCode: "H4E 1A2",
      addressCountry: "CA",
    },
    email: "help@ezpz.coffee",
    priceRange: "$$",
    areaServed: data.city,
    telephone: "+15140000000",
  };

  return (
    <div className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* ── Breadcrumb ── */}
      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <div className={styles.breadcrumbInner}>
          <Link href="/en" className={styles.breadcrumbLink}>Home</Link>
          <span className={styles.breadcrumbSep}>›</span>
          <Link href={data.allMarketsHref ?? "/en/locations"} className={styles.breadcrumbLink}>{data.allMarketsLabel ?? "Markets"}</Link>
          <span className={styles.breadcrumbSep}>›</span>
          <span className={styles.breadcrumbCurrent}>Custom Coffee Bags {data.city}</span>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.eyebrow}>{data.eyebrow}</span>
          <h1 className={styles.heroTitle}>{data.headline}</h1>
          <p className={styles.heroSubtitle}>{data.subheadline}</p>
          <div className={styles.heroButtons}>
            <Link href="/en/design" className={styles.heroPrimary}>Design your bag</Link>
            <Link href="/en/contact" className={styles.heroSecondary}>Get a free quote</Link>
          </div>
        </div>
      </section>

      {/* ── Intro ── */}
      <section className={styles.intro}>
        <div className={styles.introInner}>
          <p className={styles.introText}>{data.bodyIntro}</p>
          <Link href={data.allMarketsHref ?? "/en/locations"} className={styles.allMarketsLink}>← See all markets we serve</Link>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className={styles.how}>
        <div className={styles.howInner}>
          <span className={styles.eyebrow}>How it works</span>
          <h2 className={styles.sectionTitle}>From idea to delivery in under 3 weeks.</h2>
          <div className={styles.howGrid}>
            {data.howItWorks.map((step) => (
              <div key={step.n} className={styles.howStep}>
                <span className={styles.howNumber}>{step.n}</span>
                <h3 className={styles.howStepTitle}>{step.title}</h3>
                <p className={styles.howStepBody}>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why choose EZPZ ── */}
      <section className={styles.why}>
        <div className={styles.whyInner}>
          <span className={styles.eyebrow}>Why EZPZ</span>
          <h2 className={styles.sectionTitleLight}>Why {data.city} businesses choose EZPZ.</h2>
          <div className={styles.whyGrid}>
            {data.whyPoints.map((point) => (
              <div key={point.n} className={styles.whyCard}>
                <span className={styles.whyNumber}>{point.n}</span>
                <h3 className={styles.whyCardTitle}>{point.title}</h3>
                <p className={styles.whyCardBody}>{point.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related Pages ── */}
      {data.relatedCities && data.relatedCities.length > 0 && (
        <section className={styles.relatedPages} aria-labelledby="related-pages-heading">
          <div className={styles.relatedPagesInner}>
            <span id="related-pages-heading" className={styles.relatedPagesTitle}>Related Markets</span>
            <div className={styles.relatedPagesGrid}>
              <Link href="/en/locations" className={styles.relatedPageCard}>← All Canadian Markets</Link>
              {data.relatedCities.map(({ city, href }) => (
                <Link key={city} href={href} className={styles.relatedPageCard}>
                  Custom Coffee Bags {city} →
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>Ready to launch your {data.city} coffee brand?</h2>
          <p className={styles.ctaSubtext}>No minimums. Full design included. Delivered to {data.city} in {data.deliveryTime}.</p>
          <div className={styles.ctaButtons}>
            <Link href="/en/design" className={styles.ctaPrimary}>Design your bag</Link>
            <Link href="/en/contact" className={styles.ctaSecondary}>Get a free quote</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CityPage;
