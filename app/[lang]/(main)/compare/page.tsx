import type { Metadata } from "next";
import Link from "next/link";

import styles from "./compare.module.scss";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isFr = lang === "fr";
  const title = isFr
    ? "Meilleurs sacs de café personnalisés au Canada | EZPZ vs concurrents | Aucun minimum"
    : "Best Custom Coffee Bags Canada | EZPZ vs Competitors | No Minimum";
  const description = isFr
    ? "Comparez EZPZ Coffee à Rogue Wave Coffee, Canterbury Coffee, Black Stripe Coffee, Virgin Hill Coffee, Hutsul Coffee et d'autres. Aucun minimum, design inclus, torréfié à Montréal."
    : "See how EZPZ Coffee compares to Rogue Wave Coffee, Canterbury Coffee, Black Stripe Coffee, Virgin Hill Coffee, Hutsul Coffee and others. No minimums, full design included, roasted in Montreal.";
  return {
    title,
    description,
    alternates: {
      canonical: `/${lang}/compare`,
      languages: {
        en: "https://www.ezpz.coffee/en/compare",
        "fr-CA": "https://www.ezpz.coffee/fr/compare",
      },
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://www.ezpz.coffee/${lang}/compare`,
    },
  };
}

const COMPETITORS: { name: string; href: string }[] = [
  { name: "Rogue Wave Coffee", href: "/en/compare/rogue-wave-coffee-alternative" },
  { name: "Canterbury Coffee", href: "/en/compare/canterbury-coffee-alternative" },
  { name: "Black Stripe Coffee", href: "/en/compare/black-stripe-coffee-alternative" },
  { name: "Virgin Hill Coffee", href: "/en/compare/virgin-hill-coffee-alternative" },
  { name: "Hutsul Coffee", href: "/en/compare/hutsul-coffee-alternative" },
];

const COMPETITOR_PAGES: { name: string; blurb: string; blurbFr: string; href: string }[] = [
  { name: "Rogue Wave Coffee", blurb: "Edmonton-based roaster with high minimum orders and no online design tool.", blurbFr: "Torréfacteur basé à Edmonton avec des commandes minimales élevées et aucun outil de conception en ligne.", href: "/en/compare/rogue-wave-coffee-alternative" },
  { name: "Canterbury Coffee", blurb: "BC distributor focused on grocery and foodservice — not brand builders.", blurbFr: "Distributeur de C.-B. axé sur l'épicerie et la restauration, pas sur les créateurs de marques.", href: "/en/compare/canterbury-coffee-alternative" },
  { name: "Black Stripe Coffee", blurb: "Custom coffee supplier with limited transparency on pricing and MOQ.", blurbFr: "Fournisseur de café personnalisé avec peu de transparence sur les prix et les MOQ.", href: "/en/compare/black-stripe-coffee-alternative" },
  { name: "Virgin Hill Coffee", blurb: "Specialty roaster without an online design tool or zero-minimum offering.", blurbFr: "Torréfacteur de spécialité sans outil de conception en ligne ni offre zéro minimum.", href: "/en/compare/virgin-hill-coffee-alternative" },
  { name: "Hutsul Coffee", blurb: "Wholesale-focused roaster with unclear minimum and turnaround requirements.", blurbFr: "Torréfacteur axé sur le gros avec des exigences de minimum et de délai peu claires.", href: "/en/compare/hutsul-coffee-alternative" },
  { name: "Roasters Pack", blurb: "Subscription-first model — not built for custom branded bag production.", blurbFr: "Modèle axé sur l'abonnement, pas conçu pour la production de sacs de marque personnalisés.", href: "/en/compare/roasters-pack-alternative" },
  { name: "Private Label Suppliers Canada", blurb: "Canterbury, Cafe Barista, and KW Coffee Collective compared side by side with EZPZ.", blurbFr: "Canterbury, Cafe Barista et KW Coffee Collective comparés côte à côte avec EZPZ.", href: "/en/compare/private-label-coffee-suppliers-canada" },
];

const ROWS: { feature: string; ezpz: string; competitors: string[] }[] = [
  {
    feature: "Minimum order",
    ezpz: "None — order 1 bag",
    competitors: ["High minimums", "Large volume only", "High minimums", "High minimums", "Unclear"],
  },
  {
    feature: "Custom bag design included",
    ezpz: "Yes, always free",
    competitors: ["Extra cost", "Not mentioned", "Not mentioned", "Not mentioned", "Not mentioned"],
  },
  {
    feature: "Specialty grade coffee",
    ezpz: "Yes, 80+ SCA",
    competitors: ["Yes", "Yes", "Yes", "Yes", "Yes"],
  },
  {
    feature: "Turnaround time",
    ezpz: "2 to 3 weeks",
    competitors: ["Unclear", "Weeks to months", "Unclear", "Unclear", "Unclear"],
  },
  {
    feature: "Online design tool",
    ezpz: "Yes",
    competitors: ["No", "No", "No", "No", "No"],
  },
  {
    feature: "Transparent pricing",
    ezpz: "Yes",
    competitors: ["No", "No", "No", "No", "No"],
  },
  {
    feature: "Roasted in Canada",
    ezpz: "Yes, Montreal",
    competitors: ["Yes, Edmonton", "Yes, BC", "Yes", "Yes", "Yes"],
  },
  {
    feature: "Ships across Canada",
    ezpz: "Yes",
    competitors: ["Yes", "Yes", "Yes", "Yes", "Yes"],
  },
  {
    feature: "White label solutions",
    ezpz: "Yes — bags, RTD, capsules",
    competitors: ["Bags only", "Grocery and foodservice", "Limited", "Limited", "Limited"],
  },
  {
    feature: "Distribution support",
    ezpz: "Yes",
    competitors: ["No", "Limited", "No", "No", "No"],
  },
];

const DIFFERENTIATORS = [
  {
    n: "01",
    title: "No minimum — anywhere.",
    titleFr: "Aucun minimum, nulle part.",
    body: "Every competitor we looked at requires minimum orders of 50, 100, or even 500+ units. EZPZ is the only custom coffee supplier in Canada with zero minimums. Order 1 bag. Order 10,000. We treat you the same.",
    bodyFr: "Chaque concurrent que nous avons examiné exige des commandes minimales de 50, 100 ou même 500 unités et plus. EZPZ est le seul fournisseur de café personnalisé au Canada avec zéro minimum. Commandez 1 sachet. Commandez 10 000. Nous vous traitons de la même façon.",
  },
  {
    n: "02",
    title: "Design included. Always.",
    titleFr: "Design inclus. Toujours.",
    body: "Most suppliers charge extra for packaging design or require you to supply print-ready files. At EZPZ, full bag design and customization is included in your per-unit price. No hidden fees, ever.",
    bodyFr: "La plupart des fournisseurs facturent un supplément pour le design d'emballage ou exigent que vous fournissiez des fichiers prêts à imprimer. Chez EZPZ, le design et la personnalisation complets du sachet sont inclus dans votre prix unitaire. Aucuns frais cachés, jamais.",
  },
  {
    n: "03",
    title: "Built for brands, not just roasters.",
    titleFr: "Conçu pour les marques, pas seulement pour les torréfacteurs.",
    body: "Canterbury and Rogue Wave are great roasters. But they built their businesses for wholesale coffee buyers, not brand builders. EZPZ was built specifically for restaurants, hotels, retailers, and brands who want to sell coffee under their own name.",
    bodyFr: "Canterbury et Rogue Wave sont d'excellents torréfacteurs. Mais ils ont construit leurs entreprises pour les acheteurs de café en gros, pas pour les créateurs de marques. EZPZ a été construit spécifiquement pour les restaurants, les hôtels, les détaillants et les marques qui veulent vendre du café sous leur propre nom.",
  },
  {
    n: "04",
    title: "You can start today.",
    titleFr: "Vous pouvez commencer aujourd'hui.",
    body: "No lengthy onboarding. No sales calls required. Use our online design tool to create your bag right now, pick your coffee, and place your order. Most competitors require you to email them and wait days for a quote.",
    bodyFr: "Pas de longue intégration. Pas d'appels de vente requis. Utilisez notre outil de conception en ligne pour créer votre sachet maintenant, choisissez votre café et passez votre commande. La plupart des concurrents vous demandent de leur envoyer un courriel et d'attendre des jours pour un devis.",
  },
];

const isPositive = (val: string) =>
  val.toLowerCase().startsWith("yes");

const isNegative = (val: string) =>
  val.toLowerCase() === "no" ||
  val.toLowerCase().includes("unclear") ||
  val.toLowerCase().includes("not mentioned") ||
  val.toLowerCase().includes("high minimums") ||
  val.toLowerCase().includes("large volume");

const WEBPAGE_LD = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "EZPZ Coffee vs Competitors — Best Custom Coffee Bags in Canada",
  url: "https://www.ezpz.coffee/en/compare",
  description: "Compare EZPZ Coffee to Rogue Wave Coffee, Canterbury Coffee, Black Stripe Coffee, Virgin Hill Coffee, Hutsul Coffee, and Roasters Pack. EZPZ is the only Canadian custom coffee bag supplier with zero minimums, free bag design, and an online design tool.",
  isPartOf: { "@type": "WebSite", url: "https://www.ezpz.coffee", name: "EZPZ Coffee" },
  about: {
    "@type": "LocalBusiness",
    name: "EZPZ Coffee",
    url: "https://www.ezpz.coffee",
  },
  keywords: "custom coffee bags Canada, EZPZ vs Rogue Wave Coffee, EZPZ vs Canterbury Coffee, custom coffee alternative Canada, no minimum custom coffee, branded coffee bags Canada",
};

export default async function ComparePage({ params }: Props) {
  const { lang } = await params;
  const isFr = lang === "fr";

  return (
    <div className={styles.page}>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBPAGE_LD) }}
      />

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.eyebrow}>{isFr ? "EZPZ face à la concurrence" : "EZPZ vs The Competition"}</span>
          <h1 className={styles.heroTitle}>
            {isFr
              ? "Pourquoi les marques canadiennes choisissent EZPZ plutôt que la concurrence."
              : "Why Canadian brands choose EZPZ over the competition."}
          </h1>
          <p className={styles.heroSubtitle}>
            {isFr
              ? "Nous avons examiné chaque option de café personnalisé au Canada pour que vous n'ayez pas à le faire. Voici ce que nous avons trouvé."
              : "We looked at every custom coffee option in Canada so you don't have to. Here's what we found."}
          </p>
        </div>
      </section>

      {/* ── Comparison table ── */}
      <section className={styles.tableSection}>
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.thFeature}>{isFr ? "Caractéristique" : "Feature"}</th>
                <th className={`${styles.th} ${styles.thEzpz}`}>EZPZ Coffee</th>
                {COMPETITORS.map((c) => (
                  <th key={c.name} className={styles.th}>
                    <Link href={c.href.replace("/en/", `/${lang}/`)} className={styles.thLink}>{c.name}</Link>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row) => (
                <tr key={row.feature} className={styles.tr}>
                  <td className={styles.tdFeature}>{row.feature}</td>
                  <td className={`${styles.td} ${styles.tdEzpz}`}>
                    <span className={styles.check}>✓</span> {row.ezpz}
                  </td>
                  {row.competitors.map((val, i) => (
                    <td key={i} className={styles.td}>
                      <span className={isNegative(val) ? styles.cross : isPositive(val) ? styles.checkGray : styles.neutral}>
                        {isNegative(val) ? "✗" : isPositive(val) ? "✓" : "—"}
                      </span>{" "}
                      {val}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── What makes EZPZ different ── */}
      <section className={styles.diff}>
        <div className={styles.diffInner}>
          <span className={styles.eyebrow}>{isFr ? "La différence EZPZ" : "The EZPZ difference"}</span>
          <h2 className={styles.diffTitle}>{isFr ? "Ce qui rend EZPZ différent" : "What makes EZPZ different"}</h2>
          <div className={styles.diffGrid}>
            {DIFFERENTIATORS.map((d) => (
              <div key={d.n} className={styles.diffCard}>
                <span className={styles.diffNumber}>{d.n}</span>
                <h3 className={styles.diffCardTitle}>{isFr ? d.titleFr : d.title}</h3>
                <p className={styles.diffCardBody}>{isFr ? d.bodyFr : d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Head-to-head pages ── */}
      <section className={styles.headToHead}>
        <div className={styles.headToHeadInner}>
          <span className={styles.eyebrow}>{isFr ? "Comparaisons détaillées" : "Detailed Comparisons"}</span>
          <h2 className={styles.headToHeadTitle}>{isFr ? "EZPZ contre chaque concurrent canadien" : "EZPZ vs every Canadian competitor"}</h2>
          <div className={styles.headToHeadGrid}>
            {COMPETITOR_PAGES.map((c) => (
              <Link key={c.href} href={c.href.replace("/en/", `/${lang}/`)} className={styles.headToHeadCard}>
                <span className={styles.headToHeadName}>{c.name}</span>
                <p className={styles.headToHeadBlurb}>{isFr ? c.blurbFr : c.blurb}</p>
                <span className={styles.headToHeadCta}>{isFr ? "Voir la comparaison complète →" : "See full comparison →"}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA banner ── */}
      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>{isFr ? "Prêt à voir la différence?" : "Ready to see the difference?"}</h2>
          <div className={styles.ctaButtons}>
            <Link href={`/${lang}/design`} className={styles.ctaPrimary}>{isFr ? "Concevoir votre sachet" : "Design your bag"}</Link>
            <Link href={`/${lang}/contact`} className={styles.ctaSecondary}>{isFr ? "Obtenir un devis" : "Get a quote"}</Link>
          </div>
        </div>
      </section>

    </div>
  );
}
