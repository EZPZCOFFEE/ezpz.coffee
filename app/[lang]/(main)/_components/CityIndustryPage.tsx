"use client";

import Link from "next/link";
import { useLocale } from "next-intl";

import styles from "./industryPage.module.scss";

export interface CityIndustryPageData {
  canonicalPath: string;
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

interface CityIndustryPageProps {
  data: CityIndustryPageData;
  frData?: CityIndustryPageData;
}

const BASE = "https://www.ezpz.coffee";

const CityIndustryPage = ({ data, frData }: CityIndustryPageProps) => {
  const locale = useLocale();
  const isFr = locale === "fr";
  const d = isFr && frData ? frData : data;

  const fullUrl = `${BASE}/${locale}${d.canonicalPath.replace(/^\/(en|fr)/, "")}`;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: isFr ? "Accueil" : "Home", item: `${BASE}/${locale}` },
      { "@type": "ListItem", position: 2, name: d.industry.parentLabel, item: `${BASE}${d.industry.parentHref.replace(/^\/(en|fr)\//, `/${locale}/`)}` },
      { "@type": "ListItem", position: 3, name: `${d.industry.name} · ${d.city.name}`, item: fullUrl },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: isFr
      ? `Sacs de café personnalisés pour les ${d.industry.name.toLowerCase()} à ${d.city.name}`
      : `Custom Coffee Bags for ${d.industry.name} in ${d.city.name}`,
    description: isFr
      ? `EZPZ Coffee fournit des sacs de café de spécialité personnalisés pour les ${d.industry.name.toLowerCase()} à ${d.city.name}, ${d.city.province}. Aucun minimum de commande, design inclus, torréfié à Montréal.`
      : `EZPZ Coffee provides custom branded specialty coffee bags for ${d.industry.name.toLowerCase()} in ${d.city.name}, ${d.city.province}. No minimum order, designed to your brand, roasted to order in Montreal.`,
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
      name: d.city.name,
      containedInPlace: { "@type": "State", name: d.city.province },
    },
    offers: {
      "@type": "Offer",
      price: "11.75",
      priceCurrency: "CAD",
      description: isFr ? "Prix de départ à 100 sacs, aucun minimum" : "Starting price at 100 bags, zero minimum",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: d.faq.map(({ q, a }) => ({
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
          <Link href={`/${locale}`} className={styles.breadcrumbLink}>{isFr ? "Accueil" : "Home"}</Link>
          <span className={styles.breadcrumbSep}>›</span>
          <Link href={d.industry.parentHref.replace(/^\/(en|fr)\//, `/${locale}/`)} className={styles.breadcrumbLink}>{d.industry.parentLabel}</Link>
          <span className={styles.breadcrumbSep}>›</span>
          <span className={styles.breadcrumbCurrent}>{d.city.name}</span>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.eyebrow}>{d.industry.name} · {d.city.name}, {d.city.province}</span>
          <h1 className={styles.heroTitle}>{d.hero.h1}</h1>
          <p className={styles.heroSubtitle}>{d.hero.subheadline}</p>
          <div className={styles.heroButtons}>
            <Link href={`/${locale}/design`} className={styles.heroPrimary}>
              {isFr ? "Créez votre sachet gratuitement →" : "Design your bag free →"}
            </Link>
            <Link
              href={`/${locale}/contact?subject=${encodeURIComponent(d.hero.ctaSubject ?? (isFr ? `Café personnalisé pour les ${d.industry.name.toLowerCase()} à ${d.city.name}` : `Custom coffee for ${d.industry.name} in ${d.city.name}`))}`}
              className={styles.heroSecondary}
            >
              {isFr ? "Parlons-en" : "Talk to us"}
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
            <p style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-accent)", marginBottom: "0.5rem" }}>
              {isFr ? "Réponse rapide" : "Quick answer"}
            </p>
            <p style={{ fontSize: "1.02rem", color: "#111111", lineHeight: 1.7, margin: 0, fontWeight: 500 }}>
              {d.aeoAnswer}
            </p>
          </div>
        </div>
      </section>

      {/* ── Why Section ── */}
      <section className={styles.who} style={{ background: "#ffffff" }}>
        <div className={styles.whoInner}>
          <h2 className={styles.sectionTitleLight}>{d.why.heading}</h2>
          {d.why.paragraphs.map((p, i) => (
            <p key={i} className={styles.introText} style={{ marginBottom: i < d.why.paragraphs.length - 1 ? "1.25rem" : 0 }}>
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* ── Use Cases ── */}
      <section className={styles.who}>
        <div className={styles.whoInner}>
          <h2 className={styles.sectionTitleLight}>{d.useCases.heading}</h2>
          <div className={styles.whoGrid}>
            {d.useCases.items.map(({ title, body }) => (
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
          <h2 className={styles.sectionTitle}>{isFr ? `Commander depuis ${d.city.name}` : `Ordering from ${d.city.name}`}</h2>
          <p style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.72)", lineHeight: 1.75, maxWidth: "720px", margin: 0 }}>
            {d.localNote}
          </p>
          <div className={styles.heroButtons} style={{ marginTop: "var(--spacing-cluster)" }}>
            <Link href={`/${locale}/design`} className={styles.heroPrimary}>{isFr ? "Commencer le design →" : "Start designing →"}</Link>
            <Link href={d.cityPageHref.replace(/^\/(en|fr)\//, `/${locale}/`)} className={styles.heroSecondary}>
              {isFr ? `Tout sur ${d.city.name}` : `All coffee for ${d.city.name}`}
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className={styles.benefits}>
        <div className={styles.benefitsInner}>
          <h2 className={styles.sectionTitleLight}>{isFr ? "Questions fréquentes" : "Frequently Asked Questions"}</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "var(--spacing-state)" }}>
            {d.faq.map(({ q, a }, i) => (
              <div key={i} style={{ borderBottom: i < d.faq.length - 1 ? "1px solid #e8e8e8" : "none", paddingBottom: i < d.faq.length - 1 ? "var(--spacing-state)" : 0 }}>
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
            {isFr ? "Plus de combinaisons ville et industrie" : "More city & industry combinations"}
          </h2>
          <div className={styles.relatedGrid}>
            <Link href={d.industry.parentHref.replace(/^\/(en|fr)\//, `/${locale}/`)} className={styles.relatedLink}>
              {isFr ? `Tous les ${d.industry.name.toLowerCase()}` : `All ${d.industry.name}`}
            </Link>
            <Link href={d.cityPageHref.replace(/^\/(en|fr)\//, `/${locale}/`)} className={styles.relatedLink}>
              {isFr ? `Tout sur ${d.city.name}` : `All of ${d.city.name}`}
            </Link>
            {d.siblings.map(({ label, href }) => (
              <Link key={href} href={href.replace(/^\/(en|fr)\//, `/${locale}/`)} className={styles.relatedLink}>
                {label}
              </Link>
            ))}
            <Link href={`/${locale}/industries`} className={styles.relatedLink}>{isFr ? "Explorer toutes les industries →" : "Browse all industries →"}</Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>{isFr ? "Prêt à marquer votre café ?" : "Ready to brand your coffee?"}</h2>
          <p className={styles.ctaSubtext}>{d.ctaClose}</p>
          <p className={styles.ctaSubtext} style={{ fontSize: "0.9rem", opacity: 0.65, marginTop: "-0.5rem" }}>
            {isFr
              ? "Créez votre sachet en ligne en moins de 10 minutes. Zéro minimum. Design inclus. Torréfié à Montréal."
              : "Design your bag online in under 10 minutes. Zero minimum. Design included. Roasted in Montreal."}
          </p>
          <div className={styles.ctaButtons}>
            <Link href={`/${locale}/design`} className={styles.ctaPrimary}>{isFr ? "Créez votre sachet gratuitement →" : "Design your bag free →"}</Link>
            <Link href={`/${locale}${isFr ? "/tarifs" : "/pricing"}`} className={styles.ctaSecondary}>{isFr ? "Voir les tarifs" : "See pricing"}</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CityIndustryPage;
