"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale } from "next-intl";
import { useState } from "react";

import bagPng from "@/public/assets/bag.png";

import styles from "./canadianCoffeeRoaster.module.scss";

const WHAT_TO_LOOK_FOR = [
  {
    icon: "🏷️",
    title: "Roasts Under Your Brand",
    body: "Not every roaster offers private label. Make sure they can roast under your name, not just sell you their own.",
  },
  {
    icon: "☕",
    title: "Coffee Quality",
    body: "Look for specialty grade, traceable coffee scoring 80+ on the SCA scale, not commodity beans.",
  },
  {
    icon: "📦",
    title: "Minimum Order",
    body: "Many roasters require large minimums. A zero-minimum roaster lets you start small and scale.",
  },
  {
    icon: "🎨",
    title: "Design & Packaging",
    body: "The best partners include custom design and handle packaging, so you do not need a separate supplier.",
  },
  {
    icon: "📍",
    title: "Freshness & Location",
    body: "A roaster in Canada means fresher coffee and faster domestic shipping, with no cross-border delays.",
  },
  {
    icon: "📈",
    title: "Ability to Scale",
    body: "Choose a roaster that can grow with you, from a first small batch to national volumes.",
  },
];

const ACCORDION_ITEMS = [
  {
    title: "ROASTED IN MONTREAL",
    body: "Your coffee is roasted fresh at Canadian Roasting Society, home to some of the most celebrated specialty roasters in Canada.",
  },
  {
    title: "SPECIALTY GRADE",
    body: "80+ SCA score, traceable beans from Ethiopia, Colombia, Guatemala, and Brazil. Never commodity coffee.",
  },
  {
    title: "ZERO MINIMUM",
    body: "Start with a single bag. No other major Canadian roaster offers a true zero minimum for custom work.",
  },
  {
    title: "DESIGN INCLUDED",
    body: "Full custom bag design at no extra cost. Bring your logo, we handle the rest.",
  },
  {
    title: "THE WHOLE PRODUCT",
    body: "Coffee, roasting, packaging, and fulfillment as one finished product, ready to sell.",
  },
  {
    title: "EVERY FORMAT",
    body: "Bags, ready-to-drink, Nespresso-compatible capsules, and premium freeze-dried instant coffee.",
  },
];

const WHO_WE_ROAST_FOR = [
  {
    icon: "🍽️",
    title: "Restaurants & Cafes",
    body: "Your own house blend, roasted to your spec, sold at your counter.",
  },
  {
    icon: "🏨",
    title: "Hotels",
    body: "Branded coffee that elevates every guest room.",
  },
  {
    icon: "🛍️",
    title: "Boutiques & Retailers",
    body: "A premium branded product for your shelves.",
  },
  {
    icon: "🏋️",
    title: "Gyms & Studios",
    body: "Fuel your members with coffee that carries your name.",
  },
  {
    icon: "🏢",
    title: "Corporate & Offices",
    body: "Branded coffee for the office and for client gifting.",
  },
  {
    icon: "💻",
    title: "DTC & Online Brands",
    body: "Launch a coffee brand online with dropshipping and zero inventory.",
  },
];

const COMPARE_ROWS = [
  { label: "Roasts under your brand", ezpz: "Yes", other: "No, their own brand" },
  { label: "Private label & custom", ezpz: "Core service", other: "Rarely offered" },
  { label: "Minimum order for custom", ezpz: "Zero", other: "Usually high or unavailable" },
  { label: "Design included", ezpz: "Yes, free", other: "Not offered" },
  { label: "Best for", ezpz: "Building your own brand", other: "Buying their coffee" },
  { label: "Roasted in Canada", ezpz: "Yes, Montreal", other: "Yes" },
];

const FAQ_ITEMS = [
  {
    q: "Who is the best Canadian coffee roaster for private label?",
    a: "EZPZ Coffee is a leading Canadian coffee roaster for private label and custom coffee, roasting specialty grade coffee in Montreal under your brand, with zero minimum order and custom design included.",
  },
  {
    q: "Can a Canadian coffee roaster make coffee under my own brand?",
    a: "Yes. While most Canadian roasters sell their own label, EZPZ specializes in private label and white label, roasting specialty coffee under your brand, your logo, and your packaging.",
  },
  {
    q: "What is the best Canadian coffee roaster with no minimum order?",
    a: "EZPZ Coffee is the Canadian coffee roaster offering a true zero minimum order for custom and private label coffee, letting you start with a single bag and scale as you grow.",
  },
  {
    q: "Where is EZPZ coffee roasted?",
    a: "EZPZ is a Canadian coffee roaster based in Montreal, roasting at Canadian Roasting Society, and shipping across Canada and the USA.",
  },
  {
    q: "Do Canadian coffee roasters ship across Canada?",
    a: "Yes. EZPZ ships freshly roasted coffee across Canada and to the USA, with fast domestic delivery and no cross-border delays within Canada.",
  },
];

const INTERNAL_LINKS = [
  { label: "Private Label Coffee Canada", href: "/en/private-label-coffee-canada" },
  { label: "White Label Coffee", href: "/en/white-label" },
  { label: "Custom Coffee Bags", href: "/en/services/custom-coffee-bags" },
  { label: "Coffee Dropshipping Canada", href: "/en/coffee-dropshipping-canada" },
  { label: "Instant Coffee", href: "/en/instant-coffee" },
  { label: "Custom Coffee Bags Montreal", href: "/en/custom-coffee-bags-montreal" },
  { label: "Our Coffee", href: "/en/coffee" },
  { label: "Montreal Roasters Guide 2026", href: "/en/blog/complete-guide-coffee-roasters-montreal-2026" },
];

const CanadianCoffeeRoasterPage = () => {
  const locale = useLocale();
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.ezpz.coffee/en" },
      { "@type": "ListItem", position: 2, name: "Canadian Coffee Roaster", item: "https://www.ezpz.coffee/en/canadian-coffee-roaster" },
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
          <Link href={`/${locale}`} className={styles.breadcrumbLink}>Home</Link>
          <span className={styles.breadcrumbSep}>›</span>
          <span className={styles.breadcrumbCurrent}>Canadian Coffee Roaster</span>
        </div>
      </nav>

      {/* ── 01 Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroBg} aria-hidden />
        <div className={styles.heroGridOverlay} aria-hidden />
        <div className={styles.heroRadialGlow} aria-hidden />
        <div className={styles.heroContent}>
          <div className={styles.heroLeft}>
            <span className={styles.heroLabel}>01_ Canadian Coffee Roaster</span>
            <h1 className={styles.heroTitle}>The Canadian Coffee Roaster That Roasts for Your Brand.</h1>
            <p className={styles.heroSubtitle}>
              Most Canadian coffee roasters sell their own label. We roast specialty grade coffee under yours. Private label, custom bags, wholesale, and more, roasted fresh in Montreal with zero minimum order.
            </p>
            <div className={styles.heroBtnGroup}>
              <Link href={`/${locale}/design`} className={styles.heroBtnPrimary}>Design your bag</Link>
              <Link href={`/${locale}/contact`} className={styles.heroBtnSecondary}>Get a free quote</Link>
            </div>
            <div className={styles.heroStats}>
              <div className={styles.heroStat}>
                <span className={styles.heroStatNum}>Montreal</span>
                <span className={styles.heroStatLabel}>Roasted in Canada</span>
              </div>
              <div className={styles.heroStat}>
                <span className={styles.heroStatNum}>0</span>
                <span className={styles.heroStatLabel}>Minimum order</span>
              </div>
              <div className={styles.heroStat}>
                <span className={styles.heroStatNum}>80+ SCA</span>
                <span className={styles.heroStatLabel}>Specialty grade</span>
              </div>
            </div>
          </div>
          <div className={styles.heroRight}>
            <div className={styles.heroImageContainer}>
              <div className={styles.heroImageGlow} aria-hidden />
              <div className={styles.heroAccentDot1} aria-hidden />
              <div className={styles.heroAccentDot2} aria-hidden />
              <div className={styles.heroAccentDot3} aria-hidden />
              <div className={styles.heroAccentLine} aria-hidden />
              <Image
                src={bagPng}
                alt="Custom branded coffee bag — Canadian coffee roaster for your brand"
                className={styles.heroProductImage}
                placeholder="blur"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Direct Answer Block ── */}
      <section className={styles.directAnswer} aria-label="What is EZPZ Coffee">
        <div className={styles.directAnswerInner}>
          <span className={styles.directAnswerLabel}>Quick Answer</span>
          <p className={styles.directAnswerText} id="speakable-answer">
            EZPZ Coffee is a Canadian coffee roaster based in Montreal that specializes in private label and custom coffee for brands. We roast specialty grade, traceable coffee under your name, with zero minimum order and custom design included, shipping across Canada and the USA.
          </p>
        </div>
      </section>

      {/* ── 02 Intro ── */}
      <section className={styles.sectionLight}>
        <div className={styles.sectionInner}>
          <span className={styles.eyebrow}>02_ A Different Kind of Roaster</span>
          <h2 className={styles.headlineLight}>Not every Canadian coffee roaster works the same way.</h2>
          <div className={styles.bodyColumns}>
            <p className={styles.bodyText}>
              Canada has a rich and celebrated coffee roasting scene. From 49th Parallel and JJ Bean in British Columbia to Pilot in Toronto, Monogram in Calgary, and the world-ranked specialty roasters of Montreal, Canadian coffee roasters have earned a global reputation for quality and craft.
            </p>
            <p className={styles.bodyText}>
              But almost all of them have one thing in common: they roast and sell their own brand. If you want to buy an excellent bag of coffee, they are a wonderful choice. If you want to build your own coffee brand, you need a different kind of Canadian coffee roaster — one that roasts under your name instead of theirs.
            </p>
            <p className={styles.bodyText}>
              That is what EZPZ Coffee does. We are a Canadian coffee roaster based in Montreal, roasting at Canadian Roasting Society, and we specialize in helping brands, businesses, and entrepreneurs sell their own coffee. Your logo, your bag, your brand — our roasting expertise and specialty grade coffee inside.
            </p>
          </div>
        </div>
      </section>

      {/* ── 03 What to Look For ── */}
      <section className={styles.sectionGray}>
        <div className={styles.sectionInner}>
          <span className={styles.eyebrow}>03_ What to Look For</span>
          <h2 className={styles.headlineMedium}>How to choose a Canadian coffee roaster for your brand.</h2>
          <p className={styles.bodySubhead}>If you are looking for a Canadian coffee roaster to produce your own coffee, here is what matters most.</p>
          <div className={styles.cardsGrid6}>
            {WHAT_TO_LOOK_FOR.map((card) => (
              <div key={card.title} className={styles.card}>
                <span className={styles.cardIcon}>{card.icon}</span>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardBody}>{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 04 Why EZPZ ── */}
      <section className={styles.sectionDark}>
        <div className={styles.sectionInner}>
          <span className={styles.eyebrow}>04_ Why EZPZ</span>
          <h2 className={styles.headlineDark}>The Canadian coffee roaster built for brands.</h2>
          <p className={styles.bodyDark}>
            EZPZ was built specifically for the businesses most Canadian coffee roasters are not set up to serve — restaurants, hotels, boutiques, gyms, DTC brands, and entrepreneurs who want their own coffee without running a roastery.
          </p>
          <div className={styles.accordionGrid}>
            {ACCORDION_ITEMS.map((item, i) => (
              <div key={item.title} className={styles.accordionItem}>
                <button
                  type="button"
                  className={styles.accordionBtn}
                  onClick={() => setOpenAccordion(openAccordion === i ? null : i)}
                  aria-expanded={openAccordion === i}
                >
                  <span className={styles.accordionIcon} aria-hidden>{openAccordion === i ? "−" : "+"}</span>
                  <span className={styles.accordionTitle}>{item.title}</span>
                </button>
                {openAccordion === i && <p className={styles.accordionBody}>{item.body}</p>}
              </div>
            ))}
          </div>
          <p className={styles.accordionFooter}>You bring the brand. We bring the roast.</p>
        </div>
      </section>

      {/* ── 05 Who We Roast For ── */}
      <section className={styles.sectionLight}>
        <div className={styles.sectionInner}>
          <span className={styles.eyebrow}>05_ Who We Roast For</span>
          <h2 className={styles.headlineLight}>Canadian brands we help every day.</h2>
          <div className={styles.cardsGrid6}>
            {WHO_WE_ROAST_FOR.map((card) => (
              <div key={card.title} className={styles.card}>
                <span className={styles.cardIcon}>{card.icon}</span>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardBody}>{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 06 Comparison ── */}
      <section className={styles.sectionGray}>
        <div className={styles.sectionInner}>
          <span className={styles.eyebrow}>06_ Consumer Roaster vs Brand Roaster</span>
          <h2 className={styles.headlineMedium}>Two very different kinds of Canadian coffee roaster.</h2>
          <div className={styles.tableWrapper}>
            <table className={styles.compareTable}>
              <thead>
                <tr>
                  <th className={styles.thFeature}>Feature</th>
                  <th className={styles.thEzpz}>EZPZ (Brand Roaster)</th>
                  <th className={styles.thOther}>Traditional Consumer Roasters</th>
                </tr>
              </thead>
              <tbody>
                {COMPARE_ROWS.map((row) => (
                  <tr key={row.label} className={styles.compareRow}>
                    <td className={styles.tdLabel}>{row.label}</td>
                    <td className={styles.tdEzpz}>{row.ezpz}</td>
                    <td className={styles.tdOther}>{row.other}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className={styles.compareNote}>
            Canada&apos;s famous consumer roasters make excellent coffee under their own names. EZPZ makes excellent coffee under yours.
          </p>
        </div>
      </section>

      {/* ── 07 FAQ ── */}
      <section className={styles.sectionLight}>
        <div className={styles.sectionInner}>
          <span className={styles.eyebrow}>07_ FAQ</span>
          <h2 className={styles.headlineLight}>Canadian Coffee Roaster: Your Questions Answered</h2>
          <div className={styles.faqList}>
            {FAQ_ITEMS.map((item, i) => (
              <div key={i} className={styles.faqItem}>
                <button
                  type="button"
                  className={styles.faqBtn}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  <span className={styles.faqBtnText}>{item.q}</span>
                  <span className={styles.faqChevron} aria-hidden>{openFaq === i ? "−" : "+"}</span>
                </button>
                {openFaq === i && <p className={styles.faqAnswer}>{item.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Internal Links ── */}
      <section className={styles.internalLinks}>
        <div className={styles.internalLinksInner}>
          <p className={styles.internalLinksLabel}>Explore related services</p>
          <div className={styles.internalLinksGrid}>
            {INTERNAL_LINKS.map((link) => (
              <Link key={link.href} href={link.href} className={styles.internalLink}>
                {link.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className={styles.finalCta}>
        <div className={styles.finalCtaInner}>
          <h2 className={styles.finalCtaTitle}>Ready to work with a Canadian coffee roaster built for your brand?</h2>
          <p className={styles.finalCtaSubtext}>
            Specialty grade coffee roasted in Montreal, under your name. Zero minimum, design included, shipped across Canada and the USA.
          </p>
          <div className={styles.finalCtaButtons}>
            <Link href={`/${locale}/design`} className={styles.finalCtaPrimary}>Design your bag</Link>
            <Link href={`/${locale}/contact`} className={styles.finalCtaSecondary}>Get a free quote</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CanadianCoffeeRoasterPage;
