import Link from "next/link";

import styles from "./industryPage.module.scss";

export interface CityIndustryPageData {
  canonicalPath: string; // e.g. "/en/custom-coffee-restaurants-toronto"
  city: {
    name: string;
    province: string;
    deliveryTime: string;
  };
  industry: {
    name: string;
    parentHref: string;
    parentLabel: string;
  };
  hero: {
    h1: string;
    subheadline: string;
    ctaSubject?: string;
  };
  aeoAnswer: string;
  why: {
    heading: string;
    paragraphs: string[];
  };
  useCases: {
    heading: string;
    items: { title: string; body: string }[];
  };
  localNote: string;
  faq: { q: string; a: string }[];
  siblings: { label: string; href: string }[];
  ctaClose: string;
  cityPageHref: string;
}

const BASE = "https://www.ezpz.coffee";

const CityIndustryPage = ({ data }: { data: CityIndustryPageData }) => {
  const fullUrl = `${BASE}${data.canonicalPath}`;
  const industryLower = data.industry.name.toLowerCase();

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${BASE}/en` },
      { "@type": "ListItem", position: 2, name: data.industry.parentLabel, item: `${BASE}${data.industry.parentHref}` },
      { "@type": "ListItem", position: 3, name: `${data.industry.name} · ${data.city.name}`, item: fullUrl },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Custom Coffee Bags for ${data.industry.name} in ${data.city.name}`,
    description: `EZPZ Coffee provides custom branded specialty coffee bags for ${industryLower} in ${data.city.name}, ${data.city.province}. No minimum order, designed to your brand, roasted to order in Montreal.`,
    url: fullUrl,
    provider: {
      "@type": "LocalBusiness",
      "@id": `${BASE}/#organization`,
      name: "EZPZ Coffee",
      url: BASE,
      address: {
        "@type": "PostalAddress",
        addressCountry: "CA",
        addressRegion: "QC",
        addressLocality: "Montreal",
      },
    },
    areaServed: {
      "@type": "City",
      name: data.city.name,
      containedInPlace: { "@type": "State", name: data.city.province },
    },
    offers: {
      "@type": "Offer",
      price: "11.75",
      priceCurrency: "CAD",
      description: "Starting price at 100 bags, zero minimum",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faq.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  return (
    <div className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ── Breadcrumb ── */}
      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <div className={styles.breadcrumbInner}>
          <Link href="/en" className={styles.breadcrumbLink}>Home</Link>
          <span className={styles.breadcrumbSep}>›</span>
          <Link href={data.industry.parentHref} className={styles.breadcrumbLink}>{data.industry.parentLabel}</Link>
          <span className={styles.breadcrumbSep}>›</span>
          <span className={styles.breadcrumbCurrent}>{data.city.name}</span>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.eyebrow}>{data.industry.name} · {data.city.name}, {data.city.province}</span>
          <h1 className={styles.heroTitle}>{data.hero.h1}</h1>
          <p className={styles.heroSubtitle}>{data.hero.subheadline}</p>
          <div className={styles.heroButtons}>
            <Link
              href={`/en/design`}
              className={styles.heroPrimary}
            >
              Design your bag free →
            </Link>
            <Link
              href={`/en/contact?subject=${encodeURIComponent(data.hero.ctaSubject ?? `Custom coffee for ${data.industry.name} in ${data.city.name}`)}`}
              className={styles.heroSecondary}
            >
              Talk to us
            </Link>
          </div>
        </div>
      </section>

      {/* ── AEO Direct-Answer Block ── */}
      <section className={styles.intro}>
        <div className={styles.introInner}>
          <div
            style={{
              background: "#fffbf5",
              border: "1px solid rgba(196,62,20,0.18)",
              borderLeft: "4px solid var(--color-accent)",
              borderRadius: "6px",
              padding: "1.25rem 1.5rem",
            }}
          >
            <p
              style={{
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--color-accent)",
                marginBottom: "0.5rem",
              }}
            >
              Quick answer
            </p>
            <p style={{ fontSize: "1.02rem", color: "#111111", lineHeight: 1.7, margin: 0, fontWeight: 500 }}>
              {data.aeoAnswer}
            </p>
          </div>
        </div>
      </section>

      {/* ── Why Section ── */}
      <section className={styles.who} style={{ background: "#ffffff" }}>
        <div className={styles.whoInner}>
          <h2 className={styles.sectionTitleLight}>{data.why.heading}</h2>
          {data.why.paragraphs.map((p, i) => (
            <p key={i} className={styles.introText} style={{ marginBottom: i < data.why.paragraphs.length - 1 ? "1.25rem" : 0 }}>
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* ── Use Cases ── */}
      <section className={styles.who}>
        <div className={styles.whoInner}>
          <h2 className={styles.sectionTitleLight}>{data.useCases.heading}</h2>
          <div className={styles.whoGrid}>
            {data.useCases.items.map(({ title, body }) => (
              <div key={title} className={styles.whoCard}>
                <h3 className={styles.whoCardTitle}>{title}</h3>
                <p className={styles.whoCardBody}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Local / Shipping Note ── */}
      <section className={styles.how}>
        <div className={styles.howInner}>
          <h2 className={styles.sectionTitle}>Ordering from {data.city.name}</h2>
          <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.72)", lineHeight: 1.75, maxWidth: "720px", margin: 0 }}>
            {data.localNote}
          </p>
          <div className={styles.heroButtons} style={{ marginTop: "var(--spacing-cluster)" }}>
            <Link href="/en/design" className={styles.heroPrimary}>Start designing →</Link>
            <Link href={data.cityPageHref} className={styles.heroSecondary}>
              All coffee for {data.city.name}
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className={styles.benefits}>
        <div className={styles.benefitsInner}>
          <h2 className={styles.sectionTitleLight}>
            Frequently Asked Questions
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--spacing-state)" }}>
            {data.faq.map(({ q, a }, i) => (
              <div
                key={i}
                style={{
                  borderBottom: i < data.faq.length - 1 ? "1px solid #e8e8e8" : "none",
                  paddingBottom: i < data.faq.length - 1 ? "var(--spacing-state)" : 0,
                }}
              >
                <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#111111", margin: "0 0 0.6rem" }}>{q}</h3>
                <p style={{ fontSize: "0.95rem", color: "#374151", lineHeight: 1.7, margin: 0 }}>{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related Pages ── */}
      <section className={styles.related}>
        <div className={styles.relatedInner}>
          <h2 className={styles.sectionTitleLight} style={{ fontSize: "1.1rem", marginBottom: "var(--spacing-state)" }}>
            More city & industry combinations
          </h2>
          <div className={styles.relatedGrid}>
            <Link href={data.industry.parentHref} className={styles.relatedLink}>
              All {data.industry.name}
            </Link>
            <Link href={data.cityPageHref} className={styles.relatedLink}>
              All of {data.city.name}
            </Link>
            {data.siblings.map(({ label, href }) => (
              <Link key={href} href={href} className={styles.relatedLink}>
                {label}
              </Link>
            ))}
            <Link href="/en/industries" className={styles.relatedLink}>Browse all industries →</Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>Ready to brand your coffee?</h2>
          <p className={styles.ctaSubtext}>{data.ctaClose}</p>
          <p className={styles.ctaSubtext} style={{ fontSize: "0.9rem", opacity: 0.65, marginTop: "-0.5rem" }}>
            Design your bag online in under 10 minutes. Zero minimum. Design included. Roasted in Montreal.
          </p>
          <div className={styles.ctaButtons}>
            <Link href="/en/design" className={styles.ctaPrimary}>Design your bag free →</Link>
            <Link href="/en/pricing" className={styles.ctaSecondary}>See pricing</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CityIndustryPage;
