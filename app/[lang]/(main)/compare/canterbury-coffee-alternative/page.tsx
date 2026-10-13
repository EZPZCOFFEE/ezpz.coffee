import type { Metadata } from "next";
import Link from "next/link";

import styles from "./canterbury.module.scss";

type Props = { params: Promise<{ lang: string }> };

const OTHER_COMPARISONS = [
  { label: "EZPZ vs Rogue Wave Coffee", href: "/en/compare/rogue-wave-coffee-alternative" },
  { label: "EZPZ vs Black Stripe Coffee", href: "/en/compare/black-stripe-coffee-alternative" },
  { label: "EZPZ vs Virgin Hill Coffee", href: "/en/compare/virgin-hill-coffee-alternative" },
  { label: "EZPZ vs Hutsul Coffee", href: "/en/compare/hutsul-coffee-alternative" },
  { label: "EZPZ vs Roasters Pack", href: "/en/compare/roasters-pack-alternative" },
];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isFr = lang === "fr";
  const title = isFr
    ? "Alternative à Canterbury Coffee pour les PME | EZPZ Coffee Canada"
    : "Canterbury Coffee Alternative for Small Business | EZPZ Coffee Canada";
  const description = isFr
    ? "Canterbury Coffee dessert les grandes chaînes d'épiceries et de restauration. EZPZ dessert tous les autres, restaurants, boutiques, hôtels, sans minimum et avec design personnalisé inclus."
    : "Canterbury Coffee serves large grocery and foodservice chains. EZPZ serves everyone else — restaurants, boutiques, hotels — with no minimums and full custom design included.";
  return {
    title,
    description,
    alternates: {
      canonical: `/${lang}/compare/canterbury-coffee-alternative`,
      languages: {
        en: "https://www.ezpz.coffee/en/compare/canterbury-coffee-alternative",
        "fr-CA": "https://www.ezpz.coffee/fr/compare/canterbury-coffee-alternative",
      },
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://www.ezpz.coffee/${lang}/compare/canterbury-coffee-alternative`,
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "EZPZ vs Canterbury Coffee" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const ROWS: { feature: string; ezpz: string; competitor: string }[] = [
  { feature: "Minimum order",              ezpz: "None",                       competitor: "Large volume only" },
  { feature: "Target client size",         ezpz: "Any size — 1 to 10,000 units", competitor: "National chains and large foodservice" },
  { feature: "Custom bag design included", ezpz: "Yes, free",                  competitor: "Not included" },
  { feature: "Online ordering",            ezpz: "Yes",                        competitor: "No — quote required" },
  { feature: "Turnaround time",            ezpz: "2 to 3 weeks",               competitor: "Weeks to months" },
  { feature: "Transparent pricing",        ezpz: "Yes",                        competitor: "No" },
  { feature: "White label options",        ezpz: "Bags, RTD, capsules",        competitor: "Grocery blends and foodservice" },
  { feature: "Distribution support",       ezpz: "Yes",                        competitor: "Limited to large clients" },
  { feature: "Specialty grade coffee",     ezpz: "Yes, 80+ SCA",               competitor: "Yes" },
];

const REASONS = [
  {
    n: "01",
    title: "You do not need to be a grocery chain",
    body: "Canterbury's private label page lists Grocery and Foodservice as their two client categories. If your business does not fit neatly into one of those boxes — a boutique, a gym, a hotel, an online brand — Canterbury is not designed for you. EZPZ works with any business of any size, in any industry, anywhere in Canada.",
  },
  {
    n: "02",
    title: "No volume commitments",
    body: "Canterbury's private label program requires volume commitments that make sense for grocery shelf space but are completely unrealistic for most small and medium businesses. EZPZ has zero minimums. You can start with a single bag, test the market, and scale when you are ready. The risk is essentially zero.",
  },
  {
    n: "03",
    title: "Start in days, not months",
    body: "Getting a custom coffee program off the ground with Canterbury means sales calls, sampling rounds, design approvals, production scheduling, and months of lead time. EZPZ lets you design your bag online, pick your coffee, and place your order in under 30 minutes. Most orders are ready within 2 to 3 weeks.",
  },
];

const REASONS_FR = [
  {
    n: "01",
    title: "Vous n'avez pas besoin d'être une chaîne d'épiceries",
    body: "La page de marque privée de Canterbury liste Épicerie et Service alimentaire comme ses deux catégories de clients. Si votre entreprise ne rentre pas dans l'une de ces cases, une boutique, un gym, un hôtel, une marque en ligne, Canterbury n'est pas conçu pour vous. EZPZ travaille avec toute entreprise de toute taille, dans toute industrie, partout au Canada.",
  },
  {
    n: "02",
    title: "Aucun engagement de volume",
    body: "Le programme de marque privée de Canterbury exige des engagements de volume qui ont du sens pour l'espace en épicerie, mais qui sont complètement irréalistes pour la plupart des petites et moyennes entreprises. EZPZ a un zéro minimum. Vous pouvez commencer avec un seul sachet, tester le marché et croître quand vous êtes prêt. Le risque de commencer est essentiellement nul.",
  },
  {
    n: "03",
    title: "Commencez en jours, pas en mois",
    body: "Lancer un programme de café personnalisé avec Canterbury implique des appels de vente, des rondes d'échantillonnage, des approbations de design, la planification de production et des mois de délai. EZPZ vous permet de concevoir votre sachet en ligne, choisir votre café et passer votre commande en moins de 30 minutes. La plupart des commandes sont prêtes en 2 à 3 semaines.",
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

const isPositive = (val: string) => val.toLowerCase().startsWith("yes") || val === "None" || val.includes("Any size") || val.includes("Bags,");
const isNegative = (val: string) =>
  val.toLowerCase() === "no" ||
  val.includes("Large volume") ||
  val.includes("National chains") ||
  val.includes("Not included") ||
  val.includes("quote required") ||
  val.includes("Weeks to months") ||
  val.includes("Limited to");

export default async function CanterburyPage({ params }: Props) {
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
          <span className={styles.breadcrumbCurrent}>EZPZ vs Canterbury Coffee</span>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.eyebrow}>EZPZ vs Canterbury Coffee</span>
          <h1 className={styles.heroTitle}>
            {isFr
              ? "Canterbury Coffee est conçu pour les chaînes d'épiceries. EZPZ est conçu pour votre marque."
              : "Canterbury Coffee is built for grocery chains. EZPZ is built for your brand."}
          </h1>
          <p className={styles.heroSubtitle}>
            {isFr
              ? "Canterbury dessert de grands clients canadiens depuis plus de 40 ans. Si vous n'êtes pas une chaîne nationale d'épiceries, EZPZ est le meilleur choix."
              : "Canterbury has been serving large Canadian clients for over 40 years. If you are not a national grocery chain, EZPZ is the better fit."}
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
                Canterbury Coffee est l&apos;une des plus grandes et plus établies compagnies de café au Canada. Basée en Colombie-Britannique, elle torréfie et approvisionne du café aux grandes chaînes d&apos;épiceries canadiennes, aux compagnies nationales de restauration et aux grands clients institutionnels depuis plus de quatre décennies. Ils sont très bons dans ce qu&apos;ils font.
              </p>
              <p className={styles.introText}>
                Mais le programme de marque privée de Canterbury est conçu pour les clients à grande échelle. Leur processus d&apos;intégration, leurs quantités minimales, leurs délais et leurs structures tarifaires sont construits autour de clients qui commandent des dizaines de milliers d&apos;unités. Si vous êtes un hôtel-boutique, un groupe de restauration en croissance, un détaillant spécialisé ou toute entreprise qui veut lancer un produit café de marque sans engagements massifs au départ, Canterbury n&apos;est tout simplement pas conçu pour vous.
              </p>
              <p className={styles.introText}>
                EZPZ l&apos;était. Voici comment nous comparons.
              </p>
            </>
          ) : (
            <>
              <p className={styles.introText}>
                Canterbury Coffee is one of Canada&apos;s largest and most established coffee companies. Based in BC, they have been roasting and supplying coffee to major Canadian grocery chains, national foodservice companies, and large institutional clients for over four decades. They are very good at what they do.
              </p>
              <p className={styles.introText}>
                But Canterbury&apos;s private label program is designed for large-scale clients. Their onboarding process, minimum quantities, lead times, and pricing structures are built around clients ordering tens of thousands of units. If you are a boutique hotel, a growing restaurant group, a specialty retailer, or any business that wants to launch a branded coffee product without massive upfront commitments — Canterbury is simply not built for you.
              </p>
              <p className={styles.introText}>
                EZPZ was. Here is how we compare.
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
                <th className={styles.th}>Canterbury Coffee</th>
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
                    <span className={isNegative(row.competitor) ? styles.cross : isPositive(row.competitor) ? styles.checkGray : styles.neutral}>
                      {isNegative(row.competitor) ? "✗" : isPositive(row.competitor) ? "✓" : "—"}
                    </span>{" "}
                    {row.competitor}
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
              ? "Pourquoi les marques en croissance choisissent EZPZ plutôt que Canterbury Coffee."
              : "Why growing brands choose EZPZ over Canterbury Coffee."}
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
              ? "Vous n'avez pas besoin d'être une chaîne d'épiceries pour avoir votre propre marque de café."
              : "You do not need to be a grocery chain to have your own coffee brand."}
          </h2>
          <p className={styles.ctaSubtext}>
            {isFr
              ? "EZPZ a été conçu pour des entreprises exactement comme la vôtre. Aucun minimum, aucune complexité, aucuns frais cachés."
              : "EZPZ was built for businesses exactly like yours. No minimums, no complexity, no hidden fees."}
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
