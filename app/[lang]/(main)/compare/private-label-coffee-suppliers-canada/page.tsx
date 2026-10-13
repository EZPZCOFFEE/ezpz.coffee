import type { Metadata } from "next";
import Link from "next/link";

import styles from "./privateLabelSuppliers.module.scss";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isFr = lang === "fr";
  const title = isFr
    ? "Fournisseurs de café en marque privée au Canada comparés | Canterbury, Barista, KW vs EZPZ"
    : "Private Label Coffee Suppliers Canada Compared | Canterbury, Barista, KW vs EZPZ";
  const description = isFr
    ? "Vous comparez les fournisseurs de café en marque privée au Canada? Voyez comment EZPZ se compare à Canterbury Coffee, Cafe Barista et KW Coffee Collective. Le seul avec zéro minimum, design gratuit et le café inclus."
    : "Comparing private label coffee suppliers in Canada? See how EZPZ compares to Canterbury Coffee, Cafe Barista, and KW Coffee Collective. The only one with zero minimum, free design, and the coffee included.";
  return {
    title,
    description,
    alternates: {
      canonical: `/${lang}/compare/private-label-coffee-suppliers-canada`,
      languages: {
        en: "https://www.ezpz.coffee/en/compare/private-label-coffee-suppliers-canada",
        "fr-CA": "https://www.ezpz.coffee/fr/compare/private-label-coffee-suppliers-canada",
      },
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://www.ezpz.coffee/${lang}/compare/private-label-coffee-suppliers-canada`,
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: isFr ? "Fournisseurs de café en marque privée au Canada comparés | EZPZ" : "Private Label Coffee Suppliers Canada Compared | EZPZ" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/assets/banner-01.jpg"],
    },
  };
}

const ROWS: { feature: string; ezpz: string; canterbury: string; barista: string; kw: string }[] = [
  {
    feature: "Coffee included in the service",
    ezpz: "Yes, specialty grade",
    canterbury: "Yes",
    barista: "Yes",
    kw: "Yes",
  },
  {
    feature: "Custom design included free",
    ezpz: "Yes, always",
    canterbury: "No",
    barista: "No",
    kw: "No — you supply packaging",
  },
  {
    feature: "Minimum order",
    ezpz: "Zero",
    canterbury: "Built for volume",
    barista: "Built for distributors",
    kw: "Standard minimums",
  },
  {
    feature: "Best suited for",
    ezpz: "Any brand, any size",
    canterbury: "Large grocery & foodservice",
    barista: "Distributors",
    kw: "Those wanting to learn roasting",
  },
  {
    feature: "You supply your own bags/labels",
    ezpz: "No — we handle it",
    canterbury: "Varies",
    barista: "Varies",
    kw: "Yes, you provide them",
  },
  {
    feature: "Online design tool",
    ezpz: "Yes",
    canterbury: "No",
    barista: "No",
    kw: "No",
  },
  {
    feature: "Ready-to-drink & instant options",
    ezpz: "Yes",
    canterbury: "Limited",
    barista: "Limited",
    kw: "No",
  },
  {
    feature: "Freeze-dried instant coffee",
    ezpz: "Yes",
    canterbury: "No",
    barista: "No",
    kw: "No",
  },
  {
    feature: "Dropshipping / DTC fulfillment",
    ezpz: "Yes",
    canterbury: "No",
    barista: "No",
    kw: "No",
  },
  {
    feature: "Roasted in",
    ezpz: "Montreal, QC",
    canterbury: "BC & national",
    barista: "Montreal, QC",
    kw: "Kitchener, ON",
  },
  {
    feature: "Turnaround for small test batch",
    ezpz: "~1 week (EZPZ bags)",
    canterbury: "Built for scale",
    barista: "Built for volume",
    kw: "Varies",
  },
];

const WHY_CARDS = [
  {
    title: "Zero Minimum",
    titleFr: "Zéro minimum",
    body: "Start with one bag. No need to commit to thousands of units just to test your idea. No other major Canadian private label supplier offers this.",
    bodyFr: "Commencez avec un sachet. Pas besoin de vous engager sur des milliers d'unités pour tester votre idée. Aucun autre grand fournisseur de marque privée au Canada n'offre cela.",
  },
  {
    title: "Design Included",
    titleFr: "Design inclus",
    body: "You do not supply your own bags or labels. Full custom design is always included. Bring your logo, we handle the rest.",
    bodyFr: "Vous ne fournissez pas vos propres sacs ou étiquettes. Le design personnalisé complet est toujours inclus. Apportez votre logo, nous nous occupons du reste.",
  },
  {
    title: "The Whole Product",
    titleFr: "Le produit complet",
    body: "Coffee, roasting, packaging, and fulfillment in one finished product, ready to sell. Not just roasting a coffee you have to package yourself.",
    bodyFr: "Café, torréfaction, emballage et expédition dans un produit fini prêt à vendre. Pas seulement la torréfaction d'un café que vous devez emballer vous-même.",
  },
  {
    title: "Built for Any Size",
    titleFr: "Conçu pour toute taille",
    body: "From a single test batch to national volumes, we scale with you, without ever forcing a minimum.",
    bodyFr: "D'un seul lot test aux volumes nationaux, nous grandissons avec vous, sans jamais imposer un minimum.",
  },
];

const FAQS = [
  {
    q: "Who is the best private label coffee supplier in Canada?",
    qFr: "Quel est le meilleur fournisseur de café en marque privée au Canada?",
    a: "It depends on your needs. Canterbury Coffee suits large grocery and foodservice brands, Cafe Barista focuses on distributors, and KW Coffee Collective is ideal for those wanting to learn roasting. EZPZ Coffee is the best fit for brands of any size that want a turnkey product with zero minimum order and custom design included.",
    aFr: "Cela dépend de vos besoins. Canterbury Coffee convient aux grandes marques d'épicerie et de restauration, Cafe Barista se concentre sur les distributeurs et KW Coffee Collective est idéal pour ceux qui veulent apprendre la torréfaction. EZPZ Coffee est le meilleur choix pour les marques de toute taille qui veulent un produit clé en main avec zéro minimum de commande et design personnalisé inclus.",
  },
  {
    q: "Which private label coffee supplier has no minimum order?",
    qFr: "Quel fournisseur de café en marque privée n'a pas de minimum de commande?",
    a: "EZPZ Coffee is the only major Canadian private label supplier offering a genuine zero minimum order, letting you start with a single bag. Most others are built for distributors or large-volume brands.",
    aFr: "EZPZ Coffee est le seul grand fournisseur de marque privée au Canada à offrir un véritable zéro minimum de commande, vous permettant de commencer avec un seul sachet. La plupart des autres sont conçus pour les distributeurs ou les marques à grand volume.",
  },
  {
    q: "Do private label coffee suppliers include the packaging design?",
    qFr: "Les fournisseurs de café en marque privée incluent-ils le design d'emballage?",
    a: "Most do not. Canterbury, Cafe Barista, and KW Coffee Collective generally require you to supply your own labels or packaging. EZPZ includes full custom design at no extra cost.",
    aFr: "La plupart ne l'incluent pas. Canterbury, Cafe Barista et KW Coffee Collective vous demandent généralement de fournir vos propres étiquettes ou emballages. EZPZ inclut le design personnalisé complet sans frais supplémentaires.",
  },
  {
    q: "Can I get private label coffee without roasting it myself?",
    qFr: "Puis-je obtenir du café en marque privée sans le torréfier moi-même?",
    a: "Yes. EZPZ handles the sourcing, roasting, packaging, and fulfillment, delivering a finished product ready to sell. Some programs, like KW Coffee Collective, are designed as a stepping stone to roasting yourself.",
    aFr: "Oui. EZPZ gère l'approvisionnement, la torréfaction, l'emballage et l'expédition, livrant un produit fini prêt à vendre. Certains programmes, comme KW Coffee Collective, sont conçus comme tremplin vers la torréfaction autonome.",
  },
  {
    q: "Where is EZPZ coffee roasted?",
    qFr: "Où est torréfié le café EZPZ?",
    a: "EZPZ coffee is roasted fresh in Montreal at Canadian Roasting Society, and ships across Canada and the USA.",
    aFr: "Le café EZPZ est torréfié frais à Montréal à la Canadian Roasting Society, et est livré partout au Canada et aux États-Unis.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.ezpz.coffee/en" },
        { "@type": "ListItem", position: 2, name: "Compare", item: "https://www.ezpz.coffee/en/compare" },
        { "@type": "ListItem", position: 3, name: "Private Label Coffee Suppliers Canada", item: "https://www.ezpz.coffee/en/compare/private-label-coffee-suppliers-canada" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

const isEzpzPositive = (_val: string) => true;

const isCompetitorPositive = (val: string) => val.toLowerCase().startsWith("yes") || val.toLowerCase().startsWith("montreal");
const isCompetitorNegative = (val: string) =>
  val.toLowerCase() === "no" ||
  val.toLowerCase().includes("built for volume") ||
  val.toLowerCase().includes("built for distributors") ||
  val.toLowerCase().includes("built for scale") ||
  val.toLowerCase().includes("no —") ||
  val.toLowerCase() === "standard minimums";

const competitorMark = (val: string) => {
  if (isCompetitorNegative(val)) return <span className={styles.cross}>✗</span>;
  if (isCompetitorPositive(val)) return <span className={styles.checkGray}>✓</span>;
  return <span className={styles.neutral}>—</span>;
};

export default async function PrivateLabelSuppliersPage({ params }: Props) {
  const { lang } = await params;
  const isFr = lang === "fr";

  return (
    <div className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Breadcrumb ── */}
      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <div className={styles.breadcrumbInner}>
          <Link href={`/${lang}`} className={styles.breadcrumbLink}>{isFr ? "Accueil" : "Home"}</Link>
          <span className={styles.breadcrumbSep}>›</span>
          <Link href={`/${lang}/compare`} className={styles.breadcrumbLink}>{isFr ? "Comparer" : "Compare"}</Link>
          <span className={styles.breadcrumbSep}>›</span>
          <span className={styles.breadcrumbCurrent}>{isFr ? "Fournisseurs de café en marque privée Canada" : "Private Label Coffee Suppliers Canada"}</span>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.eyebrow}>{isFr ? "Fournisseurs de café en marque privée comparés" : "Private Label Coffee Suppliers Compared"}</span>
          <h1 className={styles.heroTitle}>
            {isFr
              ? "Choisir un fournisseur de café en marque privée au Canada?"
              : "Choosing a Private Label Coffee Supplier in Canada?"}
          </h1>
          <p className={styles.heroSubtitle}>
            {isFr
              ? "La plupart des programmes de marque privée au Canada sont conçus pour les grands distributeurs, vous font fournir votre propre emballage et exigent de grands minimums. Voici une comparaison honnête de Canterbury Coffee, Cafe Barista, KW Coffee Collective et EZPZ."
              : "Most Canadian private label programs are built for large distributors, make you supply your own packaging, and require big minimums. Here is an honest comparison of Canterbury Coffee, Cafe Barista, KW Coffee Collective, and EZPZ, so you can choose the right partner."}
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
          <span className={styles.eyebrow}>{isFr ? "01_ La comparaison honnête" : "01_ The Honest Comparison"}</span>
          <h2 className={styles.introHeadline}>
            {isFr
              ? "Tous les programmes de marque privée ne sont pas conçus pour vous."
              : "Not all private label programs are built for you."}
          </h2>
          {isFr ? (
            <>
              <p className={styles.introText}>
                Le Canada compte plusieurs fournisseurs de café en marque privée, et ils ne sont pas tous pareils. Certains sont de grandes opérations conçues pour les marques nationales d'épicerie et les distributeurs. Certains vous font sourcer et fournir vos propres sacs, étiquettes et emballages. Certains sont conçus pour éventuellement vous pousser à exploiter votre propre torréfacteur.
              </p>
              <p className={styles.introText}>
                Très peu sont conçus pour le restaurant, la boutique, le gym, l'hôtel, la marque DTC ou l'entrepreneur qui veut simplement vendre du{" "}
                <Link href={`/${lang}/coffee`} className={styles.inlineLink}>café de grade spécialité</Link> sous son propre nom sans la complexité, les grands minimums ou les coûts initiaux élevés.
              </p>
              <p className={styles.introText}>
                Cette page compare honnêtement les principaux fournisseurs de café en marque privée au Canada, en indiquant où ils sont forts et pour qui ils sont vraiment conçus, pour que vous puissiez faire le bon choix.
              </p>
            </>
          ) : (
            <>
              <p className={styles.introText}>
                Canada has several private label coffee suppliers, and they are not all the same. Some are large-scale operations built for national grocery brands and distributors. Some make you source and supply your own bags, labels, and packaging. Some are designed to eventually push you into running your own roastery.
              </p>
              <p className={styles.introText}>
                Very few are built for the restaurant, the boutique, the gym, the hotel, the DTC brand, or the entrepreneur who simply wants to sell great{" "}
                <Link href={`/${lang}/coffee`} className={styles.inlineLink}>specialty grade coffee</Link> under their own name without the complexity, the big minimums, or the upfront cost.
              </p>
              <p className={styles.introText}>
                This page compares the main private label coffee suppliers in Canada honestly, including where they are strong and who they are really built for, so you can make the right choice.
              </p>
            </>
          )}
        </div>
      </section>

      {/* ── Comparison Table ── */}
      <section className={styles.tableSection}>
        <div className={styles.tableSectionInner}>
          <span className={styles.eyebrow}>{isFr ? "02_ Côte à côte" : "02_ Side by Side"}</span>
          <h2 className={styles.tableHeadline}>
            {isFr ? "Fournisseurs de café en marque privée au Canada" : "Private Label Coffee Suppliers in Canada"}
          </h2>
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.thFeature}>{isFr ? "Caractéristique" : "Feature"}</th>
                  <th className={`${styles.th} ${styles.thEzpz}`}>EZPZ Coffee</th>
                  <th className={styles.th}>Canterbury Coffee</th>
                  <th className={styles.th}>Cafe Barista</th>
                  <th className={styles.th}>KW Coffee Collective</th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map((row) => (
                  <tr key={row.feature} className={styles.tr}>
                    <td className={styles.tdFeature}>{row.feature}</td>
                    <td className={`${styles.td} ${styles.tdEzpz}`}>
                      {isEzpzPositive(row.ezpz) && <span className={styles.check}>✓</span>}
                      {row.ezpz}
                    </td>
                    <td className={styles.td}>{competitorMark(row.canterbury)} {row.canterbury}</td>
                    <td className={styles.td}>{competitorMark(row.barista)} {row.barista}</td>
                    <td className={styles.td}>{competitorMark(row.kw)} {row.kw}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Honest Breakdown ── */}
      <section className={styles.breakdown}>
        <div className={styles.breakdownInner}>
          <span className={styles.eyebrow}>{isFr ? "03_ Un regard équitable sur chacun" : "03_ A Fair Look at Each"}</span>
          <h2 className={styles.breakdownHeadline}>{isFr ? "Où chaque fournisseur s'inscrit." : "Where each supplier fits."}</h2>

          <div className={styles.breakdownBlock}>
            <h3 className={styles.breakdownH3}>Canterbury Coffee</h3>
            {isFr ? (
              <p className={styles.breakdownText}>
                Canterbury est une grande compagnie de café canadienne bien établie avec plus de 40 ans d'expérience et de solides programmes d'épicerie et de restauration. Leurs Q Graders et leur chaîne d'approvisionnement nationale en font un choix solide pour les grandes marques d'épicerie et les comptes de restauration nationaux qui ont besoin d'une cohérence à grand volume. Cependant, leur programme est conçu pour l'échelle, pas pour les petites ou nouvelles marques. Il n'y a pas d'option zéro minimum, pas de service de design inclus et pas de commande en ligne simple, ce qui peut en faire un point de départ difficile si vous lancez une idée ou souhaitez la tester.
              </p>
            ) : (
              <p className={styles.breakdownText}>
                Canterbury is a large, well-established Canadian coffee company with over 40 years of experience and strong grocery and foodservice programs. Their Q Graders and national supply chain make them a solid choice for large grocery brands and national foodservice accounts that need high-volume consistency. However, their program is built for scale, not for small or emerging brands. There is no zero-minimum option, no included design service, and no simple online ordering, which can make them a difficult starting point if you are just launching or want to test an idea.
              </p>
            )}
          </div>

          <div className={styles.breakdownBlock}>
            <h3 className={styles.breakdownH3}>Cafe Barista</h3>
            {isFr ? (
              <p className={styles.breakdownText}>
                Cafe Barista est un torréfacteur montréalais respecté avec près de 20 ans d'histoire et un produit genuinement bon. Leur programme de marque privée, selon leur propre description, est conçu pour les distributeurs qui souhaitent offrir du café fraîchement torréfié. Ils suggèrent même ouvertement que les restaurants et cafés vendent leurs mélanges maison existants plutôt que d'opter pour la marque privée. C'est honnête, mais cela signifie que leur marque privée n'est pas vraiment conçue pour les petites entreprises ou les nouvelles marques qui veulent leur propre identité dès le premier jour.
              </p>
            ) : (
              <p className={styles.breakdownText}>
                Cafe Barista is a respected Montreal roaster with nearly 20 years of history and a genuinely good product. Their private label program, by their own description, is designed for distributors looking to offer freshly roasted coffee. In fact, they openly suggest that restaurants and cafes sell their existing house blends rather than go private label. That is honest, but it means their private label is not really built for small businesses or new brands wanting their own identity from day one.
              </p>
            )}
          </div>

          <div className={styles.breakdownBlock}>
            <h3 className={styles.breakdownH3}>KW Coffee Collective</h3>
            {isFr ? (
              <p className={styles.breakdownText}>
                KW Coffee Collective à Kitchener offre un programme réfléchi avec un vrai mentorat, et leur angle est de vous aider à éventuellement torréfier votre propre café. C'est un excellent choix si votre objectif est d'apprendre le métier et d'évoluer vers l'exploitation de votre propre torréfacteur. Mais pour leur service de marque blanche et privée, vous fournissez vos propres étiquettes et emballages, et le modèle est positionné comme un tremplin vers la torréfaction autonome. Si vous voulez simplement un produit fini prêt à vendre sans sourcer d'emballage ni apprendre à torréfier, c'est une voie différente de ce dont vous avez peut-être besoin.
              </p>
            ) : (
              <p className={styles.breakdownText}>
                KW Coffee Collective in Kitchener offers a thoughtful program with real mentorship, and their angle is helping you eventually roast your own coffee. It is a great fit if your goal is to learn the craft and move toward running your own roastery. But for their white and private label service, you provide your own labels and packaging, and the model is positioned as a stepping stone to roasting yourself. If you simply want a finished, ready-to-sell product without sourcing packaging or learning to roast, it is a different path than what you may need.
              </p>
            )}
          </div>

          <div className={styles.breakdownBlock}>
            <h3 className={styles.breakdownH3}><span className={styles.breakdownH3Accent}>EZPZ Coffee</span></h3>
            {isFr ? (
              <p className={styles.breakdownText}>
                EZPZ a été construit spécifiquement pour les marques que les autres ne sont pas conçus pour servir. Restaurants, hôtels, boutiques, gyms, marques DTC, entrepreneurs, et quiconque veut vendre du bon café sous son propre nom sans la complexité.{" "}
                <Link href={`/${lang}/custom-coffee-bags-no-minimum-canada`} className={styles.inlineLink}>Zéro minimum de commande</Link>, pour commencer avec un seul sachet. Design personnalisé complet toujours inclus, pour ne pas avoir à fournir votre propre emballage ni engager un designer. Le café de spécialité, la torréfaction à Montréal, l'emballage et même{" "}
                <Link href={`/${lang}/coffee-dropshipping-canada`} className={styles.inlineLink}>l'expédition directe</Link>, tout géré comme un produit fini. Plus des formats que les autres n'offrent pas, dont le prêt-à-boire et le{" "}
                <Link href={`/${lang}/instant-coffee`} className={styles.inlineLink}>café instantané lyophilisé premium</Link>.
              </p>
            ) : (
              <p className={styles.breakdownText}>
                EZPZ was built specifically for the brands the others are not designed to serve. Restaurants, hotels, boutiques, gyms, DTC brands, entrepreneurs, and anyone who wants to sell great coffee under their own name without the complexity.{" "}
                <Link href={`/${lang}/custom-coffee-bags-no-minimum-canada`} className={styles.inlineLink}>Zero minimum order</Link>, so you can start with a single bag. Full custom design always included, so you do not need to supply your own packaging or hire a designer. The specialty grade coffee, the roasting in Montreal, the packaging, and even{" "}
                <Link href={`/${lang}/coffee-dropshipping-canada`} className={styles.inlineLink}>dropshipping fulfillment</Link>, all handled as one finished product. Plus formats the others do not offer, including ready-to-drink and premium{" "}
                <Link href={`/${lang}/instant-coffee`} className={styles.inlineLink}>freeze-dried instant coffee</Link>.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* ── Why Brands Choose EZPZ ── */}
      <section className={styles.whySection}>
        <div className={styles.whyInner}>
          <span className={styles.eyebrow}>{isFr ? "04_ Pourquoi les marques choisissent EZPZ" : "04_ Why Brands Choose EZPZ"}</span>
          <h2 className={styles.whyHeadline}>{isFr ? "Ce qui rend EZPZ différent." : "What makes EZPZ different."}</h2>
          <div className={styles.whyGrid}>
            {WHY_CARDS.map((card) => (
              <div key={card.title} className={styles.whyCard}>
                <h3 className={styles.whyCardTitle}>{isFr ? card.titleFr : card.title}</h3>
                <p className={styles.whyCardBody}>{isFr ? card.bodyFr : card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className={styles.faq}>
        <div className={styles.faqInner}>
          <span className={styles.eyebrow}>{isFr ? "05_ FAQ" : "05_ FAQ"}</span>
          <h2 className={styles.faqHeadline}>
            {isFr
              ? "Fournisseurs de café en marque privée au Canada : FAQ"
              : "Private Label Coffee Suppliers in Canada: FAQ"}
          </h2>
          <div className={styles.faqList}>
            {FAQS.map((item) => (
              <details key={item.q} className={styles.faqItem}>
                <summary className={styles.faqSummary}>{isFr ? item.qFr : item.q}</summary>
                <p className={styles.faqBody}>{isFr ? item.aFr : item.a}</p>
              </details>
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

      {/* ── Final CTA ── */}
      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>
            {isFr
              ? "Le partenaire de marque privée conçu pour votre marque."
              : "The private label partner built for your brand."}
          </h2>
          <p className={styles.ctaSubtext}>
            {isFr
              ? "Zéro minimum. Design inclus. Le café, la torréfaction, l'emballage et l'expédition, tout géré. Commencez avec un seul sachet."
              : "Zero minimum. Design included. The coffee, roasting, packaging, and fulfillment, all handled. Start with a single bag."}
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
