"use client";

import Link from "next/link";
import { useLocale } from "next-intl";

import styles from "./cityPage.module.scss";
import { getCombosForCity } from "@/lib/programmatic-seo/data";

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
  whoWeServe?: { title: string; body: string }[];
  deliveryBody?: string;
  canonicalPath: string;
  allMarketsHref?: string;
  allMarketsLabel?: string;
  relatedCities?: { city: string; href: string }[];
  faq?: { q: string; a: string }[];
}

interface CityPageProps {
  data: CityPageData;
  frData?: CityPageData;
}

const CityPage = ({ data, frData }: CityPageProps) => {
  const locale = useLocale();
  const isFr = locale === "fr";
  const d = isFr && frData ? frData : data;

  const citySlug = d.canonicalPath.replace(/^\/custom-coffee-bags-/, "");
  const industryComboLinks = getCombosForCity(citySlug);

  const base = `https://www.ezpz.coffee/${locale}`;

  const faqSchema = d.faq && d.faq.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: d.faq.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  } : null;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: isFr ? "Accueil" : "Home", item: base },
      { "@type": "ListItem", position: 2, name: d.allMarketsLabel ?? (isFr ? "Marchés" : "Markets"), item: `${base}${d.allMarketsHref ?? "/locations"}` },
      { "@type": "ListItem", position: 3, name: `${isFr ? "Sacs de café personnalisés" : "Custom Coffee Bags"} ${d.city}`, item: `${base}${d.canonicalPath}` },
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `EZPZ Coffee — ${isFr ? "Sacs de café personnalisés" : "Custom Coffee Bags"} ${d.city}`,
    url: `${base}${d.canonicalPath}`,
    logo: "https://www.ezpz.coffee/logo.svg",
    image: "https://www.ezpz.coffee/_next/static/media/banner-01.15cqmow69pk9l.jpg",
    description: isFr
      ? `Sacs de café personnalisés pour les entreprises de ${d.city}. Aucun minimum de commande, design inclus, café de spécialité torréfié à Montréal et livré à ${d.city}, ${d.province}.`
      : `Custom branded coffee bags for ${d.city} businesses. No minimum order, full design included, specialty coffee roasted in Montreal and shipped to ${d.city}, ${d.province}.`,
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
    areaServed: d.city,
    telephone: "+15140000000",
  };

  return (
    <div className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />

      {/* ── Breadcrumb ── */}
      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <div className={styles.breadcrumbInner}>
          <Link href={`/${locale}`} className={styles.breadcrumbLink}>{isFr ? "Accueil" : "Home"}</Link>
          <span className={styles.breadcrumbSep}>›</span>
          <Link href={`/${locale}${d.allMarketsHref ?? "/locations"}`} className={styles.breadcrumbLink}>{d.allMarketsLabel ?? (isFr ? "Marchés" : "Markets")}</Link>
          <span className={styles.breadcrumbSep}>›</span>
          <span className={styles.breadcrumbCurrent}>{isFr ? "Sacs de café" : "Custom Coffee Bags"} {d.city}</span>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.eyebrow}>{d.eyebrow}</span>
          <h1 className={styles.heroTitle}>{d.headline}</h1>
          <p className={styles.heroSubtitle}>{d.subheadline}</p>
          <div className={styles.heroButtons}>
            <Link href={`/${locale}/design`} className={styles.heroPrimary}>{isFr ? "Créez votre sachet" : "Design your bag"}</Link>
            <Link href={`/${locale}/contact`} className={styles.heroSecondary}>{isFr ? "Obtenir une soumission gratuite" : "Get a free quote"}</Link>
          </div>
        </div>
      </section>

      {/* ── Intro ── */}
      <section className={styles.intro}>
        <div className={styles.introInner}>
          <p className={styles.introText}>{d.bodyIntro}</p>
          <Link href={`/${locale}${d.allMarketsHref ?? "/locations"}`} className={styles.allMarketsLink}>
            {isFr ? "← Voir tous les marchés que nous desservons" : "← See all markets we serve"}
          </Link>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className={styles.how}>
        <div className={styles.howInner}>
          <span className={styles.eyebrow}>{isFr ? "Comment ça marche" : "How it works"}</span>
          <h2 className={styles.sectionTitle}>{isFr ? "De l'idée à la livraison en moins de 3 semaines." : "From idea to delivery in under 3 weeks."}</h2>
          <div className={styles.howGrid}>
            {d.howItWorks.map((step) => (
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
          <span className={styles.eyebrow}>{isFr ? "Pourquoi EZPZ" : "Why EZPZ"}</span>
          <h2 className={styles.sectionTitleLight}>{isFr ? `Pourquoi les entreprises de ${d.city} choisissent EZPZ.` : `Why ${d.city} businesses choose EZPZ.`}</h2>
          <div className={styles.whyGrid}>
            {d.whyPoints.map((point) => (
              <div key={point.n} className={styles.whyCard}>
                <span className={styles.whyNumber}>{point.n}</span>
                <h3 className={styles.whyCardTitle}>{point.title}</h3>
                <p className={styles.whyCardBody}>{point.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who We Serve ── */}
      {d.whoWeServe && d.whoWeServe.length > 0 && (
        <section className={styles.why}>
          <div className={styles.whyInner}>
            <span className={styles.eyebrow}>{isFr ? "Qui nous choisit" : "Who we serve"}</span>
            <h2 className={styles.sectionTitleLight}>{isFr ? `Qui nous choisit à ${d.city}.` : `Who we serve in ${d.city}.`}</h2>
            <div className={styles.whyGrid}>
              {d.whoWeServe.map((item) => (
                <div key={item.title} className={styles.whyCard}>
                  <h3 className={styles.whyCardTitle}>{item.title}</h3>
                  <p className={styles.whyCardBody}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Delivery ── */}
      {d.deliveryBody && (
        <section className={styles.intro}>
          <div className={styles.introInner}>
            <span className={styles.eyebrow}>{isFr ? `Livraison à ${d.city}` : `Delivery to ${d.city}`}</span>
            <h2 style={{ fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)", fontWeight: 700, color: "#111", marginBottom: "1rem" }}>
              {isFr ? `Livré à votre porte à ${d.city}.` : `Delivered to your ${d.city} door.`}
            </h2>
            <p className={styles.introText}>{d.deliveryBody}</p>
          </div>
        </section>
      )}

      {/* ── FAQ ── */}
      {d.faq && d.faq.length > 0 && (
        <section className={styles.faq}>
          <div className={styles.faqInner}>
            <span className={styles.eyebrow}>FAQ</span>
            <h2 className={styles.faqHeading}>{isFr ? `Questions fréquentes sur les sacs de café personnalisés à ${d.city}.` : `Common questions about custom coffee bags in ${d.city}.`}</h2>
            <dl className={styles.faqList}>
              {d.faq.map(({ q, a }) => (
                <div key={q} className={styles.faqItem}>
                  <dt className={styles.faqQuestion}>{q}</dt>
                  <dd className={styles.faqAnswer}>{a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      )}

      {/* ── Industry combo pages ── */}
      {industryComboLinks.length > 0 && (
        <section className={styles.relatedPages} aria-labelledby="industry-combos-heading">
          <div className={styles.relatedPagesInner}>
            <span id="industry-combos-heading" className={styles.relatedPagesTitle}>{isFr ? `Par industrie à ${d.city}` : `By industry in ${d.city}`}</span>
            <div className={styles.relatedPagesGrid}>
              {industryComboLinks.map(({ label, href }) => (
                <Link key={href} href={href.replace("/en/", `/${locale}/`)} className={styles.relatedPageCard}>
                  {label} →
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Related Pages ── */}
      {d.relatedCities && d.relatedCities.length > 0 && (
        <section className={styles.relatedPages} aria-labelledby="related-pages-heading">
          <div className={styles.relatedPagesInner}>
            <span id="related-pages-heading" className={styles.relatedPagesTitle}>{isFr ? "Marchés connexes" : "Related Markets"}</span>
            <div className={styles.relatedPagesGrid}>
              <Link href={`/${locale}${d.allMarketsHref ?? "/locations"}`} className={styles.relatedPageCard}>
                ← {d.allMarketsLabel ?? (isFr ? "Tous les marchés canadiens" : "All Canadian Markets")}
              </Link>
              {d.relatedCities.map(({ city, href }) => (
                <Link key={city} href={href.replace("/en/", `/${locale}/`)} className={styles.relatedPageCard}>
                  {isFr ? "Sacs de café" : "Custom Coffee Bags"} {city} →
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>{isFr ? `Prêt à lancer votre marque de café à ${d.city} ?` : `Ready to launch your ${d.city} coffee brand?`}</h2>
          <p className={styles.ctaSubtext}>{isFr ? `Aucun minimum. Design inclus. Livré à ${d.city} en ${d.deliveryTime}.` : `No minimums. Full design included. Delivered to ${d.city} in ${d.deliveryTime}.`}</p>
          <div className={styles.ctaButtons}>
            <Link href={`/${locale}/design`} className={styles.ctaPrimary}>{isFr ? "Créez votre sachet" : "Design your bag"}</Link>
            <Link href={`/${locale}/contact`} className={styles.ctaSecondary}>{isFr ? "Obtenir une soumission gratuite" : "Get a free quote"}</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CityPage;
