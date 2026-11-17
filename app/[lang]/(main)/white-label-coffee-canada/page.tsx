import type { Metadata } from "next";
import Link from "next/link";

import styles from "./whiteLabelCanada.module.scss";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isFr = lang === "fr";
  const title = isFr
    ? "Café Marque Blanche Canada | Zéro Minimum | Design Inclus | EZPZ"
    : "White Label Coffee Canada | No Minimum | Full Design Included | EZPZ";
  const description = isFr
    ? "Solutions de café marque blanche pour les entreprises canadiennes. Sacs personnalisés, zéro minimum, design complet inclus. Torréfié frais à Montréal, expédié partout au Canada. EZPZ."
    : "White label coffee solutions for Canadian businesses. Custom branded bags, no minimum order, full design included. Roasted fresh in Montreal, shipped across Canada. EZPZ.";
  return {
    title,
    description,
    alternates: {
      canonical: `/${lang}/white-label-coffee-canada`,
      languages: {
        "en-CA": "https://www.ezpz.coffee/en/white-label-coffee-canada",
        "fr-CA": "https://www.ezpz.coffee/fr/white-label-coffee-canada",
        "x-default": "https://www.ezpz.coffee/en/white-label-coffee-canada",
      },
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://www.ezpz.coffee/${lang}/white-label-coffee-canada`,
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "White Label Coffee Canada" }],
    },
    twitter: {
      card: "summary_large_image",
      title: isFr ? "Café Marque Blanche Canada | Zéro Minimum | EZPZ" : "White Label Coffee Canada | No Minimum | EZPZ",
      description: isFr
        ? "Solutions de café marque blanche pour les entreprises canadiennes. Zéro minimum, design inclus."
        : "White label coffee solutions for Canadian businesses. No minimum order, design included.",
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const BREADCRUMB_BASE = "https://www.ezpz.coffee/en";

const PRODUCTS = [
  {
    icon: "☕",
    title: "Custom branded coffee bags",
    titleFr: "Sacs de café de marque personnalisés",
    body: "Put your logo, brand name, and messaging on specialty grade coffee bags. Choose your roast profile, origin, and packaging style. No minimum order.",
    bodyFr: "Apposez votre logo, votre nom de marque et vos messages sur des sacs de café de qualité spécialité. Choisissez votre profil de torréfaction, votre origine et votre style d'emballage. Zéro minimum.",
  },
  {
    icon: "🥤",
    title: "Ready-to-drink cold brew",
    titleFr: "Cold brew prêt à boire",
    body: "White label cold brew coffee in cans or bottles, branded with your label. A turnkey product for cafes, gyms, retailers, and hospitality brands.",
    bodyFr: "Café cold brew en canettes ou en bouteilles à marque blanche, sous votre étiquette. Un produit clé en main pour les cafés, gyms, détaillants et marques d'hôtellerie.",
  },
  {
    icon: "💊",
    title: "Branded coffee capsules",
    titleFr: "Capsules de café de marque",
    body: "Compatible with Nespresso and Keurig systems. Custom-branded capsules filled with specialty grade coffee, roasted fresh in Montreal.",
    bodyFr: "Compatible avec les systèmes Nespresso et Keurig. Capsules à marque personnalisée remplies de café de qualité spécialité, torréfié frais à Montréal.",
  },
];

const WHO = [
  {
    title: "Restaurants and cafes",
    titleFr: "Restaurants et cafés",
    body: "Offer your guests coffee under your own brand. From table service to retail bags at the counter — EZPZ handles the product, you keep the margin.",
    bodyFr: "Offrez à vos clients du café sous votre propre marque. Du service à table aux sacs en vente au comptoir, EZPZ gère le produit, vous gardez la marge.",
  },
  {
    title: "Hotels and hospitality",
    titleFr: "Hôtels et hôtellerie",
    body: "Put branded coffee in every room and at every continental breakfast. Elevate the guest experience without sourcing minimums or managing inventory.",
    bodyFr: "Placez du café de marque dans chaque chambre et à chaque petit-déjeuner continental. Élevez l'expérience client sans minimums d'approvisionnement ni gestion d'inventaire.",
  },
  {
    title: "Retailers and boutiques",
    titleFr: "Détaillants et boutiques",
    body: "Add a premium private label coffee to your product lineup. No warehouse, no upfront buy-in — just your brand on great coffee.",
    bodyFr: "Ajoutez un café à marque privée haut de gamme à votre gamme de produits. Pas d'entrepôt, pas d'engagement initial, juste votre marque sur un excellent café.",
  },
  {
    title: "Corporate and gifting",
    titleFr: "Entreprises et cadeaux",
    body: "Custom branded coffee for client gifts, welcome kits, events, and swag. Order one bag or a thousand — we scale with your needs.",
    bodyFr: "Café de marque personnalisé pour cadeaux clients, kits de bienvenue, événements et articles promotionnels. Commandez un sachet ou mille, nous nous adaptons à vos besoins.",
  },
];

const HOW = [
  {
    n: "01",
    title: "Design your bag online",
    titleFr: "Concevez votre sachet en ligne",
    body: "Upload your logo, choose your packaging style, and add your messaging. Our online tool makes it easy in under 10 minutes. No design experience required.",
    bodyFr: "Téléchargez votre logo, choisissez votre style d'emballage et ajoutez vos messages. Notre outil en ligne vous permet de le faire facilement en moins de 10 minutes. Aucune expérience en design requise.",
  },
  {
    n: "02",
    title: "We finalize the design",
    titleFr: "Nous finalisons le design",
    body: "Our team reviews and refines your bag design at no extra cost. You approve the final proof before anything goes to production.",
    bodyFr: "Notre équipe révise et peaufine le design de votre sachet sans frais supplémentaires. Vous approuvez l'épreuve finale avant que quoi que ce soit ne soit mis en production.",
  },
  {
    n: "03",
    title: "Roasted fresh in Montreal",
    titleFr: "Torréfié frais à Montréal",
    body: "Your coffee is roasted to order at Canadian Roasting Society in Montreal and packed in your custom branded bag. No minimums, no pre-packaged stock.",
    bodyFr: "Votre café est torréfié à la commande à la Canadian Roasting Society à Montréal et emballé dans votre sachet de marque personnalisé. Zéro minimum, pas de stock préemballé.",
  },
  {
    n: "04",
    title: "Shipped anywhere in Canada",
    titleFr: "Expédié partout au Canada",
    body: "From Montreal to your door in 5 to 10 business days depending on your location. Fully tracked, coast to coast.",
    bodyFr: "De Montréal à votre porte en 5 à 10 jours ouvrables selon votre emplacement. Entièrement suivi, d'un océan à l'autre.",
  },
];

export default async function WhiteLabelCanadaPage({ params }: Props) {
  const { lang } = await params;
  const isFr = lang === "fr";

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${BREADCRUMB_BASE}` },
      { "@type": "ListItem", position: 2, name: "White Label Coffee Canada", item: `${BREADCRUMB_BASE}/white-label-coffee-canada` },
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
          <Link href={`/${lang}`} className={styles.breadcrumbLink}>{isFr ? "Accueil" : "Home"}</Link>
          <span className={styles.breadcrumbSep}>›</span>
          <span className={styles.breadcrumbCurrent}>{isFr ? "Café Marque Blanche Canada" : "White Label Coffee Canada"}</span>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.eyebrow}>{isFr ? "Café marque blanche : Canada" : "White Label Coffee — Canada"}</span>
          <h1 className={styles.heroTitle}>{isFr ? "Solutions de café marque blanche pour les marques canadiennes." : "White label coffee solutions for Canadian brands."}</h1>
          <p className={styles.heroSubtitle}>
            {isFr
              ? "Votre marque sur du café de qualité spécialité. Zéro commande minimale, design complet inclus, torréfié frais à Montréal et expédié partout au Canada."
              : "Your brand on specialty grade coffee. No minimum order, full design included, roasted fresh in Montreal and shipped anywhere in Canada."}
          </p>
          <div className={styles.heroButtons}>
            <Link href={`/${lang}/design`} className={styles.heroPrimary}>{isFr ? "Concevoir votre sachet" : "Design your bag"}</Link>
            <Link href={`/${lang}/contact`} className={styles.heroSecondary}>{isFr ? "Obtenir un devis gratuit" : "Get a free quote"}</Link>
          </div>
        </div>
      </section>

      {/* ── Intro ── */}
      <section className={styles.intro}>
        <div className={styles.introInner}>
          <p className={styles.introText}>
            {isFr
              ? "Le café marque blanche est l'une des façons les plus accessibles pour une entreprise canadienne de créer un produit de marque haut de gamme. Que vous dirigiez un restaurant, un hôtel, une boutique ou un programme de cadeaux d'entreprise, apposer votre marque sur un excellent café fidélise la clientèle, génère des revenus récurrents et donne à vos clients quelque chose de concret à rapporter chez eux. EZPZ est le seul fournisseur de café marque blanche au Canada avec un vrai zéro minimum de commande, un design de sachet entièrement personnalisé inclus dans chaque commande, et du café de qualité spécialité 100 % traçable torréfié frais à Montréal. Aucuns frais de démarrage, aucuns frais d'entreposage, aucun engagement de volume."
              : "White label coffee is one of the most accessible ways for a Canadian business to create a premium branded product. Whether you run a restaurant, a hotel, a boutique, or a corporate gifting program — putting your brand on great coffee builds loyalty, drives repeat revenue, and gives your customers something tangible to take home. EZPZ is the only white label coffee supplier in Canada with a genuine zero minimum order, full custom bag design included in every order, and 100% traceable specialty grade coffee roasted fresh in Montreal. No setup fees, no warehousing costs, no locked-in volume commitments."}
          </p>
        </div>
      </section>

      {/* ── Products ── */}
      <section className={styles.products}>
        <div className={styles.productsInner}>
          <span className={styles.eyebrow}>{isFr ? "Ce que nous offrons" : "What we offer"}</span>
          <h2 className={styles.sectionTitleLight}>{isFr ? "Produits de café marque blanche pour chaque format." : "White label coffee products for every format."}</h2>
          <div className={styles.productGrid}>
            {PRODUCTS.map((p) => (
              <div key={p.title} className={styles.productCard}>
                <span className={styles.productIcon}>{p.icon}</span>
                <h3 className={styles.productTitle}>{isFr ? p.titleFr : p.title}</h3>
                <p className={styles.productBody}>{isFr ? p.bodyFr : p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who is this for ── */}
      <section className={styles.who}>
        <div className={styles.whoInner}>
          <span className={styles.eyebrow}>{isFr ? "Pour qui" : "Who it's for"}</span>
          <h2 className={styles.sectionTitle}>{isFr ? "Conçu pour les entreprises canadiennes de toute taille." : "Built for Canadian businesses of every size."}</h2>
          <div className={styles.whoGrid}>
            {WHO.map((w) => (
              <div key={w.title} className={styles.whoCard}>
                <h3 className={styles.whoCardTitle}>{isFr ? w.titleFr : w.title}</h3>
                <p className={styles.whoCardBody}>{isFr ? w.bodyFr : w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className={styles.how}>
        <div className={styles.howInner}>
          <span className={styles.eyebrowDark}>{isFr ? "Comment ça fonctionne" : "How it works"}</span>
          <h2 className={styles.sectionTitleDark}>{isFr ? "Du concept à la livraison en moins de deux semaines." : "From concept to delivery in under two weeks."}</h2>
          <div className={styles.howGrid}>
            {HOW.map((step) => (
              <div key={step.n} className={styles.howStep}>
                <span className={styles.howNumber}>{step.n}</span>
                <h3 className={styles.howStepTitle}>{isFr ? step.titleFr : step.title}</h3>
                <p className={styles.howStepBody}>{isFr ? step.bodyFr : step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>{isFr ? "Prêt à lancer votre marque de café marque blanche ?" : "Ready to launch your white label coffee brand?"}</h2>
          <p className={styles.ctaSubtext}>
            {isFr
              ? "Zéro minimum. Design complet inclus. Torréfié frais à Montréal et expédié partout au Canada."
              : "No minimums. Full design included. Roasted fresh in Montreal and shipped across Canada."}
          </p>
          <div className={styles.ctaButtons}>
            <Link href={`/${lang}/design`} className={styles.ctaPrimary}>{isFr ? "Concevoir votre sachet" : "Design your bag"}</Link>
            <Link href={`/${lang}/contact`} className={styles.ctaSecondary}>{isFr ? "Obtenir un devis gratuit" : "Get a free quote"}</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
