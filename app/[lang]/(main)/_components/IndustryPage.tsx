import Link from "next/link";

import styles from "./industryPage.module.scss";

export interface IndustryPageData {
  industry: string;
  eyebrow: string;
  headline: string;
  subheadline: string;
  intro: string;
  whoOrders: { title: string; body: string }[];
  howItWorks: { n: string; title: string; body: string }[];
  benefits: { n: string; title: string; body: string }[];
  testimonial: { quote: string; author: string; role: string };
  canonicalPath: string;
}

const BREADCRUMB_BASE = "https://www.ezpz.coffee/en";

const HOW_IT_WORKS_DEFAULT = [
  { n: "01", title: "Design your bag online", body: "Upload your logo, choose your packaging style, and add your message. Our online tool takes under 10 minutes." },
  { n: "02", title: "Choose your coffee", body: "Select from our traceable specialty coffees — light, medium, or dark roast from Ethiopia, Colombia, Brazil, and more." },
  { n: "03", title: "We roast fresh in Montreal", body: "Your coffee is roasted to order at Canadian Roasting Society in Montreal and packed in your custom branded bag. No minimum required." },
  { n: "04", title: "Delivered across Canada & the USA", body: "We ship directly to your door via tracked international courier. Canada in 3–10 days. USA in 7–14 days." },
];

const IndustryPage = ({ data }: { data: IndustryPageData }) => {
  const howItWorks = data.howItWorks ?? HOW_IT_WORKS_DEFAULT;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${BREADCRUMB_BASE}` },
      { "@type": "ListItem", position: 2, name: "Industries", item: `${BREADCRUMB_BASE}/industries` },
      { "@type": "ListItem", position: 3, name: `Custom Coffee Bags for ${data.industry}`, item: `${BREADCRUMB_BASE}${data.canonicalPath}` },
    ],
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `Custom Coffee Bags for ${data.industry}`,
    description: `Custom branded specialty coffee bags for ${data.industry.toLowerCase()}. No minimum order. Full design included. Roasted fresh in Montreal and shipped across Canada and the USA.`,
    brand: { "@type": "Brand", name: "EZPZ Coffee" },
    url: `https://www.ezpz.coffee/en${data.canonicalPath}`,
    offers: {
      "@type": "Offer",
      priceCurrency: "CAD",
      availability: "https://schema.org/InStock",
      seller: { "@type": "Organization", name: "EZPZ Coffee" },
    },
  };

  return (
    <div className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />

      {/* ── Breadcrumb ── */}
      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <div className={styles.breadcrumbInner}>
          <Link href="/en" className={styles.breadcrumbLink}>Home</Link>
          <span className={styles.breadcrumbSep}>›</span>
          <Link href="/en/industries" className={styles.breadcrumbLink}>Industries</Link>
          <span className={styles.breadcrumbSep}>›</span>
          <span className={styles.breadcrumbCurrent}>{data.industry}</span>
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
          <p className={styles.introText}>{data.intro}</p>
          <Link href="/en/industries" className={styles.backLink}>← All industries we serve</Link>
        </div>
      </section>

      {/* ── Who Orders This ── */}
      <section className={styles.who}>
        <div className={styles.whoInner}>
          <span className={styles.eyebrow}>Who orders this</span>
          <h2 className={styles.sectionTitleLight}>Who orders custom coffee bags for {data.industry.toLowerCase()}.</h2>
          <div className={styles.whoGrid}>
            {data.whoOrders.map((item) => (
              <div key={item.title} className={styles.whoCard}>
                <h3 className={styles.whoCardTitle}>{item.title}</h3>
                <p className={styles.whoCardBody}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className={styles.how}>
        <div className={styles.howInner}>
          <span className={styles.eyebrow}>How it works</span>
          <h2 className={styles.sectionTitle}>From idea to delivery in under 3 weeks.</h2>
          <div className={styles.howGrid}>
            {howItWorks.map((step) => (
              <div key={step.n} className={styles.howStep}>
                <span className={styles.howNumber}>{step.n}</span>
                <h3 className={styles.howStepTitle}>{step.title}</h3>
                <p className={styles.howStepBody}>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Benefits ── */}
      <section className={styles.benefits}>
        <div className={styles.benefitsInner}>
          <span className={styles.eyebrow}>Why it works</span>
          <h2 className={styles.sectionTitleLight}>Why custom coffee works for {data.industry.toLowerCase()}.</h2>
          <div className={styles.benefitsGrid}>
            {data.benefits.map((b) => (
              <div key={b.n} className={styles.benefitCard}>
                <span className={styles.benefitNumber}>{b.n}</span>
                <h3 className={styles.benefitTitle}>{b.title}</h3>
                <p className={styles.benefitBody}>{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonial ── */}
      <section className={styles.testimonial}>
        <div className={styles.testimonialInner}>
          <p className={styles.testimonialQuote}>{data.testimonial.quote}</p>
          <p className={styles.testimonialAuthor}>{data.testimonial.author}</p>
          <p className={styles.testimonialRole}>{data.testimonial.role}</p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>Ready to launch your {data.industry.toLowerCase()} coffee brand?</h2>
          <p className={styles.ctaSubtext}>No minimum order. Full design included. Shipped across Canada and the USA.</p>
          <div className={styles.ctaButtons}>
            <Link href="/en/design" className={styles.ctaPrimary}>Design your bag</Link>
            <Link href="/en/contact" className={styles.ctaSecondary}>Get a free quote</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndustryPage;
