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
    titleFr: "VOTRE APPROVISIONNEMENT EN CAFÉ",
    body: "Every capsule is filled with specialty-grade coffee sourced from traceable farms and roasted fresh at Canadian Roasting Society in Montreal. The same quality standard as all EZPZ products — 80+ SCA score, full traceability, exceptional flavor.",
    bodyFr: "Chaque capsule est remplie de café de qualité spécialité provenant de fermes traçables et torréfié frais à Canadian Roasting Society à Montréal. Le même standard de qualité que tous les produits EZPZ : score SCA 80+, traçabilité complète, saveur exceptionnelle.",
  },
  {
    title: "YOUR FILLING AND PRODUCTION",
    titleFr: "VOTRE REMPLISSAGE ET PRODUCTION",
    body: "Professional capsule filling and sealing on certified equipment. Each capsule is filled to precise weight and sealed for maximum freshness and compatibility. Quality-checked before packaging.",
    bodyFr: "Remplissage et scellage de capsules professionnels sur équipement certifié. Chaque capsule est remplie à un poids précis et scellée pour une fraîcheur et une compatibilité maximales. Vérification de qualité avant l'emballage.",
  },
  {
    title: "YOUR BRANDING",
    titleFr: "VOTRE IMAGE DE MARQUE",
    body: "Full custom capsule sleeve or outer box design included. Your logo, your brand colors, your messaging on every capsule and package. Design that looks premium in a hotel room, on a boardroom table, or on a retail shelf.",
    bodyFr: "Design de manchon de capsule ou de boîte extérieure entièrement personnalisé inclus. Votre logo, vos couleurs de marque, votre message sur chaque capsule et emballage. Un design qui paraît haut de gamme dans une chambre d'hôtel, sur une table de salle de conférence ou sur une tablette de vente au détail.",
  },
  {
    title: "YOUR PACKAGING",
    titleFr: "VOTRE EMBALLAGE",
    body: "Capsules are packaged in branded boxes of 10 or 20 — the standard retail and hospitality format. Custom outer packaging available for gifting and premium retail. Every package is designed to reinforce your brand.",
    bodyFr: "Les capsules sont emballées dans des boîtes de marque de 10 ou 20, le format standard pour le détail et l'hôtellerie. Emballage extérieur personnalisé disponible pour les cadeaux et le détail haut de gamme. Chaque emballage est conçu pour renforcer votre marque.",
  },
  {
    title: "YOUR LOGISTICS",
    titleFr: "VOTRE LOGISTIQUE",
    body: "We ship directly to your hotel properties, office locations, retail partners, or warehouse anywhere in Canada and the USA. Consistent, reliable fulfillment on every order.",
    bodyFr: "Nous livrons directement à vos propriétés hôtelières, emplacements de bureau, partenaires de vente au détail ou entrepôt partout au Canada et aux États-Unis. Exécution cohérente et fiable pour chaque commande.",
  },
  {
    title: "YOUR COMPATIBILITY",
    titleFr: "VOTRE COMPATIBILITÉ",
    body: "Every EZPZ capsule is compatible with all Nespresso Classic machines — the most widely used single-serve coffee system in Canadian hotels, offices, and homes. Your customers do not need to buy new equipment.",
    bodyFr: "Chaque capsule EZPZ est compatible avec toutes les machines Nespresso Classic, le système de café à dose unique le plus utilisé dans les hôtels, bureaux et maisons canadiens. Vos clients n'ont pas besoin d'acheter de nouvel équipement.",
  },
];

const WHO_ITS_FOR = [
  {
    emoji: "🏨",
    title: "Hotels and Resorts",
    titleFr: "Hôtels et complexes hôteliers",
    body: "Replace generic in-room capsules with your own branded specialty coffee. A premium touchpoint guests remember and talk about.",
    bodyFr: "Remplacez les capsules génériques en chambre par votre propre café de spécialité de marque. Un point de contact haut de gamme dont les clients se souviennent et parlent.",
  },
  {
    emoji: "🏢",
    title: "Corporate Offices",
    titleFr: "Bureaux d'entreprise",
    body: "Branded capsules in the boardroom and breakroom. Your culture in every cup.",
    bodyFr: "Capsules de marque dans la salle de conférence et la salle de pause. Votre culture dans chaque tasse.",
  },
  {
    emoji: "🎁",
    title: "Corporate Gifting",
    titleFr: "Cadeaux d'entreprise",
    body: "A beautifully packaged box of branded specialty capsules — the corporate gift that impresses.",
    bodyFr: "Une boîte joliment emballée de capsules de spécialité de marque, le cadeau d'entreprise qui impressionne.",
  },
  {
    emoji: "🛍️",
    title: "Premium Retail",
    titleFr: "Détail haut de gamme",
    body: "A high-margin private label product for specialty food stores, hotel gift shops, and premium retailers.",
    bodyFr: "Un produit de marque maison à haute marge pour les épiceries fines, boutiques cadeaux d'hôtels et détaillants haut de gamme.",
  },
  {
    emoji: "⛳",
    title: "Country and Golf Clubs",
    titleFr: "Clubs de campagne et de golf",
    body: "The exclusive amenity that matches the quality of your membership experience.",
    bodyFr: "L'agrément exclusif qui correspond à la qualité de votre expérience d'adhésion.",
  },
];

const STATS = [
  { num: "100%", label: "Compatible with Nespresso Classic", labelFr: "Compatible avec Nespresso Classic" },
  { num: "3 intensities", label: "Mild, balanced, intense", labelFr: "Doux, équilibré, intense" },
  { num: "10 or 20", label: "Standard box formats", labelFr: "Formats de boîte standard" },
  { num: "2–3 weeks", label: "Production timeline", labelFr: "Délai de production" },
];

const PROCESS_STEPS = [
  {
    num: "01",
    title: "Choose your coffee",
    titleFr: "Choisissez votre café",
    body: "Select your coffee origin and intensity level. We recommend based on your brand and your target consumer. Most clients choose 1 to 3 options to offer variety.",
    bodyFr: "Choisissez votre origine de café et votre niveau d'intensité. Nous recommandons en fonction de votre marque et de votre consommateur cible. La plupart des clients choisissent 1 à 3 options pour offrir de la variété.",
  },
  {
    num: "02",
    title: "Design your packaging",
    titleFr: "Concevez votre emballage",
    body: "Full custom capsule sleeve and box design included. We create packaging that looks premium in any setting — hotel room, boardroom, or retail shelf.",
    bodyFr: "Design de manchon de capsule et de boîte entièrement personnalisé inclus. Nous créons un emballage qui paraît haut de gamme dans n'importe quel contexte : chambre d'hôtel, salle de conférence ou tablette de vente au détail.",
  },
  {
    num: "03",
    title: "Production and quality check",
    titleFr: "Production et contrôle de qualité",
    body: "Your capsules are filled, sealed, and packaged on certified equipment. Every batch is quality-checked for consistency, freshness, and compatibility.",
    bodyFr: "Vos capsules sont remplies, scellées et emballées sur équipement certifié. Chaque lot est vérifié pour la cohérence, la fraîcheur et la compatibilité.",
  },
  {
    num: "04",
    title: "Delivered to your properties",
    titleFr: "Livré à vos établissements",
    body: "Your branded capsules ship directly to your hotel properties, office locations, or warehouse anywhere in Canada and the USA.",
    bodyFr: "Vos capsules de marque sont expédiées directement à vos propriétés hôtelières, emplacements de bureau ou entrepôt partout au Canada et aux États-Unis.",
  },
];

const CAPSULE_OPTIONS = [
  {
    intensity: "Mild",
    intensityFr: "Doux",
    name: "Ethiopia Yirgacheffe",
    roast: "Light roast",
    roastFr: "Torréfaction légère",
    notes: ["Blueberry", "Jasmine", "Lemon"],
    notesFr: ["Myrtille", "Jasmin", "Citron"],
    description: "For guests who prefer a bright, aromatic morning cup.",
    descriptionFr: "Pour les clients qui préfèrent une tasse matinale lumineuse et aromatique.",
  },
  {
    intensity: "Balanced",
    intensityFr: "Équilibré",
    name: "Colombia Huila",
    roast: "Medium roast",
    roastFr: "Torréfaction moyenne",
    notes: ["Caramel", "Red Apple", "Hazelnut"],
    notesFr: ["Caramel", "Pomme rouge", "Noisette"],
    description: "The universal crowd-pleaser. Works for every palate.",
    descriptionFr: "Le choix universel. Convient à tous les palais.",
  },
  {
    intensity: "Intense",
    intensityFr: "Intense",
    name: "Brazil Cerrado",
    roast: "Dark roast",
    roastFr: "Torréfaction foncée",
    notes: ["Chocolate", "Vanilla", "Brown Sugar"],
    notesFr: ["Chocolat", "Vanille", "Sucre brun"],
    description: "For guests who want a bold, full-bodied espresso.",
    descriptionFr: "Pour les clients qui veulent un espresso audacieux et corsé.",
  },
];

const NespressoCapsulesPage = () => {
  const locale = useLocale();
  const isFr = locale === "fr";
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
            <span className={styles.heroLabel}>{isFr ? "01_ Capsules Nespresso" : "01_ Nespresso Capsules"}</span>
            <h1 className={styles.heroTitle}>{isFr ? "Votre marque. Dans chaque machine Nespresso au Canada." : "Your brand. In every Nespresso machine in Canada."}</h1>
            <p className={styles.heroSubtitle}>
              {isFr
                ? "Capsules compatibles Nespresso de marque personnalisée remplies de café de spécialité. Parfaites pour les hôtels, bureaux, cadeaux d'entreprise et le détail haut de gamme."
                : "Custom branded Nespresso-compatible capsules filled with specialty coffee. Perfect for hotels, offices, corporate gifting, and premium retail."}
            </p>
            <div className={styles.heroBtnGroup}>
              <Link href={`/${locale}/contact`} className={styles.heroBtnPrimary}>{isFr ? "Obtenir un devis gratuit" : "Get a free quote"}</Link>
              <a href="#process" className={styles.heroBtnSecondary}>{isFr ? "En savoir plus" : "Learn more"}</a>
            </div>
            <div className={styles.heroStats}>
              <div className={styles.heroStat}>
                <span className={styles.heroStatNum}>100%</span>
                <span className={styles.heroStatLabel}>{isFr ? "Compatible Nespresso Classic" : "Nespresso Classic compatible"}</span>
              </div>
              <div className={styles.heroStat}>
                <span className={styles.heroStatNum}>{isFr ? "2 à 3 semaines" : "2–3 weeks"}</span>
                <span className={styles.heroStatLabel}>{isFr ? "Délai de production" : "Production timeline"}</span>
              </div>
              <div className={styles.heroStat}>
                <span className={styles.heroStatNum}>3 {isFr ? "intensités" : "intensities"}</span>
                <span className={styles.heroStatLabel}>{isFr ? "Doux, équilibré, intense" : "Mild, balanced, intense"}</span>
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
          <span className={styles.eyebrow}>{isFr ? "02_ Ce que nous gérons" : "02_ What We Handle"}</span>
          <h2 className={styles.headlineDark}>
            {isFr ? "Laissez-nous être votre" : "Let us be your"}<br />
            <span className={styles.headlineAccent}>{isFr ? "opération de capsules." : "capsule operation."}</span>
          </h2>
          <p className={styles.bodyDark}>
            {isFr
              ? "De l'approvisionnement au remplissage en passant par votre emballage de marque, nous gérons chaque étape de votre programme de capsules Nespresso."
              : "From sourcing to filling to your branded packaging — we handle every step of your Nespresso capsule program."}
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
                  <span className={styles.accordionTitle}>{isFr ? item.titleFr : item.title}</span>
                </button>
                {openItem === i && <p className={styles.accordionBody}>{isFr ? item.bodyFr : item.body}</p>}
              </div>
            ))}
          </div>
          <p className={styles.accordionFooter}>{isFr ? "Vous apportez la marque. Nous apportons le reste." : "You bring the brand. We bring the rest."}</p>
        </div>
      </section>

      {/* ── Who It's For ── */}
      <section className={styles.sectionGray}>
        <div className={styles.sectionInner}>
          <span className={styles.eyebrow}>{isFr ? "03_ Pour qui" : "03_ Who It's For"}</span>
          <h2 className={styles.headlineLight}>{isFr ? "Les capsules Nespresso appartiennent à toute expérience de marque haut de gamme." : "Nespresso capsules belong in every premium brand experience."}</h2>
          <div className={styles.cardsGrid5}>
            {WHO_ITS_FOR.map((card) => (
              <div key={card.title} className={styles.card}>
                <span className={styles.cardEmoji}>{card.emoji}</span>
                <h3 className={styles.cardTitle}>{isFr ? card.titleFr : card.title}</h3>
                <p className={styles.cardBody}>{isFr ? card.bodyFr : card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── The Numbers ── */}
      <section className={styles.sectionDark}>
        <div className={styles.sectionInner}>
          <span className={styles.eyebrow}>{isFr ? "04_ Capsules en un coup d'œil" : "04_ Capsules at a Glance"}</span>
          <div className={styles.statsGrid}>
            {STATS.map((stat) => (
              <div key={stat.label} className={styles.statItem}>
                <span className={styles.statNumber}>{stat.num}</span>
                <span className={styles.statLabel}>{isFr ? stat.labelFr : stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── The Process ── */}
      <section id="process" className={styles.sectionLight}>
        <div className={styles.sectionInner}>
          <span className={styles.eyebrow}>{isFr ? "05_ Le processus" : "05_ The Process"}</span>
          <h2 className={styles.headlineLight}>{isFr ? "Vos capsules de marque en 4 étapes." : "Your branded capsules in 4 steps."}</h2>
          <div className={styles.processSteps}>
            {PROCESS_STEPS.map((step) => (
              <div key={step.num} className={styles.processStep}>
                <span className={styles.processStepNum}>{step.num}</span>
                <div className={styles.processStepContent}>
                  <h3 className={styles.processStepTitle}>{isFr ? step.titleFr : step.title}</h3>
                  <p className={styles.processStepBody}>{isFr ? step.bodyFr : step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Coffee Options ── */}
      <section className={styles.sectionDark}>
        <div className={styles.sectionInner}>
          <span className={styles.eyebrow}>{isFr ? "06_ Options de café" : "06_ Coffee Options"}</span>
          <h2 className={styles.headlineDark}>{isFr ? "Trois intensités. Toutes de qualité spécialité." : "Three intensities. All specialty grade."}</h2>
          <div className={styles.capsuleGrid}>
            {CAPSULE_OPTIONS.map((capsule) => (
              <div key={capsule.intensity} className={styles.capsuleCard}>
                <span className={styles.capsuleIntensity}>{isFr ? capsule.intensityFr : capsule.intensity}</span>
                <h3 className={styles.capsuleName}>{capsule.name}</h3>
                <span className={styles.capsuleOrigin}>{isFr ? capsule.roastFr : capsule.roast}</span>
                <div className={styles.capsuleNotes}>
                  {capsule.notes.map((note, idx) => (
                    <span key={note} className={styles.capsuleNote}>{isFr ? capsule.notesFr[idx] : note}</span>
                  ))}
                </div>
                <p className={styles.capsuleDesc}>{isFr ? capsule.descriptionFr : capsule.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Investment ── */}
      <section className={styles.sectionLight}>
        <div className={styles.sectionInner}>
          <span className={styles.eyebrow}>{isFr ? "07_ Investissement" : "07_ Investment"}</span>
          <h2 className={styles.headlineLight}>{isFr ? "Capsules haut de gamme. Prix accessibles." : "Premium capsules. Accessible pricing."}</h2>
          <p className={styles.investmentBody}>
            {isFr
              ? "Les programmes de capsules Nespresso sont disponibles pour les hôtels, bureaux, cadeaux d'entreprise et le détail. Contactez-nous pour discuter des prix selon votre volume et vos exigences de format."
              : "Nespresso capsule programs are available for hotels, offices, corporate gifting, and retail. Contact us to discuss pricing based on your volume and format requirements."}
          </p>
          <Link href={`/${locale}/contact?subject=Nespresso Capsule Quote`} className={styles.investmentCta}>
            {isFr ? "Obtenir un devis capsules gratuit" : "Get a free capsule quote"}
          </Link>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className={styles.finalCta}>
        <div className={styles.finalCtaInner}>
          <h2 className={styles.finalCtaTitle}>{isFr ? "Mettez votre marque dans chaque machine Nespresso." : "Put your brand in every Nespresso machine."}</h2>
          <p className={styles.finalCtaSubtext}>
            {isFr
              ? "Capsules de spécialité de marque personnalisée livrées à votre hôtel, bureau ou partenaires de vente au détail partout au Canada et aux États-Unis."
              : "Custom branded specialty capsules delivered to your hotel, office, or retail partners across Canada and the USA."}
          </p>
          <div className={styles.finalCtaButtons}>
            <Link href={`/${locale}/contact`} className={styles.finalCtaPrimary}>{isFr ? "Obtenir un devis gratuit" : "Get a free quote"}</Link>
            <Link href={`/${locale}/services`} className={styles.finalCtaSecondary}>{isFr ? "Voir tous nos services" : "See all services"}</Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default NespressoCapsulesPage;
