import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

import styles from "../_components/keywordLanding.module.scss";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Corporate Coffee Gifts Canada | Branded Coffee Bags | EZPZ Coffee",
    description:
      "Custom corporate coffee gifts for Canadian businesses. Branded specialty coffee bags with your logo — the corporate gift clients actually use every morning. Zero minimum order.",
    alternates: { canonical: "/en/corporate-coffee-gifts-canada" },
    openGraph: {
      title: "Corporate Coffee Gifts Canada | Branded Coffee Bags | EZPZ Coffee",
      description:
        "Custom corporate coffee gifts for Canadian businesses. Branded specialty coffee bags with your logo — the corporate gift clients actually use every morning. Zero minimum order.",
      type: "website",
      url: "https://www.ezpz.coffee/en/corporate-coffee-gifts-canada",
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "Corporate Coffee Gifts Canada | EZPZ Coffee" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Corporate Coffee Gifts Canada | Branded Coffee Bags | EZPZ Coffee",
      description: "Custom corporate coffee gifts for Canadian businesses. Zero minimum order, full design included.",
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const PRODUCT_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Corporate Coffee Gifts Canada",
  description:
    "Custom branded specialty coffee bags for Canadian corporate gifts. Your logo on specialty coffee with zero minimum order. Full design included. Roasted in Montreal. Ships across Canada and the USA.",
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
      id="corporate-gifts-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(PRODUCT_SCHEMA) }}
    />

    {/* ── Hero ── */}
    <section className={styles.hero}>
      <div className={styles.heroInner}>
        <span className={styles.heroEyebrow}>Corporate Coffee Gifts — Canada</span>
        <h1 className={styles.heroTitle}>Corporate Coffee Gifts. The One They Will Actually Use.</h1>
        <p className={styles.heroSubtitle}>
          Custom branded specialty coffee bags for Canadian businesses — the corporate gift that sits on your client&apos;s counter for weeks and keeps your brand top of mind every single morning.
        </p>
        <div className={styles.heroBtnGroup}>
          <Link href="/en/design" className={styles.heroBtnPrimary}>Design your gift</Link>
          <Link href="/en/contact" className={styles.heroBtnSecondary}>Get a free quote</Link>
        </div>
      </div>
    </section>

    {/* ── Body ── */}
    <div className={styles.body}>
      <div className={styles.bodyInner}>

        <p className={styles.intro}>
          Corporate gifting in Canada is a multi-billion dollar industry — and most of it is completely forgettable. Branded pens. Generic wine. Chocolate boxes that disappear in a day. The best corporate coffee gifts Canada has to offer are ones that deliver genuine value to the recipient and lasting brand visibility to the giver. That is exactly what EZPZ custom branded coffee bags deliver.
        </p>

        <h2 className={styles.h2}>Why Coffee Is the Perfect Corporate Gift in Canada</h2>
        <p className={styles.p}>
          Over 70% of Canadian adults drink coffee every single day. A branded specialty coffee bag is not just a gift — it is a daily ritual. Every morning your client makes coffee from your branded bag, they see your company name, remember your service, and associate your brand with something genuinely pleasurable. No other corporate coffee gift Canada businesses can give delivers that kind of daily brand exposure.
        </p>
        <p className={styles.p}>
          Corporate coffee gifts Canada brands trust do not need to be expensive. EZPZ offers zero minimum order, which means you can order five bags for your five most important clients or five hundred for a national campaign. The cost is accessible. The impact is not.
        </p>

        <h2 className={styles.h2}>Corporate Coffee Gift Ideas for Canadian Businesses</h2>
        <p className={styles.p}>
          <strong>Client Appreciation Gifts:</strong> Send a custom branded coffee bag to your top clients after a project close or at the holidays. Pair it with a handwritten note. The combination signals that you care about quality — the same message you want to send about your business.
        </p>
        <p className={styles.p}>
          <strong>Employee Recognition:</strong> Custom coffee bags make exceptional employee recognition gifts. A bag with a personal message is more memorable than a generic gift card and costs the same. Corporate coffee gifts Canada employees actually appreciate start here.
        </p>
        <p className={styles.p}>
          <strong>New Client Welcome Kits:</strong> Send every new client a branded welcome kit with a custom coffee bag. Sets the tone for the relationship immediately.
        </p>
        <p className={styles.p}>
          <strong>Holiday Corporate Gifts:</strong> Replace the generic holiday hamper with custom branded specialty coffee. Stands out completely in a season full of predictable gifts. Corporate coffee gifts Canada businesses send at the holidays land differently when they are specialty grade.
        </p>
        <p className={styles.p}>
          <strong>Trade Show Giveaways:</strong> Custom branded coffee bags travel home in delegate bags and sit on kitchen counters for weeks — delivering brand exposure long after the event.
        </p>

        <h2 className={styles.h2}>How to Order Corporate Coffee Gifts in Canada</h2>
        <p className={styles.p}>
          EZPZ makes ordering corporate coffee gifts Canada wide simple. Zero minimum order means you can start small. Full design is always included — just send your logo and we handle the rest. Specialty-grade coffee is always inside. Ships across Canada in 2 to 3 weeks.
        </p>
        <p className={styles.p}>
          Looking for{" "}
          <Link href="/en/branded-coffee-bags-canada" className={styles.inlineLink}>branded coffee bags Canada</Link>{" "}
          wide for a larger campaign? We scale with you. Need{" "}
          <Link href="/en/personalized-coffee-bags-canada" className={styles.inlineLink}>personalized coffee bags Canada</Link>{" "}
          with individual names? We do that too.
        </p>

      </div>
    </div>

    {/* ── CTA ── */}
    <section className={styles.cta}>
      <div className={styles.ctaInner}>
        <h2 className={styles.ctaTitle}>Create corporate coffee gifts your clients will remember.</h2>
        <div className={styles.ctaButtons}>
          <Link href="/en/design" className={styles.ctaPrimary}>Design your gift</Link>
          <Link href="/en/contact" className={styles.ctaSecondary}>Get a free quote</Link>
        </div>
      </div>
    </section>
  </div>
);

export default Page;
