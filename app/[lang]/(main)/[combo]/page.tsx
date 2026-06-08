import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";

import {
  COMBOS,
  CITIES,
  INDUSTRIES,
  PRODUCTS,
  getComboSlug,
  parseComboSlug,
  type CityData,
  type IndustryData,
  type ProductData,
} from "@/lib/programmatic-seo/data";
import { baseUrl } from "@utils/base-url";
import styles from "../_components/resourcePage.module.scss";

export const dynamicParams = false;

export async function generateStaticParams() {
  return COMBOS.map((combo) => ({ combo: getComboSlug(combo) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ combo: string; lang: string }>;
}): Promise<Metadata> {
  const { combo: comboSlug } = await params;
  const parsed = parseComboSlug(comboSlug);
  if (!parsed) return {};

  const { product, industry, city } = parsed;
  const regionLabel = city.country === "CA" ? city.region : city.region;
  const title = `${product.name} for ${industry.namePlural} in ${city.name}, ${regionLabel} | EZPZ Coffee`;
  const description = `${product.name} designed specifically for ${city.name} ${industry.namePlural.toLowerCase()}. ${product.moq}, ${product.turnaround} turnaround. Full design included. ${city.marketInsight.split("—")[0].trim()}.`;
  const canonical = `/en/${comboSlug}`;
  const ogImage = "/assets/banner-01.jpg";

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      type: "website",
      url: `${baseUrl}${canonical}`,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

function buildJsonLd(
  product: ProductData,
  industry: IndustryData,
  city: CityData,
  comboSlug: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${product.name} for ${industry.namePlural} — ${city.name}`,
    description: `${product.bodyIntro} Serving ${industry.namePlural.toLowerCase()} in ${city.name}, ${city.region}.`,
    provider: {
      "@type": "Organization",
      name: "EZPZ Coffee",
      url: baseUrl,
    },
    areaServed: {
      "@type": "City",
      name: city.name,
      containedInPlace: {
        "@type": city.country === "CA" ? "Province" : "State",
        name: city.region,
      },
    },
    serviceType: product.name,
    offers: {
      "@type": "Offer",
      priceCurrency: city.country === "CA" ? "CAD" : "USD",
      description: `Starting at ${product.priceRange}, minimum order ${product.moq}`,
    },
    url: `${baseUrl}/en/${comboSlug}`,
  };
}

function buildPageContent(
  product: ProductData,
  industry: IndustryData,
  city: CityData
): { heading: string; paragraphs: string[] }[] {
  const cityIndustryContext =
    city.industryContext[industry.slug] ||
    `${city.name}'s ${industry.namePlural.toLowerCase()} operate in a competitive market where brand differentiation is critical.`;

  const currencyNote =
    city.country === "CA"
      ? "All pricing in CAD. Free shipping across Canada."
      : "Shipping to the US available. Contact us for USD pricing.";

  return [
    {
      heading: `Why ${city.name} ${industry.namePlural} choose branded coffee`,
      paragraphs: [
        cityIndustryContext,
        industry.painPoint,
        `${city.coffeeContext} This means that when a ${industry.name.toLowerCase()} in ${city.name} invests in ${product.shortName}, the market is primed to notice—and respond. The difference between a generic bag and a well-designed one isn't just aesthetic. It's the difference between a customer who forgets you and one who becomes a regular.`,
      ],
    },
    {
      heading: `How ${product.name} work for ${industry.namePlural}`,
      paragraphs: [
        product.bodyIntro,
        `For ${industry.namePlural.toLowerCase()}, the practical applications are wide-ranging. ${industry.useCase}`,
        `${industry.brandBenefit} ${industry.stat}`,
      ],
    },
    {
      heading: `The EZPZ process — simple by design`,
      paragraphs: [
        `Getting started with ${product.shortName} for your ${city.name} ${industry.name.toLowerCase()} takes less time than you'd expect. You send us your logo and brand colours. We handle the rest — artwork, print, roasting, and shipping. No design experience required, no minimum order anxiety.`,
        `Our turnaround is ${product.turnaround} from artwork approval. With a ${product.moq} minimum and ${product.priceRange} per bag depending on quantity and customization level, ${product.shortName} are within reach for independent ${industry.namePlural.toLowerCase()} and enterprise brands alike. ${currencyNote}`,
        `Every bag comes with specialty-grade coffee, roasted fresh in Montreal and shipped directly to your door. We source responsibly and roast to order — so whether you're ordering 1 bag for a soft launch or 500 for a seasonal gift program, quality is consistent across every single unit.`,
      ],
    },
    {
      heading: `What sets ${city.name} brands apart`,
      paragraphs: [
        city.marketInsight,
        `${industry.namePlural} in ${city.name} that invest in brand consistency — across their physical space, their service, and their take-home touchpoints — build the kind of loyal customer relationships that are impossible to buy with advertising alone. ${product.shortName} are one of the lowest-effort, highest-visibility ways to extend that brand into daily life.`,
        `The neighborhoods and communities that make ${city.name} unique — ${city.neighborhoods.slice(0, 3).join(", ")} — are also the places where customers are most likely to share what they're consuming on social media. A distinctive ${product.shortName} bag in someone's kitchen photo, in a flat lay, or on a gift table is organic brand exposure that money can't easily replicate.`,
      ],
    },
    {
      heading: `Ready to get started?`,
      paragraphs: [
        `Whether you're a single-location ${industry.name.toLowerCase()} or a growing group, EZPZ makes it easy to launch ${product.shortName} with zero friction. No minimums to hit, no agency to hire, no long-term commitment. Just great coffee, your brand, and a supplier that moves as fast as you do.`,
        `${industry.cta} — or explore the full range of custom options at EZPZ Coffee.`,
      ],
    },
  ];
}

export default async function ComboPage({
  params,
}: {
  params: Promise<{ combo: string; lang: string }>;
}) {
  const { combo: comboSlug } = await params;
  const parsed = parseComboSlug(comboSlug);
  if (!parsed) notFound();

  const { product, industry, city } = parsed;
  const sections = buildPageContent(product, industry, city);
  const jsonLd = buildJsonLd(product, industry, city, comboSlug);

  const regionLabel = city.country === "CA" ? city.region : city.region;
  const heroTitle = `${product.name} for ${industry.namePlural} in ${city.name}`;
  const heroSubtitle = `${product.tagline} Built for ${city.name} ${industry.namePlural.toLowerCase()}.`;

  const relatedCombos = COMBOS.filter(
    (c) =>
      getComboSlug(c) !== comboSlug &&
      (c.city === city.slug || c.industry === industry.slug) &&
      c.product === product.slug
  ).slice(0, 8);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className={styles.page}>
        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroInner}>
            <span className={styles.heroCategory}>
              {city.name}, {regionLabel} · {industry.namePlural}
            </span>
            <h1 className={styles.heroTitle}>{heroTitle}</h1>
            <p className={styles.heroSubtitle}>{heroSubtitle}</p>
            <div className={styles.heroMeta}>
              <span>Starting at {product.priceRange}</span>
              <span className={styles.heroMetaDot} />
              <span>Min. {product.moq}</span>
              <span className={styles.heroMetaDot} />
              <span>{product.turnaround} turnaround</span>
            </div>
          </div>
        </section>

        {/* Stat band */}
        <section className={styles.statBand}>
          <div className={styles.statBandInner}>
            <div className={styles.statGrid} style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
              <div className={styles.statCard}>
                <span className={styles.statValue}>{product.moq}</span>
                <p className={styles.statLabel}>Minimum order — start small, scale fast</p>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statValue}>{product.turnaround}</span>
                <p className={styles.statLabel}>Turnaround from artwork approval</p>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statValue}>$0</span>
                <p className={styles.statLabel}>Design fee — artwork included in every order</p>
              </div>
            </div>
          </div>
        </section>

        {/* TOC layout */}
        <div className={styles.tocLayout}>
          <aside className={styles.tocSidebar}>
            <p className={styles.tocHeading}>Contents</p>
            <ul className={styles.tocList}>
              {sections.map((s, i) => (
                <li key={i}>
                  <a href={`#section-${i}`} className={styles.tocLink}>
                    {s.heading}
                  </a>
                </li>
              ))}
            </ul>
          </aside>

          <article className={styles.tocArticle}>
            {sections.map((s, i) => (
              <section key={i} id={`section-${i}`}>
                <h2 className={styles.sectionHeading}>{s.heading}</h2>
                {s.paragraphs.map((p, j) => (
                  <p key={j} className={styles.bodyText}>
                    {p}
                  </p>
                ))}
              </section>
            ))}
          </article>
        </div>

        {/* CTA */}
        <section className={styles.cta}>
          <div className={styles.ctaInner}>
            <h2 className={styles.ctaTitle}>
              Ready to brand your coffee in {city.name}?
            </h2>
            <p className={styles.ctaSubtext}>
              {product.moq} minimum. {product.turnaround} turnaround. Full design included.
              No commitment required — just great coffee with your name on it.
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/en/contact" className={styles.ctaPrimary}>
                Get a free quote
              </Link>
              <Link href="/en/shop" className={styles.ctaSecondary}>
                Browse samples
              </Link>
            </div>
          </div>
        </section>

        {/* Related combos */}
        {relatedCombos.length > 0 && (
          <section className={styles.relatedSection}>
            <div className={styles.relatedInner}>
              <p className={styles.relatedHeading}>Related pages</p>
              <div className={styles.relatedGrid}>
                {relatedCombos.map((c) => {
                  const slug = getComboSlug(c);
                  const cityData = CITIES[c.city];
                  const industryData = INDUSTRIES[c.industry];
                  const label = `${PRODUCTS[c.product].shortName} for ${industryData.namePlural} — ${cityData.name}`;
                  return (
                    <Link key={slug} href={`/en/${slug}`} className={styles.relatedLink}>
                      {label}
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        )}
      </main>
    </>
  );
}
