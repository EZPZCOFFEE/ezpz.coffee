import type { Metadata } from "next";
import Link from "next/link";

import styles from "./virginHill.module.scss";

type Props = { params: Promise<{ lang: string }> };

const OTHER_COMPARISONS = [
  { label: "EZPZ vs Rogue Wave Coffee", href: "/en/compare/rogue-wave-coffee-alternative" },
  { label: "EZPZ vs Canterbury Coffee", href: "/en/compare/canterbury-coffee-alternative" },
  { label: "EZPZ vs Black Stripe Coffee", href: "/en/compare/black-stripe-coffee-alternative" },
  { label: "EZPZ vs Hutsul Coffee", href: "/en/compare/hutsul-coffee-alternative" },
  { label: "EZPZ vs Roasters Pack", href: "/en/compare/roasters-pack-alternative" },
];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isFr = lang === "fr";
  const title = isFr
    ? "Alternative à Virgin Hill Coffee | Sacs de café sans minimum | EZPZ"
    : "Virgin Hill Coffee Alternative | No Minimum Custom Coffee Bags | EZPZ";
  const description = isFr
    ? "Vous regardez Virgin Hill Coffee pour des sacs personnalisés? EZPZ offre aucun minimum, design toujours inclus et un processus de commande entièrement en ligne pour les marques canadiennes de toute taille."
    : "Looking at Virgin Hill Coffee for custom bags? EZPZ offers no minimums, design always included, and a fully online ordering process for Canadian brands of any size.";
  return {
    title,
    description,
    alternates: {
      canonical: `/${lang}/compare/virgin-hill-coffee-alternative`,
      languages: {
        "en-CA": "https://www.ezpz.coffee/en/compare/virgin-hill-coffee-alternative",
        "fr-CA": "https://www.ezpz.coffee/fr/compare/virgin-hill-coffee-alternative",
        "x-default": "https://www.ezpz.coffee/en/compare/virgin-hill-coffee-alternative",
      },
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://www.ezpz.coffee/${lang}/compare/virgin-hill-coffee-alternative`,
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "EZPZ vs Virgin Hill Coffee" }],
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
  { feature: "Minimum order",              ezpz: "None",                   competitor: "50+ units" },
  { feature: "Custom bag design included", ezpz: "Yes, free",              competitor: "Not included" },
  { feature: "Online design tool",         ezpz: "Yes",                    competitor: "No" },
  { feature: "Turnaround time",            ezpz: "2 to 3 weeks",           competitor: "4 to 6 weeks" },
  { feature: "Transparent pricing",        ezpz: "Yes",                    competitor: "No — quote required" },
  { feature: "White label solutions",      ezpz: "Bags, RTD, capsules",    competitor: "Bags only" },
  { feature: "Distribution support",       ezpz: "Yes",                    competitor: "No" },
  { feature: "Ships across Canada",        ezpz: "Yes",                    competitor: "Yes" },
  { feature: "Specialty grade coffee",     ezpz: "Yes, 80+ SCA",           competitor: "Yes" },
];

const REASONS = [
  {
    n: "01",
    title: "The only true zero minimum in Canada",
    body: "Virgin Hill Coffee, like most Canadian roasters, requires minimum quantities. EZPZ is the only Canadian custom coffee supplier with a genuine zero minimum. This is not a marketing claim — you can literally order one bag. We designed our entire operation around making that possible.",
  },
  {
    n: "02",
    title: "Design is not an add-on",
    body: "At most roasters, design is either your responsibility or an extra service you pay for separately. At EZPZ, full bag customization — logo, colors, typography, messaging — is included in your per-unit price. There are no surprises on your invoice.",
  },
  {
    n: "03",
    title: "Built for the digital age",
    body: "Virgin Hill's custom process requires you to reach out, wait for a quote, go back and forth on design, and then commit to a large order. EZPZ has built an online tool that lets you design your bag, select your coffee, and place your order — without talking to anyone if you prefer. Fast, transparent, and completely on your schedule.",
  },
];

const REASONS_FR = [
  {
    n: "01",
    title: "Le seul vrai zéro minimum au Canada",
    body: "Virgin Hill Coffee, comme la plupart des torréfacteurs canadiens, exige des quantités minimales. EZPZ est le seul fournisseur de café personnalisé au Canada avec un véritable zéro minimum. Ce n'est pas une affirmation marketing : vous pouvez littéralement commander un sachet. Nous avons conçu toute notre opération pour rendre cela possible.",
  },
  {
    n: "02",
    title: "Le design n'est pas un supplément",
    body: "Chez la plupart des torréfacteurs, le design est soit votre responsabilité, soit un service supplémentaire que vous payez séparément. Chez EZPZ, la personnalisation complète du sachet, logo, couleurs, typographie, message, est incluse dans votre prix unitaire. Il n'y a pas de surprises sur votre facture.",
  },
  {
    n: "03",
    title: "Conçu pour l'ère numérique",
    body: "Le processus personnalisé de Virgin Hill exige que vous contactiez d'abord, attendiez un devis, échangiez sur le design, puis vous engagiez pour une grande commande. EZPZ a construit un outil en ligne qui vous permet de concevoir votre sachet, sélectionner votre café et passer votre commande, sans parler à personne si vous préférez. Rapide, transparent et entièrement selon votre calendrier.",
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
const isNegative = (val: string) =>
  val.toLowerCase() === "no" ||
  val.includes("50+") ||
  val.includes("Not included") ||
  val.includes("quote required") ||
  val.includes("4 to 6");

export default async function VirginHillPage({ params }: Props) {
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
          <span className={styles.breadcrumbCurrent}>EZPZ vs Virgin Hill Coffee</span>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.eyebrow}>EZPZ vs Virgin Hill Coffee</span>
          <h1 className={styles.heroTitle}>
            {isFr
              ? "Tout ce qu'offre Virgin Hill Coffee, sans minimum et avec design inclus."
              : "Everything Virgin Hill Coffee offers — with no minimums and design included."}
          </h1>
          <p className={styles.heroSubtitle}>
            {isFr
              ? "Virgin Hill Coffee a une option de café personnalisé. EZPZ a une plateforme de café personnalisé construite spécifiquement pour les créateurs de marques."
              : "Virgin Hill Coffee has a custom coffee option. EZPZ has a custom coffee platform built specifically for brand builders."}
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
                Virgin Hill Coffee offre des options de café personnalisées pour les entreprises canadiennes. Ils ont une page dédiée à leur programme personnalisé et servent des clients qui veulent des produits café de marque. Pour certains clients ayant des besoins de grand volume, ils peuvent être une option viable.
              </p>
              <p className={styles.introText}>
                Mais si vous êtes une petite entreprise, une marque boutique, un hôtel, un restaurant ou quiconque veut lancer ou tester un produit café de marque sans grands engagements initiaux, les exigences de commande minimale de Virgin Hill et leur processus de commande traditionnel créent des obstacles inutiles.
              </p>
              <p className={styles.introText}>
                EZPZ a été conçu pour rendre le café de marque personnalisé accessible à toute entreprise de toute taille. Aucun minimum. Design complet inclus. En ligne du début à la fin. Voici comment nous comparons.
              </p>
            </>
          ) : (
            <>
              <p className={styles.introText}>
                Virgin Hill Coffee offers custom coffee options for Canadian businesses. They have a page dedicated to their custom program and serve clients who want branded coffee products. For certain clients with large volume needs, they may be a workable option.
              </p>
              <p className={styles.introText}>
                But if you are a small business, a boutique brand, a hotel, a restaurant, or anyone who wants to launch or test a branded coffee product without large upfront commitments — Virgin Hill&apos;s minimum order requirements and traditional ordering process create unnecessary barriers.
              </p>
              <p className={styles.introText}>
                EZPZ was built to make custom branded coffee accessible to any business of any size. No minimums. Full design included. Online from start to finish. Here is how we compare.
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
                <th className={styles.th}>Virgin Hill Coffee</th>
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
              ? "Pourquoi les marques choisissent EZPZ plutôt que Virgin Hill Coffee."
              : "Why brands choose EZPZ over Virgin Hill Coffee."}
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
              ? "Lancez votre marque de café aujourd'hui. Aucun minimum. Aucune complexité."
              : "Launch your coffee brand today. No minimums. No complexity."}
          </h2>
          <p className={styles.ctaSubtext}>
            {isFr
              ? "EZPZ est l'option de café personnalisé la plus simple et la plus flexible au Canada."
              : "EZPZ is the simplest, most flexible custom coffee option in Canada. Period."}
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
