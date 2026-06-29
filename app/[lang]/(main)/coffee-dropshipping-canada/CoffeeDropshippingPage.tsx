"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import { useState } from "react";

import styles from "../services/servicePages.module.scss";

const ACCORDION_ITEMS = [
  {
    title: "ROASTED IN CANADA",
    body: "Your coffee is roasted fresh at Canadian Roasting Society in Montreal, not shipped slowly across the US border with duties and delays. Every order is roasted domestically, so your Canadian customers get fast delivery and no cross-border complications.",
  },
  {
    title: "SPECIALTY GRADE",
    body: "80+ SCA score, traceable beans from Ethiopia, Colombia, Guatemala, and Brazil. Not commodity dropshipping coffee. Your customers get a product worth bragging about — and worth reordering.",
  },
  {
    title: "ZERO MINIMUM",
    body: "Start with your very first order. No bulk commitment, no inventory to buy upfront. Test your market with one bag or ten — then scale when your customers prove the demand.",
  },
  {
    title: "NO MONTHLY FEES",
    body: "Unlike app-based dropshipping platforms, there are no recurring software subscriptions. You pay for coffee and shipping, that is it. No Dripshipper plan, no Roastify subscription, no hidden platform costs.",
  },
  {
    title: "ROASTED TO ORDER",
    body: "We roast when your customer orders, so they receive genuinely fresh coffee, not beans that sat in a warehouse for months. Fresh roast dates are a selling point your customers will notice and repeat buyers will trust.",
  },
  {
    title: "FULL CUSTOM BRANDING",
    body: "Your logo, your bag design, your brand on every order. Your customers never see EZPZ. The bag your customer opens looks and feels like it came from your brand — because it did.",
  },
];

const WHO_ITS_FOR = [
  { emoji: "🛒", title: "DTC Brand Builders", body: "Launch a real coffee brand with a story, not a generic reseller store." },
  { emoji: "📱", title: "Content Creators & Influencers", body: "Turn your audience into a coffee brand with zero inventory risk." },
  { emoji: "🛍️", title: "Existing E-commerce Stores", body: "Add a high-margin, repeat-purchase product to your catalog." },
  { emoji: "🤝", title: "Fundraisers & Communities", body: "Run a coffee fundraiser for your team, school, or cause with no upfront cost." },
  { emoji: "🔁", title: "Subscription Businesses", body: "Coffee is the perfect recurring-revenue subscription product." },
  { emoji: "⚡", title: "Niche & Lifestyle Brands", body: "Gym, wellness, outdoor, or lifestyle brand? Coffee fits naturally." },
];

const PROCESS_STEPS = [
  {
    num: "01",
    title: "Build your brand and store",
    body: "Set up your Shopify, WooCommerce, or other online store. Design your brand and your bag with our free design support.",
  },
  {
    num: "02",
    title: "Connect with EZPZ",
    body: "We set up your products, your branded packaging, and your coffee selection. You choose the origins and roasts you want to sell.",
  },
  {
    num: "03",
    title: "Your customer orders",
    body: "A customer buys from your store. The order comes to us automatically. You never touch inventory.",
  },
  {
    num: "04",
    title: "We roast, pack, and ship",
    body: "We roast the coffee fresh, package it in your branded bag, and ship it directly to your customer under your brand. You keep the profit.",
  },
];

const FAQ_ITEMS = [
  {
    q: "Can I dropship coffee in Canada?",
    a: "Yes. EZPZ Coffee offers full coffee dropshipping in Canada. We roast specialty-grade coffee in Montreal, package it under your brand, and ship directly to your customers across Canada and the USA, with zero minimum order and no monthly software fees.",
  },
  {
    q: "How much does it cost to start coffee dropshipping in Canada?",
    a: "With EZPZ there is no minimum order and no monthly software fee. You only pay for the coffee and shipping when your customer places an order, so startup costs are minimal compared to holding inventory.",
  },
  {
    q: "Is coffee dropshipping profitable in Canada?",
    a: "Yes. Coffee is a daily, repeat-purchase product with strong margins, typically 2 to 3 times cost for private label. Subscriptions and repeat orders make it one of the most sustainable dropshipping niches.",
  },
  {
    q: "Who is the best coffee dropshipping supplier in Canada?",
    a: "EZPZ Coffee is a leading Canadian coffee dropshipping supplier offering specialty-grade coffee roasted in Montreal, zero minimum order, full custom branding, and no monthly fees, with fast domestic shipping that avoids cross-border duties.",
  },
  {
    q: "Do I need to hold inventory to dropship coffee?",
    a: "No. With EZPZ, we roast and ship each order as it comes in. You never hold inventory, manage a warehouse, or touch a coffee bean.",
  },
  {
    q: "Is the coffee roasted in Canada?",
    a: "Yes. All EZPZ coffee is roasted fresh at Canadian Roasting Society in Montreal, which means faster shipping to Canadian customers and no cross-border duties, unlike US-based dropshipping apps.",
  },
];

const COMPARISON_ROWS = [
  { feature: "Roasted in Canada", ezpz: "Yes, Montreal", us: "No, USA", other: "Varies" },
  { feature: "Specialty grade 80+ SCA", ezpz: "Yes", us: "Usually commodity", other: "Varies" },
  { feature: "Monthly software fee", ezpz: "None", us: "Often $30+/month", other: "Varies" },
  { feature: "Minimum to start", ezpz: "Zero", us: "Varies", other: "Often 100 lbs/month" },
  { feature: "Cross-border duties for Canadian customers", ezpz: "None", us: "Possible", other: "None" },
  { feature: "Custom bag design", ezpz: "Included free", us: "Templates", other: "Extra cost" },
  { feature: "Ships to Canada fast", ezpz: "Yes", us: "Slow, cross-border", other: "Yes" },
];

const CoffeeDropshippingPage = () => {
  const locale = useLocale();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggle = (i: number) => setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <div className={styles.page}>

      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroGridOverlay} aria-hidden />
        <div className={styles.heroRadialGlow} aria-hidden />
        <div className={styles.heroContent}>
          <div className={styles.heroLeft}>
            <span className={styles.heroLabel}>01_ Coffee Dropshipping Canada</span>
            <h1 className={styles.heroTitle}>
              Coffee Dropshipping,<br />Done in Canada.<br />Done Right.
            </h1>
            <p className={styles.heroSubtitle}>
              Launch your own coffee brand with zero inventory. We roast specialty-grade coffee in Montreal, package it in your brand, and ship it directly to your customers across Canada and the USA. No minimum. No monthly software fees.
            </p>
            <div className={styles.heroBtnGroup}>
              <Link href={`/${locale}/design`} className={styles.heroBtnPrimary}>
                Start your brand
              </Link>
              <Link href={`/${locale}/contact`} className={styles.heroBtnSecondary}>
                Get a free quote
              </Link>
            </div>
            <div className={styles.heroStats}>
              <div className={styles.heroStat}>
                <span className={styles.heroStatNum}>0</span>
                <span className={styles.heroStatLabel}>Minimum</span>
              </div>
              <div className={styles.heroStat}>
                <span className={styles.heroStatNum}>Montreal</span>
                <span className={styles.heroStatLabel}>Roasted in Canada</span>
              </div>
              <div className={styles.heroStat}>
                <span className={styles.heroStatNum}>Direct</span>
                <span className={styles.heroStatLabel}>Ships to your customers</span>
              </div>
            </div>
          </div>
          <div className={styles.heroRight} aria-hidden>
            <div className={styles.heroImageGlow} />
            <div className={styles.heroAccentDot1} />
            <div className={styles.heroAccentDot2} />
            <div className={styles.heroAccentDot3} />
            <div className={styles.heroAccentLine} />
            <svg viewBox="0 0 340 480" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "260px", maxWidth: "100%", filter: "drop-shadow(0 40px 80px rgba(0,0,0,0.7)) drop-shadow(0 0 40px rgba(196,62,20,0.15))", transform: "rotate(4deg)" }}>
              <defs>
                <linearGradient id="heroGrad" x1="80" y1="0" x2="260" y2="0">
                  <stop offset="0%" stopColor="#c43e14" />
                  <stop offset="100%" stopColor="#e8521a" />
                </linearGradient>
              </defs>
              <rect x="60" y="20" width="220" height="440" rx="18" fill="#1a0d05" stroke="rgba(196,62,20,0.3)" strokeWidth="1.5" />
              <rect x="60" y="20" width="220" height="28" rx="14" fill="rgba(196,62,20,0.15)" />
              <rect x="60" y="432" width="220" height="28" rx="14" fill="rgba(196,62,20,0.1)" />
              <rect x="80" y="60" width="180" height="320" rx="8" fill="rgba(196,62,20,0.08)" stroke="rgba(196,62,20,0.2)" strokeWidth="1" />
              <rect x="80" y="60" width="180" height="6" rx="3" fill="url(#heroGrad)" />
              <circle cx="286" cy="42" r="8" fill="rgba(196,62,20,0.2)" stroke="rgba(196,62,20,0.5)" strokeWidth="1" />
              <circle cx="286" cy="42" r="4" fill="rgba(196,62,20,0.8)" />
              <text x="170" y="160" fontFamily="Georgia,serif" fontSize="11" fontWeight="800" fill="rgba(196,62,20,0.9)" textAnchor="middle" letterSpacing="3">YOUR BRAND</text>
              <line x1="110" y1="170" x2="230" y2="170" stroke="rgba(196,62,20,0.3)" strokeWidth="1" />
              <text x="170" y="215" fontFamily="Georgia,serif" fontSize="28" fontWeight="900" fill="rgba(255,255,255,0.85)" textAnchor="middle">EZPZ</text>
              <text x="170" y="240" fontFamily="Georgia,serif" fontSize="10" fontWeight="700" fill="rgba(255,255,255,0.4)" textAnchor="middle" letterSpacing="2">COFFEE</text>
              <text x="170" y="295" fontFamily="Georgia,serif" fontSize="9" fill="rgba(255,255,255,0.3)" textAnchor="middle">SPECIALTY GRADE · MONTREAL</text>
            </svg>
          </div>
        </div>
      </section>

      {/* ── WHAT IS COFFEE DROPSHIPPING ── */}
      <section className={styles.sectionLight} aria-labelledby="model-heading">
        <div className={styles.sectionInner}>
          <span className={styles.eyebrow}>02_ The Model</span>
          <h2 id="model-heading" className={styles.headlineLight}>
            Sell coffee online without ever touching it.
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)", gap: "3rem", alignItems: "start" }}>
            <div>
              <p className={styles.bodyLight} style={{ maxWidth: "none" }}>
                Coffee dropshipping is the simplest way to start a coffee brand in Canada. You build your store and your brand. We handle everything else. When a customer places an order on your website, we roast the coffee fresh, package it in your branded bag, and ship it directly to your customer&apos;s door, under your name. You never hold inventory, never touch a coffee bean, and never manage a warehouse.
              </p>
              <p className={styles.bodyLight} style={{ maxWidth: "none" }}>
                You focus on what actually grows your business: marketing, branding, and customers. We handle sourcing, roasting, packaging, and fulfillment. This is coffee dropshipping done in Canada, with{" "}
                <Link href={`/${locale}/coffee`} style={{ color: "var(--color-accent)", textDecoration: "underline", textUnderlineOffset: "3px" }}>specialty-grade coffee</Link>{" "}
                instead of the commodity beans most dropship coffee programs rely on.
              </p>
            </div>
            <div
              data-speakable
              style={{
                background: "#f8f7f5",
                border: "1px solid #e8e3dc",
                borderLeft: "4px solid var(--color-accent)",
                padding: "1.75rem",
                borderRadius: "4px",
              }}
            >
              <p style={{ fontSize: "0.68rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.16em", color: "var(--color-accent)", margin: "0 0 0.75rem" }}>
                Direct Answer
              </p>
              <p style={{ fontSize: "0.97rem", lineHeight: 1.65, color: "#374151", margin: 0 }}>
                Coffee dropshipping in Canada lets you sell branded coffee online without holding inventory. EZPZ Coffee roasts specialty-grade coffee in Montreal, packages it under your brand, and ships directly to your customers. Zero minimum order, no monthly software fees, and no warehouse required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY EZPZ ── */}
      <section className={styles.sectionDark} aria-labelledby="why-heading">
        <div className={styles.sectionInner}>
          <span className={styles.eyebrow}>03_ Why EZPZ</span>
          <h2 id="why-heading" className={styles.headlineDark}>
            LET US BE YOUR<br />
            <span className={styles.headlineAccent}>ENTIRE BACK END.</span>
          </h2>
          <p className={styles.bodyDark}>You run the brand. We run everything behind it.</p>

          <div className={styles.accordionGrid} role="list">
            {ACCORDION_ITEMS.map((item, i) => (
              <div key={i} className={styles.accordionItem} role="listitem">
                <button
                  type="button"
                  className={styles.accordionBtn}
                  aria-expanded={openIndex === i}
                  onClick={() => toggle(i)}
                >
                  <span className={styles.accordionIcon} aria-hidden>
                    {openIndex === i ? "−" : "+"}
                  </span>
                  <span className={styles.accordionTitle}>{item.title}</span>
                </button>
                {openIndex === i && (
                  <p className={styles.accordionBody}>{item.body}</p>
                )}
              </div>
            ))}
          </div>

          <p className={styles.accordionFooter}>
            You bring the brand. We bring the coffee, the roasting, and the fulfillment.
          </p>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className={styles.sectionLight} aria-labelledby="how-heading">
        <div className={styles.sectionInner}>
          <span className={styles.eyebrow}>04_ How It Works</span>
          <h2 id="how-heading" className={styles.headlineLight}>
            Four steps to a live coffee brand.
          </h2>
          <div className={styles.processSteps}>
            {PROCESS_STEPS.map((step) => (
              <div key={step.num} className={styles.processStep}>
                <div className={styles.processStepNum}>{step.num}</div>
                <div className={styles.processStepContent}>
                  <h3 className={styles.processStepTitle}>{step.title}</h3>
                  <p className={styles.processStepBody}>{step.body}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: "2.5rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link
              href={`/${locale}/design`}
              style={{ display: "inline-flex", alignItems: "center", padding: "0.85em 2em", background: "var(--color-accent)", color: "#fff", fontSize: "0.88rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.07em", textDecoration: "none", border: "2px solid var(--color-accent)" }}
            >
              Start your brand
            </Link>
            <Link
              href={`/${locale}/private-label-coffee-canada`}
              style={{ display: "inline-flex", alignItems: "center", padding: "0.85em 2em", background: "transparent", color: "#111", fontSize: "0.88rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.07em", textDecoration: "none", border: "2px solid #111" }}
            >
              Learn about private label →
            </Link>
          </div>
        </div>
      </section>

      {/* ── COMPARISON ── */}
      <section className={styles.sectionGray} aria-labelledby="compare-heading">
        <div className={styles.sectionInner}>
          <span className={styles.eyebrow}>05_ EZPZ vs Other Dropshipping Options</span>
          <h2 id="compare-heading" className={styles.headlineMedium}>
            Most coffee dropshipping is American. Or commodity. Or both.
          </h2>
          <p style={{ fontSize: "0.97rem", color: "#6b7280", lineHeight: 1.65, marginBottom: "2rem", maxWidth: "600px" }}>
            Here is the honest landscape of coffee dropshipping for Canadian sellers.
          </p>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.88rem" }}>
              <thead>
                <tr>
                  <th style={{ textAlign: "left", padding: "0.75rem 1rem", borderBottom: "2px solid #e5e7eb", color: "#6b7280", fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", background: "#fff" }}>Feature</th>
                  <th style={{ textAlign: "center", padding: "0.75rem 1rem", borderBottom: "2px solid var(--color-accent)", background: "var(--color-accent)", color: "#fff", fontSize: "0.72rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em" }}>EZPZ Coffee</th>
                  <th style={{ textAlign: "center", padding: "0.75rem 1rem", borderBottom: "2px solid #e5e7eb", color: "#6b7280", fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", background: "#fff" }}>US Dropship Apps</th>
                  <th style={{ textAlign: "center", padding: "0.75rem 1rem", borderBottom: "2px solid #e5e7eb", color: "#6b7280", fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", background: "#fff" }}>Other Canadian Options</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? "#fff" : "#f9f9f9" }}>
                    <td style={{ padding: "0.85rem 1rem", borderBottom: "1px solid #f0f0f0", color: "#374151", fontWeight: 600 }}>{row.feature}</td>
                    <td style={{ padding: "0.85rem 1rem", borderBottom: "1px solid rgba(196,62,20,0.15)", background: "rgba(196,62,20,0.04)", color: "var(--color-accent)", fontWeight: 800, textAlign: "center" }}>✓ {row.ezpz}</td>
                    <td style={{ padding: "0.85rem 1rem", borderBottom: "1px solid #f0f0f0", color: "#9ca3af", textAlign: "center" }}>{row.us}</td>
                    <td style={{ padding: "0.85rem 1rem", borderBottom: "1px solid #f0f0f0", color: "#9ca3af", textAlign: "center" }}>{row.other}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ marginTop: "1.5rem", fontSize: "0.82rem", color: "#9ca3af", fontStyle: "italic" }}>
            US Dropship Apps include Dripshipper, Roastify, and similar platforms. Cross-border duties may apply for Canadian customers ordering from US-roasted sources.
          </p>
        </div>
      </section>

      {/* ── WHO IT'S FOR ── */}
      <section className={styles.sectionLight} aria-labelledby="who-heading">
        <div className={styles.sectionInner}>
          <span className={styles.eyebrow}>06_ Who It&apos;s For</span>
          <h2 id="who-heading" className={styles.headlineLight}>
            Built for Canadian coffee entrepreneurs.
          </h2>
          <div className={styles.cardsGrid6}>
            {WHO_ITS_FOR.map((item, i) => (
              <article key={i} className={styles.card}>
                <span className={styles.cardEmoji} aria-hidden>{item.emoji}</span>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardBody}>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROFITABILITY ── */}
      <section className={styles.sectionDark} aria-labelledby="economics-heading">
        <div className={styles.sectionInner}>
          <span className={styles.eyebrow}>07_ The Economics</span>
          <h2 id="economics-heading" className={styles.headlineDark}>
            Why coffee is the smartest dropshipping product.
          </h2>
          <p className={styles.bodyDark} style={{ maxWidth: "680px" }}>
            Coffee is a daily-consumption, repeat-purchase product. Unlike trend-based dropshipping items that sell once and fade, coffee customers reorder every few weeks. Over 14 billion cups of coffee are consumed in Canada every year, and 71% of Canadian adults drink coffee daily.{" "}
            <Link href={`/${locale}/private-label-coffee-canada`} style={{ color: "var(--color-accent)", textDecoration: "underline", textUnderlineOffset: "3px" }}>Private label coffee</Link>{" "}
            margins typically run 2 to 3 times cost, and subscriptions turn one-time buyers into recurring revenue. With specialty-grade coffee roasted in Canada, you are not competing on price with commodity sellers. You are building a premium brand customers come back to.
          </p>
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>14B</span>
              <p className={styles.statLabel}>Cups consumed in Canada annually</p>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>71%</span>
              <p className={styles.statLabel}>Canadian adults drink coffee daily</p>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>2–3×</span>
              <p className={styles.statLabel}>Typical private label margin over cost</p>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>$0</span>
              <p className={styles.statLabel}>Minimum to start with EZPZ</p>
            </div>
          </div>
          <div style={{ marginTop: "2.5rem" }}>
            <Link
              href={`/${locale}/blog/empty-bag-problem-canadian-coffee-packaging`}
              style={{ display: "inline-flex", alignItems: "center", gap: "0.4em", fontSize: "0.85rem", fontWeight: 700, color: "rgba(255,255,255,0.55)", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.15)", paddingBottom: "2px" }}
            >
              Read: The Empty Bag Problem — why most packaging suppliers are selling you half a product →
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className={styles.sectionLight} aria-labelledby="faq-heading">
        <div className={styles.sectionInner}>
          <span className={styles.eyebrow}>08_ Coffee Dropshipping FAQ</span>
          <h2 id="faq-heading" className={styles.headlineLight}>
            Coffee Dropshipping Canada: Your Questions Answered
          </h2>
          <dl style={{ display: "flex", flexDirection: "column", gap: 0, marginTop: "2rem" }}>
            {FAQ_ITEMS.map((item, i) => (
              <div key={i} style={{ borderBottom: "1px solid #f0f0f0", padding: "1.4rem 0" }}>
                <dt style={{ fontSize: "1rem", fontWeight: 700, color: "#111", marginBottom: "0.5rem" }}>{item.q}</dt>
                <dd style={{ fontSize: "0.95rem", lineHeight: 1.7, color: "#6b7280", margin: 0 }}>{item.a}</dd>
              </div>
            ))}
          </dl>
          <div style={{ marginTop: "2rem" }}>
            <Link
              href={`/${locale}/custom-coffee-bags-no-minimum-canada`}
              style={{ display: "inline-flex", alignItems: "center", gap: "0.4em", fontSize: "0.85rem", fontWeight: 700, color: "var(--color-accent)", textDecoration: "none", borderBottom: "2px solid var(--color-accent)", paddingBottom: "2px" }}
            >
              See all zero-minimum coffee options →
            </Link>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className={styles.finalCta} aria-labelledby="final-cta-heading">
        <div className={styles.finalCtaInner}>
          <h2 id="final-cta-heading" className={styles.finalCtaTitle}>
            Start your Canadian coffee brand today.
          </h2>
          <p className={styles.finalCtaSubtext}>
            Zero inventory. Zero minimum. No monthly fees. Specialty coffee roasted in Montreal, shipped direct to your customers under your brand.
          </p>
          <div className={styles.finalCtaButtons}>
            <Link href={`/${locale}/design`} className={styles.finalCtaPrimary}>
              Start your brand
            </Link>
            <Link href={`/${locale}/contact`} className={styles.finalCtaSecondary}>
              Get a free quote
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default CoffeeDropshippingPage;
