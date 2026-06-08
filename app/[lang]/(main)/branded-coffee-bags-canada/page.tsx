import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

import styles from "../_components/keywordLanding.module.scss";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Branded Coffee Bags Canada | Custom Logo Coffee Bags | EZPZ Coffee",
    description:
      "Branded coffee bags for Canadian businesses. Your logo on specialty coffee bags with zero minimum order, full design included, roasted in Montreal. Ships across Canada and the USA.",
    alternates: { canonical: "/en/branded-coffee-bags-canada" },
    openGraph: {
      title: "Branded Coffee Bags Canada | Custom Logo Coffee Bags | EZPZ Coffee",
      description:
        "Branded coffee bags for Canadian businesses. Your logo on specialty coffee bags with zero minimum order, full design included, roasted in Montreal.",
      type: "website",
      url: "https://www.ezpz.coffee/en/branded-coffee-bags-canada",
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "Branded Coffee Bags Canada | EZPZ Coffee" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Branded Coffee Bags Canada | Custom Logo Coffee Bags | EZPZ Coffee",
      description: "Branded coffee bags for Canadian businesses. Zero minimum order, full design included, roasted in Montreal.",
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const PRODUCT_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Branded Coffee Bags Canada",
  description:
    "Custom branded coffee bags for Canadian businesses with your logo and design. Zero minimum order. Full design included. Specialty grade coffee roasted in Montreal. Ships across Canada and the USA in 2–3 weeks.",
  brand: { "@type": "Brand", name: "EZPZ Coffee" },
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceCurrency: "CAD",
    seller: { "@type": "Organization", name: "EZPZ Coffee" },
  },
};

const Page = () => (
  <div className={styles.page}>
    <Script
      id="branded-bags-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(PRODUCT_SCHEMA) }}
    />

    {/* ── Hero ── */}
    <section className={styles.hero}>
      <div className={styles.heroInner}>
        <span className={styles.heroEyebrow}>Branded Coffee Bags — Canada</span>
        <h1 className={styles.heroTitle}>Branded Coffee Bags for Canadian Businesses.</h1>
        <p className={styles.heroSubtitle}>
          Your logo. Your colors. Your brand — on specialty coffee bags roasted fresh in Montreal. Zero minimum order. Full design always included.
        </p>
        <div className={styles.heroBtnGroup}>
          <Link href="/en/design" className={styles.heroBtnPrimary}>Design your bag</Link>
          <Link href="/en/contact" className={styles.heroBtnSecondary}>Get a free quote</Link>
        </div>
      </div>
    </section>

    {/* ── Body ── */}
    <div className={styles.body}>
      <div className={styles.bodyInner}>

        <p className={styles.intro}>
          Branded coffee bags are one of the most powerful marketing tools available to Canadian businesses. Unlike a business card that gets thrown away or a pen that runs out of ink, a branded coffee bag sits on a customer&apos;s kitchen counter for three to four weeks — delivering daily brand impressions every single morning. EZPZ Coffee is Canada&apos;s leading provider of branded coffee bags with zero minimum order.
        </p>

        <h2 className={styles.h2}>What Are Branded Coffee Bags?</h2>
        <p className={styles.p}>
          Branded coffee bags Canada businesses order through EZPZ are custom packaging featuring your company logo, brand colors, and messaging — filled with specialty-grade coffee roasted specifically for your brand. Every element of the bag is customized to your specifications: the design, the coffee origin, the roast level, the grind size, and the bag format.
        </p>
        <p className={styles.p}>
          Unlike generic coffee bags that any competitor could sell, branded coffee bags are uniquely yours. They tell your brand story every time a customer opens them. Branded coffee bags Canada wide are what EZPZ delivers — from restaurants in Montreal to retail boutiques in Vancouver.
        </p>

        <h2 className={styles.h2}>Who Orders Branded Coffee Bags in Canada?</h2>
        <p className={styles.p}>
          Canadian businesses ordering branded coffee bags include restaurants who want a premium retail product, hotels creating memorable in-room experiences, boutiques looking for high-margin merchandise, gyms selling to loyal members, corporate offices gifting to employees and clients, real estate agents using them as closing gifts, event planners creating memorable favors, and any brand that wants daily visibility in their customers&apos; homes.
        </p>
        <p className={styles.p}>
          Branded coffee bags Canada has never been easier to access. EZPZ works with businesses of every size — from a single-location café ordering 1 bag to a national hotel chain ordering thousands.
        </p>

        <h2 className={styles.h2}>Why EZPZ is Canada&apos;s Best Branded Coffee Bag Supplier</h2>
        <p className={styles.p}>
          EZPZ Coffee stands apart from every other branded coffee bags Canada supplier for three reasons. First, we are the only supplier with zero minimum order — you can order one branded bag or ten thousand. Second, full custom design is always included at no extra cost. Third, we provide the coffee too — specialty-grade, traceable beans roasted fresh at Canadian Roasting Society in Montreal — not just an empty bag with your label.
        </p>
        <p className={styles.p}>
          Most branded coffee bags Canada suppliers are packaging companies. They sell you the bag. You find your own coffee, your own roaster, and manage your own supply chain. EZPZ does everything.{" "}
          <Link href="/en/blog/ezpz-vs-rootree-vs-savor-brands-custom-coffee-bags-canada" className={styles.inlineLink}>
            See how we compare to other Canadian suppliers.
          </Link>
        </p>

        <h2 className={styles.h2}>How to Order Branded Coffee Bags in Canada</h2>
        <p className={styles.p}>
          Ordering branded coffee bags through EZPZ takes less than 30 minutes. Use our online design tool at{" "}
          <Link href="/en/design" className={styles.inlineLink}>ezpz.coffee/en/design</Link>{" "}
          to upload your logo, choose your colors, select your coffee origin, and place your order. Most branded coffee bags Canada orders are ready within 2 to 3 weeks from design approval. We ship across Canada and the USA.
        </p>
        <p className={styles.p}>
          Need branded coffee bags for restaurants specifically?{" "}
          <Link href="/en/custom-coffee-bags-restaurants" className={styles.inlineLink}>
            See our restaurant coffee program.
          </Link>{" "}
          Need corporate branded bags for gifting?{" "}
          <Link href="/en/corporate-coffee-gifts-canada" className={styles.inlineLink}>
            See our corporate coffee gifts page.
          </Link>
        </p>

      </div>
    </div>

    {/* ── CTA ── */}
    <section className={styles.cta}>
      <div className={styles.ctaInner}>
        <h2 className={styles.ctaTitle}>Ready to create your branded coffee bags?</h2>
        <div className={styles.ctaButtons}>
          <Link href="/en/design" className={styles.ctaPrimary}>Design your bag</Link>
          <Link href="/en/contact" className={styles.ctaSecondary}>Get a free quote</Link>
        </div>
      </div>
    </section>
  </div>
);

export default Page;
