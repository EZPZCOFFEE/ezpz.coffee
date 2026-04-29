import type { Metadata } from "next";
import Link from "next/link";

import styles from "./locations.module.scss";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Custom Coffee Bags — Markets We Serve Across Canada | EZPZ",
    description:
      "EZPZ ships custom branded coffee bags to businesses across Canada. Montreal, Toronto, Vancouver, Calgary, Ottawa, and 40+ more cities. No minimum order.",
    alternates: { canonical: "/en/locations" },
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
      title: "Custom Coffee Bags — Canadian Markets | EZPZ",
      description: "EZPZ ships custom branded coffee to 40+ cities across Canada. No minimum order.",
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const BREADCRUMB_BASE = "https://www.ezpz.coffee/en";

type City = { name: string; province: string; href: string; dedicated?: boolean };

const PROVINCES: { name: string; cities: City[] }[] = [
  {
    name: "Quebec",
    cities: [
      { name: "Montreal", province: "QC", href: "/en/custom-coffee-bags-montreal", dedicated: true },
      { name: "Quebec City", province: "QC", href: "/en/custom-coffee-bags-quebec-city", dedicated: true },
      { name: "Laval", province: "QC", href: "/en/custom-coffee-bags-laval", dedicated: true },
      { name: "Longueuil", province: "QC", href: "/en/custom-coffee-bags-longueuil", dedicated: true },
      { name: "Gatineau", province: "QC", href: "/en/custom-coffee-bags-gatineau", dedicated: true },
      { name: "Sherbrooke", province: "QC", href: "/en/custom-coffee-bags-sherbrooke", dedicated: true },
      { name: "Saguenay", province: "QC", href: "/en/contact?subject=Custom Coffee Saguenay" },
      { name: "Trois-Rivières", province: "QC", href: "/en/contact?subject=Custom Coffee Trois-Rivières" },
    ],
  },
  {
    name: "Ontario",
    cities: [
      { name: "Toronto", province: "ON", href: "/en/custom-coffee-bags-toronto", dedicated: true },
      { name: "Ottawa", province: "ON", href: "/en/custom-coffee-bags-ottawa", dedicated: true },
      { name: "Mississauga", province: "ON", href: "/en/custom-coffee-bags-mississauga", dedicated: true },
      { name: "Brampton", province: "ON", href: "/en/custom-coffee-bags-brampton", dedicated: true },
      { name: "Hamilton", province: "ON", href: "/en/custom-coffee-bags-hamilton", dedicated: true },
      { name: "London", province: "ON", href: "/en/custom-coffee-bags-london-ontario", dedicated: true },
      { name: "Markham", province: "ON", href: "/en/contact?subject=Custom Coffee Markham" },
      { name: "Vaughan", province: "ON", href: "/en/contact?subject=Custom Coffee Vaughan" },
      { name: "Kitchener", province: "ON", href: "/en/contact?subject=Custom Coffee Kitchener" },
      { name: "Windsor", province: "ON", href: "/en/contact?subject=Custom Coffee Windsor" },
    ],
  },
  {
    name: "British Columbia",
    cities: [
      { name: "Vancouver", province: "BC", href: "/en/custom-coffee-bags-vancouver", dedicated: true },
      { name: "Surrey", province: "BC", href: "/en/contact?subject=Custom Coffee Surrey" },
      { name: "Burnaby", province: "BC", href: "/en/contact?subject=Custom Coffee Burnaby" },
      { name: "Richmond", province: "BC", href: "/en/contact?subject=Custom Coffee Richmond" },
      { name: "Kelowna", province: "BC", href: "/en/custom-coffee-bags-kelowna", dedicated: true },
      { name: "Abbotsford", province: "BC", href: "/en/contact?subject=Custom Coffee Abbotsford" },
      { name: "Victoria", province: "BC", href: "/en/custom-coffee-bags-victoria", dedicated: true },
    ],
  },
  {
    name: "Alberta",
    cities: [
      { name: "Calgary", province: "AB", href: "/en/custom-coffee-bags-calgary", dedicated: true },
      { name: "Edmonton", province: "AB", href: "/en/custom-coffee-bags-edmonton", dedicated: true },
      { name: "Red Deer", province: "AB", href: "/en/contact?subject=Custom Coffee Red Deer" },
      { name: "Lethbridge", province: "AB", href: "/en/contact?subject=Custom Coffee Lethbridge" },
      { name: "St. Albert", province: "AB", href: "/en/contact?subject=Custom Coffee St. Albert" },
    ],
  },
  {
    name: "Manitoba",
    cities: [
      { name: "Winnipeg", province: "MB", href: "/en/custom-coffee-bags-winnipeg", dedicated: true },
      { name: "Brandon", province: "MB", href: "/en/contact?subject=Custom Coffee Brandon" },
    ],
  },
  {
    name: "Saskatchewan",
    cities: [
      { name: "Saskatoon", province: "SK", href: "/en/custom-coffee-bags-saskatoon", dedicated: true },
      { name: "Regina", province: "SK", href: "/en/custom-coffee-bags-regina", dedicated: true },
    ],
  },
  {
    name: "Nova Scotia",
    cities: [
      { name: "Halifax", province: "NS", href: "/en/custom-coffee-bags-halifax", dedicated: true },
      { name: "Dartmouth", province: "NS", href: "/en/contact?subject=Custom Coffee Dartmouth" },
    ],
  },
  {
    name: "New Brunswick",
    cities: [
      { name: "Moncton", province: "NB", href: "/en/custom-coffee-bags-moncton", dedicated: true },
      { name: "Fredericton", province: "NB", href: "/en/contact?subject=Custom Coffee Fredericton" },
      { name: "Saint John", province: "NB", href: "/en/contact?subject=Custom Coffee Saint John" },
    ],
  },
  {
    name: "Prince Edward Island",
    cities: [
      { name: "Charlottetown", province: "PE", href: "/en/contact?subject=Custom Coffee Charlottetown" },
    ],
  },
  {
    name: "Newfoundland & Labrador",
    cities: [
      { name: "St. John's", province: "NL", href: "/en/contact?subject=Custom Coffee St. Johns" },
    ],
  },
];

const WHY_CARDS = [
  {
    title: "The only zero minimum in Canada",
    body: "No other custom coffee supplier in Canada offers a true zero minimum order. Order 1 bag to test your concept, or 10,000 to fill a retail rollout. EZPZ scales with you either way.",
  },
  {
    title: "Roasted fresh in Montreal",
    body: "Every order is roasted to order at Canadian Roasting Society in Montreal — never pre-packaged or sitting in a warehouse. Your customers get coffee at peak freshness every time.",
  },
  {
    title: "Full design included, always",
    body: "Custom bag design is included in every order at no extra cost. Bring your logo and brand colors — our team handles the rest. No designer fees, no print-ready files required.",
  },
];

const ALL_CITIES = PROVINCES.flatMap((p) => p.cities);

const LocationsPage = () => {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${BREADCRUMB_BASE}` },
      { "@type": "ListItem", position: 2, name: "Canadian Markets", item: `${BREADCRUMB_BASE}/locations` },
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
          <span className={styles.breadcrumbCurrent}>Canadian Markets</span>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.badge}>Roasted in Montreal. Delivered across Canada.</span>
          <span className={styles.eyebrow}>We ship across Canada</span>
          <h1 className={styles.heroTitle}>Custom coffee bags delivered anywhere in Canada.</h1>
          <p className={styles.heroSubtitle}>
            EZPZ ships your branded specialty coffee bags directly to your door — anywhere in Canada. No minimum order. Full design included. Find your city below.
          </p>
          <div className={styles.heroButtons}>
            <Link href="/en/design" className={styles.heroPrimary}>Design your bag</Link>
            <Link href="/en/contact" className={styles.heroSecondary}>Get a free quote</Link>
          </div>
        </div>
      </section>

      {/* ── US toggle ── */}
      <div className={styles.usaToggle}>
        <p className={styles.usaToggleText}>
          Looking for US cities?{" "}
          <Link href="/en/locations/usa" className={styles.usaToggleLink}>See our US locations page →</Link>
        </p>
      </div>

      {/* ── City grid ── */}
      <section className={styles.cities}>
        <div className={styles.citiesInner}>
          <span className={styles.eyebrow}>All Canadian markets</span>
          <h2 className={styles.sectionTitle}>Find your market.</h2>
          <p className={styles.sectionSubtitle}>Click your city to see how EZPZ serves businesses in your area.</p>

          {PROVINCES.map((provinceGroup) => (
            <div key={provinceGroup.name} className={styles.provinceBlock}>
              <p className={styles.provinceName}>{provinceGroup.name}</p>
              <div className={styles.cityGrid}>
                {provinceGroup.cities.map((city) => (
                  <Link key={city.name} href={city.href} className={styles.cityCard}>
                    {city.dedicated && (
                      <span className={styles.dedicatedBadge}>Dedicated page</span>
                    )}
                    <div className={styles.cityCardContent}>
                      <span className={styles.cityCardName}>{city.name}</span>
                      <span className={styles.cityCardProvince}>{city.province}</span>
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
            <span className={styles.statNumber}>10</span>
            <span className={styles.statLabel}>Provinces & territories</span>
          </div>
          <div>
            <span className={styles.statNumber}>40+</span>
            <span className={styles.statLabel}>Cities we ship to</span>
          </div>
          <div>
            <span className={styles.statNumber}>1</span>
            <span className={styles.statLabel}>Minimum order</span>
          </div>
        </div>
      </div>

      {/* ── Why EZPZ ── */}
      <section className={styles.why}>
        <div className={styles.whyInner}>
          <span className={styles.eyebrow}>Why EZPZ</span>
          <h2 className={styles.sectionTitleLight}>Why Canadian businesses choose EZPZ.</h2>
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
            EZPZ ships custom branded coffee bags to every province and territory in Canada. If your city is not listed, contact us and we will make it happen.
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
          <h2 className={styles.seoTitle}>Custom coffee bags by Canadian city</h2>
          <div className={styles.seoGrid}>
            {ALL_CITIES.map((city) => (
              <Link key={`${city.name}-${city.province}`} href={city.href} className={styles.seoLink}>
                Custom coffee bags — {city.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LocationsPage;
