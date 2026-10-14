"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale } from "next-intl";
import { useState } from "react";

import bagPng from "@/public/assets/bag.png";

import styles from "../servicePages.module.scss";

const ACCORDION_ITEMS = [
  {
    title: "YOUR DESIGN",
    titleFr: "VOTRE DESIGN",
    body: "Full custom bag design is always included at no extra cost. You bring your logo, your colors, and your vision. Our design team handles the rest — creating a bag that looks like it belongs on the shelf of the best café in the city. Multiple revision rounds until you are completely happy. No design agency required.",
    bodyFr: "La conception complète du sachet est toujours incluse sans frais supplémentaires. Vous apportez votre logo, vos couleurs et votre vision. Notre équipe de design s'occupe du reste, créant un sachet qui mérite d'être sur les tablettes du meilleur café de la ville. Plusieurs rondes de révisions jusqu'à ce que vous soyez entièrement satisfait. Aucun designer externe requis.",
  },
  {
    title: "YOUR ROASTING TEAM",
    titleFr: "VOTRE ÉQUIPE DE TORRÉFACTION",
    body: "Every EZPZ bag is roasted fresh at Canadian Roasting Society in Montreal — the same facility used by some of Montreal's most celebrated specialty coffee brands including Micro Espresso, Traffic Coffee, Ambros, and Tunnel Espresso. Professional Probat equipment. Expert roasters. Consistent results on every single batch.",
    bodyFr: "Chaque sachet EZPZ est torréfié frais à Canadian Roasting Society à Montréal, la même installation utilisée par certaines des marques de café de spécialité les plus célèbres de Montréal, notamment Micro Espresso, Traffic Coffee, Ambros et Tunnel Espresso. Équipement Probat professionnel. Torréfacteurs experts. Résultats constants à chaque lot.",
  },
  {
    title: "YOUR SOURCING",
    titleFr: "VOTRE APPROVISIONNEMENT",
    body: "We source exclusively from traceable, specialty-grade farms scoring 80 or above on the SCA cupping scale. Ethiopia, Colombia, Brazil, Guatemala, Kenya — we know the origins, the farmers, and the harvest dates. You get a coffee with a real story, not an anonymous commodity blend. We help you choose the right origin for your brand.",
    bodyFr: "Nous nous approvisionnons exclusivement auprès de fermes traçables et de qualité spécialité avec un score de 80 ou plus sur l'échelle de dégustation SCA. Éthiopie, Colombie, Brésil, Guatemala, Kenya : nous connaissons les origines, les agriculteurs et les dates de récolte. Vous obtenez un café avec une vraie histoire, pas un mélange anonyme. Nous vous aidons à choisir la bonne origine pour votre marque.",
  },
  {
    title: "YOUR PACKAGING",
    titleFr: "VOTRE EMBALLAGE",
    body: "Your coffee is packaged in professionally designed bags with your full custom branding. Available in multiple sizes. One-way degassing valve to preserve freshness. Resealable zipper for customer convenience. Choice of whole bean or ground. Every bag is quality-checked before it leaves our facility.",
    bodyFr: "Votre café est emballé dans des sacs au design professionnel avec votre image de marque personnalisée complète. Disponible en plusieurs tailles. Valve de dégazage unidirectionnelle pour préserver la fraîcheur. Fermeture à glissière refermable pour la commodité. Choix de grains entiers ou moulus. Chaque sachet est vérifié avant de quitter notre installation.",
  },
  {
    title: "YOUR LOGISTICS",
    titleFr: "VOTRE LOGISTIQUE",
    body: "We ship directly to your door anywhere in Canada and the USA. No third-party fulfillment center required. No warehouse lease. No shipping team to manage. You tell us where to send it and we handle everything from production to delivery. Standard delivery across Canada takes 3 to 7 business days from order completion.",
    bodyFr: "Nous livrons directement à votre porte partout au Canada et aux États-Unis. Aucun centre d'exécution tiers requis. Pas de location d'entrepôt. Pas d'équipe d'expédition à gérer. Vous nous dites où envoyer et nous gérons tout, de la production à la livraison. La livraison standard au Canada prend 3 à 7 jours ouvrables à partir de la complétion de la commande.",
  },
  {
    title: "YOUR FULFILLMENT",
    titleFr: "VOTRE EXÉCUTION",
    body: "From one bag to ten thousand — we fulfill every order with the same care and quality. No minimum order means you can start small, test your market, and scale when you are ready. Repeat orders are fast because your design and specifications are already on file. Just tell us what you need and when you need it.",
    bodyFr: "D'un sachet à dix mille, nous exécutons chaque commande avec le même soin et la même qualité. Aucun minimum signifie que vous pouvez commencer petit, tester votre marché et prendre de l'expansion quand vous êtes prêt. Les commandes répétées sont rapides car votre design et vos spécifications sont déjà en dossier. Dites-nous simplement ce dont vous avez besoin et quand vous en avez besoin.",
  },
];

const WHO_ITS_FOR = [
  { emoji: "🍽️", title: "Restaurants", titleFr: "Restaurants", body: "Custom coffee bags for restaurants are one of our most popular services. Add a high-margin retail product your diners take home and brew every morning.", bodyFr: "Les sacs de café personnalisés pour restaurants sont l'un de nos services les plus populaires. Ajoutez un produit de vente au détail à haute marge que vos clients rapportent à la maison et infusent chaque matin." },
  { emoji: "🏨", title: "Hotels", titleFr: "Hôtels", body: "Elevate the in-room experience and create a branded touchpoint guests remember.", bodyFr: "Élevez l'expérience en chambre et créez un point de contact de marque dont les clients se souviennent." },
  { emoji: "🛍️", title: "Boutiques", titleFr: "Boutiques", body: "A premium product that fits naturally alongside your existing merchandise.", bodyFr: "Un produit haut de gamme qui s'intègre naturellement à votre marchandise existante." },
  { emoji: "🏋️", title: "Gyms and Studios", titleFr: "Gymnases et studios", body: "Fuel your community with a product that aligns with their active lifestyle.", bodyFr: "Alimentez votre communauté avec un produit qui s'aligne avec leur mode de vie actif." },
  { emoji: "🏢", title: "Corporate Offices", titleFr: "Bureaux d'entreprise", body: "Make every morning meeting better with your brand on the coffee.", bodyFr: "Améliorez chaque réunion matinale avec votre marque sur le café." },
  { emoji: "🎉", title: "Event Planners", titleFr: "Organisateurs d'événements", body: "The favor nobody throws away — branded specialty coffee for any occasion.", bodyFr: "La faveur que personne ne jette, du café de spécialité de marque pour toute occasion." },
  { emoji: "🏠", title: "Real Estate Agents", titleFr: "Agents immobiliers", body: "The closing gift that keeps your name on their kitchen counter for weeks.", bodyFr: "Le cadeau de clôture qui garde votre nom sur leur comptoir de cuisine pendant des semaines." },
  { emoji: "✦", title: "Any Brand", titleFr: "Toute marque", body: "If you have a brand and customers who drink coffee — this is for you.", bodyFr: "Si vous avez une marque et des clients qui boivent du café, c'est pour vous." },
];

const STATS = [
  { num: "1", label: "Minimum order", labelFr: "Commande minimale" },
  { num: "2–3 weeks", label: "From design to delivery", labelFr: "Du design à la livraison" },
  { num: "80+", label: "SCA score on all our beans", labelFr: "Score SCA sur tous nos grains" },
  { num: "500+", label: "Canadian brands served", labelFr: "Marques canadiennes servies" },
];

const PROCESS_STEPS = [
  {
    num: "01",
    title: "Tell us about your brand",
    titleFr: "Parlez-nous de votre marque",
    body: "Book a free consultation or fill out our contact form. Tell us about your business, your customers, and your goals. We match you with the right coffee origin and walk you through the design process.",
    bodyFr: "Réservez une consultation gratuite ou remplissez notre formulaire de contact. Parlez-nous de votre entreprise, de vos clients et de vos objectifs. Nous vous associons à la bonne origine de café et vous guidons dans le processus de design.",
  },
  {
    num: "02",
    title: "Design your bag",
    titleFr: "Concevez votre sachet",
    body: "Our design team creates a custom bag based on your brand assets. You review, request changes, and approve. Most designs are finalized within 3 to 5 business days.",
    bodyFr: "Notre équipe de design crée un sachet personnalisé basé sur votre identité de marque. Vous révisez, demandez des modifications et approuvez. La plupart des designs sont finalisés en 3 à 5 jours ouvrables.",
  },
  {
    num: "03",
    title: "We source and roast",
    titleFr: "Nous approvisionnons et torréfions",
    body: "Once your design is approved we source your green coffee, schedule your roast at Canadian Roasting Society, and begin production. Fresh roasted on professional Probat equipment.",
    bodyFr: "Une fois votre design approuvé, nous approvisionnons votre café vert, planifions votre torréfaction à Canadian Roasting Society et commençons la production. Torréfié frais sur équipement Probat professionnel.",
  },
  {
    num: "04",
    title: "Quality check and packaging",
    titleFr: "Contrôle de qualité et emballage",
    body: "Every batch is quality-checked before packaging. Your coffee is packaged in your branded bag, sealed for freshness, and prepared for fulfillment.",
    bodyFr: "Chaque lot est vérifié avant l'emballage. Votre café est emballé dans votre sachet de marque, scellé pour la fraîcheur et préparé pour l'expédition.",
  },
  {
    num: "05",
    title: "Delivered to your door",
    titleFr: "Livré à votre porte",
    body: "Your order ships directly to your specified address anywhere in Canada or the USA. Track your order in real time. Most orders arrive within 3 to 7 business days of shipping.",
    bodyFr: "Votre commande est expédiée directement à votre adresse partout au Canada ou aux États-Unis. Suivez votre commande en temps réel. La plupart des commandes arrivent en 3 à 7 jours ouvrables après l'expédition.",
  },
];

const ORIGINS = [
  {
    name: "Ethiopia Yirgacheffe",
    roast: "Light roast",
    roastFr: "Torréfaction légère",
    notes: ["Blueberry", "Jasmine", "Lemon"],
    notesFr: ["Myrtille", "Jasmin", "Citron"],
    description: "For brands that want to tell a story of origin and complexity.",
    descriptionFr: "Pour les marques qui veulent raconter une histoire d'origine et de complexité.",
  },
  {
    name: "Colombia Huila",
    roast: "Medium roast",
    roastFr: "Torréfaction moyenne",
    notes: ["Caramel", "Red Apple", "Hazelnut"],
    notesFr: ["Caramel", "Pomme rouge", "Noisette"],
    description: "The crowd-pleaser. Universally loved. Perfect for any audience.",
    descriptionFr: "Le choix universel. Aimé de tous. Parfait pour tout public.",
  },
  {
    name: "Guatemala Antigua",
    roast: "Medium dark roast",
    roastFr: "Torréfaction moyenne foncée",
    notes: ["Dark Chocolate", "Brown Sugar", "Almond"],
    notesFr: ["Chocolat noir", "Sucre brun", "Amande"],
    description: "Rich and comforting. Ideal for fall and winter campaigns.",
    descriptionFr: "Riche et réconfortant. Idéal pour les campagnes d'automne et d'hiver.",
  },
  {
    name: "Brazil Cerrado",
    roast: "Dark roast",
    roastFr: "Torréfaction foncée",
    notes: ["Chocolate", "Vanilla", "Brown Sugar"],
    notesFr: ["Chocolat", "Vanille", "Sucre brun"],
    description: "Bold and familiar. For customers who take their coffee seriously.",
    descriptionFr: "Audacieux et familier. Pour les clients qui prennent leur café au sérieux.",
  },
];

const PRICING_TIERS = [
  {
    tier: "Starter",
    tierFr: "Découverte",
    range: "1 to 25 bags",
    rangeFr: "1 à 25 sacs",
    description: "Perfect for testing your concept, creating personalized gifts, or launching a limited edition.",
    descriptionFr: "Parfait pour tester votre concept, créer des cadeaux personnalisés ou lancer une édition limitée.",
    popular: false,
  },
  {
    tier: "Brand Builder",
    tierFr: "Constructeur de marque",
    range: "26 to 200 bags",
    rangeFr: "26 à 200 sacs",
    description: "For businesses ready to launch their branded coffee program.",
    descriptionFr: "Pour les entreprises prêtes à lancer leur programme de café de marque.",
    popular: true,
  },
  {
    tier: "Scale",
    tierFr: "Croissance",
    range: "200+ bags",
    rangeFr: "200+ sacs",
    description: "For established brands ready to grow their coffee program.",
    descriptionFr: "Pour les marques établies prêtes à développer leur programme de café.",
    popular: false,
  },
];

const TESTIMONIALS = [
  {
    quote: "EZPZ handled everything from design to delivery. We launched our hotel coffee brand in under 3 weeks.",
    quoteFr: "EZPZ a tout géré, du design à la livraison. Nous avons lancé notre marque de café d'hôtel en moins de 3 semaines.",
    name: "Philippe M.",
    role: "Hotel Director",
    roleFr: "Directeur d'hôtel",
  },
  {
    quote: "We added branded coffee to our boutique and it became our top-selling product within a month.",
    quoteFr: "Nous avons ajouté du café de marque à notre boutique et c'est devenu notre produit le plus vendu en un mois.",
    name: "Sarah L.",
    role: "Boutique Owner",
    roleFr: "Propriétaire de boutique",
  },
  {
    quote: "The process was incredibly smooth. Zero minimums meant we could test before scaling up.",
    quoteFr: "Le processus était incroyablement fluide. Zéro minimum signifiait que nous pouvions tester avant de prendre de l'expansion.",
    name: "Marc T.",
    role: "Restaurant Manager",
    roleFr: "Gérant de restaurant",
  },
];

const CustomCoffeeBagsPage = () => {
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
            <span className={styles.heroLabel}>{isFr ? "01_ Sacs de café personnalisés" : "01_ Custom Coffee Bags"}</span>
            <h1 className={styles.heroTitle}>{isFr ? "Votre sachet. Votre marque. Nous gérons tout." : "Your bag. Your brand. We handle everything."}</h1>
            <p className={styles.heroSubtitle}>
              {isFr
                ? "De la ferme jusqu'à la porte de votre client, EZPZ gère chaque étape de votre programme de sacs de café personnalisés. Des sacs de café de marque au Canada pour les restaurants, hôtels et détaillants qui font confiance, avec zéro commande minimale et design complet toujours inclus."
                : "From the farm to your customer's door — EZPZ manages every step of your custom coffee bag program. Branded coffee bags Canada restaurants, hotels, and retailers trust — with zero minimum order and full design always included."}
            </p>
            <div className={styles.heroBtnGroup}>
              <Link href={`/${locale}/design`} className={styles.heroBtnPrimary}>{isFr ? "Commencer à concevoir" : "Start designing"}</Link>
              <Link href={`/${locale}/contact`} className={styles.heroBtnSecondary}>{isFr ? "Obtenir un devis gratuit" : "Get a free quote"}</Link>
            </div>
            <div className={styles.heroStats}>
              <div className={styles.heroStat}>
                <span className={styles.heroStatNum}>{isFr ? "1 sachet" : "1 bag"}</span>
                <span className={styles.heroStatLabel}>{isFr ? "Commande minimale" : "Minimum order"}</span>
              </div>
              <div className={styles.heroStat}>
                <span className={styles.heroStatNum}>{isFr ? "2 à 3 semaines" : "2–3 weeks"}</span>
                <span className={styles.heroStatLabel}>{isFr ? "Du design à la livraison" : "Design to delivery"}</span>
              </div>
              <div className={styles.heroStat}>
                <span className={styles.heroStatNum}>500+</span>
                <span className={styles.heroStatLabel}>{isFr ? "Marques canadiennes" : "Canadian brands"}</span>
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
              <Image src={bagPng} alt="Custom branded coffee bag" className={styles.heroProductImage} placeholder="blur" />
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
            <span className={styles.headlineAccent}>{isFr ? "tout." : "everything."}</span>
          </h2>
          <p className={styles.bodyDark}>
            {isFr
              ? "Oubliez l'entrepôt. Oubliez l'équipe de torréfaction. Oubliez les maux de tête logistiques. Nous gérons tout pour que vous puissiez vous concentrer sur votre marque."
              : "Skip the warehouse. Skip the roasting team. Skip the logistics headache. We handle it all so you can focus on your brand."}
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
          <h2 className={styles.headlineLight}>{isFr ? "Si vous vendez à des gens, vous devriez vendre du café." : "If you sell to people, you should be selling coffee."}</h2>
          <div className={styles.cardsGrid}>
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
          <span className={styles.eyebrow}>{isFr ? "04_ Les chiffres" : "04_ The Numbers"}</span>
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
      <section className={styles.sectionLight}>
        <div className={styles.sectionInner}>
          <span className={styles.eyebrow}>{isFr ? "05_ Le processus" : "05_ The Process"}</span>
          <h2 className={styles.headlineLight}>{isFr ? "De l'idée aux tablettes en 5 étapes." : "From idea to shelf in 5 steps."}</h2>
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

      {/* ── Coffee Origins ── */}
      <section className={styles.sectionDark}>
        <div className={styles.sectionInner}>
          <span className={styles.eyebrow}>{isFr ? "06_ Choisissez votre café" : "06_ Choose Your Coffee"}</span>
          <h2 className={styles.headlineDark}>{isFr ? "Quatre origines. Infinies possibilités." : "Four origins. Infinite possibilities."}</h2>
          <div className={styles.originsGrid}>
            {ORIGINS.map((origin) => (
              <div key={origin.name} className={styles.originCard}>
                <div>
                  <span className={styles.originRoast}>{isFr ? origin.roastFr : origin.roast}</span>
                  <h3 className={styles.originName}>{origin.name}</h3>
                </div>
                <div className={styles.originNotes}>
                  {origin.notes.map((note, idx) => (
                    <span key={note} className={styles.originNote}>{isFr ? origin.notesFr[idx] : note}</span>
                  ))}
                </div>
                <p className={styles.originDescription}>{isFr ? origin.descriptionFr : origin.description}</p>
              </div>
            ))}
          </div>
          <p className={styles.originsFootnote}>
            {isFr ? "Vous ne savez pas quelle origine convient à votre marque ?" : "Not sure which origin is right for your brand?"}{" "}
            <Link href={`/${locale}/contact`}>{isFr ? "Nous vous aiderons à choisir." : "We will help you choose."}</Link>
          </p>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section className={styles.sectionLight}>
        <div className={styles.sectionInner}>
          <span className={styles.eyebrow}>{isFr ? "07_ Tarifs" : "07_ Pricing"}</span>
          <h2 className={styles.headlineLight}>{isFr ? "Transparent. Simple. Sans surprises." : "Transparent. Simple. No surprises."}</h2>
          <p className={styles.bodyLight}>
            {isFr
              ? "Le design personnalisé complet est toujours inclus. Aucuns frais cachés. Aucuns frais d'installation. Les prix augmentent avec le volume : plus vous commandez, plus votre coût unitaire est bas. Mais il n'y a jamais de minimum."
              : "Full custom design is always included. No hidden fees. No setup costs. Pricing scales with volume — the more you order the lower your per-unit cost. But there is never a minimum."}
          </p>
          <div className={styles.pricingGrid}>
            {PRICING_TIERS.map((tier) => (
              <div key={tier.tier} className={`${styles.pricingCard} ${tier.popular ? styles.pricingCardPopular : ""}`}>
                {tier.popular && <span className={styles.pricingPopularBadge}>{isFr ? "Le plus populaire" : "Most popular"}</span>}
                <span className={styles.pricingTier}>{isFr ? tier.tierFr : tier.tier}</span>
                <p className={styles.pricingRange}>{isFr ? tier.rangeFr : tier.range}</p>
                <p className={styles.pricingDescription}>{isFr ? tier.descriptionFr : tier.description}</p>
                <Link href={`/${locale}/contact`} className={styles.pricingCta}>{isFr ? "Obtenir un devis" : "Get a quote"}</Link>
              </div>
            ))}
          </div>
          <p className={styles.pricingNote}>
            {isFr
              ? "Tous les prix incluent le design personnalisé complet, le café de qualité spécialité, la torréfaction professionnelle et la livraison standard. Contactez-nous pour un prix unitaire exact selon votre volume."
              : "All pricing includes full custom design, specialty grade coffee, professional roasting, and standard shipping. Contact us for exact per-unit pricing based on your volume."}
          </p>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className={styles.sectionGray}>
        <div className={styles.sectionInner}>
          <span className={styles.eyebrow}>{isFr ? "08_ Ce que disent nos clients" : "08_ What Our Clients Say"}</span>
          <div className={styles.testimonialGrid}>
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className={styles.testimonialCard}>
                <div className={styles.testimonialStars}>★★★★★</div>
                <p className={styles.testimonialQuote}>&ldquo;{isFr ? t.quoteFr : t.quote}&rdquo;</p>
                <div className={styles.testimonialAuthor}>
                  <span className={styles.testimonialName}>{t.name}</span>
                  <span className={styles.testimonialRole}>{isFr ? t.roleFr : t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className={styles.finalCta}>
        <div className={styles.finalCtaInner}>
          <h2 className={styles.finalCtaTitle}>{isFr ? "Prêt à mettre votre marque sur du café de spécialité ?" : "Ready to put your brand on specialty coffee?"}</h2>
          <p className={styles.finalCtaSubtext}>
            {isFr
              ? "Aucun minimum. Aucuns frais cachés. Design complet inclus. Vos sacs de café de marque livrés partout au Canada et aux États-Unis en 2 à 3 semaines."
              : "No minimums. No hidden fees. Full design included. Your branded coffee bags delivered across Canada and the USA in 2 to 3 weeks."}
          </p>
          <div className={styles.finalCtaButtons}>
            <Link href={`/${locale}/design`} className={styles.finalCtaPrimary}>{isFr ? "Concevez votre sachet maintenant" : "Design your bag now"}</Link>
            <Link href={`/${locale}/contact`} className={styles.finalCtaSecondary}>{isFr ? "Obtenir un devis gratuit" : "Get a free quote"}</Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default CustomCoffeeBagsPage;
