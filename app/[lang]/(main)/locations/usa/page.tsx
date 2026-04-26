import type { Metadata } from "next";
import Link from "next/link";

import styles from "./usa.module.scss";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Custom Coffee Bags USA | All US Markets We Serve | EZPZ Coffee",
    description:
      "EZPZ ships custom branded coffee bags to every state in the USA. No minimum order, full design included, roasted in Montreal. Find your city and start designing today.",
    alternates: { canonical: "/locations/usa" },
    openGraph: {
      title: "Custom Coffee Bags USA | All US Markets We Serve | EZPZ Coffee",
      description:
        "EZPZ ships custom branded coffee bags to every state in the USA. No minimum order, full design included, roasted in Montreal. Find your city and start designing today.",
      type: "website",
      url: "https://www.ezpz.coffee/en/locations/usa",
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "Custom Coffee Bags USA" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Custom Coffee Bags USA | All US Markets | EZPZ",
      description: "EZPZ ships custom branded coffee bags to every state in the USA. No minimum order.",
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const BREADCRUMB_BASE = "https://www.ezpz.coffee/en";

type City = { name: string; state: string; href: string; dedicated?: boolean };

const STATES: { name: string; cities: City[] }[] = [
  {
    name: "New York",
    cities: [
      { name: "New York City", state: "NY", href: "/en/custom-coffee-bags-new-york", dedicated: true },
      { name: "Brooklyn", state: "NY", href: "/en/custom-coffee-bags-brooklyn", dedicated: true },
      { name: "Buffalo", state: "NY", href: "/en/contact?subject=Custom Coffee Buffalo" },
      { name: "Albany", state: "NY", href: "/en/contact?subject=Custom Coffee Albany" },
      { name: "Rochester", state: "NY", href: "/en/contact?subject=Custom Coffee Rochester" },
    ],
  },
  {
    name: "California",
    cities: [
      { name: "Los Angeles", state: "CA", href: "/en/custom-coffee-bags-los-angeles", dedicated: true },
      { name: "San Francisco", state: "CA", href: "/en/custom-coffee-bags-san-francisco", dedicated: true },
      { name: "San Diego", state: "CA", href: "/en/custom-coffee-bags-san-diego", dedicated: true },
      { name: "Sacramento", state: "CA", href: "/en/contact?subject=Custom Coffee Sacramento" },
      { name: "Oakland", state: "CA", href: "/en/contact?subject=Custom Coffee Oakland" },
      { name: "San Jose", state: "CA", href: "/en/contact?subject=Custom Coffee San Jose" },
      { name: "Santa Monica", state: "CA", href: "/en/contact?subject=Custom Coffee Santa Monica" },
    ],
  },
  {
    name: "Illinois",
    cities: [
      { name: "Chicago", state: "IL", href: "/en/custom-coffee-bags-chicago", dedicated: true },
      { name: "Naperville", state: "IL", href: "/en/contact?subject=Custom Coffee Naperville" },
      { name: "Evanston", state: "IL", href: "/en/contact?subject=Custom Coffee Evanston" },
      { name: "Aurora", state: "IL", href: "/en/contact?subject=Custom Coffee Aurora" },
    ],
  },
  {
    name: "Florida",
    cities: [
      { name: "Miami", state: "FL", href: "/en/custom-coffee-bags-miami", dedicated: true },
      { name: "Orlando", state: "FL", href: "/en/contact?subject=Custom Coffee Orlando" },
      { name: "Tampa", state: "FL", href: "/en/custom-coffee-bags-tampa", dedicated: true },
      { name: "Fort Lauderdale", state: "FL", href: "/en/contact?subject=Custom Coffee Fort Lauderdale" },
      { name: "Jacksonville", state: "FL", href: "/en/contact?subject=Custom Coffee Jacksonville" },
      { name: "Naples", state: "FL", href: "/en/contact?subject=Custom Coffee Naples" },
    ],
  },
  {
    name: "Texas",
    cities: [
      { name: "Houston", state: "TX", href: "/en/custom-coffee-bags-houston", dedicated: true },
      { name: "Dallas", state: "TX", href: "/en/custom-coffee-bags-dallas", dedicated: true },
      { name: "Austin", state: "TX", href: "/en/custom-coffee-bags-austin", dedicated: true },
      { name: "San Antonio", state: "TX", href: "/en/contact?subject=Custom Coffee San Antonio" },
      { name: "Fort Worth", state: "TX", href: "/en/contact?subject=Custom Coffee Fort Worth" },
    ],
  },
  {
    name: "Washington",
    cities: [
      { name: "Seattle", state: "WA", href: "/en/custom-coffee-bags-seattle", dedicated: true },
      { name: "Bellevue", state: "WA", href: "/en/contact?subject=Custom Coffee Bellevue" },
      { name: "Tacoma", state: "WA", href: "/en/contact?subject=Custom Coffee Tacoma" },
      { name: "Spokane", state: "WA", href: "/en/contact?subject=Custom Coffee Spokane" },
    ],
  },
  {
    name: "Massachusetts",
    cities: [
      { name: "Boston", state: "MA", href: "/en/custom-coffee-bags-boston", dedicated: true },
      { name: "Cambridge", state: "MA", href: "/en/contact?subject=Custom Coffee Cambridge" },
      { name: "Worcester", state: "MA", href: "/en/contact?subject=Custom Coffee Worcester" },
      { name: "Somerville", state: "MA", href: "/en/contact?subject=Custom Coffee Somerville" },
    ],
  },
  {
    name: "Colorado",
    cities: [
      { name: "Denver", state: "CO", href: "/en/custom-coffee-bags-denver", dedicated: true },
      { name: "Boulder", state: "CO", href: "/en/contact?subject=Custom Coffee Boulder" },
      { name: "Colorado Springs", state: "CO", href: "/en/contact?subject=Custom Coffee Colorado Springs" },
      { name: "Fort Collins", state: "CO", href: "/en/contact?subject=Custom Coffee Fort Collins" },
    ],
  },
  {
    name: "Georgia",
    cities: [
      { name: "Atlanta", state: "GA", href: "/en/custom-coffee-bags-atlanta", dedicated: true },
      { name: "Savannah", state: "GA", href: "/en/contact?subject=Custom Coffee Savannah" },
      { name: "Augusta", state: "GA", href: "/en/contact?subject=Custom Coffee Augusta" },
    ],
  },
  {
    name: "Nevada",
    cities: [
      { name: "Las Vegas", state: "NV", href: "/en/custom-coffee-bags-las-vegas", dedicated: true },
      { name: "Reno", state: "NV", href: "/en/contact?subject=Custom Coffee Reno" },
      { name: "Henderson", state: "NV", href: "/en/contact?subject=Custom Coffee Henderson" },
    ],
  },
  {
    name: "Arizona",
    cities: [
      { name: "Phoenix", state: "AZ", href: "/en/custom-coffee-bags-phoenix", dedicated: true },
      { name: "Scottsdale", state: "AZ", href: "/en/contact?subject=Custom Coffee Scottsdale" },
      { name: "Tucson", state: "AZ", href: "/en/contact?subject=Custom Coffee Tucson" },
      { name: "Tempe", state: "AZ", href: "/en/contact?subject=Custom Coffee Tempe" },
    ],
  },
  {
    name: "Oregon",
    cities: [
      { name: "Portland", state: "OR", href: "/en/custom-coffee-bags-portland", dedicated: true },
      { name: "Eugene", state: "OR", href: "/en/contact?subject=Custom Coffee Eugene" },
      { name: "Salem", state: "OR", href: "/en/contact?subject=Custom Coffee Salem" },
      { name: "Bend", state: "OR", href: "/en/contact?subject=Custom Coffee Bend" },
    ],
  },
  {
    name: "Minnesota",
    cities: [
      { name: "Minneapolis", state: "MN", href: "/en/custom-coffee-bags-minneapolis", dedicated: true },
      { name: "Saint Paul", state: "MN", href: "/en/contact?subject=Custom Coffee Saint Paul" },
    ],
  },
  {
    name: "Michigan",
    cities: [
      { name: "Detroit", state: "MI", href: "/en/custom-coffee-bags-detroit", dedicated: true },
      { name: "Grand Rapids", state: "MI", href: "/en/contact?subject=Custom Coffee Grand Rapids" },
      { name: "Ann Arbor", state: "MI", href: "/en/contact?subject=Custom Coffee Ann Arbor" },
    ],
  },
  {
    name: "Pennsylvania",
    cities: [
      { name: "Philadelphia", state: "PA", href: "/en/custom-coffee-bags-philadelphia", dedicated: true },
      { name: "Pittsburgh", state: "PA", href: "/en/custom-coffee-bags-pittsburgh", dedicated: true },
      { name: "Allentown", state: "PA", href: "/en/contact?subject=Custom Coffee Allentown" },
    ],
  },
  {
    name: "North Carolina",
    cities: [
      { name: "Charlotte", state: "NC", href: "/en/custom-coffee-bags-charlotte", dedicated: true },
      { name: "Raleigh", state: "NC", href: "/en/custom-coffee-bags-raleigh", dedicated: true },
      { name: "Durham", state: "NC", href: "/en/contact?subject=Custom Coffee Durham" },
      { name: "Asheville", state: "NC", href: "/en/contact?subject=Custom Coffee Asheville" },
    ],
  },
  {
    name: "Tennessee",
    cities: [
      { name: "Nashville", state: "TN", href: "/en/custom-coffee-bags-nashville", dedicated: true },
      { name: "Memphis", state: "TN", href: "/en/contact?subject=Custom Coffee Memphis" },
      { name: "Knoxville", state: "TN", href: "/en/contact?subject=Custom Coffee Knoxville" },
    ],
  },
  {
    name: "Ohio",
    cities: [
      { name: "Columbus", state: "OH", href: "/en/contact?subject=Custom Coffee Columbus" },
      { name: "Cleveland", state: "OH", href: "/en/contact?subject=Custom Coffee Cleveland" },
      { name: "Cincinnati", state: "OH", href: "/en/contact?subject=Custom Coffee Cincinnati" },
    ],
  },
  {
    name: "Louisiana",
    cities: [
      { name: "New Orleans", state: "LA", href: "/en/custom-coffee-bags-new-orleans", dedicated: true },
      { name: "Baton Rouge", state: "LA", href: "/en/contact?subject=Custom Coffee Baton Rouge" },
    ],
  },
  {
    name: "Virginia",
    cities: [
      { name: "Richmond", state: "VA", href: "/en/contact?subject=Custom Coffee Richmond" },
      { name: "Arlington", state: "VA", href: "/en/contact?subject=Custom Coffee Arlington" },
      { name: "Alexandria", state: "VA", href: "/en/contact?subject=Custom Coffee Alexandria" },
    ],
  },
  {
    name: "Washington DC",
    cities: [
      { name: "Washington DC", state: "DC", href: "/en/custom-coffee-bags-washington-dc", dedicated: true },
    ],
  },
  {
    name: "Hawaii",
    cities: [
      { name: "Honolulu", state: "HI", href: "/en/custom-coffee-bags-honolulu", dedicated: true },
    ],
  },
];

const WHY_CARDS = [
  {
    title: "Specialty coffee with a story",
    body: "Montreal has one of the most vibrant specialty coffee scenes in North America. EZPZ taps into that culture — sourcing traceable, 80+ SCA score beans and roasting them fresh at Canadian Roasting Society. Your US customers get world-class coffee with a story worth telling.",
  },
  {
    title: "No border, no problem",
    body: "We ship across the US border every week. Your order is handled, packaged, and shipped directly to your door — whether you are in New York, Miami, or Los Angeles. No import headaches. No extra paperwork on your end. Just your branded coffee, delivered.",
  },
  {
    title: "The only zero minimum in North America",
    body: "No other custom coffee supplier in Canada or the US offers a true zero minimum. Order 1 bag. Order 100. Order 10,000. EZPZ treats every brand with the same care, quality, and service — regardless of order size.",
  },
];

const ALL_CITIES = STATES.flatMap((s) => s.cities);

const UsaLocationsPage = () => {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${BREADCRUMB_BASE}` },
      { "@type": "ListItem", position: 2, name: "Markets", item: `${BREADCRUMB_BASE}/locations` },
      { "@type": "ListItem", position: 3, name: "US Markets", item: `${BREADCRUMB_BASE}/locations/usa` },
    ],
  };

  return (
    <div className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* ── Breadcrumb ── */}
      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <div className={styles.breadcrumbInner}>
          <Link href="/en" className={styles.breadcrumbLink}>Home</Link>
          <span className={styles.breadcrumbSep}>›</span>
          <Link href="/en/locations" className={styles.breadcrumbLink}>Markets</Link>
          <span className={styles.breadcrumbSep}>›</span>
          <span className={styles.breadcrumbCurrent}>US Markets</span>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.badge}>Roasted in Montreal. Delivered across North America.</span>
          <span className={styles.eyebrow}>We ship to the USA</span>
          <h1 className={styles.heroTitle}>Custom coffee bags delivered across the United States.</h1>
          <p className={styles.heroSubtitle}>
            EZPZ ships your branded specialty coffee bags directly to your door — anywhere in the USA. No minimum order. Full design included. Find your city below.
          </p>
          <div className={styles.heroButtons}>
            <Link href="/en/design" className={styles.heroPrimary}>Design your bag</Link>
            <Link href="/en/contact" className={styles.heroSecondary}>Get a free quote</Link>
          </div>
        </div>
      </section>

      {/* ── Canada toggle ── */}
      <div className={styles.canadaToggle}>
        <p className={styles.canadaToggleText}>
          Looking for Canadian cities?{" "}
          <Link href="/en/locations" className={styles.canadaToggleLink}>See our Canada locations page →</Link>
        </p>
      </div>

      {/* ── City grid ── */}
      <section className={styles.cities}>
        <div className={styles.citiesInner}>
          <span className={styles.eyebrow}>All US markets</span>
          <h2 className={styles.sectionTitle}>Find your market.</h2>
          <p className={styles.sectionSubtitle}>Click your city to see how EZPZ serves businesses in your area.</p>

          {STATES.map((stateGroup) => (
            <div key={stateGroup.name} className={styles.stateBlock}>
              <p className={styles.stateName}>{stateGroup.name}</p>
              <div className={styles.cityGrid}>
                {stateGroup.cities.map((city) => (
                  <Link key={city.name} href={city.href} className={styles.cityCard}>
                    {city.dedicated && (
                      <span className={styles.dedicatedBadge}>Dedicated page</span>
                    )}
                    <div className={styles.cityCardContent}>
                      <span className={styles.cityCardName}>{city.name}</span>
                      <span className={styles.cityCardState}>{city.state}</span>
                    </div>
                    <span className={styles.cityCardArrow}>→</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Stats ── */}
      <div className={styles.stats}>
        <div className={styles.statsInner}>
          <div>
            <span className={styles.statNumber}>50+</span>
            <span className={styles.statLabel}>US states served</span>
          </div>
          <div>
            <span className={styles.statNumber}>100+</span>
            <span className={styles.statLabel}>Cities we ship to</span>
          </div>
          <div>
            <span className={styles.statNumber}>7–10 days</span>
            <span className={styles.statLabel}>Average US delivery</span>
          </div>
        </div>
      </div>

      {/* ── Why US brands choose EZPZ ── */}
      <section className={styles.why}>
        <div className={styles.whyInner}>
          <span className={styles.eyebrow}>Why EZPZ</span>
          <h2 className={styles.sectionTitleLight}>Why US brands choose a Canadian roaster.</h2>
          <div className={styles.whyGrid}>
            {WHY_CARDS.map((card) => (
              <div key={card.title} className={styles.whyCard}>
                <h3 className={styles.whyCardTitle}>{card.title}</h3>
                <p className={styles.whyCardBody}>{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>Don't see your city? We still ship there.</h2>
          <p className={styles.ctaSubtext}>
            EZPZ ships custom branded coffee bags to every state in the US. If your city is not listed, contact us and we will make it happen.
          </p>
          <div className={styles.ctaButtons}>
            <Link href="/en/contact" className={styles.ctaPrimary}>Contact us</Link>
            <Link href="/en/design" className={styles.ctaSecondary}>Design your bag</Link>
          </div>
        </div>
      </section>

      {/* ── SEO text links ── */}
      <section className={styles.seoSection}>
        <div className={styles.seoInner}>
          <h2 className={styles.seoTitle}>Custom coffee bags by US city</h2>
          <div className={styles.seoGrid}>
            {ALL_CITIES.map((city) => (
              <Link key={`${city.name}-${city.state}`} href={city.href} className={styles.seoLink}>
                Custom coffee bags — {city.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default UsaLocationsPage;
