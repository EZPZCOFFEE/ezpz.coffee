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
          <motion.h1 id="white-label-page-heading" className={styles.heroTitle} {...fadeChild}>
            {t("hero.titleLine1")}
            <br />
            {t("hero.titleLine2")}
          </motion.h1>
          <motion.p className={styles.heroSubtitle} {...fadeChild}>
            {t("hero.subtitle")}
          </motion.p>
          <motion.div {...fadeChild} className={styles.whiteLabelGlobeMotion}>
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
          {...sectionVariantInView}
        >
          <motion.div className={styles.whiteLabelSplitInner} {...splitSectionStagger}>
            {imageFirst ? (
              <>
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
                <motion.div className={styles.whiteLabelSplitCopy} {...fadeChild}>
                  <h2 id={`wlp-${sectionKey}`} className={styles.heroTitle}>
                    {t(`sections.${sectionKey}.title`)}
                  </h2>
                  <p className={styles.whiteLabelSplitBody}>{t(`sections.${sectionKey}.body`)}</p>
                </motion.div>
              </>
            ) : (
              <>
                <motion.div className={styles.whiteLabelSplitCopy} {...fadeChild}>
                  <h2 id={`wlp-${sectionKey}`} className={styles.heroTitle}>
                    {t(`sections.${sectionKey}.title`)}
                  </h2>
                  <p className={styles.whiteLabelSplitBody}>{t(`sections.${sectionKey}.body`)}</p>
                </motion.div>
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
              </>
            )}
          </motion.div>
        </motion.section>
      ))}

      <section className={styles.whiteLabelContactCta} aria-label={tNav("contactUs")}>
        <motion.div className={styles.whiteLabelContactCtaInner} {...sectionFade}>
          <Link href={`/${locale}/contact`} className={styles.btnOutline}>
            {tNav("contactUs")}
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default WhiteLabelSolutionsPage;
