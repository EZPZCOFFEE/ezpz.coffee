"use client";

import { GlobeHemisphereEastIcon } from "@phosphor-icons/react";
import { CaretDoubleDownIcon } from "@phosphor-icons/react/dist/ssr";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { useCallback } from "react";

import { getHeroHintFade, getNestedSectionListStagger, getStaggerReveal } from "@/lib/motion/landingReveal";
import banner01 from "@/public/assets/banner-01.jpg";
import bannerBase from "@/public/assets/banner-base.jpg";
import iconAdvantage1 from "@/public/assets/icon-01.png";
import iconAdvantage2 from "@/public/assets/icon-02.png";
import iconAdvantage3 from "@/public/assets/icon-03.png";
import iconAdvantage4 from "@/public/assets/icon-04.png";

import styles from "./homeLanding.module.scss";

const WHITE_LABEL_BODY_KEYS = [
  "bodyLine1",
  "bodyLine2",
  "bodyLine3",
  "bodyLine4",
  "bodyLine5",
  "bodyLine6",
] as const;

const ADVANTAGE_ITEMS = [
  { key: "traceable" as const, icon: iconAdvantage1 },
  { key: "customize" as const, icon: iconAdvantage2 },
  { key: "production" as const, icon: iconAdvantage3 },
  { key: "distribution" as const, icon: iconAdvantage4 },
];

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
  const advantagesListStagger = getNestedSectionListStagger(motionOff);
  const trustedByListStagger = getNestedSectionListStagger(motionOff);
  const whiteLabelBodyStagger = getNestedSectionListStagger(motionOff);

  const scrollToAdvantages = useCallback(() => {
    document.getElementById("advantages")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <div className={styles.landing}>
      <section className={styles.heroPhoto} aria-label={t("heroPhoto.ariaLabel")}>
        <Image
          src={banner01}
          alt="Custom branded coffee bags with no minimum order in Canada"
          fill
          priority
          placeholder="blur"
          quality={80}
          sizes="100vw"
          className={styles.heroPhotoImage}
        />
        <div className={styles.heroGradient} aria-hidden />

        <motion.div className={styles.heroOverlay} {...staggerParent}>
          <motion.h1 className={styles.heroOverlayTitle} {...fadeChild}>
            {t("hero.headline")}
          </motion.h1>
          <motion.p className={styles.heroOverlaySubtitle} {...fadeChild}>
            {t("hero.subtitle")}
          </motion.p>
          <motion.div {...fadeChild}>
            <Link href={designHref} className={styles.heroOverlayBtn}>
              {t("hero.designCta")}
            </Link>
          </motion.div>
        </motion.div>

        <motion.div className={styles.heroPhotoInner} {...heroHintMotion}>
          <button
            type="button"
            className={styles.heroScrollHint}
            onClick={scrollToAdvantages}
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

      <section className={styles.advantages} id="advantages" aria-labelledby="advantages-heading">
        <motion.div className={styles.advantagesInner} {...staggerParent}>
          <motion.h2 id="advantages-heading" className={styles.advantagesTitle} {...fadeChild}>
            {t("advantages.title")}
          </motion.h2>
          <motion.div className={styles.advantagesGrid} {...advantagesListStagger}>
            {ADVANTAGE_ITEMS.map(({ key, icon }) => (
              <motion.article key={key} className={styles.advantagesCard} {...fadeChild}>
                <div className={styles.advantagesIconWrap}>
                  <Image
                    src={icon}
                    alt={t(`advantages.items.${key}.iconAlt`)}
                    width={160}
                    height={160}
                    sizes="80px"
                    className={styles.advantagesIcon}
                  />
                </div>
                <h3 className={styles.advantagesCardTitle}>{t(`advantages.items.${key}.title`)}</h3>
                <p className={styles.advantagesBody}>
                  {t.rich(`advantages.items.${key}.body`, {
                    orange: (chunks) => <span className={styles.advantagesHighlight}>{chunks}</span>,
                  })}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <section className={styles.whiteLabelBanner} id="white-label" aria-labelledby="white-label-heading">
        <motion.div className={styles.whiteLabelBannerInner} {...staggerParent}>
          <motion.h2 id="white-label-heading" className={styles.heroTitle} {...fadeChild}>
            {t("whiteLabel.titleLine1")}
            <br />
            {t("whiteLabel.titleLine2")}
          </motion.h2>
          <motion.div className={styles.whiteLabelBannerBody} {...whiteLabelBodyStagger}>
            {WHITE_LABEL_BODY_KEYS.map((key) => (
              <motion.p key={key} className={styles.heroSubtitle} {...fadeChild}>
                {t(`whiteLabel.${key}`)}
              </motion.p>
            ))}
          </motion.div>
          <motion.div {...fadeChild} className={styles.whiteLabelGlobeMotion}>
            <GlobeHemisphereEastIcon className={styles.whiteLabelBannerGlobe} weight="regular" aria-hidden />
          </motion.div>
          <motion.div {...fadeChild} className={styles.whiteLabelPhotoMotion}>
            <Image
              src={bannerBase}
              alt="White label coffee bags and Nespresso capsules for brands"
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

      <section className={styles.testimonials} aria-labelledby="testimonials-heading">
        <motion.div className={styles.advantagesInner} {...staggerParent}>
          <motion.h2 id="testimonials-heading" className={styles.advantagesTitle} {...fadeChild}>
            {t("testimonials.title")}
          </motion.h2>
          <motion.div className={styles.testimonialsGrid} {...getNestedSectionListStagger(motionOff)}>
            {(t.raw("testimonials.items") as Array<{ quote: string; author: string; role: string }>).map((item, i) => (
              <motion.blockquote key={i} className={styles.testimonialCard} {...fadeChild}>
                <div className={styles.testimonialAvatar} aria-hidden>
                  {item.author.charAt(0)}
                </div>
                <p className={styles.testimonialQuote}>&ldquo;{item.quote}&rdquo;</p>
                <footer className={styles.testimonialAuthor}>
                  <strong>{item.author}</strong>
                  <span>{item.role}</span>
                </footer>
              </motion.blockquote>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <section className={styles.howItWorks} aria-labelledby="how-it-works-heading">
        <motion.div className={styles.advantagesInner} {...staggerParent}>
          <motion.h2 id="how-it-works-heading" className={styles.advantagesTitle} {...fadeChild}>
            {t("howItWorks.title")}
          </motion.h2>
          <motion.div className={styles.howItWorksGrid} {...getNestedSectionListStagger(motionOff)}>
            {(t.raw("howItWorks.steps") as Array<{ number: string; title: string; body: string }>).map((step) => (
              <motion.div key={step.number} className={styles.howItWorksStep} {...fadeChild}>
                <span className={styles.howItWorksNumber}>{step.number}</span>
                <h3 className={styles.howItWorksTitle}>{step.title}</h3>
                <p className={styles.howItWorksBody}>{step.body}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <section className={styles.geo} aria-labelledby="geo-heading">
        <motion.div className={styles.sectionInnerNarrow} {...staggerParent}>
          <motion.h2 id="geo-heading" className={styles.advantagesTitle} {...fadeChild}>
            {t("geo.title")}
          </motion.h2>
          <motion.p className={styles.geoBody} {...fadeChild}>{t("geo.body")}</motion.p>
          <motion.p className={styles.geoCities} {...fadeChild}>{t("geo.cities")}</motion.p>
        </motion.div>
      </section>

      <section className={styles.blog} aria-labelledby="blog-heading">
        <motion.div className={styles.advantagesInner} {...staggerParent}>
          <motion.h2 id="blog-heading" className={styles.advantagesTitle} {...fadeChild}>
            {t("blog.title")}
          </motion.h2>
          <motion.div className={styles.blogGrid} {...getNestedSectionListStagger(motionOff)}>
            {(t.raw("blog.articles") as Array<{ slug: string; title: string; description: string; date: string }>).map((article) => (
              <motion.article key={article.slug} className={styles.blogCard} {...fadeChild}>
                <time className={styles.blogDate} dateTime={article.date}>
                  {new Date(article.date).toLocaleDateString("en-CA", { year: "numeric", month: "long", day: "numeric" })}
                </time>
                <h3 className={styles.blogTitle}>{article.title}</h3>
                <p className={styles.blogDescription}>{article.description}</p>
                <Link href={`/${locale}/blog/${article.slug}`} className={styles.blogReadMore}>
                  {t("blog.readMore")} →
                </Link>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <section className={styles.faqPreview} aria-labelledby="faq-preview-heading">
        <motion.div className={styles.faqPreviewInner} {...staggerParent}>
          <motion.h2 id="faq-preview-heading" className={styles.advantagesTitle} {...fadeChild}>
            {t("faqPreview.title")}
          </motion.h2>
          <motion.dl className={styles.faqList} {...getNestedSectionListStagger(motionOff)}>
            {(t.raw("faqPreview.items") as Array<{ question: string; answer: string }>).map((item, i) => (
              <motion.div key={i} className={styles.faqItem} {...fadeChild}>
                <dt className={styles.faqQuestion}>{item.question}</dt>
                <dd className={styles.faqAnswer}>{item.answer}</dd>
              </motion.div>
            ))}
          </motion.dl>
          <motion.div {...fadeChild} className={styles.landingMotionInline}>
            <Link href={`/${locale}/faq`} className={styles.btnOutline}>
              {t("faqPreview.seeAll")}
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <section className={styles.trustedBy} aria-labelledby="trusted-by-heading">
        <motion.div className={styles.advantagesInner} {...staggerParent}>
          <motion.h2 id="trusted-by-heading" className={styles.trustedByTitle} {...fadeChild}>
            {t("trustedBy.title")}
          </motion.h2>
          <motion.div className={styles.trustedByGrid} role="list" {...trustedByListStagger}>
            {TRUST_LOGOS.map(({ file, name }) => (
              <motion.div key={file} className={styles.trustedByLogoWrap} role="listitem" {...fadeChild}>
                <Image
                  src={`/logos/${file}.png`}
                  alt={t("trustedBy.logoAlt", { name })}
                  width={360}
                  height={140}
                  sizes="(max-width: 639px) 45vw, (max-width: 1023px) 33vw, 340px"
                  className={styles.trustedByLogo}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default HomeLanding;
