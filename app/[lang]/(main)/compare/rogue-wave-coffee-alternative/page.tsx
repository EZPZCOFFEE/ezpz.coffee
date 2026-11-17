import type { Metadata } from "next";
import Link from "next/link";

import styles from "./rogueWave.module.scss";

type Props = { params: Promise<{ lang: string }> };

const OTHER_COMPARISONS = [
  { label: "EZPZ vs Canterbury Coffee", href: "/en/compare/canterbury-coffee-alternative" },
  { label: "EZPZ vs Black Stripe Coffee", href: "/en/compare/black-stripe-coffee-alternative" },
  { label: "EZPZ vs Virgin Hill Coffee", href: "/en/compare/virgin-hill-coffee-alternative" },
  { label: "EZPZ vs Hutsul Coffee", href: "/en/compare/hutsul-coffee-alternative" },
  { label: "EZPZ vs Roasters Pack", href: "/en/compare/roasters-pack-alternative" },
];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isFr = lang === "fr";
  const title = isFr
    ? "Alternative à Rogue Wave Coffee | Sacs de café personnalisés sans minimum | EZPZ"
    : "Rogue Wave Coffee Alternative | Custom Coffee Bags No Minimum | EZPZ";
  const description = isFr
    ? "Vous cherchez une alternative à Rogue Wave Coffee pour des sacs de marque personnalisés? EZPZ offre aucun minimum, design inclus, café de spécialité torréfié à Montréal, livraison partout au Canada."
    : "Looking for a Rogue Wave Coffee alternative for custom branded bags? EZPZ offers no minimum orders, full design included, specialty coffee roasted in Montreal, and ships across Canada.";
  return {
    title,
    description,
    alternates: {
      canonical: `/${lang}/compare/rogue-wave-coffee-alternative`,
      languages: {
        "en-CA": "https://www.ezpz.coffee/en/compare/rogue-wave-coffee-alternative",
        "fr-CA": "https://www.ezpz.coffee/fr/compare/rogue-wave-coffee-alternative",
        "x-default": "https://www.ezpz.coffee/en/compare/rogue-wave-coffee-alternative",
      },
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://www.ezpz.coffee/${lang}/compare/rogue-wave-coffee-alternative`,
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "EZPZ vs Rogue Wave Coffee" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const ROWS: { feature: string; ezpz: string; rogue: string }[] = [
  { feature: "Minimum order",            ezpz: "None",                    rogue: "100+ units" },
  { feature: "Custom bag design included", ezpz: "Yes, free",             rogue: "Extra cost" },
  { feature: "Online design tool",       ezpz: "Yes",                     rogue: "No" },
  { feature: "Turnaround time",          ezpz: "2 to 3 weeks",            rogue: "4 to 6 weeks" },
  { feature: "Transparent pricing",      ezpz: "Yes",                     rogue: "No" },
  { feature: "White label solutions",    ezpz: "Bags, RTD, capsules",     rogue: "Bags only" },
  { feature: "Distribution support",     ezpz: "Yes",                     rogue: "No" },
  { feature: "Ships across Canada",      ezpz: "Yes",                     rogue: "Yes" },
  { feature: "Specialty grade coffee",   ezpz: "Yes, 80+ SCA",            rogue: "Yes" },
];

const REASONS = [
  {
    n: "01",
    title: "No minimum order",
    body: "Rogue Wave requires significant minimum quantities for custom orders. This makes sense for their business model but it creates a massive barrier for small businesses, new brands, or anyone who wants to test a concept before committing. EZPZ has zero minimums. You can order a single bag. This alone is why most brands choose us.",
  },
  {
    n: "02",
    title: "Design is included",
    body: "To order custom coffee from Rogue Wave, you need to bring your own print-ready design files. That means hiring a graphic designer before you even know if your concept will work. At EZPZ, full bag design is included in your per-unit price. You bring your logo and brand colors — we handle the rest.",
  },
  {
    n: "03",
    title: "Built for your brand, not the roasting community",
    body: "Rogue Wave built their brand for specialty coffee enthusiasts, competitive brewers, and gear lovers. Their website, their language, their products — all aimed at that audience. EZPZ was built for brand owners. Our entire process, from the online design tool to the quote system to the customer support, was designed with business owners in mind.",
  },
];

const REASONS_FR = [
  {
    n: "01",
    title: "Aucun minimum de commande",
    body: "Rogue Wave exige des quantités minimales importantes pour les commandes personnalisées. Cela est logique pour leur modèle d'affaires, mais crée une barrière importante pour les petites entreprises, les nouvelles marques ou quiconque veut tester un concept avant de s'engager. EZPZ a un zéro minimum. Vous pouvez commander un seul sachet. C'est la raison principale pour laquelle la plupart des marques nous choisissent.",
  },
  {
    n: "02",
    title: "Le design est inclus",
    body: "Pour commander du café personnalisé chez Rogue Wave, vous devez apporter vos propres fichiers de design prêts à imprimer. Cela signifie engager un graphiste avant même de savoir si votre concept fonctionnera. Chez EZPZ, le design complet du sachet est inclus dans votre prix unitaire. Vous apportez votre logo et vos couleurs de marque, nous nous occupons du reste.",
  },
  {
    n: "03",
    title: "Conçu pour votre marque, pas pour la communauté du café",
    body: "Rogue Wave a construit sa marque pour les amateurs de café de spécialité, les brasseurs en compétition et les passionnés d'équipement. Leur site, leur langage, leurs produits, tout est destiné à ce public. EZPZ a été conçu pour les propriétaires de marques. Tout notre processus, de l'outil de conception en ligne au système de devis et au support client, a été pensé pour les entrepreneurs.",
  },
];

const TESTIMONIALS = [
  {
    quote: "Working with EZPZ was seamless from start to finish. Our branded coffee became one of our best-selling products.",
    author: "Sarah L.",
    role: "Boutique Owner",
  },
  {
    quote: "EZPZ helped us launch our coffee brand with zero headaches. Highly recommend to any business looking to add coffee to their lineup.",
    author: "Julie R.",
    role: "Retail Brand",
  },
];

const isPositive = (val: string) => val.toLowerCase().startsWith("yes") || val === "None" || val.includes("Bags,");
const isNegative = (val: string) => val.toLowerCase() === "no" || val.includes("100+") || val.includes("Extra cost") || val.includes("4 to 6");

export default async function RogueWavePage({ params }: Props) {
  const { lang } = await params;
  const isFr = lang === "fr";
  const reasons = isFr ? REASONS_FR : REASONS;

  return (
    <div className={styles.page}>

      {/* ── Breadcrumb ── */}
      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <div className={styles.breadcrumbInner}>
          <Link href={`/${lang}`} className={styles.breadcrumbLink}>{isFr ? "Accueil" : "Home"}</Link>
          <span className={styles.breadcrumbSep}>›</span>
          <Link href={`/${lang}/compare`} className={styles.breadcrumbLink}>{isFr ? "Comparer" : "Compare"}</Link>
          <span className={styles.breadcrumbSep}>›</span>
          <span className={styles.breadcrumbCurrent}>EZPZ vs Rogue Wave Coffee</span>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.eyebrow}>EZPZ vs Rogue Wave Coffee</span>
          <h1 className={styles.heroTitle}>
            {isFr
              ? "Une alternative à Rogue Wave Coffee conçue pour les créateurs de marques."
              : "A Rogue Wave Coffee alternative built for brand builders."}
          </h1>
          <p className={styles.heroSubtitle}>
            {isFr
              ? "Rogue Wave Coffee est un excellent torréfacteur de spécialité. Mais si vous avez besoin de sacs de marque personnalisés sans minimum de commande, EZPZ a été construit exactement pour ça."
              : "Rogue Wave Coffee is a fantastic specialty roaster. But if you need custom branded bags with no minimum order, EZPZ was built exactly for that."}
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
          {isFr ? (
            <>
              <p className={styles.introText}>
                Rogue Wave Coffee est l&apos;un des torréfacteurs de spécialité les plus respectés au Canada, basé à Edmonton, en Alberta. Ils sourcent des grains exceptionnels, torréfient avec précision et ont bâti une communauté fidèle d&apos;amateurs de café. Nous respectons sincèrement ce qu&apos;ils ont accompli.
              </p>
              <p className={styles.introText}>
                Mais voici le point : Rogue Wave a été construit pour les amateurs de café, pas pour les marques de café. Si vous êtes un restaurant, un hôtel, une boutique, un gym ou toute entreprise qui cherche à vendre du café sous son propre nom avec un emballage personnalisé, sans minimum et avec un processus en ligne simple, Rogue Wave n&apos;est pas la bonne option. Ils offrent une option de café personnalisé, mais elle vient avec des exigences de commande minimale significatives, aucun support de design inclus et aucun processus simplifié de développement de marque.
              </p>
              <p className={styles.introText}>
                EZPZ a été construit spécifiquement pour résoudre ce problème. Voici comment nous comparons.
              </p>
            </>
          ) : (
            <>
              <p className={styles.introText}>
                Rogue Wave Coffee is one of Canada&apos;s most respected specialty roasters, based in Edmonton, Alberta. They source exceptional beans, roast with precision, and have built a loyal community of coffee enthusiasts. We genuinely respect what they have built.
              </p>
              <p className={styles.introText}>
                But here is the thing — Rogue Wave was built for coffee lovers, not coffee brands. If you are a restaurant, hotel, boutique, gym, or any business looking to sell coffee under your own brand name with custom packaging, no minimums, and a simple online process — Rogue Wave is not the right fit. They offer a custom coffee option, but it comes with significant minimum order requirements, no included design support, and no streamlined brand-building process.
              </p>
              <p className={styles.introText}>
                EZPZ was built specifically to solve that problem. Here is how we compare.
              </p>
            </>
          )}
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
                <th className={styles.th}>Rogue Wave Coffee</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row) => (
                <tr key={row.feature} className={styles.tr}>
                  <td className={styles.tdFeature}>{row.feature}</td>
                  <td className={`${styles.td} ${styles.tdEzpz}`}>
                    <span className={styles.check}>✓</span> {row.ezpz}
                  </td>
                  <td className={styles.td}>
                    <span className={isNegative(row.rogue) ? styles.cross : isPositive(row.rogue) ? styles.checkGray : styles.neutral}>
                      {isNegative(row.rogue) ? "✗" : isPositive(row.rogue) ? "✓" : "—"}
                    </span>{" "}
                    {row.rogue}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ── Why brands switch ── */}
      <section className={styles.reasons}>
        <div className={styles.reasonsInner}>
          <span className={styles.eyebrow}>{isFr ? "Pourquoi les marques changent" : "Why brands switch"}</span>
          <h2 className={styles.reasonsTitle}>
            {isFr
              ? "Pourquoi les marques choisissent EZPZ plutôt que Rogue Wave Coffee."
              : "Why brands choose EZPZ over Rogue Wave Coffee."}
          </h2>
          <div className={styles.reasonsGrid}>
            {reasons.map((r) => (
              <div key={r.n} className={styles.reasonCard}>
                <span className={styles.reasonNumber}>{r.n}</span>
                <h3 className={styles.reasonCardTitle}>{r.title}</h3>
                <p className={styles.reasonCardBody}>{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className={styles.testimonials}>
        <div className={styles.testimonialsInner}>
          <span className={styles.eyebrow}>{isFr ? "Ce que disent nos clients" : "What our customers say"}</span>
          <h2 className={styles.testimonialsTitle}>{isFr ? "Des résultats qui parlent d'eux-mêmes." : "Results that speak for themselves."}</h2>
          <div className={styles.testimonialsGrid}>
            {TESTIMONIALS.map((t) => (
              <div key={t.author} className={styles.testimonialCard}>
                <div className={styles.testimonialStars}>★★★★★</div>
                <p className={styles.testimonialQuote}>&ldquo;{t.quote}&rdquo;</p>
                <div className={styles.testimonialAuthor}>
                  <span className={styles.testimonialName}>{t.author}</span>
                  <span className={styles.testimonialRole}>{t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Back link ── */}
      <div className={styles.backLink}>
        <div className={styles.backLinkInner}>
          <Link href={`/${lang}/compare`} className={styles.backLinkAnchor}>
            {isFr ? "← Voir toutes les comparaisons" : "← See all competitor comparisons"}
          </Link>
        </div>
      </div>

      {/* ── Other comparisons ── */}
      <section style={{ background: "#f8f7f5", padding: "3rem 1.5rem", borderTop: "1px solid #e8e8e8" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <p style={{ fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--color-accent)", marginBottom: "1rem" }}>
            {isFr ? "Autres comparaisons" : "Other comparisons"}
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
            {OTHER_COMPARISONS.map(({ label, href }) => (
              <Link key={href} href={href.replace("/en/", `/${lang}/`)} style={{ display: "inline-block", padding: "8px 16px", background: "#ffffff", border: "1px solid #e0e0e0", borderRadius: "4px", fontSize: "0.82rem", fontWeight: 600, color: "#374151", textDecoration: "none" }}>{label}</Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>
            {isFr
              ? "Prêt à construire votre marque de café sans les minimums?"
              : "Ready to build your coffee brand without the minimums?"}
          </h2>
          <p className={styles.ctaSubtext}>
            {isFr
              ? "Rejoignez plus de 500 marques canadiennes qui ont choisi EZPZ. Concevez votre sachet en ligne en moins de 10 minutes."
              : "Join 500+ Canadian brands who chose EZPZ. Design your bag online in under 10 minutes."}
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
