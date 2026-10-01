"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import { ArrowRight, Check } from "@phosphor-icons/react/dist/ssr";

import styles from "./styles.module.scss";

const PricingPage = () => {
  const locale = useLocale();
  const isFr = locale === "fr";

  const included = isFr
    ? [
        "Design personnalisé inclus",
        "Café de spécialité (score SCA 80 et plus)",
        "Torréfié frais à Montréal",
        "En grains entiers ou moulu",
        "Livraison partout au Canada et aux États-Unis",
      ]
    : [
        "Custom design",
        "Specialty-grade coffee (80+ SCA score)",
        "Roasted fresh in Montreal",
        "Whole bean or ground",
        "Ships across Canada & USA",
      ];

  const faqSchema = isFr
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Combien coûte un sac de café personnalisé au Canada?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Les sacs avec étiquette EZPZ démarrent sans minimum de commande, avec le design inclus et sans frais d'installation. Les sacs entièrement imprimés à la demande démarrent à 5 000 unités. Contactez-nous pour une soumission adaptée à votre volume.",
            },
          },
          {
            "@type": "Question",
            name: "Y a-t-il des frais de mise en place ou de design?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Non. Le design de l'étiquette personnalisée est toujours inclus sans frais supplémentaires, sans frais d'installation ni frais mensuels sur les commandes standards.",
            },
          },
          {
            "@type": "Question",
            name: "Combien coûte le dropshipping de café?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Le dropshipping EZPZ commence à 15 $ par sachet livré directement à votre client. Vous fixez votre propre prix de détail et il n'y a aucun frais mensuel.",
            },
          },
        ],
      }
    : {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "How much does a custom coffee bag cost in Canada?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "EZPZ custom-label bags start with zero minimum order — custom design is always included with no setup fees. Fully custom printed bags start at a 5,000-unit minimum. Contact us for a quote tailored to your volume.",
            },
          },
          {
            "@type": "Question",
            name: "Is there a setup or design fee?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No. Custom label design is always included at no extra cost, with no setup or monthly fees on standard orders.",
            },
          },
          {
            "@type": "Question",
            name: "How much does coffee dropshipping cost?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "EZPZ dropshipping starts at a $15 per-bag baseline shipped directly to your customer, with you setting your own retail price and no monthly fees.",
            },
          },
        ],
      };

  return (
    <div className={styles.page}>

      {/* ── JSON-LD FAQ Schema ─────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ── Answer-first block (AEO/speakable) ───────────────── */}
      <div
        data-speakable
        style={{
          background: "#FDF9F5",
          borderLeft: "4px solid #C17A3A",
          padding: "1rem 1.5rem",
          maxWidth: "820px",
          margin: "0 auto",
          fontSize: "0.95rem",
          lineHeight: 1.7,
          color: "#333",
        }}
      >
        <strong style={{ color: "#111", display: "block", marginBottom: "0.25rem" }}>
          {isFr ? "Réponse rapide :" : "Quick answer:"}
        </strong>
        {isFr
          ? "Les sacs de café avec étiquette EZPZ démarrent sans minimum de commande. Le design personnalisé est toujours inclus, sans frais d'installation. Contactez-nous pour une soumission adaptée à votre volume. Les sacs entièrement imprimés démarrent à 5 000 unités."
          : "EZPZ custom-label coffee bags start with zero minimum order — custom design is always included, no setup fees. Contact us for a quote scaled to your volume. Fully custom printed bags start at a 5,000-unit minimum."}
        {" "}
        <a
          href={`/${locale}/contact?subject=${isFr ? "Demande+de+soumission" : "Pricing+Quote"}`}
          style={{ color: "#C17A3A", marginLeft: "0.5rem", fontWeight: 700, textDecoration: "underline" }}
        >
          {isFr ? "Obtenir une soumission gratuite" : "Get a free quote"} &rarr;
        </a>
      </div>

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroAngle} />
        <div className={styles.heroInner}>
          <span className={styles.heroEyebrow}>{isFr ? "Tarifs" : "Pricing"}</span>
          <h1 className={styles.heroTitle}>{isFr ? "Tarification simple et transparente." : "Simple, transparent pricing."}</h1>
          <p className={styles.heroSub}>
            {isFr
              ? "Aucun frais caché, design toujours inclus. Voici ce qu'il en coûte pour mettre votre marque sur un excellent café."
              : "No hidden fees, design always included. Here's what it costs to put your brand on great coffee."}
          </p>
        </div>
      </section>

      {/* ── Two options ───────────────────────────────────────── */}
      <section className={styles.optionsSection}>
        <div className={styles.optionsInner}>
          <h2 className={styles.sectionHeading}>{isFr ? "Deux façons d'obtenir vos sacs de marque" : "Two ways to get your branded bags"}</h2>

          <div className={styles.optionsGrid}>

            {/* Option 1 — EZPZ Label */}
            <div className={styles.optionCard}>
              <span className={styles.optionTag}>{isFr ? "Idéal pour lancer et tester" : "Best for launching & testing"}</span>
              <h3 className={styles.optionName}>{isFr ? "Sacs EZPZ avec étiquette personnalisée" : "EZPZ Bags with Custom Label"}</h3>
              <p style={{ margin: "0 0 0.25rem", lineHeight: 1 }}>
                <span style={{ fontSize: "clamp(1.6rem, 3vw, 2rem)", fontWeight: 800, color: "var(--color-accent)", letterSpacing: "-0.02em" }}>
                  {isFr ? "À partir de 11,75 $" : "From $11.75"}
                </span>
                <span style={{ fontSize: "0.9rem", color: "#6b7280", fontWeight: 500 }}>{isFr ? "/sachet" : "/bag"}</span>
              </p>
              <p style={{ margin: "0 0 var(--spacing-country)", fontSize: "0.8rem", color: "#9ca3af" }}>
                {isFr ? "À 100 sacs · sans minimum pour commencer" : "At 100 bags · zero minimum to start"}
              </p>
              <p className={styles.optionDesc}>
                {isFr
                  ? "Nos sacs de 225 g de haute qualité avec valve de dégazage et fermeture éclair refermable, avec votre étiquette personnalisée appliquée."
                  : "Our high-quality 225g stand-up bags (degassing valve + resealable zip) with your custom-designed label applied."}
              </p>
              <ul className={styles.optionHighlights}>
                <li><Check size={14} weight="bold" className={styles.checkIcon} /> {isFr ? "Aucun minimum de commande, commencez avec un seul sachet" : "Zero minimum order — start with a single bag"}</li>
                <li><Check size={14} weight="bold" className={styles.checkIcon} /> {isFr ? "Design d'étiquette inclus, sans frais d'installation" : "Custom label design included, no setup fees"}</li>
                <li><Check size={14} weight="bold" className={styles.checkIcon} /> {isFr ? "Le prix diminue avec le volume, contactez-nous pour une soumission" : "Price scales with volume — contact us for a quote"}</li>
              </ul>

              <div className={styles.optionCtaGroup}>
                <Link href={`/${locale}/contact?subject=${isFr ? "Soumission+sac+étiquette+EZPZ" : "EZPZ+Label+Bag+Quote"}`} className={styles.optionCtaPrimary}>
                  {isFr ? "Obtenir une soumission" : "Get a quote"} <ArrowRight size={14} weight="bold" />
                </Link>
                <Link href={`/${locale}/design`} className={styles.optionCtaOutline}>
                  {isFr ? "Ou créez votre sachet" : "Or design your bag"} <ArrowRight size={14} weight="bold" />
                </Link>
              </div>
            </div>

            {/* Option 2 — Fully Custom */}
            <div className={`${styles.optionCard} ${styles.optionCardDark}`}>
              <span className={`${styles.optionTag} ${styles.optionTagDark}`}>{isFr ? "Idéal pour les marques en croissance" : "Best for scaling brands"}</span>
              <h3 className={`${styles.optionName} ${styles.optionNameLight}`}>{isFr ? "Sacs entièrement imprimés à la demande" : "Fully Custom Printed Bags"}</h3>
              <p style={{ margin: "0 0 0.25rem", lineHeight: 1 }}>
                <span style={{ fontSize: "clamp(1.6rem, 3vw, 2rem)", fontWeight: 800, color: "var(--color-accent)", letterSpacing: "-0.02em" }}>
                  {isFr ? "À partir de 0,85 $" : "From $0.85"}
                </span>
                <span style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.45)", fontWeight: 500 }}>{isFr ? "/sachet" : "/bag"}</span>
              </p>
              <p style={{ margin: "0 0 var(--spacing-country)", fontSize: "0.8rem", color: "rgba(255,255,255,0.35)" }}>
                {isFr ? "À 5 000 unités · prix plus bas encore à grande échelle" : "At 5,000 units · price drops further at scale"}
              </p>
              <p className={`${styles.optionDesc} ${styles.optionDescLight}`}>
                {isFr
                  ? "Le sac entier imprimé selon votre design exact et votre format (250 g, 340 g, 454 g, 1 kg et plus). Aucune marque EZPZ visible."
                  : "The entire bag printed to your exact design and size (250g, 340g, 454g, 1kg, and more). Zero EZPZ branding."}
              </p>

              <ul className={`${styles.optionHighlights} ${styles.optionHighlightsLight}`}>
                <li><Check size={14} weight="bold" className={styles.checkIconLight} /> {isFr ? "Commande minimale : 5 000 unités (répartissables sur 5 designs)" : "Minimum order: 5,000 units (splittable across up to 5 designs)"}</li>
                <li><Check size={14} weight="bold" className={styles.checkIconLight} /> {isFr ? "Paiement à l'avance" : "Paid upfront"}</li>
                <li><Check size={14} weight="bold" className={styles.checkIconLight} /> {isFr ? "Le prix par sachet baisse significativement à grande échelle, contactez-nous pour une soumission" : "Per-bag price drops significantly at scale — contact us for a quote"}</li>
              </ul>

              <Link href={`/${locale}/contact?subject=${isFr ? "Sacs+entièrement+personnalisés" : "Fully+Custom+Printed+Bags"}`} className={styles.optionCtaSecondary}>
                {isFr ? "Obtenir une soumission personnalisée" : "Get a custom quote"} <ArrowRight size={14} weight="bold" />
              </Link>
            </div>

          </div>

          <div className={styles.optionsClarifier}>
            <p>
              <strong>{isFr ? "Vous ne savez pas quelle option choisir?" : "Not sure which to choose?"}</strong>{" "}
              {isFr
                ? "La plupart des marques commencent avec l'option 1 pour se lancer sans risque, puis passent à l'option 2 une fois la demande confirmée. Les deux utilisent le même café de spécialité à l'intérieur."
                : "Most brands start with Option 1 to launch lean with zero risk, then move to Option 2 once they've proven demand. Both use the same specialty-grade coffee inside."}
            </p>
          </div>
        </div>
      </section>

      {/* ── Dropshipping pricing ───────────────────────────────── */}
      <section className={styles.dropshipSection}>
        <div className={styles.dropshipInner}>
          <span className={styles.sectionEyebrow}>{isFr ? "Dropshipping" : "Dropshipping"}</span>
          <h2 className={styles.sectionHeading}>{isFr ? "Vendez en ligne, zéro inventaire." : "Sell online, zero inventory."}</h2>
          <p className={styles.dropshipDesc}>
            {isFr
              ? "Vendez en ligne sans aucun stock. Lorsqu'un client commande sur votre boutique, nous torréfions, emballons et livrons directement sous votre marque."
              : "Sell online with zero inventory. When a customer orders on your store, we roast, pack, and ship directly to them under your brand."}
          </p>
          <div className={styles.dropshipHighlight}>
            <span className={styles.dropshipPrice}>{isFr ? "15 $" : "$15"}</span>
            <span className={styles.dropshipLabel}>{isFr ? "par sachet livré à votre client. Vous fixez votre propre prix de détail." : "per bag shipped to your customer — you set your own retail price"}</span>
          </div>
          <p className={styles.dropshipNote}>
            {isFr ? "Aucun frais mensuel ni frais d'installation. Le tarif s'améliore avec le volume." : "No monthly fees, no setup fees. Rate improves as your volume grows."}
          </p>
          <Link href={`/${locale}/coffee-dropshipping-canada`} className={styles.dropshipLink}>
            {isFr ? "En savoir plus sur le dropshipping" : "Learn about dropshipping"} <ArrowRight size={13} weight="bold" />
          </Link>
        </div>
      </section>

      {/* ── What's always included ────────────────────────────── */}
      <section className={styles.includedSection}>
        <div className={styles.includedInner}>
          <h2 className={styles.sectionHeading}>{isFr ? "Ce qui est toujours inclus" : "What's always included"}</h2>
          <ul className={styles.includedList}>
            {included.map((item) => (
              <li key={item} className={styles.includedItem}>
                <Check size={16} weight="bold" className={styles.checkIcon} />
                {item}
              </li>
            ))}
          </ul>
          <p className={styles.includedNote}>
            {isFr
              ? "La livraison est calculée selon la destination. "
              : "Shipping is calculated by destination. "}
            <Link href={`/${locale}/contact?subject=${isFr ? "Soumission+livraison" : "Shipping+Quote"}`} className={styles.includedNoteLink}>
              {isFr ? "Contactez-nous" : "Contact us"}
            </Link>
            {isFr
              ? " pour une soumission exacte adaptée à votre volume et votre emplacement."
              : " for an exact quote tailored to your volume and location."}
          </p>

          {/* Sample CTA */}
          <div className={styles.sampleCta}>
            <p className={styles.sampleCtaText}>{isFr ? "Vous voulez goûter d'abord?" : "Want to taste first?"}</p>
            <Link href={`/${locale}/contact?subject=${isFr ? "Demande+d%27échantillon+gratuit" : "Free+Sample+Request"}`} className={styles.sampleCtaLink}>
              {isFr ? "Demandez un kit d'échantillons gratuit" : "Request a free sample kit"} <ArrowRight size={13} weight="bold" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ────────────────────────────────────────── */}
      <section className={styles.ctaBanner}>
        <div className={styles.ctaBannerInner}>
          <h2 className={styles.ctaBannerTitle}>{isFr ? "Prêt à commencer?" : "Ready to start?"}</h2>
          <p className={styles.ctaBannerSub}>
            {isFr
              ? "Créez votre sachet ou demandez un échantillon gratuit, sans engagement dans les deux cas."
              : "Design your bag or request a free sample — zero commitment either way."}
          </p>
          <div className={styles.ctaBannerButtons}>
            <Link href={`/${locale}/design`} className={styles.ctaBannerPrimary}>
              {isFr ? "Créez votre sachet" : "Design your bag"}
            </Link>
            <Link href={`/${locale}/contact?subject=${isFr ? "Demande+d%27échantillon+gratuit" : "Free+Sample+Request"}`} className={styles.ctaBannerSecondary}>
              {isFr ? "Demandez un échantillon gratuit" : "Request a free sample"}
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default PricingPage;
