import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

import styles from "../_components/keywordLanding.module.scss";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Personalized Coffee Bags Canada | Custom Name Coffee Bags | EZPZ Coffee",
    description:
      "Personalized coffee bags in Canada. Add a name, message, or special date to a specialty coffee bag. Perfect for gifts, weddings, Mother's Day, and more. Zero minimum order.",
    alternates: { canonical: "/en/personalized-coffee-bags-canada" },
    openGraph: {
      title: "Personalized Coffee Bags Canada | Custom Name Coffee Bags | EZPZ Coffee",
      description:
        "Personalized coffee bags in Canada. Add a name, message, or special date to a specialty coffee bag. Perfect for gifts, weddings, Mother's Day, and more. Zero minimum order.",
      type: "website",
      url: "https://www.ezpz.coffee/en/personalized-coffee-bags-canada",
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "Personalized Coffee Bags Canada | EZPZ Coffee" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Personalized Coffee Bags Canada | Custom Name Coffee Bags | EZPZ",
      description: "Personalized coffee bags in Canada. Add a name, message, or date. Zero minimum — from one bag.",
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const PRODUCT_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Personalized Coffee Bags Canada",
  description:
    "Personalized specialty coffee bags for any occasion. Add a name, message, or date to a custom coffee bag. Zero minimum order, starting at one bag. Ships across Canada.",
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
      id="personalized-bags-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(PRODUCT_SCHEMA) }}
    />

    {/* ── Hero ── */}
    <section className={styles.hero}>
      <div className={styles.heroInner}>
        <span className={styles.heroEyebrow}>Personalized Coffee Bags — Canada</span>
        <h1 className={styles.heroTitle}>Personalized Coffee Bags. Made for One Person. Made by You.</h1>
        <p className={styles.heroSubtitle}>
          Add their name. Write your message. Choose their coffee. EZPZ creates personalized specialty coffee bags for any occasion — from one bag, shipped anywhere in Canada.
        </p>
        <div className={styles.heroBtnGroup}>
          <Link href="/en/design" className={styles.heroBtnPrimary}>Design their bag</Link>
          <Link href="/en/contact" className={styles.heroBtnSecondary}>Get a free quote</Link>
        </div>
      </div>
    </section>

    {/* ── Body ── */}
    <div className={styles.body}>
      <div className={styles.bodyInner}>

        <p className={styles.intro}>
          Personalized coffee bags Canada is EZPZ&apos;s most unique and thoughtful gift offering for any occasion. Unlike a generic gift card or a store-bought present, a personalized coffee bag is created specifically for one person — with their name, a message from you, and the coffee origin they love best. EZPZ Coffee makes personalized coffee bags in Canada with zero minimum order, starting at just one bag.
        </p>

        <h2 className={styles.h2}>What Makes a Great Personalized Coffee Bag?</h2>
        <p className={styles.p}>
          The best personalized coffee bags Canada has to offer combine three things: a beautiful design featuring the recipient&apos;s name or a personal message, a specialty-grade coffee origin chosen specifically for their taste preferences, and a physical quality that feels premium and intentional. At EZPZ, all three are included in every order. Personalized coffee bags Canada customers love because they feel genuinely made for one person — not mass-produced.
        </p>

        <h2 className={styles.h2}>Occasions for Personalized Coffee Bags in Canada</h2>
        <p className={styles.p}>
          <strong>Mother&apos;s Day:</strong> Add &ldquo;Maman&rdquo; or mom&apos;s name to the front with a personal message. Personalized coffee bags Canada moms actually keep — not flowers that wilt.
        </p>
        <p className={styles.p}>
          <strong>Father&apos;s Day:</strong> The dad gift that is actually useful. Bold dark roast, his name, your message.
        </p>
        <p className={styles.p}>
          <strong>Birthdays:</strong> Their name, their age, their favorite roast. Better than a card.
        </p>
        <p className={styles.p}>
          <strong>Weddings:</strong> Couple&apos;s names and wedding date for a favor guests actually use. Personalized coffee bags Canada wedding guests brew every morning long after the celebration ends.
        </p>
        <p className={styles.p}>
          <strong>Corporate Gifts:</strong> Company name or client name for a personalized business gift. The most memorable version of{" "}
          <Link href="/en/corporate-coffee-gifts-canada" className={styles.inlineLink}>corporate coffee gifts Canada</Link>{" "}
          businesses can send.
        </p>
        <p className={styles.p}>
          <strong>Christmas:</strong> A personalized bag under the tree is the most memorable gift in the pile.
        </p>
        <p className={styles.p}>
          <strong>Anniversaries:</strong> Their name and a love note on specialty coffee they will brew every morning.
        </p>

        <h2 className={styles.h2}>How to Create Personalized Coffee Bags in Canada</h2>
        <p className={styles.p}>
          Creating a personalized coffee bag with EZPZ takes less than 10 minutes. Go to our online design tool at{" "}
          <Link href="/en/design" className={styles.inlineLink}>ezpz.coffee/en/design</Link>,
          {" "}add your personalized text, upload any additional graphics, choose your coffee origin, and place your order. We handle the design, the roasting, and the shipping. Your personalized coffee bag arrives within 2 to 3 weeks anywhere in Canada.
        </p>
        <p className={styles.p}>
          Personalized coffee bags Canada orders ship from our Montreal facility and arrive across the country in 3 to 7 business days from shipping. Zero minimum — start with one bag.
        </p>

      </div>
    </div>

    {/* ── CTA ── */}
    <section className={styles.cta}>
      <div className={styles.ctaInner}>
        <h2 className={styles.ctaTitle}>Create a personalized coffee bag they will never forget.</h2>
        <div className={styles.ctaButtons}>
          <Link href="/en/design" className={styles.ctaPrimary}>Design their bag</Link>
          <Link href="/en/contact" className={styles.ctaSecondary}>Get a free quote</Link>
        </div>
      </div>
    </section>
  </div>
);

export default Page;
