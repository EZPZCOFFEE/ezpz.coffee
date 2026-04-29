import type { Metadata } from "next";
import Link from "next/link";

import styles from "./privateLabelCanada.module.scss";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Private Label Coffee Canada | No Minimum | Custom Bags | EZPZ",
    description:
      "Private label coffee for Canadian businesses. Put your brand on specialty grade coffee with no minimum order, full design included, roasted in Montreal. EZPZ.",
    alternates: { canonical: "/en/private-label-coffee-canada" },
    openGraph: {
      title: "Private Label Coffee Canada | No Minimum | Custom Bags | EZPZ",
      description:
        "Private label coffee for Canadian businesses. Put your brand on specialty grade coffee with no minimum order, full design included, roasted in Montreal.",
      type: "website",
      url: "https://www.ezpz.coffee/en/private-label-coffee-canada",
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "Private Label Coffee Canada" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Private Label Coffee Canada | No Minimum | EZPZ",
      description: "Private label coffee for Canadian businesses. No minimum order, design included.",
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const BREADCRUMB_BASE = "https://www.ezpz.coffee/en";

const ADVANTAGES = [
  {
    n: "01",
    title: "No minimum order — ever",
    body: "Most private label coffee suppliers in Canada require 50 to 500 units per SKU. EZPZ has a genuine zero minimum. Start with one bag to validate your concept.",
  },
  {
    n: "02",
    title: "Full custom design included",
    body: "Your logo, your brand colors, your messaging — full bag design is included at no extra charge. No print-ready files required, no designer fees.",
  },
  {
    n: "03",
    title: "100% traceable specialty coffee",
    body: "We source only 80+ SCA specialty grade coffees from fully traceable origins. Your customers get quality that matches your brand premium.",
  },
  {
    n: "04",
    title: "Roasted fresh to order",
    body: "Every bag is roasted at Canadian Roasting Society in Montreal only after you place your order. Never pre-packaged, never sitting in a warehouse.",
  },
];

const PROCESS = [
  {
    n: "01",
    title: "Place your order online",
    body: "Use our design tool to upload your logo and configure your bag. Choose your coffee origin, roast level, and grind. Takes under 10 minutes.",
  },
  {
    n: "02",
    title: "Approve your bag design",
    body: "Our team reviews your design and sends you a proof for approval. We handle the technical side — you just confirm it looks right.",
  },
  {
    n: "03",
    title: "We roast and pack in Montreal",
    body: "Your coffee is roasted to order at Canadian Roasting Society, then packed in your custom branded bag. No minimums, no batch requirements.",
  },
  {
    n: "04",
    title: "Shipped to your door",
    body: "Delivered anywhere in Canada in 5 to 10 business days from order confirmation. Fully tracked so you always know where your order is.",
  },
];

const PrivateLabelCanadaPage = () => {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${BREADCRUMB_BASE}` },
      { "@type": "ListItem", position: 2, name: "Private Label Coffee Canada", item: `${BREADCRUMB_BASE}/private-label-coffee-canada` },
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
          <span className={styles.breadcrumbCurrent}>Private Label Coffee Canada</span>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.eyebrow}>Private Label Coffee — Canada</span>
          <h1 className={styles.heroTitle}>Private label coffee for Canadian businesses. No minimums.</h1>
          <p className={styles.heroSubtitle}>
            Launch your own branded coffee line without the volume requirements. EZPZ is the only private label coffee supplier in Canada with a genuine zero minimum order.
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
            Private label coffee lets you sell coffee under your own brand without roasting it yourself. You supply the brand — logo, packaging, and identity — and EZPZ supplies the product. We roast specialty grade coffee to order at Canadian Roasting Society in Montreal, pack it in your fully custom-designed bag, and ship it directly to you or your customers anywhere in Canada.
          </p>
          <p className={styles.introText}>
            Where most private label coffee programs in Canada start at 50 to 500 units per order, EZPZ has no minimum at all. Restaurants, hotels, retailers, gyms, and corporate brands across Canada use EZPZ to launch or grow their private label coffee line without tying up capital in inventory or committing to volume they are not sure they can move.
          </p>
        </div>
      </section>

      {/* ── Advantages ── */}
      <section className={styles.advantages}>
        <div className={styles.advantagesInner}>
          <span className={styles.eyebrow}>Why EZPZ</span>
          <h2 className={styles.sectionTitleLight}>Why Canadian businesses choose EZPZ for private label coffee.</h2>
          <div className={styles.advantagesGrid}>
            {ADVANTAGES.map((a) => (
              <div key={a.n} className={styles.advantageCard}>
                <span className={styles.advantageNumber}>{a.n}</span>
                <h3 className={styles.advantageTitle}>{a.title}</h3>
                <p className={styles.advantageBody}>{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className={styles.process}>
        <div className={styles.processInner}>
          <span className={styles.eyebrow}>How it works</span>
          <h2 className={styles.sectionTitle}>Your private label coffee in 4 steps.</h2>
          <div className={styles.processGrid}>
            {PROCESS.map((step) => (
              <div key={step.n} className={styles.processStep}>
                <span className={styles.processNumber}>{step.n}</span>
                <h3 className={styles.processStepTitle}>{step.title}</h3>
                <p className={styles.processStepBody}>{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>Start your private label coffee line today.</h2>
          <p className={styles.ctaSubtext}>
            No minimums. No setup fees. Full design included. Roasted fresh in Montreal and shipped anywhere in Canada.
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

export default PrivateLabelCanadaPage;
