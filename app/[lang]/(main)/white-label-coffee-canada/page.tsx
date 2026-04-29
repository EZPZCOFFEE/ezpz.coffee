import type { Metadata } from "next";
import Link from "next/link";

import styles from "./whiteLabelCanada.module.scss";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "White Label Coffee Canada | No Minimum | Full Design Included | EZPZ",
    description:
      "White label coffee solutions for Canadian businesses. Custom branded bags, no minimum order, full design included. Roasted fresh in Montreal, shipped across Canada. EZPZ.",
    alternates: { canonical: "/en/white-label-coffee-canada" },
    openGraph: {
      title: "White Label Coffee Canada | No Minimum | Full Design Included | EZPZ",
      description:
        "White label coffee solutions for Canadian businesses. Custom branded bags, no minimum order, full design included. Roasted fresh in Montreal, shipped across Canada.",
      type: "website",
      url: "https://www.ezpz.coffee/en/white-label-coffee-canada",
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "White Label Coffee Canada" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "White Label Coffee Canada | No Minimum | EZPZ",
      description: "White label coffee solutions for Canadian businesses. No minimum order, design included.",
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const BREADCRUMB_BASE = "https://www.ezpz.coffee/en";

const PRODUCTS = [
  {
    icon: "☕",
    title: "Custom branded coffee bags",
    body: "Put your logo, brand name, and messaging on specialty grade coffee bags. Choose your roast profile, origin, and packaging style. No minimum order.",
  },
  {
    icon: "🥤",
    title: "Ready-to-drink cold brew",
    body: "White label cold brew coffee in cans or bottles, branded with your label. A turnkey product for cafes, gyms, retailers, and hospitality brands.",
  },
  {
    icon: "💊",
    title: "Branded coffee capsules",
    body: "Compatible with Nespresso and Keurig systems. Custom-branded capsules filled with specialty grade coffee, roasted fresh in Montreal.",
  },
];

const WHO = [
  {
    title: "Restaurants and cafes",
    body: "Offer your guests coffee under your own brand. From table service to retail bags at the counter — EZPZ handles the product, you keep the margin.",
  },
  {
    title: "Hotels and hospitality",
    body: "Put branded coffee in every room and at every continental breakfast. Elevate the guest experience without sourcing minimums or managing inventory.",
  },
  {
    title: "Retailers and boutiques",
    body: "Add a premium private label coffee to your product lineup. No warehouse, no upfront buy-in — just your brand on great coffee.",
  },
  {
    title: "Corporate and gifting",
    body: "Custom branded coffee for client gifts, welcome kits, events, and swag. Order one bag or a thousand — we scale with your needs.",
  },
];

const HOW = [
  {
    n: "01",
    title: "Design your bag online",
    body: "Upload your logo, choose your packaging style, and add your messaging. Our online tool makes it easy in under 10 minutes. No design experience required.",
  },
  {
    n: "02",
    title: "We finalize the design",
    body: "Our team reviews and refines your bag design at no extra cost. You approve the final proof before anything goes to production.",
  },
  {
    n: "03",
    title: "Roasted fresh in Montreal",
    body: "Your coffee is roasted to order at Canadian Roasting Society in Montreal and packed in your custom branded bag. No minimums, no pre-packaged stock.",
  },
  {
    n: "04",
    title: "Shipped anywhere in Canada",
    body: "From Montreal to your door in 5 to 10 business days depending on your location. Fully tracked, coast to coast.",
  },
];

const WhiteLabelCanadaPage = () => {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${BREADCRUMB_BASE}` },
      { "@type": "ListItem", position: 2, name: "White Label Coffee Canada", item: `${BREADCRUMB_BASE}/white-label-coffee-canada` },
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
          <span className={styles.breadcrumbCurrent}>White Label Coffee Canada</span>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.eyebrow}>White Label Coffee — Canada</span>
          <h1 className={styles.heroTitle}>White label coffee solutions for Canadian brands.</h1>
          <p className={styles.heroSubtitle}>
            Your brand on specialty grade coffee. No minimum order, full design included, roasted fresh in Montreal and shipped anywhere in Canada.
          </p>
          <div className={styles.heroButtons}>
            <Link href="/en/design" className={styles.heroPrimary}>Design your bag</Link>
            <Link href="/en/contact" className={styles.heroSecondary}>Get a free quote</Link>
          </div>
        </div>
      </section>

      {/* ── Intro ── */}
      <section className={styles.intro}>
        <div className={styles.introInner}>
          <p className={styles.introText}>
            White label coffee is one of the most accessible ways for a Canadian business to create a premium branded product. Whether you run a restaurant, a hotel, a boutique, or a corporate gifting program — putting your brand on great coffee builds loyalty, drives repeat revenue, and gives your customers something tangible to take home. EZPZ is the only white label coffee supplier in Canada with a genuine zero minimum order, full custom bag design included in every order, and 100% traceable specialty grade coffee roasted fresh in Montreal. No setup fees, no warehousing costs, no locked-in volume commitments.
          </p>
        </div>
      </section>

      {/* ── Products ── */}
      <section className={styles.products}>
        <div className={styles.productsInner}>
          <span className={styles.eyebrow}>What we offer</span>
          <h2 className={styles.sectionTitleLight}>White label coffee products for every format.</h2>
          <div className={styles.productGrid}>
            {PRODUCTS.map((p) => (
              <div key={p.title} className={styles.productCard}>
                <span className={styles.productIcon}>{p.icon}</span>
                <h3 className={styles.productTitle}>{p.title}</h3>
                <p className={styles.productBody}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who is this for ── */}
      <section className={styles.who}>
        <div className={styles.whoInner}>
          <span className={styles.eyebrow}>Who it's for</span>
          <h2 className={styles.sectionTitle}>Built for Canadian businesses of every size.</h2>
          <div className={styles.whoGrid}>
            {WHO.map((w) => (
              <div key={w.title} className={styles.whoCard}>
                <h3 className={styles.whoCardTitle}>{w.title}</h3>
                <p className={styles.whoCardBody}>{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className={styles.how}>
        <div className={styles.howInner}>
          <span className={styles.eyebrowDark}>How it works</span>
          <h2 className={styles.sectionTitleDark}>From concept to delivery in under two weeks.</h2>
          <div className={styles.howGrid}>
            {HOW.map((step) => (
              <div key={step.n} className={styles.howStep}>
                <span className={styles.howNumber}>{step.n}</span>
                <h3 className={styles.howStepTitle}>{step.title}</h3>
                <p className={styles.howStepBody}>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>Ready to launch your white label coffee brand?</h2>
          <p className={styles.ctaSubtext}>
            No minimums. Full design included. Roasted fresh in Montreal and shipped across Canada.
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

export default WhiteLabelCanadaPage;
