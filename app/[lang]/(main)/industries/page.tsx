import type { Metadata } from "next";
import Link from "next/link";

import styles from "./industries.module.scss";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Custom Coffee Bags for Every Industry | EZPZ Coffee Canada",
    description:
      "EZPZ Coffee creates custom branded coffee bags for restaurants, hotels, gyms, spas, offices, and more. No minimum order. Full design included. Ships across Canada and the USA.",
    alternates: { canonical: "/en/industries" },
    openGraph: {
      title: "Custom Coffee Bags for Every Industry | EZPZ Coffee Canada",
      description: "Custom branded coffee bags for restaurants, hotels, gyms, spas, offices, and more. No minimum order. Full design included.",
      type: "website",
      url: "https://www.ezpz.coffee/en/industries",
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "Custom Coffee Bags for Every Industry" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Custom Coffee Bags for Every Industry | EZPZ Coffee",
      description: "No minimum order. Full design included. Ships across Canada and the USA.",
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const INDUSTRIES = [
  { icon: "🍽️", name: "Restaurants", desc: "Turn a meal into a lasting branded ritual.", href: "/en/custom-coffee-bags-restaurants" },
  { icon: "🏨", name: "Hotels", desc: "A premium in-room experience guests remember.", href: "/en/custom-coffee-bags-hotels" },
  { icon: "🛍️", name: "Boutiques", desc: "A high-margin retail product your customers love.", href: "/en/custom-coffee-bags-boutiques" },
  { icon: "🏋️", name: "Gyms", desc: "Fuel your members with your brand's own specialty coffee.", href: "/en/custom-coffee-bags-gyms" },
  { icon: "🧘", name: "Yoga Studios", desc: "Mindful mornings that start with your studio's blend.", href: "/en/custom-coffee-bags-yoga-studios" },
  { icon: "💆", name: "Spas", desc: "Extend your luxury experience into every morning at home.", href: "/en/custom-coffee-bags-spas" },
  { icon: "🏠", name: "Airbnb Hosts", desc: "The detail that turns a 4-star stay into a 5-star review.", href: "/en/custom-coffee-bags-airbnb" },
  { icon: "💼", name: "Corporate", desc: "The corporate gift your clients use every single morning.", href: "/en/custom-coffee-bags-corporate" },
  { icon: "🖥️", name: "Offices", desc: "Branded specialty coffee that reflects your company culture.", href: "/en/custom-coffee-bags-offices" },
  { icon: "🤝", name: "Co-working Spaces", desc: "Build community around your own branded specialty blend.", href: "/en/custom-coffee-bags-co-working-spaces" },
  { icon: "🔑", name: "Real Estate Agents", desc: "The closing gift clients remember for weeks.", href: "/en/custom-coffee-bags-real-estate-agents" },
  { icon: "⚖️", name: "Law Firms", desc: "A client gift as distinguished as your practice.", href: "/en/custom-coffee-bags-law-firms" },
  { icon: "🦷", name: "Dental Offices", desc: "The most ironic — and most memorable — patient gift.", href: "/en/custom-coffee-bags-dental-offices" },
  { icon: "🏥", name: "Medical Clinics", desc: "Show patients you care beyond the appointment.", href: "/en/custom-coffee-bags-medical-clinics" },
  { icon: "🎓", name: "Universities", desc: "Alumni engagement in every morning cup.", href: "/en/custom-coffee-bags-universities" },
  { icon: "⛳", name: "Golf Clubs", desc: "The premium member gift for those who have everything.", href: "/en/custom-coffee-bags-golf-clubs" },
  { icon: "👑", name: "Country Clubs", desc: "A member gift as exclusive as your club.", href: "/en/custom-coffee-bags-country-clubs" },
  { icon: "🍷", name: "Wineries", desc: "Your terroir story. Now in coffee form.", href: "/en/custom-coffee-bags-wineries" },
  { icon: "🍺", name: "Breweries", desc: "You nailed the craft beer. Now nail the morning after.", href: "/en/custom-coffee-bags-breweries" },
  { icon: "💒", name: "Wedding Venues", desc: "A wedding favor every guest uses for weeks.", href: "/en/custom-coffee-bags-wedding-venues" },
  { icon: "📋", name: "Event Planners", desc: "The event favor nobody throws away.", href: "/en/custom-coffee-bags-event-planners" },
  { icon: "🍳", name: "Catering Companies", desc: "A branded premium add-on for every morning event.", href: "/en/custom-coffee-bags-catering-companies" },
  { icon: "🚚", name: "Food Trucks", desc: "Branded merch your superfans buy at the window.", href: "/en/custom-coffee-bags-food-trucks" },
  { icon: "📦", name: "Subscription Boxes", desc: "A white-label product your subscribers will love monthly.", href: "/en/custom-coffee-bags-subscription-boxes" },
];

const BREADCRUMB_BASE = "https://www.ezpz.coffee/en";

const IndustriesPage = () => {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${BREADCRUMB_BASE}` },
      { "@type": "ListItem", position: 2, name: "Industries", item: `${BREADCRUMB_BASE}/industries` },
    ],
  };

  return (
    <div className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* ── Breadcrumb ── */}
      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <div className={styles.breadcrumbInner}>
          <Link href="/en" className={styles.breadcrumbLink}>Home</Link>
          <span className={styles.breadcrumbSep}>›</span>
          <span className={styles.breadcrumbCurrent}>Industries we serve</span>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.badge}>Industries we serve</span>
          <h1 className={styles.heroTitle}>Whatever your business. Your brand on specialty coffee.</h1>
          <p className={styles.heroSubtitle}>
            From Montreal restaurants to Los Angeles wellness studios — EZPZ helps every kind of business launch their own branded coffee product with zero minimum order.
          </p>
          <div className={styles.heroButtons}>
            <Link href="/en/design" className={styles.heroPrimary}>Design your bag</Link>
            <Link href="/en/contact" className={styles.heroSecondary}>Get a free quote</Link>
          </div>
        </div>
      </section>

      {/* ── Industry grid ── */}
      <section className={styles.industries}>
        <div className={styles.industriesInner}>
          <span className={styles.eyebrow}>All industries</span>
          <h2 className={styles.sectionTitle}>Find your industry.</h2>
          <p className={styles.sectionSubtitle}>Click your industry to see how EZPZ serves businesses like yours.</p>

          <div className={styles.industryGrid}>
            {INDUSTRIES.map((industry) => (
              <Link key={industry.name} href={industry.href} className={styles.industryCard}>
                <span className={styles.industryCardIcon}>{industry.icon}</span>
                <span className={styles.industryCardName}>{industry.name}</span>
                <p className={styles.industryCardDesc}>{industry.desc}</p>
                <span className={styles.industryCardArrow}>Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>Don&apos;t see your industry? We work with everyone.</h2>
          <p className={styles.ctaSubtext}>
            If your business isn&apos;t listed, reach out. EZPZ ships custom branded specialty coffee to any business, anywhere in Canada and the USA.
          </p>
          <Link href="/en/contact" className={styles.ctaButton}>Get a free quote</Link>
        </div>
      </section>

      {/* ── SEO text links ── */}
      <section className={styles.seoSection}>
        <div className={styles.seoInner}>
          <h2 className={styles.seoTitle}>Custom coffee bags by industry</h2>
          <div className={styles.seoGrid}>
            {INDUSTRIES.map((industry) => (
              <Link key={industry.name} href={industry.href} className={styles.seoLink}>
                Custom coffee bags for {industry.name.toLowerCase()}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndustriesPage;
