import type { Metadata } from "next";
import Link from "next/link";

import styles from "./roastersPack.module.scss";

type Props = { params: Promise<{ lang: string }> };

const OTHER_COMPARISONS = [
  { label: "EZPZ vs Rogue Wave Coffee", href: "/en/compare/rogue-wave-coffee-alternative" },
  { label: "EZPZ vs Canterbury Coffee", href: "/en/compare/canterbury-coffee-alternative" },
  { label: "EZPZ vs Black Stripe Coffee", href: "/en/compare/black-stripe-coffee-alternative" },
  { label: "EZPZ vs Virgin Hill Coffee", href: "/en/compare/virgin-hill-coffee-alternative" },
  { label: "EZPZ vs Hutsul Coffee", href: "/en/compare/hutsul-coffee-alternative" },
];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isFr = lang === "fr";
  const title = isFr
    ? "Alternative à The Roasters Pack pour les entreprises | Café en marque blanche Canada | EZPZ"
    : "Roasters Pack Alternative for Business | White Label Coffee Canada | EZPZ";
  const description = isFr
    ? "The Roasters Pack est idéal pour les amateurs de café. EZPZ est conçu pour les marques de café. Sacs de marque personnalisés, aucun minimum, solutions en marque blanche complètes partout au Canada."
    : "The Roasters Pack is great for coffee lovers. EZPZ is built for coffee brands. Custom branded bags, no minimums, full white label solutions across Canada.";
  return {
    title,
    description,
    alternates: {
      canonical: `/${lang}/compare/roasters-pack-alternative`,
      languages: {
        "en-CA": "https://www.ezpz.coffee/en/compare/roasters-pack-alternative",
        "fr-CA": "https://www.ezpz.coffee/fr/compare/roasters-pack-alternative",
        "x-default": "https://www.ezpz.coffee/en/compare/roasters-pack-alternative",
      },
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://www.ezpz.coffee/${lang}/compare/roasters-pack-alternative`,
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "EZPZ vs The Roasters Pack" }],
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
  { feature: "Custom branded bags",        ezpz: "Yes",                    competitor: "No" },
  { feature: "White label solutions",      ezpz: "Yes, bags, RTD, capsules", competitor: "No" },
  { feature: "Minimum order",              ezpz: "None",                   competitor: "Not applicable" },
  { feature: "Design included",            ezpz: "Yes, free",              competitor: "Not applicable" },
  { feature: "B2B and business clients",   ezpz: "Yes, core focus",        competitor: "No — consumer only" },
  { feature: "Online design tool",         ezpz: "Yes",                    competitor: "No" },
  { feature: "Distribution support",       ezpz: "Yes",                    competitor: "No" },
  { feature: "Ships across Canada",        ezpz: "Yes",                    competitor: "Yes, consumer only" },
  { feature: "Specialty grade coffee",     ezpz: "Yes, 80+ SCA",           competitor: "Yes" },
];

const REASONS = [
  {
    n: "01",
    title: "They are not in the custom coffee business",
    body: "The Roasters Pack does not offer custom branded coffee bags, private label programs, or white label solutions. This is not a criticism — it is simply not what they do. If you are a business looking to sell coffee under your own brand, you are looking at the wrong company. EZPZ is the right one.",
  },
  {
    n: "02",
    title: "EZPZ is built for your business goals",
    body: "The Roasters Pack is built to delight individual coffee subscribers. EZPZ is built to help businesses generate revenue from branded coffee. Those are fundamentally different goals, and the products reflect that. EZPZ offers an online design tool, transparent B2B pricing, white label production, and distribution support — all aimed at helping your business grow.",
  },
  {
    n: "03",
    title: "Start selling in under 3 weeks",
    body: "From the moment you start designing your bag on EZPZ to the moment your branded coffee arrives ready to sell is typically 2 to 3 weeks. The Roasters Pack operates on a consumer subscription timeline with no B2B equivalent. If you want a branded coffee product that generates real revenue for your business, EZPZ is the path.",
  },
];

const REASONS_FR = [
  {
    n: "01",
    title: "Ils ne sont pas dans le commerce du café personnalisé",
    body: "The Roasters Pack n'offre pas de sacs de café de marque personnalisés, de programmes de marque privée ou de solutions en marque blanche. Ce n'est pas une critique, ce n'est tout simplement pas ce qu'ils font. Si vous êtes une entreprise qui cherche à vendre du café sous votre propre marque, vous regardez la mauvaise compagnie. EZPZ est la bonne.",
  },
  {
    n: "02",
    title: "EZPZ est conçu pour vos objectifs d'affaires",
    body: "The Roasters Pack est conçu pour enchanter les abonnés individuels au café. EZPZ est conçu pour aider les entreprises à générer des revenus grâce au café de marque. Ce sont des objectifs fondamentalement différents, et les produits le reflètent. EZPZ offre un outil de conception en ligne, une tarification B2B transparente, une production en marque blanche et un support de distribution, tous destinés à aider votre entreprise à croître.",
  },
  {
    n: "03",
    title: "Commencez à vendre en moins de 3 semaines",
    body: "Du moment où vous commencez à concevoir votre sachet sur EZPZ jusqu'au moment où votre café de marque arrive prêt à vendre, c'est typiquement 2 à 3 semaines. The Roasters Pack fonctionne sur un calendrier d'abonnement consommateur sans équivalent B2B. Si vous voulez un produit café de marque qui génère de vrais revenus pour votre entreprise, EZPZ est la voie.",
  },
];

const WHO_CARDS = [
  {
    icon: "🍽️",
    title: "Restaurants and Cafés",
    titleFr: "Restaurants et cafés",
    body: "Serve your own signature blend and sell branded bags at the counter. Turn every table into a touchpoint for your brand.",
    bodyFr: "Servez votre propre mélange signature et vendez des sacs de marque au comptoir. Transformez chaque table en point de contact pour votre marque.",
  },
  {
    icon: "🏨",
    title: "Hotels and Hospitality",
    titleFr: "Hôtels et hospitalité",
    body: "Elevate the in-room and lobby experience with custom branded coffee that guests associate with your property.",
    bodyFr: "Élevez l'expérience en chambre et dans le lobby avec un café personnalisé que les clients associent à votre propriété.",
  },
  {
    icon: "🛍️",
    title: "Retailers and Boutiques",
    titleFr: "Détaillants et boutiques",
    body: "Add a high-margin, repeat-purchase product to your shelves without the complexity of traditional wholesale sourcing.",
    bodyFr: "Ajoutez un produit à marge élevée et à achat récurrent à vos rayons sans la complexité de l'approvisionnement en gros traditionnel.",
  },
  {
    icon: "💪",
    title: "Gyms and Wellness Brands",
    titleFr: "Gymnases et marques bien-être",
    body: "Build a daily habit product around your brand. Custom coffee drives repeat purchases and keeps your name in front of customers every morning.",
    bodyFr: "Créez un produit d'habitude quotidienne autour de votre marque. Le café personnalisé génère des achats répétés et garde votre nom devant les clients chaque matin.",
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

const isPositive = (val: string) =>
  val.toLowerCase().startsWith("yes") || val === "None" || val.includes("core focus");
const isNegative = (val: string) =>
  val.toLowerCase() === "no" ||
  val.includes("consumer only") ||
  val.includes("Not applicable");

export default async function RoastersPackPage({ params }: Props) {
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
          <span className={styles.breadcrumbCurrent}>EZPZ vs The Roasters Pack</span>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.eyebrow}>EZPZ vs The Roasters Pack</span>
          <h1 className={styles.heroTitle}>
            {isFr
              ? "The Roasters Pack est pour les amateurs de café. EZPZ est pour les marques de café."
              : "The Roasters Pack is for coffee lovers. EZPZ is for coffee brands."}
          </h1>
          <p className={styles.heroSubtitle}>
            {isFr
              ? "Deux produits complètement différents. Si vous voulez découvrir du bon café canadien, The Roasters Pack est excellent. Si vous voulez vendre du café sous votre propre marque, c'est EZPZ."
              : "Two completely different products. If you want to discover great Canadian coffee, The Roasters Pack is excellent. If you want to sell coffee under your own brand — that is EZPZ."}
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
                The Roasters Pack est l&apos;un des services d&apos;abonnement café les plus populaires au Canada. Basé à Toronto, il curate des boîtes mensuelles de café de spécialité provenant de torréfacteurs canadiens et les livre aux abonnés partout au Canada. Pour les amateurs de café qui veulent découvrir de nouveaux torréfacteurs, ils sont vraiment excellents dans ce qu&apos;ils font.
              </p>
              <p className={styles.introText}>
                Mais The Roasters Pack est un service d&apos;abonnement consommateur. Ils n&apos;offrent pas de sacs de marque personnalisés, de solutions en marque blanche, de programmes de marque privée ou tout type de service café interentreprises. Si vous avez un restaurant, un hôtel, une boutique, un gym ou une marque et que vous voulez vendre du café sous votre propre nom, The Roasters Pack ne peut tout simplement pas vous aider.
              </p>
              <p className={styles.introText}>
                EZPZ peut. Voici comment nous comparons.
              </p>
            </>
          ) : (
            <>
              <p className={styles.introText}>
                The Roasters Pack is one of Canada&apos;s most popular coffee subscription services. Based in Toronto, they curate monthly boxes of specialty coffee from Canadian roasters and deliver them to subscribers across Canada. For coffee enthusiasts who want to discover new roasters, they are genuinely excellent at what they do.
              </p>
              <p className={styles.introText}>
                But The Roasters Pack is a consumer subscription service. They do not offer custom branded bags, white label solutions, private label programs, or any kind of business-to-business coffee service. If you have a restaurant, hotel, boutique, gym, or brand and you want to sell coffee under your own name — The Roasters Pack simply cannot help you.
              </p>
              <p className={styles.introText}>
                EZPZ can. Here is how we compare.
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
                <th className={styles.th}>The Roasters Pack</th>
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

      {/* ── Two products ── */}
      <section className={styles.reasons}>
        <div className={styles.reasonsInner}>
          <span className={styles.eyebrow}>{isFr ? "Deux produits. Deux objectifs." : "Two products. Two purposes."}</span>
          <h2 className={styles.reasonsTitle}>{isFr ? "Deux produits. Deux objectifs très différents." : "Two products. Two very different purposes."}</h2>
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

      {/* ── Who is EZPZ for ── */}
      <section className={styles.who}>
        <div className={styles.whoInner}>
          <span className={styles.eyebrow}>{isFr ? "Qui nous servons" : "Who we serve"}</span>
          <h2 className={styles.whoTitle}>{isFr ? "EZPZ est conçu pour des entreprises comme la vôtre." : "EZPZ is built for businesses like yours."}</h2>
          <div className={styles.whoGrid}>
            {WHO_CARDS.map((card) => (
              <div key={card.title} className={styles.whoCard}>
                <span className={styles.whoIcon} aria-hidden>{card.icon}</span>
                <h3 className={styles.whoCardTitle}>{isFr ? card.titleFr : card.title}</h3>
                <p className={styles.whoCardBody}>{isFr ? card.bodyFr : card.body}</p>
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
              ? "Prêt à vendre du café sous votre propre marque?"
              : "Ready to sell coffee under your own brand?"}
          </h2>
          <p className={styles.ctaSubtext}>
            {isFr
              ? "EZPZ est la seule plateforme de café personnalisé au Canada sans minimum, avec design inclus et un processus entièrement en ligne."
              : "EZPZ is Canada’s only custom coffee platform with no minimums, full design included, and a completely online process."}
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
