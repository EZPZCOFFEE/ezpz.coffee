"use client";

import Link from "next/link";
import { useLocale } from "next-intl";

import styles from "./servicePages.module.scss";

const ServicesHub = () => {
  const locale = useLocale();
  const isFr = locale === "fr";

  const SERVICES = isFr
    ? [
        {
          label: "01_ Sacs de café personnalisés",
          title: "Sacs de café de marque personnalisée",
          body: "De la ferme à la porte de votre client : design complet, approvisionnement en café de spécialité, torréfaction, emballage et logistique. Aucun minimum de commande. Livraison partout au Canada et aux États-Unis.",
          stats: [
            { num: "1", label: "Minimum de commande" },
            { num: "2 à 3 sem.", label: "Du design à la livraison" },
            { num: "500+", label: "Marques desservies" },
          ],
          href: "/services/custom-coffee-bags",
          cta: "En savoir plus →",
        },
        {
          label: "02_ Café prêt-à-boire",
          title: "Café prêt-à-boire personnalisé",
          body: "Lancez votre propre café prêt-à-boire sous votre marque, en cannettes, bouteilles ou cartons. Développement de la recette, production, emballage et exécution gérés par notre équipe.",
          stats: [
            { num: "8 000", label: "Unités minimum" },
            { num: "4 à 6 sem.", label: "Délai de production" },
            { num: "100 %", label: "Recette personnalisée" },
          ],
          href: "/services/ready-to-drink",
          cta: "En savoir plus →",
        },
        {
          label: "03_ Capsules Nespresso",
          title: "Capsules Nespresso personnalisées",
          body: "Votre marque dans chaque machine Nespresso au Canada. Café de spécialité, remplissage et scellage professionnels, emballage personnalisé. Parfait pour les hôtels, bureaux et commerce de détail haut de gamme.",
          stats: [
            { num: "100 %", label: "Compatible Nespresso Classic" },
            { num: "2 à 3 sem.", label: "Délai de production" },
            { num: "3", label: "Niveaux d'intensité" },
          ],
          href: "/services/nespresso-capsules",
          cta: "En savoir plus →",
        },
        {
          label: "04_ Dropshipping café",
          title: "Dropshipping de café au Canada",
          body: "Vendez du café de spécialité de marque en ligne sans jamais le toucher. Nous torréfions à Montréal, emballons sous votre marque et livrons directement à vos clients. Zéro minimum. Aucun frais mensuel.",
          stats: [
            { num: "0", label: "Minimum pour commencer" },
            { num: "Aucun", label: "Frais mensuels" },
            { num: "Direct", label: "Livré à vos clients" },
          ],
          href: "/coffee-dropshipping-canada",
          cta: "En savoir plus →",
        },
        {
          label: "05_ Café instantané",
          title: "Café instantané lyophilisé",
          body: "Café instantané de spécialité lyophilisé qui préserve toute la saveur et l'arôme. Personnalisé sous votre marque en pots, sachets ou bâtonnets. Le café instantané qui goûte vraiment comme une vraie tasse.",
          stats: [
            { num: "Lyophilisé", label: "Pas atomisé" },
            { num: "SCA 80+", label: "Grade spécialité" },
            { num: "0", label: "Minimum de commande" },
          ],
          href: "/instant-coffee",
          cta: "En savoir plus →",
        },
        {
          label: "06_ Café en gros",
          title: "Café en gros",
          body: "Grains de qualité spécialité en vrac pour restaurants, cafés, hôtels et bureaux. Torréfié frais à Montréal, constant d'un lot à l'autre, livré selon un calendrier récurrent.",
          stats: [
            { num: "SCA 80+", label: "Grade spécialité" },
            { num: "Récurrente", label: "Livraison" },
            { num: "Grains entiers", label: "Ou moulus" },
          ],
          href: "/cafe-en-gros",
          cta: "En savoir plus →",
        },
      ]
    : [
        {
          label: "01_ Custom Coffee Bags",
          title: "Custom Branded Coffee Bags",
          body: "From farm to your customer's door — full custom bag design, specialty-grade sourcing, roasting, packaging, and logistics. Zero minimum order. Ships across Canada and the USA.",
          stats: [
            { num: "1", label: "Minimum order" },
            { num: "2–3 wks", label: "From design to delivery" },
            { num: "500+", label: "Brands served" },
          ],
          href: "/services/custom-coffee-bags",
          cta: "Learn more →",
        },
        {
          label: "02_ Ready-to-Drink Coffee",
          title: "Custom RTD Coffee",
          body: "Launch your own branded ready-to-drink coffee in cans, bottles, or cartons. Full recipe development, production, packaging, and fulfillment handled by our team.",
          stats: [
            { num: "8,000", label: "Unit minimum" },
            { num: "4–6 wks", label: "Production timeline" },
            { num: "100%", label: "Custom recipe" },
          ],
          href: "/services/ready-to-drink",
          cta: "Learn more →",
        },
        {
          label: "03_ Nespresso Capsules",
          title: "Custom Nespresso Capsules",
          body: "Your brand in every Nespresso machine in Canada. Specialty-grade coffee, professional filling and sealing, branded packaging. Perfect for hotels, offices, and premium retail.",
          stats: [
            { num: "100%", label: "Nespresso Classic compatible" },
            { num: "2–3 wks", label: "Production timeline" },
            { num: "3", label: "Intensity levels" },
          ],
          href: "/services/nespresso-capsules",
          cta: "Learn more →",
        },
        {
          label: "04_ Coffee Dropshipping",
          title: "Coffee Dropshipping Canada",
          body: "Sell branded specialty coffee online without ever touching it. We roast in Montreal, pack in your brand, and ship direct to your customers. Zero minimum. No monthly fees.",
          stats: [
            { num: "0", label: "Minimum to start" },
            { num: "None", label: "Monthly software fees" },
            { num: "Direct", label: "Ships to your customers" },
          ],
          href: "/coffee-dropshipping-canada",
          cta: "Learn more →",
        },
        {
          label: "05_ Instant Coffee",
          title: "Freeze-Dried Instant Coffee",
          body: "Premium freeze-dried specialty coffee that preserves full flavor and aroma. Custom branded in jars, sachets, or sticks. The instant coffee that actually tastes like a real cup.",
          stats: [
            { num: "Freeze-dried", label: "Not spray-dried" },
            { num: "80+ SCA", label: "Specialty grade" },
            { num: "0", label: "Minimum order" },
          ],
          href: "/instant-coffee",
          cta: "Learn more →",
        },
        {
          label: "06_ Wholesale Coffee",
          title: "Wholesale Coffee Beans",
          body: "Specialty-grade bulk beans for restaurants, cafés, hotels, and offices. Roasted fresh in Montreal, consistent batch after batch, delivered on a recurring schedule.",
          stats: [
            { num: "80+ SCA", label: "Specialty grade" },
            { num: "Recurring", label: "Delivery schedule" },
            { num: "Whole bean", label: "Or ground" },
          ],
          href: "/wholesale-coffee-beans",
          cta: "Learn more →",
        },
      ];

  return (
    <div className={styles.page}>
      <section className={styles.hubHero}>
        <span className={styles.eyebrow}>{isFr ? "Nos services" : "Our Services"}</span>
        <h1 className={styles.hubHeroTitle}>{isFr ? "Six façons de mettre votre marque sur un café de spécialité." : "Six ways to put your brand on specialty coffee."}</h1>
        <p className={styles.hubHeroSubtitle}>
          {isFr
            ? "Que vous vouliez un sac de café de marque, un prêt-à-boire prêt pour les rayons ou des capsules pour chaque machine Nespresso, EZPZ gère tout, du design à la livraison."
            : "Whether you want a branded coffee bag, a shelf-ready RTD, or capsules for every Nespresso machine — EZPZ handles everything from design to delivery."}
        </p>
      </section>

      <section className={styles.hubSection}>
        <div className={styles.hubSectionInner}>
          <span className={styles.eyebrow}>{isFr ? "Choisissez votre format" : "Choose your format"}</span>
          <div className={styles.hubServiceGrid}>
            {SERVICES.map((service) => (
              <Link key={service.title} href={`/${locale}${service.href}`} className={styles.hubServiceCard}>
                <span className={styles.hubServiceLabel}>{service.label}</span>
                <h2 className={styles.hubServiceTitle}>{service.title}</h2>
                <p className={styles.hubServiceBody}>{service.body}</p>
                <div className={styles.hubServiceStats}>
                  {service.stats.map((stat) => (
                    <div key={stat.label} className={styles.hubServiceStatItem}>
                      <span className={styles.hubServiceStatNum}>{stat.num}</span>
                      <span className={styles.hubServiceStatLabel}>{stat.label}</span>
                    </div>
                  ))}
                </div>
                <span className={styles.hubServiceCta}>{service.cta}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.finalCta}>
        <div className={styles.finalCtaInner}>
          <h2 className={styles.finalCtaTitle}>{isFr ? "Vous ne savez pas quel format vous convient ?" : "Not sure which format is right for you?"}</h2>
          <p className={styles.finalCtaSubtext}>
            {isFr
              ? "Réservez une consultation gratuite et nous vous aiderons à choisir le bon produit pour votre marque, votre audience et votre budget."
              : "Book a free consultation and we will help you choose the right product for your brand, your audience, and your budget."}
          </p>
          <div className={styles.finalCtaButtons}>
            <Link href={`/${locale}/contact`} className={styles.finalCtaPrimary}>{isFr ? "Consultation gratuite" : "Get a free consultation"}</Link>
            <Link href={`/${locale}/coffee`} className={styles.finalCtaSecondary}>{isFr ? "Notre café" : "Learn about our coffee"}</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesHub;
