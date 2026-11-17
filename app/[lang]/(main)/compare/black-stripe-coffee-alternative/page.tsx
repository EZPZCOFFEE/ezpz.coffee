import type { Metadata } from "next";
import Link from "next/link";

import styles from "./blackStripe.module.scss";

type Props = { params: Promise<{ lang: string }> };

const OTHER_COMPARISONS = [
  { label: "EZPZ vs Rogue Wave Coffee", href: "/en/compare/rogue-wave-coffee-alternative" },
  { label: "EZPZ vs Canterbury Coffee", href: "/en/compare/canterbury-coffee-alternative" },
  { label: "EZPZ vs Virgin Hill Coffee", href: "/en/compare/virgin-hill-coffee-alternative" },
  { label: "EZPZ vs Hutsul Coffee", href: "/en/compare/hutsul-coffee-alternative" },
  { label: "EZPZ vs Roasters Pack", href: "/en/compare/roasters-pack-alternative" },
];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isFr = lang === "fr";
  const title = isFr
    ? "Alternative à Black Stripe Coffee | Café de marque sans minimum | EZPZ"
    : "Black Stripe Coffee Alternative | Custom Branded Coffee No Minimum | EZPZ";
  const description = isFr
    ? "Vous comparez Black Stripe Coffee pour des sacs de marque? EZPZ offre plus de flexibilité, aucun minimum, support design complet et café de spécialité pour les marques canadiennes de toute taille."
    : "Comparing Black Stripe Coffee for custom branded bags? EZPZ offers more flexibility, no minimums, full design support, and specialty coffee for Canadian brands of any size.";
  return {
    title,
    description,
    alternates: {
      canonical: `/${lang}/compare/black-stripe-coffee-alternative`,
      languages: {
        "en-CA": "https://www.ezpz.coffee/en/compare/black-stripe-coffee-alternative",
        "fr-CA": "https://www.ezpz.coffee/fr/compare/black-stripe-coffee-alternative",
        "x-default": "https://www.ezpz.coffee/en/compare/black-stripe-coffee-alternative",
      },
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://www.ezpz.coffee/${lang}/compare/black-stripe-coffee-alternative`,
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "EZPZ vs Black Stripe Coffee" }],
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
    title: "Zero minimums means zero risk",
    body: "Black Stripe Coffee requires minimum orders before you can access their custom program. That means you need to commit hundreds or thousands of dollars before you know if your branded coffee product will sell. EZPZ lets you start with one bag. Test your market. Prove the concept. Then scale.",
  },
  {
    n: "02",
    title: "Design should not cost extra",
    body: "Most roasters treat packaging design as a separate service that adds cost and complexity to your order. At EZPZ, full custom bag design is included in every order. Your logo, your colors, your messaging — handled by our team at no additional charge. What you see in our per-unit pricing is what you pay.",
  },
  {
    n: "03",
    title: "An online process that respects your time",
    body: "Getting a custom order through Black Stripe means emails, quote requests, and back-and-forth before you can even see what your bag will look like. EZPZ has an online design tool that lets you build your bag visually, pick your coffee origin, and place your order — all without waiting for a reply from a sales team.",
  },
];

const REASONS_FR = [
  {
    n: "01",
    title: "Zéro minimum signifie zéro risque",
    body: "Black Stripe Coffee exige des commandes minimales avant que vous puissiez accéder à leur programme personnalisé. Cela signifie que vous devez engager des centaines ou des milliers de dollars avant de savoir si votre café de marque se vendra. EZPZ vous permet de commencer avec un sachet. Testez votre marché. Prouvez le concept. Puis développez.",
  },
  {
    n: "02",
    title: "Le design ne devrait pas coûter plus cher",
    body: "La plupart des torréfacteurs traitent le design d'emballage comme un service séparé qui ajoute des coûts et de la complexité à votre commande. Chez EZPZ, le design complet du sachet est inclus dans chaque commande. Votre logo, vos couleurs, votre message, pris en charge par notre équipe sans frais supplémentaires. Ce que vous voyez dans notre tarification par unité est ce que vous payez.",
  },
  {
    n: "03",
    title: "Un processus en ligne qui respecte votre temps",
    body: "Passer une commande personnalisée chez Black Stripe implique des courriels, des demandes de devis et des échanges avant même de voir à quoi ressemblera votre sachet. EZPZ a un outil de conception en ligne qui vous permet de construire votre sachet visuellement, choisir votre origine de café et passer votre commande, le tout sans attendre une réponse d'une équipe de vente.",
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

export default async function BlackStripePage({ params }: Props) {
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
          <span className={styles.breadcrumbCurrent}>EZPZ vs Black Stripe Coffee</span>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.eyebrow}>EZPZ vs Black Stripe Coffee</span>
          <h1 className={styles.heroTitle}>
            {isFr
              ? "Sacs de café personnalisés avec plus de flexibilité que Black Stripe Coffee."
              : "Custom coffee bags with more flexibility than Black Stripe Coffee."}
          </h1>
          <p className={styles.heroSubtitle}>
            {isFr
              ? "Black Stripe Coffee offre des options personnalisées pour les entreprises canadiennes. EZPZ offre la même qualité sans minimum, avec design inclus et un processus entièrement en ligne."
              : "Black Stripe Coffee offers custom options for Canadian businesses. EZPZ offers the same quality with no minimums, included design, and a fully online process."}
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
                Black Stripe Coffee est un torréfacteur canadien qui offre des options de café personnalisées pour les entreprises. Ils torréfient des grains de qualité et ont bâti une solide réputation dans leur marché. Si vous avez recherché du café personnalisé au Canada, vous avez peut-être croisé leur nom.
              </p>
              <p className={styles.introText}>
                Cependant, comme la plupart des torréfacteurs canadiens qui offrent des options personnalisées, Black Stripe exige des quantités minimales de commande qui peuvent être prohibitives pour les petites entreprises, les nouvelles marques ou les marques qui veulent tester un concept avant de s&apos;engager. Leur processus personnalisé nécessite également des échanges de communication et ne dispose pas d&apos;un outil de conception en ligne en libre-service.
              </p>
              <p className={styles.introText}>
                EZPZ a été conçu pour éliminer chacune de ces barrières. Même qualité de café de spécialité, même torréfaction canadienne, avec zéro minimum, design complet inclus et un processus en ligne qui prend moins de 30 minutes du début à la confirmation de commande.
              </p>
            </>
          ) : (
            <>
              <p className={styles.introText}>
                Black Stripe Coffee is a Canadian roaster that offers custom coffee options for businesses. They roast quality beans and have built a solid reputation in their market. If you have researched custom coffee in Canada, you may have come across them.
              </p>
              <p className={styles.introText}>
                However, like most Canadian roasters who offer custom options, Black Stripe requires minimum order quantities that can be prohibitive for small businesses, startups, or brands that want to test a concept before committing. Their custom process also requires back-and-forth communication and does not have a self-serve online design tool.
              </p>
              <p className={styles.introText}>
                EZPZ was built to remove every one of those barriers. Same quality specialty coffee, same Canadian roasting, with zero minimums, full design included, and an online process that takes less than 30 minutes from start to order confirmation.
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
                <th className={styles.th}>Black Stripe Coffee</th>
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
              ? "Trois raisons pour lesquelles les marques choisissent EZPZ plutôt que Black Stripe Coffee."
              : "Three reasons brands choose EZPZ over Black Stripe Coffee."}
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
              ? "Même qualité de café de spécialité. Zéro minimum. Design complet inclus."
              : "Same quality specialty coffee. Zero minimums. Full design included."}
          </h2>
          <p className={styles.ctaSubtext}>
            {isFr
              ? "Découvrez pourquoi les marques canadiennes choisissent EZPZ. Concevez votre sachet en ligne maintenant."
              : "See why Canadian brands choose EZPZ. Design your bag online right now."}
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
