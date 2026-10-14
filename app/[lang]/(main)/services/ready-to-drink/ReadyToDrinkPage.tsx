"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale } from "next-intl";
import { useState } from "react";

import canShadowPng from "@/public/assets/can-shadow.png";

import styles from "../servicePages.module.scss";

const ACCORDION_ITEMS = [
  {
    title: "YOUR RECIPE DEVELOPMENT",
    titleFr: "VOTRE DÉVELOPPEMENT DE RECETTE",
    body: "We do not just fill cans with generic coffee. Our team works with you to develop a recipe specifically for your brand — flavor profile, sweetness level, milk or dairy-free, cold brew or espresso base, functional ingredients. A recipe that tastes like yours and nobody else's.",
    bodyFr: "Nous ne faisons pas que remplir des canettes de café générique. Notre équipe travaille avec vous pour développer une recette spécifiquement pour votre marque : profil de saveur, niveau de douceur, lait ou sans produits laitiers, base de cold brew ou d'espresso, ingrédients fonctionnels. Une recette qui vous ressemble et à personne d'autre.",
  },
  {
    title: "YOUR PRODUCTION",
    titleFr: "VOTRE PRODUCTION",
    body: "Full RTD production handled at our facility. Cans, bottles, or cartons — we work with the format that fits your brand and your market. Every production run is quality-checked to ensure consistency batch after batch.",
    bodyFr: "Production RTD complète gérée dans notre installation. Canettes, bouteilles ou cartons : nous travaillons avec le format qui convient à votre marque et à votre marché. Chaque lot de production est vérifié pour assurer la cohérence d'un lot à l'autre.",
  },
  {
    title: "YOUR BRANDING AND DESIGN",
    titleFr: "VOTRE IMAGE DE MARQUE ET DESIGN",
    body: "Full custom label or can design included. Your logo, your colors, your story on every unit. We work with your brand guidelines or help you develop the visual identity from scratch. Design that stands out in a crowded RTD market.",
    bodyFr: "Design d'étiquette ou de canette entièrement personnalisé inclus. Votre logo, vos couleurs, votre histoire sur chaque unité. Nous travaillons avec vos directives de marque ou vous aidons à développer l'identité visuelle à partir de zéro. Un design qui se démarque dans un marché RTD très concurrentiel.",
  },
  {
    title: "YOUR SOURCING",
    titleFr: "VOTRE APPROVISIONNEMENT",
    body: "The coffee inside your RTD matters as much as the can design. We source specialty-grade beans from traceable origins and roast them at Canadian Roasting Society in Montreal. Your RTD starts with extraordinary coffee — not a commodity blend.",
    bodyFr: "Le café à l'intérieur de votre RTD est aussi important que le design de la canette. Nous approvisionnons des grains de qualité spécialité provenant d'origines traçables et les torréfions à Canadian Roasting Society à Montréal. Votre RTD commence par un café extraordinaire, pas un mélange générique.",
  },
  {
    title: "YOUR LOGISTICS",
    titleFr: "VOTRE LOGISTIQUE",
    body: "We manage production scheduling, quality control, and fulfillment. Your RTD ships directly to your warehouse, your retail partners, or your fulfillment center anywhere in Canada and the USA. We handle the complexity so you do not have to.",
    bodyFr: "Nous gérons la planification de production, le contrôle de qualité et l'exécution. Votre RTD est expédié directement à votre entrepôt, vos partenaires de vente au détail ou votre centre d'exécution partout au Canada et aux États-Unis. Nous gérons la complexité pour que vous n'ayez pas à le faire.",
  },
  {
    title: "YOUR SCALE",
    titleFr: "VOTRE CROISSANCE",
    body: "RTD production starts at 8,000 units — the minimum required to make co-manufacturing economically viable. From that starting point we can scale with you as demand grows. Our production partners are equipped to handle volume from test batches to national retail programs.",
    bodyFr: "La production RTD commence à 8 000 unités, le minimum requis pour rendre la co-fabrication économiquement viable. À partir de ce point de départ, nous pouvons prendre de l'expansion avec vous à mesure que la demande augmente. Nos partenaires de production sont équipés pour gérer le volume, des lots de test aux programmes de vente au détail nationaux.",
  },
];

const WHO_ITS_FOR = [
  { emoji: "🏋️", title: "Gyms and Fitness Studios", titleFr: "Gymnases et studios de fitness", body: "The pre or post-workout drink your members have been asking for.", bodyFr: "La boisson d'avant ou d'après entraînement que vos membres demandent depuis longtemps." },
  { emoji: "🌿", title: "Wellness Brands", titleFr: "Marques de bien-être", body: "A functional RTD that aligns with your health-focused audience.", bodyFr: "Un RTD fonctionnel qui s'aligne avec votre audience axée sur la santé." },
  { emoji: "☕", title: "Restaurants and Cafés", titleFr: "Restaurants et cafés", body: "A branded to-go option that travels with your customers.", bodyFr: "Une option à emporter de marque qui accompagne vos clients." },
  { emoji: "🛒", title: "Retailers", titleFr: "Détaillants", body: "A high-margin private label product for your shelves.", bodyFr: "Un produit de marque maison à haute marge pour vos tablettes." },
  { emoji: "🏨", title: "Hotels", titleFr: "Hôtels", body: "In-room and minibar branded coffee that elevates the guest experience.", bodyFr: "Café de marque en chambre et au minibar qui élève l'expérience des clients." },
  { emoji: "🥤", title: "Food and Beverage Brands", titleFr: "Marques d'alimentation et de boissons", body: "Expand your product lineup with a branded RTD coffee.", bodyFr: "Élargissez votre gamme de produits avec un café RTD de marque." },
];

const STATS = [
  { num: "8,000", label: "Minimum units", labelFr: "Unités minimales" },
  { num: "4–6 weeks", label: "Production timeline", labelFr: "Délai de production" },
  { num: "3 formats", label: "Cans, bottles, cartons", labelFr: "Canettes, bouteilles, cartons" },
  { num: "100%", label: "Custom recipe development", labelFr: "Développement de recette sur mesure" },
];

const PROCESS_STEPS = [
  {
    num: "01",
    title: "Discovery call",
    titleFr: "Appel de découverte",
    body: "We start with a conversation about your brand, your target consumer, your flavor vision, and your market. This helps us understand what your RTD needs to achieve.",
    bodyFr: "Nous commençons par une conversation sur votre marque, votre consommateur cible, votre vision de saveur et votre marché. Cela nous aide à comprendre ce que votre RTD doit accomplir.",
  },
  {
    num: "02",
    title: "Recipe development",
    titleFr: "Développement de recette",
    body: "Our team develops a recipe based on your brief. We produce samples for you to taste and evaluate. We iterate until the flavor is exactly right for your brand.",
    bodyFr: "Notre équipe développe une recette basée sur votre brief. Nous produisons des échantillons pour que vous les goûtiez et les évaluiez. Nous itérons jusqu'à ce que la saveur soit exactement ce qu'il faut pour votre marque.",
  },
  {
    num: "03",
    title: "Design and branding",
    titleFr: "Design et image de marque",
    body: "Full custom can or label design included. We develop a visual identity that stands out in the RTD category and reflects your brand.",
    bodyFr: "Design de canette ou d'étiquette entièrement personnalisé inclus. Nous développons une identité visuelle qui se démarque dans la catégorie RTD et reflète votre marque.",
  },
  {
    num: "04",
    title: "Production run",
    titleFr: "Lot de production",
    body: "Once recipe and design are approved we schedule your production run. Every batch is quality-checked for consistency and food safety compliance.",
    bodyFr: "Une fois la recette et le design approuvés, nous planifions votre lot de production. Chaque lot est vérifié pour la cohérence et la conformité aux normes de sécurité alimentaire.",
  },
  {
    num: "05",
    title: "Packaging and labeling",
    titleFr: "Emballage et étiquetage",
    body: "Your RTD is packaged, labeled, and prepared for distribution. We handle the regulatory requirements for Canadian and US food labeling.",
    bodyFr: "Votre RTD est emballé, étiqueté et préparé pour la distribution. Nous gérons les exigences réglementaires pour l'étiquetage alimentaire canadien et américain.",
  },
  {
    num: "06",
    title: "Fulfillment and distribution",
    titleFr: "Exécution et distribution",
    body: "Your finished product ships directly to your warehouse, retail partners, or fulfillment center. We can also connect you with distribution partners across Canada.",
    bodyFr: "Votre produit fini est expédié directement à votre entrepôt, vos partenaires de vente au détail ou votre centre d'exécution. Nous pouvons également vous mettre en contact avec des partenaires de distribution partout au Canada.",
  },
];

const FORMATS = [
  { name: "Cans 330ml", nameFr: "Canettes 330ml", desc: "The classic RTD format. Iconic shelf presence.", descFr: "Le format RTD classique. Une présence iconique sur les tablettes." },
  { name: "Bottles 250ml", nameFr: "Bouteilles 250ml", desc: "Premium feel. Perfect for hospitality and retail.", descFr: "Un sentiment haut de gamme. Parfait pour l'hôtellerie et le détail." },
  { name: "Cartons 200ml", nameFr: "Cartons 200ml", desc: "Sustainable option. Great for health-conscious brands.", descFr: "Option durable. Idéale pour les marques soucieuses de la santé." },
];

const BASE_OPTIONS = [
  { name: "Cold Brew", nameFr: "Cold Brew", desc: "Smooth, low-acid, naturally sweet.", descFr: "Doux, peu acide, naturellement sucré." },
  { name: "Espresso Based", nameFr: "Base espresso", desc: "Bold, intense, familiar.", descFr: "Audacieux, intense, familier." },
  { name: "Nitro Infused", nameFr: "Infusé au nitro", desc: "Creamy texture without dairy.", descFr: "Texture crémeuse sans produits laitiers." },
  { name: "Functional", nameFr: "Fonctionnel", desc: "Add protein, adaptogens, or vitamins.", descFr: "Ajoutez des protéines, des adaptogènes ou des vitamines." },
];

const ReadyToDrinkPage = () => {
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
            <span className={styles.heroLabel}>{isFr ? "01_ Café prêt-à-boire" : "01_ Ready-to-Drink Coffee"}</span>
            <h1 className={styles.heroTitle}>{isFr ? "Votre marque. Prête à être ouverte." : "Your brand. Ready to crack open."}</h1>
            <p className={styles.heroSubtitle}>
              {isFr
                ? "Café prêt-à-boire de marque personnalisée en canettes, bouteilles ou cartons. Développement de recette complet. Votre design. Livré partout au Canada et aux États-Unis."
                : "Custom branded ready-to-drink coffee in cans, bottles, or cartons. Full recipe development. Your design. Delivered across Canada and the USA."}
            </p>
            <div className={styles.heroBtnGroup}>
              <Link href={`/${locale}/contact`} className={styles.heroBtnPrimary}>{isFr ? "Obtenir un devis gratuit" : "Get a free quote"}</Link>
              <a href="#process" className={styles.heroBtnSecondary}>{isFr ? "En savoir plus sur notre processus" : "Learn about our process"}</a>
            </div>
            <div className={styles.heroStats}>
              <div className={styles.heroStat}>
                <span className={styles.heroStatNum}>8,000 {isFr ? "unités" : "units"}</span>
                <span className={styles.heroStatLabel}>{isFr ? "Commande minimale" : "Minimum order"}</span>
              </div>
              <div className={styles.heroStat}>
                <span className={styles.heroStatNum}>{isFr ? "4 à 6 semaines" : "4–6 weeks"}</span>
                <span className={styles.heroStatLabel}>{isFr ? "Délai de production" : "Production timeline"}</span>
              </div>
              <div className={styles.heroStat}>
                <span className={styles.heroStatNum}>3 {isFr ? "formats" : "formats"}</span>
                <span className={styles.heroStatLabel}>{isFr ? "Canettes, bouteilles, cartons" : "Cans, bottles, cartons"}</span>
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
              <Image src={canShadowPng} alt="Custom branded ready-to-drink coffee can" className={styles.heroProductImage} placeholder="blur" />
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
            <span className={styles.headlineAccent}>{isFr ? "opération RTD complète." : "entire RTD operation."}</span>
          </h2>
          <p className={styles.bodyDark}>
            {isFr
              ? "Du développement de recette à la production prête à vendre, nous gérons chaque étape de votre programme de café prêt-à-boire."
              : "Recipe development to retail-ready production — we handle every step of your ready-to-drink coffee program."}
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
          <p className={styles.accordionFooter}>{isFr ? "Vous apportez la marque. Nous apportons la production." : "You bring the brand. We bring the production."}</p>
        </div>
      </section>

      {/* ── Who It's For ── */}
      <section className={styles.sectionGray}>
        <div className={styles.sectionInner}>
          <span className={styles.eyebrow}>{isFr ? "03_ Pour qui" : "03_ Who It's For"}</span>
          <h2 className={styles.headlineLight}>{isFr ? "Le café RTD est la catégorie de boisson à la croissance la plus rapide au Canada." : "RTD coffee is the fastest growing beverage category in Canada."}</h2>
          <div className={styles.cardsGrid6}>
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
          <span className={styles.eyebrow}>{isFr ? "04_ RTD en un coup d'œil" : "04_ RTD at a Glance"}</span>
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
          <h2 className={styles.headlineLight}>{isFr ? "Du concept aux tablettes en 6 étapes." : "From concept to shelf-ready in 6 steps."}</h2>
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

      {/* ── Flavors and Formats ── */}
      <section className={styles.sectionDark}>
        <div className={styles.sectionInner}>
          <span className={styles.eyebrow}>{isFr ? "06_ Saveurs et formats" : "06_ Flavors and Formats"}</span>
          <h2 className={styles.headlineDark}>{isFr ? "Conçu pour votre marque. Pensé pour votre consommateur." : "Built for your brand. Designed for your consumer."}</h2>
          <div className={styles.twoColSection}>
            <div>
              <p className={styles.formatGroupTitle}>{isFr ? "Formats" : "Formats"}</p>
              {FORMATS.map((item) => (
                <div key={item.name} className={styles.formatItem}>
                  <h3 className={styles.formatName}>{isFr ? item.nameFr : item.name}</h3>
                  <p className={styles.formatDesc}>{isFr ? item.descFr : item.desc}</p>
                </div>
              ))}
            </div>
            <div>
              <p className={styles.formatGroupTitle}>{isFr ? "Options de base" : "Base Options"}</p>
              {BASE_OPTIONS.map((item) => (
                <div key={item.name} className={styles.formatItem}>
                  <h3 className={styles.formatName}>{isFr ? item.nameFr : item.name}</h3>
                  <p className={styles.formatDesc}>{isFr ? item.descFr : item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Investment ── */}
      <section className={styles.sectionLight}>
        <div className={styles.sectionInner}>
          <span className={styles.eyebrow}>{isFr ? "07_ Investissement" : "07_ Investment"}</span>
          <h2 className={styles.headlineLight}>{isFr ? "Une production sérieuse. Des résultats sérieux." : "Serious production. Serious results."}</h2>
          <p className={styles.investmentBody}>
            {isFr
              ? "La production de café RTD nécessite un minimum de 8 000 unités pour être économiquement viable. Cela couvre les coûts d'installation pour le développement de recette, la planification de production et la co-fabrication. Contactez-nous pour discuter des prix selon votre volume et votre format."
              : "RTD coffee production requires a minimum of 8,000 units to be economically viable. This covers the setup costs for recipe development, production scheduling, and co-manufacturing. Contact us to discuss pricing based on your volume and format."}
          </p>
          <Link href={`/${locale}/contact?subject=RTD Coffee Quote`} className={styles.investmentCta}>
            {isFr ? "Obtenir un devis RTD gratuit" : "Get a free RTD quote"}
          </Link>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className={styles.finalCta}>
        <div className={styles.finalCtaInner}>
          <h2 className={styles.finalCtaTitle}>{isFr ? "Prêt à lancer votre propre marque de café RTD ?" : "Ready to launch your own RTD coffee brand?"}</h2>
          <p className={styles.finalCtaSubtext}>
            {isFr
              ? "Rejoignez les marques partout au Canada qui transforment leur vision café en une réalité prête à vendre avec EZPZ."
              : "Join the brands across Canada turning their coffee vision into a shelf-ready reality with EZPZ."}
          </p>
          <div className={styles.finalCtaButtons}>
            <Link href={`/${locale}/contact`} className={styles.finalCtaPrimary}>{isFr ? "Obtenir un devis gratuit" : "Get a free quote"}</Link>
            <Link href={`/${locale}/coffee`} className={styles.finalCtaSecondary}>{isFr ? "En savoir plus sur notre café" : "Learn about our coffee"}</Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ReadyToDrinkPage;
