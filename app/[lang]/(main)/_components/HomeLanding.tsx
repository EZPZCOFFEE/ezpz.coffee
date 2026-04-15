"use client";

import { GlobeHemisphereEastIcon } from "@phosphor-icons/react";
import { CaretDoubleDownIcon } from "@phosphor-icons/react/dist/ssr";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { useCallback } from "react";

import { getHeroHintFade, getStaggerReveal } from "@/lib/motion/landingReveal";
import banner01 from "@/public/assets/banner-01.jpg";
import bannerBase from "@/public/assets/banner-base.jpg";

import styles from "./homeLanding.module.scss";

const WHITE_LABEL_BODY_KEYS = ["bodyLine1", "bodyLine2", "bodyLine3", "bodyLine4"] as const;

const TRUST_LOGOS = [
  { file: "avenue", name: "Avenue" },
  { file: "cowork", name: "Cowork" },
  { file: "fairmont", name: "Fairmont" },
  { file: "janine", name: "Janine" },
  { file: "regine", name: "Regine" },
  { file: "stephen", name: "Stephen" },
] as const;

/* Featured coffees carousel — restore when product imagery is ready.
 * Also re-add in HomeLanding: sectionFade (see git history), imports
 * (classNames, embla-carousel-react, useEffect, useState), and the
 * motion.section with LandingFeaturedCarousel below hero-copy.
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
*/

const HomeLanding = () => {
  const t = useTranslations("landing");
  const locale = useLocale();
  const reduceMotion = useReducedMotion();
  const motionOff = !!reduceMotion;

  const designHref = `/${locale}/design`;
  const heroHintMotion = getHeroHintFade(motionOff);
  const { staggerParent, fadeChild } = getStaggerReveal(motionOff);

  const scrollToHeroCopy = useCallback(() => {
    document.getElementById("hero-copy")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <div className={styles.landing}>
      <section className={styles.heroPhoto} aria-label={t("heroPhoto.ariaLabel")}>
        <Image
          src={banner01}
          alt=""
          fill
          priority
          placeholder="blur"
          quality={80}
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
          <motion.h1 id="hero-copy-heading" className={styles.heroTitle} {...fadeChild}>
            {t("hero.titleLine1")}
            <br />
            {t("hero.titleLine2")}
          </motion.h1>
          <motion.p className={styles.heroSubtitle} {...fadeChild}>
            {t("hero.subtitle")}
          </motion.p>
          <motion.div {...fadeChild} className={styles.landingMotionInline}>
            <Link href={designHref} className={styles.btnOutline}>
              {t("hero.designCta")}
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <section className={styles.trustedBy} aria-labelledby="trusted-by-heading">
        <motion.div className={styles.trustedByInner} {...staggerParent}>
          <motion.h2 id="trusted-by-heading" className={styles.heroTitle} {...fadeChild}>
            {t("trustedBy.title")}
          </motion.h2>
          <motion.div className={styles.trustedByGrid} role="list" {...fadeChild}>
            {TRUST_LOGOS.map(({ file, name }) => (
              <div key={file} className={styles.trustedByLogoWrap} role="listitem">
                <Image
                  src={`/logos/${file}.png`}
                  alt={t("trustedBy.logoAlt", { name })}
                  width={360}
                  height={140}
                  sizes="(max-width: 639px) 45vw, (max-width: 1023px) 33vw, 340px"
                  className={styles.trustedByLogo}
                />
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Featured coffees carousel — uncomment block above (LandingFeaturedCarousel), re-add sectionFade + imports (classNames, embla, useEffect, useState), then restore this section. */}

      <section className={styles.whiteLabelBanner} id="white-label" aria-labelledby="white-label-heading">
        <motion.div className={styles.whiteLabelBannerInner} {...staggerParent}>
          <motion.h2 id="white-label-heading" className={styles.heroTitle} {...fadeChild}>
            {t("whiteLabel.titleLine1")}
            <br />
            {t("whiteLabel.titleLine2")}
          </motion.h2>
          <motion.div className={styles.whiteLabelBannerBody} {...fadeChild}>
            {WHITE_LABEL_BODY_KEYS.map((key) => (
              <p key={key} className={styles.heroSubtitle}>
                {t(`whiteLabel.${key}`)}
              </p>
            ))}
          </motion.div>
          <motion.div {...fadeChild} className={styles.whiteLabelGlobeMotion}>
            <GlobeHemisphereEastIcon className={styles.whiteLabelBannerGlobe} weight="regular" aria-hidden />
          </motion.div>
          <motion.div {...fadeChild} className={styles.whiteLabelPhotoMotion}>
            <Image
              src={bannerBase}
              alt=""
              width={bannerBase.width}
              height={bannerBase.height}
              placeholder="blur"
              quality={75}
              sizes="(max-width: 1100px) 100vw, 1100px"
              loading="lazy"
              className={styles.whiteLabelBannerPhoto}
            />
          </motion.div>
          <motion.div {...fadeChild} className={styles.landingMotionInline}>
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
