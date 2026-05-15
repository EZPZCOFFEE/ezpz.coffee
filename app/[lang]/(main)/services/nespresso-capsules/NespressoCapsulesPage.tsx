"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale } from "next-intl";
import { useState } from "react";

import capsulePng from "@/public/assets/capsule.png";

import styles from "../servicePages.module.scss";

const ACCORDION_ITEMS = [
  {
    title: "YOUR COFFEE SOURCING",
    body: "Every capsule is filled with specialty-grade coffee sourced from traceable farms and roasted fresh at Canadian Roasting Society in Montreal. The same quality standard as all EZPZ products — 80+ SCA score, full traceability, exceptional flavor.",
  },
  {
    title: "YOUR FILLING AND PRODUCTION",
    body: "Professional capsule filling and sealing on certified equipment. Each capsule is filled to precise weight and sealed for maximum freshness and compatibility. Quality-checked before packaging.",
  },
  {
    title: "YOUR BRANDING",
    body: "Full custom capsule sleeve or outer box design included. Your logo, your brand colors, your messaging on every capsule and package. Design that looks premium in a hotel room, on a boardroom table, or on a retail shelf.",
  },
  {
    title: "YOUR PACKAGING",
    body: "Capsules are packaged in branded boxes of 10 or 20 — the standard retail and hospitality format. Custom outer packaging available for gifting and premium retail. Every package is designed to reinforce your brand.",
  },
  {
    title: "YOUR LOGISTICS",
    body: "We ship directly to your hotel properties, office locations, retail partners, or warehouse anywhere in Canada and the USA. Consistent, reliable fulfillment on every order.",
  },
  {
    title: "YOUR COMPATIBILITY",
    body: "Every EZPZ capsule is compatible with all Nespresso Classic machines — the most widely used single-serve coffee system in Canadian hotels, offices, and homes. Your customers do not need to buy new equipment.",
  },
];

const WHO_ITS_FOR = [
  {
    emoji: "🏨",
    title: "Hotels and Resorts",
    body: "Replace generic in-room capsules with your own branded specialty coffee. A premium touchpoint guests remember and talk about.",
  },
  {
    emoji: "🏢",
    title: "Corporate Offices",
    body: "Branded capsules in the boardroom and breakroom. Your culture in every cup.",
  },
  {
    emoji: "🎁",
    title: "Corporate Gifting",
    body: "A beautifully packaged box of branded specialty capsules — the corporate gift that impresses.",
  },
  {
    emoji: "🛍️",
    title: "Premium Retail",
    body: "A high-margin private label product for specialty food stores, hotel gift shops, and premium retailers.",
  },
  {
    emoji: "⛳",
    title: "Country and Golf Clubs",
    body: "The exclusive amenity that matches the quality of your membership experience.",
  },
];

const STATS = [
  { num: "100%", label: "Compatible with Nespresso Classic" },
  { num: "3 intensities", label: "Mild, balanced, intense" },
  { num: "10 or 20", label: "Standard box formats" },
  { num: "2–3 weeks", label: "Production timeline" },
];

const PROCESS_STEPS = [
  {
    num: "01",
    title: "Choose your coffee",
    body: "Select your coffee origin and intensity level. We recommend based on your brand and your target consumer. Most clients choose 1 to 3 options to offer variety.",
  },
  {
    num: "02",
    title: "Design your packaging",
    body: "Full custom capsule sleeve and box design included. We create packaging that looks premium in any setting — hotel room, boardroom, or retail shelf.",
  },
  {
    num: "03",
    title: "Production and quality check",
    body: "Your capsules are filled, sealed, and packaged on certified equipment. Every batch is quality-checked for consistency, freshness, and compatibility.",
  },
  {
    num: "04",
    title: "Delivered to your properties",
    body: "Your branded capsules ship directly to your hotel properties, office locations, or warehouse anywhere in Canada and the USA.",
  },
];

const CAPSULE_OPTIONS = [
  {
    intensity: "Mild",
    name: "Ethiopia Yirgacheffe",
    roast: "Light roast",
    notes: ["Blueberry", "Jasmine", "Lemon"],
    description: "For guests who prefer a bright, aromatic morning cup.",
  },
  {
    intensity: "Balanced",
    name: "Colombia Huila",
    roast: "Medium roast",
    notes: ["Caramel", "Red Apple", "Hazelnut"],
    description: "The universal crowd-pleaser. Works for every palate.",
  },
  {
    intensity: "Intense",
    name: "Brazil Cerrado",
    roast: "Dark roast",
    notes: ["Chocolate", "Vanilla", "Brown Sugar"],
    description: "For guests who want a bold, full-bodied espresso.",
  },
];

const NespressoCapsulesPage = () => {
  const locale = useLocale();
  const [openItem, setOpenItem] = useState<number | null>(null);

  return (
    <div className={styles.page}>

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroBg} aria-hidden />
        <div className={styles.heroGridOverlay} aria-hidden />
        <div className={styles.heroRadialGlow} aria-hidden />
        <div className={styles.heroContent}>
          <div className={styles.heroLeft}>
            <span className={styles.heroLabel}>01_ Nespresso Capsules</span>
            <h1 className={styles.heroTitle}>Your brand. In every Nespresso machine in Canada.</h1>
            <p className={styles.heroSubtitle}>
              Custom branded Nespresso-compatible capsules filled with specialty coffee. Perfect for hotels, offices, corporate gifting, and premium retail.
            </p>
            <div className={styles.heroBtnGroup}>
              <Link href={`/${locale}/contact`} className={styles.heroBtnPrimary}>Get a free quote</Link>
              <a href="#process" className={styles.heroBtnSecondary}>Learn more</a>
            </div>
            <div className={styles.heroStats}>
              <div className={styles.heroStat}>
                <span className={styles.heroStatNum}>100%</span>
                <span className={styles.heroStatLabel}>Nespresso Classic compatible</span>
              </div>
              <div className={styles.heroStat}>
                <span className={styles.heroStatNum}>2–3 weeks</span>
                <span className={styles.heroStatLabel}>Production timeline</span>
              </div>
              <div className={styles.heroStat}>
                <span className={styles.heroStatNum}>3 intensities</span>
                <span className={styles.heroStatLabel}>Mild, balanced, intense</span>
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
              <Image src={capsulePng} alt="Custom branded Nespresso-compatible capsule" className={styles.heroProductImage} placeholder="blur" />
            </div>
          </div>
        </div>
      </section>

      {/* ── What We Handle ── */}
      <section className={styles.sectionDark}>
        <div className={styles.sectionInner}>
          <span className={styles.eyebrow}>02_ What We Handle</span>
          <h2 className={styles.headlineDark}>
            Let us be your<br />
            <span className={styles.headlineAccent}>capsule operation.</span>
          </h2>
          <p className={styles.bodyDark}>
            From sourcing to filling to your branded packaging — we handle every step of your Nespresso capsule program.
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
          <p className={styles.accordionFooter}>You bring the brand. We bring the rest.</p>
        </div>
      </section>

      {/* ── Who It's For ── */}
      <section className={styles.sectionGray}>
        <div className={styles.sectionInner}>
          <span className={styles.eyebrow}>03_ Who It&apos;s For</span>
          <h2 className={styles.headlineLight}>Nespresso capsules belong in every premium brand experience.</h2>
          <div className={styles.cardsGrid5}>
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
          <span className={styles.eyebrow}>04_ Capsules at a Glance</span>
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
          <h2 className={styles.headlineLight}>Your branded capsules in 4 steps.</h2>
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

      {/* ── Coffee Options ── */}
      <section className={styles.sectionDark}>
        <div className={styles.sectionInner}>
          <span className={styles.eyebrow}>06_ Coffee Options</span>
          <h2 className={styles.headlineDark}>Three intensities. All specialty grade.</h2>
          <div className={styles.capsuleGrid}>
            {CAPSULE_OPTIONS.map((capsule) => (
              <div key={capsule.intensity} className={styles.capsuleCard}>
                <span className={styles.capsuleIntensity}>{capsule.intensity}</span>
                <h3 className={styles.capsuleName}>{capsule.name}</h3>
                <span className={styles.capsuleOrigin}>{capsule.roast}</span>
                <div className={styles.capsuleNotes}>
                  {capsule.notes.map((note) => (
                    <span key={note} className={styles.capsuleNote}>{note}</span>
                  ))}
                </div>
                <p className={styles.capsuleDesc}>{capsule.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Investment ── */}
      <section className={styles.sectionLight}>
        <div className={styles.sectionInner}>
          <span className={styles.eyebrow}>07_ Investment</span>
          <h2 className={styles.headlineLight}>Premium capsules. Accessible pricing.</h2>
          <p className={styles.investmentBody}>
            Nespresso capsule programs are available for hotels, offices, corporate gifting, and retail. Contact us to discuss pricing based on your volume and format requirements.
          </p>
          <Link href={`/${locale}/contact?subject=Nespresso Capsule Quote`} className={styles.investmentCta}>
            Get a free capsule quote
          </Link>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className={styles.finalCta}>
        <div className={styles.finalCtaInner}>
          <h2 className={styles.finalCtaTitle}>Put your brand in every Nespresso machine.</h2>
          <p className={styles.finalCtaSubtext}>
            Custom branded specialty capsules delivered to your hotel, office, or retail partners across Canada and the USA.
          </p>
          <div className={styles.finalCtaButtons}>
            <Link href={`/${locale}/contact`} className={styles.finalCtaPrimary}>Get a free quote</Link>
            <Link href={`/${locale}/services`} className={styles.finalCtaSecondary}>See all services</Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default NespressoCapsulesPage;
