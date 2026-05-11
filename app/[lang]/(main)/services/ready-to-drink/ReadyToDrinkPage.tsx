"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import { useState } from "react";

import styles from "../servicePages.module.scss";

const ACCORDION_ITEMS = [
  {
    title: "YOUR RECIPE DEVELOPMENT",
    body: "We do not just fill cans with generic coffee. Our team works with you to develop a recipe specifically for your brand — flavor profile, sweetness level, milk or dairy-free, cold brew or espresso base, functional ingredients. A recipe that tastes like yours and nobody else's.",
  },
  {
    title: "YOUR PRODUCTION",
    body: "Full RTD production handled at our facility. Cans, bottles, or cartons — we work with the format that fits your brand and your market. Every production run is quality-checked to ensure consistency batch after batch.",
  },
  {
    title: "YOUR BRANDING AND DESIGN",
    body: "Full custom label or can design included. Your logo, your colors, your story on every unit. We work with your brand guidelines or help you develop the visual identity from scratch. Design that stands out in a crowded RTD market.",
  },
  {
    title: "YOUR SOURCING",
    body: "The coffee inside your RTD matters as much as the can design. We source specialty-grade beans from traceable origins and roast them at Canadian Roasting Society in Montreal. Your RTD starts with extraordinary coffee — not a commodity blend.",
  },
  {
    title: "YOUR LOGISTICS",
    body: "We manage production scheduling, quality control, and fulfillment. Your RTD ships directly to your warehouse, your retail partners, or your fulfillment center anywhere in Canada and the USA. We handle the complexity so you do not have to.",
  },
  {
    title: "YOUR SCALE",
    body: "RTD production starts at 8,000 units — the minimum required to make co-manufacturing economically viable. From that starting point we can scale with you as demand grows. Our production partners are equipped to handle volume from test batches to national retail programs.",
  },
];

const WHO_ITS_FOR = [
  { emoji: "🏋️", title: "Gyms and Fitness Studios", body: "The pre or post-workout drink your members have been asking for." },
  { emoji: "🌿", title: "Wellness Brands", body: "A functional RTD that aligns with your health-focused audience." },
  { emoji: "☕", title: "Restaurants and Cafés", body: "A branded to-go option that travels with your customers." },
  { emoji: "🛒", title: "Retailers", body: "A high-margin private label product for your shelves." },
  { emoji: "🏨", title: "Hotels", body: "In-room and minibar branded coffee that elevates the guest experience." },
  { emoji: "🥤", title: "Food and Beverage Brands", body: "Expand your product lineup with a branded RTD coffee." },
];

const STATS = [
  { num: "8,000", label: "Minimum units" },
  { num: "4–6 weeks", label: "Production timeline" },
  { num: "3 formats", label: "Cans, bottles, cartons" },
  { num: "100%", label: "Custom recipe development" },
];

const PROCESS_STEPS = [
  {
    num: "01",
    title: "Discovery call",
    body: "We start with a conversation about your brand, your target consumer, your flavor vision, and your market. This helps us understand what your RTD needs to achieve.",
  },
  {
    num: "02",
    title: "Recipe development",
    body: "Our team develops a recipe based on your brief. We produce samples for you to taste and evaluate. We iterate until the flavor is exactly right for your brand.",
  },
  {
    num: "03",
    title: "Design and branding",
    body: "Full custom can or label design included. We develop a visual identity that stands out in the RTD category and reflects your brand.",
  },
  {
    num: "04",
    title: "Production run",
    body: "Once recipe and design are approved we schedule your production run. Every batch is quality-checked for consistency and food safety compliance.",
  },
  {
    num: "05",
    title: "Packaging and labeling",
    body: "Your RTD is packaged, labeled, and prepared for distribution. We handle the regulatory requirements for Canadian and US food labeling.",
  },
  {
    num: "06",
    title: "Fulfillment and distribution",
    body: "Your finished product ships directly to your warehouse, retail partners, or fulfillment center. We can also connect you with distribution partners across Canada.",
  },
];

const FORMATS = [
  { name: "Cans 330ml", desc: "The classic RTD format. Iconic shelf presence." },
  { name: "Bottles 250ml", desc: "Premium feel. Perfect for hospitality and retail." },
  { name: "Cartons 200ml", desc: "Sustainable option. Great for health-conscious brands." },
];

const BASE_OPTIONS = [
  { name: "Cold Brew", desc: "Smooth, low-acid, naturally sweet." },
  { name: "Espresso Based", desc: "Bold, intense, familiar." },
  { name: "Nitro Infused", desc: "Creamy texture without dairy." },
  { name: "Functional", desc: "Add protein, adaptogens, or vitamins." },
];

const ReadyToDrinkPage = () => {
  const locale = useLocale();
  const [openItem, setOpenItem] = useState<number | null>(null);

  return (
    <div className={styles.page}>

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.heroLabel}>01_ Ready-to-Drink Coffee</span>
          <h1 className={styles.heroTitle}>Your brand. Ready to crack open.</h1>
          <p className={styles.heroSubtitle}>
            Custom branded ready-to-drink coffee in cans, bottles, or cartons. Full recipe development. Your design. Delivered across Canada and the USA.
          </p>
          <div className={styles.heroBtnGroup}>
            <Link href={`/${locale}/contact`} className={styles.heroBtnPrimary}>Get a free quote</Link>
            <a href="#process" className={styles.heroBtnSecondary}>Learn about our process</a>
          </div>
        </div>
      </section>

      {/* ── What We Handle ── */}
      <section className={styles.sectionDark}>
        <div className={styles.sectionInner}>
          <span className={styles.eyebrow}>02_ What We Handle</span>
          <h2 className={styles.headlineDark}>
            Let us be your<br />
            <span className={styles.headlineAccent}>entire RTD operation.</span>
          </h2>
          <p className={styles.bodyDark}>
            Recipe development to retail-ready production — we handle every step of your ready-to-drink coffee program.
          </p>
          <div className={styles.accordionGrid}>
            {ACCORDION_ITEMS.map((item, i) => (
              <div key={item.title} className={styles.accordionItem}>
                <button
                  type="button"
                  className={styles.accordionBtn}
                  onClick={() => setOpenItem(openItem === i ? null : i)}
                  aria-expanded={openItem === i}
                >
                  <span className={styles.accordionIcon} aria-hidden>{openItem === i ? "−" : "+"}</span>
                  <span className={styles.accordionTitle}>{item.title}</span>
                </button>
                {openItem === i && <p className={styles.accordionBody}>{item.body}</p>}
              </div>
            ))}
          </div>
          <p className={styles.accordionFooter}>You bring the brand. We bring the production.</p>
        </div>
      </section>

      {/* ── Who It's For ── */}
      <section className={styles.sectionGray}>
        <div className={styles.sectionInner}>
          <span className={styles.eyebrow}>03_ Who It&apos;s For</span>
          <h2 className={styles.headlineLight}>RTD coffee is the fastest growing beverage category in Canada.</h2>
          <div className={styles.cardsGrid6}>
            {WHO_ITS_FOR.map((card) => (
              <div key={card.title} className={styles.card}>
                <span className={styles.cardEmoji}>{card.emoji}</span>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardBody}>{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── The Numbers ── */}
      <section className={styles.sectionDark}>
        <div className={styles.sectionInner}>
          <span className={styles.eyebrow}>04_ RTD at a Glance</span>
          <div className={styles.statsGrid}>
            {STATS.map((stat) => (
              <div key={stat.label} className={styles.statItem}>
                <span className={styles.statNumber}>{stat.num}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── The Process ── */}
      <section id="process" className={styles.sectionLight}>
        <div className={styles.sectionInner}>
          <span className={styles.eyebrow}>05_ The Process</span>
          <h2 className={styles.headlineLight}>From concept to shelf-ready in 6 steps.</h2>
          <div className={styles.processSteps}>
            {PROCESS_STEPS.map((step) => (
              <div key={step.num} className={styles.processStep}>
                <span className={styles.processStepNum}>{step.num}</span>
                <div className={styles.processStepContent}>
                  <h3 className={styles.processStepTitle}>{step.title}</h3>
                  <p className={styles.processStepBody}>{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Flavors and Formats ── */}
      <section className={styles.sectionDark}>
        <div className={styles.sectionInner}>
          <span className={styles.eyebrow}>06_ Flavors and Formats</span>
          <h2 className={styles.headlineDark}>Built for your brand. Designed for your consumer.</h2>
          <div className={styles.twoColSection}>
            <div>
              <p className={styles.formatGroupTitle}>Formats</p>
              {FORMATS.map((item) => (
                <div key={item.name} className={styles.formatItem}>
                  <h3 className={styles.formatName}>{item.name}</h3>
                  <p className={styles.formatDesc}>{item.desc}</p>
                </div>
              ))}
            </div>
            <div>
              <p className={styles.formatGroupTitle}>Base Options</p>
              {BASE_OPTIONS.map((item) => (
                <div key={item.name} className={styles.formatItem}>
                  <h3 className={styles.formatName}>{item.name}</h3>
                  <p className={styles.formatDesc}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Investment ── */}
      <section className={styles.sectionLight}>
        <div className={styles.sectionInner}>
          <span className={styles.eyebrow}>07_ Investment</span>
          <h2 className={styles.headlineLight}>Serious production. Serious results.</h2>
          <p className={styles.investmentBody}>
            RTD coffee production requires a minimum of 8,000 units to be economically viable. This covers the setup costs for recipe development, production scheduling, and co-manufacturing. Contact us to discuss pricing based on your volume and format.
          </p>
          <Link href={`/${locale}/contact?subject=RTD Coffee Quote`} className={styles.investmentCta}>
            Get a free RTD quote
          </Link>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className={styles.finalCta}>
        <div className={styles.finalCtaInner}>
          <h2 className={styles.finalCtaTitle}>Ready to launch your own RTD coffee brand?</h2>
          <p className={styles.finalCtaSubtext}>
            Join the brands across Canada turning their coffee vision into a shelf-ready reality with EZPZ.
          </p>
          <div className={styles.finalCtaButtons}>
            <Link href={`/${locale}/contact`} className={styles.finalCtaPrimary}>Get a free quote</Link>
            <Link href={`/${locale}/coffee`} className={styles.finalCtaSecondary}>Learn about our coffee</Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ReadyToDrinkPage;
