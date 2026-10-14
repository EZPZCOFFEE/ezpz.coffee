"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import { useState } from "react";

import styles from "../services/servicePages.module.scss";

const WHO_ITS_FOR = [
  { emoji: "🍽️", title: "Restaurants", titleFr: "Restaurants", body: "A consistent, crowd-pleasing coffee to finish every meal right.", bodyFr: "Un café constant et apprécié de tous pour terminer chaque repas en beauté." },
  { emoji: "☕", title: "Cafés & Coffee Shops", titleFr: "Cafés et coffee shops", body: "Specialty beans for your espresso and filter, roasted fresh to spec.", bodyFr: "Des grains de spécialité pour votre espresso et filtre, torréfiés frais selon vos specs." },
  { emoji: "🏨", title: "Hotels", titleFr: "Hôtels", body: "Quality coffee for rooms, restaurants, lobbies, and events.", bodyFr: "Du café de qualité pour les chambres, restaurants, lobbys et événements." },
  { emoji: "🏢", title: "Offices & Corporate", titleFr: "Bureaux et entreprises", body: "Keep your team and guests happy with genuinely good coffee, not the usual breakroom stuff.", bodyFr: "Gardez votre équipe et vos clients satisfaits avec un café vraiment bon, pas le café de bureau habituel." },
  { emoji: "🎪", title: "Caterers & Events", titleFr: "Traiteurs et événements", body: "Reliable bulk supply for any volume, any occasion.", bodyFr: "Approvisionnement en vrac fiable pour tout volume, toute occasion." },
  { emoji: "🥐", title: "Bakeries & Bistros", titleFr: "Boulangeries et bistros", body: "The perfect coffee pairing for your menu.", bodyFr: "L'accord parfait pour accompagner votre menu." },
];

const WHY_EZPZ = [
  { emoji: "⭐", title: "Specialty Grade", titleFr: "Qualité spécialité", body: "80+ SCA, traceable single origins and blends. Not commodity coffee, the real thing.", bodyFr: "SCA 80+, origines uniques traçables et mélanges. Pas du café générique : du vrai café de qualité." },
  { emoji: "🌿", title: "Roasted Fresh in Montreal", titleFr: "Torréfié frais à Montréal", body: "Roasted to order, so your beans arrive fresh, not sitting in a warehouse for months.", bodyFr: "Torréfié à la commande, vos grains arrivent frais et non entassés dans un entrepôt pendant des mois." },
  { emoji: "🔁", title: "Batch Consistency", titleFr: "Constance par lot", body: "Once we lock in your coffee, every delivery matches it. Your customers get the same great cup every time.", bodyFr: "Une fois votre café défini, chaque livraison est identique. Vos clients ont la même excellente tasse à chaque fois." },
  { emoji: "📦", title: "Recurring Delivery", titleFr: "Livraison récurrente", body: "Set up a regular schedule so you never run out. We keep you stocked on autopilot.", bodyFr: "Mettez en place un calendrier régulier pour ne jamais manquer de café. Nous vous gardons approvisionné en pilote automatique." },
  { emoji: "⚙️", title: "Whole Bean or Ground", titleFr: "Grains entiers ou moulus", body: "Whatever suits your setup — grind to your machine or whole bean for your grinder.", bodyFr: "Selon votre configuration : moulu pour votre machine ou grains entiers pour votre moulin." },
  { emoji: "💰", title: "Competitive Wholesale Pricing", titleFr: "Prix de gros concurrentiels", body: "Thanks to our roasting volume, you get specialty-grade coffee at a price that works for a business, without compromising on quality.", bodyFr: "Grâce à notre volume de torréfaction, vous obtenez du café de qualité spécialité à un prix adapté aux entreprises, sans compromis sur la qualité." },
];

const HOW_IT_WORKS = [
  { n: "01", title: "Taste & choose", titleFr: "Goûtez et choisissez", body: "We send samples so you can taste and pick the right coffee for your business.", bodyFr: "Nous envoyons des échantillons pour que vous puissiez goûter et choisir le bon café pour votre entreprise." },
  { n: "02", title: "Set your order", titleFr: "Définissez votre commande", body: "Confirm your coffee, format (whole bean or ground), and volume.", bodyFr: "Confirmez votre café, votre format (grains entiers ou moulus) et votre volume." },
  { n: "03", title: "Recurring delivery", titleFr: "Livraison récurrente", body: "We roast fresh and deliver on your schedule, so you're always stocked.", bodyFr: "Nous torréfions frais et livrons selon votre calendrier, pour que vous soyez toujours approvisionné." },
  { n: "04", title: "Serve with confidence", titleFr: "Servez en toute confiance", body: "Pour consistently excellent coffee for your guests, every single time.", bodyFr: "Servez un café constamment excellent à vos clients, à chaque fois." },
];

const FAQ_ITEMS = [
  {
    q: "Do you sell wholesale coffee beans to restaurants and cafés?",
    qFr: "Vendez-vous des grains de café en gros aux restaurants et cafés ?",
    a: "Yes. EZPZ supplies wholesale specialty coffee beans in bulk to restaurants, cafés, hotels, offices, and other businesses, roasted fresh in Montreal, available whole bean or ground, with recurring delivery.",
    aFr: "Oui. EZPZ fournit des grains de café de spécialité en gros aux restaurants, cafés, hôtels, bureaux et autres entreprises, torréfiés frais à Montréal, disponibles en grains entiers ou moulus, avec livraison récurrente.",
  },
  {
    q: "What's the difference between wholesale beans and private label?",
    qFr: "Quelle est la différence entre les grains en gros et la marque privée ?",
    a: "Wholesale beans are bulk coffee you brew and serve to your customers. Private label is coffee packaged in retail bags under your own brand to sell. EZPZ offers both — this program is for bulk beans you serve.",
    aFr: "Les grains en gros sont du café en vrac que vous infusez et servez à vos clients. La marque privée, c'est du café emballé dans des sacs de détail sous votre propre marque pour la vente. EZPZ offre les deux : ce programme concerne les grains en vrac que vous servez.",
  },
  {
    q: "Can I get coffee delivered on a recurring schedule?",
    qFr: "Puis-je recevoir du café selon un calendrier récurrent ?",
    a: "Yes. We set up recurring deliveries on a schedule that fits your usage, so your business never runs out, and your coffee always arrives freshly roasted.",
    aFr: "Oui. Nous mettons en place des livraisons récurrentes selon un calendrier adapté à votre utilisation, pour que votre entreprise ne manque jamais de café et que votre café arrive toujours fraîchement torréfié.",
  },
  {
    q: "Do you offer whole bean or ground wholesale coffee?",
    qFr: "Proposez-vous du café en gros en grains entiers ou moulus ?",
    a: "Both. We supply whole bean for your grinder or pre-ground to your machine's specification, whichever suits your setup.",
    aFr: "Les deux. Nous fournissons des grains entiers pour votre moulin ou pré-moulus selon les spécifications de votre machine, selon ce qui convient à votre configuration.",
  },
  {
    q: "Can I taste the coffee before ordering wholesale?",
    qFr: "Puis-je goûter le café avant de commander en gros ?",
    a: "Yes. We provide samples so you can taste and choose the right coffee for your business before committing to a standing order.",
    aFr: "Oui. Nous fournissons des échantillons pour que vous puissiez goûter et choisir le bon café pour votre entreprise avant de vous engager dans une commande régulière.",
  },
];

const WholesaleCoffeePage = () => {
  const locale = useLocale();
  const isFr = locale === "fr";
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const wholesaleHref = isFr ? `/${locale}/cafe-en-gros` : `/${locale}/wholesale-coffee-beans`;
  const privateLabelHref = `/${locale}/white-label-coffee-canada`;
  const coffeeHref = `/${locale}/coffee`;
  const contactQuoteHref = `/${locale}/contact?subject=${encodeURIComponent("Wholesale Coffee Inquiry")}`;
  const contactSampleHref = `/${locale}/contact?subject=${encodeURIComponent("Wholesale Sample Request")}`;

  return (
    <div className={styles.page}>

      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroGridOverlay} aria-hidden />
        <div className={styles.heroRadialGlow} aria-hidden />
        <div className={styles.heroContent}>
          <div className={styles.heroLeft}>
            <span className={styles.heroLabel}>
              {isFr ? "En gros · Café en vrac" : "Wholesale · Bulk Coffee"}
            </span>
            <h1 className={styles.heroTitle}>
              {isFr
                ? "Café en gros pour les entreprises qui servent un excellent café"
                : "Wholesale Coffee Beans for Businesses That Serve Great Coffee"}
            </h1>
            <p className={styles.heroSubtitle}>
              {isFr
                ? "Grains de qualité spécialité, torréfiés frais à Montréal, livrés à votre restaurant, café, hôtel ou bureau. Qualité constante à chaque lot, pour que le café que vous servez à vos clients soit toujours exceptionnel."
                : "Specialty-grade beans, roasted fresh in Montreal, delivered to your restaurant, café, hotel, or office. Consistent quality every batch, so the coffee you serve your guests is always exceptional."}
            </p>
            <div className={styles.heroBtnGroup}>
              <Link href={contactQuoteHref} className={styles.heroBtnPrimary}>
                {isFr ? "Demander les prix de gros" : "Request wholesale pricing"}
              </Link>
              <Link href={contactSampleHref} className={styles.heroBtnSecondary}>
                {isFr ? "Demander un échantillon" : "Request a sample"}
              </Link>
            </div>
            <div className={styles.heroStats}>
              <div className={styles.heroStat}>
                <span className={styles.heroStatNum}>{isFr ? "Torréfié à Montréal" : "Roasted in Montreal"}</span>
                <span className={styles.heroStatLabel}>{isFr ? "Frais, à la commande" : "Fresh, to order"}</span>
              </div>
              <div className={styles.heroStat}>
                <span className={styles.heroStatNum}>80+ SCA</span>
                <span className={styles.heroStatLabel}>{isFr ? "Qualité spécialité" : "Specialty grade"}</span>
              </div>
              <div className={styles.heroStat}>
                <span className={styles.heroStatNum}>{isFr ? "Livraison récurrente" : "Recurring delivery"}</span>
                <span className={styles.heroStatLabel}>{isFr ? "Calendrier sur mesure" : "Your schedule"}</span>
              </div>
            </div>
          </div>
          <div className={styles.heroRight} aria-hidden>
            <div className={styles.heroImageGlow} />
            <div className={styles.heroAccentDot1} />
            <div className={styles.heroAccentDot2} />
            <div className={styles.heroAccentDot3} />
            <div className={styles.heroAccentLine} />
            <svg viewBox="0 0 300 340" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "240px", maxWidth: "100%", filter: "drop-shadow(0 40px 80px rgba(0,0,0,0.7)) drop-shadow(0 0 40px rgba(193,122,58,0.15))" }}>
              <defs>
                <linearGradient id="sackGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#3d2510" />
                  <stop offset="100%" stopColor="#1a0d05" />
                </linearGradient>
                <linearGradient id="sackLight" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="rgba(255,255,255,0.06)" />
                  <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                </linearGradient>
              </defs>
              {/* Burlap sack body */}
              <path d="M60 90 Q50 100 45 160 Q40 230 50 280 Q60 310 150 315 Q240 310 250 280 Q260 230 255 160 Q250 100 240 90 Z" fill="url(#sackGrad)" stroke="rgba(193,122,58,0.3)" strokeWidth="1.5" />
              {/* Sack highlight */}
              <path d="M60 90 Q50 100 45 160 Q42 210 48 260" fill="none" stroke="url(#sackLight)" strokeWidth="20" />
              {/* Sack neck/tie */}
              <path d="M100 88 Q110 70 150 65 Q190 70 200 88 L196 92 Q180 78 150 74 Q120 78 104 92 Z" fill="#5a3520" stroke="rgba(193,122,58,0.3)" strokeWidth="1" />
              {/* Tie string */}
              <ellipse cx="150" cy="68" rx="28" ry="10" fill="none" stroke="rgba(193,122,58,0.7)" strokeWidth="3" />
              {/* Horizontal burlap weave lines */}
              {[120, 145, 170, 195, 220, 245, 270].map((y, i) => (
                <line key={y} x1={50 + i * 1.5} y1={y} x2={250 - i * 1.5} y2={y} stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
              ))}
              {/* Vertical burlap weave lines */}
              {[80, 110, 140, 170, 200, 230].map((x) => (
                <line key={x} x1={x} y1={95} x2={x} y2={305} stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
              ))}
              {/* Coffee beans scattered */}
              {[
                { cx: 110, cy: 160, r: 14, a: -20 },
                { cx: 155, cy: 175, r: 14, a: 15 },
                { cx: 195, cy: 158, r: 13, a: -10 },
                { cx: 125, cy: 210, r: 13, a: 25 },
                { cx: 170, cy: 225, r: 14, a: -5 },
                { cx: 205, cy: 205, r: 12, a: 30 },
                { cx: 140, cy: 255, r: 13, a: -15 },
                { cx: 180, cy: 268, r: 12, a: 20 },
              ].map(({ cx, cy, r, a }, i) => (
                <g key={i} transform={`rotate(${a}, ${cx}, ${cy})`}>
                  <ellipse cx={cx} cy={cy} rx={r} ry={r * 0.65} fill="#6b3a1f" stroke="rgba(193,122,58,0.4)" strokeWidth="0.8" />
                  <line x1={cx - r + 2} y1={cy} x2={cx + r - 2} y2={cy} stroke="rgba(0,0,0,0.4)" strokeWidth="1.2" />
                </g>
              ))}
              {/* Accent dot on sack */}
              <text x="150" y="142" fontFamily="serif" fontSize="8" fontWeight="800" fill="rgba(193,122,58,0.6)" textAnchor="middle" letterSpacing="2">EZPZ</text>
              <text x="150" y="152" fontFamily="serif" fontSize="6" fill="rgba(255,255,255,0.2)" textAnchor="middle" letterSpacing="1.5">SPECIALTY COFFEE</text>
            </svg>
          </div>
        </div>
      </section>

      {/* ── DIRECT-ANSWER AEO BLOCK ── */}
      <section className={styles.sectionLight} aria-labelledby="direct-answer-heading">
        <div className={styles.sectionInner}>
          <div
            data-speakable
            style={{
              background: "#f8f7f5",
              border: "1px solid #e8e3dc",
              borderLeft: "4px solid var(--color-accent)",
              padding: "1.75rem 2rem",
              borderRadius: "4px",
              maxWidth: "760px",
            }}
          >
            <p style={{ fontSize: "0.68rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.16em", color: "var(--color-accent)", margin: "0 0 0.75rem" }} id="direct-answer-heading">
              {isFr ? "Café en gros à Montréal" : "Wholesale coffee beans in Montreal"}
            </p>
            <p style={{ fontSize: "1rem", lineHeight: 1.7, color: "#374151", margin: 0 }}>
              {isFr
                ? "EZPZ fournit des grains de café de spécialité en gros aux restaurants, cafés, hôtels et bureaux partout au Canada. Le café est torréfié frais à Montréal, disponible en grains entiers ou moulus, avec une qualité constante et une livraison récurrente, pour que les entreprises puissent servir un café exceptionnel à leurs clients."
                : "EZPZ supplies wholesale specialty coffee beans in bulk to restaurants, cafés, hotels, and offices across Canada. The coffee is roasted fresh in Montreal, available whole bean or ground, with consistent quality and recurring delivery, so businesses can serve exceptional coffee to their guests."}
            </p>
          </div>
        </div>
      </section>

      {/* ── WHAT THIS IS ── */}
      <section className={styles.sectionDark} aria-labelledby="what-this-is-heading">
        <div className={styles.sectionInner}>
          <span className={styles.eyebrow}>{isFr ? "01_ Café en vrac, bien fait" : "01_ Bulk Coffee, Done Right"}</span>
          <h2 id="what-this-is-heading" className={styles.headlineDark}>
            {isFr ? "Un excellent café à servir, pas à revendre." : "Great coffee to serve, not to resell."}
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)", gap: "3rem" }}>
            <div>
              <p className={styles.bodyDark} style={{ maxWidth: "none" }}>
                {isFr
                  ? "C'est notre programme de grains en gros : du café simple, de haute qualité et en vrac pour les entreprises qui servent du café à leurs clients. Que vous dirigiez un restaurant, un café, un hôtel, un bureau ou tout espace où les gens boivent du café, nous fournissons les grains que vous infusez et servez."
                  : "This is our wholesale bean program — straightforward, high-quality coffee in bulk for businesses that serve coffee to their customers. If you run a restaurant, café, hotel, office, or any space where people drink coffee, we supply the beans you brew and serve."}
              </p>
              <p className={styles.bodyDark} style={{ maxWidth: "none" }}>
                {isFr
                  ? "Pas de branding ni d'emballage nécessaire : il s'agit du café lui-même, de qualité spécialité, traçable, torréfié frais et constant d'un lot à l'autre. Vous obtenez un café de qualité café pour votre moulin ou votre machine, livré selon un calendrier qui vous garde approvisionné."
                  : "No branding or packaging needed — this is about the coffee itself: specialty-grade, traceable, roasted fresh, and consistent batch after batch. You get café-quality coffee for your grinder or machine, delivered on a schedule that keeps you stocked."}
              </p>
            </div>
            <div>
              <p className={styles.bodyDark} style={{ maxWidth: "none" }}>
                {isFr
                  ? "(Si vous cherchez à vendre du café sous votre propre marque dans des sacs de détail, c'est notre service de marque privée. Cette page concerne spécifiquement les grains en vrac que vous servez.)"
                  : "(If you're looking to sell coffee under your own brand in retail bags, that's our private-label service — this page is specifically for bulk beans you serve.)"}
              </p>
              <div style={{ marginTop: "1.5rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <Link
                  href={privateLabelHref}
                  style={{ display: "inline-flex", alignItems: "center", gap: "0.4em", fontSize: "0.85rem", fontWeight: 700, color: "var(--color-accent)", textDecoration: "none", borderBottom: "1.5px solid var(--color-accent)", paddingBottom: "2px", alignSelf: "flex-start" }}
                >
                  {isFr ? "Explorer la marque privée →" : "Explore private-label coffee →"}
                </Link>
                <Link
                  href={coffeeHref}
                  style={{ display: "inline-flex", alignItems: "center", gap: "0.4em", fontSize: "0.85rem", fontWeight: 700, color: "rgba(255,255,255,0.5)", textDecoration: "none", borderBottom: "1.5px solid rgba(255,255,255,0.2)", paddingBottom: "2px", alignSelf: "flex-start" }}
                >
                  {isFr ? "En savoir plus sur notre café →" : "Learn about our coffee origins →"}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO IT'S FOR ── */}
      <section className={styles.sectionLight} aria-labelledby="who-heading">
        <div className={styles.sectionInner}>
          <span className={styles.eyebrow}>{isFr ? "02_ Qui nous approvisionnons" : "02_ Who We Supply"}</span>
          <h2 id="who-heading" className={styles.headlineLight}>
            {isFr ? "Conçu pour les entreprises qui servent du café." : "Built for businesses that serve coffee."}
          </h2>
          <div className={styles.cardsGrid6}>
            {WHO_ITS_FOR.map((item, i) => (
              <article key={i} className={styles.card}>
                <span className={styles.cardEmoji} aria-hidden>{item.emoji}</span>
                <h3 className={styles.cardTitle}>{isFr ? item.titleFr : item.title}</h3>
                <p className={styles.cardBody}>{isFr ? item.bodyFr : item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY EZPZ ── */}
      <section className={styles.sectionGray} aria-labelledby="why-heading">
        <div className={styles.sectionInner}>
          <span className={styles.eyebrow}>{isFr ? "03_ Pourquoi EZPZ" : "03_ Why EZPZ"}</span>
          <h2 id="why-heading" className={styles.headlineMedium}>
            {isFr ? "Constance, fraîcheur et vraie qualité spécialité." : "Consistency, freshness, and real specialty quality."}
          </h2>
          <div className={styles.cardsGrid6}>
            {WHY_EZPZ.map((item, i) => (
              <article key={i} className={styles.card}>
                <span className={styles.cardEmoji} aria-hidden>{item.emoji}</span>
                <h3 className={styles.cardTitle}>{isFr ? item.titleFr : item.title}</h3>
                <p className={styles.cardBody}>{isFr ? item.bodyFr : item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── COFFEE OPTIONS ── */}
      <section className={styles.sectionDark} aria-labelledby="coffee-heading">
        <div className={styles.sectionInner}>
          <span className={styles.eyebrow}>{isFr ? "04_ Le café" : "04_ The Coffee"}</span>
          <h2 id="coffee-heading" className={styles.headlineDark}>
            {isFr ? "Un café dont vos clients se souviendront." : "Coffee your guests will remember."}
          </h2>
          <p className={styles.bodyDark}>
            {isFr
              ? "Nous travaillons avec du café de qualité spécialité traçable (SCA 80+) : origines uniques d'Éthiopie, de Colombie, du Guatemala et du Brésil, plus des mélanges personnalisés et du déca. Pour la plupart des entreprises, une torréfaction médium douce et équilibrée est le café de maison parfait pour plaire à tous, et une torréfaction foncée robuste est une excellente deuxième option. Nous vous aidons à choisir le bon café pour votre menu et vos clients, et vous pouvez goûter des échantillons avant de vous engager. Disponible en grains entiers ou moulus selon vos spécifications."
              : "We work with traceable, specialty-grade coffee (80+ SCA) — single origins from Ethiopia, Colombia, Guatemala, and Brazil, plus custom blends and decaf. For most businesses, a smooth, balanced medium roast is the perfect crowd-pleasing house coffee, and a bold dark roast is a great second option. We'll help you choose the right coffee for your menu and your customers, and you can taste samples before you commit. Available whole bean or ground to your specification."}
          </p>
          <div style={{ marginTop: "1.5rem" }}>
            <Link
              href={coffeeHref}
              style={{ display: "inline-flex", alignItems: "center", gap: "0.4em", fontSize: "0.85rem", fontWeight: 700, color: "var(--color-accent)", textDecoration: "none", borderBottom: "1.5px solid var(--color-accent)", paddingBottom: "2px" }}
            >
              {isFr ? "Explorer nos origines de café →" : "Explore our coffee origins →"}
            </Link>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className={styles.sectionLight} aria-labelledby="how-heading">
        <div className={styles.sectionInner}>
          <span className={styles.eyebrow}>{isFr ? "05_ Comment ça fonctionne" : "05_ How It Works"}</span>
          <h2 id="how-heading" className={styles.headlineLight}>
            {isFr ? "De l'échantillon à la commande régulière." : "From sample to standing order."}
          </h2>
          <div className={styles.processSteps}>
            {HOW_IT_WORKS.map((step) => (
              <div key={step.n} className={styles.processStep}>
                <div className={styles.processStepNum}>{step.n}</div>
                <div className={styles.processStepContent}>
                  <h3 className={styles.processStepTitle}>{isFr ? step.titleFr : step.title}</h3>
                  <p className={styles.processStepBody}>{isFr ? step.bodyFr : step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className={styles.sectionGray} aria-labelledby="pricing-heading">
        <div className={styles.sectionInner}>
          <span className={styles.eyebrow}>{isFr ? "06_ Tarification" : "06_ Pricing"}</span>
          <h2 id="pricing-heading" className={styles.headlineMedium}>
            {isFr ? "Des prix de gros concurrentiels." : "Competitive wholesale pricing."}
          </h2>
          <p style={{ fontSize: "1rem", lineHeight: 1.7, color: "#6b7280", maxWidth: "640px", margin: "1rem 0 2rem" }}>
            {isFr
              ? "Grâce à notre volume de torréfaction, nous offrons des prix de gros réellement concurrentiels sans compromettre la qualité. Vous obtenez du café de qualité spécialité à un prix adapté aux entreprises. Les prix dépendent du café et de votre volume, et s'améliorent à mesure que vos commandes augmentent. Contactez-nous pour un devis de gros adapté à votre entreprise."
              : "Thanks to our roasting volume, we offer genuinely competitive wholesale pricing without compromising on quality — you get specialty-grade coffee at a price that works for a business. Pricing depends on the coffee and your volume, and improves as your orders grow. Contact us for a wholesale quote tailored to your business."}
          </p>
          <Link href={contactQuoteHref} className={styles.investmentCta}>
            {isFr ? "Demander les prix de gros" : "Request wholesale pricing"}
          </Link>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className={styles.sectionLight} aria-labelledby="faq-heading">
        <div className={styles.sectionInner}>
          <span className={styles.eyebrow}>07_ FAQ</span>
          <h2 id="faq-heading" className={styles.headlineLight}>
            {isFr ? "Vos questions sur le café en gros" : "Wholesale Coffee Questions Answered"}
          </h2>
          <dl style={{ display: "flex", flexDirection: "column", gap: 0, marginTop: "2rem" }}>
            {FAQ_ITEMS.map((item, i) => (
              <div key={i} style={{ borderBottom: "1px solid #e5e7eb" }}>
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                  style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1.4rem 0", background: "none", border: "none", cursor: "pointer", textAlign: "left", gap: "1rem" }}
                >
                  <dt style={{ fontSize: "1rem", fontWeight: 700, color: "#111", margin: 0 }}>{isFr ? item.qFr : item.q}</dt>
                  <span style={{ flexShrink: 0, fontSize: "1.2rem", color: "var(--color-accent)", fontWeight: 300 }} aria-hidden>{openFaq === i ? "−" : "+"}</span>
                </button>
                {openFaq === i && (
                  <dd style={{ fontSize: "0.95rem", lineHeight: 1.7, color: "#6b7280", margin: 0, paddingBottom: "1.4rem" }}>{isFr ? item.aFr : item.a}</dd>
                )}
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className={styles.finalCta} aria-labelledby="final-cta-heading">
        <div className={styles.finalCtaInner}>
          <h2 id="final-cta-heading" className={styles.finalCtaTitle}>
            {isFr ? "Servez un café pour lequel vos clients reviendront." : "Serve coffee your guests will come back for."}
          </h2>
          <p className={styles.finalCtaSubtext}>
            {isFr
              ? "Grains de qualité spécialité en gros, torréfiés frais à Montréal, livrés selon votre calendrier. Demandez un échantillon ou un devis de gros dès aujourd'hui."
              : "Specialty-grade wholesale beans, roasted fresh in Montreal, delivered on your schedule. Request a sample or a wholesale quote today."}
          </p>
          <div className={styles.finalCtaButtons}>
            <Link href={contactQuoteHref} className={styles.finalCtaPrimary}>
              {isFr ? "Demander les prix de gros" : "Request wholesale pricing"}
            </Link>
            <Link href={contactSampleHref} className={styles.finalCtaSecondary}>
              {isFr ? "Demander un échantillon" : "Request a sample"}
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default WholesaleCoffeePage;
