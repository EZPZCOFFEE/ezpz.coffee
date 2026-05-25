import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

import styles from "../_components/keywordLanding.module.scss";
import fStyles from "./fathersDay.module.scss";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Father's Day Coffee Gifts Canada 2026 | Personalized Coffee Bags for Dad | EZPZ",
    description:
      "The most thoughtful Father's Day gift for a coffee-loving dad. A personalized specialty coffee bag with his name and a message from you. Zero minimum. Order by June 8th.",
    alternates: { canonical: "/en/fathers-day" },
    openGraph: {
      title: "Father's Day Coffee Gifts Canada 2026 | Personalized Coffee Bags for Dad | EZPZ",
      description:
        "The most thoughtful Father's Day gift for a coffee-loving dad. A personalized specialty coffee bag with his name and a message from you. Zero minimum. Order by June 8th.",
      type: "website",
      url: "https://www.ezpz.coffee/en/fathers-day",
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "Father's Day Coffee Gifts Canada | EZPZ Coffee" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Father's Day Coffee Gifts Canada 2026 | EZPZ Coffee",
      description: "The most thoughtful Father's Day gift. A personalized specialty coffee bag for dad. Order by June 8th.",
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const PRODUCT_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Personalized Father's Day Coffee Bag",
  description:
    "A custom specialty coffee bag personalized for dad — his name, your message, his favorite roast. Zero minimum order. Roasted fresh in Montreal. Ships anywhere in Canada. Order by June 8th for Father's Day on June 15th.",
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
      id="fathers-day-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(PRODUCT_SCHEMA) }}
    />

    {/* ── Hero ── */}
    <section className={styles.hero}>
      <div className={styles.heroInner}>
        <span className={styles.heroEyebrow}>Father&apos;s Day — June 15th</span>
        <div className={fStyles.urgencyBadge}>Order by June 8th for Father&apos;s Day delivery</div>
        <h1 className={styles.heroTitle}>The most thoughtful gift you can give dad this year.</h1>
        <p className={styles.heroSubtitle}>
          A custom coffee bag designed by you, filled with specialty coffee he will love, delivered
          right to his door. Personal. Unique. Unforgettable.
        </p>
        <div className={styles.heroBtnGroup}>
          <Link href="/en/design" className={styles.heroBtnPrimary}>Design his bag</Link>
          <Link href="/en/contact" className={styles.heroBtnSecondary}>Get a free quote</Link>
        </div>
      </div>
    </section>

    {/* ── Body ── */}
    <div className={styles.body}>
      <div className={styles.bodyInner}>

        <p className={styles.intro}>
          Every year the same question: what do you get a dad who has everything? A gift card he
          will spend on something practical. A bottle of wine that disappears in a night. This year,
          give him something he will use every single morning for weeks — and think of you every
          time. A personalized specialty coffee bag from EZPZ is the Father&apos;s Day gift that
          lands differently.
        </p>

        <h2 className={styles.h2}>Why a Coffee Bag Is the Perfect Gift for Dad</h2>
        <p className={styles.p}>
          Coffee is a ritual for most Canadian dads. The first cup before the house wakes up. The
          quiet moment before the day starts. A gift that elevates that ritual is a gift that keeps
          giving every morning. Unlike flowers that wilt or chocolates that disappear, a bag of
          specialty coffee lasts three to four weeks — with your name attached to every cup he
          makes.
        </p>
        <p className={styles.p}>
          And unlike a gift card, a personalized coffee bag is made specifically for him. His name.
          Your message. His roast. Nothing off a shelf. Nothing anyone else will give him.
        </p>

        <h2 className={styles.h2}>Choose the Right Coffee for Your Dad</h2>
        <p className={styles.p}>
          <strong>The Bold Dad — Brazil Cerrado, Dark Roast:</strong> Tasting notes of dark
          chocolate, vanilla, and brown sugar. Rich, full-bodied, unapologetically strong. For the
          dad who drinks his coffee black and means business. This is the one.
        </p>
        <p className={styles.p}>
          <strong>The Balanced Dad — Colombia Huila, Medium Roast:</strong> Tasting notes of
          caramel, red apple, and hazelnut. Smooth, balanced, universally loved. If you are not
          sure what he prefers, this is the safe — and excellent — choice.
        </p>
        <p className={styles.p}>
          <strong>The Adventurous Dad — Ethiopia Yirgacheffe, Light Roast:</strong> Tasting notes
          of blueberry, jasmine, and lemon. Bright, aromatic, and completely unlike anything from
          a grocery store. For the dad who appreciates discovering something new.
        </p>
        <p className={styles.p}>
          <strong>The Classic Dad — Guatemala Antigua, Medium Dark Roast:</strong> Tasting notes of
          dark chocolate, brown sugar, and almond. Comforting and familiar but with a depth that
          shows genuine quality. For the dad who knows what he likes.
        </p>

        <h2 className={styles.h2}>How to Personalize His Bag</h2>
        <p className={styles.p}>
          Use our online design tool to customize every detail. His name — &ldquo;Dad&rdquo;,
          &ldquo;Papa&rdquo;, &ldquo;Pops&rdquo;, or his actual name — on the front. A message
          that only your family would write. A QR code linking to a personal video message. His
          roast. His origin. Done in under 10 minutes, delivered in under 2 weeks.
        </p>

        <h2 className={styles.h2}>Zero Minimum. Full Design Included. Ships Across Canada.</h2>
        <p className={styles.p}>
          EZPZ is the only custom coffee bag supplier in Canada with zero minimum order — you can
          order one single bag for your dad. Full custom design is always included. The coffee is
          specialty grade (80+ SCA score), roasted fresh at Canadian Roasting Society in Montreal.
        </p>
        <p className={styles.p}>
          Orders ship to every province in Canada. Most orders arrive within 2 to 3 weeks from
          design approval. <strong>Order by June 8th to guarantee delivery before Father&apos;s
          Day on June 15th.</strong>
        </p>
        <p className={styles.p}>
          Read our full guide:{" "}
          <Link href="/en/blog/coffee-gifts-fathers-day-canada-2026" className={styles.inlineLink}>
            The Best Coffee Gifts for Father&apos;s Day in Canada 2026
          </Link>.
        </p>

      </div>
    </div>

    {/* ── CTA ── */}
    <section className={styles.cta}>
      <div className={styles.ctaInner}>
        <h2 className={styles.ctaTitle}>Order by June 8th. Delivered before Father&apos;s Day.</h2>
        <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.85rem", margin: "0", textAlign: "center" }}>
          Father&apos;s Day is June 15th. Don&apos;t leave it to the last minute.
        </p>
        <div className={styles.ctaButtons}>
          <Link href="/en/design" className={styles.ctaPrimary}>Design his bag now</Link>
          <Link href="/en/contact" className={styles.ctaSecondary}>Get a free quote</Link>
        </div>
      </div>
    </section>
  </div>
);

export default Page;
