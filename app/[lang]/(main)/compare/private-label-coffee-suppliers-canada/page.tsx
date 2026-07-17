import type { Metadata } from "next";
import Link from "next/link";

import styles from "./privateLabelSuppliers.module.scss";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Private Label Coffee Suppliers Canada Compared | Canterbury, Barista, KW vs EZPZ",
    description:
      "Comparing private label coffee suppliers in Canada? See how EZPZ compares to Canterbury Coffee, Cafe Barista, and KW Coffee Collective. The only one with zero minimum, free design, and the coffee included.",
    alternates: { canonical: "/en/compare/private-label-coffee-suppliers-canada" },
    openGraph: {
      title: "Private Label Coffee Suppliers Canada Compared | Canterbury, Barista, KW vs EZPZ",
      description:
        "Comparing private label coffee suppliers in Canada? See how EZPZ compares to Canterbury Coffee, Cafe Barista, and KW Coffee Collective. The only one with zero minimum, free design, and the coffee included.",
      type: "website",
      url: "https://www.ezpz.coffee/en/compare/private-label-coffee-suppliers-canada",
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "Private Label Coffee Suppliers Canada Compared | EZPZ" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Private Label Coffee Suppliers Canada Compared | EZPZ",
      description: "Zero minimum, free design, the coffee included. See how EZPZ compares to Canterbury, Cafe Barista, and KW Coffee Collective.",
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.ezpz.coffee/en" },
        { "@type": "ListItem", position: 2, name: "Compare", item: "https://www.ezpz.coffee/en/compare" },
        { "@type": "ListItem", position: 3, name: "Private Label Coffee Suppliers Canada", item: "https://www.ezpz.coffee/en/compare/private-label-coffee-suppliers-canada" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Who is the best private label coffee supplier in Canada?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It depends on your needs. Canterbury Coffee suits large grocery and foodservice brands, Cafe Barista focuses on distributors, and KW Coffee Collective is ideal for those wanting to learn roasting. EZPZ Coffee is the best fit for brands of any size that want a turnkey product with zero minimum order and custom design included.",
          },
        },
        {
          "@type": "Question",
          name: "Which private label coffee supplier has no minimum order?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "EZPZ Coffee is the only major Canadian private label supplier offering a genuine zero minimum order, letting you start with a single bag. Most others are built for distributors or large-volume brands.",
          },
        },
        {
          "@type": "Question",
          name: "Do private label coffee suppliers include the packaging design?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most do not. Canterbury, Cafe Barista, and KW Coffee Collective generally require you to supply your own labels or packaging. EZPZ includes full custom design at no extra cost.",
          },
        },
        {
          "@type": "Question",
          name: "Can I get private label coffee without roasting it myself?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. EZPZ handles the sourcing, roasting, packaging, and fulfillment, delivering a finished product ready to sell. Some programs, like KW Coffee Collective, are designed as a stepping stone to roasting yourself.",
          },
        },
        {
          "@type": "Question",
          name: "Where is EZPZ coffee roasted?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "EZPZ coffee is roasted fresh in Montreal at Canadian Roasting Society, and ships across Canada and the USA.",
          },
        },
      ],
    },
  ],
};

const ROWS: { feature: string; ezpz: string; canterbury: string; barista: string; kw: string }[] = [
  {
    feature: "Coffee included in the service",
    ezpz: "Yes, specialty grade",
    canterbury: "Yes",
    barista: "Yes",
    kw: "Yes",
  },
  {
    feature: "Custom design included free",
    ezpz: "Yes, always",
    canterbury: "No",
    barista: "No",
    kw: "No — you supply packaging",
  },
  {
    feature: "Minimum order",
    ezpz: "Zero",
    canterbury: "Built for volume",
    barista: "Built for distributors",
    kw: "Standard minimums",
  },
  {
    feature: "Best suited for",
    ezpz: "Any brand, any size",
    canterbury: "Large grocery & foodservice",
    barista: "Distributors",
    kw: "Those wanting to learn roasting",
  },
  {
    feature: "You supply your own bags/labels",
    ezpz: "No — we handle it",
    canterbury: "Varies",
    barista: "Varies",
    kw: "Yes, you provide them",
  },
  {
    feature: "Online design tool",
    ezpz: "Yes",
    canterbury: "No",
    barista: "No",
    kw: "No",
  },
  {
    feature: "Ready-to-drink & instant options",
    ezpz: "Yes",
    canterbury: "Limited",
    barista: "Limited",
    kw: "No",
  },
  {
    feature: "Freeze-dried instant coffee",
    ezpz: "Yes",
    canterbury: "No",
    barista: "No",
    kw: "No",
  },
  {
    feature: "Dropshipping / DTC fulfillment",
    ezpz: "Yes",
    canterbury: "No",
    barista: "No",
    kw: "No",
  },
  {
    feature: "Roasted in",
    ezpz: "Montreal, QC",
    canterbury: "BC & national",
    barista: "Montreal, QC",
    kw: "Kitchener, ON",
  },
  {
    feature: "Turnaround for small test batch",
    ezpz: "~1 week (EZPZ bags)",
    canterbury: "Built for scale",
    barista: "Built for volume",
    kw: "Varies",
  },
];

const WHY_CARDS = [
  {
    title: "Zero Minimum",
    body: "Start with one bag. No need to commit to thousands of units just to test your idea. No other major Canadian private label supplier offers this.",
  },
  {
    title: "Design Included",
    body: "You do not supply your own bags or labels. Full custom design is always included. Bring your logo, we handle the rest.",
  },
  {
    title: "The Whole Product",
    body: "Coffee, roasting, packaging, and fulfillment in one finished product, ready to sell. Not just roasting a coffee you have to package yourself.",
  },
  {
    title: "Built for Any Size",
    body: "From a single test batch to national volumes, we scale with you, without ever forcing a minimum.",
  },
];

const FAQS = [
  {
    q: "Who is the best private label coffee supplier in Canada?",
    a: "It depends on your needs. Canterbury Coffee suits large grocery and foodservice brands, Cafe Barista focuses on distributors, and KW Coffee Collective is ideal for those wanting to learn roasting. EZPZ Coffee is the best fit for brands of any size that want a turnkey product with zero minimum order and custom design included.",
  },
  {
    q: "Which private label coffee supplier has no minimum order?",
    a: "EZPZ Coffee is the only major Canadian private label supplier offering a genuine zero minimum order, letting you start with a single bag. Most others are built for distributors or large-volume brands.",
  },
  {
    q: "Do private label coffee suppliers include the packaging design?",
    a: "Most do not. Canterbury, Cafe Barista, and KW Coffee Collective generally require you to supply your own labels or packaging. EZPZ includes full custom design at no extra cost.",
  },
  {
    q: "Can I get private label coffee without roasting it myself?",
    a: "Yes. EZPZ handles the sourcing, roasting, packaging, and fulfillment, delivering a finished product ready to sell. Some programs, like KW Coffee Collective, are designed as a stepping stone to roasting yourself.",
  },
  {
    q: "Where is EZPZ coffee roasted?",
    a: "EZPZ coffee is roasted fresh in Montreal at Canadian Roasting Society, and ships across Canada and the USA.",
  },
];

const isEzpzPositive = (_val: string) => true;

const isCompetitorPositive = (val: string) => val.toLowerCase().startsWith("yes") || val.toLowerCase().startsWith("montreal");
const isCompetitorNegative = (val: string) =>
  val.toLowerCase() === "no" ||
  val.toLowerCase().includes("built for volume") ||
  val.toLowerCase().includes("built for distributors") ||
  val.toLowerCase().includes("built for scale") ||
  val.toLowerCase().includes("no —") ||
  val.toLowerCase() === "standard minimums";

const competitorMark = (val: string) => {
  if (isCompetitorNegative(val)) return <span className={styles.cross}>✗</span>;
  if (isCompetitorPositive(val)) return <span className={styles.checkGray}>✓</span>;
  return <span className={styles.neutral}>—</span>;
};

const PrivateLabelSuppliersPage = () => {
  return (
    <div className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Breadcrumb ── */}
      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <div className={styles.breadcrumbInner}>
          <Link href="/en" className={styles.breadcrumbLink}>Home</Link>
          <span className={styles.breadcrumbSep}>›</span>
          <Link href="/en/compare" className={styles.breadcrumbLink}>Compare</Link>
          <span className={styles.breadcrumbSep}>›</span>
          <span className={styles.breadcrumbCurrent}>Private Label Coffee Suppliers Canada</span>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.eyebrow}>Private Label Coffee Suppliers Compared</span>
          <h1 className={styles.heroTitle}>Choosing a Private Label Coffee Supplier in Canada?</h1>
          <p className={styles.heroSubtitle}>
            Most Canadian private label programs are built for large distributors, make you supply your own packaging, and require big minimums. Here is an honest comparison of Canterbury Coffee, Cafe Barista, KW Coffee Collective, and EZPZ, so you can choose the right partner.
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
          <span className={styles.eyebrow}>01_ The Honest Comparison</span>
          <h2 className={styles.introHeadline}>Not all private label programs are built for you.</h2>
          <p className={styles.introText}>
            Canada has several private label coffee suppliers, and they are not all the same. Some are large-scale operations built for national grocery brands and distributors. Some make you source and supply your own bags, labels, and packaging. Some are designed to eventually push you into running your own roastery.
          </p>
          <p className={styles.introText}>
            Very few are built for the restaurant, the boutique, the gym, the hotel, the DTC brand, or the entrepreneur who simply wants to sell great{" "}
            <Link href="/en/coffee" className={styles.inlineLink}>specialty grade coffee</Link> under their own name without the complexity, the big minimums, or the upfront cost.
          </p>
          <p className={styles.introText}>
            This page compares the main private label coffee suppliers in Canada honestly, including where they are strong and who they are really built for, so you can make the right choice.
          </p>
        </div>
      </section>

      {/* ── Comparison Table ── */}
      <section className={styles.tableSection}>
        <div className={styles.tableSectionInner}>
          <span className={styles.eyebrow}>02_ Side by Side</span>
          <h2 className={styles.tableHeadline}>Private Label Coffee Suppliers in Canada</h2>
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.thFeature}>Feature</th>
                  <th className={`${styles.th} ${styles.thEzpz}`}>EZPZ Coffee</th>
                  <th className={styles.th}>Canterbury Coffee</th>
                  <th className={styles.th}>Cafe Barista</th>
                  <th className={styles.th}>KW Coffee Collective</th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map((row) => (
                  <tr key={row.feature} className={styles.tr}>
                    <td className={styles.tdFeature}>{row.feature}</td>
                    <td className={`${styles.td} ${styles.tdEzpz}`}>
                      {isEzpzPositive(row.ezpz) && <span className={styles.check}>✓</span>}
                      {row.ezpz}
                    </td>
                    <td className={styles.td}>{competitorMark(row.canterbury)} {row.canterbury}</td>
                    <td className={styles.td}>{competitorMark(row.barista)} {row.barista}</td>
                    <td className={styles.td}>{competitorMark(row.kw)} {row.kw}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Honest Breakdown ── */}
      <section className={styles.breakdown}>
        <div className={styles.breakdownInner}>
          <span className={styles.eyebrow}>03_ A Fair Look at Each</span>
          <h2 className={styles.breakdownHeadline}>Where each supplier fits.</h2>

          <div className={styles.breakdownBlock}>
            <h3 className={styles.breakdownH3}>Canterbury Coffee</h3>
            <p className={styles.breakdownText}>
              Canterbury is a large, well-established Canadian coffee company with over 40 years of experience and strong grocery and foodservice programs. Their Q Graders and national supply chain make them a solid choice for large grocery brands and national foodservice accounts that need high-volume consistency. However, their program is built for scale, not for small or emerging brands. There is no zero-minimum option, no included design service, and no simple online ordering, which can make them a difficult starting point if you are just launching or want to test an idea.
            </p>
          </div>

          <div className={styles.breakdownBlock}>
            <h3 className={styles.breakdownH3}>Cafe Barista</h3>
            <p className={styles.breakdownText}>
              Cafe Barista is a respected Montreal roaster with nearly 20 years of history and a genuinely good product. Their private label program, by their own description, is designed for distributors looking to offer freshly roasted coffee. In fact, they openly suggest that restaurants and cafes sell their existing house blends rather than go private label. That is honest, but it means their private label is not really built for small businesses or new brands wanting their own identity from day one.
            </p>
          </div>

          <div className={styles.breakdownBlock}>
            <h3 className={styles.breakdownH3}>KW Coffee Collective</h3>
            <p className={styles.breakdownText}>
              KW Coffee Collective in Kitchener offers a thoughtful program with real mentorship, and their angle is helping you eventually roast your own coffee. It is a great fit if your goal is to learn the craft and move toward running your own roastery. But for their white and private label service, you provide your own labels and packaging, and the model is positioned as a stepping stone to roasting yourself. If you simply want a finished, ready-to-sell product without sourcing packaging or learning to roast, it is a different path than what you may need.
            </p>
          </div>

          <div className={styles.breakdownBlock}>
            <h3 className={styles.breakdownH3}><span className={styles.breakdownH3Accent}>EZPZ Coffee</span></h3>
            <p className={styles.breakdownText}>
              EZPZ was built specifically for the brands the others are not designed to serve. Restaurants, hotels, boutiques, gyms, DTC brands, entrepreneurs, and anyone who wants to sell great coffee under their own name without the complexity.{" "}
              <Link href="/en/custom-coffee-bags-no-minimum-canada" className={styles.inlineLink}>Zero minimum order</Link>, so you can start with a single bag. Full custom design always included, so you do not need to supply your own packaging or hire a designer. The specialty grade coffee, the roasting in Montreal, the packaging, and even{" "}
              <Link href="/en/coffee-dropshipping-canada" className={styles.inlineLink}>dropshipping fulfillment</Link>, all handled as one finished product. Plus formats the others do not offer, including ready-to-drink and premium{" "}
              <Link href="/en/instant-coffee" className={styles.inlineLink}>freeze-dried instant coffee</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* ── Why Brands Choose EZPZ ── */}
      <section className={styles.whySection}>
        <div className={styles.whyInner}>
          <span className={styles.eyebrow}>04_ Why Brands Choose EZPZ</span>
          <h2 className={styles.whyHeadline}>What makes EZPZ different.</h2>
          <div className={styles.whyGrid}>
            {WHY_CARDS.map((card) => (
              <div key={card.title} className={styles.whyCard}>
                <h3 className={styles.whyCardTitle}>{card.title}</h3>
                <p className={styles.whyCardBody}>{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className={styles.faq}>
        <div className={styles.faqInner}>
          <span className={styles.eyebrow}>05_ FAQ</span>
          <h2 className={styles.faqHeadline}>Private Label Coffee Suppliers in Canada: FAQ</h2>
          <div className={styles.faqList}>
            {FAQS.map((item) => (
              <details key={item.q} className={styles.faqItem}>
                <summary className={styles.faqSummary}>{item.q}</summary>
                <p className={styles.faqBody}>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Back link ── */}
      <div className={styles.backLink}>
        <div className={styles.backLinkInner}>
          <Link href="/en/compare" className={styles.backLinkAnchor}>← See all competitor comparisons</Link>
        </div>
      </div>

      {/* ── Final CTA ── */}
      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>The private label partner built for your brand.</h2>
          <p className={styles.ctaSubtext}>
            Zero minimum. Design included. The coffee, roasting, packaging, and fulfillment, all handled. Start with a single bag.
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

export default PrivateLabelSuppliersPage;
