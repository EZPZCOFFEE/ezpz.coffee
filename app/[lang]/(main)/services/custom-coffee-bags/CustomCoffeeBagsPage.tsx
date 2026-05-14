"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import { useState } from "react";

import styles from "../servicePages.module.scss";

const ACCORDION_ITEMS = [
  {
    title: "YOUR DESIGN",
    body: "Full custom bag design is always included at no extra cost. You bring your logo, your colors, and your vision. Our design team handles the rest — creating a bag that looks like it belongs on the shelf of the best café in the city. Multiple revision rounds until you are completely happy. No design agency required.",
  },
  {
    title: "YOUR ROASTING TEAM",
    body: "Every EZPZ bag is roasted fresh at Canadian Roasting Society in Montreal — the same facility used by some of Montreal's most celebrated specialty coffee brands including Micro Espresso, Traffic Coffee, Ambros, and Tunnel Espresso. Professional Probat equipment. Expert roasters. Consistent results on every single batch.",
  },
  {
    title: "YOUR SOURCING",
    body: "We source exclusively from traceable, specialty-grade farms scoring 80 or above on the SCA cupping scale. Ethiopia, Colombia, Brazil, Guatemala, Kenya — we know the origins, the farmers, and the harvest dates. You get a coffee with a real story, not an anonymous commodity blend. We help you choose the right origin for your brand.",
  },
  {
    title: "YOUR PACKAGING",
    body: "Your coffee is packaged in professionally designed bags with your full custom branding. Available in multiple sizes. One-way degassing valve to preserve freshness. Resealable zipper for customer convenience. Choice of whole bean or ground. Every bag is quality-checked before it leaves our facility.",
  },
  {
    title: "YOUR LOGISTICS",
    body: "We ship directly to your door anywhere in Canada and the USA. No third-party fulfillment center required. No warehouse lease. No shipping team to manage. You tell us where to send it and we handle everything from production to delivery. Standard delivery across Canada takes 3 to 7 business days from order completion.",
  },
  {
    title: "YOUR FULFILLMENT",
    body: "From one bag to ten thousand — we fulfill every order with the same care and quality. No minimum order means you can start small, test your market, and scale when you are ready. Repeat orders are fast because your design and specifications are already on file. Just tell us what you need and when you need it.",
  },
];

const WHO_ITS_FOR = [
  { emoji: "🍽️", title: "Restaurants", body: "Add a high-margin retail product your diners take home and brew every morning." },
  { emoji: "🏨", title: "Hotels", body: "Elevate the in-room experience and create a branded touchpoint guests remember." },
  { emoji: "🛍️", title: "Boutiques", body: "A premium product that fits naturally alongside your existing merchandise." },
  { emoji: "🏋️", title: "Gyms and Studios", body: "Fuel your community with a product that aligns with their active lifestyle." },
  { emoji: "🏢", title: "Corporate Offices", body: "Make every morning meeting better with your brand on the coffee." },
  { emoji: "🎉", title: "Event Planners", body: "The favor nobody throws away — branded specialty coffee for any occasion." },
  { emoji: "🏠", title: "Real Estate Agents", body: "The closing gift that keeps your name on their kitchen counter for weeks." },
  { emoji: "✦", title: "Any Brand", body: "If you have a brand and customers who drink coffee — this is for you." },
];

const STATS = [
  { num: "1", label: "Minimum order" },
  { num: "2–3 weeks", label: "From design to delivery" },
  { num: "80+", label: "SCA score on all our beans" },
  { num: "500+", label: "Canadian brands served" },
];

const PROCESS_STEPS = [
  {
    num: "01",
    title: "Tell us about your brand",
    body: "Book a free consultation or fill out our contact form. Tell us about your business, your customers, and your goals. We match you with the right coffee origin and walk you through the design process.",
  },
  {
    num: "02",
    title: "Design your bag",
    body: "Our design team creates a custom bag based on your brand assets. You review, request changes, and approve. Most designs are finalized within 3 to 5 business days.",
  },
  {
    num: "03",
    title: "We source and roast",
    body: "Once your design is approved we source your green coffee, schedule your roast at Canadian Roasting Society, and begin production. Fresh roasted on professional Probat equipment.",
  },
  {
    num: "04",
    title: "Quality check and packaging",
    body: "Every batch is quality-checked before packaging. Your coffee is packaged in your branded bag, sealed for freshness, and prepared for fulfillment.",
  },
  {
    num: "05",
    title: "Delivered to your door",
    body: "Your order ships directly to your specified address anywhere in Canada or the USA. Track your order in real time. Most orders arrive within 3 to 7 business days of shipping.",
  },
];

const ORIGINS = [
  {
    name: "Ethiopia Yirgacheffe",
    roast: "Light roast",
    notes: ["Blueberry", "Jasmine", "Lemon"],
    description: "For brands that want to tell a story of origin and complexity.",
  },
  {
    name: "Colombia Huila",
    roast: "Medium roast",
    notes: ["Caramel", "Red Apple", "Hazelnut"],
    description: "The crowd-pleaser. Universally loved. Perfect for any audience.",
  },
  {
    name: "Guatemala Antigua",
    roast: "Medium dark roast",
    notes: ["Dark Chocolate", "Brown Sugar", "Almond"],
    description: "Rich and comforting. Ideal for fall and winter campaigns.",
  },
  {
    name: "Brazil Cerrado",
    roast: "Dark roast",
    notes: ["Chocolate", "Vanilla", "Brown Sugar"],
    description: "Bold and familiar. For customers who take their coffee seriously.",
  },
];

const PRICING_TIERS = [
  {
    tier: "Starter",
    range: "1 to 25 bags",
    description: "Perfect for testing your concept, creating personalized gifts, or launching a limited edition.",
    popular: false,
  },
  {
    tier: "Brand Builder",
    range: "26 to 200 bags",
    description: "For businesses ready to launch their branded coffee program.",
    popular: true,
  },
  {
    tier: "Scale",
    range: "200+ bags",
    description: "For established brands ready to grow their coffee program.",
    popular: false,
  },
];

const TESTIMONIALS = [
  {
    quote: "EZPZ handled everything from design to delivery. We launched our hotel coffee brand in under 3 weeks.",
    name: "Philippe M.",
    role: "Hotel Director",
  },
  {
    quote: "We added branded coffee to our boutique and it became our top-selling product within a month.",
    name: "Sarah L.",
    role: "Boutique Owner",
  },
  {
    quote: "The process was incredibly smooth. Zero minimums meant we could test before scaling up.",
    name: "Marc T.",
    role: "Restaurant Manager",
  },
];

const CustomCoffeeBagsPage = () => {
  const locale = useLocale();
  const [openItem, setOpenItem] = useState<number | null>(null);

  return (
    <div className={styles.page}>

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.heroLabel}>01_ Custom Coffee Bags</span>
          <h1 className={styles.heroTitle}>Your bag. Your brand. We handle everything.</h1>
          <p className={styles.heroSubtitle}>
            From the farm to your customer&apos;s door — EZPZ manages every step of your custom coffee bag program so you can focus on what you do best: running your business.
          </p>
          <div className={styles.heroBtnGroup}>
            <Link href={`/${locale}/design`} className={styles.heroBtnPrimary}>Start designing</Link>
            <Link href={`/${locale}/contact`} className={styles.heroBtnSecondary}>Get a free quote</Link>
          </div>
        </div>
      </section>

      {/* ── What We Handle ── */}
      <section className={styles.sectionDark}>
        <div className={styles.sectionInner}>
          <span className={styles.eyebrow}>02_ What We Handle</span>
          <h2 className={styles.headlineDark}>
            Let us be your<br />
            <span className={styles.headlineAccent}>everything.</span>
          </h2>
          <p className={styles.bodyDark}>
            Skip the warehouse. Skip the roasting team. Skip the logistics headache. We handle it all so you can focus on your brand.
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
          <h2 className={styles.headlineLight}>If you sell to people, you should be selling coffee.</h2>
          <div className={styles.cardsGrid}>
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
          <span className={styles.eyebrow}>04_ The Numbers</span>
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
      <section className={styles.sectionLight}>
        <div className={styles.sectionInner}>
          <span className={styles.eyebrow}>05_ The Process</span>
          <h2 className={styles.headlineLight}>From idea to shelf in 5 steps.</h2>
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

      {/* ── Coffee Origins ── */}
      <section className={styles.sectionDark}>
        <div className={styles.sectionInner}>
          <span className={styles.eyebrow}>06_ Choose Your Coffee</span>
          <h2 className={styles.headlineDark}>Four origins. Infinite possibilities.</h2>
          <div className={styles.originsGrid}>
            {ORIGINS.map((origin) => (
              <div key={origin.name} className={styles.originCard}>
                <div>
                  <span className={styles.originRoast}>{origin.roast}</span>
                  <h3 className={styles.originName}>{origin.name}</h3>
                </div>
                <div className={styles.originNotes}>
                  {origin.notes.map((note) => (
                    <span key={note} className={styles.originNote}>{note}</span>
                  ))}
                </div>
                <p className={styles.originDescription}>{origin.description}</p>
              </div>
            ))}
          </div>
          <p className={styles.originsFootnote}>
            Not sure which origin is right for your brand?{" "}
            <Link href={`/${locale}/contact`}>We will help you choose.</Link>
          </p>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section className={styles.sectionLight}>
        <div className={styles.sectionInner}>
          <span className={styles.eyebrow}>07_ Pricing</span>
          <h2 className={styles.headlineLight}>Transparent. Simple. No surprises.</h2>
          <p className={styles.bodyLight}>
            Full custom design is always included. No hidden fees. No setup costs. Pricing scales with volume — the more you order the lower your per-unit cost. But there is never a minimum.
          </p>
          <div className={styles.pricingGrid}>
            {PRICING_TIERS.map((tier) => (
              <div key={tier.tier} className={`${styles.pricingCard} ${tier.popular ? styles.pricingCardPopular : ""}`}>
                {tier.popular && <span className={styles.pricingPopularBadge}>Most popular</span>}
                <span className={styles.pricingTier}>{tier.tier}</span>
                <p className={styles.pricingRange}>{tier.range}</p>
                <p className={styles.pricingDescription}>{tier.description}</p>
                <Link href={`/${locale}/contact`} className={styles.pricingCta}>Get a quote</Link>
              </div>
            ))}
          </div>
          <p className={styles.pricingNote}>
            All pricing includes full custom design, specialty grade coffee, professional roasting, and standard shipping. Contact us for exact per-unit pricing based on your volume.
          </p>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className={styles.sectionGray}>
        <div className={styles.sectionInner}>
          <span className={styles.eyebrow}>08_ What Our Clients Say</span>
          <div className={styles.testimonialGrid}>
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className={styles.testimonialCard}>
                <div className={styles.testimonialStars}>★★★★★</div>
                <p className={styles.testimonialQuote}>&ldquo;{t.quote}&rdquo;</p>
                <div className={styles.testimonialAuthor}>
                  <span className={styles.testimonialName}>{t.name}</span>
                  <span className={styles.testimonialRole}>{t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className={styles.finalCta}>
        <div className={styles.finalCtaInner}>
          <h2 className={styles.finalCtaTitle}>Ready to put your brand on specialty coffee?</h2>
          <p className={styles.finalCtaSubtext}>
            No minimums. No hidden fees. Full design included. Your branded coffee bags delivered across Canada and the USA in 2 to 3 weeks.
          </p>
          <div className={styles.finalCtaButtons}>
            <Link href={`/${locale}/design`} className={styles.finalCtaPrimary}>Design your bag now</Link>
            <Link href={`/${locale}/contact`} className={styles.finalCtaSecondary}>Get a free quote</Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default CustomCoffeeBagsPage;
