"use client";

import { GlobeHemisphereEastIcon } from "@phosphor-icons/react";
import { CaretDoubleDownIcon } from "@phosphor-icons/react/dist/ssr";
import classNames from "classnames";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { useCallback } from "react";

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

const SPLIT_SECTIONS = [
  { theme: "dark" as const, imageFirst: true, image: bagPng, sectionKey: "coffeeBags" as const },
  { theme: "light" as const, imageFirst: false, image: canShadowPng, sectionKey: "cannedDrinks" as const },
  { theme: "dark" as const, imageFirst: true, image: capsulePng, sectionKey: "coffeePods" as const },
];

const WhiteLabelSolutionsPage = () => {
  const t = useTranslations("whiteLabelPage");
  const tNav = useTranslations("nav");
  const tLanding = useTranslations("landing.heroPhoto");
  const locale = useLocale();
  const reduceMotion = useReducedMotion();
  const motionOff = !!reduceMotion;

  const scrollToHeroCopy = useCallback(() => {
    document.getElementById("hero-copy")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

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
          alt=""
          fill
          priority
          placeholder="blur"
          quality={80}
          sizes="100vw"
          className={classNames(styles.heroPhotoImage, styles.heroPhotoImageCenter)}
        />
        <div className={styles.heroGradient} />
        <div className={styles.heroOverlay}>
          <h1 className={styles.heroOverlayTitle}>
            Your brand.<br />Our coffee.<br />Zero complications.
          </h1>
          <p className={styles.heroOverlaySubtitle}>
            We help restaurants, hotels, retailers, and brands across Canada sell their own fully
            custom coffee products, bags, ready-to-drink, and Nespresso capsules.
          </p>
          <Link href={`/${locale}/contact`} className={styles.heroOverlayBtn}>
            Get a quote
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

      <section className={styles.wlForSection}>
        <div className={styles.wlForInner}>
          <span className={styles.wlForEyebrow}>Who is this for?</span>
          <div className={styles.wlForGrid}>
            {[
              { emoji: "🍽️", title: "Restaurants & Cafés", body: "Offer your customers a branded coffee experience they'll remember and come back for." },
              { emoji: "🏨", title: "Hotels & Hospitality", body: "Elevate your guest experience with a custom coffee product that carries your brand in every room and restaurant." },
              { emoji: "🛍️", title: "Retailers & Boutiques", body: "Add a high-margin, private label product to your shelves with zero production headaches." },
              { emoji: "💪", title: "Gyms & Wellness Brands", body: "Fuel your community with a branded coffee or ready-to-drink product that fits your lifestyle brand." },
            ].map((card) => (
              <div key={card.title} className={styles.wlForCard}>
                <span className={styles.wlForEmoji}>{card.emoji}</span>
                <h3 className={styles.wlForCardTitle}>{card.title}</h3>
                <p className={styles.wlForCardBody}>{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div id="hero-copy" />

      {SPLIT_SECTIONS.map(({ theme, imageFirst, image, sectionKey }) => {
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
              Get a quote
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
          <span className={styles.wlForEyebrow}>How it works</span>
          <div className={styles.wlHowGrid}>
            {[
              { n: "01", title: "Tell us about your brand", body: "We learn about your business, your audience, and your goals." },
              { n: "02", title: "Choose your product", body: "Bags, ready-to-drink, or capsules, we help you pick the right format." },
              { n: "03", title: "We design & produce", body: "Our team handles everything from design to roasting to packaging." },
              { n: "04", title: "You sell & grow", body: "Receive your branded product ready to sell, with distribution support available." },
            ].map((step, i, arr) => (
              <div key={step.n} className={styles.wlHowStep}>
                <span className={styles.wlHowNumber}>{step.n}</span>
                <h3 className={styles.wlHowTitle}>{step.title}</h3>
                <p className={styles.wlHowBody}>{step.body}</p>
                {i < arr.length - 1 && <span className={styles.wlHowArrow} aria-hidden>→</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ──────────────────────────────────────── */}
      <section className={styles.wlTestimonials}>
        <div className={styles.wlTestimonialsInner}>
          <span className={styles.wlForEyebrow}>What our clients say</span>
          <div className={styles.wlTestimonialsGrid}>
            {[
              { quote: "EZPZ handled everything from design to delivery. We launched our hotel coffee brand in under 3 weeks.", name: "Philippe M.", role: "Hotel Director" },
              { quote: "We added branded coffee to our boutique and it became our top-selling product within a month.", name: "Sarah L.", role: "Boutique Owner" },
              { quote: "The process was incredibly smooth. Zero minimums meant we could test before scaling up.", name: "Marc T.", role: "Restaurant Manager" },
            ].map((t) => (
              <div key={t.name} className={styles.wlTestimonialCard}>
                <div className={styles.wlTestimonialStars}>{"★★★★★"}</div>
                <p className={styles.wlTestimonialQuote}>&ldquo;{t.quote}&rdquo;</p>
                <div className={styles.wlTestimonialAuthor}>
                  <span className={styles.wlTestimonialName}>{t.name}</span>
                  <span className={styles.wlTestimonialRole}>{t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.whiteLabelFinalCta}>
        <motion.div className={styles.whiteLabelFinalCtaInner} {...sectionFade}>
          <h2 className={styles.whiteLabelFinalCtaTitle}>
            Ready to put your brand on coffee?
          </h2>
          <p className={styles.whiteLabelFinalCtaSubtext}>
            Join hundreds of Canadian businesses who trust EZPZ to bring their coffee brand to life.
          </p>
          <div className={styles.whiteLabelFinalCtaButtons}>
            <Link href={`/${locale}/contact`} className={styles.whiteLabelFinalCtaPrimary}>
              Get a quote
            </Link>
            <button
              type="button"
              className={styles.whiteLabelFinalCtaSecondary}
              onClick={() => document.getElementById("hero-copy")?.scrollIntoView({ behavior: "smooth", block: "start" })}
            >
              See how it works
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default WhiteLabelSolutionsPage;
