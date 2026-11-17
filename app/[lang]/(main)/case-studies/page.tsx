import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

import { CASE_STUDIES } from "./data";
import styles from "./styles.module.scss";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isFr = lang === "fr";
  const title = isFr
    ? "Études de cas clients | Vraies marques créées avec EZPZ Coffee"
    : "Client Case Studies | Real Brands Built With EZPZ Coffee";
  const description = isFr
    ? "Découvrez comment des restaurants, plateformes et entreprises partout au Canada ont lancé leur propre café de marque avec EZPZ. De vrais clients, de vrais produits, de vraies histoires."
    : "See how restaurants, platforms, and businesses across Canada launched their own branded coffee with EZPZ. Real clients, real products, real stories.";
  return {
    title,
    description,
    alternates: {
      canonical: `/${lang}/case-studies`,
      languages: {
        "en-CA": "https://www.ezpz.coffee/en/case-studies",
        "fr-CA": "https://www.ezpz.coffee/fr/case-studies",
        "x-default": "https://www.ezpz.coffee/en/case-studies",
      },
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://www.ezpz.coffee/${lang}/case-studies`,
      images: [{ url: "/assets/banner-01.jpg", width: 1200, height: 630, alt: "EZPZ Coffee Case Studies" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/assets/banner-01.jpg"],
    },
  };
}

export default async function CaseStudiesPage({ params }: Props) {
  const { lang } = await params;
  const isFr = lang === "fr";
  const published = CASE_STUDIES.filter((c) => c.published);

  return (
    <div className={styles.page}>

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroAngle} />
        <div className={styles.heroInner}>
          <span className={styles.heroEyebrow}>{isFr ? "Histoires de clients" : "Client Stories"}</span>
          <h1 className={styles.heroTitle}>
            {isFr
              ? "De vraies marques. Du vrai café. Créé avec EZPZ."
              : "Real brands. Real coffee. Built with EZPZ."}
          </h1>
          <p className={styles.heroSub}>
            {isFr
              ? "De plateformes de café de spécialité aux restaurants et détaillants, voici comment des entreprises partout au Canada et aux États-Unis ont lancé leur propre café de marque sans complications."
              : "From specialty coffee platforms to restaurants and retailers — here is how businesses across Canada and the US launched their own branded coffee with zero complications."}
          </p>
        </div>
      </section>

      {/* ── Stats band ────────────────────────────────────────── */}
      <section className={styles.statBand}>
        <div className={styles.statBandInner}>
          <div className={styles.statItem}>
            <span className={styles.statValue}>{isFr ? "1 sachet" : "1 bag"}</span>
            <span className={styles.statLabel}>{isFr ? "Commande minimale" : "Minimum order"}</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.statItem}>
            <span className={styles.statValue}>{isFr ? "7 à 10 jours" : "7–10 days"}</span>
            <span className={styles.statLabel}>{isFr ? "Du brief à la livraison" : "From brief to delivery"}</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.statItem}>
            <span className={styles.statValue}>$0</span>
            <span className={styles.statLabel}>{isFr ? "Frais de design" : "Design fee"}</span>
          </div>
          <div className={styles.statDivider} />
          <div className={styles.statItem}>
            <span className={styles.statValue}>80+</span>
            <span className={styles.statLabel}>{isFr ? "Score SCA sur chaque café" : "SCA score on every coffee"}</span>
          </div>
        </div>
      </section>

      {/* ── Case study grid ───────────────────────────────────── */}
      <section className={styles.gridSection}>
        <div className={styles.gridInner}>
          <div className={styles.grid}>
            {published.map((cs) => (
              <Link key={cs.slug} href={cs.href.replace("/en/", `/${lang}/`)} className={styles.card}>
                <div className={styles.cardImage}>
                  <img
                    src={cs.image}
                    alt={`${cs.client} — EZPZ Coffee case study`}
                    loading="lazy"
                    className={styles.cardImg}
                  />
                </div>
                <div className={styles.cardBody}>
                  <div className={styles.cardMeta}>
                    <span className={styles.cardClient}>{cs.client}</span>
                    <span className={styles.cardCategory}>{isFr ? cs.categoryFr : cs.category}</span>
                  </div>
                  <h2 className={styles.cardTitle}>{isFr ? cs.titleFr : cs.title}</h2>
                  <p className={styles.cardExcerpt}>{isFr ? cs.excerptFr : cs.excerpt}</p>
                  <div className={styles.cardTags}>
                    {(isFr ? cs.tagsFr : cs.tags).map((tag) => (
                      <span key={tag} className={styles.cardTag}>{tag}</span>
                    ))}
                  </div>
                  <div className={styles.cardFooter}>
                    <span className={styles.cardDate}>{isFr ? cs.dateFr : cs.date}</span>
                    <span className={styles.readMore}>
                      {isFr ? "Lire l'étude de cas" : "Read case study"} <ArrowRight size={13} weight="bold" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* ── Coming soon placeholder ── */}
          <div className={styles.comingSoon}>
            <p className={styles.comingSoonText}>
              {isFr
                ? "D'autres études de cas arrivent bientôt. Nous faisons nos débuts."
                : "More case studies coming soon. We are just getting started."}
            </p>
            <Link href={`/${lang}/contact`} className={styles.comingSoonCta}>
              {isFr
                ? "Vous voulez être mis en vedette ? Parlez-nous"
                : "Want to be featured? Talk to us"}{" "}
              <ArrowRight size={13} weight="bold" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ────────────────────────────────────────── */}
      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>
            {isFr ? "Prêt à écrire votre propre histoire ?" : "Ready to write your own story?"}
          </h2>
          <p className={styles.ctaSubtext}>
            {isFr
              ? "Minimum 1 sachet. Design complet inclus. Torréfié frais à Montréal. Votre marque mérite d'être sur les tablettes."
              : "1 bag minimum. Full design included. Roasted fresh in Montreal. Your brand deserves to be on the shelf."}
          </p>
          <div className={styles.ctaButtons}>
            <Link href={`/${lang}/design`} className={styles.ctaPrimary}>
              {isFr ? "Concevoir votre sachet" : "Design your bag"}
            </Link>
            <Link href={`/${lang}/contact`} className={styles.ctaSecondary}>
              {isFr ? "Obtenir un devis gratuit" : "Get a free quote"}
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
