"use client";

import { CaretDoubleDownIcon } from "@phosphor-icons/react/dist/ssr";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import React, { useCallback } from "react";

import { getHeroHintFade, getNestedSectionListStagger, getStaggerReveal } from "@/lib/motion/landingReveal";
import banner01 from "@/public/assets/banner-01.jpg";
import bannerBase from "@/public/assets/banner-base.jpg";

import { BLOG_POSTS } from "../blog/data";
import styles from "./homeLanding.module.scss";

const RECENT_POSTS = BLOG_POSTS.filter((p) => p.published).slice(0, 3);

const WHITE_LABEL_BODY_KEYS = [
  "bodyLine1",
  "bodyLine2",
  "bodyLine3",
  "bodyLine4",
  "bodyLine5",
  "bodyLine6",
] as const;

const ADVANTAGE_ITEMS = [
  { key: "traceable" as const, n: "01" },
  { key: "customize" as const, n: "02" },
  { key: "production" as const, n: "03" },
  { key: "distribution" as const, n: "04" },
];

const TRUST_LOGOS = [
  { file: "avenue", name: "L'Avenue", href: "https://www.restaurantlavenue.com" },
  { file: "cafepublic", name: "Café Public", href: "https://cafepublic.ca/" },
  { file: "cowork", name: "Cowork", href: "https://www.montrealcowork.com/fr-ca" },
  { file: "fairmont", name: "Fairmont Hotels & Resorts", href: "https://www.fairmont.com" },
  { file: "janine", name: "Janine", href: "https://www.janine.ca" },
  { file: "regine", name: "Régine Café-Brunch", href: "https://reginecafe.ca/fr/" },
  { file: "stephen", name: "Le Mount Stephen Hôtel", href: "https://www.hotelmountstephen.com" },
  { file: "tunnel", name: "Tunnel Espresso", href: "https://tunnelespressobar.ca" },
  { file: "osler-records", name: "Osler Records", href: "https://www.instagram.com/osler.records/" },
];

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
          loading="eager"
          placeholder="blur"
          quality={80}
          sizes="(max-width: 767px) 828px, (max-width: 1920px) 100vw, 1920px"
          className={styles.heroPhotoImage}
        />
        <div className={styles.heroGradient} aria-hidden />

        <motion.div className={styles.heroOverlay} {...staggerParent}>
          <motion.h1 className={styles.heroOverlayTitle} data-egg="hero-headline" {...fadeChild}>
            {t("hero.headline")}
          </motion.h1>
          <motion.p className={styles.heroOverlaySubtitle} {...fadeChild}>
            {t("hero.subtitle")}
          </motion.p>
          <motion.p className={styles.heroOverlaySubtitleKw} {...fadeChild}>
            {t("hero.subtitleKw")}
          </motion.p>
          <motion.div {...fadeChild} className={styles.heroOverlayBtnGroup}>
            <Link href={designHref} className={styles.heroOverlayBtn}>
              {t("hero.designCta")}
            </Link>
            <Link href={`/${locale}/contact?subject=Free Sample Request`} className={styles.heroSampleBtn}>
              Request a free sample
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

      {/* ── Stats Bar ── */}
      {/* TODO (owner): verify "500+ Brands served" reflects the current real client count before updating */}
      <div className={styles.statsBar} aria-label="Key statistics">
        <div className={styles.statsBarInner}>
          <div className={styles.statItem}>
            <span className={styles.statNum}>500+</span>
            <span className={styles.statLabel}>Brands served</span>
          </div>
          <div className={styles.statDivider} aria-hidden />
          <div className={styles.statItem}>
            <span className={styles.statNum}>100%</span>
            <span className={styles.statLabel}>Canadian roasted</span>
          </div>
          <div className={styles.statDivider} aria-hidden />
          <div className={styles.statItem}>
            <span className={styles.statNum}>2–3 wks</span>
            <span className={styles.statLabel}>Average turnaround</span>
          </div>
          <div className={styles.statDivider} aria-hidden />
          <div className={styles.statItem} data-egg="one-stat" style={{ cursor: "pointer" }}>
            <span className={styles.statNum}>0</span>
            <span className={styles.statLabel}>Minimum order</span>
          </div>
        </div>
      </div>

      <section className={styles.howItWorks} aria-labelledby="how-it-works-heading">
        <motion.div className={styles.advantagesInner} {...staggerParent}>
          <motion.h2 id="how-it-works-heading" className={styles.lightSectionTitle} {...fadeChild}>
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

      <section className={styles.whiteLabelBanner} id="white-label" aria-labelledby="white-label-heading">
        <motion.div className={styles.whiteLabelBannerInner} {...staggerParent}>
          <motion.h2 id="white-label-heading" className={styles.heroTitle} {...fadeChild}>
            {t("whiteLabel.titleLine1")}
            <br />
            {t("whiteLabel.titleLine2")}
          </motion.h2>
          <motion.p className={styles.wlSectionSubtext} {...fadeChild}>
            {t("whiteLabel.sectionSubtext")}
          </motion.p>
          <motion.div className={styles.whiteLabelBannerBody} {...whiteLabelBodyStagger}>
            {WHITE_LABEL_BODY_KEYS.map((key) => (
              <motion.p key={key} className={styles.heroSubtitle} {...fadeChild}>
                {t(`whiteLabel.${key}`)}
              </motion.p>
            ))}
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

      {/* ── Dropshipping section ── */}
      <section className={styles.dropshipping} aria-labelledby="dropshipping-heading">
        <motion.div className={styles.dropshippingInner} {...staggerParent}>
          <motion.span className={styles.dropshippingEyebrow} {...fadeChild}>Sell online, zero inventory</motion.span>
          <motion.h2 id="dropshipping-heading" className={styles.dropshippingTitle} {...fadeChild}>
            Dropshipping, done for you.
          </motion.h2>
          <motion.p className={styles.dropshippingBody} {...fadeChild}>
            Building an online coffee brand? We integrate with your Shopify store through Shopify Collective. When a customer orders, we roast, pack, and ship directly to them under your brand — you never touch inventory. Subscriptions work seamlessly too, perfect for recurring coffee delivery.
          </motion.p>
          <motion.ul className={styles.dropshippingFeatures} {...getNestedSectionListStagger(motionOff)}>
            <motion.li className={styles.dropshippingFeatureItem} {...fadeChild}>
              <span className={styles.dropshippingFeatureDot} aria-hidden />
              <span><strong>Automatic order flow</strong> — orders route to us, tracking returns to your store</span>
            </motion.li>
            <motion.li className={styles.dropshippingFeatureItem} {...fadeChild}>
              <span className={styles.dropshippingFeatureDot} aria-hidden />
              <span><strong>Zero inventory</strong> — we fulfill and ship under your brand</span>
            </motion.li>
            <motion.li className={styles.dropshippingFeatureItem} {...fadeChild}>
              <span className={styles.dropshippingFeatureDot} aria-hidden />
              <span><strong>Subscription-ready</strong> — recurring orders fulfilled automatically</span>
            </motion.li>
          </motion.ul>
          <motion.div {...fadeChild} className={styles.landingMotionInline}>
            <Link href={`/${locale}/coffee-dropshipping-canada`} className={styles.btnOutline}>
              Learn about dropshipping
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/*
        TODO (owner): Replace placeholder testimonials with real attributed quotes from actual clients
        before re-enabling this section. Real candidates: Café Public, Osler Records, Tunnel Espresso,
        L'Avenue, Fairmont. Each quote needs: exact text, author full name, business name, and ideally
        a photo or logo. Set SHOW_TESTIMONIALS = true below once real quotes are ready.

        The component structure below is ready to accept real data from the `testimonials.items`
        dictionary array — just update en.json with real quotes and flip the flag.
      */}
      {(false as boolean) && (
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
                <div className={styles.testimonialStars} aria-label="5 out of 5 stars">
                  {"★★★★★"}
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
      )}

      <section className={styles.advantages} id="advantages" aria-labelledby="advantages-heading">
        <motion.div className={styles.advantagesInner} {...staggerParent}>
          <motion.h2 id="advantages-heading" className={styles.advantagesTitle} {...fadeChild}>
            {t("advantages.title")}
          </motion.h2>
          <motion.div className={styles.advantagesGrid} {...advantagesListStagger}>
            {ADVANTAGE_ITEMS.map(({ key, n }) => (
              <motion.article key={key} className={styles.advantagesCard} {...fadeChild}>
                <span className={styles.advantagesNumber} aria-hidden>{n}</span>
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

      <section className={styles.geo} aria-labelledby="geo-heading">
        <motion.div className={styles.sectionInnerNarrow} {...staggerParent}>
          <motion.h2 id="geo-heading" className={styles.advantagesTitle} {...fadeChild}>
            {t("geo.title")}
          </motion.h2>
          <motion.p className={styles.geoBody} {...fadeChild}>{t("geo.body")}</motion.p>
          <motion.p className={styles.geoCities} {...fadeChild}>{t("geo.cities")}</motion.p>
        </motion.div>
      </section>

      <section className={styles.freeSample}>
        <motion.div className={styles.freeSampleInner} {...staggerParent}>
          <motion.h2 className={styles.freeSampleTitle} {...fadeChild}>
            Not sure yet? Try before you commit.
          </motion.h2>
          <motion.p className={styles.freeSampleBody} {...fadeChild}>
            We will send you a sample kit with our most popular coffee origins so you can taste the quality before placing your first order. No strings attached.
          </motion.p>
          <motion.div {...fadeChild}>
            <Link href={`/${locale}/contact?subject=Free Sample Request`} className={styles.freeSampleBtn}>
              Request a free sample
            </Link>
          </motion.div>
          <motion.p {...fadeChild} className={styles.freeSampleMeta}>
            Or <Link href={`/${locale}/blog`} className={styles.freeSampleMetaLink}>read our guides and tips</Link> on building a coffee brand.
          </motion.p>
          <motion.p {...fadeChild} className={styles.freeSampleMeta}>
            New: <Link href={`/${locale}/instant-coffee`} className={styles.freeSampleMetaLink}>freeze-dried instant coffee</Link> — specialty grade, custom branded.
          </motion.p>
          <motion.p {...fadeChild} className={styles.freeSampleMeta}>
            Looking for a <Link href={`/${locale}/canadian-coffee-roaster`} className={styles.freeSampleMetaLink}>Canadian coffee roaster for your brand</Link>? See what makes EZPZ different.
          </motion.p>
        </motion.div>
      </section>


      {/* ── Bag comparison ── */}
      <section className={styles.bagCompare} aria-labelledby="bag-compare-heading">
        <motion.div className={styles.bagCompareInner} {...staggerParent}>
          <motion.h2 id="bag-compare-heading" className={styles.bagCompareTitle} {...fadeChild}>
            Which bag option is right for you?
          </motion.h2>
          <motion.div className={styles.bagCompareTable} role="table" aria-label="Bag option comparison" {...fadeChild}>
            <div className={styles.bagCompareHead} role="row">
              <div className={styles.bagCompareColLabel} role="columnheader"></div>
              <div className={`${styles.bagCompareColHead} ${styles.bagCompareColHeadAccent}`} role="columnheader">
                EZPZ Bags + Custom Label
              </div>
              <div className={styles.bagCompareColHead} role="columnheader">
                Fully Custom Printed Bags
              </div>
            </div>
            {([
              { label: "Minimum order",  a: "Zero",                   b: "5,000 units (up to 5 designs)" },
              { label: "Size",           a: "225g",                   b: "Any size (250g, 340g, 454g, 1kg…)" },
              { label: "Branding",       a: "Your label on our bag",  b: "100% your design, no EZPZ mark" },
              { label: "Best for",       a: "Launching & testing",    b: "Scaling brands" },
              { label: "Turnaround",     a: "~5 business days",       b: "2–3 weeks" },
              {
                label: "Pricing",
                a: (
                  <span style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.18rem", width: "100%" }}>
                    <strong>From $11.75/bag</strong>
                    <span style={{ fontSize: "0.7rem", fontWeight: 400, opacity: 0.6 }}>at 100 bags, zero minimum</span>
                  </span>
                ),
                b: (
                  <span style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.18rem", width: "100%" }}>
                    <strong>From $0.85/bag</strong>
                    <span style={{ fontSize: "0.7rem", fontWeight: 400, opacity: 0.55 }}>5,000 unit minimum</span>
                  </span>
                ),
              },
            ] as Array<{ label: string; a: React.ReactNode; b: React.ReactNode }>).map(({ label, a, b }) => (
              <div key={label} className={styles.bagCompareRow} role="row">
                <div className={styles.bagCompareRowLabel} role="rowheader">{label}</div>
                <div className={`${styles.bagCompareCell} ${styles.bagCompareCellAccent}`} role="cell">{a}</div>
                <div className={styles.bagCompareCell} role="cell">{b}</div>
              </div>
            ))}

          </motion.div>
          <motion.div {...fadeChild} className={styles.landingMotionInline}>
            <Link href={`/${locale}/pricing`} className={styles.btnOutline}>
              See full pricing
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* ── Pricing teaser ── */}
      <section className={styles.pricingTeaser} aria-labelledby="pricing-teaser-heading">
        <motion.div className={styles.pricingTeaserInner} {...staggerParent}>
          <motion.h2 id="pricing-teaser-heading" className={styles.pricingTeaserTitle} {...fadeChild}>
            Transparent pricing, zero surprises.
          </motion.h2>
          <motion.p className={styles.pricingTeaserBody} {...fadeChild}>
            Custom-label bags with zero minimum — design always included, no setup fees. Dropshipping from $15/bag with no inventory.
          </motion.p>
          <motion.div {...fadeChild} className={styles.pricingTeaserActions}>
            <Link href={`/${locale}/pricing`} className={styles.pricingTeaserCta}>
              See full pricing →
            </Link>
            <Link href={`/${locale}/contact?subject=Free Sample Request`} className={styles.pricingTeaserSample}>
              Want to taste first? Request a free sample kit →
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <section className={styles.faqPreview} aria-labelledby="faq-preview-heading">
        <motion.div className={styles.faqPreviewInner} {...staggerParent}>
          <motion.h2 id="faq-preview-heading" className={styles.lightSectionTitle} {...fadeChild}>
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
            {TRUST_LOGOS.map(({ file, name, href }) => (
              <motion.div key={file} className={styles.trustedByLogoWrap} role="listitem" {...fadeChild}>
                <a href={href} target="_blank" rel="noopener noreferrer" className={styles.trustedByLogoLink} aria-label={name}>
                  <Image
                    src={`/logos/${file}.png`}
                    alt={t("trustedBy.logoAlt", { name })}
                    width={360}
                    height={140}
                    loading="lazy"
                    sizes="(max-width: 639px) 45vw, (max-width: 1023px) 33vw, 340px"
                    className={styles.trustedByLogo}
                  />
                </a>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ── Trust line + Instagram callout ── */}
      {/* TODO (owner): verify "500+ Canadian brands" count is still accurate */}
      <section className={styles.trustLine} aria-label="Social proof">
        <div className={styles.trustLineInner}>
          <p className={styles.trustLineText}>
            Trusted by <strong>Fairmont, Café Public, Tunnel Espresso</strong>, and 500+ Canadian brands.
          </p>
          <a
            href="https://www.instagram.com/ezpz.coffee/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.trustLineInstagram}
          >
            See what brands are making → <strong>@ezpz.coffee</strong>
          </a>
        </div>
      </section>

      {/* ── Case studies ── */}
      <section style={{ background: "#f8f7f5", borderTop: "1px solid #e8e8e8", padding: "var(--spacing-galaxy) var(--spacing-state)" }}>
        <motion.div style={{ maxWidth: "1060px", margin: "0 auto" }} {...staggerParent}>
          <motion.p {...fadeChild} style={{ fontSize: "0.72rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.18em", color: "var(--color-accent)", marginBottom: "0.75rem" }}>
            Client Stories
          </motion.p>
          <motion.h2 {...fadeChild} style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 800, color: "#111111", marginBottom: "2rem", lineHeight: 1.15 }}>
            See how real brands do it.
          </motion.h2>
          <motion.div {...fadeChild} style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1.25rem" }}>

            {/* Café Public */}
            <Link
              href={`/${locale}/blog/cafe-public-ezpz-custom-coffee-bags-case-study`}
              style={{ display: "flex", flexDirection: "column", background: "#ffffff", border: "1px solid #e8e8e8", borderRadius: "8px", overflow: "hidden", textDecoration: "none", color: "inherit", transition: "box-shadow 0.2s ease" }}
            >
              <div style={{ height: "200px", overflow: "hidden", background: "#f0ece6", flexShrink: 0 }}>
                <img
                  src="/assets/blog/cafe-public-case-study.webp"
                  alt="Café Public × EZPZ — Mélange Café Public"
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              </div>
              <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem", flex: 1 }}>
                <span style={{ fontSize: "0.7rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--color-accent)" }}>Café Public × EZPZ</span>
                <h3 style={{ fontSize: "1rem", fontWeight: 800, color: "#111111", margin: 0, lineHeight: 1.35 }}>
                  How Café Public Launched Their Own Branded Coffee With EZPZ
                </h3>
                <p style={{ fontSize: "0.83rem", color: "#6b7280", margin: 0, lineHeight: 1.65, flex: 1 }}>
                  From concept to shelf in weeks. One of Quebec&apos;s most exciting specialty coffee platforms creates their signature blend — zero complications.
                </p>
                <span style={{ fontSize: "0.82rem", fontWeight: 700, color: "var(--color-accent)", marginTop: "0.5rem" }}>
                  Read the case study →
                </span>
              </div>
            </Link>

            {/* Osler Records */}
            <Link
              href={`/${locale}/blog/osler-records-ezpz-custom-coffee-bags-case-study`}
              style={{ display: "flex", flexDirection: "column", background: "#ffffff", border: "1px solid #e8e8e8", borderRadius: "8px", overflow: "hidden", textDecoration: "none", color: "inherit", transition: "box-shadow 0.2s ease" }}
            >
              <div style={{ height: "200px", overflow: "hidden", background: "#b8c832", flexShrink: 0 }}>
                <img
                  src="/assets/blog/osler-records-case-study.png"
                  alt="Osler Records × EZPZ — House Blend"
                  style={{ width: "100%", height: "100%", objectFit: "contain", display: "block", padding: "1rem" }}
                />
              </div>
              <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem", flex: 1 }}>
                <span style={{ fontSize: "0.7rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--color-accent)" }}>Osler Records × EZPZ</span>
                <h3 style={{ fontSize: "1rem", fontWeight: 800, color: "#111111", margin: 0, lineHeight: 1.35 }}>
                  How Osler Records Launched Their Own House Blend With EZPZ
                </h3>
                <p style={{ fontSize: "0.83rem", color: "#6b7280", margin: 0, lineHeight: 1.65, flex: 1 }}>
                  Toronto&apos;s Junction Triangle music venue and coffee bar created their own branded House Blend — roasted fresh in Montreal, on the shelf in weeks.
                </p>
                <span style={{ fontSize: "0.82rem", fontWeight: 700, color: "var(--color-accent)", marginTop: "0.5rem" }}>
                  Read the case study →
                </span>
              </div>
            </Link>

          </motion.div>
        </motion.div>
      </section>

    </div>
  );
};

export default HomeLanding;
