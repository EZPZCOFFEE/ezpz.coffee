"use client";

import { GlobeHemisphereEastIcon } from "@phosphor-icons/react";
import { CaretDoubleDownIcon } from "@phosphor-icons/react/dist/ssr";
import classNames from "classnames";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useCallback } from "react";

import bagPng from "@/public/assets/bag.png";
import banner02 from "@/public/assets/banner-02.jpg";
import canShadowPng from "@/public/assets/can-shadow.png";
import capsulePng from "@/public/assets/capsule.png";

import styles from "./homeLanding.module.scss";

const LANDING_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const SPLIT_SECTIONS = [
  { theme: "dark" as const, imageFirst: true, image: bagPng, sectionKey: "coffeeBags" as const },
  { theme: "light" as const, imageFirst: false, image: canShadowPng, sectionKey: "cannedDrinks" as const },
  { theme: "dark" as const, imageFirst: true, image: capsulePng, sectionKey: "coffeePods" as const },
];

const WhiteLabelSolutionsPage = () => {
  const t = useTranslations("whiteLabelPage");
  const tLanding = useTranslations("landing.heroPhoto");
  const reduceMotion = useReducedMotion();
  const motionOff = !!reduceMotion;

  const scrollToHeroCopy = useCallback(() => {
    document.getElementById("hero-copy")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const heroHintMotion = motionOff
    ? {}
    : {
        initial: { opacity: 0, y: 14 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.75, delay: 0.45, ease: LANDING_EASE },
      };

  const staggerParent = {
    initial: "hidden" as const,
    whileInView: "visible" as const,
    viewport: { once: true, amount: 0.18 },
    variants: {
      hidden: {},
      visible: {
        transition: motionOff
          ? { staggerChildren: 0, delayChildren: 0 }
          : { staggerChildren: 0.11, delayChildren: 0.06 },
      },
    },
  };

  const fadeUpChild = {
    variants: {
      hidden: motionOff ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: motionOff ? 0 : 0.52, ease: LANDING_EASE },
      },
    },
  };

  const sectionFade = motionOff
    ? {}
    : {
        initial: { opacity: 0, y: 28 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-48px 0px", amount: 0.12 },
        transition: { duration: 0.65, ease: LANDING_EASE },
      };

  const splitCopy = (sectionKey: (typeof SPLIT_SECTIONS)[number]["sectionKey"]) => (
    <div className={styles.whiteLabelSplitCopy}>
      <h2 id={`wlp-${sectionKey}`} className={styles.heroTitle}>
        {t(`sections.${sectionKey}.title`)}
      </h2>
      <p className={styles.whiteLabelSplitBody}>{t(`sections.${sectionKey}.body`)}</p>
    </div>
  );

  const splitMedia = (sectionKey: (typeof SPLIT_SECTIONS)[number]["sectionKey"], image: typeof bagPng) => (
    <div
      className={classNames(
        styles.whiteLabelSplitMedia,
        (sectionKey === "cannedDrinks" || sectionKey === "coffeePods") && styles.whiteLabelSplitMedia_padLeftMobile,
      )}
    >
      <Image
        src={image}
        alt={t(`sections.${sectionKey}.imageAlt`)}
        width={image.width}
        height={image.height}
        sizes="(max-width: 768px) 100vw, 420px"
        placeholder="blur"
        className={styles.whiteLabelSplitImage}
      />
    </div>
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
          quality={100}
          sizes="100vw"
          className={classNames(styles.heroPhotoImage, styles.heroPhotoImageCenter)}
        />
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

      <section id="hero-copy" className={styles.heroCopy} aria-labelledby="white-label-page-heading">
        <motion.div className={styles.sectionInnerNarrow} {...staggerParent}>
          <motion.h1 id="white-label-page-heading" className={styles.heroTitle} {...fadeUpChild}>
            {t("hero.titleLine1")}
            <br />
            {t("hero.titleLine2")}
          </motion.h1>
          <motion.p className={styles.heroSubtitle} {...fadeUpChild}>
            {t("hero.subtitle")}
          </motion.p>
          <motion.div {...fadeUpChild} className={styles.whiteLabelGlobeMotion}>
            <GlobeHemisphereEastIcon className={styles.whiteLabelBannerGlobe} weight="regular" aria-hidden />
          </motion.div>
        </motion.div>
      </section>

      {SPLIT_SECTIONS.map(({ theme, imageFirst, image, sectionKey }) => (
        <motion.section
          key={sectionKey}
          className={classNames(
            styles.whiteLabelSplitSection,
            theme === "dark" ? styles.whiteLabelSplitSection_dark : styles.whiteLabelSplitSection_light,
          )}
          aria-labelledby={`wlp-${sectionKey}`}
          {...sectionFade}
        >
          <div className={styles.whiteLabelSplitInner}>
            {imageFirst ? (
              <>
                {splitMedia(sectionKey, image)}
                {splitCopy(sectionKey)}
              </>
            ) : (
              <>
                {splitCopy(sectionKey)}
                {splitMedia(sectionKey, image)}
              </>
            )}
          </div>
        </motion.section>
      ))}
    </div>
  );
};

export default WhiteLabelSolutionsPage;
