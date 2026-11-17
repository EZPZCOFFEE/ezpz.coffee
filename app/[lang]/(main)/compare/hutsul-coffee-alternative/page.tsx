import type { Metadata } from "next";
import Link from "next/link";

import styles from "./hutsul.module.scss";

type Props = { params: Promise<{ lang: string }> };

const OTHER_COMPARISONS = [
  { label: "EZPZ vs Rogue Wave Coffee", href: "/en/compare/rogue-wave-coffee-alternative" },
  { label: "EZPZ vs Canterbury Coffee", href: "/en/compare/canterbury-coffee-alternative" },
  { label: "EZPZ vs Black Stripe Coffee", href: "/en/compare/black-stripe-coffee-alternative" },
  { label: "EZPZ vs Virgin Hill Coffee", href: "/en/compare/virgin-hill-coffee-alternative" },
  { label: "EZPZ vs Roasters Pack", href: "/en/compare/roasters-pack-alternative" },
];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isFr = lang === "fr";
  const title = isFr
    ? "Alternative à Hutsul Coffee | Café de marque personnalisé Canada | EZPZ"
    : "Hutsul Coffee Alternative | Custom Branded Coffee Canada | EZPZ";
  const description = isFr
    ? "Vous considérez Hutsul Coffee pour des sacs de marque personnalisés? Voyez comment EZPZ se compare avec zéro minimum, support design complet et café de spécialité torréfié à Montréal."
    : "Considering Hutsul Coffee for custom branded bags? See how EZPZ compares with zero minimums, full design support, and specialty coffee roasted in Montreal.";
  return {
    title,
    description,
    alternates: {
      canonical: `/${lang}/compare/hutsul-coffee-alternative`,
      languages: {
        "en-CA": "https://www.ezpz.coffee/en/compare/hutsul-coffee-alternative",
        "fr-CA": "https://www.ezpz.coffee/fr/compare/hutsul-coffee-alternative",
        "x-default": "https://www.ezpz.coffee/en/compare/hutsul-coffee-alternative",
      },
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://www.ezpz.coffee/${lang}/compare/hutsul-coffee-alternative`,
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "EZPZ vs Hutsul Coffee" }],
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
  { feature: "Minimum order",              ezpz: "None",                   competitor: "Unclear — requires inquiry" },
  { feature: "Custom bag design included", ezpz: "Yes, free",              competitor: "Not included" },
  { feature: "Online design tool",         ezpz: "Yes",                    competitor: "No" },
  { feature: "Turnaround time",            ezpz: "2 to 3 weeks",           competitor: "Unclear" },
  { feature: "Transparent pricing",        ezpz: "Yes",                    competitor: "No — quote required" },
  { feature: "White label solutions",      ezpz: "Bags, RTD, capsules",    competitor: "Bags only" },
  { feature: "Distribution support",       ezpz: "Yes",                    competitor: "No" },
  { feature: "Ships across Canada",        ezpz: "Yes",                    competitor: "Yes" },
  { feature: "Specialty grade coffee",     ezpz: "Yes, 80+ SCA",           competitor: "Yes" },
];

const REASONS = [
  {
    n: "01",
    title: "Clarity from the start",
    body: "Hutsul's custom coffee program requires you to reach out before you can understand pricing, minimums, or timelines. EZPZ is fully transparent. Our pricing, process, and turnaround times are published on our website. You know exactly what you are getting before you place a single order.",
  },
  {
    n: "02",
    title: "No commitment to start",
    body: "Most roasters require you to commit to minimum quantities before you can even test your concept. EZPZ lets you order one bag. This means you can design your branded bag, see how it looks, taste the coffee, share it with your team — before deciding to scale. The risk of starting is essentially zero.",
  },
  {
    n: "03",
    title: "A platform, not just a product",
    body: "EZPZ is not just a roaster that offers custom labels. We are a full brand-building platform — online design tool, origin selection, quality control, and distribution support all in one place. We built the infrastructure that most roasters simply do not have.",
  },
];

const REASONS_FR = [
  {
    n: "01",
    title: "La clarté dès le début",
    body: "Le programme de café personnalisé de Hutsul vous oblige à vous renseigner avant de pouvoir comprendre les prix, les minimums ou les délais. EZPZ est entièrement transparent. Nos prix, notre processus et nos délais sont publiés sur notre site. Vous savez exactement ce que vous obtenez avant de passer une seule commande.",
  },
  {
    n: "02",
    title: "Aucun engagement pour commencer",
    body: "La plupart des torréfacteurs vous obligent à vous engager sur des quantités minimales avant même de pouvoir tester votre concept. EZPZ vous permet de commander un sachet. Cela signifie que vous pouvez concevoir votre sachet de marque, voir à quoi il ressemble, goûter le café, le partager avec votre équipe, avant de décider de passer à grande échelle. Le risque de commencer est essentiellement nul.",
  },
  {
    n: "03",
    title: "Une plateforme, pas seulement un produit",
    body: "EZPZ n'est pas seulement un torréfacteur qui offre des étiquettes personnalisées. Nous sommes une plateforme complète de développement de marque : outil de conception en ligne, sélection d'origine, contrôle de qualité et support de distribution, tout en un seul endroit. Nous avons construit l'infrastructure que la plupart des torréfacteurs n'ont tout simplement pas.",
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
  val.includes("requires inquiry") ||
  val.includes("Not included") ||
  val.includes("quote required") ||
  val === "Unclear";

export default async function HutsulPage({ params }: Props) {
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
          <span className={styles.breadcrumbCurrent}>EZPZ vs Hutsul Coffee</span>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.eyebrow}>EZPZ vs Hutsul Coffee</span>
          <h1 className={styles.heroTitle}>
            {isFr
              ? "Café personnalisé pour les marques canadiennes, sans les minimums."
              : "Custom coffee for Canadian brands — without the minimums."}
          </h1>
          <p className={styles.heroSubtitle}>
            {isFr
              ? "Hutsul Coffee est un torréfacteur canadien avec un programme personnalisé. EZPZ est une plateforme de café personnalisé sans minimum, avec design inclus et un processus en ligne conçu pour les marques."
              : "Hutsul Coffee is a Canadian roaster with a custom program. EZPZ is a custom coffee platform with no minimums, design included, and an online process built for brands."}
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
                Hutsul Coffee est un torréfacteur canadien qui offre des options de café personnalisées pour les entreprises. Ils servent des clients partout au Canada et ont bâti une réputation dans leur communauté pour la qualité de leur torréfaction.
              </p>
              <p className={styles.introText}>
                Comme la plupart des torréfacteurs canadiens, cependant, leur programme de café personnalisé vient avec des exigences de commande minimale et un processus de commande traditionnel qui implique des devis, des échanges de courriels et des délais plus longs. Pour les entreprises qui veulent avancer rapidement, tester un concept sans grand investissement initial ou simplement vouloir une expérience de développement de marque plus fluide, ce sont de vraies barrières.
              </p>
              <p className={styles.introText}>
                EZPZ a été conçu pour éliminer chacune de ces barrières. Voici comment nous comparons.
              </p>
            </>
          ) : (
            <>
              <p className={styles.introText}>
                Hutsul Coffee is a Canadian roaster that offers custom coffee options for businesses. They serve clients across Canada and have built a reputation in their community for quality roasting.
              </p>
              <p className={styles.introText}>
                Like most Canadian roasters, however, their custom coffee program comes with minimum order requirements and a traditional ordering process that involves quotes, back-and-forth emails, and longer lead times. For businesses that want to move quickly, test a concept without large upfront investment, or simply want a more streamlined brand-building experience — these are real barriers.
              </p>
              <p className={styles.introText}>
                EZPZ was built to eliminate every one of those barriers. Here is how we compare.
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
                <th className={styles.th}>Hutsul Coffee</th>
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
              ? "Pourquoi les marques choisissent EZPZ plutôt que Hutsul Coffee."
              : "Why brands choose EZPZ over Hutsul Coffee."}
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
              ? "Aucun minimum. Transparence totale. Votre marque sur du café de spécialité."
              : "No minimums. Full transparency. Your brand on specialty coffee."}
          </h2>
          <p className={styles.ctaSubtext}>
            {isFr
              ? "Rejoignez plus de 500 marques canadiennes qui ont choisi EZPZ. Commencez à concevoir en moins de 10 minutes."
              : "Join 500+ Canadian brands who chose EZPZ. Start designing in under 10 minutes."}
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
