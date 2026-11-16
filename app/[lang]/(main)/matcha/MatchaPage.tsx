"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import { useState } from "react";

import styles from "../services/servicePages.module.scss";

const MATCHA_GREEN = "#3a7c2a";
const MATCHA_GLOW = "rgba(58, 124, 42, 0.07)";
const MATCHA_GLOW_STRONG = "rgba(58, 124, 42, 0.18)";

const BENEFIT_CARDS = [
  {
    emoji: "🍃",
    title: "100% Pure, Premium Grade",
    titleFr: "100 % pur, qualité premium",
    body: "No fillers, no blends. Just high-grade Japanese matcha stone-ground from shade-grown tencha leaves.",
    bodyFr: "Aucun remplissage, aucun mélange. Du matcha japonais de haute qualité broyé à la pierre à partir de feuilles de tencha cultivées à l'ombre.",
  },
  {
    emoji: "🌿",
    title: "Certified Organic",
    titleFr: "Certifié biologique",
    body: "Product of Japan. Certified organic and meets Canadian organic standards. Clean from the farm.",
    bodyFr: "Produit du Japon. Certifié biologique et conforme aux normes biologiques canadiennes. Propre depuis la ferme.",
  },
  {
    emoji: "✨",
    title: "Rich in Antioxidants",
    titleFr: "Riche en antioxydants",
    body: "Naturally packed with EGCG and L-theanine for smooth, focused energy without the crash.",
    bodyFr: "Naturellement riche en EGCG et en L-théanine pour une énergie douce et concentrée sans coup de barre.",
  },
  {
    emoji: "🥤",
    title: "Vibrant & Versatile",
    titleFr: "Vibrant et polyvalent",
    body: "Brilliant green colour. Clean, earthy taste that works whisked, in lattes, smoothies, and recipes.",
    bodyFr: "Couleur verte brillante. Goût propre et terreux qui fonctionne fouetté, en lattes, smoothies et recettes.",
  },
];

const OPTIONS = [
  {
    emoji: "🏷️",
    title: "85g Pouch — No Minimum",
    titleFr: "Sachet 85g — Aucun minimum",
    body: "Your label applied to our standard 85g matcha pouch. The pouch carries a small EZPZ logo, same model as our coffee bags. Start with one unit.",
    bodyFr: "Votre étiquette apposée sur notre sachet de matcha 85g standard. Le sachet porte un petit logo EZPZ, le même modèle que nos sacs de café. Commencez avec une seule unité.",
    badge: null,
  },
  {
    emoji: "📦",
    title: "Bulk",
    titleFr: "En vrac",
    body: "Need higher volumes for packaging in-house or for wholesale? Contact us and we will work out the details.",
    bodyFr: "Besoin de volumes plus importants pour emballer en interne ou pour la vente en gros ? Contactez-nous et nous travaillerons les détails.",
    badge: null,
  },
  {
    emoji: "🎨",
    title: "Fully Custom Pouch",
    titleFr: "Sachet entièrement personnalisé",
    body: "Your own fully branded packaging with no EZPZ branding anywhere. Available from 5,000 units.",
    bodyFr: "Votre emballage entièrement personnalisé sans aucune marque EZPZ. Disponible à partir de 5 000 unités.",
    badge: "5,000 unit minimum",
  },
];

const WHO_ITS_FOR = [
  { emoji: "☕", title: "Coffee Brands", titleFr: "Marques de café", body: "Add a matcha SKU alongside your coffee line to serve customers who want an alternative.", bodyFr: "Ajoutez un produit matcha à côté de votre gamme café pour servir les clients qui veulent une alternative." },
  { emoji: "🍵", title: "Cafes & Restaurants", titleFr: "Cafés et restaurants", body: "Offer branded matcha lattes and ceremonial bowls with your name on the bag behind the bar.", bodyFr: "Offrez des lattes au matcha de marque et des bols cérémoniaux avec votre nom sur le sachet derrière le bar." },
  { emoji: "🌱", title: "Wellness Brands", titleFr: "Marques bien-être", body: "Matcha's antioxidants and L-theanine fit naturally into a wellness or supplement brand.", bodyFr: "Les antioxydants et la L-théanine du matcha s'intègrent naturellement dans une marque de bien-être ou de suppléments." },
  { emoji: "🏨", title: "Hotels & Hospitality", titleFr: "Hôtels et hôtellerie", body: "A branded matcha pouch on the in-room tray elevates the experience beyond the standard coffee packet.", bodyFr: "Un sachet de matcha de marque sur le plateau de chambre améliore l'expérience au-delà du sachet de café standard." },
  { emoji: "🛍️", title: "Retailers & Boutiques", titleFr: "Détaillants et boutiques", body: "High-margin, shelf-stable, and genuinely premium — matcha is an easy sell to a health-conscious customer.", bodyFr: "À haute marge, stable en rayon et vraiment premium, le matcha se vend facilement auprès d'une clientèle soucieuse de sa santé." },
  { emoji: "🔁", title: "Subscription & DTC", titleFr: "Abonnement et vente directe", body: "Lightweight, shelf-stable, and easy to ship. Add it to your coffee subscription or sell it as a standalone SKU.", bodyFr: "Léger, stable en rayon et facile à expédier. Ajoutez-le à votre abonnement café ou vendez-le comme produit autonome." },
];

const PROCESS_STEPS = [
  {
    num: "01",
    title: "Contact us",
    titleFr: "Contactez-nous",
    body: "Tell us about your brand, your volume, and what you have in mind. We will respond quickly.",
    bodyFr: "Parlez-nous de votre marque, de votre volume et de ce que vous avez en tête. Nous répondrons rapidement.",
  },
  {
    num: "02",
    title: "Choose your format",
    titleFr: "Choisissez votre format",
    body: "85g sticker pouch, bulk supply, or fully custom packaging. We help you pick what fits your brand and budget.",
    bodyFr: "Sachet 85g avec étiquette, approvisionnement en vrac ou emballage entièrement personnalisé. Nous vous aidons à choisir ce qui correspond à votre marque et à votre budget.",
  },
  {
    num: "03",
    title: "Send your logo or label",
    titleFr: "Envoyez votre logo ou étiquette",
    body: "We apply your branding to the pouch. For the sticker route, send your design and we handle the rest.",
    bodyFr: "Nous apposons votre marque sur le sachet. Pour la voie autocollante, envoyez votre design et nous nous occupons du reste.",
  },
  {
    num: "04",
    title: "We fill and package",
    titleFr: "Nous remplissons et emballons",
    body: "Your matcha is weighed, sealed, and packaged under your brand. Quality checked before it ships.",
    bodyFr: "Votre matcha est pesé, scellé et emballé sous votre marque. Vérifié avant l'expédition.",
  },
  {
    num: "05",
    title: "You sell",
    titleFr: "Vous vendez",
    body: "Receive your branded matcha, ready for your shelves, your café, or your online store.",
    bodyFr: "Recevez votre matcha de marque, prêt pour vos tablettes, votre café ou votre boutique en ligne.",
  },
];

const FAQ_ITEMS = [
  {
    q: "Is the matcha certified organic?",
    qFr: "Le matcha est-il certifié biologique ?",
    a: "Yes. Our matcha is 100% certified organic and a product of Japan. It meets Canadian organic standards and is completely free of pesticides and additives.",
    aFr: "Oui. Notre matcha est 100 % certifié biologique et est un produit du Japon. Il répond aux normes biologiques canadiennes et est entièrement exempt de pesticides et d'additifs.",
  },
  {
    q: "Is there a minimum order?",
    qFr: "Y a-t-il un minimum de commande ?",
    a: "No minimum order for the 85g pouch with your label applied — start with as many as you need. For fully custom branded pouches with no EZPZ branding, the minimum is 5,000 units. Contact us for bulk supply details.",
    aFr: "Aucun minimum de commande pour le sachet 85g avec votre étiquette appliquée. Commencez avec la quantité dont vous avez besoin. Pour les sachets entièrement personnalisés sans marque EZPZ, le minimum est de 5 000 unités. Contactez-nous pour les détails sur l'approvisionnement en vrac.",
  },
  {
    q: "Can I add matcha to my existing coffee line?",
    qFr: "Puis-je ajouter du matcha à ma gamme de café existante ?",
    a: "Absolutely. Matcha is a natural complement to a coffee brand — it gives your customers a caffeine-alternative and broadens your product range without adding complexity on your end. Many of our coffee clients are adding matcha as a second SKU.",
    aFr: "Absolument. Le matcha est un complément naturel à une marque de café. Il offre à vos clients une alternative à la caféine et élargit votre gamme de produits sans ajouter de complexité de votre côté. Plusieurs de nos clients café ajoutent le matcha comme deuxième produit.",
  },
  {
    q: "How do I get pricing?",
    qFr: "Comment obtenir les prix ?",
    a: "We do not publish matcha pricing publicly — contact us at help@ezpz.coffee or use the form below and we will put together a quote based on your format and volume.",
    aFr: "Nous ne publions pas les prix du matcha publiquement. Contactez-nous à help@ezpz.coffee ou utilisez le formulaire ci-dessous et nous préparerons un devis selon votre format et votre volume.",
  },
];

const MatchaPage = () => {
  const locale = useLocale();
  const isFr = locale === "fr";
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const ctaHref = `/${locale}/contact?subject=${encodeURIComponent("Matcha Inquiry")}`;
  const ctaLabel = isFr ? "Contactez-nous pour les prix" : "Contact us for pricing";

  return (
    <div className={styles.page}>

      {/* ── HERO ── */}
      <section className={styles.hero} style={{ borderColor: "rgba(58,124,42,0.3)" }}>
        <div
          className={styles.heroBg}
          style={{ background: "linear-gradient(135deg, #071a04 0%, #0f2a08 50%, #071a04 100%)" }}
        />
        <div className={styles.heroGridOverlay} aria-hidden />
        <div
          className={styles.heroRadialGlow}
          aria-hidden
          style={{ background: `radial-gradient(ellipse 60% 50% at 75% 50%, ${MATCHA_GLOW} 0%, transparent 70%)` }}
        />
        <div className={styles.heroContent}>
          <div className={styles.heroLeft}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                fontSize: "0.68rem",
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: "0.14em",
                color: "#4a9c3a",
                background: "rgba(74,156,58,0.1)",
                border: "1px solid rgba(74,156,58,0.3)",
                padding: "0.3em 0.8em",
                marginBottom: "1rem",
              }}
            >
              ★ {isFr ? "Nouveau produit" : "New product"}
            </span>
            <span className={styles.heroLabel} style={{ color: "#4a9c3a" }}>
              {isFr ? "01_ Matcha biologique japonais en marque blanche" : "01_ White-Label Organic Japanese Matcha"}
            </span>
            <h1 className={styles.heroTitle}>
              {isFr ? (
                <>Matcha japonais<br />biologique<br />en marque blanche.</>
              ) : (
                <>White-Label<br />Organic Japanese<br />Matcha.</>
              )}
            </h1>
            <p className={styles.heroSubtitle}>
              {isFr
                ? "Ajoutez du matcha biologique japonais premium à votre marque, avec le même programme d'étiquette personnalisée sans minimum que notre café."
                : "Add premium organic matcha to your brand, with the same no-minimum, custom-label program as our coffee."}
            </p>
            <div className={styles.heroBtnGroup}>
              <Link href={ctaHref} className={styles.heroBtnPrimary} style={{ background: MATCHA_GREEN, borderColor: MATCHA_GREEN }}>
                {ctaLabel}
              </Link>
              <Link href={`mailto:help@ezpz.coffee?subject=Matcha%20Inquiry`} className={styles.heroBtnSecondary}>
                help@ezpz.coffee
              </Link>
            </div>
            <div className={styles.heroStats}>
              <div className={styles.heroStat}>
                <span className={styles.heroStatNum} style={{ color: "#4a9c3a" }}>{isFr ? "Certifié biologique" : "Certified organic"}</span>
                <span className={styles.heroStatLabel}>{isFr ? "Produit du Japon" : "Product of Japan"}</span>
              </div>
              <div className={styles.heroStat}>
                <span className={styles.heroStatNum} style={{ color: "#4a9c3a" }}>{isFr ? "Sans minimum" : "No minimum"}</span>
                <span className={styles.heroStatLabel}>{isFr ? "Sachet 85g" : "85g pouch"}</span>
              </div>
              <div className={styles.heroStat}>
                <span className={styles.heroStatNum} style={{ color: "#4a9c3a" }}>~9 {isFr ? "mois" : "months"}</span>
                <span className={styles.heroStatLabel}>{isFr ? "Durée de conservation" : "Shelf life"}</span>
              </div>
            </div>
          </div>

          {/* Matcha pouch SVG */}
          <div className={styles.heroRight} aria-hidden>
            <div
              className={styles.heroImageGlow}
              style={{ background: `radial-gradient(ellipse 70% 60% at 50% 50%, ${MATCHA_GLOW_STRONG} 0%, transparent 70%)` }}
            />
            <div className={styles.heroAccentDot1} style={{ background: "#4a9c3a" }} />
            <div className={styles.heroAccentDot2} style={{ background: "#4a9c3a" }} />
            <div className={styles.heroAccentDot3} />
            <div
              className={styles.heroAccentLine}
              style={{ background: "linear-gradient(90deg, transparent, rgba(74,156,58,0.5))" }}
            />
            <svg
              viewBox="0 0 300 420"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                width: "200px",
                maxWidth: "100%",
                filter: "drop-shadow(0 40px 80px rgba(0,0,0,0.7)) drop-shadow(0 0 40px rgba(58,124,42,0.15))",
              }}
            >
              <defs>
                <linearGradient id="pouchGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#0f2a08" />
                  <stop offset="100%" stopColor="#071a04" />
                </linearGradient>
                <linearGradient id="topGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#2d6b1f" />
                  <stop offset="100%" stopColor="#1a4a10" />
                </linearGradient>
                <linearGradient id="matchaAccent" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#2d6b1f" />
                  <stop offset="100%" stopColor="#4a9c3a" />
                </linearGradient>
              </defs>
              {/* Pouch body */}
              <path d="M50 100 Q50 80 65 80 L235 80 Q250 80 250 100 L260 350 Q260 370 240 370 L60 370 Q40 370 40 350 Z" fill="url(#pouchGrad)" stroke="rgba(74,156,58,0.25)" strokeWidth="1.5" />
              {/* Label area */}
              <rect x="65" y="118" width="170" height="215" rx="8" fill="rgba(74,156,58,0.07)" stroke="rgba(74,156,58,0.15)" strokeWidth="1" />
              {/* Green accent stripe */}
              <rect x="65" y="118" width="170" height="5" rx="2" fill="url(#matchaAccent)" />
              {/* Organic label */}
              <text x="150" y="172" fontFamily="Georgia,serif" fontSize="9" fontWeight="800" fill="rgba(74,156,58,0.9)" textAnchor="middle" letterSpacing="3">ORGANIC</text>
              {/* Product name */}
              <text x="150" y="208" fontFamily="Georgia,serif" fontSize="22" fontWeight="900" fill="rgba(255,255,255,0.9)" textAnchor="middle">MATCHA</text>
              {/* Subtitle */}
              <text x="150" y="228" fontFamily="Georgia,serif" fontSize="8" fontWeight="700" fill="rgba(255,255,255,0.4)" textAnchor="middle" letterSpacing="2">JAPANESE · 85g</text>
              {/* Divider */}
              <line x1="85" y1="244" x2="215" y2="244" stroke="rgba(74,156,58,0.25)" strokeWidth="1" />
              {/* Details */}
              <text x="150" y="265" fontFamily="Georgia,serif" fontSize="7" fill="rgba(255,255,255,0.28)" textAnchor="middle">PREMIUM GRADE · PRODUCT OF JAPAN</text>
              <text x="150" y="282" fontFamily="Georgia,serif" fontSize="7" fill="rgba(255,255,255,0.28)" textAnchor="middle">CERTIFIED ORGANIC · GLUTEN FREE</text>
              {/* Top seal */}
              <rect x="40" y="58" width="220" height="30" rx="5" fill="url(#topGrad)" />
              <rect x="65" y="66" width="170" height="5" rx="2" fill="rgba(255,255,255,0.1)" />
              {/* Tear notch */}
              <polygon points="150,90 156,78 144,78" fill="rgba(255,255,255,0.12)" />
              {/* Shine */}
              <rect x="65" y="118" width="8" height="215" rx="4" fill="rgba(255,255,255,0.03)" />
            </svg>
          </div>
        </div>
      </section>

      {/* ── DIRECT ANSWER ── */}
      <section className={styles.sectionLight} aria-labelledby="matcha-answer-heading">
        <div className={styles.sectionInner}>
          <div
            data-speakable
            style={{
              background: "#f4faf2",
              border: "1px solid #c8e6c0",
              borderLeft: `4px solid ${MATCHA_GREEN}`,
              padding: "1.75rem 2rem",
              borderRadius: "4px",
              maxWidth: "760px",
            }}
          >
            <p
              style={{
                fontSize: "0.68rem",
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: "0.16em",
                color: MATCHA_GREEN,
                margin: "0 0 0.75rem",
              }}
              id="matcha-answer-heading"
            >
              {isFr ? "Qu'est-ce que le matcha biologique en marque blanche ?" : "What is white-label organic matcha?"}
            </p>
            <p style={{ fontSize: "1rem", lineHeight: 1.7, color: "#374151", margin: 0 }}>
              {isFr
                ? "Le matcha biologique japonais en marque blanche vous permet de vendre un matcha premium sous votre propre marque sans vous soucier de la production. EZPZ s'occupe du sourçage, de l'emballage et de l'étiquetage. Aucun minimum de commande pour le sachet 85g. Un moyen simple d'ajouter du matcha à votre gamme de café ou de lancer une nouvelle ligne."
                : "White-label organic matcha lets you sell premium matcha under your own brand without handling production. EZPZ sources, fills, and labels it for you. No minimum order on the 85g pouch. A simple way to add matcha to your coffee line or launch a new product."}
            </p>
          </div>
        </div>
      </section>

      {/* ── ABOUT THE MATCHA ── */}
      <section className={styles.sectionDark} aria-labelledby="about-heading">
        <div className={styles.sectionInner}>
          <span className={styles.eyebrow} style={{ color: "#4a9c3a" }}>
            {isFr ? "02_ À propos du matcha" : "02_ About the Matcha"}
          </span>
          <h2 id="about-heading" className={styles.headlineDark}>
            {isFr ? "Un matcha qui mérite votre marque." : "A matcha worth your brand."}
          </h2>
          <div className={styles.cardsGrid}>
            {BENEFIT_CARDS.map((item, i) => (
              <article
                key={i}
                className={styles.card}
                style={{ background: "#0f1a0a", border: "1px solid rgba(74,156,58,0.15)" }}
              >
                <span className={styles.cardEmoji} aria-hidden>{item.emoji}</span>
                <h3 className={styles.cardTitle} style={{ color: "rgba(255,255,255,0.88)" }}>
                  {isFr ? item.titleFr : item.title}
                </h3>
                <p className={styles.cardBody} style={{ color: "rgba(255,255,255,0.45)" }}>
                  {isFr ? item.bodyFr : item.body}
                </p>
              </article>
            ))}
          </div>
          <div
            style={{
              marginTop: "2.5rem",
              padding: "1.5rem 2rem",
              background: "rgba(74,156,58,0.06)",
              border: "1px solid rgba(74,156,58,0.15)",
              borderRadius: "4px",
              display: "flex",
              flexWrap: "wrap",
              gap: "1.5rem",
              alignItems: "center",
            }}
          >
            {(isFr
              ? ["Sachet de 85g", "Disponible en vrac", "Durée de conservation de 9 mois", "Sans gluten", "Broyé à la pierre"]
              : ["85g pouch", "Available in bulk", "9-month shelf life", "Gluten-free", "Stone-ground"]
            ).map((tag) => (
              <span
                key={tag}
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  padding: "0.35em 0.9em",
                  background: "rgba(74,156,58,0.08)",
                  border: "1px solid rgba(74,156,58,0.25)",
                  color: "#4a9c3a",
                  borderRadius: "2px",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHITE-LABEL OPTIONS ── */}
      <section className={styles.sectionLight} aria-labelledby="options-heading">
        <div className={styles.sectionInner}>
          <span className={styles.eyebrow} style={{ color: MATCHA_GREEN }}>
            {isFr ? "03_ Options en marque blanche" : "03_ White-Label Options"}
          </span>
          <h2 id="options-heading" className={styles.headlineLight}>
            {isFr ? "Commencez petit. Grandissez à votre rythme." : "Start small. Scale at your pace."}
          </h2>
          <div className={styles.cardsGrid} style={{ gridTemplateColumns: "repeat(3,1fr)" }}>
            {OPTIONS.map((opt, i) => (
              <article
                key={i}
                className={styles.card}
                style={{
                  borderBottom: i === 2 ? `3px solid ${MATCHA_GREEN}` : undefined,
                  position: "relative",
                }}
              >
                {opt.badge && (
                  <span
                    style={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                      background: MATCHA_GREEN,
                      color: "#fff",
                      fontSize: "0.65rem",
                      fontWeight: 800,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      padding: "0.3em 0.7em",
                    }}
                  >
                    {isFr ? "Minimum 5 000 unités" : opt.badge}
                  </span>
                )}
                <span className={styles.cardEmoji} aria-hidden>{opt.emoji}</span>
                <h3 className={styles.cardTitle}>{isFr ? opt.titleFr : opt.title}</h3>
                <p className={styles.cardBody}>{isFr ? opt.bodyFr : opt.body}</p>
                <Link
                  href={ctaHref}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    marginTop: "auto",
                    paddingTop: "0.75rem",
                    fontSize: "0.82rem",
                    fontWeight: 700,
                    color: MATCHA_GREEN,
                    textDecoration: "none",
                    borderBottom: `2px solid ${MATCHA_GREEN}`,
                    paddingBottom: "2px",
                  }}
                >
                  {ctaLabel} →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO IT'S FOR ── */}
      <section className={styles.sectionGray} aria-labelledby="who-heading">
        <div className={styles.sectionInner}>
          <span className={styles.eyebrow} style={{ color: MATCHA_GREEN }}>
            {isFr ? "04_ Pour qui" : "04_ Who It's For"}
          </span>
          <h2 id="who-heading" className={styles.headlineMedium}>
            {isFr ? "Un produit premium pour les marques modernes." : "A premium product for modern brands."}
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

      {/* ── HOW IT WORKS ── */}
      <section className={styles.sectionLight} aria-labelledby="how-heading">
        <div className={styles.sectionInner}>
          <span className={styles.eyebrow} style={{ color: MATCHA_GREEN }}>
            {isFr ? "05_ Comment ça fonctionne" : "05_ How It Works"}
          </span>
          <h2 id="how-heading" className={styles.headlineLight}>
            {isFr ? "De votre logo au produit fini." : "From your logo to finished product."}
          </h2>
          <div className={styles.processSteps}>
            {PROCESS_STEPS.map((step) => (
              <div key={step.num} className={styles.processStep}>
                <div className={styles.processStepNum} style={{ color: MATCHA_GREEN }}>{step.num}</div>
                <div className={styles.processStepContent}>
                  <h3 className={styles.processStepTitle}>{isFr ? step.titleFr : step.title}</h3>
                  <p className={styles.processStepBody}>{isFr ? step.bodyFr : step.body}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: "2.5rem", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link
              href={ctaHref}
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "0.85em 2em",
                background: MATCHA_GREEN,
                color: "#fff",
                fontSize: "0.88rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.07em",
                textDecoration: "none",
                border: `2px solid ${MATCHA_GREEN}`,
              }}
            >
              {ctaLabel}
            </Link>
            <Link
              href={`/${locale}/white-label`}
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "0.85em 2em",
                background: "transparent",
                color: "#111",
                fontSize: "0.88rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.07em",
                textDecoration: "none",
                border: "2px solid #ddd",
              }}
            >
              {isFr ? "Voir nos solutions café →" : "See our coffee program →"}
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className={styles.sectionGray} aria-labelledby="faq-heading">
        <div className={styles.sectionInner}>
          <span className={styles.eyebrow} style={{ color: MATCHA_GREEN }}>06_ FAQ</span>
          <h2 id="faq-heading" className={styles.headlineMedium}>
            {isFr ? "Vos questions, nos réponses" : "Your questions, answered"}
          </h2>
          <dl style={{ display: "flex", flexDirection: "column", gap: 0, marginTop: "2rem" }}>
            {FAQ_ITEMS.map((item, i) => (
              <div key={i} style={{ borderBottom: "1px solid #e5e7eb", padding: "0" }}>
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "1.4rem 0",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                    gap: "1rem",
                  }}
                >
                  <dt style={{ fontSize: "1rem", fontWeight: 700, color: "#111", margin: 0 }}>
                    {isFr ? item.qFr : item.q}
                  </dt>
                  <span
                    style={{ flexShrink: 0, fontSize: "1.2rem", color: MATCHA_GREEN, fontWeight: 300 }}
                    aria-hidden
                  >
                    {openFaq === i ? "−" : "+"}
                  </span>
                </button>
                {openFaq === i && (
                  <dd style={{ fontSize: "0.95rem", lineHeight: 1.7, color: "#6b7280", margin: 0, paddingBottom: "1.4rem" }}>
                    {isFr ? item.aFr : item.a}
                  </dd>
                )}
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section
        className={styles.finalCta}
        style={{ background: MATCHA_GREEN }}
        aria-labelledby="final-cta-heading"
      >
        <div className={styles.finalCtaInner}>
          <h2 id="final-cta-heading" className={styles.finalCtaTitle}>
            {isFr
              ? "Ajoutez du matcha biologique japonais à votre marque."
              : "Add organic Japanese matcha to your brand."}
          </h2>
          <p className={styles.finalCtaSubtext}>
            {isFr
              ? "100 % certifié biologique, produit du Japon, étiquette personnalisée, aucun minimum. Contactez-nous pour obtenir les prix."
              : "100% certified organic, product of Japan, custom-label, no minimum. Contact us for pricing."}
          </p>
          <div className={styles.finalCtaButtons}>
            <Link href={ctaHref} className={styles.finalCtaPrimary}>
              {ctaLabel}
            </Link>
            <Link href={`/${locale}/white-label`} className={styles.finalCtaSecondary}>
              {isFr ? "Voir notre programme café →" : "See our coffee program →"}
            </Link>
          </div>
          <p style={{ marginTop: "1.5rem", fontSize: "0.85rem", color: "rgba(255,255,255,0.65)" }}>
            {isFr ? "Une question rapide ?" : "Quick question?"}{" "}
            <Link
              href="mailto:help@ezpz.coffee?subject=Matcha%20Inquiry"
              style={{ color: "rgba(255,255,255,0.9)", textDecoration: "underline", textUnderlineOffset: "3px" }}
            >
              help@ezpz.coffee
            </Link>
          </p>
        </div>
      </section>

    </div>
  );
};

export default MatchaPage;
