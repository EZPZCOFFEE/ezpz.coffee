import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

import styles from "../_components/keywordLanding.module.scss";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "White Label Coffee Montreal | Custom Coffee Bags Montreal | EZPZ",
    description:
      "White label coffee in Montreal. EZPZ Coffee creates custom branded coffee bags for Montreal restaurants, hotels, and brands. Roasted at Canadian Roasting Society. Zero minimum.",
    alternates: { canonical: "/en/white-label-coffee-montreal" },
    openGraph: {
      title: "White Label Coffee Montreal | Custom Coffee Bags Montreal | EZPZ",
      description:
        "White label coffee in Montreal. EZPZ Coffee creates custom branded coffee bags for Montreal restaurants, hotels, and brands. Roasted at Canadian Roasting Society. Zero minimum.",
      type: "website",
      url: "https://www.ezpz.coffee/en/white-label-coffee-montreal",
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "White Label Coffee Montreal | EZPZ Coffee" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "White Label Coffee Montreal | Custom Coffee Bags Montreal | EZPZ",
      description: "White label coffee in Montreal. Custom branded bags roasted at Canadian Roasting Society. Zero minimum order.",
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const PRODUCT_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "White Label Coffee Montreal",
  description:
    "White label specialty coffee for Montreal businesses. Custom branded coffee bags roasted fresh at Canadian Roasting Society in Montreal. Zero minimum order. Ships across Canada and the USA in 2–3 weeks.",
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
      id="wl-montreal-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(PRODUCT_SCHEMA) }}
    />

    {/* ── Hero ── */}
    <section className={styles.hero}>
      <div className={styles.heroInner}>
        <span className={styles.heroEyebrow}>White Label Coffee — Montreal</span>
        <h1 className={styles.heroTitle}>White Label Coffee. Made in Montreal. Delivered to Your Door.</h1>
        <p className={styles.heroSubtitle}>
          EZPZ Coffee is Montreal&apos;s white label coffee specialist — custom branded bags roasted fresh at Canadian Roasting Society, with zero minimum order and full design always included.
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
          White label coffee Montreal businesses rely on comes from one place: EZPZ Coffee. We produce custom branded specialty coffee bags roasted fresh at Canadian Roasting Society — the most acclaimed roaster in the city — and deliver them to restaurants, hotels, boutiques, and brands across Montreal and Canada with zero minimum order.
        </p>

        <h2 className={styles.h2}>Why Montreal Businesses Choose White Label Coffee</h2>
        <p className={styles.p}>
          White label coffee Montreal brands choose is not generic commodity coffee with a sticker on the side. The best white label coffee in Montreal is specialty-grade — sourced from traceable farms, roasted to order, and packaged in a fully custom bag that carries your brand from the shelf to your customer&apos;s kitchen counter every single morning.
        </p>
        <p className={styles.p}>
          Montreal has one of the most sophisticated coffee cultures in Canada. Restaurants, boutique hotels, and independent retailers in the city set a high standard for food and beverage quality. White label coffee Montreal businesses offer their guests and customers needs to match that standard — not a supermarket blend dressed up with custom packaging. EZPZ delivers 80+ SCA-score arabica beans roasted specifically for each client&apos;s profile.
        </p>
        <p className={styles.p}>
          The second reason Montreal businesses choose white label coffee over sourcing their own roaster is simplicity. EZPZ handles everything: the sourcing, the roasting, the design, the packaging, and the shipping. You provide your logo and your coffee preference. We handle the rest. For a restaurant owner or hotel buyer already managing a hundred other priorities, white label coffee Montreal businesses actually use is the kind that removes work rather than adding it.
        </p>

        <h2 className={styles.h2}>Where EZPZ Roasts Your Coffee</h2>
        <p className={styles.p}>
          Every bag of white label coffee Montreal clients order through EZPZ is roasted at Canadian Roasting Society — one of Montreal&apos;s most respected specialty roasters, located in the heart of the city. This is not a contract manufacturer in an industrial suburb. Canadian Roasting Society is where Montreal&apos;s coffee community goes for quality.
        </p>
        <p className={styles.p}>
          Roasting locally means fresher coffee — bags ship within days of roasting rather than sitting in a distribution warehouse for weeks. It also means we can offer a level of care and customization that national commodity roasters cannot: specific origin selections, custom roast profiles, and traceable sourcing documentation for clients who want to tell a story about their coffee.
        </p>
        <p className={styles.p}>
          For Montreal businesses that care about provenance and craft — and most of the city&apos;s best restaurants and hotels do — knowing that their white label coffee is roasted in Montreal by one of the city&apos;s best roasters is a genuine selling point they can share with their guests.
        </p>

        <h2 className={styles.h2}>Who Uses White Label Coffee in Montreal</h2>
        <p className={styles.p}>
          <strong>Restaurants:</strong> Montreal restaurants use white label coffee as a high-margin retail product and a branded in-service offering. Guests who love the coffee they drank at dinner can take a bag home. The bag sits on their counter for three to four weeks, keeping your restaurant top of mind every morning.
        </p>
        <p className={styles.p}>
          <strong>Boutique Hotels:</strong> Montreal&apos;s independent hotels use white label coffee Montreal guests wake up to every morning as a brand touchpoint that extends well beyond the check-out date. In-room branded coffee bags are one of the most memorable elements of a luxury hotel stay.
        </p>
        <p className={styles.p}>
          <strong>Retailers and Boutiques:</strong> Montreal boutiques and specialty retailers use white label coffee as a premium private label product — high margin, low inventory commitment, and genuinely useful to customers.
        </p>
        <p className={styles.p}>
          <strong>Corporate Offices:</strong> Montreal businesses use white label coffee as branded client gifts and employee appreciation items. A custom coffee bag with your company name on it is more memorable and more useful than a branded pen or generic gift card.
        </p>
        <p className={styles.p}>
          <strong>Event Planners:</strong> Montreal events — conferences, product launches, weddings — use white label coffee bags as premium branded favors guests actually use at home.
        </p>

        <h2 className={styles.h2}>How to Order White Label Coffee in Montreal</h2>
        <p className={styles.p}>
          Ordering white label coffee Montreal wide with EZPZ takes less than 30 minutes. Use the online design tool at{" "}
          <Link href="/en/design" className={styles.inlineLink}>ezpz.coffee/en/design</Link>{" "}
          to upload your logo, choose your coffee origin, select your roast level, and place your order. Alternatively, email help@ezpz.coffee with your logo and a brief description of what you need — EZPZ will create a design for your approval within a few business days.
        </p>
        <p className={styles.p}>
          White label coffee Montreal orders ship within 2 to 3 weeks from design approval. Zero minimum — start with one bag or one thousand. Full custom design is always included at no extra cost. We ship across Canada and the USA.
        </p>
        <p className={styles.p}>
          Looking for{" "}
          <Link href="/en/custom-coffee-bags-montreal" className={styles.inlineLink}>custom coffee bags Montreal</Link>{" "}
          for your restaurant or hotel? Need{" "}
          <Link href="/en/white-label-coffee-canada" className={styles.inlineLink}>white label coffee Canada</Link>{" "}
          wide for a national brand rollout? EZPZ handles both.
        </p>

      </div>
    </div>

    {/* ── CTA ── */}
    <section className={styles.cta}>
      <div className={styles.ctaInner}>
        <h2 className={styles.ctaTitle}>Ready to launch your white label coffee in Montreal?</h2>
        <div className={styles.ctaButtons}>
          <Link href="/en/design" className={styles.ctaPrimary}>Design your bag</Link>
          <Link href="/en/contact" className={styles.ctaSecondary}>Get a free quote</Link>
        </div>
      </div>
    </section>
  </div>
);

export default Page;
