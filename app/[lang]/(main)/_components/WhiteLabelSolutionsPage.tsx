"use client";

import { GlobeHemisphereEastIcon, Coffee } from "@phosphor-icons/react";
import { CaretDoubleDownIcon } from "@phosphor-icons/react/dist/ssr";
import classNames from "classnames";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { useCallback, useState } from "react";

import {
  getHeroHintFade,
  getNestedSectionListStagger,
  getSectionFadeInView,
  getSectionVariantInView,
  getStaggerReveal,
} from "@/lib/motion/landingReveal";
import bagPng from "@/public/assets/bag.png";
import banner02 from "@/public/assets/banner-02.jpg";
import canShadowPng from "@/public/assets/can-shadow.png";
import capsulePng from "@/public/assets/capsule.png";

import styles from "./homeLanding.module.scss";

const ACCORDION_ITEMS = [
  { title: "YOUR DESIGN", titleFr: "VOTRE DESIGN", body: "Full custom bag design included at no extra cost. You bring your logo and brand colors. We handle the rest.", bodyFr: "Design de sachet entièrement personnalisé inclus sans frais supplémentaires. Vous apportez votre logo et vos couleurs de marque. Nous nous occupons du reste." },
  { title: "YOUR ROASTING", titleFr: "VOTRE TORRÉFACTION", body: "Fresh roasted at Canadian Roasting Society in Montreal on professional Probat equipment.", bodyFr: "Torréfié frais à la Canadian Roasting Society à Montréal sur des équipements Probat professionnels." },
  { title: "YOUR PACKAGING", titleFr: "VOTRE EMBALLAGE", body: "Custom branded bags, ready-to-drink cans, or Nespresso capsules. Your brand on every format.", bodyFr: "Sacs de marque personnalisés, canettes prêtes à boire ou capsules Nespresso. Votre marque sur chaque format." },
  { title: "YOUR QUALITY CONTROL", titleFr: "VOTRE CONTRÔLE QUALITÉ", body: "Every batch is quality checked before it ships. Specialty grade 80+ SCA score guaranteed.", bodyFr: "Chaque lot est vérifié avant l'expédition. Score SCA 80+ de qualité spécialité garanti." },
  { title: "YOUR LOGISTICS", titleFr: "VOTRE LOGISTIQUE", body: "We ship directly to your door across Canada and the USA. No warehousing required on your end.", bodyFr: "Nous livrons directement à votre porte partout au Canada et aux États-Unis. Aucun entreposage requis de votre côté." },
  { title: "YOUR FULFILLMENT", titleFr: "VOTRE EXÉCUTION", body: "From one bag to ten thousand. Zero minimum. Same quality every single time.", bodyFr: "D'un sachet à dix mille. Zéro minimum. La même qualité à chaque fois." },
];

const SPLIT_SECTIONS = [
  { theme: "dark" as const, imageFirst: true, image: bagPng, sectionKey: "coffeeBags" as const, learnMorePath: "/services/custom-coffee-bags", learnMoreLabel: "Learn more about custom coffee bags", learnMoreLabelFr: "En savoir plus sur les sacs de café personnalisés" },
  { theme: "light" as const, imageFirst: false, image: canShadowPng, sectionKey: "cannedDrinks" as const, learnMorePath: "/services/ready-to-drink", learnMoreLabel: "Learn more about ready-to-drink", learnMoreLabelFr: "En savoir plus sur le prêt-à-boire" },
  { theme: "dark" as const, imageFirst: true, image: capsulePng, sectionKey: "coffeePods" as const, learnMorePath: "/services/nespresso-capsules", learnMoreLabel: "Learn more about Nespresso capsules", learnMoreLabelFr: "En savoir plus sur les capsules Nespresso" },
];

const WhiteLabelSolutionsPage = () => {
  const t = useTranslations("whiteLabelPage");
  const tNav = useTranslations("nav");
  const tLanding = useTranslations("landing.heroPhoto");
  const locale = useLocale();
  const isFr = locale === "fr";
  const reduceMotion = useReducedMotion();
  const motionOff = !!reduceMotion;

  const scrollToHeroCopy = useCallback(() => {
    document.getElementById("hero-copy")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const [openItem, setOpenItem] = useState<number | null>(null);

  const heroHintMotion = getHeroHintFade(motionOff);
  const { staggerParent, fadeChild } = getStaggerReveal(motionOff);
  const sectionFade = getSectionFadeInView(motionOff);
  const sectionVariantInView = getSectionVariantInView(motionOff);
  const splitSectionStagger = getNestedSectionListStagger(motionOff);

  const splitMediaClassName = (sectionKey: (typeof SPLIT_SECTIONS)[number]["sectionKey"]) =>
    classNames(
      styles.whiteLabelSplitMedia,
      (sectionKey === "cannedDrinks" || sectionKey === "coffeePods") && styles.whiteLabelSplitMedia_padLeftMobile,
    );

  return (
    <div className={classNames(styles.landing, styles.whiteLabelSolutions)}>
      <section className={styles.heroPhoto} aria-label={tLanding("ariaLabel")}>
        <Image
          src={banner02}
          alt="Custom white label coffee bags, cans, and Nespresso capsules for Canadian brands"
          fill
          priority
          placeholder="blur"
          quality={80}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          className={classNames(styles.heroPhotoImage, styles.heroPhotoImageCenter)}
        />
        <div className={styles.heroGradient} />
        <div className={styles.heroOverlay}>
          <h1 className={styles.heroOverlayTitle}>
            {isFr ? (
              <>Votre marque.<br />Notre café.<br />Zéro complication.</>
            ) : (
              <>Your brand.<br />Our coffee.<br />Zero complications.</>
            )}
          </h1>
          <p className={styles.heroOverlaySubtitle}>
            {isFr
              ? "Nous aidons les restaurants, hôtels, détaillants et marques partout au Canada à vendre leurs propres produits café entièrement personnalisés : sacs, boissons prêtes à boire et capsules Nespresso."
              : "We help restaurants, hotels, retailers, and brands across Canada sell their own fully custom coffee products, bags, ready-to-drink, and Nespresso capsules."}
          </p>
          <Link href={`/${locale}/contact`} className={styles.heroOverlayBtn}>
            {isFr ? "Obtenir un devis" : "Get a quote"}
          </Link>
        </div>
        <motion.div className={styles.heroPhotoInner} {...heroHintMotion}>
          <button
            type="button"
            className={styles.heroScrollHint}
            onClick={scrollToHeroCopy}
            aria-label={tLanding("scrollHint")}
          >
            <span className={styles.heroScrollLabel} aria-hidden>
              {tLanding("scroll")}
            </span>
            <CaretDoubleDownIcon
              className={styles.heroScrollDoubleCaret}
              weight="bold"
              size={22}
              aria-hidden
            />
          </button>
        </motion.div>
      </section>

      <div className={styles.wlUrgency}>
        <div className={styles.wlUrgencyInner}>
          <p className={styles.wlUrgencyText}>
            {isFr
              ? "⚡ Nous acceptons actuellement de nouveaux partenaires marque blanche. Places d'intégration limitées, contactez-nous pour réserver la vôtre."
              : "⚡ Currently accepting new white label partners. Limited onboarding spots available, contact us to reserve yours."}
          </p>
          <Link href={`/${locale}/contact?subject=White Label Inquiry`} className={styles.wlUrgencyBtn}>
            {isFr ? "Réserver votre place" : "Reserve your spot"}
          </Link>
        </div>
      </div>

      {/* ── What We Handle accordion ──────────────────────────── */}
      <section className={styles.wlAccordion}>
        <div className={styles.wlAccordionInner}>
          <span className={styles.wlForEyebrow}>{isFr ? "02.5_ Ce que nous prenons en charge" : "02.5_ What We Handle"}</span>
          <h2 className={styles.wlAccordionHeadline}>
            {isFr ? (
              <>Laissez-nous être votre<br /><span className={styles.wlAccordionHeadlineAccent}>tout.</span></>
            ) : (
              <>Let us be your<br /><span className={styles.wlAccordionHeadlineAccent}>everything.</span></>
            )}
          </h2>
          <p className={styles.wlAccordionSubtext}>
            {isFr
              ? "Oubliez la torréfaction. Oubliez les designers. Oubliez les maux de tête logistiques. Nous gérons tout pour que vous puissiez vous concentrer sur la vente de votre marque."
              : "Skip the roastery. Skip the designers. Skip the logistics headache. We handle it all so you can focus on selling your brand."}
          </p>
          <div className={styles.wlAccordionGrid}>
            {ACCORDION_ITEMS.map((item, i) => (
              <div key={item.title} className={styles.wlAccordionItem}>
                <button
                  type="button"
                  className={styles.wlAccordionBtn}
                  onClick={() => setOpenItem(openItem === i ? null : i)}
                  aria-expanded={openItem === i}
                >
                  <span className={styles.wlAccordionIcon} aria-hidden>
                    {openItem === i ? "−" : "+"}
                  </span>
                  <span className={styles.wlAccordionTitle}>{isFr ? item.titleFr : item.title}</span>
                </button>
                {openItem === i && (
                  <p className={styles.wlAccordionBody}>{isFr ? item.bodyFr : item.body}</p>
                )}
              </div>
            ))}
          </div>
          <p className={styles.wlAccordionFooter}>
            {isFr ? "Vous apportez la marque. Nous apportons le reste." : "You bring the brand. We bring the rest."}
          </p>
        </div>
      </section>

      <section className={styles.wlForSection}>
        <div className={styles.wlForInner}>
          <span className={styles.wlForEyebrow}>{isFr ? "Pour qui est-ce ?" : "Who is this for?"}</span>
          <div className={styles.wlForGrid}>
            {(isFr
              ? [
                  { emoji: "🍽️", title: "Restaurants et cafés", body: "Offrez à vos clients une expérience café de marque dont ils se souviendront et pour laquelle ils reviendront.", href: `/${locale}/white-label/restaurants` },
                  { emoji: "🏨", title: "Hôtels et hôtellerie", body: "Élevez l'expérience de vos clients avec un produit café personnalisé qui porte votre marque dans chaque chambre et restaurant.", href: `/${locale}/white-label/hotels` },
                  { emoji: "🛍️", title: "Détaillants et boutiques", body: "Ajoutez un produit à marque privée à haute marge à vos tablettes sans aucun problème de production.", href: `/${locale}/white-label/retailers` },
                  { emoji: "⭐", title: "Célébrités et influenceurs", body: "Transformez votre audience en clients avec une marque de café signature aussi reconnaissable que vous.", href: `/${locale}/white-label/influencers` },
                ]
              : [
                  { emoji: "🍽️", title: "Restaurants & Cafés", body: "Offer your customers a branded coffee experience they'll remember and come back for.", href: `/${locale}/white-label/restaurants` },
                  { emoji: "🏨", title: "Hotels & Hospitality", body: "Elevate your guest experience with a custom coffee product that carries your brand in every room and restaurant.", href: `/${locale}/white-label/hotels` },
                  { emoji: "🛍️", title: "Retailers & Boutiques", body: "Add a high-margin, private label product to your shelves with zero production headaches.", href: `/${locale}/white-label/retailers` },
                  { emoji: "⭐", title: "Celebrities & Influencers", body: "Turn your audience into customers with a signature coffee brand that's as recognizable as you are.", href: `/${locale}/white-label/influencers` },
                ]
            ).map((card) => (
              <Link key={card.title} href={card.href} className={styles.wlForCard}>
                <span className={styles.wlForEmoji}>{card.emoji}</span>
                <h3 className={styles.wlForCardTitle}>{card.title}</h3>
                <p className={styles.wlForCardBody}>{card.body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div id="hero-copy" />

      {SPLIT_SECTIONS.map(({ theme, imageFirst, image, sectionKey, learnMorePath, learnMoreLabel, learnMoreLabelFr }) => {
        const hasNoMOQ = sectionKey === "coffeeBags";
        const hasExtra = sectionKey === "coffeeBags" || sectionKey === "coffeePods";

        const copyBlock = (
          <motion.div className={styles.whiteLabelSplitCopy} {...fadeChild}>
            {hasNoMOQ && (
              <p className={styles.whiteLabelNoMOQ}>{t(`sections.${sectionKey}.noMOQ`)}</p>
            )}
            <h2 id={`wlp-${sectionKey}`} className={styles.heroTitle}>
              {t(`sections.${sectionKey}.title`)}
            </h2>
            <p className={styles.whiteLabelSplitBody}>{t(`sections.${sectionKey}.body`)}</p>
            {hasExtra && (
              <p className={styles.whiteLabelSplitExtra}>{t(`sections.${sectionKey}.extra`)}</p>
            )}
            <Link href={`/${locale}/contact`} className={styles.whiteLabelSplitCta}>
              {isFr ? "Obtenir un devis" : "Get a quote"}
            </Link>
            <Link href={`/${locale}${learnMorePath}`} className={styles.whiteLabelSecondaryLink} style={{ display: "inline-block", marginTop: "var(--spacing-state)" }}>
              {isFr ? learnMoreLabelFr : learnMoreLabel} →
            </Link>
          </motion.div>
        );

        const imageBlock = (
          <motion.div className={splitMediaClassName(sectionKey)} {...fadeChild}>
            <Image
              src={image}
              alt={t(`sections.${sectionKey}.imageAlt`)}
              width={image.width}
              height={image.height}
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 420px"
              placeholder="blur"
              className={styles.whiteLabelSplitImage}
            />
          </motion.div>
        );

        return (
          <motion.section
            key={sectionKey}
            className={classNames(
              styles.whiteLabelSplitSection,
              theme === "dark" ? styles.whiteLabelSplitSection_dark : styles.whiteLabelSplitSection_light,
            )}
            aria-labelledby={`wlp-${sectionKey}`}
            {...sectionVariantInView}
          >
            <motion.div className={styles.whiteLabelSplitInner} {...splitSectionStagger}>
              {imageFirst ? <>{imageBlock}{copyBlock}</> : <>{copyBlock}{imageBlock}</>}
            </motion.div>
          </motion.section>
        );
      })}

      {/* ── How it works ──────────────────────────────────────── */}
      <section className={styles.wlHowItWorks}>
        <div className={styles.wlHowInner}>
          <span className={styles.wlForEyebrow}>{isFr ? "Comment ça fonctionne" : "How it works"}</span>
          <div className={styles.wlHowGrid}>
            {(isFr
              ? [
                  { n: "01", title: "Parlez-nous de votre marque", body: "Nous apprenons à connaître votre entreprise, votre audience et vos objectifs." },
                  { n: "02", title: "Choisissez votre produit", body: "Sacs, boissons prêtes à boire ou capsules, nous vous aidons à choisir le bon format." },
                  { n: "03", title: "Nous concevons et produisons", body: "Notre équipe gère tout, de la conception à la torréfaction jusqu'à l'emballage." },
                  { n: "04", title: "Vous vendez et grandissez", body: "Recevez votre produit de marque prêt à vendre, avec un soutien à la distribution disponible." },
                ]
              : [
                  { n: "01", title: "Tell us about your brand", body: "We learn about your business, your audience, and your goals." },
                  { n: "02", title: "Choose your product", body: "Bags, ready-to-drink, or capsules, we help you pick the right format." },
                  { n: "03", title: "We design & produce", body: "Our team handles everything from design to roasting to packaging." },
                  { n: "04", title: "You sell & grow", body: "Receive your branded product ready to sell, with distribution support available." },
                ]
            ).map((step, i, arr) => (
              <div key={step.n} className={styles.wlHowStep}>
                <span className={styles.wlHowNumber}>{step.n}</span>
                <h3 className={styles.wlHowTitle}>{step.title}</h3>
                <p className={styles.wlHowBody}>{step.body}</p>
                {i < arr.length - 1
                  ? <span className={styles.wlHowArrow} aria-hidden>→</span>
                  : <Coffee size={16} weight="bold" className={styles.wlHowArrow} aria-hidden />
                }
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ──────────────────────────────────────── */}
      <section className={styles.wlTestimonials}>
        <div className={styles.wlTestimonialsInner}>
          <span className={styles.wlForEyebrow}>{isFr ? "Ce que disent nos clients" : "What our clients say"}</span>
          <div className={styles.wlTestimonialsGrid}>
            {(isFr
              ? [
                  { quote: "EZPZ a tout géré, de la conception à la livraison. Nous avons lancé notre marque de café pour hôtel en moins de 3 semaines.", name: "Philippe M.", role: "Directeur d'hôtel" },
                  { quote: "Nous avons ajouté du café de marque à notre boutique et c'est devenu notre produit le plus vendu en moins d'un mois.", name: "Sarah L.", role: "Propriétaire de boutique" },
                  { quote: "Le processus était incroyablement fluide. Le zéro minimum nous a permis de tester avant de monter en volume.", name: "Marc T.", role: "Gérant de restaurant" },
                ]
              : [
                  { quote: "EZPZ handled everything from design to delivery. We launched our hotel coffee brand in under 3 weeks.", name: "Philippe M.", role: "Hotel Director" },
                  { quote: "We added branded coffee to our boutique and it became our top-selling product within a month.", name: "Sarah L.", role: "Boutique Owner" },
                  { quote: "The process was incredibly smooth. Zero minimums meant we could test before scaling up.", name: "Marc T.", role: "Restaurant Manager" },
                ]
            ).map((testimonial) => (
              <div key={testimonial.name} className={styles.wlTestimonialCard}>
                <div className={styles.wlTestimonialStars}>{"★★★★★"}</div>
                <p className={styles.wlTestimonialQuote}>&ldquo;{testimonial.quote}&rdquo;</p>
                <div className={styles.wlTestimonialAuthor}>
                  <span className={styles.wlTestimonialName}>{testimonial.name}</span>
                  <span className={styles.wlTestimonialRole}>{testimonial.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.whiteLabelFinalCta}>
        <motion.div className={styles.whiteLabelFinalCtaInner} {...sectionFade}>
          <h2 className={styles.whiteLabelFinalCtaTitle}>
            {isFr ? "Prêt à mettre votre marque sur le café ?" : "Ready to put your brand on coffee?"}
          </h2>
          <p className={styles.whiteLabelFinalCtaSubtext}>
            {isFr
              ? "Rejoignez des centaines d'entreprises canadiennes qui font confiance à EZPZ pour donner vie à leur marque de café."
              : "Join hundreds of Canadian businesses who trust EZPZ to bring their coffee brand to life."}
          </p>
          <div className={styles.whiteLabelFinalCtaButtons}>
            <Link href={`/${locale}/contact`} className={styles.whiteLabelFinalCtaPrimary}>
              {isFr ? "Obtenir un devis" : "Get a quote"}
            </Link>
            <Link href={`/${locale}/compare`} className={styles.whiteLabelFinalCtaSecondary}>
              {isFr ? "Voir comment on se compare →" : "See how we compare →"}
            </Link>
          </div>
          <p style={{ marginTop: "1.5rem", fontSize: "0.85rem", color: "rgba(255,255,255,0.6)" }}>
            {isFr ? "Vous vendez du café en ligne ?" : "Selling coffee online?"}{" "}
            <Link href={`/${locale}/coffee-dropshipping-canada`} style={{ color: "rgba(255,255,255,0.9)", textDecoration: "underline", textUnderlineOffset: "3px" }}>
              {isFr ? "Voir notre service de dropshipping café →" : "See our coffee dropshipping service →"}
            </Link>
          </p>
          <p style={{ marginTop: "0.75rem", fontSize: "0.85rem", color: "rgba(255,255,255,0.6)" }}>
            {isFr ? "Vous cherchez quelque chose d'instantané ?" : "Looking for something instant?"}{" "}
            <Link href={`/${locale}/instant-coffee`} style={{ color: "rgba(255,255,255,0.9)", textDecoration: "underline", textUnderlineOffset: "3px" }}>
              {isFr ? "Explorer notre café instantané lyophilisé →" : "Explore our freeze-dried instant coffee →"}
            </Link>
          </p>
          <p style={{ marginTop: "0.75rem", fontSize: "0.85rem", color: "rgba(255,255,255,0.6)" }}>
            {isFr ? "Vous comparez des fournisseurs de marque privée ?" : "Comparing private label suppliers?"}{" "}
            <Link href={`/${locale}/compare/private-label-coffee-suppliers-canada`} style={{ color: "rgba(255,255,255,0.9)", textDecoration: "underline", textUnderlineOffset: "3px" }}>
              {isFr ? "Voir notre comparaison honnête de fournisseurs →" : "See our honest supplier comparison →"}
            </Link>
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default WhiteLabelSolutionsPage;
