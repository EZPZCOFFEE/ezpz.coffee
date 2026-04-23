import type { Metadata } from "next";
import Link from "next/link";

import styles from "./locations.module.scss";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Custom Coffee Bags — Markets We Serve Across Canada | EZPZ",
    description:
      "EZPZ ships custom branded coffee bags to businesses across Canada. Montreal, Toronto, Vancouver, Calgary, Ottawa, and 40+ more cities. No minimum order.",
    alternates: { canonical: "/locations" },
    openGraph: {
      title: "Custom Coffee Bags — Markets We Serve Across Canada | EZPZ",
      description:
        "EZPZ ships custom branded coffee bags to businesses across Canada. Montreal, Toronto, Vancouver, Calgary, Ottawa, and 40+ more cities. No minimum order.",
      type: "website",
      url: "https://www.ezpz.coffee/en/locations",
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "Custom Coffee Bags Canada" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Custom Coffee Bags — Markets We Serve | EZPZ",
      description: "EZPZ ships custom branded coffee to 40+ cities across Canada. No minimum order.",
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const BREADCRUMB_BASE = "https://www.ezpz.coffee/en";

const PROVINCES = [
  {
    name: "Quebec",
    cities: [
      { name: "Montreal", href: "/en/custom-coffee-bags-montreal" },
      { name: "Quebec City", href: null },
      { name: "Laval", href: null },
      { name: "Longueuil", href: null },
      { name: "Gatineau", href: null },
      { name: "Sherbrooke", href: null },
      { name: "Saguenay", href: null },
      { name: "Trois-Rivières", href: null },
    ],
  },
  {
    name: "Ontario",
    cities: [
      { name: "Toronto", href: "/en/custom-coffee-bags-toronto" },
      { name: "Ottawa", href: null },
      { name: "Mississauga", href: null },
      { name: "Brampton", href: null },
      { name: "Hamilton", href: null },
      { name: "London", href: null },
      { name: "Markham", href: null },
      { name: "Vaughan", href: null },
      { name: "Kitchener", href: null },
      { name: "Windsor", href: null },
    ],
  },
  {
    name: "British Columbia",
    cities: [
      { name: "Vancouver", href: "/en/custom-coffee-bags-vancouver" },
      { name: "Surrey", href: null },
      { name: "Burnaby", href: null },
      { name: "Richmond", href: null },
      { name: "Kelowna", href: null },
      { name: "Abbotsford", href: null },
      { name: "Victoria", href: null },
    ],
  },
  {
    name: "Alberta",
    cities: [
      { name: "Calgary", href: null },
      { name: "Edmonton", href: null },
      { name: "Red Deer", href: null },
      { name: "Lethbridge", href: null },
      { name: "St. Albert", href: null },
    ],
  },
  {
    name: "Manitoba",
    cities: [
      { name: "Winnipeg", href: null },
      { name: "Brandon", href: null },
    ],
  },
  {
    name: "Saskatchewan",
    cities: [
      { name: "Saskatoon", href: null },
      { name: "Regina", href: null },
    ],
  },
  {
    name: "Nova Scotia",
    cities: [
      { name: "Halifax", href: null },
      { name: "Dartmouth", href: null },
    ],
  },
  {
    name: "New Brunswick",
    cities: [
      { name: "Moncton", href: null },
      { name: "Fredericton", href: null },
      { name: "Saint John", href: null },
    ],
  },
  {
    name: "Prince Edward Island",
    cities: [{ name: "Charlottetown", href: null }],
  },
  {
    name: "Newfoundland & Labrador",
    cities: [{ name: "St. John's", href: null }],
  },
];

const HOW = [
  {
    n: "01",
    title: "Design online, ship anywhere",
    body: "Use our online design tool from any city in Canada. Upload your logo, choose your coffee, and configure your bag in under 10 minutes.",
  },
  {
    n: "02",
    title: "Roasted in Montreal",
    body: "Every order is roasted fresh at Canadian Roasting Society in Montreal — not pre-packaged or pulled from a warehouse. Quality is consistent everywhere.",
  },
  {
    n: "03",
    title: "Delivered coast to coast",
    body: "We ship via tracked carriers to all provinces and territories. Typical delivery: 2 to 3 days to Ontario and Quebec, 5 to 10 days to Western Canada.",
  },
];

const SEO_LINKS = [
  {
    category: "City pages",
    links: [
      { label: "Custom coffee bags Montreal", href: "/en/custom-coffee-bags-montreal" },
      { label: "Custom coffee bags Toronto", href: "/en/custom-coffee-bags-toronto" },
      { label: "Custom coffee bags Vancouver", href: "/en/custom-coffee-bags-vancouver" },
    ],
  },
  {
    category: "White label",
    links: [
      { label: "White label coffee Canada", href: "/en/white-label-coffee-canada" },
      { label: "Private label coffee Canada", href: "/en/private-label-coffee-canada" },
      { label: "White label solutions", href: "/en/white-label" },
    ],
  },
  {
    category: "Compare",
    links: [
      { label: "EZPZ vs competitors", href: "/en/compare" },
      { label: "Rogue Wave alternative", href: "/en/compare/rogue-wave-coffee-alternative" },
      { label: "Canterbury alternative", href: "/en/compare/canterbury-coffee-alternative" },
    ],
  },
];

const LocationsPage = () => {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${BREADCRUMB_BASE}` },
      { "@type": "ListItem", position: 2, name: "Markets", item: `${BREADCRUMB_BASE}/locations` },
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
          <span className={styles.breadcrumbCurrent}>Markets we serve</span>
        </div>
      </nav>

      {/* ── USA toggle ── */}
      <div style={{ background: "#1a1a1a", borderBottom: "1px solid #2a2a2a", padding: "12px var(--spacing-state)", textAlign: "center" }}>
        <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.55)", margin: 0 }}>
          Looking for US cities?{" "}
          <Link href="/en/locations/usa" style={{ color: "var(--color-accent)", textDecoration: "none", fontWeight: 600 }}>See our US locations page →</Link>
        </p>
      </div>

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.eyebrow}>Where we ship</span>
          <h1 className={styles.heroTitle}>Custom coffee bags delivered anywhere in Canada.</h1>
          <p className={styles.heroSubtitle}>
            EZPZ ships custom branded coffee to businesses in every province and territory. Montreal, Toronto, Vancouver, Calgary, and 40+ more cities — all with no minimum order.
          </p>
          <div className={styles.heroButtons}>
            <Link href="/en/design" className={styles.heroPrimary}>Design your bag</Link>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <div className={styles.stats}>
        <div className={styles.statsInner}>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>40+</span>
            <span className={styles.statLabel}>Cities served</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>10</span>
            <span className={styles.statLabel}>Provinces & territories</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>0</span>
            <span className={styles.statLabel}>Minimum order</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>5–10</span>
            <span className={styles.statLabel}>Business days to West</span>
          </div>
        </div>
      </div>

      {/* ── Province grid ── */}
      <section className={styles.provinces}>
        <div className={styles.provincesInner}>
          <span className={styles.eyebrow}>All markets</span>
          <h2 className={styles.sectionTitle}>We deliver to businesses across all of Canada.</h2>
          {PROVINCES.map((province) => (
            <div key={province.name} className={styles.provinceBlock}>
              <h3 className={styles.provinceName}>{province.name}</h3>
              <ul className={styles.cityList}>
                {province.cities.map((city) => (
                  <li key={city.name} className={styles.cityItem}>
                    {city.href ? (
                      <Link href={city.href} className={styles.cityLink}>{city.name}</Link>
                    ) : (
                      <span className={styles.cityText}>{city.name}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── How it works ── */}
      <section className={styles.how}>
        <div className={styles.howInner}>
          <span className={styles.eyebrow}>How it works</span>
          <h2 className={styles.sectionTitleLight}>Same great product, wherever you are in Canada.</h2>
          <div className={styles.howGrid}>
            {HOW.map((card) => (
              <div key={card.n} className={styles.howCard}>
                <span className={styles.howNumber}>{card.n}</span>
                <h3 className={styles.howCardTitle}>{card.title}</h3>
                <p className={styles.howCardBody}>{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SEO links ── */}
      <section className={styles.seoLinks}>
        <div className={styles.seoLinksInner}>
          <h2 className={styles.seoLinksTitle}>Explore more from EZPZ.</h2>
          <div className={styles.seoLinksGrid}>
            {SEO_LINKS.map((group) => (
              <div key={group.category} className={styles.seoLinkCard}>
                <p className={styles.seoLinkCardTitle}>{group.category}</p>
                <ul className={styles.seoLinkList}>
                  {group.links.map((link) => (
                    <li key={link.href} className={styles.seoLinkItem}>
                      <Link href={link.href} className={styles.seoLink}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>Ready to get started?</h2>
          <p className={styles.ctaSubtext}>
            No minimums. Full design included. Shipped to your door anywhere in Canada.
          </p>
          <div className={styles.ctaButtons}>
            <Link href="/en/design" className={styles.ctaPrimary}>Design your bag</Link>
            <Link href="/en/contact" className={styles.ctaSecondary}>Get a free quote</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LocationsPage;
