"use client";

import { GlobeHemisphereEastIcon } from "@phosphor-icons/react";
import { CaretDoubleDownIcon } from "@phosphor-icons/react/dist/ssr";
import classNames from "classnames";
import useEmblaCarousel from "embla-carousel-react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { useCallback, useEffect, useState } from "react";

import banner01 from "@/public/assets/banner-01.jpg";
import bannerBase from "@/public/assets/banner-base.jpg";

import styles from "./homeLanding.module.scss";

const WHITE_LABEL_BODY_KEYS = ["bodyLine1", "bodyLine2", "bodyLine3", "bodyLine4"] as const;

const CAROUSEL_PLACEHOLDER_SLIDES = 5;

const LandingFeaturedCarousel = () => {
  const t = useTranslations("landing");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    // Exact viewport center (same math as align: "center" but works reliably with slide spacing).
    align: (viewSize, snapSize) => (viewSize - snapSize) / 2,
    dragFree: false,
    slidesToScroll: 1,
    skipSnaps: false,
  });

  useEffect(() => {
    if (!emblaApi) return;
    const sync = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", sync);
    emblaApi.on("reInit", sync);
    sync();
    return () => {
      emblaApi.off("select", sync);
      emblaApi.off("reInit", sync);
    };
  }, [emblaApi]);

  return (
    <div
      className={styles.carouselEmblaRow}
      role="region"
      aria-label={t("carousel.sectionTitle")}
      aria-roledescription={t("carousel.roleDescription")}
    >
      <div className={styles.carouselEmblaViewport} ref={emblaRef}>
        <div className={styles.carouselEmblaContainer}>
          {Array.from({ length: CAROUSEL_PLACEHOLDER_SLIDES }, (_, i) => (
            <div
              key={i}
              className={classNames(styles.carouselEmblaSlide, {
                [styles.carouselEmblaSlideActive]: i === selectedIndex,
              })}
              role="group"
              aria-roledescription="slide"
              aria-label={t("carousel.placeholderName", { n: i + 1 })}
              aria-current={i === selectedIndex ? "true" : undefined}
            >
              <div className={styles.carouselEmblaSlideInner}>
                <span className={styles.carouselPlaceholder} aria-hidden />
                <span className={styles.carouselSlideLabel}>
                  {t("carousel.placeholderName", { n: i + 1 })}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const LANDING_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const HomeLanding = () => {
  const t = useTranslations("landing");
  const locale = useLocale();
  const reduceMotion = useReducedMotion();
  const motionOff = !!reduceMotion;

  const designHref = `/${locale}/design`;

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

  const sectionFade = motionOff
    ? {}
    : {
        initial: { opacity: 0, y: 28 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-48px 0px", amount: 0.12 },
        transition: { duration: 0.65, ease: LANDING_EASE },
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

  return (
    <div className={styles.landing}>
      <section className={styles.heroPhoto} aria-label={t("heroPhoto.ariaLabel")}>
        <Image
          src={banner01}
          alt=""
          fill
          priority
          placeholder="blur"
          quality={100}
          sizes="100vw"
          className={styles.heroPhotoImage}
        />
        <motion.div className={styles.heroPhotoInner} {...heroHintMotion}>
          <button
            type="button"
            className={styles.heroScrollHint}
            onClick={scrollToHeroCopy}
            aria-label={t("heroPhoto.scrollHint")}
          >
            <span className={styles.heroScrollLabel} aria-hidden>
              {t("heroPhoto.scroll")}
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

      <section id="hero-copy" className={styles.heroCopy} aria-labelledby="hero-copy-heading">
        <motion.div className={styles.sectionInnerNarrow} {...staggerParent}>
          <motion.h1 id="hero-copy-heading" className={styles.heroTitle} {...fadeUpChild}>
            {t("hero.titleLine1")}
            <br />
            {t("hero.titleLine2")}
          </motion.h1>
          <motion.p className={styles.heroSubtitle} {...fadeUpChild}>
            {t("hero.subtitle")}
          </motion.p>
          <motion.div {...fadeUpChild} className={styles.landingMotionInline}>
            <Link href={designHref} className={styles.btnOutline}>
              {t("hero.designCta")}
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <motion.section className={styles.carouselSection} {...sectionFade}>
        <LandingFeaturedCarousel />
      </motion.section>

      <section className={styles.whiteLabelBanner} id="white-label" aria-labelledby="white-label-heading">
        <motion.div className={styles.whiteLabelBannerInner} {...staggerParent}>
          <motion.h2 id="white-label-heading" className={styles.heroTitle} {...fadeUpChild}>
            {t("whiteLabel.titleLine1")}
            <br />
            {t("whiteLabel.titleLine2")}
          </motion.h2>
          <motion.div className={styles.whiteLabelBannerBody} {...fadeUpChild}>
            {WHITE_LABEL_BODY_KEYS.map((key) => (
              <p key={key} className={styles.heroSubtitle}>
                {t(`whiteLabel.${key}`)}
              </p>
            ))}
          </motion.div>
          <motion.div {...fadeUpChild} className={styles.whiteLabelGlobeMotion}>
            <GlobeHemisphereEastIcon className={styles.whiteLabelBannerGlobe} weight="regular" aria-hidden />
          </motion.div>
          <motion.div {...fadeUpChild} className={styles.whiteLabelPhotoMotion}>
            <Image
              src={bannerBase}
              alt=""
              width={bannerBase.width}
              height={bannerBase.height}
              placeholder="blur"
              quality={85}
              sizes="(max-width: 1100px) 100vw, 1100px"
              className={styles.whiteLabelBannerPhoto}
            />
          </motion.div>
          <motion.div {...fadeUpChild} className={styles.landingMotionInline}>
            <Link href={`/${locale}/white-label`} className={styles.btnOutline}>
              {t("whiteLabel.learnMore")}
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default HomeLanding;
