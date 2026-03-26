"use client";

import { Globe } from "@phosphor-icons/react";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { useCallback, useEffect, useState } from "react";

import styles from "./homeLanding.module.scss";

const CAROUSEL_PLACEHOLDER_COUNT = 5;

const HomeLanding = () => {
  const t = useTranslations("landing");
  const locale = useLocale();
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setActiveSlide((i) => (i + 1) % CAROUSEL_PLACEHOLDER_COUNT);
  }, []);

  const prevSlide = useCallback(() => {
    setActiveSlide((i) => (i - 1 + CAROUSEL_PLACEHOLDER_COUNT) % CAROUSEL_PLACEHOLDER_COUNT);
  }, []);

  useEffect(() => {
    const id = window.setInterval(nextSlide, 5000);
    return () => window.clearInterval(id);
  }, [nextSlide]);

  const designHref = `/${locale}/design`;
  const shopHref = `/${locale}/shop`;

  return (
    <div className={styles.landing}>
      <section className={styles.heroPhoto} aria-labelledby="hero-photo-heading">
        <div className={styles.heroPhotoInner}>
          <p id="hero-photo-heading" className={styles.visuallyHidden}>
            {t("heroPhoto.ariaLabel")}
          </p>
          <Link href={designHref} className={styles.heroPhotoCta}>
            {t("heroPhoto.cta")}
          </Link>
        </div>
      </section>

      <section className={styles.heroCopy} aria-labelledby="hero-copy-heading">
        <div className={styles.sectionInnerNarrow}>
          <h1 id="hero-copy-heading" className={styles.heroTitle}>
            {t("hero.titleLine1")}
            <br />
            {t("hero.titleLine2")}
          </h1>
          <p className={styles.heroSubtitle}>{t("hero.subtitle")}</p>
          <Link href={designHref} className={styles.btnOutline}>
            {t("hero.designCta")}
          </Link>
        </div>
      </section>

      <section className={styles.midCta} aria-labelledby="mid-cta-heading">
        <div className={styles.sectionInnerNarrow}>
          <h2 id="mid-cta-heading" className={styles.midCtaTitle}>
            {t("midCta.title")}
          </h2>
          <p className={styles.midCtaText}>{t("midCta.body")}</p>
          <Link href={shopHref} className={styles.btnSolid}>
            {t("midCta.button")}
          </Link>
        </div>
      </section>

      <section className={styles.carouselSection} aria-labelledby="carousel-heading">
        <div className={styles.sectionInnerWide}>
          <h2 id="carousel-heading" className={styles.carouselSectionTitle}>
            {t("carousel.sectionTitle")}
          </h2>
          <div className={styles.carousel}>
            <button
              type="button"
              className={styles.carouselNav}
              aria-label={t("carousel.prev")}
              onClick={prevSlide}
            >
              ‹
            </button>
            <div className={styles.carouselTrack} role="list">
              {Array.from({ length: CAROUSEL_PLACEHOLDER_COUNT }, (_, i) => {
                const offset = i - activeSlide;
                const isActive = i === activeSlide;
                return (
                  <button
                    key={i}
                    type="button"
                    role="listitem"
                    className={classNames(styles.carouselCard, {
                      [styles.carouselCardActive]: isActive,
                      [styles.carouselCardSide]: !isActive && Math.abs(offset) === 1,
                      [styles.carouselCardFar]: !isActive && Math.abs(offset) > 1,
                    })}
                    onClick={() => setActiveSlide(i)}
                    aria-current={isActive ? "true" : undefined}
                    aria-label={t("carousel.selectItem", { name: t("carousel.placeholderName", { n: i + 1 }) })}
                  >
                    <span className={styles.carouselPlaceholder} aria-hidden />
                  </button>
                );
              })}
            </div>
            <button
              type="button"
              className={styles.carouselNav}
              aria-label={t("carousel.next")}
              onClick={nextSlide}
            >
              ›
            </button>
          </div>
          <p className={styles.carouselCaption} aria-live="polite">
            {t("carousel.placeholderName", { n: activeSlide + 1 })}
          </p>
        </div>
      </section>

      <section className={styles.whiteLabel} id="white-label" aria-labelledby="white-label-heading">
        <div className={styles.sectionInnerNarrow}>
          <h2 id="white-label-heading" className={styles.whiteLabelTitle}>
            {t("whiteLabel.title")}
          </h2>
          <p className={styles.whiteLabelBody}>{t("whiteLabel.body")}</p>
          <Globe className={styles.whiteLabelIcon} weight="regular" aria-hidden />
          <div className={styles.whiteLabelShowcase} role="presentation">
            {[0, 1, 2].map((i) => (
              <div key={i} className={styles.whiteLabelProduct}>
                <Image
                  src="/logo.svg"
                  alt=""
                  width={80}
                  height={64}
                  className={styles.whiteLabelProductLogo}
                />
                <span className={styles.whiteLabelProductLabel}>{t("whiteLabel.productPlaceholder")}</span>
              </div>
            ))}
          </div>
          <Link href={`/${locale}/about`} className={styles.btnOutline}>
            {t("whiteLabel.learnMore")}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomeLanding;
